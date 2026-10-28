// Templates are authored for the course, not copied slide code.
const json = (value) => JSON.stringify(value, null, 2) + '\n';
export const dependencies = {
  react: '18.3.1', 'react-dom': '18.3.1', 'react-router-dom': '6.30.1',
  axios: '1.13.2', express: '4.21.2', cors: '2.8.5', dotenv: '16.6.1',
  bcryptjs: '3.0.2', jsonwebtoken: '9.0.2', 'sql.js': '1.13.0',
};
export const packageFile = json({
  name: 'fullstack-practice', type: 'module', version: '1.0.0', private: true,
  scripts: {
    dev: 'concurrently -k "npm:dev:api" "npm:dev:web"',
    'dev:api': 'nodemon --watch backend --ext js,json backend/server.js',
    'dev:web': 'vite --host 0.0.0.0 --port 5173 --strictPort',
    test: 'vitest run --pool=threads --maxWorkers=1 --minWorkers=1',
    build: 'vite build',
  },
  dependencies,
  devDependencies: { vite: '6.4.1', '@vitejs/plugin-react': '4.7.0', concurrently: '9.2.1', nodemon: '3.1.11', vitest: '3.2.4', jsdom: '25.0.1', '@testing-library/react': '16.3.0' },
});

export const styles = `:root { font-family: system-ui, sans-serif; color: #182c2b; background: #f2f6f4; }
* { box-sizing: border-box; }
body { margin: 0; }
main { max-width: 800px; margin: 40px auto; padding: 28px; background: white; border-radius: 16px; }
h1 { letter-spacing: -1px; } nav { display: flex; gap: 20px; margin-bottom: 24px; }
a { color: #087f6c; } label { display: grid; gap: 6px; margin: 12px 0; }
input, select, button { font: inherit; padding: 10px 14px; border: 1px solid #ccd9d2; border-radius: 8px; }
button { cursor: pointer; background: #087f6c; color: white; margin: 4px; }
button:disabled { opacity: .5; } ul { padding: 0; list-style: none; }
li, article { padding: 16px; border: 1px solid #dce6df; border-radius: 10px; margin: 12px 0; }
.grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(180px,1fr)); gap: 12px; }
[role=alert] { color: #bb3544; } small { color: #587268; }
@media(max-width:600px) { main { margin: 12px; padding: 18px; } }
`;

export const baseFiles = {
  'backend/package.json': json({ private: true, type: 'commonjs' }),
  'scripts/package.json': json({ private: true, type: 'commonjs' }),
  'prisma/package.json': json({ private: true, type: 'commonjs' }),
  'package.json': packageFile,
  'index.html': '<!doctype html><html lang="th"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>My practice project</title></head><body><div id="root"></div><script type="module" src="/frontend/main.jsx"></script></body></html>',
  'vite.config.js': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({ plugins: [react()], server: { proxy: { '/api': 'http://127.0.0.1:3000' } }, test: { include: ['tests/**/*.test.{js,jsx}'], testTimeout: 10000 } });
`,
  'frontend/main.jsx': `import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
createRoot(document.getElementById('root')).render(<App />);
`,
  'frontend/App.jsx': `export default function App() {
  return <main><small>MY FIRST FULL STACK PROJECT</small><h1>Hello Full Stack</h1><p>เริ่มแก้ไข frontend/App.jsx แล้วกดรันโปรเจกต์</p></main>;
}
`,
  'frontend/styles.css': styles,
  'backend/server.js': `const app = require('./app.js');
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => console.log('API ready on port ' + port));
`,
  'backend/app.js': `const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/health', (req, res) => res.json({ ok: true }));
module.exports = app;
`,
  'README.md': `# โปรเจกต์ฝึก Full Stack\n\nระบบเตรียม dependencies ให้อัตโนมัติเมื่อกดรันครั้งแรก\n\n- frontend/ : React, JSX และ CSS\n- backend/ : Express API ที่ port 3000\n- tests/ : เกณฑ์ตรวจอัตโนมัติ (ไม่รวมทุกเกณฑ์ที่ต้องลองเอง)\n- npm run dev : เปิด frontend และ backend\n- npm test : ตรวจพฤติกรรมตามโจทย์\n\nเรียก API ผ่าน /api เพื่อให้ Vite proxy ส่งไป backend\nฐานข้อมูลในบทฝึกเบื้องต้นเป็นข้อมูลในหน่วยความจำ รีสตาร์ตแล้วกลับค่าเริ่มต้น\n`,
};

