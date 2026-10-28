// Reproduce the instructions on disk, without borrowing the app's node_modules.
import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { spawn, spawnSync } from 'node:child_process';
import { createServer } from 'node:net';
import { chromium } from '@playwright/test';
import { setupStages } from '../src/fullstack/setupGuideData.js';
import { setupBoardFiles } from '../src/fullstack/guidedProjects.js';

const root = resolve('tmp/beginner-journey-slides-js');
const nodeDir = join(root, 'my-first-node');
const webDir = join(root, 'my-first-fullstack');
const frontendDir = join(webDir, 'frontend');
const backendDir = join(webDir, 'backend');
const npmCli = process.env.npm_execpath || join(dirname(process.execPath), 'node_modules/npm/bin/npm-cli.js');
const children = new Set();
let browser;
await mkdir(nodeDir, { recursive: true });
function npm(args, cwd) {
  const result = spawnSync(process.execPath, [npmCli, ...args], { cwd, encoding: 'utf8', timeout: 180000 });
  if (result.status !== 0) throw new Error((result.stdout || '') + (result.stderr || '') + (result.error || ''));
  return result.stdout;
}
async function write(files, cwd) {
  for (const [path, content] of Object.entries(files)) {
    await mkdir(dirname(join(cwd, path)), { recursive: true });
    await writeFile(join(cwd, path), content);
  }
}
async function freePort() {
  const socket = createServer(); await new Promise(resolve => socket.listen(0, '127.0.0.1', resolve));
  const port = socket.address().port; await new Promise(resolve => socket.close(resolve)); return port;
}
function run(args, cwd, env = {}) {
  const child = spawn(process.execPath, args, { cwd, env: { ...process.env, ...env }, stdio: ['ignore', 'pipe', 'pipe'] });
  children.add(child); let output = '';
  child.stdout.on('data', data => { output += data; }); child.stderr.on('data', data => { output += data; });
  child.on('exit', () => children.delete(child));
  return { child, output: () => output };
}
async function ready(url, process) {
  for (let attempt = 0; attempt < 80; attempt++) {
    if (process.child.exitCode !== null) throw new Error(process.output());
    try { const response = await fetch(url, { signal: AbortSignal.timeout(1000) }); if (response.ok) return response; } catch { /* retry startup */ }
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  throw new Error('Server did not become ready: ' + url + '\n' + process.output());
}
async function stop(process) {
  if (process.child.exitCode !== null) return;
  await new Promise(resolve => { process.child.once('exit', resolve); process.child.kill(); });
}
try {
  console.log('1. npm init and first Node program');
  npm(['init', '-y'], nodeDir);
  const pkg = JSON.parse(await readFile(join(nodeDir, 'package.json'), 'utf8'));
  assert.ok(pkg.name); assert.ok(pkg.scripts.test);
  await write(setupStages.find(stage => stage.id === 'hello').files, nodeDir);
  const hello = spawnSync(process.execPath, ['hello.js'], { cwd: nodeDir, encoding: 'utf8' });
  assert.equal(hello.status, 0); assert.equal(hello.stdout.trim(), 'Hello Node, Mali');
  npm(['install', 'express@4', '--no-audit', '--no-fund'], nodeDir);
  assert.ok(JSON.parse(await readFile(join(nodeDir, 'package.json'), 'utf8')).dependencies.express);
  // Use a free test port, leaving the learner's :3000 processes untouched.
  const apiPort = await freePort();
  await write({ 'server.js': setupStages.find(stage => stage.id === 'express').files['server.js'].replace('app.listen(3000', 'app.listen(' + apiPort) }, nodeDir);
  const api = run(['server.js'], nodeDir);
  assert.deepEqual(await (await ready('http://127.0.0.1:' + apiPort + '/api/health', api)).json(), { ok: true });
  await stop(api);
  console.log('PASS npm init, install, hello.js and Express HTTP');

  console.log('2. create a real Vite React scaffold');
  await mkdir(webDir, {recursive:true});
  try { await readFile(join(frontendDir, 'package.json')); } catch {
    npm(['create', 'vite@9.3.3', 'frontend', '--', '--template', 'react', '--no-interactive'], webDir);
  }
  for (const path of ['src/main.jsx', 'src/App.jsx', 'index.html', 'vite.config.js']) assert.ok(await readFile(join(frontendDir, path), 'utf8'));
  npm(['install', '--no-audit', '--no-fund'], frontendDir);
  await write(setupStages.find(stage => stage.id === 'react').files, webDir);
  await mkdir(backendDir,{recursive:true});
  npm(['init','-y'],backendDir);
  npm(['install', 'express@4', '--no-audit', '--no-fund'], backendDir);
  await write(setupStages.find(stage => stage.id === 'connect').files, webDir);
  for (const [path, content] of Object.entries(setupStages.find(stage => stage.id === 'board').files)) await write({ [path]: content }, webDir);
  const webPort = await freePort();
  await write({ 'frontend/vite.config.js': setupStages.find(stage => stage.id === 'connect').files['frontend/vite.config.js'].replace('127.0.0.1:3000', '127.0.0.1:' + apiPort) }, webDir);
  const backend = run(['server.js'], backendDir, { PORT: String(apiPort) });
  const web = run([join(frontendDir, 'node_modules/vite/bin/vite.js'), '--host', '127.0.0.1', '--port', String(webPort), '--strictPort'], frontendDir);
  await ready('http://127.0.0.1:' + apiPort + '/api/tasks', backend);
  const origin = 'http://127.0.0.1:' + webPort;
  await ready(origin, web);
  assert.equal((await (await fetch(origin + '/api/tasks')).json())[0].title, 'เรียน Node');
  browser = await chromium.launch({ ...(process.platform === 'win32' ? { executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' } : {}) });
  const page = await browser.newPage(); const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(origin);
  await page.getByText('เรียน Node', { exact: true }).waitFor();
  await page.getByLabel('ชื่องาน', { exact: true }).fill('งานจากโครง Vite จริง');
  await page.getByRole('button', { name: 'เพิ่มงาน', exact: true }).click();
  await page.getByText('งานจากโครง Vite จริง', { exact: true }).waitFor();
  await page.getByRole('button', { name: 'สลับสถานะ งานจากโครง Vite จริง', exact: true }).click();
  await page.getByRole('button', { name: 'สลับสถานะ งานจากโครง Vite จริง', exact: true }).filter({ hasText: 'ทำต่อ' }).waitFor();
  await page.reload();
  await page.getByRole('button', { name: 'สลับสถานะ งานจากโครง Vite จริง', exact: true }).filter({ hasText: 'ทำต่อ' }).waitFor();
  await page.getByRole('button', { name: 'ลบ งานจากโครง Vite จริง', exact: true }).click();
  await page.getByText('งานจากโครง Vite จริง', { exact: true }).waitFor({ state: 'detached' });
  await page.setViewportSize({ width: 390, height: 844 });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
  await page.screenshot({ path: resolve('tmp/beginner-created-project.png'), fullPage: true });
  assert.deepEqual(errors, []);
  await browser.close(); browser = null;
  await stop(web); await stop(backend);
  console.log('PASS Vite scaffold + copied instructions + real UI create/update/delete/reload + mobile');

  console.log('3. exported src/ project with its own fresh installation and tests');
  const exported = join(root, 'exported-task-board'); await mkdir(exported, { recursive: true }); await write(setupBoardFiles, exported);
  npm(['install', '--no-audit', '--no-fund'], exported);
  console.log(npm(['test'], exported));
  npm(['run', 'build'], exported);
  console.log('PASS exported project install, API/UI tests and production build');
} finally {
  if (browser) await browser.close();
  await Promise.allSettled([...children].map(child => new Promise(resolve => { child.once('exit', resolve); child.kill(); })));
}
