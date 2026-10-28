// Execute the actual reference projects and learner starter tests using a shared
// dependency installation. No project code is evaluated in the host web server.
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve, dirname, join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fullstackCurriculum } from '../src/fullstack/curriculum.js';
import { packageFile } from '../src/fullstack/templates.js';

const root = resolve('tmp/template-validation');
await mkdir(root, { recursive: true });
await writeFile(join(root, 'package.json'), packageFile);
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const install = spawnSync(npm, ['install', '--no-audit', '--no-fund'], { cwd: root, stdio: 'inherit', shell: process.platform === 'win32' });
if (install.status) process.exit(install.status);
const mode = process.argv.includes('--starters') ? 'starter' : 'solution';
const seen = new Set();
let failed = 0, tested = 0;
for (const item of fullstackCurriculum) {
  if (item.runtime === 'external') { console.log('EXTERNAL', item.id, 'verified separately with XAMPP/MySQL or Docker'); continue; }
  const files = item[mode];
  const key = JSON.stringify(files);
  if (seen.has(key)) continue;
  seen.add(key);
  const dir = join(root, mode, item.id);
  for (const [path, content] of Object.entries(files)) {
    const absolute = join(dir, path);
    await mkdir(dirname(absolute), { recursive: true });
    await writeFile(absolute, content);
  }
  const result = spawnSync(process.execPath, [join(root, 'node_modules/vitest/vitest.mjs'), 'run', '--pool=forks', '--maxWorkers=1', '--minWorkers=1'], { cwd: dir, encoding: 'utf8', timeout: 45000 });
  const success = mode === 'solution' ? result.status === 0 : result.status !== 0 && result.status !== null;
  tested++;
  console.log(success ? 'PASS' : 'FAIL', mode, item.id, item.title);
  if (!success) { failed++; console.log(result.stdout, result.stderr, result.error || ''); }
}
console.log(`${tested - failed}/${tested} unique ${mode} projects met expectations`);
process.exitCode = failed ? 1 : 0;
