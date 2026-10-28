// Comprehensive Lesson & Activity Descriptions for Full-Stack Academy (Markdown format for LearningGuide.jsx)
// Aligned 100% with curriculum.js, templates.js, projects.js, and advancedProjects.js

export const lessonDescriptions = {
  'fs-00': `**1. แนวคิดและสถาปัตยกรรม Full Stack (Architecture & Environment)**
ยินดีต้อนรับสู่คอร์ส **Full Stack Development (Node.js + Express + React)** บทเรียนแรกนี้จะพาคุณทำความเข้าใจโครงสร้างของเว็บแอปพลิเคชันยุคใหม่ที่แยกส่วนหน้าบ้าน (Frontend) และหลังบ้าน (Backend) ออกจากกันอย่างชัดเจน แต่ทำงานร่วมกันในโปรเจกต์เดียว:

- **Frontend (React + Vite - Port 5173):** ทำหน้าที่วาดหน้าจอ (UI) รับการคลิก การพิมพ์จากผู้ใช้ และแสดงผลข้อมูล รันอยู่ใน Web Browser ของผู้ใช้
- **Backend (Node.js + Express - Port 3000):** ทำหน้าที่เป็น API Server ประมวลผลกฎธุรกิจ อ่าน/เขียนไฟล์ หรือเชื่อมต่อฐานข้อมูล รันอยู่บนฝั่ง Server

**2. โครงสร้างไฟล์ในโปรเจกต์ที่คุณต้องรู้**
\`\`\`text
project-root/
├── index.html              # ไฟล์ HTML ต้นทางของ React (มี <div id="root"></div>)
├── vite.config.js          # ตั้งค่า Vite และ Proxy ส่งต่อ /api ไปยังพอร์ต 3000
├── package.json            # รายชื่อไลบรารีและคำสั่งสคริปต์ (dev, test, build)
├── frontend/
│   ├── main.jsx            # จุดเริ่มต้นของ React ที่นำ App ไปวาดลงใน #root
│   ├── App.jsx             # Component หลักของหน้าเว็บ (ไฟล์ที่คุณจะได้แก้บ่อยที่สุด)
│   └── styles.css          # ไฟล์ตกแต่งสีสันและ Layout ของหน้าเว็บ
└── backend/
    ├── server.js           # สั่งเปิด HTTP Server ที่พอร์ต 3000
    └── app.js              # กำหนดเส้นทาง API (Routes) และ Middleware ของ Express
\`\`\`

**3. เส้นทางการทำงานจากโค้ดสู่หน้าจอ (JSX)**
เมื่อคุณเปิดหน้าเว็บในแท็บ **Preview (พอร์ต 5173)** เบราว์เซอร์จะโหลด \`index.html\` ซึ่งดึง \`frontend/main.jsx\` เข้ามาวาด Component \`App\` จากไฟล์ \`frontend/App.jsx\`:

\`\`\`jsx
// frontend/App.jsx
export default function App() {
  return (
    <main className="page">
      <h1>My Full Stack Lab</h1>
      <p>แก้ข้อความนี้ใน frontend/App.jsx</p>
    </main>
  );
}
\`\`\`

**4. เป้าหมายและสิ่งที่ต้องทำในบทนี้**
1. เปิดไฟล์ \`frontend/App.jsx\` จากแถบไฟล์ด้านซ้าย
2. แก้ไขข้อความในแท็ก \`<h1>\` จาก \`Full Stack Starter\` ให้เป็นคำว่า \`My Full Stack Lab\` (ตัวพิมพ์ใหญ่-เล็กและเว้นวรรคต้องตรงกัน)
3. กดปุ่ม **รันโปรเจกต์** เพื่อเปิดเซิร์ฟเวอร์จำลอง แล้วดูผลลัพธ์ในแท็บ **Preview**
4. สลับไปที่แท็บ **API Client** แล้วกดส่งคำขอ \`GET /api/health\` เพื่อดูคำตอบ \`{"ok": true}\` จากฝั่ง Express Backend
5. เมื่อมั่นใจแล้ว กดปุ่ม **ตรวจงาน** เพื่อรันชุดทดสอบอัตโนมัติ`,

  'fs-01': `**1. แนวคิดหลัก: ES6 Arrow Function และการแยกไฟล์ Module**
ในการพัฒนาซอฟต์แวร์จริง เราจะไม่เขียนโค้ดทุกอย่างรวมกันอยู่ในไฟล์ \`backend/app.js\` เพียงไฟล์เดียว บทนี้จะสอนการเขียนฟังก์ชันคำนวณด้วย **ES6 Arrow Function** ร่วมกับเมธอด \`.reduce()\` และการแยกโค้ดออกเป็น **CommonJS Module** ใน Node.js

**2. การรวมราคาสินค้าด้วย Array.reduce()**
เราสามารถคำนวณผลรวมของ \`item.price * item.quantity\` ของสินค้าทุกชิ้นในตะกร้าได้ด้วย \`.reduce()\` โดยกำหนดค่าเริ่มต้นของผลรวมเป็น \`0\`:

\`\`\`javascript
// items = [{ price: 40, quantity: 2 }, { price: 15, quantity: 3 }]
const total = (items) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};
// รอบที่ 0: sum เริ่มที่ 0
// รอบที่ 1: 0 + (40 * 2) = 80
// รอบที่ 2: 80 + (15 * 3) = 125
\`\`\`

**3. ระบบ CommonJS Module ใน Node.js (exports & require)**
Node.js มาตรฐานใช้ระบบโมดูลแบบ **CommonJS** หากต้องการให้ไฟล์อื่นเรียกใช้ฟังก์ชันได้ ต้องส่งออกด้วย \`exports\` และนำเข้าด้วย \`require()\`:

\`\`\`javascript
// 📄 ไฟล์ผู้ส่งออก: backend/lib/prices.js (ไฟล์ที่คุณต้องแก้)
exports.total = (items) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

// 📄 ไฟล์ผู้นำเข้า: backend/app.js (มีเขียนเตรียมไว้ให้แล้วในโค้ดตั้งต้น!)
const { total } = require('./lib/prices.js');
app.post('/api/total', (req, res) => res.json({ total: total(req.body.items || []) }));
\`\`\`

- **ข้อควรระวัง:** ในไฟล์ \`backend/app.js\` **มีการเขียน \`const { total } = require('./lib/prices.js');\` และ Route \`POST /api/total\` เตรียมไว้ให้เรียบร้อยแล้ว** ห้ามประกาศ \`const { total }\` ซ้ำใน \`backend/app.js\` เพราะจะทำให้เกิด \`SyntaxError\`

**4. เป้าหมายและสิ่งที่ต้องทำในบทนี้**
1. เปิดไฟล์ \`backend/lib/prices.js\` (แก้เฉพาะไฟล์นี้ ไม่ต้องแก้ \`backend/app.js\`)
2. เติมโค้ดในฟังก์ชัน \`exports.total = (items) => { ... }\` เพื่อคำนวณผลรวมของ \`item.price * item.quantity\` ของสินค้าทุกชิ้นในอาร์เรย์ \`items\`
3. ทดสอบในแท็บ **API Client** โดยเลือกปุ่มตัวอย่าง **รวมราคาสินค้า** (\`POST /api/total\`) ต้องได้ผลลัพธ์ \`{"total": 125}\` และเมื่อส่ง \`{"items": []}\` ต้องได้ \`{"total": 0}\`
4. กดปุ่ม **ตรวจงาน** เพื่อรันชุดทดสอบอัตโนมัติ`,

  'fs-02': `**1. แนวคิดหลัก: Asynchronous, Promise และ async/await**
หัวใจสำคัญที่ทำให้ Node.js รองรับผู้ใช้งานจำนวนมากพร้อมกันได้โดยไม่ค้าง คือการทำงานแบบ **Asynchronous (ไม่บล็อกการทำงาน)** เมื่อต้องทำงานที่ใช้เวลานาน เช่น อ่านไฟล์หรือค้นหาฐานข้อมูล Node.js จะใช้ระบบ **Promise** และ **async/await**

**2. การสร้าง Promise และการรอด้วย await**
การใส่คีย์เวิร์ด \`async\` หน้าฟังก์ชัน จะทำให้เราสามารถใช้คำสั่ง \`await\` เพื่อรอให้ \`Promise\` ทำงานเสร็จก่อนค่อยทำบรรทัดถัดไปได้:

\`\`\`javascript
// backend/lib/async.js
exports.waitAndDouble = async (value) => {
  // 1. รอเวลาอย่างน้อย 30-40 มิลลิวินาทีด้วย await Promise
  await new Promise((resolve) => setTimeout(resolve, 40));

  // 2. เมื่อครบเวลาแล้ว จึงคำนวณและส่งค่ากลับ
  return value * 2;
};
\`\`\`

- **ข้อควรระวัง:** หากคุณเขียนแค่ \`setTimeout(..., 40)\` โดยไม่ห่อด้วย \`new Promise\` และไม่ใส่ \`await\` ฟังก์ชันจะกระโดดไปทำคำสั่ง \`return value * 2\` ทันทีโดยไม่รอเวลาจริง ทำให้ไม่ผ่านเกณฑ์การตรวจเวลาของชุดทดสอบ

**3. เป้าหมายและสิ่งที่ต้องทำในบทนี้**
1. เปิดไฟล์ \`backend/lib/async.js\`
2. ภายในฟังก์ชัน \`exports.waitAndDouble = async value => { ... }\` ให้เขียนคำสั่ง \`await new Promise(resolve => setTimeout(resolve, 40));\` เพื่อหน่วงเวลาอย่างน้อย 30ms
3. หลังจากรอเสร็จ ให้คืนค่า \`return value * 2;\`
4. ทดสอบด้วยแท็บ **API Client** ส่ง \`POST /api/double\` พร้อม Body \`{"value": 6}\` ต้องได้ \`{"result": 12}\` แล้วกดปุ่ม **ตรวจงาน**`,

  'fs-03': `**1. แนวคิดหลัก: อ่านไฟล์ JSON ด้วย node:fs/promises และ node:path**
ก่อนที่เราจะไปใช้ระบบฐานข้อมูล เราสามารถเก็บข้อมูลตั้งต้นของระบบไว้ในไฟล์ **JSON** บนเซิร์ฟเวอร์ แล้วใช้โมดูลมาตรฐานของ Node.js คือ \`node:fs/promises\` และ \`node:path\` ในการอ่านข้อมูลขึ้นมาใช้งาน

**2. ทำไมต้องใช้ path.join และ __dirname?**
การใช้ Relative Path ลอยๆ เช่น \`'../data/menu.json'\` จะอ้างอิงจากโฟลเดอร์ที่เปิด Terminal ทำให้ถ้ารันจากคนละโฟลเดอร์จะหาไฟล์ไม่เจอ (\`ENOENT\`) เราจึงต้องใช้ \`__dirname\` (ตำแหน่งโฟลเดอร์ของไฟล์โค้ดปัจจุบัน) ร่วมกับ \`path.join()\`:

\`\`\`javascript
const path = require('node:path');

// __dirname ของไฟล์ backend/lib/menu.js คือ ".../backend/lib"
// ถอยกลับ 1 ชั้น (..) ไปที่ "backend" แล้วเข้าโฟลเดอร์ "data/menu.json"
const filePath = path.join(__dirname, '../data/menu.json');
\`\`\`

**3. การอ่านไฟล์แบบ Async และแปลง JSON (ตรงตามเฉลยและชุดตรวจ)**
ข้อมูลที่อ่านได้จากไฟล์ด้วย encoding \`'utf8'\` จะเป็นข้อความ (String) เสมอ จึงต้องแปลงให้เป็น Array/Object ด้วยคำสั่ง \`JSON.parse()\`:

\`\`\`javascript
// backend/lib/menu.js
const fs = require('node:fs/promises');
const path = require('node:path');

exports.readMenu = async () => {
  const filePath = path.join(__dirname, '../data/menu.json');
  const text = await fs.readFile(filePath, 'utf8');
  return JSON.parse(text);
};
\`\`\`

- **เกร็ดสำคัญเรื่อง fs:** เมื่อนำเข้าด้วย \`const fs = require('node:fs/promises');\` ตัวแปร \`fs\` จะเป็น Promise API อยู่แล้ว ให้เรียก \`await fs.readFile(...)\` ได้เลย (ไม่ต้องเขียน \`fs.promises.readFile\` ซ้ำ)

**4. เป้าหมายและสิ่งที่ต้องทำในบทนี้**
1. เปิดดูข้อมูลตัวอย่างในไฟล์ \`backend/data/menu.json\` (มีรายการข้าวผัด 60 บาท และชาไทย 35 บาท)
2. เปิดไฟล์ \`backend/lib/menu.js\` (Route \`GET /api/menu\` ใน \`backend/app.js\` เชื่อมกับ \`readMenu()\` ไว้ให้แล้ว)
3. นำเข้า \`node:fs/promises\` และ \`node:path\` แล้วเขียนฟังก์ชัน \`exports.readMenu\` ให้อ่านไฟล์ \`../data/menu.json\` ด้วย encoding \`'utf8'\` และคืนค่าที่ผ่าน \`JSON.parse()\` แล้ว
4. ทดสอบเรียก \`GET /api/menu\` ในแท็บ **API Client** ต้องได้รับ Array ของเมนูอาหารทั้ง 2 รายการ แล้วกดปุ่ม **ตรวจงาน**`,

  'fs-04': `**1. แนวคิดหลัก: HTTP Routes, req.params และ req.query**
เมื่อเบราว์เซอร์ส่งคำขอ (HTTP Request) มายัง Express Server ข้อมูลสามารถถูกแนบมากับ URL ได้ 2 รูปแบบหลัก คือ **Route Parameters (\`req.params\`)** และ **Query Strings (\`req.query\`)**

สมมติว่ามีคำขอเข้ามาที่ URL: \`GET /api/items/tea?price=35\`
- **Route Parameter (\`req.params\`):** ค่าที่อยู่ในตำแหน่งของ Path ที่ตั้งชื่อไว้ด้วยเครื่องหมายโคลอน เช่น \`/api/items/:name\` จะได้ \`req.params.name === "tea"\`
- **Query String (\`req.query\`):** ค่าแบบ Key-Value หลังเครื่องหมายคำถาม (\`?\`) จะได้ \`req.query.price === "35"\`

**2. การตรวจสอบความถูกต้องของข้อมูล (Validation & Status Code 400)**
ค่าที่อ่านจาก URL จะเป็น String หรือ \`undefined\` เสมอ ต้องแปลงราคาด้วย \`Number()\` และตรวจสอบความถูกต้องก่อนตอบกลับ:

\`\`\`javascript
// backend/app.js
app.get('/api/items/:name', (req, res) => {
  const price = Number(req.query.price);

  // ตรวจสอบว่าส่ง price มาหรือไม่, แปลงเป็นตัวเลขได้จริงไหม, และต้องไม่ติดลบ
  if (
    req.query.price === undefined ||
    String(req.query.price).trim() === '' ||
    !Number.isFinite(price) ||
    price < 0
  ) {
    return res.status(400).json({ message: 'Invalid price' });
  }

  res.json({ name: req.params.name, price });
});
\`\`\`

**3. เป้าหมายและสิ่งที่ต้องทำในบทนี้**
1. เปิดไฟล์ \`backend/app.js\`
2. สร้าง Route \`app.get('/api/items/:name', ...)\` ก่อนบรรทัด \`module.exports = app;\`
3. อ่านค่า \`name\` จาก \`req.params.name\` และแปลง \`req.query.price\` เป็นตัวเลขด้วย \`Number()\`
4. หากไม่ได้ส่ง \`price\` มา, แปลงเป็นตัวเลขไม่ได้ (เช่น \`price=abc\`), หรือมีค่าน้อยกว่า 0 ให้ตอบกลับด้วย Status \`400\` พร้อม JSON \`{ message: 'Invalid price' }\`
5. หากถูกต้อง ให้ตอบกลับด้วย JSON \`{ name: req.params.name, price }\` แล้วกดปุ่ม **ตรวจงาน**`,

  'fs-05': `**1. แนวคิดหลัก: Express Router และ Middleware**
เมื่อเว็บแอปพลิเคชันมีหลายหน้า การเขียนทุก Route กองรวมกันใน \`backend/app.js\` จะทำให้ดูแลรักษายาก Express จึงมีฟีเจอร์ **Middleware** สำหรับดักจัดการคำขอส่วนกลาง และ **\`express.Router()\`** สำหรับแยกเส้นทางออกเป็นไฟล์ย่อย

**2. การตั้งค่า Middleware Header และเรียก next()**
Middleware คือฟังก์ชันที่ทำงานคั่นกลางก่อนที่คำขอจะเดินทางไปถึง Route ปลายทาง เราใช้ \`res.set()\` เพื่อเพิ่ม Header และต้องเรียก \`next()\` เพื่อส่งต่อให้ Route ถัดไปทำงาน:

\`\`\`javascript
// backend/app.js (วางไว้ก่อนบรรทัด app.use(require('./routes/pages.js')))
app.use((req, res, next) => {
  res.set('X-Practice', 'ready');
  next();
});
app.use(require('./routes/pages.js'));
\`\`\`

**3. การแยก Route ออกเป็นไฟล์ใน backend/routes/pages.js**
\`\`\`javascript
// backend/routes/pages.js
const router = require('express').Router();

router.get('/home', (req, res) => res.send('<h1>Home</h1>'));
router.get('/menu', (req, res) => res.send('<h1>Menu</h1>'));
router.get('/order', (req, res) => res.send('<h1>Order</h1>'));

module.exports = router;
\`\`\`

**4. เป้าหมายและสิ่งที่ต้องทำในบทนี้**
1. เปิดไฟล์ \`backend/routes/pages.js\` ซึ่งมี \`/home\` เตรียมไว้ให้แล้ว
2. เพิ่ม Route \`router.get('/menu', ...)\` ให้ส่ง \`'<h1>Menu</h1>'\` และ \`router.get('/order', ...)\` ให้ส่ง \`'<h1>Order</h1>'\`
3. เปิดไฟล์ \`backend/app.js\` แล้วเพิ่ม Middleware \`app.use((req, res, next) => { res.set('X-Practice', 'ready'); next(); });\` ไว้ก่อนบรรทัด \`app.use(require('./routes/pages.js'));\`
4. ทดสอบด้วยแท็บ **API Client** เรียก \`GET /home\`, \`GET /menu\`, \`GET /order\` แล้วกดปุ่ม **ตรวจงาน**`,

  'fs-06': `**1. แนวคิดหลัก: React Component, JSX และ Props**
เข้าสู่ฝั่ง Frontend ด้วย **React.js**! แนวคิดหลักของ React คือการแบ่งหน้าจอออกเป็นชิ้นส่วนย่อยๆ ที่นำกลับมาใช้ซ้ำได้ เรียกว่า **Component** และส่งข้อมูลเข้าไปแสดงผลผ่าน **Props (Properties)**

**2. การสร้าง Component ย่อย (MenuCard.jsx)**
Component ใน React คือฟังก์ชันที่ชื่อขึ้นต้นด้วยตัวพิมพ์ใหญ่ และคืนค่าเป็น JSX โดยรับข้อมูลจาก Component แม่ผ่านพารามิเตอร์ \`{ name, price }\`:

\`\`\`jsx
// 📄 frontend/components/MenuCard.jsx
export default function MenuCard({ name, price }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{price} บาท</p>
    </article>
  );
}
\`\`\`

**3. การนำ Component ไปใช้งานใน frontend/App.jsx**
\`\`\`jsx
// 📄 frontend/App.jsx
import MenuCard from './components/MenuCard';

export default function App() {
  return (
    <main>
      <h1>Menu</h1>
      <div className="grid">
        <MenuCard name="ข้าวผัด" price={60} />
        <MenuCard name="ชาไทย" price={35} />
      </div>
    </main>
  );
}
\`\`\`

- **ข้อควรระวัง:** ใน \`MenuCard.jsx\` ให้แสดงชื่อเมนูใน \`<h2>{name}</h2>\` และแสดงราคาเป็น \`<p>{price} บาท</p>\` (ไม่ต้องมีคำว่า "ราคา:" นำหน้า เพื่อให้ตรงกับชุดตรวจที่ค้นหาข้อความ \`60 บาท\` และ \`35 บาท\`)

**4. เป้าหมายและสิ่งที่ต้องทำในบทนี้**
1. กดปุ่มเพิ่มไฟล์ใหม่เพื่อสร้างไฟล์ \`frontend/components/MenuCard.jsx\`
2. เขียน Component \`MenuCard\` ที่รับ props \`{ name, price }\` แล้วแสดงผล \`<h2>{name}</h2>\` และ \`<p>{price} บาท</p>\`
3. ในไฟล์ \`frontend/App.jsx\` ให้นำเข้า \`MenuCard\` แล้วนำมาแสดงผล 2 รายการภายใน \`<div className="grid">\` คือ **ข้าวผัด (ราคา 60)** และ **ชาไทย (ราคา 35)** แล้วกดปุ่ม **ตรวจงาน**`,

  'fs-07': `**1. แนวคิดหลัก: Events และ useState Hook**
ในเว็บจริง หน้าจอต้องเปลี่ยนแปลงได้เมื่อผู้ใช้คลิกปุ่ม ใน React เราใช้ Hook ที่ชื่อว่า **\`useState\`** เพื่อเก็บสถานะของหน้าจอและสั่งให้ React วาดหน้าจอใหม่ (Re-render) อัตโนมัติเมื่อข้อมูลเปลี่ยน

**2. การผูก Event onClick และการป้องกันค่าติดลบ**
ในโค้ดตั้งต้นของ \`frontend/App.jsx\` มีแท็ก \`<output aria-label="จำนวน">\` และปุ่ม 3 ปุ่มเตรียมไว้ให้แล้ว คือ \`+\`, \`−\` และ \`รีเซ็ต\`:

\`\`\`jsx
// frontend/App.jsx
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Counter</h1>
      <output aria-label="จำนวน">{count}</output>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <button onClick={() => setCount((c) => Math.max(0, c - 1))}>−</button>
      <button onClick={() => setCount(0)}>รีเซ็ต</button>
    </main>
  );
}
\`\`\`

- **ข้อควรระวัง:** ห้ามเขียน \`onClick={setCount(count + 1)}\` โดยไม่มี \`() =>\` ข้างหน้า เพราะจะทำให้ฟังก์ชันถูกเรียกทันทีตอนวาดหน้าจอ และใช้ \`Math.max(0, c - 1)\` เพื่อไม่ให้ค่าติดลบต่ำกว่า 0

**3. เป้าหมายและสิ่งที่ต้องทำในบทนี้**
1. เปิดไฟล์ \`frontend/App.jsx\` และนำเข้า \`import { useState } from 'react';\`
2. สร้าง State \`count\` เริ่มต้นที่ \`0\` และแสดงค่า \`{count}\` ภายใน \`<output aria-label="จำนวน">\`
3. ผูกปุ่ม \`+\` ให้เพิ่มค่าทีละ 1, ปุ่ม \`−\` ให้ลดค่าทีละ 1 แต่ไม่ต่ำกว่า 0, และปุ่ม \`รีเซ็ต\` ให้กลับเป็น \`0\` แล้วกดปุ่ม **ตรวจงาน**`,

  'fs-08': `**1. แนวคิดหลัก: Controlled Form และการตรวจสอบข้อมูล (Validation)**
ใน React เราใช้เทคนิค **Controlled Component** คือการให้ State ของ React เป็นผู้ควบคุมค่าในช่อง \`<input>\` ผ่าน \`value\` และ \`onChange\` พร้อมดักจับการส่งฟอร์มด้วย \`onSubmit\` และ \`e.preventDefault()\`

**2. การจัดการการส่งฟอร์มและแสดงข้อความแจ้งเตือน (role="alert")**
\`\`\`jsx
// frontend/App.jsx
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [saved, setSaved] = useState('');

  function submit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return setError('กรุณากรอกชื่อ');
    }
    setError('');
    setSaved(name.trim());
    setName(''); // ล้างช่องกรอกหลังบันทึกสำเร็จ
  }

  return (
    <main>
      <h1>Customer form</h1>
      <form onSubmit={submit}>
        <label>
          ชื่อ
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button>บันทึก</button>
      </form>
      {error && <p role="alert">{error}</p>}
      {saved && <p>บันทึก {saved}</p>}
    </main>
  );
}
\`\`\`

- **ข้อควรระวัง:** **อย่าใส่ \`disabled\` ที่ปุ่ม \`บันทึก\`** เพราะชุดตรวจจะต้องทดลองกดปุ่มตอนที่ช่องชื่อยังว่างอยู่ เพื่อตรวจว่ามีข้อความแจ้งเตือน \`role="alert"\` แสดงขึ้นมาหรือไม่

**3. เป้าหมายและสิ่งที่ต้องทำในบทนี้**
1. เปิดไฟล์ \`frontend/App.jsx\` สร้าง State \`name\`, \`error\`, และ \`saved\`
2. ผูก \`value={name}\` และ \`onChange\` ให้กับช่อง \`<input>\` ภายใต้ \`<label>ชื่อ...</label>\`
3. เมื่อกดส่งฟอร์ม (\`onSubmit\`) หาก \`!name.trim()\` ให้แสดงข้อความแจ้งเตือนใน \`<p role="alert">กรุณากรอกชื่อ</p>\`
4. หากกรอกชื่อถูกต้อง ให้ล้าง error, แสดงข้อความ \`<p>บันทึก {saved}</p>\` (เช่น \`บันทึก Mali\`) และล้างช่อง input เป็นค่าว่าง แล้วกดปุ่ม **ตรวจงาน**`,

  'fs-09': `**1. แนวคิดหลัก: useEffect และเรียก API (Data Fetching)**
บทนี้เราจะเชื่อมฝั่ง **React Frontend** ให้ดึงข้อมูลจริงจากฝั่ง **Express Backend** (\`GET /api/customers\`) โดยใช้ Hook **\`useEffect\`** ร่วมกับคำสั่ง \`fetch()\`

**2. การจัดการ 3 สถานะของการดึงข้อมูล (Loading, Data, Error)**
\`\`\`jsx
// frontend/App.jsx
import { useEffect, useState } from 'react';

export default function App() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/customers')
      .then((r) => {
        if (!r.ok) throw new Error('โหลดไม่สำเร็จ');
        return r.json();
      })
      .then(setRows)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <h1>Customers</h1>
      {loading && <p>กำลังโหลด...</p>}
      {error && <p role="alert">{error}</p>}
      <ul>
        {rows.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </main>
  );
}
\`\`\`

- **ข้อสังเกตสำคัญ:** คำสั่ง \`fetch()\` จะไม่กระโดดเข้า \`catch\` อัตโนมัติเมื่อเซิร์ฟเวอร์ตอบ 404 หรือ 500 เราจึงต้องเช็ค \`if (!r.ok) throw new Error(...)\` ด้วยตัวเองเสมอ

**3. เป้าหมายและสิ่งที่ต้องทำในบทนี้**
1. เปิดไฟล์ \`frontend/App.jsx\`
2. สร้าง State สำหรับเก็บรายการลูกค้า (\`rows\`), สถานะกำลังโหลด (\`loading\` เริ่มต้นเป็น \`true\`), และข้อผิดพลาด (\`error\`)
3. ใช้ \`useEffect\` ดึงข้อมูลจาก \`/api/customers\` เมื่อเปิดหน้าเว็บครั้งแรก
4. แสดงข้อความ \`<p>กำลังโหลด...</p>\` ขณะรอข้อมูล, แสดง \`<p role="alert">{error}</p>\` เมื่อเกิดข้อผิดพลาด, และแสดงรายชื่อลูกค้าใน \`<ul><li key={c.id}>{c.name}</li></ul>\` เมื่อโหลดสำเร็จ แล้วกดปุ่ม **ตรวจงาน**`,

  'fs-10': `**1. แนวคิดหลัก: React Router และ Layout หลายหน้า (SPA Navigation)**
เว็บแอปพลิเคชันแบบ **Single-Page Application (SPA)** ใช้ไลบรารี **\`react-router-dom\`** ในการสลับ Component ตาม URL ปัจจุบันโดยไม่รีโหลดหน้าเว็บใหม่ทั้งหมด:
- \`<BrowserRouter>\`: ตัวครอบหลักที่เชื่อมต่อแอป React เข้ากับ URL ของเบราว์เซอร์
- \`<Routes>\` และ \`<Route path="..." element={...} />\`: จับคู่ URL กับ Component (ใช้ \`path="*"\` สำหรับหน้า 404)
- \`<Link to="...">\`: เปลี่ยนหน้าโดยไม่รีเฟรชเบราว์เซอร์
- \`<Outlet />\`: ตำแหน่งแสดงเนื้อหาของ Route ลูกภายใน Layout

**2. การสร้างไฟล์หน้าย่อยและประกอบ Layout ร่วมกัน**
\`\`\`jsx
// 📄 frontend/pages/Home.jsx
export default function Home() {
  return <h1>Welcome Home</h1>;
}

// 📄 frontend/pages/Customers.jsx
export default function Customers() {
  return <h1>Our Customers</h1>;
}

// 📄 frontend/App.jsx
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Customers from './pages/Customers';

function Layout() {
  return (
    <main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/customers">Customers</Link>
      </nav>
      <Outlet />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

**3. เป้าหมายและสิ่งที่ต้องทำในบทนี้**
1. กดเพิ่มไฟล์ใหม่เพื่อสร้าง \`frontend/pages/Home.jsx\` ที่แสดง \`<h1>Welcome Home</h1>\` และ \`frontend/pages/Customers.jsx\` ที่แสดง \`<h1>Our Customers</h1>\`
2. ใน \`frontend/App.jsx\` ให้สร้าง \`Layout\` ที่มีเมนู \`<Link to="/">Home</Link>\`, \`<Link to="/customers">Customers</Link>\` และ \`<Outlet />\`
3. ตั้งค่า \`BrowserRouter\` และ \`Routes\` ให้รองรับเส้นทาง \`/\`, \`/customers\`, และ \`*\` (แสดง \`<h1>404</h1>\` เมื่อไม่พบหน้า) แล้วกดปุ่ม **ตรวจงาน**`,

  'fs-11': `**1. แนวคิดหลัก: useContext และ useRef**
บทนี้แนะนำ 2 Hooks สำคัญที่แก้ปัญหาคนละด้าน:
- **\`useContext\`:** แชร์ข้อมูลส่วนกลาง (เช่น ธีม \`light\` / \`dark\`) ให้ Component ลูกหลานใช้งานได้ทันทีโดยไม่ต้องส่ง Props หลายทอด
- **\`useRef\`:** อ้างอิง DOM Element จริงโดยตรง (เช่น สั่ง \`input.current.focus()\` เพื่อให้เคอร์เซอร์กระโดดเข้าไปในช่องกรอกข้อความ)

**2. ตัวอย่างการเขียน ThemeContext และ useRef ใน frontend/App.jsx**
\`\`\`jsx
// frontend/App.jsx
import { createContext, useContext, useRef, useState } from 'react';

const ThemeContext = createContext(null);

function Toolbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const input = useRef(null);

  return (
    <section>
      <p>ธีม: {theme}</p>
      <button onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>
        เปลี่ยนธีม
      </button>
      <label>
        ชื่อ
        <input ref={input} />
      </label>
      <button onClick={() => input.current.focus()}>โฟกัสชื่อ</button>
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main>
        <h1>Context & Ref</h1>
        <Toolbar />
      </main>
    </ThemeContext.Provider>
  );
}
\`\`\`

**3. เป้าหมายและสิ่งที่ต้องทำในบทนี้**
1. เปิดไฟล์ \`frontend/App.jsx\` สร้าง \`ThemeContext\` และเก็บ State \`theme\` เริ่มต้นเป็น \`'light'\`
2. แสดงข้อความ \`<p>ธีม: {theme}</p>\` และปุ่ม \`เปลี่ยนธีม\` ที่สลับค่าระหว่าง \`'light'\` กับ \`'dark'\` ผ่าน Context
3. สร้างช่องกรอก \`<label>ชื่อ<input ref={input} /></label>\` และปุ่ม \`โฟกัสชื่อ\` ที่เมื่อคลิกแล้วเรียก \`input.current.focus()\` แล้วกดปุ่ม **ตรวจงาน**`,

  'fs-12': `**1. แนวคิดหลัก: REST API และ Controller CRUD**
ในงานระดับมืออาชีพ เราจะแยกโค้ดฝั่ง Backend ออกเป็นชั้น: ให้ไฟล์ **Routes** (\`backend/routes/customers.js\`) จับคู่ URL กับ HTTP Method แล้วส่งต่อให้ไฟล์ **Controller** (\`backend/controllers/customers.js\`) ตรวจสอบข้อมูลและจัดการ **CRUD (Create, Read, Update, Delete)**:

- \`GET /api/customers\` -> \`exports.list\` (มีให้แล้ว ตอบ \`200 OK\`)
- \`GET /api/customers/:id\` -> \`exports.get\` (มีให้แล้ว ตอบ \`200 OK\` หรือ \`404 Not Found\`)
- \`POST /api/customers\` -> \`exports.create\` (ตรวจข้อมูล ถ้าผิดตอบ \`400\` ถ้าผ่านสร้างใหม่ตอบ \`201 Created\`)
- \`PUT /api/customers/:id\` -> \`exports.update\` (ถ้าไม่พบ ID ตอบ \`404\`, ถ้าข้อมูลผิดตอบ \`400\`, ถ้าผ่านตอบ \`200 OK\`)
- \`DELETE /api/customers/:id\` -> \`exports.remove\` (ถ้าไม่พบ ID ตอบ \`404\`, ถ้าลบสำเร็จตอบ \`200 OK\`)

**2. ตัวอย่างการเขียน Controller (create, update, remove)**
\`\`\`javascript
// backend/controllers/customers.js
function valid(body) {
  return (
    typeof body?.name === 'string' &&
    body.name.trim() &&
    typeof body?.email === 'string' &&
    body.email.includes('@')
  );
}

exports.create = (req, res) => {
  if (!valid(req.body)) return res.status(400).json({ message: 'Invalid customer' });
  const item = { id: nextId++, name: req.body.name.trim(), email: req.body.email.trim() };
  customers.push(item);
  res.status(201).json(item);
};

exports.update = (req, res) => {
  const item = customers.find((c) => c.id === Number(req.params.id));
  if (!item) return res.status(404).json({ message: 'Not found' });
  if (!valid(req.body)) return res.status(400).json({ message: 'Invalid customer' });
  item.name = req.body.name.trim();
  item.email = req.body.email.trim();
  res.json(item);
};

exports.remove = (req, res) => {
  const index = customers.findIndex((c) => c.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Not found' });
  customers.splice(index, 1);
  res.json({ message: 'Deleted' });
};
\`\`\`

**3. เป้าหมายและสิ่งที่ต้องทำในบทนี้**
1. เปิดไฟล์ \`backend/controllers/customers.js\` (ฟังก์ชัน \`exports.list\` และ \`exports.get\` มีเตรียมไว้ให้แล้ว)
2. เติมโค้ดใน \`exports.create\`, \`exports.update\`, และ \`exports.remove\` ให้ตรวจสอบข้อมูลและตอบ HTTP Status Code ตามสเปกข้างต้น
3. ทดสอบด้วยแท็บ **API Client** ทั้งการเพิ่ม แก้ไข และลบลูกค้า แล้วกดปุ่ม **ตรวจงาน**`,

  'fs-13': `**1. แนวคิดหลัก: React CRUD และ Service Layer**
เมื่อฝั่ง Backend มี REST API สำหรับ CRUD ลูกค้าครบแล้ว บทนี้เราจะสร้างหน้าจอฝั่ง React เพื่อ **แสดงรายการ, เพิ่ม, แก้ไข และลบข้อมูลลูกค้า** โดยเรียกใช้งานผ่าน **Service Layer** (\`frontend/services/customerApi.js\`) ซึ่งเตรียมฟังก์ชันไว้ให้ครบแล้ว:
- \`await customerApi.list()\` — ดึงรายชื่อลูกค้าทั้งหมด (\`GET /api/customers\`)
- \`await customerApi.create({ name, email })\` — สร้างลูกค้าใหม่ (\`POST /api/customers\`)
- \`await customerApi.update(id, { name, email })\` — แก้ไขลูกค้าตาม ID (\`PUT /api/customers/:id\`)
- \`await customerApi.remove(id)\` — ลบลูกค้าตาม ID (\`DELETE /api/customers/:id\`)

**2. การเชื่อมฟอร์มและรายการใน frontend/App.jsx**
\`\`\`jsx
// frontend/App.jsx
import { useEffect, useState } from 'react';
import { customerApi } from './services/customerApi';

export default function App() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function refresh() {
    try {
      setError('');
      setCustomers(await customerApi.list());
    } catch {
      setError('โหลดข้อมูลไม่สำเร็จ');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { refresh(); }, []);

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      if (editing) await customerApi.update(editing, { name, email });
      else await customerApi.create({ name, email });
      setName('');
      setEmail('');
      setEditing(null);
      await refresh();
    } catch {
      setError('บันทึกไม่สำเร็จ');
    } finally {
      setBusy(false);
    }
  }

  async function remove(id) {
    setBusy(true);
    setError('');
    try {
      await customerApi.remove(id);
      await refresh();
    } catch {
      setError('ลบไม่สำเร็จ');
    } finally {
      setBusy(false);
    }
  }

  return (
    <main>
      <h1>Customer CRUD</h1>
      <form onSubmit={submit}>
        <label>ชื่อ<input value={name} onChange={(e) => setName(e.target.value)} /></label>
        <label>อีเมล<input value={email} onChange={(e) => setEmail(e.target.value)} /></label>
        <button disabled={busy}>{editing ? 'บันทึกการแก้ไข' : 'เพิ่มลูกค้า'}</button>
      </form>
      {loading && <p>กำลังโหลด...</p>}
      {error && <p role="alert">{error}</p>}
      <ul>
        {customers.map((c) => (
          <li key={c.id}>
            {c.name} ({c.email})
            <button onClick={() => { setEditing(c.id); setName(c.name); setEmail(c.email); }}>แก้ไข</button>
            <button onClick={() => remove(c.id)}>ลบ</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
\`\`\`

**3. เป้าหมายและสิ่งที่ต้องทำในบทนี้**
1. เปิดไฟล์ \`frontend/App.jsx\` และนำเข้า \`{ customerApi }\` จาก \`./services/customerApi\`
2. โหลดรายชื่อลูกค้าด้วย \`customerApi.list()\` ใน \`useEffect\` พร้อมแสดง \`กำลังโหลด...\`
3. สร้างฟอร์มที่มี \`<label>ชื่อ<input .../></label>\` และ \`<label>อีเมล<input .../></label>\` พร้อมปุ่ม \`เพิ่มลูกค้า\` (หรือ \`บันทึกการแก้ไข\` เมื่ออยู่ในโหมดแก้ไข)
4. ในแต่ละรายการลูกค้า ให้มีปุ่ม \`แก้ไข\` และ \`ลบ\` พร้อมแสดง \`role="alert"\` เมื่อเกิดข้อผิดพลาด แล้วกดปุ่ม **ตรวจงาน**`,

  'fs-14': `**1. แนวคิดหลัก: SQL และ Parameterized Query (ป้องกัน SQL Injection)**
**ห้าม**นำข้อความจากผู้ใช้มาต่อ String เข้ากับคำสั่ง SQL โดยตรงเด็ดขาด เพราะผู้ไม่หวังดีอาจส่ง \`' OR 1=1 --\` เข้ามาเพื่อดึงข้อมูลทั้งตาราง เราต้องใช้เครื่องหมาย \`?\` (**Parameterized Query**) เพื่อแยกคำสั่ง SQL ออกจากข้อมูลผู้ใช้เสมอ

**2. การเขียนฟังก์ชัน search(keyword) ใน backend/db.js**
ในห้องฝึกบนเบราว์เซอร์นี้ เราจำลองฐานข้อมูล SQL ด้วยไลบรารี \`sql.js\` (SQLite) ในไฟล์ \`backend/db.js\` ซึ่งมีขั้นตอนการใช้งานดังนี้:

\`\`\`javascript
// backend/db.js
async function search(keyword = '') {
  const db = await ready;
  const statement = db.prepare('SELECT * FROM customers WHERE name LIKE ?');
  try {
    statement.bind(['%' + keyword + '%']);
    const rows = [];
    while (statement.step()) {
      rows.push(statement.getAsObject());
    }
    return rows;
  } finally {
    statement.free(); // คืนหน่วยความจำของ prepared statement เสมอ
  }
}
\`\`\`

- **เทียบกับ MySQL จริง (\`mysql2/promise\`):** เมื่อรันกับฐานข้อมูล MySQL ภายนอก ใช้หลักการ \`?\` เดียวกัน: \`const [rows] = await pool.query('SELECT * FROM customers WHERE name LIKE ?', ['%' + keyword + '%']);\`

**3. เป้าหมายและสิ่งที่ต้องทำในบทนี้**
1. เปิดไฟล์ \`backend/db.js\` ไปที่ฟังก์ชัน \`async function search(keyword = '')\`
2. แก้ไขให้ใช้ \`db.prepare('SELECT * FROM customers WHERE name LIKE ?')\` และผูกค่าด้วย \`statement.bind(['%' + keyword + '%'])\`
3. วนลูป \`while (statement.step()) rows.push(statement.getAsObject());\` แล้วคืนค่า \`rows\` พร้อมเรียก \`statement.free()\` ในบล็อก \`finally\`
4. ทดสอบในแท็บ **API Client** ด้วย \`GET /api/search?keyword=Mali\` แล้วกดปุ่ม **ตรวจงาน**`,

  'fs-15': `**1. แนวคิดหลัก: Prisma ORM + MySQL บนเครื่องและ Docker**
นักพัฒนา Full Stack นิยมใช้ **Prisma ORM** เพื่อเขียนคำสั่งจัดการฐานข้อมูลผ่าน JavaScript Object แทนการเขียน SQL ดิบ โดยอ้างอิงจากโมเดล \`Customer\` ในไฟล์ \`prisma/schema.prisma\`:

\`\`\`prisma
model Customer {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}
\`\`\`

**2. การเขียน Controller ด้วย Prisma Client**
ในไฟล์ \`backend/controllers/customers.js\` มีการนำเข้า \`const prisma = require('../db/prisma.js');\` และเขียนฟังก์ชัน \`get\`, \`create\`, \`update\`, \`remove\` ไว้ให้แล้ว งานของคุณคือเติมฟังก์ชัน \`exports.list\` ให้ค้นหาชื่อลูกค้าด้วย \`prisma.customer.findMany\`:

\`\`\`javascript
// backend/controllers/customers.js
const prisma = require('../db/prisma.js');

exports.list = async (req, res) =>
  res.json(
    await prisma.customer.findMany({
      where: {
        name: { contains: String(req.query.keyword || '') },
      },
      orderBy: { id: 'asc' },
    })
  );
\`\`\`

**3. เป้าหมายและสิ่งที่ต้องทำในบทนี้**
1. เปิดไฟล์ \`backend/controllers/customers.js\`
2. แก้ไข \`exports.list\` ให้เรียกใช้ \`await prisma.customer.findMany({ where: { name: { contains: String(req.query.keyword || '') } }, orderBy: { id: 'asc' } })\` และส่งกลับด้วย \`res.json(...)\`
3. หากต้องการฝึกกับ MySQL จริงบนเครื่องหรือ Docker ให้กดปุ่มส่งออก ZIP แล้วรันตามขั้นตอนใน \`README.md\``,

  'fs-16': `**1. แนวคิดหลัก: Register, Login และ Password Hash (bcrypt)**
กฎเหล็กด้านความปลอดภัยของระบบสมาชิกคือ **ห้ามเก็บรหัสผ่านของผู้ใช้เป็นข้อความธรรมดา (Plain Text)** ในบทนี้เราจะใช้ไลบรารี **\`bcryptjs\`** เพื่อเข้ารหัสผ่านทางเดียว (Hashing) ก่อนบันทึก และตรวจสอบรหัสผ่านตอนเข้าสู่ระบบ

**2. การสมัครสมาชิก (POST /api/auth/register) และการเข้าสู่ระบบ (POST /api/auth/login)**
\`\`\`javascript
// backend/routes/auth.js
router.post('/register', async (req, res) => {
  const { userName, email, password } = req.body;
  if (
    !userName?.trim() ||
    !email?.includes('@') ||
    typeof password !== 'string' ||
    password.length < 8
  ) {
    return res.status(400).json({ message: 'Invalid registration data' });
  }
  if (store.users.some((u) => u.userName === userName || u.email === email)) {
    return res.status(409).json({ message: 'Duplicate user' });
  }
  const passwordHash = await bcrypt.hash(password, 10);
  store.users.push({
    id: store.nextId++,
    userName: userName.trim(),
    email: email.trim(),
    passwordHash,
    role: 'user',
  });
  res.status(201).json({ message: 'Registered' });
});

router.post('/login', async (req, res) => {
  const user = store.users.find((u) => u.userName === req.body.userName);
  if (!user || !(await bcrypt.compare(String(req.body.password || ''), user.passwordHash))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ userId: user.id, role: user.role }, secret, { expiresIn: '1h' });
  res.json({ token });
});
\`\`\`

**3. เป้าหมายและสิ่งที่ต้องทำในบทนี้**
1. เปิดไฟล์ \`backend/routes/auth.js\`
2. เติมโค้ดใน \`router.post('/register', ...)\` ให้ตรวจข้อมูล (400), ตรวจซ้ำ (409), แฮชรหัสผ่านด้วย \`bcrypt.hash(password, 10)\`, บันทึกลง \`store.users\` โดยบังคับ \`role: 'user'\` และตอบ Status \`201\`
3. เติมโค้ดใน \`router.post('/login', ...)\` ให้ค้นหาผู้ใช้ด้วย \`userName\`, ตรวจรหัสผ่านด้วย \`bcrypt.compare\` (ถ้าผิดตอบ \`401\`), และส่งกลับ \`res.json({ token })\` แล้วกดปุ่ม **ตรวจงาน**`,

  'fs-17': `**1. แนวคิดหลัก: JWT, Protected API และ Middleware verifyToken**
หลังจากผู้ใช้ล็อกอินและได้รับ **JWT (JSON Web Token)** ไปแล้ว ทุกครั้งที่เบราว์เซอร์ต้องการเรียกใช้งาน API ส่วนตัว (เช่น \`GET /api/auth/me\`) เบราว์เซอร์จะแนบ Token มาใน HTTP Header ที่ชื่อว่า \`Authorization: Bearer <token>\`

**2. การสร้าง Middleware ตรวจสอบ Token (backend/middleware/verifyToken.js)**
\`\`\`javascript
// backend/middleware/verifyToken.js
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_KEY || 'practice-only-change-this-key';

module.exports = function verifyToken(req, res, next) {
  const header = req.headers.authorization || '';
  if (!header.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token required' });
  }
  try {
    req.user = jwt.verify(header.slice(7), secret);
    next(); // อนุญาตให้ผ่านไปยัง Route ปลายทาง พร้อมข้อมูล req.user
  } catch {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};
\`\`\`

**3. เป้าหมายและสิ่งที่ต้องทำในบทนี้**
1. เปิดไฟล์ \`backend/middleware/verifyToken.js\`
2. ตรวจสอบว่า \`req.headers.authorization\` ขึ้นต้นด้วย \`'Bearer '\` หรือไม่ หากไม่ขึ้นต้นให้ตอบ Status \`401\`
3. ตัดคำว่า \`'Bearer '\` ออกด้วย \`header.slice(7)\` แล้วนำไปตรวจสอบด้วย \`jwt.verify(header.slice(7), secret)\` ภายในบล็อก \`try / catch\`
4. หากผ่าน ให้เก็บผลลัพธ์ลงใน \`req.user\` แล้วเรียก \`next()\` หากไม่ผ่านให้ตอบ Status \`401\` แล้วกดปุ่ม **ตรวจงาน**`,
};

