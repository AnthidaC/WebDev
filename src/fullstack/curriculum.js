import { storeHubStarter, storeHubSolution, storeHubTests, storeHubRequirements } from './exams/exam-store-hub.js';
import { finalPracticeStarter, finalPracticeSolution, finalPracticeTests } from './exams/exam-final-practice.js';
import { makeProject, baseFiles, apiTest, uiTest, customerFiles, customersController, crudTests, customerUiTests, authFiles, authTests, packageFile } from './templates.js';
import { strictLoadingCheck } from './projectChecks.js';
import { guidedProjects } from './guidedProjects.js';
import { examples } from './examples.js';
import { restaurantFiles, restaurantTests, splitCustomerFiles, routedCustomerFiles, memberFiles, foodFiles, foodTests, foodUiTests } from './projects.js';
import { bookingFiles, bookingTests, bookingUiTests, inventoryFiles, inventoryTests, inventoryUiTests, reviewFiles, reviewTests, reviewUiTests } from './advancedProjects.js';
import { gearBase, gearService, gearController, gearStarterService, gearStarterController } from './exams/gear-core.js';
import { gearUi, gearCss } from './exams/gear-ui.js';

const sources = {
  node: 'ch5 NodeJs_Express · สไลด์',
  react: 'ch6 ReactJs · หน้า',
  full: 'ch7 FullStack_1 · หน้า',
  full2: 'ch7 FullStack_2 · หน้า',
  auth: 'ch8 ReactJs Authen · หน้า',
};
function lesson(id, title, chapter, minutes, source, paragraphs, steps, starter, solution, tests, manual, hints) {
  return {
    id, title, chapter, minutes, source, paragraphs, steps, manual,
    kind: 'lesson', difficulty: 'พื้นฐาน', example: examples[id], entry: Object.keys(starter)[0] || 'frontend/App.jsx',
    starter: makeProject({ ...starter, 'tests/goal.test.jsx': tests }),
    solution: makeProject({ ...starter, ...solution, 'tests/goal.test.jsx': tests }),
    hints: hints || ['อ่านลำดับในหัวข้อ “ลงมือทำ” แล้วเปิดไฟล์ที่ระบุ', 'เทียบข้อมูลเข้าและผลลัพธ์ที่ต้องได้ ก่อนแก้โค้ดทีละส่วน', 'เปิดแท็บเฉลยเพื่ออ่านตัวอย่างทั้งไฟล์ แล้วกลับมาเขียนด้วยตัวเอง'],
  };
}
const app = (code) => ({ 'frontend/App.jsx': code });
const api = (code) => ({ 'backend/app.js': baseFiles['backend/app.js'].replace('module.exports = app;', code + '\nmodule.exports = app;') });
const headingTest = uiTest(`test('shows the required heading', () => { render(<App />); expect(screen.getByRole('heading', { name: 'My Full Stack Lab' })).toBeTruthy(); });`);