export function uiTest(body) {
  return `// @vitest-environment jsdom
import React from 'react';
import { afterEach, test, expect, vi } from 'vitest';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import App from '../frontend/App.jsx';
afterEach(() => { cleanup(); vi.unstubAllGlobals(); });
${body}
`;
}
export function apiTest(body) {
  return `import { beforeAll, afterAll, test, expect } from 'vitest';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const app = require('../backend/app.js');
let server, base;
beforeAll(async () => {
  server = app.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  base = 'http://127.0.0.1:' + server.address().port;
});
afterAll(() => new Promise(resolve => server.close(resolve)));
const request = (path, method = 'GET', data, token) => fetch(base + path, {
  method, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: 'Bearer ' + token } : {}) },
  ...(data === undefined ? {} : { body: JSON.stringify(data) })
});
${body}
`;
}

export const customersController = `let customers = [{ id: 1, name: 'Mali', email: 'mali@example.com' }];
let nextId = 2;
exports.list = (req, res) => {
  const keyword = String(req.query.keyword || '').toLowerCase();
  res.json(customers.filter(c => c.name.toLowerCase().includes(keyword)));
};
exports.get = (req, res) => {
  const item = customers.find(c => c.id === Number(req.params.id));
  return item ? res.json(item) : res.status(404).json({ message: 'Not found' });
};
exports.create = (req, res) => {
  const { name, email } = req.body;
  if (!name?.trim() || !email?.includes('@')) return res.status(400).json({ message: 'Name and valid email required' });
  const item = { id: nextId++, name: name.trim(), email };
  customers.push(item);
  res.status(201).json(item);
};
exports.update = (req, res) => {
  const item = customers.find(c => c.id === Number(req.params.id));
  if (!item) return res.status(404).json({ message: 'Not found' });
  if (!req.body.name?.trim() || !req.body.email?.includes('@')) return res.status(400).json({ message: 'Invalid input' });
  Object.assign(item, { name: req.body.name.trim(), email: req.body.email });
  res.json(item);
};
exports.remove = (req, res) => {
  const index = customers.findIndex(c => c.id === Number(req.params.id));
  if (index < 0) return res.status(404).json({ message: 'Not found' });
  customers.splice(index, 1);
  res.json({ message: 'Deleted' });
};
`;
export const customerRoutes = `const router = require('express').Router();
const controller = require('../controllers/customers.js');
router.get('/', controller.list);
router.get('/search', controller.list);
router.get('/:id', controller.get);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);
module.exports = router;
`;
export const customerFiles = {
  'backend/app.js': baseFiles['backend/app.js'].replace('module.exports = app;', `app.use('/api/customers', require('./routes/customers.js'));
module.exports = app;`),
  'backend/controllers/customers.js': customersController,
  'backend/routes/customers.js': customerRoutes,
  'frontend/services/customerApi.js': `import axios from 'axios';
const url = '/api/customers';
export const customerApi = {
  list: async () => (await axios.get(url)).data,
  create: async (data) => (await axios.post(url, data)).data,
  update: async (id, data) => (await axios.put(url + '/' + id, data)).data,
  remove: async (id) => (await axios.delete(url + '/' + id)).data,
};
`,
  'frontend/App.jsx': `import { useState, useEffect } from 'react';
import { customerApi } from './services/customerApi';
export default function App() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  async function load() { setCustomers(await customerApi.list()); }
  useEffect(() => { load().catch(() => setError('โหลดข้อมูลไม่สำเร็จ')).finally(() => setLoading(false)); }, []);
  async function submit(e) {
    e.preventDefault(); setError(''); setBusy(true);
    try {
      if (editing !== null) await customerApi.update(editing, { name, email });
      else await customerApi.create({ name, email });
      await load(); setName(''); setEmail(''); setEditing(null);
    } catch { setError('บันทึกไม่สำเร็จ กรุณาตรวจข้อมูล'); }
    finally { setBusy(false); }
  }
  async function remove(id) {
    try { await customerApi.remove(id); await load(); }
    catch { setError('ลบไม่สำเร็จ'); }
  }
  return <main><small>CUSTOMER WORKSPACE</small><h1>จัดการลูกค้า</h1>
    {error && <p role="alert">{error}</p>}
    <form onSubmit={submit}>
      <label>ชื่อ<input required value={name} onChange={e => setName(e.target.value)} /></label>
      <label>อีเมล<input required type="email" value={email} onChange={e => setEmail(e.target.value)} /></label>
      <button disabled={busy}>{editing !== null ? 'บันทึกการแก้ไข' : 'เพิ่มลูกค้า'}</button>
    </form>
    {loading ? <p>กำลังโหลด...</p> : <ul>{customers.map(c => <li key={c.id}>
      <strong>{c.name}</strong> — {c.email}
      <button onClick={() => { setEditing(c.id); setName(c.name); setEmail(c.email); }}>แก้ไข</button>
      <button onClick={() => remove(c.id)}>ลบ</button>
    </li>)}</ul>}
  </main>;
}
`,
};
export const crudTests = apiTest(`test('CRUD, search, validation and missing IDs', async () => {
  expect((await request('/api/customers', 'POST', {})).status).toBe(400);
  const created = await request('/api/customers', 'POST', { name: 'Somchai', email: 's@example.com' });
  expect(created.status).toBe(201);
  const item = await created.json();
  expect((await (await request('/api/customers/' + item.id)).json()).name).toBe('Somchai');
  expect((await (await request('/api/customers/search?keyword=Som')).json()).some(c => c.id === item.id)).toBe(true);
  expect((await request('/api/customers/' + item.id, 'PUT', { name: 'Updated', email: 'u@example.com' })).status).toBe(200);
  expect((await (await request('/api/customers/' + item.id)).json()).name).toBe('Updated');
  expect((await request('/api/customers/' + item.id, 'DELETE')).status).toBe(200);
  expect((await request('/api/customers/' + item.id)).status).toBe(404);
  expect((await request('/api/customers/999999', 'DELETE')).status).toBe(404);
});`);
export const customerUiTests = uiTest(`import { customerApi } from '../frontend/services/customerApi';
vi.mock('../frontend/services/customerApi', () => ({ customerApi: { list: vi.fn(), create: vi.fn(), update: vi.fn(), remove: vi.fn() } }));
test('loads and creates a customer through the service', async () => {
  customerApi.list.mockResolvedValueOnce([{ id: 1, name: 'Mali', email: 'm@example.com' }]).mockResolvedValue([{ id: 2, name: 'New', email: 'n@example.com' }]);
  customerApi.create.mockResolvedValue({ id: 2 });
  render(<App />);
  await screen.findByText('Mali');
  fireEvent.change(screen.getByLabelText('ชื่อ'), { target: { value: 'New' } });
  fireEvent.change(screen.getByLabelText('อีเมล'), { target: { value: 'n@example.com' } });
  fireEvent.click(screen.getByRole('button', { name: 'เพิ่มลูกค้า' }));
  await waitFor(() => expect(customerApi.create).toHaveBeenCalledWith({ name: 'New', email: 'n@example.com' }));
  await screen.findByText('New');
});
test('shows a request error', async () => {
  customerApi.list.mockRejectedValue(new Error('offline'));
  render(<App />);
  expect(await screen.findByRole('alert')).toBeTruthy();
});`);

