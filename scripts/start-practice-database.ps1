param(
  [string]$XamppRoot = 'D:\xampp1',
  [int]$Port = 33307
)
$ErrorActionPreference = 'Stop'
$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$dbRoot = Join-Path $projectRoot 'tmp\fullstack-db'
$dataRoot = Join-Path $dbRoot 'data'
$validationRoot = Join-Path $projectRoot 'tmp\prisma-validation'
$mysqlServer = Join-Path $XamppRoot 'mysql\bin\mysqld.exe'
$mysqlClient = Join-Path $XamppRoot 'mysql\bin\mysql.exe'
$mysqlInstaller = Join-Path $XamppRoot 'mysql\bin\mysql_install_db.exe'
if (!(Test-Path -LiteralPath $mysqlServer)) { throw "MySQL/MariaDB not found under $XamppRoot" }
if (!$dataRoot.StartsWith($projectRoot + '\', [StringComparison]::OrdinalIgnoreCase)) { throw 'Database path must stay inside this workspace' }
New-Item -ItemType Directory -Force -Path $dbRoot,$validationRoot | Out-Null
if (!(Test-Path -LiteralPath (Join-Path $dataRoot 'mysql'))) {
  & $mysqlInstaller "--datadir=$dataRoot" "--port=$Port" --silent
  if ($LASTEXITCODE -ne 0) { throw 'Could not initialize practice database' }
}
$listener = Get-NetTCPConnection -State Listen -LocalPort $Port -ErrorAction SilentlyContinue
if ($listener) {
  $existing = Get-CimInstance Win32_Process -Filter "ProcessId=$($listener[0].OwningProcess)"
  if ($existing.ExecutablePath -ne $mysqlServer -or $existing.CommandLine.Replace('/', '\') -notlike "*$dbRoot*") {
    throw "Port $Port belongs to another process; the script will not touch it"
  }
} else {
  $dbConfig = Join-Path $dataRoot 'my.ini'
  $dbProcess = Start-Process -FilePath $mysqlServer -ArgumentList @("--defaults-file=`"$dbConfig`"",'--standalone','--bind-address=127.0.0.1','--console') -WindowStyle Hidden -RedirectStandardOutput (Join-Path $dbRoot 'stdout.log') -RedirectStandardError (Join-Path $dbRoot 'stderr.log') -PassThru
  $dbProcess.Id | Set-Content (Join-Path $dbRoot 'process-id.txt')
  for ($attemptIndex = 0; $attemptIndex -lt 30; $attemptIndex++) {
    if (Get-NetTCPConnection -State Listen -LocalPort $Port -ErrorAction SilentlyContinue) { break }
    Start-Sleep -Milliseconds 200
  }
}
$envFile = Join-Path $validationRoot '.env'
if (!(Test-Path -LiteralPath $envFile)) {
  $practicePassword = 'practice-' + [guid]::NewGuid().ToString('N')
  $sql = "CREATE DATABASE IF NOT EXISTS fullstack_lab CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; CREATE USER IF NOT EXISTS 'fullstack_student'@'127.0.0.1' IDENTIFIED BY '$practicePassword'; GRANT ALL PRIVILEGES ON fullstack_lab.* TO 'fullstack_student'@'127.0.0.1';"
  $sql | & $mysqlClient --protocol=tcp --host=127.0.0.1 "--port=$Port" --user=root
  if ($LASTEXITCODE -ne 0) { throw 'Could not create scoped practice account' }
  "DATABASE_URL=mysql://fullstack_student:${practicePassword}@127.0.0.1:$Port/fullstack_lab" | Set-Content $envFile
}
Write-Output "Practice MariaDB ready: 127.0.0.1:$Port / fullstack_lab"
Write-Output 'Run: node scripts/verify-fullstack-database.mjs'