export const lessons = [
  lesson('fs-00', 'รู้จักโปรเจกต์และแก้หน้าแรก', '00 · เริ่มจากศูนย์', 15, `${sources.node} 92–97; ${sources.react} 14–16`,
    ['Browser แสดงผลส่วน frontend ส่วน Node รับคำขอที่ backend ทั้งสองส่วนคุยกันผ่าน HTTP API ไม่ได้เรียกฟังก์ชันข้ามไฟล์กันโดยตรง', 'main.jsx เป็นจุดเริ่มของ React แล้วนำ App.jsx ไปวาดใน root ส่วน package.json บอกแพ็กเกจและคำสั่งที่โปรเจกต์ใช้ ระบบเตรียมสิ่งเหล่านี้ให้แล้ว กดรันได้เลย'],
    ['เปิด package.json แล้วดู scripts: dev และ test', 'เปิด frontend/App.jsx เปลี่ยนหัวเรื่องเป็น My Full Stack Lab', 'เพิ่มคำอธิบายชื่อของตัวเอง แล้วแก้สีพื้นหลังใน frontend/styles.css', 'กดรันโปรเจกต์ ดู Preview แล้วกดตรวจงาน'],
    app(baseFiles['frontend/App.jsx']), app(`export default function App() { return <main><h1>My Full Stack Lab</h1><p>พื้นที่ฝึกของฉัน</p></main>; }`), headingTest,
    ['หน้าเว็บอ่านได้บนมือถือ', 'อธิบายได้ว่า frontend กับ backend ทำหน้าที่ต่างกันอย่างไร']),
  lesson('fs-01', 'ES6 และแยกไฟล์ module', '01 · JavaScript สำหรับ Node', 25, `${sources.node} 43–58; ${sources.react} 5–11`,
    ['module ช่วยแยกความรับผิดชอบแต่ละไฟล์ CommonJS ใช้ require/module.exports ส่วน ES modules ใช้ import/export ตามสไลด์ backend ใช้ .js กับ require/module.exports ส่วน React ใช้ .jsx กับ import/export โดยแยกขอบเขต package.json ให้ถูกต้อง', 'map ใช้แปลงข้อมูล ส่วน filter ใช้คัดข้อมูล คืน array ใหม่ทั้งคู่ โจทย์นี้ให้แยกการคิดราคาออกจาก route แล้ว import กลับมาใช้'],
    ['เปิด backend/lib/prices.js เขียน total(items) รวม price × quantity', 'คืน 0 เมื่อรายการว่าง และไม่แก้ array ต้นฉบับ', 'route POST /api/total เตรียมไว้แล้ว ให้ใช้ module ที่เขียน'],
    { 'backend/lib/prices.js': 'exports.total = (items) => {\n  // TODO: รวมราคาสินค้า\n  return 0;\n};\n', ...api(`const { total } = require('./lib/prices.js');
app.post('/api/total', (req, res) => res.json({ total: total(req.body.items || []) }));`) },
    { 'backend/lib/prices.js': 'exports.total = items => items.reduce((sum, item) => sum + item.price * item.quantity, 0);\n' },
    apiTest(`test('calculates quantities, empty list and does not mutate', async () => {
  const input = [{ price: 40, quantity: 2 }, { price: 15, quantity: 3 }];
  expect(await (await request('/api/total', 'POST', { items: input })).json()).toEqual({ total: 125 });
  expect(await (await request('/api/total', 'POST', { items: [] })).json()).toEqual({ total: 0 });
  expect(input[0].quantity).toBe(2);
});`), ['เพิ่มตัวอย่างสินค้าเองใน terminal ได้', 'อธิบาย named export กับ default export ได้']),
  lesson('fs-02', 'Promise และ async/await', '01 · JavaScript สำหรับ Node', 25, `${sources.node} 14–42, 109`,
    ['งานที่ใช้เวลารอ เช่น อ่านไฟล์หรือเรียกฐานข้อมูล ไม่ควรบล็อกงานทั้งหมด Promise เป็นตัวแทนผลที่จะได้ภายหลัง ส่วน await ทำให้เขียนลำดับการรอได้ตรงไปตรงมา', 'try/catch ใช้จัดการ Promise ที่ reject ถ้าลืม await อาจตอบกลับก่อนงานเสร็จ โจทย์สุ่มเลขในชีทสามารถต่อยอดจากโครงนี้ โดยหยุดทันทีเมื่อเจอเลขคี่'],
    ['เติม waitAndDouble(value) ให้รอแล้วคืน value × 2', 'ใช้ Promise กับ setTimeout โดยรออย่างน้อย 30ms', 'ลอง POST /api/double ด้วย {"value": 6} แล้วต้องได้ 12'],
    { 'backend/lib/async.js': 'exports.waitAndDouble = async value => {\n  // TODO: รอด้วย Promise แล้วคืนค่าที่คูณสอง\n  return value;\n};', ...api(`const { waitAndDouble } = require('./lib/async.js');
app.post('/api/double', async (req, res) => { try { res.json({ result: await waitAndDouble(req.body.value) }); } catch { res.status(500).json({ message: 'Failed' }); } });`) },
    { 'backend/lib/async.js': 'exports.waitAndDouble = async value => {\n  await new Promise(resolve => setTimeout(resolve, 40));\n  return value * 2;\n};' },
    apiTest(`test('awaits asynchronous result', async () => { const start = Date.now(); expect(await (await request('/api/double', 'POST', { value: 6 })).json()).toEqual({ result: 12 }); expect(Date.now() - start).toBeGreaterThanOrEqual(25); });`),
    ['ลองเปลี่ยนเวลารอและสังเกต log', 'ต่อยอดสุ่มเลข 3 ครั้งและหยุดเมื่อเจอเลขคี่']),
  lesson('fs-03', 'อ่านไฟล์ด้วย fs และ path', '02 · Node และ Express', 25, `${sources.node} 59–69, 81–85`,
    ['fs คือ module ของ Node สำหรับจัดการไฟล์ ส่วน path.join ใช้ประกอบเส้นทางไฟล์โดยไม่ผูกกับเครื่องที่รัน __dirname ของ CommonJS คือโฟลเดอร์ของไฟล์โค้ดนั้น', 'ใช้ fs/promises เพื่อ await การอ่านไฟล์ และ JSON.parse เมื่อเนื้อหาเป็น JSON เส้นทางที่ยอมให้ผู้ใช้ส่งเข้ามาต้องตรวจขอบเขตก่อนเสมอ โจทย์นี้อ่านเฉพาะไฟล์ที่กำหนด'],
    ['อ่าน backend/data/menu.json จาก backend/lib/menu.js', 'ใช้ path.join(__dirname, ...) ให้ทำงานแม้รันจากโฟลเดอร์อื่น', 'GET /api/menu ต้องคืน array จากไฟล์จริง'],
    { 'backend/data/menu.json': '[{"id":1,"name":"ข้าวผัด","price":60},{"id":2,"name":"ชาไทย","price":35}]', 'backend/lib/menu.js': 'exports.readMenu = async () => {\n  // TODO: อ่าน JSON จากไฟล์\n  return [];\n};', ...api(`app.get('/api/menu', async (req, res) => { try { res.json(await require('./lib/menu.js').readMenu()); } catch { res.status(500).json({ message: 'Read failed' }); } });`) },
    { 'backend/lib/menu.js': `const fs = require('node:fs/promises');
const path = require('node:path');
exports.readMenu = async () => JSON.parse(await fs.readFile(path.join(__dirname, '../data/menu.json'), 'utf8'));` },
    apiTest(`test('serves the data file', async () => { const rows = await (await request('/api/menu')).json(); expect(rows).toHaveLength(2); expect(rows[0]).toMatchObject({ name: 'ข้าวผัด', price: 60 }); });`),
    ['เพิ่มเมนูลง JSON แล้ว API อ่านได้', 'หากไฟล์ไม่ถูกต้องต้องแสดง 500']),
  lesson('fs-04', 'HTTP, routes, params และ query', '02 · Node และ Express', 30, `${sources.node} 70–80, 94–101`,
    ['HTTP request มี method, URL, headers และ body ส่วน response มี status กับข้อมูลตอบกลับ GET เหมาะกับอ่านข้อมูล และ POST เหมาะกับส่งข้อมูลให้เซิร์ฟเวอร์จัดการ', 'req.params มาจากชื่อใน path เช่น /items/:name ส่วน req.query มาจากหลัง ? เช่น ?price=60 ค่าที่รับมามักเป็น string จึงต้องแปลงและตรวจสอบก่อนคำนวณ'],
    ['เติม GET /api/items/:name ให้คืน { name, price } จาก params และ query', 'price ต้องเป็นตัวเลขตั้งแต่ 0 ขึ้นไป ถ้าไม่มีหรือผิดรูปแบบตอบ 400', 'ลอง /api/items/tea?price=35 และ /api/items/tea?price=abc'],
    api(`app.get('/api/items/:name', (req, res) => {
  // TODO: อ่าน params/query และตรวจข้อมูล
  res.status(501).json({ message: 'Implement this route' });
});`),
    api(`app.get('/api/items/:name', (req, res) => {
  const price = Number(req.query.price);
  if (req.query.price === undefined || !Number.isFinite(price) || price < 0) return res.status(400).json({ message: 'Invalid price' });
  res.json({ name: req.params.name, price });
});`),
    apiTest(`test('params, query and validation', async () => { expect(await (await request('/api/items/tea?price=35')).json()).toEqual({ name: 'tea', price: 35 }); expect((await request('/api/items/tea?price=abc')).status).toBe(400); expect((await request('/api/items/tea')).status).toBe(400); expect((await request('/api/items/tea?price=-1')).status).toBe(400); });`),
    ['อธิบาย 200, 201, 400 และ 404 ได้', 'ลองชื่อเมนูภาษาไทยใน URL']),
  lesson('fs-05', 'Router, middleware และ static files', '02 · Node และ Express', 30, `${sources.node} 102–111; ${sources.full} 26, 36–38`,
    ['app.use ใช้เพิ่ม middleware หรือ mount Router ที่ prefix ได้ แยก router ออกจาก app แล้วจะจัดการหลายหน้าได้ง่ายขึ้น ลำดับสำคัญ: วางตัว parse body ก่อน route ที่อ่าน req.body', 'static files คือ HTML/CSS/รูปภาพที่ส่งตรงได้ ส่วน route สามารถใช้ res.sendFile เลือกหน้าให้ตาม URL ชีทให้ทำเว็บร้านอาหารสามหน้า ซึ่งใช้โครงสร้างนี้'],
    ['เปิด backend/routes/pages.js เพิ่ม /home, /menu และ /order', 'แต่ละ route ส่ง HTML มีหัวเรื่องของหน้านั้น', 'เติม middleware X-Practice: ready ให้ทุก response'],
    { 'backend/routes/pages.js': `const router = require('express').Router();
// TODO: เพิ่ม route ทั้ง 3 หน้า
module.exports = router;`, ...api(`app.use((req, res, next) => { /* TODO: เพิ่ม header */ next(); });
app.use(require('./routes/pages.js'));`) },
    { 'backend/routes/pages.js': `const router = require('express').Router();
router.get('/home', (req, res) => res.send('<h1>Home</h1>'));
router.get('/menu', (req, res) => res.send('<h1>Menu</h1>'));
router.get('/order', (req, res) => res.send('<h1>Order</h1>'));
module.exports = router;`, ...api(`app.use((req, res, next) => { res.set('X-Practice', 'ready'); next(); });
app.use(require('./routes/pages.js'));`) },
    apiTest(`test('mounted routes and middleware', async () => { for (const [path, name] of [['/home','Home'],['/menu','Menu'],['/order','Order']]) { const r = await request(path); expect(r.status).toBe(200); expect(await r.text()).toContain(name); expect(r.headers.get('x-practice')).toBe('ready'); } });`),
    ['เลือก port 3000 ใน Preview เพื่อเปิดหน้า backend', 'เพิ่มไฟล์ CSS ใต้ public และใช้ express.static ส่งไฟล์']),
  lesson('fs-06', 'React, JSX, props และ CSS', '03 · React จากพื้นฐาน', 30, `${sources.react} 17–40`,
    ['React component เป็นฟังก์ชันที่คืน JSX และชื่อต้องขึ้นต้นด้วยตัวใหญ่ props ส่งข้อมูลจากแม่ไปลูก โดยลูกไม่แก้ค่า props ที่รับมา', 'ใช้ className อ้างถึง CSS, ใช้ {} แทรก expression และใช้ map แสดงรายการพร้อม key ที่คงที่ โจทย์นี้ให้แยกการ์ดเมนูเป็นไฟล์เองแล้วนำกลับมาใช้'],
    ['สร้าง frontend/components/MenuCard.jsx รับ name กับ price', 'ใน App.jsx แสดง ข้าวผัด 60 บาท และ ชาไทย 35 บาท ผ่าน MenuCard', 'ใช้ CSS grid จัดการ์ดและรองรับจอเล็ก'],
    app(`export default function App() { return <main><h1>Our menu</h1>{/* TODO: import และแสดง MenuCard */}</main>; }`),
    { 'frontend/components/MenuCard.jsx': `export default function MenuCard({ name, price }) { return <article><h2>{name}</h2><p>{price} บาท</p></article>; }`, ...app(`import MenuCard from './components/MenuCard';
export default function App() { return <main><h1>Our menu</h1><div className="grid"><MenuCard name="ข้าวผัด" price={60} /><MenuCard name="ชาไทย" price={35} /></div></main>; }`) },
    uiTest(`test('renders both menu cards', () => { render(<App />); expect(screen.getByRole('heading', { name: 'ข้าวผัด' })).toBeTruthy(); expect(screen.getByText('60 บาท')).toBeTruthy(); expect(screen.getByRole('heading', { name: 'ชาไทย' })).toBeTruthy(); expect(screen.getByText('35 บาท')).toBeTruthy(); });`),
    ['การ์ดไม่ล้นจอมือถือ', 'สร้างเมนูเพิ่มได้โดยใช้ component เดิม']),
  lesson('fs-07', 'Events และ useState', '03 · React จากพื้นฐาน', 25, `${sources.react} 41–55; ${sources.full} 2–4`,
    ['ตัวแปรธรรมดาไม่ทำให้ React วาดหน้าใหม่ useState เก็บค่าระหว่าง render และ setter ใช้แจ้งให้ React วาดใหม่ หากค่าถัดไปอิงค่าก่อนหน้าให้ใช้ setCount(c => c + 1)', 'ส่งฟังก์ชันให้ onClick เช่น onClick={increase} การเขียน increase() จะเรียกทันทีตอน render โจทย์นี้นับจำนวนสินค้าที่เลือกและห้ามติดลบ'],
    ['สร้าง state count เริ่มที่ 0 และแสดงด้วย <output aria-label="จำนวน">', 'เพิ่มปุ่ม +, − และ รีเซ็ต', 'กด − ตอนค่าเป็น 0 ต้องยังได้ 0'],
    app(`export default function App() { return <main><h1>Cart counter</h1><output aria-label="จำนวน">0</output><button>+</button><button>−</button><button>รีเซ็ต</button></main>; }`),
    app(`import { useState } from 'react';
export default function App() { const [count, setCount] = useState(0); return <main><h1>Cart counter</h1><output aria-label="จำนวน">{count}</output><button onClick={() => setCount(c => c + 1)}>+</button><button onClick={() => setCount(c => Math.max(0,c - 1))}>−</button><button onClick={() => setCount(0)}>รีเซ็ต</button></main>; }`),
    uiTest(`test('increments, clamps and resets', () => { render(<App />); const out = screen.getByLabelText('จำนวน'); fireEvent.click(screen.getByText('−')); expect(out.textContent).toBe('0'); fireEvent.click(screen.getByText('+')); fireEvent.click(screen.getByText('+')); expect(out.textContent).toBe('2'); fireEvent.click(screen.getByText('−')); expect(out.textContent).toBe('1'); fireEvent.click(screen.getByText('รีเซ็ต')); expect(out.textContent).toBe('0'); });`),
    ['เพิ่มราคารวมจากจำนวนโดยไม่เก็บ state ซ้ำ']),
  lesson('fs-08', 'Controlled form และ validation', '03 · React จากพื้นฐาน', 30, `${sources.react} 56–68; ${sources.full2} 9–11`,
    ['controlled input ผูก value กับ state แล้วใช้ onChange อัปเดต state ฟอร์มใช้ onSubmit และ preventDefault เพื่อไม่ให้เบราว์เซอร์โหลดหน้าใหม่', 'แยกค่าที่ผู้ใช้กำลังกรอกออกจากข้อมูลที่ส่งแล้ว ตรวจ trim ก่อนส่ง ใช้ label ให้ผูกกับ input เพื่อให้คลิกชื่อช่องแล้วโฟกัสได้และทดสอบได้ง่าย'],
    ['สร้าง input ที่มี label ชื่อ และปุ่ม บันทึก', 'ส่งชื่อว่างหรือมีแต่ช่องว่างแล้วแสดงข้อความ role="alert"', 'ส่งชื่อ Mali แล้วแสดง บันทึก Mali และล้างช่องกรอก'],
    app(`export default function App() { return <main><h1>Customer form</h1><form><label>ชื่อ<input /></label><button>บันทึก</button></form></main>; }`),
    app(`import { useState } from 'react';
export default function App() { const [name,setName] = useState(''); const [saved,setSaved] = useState(''); const [error,setError] = useState(''); function submit(e) { e.preventDefault(); if (!name.trim()) { setError('กรุณากรอกชื่อ'); return; } setSaved(name.trim()); setName(''); setError(''); } return <main><h1>Customer form</h1><form onSubmit={submit}><label>ชื่อ<input value={name} onChange={e=>setName(e.target.value)} /></label><button>บันทึก</button></form>{error && <p role="alert">{error}</p>}{saved && <p>บันทึก {saved}</p>}</main>; }`),
    uiTest(`test('validates and submits without reloading', () => { render(<App />); fireEvent.click(screen.getByText('บันทึก')); expect(screen.getByRole('alert')).toBeTruthy(); const input = screen.getByLabelText('ชื่อ'); fireEvent.change(input, { target: { value: 'Mali' } }); fireEvent.click(screen.getByText('บันทึก')); expect(screen.getByText('บันทึก Mali')).toBeTruthy(); expect(input.value).toBe(''); expect(screen.queryByRole('alert')).toBeNull(); });`),
    ['กด Enter ส่งฟอร์มได้', 'เพิ่ม email พร้อมข้อความผิดพลาดที่อ่านรู้เรื่อง']),
  lesson('fs-09', 'useEffect และเรียก API', '04 · เชื่อม frontend กับ backend', 35, `${sources.full} 5–6; ${sources.full2} 2–6`,
    ['useEffect ใช้ซิงก์ component กับระบบภายนอก เช่น HTTP API dependency [] ทำงานตอน mount และ cleanup ใช้ยกเลิกหรือข้ามผลลัพธ์เมื่อ component ถูกถอด', 'ต้องแยกสถานะ loading, success และ error ไม่ให้ผู้ใช้เห็นหน้าว่าง โจทย์นี้เรียก /api/customers ผ่าน proxy จึงไม่ต้องฝัง URL localhost ของเครื่องผู้เรียนใน React'],
    ['โหลด GET /api/customers ตอน component mount', 'แสดง กำลังโหลด... ระหว่างรอ แล้วแสดงชื่อลูกค้า', 'หาก request ล้มเหลว แสดง role="alert"'],
    { ...customerFiles, ...app(`export default function App() { return <main><h1>Customers</h1>{/* TODO: useEffect โหลดข้อมูล */}</main>; }`) },
    app(`import { useState, useEffect } from 'react';
export default function App() { const [rows,setRows]=useState([]); const [loading,setLoading]=useState(true); const [error,setError]=useState(''); useEffect(()=>{ const controller = new AbortController(); fetch('/api/customers', {signal:controller.signal}).then(r=>{ if(!r.ok) throw new Error('HTTP '+r.status); return r.json(); }).then(setRows).catch(e=>{ if(e.name !== 'AbortError') setError('โหลดไม่สำเร็จ'); }).finally(()=>{if(!controller.signal.aborted)setLoading(false);}); return ()=>controller.abort(); },[]); return <main><h1>Customers</h1>{loading && <p>กำลังโหลด...</p>}{error && <p role="alert">{error}</p>}<ul>{rows.map(c=><li key={c.id}>{c.name}</li>)}</ul></main>; }`),
    uiTest(`test('loads API data', async () => { vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async()=>[{id:1,name:'Mali'}] })); render(<App />); expect(await screen.findByText('Mali')).toBeTruthy(); expect(fetch.mock.calls[0][0]).toBe('/api/customers'); });
test('handles network failure', async () => { vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline'))); render(<App />); expect(await screen.findByRole('alert')).toBeTruthy(); });`),
    ['หยุด API แล้วหน้าแสดงข้อผิดพลาด', 'ลอง loading ด้วย Network throttling']),
  lesson('fs-10', 'React Router และ layout หลายหน้า', '04 · เชื่อม frontend กับ backend', 35, `${sources.full2} 12–16, 21; ${sources.auth} 22–23`,
    ['BrowserRouter ดู URL แล้ว Routes เลือก element ที่จะวาด Link ใช้เปลี่ยนหน้าในแอป ส่วน Outlet เป็นตำแหน่งวาด route ลูกใน layout ที่ใช้ร่วมกัน', 'routing ฝั่ง React แยกจาก Express: /customers คือหน้าเว็บ ส่วน /api/customers คือข้อมูล API ควรมีหน้า 404 เพื่อไม่ให้ URL ที่ไม่รู้จักแสดงหน้าว่าง'],
    ['สร้าง Home, Customers และ NotFound แยกไฟล์ใน frontend/pages', 'สร้าง layout มี Link ชื่อ Home และ Customers พร้อม Outlet', 'ตั้ง route / และ /customers และ fallback *'],
    app(`export default function App() { return <main><h1>TODO: Router</h1></main>; }`),
    { 'frontend/pages/Home.jsx': `export default function Home() { return <h1>Welcome Home</h1>; }`, 'frontend/pages/Customers.jsx': `export default function Customers() { return <h1>Our Customers</h1>; }`, ...app(`import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './pages/Home'; import Customers from './pages/Customers';
function Layout() { return <main><nav><Link to="/">Home</Link><Link to="/customers">Customers</Link></nav><Outlet /></main>; }
export default function App() { return <BrowserRouter><Routes><Route element={<Layout />}><Route path="/" element={<Home />} /><Route path="/customers" element={<Customers />} /><Route path="*" element={<h1>404</h1>} /></Route></Routes></BrowserRouter>; }`) },
    uiTest(`test('navigates between pages', async () => { window.history.replaceState({}, '', '/'); render(<App />); expect(screen.getByRole('heading', {name:'Welcome Home'})).toBeTruthy(); fireEvent.click(screen.getByRole('link',{name:'Customers'})); expect(await screen.findByRole('heading',{name:'Our Customers'})).toBeTruthy(); });
test('renders unknown route', () => { window.history.replaceState({}, '', '/missing'); render(<App />); expect(screen.getByRole('heading',{name:'404'})).toBeTruthy(); });`),
    ['กด Back แล้วกลับหน้าก่อนหน้าได้', 'เปิด /customers ตรง ๆ ใน Preview ได้']),
  lesson('fs-11', 'useContext และ useRef', '04 · เชื่อม frontend กับ backend', 30, `${sources.full} 7–13`,
    ['Context ส่งค่าที่หลาย component ใช้ร่วมกันโดยไม่ต้องส่ง props ผ่านทุกชั้น เช่น theme หรือสถานะผู้ใช้ ส่วน useRef เก็บค่าข้าม render โดยการเปลี่ยน current ไม่ทำให้ render ใหม่', 'ref ใช้อ้างถึง DOM เพื่อเรียก focus ได้ โจทย์นี้ใช้ context เปลี่ยน theme และ useRef ช่วยให้ผู้ใช้กลับไปกรอกชื่ออย่างรวดเร็ว'],
    ['สร้าง ThemeContext และ provider เก็บ light/dark', 'ปุ่ม เปลี่ยนธีม ต้องสลับข้อความ ธีม: light กับ ธีม: dark', 'สร้าง input label ชื่อ พร้อมปุ่ม โฟกัสชื่อ ที่ใช้ ref.current.focus()'],
    app(`export default function App() { return <main><h1>Context & Ref</h1>{/* TODO */}</main>; }`),
    app(`import { createContext, useContext, useState, useRef } from 'react';
const ThemeContext = createContext(null);
function Settings() { const {theme,setTheme}=useContext(ThemeContext); const input=useRef(null); return <main><p>ธีม: {theme}</p><button onClick={()=>setTheme(t=>t==='light'?'dark':'light')}>เปลี่ยนธีม</button><label>ชื่อ<input ref={input}/></label><button onClick={()=>input.current.focus()}>โฟกัสชื่อ</button></main>; }
export default function App() { const [theme,setTheme]=useState('light'); return <ThemeContext.Provider value={{theme,setTheme}}><Settings /></ThemeContext.Provider>; }`),
    uiTest(`test('shares theme and focuses input', () => { render(<App />); expect(screen.getByText('ธีม: light')).toBeTruthy(); fireEvent.click(screen.getByText('เปลี่ยนธีม')); expect(screen.getByText('ธีม: dark')).toBeTruthy(); fireEvent.click(screen.getByText('โฟกัสชื่อ')); expect(document.activeElement).toBe(screen.getByLabelText('ชื่อ')); });`),
    ['แยก Context เป็นไฟล์และ import ใช้จาก component ลูก']),
  lesson('fs-12', 'REST API และ controller CRUD', '05 · ข้อมูลและ CRUD', 45, `${sources.full} 26–41`,
    ['แยก app, routes และ controller เพื่อให้โค้ด HTTP ไม่ปนกับทุกส่วน GET อ่าน, POST สร้าง, PUT แทนข้อมูล และ DELETE ลบ ตรวจข้อมูลก่อนแก้ state และคืน 404 เมื่อไม่พบ id', 'บทนี้เก็บข้อมูลในหน่วยความจำเพื่อฝึก flow ก่อนต่อฐานข้อมูล ข้อมูลจะกลับค่าเริ่มต้นเมื่อ backend รีสตาร์ต ไม่ใช่การบันทึกถาวร เส้นทาง /search ต้องอยู่ก่อน /:id'],
    ['เติม create/update/remove ใน backend/controllers/customers.js', 'ตรวจชื่อและ email ก่อนสร้างหรือแก้ไข', 'คืน 201 เมื่อสร้าง, 400 เมื่อข้อมูลผิด และ 404 เมื่อ id ไม่มี', 'ตรวจงานแล้วลองเรียก API เองในแท็บ API'],
    { ...customerFiles, 'backend/controllers/customers.js': customersController.replace(/exports.create = [\s\S]*/, `exports.create = (req, res) => res.status(501).json({ message: 'TODO create' });
exports.update = (req, res) => res.status(501).json({ message: 'TODO update' });
exports.remove = (req, res) => res.status(501).json({ message: 'TODO delete' });`) },
    customerFiles, crudTests, ['ลองส่ง id ที่ไม่มีและ body ว่าง', 'เปลี่ยนหน้า frontend แล้วข้อมูลยังอยู่จนกว่า backend จะรีสตาร์ต']),
  lesson('fs-13', 'React CRUD และ service layer', '05 · ข้อมูลและ CRUD', 45, `${sources.full2} 4–11, 17–20, 23`,
    ['service layer รวมโค้ดเรียก HTTP ไว้ที่เดียว เช่น customerApi.create เพื่อให้ component เน้น state และหน้าจอ แยก form/list เป็น component ได้เมื่อหน้าซับซ้อนขึ้น', 'หลังบันทึกหรือลบต้องปรับ state หรือโหลดรายการใหม่ ใช้สถานะ busy ป้องกันการกดซ้ำ และอย่าล้างฟอร์มก่อนรู้ว่าบันทึกสำเร็จ'],
    ['backend CRUD พร้อมแล้ว เติมหน้า frontend/App.jsx ให้โหลดรายชื่อ', 'เพิ่ม form ชื่อ/อีเมล และปุ่ม เพิ่มลูกค้า เรียก customerApi.create', 'เพิ่มปุ่ม แก้ไข และ ลบ ต่อรายการ', 'แสดง error เมื่อ API ล้มเหลว'],
    { ...customerFiles, ...app(`export default function App() { return <main><h1>จัดการลูกค้า</h1>{/* TODO: form + list + API */}</main>; }`) },
    customerFiles, customerUiTests, ['เพิ่ม แก้ ลบจาก Preview แล้วเห็นรายการเปลี่ยนจริง', 'ปุ่มบันทึกป้องกันการกดซ้ำ', 'ข้อมูลผิดแล้วฟอร์มยังเก็บค่าที่กรอก']),
];

