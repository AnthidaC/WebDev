import { strictLoadingCheck } from './projectChecks.js';
import { baseFiles, makeProject, apiTest, uiTest } from './templates.js';

const hello = `// ไฟล์นี้รันด้วย Node ไม่ใช่ JSX ใน browser
const learner = 'Mali';
console.log('Hello Node, ' + learner);
`;
const taskApi = `const express = require('express');
const app = express();
app.use(express.json());
let tasks = [{ id: 1, title: 'เรียน Node', done: false }];
let nextId = 2;
app.get('/api/health', (req, res) => res.json({ ok: true }));
app.get('/api/tasks', (req, res) => res.json(tasks));
app.post('/api/tasks', (req, res) => {
  const title = typeof req.body.title === 'string' ? req.body.title.trim() : '';
  if (!title) return res.status(400).json({ message: 'กรุณากรอกชื่องาน' });
  const task = { id: nextId++, title, done: false };
  tasks.push(task);
  res.status(201).json(task);
});
app.patch('/api/tasks/:id', (req, res) => {
  const task = tasks.find(item => item.id === Number(req.params.id));
  if (!task) return res.status(404).json({ message: 'ไม่พบงาน' });
  if (typeof req.body.done !== 'boolean') return res.status(400).json({ message: 'done ต้องเป็น boolean' });
  task.done = req.body.done;
  res.json(task);
});
app.delete('/api/tasks/:id', (req, res) => {
  const index = tasks.findIndex(item => item.id === Number(req.params.id));
  if (index < 0) return res.status(404).json({ message: 'ไม่พบงาน' });
  tasks.splice(index, 1);
  res.status(204).end();
});
module.exports = app;
`;
const listUi = `import { useEffect, useState } from 'react';
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/tasks', { signal: controller.signal })
      .then(response => { if (!response.ok) throw new Error('โหลดงานไม่สำเร็จ'); return response.json(); })
      .then(setTasks)
      .catch(error => { if (error.name !== 'AbortError') setError(error.message); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, []);
  return <main><h1>My Task Board</h1>
    {loading && <p>กำลังโหลด...</p>}
    {error && <p role="alert">{error}</p>}
    <ul>{tasks.map(task => <li key={task.id}>{task.title}</li>)}</ul>
  </main>;
}
`;
export const taskBoardUi = `import { useEffect, useState } from 'react';
async function request(path, options = {}) {
  const response = await fetch(path, options);
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.message || 'ติดต่อ API ไม่สำเร็จ');
  }
  return response.status === 204 ? null : response.json();
}
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    request('/api/tasks', { signal: controller.signal }).then(setTasks)
      .catch(error => { if (error.name !== 'AbortError') setError(error.message); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, []);
  async function add(event) {
    event.preventDefault();
    if (!title.trim()) { setError('กรุณากรอกชื่องาน'); return; }
    setBusy(true); setError('');
    try {
      const task = await request('/api/tasks', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: title.trim() }) });
      setTasks(current => [...current, task]); setTitle('');
    } catch (error) { setError(error.message); }
    finally { setBusy(false); }
  }
  async function change(task, remove = false) {
    setBusy(true); setError('');
    try {
      const updated = await request('/api/tasks/' + task.id, remove ? { method: 'DELETE' } : { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ done: !task.done }) });
      setTasks(current => remove ? current.filter(item => item.id !== task.id) : current.map(item => item.id === task.id ? updated : item));
    } catch (error) { setError(error.message); }
    finally { setBusy(false); }
  }
  return <main><h1>My Task Board</h1>
    {loading && <p>กำลังโหลด...</p>}
    {error && <p role="alert">{error}</p>}
    <form onSubmit={add}><label>ชื่องาน<input value={title} onChange={event => setTitle(event.target.value)} /></label><button disabled={busy || loading}>เพิ่มงาน</button></form>
    {!loading && tasks.length === 0 && <p>ยังไม่มีงาน เพิ่มงานแรกได้เลย</p>}
    <ul>{tasks.map(task => <li key={task.id}>
      <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.title}</span>
      <button disabled={busy} onClick={() => change(task)} aria-label={'สลับสถานะ ' + task.title}>{task.done ? 'ทำต่อ' : 'เสร็จแล้ว'}</button>
      <button disabled={busy} onClick={() => change(task, true)} aria-label={'ลบ ' + task.title}>ลบ</button>
    </li>)}</ul>
  </main>;
}
`;
const boardApiTests = apiTest(`test('creates, updates and deletes tasks with validation', async () => {
  expect((await request('/api/tasks', 'POST', { title: '  ' })).status).toBe(400);
  let response = await request('/api/tasks', 'POST', { title: '  ฝึก React  ' });
  expect(response.status).toBe(201); const task = await response.json(); expect(task.title).toBe('ฝึก React');
  response = await request('/api/tasks/' + task.id, 'PATCH', { done: true }); expect((await response.json()).done).toBe(true);
  expect((await request('/api/tasks/' + task.id, 'PATCH', { done: 'yes' })).status).toBe(400);
  expect((await request('/api/tasks/' + task.id, 'DELETE')).status).toBe(204);
  expect((await request('/api/tasks/' + task.id, 'DELETE')).status).toBe(404);
  expect((await request('/api/tasks/999999', 'PATCH', { done: true })).status).toBe(404);
});`);
const boardUiTests = uiTest(`test('adds, toggles, deletes and keeps a failed form', async () => {
  let rows = [{ id:1, title:'เรียน Node', done:false }]; let id=2;
  vi.stubGlobal('fetch', vi.fn(async (path, options={}) => {
    let result;
    if(options.method==='POST') { result={id:id++, ...JSON.parse(options.body), done:false}; rows.push(result); }
    else if(options.method==='PATCH') { result=rows.find(r=>path.endsWith('/'+r.id)); result={...result,...JSON.parse(options.body)}; rows=rows.map(r=>r.id===result.id?result:r); }
    else if(options.method==='DELETE') { rows=rows.filter(r=>!path.endsWith('/'+r.id)); return {ok:true,status:204}; }
    else result=[...rows];
    return {ok:true,status:200,json:async()=>result};
  }));
  render(<App/>); await screen.findByText('เรียน Node');
  fireEvent.click(screen.getByText('เพิ่มงาน')); expect(screen.getByRole('alert')).toBeTruthy();
  fireEvent.change(screen.getByLabelText('ชื่องาน'),{target:{value:'ฝึก React'}}); fireEvent.click(screen.getByText('เพิ่มงาน'));
  await screen.findByText('ฝึก React'); expect(screen.getByLabelText('ชื่องาน').value).toBe('');
  fireEvent.click(screen.getByRole('button',{name:'สลับสถานะ ฝึก React'})); await waitFor(()=>expect(screen.getByRole('button',{name:'สลับสถานะ ฝึก React'}).textContent).toBe('ทำต่อ'));
  fireEvent.click(screen.getByRole('button',{name:'ลบ ฝึก React'})); await waitFor(()=>expect(screen.queryByText('ฝึก React')).toBeNull());
  vi.stubGlobal('fetch',vi.fn().mockRejectedValue(new Error('offline')));
  fireEvent.change(screen.getByLabelText('ชื่องาน'),{target:{value:'เก็บงานของฉัน'}}); fireEvent.click(screen.getByText('เพิ่มงาน'));
  await screen.findByRole('alert'); expect(screen.getByLabelText('ชื่องาน').value).toBe('เก็บงานของฉัน');
});
test('shows loading and initial API failure', async () => {
  let reject; vi.stubGlobal('fetch',vi.fn(()=>new Promise((_,r)=>{reject=r;})));
  render(<App/>); expect(screen.getByText('กำลังโหลด...')).toBeTruthy(); reject(new Error('offline'));
  expect(await screen.findByRole('alert')).toBeTruthy();
});`);

