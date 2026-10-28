import { moreLessonNarratives } from './moreLessonNarratives.js';
const block = (title, path, explanation, code) => ({ title, path, explanation, code });

export const activityNarratives = {
  'guided-0': {
    intro: 'ก้าวแรกของการเรียน Node.js: สั่งรัน JavaScript นอกเบราว์เซอร์ผ่าน Terminal โดยตรงเพื่อเห็นผลลัพธ์ข้อความในคอนโซล',
    blocks: [
      block('ประกาศตัวแปรเก็บชื่อในไฟล์ Node', 'scripts/hello.js', 'ใน Node เราสามารถประกาศตัวแปรด้วย const ได้เช่นเดียวกับ JavaScript บนเว็บ แต่ไฟล์นี้จะถูกรันบนเซิร์ฟเวอร์โดยตรง ไม่ได้ผูกกับ DOM หรือหน้า HTML ใดๆ', 'const learner = "Mali";\nconsole.log("Hello Node, " + learner);'),
      block('แสดงผลลัพธ์ผ่าน console.log', 'scripts/hello.js', 'คำสั่ง console.log ใน Node จะส่งข้อความออกไปยังหน้าต่าง Terminal มาตรฐาน เพื่อใช้ในการดีบั๊กและตรวจสอบการทำงานของโปรแกรม', 'console.log("Hello Node, " + learner);'),
      block('คำสั่งรันไฟล์ใน Terminal', 'scripts/hello.js', 'การรันไฟล์ทำได้โดยพิมพ์คำสั่ง node ตามด้วย path ของไฟล์ เช่น node scripts/hello.js ใน Terminal ของห้องฝึก', 'node scripts/hello.js'),
    ],
    bridge: 'เปิดไฟล์ scripts/hello.js แทนที่ TODO ด้วย const learner = "Mali"; และแสดงผลด้วย console.log("Hello Node, " + learner); จากนั้นเปิด Terminal แล้วพิมพ์ node scripts/hello.js เพื่อสังเกตผลลัพธ์จริง',
    question: 'ทำไมคำสั่งใน scripts/hello.js จึงไม่สามารถใช้ document.getElementById ได้?',
    answer: 'เพราะ Node.js ทำงานบนเครื่องเซิร์ฟเวอร์ ไม่มีเบราว์เซอร์หรือ DOM tree การทำงานจะส่งผลลัพธ์ผ่าน Terminal แทน',
  },
  'guided-1': {
    intro: 'สร้าง API เส้นทางแรกด้วย Express เพื่อส่งข้อมูลรายการงาน Task Board กลับไปในรูปแบบ JSON ให้ผู้ใช้งานหรือแอปพลิเคชันอื่นเรียกดูได้',
    blocks: [
      block('เข้าใจโครงสร้าง Express App', 'backend/app.js', 'const app = express(); ทำหน้าที่สร้างเว็บแอปพลิเคชัน และ app.use(express.json()); ทำหน้าที่แปลงข้อมูล JSON ที่ส่งเข้ามาใน request body ให้อ่านได้ใน req.body', 'const express = require("express");\nconst app = express();\napp.use(express.json());'),
      block('สร้าง Route GET /api/tasks', 'backend/app.js', 'app.get("/api/tasks", (req, res) => ...) กำหนดว่าเมื่อมีคำขอแบบ GET มาที่ /api/tasks ให้เรียกฟังก์ชันนี้ และใช้ res.json() ส่ง array ข้อมูลกลับไป', 'app.get("/api/tasks", (req, res) => {\n  res.json([{ id: 1, title: "เรียน Node", done: false }]);\n});'),
      block('ส่งออก app ให้ server.js เปิดพอร์ต', 'backend/app.js', 'การแยก app ออกจาก server.js ช่วยให้เราสามารถนำ app ไปรันเทสต์อัตโนมัติได้โดยไม่ต้องผูกกับพอร์ตของเครื่องจริง', 'module.exports = app;'),
    ],
    bridge: 'เปิด backend/app.js แล้วเพิ่ม route GET /api/tasks ก่อนบรรทัด module.exports = app; ส่งคืน array ข้อมูลงาน [{ id: 1, title: "เรียน Node", done: false }] จากนั้นทดลองเรียกผ่านแท็บ API Client',
    question: 'ข้อมูลที่ส่งกลับจาก res.json ต่างจาก res.send อย่างไร?',
    answer: 'res.json จะกำหนด header Content-Type เป็น application/json ให้อัตโนมัติ และแปลง JavaScript object/array เป็นข้อความ JSON ที่พร้อมส่งผ่านเครือข่าย',
  },
  'guided-2': {
    intro: 'เริ่มต้นสร้างหน้าตา UI ฝั่ง React สำหรับโปรเจกต์ Task Board เพื่อทำความเข้าใจการเชื่อมโยงไฟล์จาก index.html สู่ main.jsx และ App.jsx',
    blocks: [
      block('จุดเริ่มต้นของ React ใน index.html', 'index.html', 'index.html กำหนด <div id="root"></div> ไว้ จากนั้นโหลด frontend/main.jsx ซึ่งเป็นจุดเริ่มต้นของโค้ด React', '<div id="root"></div>\n<script type="module" src="/frontend/main.jsx"></script>'),
      block('การวาดหน้าจอด้วย createRoot', 'frontend/main.jsx', 'createRoot จะจับ element #root แล้วเรียกคำสั่ง .render(<App />) เพื่อนำ component App ไปวาดแสดงผลบนหน้าจอเว็บ', 'createRoot(document.getElementById("root")).render(<App />);'),
      block('สร้างคอมโพเนนต์แรกใน App.jsx', 'frontend/App.jsx', 'คอมโพเนนต์ App ส่งคืนโครงสร้าง JSX ที่มีแท็กแม่ main ครอบหัวเรื่อง h1 และคำอธิบาย p ของโปรเจกต์ Task Board', 'export default function App() {\n  return <main><h1>My Task Board</h1><p>ฉันกำลังสร้างเว็บของตัวเอง</p></main>;\n}'),
    ],
    bridge: 'เปิด frontend/App.jsx แก้ไขหัวเรื่องเป็น My Task Board และเพิ่มย่อหน้าว่า ฉันกำลังสร้างเว็บของตัวเอง จากนั้นดู Preview พอร์ต 5173',
    question: 'ถ้าต้องการเพิ่มสีสันให้หน้าเว็บ Task Board ควรแก้ที่ไฟล์ใด?',
    answer: 'แก้ที่ frontend/styles.css ซึ่ง main.jsx ได้ทำการ import ไว้อยู่แล้ว',
  },
  'guided-3': {
    intro: 'เชื่อมต่อโลกของ React เข้ากับ Node.js: โหลดข้อมูลงานจริงจาก API /api/tasks มาแสดงผลบนหน้าจอพร้อมจัดการสถานะกำลังโหลดและข้อผิดพลาด',
    blocks: [
      block('เตรียม State สำหรับข้อมูลและสถานะ', 'frontend/App.jsx', 'สร้าง state tasks เก็บรายการงาน, loading สำหรับแสดงระหว่างรอ, และ error สำหรับแสดงเมื่อการเชื่อมต่อมีปัญหา', 'const [tasks, setTasks] = useState([]);\nconst [loading, setLoading] = useState(true);\nconst [error, setError] = useState("");'),
      block('โหลดข้อมูลด้วย useEffect และ fetch', 'frontend/App.jsx', 'เรียก fetch("/api/tasks") ภายใน useEffect ที่มี dependency array [] เพื่อให้โหลดข้อมูลเพียงครั้งเดียวตอนเปิดหน้าเว็บ', 'useEffect(() => {\n  fetch("/api/tasks")\n    .then(r => r.json())\n    .then(setTasks)\n    .finally(() => setLoading(false));\n}, []);'),
      block('แสดงผลรายการด้วย Array.map', 'frontend/App.jsx', 'แปลง array ของงานเป็น element <li> โดยใส่ key={task.id} ที่ไม่ซ้ำกันเสมอเพื่อให้ React จัดการ DOM ได้อย่างมีประสิทธิภาพ', '<ul>{tasks.map(task => <li key={task.id}>{task.title}</li>)}</ul>'),
    ],
    bridge: 'เขียน useEffect ใน frontend/App.jsx เพื่อดึง /api/tasks แล้วแสดง <p>กำลังโหลด...</p> ขณะรอ และแสดงรายการงานจริงเมื่อโหลดสำเร็จ',
    question: 'ทำไมจึงต้องมี key={task.id} ในแต่ละแท็ก <li>?',
    answer: 'key ช่วยให้ React ระบุได้ว่าสมาชิกตัวใดในรายการถูกเพิ่ม ลบ หรือแก้ไข ทำให้การอัปเดตหน้าจอมีความแม่นยำและรวดเร็ว',
  },
  'guided-4': {
    intro: 'สร้างโปรเจกต์ Task Board ฉบับสมบูรณ์ที่สามารถเพิ่มงานใหม่ สลับสถานะทำเสร็จ และลบงานได้ พร้อมเชื่อมต่อกับ Express API อย่างครบถ้วน',
    blocks: [
      block('ฟอร์มเพิ่มงานและส่ง POST', 'frontend/App.jsx', 'เมื่อผู้ใช้ส่งฟอร์ม เรียก fetch("/api/tasks", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title }) }) เพื่อบันทึกงานใหม่', 'await fetch("/api/tasks", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ title: title.trim() })\n});'),
      block('สลับสถานะด้วย PATCH', 'frontend/App.jsx', 'เมื่อคลิกปุ่มสลับสถานะ ส่ง PATCH ไปที่ /api/tasks/:id พร้อม { done: !task.done } เพื่ออัปเดตสถานะงานในฝั่งหลังบ้าน', 'await fetch("/api/tasks/" + task.id, {\n  method: "PATCH",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ done: !task.done })\n});'),
      block('ลบงานด้วย DELETE', 'frontend/App.jsx', 'เมื่อคลิกปุ่มลบ ส่ง DELETE ไปที่ /api/tasks/:id และเมื่อสำเร็จ ให้อัปเดต state เอาชิ้นงานนั้นออกจากหน้าจอ', 'await fetch("/api/tasks/" + task.id, { method: "DELETE" });\nsetTasks(tasks.filter(item => item.id !== task.id));'),
    ],
    bridge: 'เติมโค้ดฟอร์มเพิ่มงาน ปุ่มสลับสถานะ และปุ่มลบใน App.jsx ตรวจสอบให้แน่ใจว่าปิดปุ่มด้วย disabled={busy} ขณะรอการตอบกลับ',
    question: 'เมื่อลบงานสำเร็จ ทำไมไม่ต้องอ่าน response.json()?',
    answer: 'เพราะคำสั่ง DELETE มักตอบกลับด้วย HTTP 204 No Content ซึ่งไม่มีข้อมูล body ส่งกลับมา',
  },
  'lab-restaurant': {
    intro: 'งานนี้อยู่ท้ายช่วง Node เพื่อรวม Router, path, HTML และ static files ยังไม่ต้องใช้ React เปิด Preview API :3000 เพราะ Node เป็นคนส่งหน้า HTML ให้ browser โดยตรง',
    blocks: [
      block('เปิดไฟล์ HTML จาก route', 'backend/routes/pages.js', 'ไฟล์ที่ให้มี public/index.html, public/info/menu.html และ order.html ใน Router โฟลเดอร์ปัจจุบันคือ backend/routes จึงต้องถอยสองชั้นเพื่อหา public ใช้ res.sendFile กับ absolute path ที่ประกอบด้วย path.join อย่าคัดลอก absolute path ของเครื่องคุณลงโค้ด', 'const path = require("node:path");\nrouter.get("/home", (req, res) => {\n  res.sendFile(path.join(__dirname, "../../public/index.html"));\n});'),
      block('ไฟล์ CSS ถูกขอแยกจาก HTML', 'public/info/menu.html', 'browser อ่าน HTML ก่อนแล้วจึงขอ href ของ CSS เป็น request ใหม่ app.js เตรียม static public ไว้แล้ว จึงใช้ /css/style.css ได้โดยไม่ต้องสร้าง route CSS เอง ต่อให้ route /menu เปิดได้ CSS ก็ยังอาจ 404 ต้องตรวจทั้งสอง URL', '<link rel="stylesheet" href="/css/style.css">\n<a href="/item/tea/price/35">ดูรายละเอียดชาไทย</a>'),
      block('ตรวจข้อมูลจาก URL ก่อนแสดงใน HTML', 'backend/routes/pages.js', 'ราคาอยู่ใน params ตาม path /item/:name/price/:price แปลง Number และตรวจ finite/nonnegative ก่อนใช้ ส่วน name เป็นข้อความผู้ใช้ ถ้านำไปต่อ HTML ต้อง escape อักขระ < > & quotes เพื่อไม่ให้กลายเป็น tag ของผู้ใช้ แล้วค่อยตอบรายละเอียด', 'const price = Number(req.params.price);\nif (!Number.isFinite(price) || price < 0) {\n  return res.status(400).send("Invalid price");\n}\n// escape name ก่อนแทรกใน HTML'),
      block('วาง 404 หลัง routes ที่มีจริง', 'backend/routes/pages.js', 'Router เดินตามลำดับ ถ้าวางตัวตอบทุก URL ก่อน /home ทุกคำขอจะไปจบที่ 404 จึงใส่ fallback เป็นตัวสุดท้าย แล้วทดสอบหน้า valid, ราคา invalid และ URL ไม่มีจริงแยกกัน', 'router.use((req, res) => {\n  res.status(404).send("<h1>404 — ไม่พบหน้า</h1>");\n});'),
    ],
    bridge: 'เติม pages.js ก่อน แล้วตรวจ /home, /menu, /order จากนั้นตรวจ /css/style.css และลิงก์รายละเอียดทุกเมนู งานนี้ส่งไฟล์ HTML ที่มีอยู่ ไม่ต้องย้ายไป App.jsx หากแสดงถูกที่ :3000 แล้วจึงจัด CSS ที่ public/css/style.css',
    question: 'หน้า /menu เห็นข้อความครบแต่ไม่มีสี ต้องเริ่มตรวจ route ของหน้าอีกครั้งหรือดู request ไหน',
    answer: 'ดู href ของ stylesheet และลอง GET /css/style.css ว่าเป็น 200 กับ Content-Type CSS เพราะ browser ขอ stylesheet แยกจาก HTML',
  },
  'lab-customers': {
    ...moreLessonNarratives['fs-13'],
    intro: 'งานนี้ต่อจาก React CRUD ให้แยกความรับผิดชอบแบบ Full2: Customer เป็นผู้ถือรายการ/สถานะและคุย service, CustomerForm ถือค่ากรอก, CustomerList แสดงรายการแล้วส่ง event กลับ ไม่ให้ทุกไฟล์ยิง HTTP ซ้ำกัน',
    blocks: [
      block('กำหนดสัญญาระหว่างสาม component', 'frontend/App.jsx', 'สร้าง frontend/pages/customers/Customer.jsx, CustomerForm.jsx และ CustomerList.jsx แล้วให้ App import Customer Form รับ editing/onSave/busy ส่วน List รับ rows/onEdit/onRemove ชื่อ props ต้องตรงทั้งจุดส่งและจุดรับ การกดแก้ใน List ส่ง object กลับให้ Customer เติมฟอร์ม ไม่แก้ array props โดยตรง', '<CustomerForm editing={editing} onSave={save} busy={busy} />\n<CustomerList rows={customers} onEdit={setEditing} onRemove={remove} />'),
      ...moreLessonNarratives['fs-13'].blocks,
      block('ค่าที่กรอกกับข้อมูลที่บันทึกอยู่คนละที่', 'frontend/App.jsx', 'Form ล้างช่องได้เมื่อ onSave คืน true เท่านั้น Parent จึงต้องคืน true หลัง API สำเร็จและ false ใน catch หาก Form ล้างทันทีผู้ใช้จะเสียข้อความเมื่อ server ปฏิเสธ List ต้องมีข้อความเมื่อ rows ว่าง และการยืนยันก่อนลบต้องเกิดก่อนเรียก service', 'async function submit(event) {\n  event.preventDefault();\n  if (await onSave({ name, email })) {\n    setName(""); setEmail("");\n  }\n}'),
    ],
    bridge: 'เริ่มโหลดใน Customer ให้ใช้ได้ก่อน แยก List แล้วค่อย Form โดยย้ายโค้ดทีละส่วนและตรวจ props ทุกครั้ง สร้างไฟล์ใหม่ด้วยปุ่มเพิ่มไฟล์ตาม path ข้างต้น ในห้องฝึก backend CRUD และ service มีแล้ว ไม่ต้องเขียน API ใหม่ ทดสอบเพิ่ม/แก้/ลบ ชื่อว่าง API ล้มเหลว และรายการว่าง',
  },
  'lab-member': {
    ...moreLessonNarratives['fs-17'],
    intro: 'งานนี้รวม Register, Login, Home และ ProtectedRoute โดยใช้ AuthContext เป็นแหล่ง token/user กลาง เริ่มให้ backend verify ผ่านก่อน แล้วค่อยเชื่อม Router และฟอร์ม ไม่ถือว่า UI ซ่อนหน้าแล้ว API ปลอดภัยโดยอัตโนมัติ',
    blocks: [
      block('แบ่งไฟล์และหน้าที่ก่อนเขียน', 'frontend/App.jsx', 'สร้าง pages/Register.jsx, Login.jsx, Home.jsx และ context/AuthContext.jsx ให้ App ประกอบ Router และ Provider Register ส่งข้อมูลสมัครแล้วไป Login; Login รับ token แล้วโหลดข้อมูลผู้ใช้; Home อ่าน user จาก Context เมื่อออกระบบล้างข้อมูลและกลับ Login งานที่ไม่มีไฟล์ใน starter ต้องสร้างก่อน import', 'Register → POST /api/auth/register → Login\nLogin → POST /api/auth/login → token → GET /api/auth/me\nAuthContext เก็บ user/token → Home\nLogout → ล้าง token/user → Login'),
      ...moreLessonNarratives['fs-17'].blocks,
      block('ProtectedRoute รอการตรวจตัวตนก่อนเลือกหน้า', 'frontend/App.jsx', 'เมื่อเปิดหน้าใหม่ Context อาจกำลังตรวจ /me อยู่ ให้แสดงกำลังตรวจแทนรีบส่งกลับ Login เมื่อทราบผลแล้ว user มีค่าจึงแสดง children หากไม่มีให้ Navigate ไป login ข้อมูล password confirmation ตรวจใน Register ก่อนส่ง แต่ server ยังต้องตรวจข้อมูลสมัครเอง', 'if (loading) return <p>กำลังตรวจสิทธิ์...</p>;\nreturn user ? children : <Navigate to="/login" replace />;'),
    ],
    bridge: 'ทำทีละ flow: สมัคร → login → me → Home → logout จากนั้นแยกหน้าตาม path และเพิ่ม confirmation/busy/error ทดสอบเปิด URL Home ตรงโดยไม่ login และเรียก API ตรงโดยไม่มี token ทั้งสองกรณีต้องป้องกันตามหน้าที่ของตน ชุดนี้เก็บผู้ใช้ในหน่วยความจำตามโครงที่ให้',
  },
  'lab-food': {
    intro: 'ตาม Full2 หน้า 23 เราจะแบ่ง FoodContainer, FoodForm, FoodList โดยรับประเภทอาหารจาก API และส่งข้อมูลตามชนิดที่ backend ต้องการ มี service กับโครงหน้าให้แล้ว แต่ route เขียนข้อมูลยังเป็น TODO',
    blocks: [
      block('ตรวจ shape ของข้อมูลสอง API', 'frontend/services/foodApi.js', 'GET /api/menu คืนรายการที่มี menuId/name/price/typeId/isBestSeller ส่วน /api/types คืน typeId/name อ่านทั้งสองชุดก่อนสร้าง form Promise.all รอผลสองคำขอที่ไม่ขึ้นต่อกันพร้อมกัน ถ้าคำขอหนึ่งล้มเหลวต้องแสดง error ไม่ปล่อยหน้าเงียบ', 'const [menu, types] = await Promise.all([foodApi.list(), foodApi.types()]);\n// menuId ไม่ใช่ id ในงานนี้\n// typeId ต้องอ้างถึงประเภทที่มีอยู่'),
      block('เติม API เขียนข้อมูลและตรวจชนิด', 'backend/routes/menu.js', 'price/typeId ที่มาจากช่องกรอกมักเป็นข้อความ แต่ API กำหนดให้เป็น number และ isBestSeller เป็น boolean ตรวจ name ที่ trim แล้วไม่ว่าง ราคา finite ≥ 0 และ typeId ที่มีอยู่ก่อนแก้ rows PUT/DELETE หา menuId ที่ตรง ไม่พบตอบ 404 ข้อมูลผิดต้องไม่เปลี่ยนรายการ', '{ "name": "ชาไทย", "price": 35, "typeId": 2, "isBestSeller": false }'),
      block('ให้ Form ส่งข้อมูลและ Container ตัดสินผล', 'frontend/pages/FoodForm.jsx', 'Form ถือค่ากรอกและแปลง price/typeId ด้วย Number ส่วน checkbox อ่าน checked ไม่ใช่ value Container เรียก foodApi.save แล้วโหลดรายการใหม่ ถ้าสำเร็จคืน true ให้ Form ล้าง ถ้าผิดคงข้อความไว้ List เพียงแสดงข้อมูลและแจ้ง onEdit/onRemove', 'onSave({ name: inputs.name, price: Number(inputs.price),\n  typeId: Number(inputs.typeId), isBestSeller: inputs.isBestSeller });'),
      block('วาง Router และทดสอบ filter', 'frontend/App.jsx', 'App ประกอบ Home/Menu และ Layout ตามบท Router หน้า Menu แสดง FoodContainer การกรองประเภทต้องแปลงค่าจาก select ให้เทียบกับ typeId เลขได้ อย่าลืมกรณีเลือกทั้งหมดซึ่งเป็นข้อความว่าง ตรวจ backend ผ่านก่อนเพื่อไม่ไล่แก้ HTTP กับ UI พร้อมกัน', 'const visible = filter === "" ? rows\n  : rows.filter(row => row.typeId === Number(filter));'),
    ],
    bridge: 'ทำ GET ที่มีให้ → เติม POST/PUT/DELETE → ตรวจด้วย API Client → ตรวจ Form/List → เชื่อม Router → จัด CSS ทดสอบราคา 0, ราคาติดลบ, typeId ไม่มีจริง และลบ id ซ้ำ โครงนี้ยังเก็บข้อมูลในหน่วยความจำ ถ้าต่อ MySQL ให้ใช้ชุดดาวน์โหลดของบท SQL เป็นฐานก่อนเปลี่ยน model',
    question: 'เลือกประเภท "1" แล้วไม่เห็นเมนูที่ typeId เป็น 1 ควรตรวจอะไร',
    answer: 'ตรวจชนิดข้อมูล: select ให้ข้อความแต่ typeId ในข้อมูลเป็นเลข แปลง Number ตอนเปรียบเทียบและตอนส่ง API ไม่ใช้การเปลี่ยน operator เพื่อซ่อนปัญหาชนิด',
  },
  'lab-booking': {
    intro: 'การจองคือ CRUD ที่มีกติกาความจุ ต้องตรวจที่ server ว่ามีที่นั่งพอ ก่อนบันทึกและเพิ่มยอดจอง พร้อมวิธียกเลิกที่คืนยอดได้เพียงครั้งเดียว',
    blocks: [
      block('คำนวณที่ว่างจากข้อมูลจริง', 'backend/routes/booking.js', 'events มี capacity กับ booked ที่ว่างจึงเป็น capacity - booked อ่าน GET /api/events ก่อน POST ต้องตรวจ eventId ที่มีจริง ชื่อไม่ว่าง และ seats เป็นจำนวนเต็มบวก ถ้าไม่ผ่านอย่าเพิ่ม booked หรือสร้าง booking ค้างไว้', 'available = event.capacity - event.booked;\n// seats ต้อง Number.isInteger(seats) && seats > 0\n// seats > available ตอบ 409 โดยไม่เปลี่ยนข้อมูล'),
      block('สร้าง booking และรหัสยกเลิก', 'backend/routes/booking.js', 'เมื่อผ่านทุกเงื่อนไขให้สร้าง booking มี id และ code แล้วเพิ่ม booked การตรวจความจุกับบันทึกต้องไม่คั่น await ที่เปิดช่องให้คำขออื่นผ่านกติกาจากยอดเก่า โครง array นี้ฝึกแนวคิดเท่านั้น ถ้าใช้ฐานข้อมูลจริงต้องใช้ transaction/locking ตามความเหมาะสม', 'request A ขอที่นั่งสุดท้าย → ตรวจและบันทึก\nrequest B ขอที่นั่งเดียวกัน → เห็นยอดล่าสุด → 409\n// ตอบ 201 พร้อม booking และ code ของผู้จอง'),
      block('ยกเลิกโดยตรวจสิทธิ์และสถานะ', 'frontend/services/bookingApi.js', 'service ส่ง code ใน X-Booking-Code ให้ server ตรวจ ก่อนคืน seats ต้องหาการจอง ตรวจ code และตรวจว่ายังไม่ cancelled หากยกเลิกไปแล้วต้องไม่หัก booked ซ้ำ การรู้ id เพียงอย่างเดียวไม่พอให้ยกเลิกของคนอื่น', 'PATCH /api/bookings/:id/cancel\nX-Booking-Code: รหัสของการจองนี้\n// ก่อน: active → หลัง: cancelled → คืนยอดครั้งเดียว'),
      block('ต่อฟอร์มกับหน้าที่มีให้', 'frontend/components/BookingForm.jsx', 'BookingPage มี load/book/cancel และ loading/error/busy แล้ว เติม Form ให้รับ props ชื่อ events, onBook และ busy ตามที่ BookingPage ส่งมา แปลง seats/eventId เป็นเลขก่อนส่ง ชื่อผู้จองต้องยาวอย่างน้อย 2 ตัวอักษร คงค่ากรอกเมื่อ onBook คืน false แล้วตรวจว่าที่ว่างอัปเดตหลังจองและยกเลิก', 'const ok = await onBook({ eventId: Number(eventId), name, seats: Number(seats) });\nif (ok) setName("");'),
    ],
    bridge: 'ทดสอบ API ด้วย seats ปกติ → จำนวน 0/ทศนิยม/ติดลบ → จองเกิน → code ผิด → ยกเลิกซ้ำ แล้วค่อยทำ UI ลองส่งคำขอสองครั้งเพื่อแย่งที่นั่งสุดท้าย ต้องไม่มี booked เกิน capacity ชุดตรวจอัตโนมัติช่วยตรวจ แต่ยังต้องลอง error จาก Preview จริง',
    question: 'กดยกเลิกซ้ำแล้วจำนวนที่ว่างมากกว่า capacity เป็นความผิดพลาดส่วนไหน',
    answer: 'server คืนยอดซ้ำโดยไม่ได้ตรวจ transition active → cancelled ก่อนแก้ข้อมูล การปิดปุ่มที่ UI อย่างเดียวป้องกันคำขอตรงไม่ได้',
  },
  'lab-inventory': {
    intro: 'คลังสินค้าต้องรู้ทั้งยอดปัจจุบันและเหตุผลที่ยอดเปลี่ยน เราจะเก็บ movement ทุกครั้ง และใช้ version ป้องกันการเขียนทับจากหน้าจอที่อ่านข้อมูลเก่า',
    blocks: [
      block('อ่านยอดและ version ก่อนทำรายการ', 'backend/routes/inventory.js', 'GET /api/products ให้ stock กับ version ส่วน /api/movements ให้ประวัติ การส่ง movement ต้องส่ง productId/type/quantity/note/version ที่อ่านล่าสุด quantity เป็นจำนวนเต็มบวก type ใช้ "out" เพื่อเบิกออก และ "in" เพื่อรับเข้า จึงไม่ใช้ quantity ติดลบแทนชนิดงาน', '{ "productId": 1, "type": "out", "quantity": 2,\n  "note": "ใช้ในห้องเรียน", "version": 1 }\n// type: "out" เบิกออก, "in" รับเข้า'),
      block('ตรวจทุกเงื่อนไขก่อนเปลี่ยนยอด', 'backend/routes/inventory.js', 'ถ้า version ที่ส่งไม่ตรงของ server แสดงว่าหน้าอ่านข้อมูลเก่า ให้ตอบ 409 และไม่เปลี่ยนยอด หากเบิกเกิน stock ก็ 409 เช่นกัน ตรวจสินค้า ชนิด จำนวน และเหตุผลก่อนทั้งหมด แล้วค่อยคำนวณ before/after เพื่อให้ error ไม่ทิ้งยอดครึ่งทาง', 'before = product.stock;\n// ตรวจ input, version และยอดที่เบิกก่อน\nafter = type === "out" ? before - quantity : before + quantity;\n// เมื่อผ่านจึงแก้ stock และเพิ่ม version'),
      block('บันทึกประวัติคู่กับยอดที่เปลี่ยน', 'backend/routes/inventory.js', 'movement ต้องบอก before/after/productId/type/quantity/note และ id เพื่อไล่ย้อนหลังได้ สร้างหนึ่งประวัติต่อหนึ่งรายการที่สำเร็จเท่านั้น ไม่สร้างเมื่อ reject request เมื่อยอดใหม่ยืนยันแล้วเพิ่ม version แล้วตอบให้ UI โหลดข้อมูลล่าสุด', 'สำเร็จ: ตรวจ → stock ใหม่ → version + 1 → movement 1 รายการ\nไม่สำเร็จ: ตอบ error → stock/version/history เหมือนเดิม'),
      block('เชื่อมหน้าคลังและอธิบายข้อมูลเก่า', 'frontend/pages/Inventory.jsx', 'สร้าง form ยอดคงเหลือและประวัติ ใช้ inventoryApi ที่มีให้ แปลง id/quantity เป็นเลข และใช้ version ของสินค้าที่เลือก หากเจอ 409 ให้แสดงเหตุผลและโหลดข้อมูลใหม่เพื่อให้ผู้ใช้พิจารณาก่อนส่งอีกครั้ง ไม่ส่งซ้ำอัตโนมัติจนเปลี่ยนความตั้งใจของผู้ใช้', 'await inventoryApi.move(data);\nconst [products, movements] = await Promise.all([\n  inventoryApi.products(), inventoryApi.movements()\n]);'),
    ],
    bridge: 'เริ่มที่ POST /api/movements ก่อน UI ลองเบิกสำเร็จ รับคืนสำเร็จ ยอดไม่พอ จำนวนผิด และ version เก่า ตรวจว่า error ไม่เปลี่ยนทั้งสามส่วน จากนั้นสร้าง Inventory และแสดง error/busy/loading พร้อมเหตุผลของ 409',
    question: 'ผู้ใช้สองคนอ่าน version 1 แล้วส่งเบิกพร้อมกัน เหตุใดคำขอหลังจึงควรได้ 409',
    answer: 'คำขอแรกทำให้ version เป็น 2 แล้ว คำขอที่ส่ง 1 ใช้ยอดจากก่อนการเปลี่ยน จึงต้องให้ผู้ใช้โหลดล่าสุดและตรวจอีกครั้งแทนรับข้อมูลเก่ามาเขียนทับ',
  },
  'lab-community': {
    intro: 'งานท้ายสไลด์ Auten รวม guest/user/admin กับร้านอาหารและรีวิว เราจะแยกสิทธิ์ฝั่ง server ก่อน แล้วจึงสร้างหน้าให้ใช้สิทธิ์นั้นได้ การซ่อนปุ่มใน React เป็นเรื่องหน้าตา ไม่ใช่หลักฐานว่า API ป้องกันแล้ว',
    blocks: [
      block('เขียนตารางสิทธิ์ก่อน routes', 'backend/routes/community.js', 'guest ดูเมนู/รีวิวได้ user ที่ยืนยันตัวตนแล้วเขียนรีวิวของตน admin เพิ่ม/แก้/ลบเมนูได้ ทุก endpoint เขียนข้อมูลต้องตรวจตัวตนและสิทธิ์ใน API หากไม่มี token ใช้ 401 ถ้ามีตัวตนแต่ไม่มีสิทธิ์ใช้ 403 ปฏิเสธก่อนแก้ array', 'guest: GET menu / reviews\nuser: POST review, DELETE รีวิวของตน\nadmin: POST/PUT/DELETE menu\n// token จาก AuthContext → service → verifyToken → role/owner guard'),
      block('จำกัดหนึ่งคะแนนต่อคนต่อเมนู', 'backend/routes/community.js', 'ใช้ userId จาก token ที่ verify แล้ว ไม่รับ owner จาก body ตรวจ rating เป็นจำนวนเต็ม 1–5 เมนูต้องมีจริง และ userId/menuId คู่นี้ยังไม่เคยรีวิว เมื่อแก้/ลบต้องตรวจเจ้าของก่อน ห้ามผู้ใช้ A ส่ง id ของ B แล้วลบได้', '// ตรวจตามลำดับ: token → menu → input → duplicate/owner\n// rating: Number.isInteger(rating) && rating >= 1 && rating <= 5\n// owner ใช้ req.user.userId ที่ตรวจแล้ว'),
      block('คำนวณคะแนนจากรีวิวที่ยังอยู่', 'backend/routes/community.js', 'GET menu ต้องรวม reviewCount และ average จากชุดรีวิวปัจจุบัน ถ้ายังไม่มีรีวิวกำหนด average เป็น 0 เพื่อไม่หารด้วยศูนย์ หลังเพิ่ม/ลบรีวิวต้องเห็นค่าถูกทันที อย่าเก็บค่าเฉลี่ยค้างโดยไม่ปรับเมื่อรีวิวถูกลบ', 'count = reviewsOfMenu.length;\naverage = count === 0 ? 0\n  : reviewsOfMenu.reduce((sum, review) => sum + review.rating, 0) / count;'),
      block('ต่อหน้ารายละเอียดและหน้าผู้ดูแล', 'frontend/pages/CommunityMenu.jsx', 'MenuDetail, Login/Register, AuthContext และ service มีให้แล้ว เติม CommunityMenu ให้ลิงก์ไป detail และ AdminMenu ให้ทำ CRUD ตาม API ตรวจว่า token อยู่ sessionStorage ชื่อ practice-token ตาม service นี้ ไม่ใช้ชื่อต่างจาก Context แล้วแก้ CORS โดยเดา', 'communityApi.menu();\ncommunityApi.reviews(menuId);\ncommunityApi.review(menuId, { rating: Number(rating), comment });\n// ตรวจ service และ Context ว่าอ่าน token key เดียวกัน'),
      block('ทดสอบสิทธิ์ด้วยคำขอตรง', 'backend/routes/community.js', 'ลอง flow จากหน้าเว็บครบแล้วให้ใช้ API Client ทดสอบไม่มี token, user token และ admin token กับ endpoint เดียวกัน เปรียบเทียบ status และตรวจว่าข้อมูลไม่เปลี่ยนเมื่อปฏิเสธ ต้องลองลบรีวิวผู้อื่นและ review ซ้ำ รวมถึง average หลังลบด้วย', 'ไม่มี token + เขียนรีวิว → 401\nuser + เพิ่มเมนู → 403\nuser A + ลบรีวิว B → 403\nadmin + ข้อมูลเมนูถูกต้อง → สำเร็จตาม API'),
    ],
    bridge: 'ทำ routes/community.js และตรวจสิทธิ์ก่อน เติม CommunityMenu/AdminMenu แล้วใช้หน้า detail และ auth ที่มีอยู่ ลำดับทดสอบ guest ดู → user รีวิว → user รีวิวซ้ำ/แก้ของคนอื่น → admin จัดเมนู → ลบรีวิวและตรวจคะแนนใหม่ ลองจอแคบและ error API หลัง flow ผ่าน',
    question: 'ถ้า user มองไม่เห็นปุ่มเพิ่มเมนู แต่ POST /api/menu ตรงสำเร็จ ระบบสิทธิ์ผ่านหรือไม่',
    answer: 'ไม่ผ่าน เพราะสิทธิ์จริงต้องถูกตรวจที่ server ทุกคำขอ การซ่อนปุ่มช่วยให้ผู้ใช้เห็นทางเลือกเหมาะสม แต่ผู้ใช้ยังส่ง HTTP เองได้',
  },
};