const sqlStarter = {
  'backend/db.js': `const initSqlJs = require('sql.js');
const ready = initSqlJs().then(SQL => { const db = new SQL.Database(); db.run("CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT, email TEXT); INSERT INTO customers VALUES (1,'Mali','m@example.com'),(2,'Somchai','s@example.com');"); return db; });
exports.search = async keyword => {
  const db = await ready;
  // TODO: ใช้ prepared statement ค้น name ด้วย LIKE
  return [];
};`,
  ...api(`app.get('/api/search', async (req, res) => { try { res.json(await require('./db.js').search(String(req.query.keyword || ''))); } catch { res.status(500).json({ message: 'Database error' }); } });`),
};
const sqlSolution = { 'backend/db.js': sqlStarter['backend/db.js'].replace('  // TODO: ใช้ prepared statement ค้น name ด้วย LIKE\n  return [];', `  const statement = db.prepare('SELECT * FROM customers WHERE name LIKE ?');
  try { statement.bind(['%' + keyword + '%']); const rows = []; while (statement.step()) rows.push(statement.getAsObject()); return rows; }
  finally { statement.free(); }`) };
lessons.push(lesson('fs-14', 'SQL และ parameterized query', '05 · ข้อมูลและ CRUD', 35, `${sources.full} 14–21, 28–35`,
  [
    'การเก็บข้อมูลในหน่วยความจำจะสูญหายเมื่อรีสตาร์ตเซิร์ฟเวอร์ ระบบจริงจึงต้องใช้ฐานข้อมูลแบบตารางเชิงสัมพันธ์ (Relational Database) โดยใช้ภาษา SQL (Structured Query Language) เช่น คำสั่ง SELECT * FROM customers WHERE name LIKE ? ในการค้นหาข้อมูล',
    'หัวใจสำคัญสูงสุดด้านความปลอดภัยของฐานข้อมูลคือ ห้ามนำข้อความที่ผู้ใช้กรอกมาต่อสตริง (String Concatenation) เข้ากับคำสั่ง SQL โดยตรงเด็ดขาด เพราะจะเปิดช่องโหว่ร้ายแรงที่เรียกว่า SQL Injection เราต้องใช้ Parameterized Query โดยใส่เครื่องหมาย ? เป็น Placeholder แล้วให้ Database Driver ทำการ Bind ข้อมูลแยกต่างหากเสมอ'
  ],
  [
    'เปิดไฟล์ backend/db.js เพื่อเขียนฟังก์ชัน search(keyword)',
    'เตรียมคำสั่ง SQL ที่ปลอดภัยด้วย const statement = db.prepare("SELECT * FROM customers WHERE name LIKE ?")',
    'ผูกค่าค้นหาเข้ากับ placeholder ด้วย statement.bind(["%" + keyword + "%"])',
    'วนลูปอ่านผลลัพธ์: while (statement.step()) rows.push(statement.getAsObject());',
    'ใช้บล็อก finally เพื่อเรียก statement.free() ปลดปล่อยทรัพยากรทุกครั้ง'
  ],
  sqlStarter,
  sqlSolution,
  apiTest(`test('SQL search and injection payload', async () => {
  const rows = await (await request('/api/search?keyword=Mali')).json();
  expect(rows.length, 'เมื่อค้นหาคำว่า Mali ต้องพบ 1 รายการ').toBe(1);
  expect(rows[0].name, 'ชื่อรายการที่พบต้องเป็น Mali').toBe('Mali');
  const attack = await (await request('/api/search?keyword=' + encodeURIComponent("' OR 1=1 --"))).json();
  expect(attack, 'เมื่อส่ง payload สำหรับ SQL Injection ต้องไม่หลุดข้อมูลทั้งหมดออกมา (ได้ array ว่าง)').toEqual([]);
  expect((await (await request('/api/search')).json()).length, 'เมื่อค้นหาแบบไม่ส่ง keyword ต้องแสดงรายการทั้งหมด 2 รายการ').toBe(2);
});`),
  ['ค้นหาชื่อบางส่วนได้', 'อธิบายได้ว่า SQL กับ ORM ต่างกันอย่างไร'],
  ['เปิดไฟล์ backend/db.js แล้ว await ready เพื่อรอฐานข้อมูล', 'ใช้ const statement = db.prepare("SELECT * FROM customers WHERE name LIKE ?");', 'ใน try/finally วนลูป while (statement.step()) แล้ว free statement เสมอ']
));