function guided(level, title, paragraphs, entry, changes, solutionChanges, tests, walkthrough, manual) {
  return {
    id: 'guided-' + level, kind: 'workshop', guidedLevel: level + 1, title, chapter: '07 · จับมือทำโปรเจกต์แรก', difficulty: 'จับมือทำ', minutes: 20 + level * 10,
    source: 'เส้นทางฝึก My Task Board · Node.js / React', paragraphs, entry,
    starter: makeProject({ ...changes, 'tests/goal.test.jsx': tests }),
    solution: makeProject({ ...changes, ...solutionChanges, 'tests/goal.test.jsx': tests }),
    steps: walkthrough.map(step => step.title), walkthrough, manual,
    hints: walkthrough.slice(0, 3).map(step => step.instruction),
  };
}
const step = (title, path, instruction, expected) => ({ title, path, instruction, expected });
const firstUi = `export default function App() { return <main><h1>My Task Board</h1><p>ฉันกำลังสร้างเว็บของตัวเอง</p></main>; }`;
const ready = {
  'scripts/hello.js': hello,
  'backend/app.js': baseFiles['backend/app.js'].replace('module.exports = app;', "app.get('/api/tasks', (req,res) => res.json([{id:1,title:'เรียน Node',done:false}]));\nmodule.exports = app;"),
};
export const guidedProjects = [
  guided(0, 'Level 1 · รัน Node ไฟล์แรก', ['เริ่มจากไฟล์เดียวก่อน: Node รัน JavaScript ใน Terminal ไม่ได้วาด JSX ให้ browser บทนี้ฝึกสร้างตัวแปรและพิมพ์ข้อความ', 'รันโปรเจกต์เพื่อเปิด Terminal ของห้องฝึก แล้วพิมพ์คำสั่ง node scripts/hello.js เอง ชื่อโฟลเดอร์ scripts ในที่นี้เป็นที่เก็บไฟล์ ต่างจาก scripts ใน package.json ซึ่งเป็นชื่อคำสั่ง npm'], 'scripts/hello.js',
    { 'scripts/hello.js': "// TODO: ประกาศ learner แล้วแสดงข้อความทักทาย\nconsole.log('TODO');\n" }, { 'scripts/hello.js': hello },
    `import { test, expect } from 'vitest';\nimport { execFileSync } from 'node:child_process';\ntest('runs a real Node script',()=>{expect(execFileSync(process.execPath,['scripts/hello.js'],{encoding:'utf8'}).trim()).toBe('Hello Node, Mali');});`,
    [step('1. เปิดไฟล์ที่จะรัน', 'scripts/hello.js', 'แทน TODO ด้วย const learner = "Mali"; ตัวแปรนี้เก็บชื่อผู้เรียน', 'มีตัวแปร learner ที่เก็บข้อความ Mali'), step('2. แสดงผลด้วย console.log', 'scripts/hello.js', 'เขียน console.log("Hello Node, " + learner); บรรทัดถัดมา', 'Terminal จะแสดง Hello Node, Mali'), step('3. รันและตรวจ', 'scripts/hello.js', 'กดรันโปรเจกต์ รอพร้อม แล้วคลิก Terminal พิมพ์ node scripts/hello.js และ Enter จากนั้นกดตรวจงาน', 'เห็นข้อความทักทายจริงและชุดตรวจผ่าน')], ['เปลี่ยนชื่อแล้วรันซ้ำ อธิบายได้ว่าทำไมผลเปลี่ยน', 'เปลี่ยนกลับ Mali ก่อนตรวจงาน']),
  guided(1, 'Level 2 · API แรกและข้อมูล JSON', ['ต่อจาก Level 1 โดยมีไฟล์ทักทายที่ทำเสร็จแล้วให้ เริ่มเพิ่มเส้นทาง GET /api/tasks ใน Express', 'server.js เป็นตัวเปิด port ส่วน app.js รวมเส้นทาง เมื่อเขียน app.get เรารอ browser หรือ API Client ส่ง request เข้ามา ไม่ใช่เรียกแล้วแสดงผลทันที'], 'backend/app.js',
    { 'scripts/hello.js': hello, 'backend/app.js': baseFiles['backend/app.js'] },
    { 'backend/app.js': baseFiles['backend/app.js'].replace('module.exports = app;', "app.get('/api/tasks', (req,res) => res.json([{id:1,title:'เรียน Node',done:false}]));\nmodule.exports = app;") },
    apiTest(`test('serves a task list as JSON',async()=>{const r=await request('/api/tasks');expect(r.status).toBe(200);expect(await r.json()).toEqual([{id:1,title:'เรียน Node',done:false}]);});`),
    [step('1. หา app ใน backend', 'backend/app.js', 'อ่าน const app = express() และ app.use(express.json()) ซึ่งเตรียมไว้แล้ว เพิ่ม route ก่อน module.exports = app', 'ยังคง export app ให้ server.js เปิดใช้งานได้'), step('2. เพิ่ม route GET', 'backend/app.js', 'ใช้ app.get("/api/tasks", (req, res) => { ... }); แล้ว res.json ส่ง array ของงาน id:1, title:"เรียน Node", done:false', 'ได้ array JSON ไม่ใช่ข้อความ HTML'), step('3. ส่ง request จริง', 'backend/app.js', 'กดรัน เปิด API Client เลือกตัวอย่างรายการงาน แล้วกดส่ง request หรือ Preview API :3000 ที่ /api/tasks', 'status 200 และรายการเรียน Node')], ['ลอง URL ที่ไม่มี จะได้ 404 และอธิบายได้ว่าต่างจาก server เปิดไม่สำเร็จอย่างไร']),
  guided(2, 'Level 3 · หน้า React และไฟล์เริ่มต้น', ['API รายการงานพร้อมให้แล้ว รอบนี้สร้างหน้าแรก React: index.html โหลด main.jsx แล้ว main.jsx import App.jsx', 'โครงในห้องฝึกใช้ frontend/ แทน src/ ที่ Vite สร้างให้ หน้าที่เหมือนกัน อ่านคู่มือเริ่มติดตั้งเพื่อเทียบโครงได้ ไม่ต้องย้ายไฟล์ในห้องฝึก'], 'frontend/App.jsx',
    { ...ready, 'frontend/App.jsx': 'export default function App() { return <main><h1>TODO</h1></main>; }' }, { 'frontend/App.jsx': firstUi },
    uiTest(`test('shows the first task-board page',()=>{render(<App/>);expect(screen.getByRole('heading',{name:'My Task Board'})).toBeTruthy();expect(screen.getByText('ฉันกำลังสร้างเว็บของตัวเอง')).toBeTruthy();});`),
    [step('1. ดูจุดเริ่มต้น', 'frontend/main.jsx', 'อ่าน import App และ createRoot(...).render(<App />) ตรงนี้เชื่อม component กับ root ใน HTML ไม่ต้องแก้ไฟล์นี้', 'อธิบายเส้นทาง index.html → main.jsx → App.jsx ได้'), step('2. แก้ App', 'frontend/App.jsx', 'เปลี่ยน h1 เป็น My Task Board และเพิ่ม p ว่า ฉันกำลังสร้างเว็บของตัวเอง ภายใน main', 'return มี element แม่ main ครอบ h1 และ p'), step('3. ดูผลและจัดสี', 'frontend/styles.css', 'กดรันแล้วดู Preview React :5173 เปลี่ยน background ใน CSS แล้วสังเกตหน้าเว็บ ก่อนตรวจงาน', 'เห็นหัวเรื่องและคำอธิบายทันที ไม่ต้องเปิดไฟล์ JSX ตรงด้วยการดับเบิลคลิก')], ['หน้าอ่านได้บนจอเล็ก', 'อธิบายได้ว่าชื่อ component ต้องขึ้นต้นด้วยตัวใหญ่']),
  guided(3, 'Level 4 · เชื่อม React กับ Node', ['หน้า React จาก Level 3 พร้อมแล้ว เปลี่ยนจากข้อความคงที่ให้โหลดงานจริงจาก GET /api/tasks', 'fetch("/api/tasks") ไป Vite ก่อน แล้ว proxy ส่งต่อไป Node :3000 จึงไม่ต้องฝัง localhost ของ API ใน App; ถ้าพิมพ์ URL ผิดให้แสดง error แทนหน้าว่าง'], 'frontend/App.jsx',
    { ...ready, 'frontend/App.jsx': firstUi }, { 'frontend/App.jsx': listUi },
    uiTest(`test('loads real-shaped API data and handles failure',async()=>{vi.stubGlobal('fetch',vi.fn().mockResolvedValue({ok:true,json:async()=>[{id:1,title:'เรียน Node',done:false}]}));render(<App/>);expect(await screen.findByText('เรียน Node')).toBeTruthy();expect(fetch.mock.calls[0][0]).toBe('/api/tasks');cleanup();vi.stubGlobal('fetch',vi.fn().mockRejectedValue(new Error('offline')));render(<App/>);expect(await screen.findByRole('alert')).toBeTruthy();});`),
    [step('1. เก็บข้อมูลและสถานะ', 'frontend/App.jsx', 'import useState กับ useEffect จาก react สร้าง tasks เริ่ม [] พร้อม loading และ error state', 'ยังไม่เรียก fetch ในตัว render เพื่อป้องกัน loop'), step('2. โหลดใน effect', 'frontend/App.jsx', 'ภายใน useEffect ที่มี [] เรียก fetch("/api/tasks") ตรวจ response.ok แล้วอ่าน json และ setTasks; catch เก็บ error และปิด loading เมื่อจบ', 'โหลดครั้งแรกแล้วได้ array จาก backend'), step('3. แสดงรายการ', 'frontend/App.jsx', 'ใช้ tasks.map(task => <li key={task.id}>{task.title}</li>) แสดง loading และ error ด้วย role="alert" ดูตัวอย่างเฉลยเฉพาะเมื่อยังติด', 'Preview เห็นเรียน Node; URL ผิดแสดง error'), step('4. ไล่เส้นทาง proxy', 'vite.config.js', 'อ่าน server.proxy ว่า /api ชี้ไป http://127.0.0.1:3000 ไม่ต้องแก้ไฟล์นี้ในห้องฝึก', 'API Client กับหน้า React เห็นข้อมูลชุดเดียวกัน')], ['ทดลอง path ผิดแล้วคืนกลับได้', 'อธิบาย state, effect และ proxy ด้วยคำของตัวเอง']),
  guided(4, 'Level 5 · โปรเจกต์แรกที่เพิ่ม–แก้–ลบได้', ['ต่อยอดหน้ารายการที่เสร็จแล้วให้เป็น Task Board ที่เพิ่มงาน สลับสถานะ และลบได้ API CRUD มีให้ครบเพื่อให้โฟกัส flow ของ React ก่อน', 'ข้อมูลเก็บในหน่วยความจำของ Node รีเฟรชหน้า React ยังโหลดกลับได้ แต่รีสตาร์ต backend จะกลับค่าเริ่มต้น สำรองโค้ดด้วย ZIP ไม่ใช่สำรองข้อมูลในหน่วยความจำ'], 'frontend/App.jsx',
    { ...ready, 'backend/app.js': taskApi, 'frontend/App.jsx': listUi, 'tests/api.test.jsx': boardApiTests },
    { 'frontend/App.jsx': taskBoardUi }, boardUiTests,
    [step('1. ฟอร์มเพิ่มงาน', 'frontend/App.jsx', 'สร้าง title state และ input ที่มี label ชื่องาน เพิ่ม form onSubmit เรียก preventDefault; ถ้า trim แล้วว่างให้แสดง role="alert"', 'กรอกข้อความได้และส่งฟอร์มแล้วหน้าไม่ reload'), step('2. ส่ง POST แล้วเพิ่มรายการ', 'frontend/App.jsx', 'fetch /api/tasks method POST พร้อม Content-Type application/json และ JSON.stringify({title}); ตรวจ response.ok ก่อนเพิ่มข้อมูลเข้า state และล้างช่องเมื่อสำเร็จเท่านั้น', 'เพิ่มงานใหม่แล้วเห็นรายการใหม่จาก id ของ API'), step('3. สลับสถานะและลบ', 'frontend/App.jsx', 'ปุ่มชื่อ aria-label="สลับสถานะ " + task.title เรียก PATCH /api/tasks/:id ด้วย {done: !task.done}; ปุ่มลบใช้ aria-label="ลบ " + task.title เรียก DELETE ซึ่งตอบ 204 จึงไม่อ่าน json', 'กดเสร็จแล้วสลับเป็นทำต่อ และลบรายการออกได้'), step('4. กันกดซ้ำและแสดง error', 'frontend/App.jsx', 'มี busy state ปิดปุ่มระหว่างรอ ใช้ try/catch/finally คืนสถานะ; API ล้มเหลวให้เก็บข้อความใน input ไว้แก้/ส่งใหม่', 'ไม่เสียข้อความเมื่อส่งไม่สำเร็จ'), step('5. ตรวจ flow และส่งออกงาน', 'backend/app.js', 'ดู API ที่มีให้แล้ว กดรันลองเพิ่ม → สลับสถานะ → ลบ → รีเฟรช แล้วกดตรวจงานและ ZIP เพื่อเปิดบนเครื่อง', 'ผ่านทั้งชุดตรวจ UI และ API; อธิบาย flow เต็มจาก form ถึง Node ได้')], ['เพิ่มงาน → เสร็จแล้ว → ทำต่อ → ลบ ผ่าน Preview จริง', 'ส่งชื่อว่างแล้วเห็น error', 'ทดลองหน้าแคบและลอง API ล้มเหลว', 'ส่งออก ZIP แล้ว npm install และ npm run dev บนเครื่องได้']),
];

