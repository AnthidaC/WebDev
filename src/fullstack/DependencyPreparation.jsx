import { filePurpose } from './learningGuides.js';
import { mysqlSlideFiles } from './slideReferenceProjects.js';
import { projectZip } from './workspace.js';

function downloadMysql() {
  const url = URL.createObjectURL(new Blob([projectZip(mysqlSlideFiles)], { type: 'application/zip' }));
  const link = document.createElement('a'); link.href = url; link.download = 'full1-full2-mysql-axios.zip'; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

const packageReasons = {
  react: 'สร้าง component และใช้ Hooks', 'react-dom': 'วาด React ลง root ของ HTML',
  express: 'รับ HTTP request และจับคู่ route', cors: 'อนุญาต origin ที่ตั้งไว้เมื่อเรียก API ข้าม origin',
  axios: 'HTTP client ตาม Full2: อ่านข้อมูลจาก response.data',
  'react-router-dom': 'เปลี่ยนหน้าและ layout ตาม URL', dotenv: 'อ่านค่า .env ฝั่ง Node',
  mysql2: 'เชื่อม MySQL ด้วย connection/pool และ query แบบ parameterized',
  'sql.js': 'SQLite/WASM สำหรับโจทย์ SQL ที่รันใน browser ไม่ใช่ MySQL driver',
  prisma: 'เครื่องมือ CLI สำหรับ schema, generate และการเตรียมฐานข้อมูล',
  '@prisma/client': 'Client ที่ controller เรียกเพื่ออ่าน/เขียนฐานข้อมูล',
  bcryptjs: 'hash/compare รหัสผ่านในห้องฝึกที่ไม่มี native binary',
  jsonwebtoken: 'sign/verify JWT และตรวจ expiry',
  vite: 'dev server ของ React และ proxy /api ไป Node',
  '@vitejs/plugin-react': 'ให้ Vite แปลง JSX สำหรับ React',
  nodemon: 'เปิด Node ใหม่เมื่อไฟล์ backend เปลี่ยนระหว่างพัฒนา',
  concurrently: 'เปิด Node และ Vite พร้อมกันจากคำสั่งเดียว',
  vitest: 'รันชุดตรวจพฤติกรรมที่มากับบท', jsdom: 'จำลอง DOM สำหรับชุดตรวจ React',
  '@testing-library/react': 'ตรวจ UI จากการใช้งานและข้อความที่ผู้ใช้เห็น',
};

const packageNeeds = {
  'fs-01': ['express'], 'fs-02': ['express'], 'fs-03': ['express'], 'fs-04': ['express', 'cors'], 'fs-05': ['express'],
  'fs-00': ['react','react-dom','vite','@vitejs/plugin-react'],
  'fs-06': ['react','react-dom'], 'fs-07': ['react'], 'fs-08': ['react'],
  'fs-09': ['react','express','vite','axios'], 'fs-10': ['react','react-router-dom'], 'fs-11': ['react'],
  'fs-12': ['express','cors'], 'fs-13': ['react','express','axios'], 'fs-14': ['express','sql.js'],
  'fs-15': ['prisma','@prisma/client','dotenv','express','react'],
  'fs-16': ['express','bcryptjs','jsonwebtoken','dotenv'], 'fs-17': ['express','jsonwebtoken','dotenv'],
  'guided-0': [], 'guided-1': ['express'], 'guided-2': ['react','react-dom','vite'],
  'guided-3': ['react','express','vite'], 'guided-4': ['react','express'],
};

function preparationPackages(item) {
  const pkg = JSON.parse(item.starter['package.json']);
  const names = packageNeeds[item.id] || ['react','express', ...(item.phase === 'node' ? [] : ['axios','react-router-dom']), ...(item.id.includes('member') || item.id.includes('auth') || item.id.includes('community') || item.id.includes('gear') ? ['bcryptjs','jsonwebtoken'] : [])];
  return [...new Set(names)].map(name => ({ name, version: pkg.dependencies?.[name] || pkg.devDependencies?.[name], reason: packageReasons[name] })).filter(row => row.version);
}

export default function DependencyPreparation({ item, onSelect }) {
  const rows = preparationPackages(item);
  const files = [...new Set(['package.json', item.entry, ...(item.phase === 'node' ? ['backend/server.js','backend/app.js'] : ['frontend/main.jsx','frontend/App.jsx']), ...(item.phase === 'full' ? ['vite.config.js','backend/app.js'] : [])])].filter(path => Object.hasOwn(item.starter, path));
  return <>
    <p>เปิดบทนี้แล้วระบบให้โครงไฟล์และ package.json มาแล้ว ในห้องฝึกให้กด <strong>รันโปรเจกต์</strong> และรอจนเตรียมแพ็กเกจเสร็จ ส่วนบนเครื่องให้แตก ZIP แล้วเปิด Terminal ที่โฟลเดอร์ซึ่งมี package.json ของชุดนี้ ไม่ต้อง npm init หรือสร้าง Vite ซ้ำ</p>
    <h4>แพ็กเกจที่ใช้ในช่วงนี้</h4>
    {rows.length ? <div className="fs-dependency-list">{rows.map(row => <div key={row.name}><code>{row.name} <small>{row.version}</small></code><p>{row.reason}</p></div>)}</div> : <p>ไฟล์ Node แรกใช้ความสามารถที่ติดมากับ Node จึงยังไม่ต้องติดตั้ง express หรือ react เพื่อเข้าใจโค้ดไฟล์นี้ ระบบห้องฝึกอาจเตรียมแพ็กเกจส่วนอื่นของโครงร่วมให้ด้วย</p>}
    <p>dependencies คือสิ่งที่โค้ดใช้; devDependencies คือเครื่องมือพัฒนาและตรวจงาน เช่น Vite, nodemon และ Vitest คำสั่ง <code>npm install</code> ของ ZIP ติดตั้งทั้งสองกลุ่มตามไฟล์นี้ ไม่ต้องเดาติดตั้งชื่อแพ็กเกจทีละตัว</p>
    <h4>เปิดไฟล์ตามหน้าที่</h4><div className="fs-preparation-files">{files.map(path => <button className="fs-secondary" key={path} onClick={() => onSelect?.(path)}><code>{path}</code><span>{filePurpose(path)}</span></button>)}</div>
    <h4>เช็กว่าพร้อมก่อนเขียน</h4>
    {['fs-09','fs-13','fs-14','fs-15'].includes(item.id) && <div className="fs-callout"><strong>ชุด MySQL + Axios ตาม Full 1 / Full2</strong><p>มีไฟล์ .js/.jsx, mysql2 pool, SQL schema/seed, Express controller/routes, Axios service, CustomerForm/List, Router, .env.example และชุดตรวจให้ครบ ใช้บนเครื่องที่มี MySQL ตาม README ภายใน ไม่รัน MySQL ใน browser</p><button className="fs-secondary" onClick={downloadMysql}>ดาวน์โหลด MySQL + Axios ตามสไลด์</button></div>}
    {item.runtime === 'external' ? <p>บทนี้ใช้ฐานข้อมูลจริง กด ZIP และอ่าน README.md ก่อน เลือก Docker หรือ XAMPP เพียงวิธีเดียว ตั้ง .env ให้ตรงฐานข้อมูลฝึก แล้วใช้คำสั่งเตรียม schema/Client/seed ตามวิธีนั้น ปุ่มรันใน browser ไม่เปิด MySQL ให้</p> : <><pre className="fs-worked-example">{'# บนเครื่อง: Terminal ที่ root ของ ZIP\nnode --version\nnpm --version\nnpm install\nnpm run dev\n# เปิด Terminal ใหม่ที่ root เดิม เมื่อต้องการตรวจ\nnpm test'}</pre><p>npm run dev เปิด server และค้างรอเป็นปกติ อย่าพิมพ์คำสั่งใหม่ใน Terminal ที่กำลังรันอยู่ ใช้แท็บใหม่หรือ Ctrl+C เพื่อหยุดก่อน หากขึ้น Module not found ตรวจว่า npm install สำเร็จและ Terminal อยู่ถูกโฟลเดอร์</p></>}
    <details><summary>เทียบกับโครงในสไลด์และชนิดไฟล์</summary><p>สไลด์แยก frontend/backend และติดตั้งแพ็กเกจในแต่ละฝั่ง ส่วน ZIP ห้องฝึกรวมรายการติดตั้งไว้ package.json ที่ root เพื่อเปิดสองฝั่งพร้อมกัน Node ใช้ไฟล์ .js และ require/module.exports ตาม Node สไลด์ 45–48; backend/package.json กำหนด type: commonjs ส่วน component React ใช้ .jsx และ import/export ตาม React หน้า 15–16 ไฟล์ CSS/HTML/JSON/.env/schema.prisma มีหน้าที่ของตัวเอง ไม่เปลี่ยนนามสกุลตามไฟล์ JavaScript</p><p>เมื่อสร้างจากโฟลเดอร์ว่างจริง ให้เข้า frontend ก่อน npm install axios react-router-dom; เข้า backend ก่อน npm install express cors dotenv; ติดตั้ง mysql2 เมื่อใช้ SQL/MySQL, Prisma และ @prisma/client รุ่นเดียวกันเมื่อใช้ ORM, bcrypt กับ jsonwebtoken เมื่อทำ auth ชุดห้องฝึกใช้ bcryptjs แทน bcrypt เพื่อรันใน browser และสไลด์ที่พิมพ์ cores ต้องแก้เป็นแพ็กเกจ cors</p></details>
    {item.id === 'fs-15' && <div className="fs-callout"><strong>Prisma และ adapter ต้องใช้ชุดเวอร์ชันที่เข้ากัน</strong><p>ZIP นี้ใช้ Prisma 6.19 กับ built-in connector จึงไม่ต้องเพิ่ม adapter-mariadb ตามสไลด์ก่อนรัน ถ้าฝึกแนว adapter ให้ใช้ prisma, @prisma/client, @prisma/adapter-mariadb รุ่นเดียวกัน พร้อม mariadb และปรับ schema/Client ตามแนวนั้นให้ครบ ดูส่วนเทียบ adapter ของบทนี้ ห้ามผสม config Prisma 7 กับ schema Prisma 6</p></div>}
  </>;
}
