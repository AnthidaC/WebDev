import { moreLessonNarratives } from './moreLessonNarratives.js';
// Small examples with the explanation beside the exact code being discussed.
// These teach the idea; the learner still implements the exercise independently.
export const lessonNarratives = {
  ...moreLessonNarratives,
  'fs-00': {
    overview: {
      before: 'บทนี้เริ่มจากแก้ข้อความกับสีในโครงที่เตรียมไว้ ยังไม่ต้องรู้วิธีเขียน server หรือเรียก API ถ้าไม่รู้จัก tag ให้เริ่มจาก h1 คือหัวเรื่องและ p คือย่อหน้า แล้วลองเปลี่ยนข้อความภายในก่อน',
      terms: [
        'Browser คือโปรแกรมที่เปิดหน้าเว็บ เช่น Chrome หรือ Edge; Preview คือพื้นที่ดูหน้าเว็บของงานนี้',
        'React เป็นเครื่องมือสร้างส่วนที่แสดงบนหน้าเว็บ; component คือส่วนของหน้า ซึ่งบทนี้ใช้ชื่อ App',
        'JSX คือรูปแบบเขียนโครงหน้าในไฟล์ JavaScript สังเกต tag เปิด <h1> และปิด </h1>',
        'CSS คือกฎหน้าตา เช่น background กำหนดสีพื้นหลัง แยกไว้ใน frontend/styles.css',
      ],
      experiment: 'เปิด frontend/App.jsx เปลี่ยนข้อความใน h1 เป็น My Full Stack Lab และข้อความใน p เป็นชื่อคุณ จากนั้นแก้ background ใน frontend/styles.css กดรันโปรเจกต์ รอให้พร้อม แล้วดู Preview React :5173 ลองเปลี่ยนสีอีกครั้งโดยไม่แก้ข้อความ',
      expected: 'หัวเรื่องเป็น My Full Stack Lab มีชื่อคุณในย่อหน้า และสีพื้นเปลี่ยนตาม CSS เมื่อเปลี่ยนสีอย่างเดียว ข้อความควรยังเหมือนเดิม',
    },
    intro: 'เป้าหมายรอบแรกมีเรื่องเดียว: เปลี่ยนข้อความแล้วเห็นหน้าเว็บเปลี่ยน โครงโปรเจกต์เตรียมไว้ให้แล้ว ยังไม่ต้องสร้าง API หรือติดตั้งแพ็กเกจเอง',
    blocks: [
      {
        title: '1. หาไฟล์ที่ควบคุมข้อความบนหน้า',
        explanation: 'เปิด frontend/App.jsx จากรายการไฟล์ App เป็นชื่อฟังก์ชันที่ React ใช้สร้างหน้าส่วนนี้ สิ่งที่อยู่หลัง return คือโครงหน้าที่จะส่งกลับไปแสดง ในตัวอย่าง main เป็นกล่องครอบ ส่วน h1 เป็นหัวเรื่อง อ่านข้อความระหว่าง <h1> กับ </h1> ก่อน ยังไม่ต้องจำ export default',
        code: 'export default function App() {\n  return (\n    <main>\n      <small>MY FIRST FULL STACK PROJECT</small>\n      <h1>Hello Full Stack</h1>\n      <p>เริ่มแก้ไข frontend/App.jsx แล้วกดรันโปรเจกต์</p>\n    </main>\n  );\n}',
      },
      {
        title: '2. แก้ข้อความหนึ่งจุดและทายผล',
        explanation: 'ในไฟล์จริง เปลี่ยนเฉพาะ Hello Full Stack เป็น My Full Stack Lab โดยเก็บ <h1> และ </h1> ไว้เหมือนเดิม ตัวอย่างด้านล่างเป็นเฉพาะบรรทัดที่แก้ ไม่ใช่โค้ดสำหรับแทนทั้งไฟล์ จากนั้นกดรันโปรเจกต์ รอระบบเตรียมเสร็จ แล้วดู Preview ฝั่ง React :5173 หัวเรื่องควรเปลี่ยน ส่วนย่อหน้าควรอยู่เหมือนเดิม',
        code: '<h1>My Full Stack Lab</h1>',
      },
      {
        title: '3. แยกเนื้อหากับหน้าตา',
        explanation: 'ลองแก้ข้อความใน p เป็นชื่อคุณ แล้วเปิด frontend/styles.css หา body ที่มีอยู่และเปลี่ยนค่า background ภายในกฎนั้น CSS นี้สั่งสีพื้นหลังของหน้า ส่วนข้อความยังมาจาก App.jsx หากเจอ body อยู่แล้วให้แก้ของเดิมก่อน จะได้ไม่มีกฎซ้ำให้สับสน',
        code: 'body {\n  background: #eff6f2;\n}',
      },
    ],
    bridge: 'โจทย์บทนี้ให้ทำสิ่งเดียวกับที่เพิ่งลอง: ตั้งหัวเรื่องตามที่กำหนด เพิ่มชื่อของคุณ และเปลี่ยนสีพื้นหลัง เส้นทางที่ควรรู้ตอนนี้คือ index.html เปิด main.jsx แล้ว main.jsx เรียก App.jsx มาวาดหน้า ส่วน frontend/styles.css ดูแลหน้าตา คำว่า props, state และ API จะมีบทแยกภายหลัง',
    question: 'ถ้าต้องการเปลี่ยนชื่อบนหน้าและเปลี่ยนสีพื้น ต้องแก้ไฟล์เดียวกันหรือไม่ เพราะอะไร',
    answer: 'แก้ข้อความใน App.jsx และแก้สีใน styles.css เพราะโครงนี้แยกเนื้อหากับกฎการแสดงผล ถ้าหัวเรื่องเปลี่ยนแต่สีไม่เปลี่ยน ให้ตรวจไฟล์ CSS และกฎ background ก่อน',
  },
  'fs-06': {
    intro: 'สมมติต้องแสดงคำทักทายสองคน ถ้าคัดลอกหน้าตาทั้งก้อนจะต้องแก้หลายจุดเมื่อเปลี่ยนรูปแบบ เราจะเขียน component ลูกหนึ่งครั้ง แล้วส่งชื่อที่ต่างกันเข้าไป',
    blocks: [
      {
        title: '1. ทำฟังก์ชันที่รับข้อมูลแล้วสร้างข้อความ',
        explanation: 'ไฟล์ตัวอย่าง frontend/components/Greeting.jsx ส่งออก component ชื่อ Greeting เมื่อแม่ใช้ <Greeting name="Mali" /> React จะส่งข้อมูลเข้ามาเป็น object props ที่มีค่า { name: "Mali" } เราอ่านด้วย props.name แล้วใช้ {} ใน JSX เพื่อเอาค่านั้นมาแสดง เครื่องหมาย {} ตรงนี้หมายถึงอ่านค่า JavaScript ไม่ได้พิมพ์คำว่า props.name ลงหน้า',
        code: 'export default function Greeting(props) {\n  return <p>สวัสดี {props.name}</p>;\n}',
      },
      {
        title: '2. เรียก component เดิมด้วยข้อมูลสองชุด',
        explanation: 'ใน frontend/App.jsx import คือการนำ component จากไฟล์อื่นมาใช้ ./ เริ่มจากโฟลเดอร์ของ App.jsx จากนั้นเรียก Greeting สองครั้ง แต่ละครั้งส่ง name ของตัวเอง จึงเห็น สวัสดี Mali และ สวัสดี Nida โดยใช้กติกาสร้างข้อความชุดเดียวกัน',
        code: 'import Greeting from "./components/Greeting";\nexport default function App() {\n  return <main>\n    <Greeting name="Mali" />\n    <Greeting name="Nida" />\n  </main>;\n}',
      },
      {
        title: '3. อ่านรูปเขียนย่อให้เป็น',
        explanation: 'function Greeting({ name }) เป็นการหยิบคุณสมบัติ name ออกจาก object ที่รับเข้ามาทันที เรียกว่า destructuring จึงเขียน {name} ใน JSX ได้แทน {props.name} สองรูปทำหน้าที่เหมือนกัน เลือกรูปที่อ่านเข้าใจก่อน ส่วน className="greeting" ทำให้เราใช้ .greeting ใน CSS เลือกข้อความนี้ได้',
        code: 'export default function Greeting({ name }) {\n  return <p className="greeting">สวัสดี {name}</p>;\n}',
      },
    ],
    bridge: 'จากตัวอย่างไปโจทย์: เปลี่ยนชื่อ Greeting เป็น MenuCard และสร้างไฟล์ MenuCard.jsx รับข้อมูลสองค่า name กับ price แทนค่าเดียว จากนั้น App import MenuCard และเรียกสองครั้ง โดยส่ง name="ข้าวผัด" price={60} และ name="ชาไทย" price={35} ตัวเลขใส่ {} เพื่อส่งค่าเลข ไม่ใช่ข้อความ เริ่มให้ชื่อกับราคาแสดงถูกก่อน แล้วค่อยจัด CSS grid; การแสดงสองการ์ดนี้ยังไม่จำเป็นต้องใช้ map',
    question: 'ถ้าราคาเปลี่ยนจาก 60 เป็น 65 แต่หน้าตาการ์ดเหมือนเดิม ควรแก้ที่การเรียก MenuCard หรือแก้ตัว component เพราะอะไร',
    answer: 'แก้ price ที่ App ส่งเข้า MenuCard เพราะราคาของการ์ดนั้นเป็นข้อมูล ส่วนโครงการ์ดเป็นหน้าที่ของ component หากแก้เป็นเลข 65 ตายตัวภายใน MenuCard ทุกการ์ดจะได้ราคาเดียวกัน',
  },
  'fs-07': {
    intro: 'บทก่อนส่งข้อมูลให้ component แสดงผล รอบนี้ให้ผู้ใช้เปลี่ยนค่าบนหน้าได้ด้วยปุ่ม เราจะใช้ปุ่มถูกใจเป็นตัวอย่างก่อนนำแนวคิดไปสร้างปุ่มเพิ่มและลดจำนวน',
    blocks: [
      {
        title: '1. เก็บจำนวนที่ React ติดตามได้',
        explanation: 'นำเข้า useState จาก react ที่ต้นไฟล์ แล้วเขียนบรรทัดที่สองภายในฟังก์ชัน component ก่อน return useState(0) ขอให้ React เก็บค่าเริ่มต้นเป็น 0 รูป [likes, setLikes] ตั้งชื่อให้สองสิ่งที่ได้กลับมา: likes ใช้อ่านค่าของรอบนี้ และ setLikes ใช้ขอเปลี่ยนค่า ไม่ใช่ตัวแปรจำนวนสองตัว',
        code: 'import { useState } from "react";\n// ภายใน component ก่อน return\nconst [likes, setLikes] = useState(0);',
      },
      {
        title: '2. รอให้คลิกก่อนเพิ่มค่า',
        explanation: 'วางปุ่มนี้ภายใน JSX ที่ component คืนกลับ onClick รับฟังก์ชันที่จะทำงานเมื่อคลิก () => ... คือฟังก์ชันที่ยังไม่ทำทันที เมื่อคลิกจึงเรียก setLikes ส่วน previous => previous + 1 เป็นอีกฟังก์ชันที่รับค่าก่อนหน้าจาก React แล้วคืนค่าเพิ่มหนึ่ง เช่น previous เป็น 0 ก็คืน 1 การส่งฟังก์ชันให้อัปเดตแบบนี้เหมาะเมื่อค่าใหม่ขึ้นกับค่าเดิม',
        code: '<button onClick={() => setLikes(previous => previous + 1)}>\n  ถูกใจ {likes}\n</button>',
      },
      {
        title: '3. ไล่ผลของการคลิกหนึ่งครั้ง',
        explanation: 'รอบแรก likes เป็น 0 จึงเห็น ถูกใจ 0 → ผู้ใช้คลิก → React คำนวณค่าถัดไปเป็น 1 → เรียก component เพื่อวาดรอบใหม่ → {likes} ของรอบใหม่เป็น 1 จึงเห็น ถูกใจ 1 การขอเปลี่ยนค่าไม่ได้เปลี่ยนตัวแปร likes ในโค้ดรอบเดิมทันที ลองเล่าเส้นทางนี้ก่อนเพิ่มปุ่มอื่น',
        code: '// ส่งฟังก์ชันไว้รอคลิก\nonClick={() => setLikes(0)}\n// อย่าใช้ onClick={setLikes(0)} เพราะจะเรียกตอนวาดหน้า',
      },
    ],
    bridge: 'จากปุ่มถูกใจไปโจทย์: เปลี่ยนชื่อ state เป็น count/setCount แสดง {count} ใน <output aria-label="จำนวน"> ปุ่ม + ใช้แนวคิดเพิ่มหนึ่งแบบเดิม ปุ่มรีเซ็ตตั้งเป็น 0 ส่วนปุ่มลดต้องเลือกค่าที่มากกว่าระหว่าง 0 กับ previous - 1 จึงใช้ Math.max(0, previous - 1) เพื่อหยุดที่ศูนย์',
    question: 'เริ่ม 0 แล้วกด + สองครั้ง กดลดสามครั้ง ค่าที่แสดงควรไล่เป็นอะไร และตรงไหนทำให้ไม่ติดลบ',
    answer: '0 → 1 → 2 → 1 → 0 → 0 กติกา Math.max(0, previous - 1) เลือก 0 เมื่อค่าที่ลบแล้วต่ำกว่าศูนย์ ส่วน setter เป็นคนแจ้ง React ให้ใช้ค่านั้นวาดรอบใหม่',
  },
  'fs-08': {
    intro: 'ปุ่มในบทก่อนเปลี่ยน state ด้วยการคลิก คราวนี้เปลี่ยน state ตามข้อความที่ผู้ใช้พิมพ์ และแยกสิ่งที่กำลังกรอกออกจากผลที่ยืนยันแล้ว ตัวอย่างนี้เป็นชิ้นส่วนสำหรับวางภายใน App ไม่ใช่ไฟล์เต็ม',
    blocks: [
      {
        title: '1. ให้ input และ state มีค่าเดียวกัน',
        explanation: 'สร้าง email/setEmail ภายใน App ก่อน return แล้วใส่ label และ input ใน JSX value={email} บอกว่าจะให้ช่องแสดงข้อความอะไร ขณะพิมพ์ onChange จะได้รับ event ซึ่งบอกช่องที่เปลี่ยน event.target.value คือข้อความล่าสุดในช่อง เราส่งค่านั้นให้ setEmail แล้ว React วาดช่องด้วยค่าใหม่ หากมี value แต่ไม่มีการอัปเดต ค่าจะกลับเป็นค่าเดิมจนดูเหมือนพิมพ์ไม่ได้',
        code: '// ภายใน App ก่อน return\nconst [email, setEmail] = useState("");\n\n// ภายใน JSX ที่ return\n<label>อีเมล\n  <input type="email" value={email}\n    onChange={event => setEmail(event.target.value)} />\n</label>',
      },
      {
        title: '2. ใช้ form รับทั้งการกดปุ่มและ Enter',
        explanation: 'สร้างฟังก์ชัน submit ภายใน App ก่อน return และครอบ input เดิมด้วย form ที่ผูก onSubmit={submit} ฟังก์ชัน submit รับ event ของการส่งฟอร์ม preventDefault() หยุดการส่งแบบที่ browser จะโหลดหน้าใหม่ เราจึงตรวจและจัดการข้อมูลด้วย JavaScript ได้เอง ตัวอย่าง console.log ใช้สังเกตค่า ยังไม่ได้เก็บข้อมูลลง server',
        code: 'function submit(event) {\n  event.preventDefault();\n  console.log(email.trim());\n}\n// ภายใน JSX\n<form onSubmit={submit}>\n  {/* วาง label และ input เดิมตรงนี้ */}\n  <button>ส่ง</button>\n</form>',
      },
      {
        title: '3. ตรวจค่าก่อนยืนยันและล้างช่อง',
        explanation: 'trim() สร้างข้อความที่ตัดช่องว่างหัวท้าย หากพิมพ์แต่ช่องว่างจะได้ "" ซึ่งถือเป็นค่าว่าง เราจึงตรวจค่านี้ก่อนแสดงว่าสำเร็จ ในโจทย์ต้องเก็บข้อความผลลัพธ์อีก state หนึ่ง เพราะถ้าใช้ชื่อในช่องโดยตรง พอล้างช่องข้อความสำเร็จก็หายไปด้วย',
        code: '// ภายใน submit หลัง preventDefault()\nconst cleaned = email.trim();\nif (!cleaned) {\n  // แจ้ง error แล้วหยุดฟังก์ชัน\n  return;\n}\n// ถึงตรงนี้จึงใช้ข้อมูลและล้างช่องได้',
      },
    ],
    bridge: 'โจทย์ใช้ช่องชื่อแทนอีเมล จึงเปลี่ยนเป็น name/setName และ label ชื่อ โดยใช้ input ข้อความธรรมดา เพิ่ม state สำหรับ error และข้อความสำเร็จ เมื่อชื่อว่างให้แสดง error ด้วย role="alert"; เมื่อเป็น Mali ให้เก็บข้อความ บันทึก Mali ใน state ผลลัพธ์ก่อนล้าง name เป็น "" ลองส่งด้วย Enter ด้วย',
    question: 'ถ้าผูกทั้ง input และข้อความ บันทึก ... กับ name state ตัวเดียว แล้วเรียก setName("") ข้อความสำเร็จจะเป็นอย่างไร',
    answer: 'ชื่อในข้อความสำเร็จจะว่างตามช่อง เพราะทั้งสองส่วนอ่านค่าเดียวกัน ต้องแยก state ของค่าที่กำลังกรอกกับผลที่บันทึกแล้ว',
  },
  'fs-09': {
    intro: 'state ทำให้เราเปลี่ยนหน้าได้ แต่ข้อมูลจริงอยู่ที่ Node การขอข้อมูลต้องใช้เวลา เราจะอ่านเส้นทางคำขอทีละส่วนก่อนประกอบเข้ากับหน้า อย่าเพิ่งท่อง effect ทั้งก้อน',
    blocks: [
      {
        title: '1. ทำความเข้าใจการรอและ .then()',
        explanation: 'fetch ส่งคำขอ HTTP แล้วคืน Promise ซึ่งแทนผลที่ยังรออยู่ .then(fn) ฝากฟังก์ชัน fn ไว้ทำเมื่อสำเร็จ ใน .then แรก response คือข้อมูลตอบกลับรวมสถานะ ส่วน response.json() ยังต้องอ่าน body จึงคืน Promise อีกตัว การ return มันทำให้ .then ถัดไปรออ่านเสร็จและได้รับข้อมูลจริง หากเป็น /api/health ข้อมูลคือ { ok: true }; ถ้าเป็น /api/customers ข้อมูลจะเป็นรายการลูกค้า',
        code: 'fetch("/api/health")\n  .then(response => response.json())\n  .then(data => console.log(data));',
      },
      {
        title: '2. แยกข้อมูลสำเร็จกับสถานะผิดพลาด',
        explanation: 'fetch อาจติดต่อ server สำเร็จแต่ได้ 404 หรือ 500 จึงต้องตรวจ response.ok เอง ถ้าไม่ผ่าน throw new Error สร้างข้อผิดพลาดเพื่อให้เส้นทางไป .catch แทน .then ถัดไป หากเครือข่ายใช้ไม่ได้ fetch ก็ reject และไป catch ได้เช่นกัน ข้อความ error.message คือข้อความที่เราจะเก็บใน state เพื่อแสดงให้ผู้ใช้',
        code: '.then(response => {\n  if (!response.ok) throw new Error("โหลดไม่ได้");\n  return response.json();\n})\n.then(data => console.log(data))\n.catch(error => console.error(error.message));\n// นี่คือส่วนต่อจาก fetch(...) ไม่ใช่คำสั่งแยกเดี่ยว',
      },
      {
        title: '3. เลือกจังหวะเริ่มโหลดด้วย effect',
        explanation: 'นำเข้า useEffect จาก react แล้ววาง effect ภายใน App ก่อน return รอบแรก React วาดหน้ารอ จากนั้น effect จึงเริ่มขอข้อมูล [] คือรายการค่าที่ใช้ตัดสินว่าจะทำ effect ใหม่เมื่อค่าใดเปลี่ยน รอบนี้ไม่มีค่าที่ต้องติดตามจึงไม่โหลดซ้ำเพียงเพราะ state เปลี่ยน ระหว่างพัฒนา StrictMode อาจทดสอบ setup/cleanup เพิ่มได้ ไม่ควรผูกการทำงานกับสมมติฐานว่าจะเกิดครั้งเดียวเสมอ',
        code: 'useEffect(() => {\n  // วางชุด fetch และการจัดการผลตรงนี้\n}, []);',
      },
      {
        title: '4. ยกเลิกงานเก่าและให้หน้าจอบอกสถานะ',
        explanation: 'AbortController เป็นตัวควบคุมการยกเลิก ส่ง controller.signal ไปกับ fetch เพื่อให้คำขอนี้ยกเลิกได้ ฟังก์ชันที่ return จาก effect คือ cleanup ซึ่ง React เรียกเมื่อเลิกใช้ effect รอบนั้น การยกเลิกทำให้เกิด AbortError จึงข้าม error ชนิดนี้แทนแสดงว่าระบบเสีย ส่วน loading ต้องปิดเมื่อคำขอรอบที่ยังใช้งานจบ ทั้งทางสำเร็จและล้มเหลว',
        code: 'useEffect(() => {\n  const controller = new AbortController();\n  fetch("/api/customers", { signal: controller.signal })\n    .then(response => {\n      if (!response.ok) throw new Error("โหลดไม่ได้");\n      return response.json();\n    })\n    .then(data => setCustomers(data))\n    .catch(error => {\n      if (error.name !== "AbortError") setError(error.message);\n    })\n    .finally(() => {\n      if (!controller.signal.aborted) setLoading(false);\n    });\n  return () => controller.abort();\n}, []);\n// ต้องประกาศ customers/setCustomers, loading/setLoading,\n// error/setError ด้วย useState ภายใน App ก่อน effect นี้',
      },
    ],
    bridge: 'ประกอบในโจทย์: สร้าง customers เป็น [] เพื่อรอรายการ, loading เป็น true และ error เป็น "" จากนั้นใช้ effect ด้านบน ใน JSX ให้ loading แสดง กำลังโหลด...; error ที่ไม่ว่างแสดงข้อความ role="alert"; customers.map เปลี่ยนลูกค้าแต่ละคนเป็นรายการที่มี key={customer.id} และแสดง customer.name ลอง API Client ก่อนเพื่อรู้ว่าค่า JSON ที่ได้เป็น array รูปไหน',
    question: 'ถ้าใช้ path ผิดแล้ว server ตอบ 404 ทำไมเราต้องตรวจ response.ok และผู้ใช้ควรเห็นอะไรหลังจบคำขอ',
    answer: '404 ยังเป็น HTTP response ที่ fetch รับได้ จึงต้องตรวจแล้ว throw เพื่อไป catch ผู้ใช้ควรเห็นข้อความ error และข้อความกำลังโหลดควรหาย เพราะ finally ปิด loading แล้ว หากยังหมุนรอค้างให้ตรวจทางจบคำขอก่อนแก้ map',
  },
};