guidedProjects[0].connectsTo = { lessonId: 'fs-00', title: 'บท 00 · รู้จักโปรเจกต์และแก้หน้าแรก' };
guidedProjects[1].connectsTo = { lessonId: 'fs-04', title: 'บท 04 · HTTP และ routes' };
guidedProjects[2].connectsTo = { lessonId: 'fs-06', title: 'บท 06 · React, JSX และ props' };
guidedProjects[3].connectsTo = { lessonId: 'fs-09', title: 'บท 09 · useEffect และเรียก API' };
guidedProjects[4].connectsTo = { lessonId: 'fs-13', title: 'บท 13 · React CRUD' };

for (const project of guidedProjects.slice(3)) {
  project.starter['tests/strict-loading.test.jsx'] = strictLoadingCheck;
  project.solution['tests/strict-loading.test.jsx'] = strictLoadingCheck;
}

guidedProjects[0].walkthrough[0].code = 'const learner = "Mali";';
guidedProjects[0].walkthrough[1].code = 'console.log("Hello Node, " + learner);';
guidedProjects[1].walkthrough[1].code = `app.get('/api/tasks', (req, res) => {
  res.json([{ id: 1, title: 'เรียน Node', done: false }]);
});`;
guidedProjects[2].walkthrough[1].code = firstUi;
guidedProjects[3].walkthrough[0].code = `import { useState, useEffect } from 'react';
// วางใน function App ก่อน return
const [tasks, setTasks] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');`;
guidedProjects[3].walkthrough[1].code = `useEffect(() => {
  const controller = new AbortController();
  fetch('/api/tasks', { signal: controller.signal })
    .then(response => { if (!response.ok) throw new Error('โหลดไม่ได้'); return response.json(); })
    .then(setTasks)
    .catch(error => { if (error.name !== 'AbortError') setError(error.message); })
    .finally(() => { if (!controller.signal.aborted) setLoading(false); });
  return () => controller.abort();
}, []);`;
guidedProjects[3].walkthrough[2].code = `<main><h1>My Task Board</h1>
  {loading && <p>กำลังโหลด...</p>}
  {error && <p role="alert">{error}</p>}
  <ul>{tasks.map(task => <li key={task.id}>{task.title}</li>)}</ul>
</main>`;
guidedProjects[4].walkthrough[1].code = `// ใน async handler หลัง event.preventDefault() และตรวจค่าว่าง
const response = await fetch('/api/tasks', {
  method: 'POST', headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: title.trim() }),
});
if (!response.ok) throw new Error('เพิ่มงานไม่สำเร็จ');
const created = await response.json();
setTasks(current => [...current, created]);
setTitle('');`;

// Same working board with Vite's familiar src/ naming for the setup tutorial.
export const setupBoardFiles = (() => {
  const files = { ...guidedProjects[4].solution };
  for (const path of Object.keys(files)) {
    if (path.startsWith('frontend/')) { files['src/' + path.slice(9)] = files[path]; delete files[path]; }
    if (path.startsWith('tests/')) files[path] = files[path].replaceAll('../frontend/App.jsx', '../src/App.jsx');
  }
  files['index.html'] = files['index.html'].replace('/frontend/main.jsx', '/src/main.jsx');
  files['README.md'] = '# My Task Board\n\nแตก ZIP แล้วเปิด Terminal ที่มี package.json\n\nnpm install\nnpm run dev\n\nReact http://localhost:5173 · API http://localhost:3000/api/tasks\nเปิด Terminal อีกอัน npm test\nข้อมูลอยู่ในหน่วยความจำและรีเซ็ตเมื่อ backend เริ่มใหม่\n\nโครงนี้ใช้ src/ แบบ Vite; ห้องฝึกใช้ frontend/ หน้าที่เหมือนกัน\n';
  return files;
})();