const prerequisites = {
  'guided-0': 'พื้นฐานการใช้งานคอมพิวเตอร์และ Terminal',
  'guided-1': 'การรัน Node และตัวแปรจาก Level 1',
  'guided-2': 'HTML/CSS พื้นฐาน และการสร้างเว็บหน้าแรก',
  'guided-3': 'การใช้ useState, useEffect และ fetch API',
  'guided-4': 'การจัดการ Form และการเชื่อมต่อ CRUD API',
  'lab-restaurant': 'Node: params/query, Router, path และ static files',
  'lab-customers': 'React state/form, useEffect, service และ API CRUD',
  'lab-member': 'Register/hash, JWT, Router และ Context',
  'lab-food': 'CRUD, Axios, Promise.all, controlled form และ Router',
  'lab-booking': 'validation, HTTP status, async และ state/form',
  'lab-inventory': 'CRUD, validation และการตรวจความขัดแย้งก่อนแก้ข้อมูล',
  'lab-community': 'auth/JWT, role/ownership, React Router/Context และ CRUD',
};
const outcomes = {
  'guided-0': ['รันคำสั่ง JavaScript บนเซิร์ฟเวอร์ Node.js ผ่าน Terminal ได้', 'เห็นข้อความ Hello Node, Mali ปรากฏบน Terminal จริง'],
  'guided-1': ['สร้างเส้นทาง API เส้นแรกด้วย Express และส่งข้อมูล JSON ได้', 'เรียก GET /api/tasks แล้วได้ข้อมูลงานในรูปแบบ JSON ถูกต้อง'],
  'guided-2': ['สร้างคอมโพเนนต์หน้าแรกของ React และจัดสไตล์ได้', 'เปิดหน้าเว็บพอร์ต 5173 แล้วเห็นหัวเรื่อง My Task Board และคำอธิบาย'],
  'guided-3': ['ดึงข้อมูลจาก API มาแสดงผลใน React พร้อมสถานะ loading ได้', 'หน้าเว็บโหลดรายชื่อ เรียน Node ขึ้นมาแสดงและมีข้อความเตือนเมื่อเชื่อมต่อไม่ได้'],
  'guided-4': ['สร้างเว็บแอปพลิเคชัน CRUD ที่เพิ่ม สลับสถานะ และลบงานได้ครบวงจร', 'ทดสอบเพิ่มงาน สลับเสร็จแล้ว และลบงานใน Preview สำเร็จจริง'],
  'lab-restaurant': ['สร้างเว็บหลายหน้าโดย Node ส่ง HTML และ CSS พร้อมตรวจ params ได้', '/home, /menu, /order ได้ 200 และมีหัวเรื่องถูกต้อง CSS โหลดได้ ราคา abc ได้ 400 และ URL ไม่มีจริงได้ 404'],
  'lab-customers': ['แยก Form/List/Container และบันทึกข้อมูลลูกค้าผ่าน service ได้ครบ', 'เพิ่ม/แก้/ลบสะท้อนในรายการ มีการยืนยันก่อนลบ รายการว่างมีข้อความ และส่งไม่สำเร็จยังมีข้อความในฟอร์มให้แก้'],
  'lab-member': ['สร้าง flow สมาชิกหลายหน้าที่ตรวจ token ทั้ง UI และ API ได้', 'สมัครแล้ว login ไป Home ได้ logout แล้วกลับ Login URL หน้าส่วนตัวกับ API ป้องกันคนไม่มี token และรหัสยืนยันไม่ตรงไม่ถูกส่งสมัคร'],
  'lab-food': ['จัดการเมนูและประเภทผ่าน Form/List/Container และ Axios ได้', 'เพิ่ม/แก้/ลบเมนูได้ ราคาและประเภทส่งเป็นเลข กรองประเภทถูกต้อง ข้อมูลผิดไม่เปลี่ยนรายการเดิม และหน้าแคบยังใช้งานได้'],
  'lab-booking': ['จองภายใต้ความจุและยกเลิกอย่างมีสิทธิ์พร้อมคืนที่นั่งครั้งเดียวได้', 'จองถูกได้ 201 จองเกินได้ 409 ที่ว่างไม่ติดลบ ยกเลิกด้วย code ถูกแล้วคืนยอดครั้งเดียว และกรณี code ผิดไม่เปลี่ยนยอด'],
  'lab-inventory': ['เปลี่ยนยอดพร้อมประวัติและปฏิเสธการเขียนด้วย version เก่าได้', 'รับเข้า/เบิกออกได้ยอดและประวัติตรงกัน version เพิ่ม ข้อมูลผิดหรือ version เก่าได้ error โดย stock/version/history ไม่เปลี่ยน'],
  'lab-community': ['บังคับสิทธิ์ guest/user/admin และคำนวณคะแนนรีวิวจากข้อมูลจริงได้', 'guest ดูได้ user รีวิวได้หนึ่งครั้งต่อเมนู admin จัดเมนูได้ ลบของผู้อื่นถูกปฏิเสธ และค่าเฉลี่ยกับจำนวนรีวิวอัปเดตหลังลบ'],
};
export const activityLearningGuides = Object.fromEntries(Object.entries(activityNarratives).map(([id, narrative]) => [id, {
  goal: outcomes[id][0],
  before: prerequisites[id],
  terms: id === 'lab-restaurant' ? ['static file = ไฟล์ที่ browser ขอโดย URL เช่น CSS/รูป', 'sendFile = ส่งเนื้อหาจากไฟล์จริง', 'fallback = ทางตอบเมื่อไม่ตรง route ก่อนหน้า'] : ['service = ชั้นที่รวมคำขอ HTTP ให้ UI เรียก', 'validation = ตรวจข้อมูลก่อนเปลี่ยนสถานะ', 'contract = รูป request/response ที่ทั้ง UI และ API ต้องใช้ตรงกัน'],
  experiment: narrative.bridge,
  expected: outcomes[id][1],
  mistakes: ['ตรวจ API แยกก่อน UI โดยใช้ method/path/body ตาม service ของชุดนี้', 'ตรวจชื่อ props, field และชนิดข้อมูลที่ส่งให้ตรงกับไฟล์ตั้งต้น', 'ถ้า error เกิดระหว่างเขียนข้อมูล ให้ตรวจว่ายอดหรือรายการเดิมไม่เปลี่ยนค้างครึ่งทาง'],
}]));
