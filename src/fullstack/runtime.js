import { toTree } from './workspace.js';

// One browser runtime at a time, serialized across lessons. Tear down the whole
// runtime when leaving a project so child processes/watchers cannot leak across it.
let instancePromise;
let queue = Promise.resolve();
let installedPackage = '';
let previousPaths = [];
const activeRuntimes = new Set();
const pendingExits = new Set();
const exclusive = fn => { const next = queue.then(fn, fn); queue = next.catch(() => {}); return next; };
async function container() {
  if (!globalThis.crossOriginIsolated) throw new Error('ยังเปิด Node runtime ไม่ได้: ต้องเปิดผ่าน localhost หรือ HTTPS ที่รองรับ cross-origin isolation ลองรีเฟรชหนึ่งครั้งหลังระบบเตรียม Service Worker');
  if (!instancePromise) {
    instancePromise = import('@webcontainer/api').then(({ WebContainer }) => WebContainer.boot({ coep: 'credentialless', workdirName: 'fullstack-lab', forwardPreviewErrors: true }));
    instancePromise.catch(() => { instancePromise = undefined; });
  }
  return instancePromise;
}
function output(process, write) { process.output.pipeTo(new WritableStream({ write })).catch(() => {}); }

export class ProjectRuntime {
  constructor({ write, onServer, onStatus, onError }) {
    Object.assign(this, { write, onServer, onStatus, onError });
    this.processes = new Set(); this.disposed = false; this.prepared = false; this.files = {};
    this.commandQueue = Promise.resolve();
    activeRuntimes.add(this);
  }
  async start(files) {
    if (!this.prepared) await this.prepare(files);
    else await this.sync(files);
    return this.startDev();
  }
  async prepare(files) {
    return exclusive(async () => {
      if (this.disposed) return;
      // A previous lesson may have just killed its dev server. Wait for its
      // process to release ports before mounting and starting the next project.
      if (pendingExits.size) await Promise.all([...pendingExits]);
      if (this.prepared) {
        await this.sync(files);
        await this.installPackage(files);
        this.onStatus(this.dev ? 'running' : 'ready');
        return;
      }
      this.onStatus('booting');
      this.wc = await container();
      if (this.disposed) return;
      this.offServer = this.wc.on('server-ready', (port, url) => { if (!this.disposed) { this.onServer(port, url); this.onStatus('running'); } });
      this.offError = this.wc.on('preview-message', message => { if (message.type === 'PREVIEW_UNCAUGHT_EXCEPTION' || message.type === 'PREVIEW_CONSOLE_ERROR') this.write('\r\n[preview] ' + message.message + '\r\n'); });
      const ownedRoots = [...new Set(previousPaths.map(path => path.split('/')[0]))];
      for (const path of ownedRoots) await this.wc.fs.rm(path, { force: true, recursive: true }).catch(() => {});
      await this.wc.mount(toTree(files));
      this.files = { ...files }; previousPaths = Object.keys(files);
      await this.installPackage(files);
      if (this.disposed) return;
      this.prepared = true;
      this.onStatus('ready');
    }).catch(error => { if (!this.disposed) { this.onStatus('error'); this.onError(error.message); } throw error; });
  }
  async installPackage(files) {
    if (installedPackage === files['package.json']) return;
    this.onStatus('installing'); this.write('\r\nเตรียมแพ็กเกจให้อัตโนมัติ (ครั้งแรกต้องใช้อินเทอร์เน็ต)...\r\n');
    const process = await this.spawn('npm', ['install', '--no-audit', '--no-fund']);
    const code = await process.exit;
    if (this.disposed) return;
    if (code !== 0) throw new Error('เตรียมแพ็กเกจไม่สำเร็จ ดูรายละเอียดใน Terminal แล้วลองรันใหม่');
    installedPackage = files['package.json'];
  }
  async startDev() {
    return exclusive(async () => {
      if (this.disposed) return;
      if (!this.prepared) throw new Error('เตรียมแพ็กเกจของโปรเจกต์ก่อนเปิด server');
      if (this.dev) return;
      this.shell = await this.spawn('jsh', [], { terminal: { cols: 90, rows: 14 } });
      this.writer = this.shell.input.getWriter();
      this.onStatus('starting');
      this.dev = await this.spawn('npm', ['run', 'dev']);
      this.dev.exit.then(code => { this.dev = null; if (!this.disposed) { this.onStatus('stopped'); this.onError('โปรเจกต์หยุดทำงาน (exit ' + code + ') ตรวจ Terminal แล้วกดรันใหม่'); } });
    }).catch(error => { if (!this.disposed) { this.onStatus('error'); this.onError(error.message); } throw error; });
  }
  async spawn(command, args, options) {
    if (this.disposed) throw new Error('Runtime closed');
    const process = await this.wc.spawn(command, args, options);
    if (this.disposed) { process.kill(); throw new Error('Runtime closed'); }
    this.processes.add(process); output(process, this.write);
    process.exit.finally(() => this.processes.delete(process));
    return process;
  }
  sync(files) {
    const apply = async () => {
      if (!this.wc || this.disposed) return;
      for (const path of Object.keys(this.files)) if (!Object.hasOwn(files, path)) await this.wc.fs.rm(path, { force: true });
      for (const path of Object.keys(files)) {
        if (this.files[path] !== files[path]) {
          if (Object.keys(this.files).some(old => old.startsWith(path + '/'))) await this.wc.fs.rm(path, { recursive: true, force: true });
          const parent = path.slice(0, path.lastIndexOf('/'));
          if (path.includes('/')) await this.wc.fs.mkdir(parent, { recursive: true });
          await this.wc.fs.writeFile(path, files[path]);
        }
      }
      this.files = { ...files }; previousPaths = Object.keys(files);
    };
    const pending = this.commandQueue.then(apply, apply);
    this.commandQueue = pending.catch(e => { this.onError('ซิงก์ไฟล์ไม่สำเร็จ: ' + e.message); });
    return pending;
  }
  async check(files) {
    await this.prepare(files);
    this.write('\r\n$ npm test\r\n');
    const p = await this.spawn('npm', ['test']);
    return await p.exit;
  }
  async request({ method, path, body, token }) {
    if (!this.wc || this.disposed) throw new Error('เปิดโปรเจกต์ก่อนส่ง request');
    const options = { method, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: 'Bearer ' + token } : {}) } };
    if (!['GET', 'HEAD'].includes(method)) options.body = body;
    // Request from the learner's Node process, as an API tool would, so preview
    // domain/service-worker initialization and browser CORS do not alter results.
    // Encode payload as hex so WebContainer's spawn argument parser never unescapes
    // nested quotes or newlines in JSON request bodies.
    const toHex = value => Array.from(new TextEncoder().encode(value), b => b.toString(16).padStart(2, '0')).join('');
    const script = `fetch(Buffer.from("${toHex('http://127.0.0.1:3000' + path)}","hex").toString(),{...JSON.parse(Buffer.from("${toHex(JSON.stringify(options))}","hex").toString()),signal:AbortSignal.timeout(12000)}).then(async r=>console.log(JSON.stringify({status:r.status,statusText:r.statusText,body:await r.text()}))).catch(e=>{console.error(e.message);process.exitCode=1;});`;
    const process = await this.wc.spawn('node', ['-e', script]);
    this.processes.add(process);
    let text = '';
    const reading = process.output.pipeTo(new WritableStream({ write(chunk) { text += chunk; } }));
    try {
      const code = await process.exit; await reading;
      if (code !== 0) throw new Error(text.trim() || 'Request failed');
      return JSON.parse(text.trim());
    } finally { this.processes.delete(process); }
  }
  input(data) { this.writer?.write(data).catch(() => {}); }
  resize(cols, rows) { this.shell?.resize({ cols, rows }); }
  async capture() {
    await this.commandQueue;
    if (!this.wc || this.disposed) return this.files;
    const files = {};
    const visit = async (dir = '') => {
      const entries = await this.wc.fs.readdir(dir || '.', { withFileTypes: true });
      for (const entry of entries) {
        if (['node_modules', '.git', 'dist', 'package-lock.json', '.vite'].includes(entry.name)) continue;
        const path = dir ? dir + '/' + entry.name : entry.name;
        if (entry.isDirectory()) await visit(path);
        else if (entry.isFile()) files[path] = await this.wc.fs.readFile(path, 'utf8');
      }
    };
    await visit(); this.files = files; previousPaths = Object.keys(files); return files;
  }
  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    activeRuntimes.delete(this);
    this.offServer?.(); this.offError?.();
    this.writer?.releaseLock();
    for (const p of this.processes) p.kill();
    const exiting = [...this.processes].map(p => p.exit);
    const pending = Promise.allSettled(exiting).then(() => exclusive(async () => {
      const wc = await instancePromise?.catch(() => undefined);
      wc?.teardown();
      if (instancePromise) instancePromise = undefined;
      installedPackage = '';
      previousPaths = [];
    }));
    pendingExits.add(pending);
    pending.finally(() => pendingExits.delete(pending));
  }
}

export async function shutdownProjectRuntime() {
  for (const runtime of [...activeRuntimes]) runtime.dispose();
  if (pendingExits.size) await Promise.all([...pendingExits]);
  await exclusive(async () => {
    const wc = await instancePromise?.catch(() => undefined);
    wc?.teardown();
    instancePromise = undefined;
    installedPackage = '';
    previousPaths = [];
  });
}