const prismaPackage = JSON.parse(packageFile);
Object.assign(prismaPackage.dependencies, { '@prisma/client': '6.19.0', prisma: '6.19.0', mysql2: '3.15.3' });
prismaPackage.scripts['db:setup'] = 'prisma db push && node prisma/seed.js';
const prismaFiles = {
  ...customerFiles,
  'package.json': JSON.stringify(prismaPackage, null, 2),
  'prisma/schema.prisma': `generator client {
  provider = "prisma-client-js"
}
datasource db {
  provider = "mysql"
  url = env("DATABASE_URL")
}
model Customer {
  id Int @id @default(autoincrement())
  name String
  email String @unique
}
`,
  'prisma/seed.js': `const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() { await prisma.customer.upsert({ where: {email:'mali@example.com'}, update:{}, create:{name:'Mali',email:'mali@example.com'} }); }
main().finally(() => prisma.$disconnect());`,
  'backend/db/prisma.js': `require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
module.exports = new PrismaClient();`,
  'backend/controllers/customers.js': `const prisma = require('../db/prisma.js');
exports.list = async (req, res, next) => { try { res.json(await prisma.customer.findMany({ where: { name: { contains: String(req.query.keyword || '') } }, orderBy: { id: 'asc' } })); } catch(e) { next(e); } };
exports.get = async (req,res,next) => { try { const item = await prisma.customer.findUnique({where:{id:Number(req.params.id)}}); return item ? res.json(item) : res.status(404).json({message:'Not found'}); } catch(e){next(e);} };
exports.create = async (req,res,next) => { try { const {name,email}=req.body; if(!name?.trim()||!email?.includes('@')) return res.status(400).json({message:'Invalid input'}); res.status(201).json(await prisma.customer.create({data:{name,email}})); } catch(e){next(e);} };
exports.update = async (req,res,next) => { try { const {name,email}=req.body; if(!name?.trim()||!email?.includes('@')) return res.status(400).json({message:'Invalid input'}); res.json(await prisma.customer.update({where:{id:Number(req.params.id)},data:{name,email}})); } catch(e){ if(e.code==='P2025') return res.status(404).json({message:'Not found'}); next(e); } };
exports.remove = async (req,res,next) => { try { await prisma.customer.delete({where:{id:Number(req.params.id)}}); res.json({message:'Deleted'}); } catch(e){ if(e.code==='P2025') return res.status(404).json({message:'Not found'}); next(e); } };
`,
  'Dockerfile': `FROM node:22-bookworm-slim
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
EXPOSE 3000 5173
CMD ["sh", "-c", "npm run db:setup && npm run dev"]
`,
  'compose.yaml': `services:
  app:
    build: .
    ports: ["5173:5173", "3000:3000"]
    environment:
      DATABASE_URL: mysql://student:practice@db:3306/lab
    depends_on:
      db:
        condition: service_healthy
  db:
    image: mysql:8.4
    environment:
      MYSQL_ROOT_PASSWORD: local-root-practice
      MYSQL_DATABASE: lab
      MYSQL_USER: student
      MYSQL_PASSWORD: practice
    volumes: ["practice-db:/var/lib/mysql"]
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 5s
      retries: 25
volumes:
  practice-db:
`,
  '.dockerignore': 'node_modules\ndist\n.git\n.env\n',
  '.env.example': 'DATABASE_URL="mysql://student:practice@localhost:3306/lab"\n',
  'README.md': '# Prisma + MySQL\n\nบทนี้ต้องใช้ Docker Desktop ที่พร้อมใช้งาน ไม่รัน MySQL ในเบราว์เซอร์\n\nส่งออก ZIP แตกไฟล์ แล้วรัน `docker compose up --build`\nระบบจะติดตั้งแพ็กเกจ สร้างตาราง และ seed ข้อมูลให้เอง\nเปิด http://localhost:5173\nตรวจงานจริง: `docker compose exec app npm test`\nหยุด: `docker compose down` (volume ยังอยู่)\n\nเลือก Prisma 6.19 แบบ schema URL เพื่อให้เทมเพลตสม่ำเสมอ ไม่ใช่การอ้างว่าเป็นรุ่นล่าสุด\n',
};
prismaFiles['backend/app.js'] = prismaFiles['backend/app.js'].replace('module.exports = app;', `app.use((error,req,res,next)=>{
  if(error.code==='P2002') return res.status(409).json({message:'Duplicate email'});
  console.error(error.message);
  res.status(500).json({message:'Database error'});
});
module.exports = app;`);
prismaFiles['README.md'] = `# Prisma + MySQL/MariaDB

## ทางเลือก A: Docker ที่พร้อมใช้
ต้องมี Docker Desktop ที่พร้อมใช้งานก่อน บทนี้ไม่รัน MySQL ในเบราว์เซอร์
ส่งออก ZIP แตกไฟล์ แล้วรัน:
docker compose up --build
ระบบจะติดตั้งแพ็กเกจ สร้างตาราง และ seed ข้อมูลให้เอง
เปิด http://localhost:5173
ตรวจ: docker compose exec app npm test
หยุด: docker compose down (ยังเก็บ volume)

## ทางเลือก B: XAMPP ที่ติดตั้งแล้ว
1. เปิด MySQL/MariaDB ใน XAMPP
2. สร้างฐานข้อมูลเฉพาะสำหรับฝึก เช่น fullstack_lab (ไม่ใช้ฐานข้อมูลงานจริง)
3. คัดลอก .env.example เป็น .env ใส่ user/password/port/ชื่อฐานข้อมูลของตัวเอง
4. npm install
5. npx prisma generate
6. npm run db:setup
7. npm run dev
8. npm test

ห้ามใช้ db push กับฐานข้อมูลที่มีงานจริง ในชุดฝึกใช้ฐานข้อมูลแยกเท่านั้น
ตัวอย่าง DATABASE_URL ใน .env.example เป็นค่าตัวอย่าง ไม่ใช่ข้อมูลเชื่อมต่อจริงของผู้เรียน
Prisma ตรึงที่ 6.19 เพื่อใช้ schema รูปแบบเดียวกัน ไม่ได้อ้างว่าเป็นรุ่นล่าสุด
`;
const prismaLesson = lesson('fs-15', 'Prisma + MySQL และ Docker ที่พร้อมใช้', '05 · ข้อมูลและ CRUD', 50, `${sources.full} 42–59; ${sources.auth} 3–19, 42–51`,
  [
    'Prisma คือเครื่องมือ Object-Relational Mapping (ORM) ยอดนิยมสำหรับ Node.js ที่ช่วยให้เราเขียนคำสั่งจัดการฐานข้อมูลด้วยฟังก์ชัน JavaScript แทนการเขียน SQL ดิบ โดยมี schema.prisma ทำหน้าที่นิยามโมเดลของตาราง และสร้าง Prisma Client (prisma.customer.findMany(...)) ให้อัตโนมัติ',
    'ในชุดฝึกนี้ นายสามารถเลือกใช้งานฐานข้อมูล MySQL จริงได้ 2 วิธี: ทางเลือก A (Docker Compose) เหมาะสำหรับเครื่องที่มี Docker Desktop ติดตั้งแล้ว รัน docker compose up --build ได้ทันที หรือ ทางเลือก B (XAMPP) รัน MySQL ในเครื่องแล้วระบุค่าในไฟล์ .env'
  ],
  [
    'เปิดไฟล์ backend/controllers/customers.js เติมฟังก์ชัน list ด้วย prisma.customer.findMany',
    'กำหนดเงื่อนไขค้นหา: where: { name: { contains: String(req.query.keyword || "") } } และเรียงลำดับ orderBy: { id: "asc" }',
    'ส่งออกโปรเจกต์เป็น ZIP เพื่อนำไปรันร่วมกับ Docker หรือ XAMPP ตามคู่มือใน README.md',
    'ตรวจการทำงานด้วย npm test หลังเชื่อมต่อฐานข้อมูลภายนอกเรียบร้อยแล้ว'
  ],
  { ...prismaFiles, 'backend/controllers/customers.js': prismaFiles['backend/controllers/customers.js'].replace(/exports.list = [^\n]+/, `exports.list = async (req,res) => res.status(501).json({message:'TODO findMany'});`) },
  prismaFiles,
  crudTests,
  ['restart container แล้วข้อมูลยังอยู่', 'ลองสร้างอีเมลซ้ำและจัดการ Prisma error เป็น 409'],
  ['เปิด backend/controllers/customers.js', 'ใน list ให้เรียก await prisma.customer.findMany({ where: { name: { contains: String(req.query.keyword || "") } }, orderBy: { id: "asc" } })', 'ตอบกลับข้อมูลด้วย res.json(...)']
);
prismaLesson.runtime = 'external';
lessons.push(prismaLesson);

