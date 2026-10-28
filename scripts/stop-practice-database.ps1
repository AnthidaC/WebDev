param([int]$Port = 33307)
$ErrorActionPreference = 'Stop'
$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$dbRoot = Join-Path $projectRoot 'tmp\fullstack-db'
$pidFile = Join-Path $dbRoot 'process-id.txt'
if (!(Test-Path -LiteralPath $pidFile)) { Write-Output 'No owned practice database process recorded'; exit }
$practiceProcessId = [int](Get-Content -LiteralPath $pidFile)
$practiceProcess = Get-CimInstance Win32_Process -Filter "ProcessId=$practiceProcessId"
if (!$practiceProcess) { Write-Output 'Practice database is already stopped'; exit }
if ($practiceProcess.Name -ne 'mysqld.exe' -or $practiceProcess.CommandLine.Replace('/', '\') -notlike "*$dbRoot*") {
  throw 'PID no longer belongs to this workspace database; it will not be stopped'
}
$mysqlAdmin = Join-Path (Split-Path $practiceProcess.ExecutablePath) 'mysqladmin.exe'
& $mysqlAdmin --protocol=tcp --host=127.0.0.1 "--port=$Port" --user=root shutdown
if ($LASTEXITCODE -ne 0) { throw 'Graceful shutdown failed' }
Write-Output 'Practice database stopped; all data retained in tmp/fullstack-db/data'