export const authFiles = {
  'backend/auth-store.js': 'module.exports = { users: [], nextId: 1 };\n',
  'backend/middleware/verifyToken.js': `const jwt = require('jsonwebtoken');
const secret = process.env.JWT_KEY || 'practice-only-change-this-key';
module.exports = function verifyToken(req, res, next) {
  const header = req.headers.authorization || '';
  if (!header.startsWith('Bearer ')) return res.status(401).json({ message: 'Token required' });
  try { req.user = jwt.verify(header.slice(7), secret); next(); }
  catch { return res.status(401).json({ message: 'Invalid or expired token' }); }
};
`,
  'backend/routes/auth.js': `const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const store = require('../auth-store.js');
const verifyToken = require('../middleware/verifyToken.js');
const secret = process.env.JWT_KEY || 'practice-only-change-this-key';
router.post('/register', async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName?.trim() || !email?.includes('@') || typeof password !== 'string' || password.length < 8)
    return res.status(400).json({ message: 'ชื่อ อีเมล และรหัสผ่านอย่างน้อย 8 ตัวอักษร' });
  const passwordHash = await bcrypt.hash(password, 10);
  // Recheck after the await so simultaneous requests cannot register duplicates.
  if (store.users.some(u => u.userName === userName || u.email === email))
    return res.status(409).json({ message: 'Duplicate username or email' });
  store.users.push({ id: store.nextId++, userName, email, passwordHash, role: 'user' });
  res.status(201).json({ message: 'Registered' });
});
router.post('/login', async (req, res) => {
  const user = store.users.find(u => u.userName === req.body.userName);
  if (!user || typeof req.body.password !== 'string' || !await bcrypt.compare(req.body.password, user.passwordHash))
    return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ userId: user.id, role: user.role }, secret, { expiresIn: '1h' });
  res.json({ token });
});
router.get('/me', verifyToken, (req, res) => {
  const user = store.users.find(u => u.id === req.user.userId);
  if (!user) return res.status(401).json({ message: 'Unknown user' });
  res.json({ id: user.id, userName: user.userName, role: user.role });
});
module.exports = router;
`,
  'backend/app.js': baseFiles['backend/app.js'].replace('module.exports = app;', `app.use('/api/auth', require('./routes/auth.js'));
module.exports = app;`),
  'frontend/App.jsx': `import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function AuthForm({ register = false }) {
  const [inputs, setInputs] = useState({ userName: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  async function submit(e) {
    e.preventDefault(); setError('');
    try {
      const { data } = await axios.post('/api/auth/' + (register ? 'register' : 'login'), inputs);
      if (register) navigate('/login');
      else { sessionStorage.setItem('practice-token', data.token); navigate('/'); }
    } catch (err) { setError(err.response?.data?.message || 'เชื่อมต่อไม่สำเร็จ'); }
  }
  return <form onSubmit={submit}><h1>{register ? 'สมัครสมาชิก' : 'เข้าสู่ระบบ'}</h1>
    {['userName', ...(register ? ['email'] : []), 'password'].map(key => <label key={key}>{key}<input required type={key === 'password' ? 'password' : key === 'email' ? 'email' : 'text'} value={inputs[key]} onChange={e => setInputs({ ...inputs, [key]: e.target.value })} /></label>)}
    <button>ยืนยัน</button>{error && <p role="alert">{error}</p>}
  </form>;
}
function Home() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  async function profile() {
    try { const { data } = await axios.get('/api/auth/me', { headers: { Authorization: 'Bearer ' + sessionStorage.getItem('practice-token') } }); setUser(data); setError(''); }
    catch { sessionStorage.removeItem('practice-token'); navigate('/login'); }
  }
  return <><h1>Member home</h1><button onClick={profile}>โหลดโปรไฟล์</button>
    {user && <p>สวัสดี {user.userName}</p>}{error && <p role="alert">{error}</p>}
    <button onClick={() => { sessionStorage.removeItem('practice-token'); setUser(null); navigate('/login'); }}>ออกจากระบบ</button></>;
}
export default function App() {
  return <BrowserRouter><main><nav><Link to="/">Home</Link><Link to="/login">Login</Link><Link to="/register">Register</Link></nav>
    <Routes><Route path="/" element={<Home />} /><Route path="/login" element={<AuthForm />} /><Route path="/register" element={<AuthForm register />} /><Route path="*" element={<h1>404</h1>} /></Routes>
  </main></BrowserRouter>;
}
`,
};
export const authTests = apiTest(`import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
const store = require('../backend/auth-store.js');
test('register, duplicate, hash, login, token and expiry', async () => {
  const input = { userName: 'exam', email: 'exam@example.com', password: 'password123' };
  expect((await request('/api/auth/register', 'POST', {})).status).toBe(400);
  expect((await request('/api/auth/register', 'POST', input)).status).toBe(201);
  expect((await request('/api/auth/register', 'POST', input)).status).toBe(409);
  const user = store.users.find(u => u.userName === input.userName);
  expect(user.role).toBe('user');
  expect(user.passwordHash).not.toBe(input.password);
  expect(await bcrypt.compare(input.password, user.passwordHash)).toBe(true);
  expect((await request('/api/auth/login', 'POST', { ...input, password: 'bad' })).status).toBe(401);
  expect((await request('/api/auth/me')).status).toBe(401);
  const login = await request('/api/auth/login', 'POST', input);
  expect(login.status).toBe(200);
  const { token } = await login.json();
  const me = await request('/api/auth/me', 'GET', undefined, token);
  expect(me.status).toBe(200);
  const profile = await me.json();
  expect(profile.userName).toBe('exam'); expect(profile.passwordHash).toBeUndefined();
  expect((await request('/api/auth/me', 'GET', undefined, token + 'tampered')).status).toBe(401);
  const expired = jwt.sign({ userId: user.id }, process.env.JWT_KEY || 'practice-only-change-this-key', { expiresIn: -1 });
  expect((await request('/api/auth/me', 'GET', undefined, expired)).status).toBe(401);
});`);

export function makeProject(overrides = {}) { return { ...baseFiles, ...overrides }; }