lessons.push(lesson('fs-16', 'Register, login และ password hash', '06 · Authentication', 45, `${sources.auth} 21–31`,
  [
    'ระบบสมาชิกและความปลอดภัยเป็นพื้นฐานสำคัญของ Full Stack สิ่งต้องห้ามเด็ดขาดคือ การเก็บรหัสผ่านเป็นข้อความธรรมดา (Plain text) ลงในฐานข้อมูล เพราะหากฐานข้อมูลรั่วไหล รหัสผ่านของผู้ใช้ทุกคนจะถูกเปิดเผยทันที เราจึงต้องนำรหัสผ่านไปผ่านฟังก์ชันแฮชทางเดียวด้วยไลบรารี bcrypt (หรือ bcryptjs)',
    'กระบวนการ Register (สมัครสมาชิก): ตรวจสอบความถูกต้องของ userName, email และความยาว password (>= 8 ตัวอักษร) ตรวจสอบว่า userName หรือ email ไม่ซ้ำ จากนั้นแฮชรหัสผ่านด้วย await bcrypt.hash(password, 10) ก่อนบันทึก ส่วนกระบวนการ Login (เข้าสู่ระบบ): ค้นหาผู้ใช้จาก userName แล้วเปรียบเทียบรหัสผ่านด้วย await bcrypt.compare(password, user.passwordHash) หากไม่ตรงให้ตอบ 401 Unauthorized หากตรงให้สร้าง JWT token ส่งกลับ { token }'
  ],
  [
    'เปิดไฟล์ backend/routes/auth.js เพื่อเขียน Route สมัครและเข้าสู่ระบบ',
    'ใน POST /register: ตรวจสอบ userName, email และความยาวรหัสผ่าน >= 8 ตัวอักษร (ถ้าไม่ผ่านตอบ 400), ตรวจสอบ userName หรือ email ซ้ำ (ตอบ 409 ถ้าซ้ำ), แฮชรหัสผ่านด้วย await bcrypt.hash(password, 10), และบันทึกผู้ใช้โดยกำหนด role: "user"',
    'ใน POST /login: ค้นหาผู้ใช้ด้วย u.userName === req.body.userName และตรวจสอบรหัสผ่านด้วย await bcrypt.compare(String(req.body.password || ""), user.passwordHash)',
    'หากข้อมูลไม่ถูกต้องให้ตอบ 401, หากถูกต้องให้สร้าง token ด้วย jwt.sign({ userId: user.id, role: user.role }, secret, { expiresIn: "1h" }) แล้วตอบ res.json({ token })',
    'ทดสอบสมัครและเข้าสู่ระบบผ่านหน้าเว็บ Preview หรือแท็บ API Client'
  ],
  {
    ...authFiles,
    'backend/routes/auth.js': authFiles['backend/routes/auth.js'].replace(/router.post\('\/register',([\s\S]*?)router.get\('\/me'/, `router.post('/register', (req, res) => res.status(501).json({ message: 'TODO register' }));
router.post('/login', (req, res) => res.status(501).json({ message: 'TODO login' }));
router.get('/me'`)
  },
  authFiles,
  authTests,
  ['สมัครแล้วเข้าสู่ระบบได้', 'สมัครซ้ำแล้วเห็น error', 'ข้อมูลผู้ใช้ในตัวอย่างหายเมื่อ backend รีสตาร์ต'],
  ['ใน /register ตรวจสอบ store.users.some(u => u.userName === userName || u.email === email) เพื่อตอบ 409 เมื่อชื่อผู้ใช้หรืออีเมลซ้ำ', 'ใช้ const passwordHash = await bcrypt.hash(password, 10); ก่อนบันทึกลง store.users', 'ใน /login หา user จาก req.body.userName เปรียบเทียบรหัสผ่านด้วย await bcrypt.compare(String(req.body.password || ""), user.passwordHash) แล้วส่ง res.json({ token })']
));

lessons.push(lesson('fs-17', 'JWT, protected API และ logout', '06 · Authentication', 45, `${sources.auth} 32–40`,
  [
    'หลังจากผู้ใช้เข้าสู่ระบบสำเร็จ เซิร์ฟเวอร์จะไม่เก็บ session ไว้ในหน่วยความจำ แต่จะลงลายเซ็นดิจิทัลสร้าง JSON Web Token (JWT) ส่งกลับไปให้เบราว์เซอร์ จากนั้นในทุกๆ Request ถัดไป เบราว์เซอร์จะส่ง Token นี้มาใน HTTP Header: Authorization: Bearer <token>',
    'ฝั่งเซิร์ฟเวอร์จะสร้าง Middleware (verifyToken) เพื่อตรวจสอบ Token ก่อนอนุญาตให้เข้าถึง API ส่วนตัว โดยใช้ jwt.verify(token, secret) เพื่อตรวจสอบว่าลายเซ็นถูกต้องและ Token ยังไม่หมดอายุ จากนั้นเก็บ payload ลงใน req.user หากไม่มี Token หรือไม่ถูกต้อง ให้ตอบ 401 Unauthorized ทันที'
  ],
  [
    'เปิดไฟล์ backend/middleware/verifyToken.js',
    'ตรวจสอบ Header req.headers.authorization: หากไม่มีหรือไม่ได้ขึ้นต้นด้วย "Bearer " ให้ตอบกลับ res.status(401).json({ message: "Token required" })',
    'ตัดคำว่า "Bearer " ออกแล้วใช้ jwt.verify(token, secret) ภายในบล็อก try/catch',
    'หาก Token ถูกต้อง ให้กำหนด req.user = payload แล้วเรียก next() เพื่อส่งต่อไปยัง Route',
    'หากเกิด Error หรือ Token หมดอายุ ให้ตอบกลับ status 401',
    'ทดสอบสมัคร -> เข้าสู่ระบบ -> โหลดโปรไฟล์ -> ออกจากระบบ ผ่านหน้าเว็บหรือแท็บ API Client'
  ],
  {
    ...authFiles,
    'backend/middleware/verifyToken.js': `const jwt = require('jsonwebtoken');
const secret = process.env.JWT_KEY || 'practice-only-change-this-key';

module.exports = function verifyToken(req, res, next) {
  // TODO: 1. ตรวจสอบว่ามี req.headers.authorization และขึ้นต้นด้วย 'Bearer ' หรือไม่ (ถ้าไม่ตอบ 401)
  // TODO: 2. ดึง token ออกมา แล้ว verify ด้วย jwt.verify(token, secret)
  // TODO: 3. บันทึก payload ที่ได้ลง req.user แล้วเรียก next()
  // TODO: 4. หาก verify ไม่ผ่านให้ตอบกลับ status 401
  res.status(501).json({ message: 'Implement verifyToken' });
};
`
  },
  authFiles,
  authTests,
  ['logout แล้วเรียก API โดยไม่มี token ไม่ได้', 'เปิด URL ตรง ๆ ก็ยังต้องผ่าน API authentication', 'ไม่เก็บ secret จริงลง frontend'],
  ['ตรวจ const header = req.headers.authorization || ""; if (!header.startsWith("Bearer ")) return res.status(401)...', 'นำ token มาจาก header.slice(7)', 'ใน try ให้ใส่ req.user = jwt.verify(token, secret); next(); ส่วน catch ตอบ res.status(401)...']
));

function exercise(base, id, title, kind, minutes, description, manual) {
  return { ...base, id, title, kind, chapter: kind === 'exam' ? '08 · จำลองสอบ' : '07 · เวิร์กช็อป', minutes,
    difficulty: kind === 'exam' ? 'สอบปฏิบัติ' : 'ประยุกต์', paragraphs: [description, ...base.paragraphs], manual: [...manual, ...base.manual],
    rubric: [ { label: 'พฤติกรรมตามชุดตรวจอัตโนมัติ', points: 60 }, { label: 'ทดลองหน้าจอและกรณีผิดพลาดด้วยตนเอง', points: 25 }, { label: 'โครงสร้างไฟล์และ CSS ที่อ่านง่าย', points: 15 } ],
  };
}
export const workshops = [
  exercise(lessons.find(x => x.id === 'fs-05'), 'lab-restaurant', 'ร้านอาหารหลายหน้าด้วย Express', 'workshop', 60, 'ต่อยอดโจทย์ร้านอาหารในสไลด์ Node: สร้างหน้า Home/Menu/Order แยกไฟล์ HTML แล้วเชื่อมเมนูและ CSS ด้วย Express Router', ['เพิ่ม /item/:name/price/:price แสดงรายละเอียดเมนู', 'ใส่ลิงก์จากหน้ารายการไปหน้ารายละเอียดทุกเมนู']),
  exercise(lessons.find(x => x.id === 'fs-13'), 'lab-customers', 'Customer manager ตั้งแต่ API ถึงหน้าจอ', 'workshop', 75, 'ทำงานลูกค้าเต็ม flow ตาม Full2 โดยแยก CustomerForm, CustomerList และ service พร้อมสถานะกำลังบันทึกและ error', ['แยก form และ list เป็นคนละ component', 'เพิ่มการยืนยันก่อนลบและหน้าไม่มีข้อมูล']),
  exercise(lessons.find(x => x.id === 'fs-17'), 'lab-member', 'Member portal พร้อม login flow', 'workshop', 90, 'ทำเว็บไซต์สมาชิกหลายหน้า: Register, Login และ Home เชื่อม JWT ให้ครบ แล้วปรับ CSS ให้อ่านง่ายบนมือถือ', ['แยก pages/Register, Login, Home เป็นไฟล์เอง', 'เพิ่ม password confirmation และป้องกันการกดส่งซ้ำ']),
];
workshops[0].starter = makeProject({ ...restaurantFiles, 'backend/routes/pages.js': `const router=require('express').Router();
// TODO: ส่งไฟล์ Home / Menu / Order และเพิ่มรายละเอียด /item/:name/price/:price
module.exports=router;`, 'tests/goal.test.jsx': restaurantTests });
workshops[0].solution = makeProject({ ...restaurantFiles, 'tests/goal.test.jsx': restaurantTests });
workshops[0].previewPort = '3000';
workshops[0].entry = 'backend/routes/pages.js';
workshops[0].steps = ['สร้าง route /home, /menu และ /order โดยส่งไฟล์ HTML ใน public/', 'ให้ /item/:name/price/:price แสดงเมนูพร้อมราคาที่ตรวจสอบแล้ว', 'ใช้ CSS จาก /css/style.css และทำลิงก์แต่ละเมนู', 'เพิ่มหน้า 404 และทดลองหน้าร้านจาก port 3000'];
workshops[1].solution = { ...workshops[1].solution, ...splitCustomerFiles };
workshops[2].solution = { ...workshops[2].solution, ...memberFiles };
const foodWorkshop = lesson('lab-food', 'Full Stack เมนูร้านอาหาร', '07 · เวิร์กช็อป', 100, `${sources.full2} 23; ${sources.node} 110–111`,
  ['ต่อยอดงานท้าย Full2: ทำ FoodContainer, FoodForm และ FoodList เชื่อม backend เพื่อเพิ่ม ลบ แก้เมนู พร้อมประเภทอาหาร ราคา และป้ายขายดี', 'โจทย์เตรียม service และโครง API ให้แล้ว เก็บข้อมูลในหน่วยความจำเพื่อฝึก flow แยกจากบทฐานข้อมูลถาวร ลองเชื่อม model นี้กับ Prisma ได้เป็นงานต่อยอด'],
  ['เติม POST/PUT/DELETE ใน backend/routes/menu.js พร้อมตรวจชื่อ ราคา และประเภท', 'สร้าง FoodContainer, FoodForm, FoodList เป็นไฟล์เอง', 'ใช้ service โหลดเมนูและประเภท แล้วส่งราคากับ typeId เป็น number', 'เพิ่มหน้า Home/Menu ผ่าน React Router พร้อมกรองประเภท', 'ทำ CSS และทดลองเพิ่ม/แก้/ลบจาก Preview'],
  { ...foodFiles, 'backend/routes/menu.js': foodFiles['backend/routes/menu.js'].replace(/router.post[\s\S]*module.exports=router;/, `router.post('/',(req,res)=>res.status(501).json({message:'TODO create'}));
router.put('/:id',(req,res)=>res.status(501).json({message:'TODO update'}));
router.delete('/:id',(req,res)=>res.status(501).json({message:'TODO delete'}));
module.exports=router;`), 'frontend/App.jsx': 'export default function App(){return <main><h1>TODO: Home / Menu</h1></main>;}', 'tests/food-ui.test.jsx': foodUiTests },
  { ...foodFiles, 'tests/food-ui.test.jsx': foodUiTests }, foodTests,
  ['Home และ Menu เปลี่ยนหน้าผ่าน Link ได้', 'ราคาไม่ติดลบและส่งข้อมูลผิดแล้วเห็น error', 'กรองประเภทแล้วรายการเปลี่ยน', 'มีสถานะ loading/busy และหน้า 404']);
foodWorkshop.kind='workshop'; foodWorkshop.difficulty='ประยุกต์'; foodWorkshop.entry='frontend/App.jsx'; foodWorkshop.example=examples['fs-13'];
workshops.push(foodWorkshop);
const advancedSpecs = [
  {
    id:'lab-booking', title:'ระบบจองที่นั่งและป้องกันจองเกิน', minutes:120, source:`${sources.node} 14–42; ${sources.full} 29–41; ประยุกต์เพิ่มเติม`,
    paragraphs:['ควรผ่าน REST API และ React CRUD ก่อน เวิร์กช็อปนี้มีสถานะที่นั่งว่าง การยืนยันจอง รหัสสำหรับยกเลิก และการคืนที่นั่ง ไม่ใช่แค่บันทึกหรือลบรายการ', 'การตรวจจำนวนกับการหักที่นั่งต้องอยู่ติดกันโดยไม่มี await แทรกในบทข้อมูลหน่วยความจำนี้ เมื่อย้ายไปหลายโปรเซสหรือฐานข้อมูลจริงต้องใช้ transaction/locking ที่เหมาะสม', 'ผู้จองใช้รหัสการจองที่ server สร้างให้ยกเลิกได้ บทนี้ยังไม่ผูกการจองกับบัญชีผู้ใช้ รายการจองในหน้าจอเก็บเฉพาะรอบที่เปิดอยู่'],
    steps:['เติม POST /api/bookings ตรวจ eventId, ชื่อ และ seats ที่เป็นจำนวนเต็มบวก', 'ป้องกันจองเกิน capacity ด้วย status 409 และทดสอบคนแย่งที่นั่งสุดท้าย', 'เติม PATCH ยกเลิก ตรวจ X-Booking-Code แล้วคืนที่นั่งเพียงครั้งเดียว', 'เติม BookingForm และเชื่อมหน้า Booking ที่เตรียมไว้ พร้อม loading/error/busy', 'จัดหน้าจอแสดงที่นั่งว่าง การจองสำเร็จ และสถานะยกเลิก'],
    reference:bookingFiles, tests:bookingTests, ui:bookingUiTests,
    missing:{'backend/routes/booking.js':`const router=require('express').Router();
const events=[{id:1,title:'React Weekend',capacity:5,booked:0},{id:2,title:'Node API Lab',capacity:3,booked:0}];
router.get('/events',(req,res)=>res.json(events.map(e=>({...e,available:e.capacity-e.booked}))));
// TODO: bookings store, validate capacity, generate cancellation code
router.post('/bookings',(req,res)=>res.status(501).json({message:'TODO booking'}));
router.patch('/bookings/:id/cancel',(req,res)=>res.status(501).json({message:'TODO cancel'}));
module.exports=router;`, 'frontend/components/BookingForm.jsx': `export default function BookingForm(){return <section><h2>จองที่นั่ง</h2><p>TODO: ฟอร์มกิจกรรม ชื่อ และจำนวนที่นั่ง</p></section>;}`},
    manual:['จองจนเต็มแล้วปุ่มและข้อความสื่อความหมาย', 'ยกเลิกแล้วจำนวนว่างกลับเพิ่มขึ้นเพียงครั้งเดียว', 'ลองรหัสยกเลิกผิดแล้ว server ปฏิเสธ', 'หน้า Home/Booking มี navigation และ CSS บนมือถือ'],
    example:`// การเปลี่ยนสถานะต้องเกิดพร้อมกับการตรวจเงื่อนไข
if (requestedSeats > event.capacity - event.booked) {
  return res.status(409).json({message:'เต็มแล้ว'});
}
event.booked += requestedSeats;
// ถ้าใช้ฐานข้อมูลจริง ให้ดู transaction แทนการเช็กแล้วเขียนคนละรอบ`,
  },
  {
    id:'lab-inventory',title:'คลังสินค้า เบิก–รับคืน และประวัติ',minutes:120,source:`${sources.full} 29–41; ${sources.full2} 17–20; ประยุกต์เพิ่มเติม`,
    paragraphs:['ควรผ่าน CRUD, service layer และ controlled form ก่อน งานนี้เพิ่มกติกาการเคลื่อนไหวของ stock: รับเข้า/เบิกออกต้องมีจำนวนและเหตุผล ยอดห้ามติดลบ และต้องมีประวัติก่อน–หลังทุกครั้ง', 'version เป็นเลขที่เพิ่มเมื่อข้อมูลเปลี่ยน client ต้องส่ง version ที่โหลดมา server ปฏิเสธ 409 ถ้าไม่ตรง เพื่อให้ผู้เรียนเห็นปัญหาข้อมูลเก่า ในระบบฐานข้อมูลจริงต้องทำเงื่อนไข version และ update แบบ atomic', 'ข้อมูลและประวัติในบทนี้อยู่ในหน่วยความจำ การแก้จำนวนหน้าเว็บอย่างเดียวไม่ถือว่าเสร็จ ต้องให้ API ตรวจเงื่อนไขด้วย'],
    steps:['เติม POST /api/movements รับ productId/type/quantity/note/version', 'ห้าม quantity เป็นศูนย์ ทศนิยม หรือติดลบ และต้องมีเหตุผล', 'เบิกเกินยอดหรือส่ง version เก่าตอบ 409 โดยไม่เปลี่ยน stock', 'ทุกการเปลี่ยนยอดเพิ่ม version และสร้าง movement มี before/after', 'สร้างหน้า Inventory มี form, ยอดคงเหลือ และตารางหรือรายการประวัติ'],
    reference:inventoryFiles,tests:inventoryTests,ui:inventoryUiTests,
    missing:{'backend/routes/inventory.js':`const router=require('express').Router();
const products=[{id:1,name:'Keyboard',stock:10,version:1},{id:2,name:'Mouse',stock:5,version:1}];const movements=[];
router.get('/products',(req,res)=>res.json(products));router.get('/movements',(req,res)=>res.json(movements));
router.post('/movements',(req,res)=>res.status(501).json({message:'TODO stock movement'}));
module.exports=router;`, 'frontend/pages/Inventory.jsx':`export default function Inventory(){return <><h1>คลังสินค้า</h1><p>TODO: ยอดคงเหลือ ฟอร์มเบิก/รับคืน และประวัติ</p></>;}`},
    manual:['เบิกและรับคืนแล้วประวัติแสดงยอดก่อน–หลังถูกต้อง', 'เมื่อข้อมูลเก่า frontend แจ้งข้อผิดพลาดและโหลดข้อมูลใหม่', 'กดบันทึกซ้ำระหว่างรอไม่ได้', 'หน้า Guide อธิบาย flow และจัด CSS อ่านง่าย'],
    example:`// ลูกค้าส่ง version ที่เห็นตอนเปิดฟอร์มมาด้วย
if (request.version !== product.version) {
  return res.status(409).json({message:'โหลดข้อมูลล่าสุดก่อน'});
}
// บันทึก history และเพิ่ม version เมื่อปรับ stock สำเร็จ`,
  },
  {
    id:'lab-community',title:'ร้านอาหาร + รีวิว + สิทธิ์ guest/user/admin',minutes:150,source:`${sources.auth} 21–40, 53–55; ${sources.full2} 23`,
    paragraphs:['ควรผ่าน register/login, JWT, routing และ CRUD ก่อน เวิร์กช็อปนี้รวมหลายหน้ากับผู้ใช้สามระดับ: guest อ่านเมนู, สมาชิกให้คะแนนและจัดการรีวิวของตัวเอง, admin จัดการเมนูและลบรีวิวได้', 'ต้องตรวจ role และเจ้าของข้อมูลฝั่ง API แม้ผู้เรียนจะเรียก endpoint ตรงจาก API Client การซ่อนปุ่มใน React ช่วยการใช้งาน แต่ไม่ใช่การบังคับสิทธิ์', 'คะแนนต้องเป็นจำนวนเต็ม 1–5 สมาชิกรีวิวเมนูเดียวได้ครั้งเดียว และค่าเฉลี่ยต้องคำนวณใหม่หลังแก้หรือลบ ใช้บัญชีฝึก member/member12345 และ admin/admin12345 ที่เตรียมให้ ข้อมูลเป็นหน่วยความจำและรีเซ็ตเมื่อ server เริ่มใหม่'],
    steps:['เติม routes/community.js แยก public, authenticated และ admin endpoints', 'สร้าง/แก้/ลบเมนูต้องเป็น admin ตรวจข้อมูลและคืน 401/403 ให้ถูกต้อง', 'สมาชิกให้คะแนน 1–5 ได้หนึ่งครั้งต่อเมนู แก้ของคนอื่นไม่ได้', 'ทำค่าเฉลี่ยและจำนวนรีวิวใน GET /api/menu แล้วอัปเดตหลังลบ', 'เติม CommunityMenu และ AdminMenu พร้อมเชื่อมหน้ารายละเอียด/Login/Register', 'ลองทั้งสามสิทธิ์และเรียก API ตรงเพื่อยืนยันว่า server ป้องกันจริง'],
    reference:reviewFiles,tests:reviewTests,ui:reviewUiTests,
    missing:{'backend/routes/community.js':`const router=require('express').Router();
const menu=[{id:1,name:'ข้าวผัด',price:60,average:0,reviewCount:0},{id:2,name:'ชาไทย',price:35,average:0,reviewCount:0}];
router.get('/menu',(req,res)=>res.json(menu));router.get('/menu/:id/reviews',(req,res)=>res.json([]));
// TODO: authenticated / admin guards, ownership, reviews and rating aggregate
router.post('/menu',(req,res)=>res.status(501).json({message:'TODO admin create'}));
router.post('/menu/:id/reviews',(req,res)=>res.status(501).json({message:'TODO review'}));
module.exports=router;`, 'frontend/pages/CommunityMenu.jsx':`export default function CommunityMenu(){return <><h1>Community menu</h1><p>TODO: เมนู ค่าเฉลี่ย จำนวนรีวิว และลิงก์รายละเอียด</p></>;}`, 'frontend/pages/AdminMenu.jsx':`export default function AdminMenu(){return <><h1>Admin · จัดการเมนู</h1><p>TODO: form และรายการเมนูสำหรับผู้ดูแล</p></>;}`},
    manual:['guest เปิดอ่านได้ แต่ให้คะแนนต้อง login', 'member เข้า /admin ตรง ๆ แล้วเจอ 403', 'admin เพิ่ม/แก้/ลบเมนูและลบรีวิวได้จริง', 'logout แล้วปุ่มและหน้าที่เข้าถึงได้เปลี่ยนทันที', 'แยกหน้า service และ middleware เป็นไฟล์ที่เข้าใจง่าย'],
    example:`// ต้องใช้ข้อมูลผู้ใช้ที่ server ตรวจสอบแล้ว
if (req.account.role !== 'admin') {
  return res.status(403).json({message:'Admin only'});
}
// เช่นเดียวกับการแก้รีวิว: review.userId ต้องตรงกับบัญชีที่ login`,
  },
];
for(const spec of advancedSpecs){
  const activity=lesson(spec.id,spec.title,'07 · เวิร์กช็อป',spec.minutes,spec.source,spec.paragraphs,spec.steps,
    {...spec.reference,...spec.missing,'tests/workflow-ui.test.jsx':spec.ui},
    {...spec.reference,'tests/workflow-ui.test.jsx':spec.ui},spec.tests,spec.manual);
  Object.assign(activity,{kind:'workshop',difficulty:'ท้าทาย',entry:'frontend/App.jsx',example:spec.example,rubric:[{label:'กติกาและการตรวจข้อมูลใน API',points:50},{label:'flow บนหน้าจอและกรณีผิดพลาด',points:30},{label:'โครงสร้างไฟล์และ CSS',points:20}]});
  workshops.push(activity);
}
export const exams = [
  exercise(lessons.find(x => x.id === 'fs-12'), 'exam-api', 'สอบ A · เติม REST API จากเทมเพลต', 'exam', 60, 'ได้รับ frontend และ routes มาแล้ว ต้องเติม controller ให้รองรับ CRUD/search และ status codes พร้อมลองหน้าเว็บ ข้อสอบนี้วัด backend เป็นหลัก', ['จัดการ body ว่างและ id ไม่มี', 'ลอง frontend เพิ่ม/แก้/ลบจริง']),
  exercise(lessons.find(x => x.id === 'fs-13'), 'exam-react', 'สอบ B · พัฒนา React จาก API ที่ให้', 'exam', 90, 'ได้รับ backend CRUD และ service มาแล้ว ให้สร้างหน้าจอ จัด CSS แยก component และเชื่อมทุกคำสั่งเข้าด้วยกัน', ['เพิ่มหน้า Home และ Customers พร้อม navigation', 'การแก้ไขและลบต้องสะท้อนในหน้าจอทันที']),
  exercise(lessons.find(x => x.id === 'fs-16'), 'exam-auth', 'สอบ C · ระบบสมาชิกและ protected API', 'exam', 120, 'ได้รับโครงหน้าเว็บและ store ให้เติม register/login พร้อมป้องกัน API จากนั้นทดสอบ flow ผู้ใช้และจัดการข้อผิดพลาดครบถ้วน', ['เพิ่ม ProtectedRoute ฝั่ง React และคงการตรวจ token ฝั่ง backend', 'ห้ามให้ผู้สมัครกำหนด role admin เอง']),
];
const gearRequirements = `# CAMPUS GEAR — สอบปฏิบัติ Full Stack\n\nเวลา 4 ชั่วโมง · คะแนน 100 · React + Express · ระบบข้อมูลจำลองพร้อมใช้\n\nเปิดไฟล์ reference/index.html เพื่อดูเว็บตัวอย่างแบบออฟไลน์ ภาพเป้าหมายอยู่ที่ reference/campus-gear-target.png\n\n## การรัน\n\n- npm install แล้ว npm run reset และ npm run dev\n- React: http://localhost:5173 · API: http://localhost:3000\n- บัญชีสาธิต: admin@campus.test, mali@campus.test, niran@campus.test · รหัสผ่าน Campus123!\n- ใช้ JSON store ใน backend/data/db.json เพื่อให้เริ่มทำได้ทันที ไม่ต้องติดตั้งฐานข้อมูล\n\n## Requirements และคะแนน\n\n### R01 โครงหน้าและการนำทาง · 8\nHome, คลัง, รายละเอียด, login, register, รายการของฉัน, คิว admin, จัดการคลัง, 404 และ responsive layout\n\n### R02 สมัครและเข้าสู่ระบบ · 10\nตรวจชื่อ/อีเมล/password, อีเมลไม่ซ้ำและ normalize, hash ด้วย bcrypt, JWT หมดอายุ และห้ามผู้สมัครกำหนด role\n\n### R03 ค้นหาและกรองคลัง · 8\nGET equipment รองรับ search/category/availableOnly/sort; detail ตรวจ stock ตามช่วงวัน; ไม่พบ id ตอบ 404\n\n### R04 วันที่และจำนวนว่าง · 12\nตรวจวันที่จริง, ไม่ย้อนหลัง, from ≤ to, สูงสุด 7 วัน; pending/approved ที่ทับซ้อนกันนับทุกวัน; ตอบจำนวนว่างต่ำสุดในช่วง\n\n### R05 สร้าง/ดูรายการจอง · 12\nต้อง login; ตรวจ item/quantity/date/stock; ยอดมัดจำต่อชิ้นคูณจำนวน; เริ่ม pending; ดูของตนและกรองสถานะได้ (admin ดูทั้งหมด)\n\n### R06 ยกเลิกรายการ · 8\nเจ้าของยกเลิกรายการ active ได้เท่านั้น; ตรวจ 403/404/409 ให้ถูก; cancelled คืน stock\n\n### R07 งาน admin และ transition · 10\nเฉพาะ admin เปลี่ยน pending→approved/rejected และ approved→returned; transition ผิดคืน 409; ป้องกันสิทธิ์ฝั่ง API\n\n### R08 CRUD อุปกรณ์ · 10\nAdmin เพิ่ม/แก้/ลบ; ตรวจข้อมูลและ code ซ้ำ; ป้องกันลด stock ต่ำกว่ายอดจอง active หรือลบอุปกรณ์ที่ยังถูกจอง\n\n### R09 Summary · 5\nจำนวนอุปกรณ์, stock รวม, active booking, pending และมัดจำรวม โดยไม่นับ cancelled/rejected/returned\n\n### R10 ต่อ flow หน้าเว็บครบ · 10\nเชื่อม React ทุกหน้ากับ API จริง; loading/error/success/empty; เช็ก availability และทำ booking/admin flow ได้\n\n### R11 คุณภาพและส่งงาน · 7\nแบ่ง route/controller/service, ทดสอบ success และ edge case, HTTP status เหมาะสม, secret อยู่ฝั่ง server, CSS responsive และ README วิธีรัน\n\n## ขอบเขตการคิดคะแนน\n\nรวมวันเริ่มและสิ้นสุดในการตรวจช่วง; รายการที่แตะวันเดียวกันถือว่าทับซ้อน; ตรวจ stock กับบันทึก booking ใน store transaction เดียวโดยไม่มี await คั่น; error ส่ง JSON {message}; ห้ามส่ง hash/secret ไป client. ชุดทดสอบเป็นเพียงส่วนช่วยตรวจ ไม่ใช่คะแนนทั้งหมด.`;
const gearStarter = {
  ...gearBase,
  ...gearUi,
  'frontend/styles.css':gearCss,
  'backend/services/gear.js': gearService,
  'backend/controllers/gear.js': gearStarterController,
  'EXAM_REQUIREMENTS.md': gearRequirements,
  'README.md': `# CAMPUS GEAR — Full Stack Exam Starter\n\n1. ติดตั้งแพ็กเกจและรัน: npm install && npm run reset && npm run dev\n2. หน้าเว็บ React: http://localhost:5173 · Backend API: http://localhost:3000\n3. บัญชีทดสอบ: admin@campus.test, mali@campus.test · รหัสผ่าน Campus123!\n\nโปรเจกต์นี้จัดเตรียมโครงสร้าง UI หน้าจอ Responsive, components, และระบบ Backend JSON store ไว้พร้อมให้ต่อยอด ไม่ต้องเริ่มเขียน HTML หรือฟอร์มจาก 0`,
};
const gearTests = `import { beforeAll, afterAll, test, expect } from 'vitest';
import { createRequire } from 'node:module';import os from 'node:os';import path from 'node:path';import fs from 'node:fs';
const require=createRequire(import.meta.url);const dir=fs.mkdtempSync(path.join(os.tmpdir(),'campus-gear-'));process.env.EXAM_DB_FILE=path.join(dir,'db.json');process.env.JWT_KEY='test-key-campus-gear';const app=require('../backend/app.js');const seed=require('../backend/seed.js');const store=require('../backend/store.js');let server,base;
beforeAll(async()=>{store.update(db=>{for(const k of Object.keys(db))delete db[k];Object.assign(db,seed());});server=app.listen(0,'127.0.0.1');await new Promise(r=>server.once('listening',r));base='http://127.0.0.1:'+server.address().port;});afterAll(async()=>{await new Promise(r=>server.close(r));fs.rmSync(dir,{recursive:true,force:true});});
const req=(url,method='GET',body,token)=>fetch(base+url,{method,headers:{'Content-Type':'application/json',...(token?{Authorization:'Bearer '+token}:{})},...(body===undefined?{}:{body:JSON.stringify(body)})});const login=async(email)=>{const r=await req('/api/auth/login','POST',{email,password:'Campus123!'});return (await r.json()).token;};
test('R02 auth: register forces student, hashes password, rejects duplicate',async()=>{let r=await req('/api/auth/register','POST',{name:'New Member',email:'NEW@campus.test',password:'Another123!',role:'admin'});expect(r.status).toBe(201);const u=await r.json();expect(u.role).toBe('student');expect(u.passwordHash).toBeUndefined();r=await req('/api/auth/register','POST',{name:'Again',email:'new@campus.test',password:'Another123!'});expect(r.status).toBe(409);});
test('R04/R05 overlapping booking cannot exceed stock and ownership is enforced',async()=>{const user=await login('mali@campus.test'),other=await login('niran@campus.test');let r=await req('/api/bookings','POST',{equipmentId:4,quantity:2,from:'2099-01-01',to:'2099-01-02'},user);expect(r.status).toBe(201);expect((await r.json()).deposit).toBe(1000);r=await req('/api/bookings','POST',{equipmentId:4,quantity:1,from:'2099-01-02',to:'2099-01-03'},other);expect(r.status).toBe(409);r=await req('/api/bookings/5/cancel','PATCH',{},other);expect(r.status).toBe(403);});
test('R06/R07 state transitions require ownership and admin permission',async()=>{const user=await login('mali@campus.test'),admin=await login('admin@campus.test');let r=await req('/api/bookings/2/status','PATCH',{status:'approved'},user);expect(r.status).toBe(403);r=await req('/api/bookings/2/status','PATCH',{status:'returned'},admin);expect(r.status).toBe(409);r=await req('/api/bookings/2/status','PATCH',{status:'approved'},admin);expect(r.status).toBe(200);r=await req('/api/bookings/2/status','PATCH',{status:'returned'},admin);expect(r.status).toBe(200);});
test('R03/R04 search and date validation return useful HTTP codes',async()=>{let r=await req('/api/equipment?search=Sony');expect((await r.json()).length).toBe(1);r=await req('/api/equipment/1?from=2099-02-31&to=2099-03-01');expect(r.status).toBe(400);r=await req('/api/equipment/999');expect(r.status).toBe(404);});`;
const gearManual = ['ลองสมัครและเข้าสู่ระบบทั้ง admin/student แล้วเปิด URL admin ด้วย student โดยตรง','ทดลอง booking ชนวันกันที่ stock เต็ม และเช็กการยกเลิกคืน stock','ทดสอบ transition สถานะผิดขั้นและปรับ stock ขณะยังมีรายการ active','ลองทุก flow บนมือถือและเปิด reference/index.html เทียบหน้าจอ','เขียน README อธิบายข้อจำกัดและวิธี reset ข้อมูล'];
const gearExam = {
  ...exams[2], id:'exam-campus-gear', title:'สอบ D · CAMPUS GEAR ระบบยืมอุปกรณ์', chapter:'08 · จำลองสอบ', minutes:240, difficulty:'ยาก · 100 คะแนน', entry:'backend/services/gear.js', previewPort:'5173', runtime:'webcontainer',
  paragraphs:['สร้างเว็บระบบจองยืมอุปกรณ์มหาวิทยาลัยจากเทมเพลตหลายไฟล์ ผู้ใช้และ admin มีสิทธิ์และ flow ต่างกัน ต้องคำนวณ stock ตามวันที่และเชื่อม React กับ Express ครบระบบ','เปิด requirements และภาพเป้าหมายก่อนเริ่ม ชุดนี้เตรียม Node, React, Express, JSON store และบัญชีตัวอย่างไว้แล้ว ไม่ต้องติดตั้ง Docker, XAMPP หรือฐานข้อมูล','เวลาสอบ 240 นาที · คะแนน 100 · ดาวน์โหลดชุดโจทย์ ZIP เพื่อทำบนเครื่องได้โดยไม่ต้องออนไลน์'],
  steps:['R01 · ทำ navigation และหน้า Home/Catalog/Detail/Auth/My bookings/Admin/Inventory responsive (8 คะแนน)','R02–R03 · ทำ register/login ด้วย bcrypt/JWT และ API ค้นหา/กรองอุปกรณ์พร้อม availability ตามวันที่ (18 คะแนน)','R04–R05 · ตรวจวันที่และ stock แบบ inclusive; สร้าง booking กันจองเกินจำนวนและแสดงยอดมัดจำ (24 คะแนน)','R06–R07 · เจ้าของยกเลิก; admin อนุมัติ/ปฏิเสธ/รับคืนตามลำดับสถานะและตรวจ role ฝั่ง API (18 คะแนน)','R08–R09 · ทำ CRUD inventory ปลอดภัยกับรายการ active และ dashboard summary (15 คะแนน)','R10–R11 · เชื่อมทุกหน้ากับ API จัดการ loading/error/empty ทดสอบกรณีขอบ เขียน README และเทียบภาพอ้างอิง (17 คะแนน)'],
  manual:gearManual, rubric:[{label:'R01 · หน้าเว็บและการนำทาง',points:8},{label:'R02 · สมัคร/เข้าสู่ระบบและความปลอดภัย',points:10},{label:'R03 · ค้นหาและกรองคลัง',points:8},{label:'R04 · วันที่/availability/จองไม่เกิน stock',points:24},{label:'R05–R07 · รายการและสิทธิ์/transition',points:18},{label:'R08–R09 · CRUD และ summary admin',points:15},{label:'R10–R11 · React flow, UX, tests, README',points:17}],
  requirements:[
    ['R01 · โครงหน้าและการนำทาง',8,'ทำ Home, Catalog, Detail, Login, Register, My bookings, Admin queue, Inventory, 404 และ layout responsive'],
    ['R02 · สมัครสมาชิกและ login',10,'ตรวจข้อมูล, email ไม่ซ้ำและ normalize, hash bcrypt, JWT มีอายุ, บังคับ role student ตอนสมัคร'],
    ['R03 · ค้นหาและกรองคลัง',8,'search/category/availableOnly/sort และ detail พร้อม availability ตามช่วงวันที่'],
    ['R04 · วันและจำนวนพร้อมยืม',12,'วันที่จริง, ไม่ย้อนหลัง, ช่วงไม่เกิน 7 วัน; pending/approved ทับซ้อนนับรายวันและตอบ stock ต่ำสุดของช่วง'],
    ['R05 · สร้างและดูรายการจอง',12,'ตรวจ login, quantity, item, stock; มัดจำต่อชิ้น × จำนวน; pending; ผู้ใช้เห็นของตนและกรอง status'],
    ['R06 · ยกเลิกคำขอ',8,'ยกเลิกได้เฉพาะเจ้าของและ active; ตอบ 403/404/409 ตามกรณี; ยกเลิกแล้วคืน stock'],
    ['R07 · สิทธิ์และสถานะ booking',10,'Admin เท่านั้น: pending→approved/rejected, approved→returned; ปฏิเสธ transition ผิด'],
    ['R08 · จัดการคลังอุปกรณ์',10,'Admin CRUD, validate, ป้องกันรหัสซ้ำ, stock ต่ำกว่ายอด active, และลบรายการที่ถูกจอง'],
    ['R09 · Dashboard admin',5,'equipment count, stock รวม, active/pending bookings และมัดจำรวม'],
    ['R10 · ต่อหน้าเว็บกับ API',10,'เชื่อม flow จริงทุกหน้า มี loading, error, success, empty และป้องกันการส่งซ้ำ'],
    ['R11 · คุณภาพและส่งงาน',7,'route/controller/service, tests, HTTP status, secret ฝั่ง server, CSS responsive และ README วิธีรัน'],
  ],
  starter: { ...gearStarter, 'tests/goal.test.jsx':gearTests },
  solution: { ...gearBase, ...gearUi, 'frontend/styles.css':gearCss, 'backend/services/gear.js':gearService, 'backend/controllers/gear.js':gearController, 'EXAM_REQUIREMENTS.md':gearRequirements, 'tests/goal.test.jsx':gearTests },
  referenceImage:'exams/campus-gear/campus-gear-target.png',
};
exams.push(gearExam);

// Exam A (exam-api): Controller scaffolding with parameter validation and status codes
exams[0].starter['backend/controllers/customers.js'] = `let customers = [{ id: 1, name: 'Mali', email: 'mali@example.com' }];
let nextId = 2;

// GET /api/customers - ดึงรายการลูกค้าทั้งหมด หรือค้นหาด้วย ?keyword=
exports.list = (req, res) => {
  const keyword = String(req.query.keyword || '').toLowerCase();
  res.json(customers.filter(c => c.name.toLowerCase().includes(keyword)));
};

// GET /api/customers/:id - ดึงข้อมูลลูกค้าตาม ID
exports.get = (req, res) => {
  const item = customers.find(c => c.id === Number(req.params.id));
  return item ? res.json(item) : res.status(404).json({ message: 'Not found' });
};

// POST /api/customers - สร้างลูกค้าใหม่
// 📌 สเปก: ตรวจสอบว่า req.body มี name และ email หรือไม่ ถ้าไม่มีให้ตอบ 400 Bad Request
// 📌 เมื่อผ่าน ให้สร้าง { id: nextId++, name, email } บันทึกลง customers และตอบ status 201
exports.create = (req, res) => {
  const { name, email } = req.body || {};
  if (!name || !email) {
    return res.status(400).json({ message: 'กรุณากรอกชื่อและอีเมลให้ครบถ้วน' });
  }
  const newCustomer = { id: nextId++, name, email };
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
};

// PUT /api/customers/:id - แก้ไขข้อมูลลูกค้า
// 📌 สเปก: หากไม่พบ ID ให้ตอบ status 404 Not Found, หากพบให้อัปเดตและตอบ status 200
exports.update = (req, res) => {
  const item = customers.find(c => c.id === Number(req.params.id));
  if (!item) {
    return res.status(404).json({ message: 'ไม่พบลูกค้ารหัสนี้' });
  }
  const { name, email } = req.body || {};
  if (name) item.name = name;
  if (email) item.email = email;
  res.status(200).json(item);
};

// DELETE /api/customers/:id - ลบข้อมูลลูกค้า
// 📌 สเปก: หากไม่พบ ID ให้ตอบ status 404 Not Found, หากพบให้ลบและตอบ status 200
exports.remove = (req, res) => {
  const index = customers.findIndex(c => c.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'ไม่พบลูกค้ารหัสนี้' });
  }
  customers.splice(index, 1);
  res.status(200).json({ message: 'Customer deleted' });
};
`;

// Exam B (exam-react): Full React scaffolding with form labels ('ชื่อ', 'อีเมล', 'เพิ่มลูกค้า') and alert role
exams[1].starter['frontend/App.jsx'] = `import React, { useState, useEffect } from 'react';
import { customerApi } from './services/customerApi';

export default function App() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // 1. โหลดข้อมูลลูกค้าจาก API เมื่อเปิดหน้าเว็บ
  const fetchCustomers = async () => {
    try {
      setError(null);
      setLoading(true);
      const data = await customerApi.list();
      setCustomers(data);
    } catch (err) {
      setError('ไม่สามารถโหลดข้อมูลลูกค้าได้: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  // 2. จัดการเมื่อกดปุ่มบันทึกลูกค้า
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    try {
      setError(null);
      await customerApi.create({ name, email });
      setName('');
      setEmail('');
      await fetchCustomers();
    } catch (err) {
      setError('บันทึกข้อมูลไม่สำเร็จ: ' + err.message);
    }
  };

  return (
    <main className="container" style={{ padding: '24px', maxWidth: '640px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ color: '#0f172a', marginBottom: '16px' }}>จัดการลูกค้า</h1>

      {/* ข้อความแจ้งเตือน Error (role="alert" ตามสเปก) */}
      {error && (
        <div role="alert" style={{ background: '#fee2e2', color: '#dc2626', border: '1px solid #fecaca', padding: '10px 14px', borderRadius: '6px', marginBottom: '16px', fontWeight: '500' }}>
          {error}
        </div>
      )}

      {/* ฟอร์มเพิ่มลูกค้าใหม่ (มี label "ชื่อ" และ "อีเมล" ตามสเปก) */}
      <form onSubmit={handleSubmit} style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '24px' }}>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', color: '#1e293b' }}>เพิ่มลูกค้าใหม่</h3>
        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="name-input" style={{ display: 'block', marginBottom: '4px', fontSize: '13px', fontWeight: '600', color: '#334155' }}>ชื่อ</label>
          <input
            id="name-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="กรอกชื่อลูกค้า เช่น สมชาย"
            style={{ width: '100%', padding: '8px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '14px' }}
          />
        </div>
        <div style={{ marginBottom: '14px' }}>
          <label htmlFor="email-input" style={{ display: 'block', marginBottom: '4px', fontSize: '13px', fontWeight: '600', color: '#334155' }}>อีเมล</label>
          <input
            id="email-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="กรอกอีเมล เช่น somchai@example.com"
            style={{ width: '100%', padding: '8px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '14px' }}
          />
        </div>
        <button
          type="submit"
          style={{ background: '#0284c7', color: '#ffffff', border: 'none', padding: '8px 18px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}
        >
          เพิ่มลูกค้า
        </button>
      </form>

      {/* ตาราง/รายการรายชื่อลูกค้า */}
      <section>
        <h3 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '12px' }}>รายชื่อลูกค้าทั้งหมด</h3>
        {loading && <p style={{ color: '#64748b' }}>กำลังโหลดข้อมูล...</p>}
        {customers.length === 0 && !loading && <p style={{ color: '#94a3b8' }}>ยังไม่มีข้อมูลลูกค้า</p>}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {customers.map((c) => (
            <li key={c.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid #e2e8f0', background: '#ffffff' }}>
              <div>
                <strong style={{ color: '#0f172a' }}>{c.name}</strong>
                <span style={{ color: '#64748b', marginLeft: '8px', fontSize: '13px' }}>({c.email})</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
`;

// Exam C (exam-auth): Scaffolding for register/login routes with password hashing and JWT
exams[2].starter['backend/routes/auth.js'] = `const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const store = require('../auth-store.js');
const verifyToken = require('../middleware/verifyToken.js');
const secret = process.env.JWT_KEY || 'practice-only-change-this-key';

// POST /api/auth/register - สมัครสมาชิกใหม่
router.post('/register', async (req, res) => {
  const { userName, email, password } = req.body || {};
  if (!userName || !email || !password) {
    return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
  }
  const exists = store.users.some(u => u.userName === userName || u.email === email);
  if (exists) {
    return res.status(409).json({ message: 'ชื่อผู้ใช้หรืออีเมลนี้ถูกใช้งานแล้ว' });
  }
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = { id: store.nextId++, userName, email, passwordHash, role: 'user' };
    store.users.push(newUser);
    return res.status(201).json({ id: newUser.id, userName: newUser.userName, email: newUser.email, role: newUser.role });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// POST /api/auth/login - เข้าสู่ระบบและรับ JWT Token
router.post('/login', async (req, res) => {
  const { userName, email, password } = req.body || {};
  const user = store.users.find(u => (userName && u.userName === userName) || (email && u.email === email));
  if (!user) {
    return res.status(401).json({ message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' });
  }
  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) {
    return res.status(401).json({ message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' });
  }
  const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1d' });
  return res.status(200).json({ token, user: { id: user.id, userName: user.userName, role: user.role } });
});

router.get('/me', verifyToken, (req, res) => {
  const user = store.users.find(u => u.id === req.user.userId);
  if (!user) return res.status(401).json({ message: 'Unknown user' });
  res.json({ id: user.id, userName: user.userName, role: user.role });
});

module.exports = router;
`;

// In this exam both registration and token verification are left to the learner.
exams[2].starter = { ...exams[2].starter, 'backend/middleware/verifyToken.js': lessons.find(x => x.id === 'fs-17').starter['backend/middleware/verifyToken.js'] };
exams[1].solution = { ...exams[1].solution, ...routedCustomerFiles };
exams[2].solution = { ...exams[2].solution, ...memberFiles };

const storeHubExam = {
  id: 'exam-store-hub',
  title: 'สอบ E · Store & Order Hub (Full Stack จากศูนย์)',
  chapter: '08 · จำลองสอบ',
  minutes: 180,
  source: 'ch7 FullStack_2 · หน้า 23; ch8 Authen · สอบปฏิบัติสร้างจากศูนย์',
  difficulty: 'ท้าทายพิเศษ · 100 คะแนน',
  entry: 'frontend/App.jsx',
  previewPort: '5173',
  runtime: 'webcontainer',
  paragraphs: [
    'ข้อสอบ Full Stack ท้าทายสร้างจากศูนย์: พัฒนาระบบคลังสินค้าและการสั่งซื้อเชื่อมต่อระหว่าง React และ Express',
    'ระบบจัดเตรียมเฉพาะ package.json, proxy config และระบุรูปแบบ format ของฟิลด์/Label ที่แน่นอนไว้ให้ เพื่อให้คุณได้ออกแบบโครงสร้างคอมโพเนนต์และเขียน API ด้วยตนเอง',
    'ดูเว็บตัวอย่างจริงที่จำลองเล่นได้ในแท็บ "👁️ ตัวอย่างผลลัพธ์ (Demo)" เพื่อดู flow และพฤติกรรมของระบบก่อนลงมือเขียน',
  ],
  steps: [
    '1. ทำความเข้าใจ format ของข้อมูลและ endpoints จาก EXAM_REQUIREMENTS.md และลองเล่น Demo จำลองในแผงขวา',
    '2. สร้างหน้าจอ React แสดงรายการสินค้าจาก GET /api/products',
    '3. สร้างฟอร์มเพิ่มสินค้าใหม่ (ชื่อ, ราคา, สต็อก) และส่ง POST /api/products พร้อมตรวจข้อมูลผิดพลาด (400 Bad Request)',
    '4. สร้างระบบสั่งซื้อสินค้า ตรวจสอบสต็อกคงเหลือ และส่ง POST /api/orders เพื่อตัดสต็อกสินค้าและบันทึกออเดอร์',
    '5. แสดงตารางสินค้าที่อัปเดตสต็อกแบบ Real-time และประวัติการสั่งซื้อ พร้อมจัดการข้อผิดพลาดด้วย role="alert"',
  ],
  manual: [
    'ทดลองเพิ่มสินค้าใหม่และตรวจสอบว่าปรากฏในตารางทันที',
    'ทดลองสั่งซื้อสินค้าในจำนวนที่มากกว่าสต็อกและตรวจสอบว่าระบบแจ้งเตือนข้อผิดพลาด',
    'ทดลองสั่งซื้อสินค้าสำเร็จและตรวจสอบว่าสต็อกถูกหักลดลงอย่างถูกต้อง',
  ],
  rubric: [
    { label: 'ความถูกต้องของ REST API & Validation (400, 404, 409, 201)', points: 40 },
    { label: 'การทำงานของ React State, ฟอร์ม และการตัดสต็อก', points: 35 },
    { label: 'การจัดการ Error handling (role="alert") และ UX', points: 25 },
  ],
  requirements: [
    ['R01 · ข้อมูลและ REST API', 40, 'GET /api/products, POST /api/products, POST /api/orders และ GET /api/orders พร้อม HTTP Status Codes'],
    ['R02 · หน้าจอ React & ฟอร์ม', 35, 'ตารางสินค้า, ฟอร์มเพิ่มสินค้าพร้อม Label ที่ระบุ, และฟอร์มสั่งซื้อตัดสต็อก'],
    ['R03 · Validation & Error Feedback', 25, 'ตรวจสต็อกไม่พอ, ข้อมูลว่าง, และแสดงแจ้งเตือนผ่าน role="alert"'],
  ],
  starter: { ...storeHubStarter, 'tests/goal.test.jsx': storeHubTests },
  solution: { ...storeHubSolution, 'tests/goal.test.jsx': storeHubTests },
  kind: 'exam',
};
exams.push(storeHubExam);

const finalPracticeExam = {
  id: 'exam-final-practice',
  title: 'สอบ F · ฝึกสอบปลายภาค Full Stack (Multi-Page + Role + DB .sql)',
  chapter: '08 · จำลองสอบ',
  minutes: 240,
  source: 'รวมทุกบท ch5 Node · ch6 React · ch7 FullStack 1–2 · ch8 Auth & Role',
  difficulty: 'ข้อสอบปลายภาค · 100 คะแนน',
  entry: 'EXAM_REQUIREMENTS.md',
  previewPort: '5173',
  runtime: 'webcontainer',
  paragraphs: [
    'โจทย์จำลองสอบปลายภาคแบบครบวงจร (SkillHub Academy): เตรียมเฉพาะโครงไฟล์โปรเจกต์ (Skeleton) และฐานข้อมูลพร้อม Seed (ทั้งไฟล์ database/skillhub_exam.sql สำหรับ Import ลง MySQL/XAMPP เมื่อกดโหลด ZIP และ backend/db/store.js สำหรับรันตรวจในเว็บ)',
    'ครอบคลุมทุกหัวข้อที่ออกสอบปลายภาค: ระบบสมัคร/เข้าสู่ระบบด้วย bcrypt + JWT, การแยกสิทธิ์ Role (guest / student / admin) ทั้งฝั่ง API Middleware (401/403) และฝั่งหน้าเว็บ, ระบบค้นหา/กรองคอร์สเรียน, การลงทะเบียนตัดโควตาที่นั่งว่าง และการจัดการหลายหน้าด้วย React Router (4 หน้า)',
    'เปิดไฟล์ EXAM_REQUIREMENTS.md หรืออ่านแผงโจทย์ด้านซ้ายเพื่อดูสเปก API, ตารางฐานข้อมูล, ชื่อฟิลด์ และลำดับการทำทีละส่วน',
  ],
  steps: [
    'ส่วนที่ 1 (25 คะแนน): เขียน Middleware verifyToken (401) และ requireAdmin (403) ใน backend/middleware/auth.js และทำ POST /register, POST /login, GET /me ใน backend/routes/auth.js',
    'ส่วนที่ 2 (30 คะแนน): ทำ API คอร์สเรียนใน backend/routes/courses.js — GET /api/courses รองรับ ?keyword= และ ?categoryId= พร้อมคำนวณ availableSeats และทำ POST/PUT/DELETE ที่อนุญาตเฉพาะ Admin',
    'ส่วนที่ 3 (20 คะแนน): ทำ API ลงทะเบียนเรียนใน backend/routes/enrollments.js — ตรวจห้ามลงซ้ำ (409), ห้ามเกินที่นั่งว่าง (409), ตัดยอด enrolled และทำ PATCH /:id/cancel คืนที่นั่ง',
    'ส่วนที่ 4 (25 คะแนน): เติมหน้าเว็บ React Multi-Page ทั้ง 4 หน้า (CatalogPage, LoginPage, MyCoursesPage, AdminPage) เชื่อมกับ AuthContext และบังคับสิทธิ์ตาม Role',
  ],
  manual: [
    'กดปุ่ม ZIP มุมขวาบนเพื่อตรวจสอบว่าได้รับไฟล์ database/skillhub_exam.sql, database/schema.sql และ database/seed.sql ครบถ้วน',
    'ทดสอบเข้าสู่ระบบด้วยบัญชีนักศึกษา (mali / mali12345) แล้วลองเปิดหน้า /admin ต้องเห็นข้อความเตือน ไม่มีสิทธิ์เข้าถึง (Admin เท่านั้น)',
    'ทดสอบลงทะเบียนเรียนคอร์สที่ยังมีที่นั่งว่าง แล้วไปที่หน้า /my-courses เพื่อตรวจยอดรวมค่าเรียนและทดลองกดยกเลิกลงทะเบียนเพื่อคืนที่นั่ง',
    'ทดสอบเข้าสู่ระบบด้วยบัญชีผู้ดูแล (admin / admin12345) แล้วเพิ่ม แก้ไข และลองลบคอร์สที่มีคนเรียนอยู่ (ระบบต้องปฏิเสธ 409)',
  ],
  rubric: [
    { label: 'ส่วนที่ 1 · Auth (Register/Login/JWT) & Role Middleware (401/403)', points: 25 },
    { label: 'ส่วนที่ 2 · Courses API (Search/Filter + Admin CRUD + Constraints)', points: 30 },
    { label: 'ส่วนที่ 3 · Enrollments API (Seat Quota + Duplicate Check + Cancel Refund)', points: 20 },
    { label: 'ส่วนที่ 4 · Multi-Page React Router (4 หน้า) + AuthContext + Role Guard', points: 25 },
  ],
  requirements: [
    ['R01 · JWT & Role Middleware (401/403)', 10, 'verifyToken ตรวจ Bearer token (401) และ requireAdmin ตรวจ role === "admin" (403)'],
    ['R02 · Register / Login / Me API', 15, 'POST /api/auth/register (bcrypt hash, บังคับ role student, 400/409/201), POST /api/auth/login (JWT, 401/200), GET /api/auth/me'],
    ['R03 · Search & Filter Courses API', 12, 'GET /api/courses รองรับ ?keyword= (ค้นใน title/code) และ ?categoryId= พร้อมคำนวณ availableSeats'],
    ['R04 · Admin Course CRUD & Seat Rules', 18, 'POST/PUT/DELETE /api/courses เฉพาะ Admin, ห้ามรหัสซ้ำ (409), ห้ามลด seats ต่ำกว่า enrolled (409), ห้ามลบคอร์สที่มีคนเรียน (409)'],
    ['R05 · Student Enrollment & Refund Seat', 20, 'POST /api/enrollments ตรวจซ้ำ/ตรวจที่นั่งเต็ม (409) และตัดที่นั่ง, PATCH /api/enrollments/:id/cancel คืนที่นั่ง (เฉพาะเจ้าของหรือ Admin)'],
    ['R06 · Multi-Page React Router & Role UI', 25, 'ครบ 4 หน้า (/, /login, /my-courses, /admin) เชื่อม AuthContext, แสดงยอดรวมค่าเรียน และกั้นหน้า /admin สำหรับ Admin เท่านั้น'],
  ],
  starter: { ...finalPracticeStarter, 'tests/goal.test.jsx': finalPracticeTests },
  solution: { ...finalPracticeSolution, 'tests/goal.test.jsx': finalPracticeTests },
  kind: 'exam',
};
exams.push(finalPracticeExam);

const effectLesson = lessons.find(item => item.id === 'fs-09');
effectLesson.starter['tests/strict-loading.test.jsx'] = strictLoadingCheck;
effectLesson.solution['tests/strict-loading.test.jsx'] = strictLoadingCheck;
workshops.unshift(...guidedProjects);
// Three prerequisites-first phases; IDs stay stable so saved learner work remains usable.
export const coursePhases = [
  { id: 'node', title: '1 · Node', description: 'รัน JavaScript → module → async → ไฟล์ → Express/API → Router', ids: ['guided-0','fs-01','fs-02','fs-03','fs-04','guided-1','fs-05','lab-restaurant'] },
  { id: 'react', title: '2 · React', description: 'โครงหน้า → props → state → form → routing → context/ref โดยยังไม่ต่อ API', ids: ['fs-00','fs-06','guided-2','fs-07','fs-08','fs-10','fs-11'] },
  { id: 'full', title: '3 · Full Stack', description: 'เตรียมสองฝั่ง → HTTP/Axios → CRUD → MySQL/Prisma → auth/JWT → Docker → เวิร์กช็อปและสอบ', ids: ['fs-09','guided-3','fs-12','fs-13','guided-4','fs-14','fs-15','fs-16','fs-17','lab-customers','lab-member','lab-food','lab-booking','lab-inventory','lab-community','exam-api','exam-react','exam-auth','exam-campus-gear','exam-store-hub','exam-final-practice'] },
];
const activities = [...lessons, ...workshops, ...exams];
for (const phase of coursePhases) {
  for (const id of phase.ids) {
    const item = activities.find(activity => activity.id === id);
    if (!item) throw new Error('Missing course activity: ' + id);
    item.phase = phase.id;
    item.chapter = phase.title;
  }
}
for (const item of activities) {
  if (['fs-06','fs-07','fs-08','fs-09','fs-10','fs-11','fs-13','lab-customers','lab-member','exam-react'].includes(item.id)) item.entry='frontend/App.jsx';
  if (['fs-16','exam-auth'].includes(item.id)) item.entry='backend/routes/auth.js';
  if (item.id==='fs-17') item.entry='backend/middleware/verifyToken.js';
}
guidedProjects[0].connectsTo = { lessonId: null, title: 'จุดเริ่มต้น Node ไม่ต้องรู้ React ก่อน' };
export const fullstackCurriculum = coursePhases.flatMap(phase => phase.ids.map(id => activities.find(item => item.id === id)));
lessons.sort((a,b) => fullstackCurriculum.indexOf(a) - fullstackCurriculum.indexOf(b));
export const sourceFiles = [
  { title: 'Node & Express (ch5)', file: 'ch5 NodeJs_Express.pdf', coverage: 'V8 runtime, async, callback, promise/delay, CommonJS modules, fs, HTTP, Express routing, params/query และเว็บร้านอาหาร 3 หน้า' },
  { title: 'React.js (ch6)', file: 'ch6 ReactJs.pdf', coverage: 'Virtual DOM, ES6 array methods, JSX, components, props, state counter, controlled form และระบบจัดการเมนูอาหาร (FoodContainer)' },
  { title: 'Full Stack 1 (ch7)', file: 'ch7 FullStack_1.pdf', coverage: 'Hooks (useState, useEffect), MySQL2 connection, REST controller CRUD, search query OR และ Prisma ORM' },
  { title: 'Full Stack 2 (ch7)', file: 'ch7 FullStack_2.pdf', coverage: 'สถาปัตยกรรม React Frontend (Customer, CustomerForm, CustomerList), Axios service layer และ React Router layout' },
  { title: 'React Authentication (ch8)', file: 'ch8 ReactJs Authen.pdf', coverage: 'Prisma advanced queries, bcrypt password hash, JWT stateless auth, Bearer tokens, Guest/User/Admin modes และ Docker' },
];
