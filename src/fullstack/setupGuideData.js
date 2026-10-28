import { setupBoardFiles } from './guidedProjects.js';

const nodePackage = JSON.stringify({ name: 'my-first-node', version: '1.0.0', main: 'index.js', scripts: { test: 'echo "Error: no test specified" && exit 1' }, keywords: [], author: '', license: 'ISC', description: '' }, null, 2);
const hello = 'const learner = "Mali";\nconsole.log("Hello Node, " + learner);\n';
const basicApi = `const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/health', (req, res) => res.json({ ok: true }));
app.get('/api/tasks', (req, res) => res.json([{ id: 1, title: 'เรียน Node', done: false }]));
app.listen(3000, () => console.log('API ready :3000'));
`;
const initialMain = `import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
`;
export const setupStages = [
  { id: 'tools', title: '1. เครื่องมือและ Terminal', where: 'Terminal บนเครื่องของคุณ (ยังไม่ใช่ Terminal ในเว็บ)',
    text: 'ติดตั้ง Node.js รุ่น LTS จาก nodejs.org และ VS Code จาก code.visualstudio.com เปิด VS Code เลือก File → Open Folder แล้วเปิดโฟลเดอร์ที่ต้องการเก็บงาน จากนั้นเลือก Terminal → New Terminal แถบนี้คือที่พิมพ์คำสั่ง ไม่ใช่ช่องเขียนโค้ดในไฟล์',
    commands: ['node --version', 'npm --version'], expected: 'แต่ละคำสั่งแสดงเลขเวอร์ชัน เช่น v… และ … ไม่ต้องได้เลขตรงกับภาพตัวอย่าง หากขึ้นว่าไม่รู้จักคำสั่ง ให้ปิดและเปิด VS Code ใหม่หลังติดตั้ง',
    tree: 'my-learning/       ← โฟลเดอร์ว่างที่เราเปิดใน VS Code', files: {},
    notes: ['พิมพ์ทีละคำสั่งแล้วกด Enter ไม่ต้องพิมพ์เครื่องหมาย $ หรือข้อความ path ที่ Terminal แสดงนำหน้า', 'node รัน JavaScript; npm ติดตั้งแพ็กเกจและเรียกคำสั่ง; React เป็นเครื่องมือสร้าง UI; Vite เป็นเครื่องมือพัฒนา React', 'ใน Terminal ใช้ cd ชื่อโฟลเดอร์ เพื่อเข้า, cd .. เพื่อออกหนึ่งชั้น, dir บน PowerShell หรือ ls บน macOS/Linux เพื่อดูรายการไฟล์'],
    rescue: 'PowerShell บอก npm.ps1 ถูกบล็อก: ใช้ npm.cmd แทน npm ในคำสั่งของคู่มือนี้ ไม่จำเป็นต้องเปลี่ยน policy ของเครื่อง' },
  { id: 'init', title: '2. npm init สร้างอะไร', where: 'my-learning/ → สร้างและเข้า my-first-node/',
    text: 'เริ่มด้วยโปรเจกต์ Node ขนาดเล็กก่อน npm init -y สร้าง package.json เพื่อบอกข้อมูลโปรเจกต์ ยังไม่ได้ติดตั้ง Express หรือสร้างหน้าเว็บให้ -y คือใช้คำตอบเริ่มต้น',
    commands: ['mkdir my-first-node', 'cd my-first-node', 'npm init -y'], expected: 'ใน Explorer มี package.json เพิ่มขึ้น Terminal แสดงข้อมูล package แล้วคืน prompt ให้พิมพ์คำสั่งต่อ',
    tree: 'my-learning/\n└─ my-first-node/\n   └─ package.json     ← npm สร้างให้', files: { 'package.json': nodePackage },
    notes: ['เปิด package.json ดู name/version/scripts main: index.js เป็นค่าเริ่มต้น ไม่ได้สร้างไฟล์ index.js และไม่ใช่คำสั่งเปิด server', 'scripts.test ที่ npm init ให้เป็นข้อความเตือนยังไม่มี test หาก npm test ตอนนี้ล้มเหลวเป็นเรื่องปกติ; npm run dev ก็ยังไม่มีจนเรากำหนดเอง', 'รูปแบบและบาง field อาจต่างตาม npm เวอร์ชันของคุณ สิ่งสำคัญคือชื่อโปรเจกต์และ scripts'],
    rescue: 'ถ้าไม่เห็นไฟล์ใน VS Code ให้ดูว่า Explorer เปิด my-learning ที่มีโฟลเดอร์ my-first-node อยู่หรือไม่ อย่าสั่ง npm init ซ้ำในโฟลเดอร์อื่น' },
  { id: 'hello', title: '3. รันไฟล์ Node แรก', where: 'my-learning/my-first-node/',
    text: 'ใน Explorer คลิกขวาที่ my-first-node → New File ตั้งชื่อ hello.js แล้วใส่โค้ดด้านล่าง กด Ctrl+S บันทึก นามสกุล .js ใช้ CommonJS และรันได้ด้วย Node โดยตรง',
    commands: ['node hello.js'], expected: 'Terminal แสดง Hello Node, Mali แล้วจบโปรแกรม กลับมาพิมพ์คำสั่งได้ ลองเปลี่ยนชื่อ Mali และรันซ้ำ',
    tree: 'my-first-node/\n├─ package.json\n└─ hello.js        ← เราสร้างและบันทึกเอง', files: { 'hello.js': hello },
    notes: ['const learner สร้างตัวแปรเก็บชื่อ; console.log แสดงข้อความใน Terminal', 'ดับเบิลคลิกไฟล์ .js ใน Explorer ของ Windows ไม่ใช่วิธีรันบทนี้ ให้พิมพ์ node hello.js', 'ถ้าสร้าง hello.js.txt จะรันไม่พบ เปิดดูนามสกุลไฟล์จริง'],
    rescue: 'Cannot find module …hello.js: ตรวจ path ปัจจุบันด้วย pwd และ dir/ls ต้องอยู่ในโฟลเดอร์เดียวกับ hello.js และบันทึกไฟล์แล้ว' },
  { id: 'express', title: '4. จาก Node สู่ HTTP API', where: 'my-learning/my-first-node/',
    text: 'รัน npm install express@4 ก่อน จากนั้นสร้าง server.js ในโฟลเดอร์เดียวกับ package.json และใส่โค้ดตัวอย่าง Express จะรอ HTTP request ทำให้โปรแกรมไม่จบทันทีเหมือน hello.js',
    commands: ['npm install express@4'], afterFilesCommand: 'node server.js', expected: 'Terminal แสดง API ready :3000 และค้างรอ เปิด browser ไป http://localhost:3000/api/health จะเห็น {"ok":true}; /api/tasks เห็น array งาน',
    tree: 'my-first-node/\n├─ package.json       ← เพิ่ม dependencies.express\n├─ package-lock.json  ← npm สร้าง/อัปเดตเวอร์ชันที่ติดตั้งจริง\n├─ node_modules/      ← npm ดาวน์โหลด ห้ามแก้ไฟล์ในนี้เอง\n├─ hello.js\n└─ server.js         ← เราสร้างเอง', files: { 'server.js': basicApi },
    notes: ['require โหลด Express; express() สร้าง app; app.get กำหนด URL; res.json ส่งข้อมูล; app.listen เปิด port', 'localhost หมายถึงเครื่องนี้ 3000 คือ port ของ API ถ้าเปิดแค่ / จะเห็น Cannot GET / เพราะเรายังไม่ได้สร้าง route /', 'Terminal นี้ถูก server ใช้อยู่ ถ้าจะพิมพ์คำสั่งอื่นให้เปิด Terminal ใหม่ หรือ Ctrl+C เพื่อหยุดก่อน เมื่อแก้ไฟล์รันแบบ node ธรรมดาต้องหยุดแล้วรันใหม่'],
    rescue: 'EADDRINUSE :3000: มี server เก่ารันอยู่ กลับ Terminal เก่ากด Ctrl+C แล้วลองใหม่ อย่าเปิด server ซ้อนหลายอัน' },
  { id: 'vite', title: '5. สร้างโปรเจกต์ React ด้วย Vite', where: 'หยุด API ด้วย Ctrl+C ก่อน แล้วจาก my-first-node/ กลับไป my-learning/',
    text: 'โปรเจกต์ Node แรกจบแล้ว ต่อไปสร้างโฟลเดอร์ my-first-fullstack แล้วแยก frontend/ กับ backend/ เป็นโฟลเดอร์พี่น้องกัน เริ่มสร้าง frontend ด้วย Vite ก่อน ขั้นนี้ยังไม่สร้าง backend --template react เลือก JavaScript และ --no-interactive ลดคำถามระหว่างสร้าง',
    commands: ['cd ..', 'mkdir my-first-fullstack', 'cd my-first-fullstack', 'npm create vite@latest frontend -- --template react --no-interactive', 'cd frontend', 'npm install', 'npm run dev'], expected: 'ถ้า npm ขออนุญาตดาวน์โหลด create-vite ให้ตอบ y เมื่อเสร็จเห็น Local: http://localhost:5173/ เปิด URL ที่ Terminal แสดง แล้วเห็นหน้าเริ่มต้น React/Vite',
    tree: 'my-learning/\n├─ my-first-node/         ← งาน Node แรก\n└─ my-first-fullstack/\n   └─ frontend/           ← Vite สร้าง package.json, index.html, vite.config.js, src/ และ node_modules/', files: { 'frontend/src/main.jsx': initialMain },
    steps: ['สร้างโฟลเดอร์โปรเจกต์รวม แล้วสั่ง Vite สร้างแอปในโฟลเดอร์ frontend/', 'พิมพ์ npm run dev ใน Terminal ที่อยู่ใน my-first-fullstack/frontend แล้วกด Enter; Terminal จะแสดง Local: http://localhost:5173/ และค้างทำงาน นี่คือปกติ อย่าปิดหน้าต่างนี้', 'กด Ctrl แล้วคลิกลิงก์ Local หรือคัดลอกไปวางใน browser หน้า React/Vite จะเปิดขึ้น', 'ปล่อย Terminal แรกเปิดค้างไว้ ระหว่างแก้ frontend/src/App.jsx หรือ frontend/src/index.css ให้กด Ctrl+S แล้วดูผลที่ browser ซึ่ง Vite จะอัปเดตให้เอง', 'เมื่อถึงบท 7 ให้เปิด Terminal ใหม่อีกอันที่โฟลเดอร์ my-first-fullstack เพื่อสร้าง backend/ ไว้ข้าง frontend/'],
    notes: ['create ดาวน์โหลดเครื่องมือสร้างโครง, install ดาวน์โหลด dependencies ของโครง, run dev เปิดเว็บเซิร์ฟเวอร์ Vite เป็นคนละหน้าที่', 'ถ้า Terminal กลับมารับคำสั่งทันที หรือ browser เปิดไม่ได้ ให้ตรวจว่าอยู่ใน my-first-fullstack/frontend และไม่มี error สีแดง', 'main.jsx โหลด App และ CSS แล้ว render ลง #root ที่ index.html; App.jsx คือ UI ที่เราเริ่มแก้', 'การแยก frontend กับ backend เป็นโครงที่ใช้กันทั่วไป; แต่ละฝั่งมี package.json และ server ของตัวเอง ส่วน proxy จะช่วยให้หน้าเว็บเรียก API ได้', 'ใช้ Node LTS ปัจจุบันตามหน้า Vite หากพบ Unsupported engine อย่าฝืนข้าม error ให้ปรับ Node ก่อน'],
    rescue: 'ถ้ายังอยู่ my-first-node ให้กลับไป my-learning ก่อน; ถ้าไม่มี dev script ให้ตรวจว่า npm install เสร็จและ Terminal อยู่ใน my-first-fullstack/frontend' },
  { id: 'react', title: '6. อ่านและแก้ไฟล์เริ่มต้น React', where: 'my-learning/my-first-fullstack/frontend/ · Vite ยังรันใน Terminal แรก',
    text: 'เปิด frontend/src/App.jsx แทนโค้ดทั้งหมดด้วยตัวอย่าง แล้วบันทึก เมื่อไม่ import App.css แล้ว CSS เดิมในไฟล์นั้นจะไม่ถูกใช้ เปิด frontend/src/index.css เพื่อลบ style demo ที่จัด body ไว้กลางจอและแทนด้วย CSS ตัวอย่าง',
    commands: [], expected: 'หน้า localhost:5173 เปลี่ยนเป็น My Task Board พร้อมข้อความ ฉันกำลังสร้างเว็บของตัวเอง โดยไม่ต้อง restart Vite',
    tree: 'frontend/index.html (#root)\n  → frontend/src/main.jsx (createRoot + import CSS)\n    → frontend/src/App.jsx (component)\n    → frontend/src/index.css (สีและ layout)',
    files: { 'frontend/src/App.jsx': 'export default function App() {\n  return <main><h1>My Task Board</h1><p>ฉันกำลังสร้างเว็บของตัวเอง</p></main>;\n}\n', 'frontend/src/index.css': 'body { margin: 0; background: #eff6f2; color: #18362c; font-family: system-ui; }\nmain { max-width: 760px; margin: 32px auto; padding: 24px; }\n' },
    steps: ['ใน VS Code เปิด my-first-fullstack/frontend/src/App.jsx; เลือกโค้ดเดิมทั้งหมด วางตัวอย่าง แล้วกด Ctrl+S', 'เปิด frontend/src/index.css แล้วแทน style เดิมด้วยตัวอย่าง จากนั้นกด Ctrl+S', 'กลับไป browser ที่เปิด localhost:5173 หน้า My Task Board ควรเปลี่ยนทันที; ถ้ายังไม่เปลี่ยนให้ refresh หนึ่งครั้ง แล้วดู error ใน Terminal แรก', 'ตอนนี้หน้านี้ยังเป็นข้อความคงที่ ยังไม่ได้อ่านข้อมูลจาก API; ขั้นถัดไปจะสร้าง backend แยกต่างหากและให้ Vite ส่งคำขอไปหา'],
    notes: ['App เป็นฟังก์ชันที่คืน JSX; JSX คล้าย HTML แต่ใช้ className และเขียน expression ใน {}', 'return ต้องมี element แม่หนึ่งตัว เช่น main ครอบ h1 และ p; ปิด tag ให้ครบ', 'บทฝึกในเว็บใช้ frontend/ แทน src/ เพื่อแยกกับ backend/ หน้าที่เหมือนกัน ในโปรเจกต์ที่ Vite เพิ่งสร้างยังใช้ src/ ต่อได้'],
    rescue: 'หน้าว่างหรือ overlay แดง: อ่านชื่อไฟล์และเลขบรรทัดใน error ตรวจการปิด tag/export แล้วบันทึก หากนำ App.css import ออก อย่าลืมล้าง style demo ใน index.css ด้วย' },
  { id: 'connect', title: '7. รวม API และตั้ง proxy', where: 'my-learning/my-first-fullstack/ · เปิด Terminal ที่สองที่โฟลเดอร์โปรเจกต์รวม',
    text: 'ตอนนี้มีหน้า React ทำงานที่ :5173 แล้ว ขั้นนี้จะสร้าง backend/ แยกข้าง frontend/ ติดตั้ง Express เฉพาะฝั่ง backend และตั้ง proxy ใน frontend/vite.config.js ให้ browser เรียก API ผ่านหน้าเว็บได้ อย่าปิด Terminal แรกที่รัน Vite',
    commands: ['mkdir backend', 'cd backend', 'npm init -y', 'npm install express@4'], afterFilesCommand: 'node server.js', expected: 'Terminal แรก Vite :5173; Terminal ที่สอง API :3000 เปิด http://localhost:5173/api/tasks แล้วได้ JSON ผ่าน proxy จริง',
    tree: 'my-first-fullstack/\n├─ frontend/\n│  ├─ src/\n│  ├─ vite.config.js  ← proxy /api ไป :3000\n│  └─ package.json    ← React/Vite\n└─ backend/\n   ├─ app.js         ← routes และ express.json()\n   ├─ server.js      ← app.listen(3000)\n   └─ package.json    ← Express',
    files: { 'backend/app.js': basicApi.replace("app.listen(3000, () => console.log('API ready :3000'));", 'module.exports = app;'), 'backend/server.js': setupBoardFiles['backend/server.js'], 'frontend/vite.config.js': "import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\nexport default defineConfig({\n  plugins: [react()],\n  server: { proxy: { '/api': 'http://127.0.0.1:3000' } },\n});\n" },
    steps: ['ใน Terminal ที่สองซึ่งอยู่ที่ my-first-fullstack รันคำสั่ง mkdir backend, cd backend, npm init -y และ npm install express@4 ทีละบรรทัด; ตอนนี้ Terminal นี้อยู่ในโฟลเดอร์ backend', 'ใน VS Code สร้าง backend/app.js กับ backend/server.js; เปิดแท็บตัวอย่างแต่ละไฟล์ด้านล่าง แล้วคัดลอกไปวางในไฟล์จริงตามชื่อ', 'เปิด frontend/vite.config.js แล้วแทนเนื้อหาด้วยตัวอย่างด้านล่าง จากนั้นบันทึก หาก Terminal แรกไม่ restart เอง ให้กด Ctrl+C ที่ Terminal แรก แล้วเปิด Vite ใหม่โดยรัน npm run dev จากโฟลเดอร์ frontend', 'กลับมาที่ Terminal ที่สอง (ยังอยู่ใน backend) รัน node server.js; ควรเห็น API ready :3000 และปล่อย Terminal นี้ค้างไว้ด้วย', 'ทดสอบใน browser โดยเปิด http://localhost:3000/api/tasks ควรเห็น JSON จาก API โดยตรง แล้วเปิด http://localhost:5173/api/tasks ควรเห็น JSON ชุดเดียวกันผ่าน proxy', 'เมื่อสอง URL ใช้ได้ แปลว่า browser → Vite :5173 → proxy → Express :3000 เชื่อมกันแล้ว; บท 8 จะให้หน้า React เรียกข้อมูลนี้'],
    notes: ['หลังแก้ vite.config.js หาก Vite ไม่ restart ให้อัตโนมัติ หยุดแล้ว npm run dev ใหม่ใน Terminal แรก', 'ฝั่ง React เรียก fetch("/api/tasks") ไป :5173; Vite proxy จึงส่งต่อ :3000 ให้ ใช้ URL แบบ relative เพื่อเลี่ยงการตั้ง CORS เพิ่มในตัวอย่างนี้', 'package.json ของ Vite มี type: module จึงใช้ import ใน src ส่วน backend ใช้ .js กับ require ตามสไลด์ โดยมี package.json ที่ระบุ type: commonjs แยกขอบเขต', 'ถ้าจะพิมพ์คำสั่งอื่นขณะ server ทำงาน ให้ใช้ Terminal อีกแท็บ; Ctrl+C ใช้หยุด server ที่กำลังเลือกอยู่'],
    rescue: 'ECONNREFUSED หรือ proxy error: ตรวจ Terminal API ว่ายังเปิดอยู่ และเปิด :3000/api/tasks ตรงได้ก่อน อย่าแก้ด้วยการลบ proxy ทิ้ง' },
  { id: 'board', title: '8. ต่อจนเป็นโปรเจกต์ใช้งานได้', where: 'my-learning/my-first-fullstack/',
    text: 'เวิร์กช็อปในแอปจะพาเขียนทีละระดับก่อนมาถึงโค้ดชุดนี้: เพิ่ม GET/POST/PATCH/DELETE ฝั่ง API แล้วใช้ state, effect และ form ใน React ไฟล์ด้านล่างคือปลายทางที่ทำงานร่วมกัน ใช้อ่านเทียบหลังลองเขียนเองได้',
    commands: [], expected: 'เพิ่มงาน → กดเสร็จแล้ว/ทำต่อ → ลบ → รีเฟรช ยังอ่านข้อมูลจาก Node ได้ แต่ถ้า restart Node ข้อมูลในหน่วยความจำกลับค่าเริ่มต้น',
    tree: 'Form → POST /api/tasks → Node เก็บข้อมูล → JSON\n→ React setState → รายการเปลี่ยน\nปุ่มสถานะ → PATCH /api/tasks/:id\nปุ่มลบ → DELETE /api/tasks/:id (204 ไม่มี body)',
    files: { 'backend/app.js': setupBoardFiles['backend/app.js'], 'frontend/src/App.jsx': setupBoardFiles['src/App.jsx'], 'frontend/src/index.css': setupBoardFiles['src/styles.css'] },
    steps: ['แทน backend/app.js, frontend/src/App.jsx และ frontend/src/index.css ด้วยไฟล์ตัวอย่างด้านล่าง (อย่าเปลี่ยนชื่อ import ใน frontend/src/main.jsx)', 'บันทึกไฟล์ แล้วที่ Terminal API ซึ่งอยู่ใน backend/ กด Ctrl+C เพื่อหยุด server เก่า จากนั้นรัน node server.js ใหม่ให้โหลด API เวอร์ชัน CRUD', 'ปล่อย Vite ทำงานใน Terminal แรกที่ frontend/ และ API ทำงานใน Terminal ที่สองที่ backend/; refresh localhost:5173 แล้วลองเพิ่มงาน, เปลี่ยนสถานะ, ลบงาน และ refresh อีกครั้ง'],
    notes: ['ถ้าเริ่มจาก Vite ให้คง import ./index.css ใน main.jsx และวาง CSS ใน index.css; ZIP ตัวอย่างของเราใช้ styles.css ซึ่ง main.jsx import ไว้ตรงกันแล้ว', 'เมื่อ Terminal API อยู่ในโฟลเดอร์ backend ให้หยุดด้วย Ctrl+C แล้วรัน node server.js ใหม่', 'ปุ่มส่งปิดขณะรอ API และคงข้อความที่พิมพ์เมื่อส่งไม่สำเร็จ การลบตอบ 204 จึงห้ามเรียก response.json() เสมอ'],
    rescue: 'เห็นรายการคงที่แต่เพิ่มไม่ได้: ตรวจว่าเปลี่ยน backend/app.js เป็นเวอร์ชัน CRUD แล้ว และ restart Node ของ my-first-fullstack ไม่ใช่ของโปรเจกต์แรก' },
  { id: 'finish', title: '9. เปิดงานอีกครั้งและตรวจด้วยตัวเอง', where: 'โฟลเดอร์ที่แตก ZIP ตัวอย่างใหม่ หรือโฟลเดอร์โปรเจกต์ที่มี scripts ตามตัวอย่างนี้',
    text: 'ZIP ปลายทางรวม scripts dev/test และชุดตรวจให้ครบ เวลานำกลับมาเปิด ไม่ต้อง npm init หรือ create vite ซ้ำ เปิด Terminal ที่มี package.json แล้วใช้คำสั่งด้านล่าง ในงานที่สร้างเองให้เพิ่ม scripts และ devDependencies ตาม package.json นี้ก่อน',
    commands: ['npm install', 'npm run dev'], expected: 'คำสั่งเดียวเปิด React และ API ด้วย concurrently; เปิด Terminal ใหม่ที่โฟลเดอร์เดิมรัน npm test แล้วผ่าน tests ของ API และ UI',
    tree: 'my-task-board/\n├─ package.json       ← dev:api, dev:web, dev, test\n├─ src/               ← React\n├─ backend/           ← Express\n├─ tests/             ← ชุดตรวจพฤติกรรม\n└─ README.md          ← วิธีเปิดงานอีกครั้ง',
    files: { 'package.json': setupBoardFiles['package.json'], 'README.md': setupBoardFiles['README.md'] },
    steps: ['แตก ZIP ก่อน แล้วเปิดโฟลเดอร์ที่มี package.json ใน VS Code; เปิด Terminal ใหม่ในโฟลเดอร์นี้', 'รัน npm install ครั้งแรกเพื่อดาวน์โหลดแพ็กเกจ จากนั้นรัน npm run dev', 'ดูข้อความใน Terminal แล้วเปิด URL Local ของ Vite (ปกติ http://localhost:5173/) ใน browser; คำสั่งนี้เปิดทั้งเว็บและ API ให้อัตโนมัติ', 'ลองเพิ่ม/เปลี่ยนสถานะ/ลบงานบนหน้าเว็บ; เปิด Terminal อีกแท็บในโฟลเดอร์เดิมแล้วรัน npm test เมื่อต้องการตรวจงาน', 'เมื่อเลิกใช้ กลับไป Terminal ที่ npm run dev ทำงานอยู่แล้วกด Ctrl+C เพื่อหยุดทั้งสอง server'],
    notes: ['scripts.dev ใช้ concurrently เปิดสอง server; dev:api ใช้ nodemon restart เมื่อ backend เปลี่ยน; dev:web เปิด Vite', 'ถ้าสร้างเอง ต้องติดตั้งแพ็กเกจใน package.json ก่อน โดย npm install ติดตั้งทั้ง dependencies และ devDependencies ตามไฟล์นี้', 'ชุดตัวอย่าง pin เวอร์ชันที่ผ่านการตรวจไว้แล้ว อาจต่างจาก Vite ล่าสุดที่คุณเพิ่งสร้าง ไม่ต้องเปลี่ยนเลขเวอร์ชันตามระหว่างทำขั้นต้น', 'ก่อนเปิดด้วย npm run dev ให้หยุด server สอง Terminal เก่าก่อน เพื่อไม่ให้ port ชนกัน'],
    rescue: 'npm test ไม่มี script ในโปรเจกต์ที่สร้างเอง: Vite ตั้งต้นไม่ได้แถม test runner ใช้ ZIP ตัวอย่างที่รวม config/tests ก่อน หรือเพิ่มชุดไฟล์ tests และ vite.config.js จาก ZIP ให้ครบ' },
];

export const setupSources = [
  ['ติดตั้ง Node.js', 'https://nodejs.org/en/download'],
  ['ติดตั้ง VS Code', 'https://code.visualstudio.com/download'],
  ['npm init', 'https://docs.npmjs.com/cli/commands/npm-init/'],
  ['npm install', 'https://docs.npmjs.com/cli/commands/npm-install/'],
  ['Vite เริ่มโปรเจกต์', 'https://vite.dev/guide/'],
  ['React เริ่มจากศูนย์', 'https://react.dev/learn/build-a-react-app-from-scratch'],
];