export const activityDescriptions = {
  'guided-0': `**ก้าวที่ 1: สั่งให้ Node พูดใน Terminal**
ไม่ต้องมีพื้นฐาน React หรือเว็บมาก่อน! กิจกรรมแรกนี้จะพาคุณรู้จักกับ **Node.js** โดยการสั่งรันโค้ด JavaScript บนเซิร์ฟเวอร์จำลองและดูผลลัพธ์ในหน้าต่าง Terminal โดยตรง

\`\`\`javascript
// scripts/hello.js
const learner = 'Mali';
console.log('Hello Node, ' + learner);
\`\`\`

**สิ่งที่ต้องทำ**
1. เปิดไฟล์ \`scripts/hello.js\` จากแถบไฟล์ด้านซ้าย
2. แทนที่บรรทัด \`// TODO\` ด้วย \`const learner = 'Mali';\` และ \`console.log('Hello Node, ' + learner);\`
3. กดปุ่ม **ตรวจงาน** เพื่อยืนยันว่าสคริปต์แสดงข้อความ \`Hello Node, Mali\` ได้ถูกต้อง`,

  'guided-1': `**ก้าวที่ 2: เปิดประตู API เส้นแรก (Task Board Backend)**
สร้างเส้นทาง API เส้นแรกของโปรเจกต์ **Task Board** ด้วย Express เพื่อให้เซิร์ฟเวอร์ส่งรายการงานกลับไปในรูปแบบ JSON

\`\`\`javascript
// backend/app.js (วางก่อนบรรทัด module.exports = app;)
app.get('/api/tasks', (req, res) => {
  res.json([{ id: 1, title: 'เรียน Node', done: false }]);
});
\`\`\`

**สิ่งที่ต้องทำ**
1. เปิดไฟล์ \`backend/app.js\`
2. ก่อนบรรทัด \`module.exports = app;\` ให้เพิ่ม Route \`GET /api/tasks\` ที่ตอบกลับ \`[{ id: 1, title: 'เรียน Node', done: false }]\`
3. ทดลองกดส่ง \`GET /api/tasks\` ในแท็บ **API Client** แล้วกดปุ่ม **ตรวจงาน**`,

  'guided-2': `**ก้าวที่ 3: วาดหน้าแรกของ React (Task Board UI)**
สลับมาทำความรู้จักกับฝั่งหน้าบ้าน (Frontend) โดยการแก้ไข Component หลักใน \`frontend/App.jsx\` เพื่อสร้างหัวเรื่องและคำอธิบายของบอร์ดงาน

\`\`\`jsx
// frontend/App.jsx
export default function App() {
  return (
    <main className="board">
      <h1>My Task Board</h1>
      <p>ฉันกำลังสร้างเว็บของตัวเอง</p>
    </main>
  );
}
\`\`\`

**สิ่งที่ต้องทำ**
1. เปิดไฟล์ \`frontend/App.jsx\`
2. แก้ไขให้ฟังก์ชัน \`App\` แสดง \`<h1>My Task Board</h1>\` และ \`<p>ฉันกำลังสร้างเว็บของตัวเอง</p>\`
3. ดูผลลัพธ์ในหน้าต่าง **Preview (:5173)** แล้วกดปุ่ม **ตรวจงาน**`,

  'guided-3': `**ก้าวที่ 4: ให้ React ขอข้อมูลจาก Node**
เชื่อมต่อหน้าเว็บ React เข้ากับ Express API ที่เราสร้างไว้ โดยดึงข้อมูลจาก \`GET /api/tasks\` มาแสดงเป็นรายการบนหน้าจอ

\`\`\`jsx
// frontend/App.jsx
import { useEffect, useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/tasks')
      .then((r) => {
        if (!r.ok) throw new Error('โหลดงานไม่สำเร็จ');
        return r.json();
      })
      .then(setTasks)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="board">
      <h1>My Task Board</h1>
      {loading && <p>กำลังโหลด...</p>}
      {error && <p role="alert">{error}</p>}
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </main>
  );
}
\`\`\`

**สิ่งที่ต้องทำ**
1. เปิดไฟล์ \`frontend/App.jsx\`
2. ใช้ \`useState\` และ \`useEffect\` ดึงข้อมูลจาก \`/api/tasks\` พร้อมแสดง \`กำลังโหลด...\` และรายการงานใน \`<ul><li>\` แล้วกดปุ่ม **ตรวจงาน**`,

  'guided-4': `**ก้าวที่ 5: โปรเจกต์แรกครบวงจร — Task Board CRUD**
ต่อยอดโปรเจกต์ Task Board ให้สมบูรณ์แบบ! ผู้ใช้สามารถพิมพ์ชื่องานใหม่เพื่อบันทึก (\`POST /api/tasks\`), กดสลับสถานะเสร็จแล้ว/ยังไม่เสร็จ (\`PATCH /api/tasks/:id\`), และกดลบงาน (\`DELETE /api/tasks/:id\`) ได้

**สิ่งที่ต้องทำใน frontend/App.jsx**
1. เปิดไฟล์ \`frontend/App.jsx\`
2. ผูกฟอร์มเพิ่มงานให้ส่ง \`POST /api/tasks\` ด้วย \`{ title }\` (หากชื่อว่างให้แสดง \`<p role="alert">กรุณากรอกชื่องาน</p>\`)
3. เพิ่มปุ่มสลับสถานะ (แสดงข้อความ \`เสร็จแล้ว\` หรือ \`ยังไม่เสร็จ\`) ที่ส่ง \`PATCH /api/tasks/:id\` พร้อม \`{ done: !t.done }\`
4. เพิ่มปุ่ม \`ลบ\` ที่ส่ง \`DELETE /api/tasks/:id\` แล้วโหลดรายการงานใหม่ จากนั้นกดปุ่ม **ตรวจงาน**`,

  'lab-restaurant': `**เวิร์กช็อป 1: เว็บร้านอาหาร 3 หน้าด้วย Express Router & Static Files**
ประยุกต์ใช้ความรู้เรื่อง Express Router, \`path.join\`, \`res.sendFile()\`, และการตรวจสอบ Route Parameters เพื่อสร้างเว็บไซต์ร้านอาหารไทยที่มี 3 หน้าหลัก พร้อมระบบดูรายละเอียดราคาเมนูและหน้า 404

**สเปกของระบบที่ต้องทำให้ผ่านใน backend/routes/pages.js**
1. เปิดไฟล์ \`backend/routes/pages.js\`
2. \`GET /\` และ \`GET /home\` — ส่งไฟล์ \`public/index.html\` ด้วย \`res.sendFile(path.join(__dirname, '../../public/index.html'))\`
3. \`GET /menu\` — ส่งไฟล์ \`public/info/menu.html\` และ \`GET /order\` — ส่งไฟล์ \`public/info/order.html\`
4. \`GET /item/:name/price/:price\` — ตรวจสอบว่า \`Number(req.params.price)\` เป็นตัวเลขที่ถูกต้องและไม่ติดลบ (ถ้าผิดตอบ Status \`400\`) หากถูกต้องให้ตอบ HTML แสดงชื่อเมนูและราคา เช่น \`<h1>tea</h1><p>35 บาท</p>\`
5. วาง 404 Fallback \`router.use((req, res) => res.status(404).send('<h1>404 — ไม่พบหน้า</h1>'))\` ไว้ท้ายสุดของ Router`,

  'lab-customers': `**เวิร์กช็อป 2: แยก Component ระบบลูกค้า (Customer, CustomerForm, CustomerList)**
ฝึกสถาปัตยกรรม React ระดับใช้งานจริงตามสไลด์ Full Stack 2 โดยการแยกโค้ดออกจากไฟล์เดียวให้เป็น 3 Component ที่แบ่งหน้าที่กันอย่างชัดเจน

**โครงสร้างไฟล์และหน้าที่**
1. สร้างไฟล์ \`frontend/pages/customers/CustomerForm.jsx\`: รับ props \`{ editing, onSave, busy }\` มีช่อง \`<label>ชื่อ<input .../></label>\` และ \`<label>อีเมล<input .../></label>\` พร้อมปุ่ม \`{editing ? 'อัปเดตลูกค้า' : 'เพิ่มลูกค้า'}\`
2. สร้างไฟล์ \`frontend/pages/customers/CustomerList.jsx\`: รับ props \`{ rows, onEdit, onRemove }\` หากไม่มีข้อมูลให้แสดง \`<p>ยังไม่มีลูกค้า</p>\` หากมีข้อมูลให้แสดงรายการพร้อมปุ่ม \`แก้ไข\` และ \`ลบ\`
3. สร้างไฟล์ \`frontend/pages/customers/Customer.jsx\`: เป็นตัวกลางถือ State และเรียกใช้ \`customerApi.list()\`, \`customerApi.create()\`, \`customerApi.update()\`, \`customerApi.remove()\`
4. ในไฟล์ \`frontend/App.jsx\`: นำเข้าและแสดงผล \`<Customer />\``,

  'lab-member': `**เวิร์กช็อป 3: ระบบสมาชิกครบวงจร (Register, Login, AuthContext & ProtectedRoute)**
สร้างระบบยืนยันตัวตนฝั่ง React ที่เชื่อมต่อกับ JWT API โดยใช้ \`sessionStorage.getItem('practice-token')\` ร่วมกับ \`AuthContext\` และ \`ProtectedRoute\`

**โครงสร้างไฟล์และสเปกสำคัญ**
1. สร้าง \`frontend/context/AuthContext.jsx\`: อ่าน Token จาก \`sessionStorage.getItem('practice-token')\` แล้วเรียก \`GET /api/auth/me\` พร้อมแนบ Header \`Authorization: Bearer <token>\`
2. สร้าง \`frontend/pages/Register.jsx\`: ฟอร์มสมัครสมาชิกที่มี label \`userName\`, \`email\`, \`password\`, \`confirmation\` และปุ่ม \`สมัครสมาชิก\`
3. สร้าง \`frontend/pages/Login.jsx\`: ฟอร์มเข้าสู่ระบบที่มี label \`ชื่อผู้ใช้\`, \`รหัสผ่าน\` และปุ่ม \`เข้าสู่ระบบ\`
4. สร้าง \`frontend/pages/Home.jsx\`: แสดง \`<h1>สวัสดี {user.userName}</h1>\` และปุ่ม \`ออกจากระบบ\`
5. ใน \`frontend/App.jsx\`: ตั้งค่า \`ProtectedRoute\` สำหรับหน้า \`/home\` หากยังไม่ได้ล็อกอินให้ Redirect ไปที่ \`/login\``,

  'lab-food': `**เวิร์กช็อป 4: ระบบจัดการเมนูอาหาร (FoodContainer, FoodForm, FoodList & Filter)**
พัฒนาแอปพลิเคชันจัดการเมนูอาหารครบวงจรทั้งฝั่ง Express API และฝั่ง React UI พร้อมระบบกรองตามประเภทอาหารและสถานะเมนูขายดี (Best Seller)

**สิ่งที่ต้องทำ**
1. ใน \`backend/routes/menu.js\`: เติม \`POST /\`, \`PUT /:id\`, และ \`DELETE /:id\` โดยตรวจสอบความถูกต้องของ \`name\`, \`price\` (ตัวเลข >= 0), \`typeId\` (ต้องตรงกับประเภทที่มีอยู่), และ \`isBestSeller\` (boolean)
2. ใน \`frontend/pages/FoodForm.jsx\`: มี label \`ชื่อเมนู\`, \`ราคา\`, \`ประเภท\`, \`ขายดี\` และปุ่ม \`{editing ? 'บันทึกเมนู' : 'เพิ่มเมนู'}\` โดยแปลง \`price\` และ \`typeId\` เป็น \`Number\` ก่อนส่ง
3. ใน \`frontend/pages/FoodContainer.jsx\`: โหลดข้อมูลด้วย \`Promise.all([foodApi.list(), foodApi.types()])\` และมีตัวกรอง \`<label>กรองประเภท<select .../></label>\``,

  'lab-booking': `**เวิร์กช็อป 5: ระบบจองที่นั่งเวิร์กช็อป (Capacity & Cancellation Code)**
ฝึกเขียนระบบที่มีกฎธุรกิจเข้มข้น: ตรวจสอบจำนวนที่นั่งว่างก่อนจอง ป้องกันการจองเกินความจุ (Overbooking) และใช้รหัสการจอง (\`X-Booking-Code\`) ในการยกเลิกเพื่อคืนที่นั่ง

**สเปกของระบบ**
1. ใน \`backend/routes/booking.js\`:
- \`GET /api/events\`: คืนรายการกิจกรรมพร้อมคำนวณที่นั่งว่าง \`available: e.capacity - e.booked\`
- \`POST /api/bookings\`: รับ \`{ eventId, name, seats }\` ตรวจชื่อยาว >= 2 ตัวอักษรและ \`seats\` เป็นจำนวนเต็มบวก (400), ถ้าไม่พบกิจกรรม (404), ถ้าที่นั่งไม่พอ (409), เมื่อผ่านเพิ่ม \`event.booked += seats\` และสร้างรหัส \`code: randomUUID()\` ตอบ \`201\`
- \`PATCH /api/bookings/:id/cancel\`: ตรวจ Header \`X-Booking-Code\` (ไม่มีตอบ 401, ไม่ตรงตอบ 403, ยกเลิกซ้ำตอบ 409) เมื่อผ่านเปลี่ยนสถานะเป็น \`'cancelled'\` และคืนที่นั่ง
2. ใน \`frontend/components/BookingForm.jsx\`: สร้างฟอร์มที่มี label \`กิจกรรม\`, \`ชื่อผู้จอง\`, \`จำนวนที่นั่ง\` และปุ่ม \`ยืนยันการจอง\``,

  'lab-inventory': `**เวิร์กช็อป 6: ระบบคลังสินค้าและประวัติการเคลื่อนไหว (Audit Log & Optimistic Locking)**
พัฒนาระบบรับเข้า/เบิกออกคลังสินค้าที่ป้องกันยอดสต็อกติดลบ บันทึกประวัติการเปลี่ยนแปลงทุกครั้ง (\`before\` / \`after\`) และตรวจสอบ \`version\` ของข้อมูลเพื่อป้องกันการเขียนทับข้อมูลเก่า

**สเปกของระบบ**
1. ใน \`backend/routes/inventory.js\`:
- \`POST /api/movements\`: รับ \`{ productId, type, quantity, version, note }\`
- หากไม่พบสินค้าตอบ \`404\`, หาก \`type\` ไม่ใช่ \`'in'\` หรือ \`'out'\` หรือ \`quantity <= 0\` หรือ \`note\` ว่าง ตอบ \`400\`
- หาก \`version !== product.version\` หรือเบิกเกินสต็อกคงเหลือ ตอบ \`409\`
- เมื่อผ่านให้ปรับค่า \`product.stock\`, เพิ่ม \`product.version++\`, และบันทึกประวัติที่มี \`before\` และ \`after\` ตอบ \`201\`
2. ใน \`frontend/pages/Inventory.jsx\`: แสดงการ์ดสินค้าพร้อมสต็อกคงเหลือ และฟอร์มที่มี label \`สินค้า\`, \`ประเภท\`, \`จำนวน\`, \`เหตุผล\` และปุ่ม \`บันทึกรายการ\``,

  'lab-community': `**เวิร์กช็อป 7: ระบบรีวิวเมนูอาหาร 3 ระดับสิทธิ์ (Guest / User / Admin)**
เวิร์กช็อปสุดท้ายที่รวมทุกทักษะเข้าด้วยกัน: การแยกสิทธิ์ผู้ใช้งาน 3 ระดับ (Guest อ่านได้อย่างเดียว, User เขียนและลบรีวิวของตนเองได้เมนูละ 1 ครั้ง, Admin จัดการเมนูและลบรีวิวได้) พร้อมคำนวณคะแนนเฉลี่ยแบบ Real-time

**สเปกของระบบ**
1. เปิดไฟล์ \`backend/routes/community.js\` เพื่อตรวจสอบและเติม Route จัดการเมนูและรีวิว
2. \`GET /api/menu\`: ทุกคนเข้าถึงได้ คืนรายการเมนูพร้อมคำนวณ \`reviewCount\` และคะแนนเฉลี่ย \`average\`
3. \`POST /api/menu\`, \`PUT /api/menu/:id\`, \`DELETE /api/menu/:id\`: เฉพาะ \`role === 'admin'\` เท่านั้น (ไม่ล็อกอินตอบ \`401\`, ไม่ใช่ admin ตอบ \`403\`)
4. \`POST /api/menu/:id/reviews\`: เฉพาะสมาชิกที่ล็อกอินแล้ว ให้คะแนน \`rating\` 1–5 (ถ้าผิดตอบ \`400\`) และห้ามรีวิวเมนูเดิมซ้ำ (ถ้าซ้ำตอบ \`409\`)
5. เติมหน้า \`frontend/pages/CommunityMenu.jsx\` และ \`frontend/pages/AdminMenu.jsx\` ให้ครบถ้วน`,

  'exam-api': `**สอบย่อย A: REST API & Controller CRUD (Customer Service)**
แบบทดสอบวัดความเข้าใจการเขียน Express Controller และการกำหนด HTTP Status Codes ตามมาตรฐาน RESTful API

**โจทย์และเกณฑ์การให้คะแนน**
1. เปิดไฟล์ \`backend/controllers/customers.js\` ให้รองรับการทำงานครบทั้ง 5 ฟังก์ชัน ได้แก่ \`exports.list\`, \`exports.get\`, \`exports.create\`, \`exports.update\`, และ \`exports.remove\`
2. \`POST /api/customers\` (\`exports.create\`): ต้องตรวจสอบว่ามี \`name\` และ \`email\` ที่ถูกต้อง หากไม่ครบให้ตอบ \`400\` หากถูกต้องให้สร้างรายการใหม่และตอบ \`201\`
3. \`PUT /api/customers/:id\` (\`exports.update\`) และ \`DELETE /api/customers/:id\` (\`exports.remove\`): หากไม่พบ ID ที่ระบุต้องตอบ \`404\` หากพบให้อัปเดตหรือลบข้อมูลและตอบ \`200\``,

  'exam-react': `**สอบย่อย B: React CRUD, Form & Service Integration**
แบบทดสอบวัดความสามารถในการเชื่อมต่อ React Frontend เข้ากับ \`customerApi\` (\`list\`, \`create\`, \`update\`, \`remove\`) พร้อมจัดการสถานะของหน้าจอ

**โจทย์และเกณฑ์การให้คะแนนใน frontend/App.jsx**
1. เปิดไฟล์ \`frontend/App.jsx\` โหลดและแสดงรายชื่อลูกค้าเมื่อเปิดหน้าเว็บด้วย \`customerApi.list()\`
2. มีฟอร์มที่มี \`<label>ชื่อ...</label>\` และ \`<label>อีเมล...</label>\` พร้อมปุ่ม \`เพิ่มลูกค้า\` (และเปลี่ยนเป็น \`บันทึกการแก้ไข\` เมื่อกดปุ่ม \`แก้ไข\` ของรายการลูกค้า)
3. แต่ละรายการลูกค้าต้องมีปุ่ม \`แก้ไข\` (เรียก \`customerApi.update\`) และปุ่ม \`ลบ\` (เรียก \`customerApi.remove\`)
4. เมื่อเกิดข้อผิดพลาดจาก API ต้องแสดงข้อความแจ้งเตือนภายในแท็กที่มี \`role="alert"\``,

  'exam-auth': `**สอบย่อย C: Authentication, bcrypt & JWT Middleware**
แบบทดสอบวัดความเข้าใจเรื่องความปลอดภัยของระบบสมาชิก การแฮชรหัสผ่าน และการตรวจสอบสิทธิ์ด้วย JWT Middleware

**โจทย์และเกณฑ์การให้คะแนน**
1. เปิดไฟล์ \`backend/routes/auth.js\`: ตรวจสอบว่า \`POST /register\` บังคับความยาวรหัสผ่านอย่างน้อย 8 ตัวอักษร (ถ้าน้อยกว่า 8 ตัวอักษรต้องตอบ \`400\`), ตรวจชื่อผู้ใช้หรืออีเมลซ้ำ (\`409\`), แฮชรหัสผ่านด้วย \`bcrypt.hash\`, และบังคับกำหนด \`role: 'user'\` เสมอ
2. ใน \`backend/routes/auth.js\`: ตรวจสอบว่า \`POST /login\` ค้นหาผู้ใช้ด้วย \`userName\`, เปรียบเทียบรหัสผ่านด้วย \`bcrypt.compare\` และส่งกลับ \`{ token }\`
3. เปิดไฟล์ \`backend/middleware/verifyToken.js\`: เขียนโค้ดตรวจสอบ Header \`Authorization: Bearer <token>\` ด้วย \`jwt.verify(header.slice(7), secret)\` หากถูกต้องให้เก็บลง \`req.user\` แล้วเรียก \`next()\` หากไม่มี Token หรือไม่ถูกต้องให้ตอบ Status \`401\``,

  'exam-campus-gear': `**สอบปฏิบัติ D: Campus Gear Borrowing System (Full Stack)**
ข้อสอบปฏิบัติรวมทักษะ Full Stack: พัฒนาระบบยืม-คืนอุปกรณ์ของมหาวิทยาลัย โดยเชื่อมต่อระหว่าง Express API และหน้าเว็บ React

**คำแนะนำก่อนเริ่มทำข้อสอบ**
1. เปิดอ่านไฟล์ \`EXAM_REQUIREMENTS.md\` เพื่อดูรายละเอียด Endpoint, กฎการตรวจสอบข้อมูล และข้อความปุ่ม/Label ที่ชุดตรวจต้องการ
2. สามารถกดดูแท็บ **👁️ ตัวอย่างผลลัพธ์ (Demo)** ในแผงด้านขวาเพื่อทดลองเล่นระบบต้นแบบก่อนลงมือเขียนโค้ด`,

  'exam-store-hub': `**สอบปฏิบัติ E: Store & Order Hub (Full Stack สร้างจากศูนย์)**
ข้อสอบท้าทายระดับสูงสุด: สร้างระบบคลังสินค้าและการสั่งซื้อตัดสต็อกแบบ Real-time ทั้งฝั่ง Express API และ React UI

**คำแนะนำก่อนเริ่มทำข้อสอบ**
1. เปิดอ่านไฟล์ \`EXAM_REQUIREMENTS.md\` เพื่อศึกษารายละเอียด API Endpoints (\`GET /api/products\`, \`POST /api/products\`, \`POST /api/orders\`, \`GET /api/orders\`) และชื่อ Label
2. ทดลองเล่นระบบจำลองในแท็บ **👁️ ตัวอย่างผลลัพธ์ (Demo)** เพื่อดูพฤติกรรมเมื่อเพิ่มสินค้า สั่งซื้อสำเร็จ และเมื่อสั่งซื้อเกินจำนวนสต็อกคงเหลือ`,

  'exam-final-practice': `**สอบปฏิบัติ F: ฝึกสอบปลายภาค Full Stack (SkillHub Academy — Multi-Page + Role Auth + DB .sql)**
โจทย์จำลองสอบปลายภาคแบบครบวงจรที่รวมทุกเนื้อหาไว้ในข้อเดียว โดยระบบเตรียม **เฉพาะโครงไฟล์โปรเจกต์ (Project Skeleton)** และ **ฐานข้อมูลพร้อมข้อมูลเริ่มต้น (ทั้งไฟล์ \`database/skillhub_exam.sql\` เมื่อกดดาวน์โหลด ZIP และ \`backend/db/store.js\`)** มาให้

**สิ่งที่เตรียมไว้ให้แล้วในโปรเจกต์**
1. **ฐานข้อมูล SQL (\`database/skillhub_exam.sql\`, \`database/schema.sql\`, \`database/seed.sql\`)**: มี 4 ตารางหลัก ได้แก่ \`users\`, \`categories\`, \`courses\`, และ \`enrollments\` พร้อมข้อมูลเริ่มต้น (กดปุ่ม **ZIP** ด้านบนเพื่อโหลดไฟล์ \`.sql\` ไป Import ลง phpMyAdmin / MySQL ได้เลย)
2. **บัญชีทดสอบ 2 สิทธิ์ (Role)**:
   - ผู้ดูแลระบบ (**Admin**): \`userName: "admin"\`, รหัสผ่าน \`"admin12345"\`, \`role: "admin"\`
   - นักศึกษา (**Student**): \`userName: "mali"\`, รหัสผ่าน \`"mali12345"\`, \`role: "student"\`
3. **โครงไฟล์ Backend & Frontend 4 หน้า**: มีคอมเมนต์ \`// TODO\` ระบุจุดที่ต้องเขียนในแต่ละไฟล์อย่างชัดเจน

**สเปกของระบบที่ต้องพัฒนาให้ครบ (100 คะแนน)**
1. **ส่วนที่ 1 — Auth & Role Middleware (25 คะแนน)**:
   - เติม \`verifyToken\` (ตรวจ \`Bearer <token>\` ไม่ผ่านตอบ \`401\`) และ \`requireAdmin\` (ตรวจ \`req.user.role === 'admin'\` ไม่ผ่านตอบ \`403\`) ใน \`backend/middleware/auth.js\`
   - เติม \`POST /api/auth/register\` (แฮชรหัสผ่านด้วย \`bcryptjs\`, บังคับ \`role: 'student'\`, ข้อมูลผิดตอบ \`400\`, ชื่อ/อีเมลซ้ำตอบ \`409\`, สำเร็จตอบ \`201\`), \`POST /api/auth/login\` (ตรวจรหัสผ่านและส่ง JWT \`{ token, user }\` ตอบ \`200\` หรือ \`401\`), และ \`GET /api/auth/me\` ใน \`backend/routes/auth.js\`
2. **ส่วนที่ 2 — Courses API & Admin CRUD (30 คะแนน)**:
   - ใน \`backend/routes/courses.js\`: \`GET /api/courses\` ต้องรองรับ \`?keyword=\` (ค้นใน \`title\` หรือ \`code\`) และ \`?categoryId=\` พร้อมคำนวณ \`availableSeats = course.seats - course.enrolled\`
   - \`POST /api/courses\`, \`PUT /api/courses/:id\`, \`DELETE /api/courses/:id\` ต้องใช้ \`verifyToken, requireAdmin\` (ห้ามรหัสวิชาซ้ำ \`409\`, ห้ามลด \`seats\` ต่ำกว่า \`enrolled\` \`409\`, และห้ามลบคอร์สที่มีคนลงทะเบียนอยู่ \`409\`)
3. **ส่วนที่ 3 — Enrollments API & Seat Quota (20 คะแนน)**:
   - ใน \`backend/routes/enrollments.js\`: \`GET /api/enrollments/my\` ดึงรายการลงทะเบียนของตนเอง
   - \`POST /api/enrollments\` รับ \`{ courseId }\` ตรวจห้ามลงทะเบียนซ้ำ (\`409\`) และห้ามลงเมื่อที่นั่งเต็ม (\`409\`) พร้อมบวก \`course.enrolled += 1\` (\`201\`)
   - \`PATCH /api/enrollments/:id/cancel\` อนุญาตเฉพาะเจ้าของหรือ Admin เปลี่ยนสถานะเป็น \`'cancelled'\` และคืนที่นั่ง \`course.enrolled -= 1\` (\`200\`)
4. **ส่วนที่ 4 — Multi-Page React Router 4 หน้า & Role Guard (25 คะแนน)**:
   - หน้า \`/\` (\`CatalogPage.jsx\`): ค้นหา/กรองหมวดหมู่ แสดงที่นั่งว่าง และปุ่ม \`ลงทะเบียนเรียน\`
   - หน้า \`/login\` (\`LoginPage.jsx\`): ฟอร์ม \`เข้าสู่ระบบ\` และ \`สมัครสมาชิก\` เชื่อมกับ \`AuthContext\`
   - หน้า \`/my-courses\` (\`MyCoursesPage.jsx\`): แสดงคอร์สที่ลงทะเบียน ยอดรวมค่าเรียนเฉพาะรายการที่ \`active\` และปุ่ม \`ยกเลิกลงทะเบียน\`
   - หน้า \`/admin\` (\`AdminPage.jsx\`): ถ้าไม่ใช่ \`admin\` ต้องแสดง \`<p role="alert">ไม่มีสิทธิ์เข้าถึง (Admin เท่านั้น)</p>\` ถ้าเป็น \`admin\` แสดงฟอร์มเพิ่ม/แก้ไข/ลบคอร์สเรียน`,
};
