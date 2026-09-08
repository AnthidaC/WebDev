import React, { useState } from 'react';
import { X, Search, FileCode, Check, Copy } from 'lucide-react';

export default function CheatSheet({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('html');
  const [copiedText, setCopiedText] = useState(null);

  if (!isOpen) return null;

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const cheatSheetData = {
    html: [
      {
        tag: '<!DOCTYPE html>',
        desc: 'การประกาศประเภทเอกสารบรรทัดแรกสุดของไฟล์ เพื่อแจ้งเบราว์เซอร์ให้ประมวลผลตามมาตรฐาน HTML5 สากล (บังคับระบุตัวพิมพ์ใหญ่-เล็กตามสไตล์)',
        snippet: '<!DOCTYPE html>'
      },
      {
        tag: '<html lang="th">',
        desc: 'แท็กเริ่มต้นหลักครอบเนื้อหาหน้าเว็บทั้งหมด โดยระบุ lang="th" เพื่อบอก Search Engines (เช่น Google) ว่าหน้าเว็บนี้เป็นภาษาไทยหลัก',
        snippet: '<html lang="th">\n  <head>...</head>\n  <body>...</body>\n</html>',
        possibleValues: ['lang="th" (ไทย)', 'lang="en" (อังกฤษ)', 'lang="ja" (ญี่ปุ่น)']
      },
      {
        tag: '<head>',
        desc: 'ส่วนหัวสำหรับรวบรวมข้อมูลเบื้องหลังเอกสาร (Metadata) ซึ่งจะไม่แสดงผลบนเนื้อหาเว็บโดยตรง แต่คุมระบบภาษา ฟอนต์ ไฟล์สไตล์ และชื่อหัวเรื่อง',
        snippet: '<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>ชื่อแท็บเบราว์เซอร์</title>\n  <link rel="stylesheet" href="style.css">\n</head>'
      },
      {
        tag: '<meta charset="UTF-8">',
        desc: 'ระบุการเข้ารหัสภาษา (Character Encoding) เป็น UTF-8 เพื่อบังคับแสดงผลอักษรไทย สัญลักษณ์พิเศษ และอีโมจิให้คมชัดถูกต้อง ไม่กลายเป็นอักษรต่างดาว',
        snippet: '<meta charset="UTF-8">'
      },
      {
        tag: '<meta name="viewport" content="...">',
        desc: 'แท็กคุมสัดส่วนสเกลหน้าจอ (Responsive Viewport) บังคับให้บราวเซอร์มือถือปรับขนาดเว็บอิงตามขนาดหน้าจวจริงของมือถือเครื่องนั้นๆ',
        snippet: '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
      },
      {
        tag: '<title>',
        desc: 'กำหนดข้อความที่จะแสดงอยู่บนแถบแท็บของเบราว์เซอร์เมื่อผู้ใช้งานเปิดเข้าชมหน้าเว็บนี้ (สำคัญต่อการค้นหาและ SEO)',
        snippet: '<title>สถาบันสอนเขียนเว็บ | WebDev Academy</title>'
      },
      {
        tag: '<body>',
        desc: 'แท็กหลักสำหรับบรรจุข้อมูลทุกชิ้นที่จะไปแสดงโชว์จริงบนหน้าเว็บเพจ (หัวข้อ ย่อหน้า รูปภาพ ฟอร์ม ตาราง ลิงก์ ปุ่ม)',
        snippet: '<body>\n  <h1>สวัสดีชาวโลก</h1>\n  <p>ยินดีต้อนรับเข้าสู่บทเรียน...</p>\n</body>'
      },
      {
        tag: '<h1> ถึง <h6> (Headings)',
        desc: 'แท็กจัดกลุ่มหัวข้อข้อความตามความสำคัญ เรียงจาก h1 (ใหญ่สุด/สำคัญสุด เช่น ชื่อหน้าเว็บ) ไปจนถึง h6 (ย่อยสุด/เล็กสุด)',
        snippet: '<h1>หัวข้อหลักที่ 1 (แนะนำมีเพจละ 1 ตัว)</h1>\n<h2>หัวข้อย่อยระดับที่ 2</h2>\n<h3>หัวข้อย่อยระดับที่ 3</h3>',
        possibleValues: ['<h1>', '<h2>', '<h3>', '<h4>', '<h5>', '<h6>']
      },
      {
        tag: '<p> & <br> & <hr>',
        desc: 'แท็กจัดการย่อหน้าและบรรทัด: <p> (ย่อหน้าแบบเว้นช่องว่างหัวท้าย), <br> (สั่งขยับขึ้นบรรทัดใหม่ทันที), และ <hr> (ขีดเส้นแบ่งส่วนแนวนอน)',
        snippet: '<p>เนื้อหาในบล็อกย่อหน้าแรก<br>สั่งขึ้นบรรทัดใหม่ตรงนี้</p>\n<hr>\n<p>เนื้อหาย่อหน้าถัดไปหลังเส้นคั่น</p>',
        possibleValues: ['<p> (Paragraph)', '<br> (Line Break)', '<hr> (Horizontal Rule)']
      },
      {
        tag: '<strong> & <em> & <mark>',
        desc: 'แท็กเน้นคำสำคัญเฉพาะจุด: strong (เน้นหนาเตือนสายตา), em (เน้นเอียงเสียงอ่าน), และ mark (ระบายแถบไฮไลต์พื้นหลังเหลือง)',
        snippet: 'ระบบปฏิบัติการนี้ <strong>ห้ามปิดเครื่อง</strong> และกรุณา <em>ตรวจสอบสัญญาณ</em> ตรงที่ <mark>ขึ้นไฟสีแดง</mark>',
        possibleValues: ['<strong> (ตัวหนา)', '<em> (ตัวเอียง)', '<mark> (ไฮไลต์เหลือง)']
      },
      {
        tag: '<ul> & <ol> & <li> (Lists)',
        desc: 'สร้างรายการข้อมูล: <ul> (รายการสัญลักษณ์จุดหัวข้อกลม), <ol> (รายการเรียงลำดับตัวเลข 1, 2, 3...) โดยใช้แท็กย่อย <li> คลุมตัวข้อมูล',
        snippet: '<!-- รายการจุดกลม -->\n<ul>\n  <li>ผลไม้แอปเปิ้ล</li>\n  <li>ผลไม้ส้ม</li>\n</ul>\n\n<!-- รายการเรียงตัวเลข -->\n<ol>\n  <li>เปิดเตาอบ</li>\n  <li>ใส่ขนมปังเข้าเครื่อง</li>\n</ol>',
        possibleValues: ['<ul> (Unordered List)', '<ol> (Ordered List)', '<li> (List Item)']
      },
      {
        tag: '<a> (Anchor Links)',
        desc: 'สร้างลิงก์ปลายทาง ระบุพิกัดใน href และใช้ target="_blank" เพื่อสั่งให้เปิดลิงก์ในแท็บใหม่ของบราวเซอร์',
        snippet: '<!-- เปิดในหน้าเดิม -->\n<a href="https://example.com">เข้าสู่เว็บไซต์หลัก</a>\n\n<!-- เปิดในแท็บใหม่พร้อมความปลอดภัย -->\n<a href="https://google.com" target="_blank" rel="noopener noreferrer">ค้นหาบน Google</a>',
        possibleValues: ['href="URL" (ลิงก์ปลายทาง)', 'target="_blank" (เปิดแท็บใหม่)', 'target="_self" (เปิดหน้าเดิม)']
      },
      {
        tag: '<img> (Image Embed)',
        desc: 'แทรกไฟล์รูปภาพลงในหน้าเว็บ โดย src คือที่อยู่รูปภาพ และ alt คือคำอธิบายสั้นๆ ทดแทนกรณีรูปโหลดไม่ขึ้นหรือสำหรับเครื่องอ่านคนพิการ',
        snippet: '<img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop"\n     alt="รูปภาพใบหน้าผู้สอนวิชาวิทยาการคอมพิวเตอร์"\n     width="80"\n     height="80">',
        possibleValues: ['src="path/to/image.jpg"', 'alt="คำอธิบายรูป"', 'width="[px|%]"', 'height="[px|%]"']
      },
      {
        tag: '<video> & <audio>',
        desc: 'ฝังวิดีโอหรือเสียงลงในหน้าเพจ โดยใส่ controls เพื่อแสดงแผงเล่น หยุด เลื่อนตำแหน่งวิดีโอ และเร่งลดเสียง',
        snippet: '<video src="assets/preview.mp4" controls width="400" poster="thumbnail.jpg">\n  เบราว์เซอร์ของคุณไม่รองรับไฟล์วิดีโอนี้\n</video>',
        possibleValues: ['controls (แสดงแผงควบคุม)', 'autoplay (เล่นอัตโนมัติ)', 'loop (เล่นวนซ้ำ)', 'muted (ปิดเสียงดีฟอลต์)']
      },
      {
        tag: '<table> & <tr> & <th> & <td>',
        desc: 'แท็กสร้างตารางข้อมูล: table (กรอบตารางหลัก), tr (แถวตาราง), th (หัวคอลัมน์หนากึ่งกลาง), และ td (เซลล์ข้อมูลช่องปกติ)',
        snippet: '<table border="1">\n  <tr>\n    <th>รายการสินค้า</th>\n    <th>ราคา</th>\n  </tr>\n  <tr>\n    <td>กาแฟเย็น</td>\n    <td>฿45</td>\n  </tr>\n</table>',
        possibleValues: ['<table> (ตาราง)', '<tr> (แถวตาราง)', '<th> (หัวตารางตัวหนา)', '<td> (ช่องข้อมูลตาราง)']
      },
      {
        tag: 'colspan & rowspan (Table Span)',
        desc: 'แอตทริบิวต์ระบุบน th/td เพื่อขยายขนาดช่อง: colspan (ควบรวมช่องแนวขวางขวา), rowspan (ควบรวมช่องแนวดิ่งลงล่าง)',
        snippet: '<table>\n  <tr>\n    <!-- รวมหัวข้อเป็น 2 ช่องแนวนอน -->\n    <th colspan="2">หัวข้อตารางแนวยาว</th>\n  </tr>\n  <tr>\n    <!-- รวมเซลล์นี้ลงล่าง 2 แถวแนวตั้ง -->\n    <td rowspan="2">ข้อมูลแนวตั้ง 2 แถว</td>\n    <td>ข้อมูลคอลัมน์ขวา แถว 1</td>\n  </tr>\n  <tr>\n    <td>ข้อมูลคอลัมน์ขวา แถว 2</td>\n  </tr>\n</table>',
        possibleValues: ['colspan="2" (ควบรวม 2 คอลัมน์)', 'rowspan="2" (ควบรวม 2 แถวดิ่ง)']
      },
      {
        tag: '<form> & <input>',
        desc: 'ระบบฟอร์มคุมช่องส่งข้อมูล: type="text" (ข้อความสั้น), type="password" (ซ่อนตาปิดรหัส), และ type="email" (เช็คสัญญลักษณ์ @ อัตโนมัติ)',
        snippet: '<form action="/submit-data" method="POST">\n  <label for="usr">ชื่อผู้ใช้:</label>\n  <input type="text" id="usr" placeholder="กรอกชื่อผู้ใช้" required>\n  \n  <label for="pwd">รหัสผ่าน:</label>\n  <input type="password" id="pwd" required>\n  \n  <button type="submit">ส่งข้อมูล</button>\n</form>',
        possibleValues: ['type="text" (กล่องพิมพ์สั้น)', 'type="password" (กล่องรหัสผ่าน)', 'type="email" (กล่องอีเมล)', 'required (ต้องกรอก)']
      },
      {
        tag: 'radio & checkbox (Form Controls)',
        desc: 'ตัวเลือกการเลือก: type="radio" (เลือกได้อย่างเดียวในกลุ่ม โดยผูกกลุ่มด้วยแอตทริบิวต์ name เดียวกัน) และ type="checkbox" (ติ๊กถูกหลายตัวเลือกอิสระ)',
        snippet: '<!-- กลุ่มปุ่มวิทยุเลือกเพศ (เลือกได้ค่าเดียว) -->\n<label><input type="radio" name="gender" value="m"> ชาย</label>\n<label><input type="radio" name="gender" value="f"> หญิง</label>\n\n<!-- กล่องเลือกรับข่าวสาร (เลือกได้หลายตัว) -->\n<label><input type="checkbox" name="hobbies" value="reading" checked> การอ่าน</label>\n<label><input type="checkbox" name="hobbies" value="coding"> เขียนโค้ด</label>',
        possibleValues: ['type="radio" (เลือกได้อย่างเดียว)', 'type="checkbox" (เลือกได้หลายตัว)', 'checked (เลือกเริ่มต้น)']
      },
      {
        tag: '<select> & <option> & <textarea>',
        desc: 'แท็กDropdownเลือกตัวเลือก: select/option (เมนูคีย์เลือกดรอปดาวน์) และ textarea (กล่องสี่เหลี่ยมพิมพ์บรรยายขยายสเกลความกว้างแถวได้)',
        snippet: '<!-- Dropdown เมนู -->\n<select name="cars">\n  <option value="toyota">Toyota</option>\n  <option value="honda" selected>Honda</option>\n</select>\n\n<!-- ช่องพิมพ์แบบขึ้นบรรทัดยาว -->\n<textarea name="message" rows="4" cols="40" placeholder="ระบุที่อยู่จัดส่ง..."></textarea>',
        possibleValues: ['<select> (กรอบดรอปดาวน์)', '<option selected> (ตัวเลือกดีฟอลต์)', '<textarea rows="4"> (ช่องพิมพ์ยาว)']
      },
      {
        tag: 'Semantic Structural Tags',
        desc: 'กลุ่มแท็กระบุขอบเขตแบ่งหน้าจอเพื่อให้ Search Engines และบอทคัดแยกสัดส่วนหน้าเพจได้มาตรฐาน (สำคัญต่อความโปร่งใสและระบบ SEO)',
        snippet: '<header>โลโก้และแถบนำทางหลัก</header>\n<nav>\n  <a href="#home">หน้าหลัก</a>\n</nav>\n<main>\n  <section>\n    <h2>กลุ่มเรื่องที่ 1</h2>\n    <article>บทความที่ 1</article>\n  </section>\n  <aside>คอลัมน์โฆษณาหรือข้อมูลข้างเคียง</aside>\n</main>\n<footer>ส่วนล่างสุดแจ้งลิขสิทธิ์</footer>',
        possibleValues: ['<header> (ส่วนหัว)', '<nav> (เมนู)', '<main> (เนื้อหาหลัก)', '<section> (ส่วนย่อย)', '<article> (บทความ)', '<aside> (แถบข้าง)', '<footer> (ส่วนท้าย)']
      },
      {
        tag: 'HTML5 Advanced Input Types',
        desc: 'ประเภทกล่องรับข้อมูลเฉพาะทางแบบยกระดับผ่านแอตทริบิวต์ type เพื่อเรียกใช้วิดเจ็ตปฏิทิน จานเลือกสี แถบเลื่อน หรือระบบป้อนตัวเลขของระบบปฏิบัติการ',
        snippet: '<!-- 1. ช่องระบุตัวเลขพร้อมกำหนดค่าขั้นต่ำ/สูงสุด -->\n<input type="number" min="1" max="100" value="25">\n\n<!-- 2. กล่องคลิกปฏิทินเลือกวัน-เดือน-ปี -->\n<input type="date">\n\n<!-- 3. แถบเลื่อนระบุระดับ (Slider) -->\n<input type="range" min="1" max="5" value="3">\n\n<!-- 4. จานเลือกเฉดสี (Color picker) -->\n<input type="color">',
        possibleValues: ['type="number"', 'type="date"', 'type="range"', 'type="color"', 'type="time"', 'type="file"']
      },
      {
        tag: '<details> & <summary>',
        desc: 'แท็กสร้างกล่องคำถาม FAQ / Accordion ที่สามารถยืดหดเปิดเปิดเผยรายละเอียดข้อมูลได้โดยอาศัยเพียงแท็กมาตรฐาน HTML ไร้สคริปต์ JavaScript',
        snippet: '<details>\n  <summary>หัวเรื่องคำถามคำถามที่แสดงตลอดเวลา (คลิกเพื่อขยาย)</summary>\n  <p>เนื้อหารายละเอียดคำตอบที่จะซ่อนอยู่และแสดงผลเฉพาะตอนขยายปุ่ม</p>\n</details>',
        possibleValues: ['<details> (กรอบคำถามยืดหด)', '<summary> (หัวข้อเรื่องหลัก)', '<details open> (เปิดค้างไว้แต่แรก)']
      }
    ],
    css: [
      {
        tag: 'Universal Reset (*)',
        desc: 'การล้างคุณสมบัติระยะห่างและบ็อกซ์โมเดลสากล (Global Reset) ป้องกันเบราว์เซอร์ดึงค่าดีฟอลต์ต่างกันจนสัดส่วนเพจเพี้ยนเบี้ยวเหลื่อม',
        snippet: '* {\n  margin: 0;              /* ล้างช่องว่างขอบนอกเป็นศูนย์ */\n  padding: 0;             /* ล้างช่องว่างขอบในเป็นศูนย์ */\n  box-sizing: border-box; /* บังคับความกว้างกล่องนับรวมกรอบและแพดดิ้ง */\n}',
        possibleValues: ['margin: 0', 'padding: 0', 'box-sizing: border-box']
      },
      {
        tag: 'CSS Selectors Syntax',
        desc: 'ไวยากรณ์หลักในการเชื่อมโยง CSS เข้ากับองค์ประกอบ HTML: Selector แบบแท็กเดี่ยว, คลาสมีจุดนำหน้า, และไอดีขึ้นต้นด้วยชาร์ป',
        snippet: '/* 1. Tag Selector: มีผลกับแท็กนั้นๆ ทุกจุดในหน้าเว็บ */\nh1 { color: #2563eb; }\n\n/* 2. Class Selector: มีผลกับทุกจุดที่ผูกคลาสนี้ไว้ (ใช้ซ้ำได้บ่อย) */\n.btn-primary { padding: 10px 20px; }\n\n/* 3. ID Selector: มีผลเฉพาะจุดเดียวที่มีไอดีตรงกันเท่านั้น (ห้ามใช้ชื่อไอดีซ้ำ) */\n#navbar-main { background-color: #0f172a; }',
        possibleValues: ['h1, p, div (Tag)', '.class-name (Class)', '#id-name (ID)', '.card p (สไตล์ลูกในแม่)', '.btn:hover (สเตทโฮเวอร์)']
      },
      {
        tag: 'CSS Specificity Weights (ค่าน้ำหนัก)',
        desc: 'กฎคะแนนลำดับความสำคัญสากลที่เบราว์เซอร์ใช้ตัดสินว่าเมื่อมี CSS เขียนสั่งงานทับซ้อนกัน ใครจะชนะและแสดงผลจริง',
        snippet: '/* \n   ค่าน้ำหนักตัวคัดสรร (ลำดับความแรงจากสูงลงต่ำ):\n   1. !important      = ชนะทุกทาง (ใช้ครอบเฉพาะจุดเลี่ยงบ่อย)\n   2. Inline Styles   = 1000 คะแนน (เช่นเขียนใน HTML style="color:red;")\n   3. ID Selectors    = 100 คะแนน (เช่น #title-page)\n   4. Class/Attribute = 10 คะแนน (เช่น .highlight, [type="text"])\n   5. Tag Selectors   = 1 คะแนน (เช่น h1, p, div)\n*/\n\n#main-title { color: #f97316; } /* 100 คะแนน (ชนะสีน้ำเงินและเขียวเสมอ) */\n.highlight  { color: #3b82f6; } /* 10 คะแนน */\nh1          { color: #10b981; } /* 1 คะแนน */'
      },
      {
        tag: 'CSS Variables (:root)',
        desc: 'การตั้งกล่องเก็บตัวแปรสไตล์กลาง (CSS Variables) ไว้ที่จุดเริ่มต้น :root เพื่อเรียกใช้งานสีแบรนด์ส่วนกลางได้อย่างรวดเร็วและเป็นระบบ',
        snippet: ':root {\n  --primary-brand: #3b82f6;   /* รหัสสีหลักน้ำเงิน */\n  --danger-alert: #ef4444;    /* รหัสสีแดงเตือน */\n  --border-radius-base: 8px;  /* โค้งมนเริ่มต้น */\n}\n\n.card {\n  border-radius: var(--border-radius-base);\n  border: 1px solid var(--primary-brand);\n}\n.btn-alert {\n  background-color: var(--danger-alert);\n}'
      },
      {
        tag: 'Colors & Gradients',
        desc: 'ระบุโทนสีระบบ Hex Code (#...), RGB, RGBA (ใส่ตัวควบคุมความโปร่งแสง A: 0.0 - 1.0) และการไล่โทนสีฉากหลังสไตล์พรีเมียม',
        snippet: '.premium-box {\n  color: #1e293b;                              /* สีตัวหนังสือ Hex Code */\n  border-color: rgba(59, 130, 246, 0.2);       /* สีขอบน้ำเงินใส 20% */\n  \n  /* การไล่สีฉากหลัง: linear-gradient([มุมองศา], [สีที่ 1], [สีที่ 2]) */\n  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);\n}',
        possibleValues: ['Hex Code (#3b82f6)', 'rgb(59, 130, 246)', 'rgba(59, 130, 246, 0.5)', 'linear-gradient(45deg, red, blue)', 'transparent (สีโปร่งใส)']
      },
      {
        tag: 'Typography Formats (ตัวอักษร)',
        desc: 'การคุมรูปแบบตัวหนังสือ: font-size (ขนาด), font-weight (ความหนา 100-900), line-height (ช่องว่างบรรทัด), และ letter-spacing (ช่องไฟอักษร)',
        snippet: '.article-body {\n  font-family: \'Sarabun\', sans-serif;\n  font-size: 16px;\n  font-weight: 400;       /* ความหนาตัวหนังสือปกติ (700 = ตัวหนา) */\n  line-height: 1.6;       /* ระยะห่างแถว (แนะนำ 1.5 - 1.7 เพื่อถนอมสายตา) */\n  letter-spacing: 0.5px;  /* ช่องว่างระหว่างอักษรขยายความโปร่งสลวย */\n  text-align: justify;    /* จัดขอบหน้าหลังตรงเรียบเท่ากัน */\n}',
        possibleValues: ['font-size: 14px|1rem|1.2em', 'font-weight: 300|400|700|bold', 'line-height: 1.5|1.8', 'letter-spacing: 0.5px|1px']
      },
      {
        tag: 'Box Model - Padding & Width (Shorthands)',
        desc: 'การจัดการขนาดกล่องระยะห่างภายใน: การระบุแบบเดี่ยว (4 ทิศเท่ากัน), แบบ 2 ค่า (บน-ล่าง ซ้าย-ขวา), แบบ 3 ค่า (บน ซ้าย/ขวา ล่าง) และ 4 ค่า (บน ขวา ล่าง ซ้าย วนตามเข็มนาฬิกา)',
        snippet: '.box-padding {\n  width: 100%;\n  max-width: 400px;\n  \n  /* padding shorthand: */\n  padding: 10px;             /* 10px ทุกทิศทาง */\n  padding: 10px 20px;        /* บนล่าง 10px, ซ้ายขวา 20px */\n  padding: 10px 15px 20px;   /* บน 10px, ซ้ายขวา 15px, ล่าง 20px */\n  padding: 10px 15px 20px 25px; /* บน 10px, ขวา 15px, ล่าง 20px, ซ้าย 25px (ตามเข็ม) */\n  \n  box-sizing: border-box;    /* ล็อกสัดส่วนกล่องรวมพิกเซลขอบและแพดดิ้ง */\n}',
        possibleValues: ['padding: [1 ค่า] (ทุกด้าน)', 'padding: [2 ค่า] (บนล่าง ซ้ายขวา)', 'padding: [4 ค่า] (บน ขวา ล่าง ซ้าย)', 'box-sizing: border-box']
      },
      {
        tag: 'Box Model - Margin & Border (Sides & Shorthands)',
        desc: 'ระยะห่างภายนอกกล่อง (Margin) และการจัดการขอบด้านเจาะจงรายด้าน (Longhand) เช่น ขอบล่างหรือขอบซ้าย พร้อมระบุขนาด รูปแบบ และสี',
        snippet: '.card-border {\n  /* margin shorthand & longhand: */\n  margin: 20px auto;         /* บนล่าง 20px, ซ้ายขวาปูตรงกึ่งกลางหน้าจอ */\n  margin-bottom: 25px;       /* เจาะจงเว้นช่องไฟด้านล่าง 25px */\n  \n  /* border shorthand & specific sides: */\n  border-left: 6px solid #ef4444; /* เส้นกรอบเฉพาะด้านซ้ายหนา 6px ชนิดเส้นทึบสีแดง */\n  border-bottom: 1px dotted #cbd5e1; /* เส้นจุดประใต้กล่องบางสีเทา */\n  \n  /* ชนิดเส้นขอบอื่นๆ: solid (เส้นตรง), dashed (เส้นประ), dotted (ไข่ปลา), none (ไม่มีขอบ) */\n}',
        possibleValues: ['margin: 20px auto (จัดกลาง)', 'border-left: 5px solid red', 'border-style: solid|dashed|dotted|none', 'margin-top: 10px']
      },
      {
        tag: 'Box Shadows (เงาสามมิติ)',
        desc: 'ตกแต่งใส่ความมีระดับด้วยเงาขอบใต้กล่องดูลอยนูนขึ้นมาตามระดับพารามิเตอร์ที่ใส่ระบุ',
        snippet: '.elevated-box {\n  /* \n     โครงสร้างค่า: box-shadow: [เยื้องขวา X] [เยื้องล่าง Y] [ความฟุ้งเบลอ] [ขนาดความหนาเงา] [รหัสสีเงา];\n     - ใส่ค่าเยื้องติดลบเพื่อเยื้องซ้ายหรือเยื้องขึ้นบน\n     - แนะนำใช้สีแนว RGBA เพื่อสร้างเงาใสดูเนียนธรรมชาติ\n  */\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),\n              0 8px 10px -6px rgba(0, 0, 0, 0.05);\n}',
        possibleValues: ['box-shadow: 0 4px 6px rgba(0,0,0,0.1)', 'box-shadow: inset 0 2px 4px rgba(0,0,0,0.06) (เงาใน)']
      },
      {
        tag: 'Display Properties (block, inline, inline-block, none)',
        desc: 'กำหนดพฤติกรรมการแสดงลักษณะและจองพื้นที่กล่องของอิลิเมนต์บนเลย์เอาต์หน้าต่างเบราว์เซอร์',
        snippet: '/* block: เริ่มบรรทัดใหม่ และยืดกว้างเต็มจอ */\n.block-box { display: block; }\n\n/* inline: ไหลตามเนื้อหาข้อความ ไม่ขึ้นบรรทัดใหม่ และกำหนดความกว้างสูงไม่ได้ */\n.inline-span { display: inline; }\n\n/* inline-block: ไหลตามข้อความได้ แต่สามารถคุมสัดส่วนกว้าง สูง แพดดิ้ง และมาร์จิ้นได้ */\n.tag-label {\n  display: inline-block;\n  width: 120px;\n  padding: 5px 10px;\n  text-align: center;\n}\n\n/* none: สั่งซ่อนองค์ประกอบออกจากหน้าจออย่างสิ้นเชิง (ไม่กินเนื้อที่และไม่จองพื้นที่สเกล) */\n.hidden-block { display: none; }',
        possibleValues: ['display: block', 'display: inline', 'display: inline-block', 'display: none', 'display: flex', 'display: grid']
      },
      {
        tag: 'Border Radius Details (ความโค้งมนและทิศทาง)',
        desc: 'กำหนดความโค้งมนของขอบมุมกล่องในรูปแบบย่อที่ระบุคู่ค่า หรือการทำรูปวงกลมสมบูรณ์',
        snippet: '/* 1. โค้งมนเท่ากันสี่มุม */\n.rounded-all { border-radius: 12px; }\n\n/* 2. โค้งมนเฉพาะขอบบน (บนซ้าย บนขวา) ส่วนล่างเป็นเหลี่ยมตัดตรง (ล่างขวา ล่างซ้าย) */\n.rounded-top { border-radius: 20px 20px 0 0; }\n\n/* 3. เขียนเจาะจงมุมแยกตัว */\n.custom-corner {\n  border-top-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n}\n\n/* 4. ทำเป็นรูปทรงวงกลมสมบูรณ์ (เมื่อกล่องมีความกว้างและสูงเท่ากันพอดี) */\n.circle-avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n}',
        possibleValues: ['border-radius: 8px', 'border-radius: 50% (วงกลม)', 'border-radius: 12px 12px 0 0', 'border-top-left-radius: 16px']
      },
      {
        tag: 'Background & Gradients (ภาพพื้นหลังและการเฉดสี)',
        desc: 'การตกแต่งพื้นหลังกล่องด้วยรูปภาพ ล็อกสเกลจัดวางตำแหน่งป้องกันการซ้ำภาพ หรือการเฉดระดับสีเฉดสวยงามสะดุดตา',
        snippet: '/* 1. ใส่รูปพื้นหลังและครอบคลุมไม่ซ้ำ */\n.bg-hero {\n  background-image: url("https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600");\n  background-size: cover;          /* ยืดภาพครอบคลุมกล่องพอดี สัดส่วนไม่เพี้ยน */\n  background-position: center;     /* ตรึงภาพอยู่ศูนย์กลางกล่อง */\n  background-repeat: no-repeat;    /* ล้างการต่อรูปซ้ำจิ๊กซอว์ */\n}\n\n/* 2. การไล่ระดับสีพื้นหลัง (Linear Gradient) */\n.bg-gradient-premium {\n  /* linear-gradient([ทิศทาง/มุมองศา], [สีที่ 1], [สีที่ 2]) */\n  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);\n}',
        possibleValues: ['background-size: cover|contain', 'background-repeat: no-repeat|repeat', 'background-position: center|top|bottom', 'background: linear-gradient(...)']
      },
      {
        tag: 'Visibility vs Display None',
        desc: 'ความแตกต่างของคำสั่งสั่งซ่อน: display:none (สั่งลบทิ้งไปจากเลย์เอาต์ ปล่อยพื้นที่ว่าง), visibility:hidden (สั่งล่องหน แต่พื้นที่กล่องเท่าเดิม)',
        snippet: '/* ลบชิ้นงานนี้ออกจากหน้าจอและโครงสร้างชั่วคราว */\n.hidden-completely { display: none; }\n\n/* ล่องหนแต่ยังคงเหลือพื้นที่เปล่าสีขาวไว้ห้ามองค์ประกอบอื่นดึงเสียที่ */\n.hidden-but-keeps-space { visibility: hidden; }',
        possibleValues: ['display: none (ลบชิ้นงานออก)', 'visibility: hidden (ล่องหนชั่วคราว)']
      },
      {
        tag: 'Text Alignment (จัดขอบข้อความ)',
        desc: 'กำหนดการจัดวางตำแหน่งตัวหนังสือในแนวนอนภายในกรอบเนื้อหา',
        snippet: '.aligned-text {\n  /* \n     ค่าพารามิเตอร์จัดตำแหน่ง:\n     - left   : จัดชิดซ้ายเริ่มต้น (ดีฟอลต์สำหรับภาษาซ้ายไปขวา)\n     - right  : จัดชิดขวาสุด\n     - center : จัดข้อความอยู่กึ่งกลางแนวนอนพอดี\n     - justify: จัดดึงระยะหน้าหลังขยายเว้นช่องไฟเพื่อปูให้ขอบข้างเรียบตรงสวยงาม\n  */\n  text-align: center;\n}',
        possibleValues: ['text-align: left', 'text-align: right', 'text-align: center', 'text-align: justify']
      },
      {
        tag: 'Text Decoration (เส้นตกแต่งคำ)',
        desc: 'กำหนดการขีดเส้นตกแต่งให้กับตัวหนังสือ เช่น ขีดเส้นใต้คำ, ขีดกลางลบคำ หรือล้างเส้นใต้ของแท็กลิงก์ <a> ดีฟอลต์ออก',
        snippet: '.styled-line {\n  /*\n     ค่าขีดเส้นคุมสไตล์:\n     - none         : ล้างเส้นตกแต่งออกทั้งหมด (นิยมใช้เคลียร์ขีดเส้นใต้แท็กลิงก์ <a>)\n     - underline    : ขีดเส้นใต้ตัวอักษร\n     - overline     : ขีดเส้นเหนือบ่าตัวอักษรด้านบน\n     - line-through : ขีดเส้นคาดทับกลางอักษร (นิยมทำป้าย SALE ลดราคา)\n  */\n  text-decoration: none;\n}',
        possibleValues: ['text-decoration: none', 'text-decoration: underline', 'text-decoration: line-through', 'text-decoration: overline']
      },
      {
        tag: 'Text Transform (ปรับตัวพิมพ์อักษร)',
        desc: 'ควบคุมการแปลงขนาดพิมพ์เล็ก-พิมพ์ใหญ่ของตัวอักษรภาษาอังกฤษโดยอัตโนมัติผ่าน CSS',
        snippet: '.english-case {\n  /*\n     ค่าควบคุมสเตตัสการพิมพ์:\n     - none       : ขนาดอักษรเดิมตามที่พิมพ์ลง HTML\n     - uppercase  : แปลงอักษรทุกตัวให้กลายเป็นตัวพิมพ์ใหญ่ทั้งหมด (เช่น hello -> HELLO)\n     - lowercase  : แปลงอักษรทุกตัวให้กลายเป็นตัวพิมพ์เล็กทั้งหมด\n     - capitalize : แปลงเฉพาะตัวอักษรแรกสุดของคำให้เป็นตัวพิมพ์ใหญ่ (เช่น hello -> Hello)\n  */\n  text-transform: uppercase;\n}',
        possibleValues: ['text-transform: none', 'text-transform: uppercase', 'text-transform: lowercase', 'text-transform: capitalize']
      },
      {
        tag: 'List Styles Bullet (จุดรายการลิสต์)',
        desc: 'กำหนดการจัดสไตล์ของจุดรายการหน้ารายการลิสต์ <ul> และ <ol> หรือล้างออกเพื่อทำแถบเมนูนำทาง',
        snippet: '.custom-list {\n  /* \n     ค่าสัญลักษณ์หัวข้อ:\n     - none     : ล้างจุดกลมหรือตัวเลขออกทั้งหมด (นิยมทำแถบเมนูนำทางหรือการ์ด)\n     - disc     : จุดวงกลมทึบดีฟอลต์\n     - circle   : วงกลมกลวงโปร่งใน\n     - square   : จุดกล่องสี่เหลี่ยมจัตุรัสทึบ\n     - decimal  : ตัวเลขเรียงลำดับ 1, 2, 3...\n  */\n  list-style-type: none;\n}',
        possibleValues: ['list-style-type: none', 'list-style-type: disc', 'list-style-type: circle', 'list-style-type: square', 'list-style-type: decimal']
      },
      {
        tag: 'Table Border Collapse (ยุบเส้นขอบตาราง)',
        desc: 'รวมเส้นกรอบเซลล์ตารางของ td และ th ให้ยุบควบแน่นเหลือเพียงเส้นเดี่ยว เพื่อป้องกันเส้นกรอบตารางซ้อนทับหนาเป็นสองเท่า',
        snippet: 'table {\n  /*\n     ค่าคุมขอบตาราง:\n     - collapse : สั่งยุบขอบที่สัมผัสกันมารวมร่างเป็นเส้นขอบเดี่ยวดูเพรียวสวยงาม (แนะนำใช้เสมอ)\n     - separate : แยกขอบออกจากกันแบบอิสระดีฟอลต์ (ทำให้เกิดขอบซ้อนหนา)\n  */\n  border-collapse: collapse;\n}',
        possibleValues: ['border-collapse: collapse', 'border-collapse: separate']
      }
    ],
    layouts: [
      {
        tag: 'CSS Float (ข้อความล้อมรอบภาพ)',
        desc: 'จัดรูปภาพหรือกล่องให้ลอยชิดขอบซ้ายหรือขวา เพื่อให้ตัวหนังสือย่อหน้ารอบข้างไหลโอบล้อมตามความเหมาะสมดั้งเดิม (เช่น จัดคอลัมน์บทความข่าว)',
        snippet: '.avatar-float {\n  float: right;               /* left (ลอยซ้าย) | right (ลอยขวา) | none (ไม่ลอย) */\n  margin-left: 15px;          /* ช่องไฟไม่ให้ตัวหนังสือชิดติดรูปเกินไป */\n  margin-bottom: 10px;\n}',
        possibleValues: ['float: left', 'float: right', 'float: none']
      },
      {
        tag: 'Absolute & Relative Position',
        desc: 'การจัดตำแหน่งซ้อนทับกัน: กำหนด position: relative คลุมที่ตัวแม่ และระบุ position: absolute ที่ตัวลูก เพื่อบังคับพิกัดการลอยทับ',
        snippet: '/* 1. กล่องแม่ (ใช้เป็นฐานระบุพิกัดอิงตัว) */\n.parent-card {\n  position: relative;\n}\n\n/* 2. กล่องลูก (วางลอยทับตำแหน่งเจาะจง) */\n.child-badge {\n  position: absolute;\n  top: 12px;                  /* ยึดห่างขอบบนแม่ 12px */\n  right: 12px;                /* ยึดห่างขอบขวาแม่ 12px */\n  /* ค่าปรับแต่งทิศทาง: top | bottom | left | right */\n}',
        possibleValues: ['position: relative (กล่องแม่/ฐาน)', 'position: absolute (กล่องลูกลอย)', 'top | bottom | left | right']
      },
      {
        tag: 'Fixed & Sticky Position',
        desc: 'การจัดเลื่อนตามจอ: position: fixed (ตรึงตำแหน่งไว้กับ viewport หน้าต่างเดิมตลอดเวลา), position: sticky (เลื่อนตามเพจแต่ล็อกเกาะติดขอบทิศทางยามชนขอบ)',
        snippet: '/* เมนูบาร์เกาะติดขอบจอด้านบนตลอดเวลาเมื่อเลื่อนหน้าจอลงล่าง */\n.navbar-sticky {\n  position: sticky;\n  top: 0;                     /* ติดหนึบขอบบนสุด */\n  z-index: 999;               /* ยกความลอยตัวระดับสูงป้องกันการโดนบล็อกทับ */\n}',
        possibleValues: ['position: sticky (เกาะติดขอบเมื่อสกอล)', 'position: fixed (ตรึงหน้าจอตายตัว)', 'top: 0', 'bottom: 0']
      },
      {
        tag: 'Flexbox Containers ( display: flex )',
        desc: 'เปิดใช้งานแถวยืดหยุ่นจัดเรียงใน 1 มิติ (แนวราบหรือแนวดิ่ง) ควบคุมการแบ่งทิศทางและสั่งหักขึ้นบรรทัดใหม่เมื่อชนขอบจอ',
        snippet: '.flex-parent {\n  display: flex;\n  flex-direction: row;        /* row (เรียงแนวนอนดีฟอลต์) | column (เรียงแนวดิ่ง) */\n  flex-wrap: wrap;            /* wrap (ตัดขึ้นบรรทัดใหม่เมื่อสุดจอ) | nowrap (เบียดบีบ) */\n  gap: 16px;                  /* ช่องไฟระยะห่างระหว่างกล่องลูก */\n}',
        possibleValues: ['display: flex', 'flex-direction: row|column|row-reverse', 'flex-wrap: wrap|nowrap', 'gap: 10px|1rem']
      },
      {
        tag: 'Flex Justify & Align',
        desc: 'จัดระเบียบและตำแหน่งของกล่องลูกภายในแถว Flexbox ทั้งในแนวแกนหลัก (แนวนอน) และแนวแกนรอง (แนวตั้ง)',
        snippet: '.flex-parent {\n  display: flex;\n  \n  /* justify-content: จัดช่องไฟในแนวแกนหลัก (แกนนอน)\n     - flex-start    : กองรวมฝั่งซ้ายเริ่มต้น\n     - flex-end      : กองรวมฝั่งขวาสุด\n     - center        : รวมตรงกลางแถว\n     - space-between : ชิดขอบซ้ายขวาสุด แบ่งพื้นที่ว่างตรงกลางเท่ากัน\n     - space-around  : ปรับช่องไฟรอบข้างเท่ากัน (ขอบนอกซ้ายขวาจะแคบกว่าครึ่งหนึ่ง)\n     - space-evenly  : แบ่งเว้นช่องไฟทุกส่วนรวมถึงขอบซ้ายขวาอย่างเท่าเทียมเป๊ะ\n  */\n  justify-content: space-between;\n  \n  /* align-items: จัดตำแหน่งลูกในแนวแกนรอง (แนวตั้งแนวดิ่ง)\n     - stretch       : ยืดตัวยาวสุดเต็มแถวดิ่ง (ดีฟอลต์)\n     - center        : จัดให้ตรงกลางแนวดิ่ง\n     - flex-start    : แขวนไว้ขอบบนสุด\n     - flex-end      : ห้อยไว้ขอบล่างสุด\n  */\n  align-items: center;\n}',
        possibleValues: ['justify-content: center|space-between|space-around|space-evenly', 'align-items: center|stretch|flex-start|flex-end']
      },
      {
        tag: 'Flex Grow & Shrink & Basis',
        desc: 'คุณสมบัติคุมขนาดเฉพาะส่วนบนแท็กกล่องลูกย่อยเพื่อยืดหดขยายขนาดให้เข้าสเปก Layout แถว',
        snippet: '/* กล่องลูกหลักที่ต้องการให้ขยายยืดครองพื้นที่ว่างแนวนอนที่เหลือทั้งหมด */\n.search-input-grow {\n  flex-grow: 1;               /* ขยายเติมพื้นที่ว่าง (0 = ขนาดเดิม) */\n}\n\n/* กล่องลูกรองที่ไม่ต้องการให้เบราว์เซอร์บีบหดสเกลขนาดกว้างเมื่อจอแคบ */\n.logo-fixed {\n  flex-shrink: 0;             /* ล็อกความกว้างห้ามบีบหดเล็กลง */\n  flex-basis: 120px;          /* กำหนดขนาดฐานเริ่มต้น */\n}',
        possibleValues: ['flex-grow: 1 (ยืดขยายเต็มที่ว่าง)', 'flex-shrink: 0 (ห้ามบีบหดกว้าง)', 'flex-basis: auto|100px']
      },
      {
        tag: 'CSS Grid Template Columns',
        desc: 'ออกแบบแบ่งห้องแถว Layout ตารางรูปแบบ 2 มิติอย่างสะดวกรวดเร็วโดยกำหนดจำนวนช่องคอลัมน์แนวนอนและขนาดเว้นห่าง',
        snippet: '.grid-parent {\n  display: grid;\n  /* repeat(จำนวนช่อง, ขนาดกว้าง) | fr คือเศษส่วนแชร์พื้นที่อย่างเท่าเทียม */\n  grid-template-columns: repeat(3, 1fr);  /* แบ่ง 3 คอลัมน์กว้างเท่ากันเท่าตัว */\n  gap: 16px 20px;                         /* [ห่างแนวตั้ง] [ห่างแนวนอน] */\n}',
        possibleValues: ['grid-template-columns: repeat(3, 1fr)', 'grid-template-columns: 200px 1fr 200px', 'gap: 15px']
      },
      {
        tag: 'CSS Grid Areas Layout',
        desc: 'ขึ้นโครงสร้างหน้าแดชบอร์ดซับซ้อนตามชื่อตัวแปรที่วาดพิมพ์เขียวเอาไว้ (มัดคลาสลูกด้วยคำสั่ง grid-area)',
        snippet: '/* 1. วาดโครงร่างแบ่งพื้นที่กล่องแม่ */\n.dashboard-grid {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: auto 1fr;\n  grid-template-areas:\n    "header header"\n    "sidebar content";\n}\n\n/* 2. ระบุบอกตำแหน่งกล่องลูกตามพื้นที่ที่วาดไว้ */\n.nav-header { grid-area: header; }\n.nav-sidebar { grid-area: sidebar; }\n.panel-main { grid-area: content; }',
        possibleValues: ['grid-template-areas: "a a" "b c"', 'grid-area: [area-name]']
      },
      {
        tag: 'Responsive Media Queries',
        desc: 'คำสั่งคุมสัญญลักษณ์ CSS เปลี่ยนสไตล์สี ความกว้าง เลย์เอาต์ ให้เหมาะสมตามประเภทขนาดความกว้างหน้าจอบราวเซอร์ในขณะนั้น',
        snippet: '/* สไตล์ดีฟอลต์ (เช่น แสดงผลบนคอมพิวเตอร์หน้าจอกว้าง) */\n.layout-wrapper { display: flex; }\n.sidebar { width: 250px; }\n\n/* สไตล์เมื่อเปิดดูบนโทรศัพท์มือถือหรือหน้าจอแคบกว่า 768px */\n@media (max-width: 768px) {\n  .layout-wrapper {\n    flex-direction: column;   /* ปรับต่อแนวดิ่งแทนแนวนอน */\n  }\n  .sidebar {\n    width: 100%;              /* ยืดกว้างเต็มจอ */\n    display: none;            /* หรือลบซ่อนแถบข้างทิ้งเพื่อความเรียบร้อย */\n  }\n}',
        possibleValues: ['@media (max-width: 768px) (มือถือ)', '@media (max-width: 1024px) (แท็บเล็ต)', '@media (min-width: 1200px) (จอใหญ่)']
      },
      {
        tag: 'CSS Grid Auto Responsive Layout',
        desc: 'จัดเรียงช่องกริดแบบยืดหด ปรับจำนวนคอลัมน์อัตโนมัติยามย่อขยายหน้าจอ โดยไม่ต้องเขียน Media Queries บังคับ',
        snippet: '.gallery-responsive {\n  display: grid;\n  /* repeat(auto-fit, minmax(ความกว้างต่ำสุด, ความกว้างสูงสุด)) \n     - auto-fit: สั่งจัดจำแนกจำนวนคอลัมน์แชร์อัตโนมัติตามพื้นที่บราวเซอร์\n     - minmax(200px, 1fr): บังคับการ์ดห้ามแคบกว่า 200px หากเหลือที่ให้ยืดเต็มที่\n  */\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}',
        possibleValues: ['repeat(auto-fit, minmax(200px, 1fr))', 'repeat(auto-fill, minmax(150px, 1fr))']
      }
    ],
    tips: [
      {
        tag: 'CSS Transitions (สลับนุ่มนวล)',
        desc: 'ตั้งค่าวาดแอนิเมชันให้เวลาเปลี่ยนสี ขยับ ปรับสไตล์ของกล่องดำเนินไปอย่างเรียบลื่นสโลว์โมชัน ปราศจากการกระตุกตา',
        snippet: '.interactive-card {\n  /* transition: [ชื่อสไตล์ที่จับ] [ระยะเวลาเล่น] [เส้นโค้งความเร็ว] [เวลาหน่วงเริ่มต้น]; */\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  /* ค่าอัตราความเร็วเริ่มต้น (Timing Function):\n     - linear      : วิ่งเร็วเสมอกันต้นจนจบ\n     - ease        : เริ่มช้า -> เร็วกลาง -> ช้าช่วงท้าย (เนียนเป็นธรรมชาติสุด)\n     - ease-in-out : เร่งกลางช้าหัวท้าย\n  */\n}',
        possibleValues: ['transition: all 0.3s ease', 'transition: transform 0.2s, opacity 0.2s', 'transition-delay: 0.1s']
      },
      {
        tag: 'Keyframes Loop Animations (เคลื่อนไหวต่อเนื่อง)',
        desc: 'สร้างเนื้อเรื่องอนิเมชันให้ระบบขยับ ย่อขยาย สไลด์ เรืองแสง หมุนติ้ว ดำเนินการแบบวนลูปไม่จำกัด (infinite)',
        snippet: '/* 1. วาดเรื่องราวการเปลี่ยนรูปทรงเป็นองศา */\n@keyframes spin-loader {\n  0%   { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n/* 2. มัดเข้ากับองค์ประกอบและระบุสั่งเล่น */\n.loading-spinner {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 3px solid #cbd5e1;\n  border-top-color: #3b82f6;\n  \n  /* สั่งการขยับหมุนสปินอย่างสม่ำเสมอ ความเร็ว 1 วินาที วนซ้ำไม่มีสิ้นสุด */\n  animation: spin-loader 1s linear infinite;\n}',
        possibleValues: ['animation: [keyframe-name] 2s ease infinite', 'animation-direction: alternate', 'animation-fill-mode: forwards']
      },
      {
        tag: 'Hover & Active Pseudo-classes',
        desc: 'สร้างความรู้สึกมีตัวตนเมื่อเมาส์สัมผัสปุ่ม: :hover (เมื่อเมาส์ไปจ่อทับ) และ :active (ปุ่มกดบุ๋มเมื่อนิ้วคลิกซ้ายสัมผัสค้าง)',
        snippet: '.premium-btn {\n  background-color: #3b82f6;\n  color: white;\n  transition: transform 0.2s, background-color 0.2s;\n}\n\n/* เมื่อผู้เรียนเอาเมาส์มาวางทับ */\n.premium-btn:hover {\n  background-color: #2563eb;  /* เปลี่ยนเป็นน้ำเงินเข้มขึ้น */\n  transform: translateY(-2px); /* ลอยตัวขึ้นบนขยับ 2px */\n}\n\n/* เมื่อคลิกเมาส์ค้างยามสัมผัสจริง */\n.premium-btn:active {\n  transform: scale(0.95);      /* ย่อขนาดเล็กลงเหลือ 95% สร้างปุ่มยุบสมจริง */\n}',
        possibleValues: [':hover (เมาส์ชี้จ่อ)', ':active (คลิกเมาส์ค้าง)', ':focus (ได้รับการโฟกัส)', ':disabled (ถูกปิดใช้งาน)']
      },
      {
        tag: 'Focus Within state (ไฮไลต์ฟอร์ม)',
        desc: 'สเตทตรวจจับเมื่อมีอิลิเมนต์ย่อยภายในกล่องแม่ได้รับการโฟกัสหรือคลิกพิมพ์ (มักใช้ทำเอฟเฟกต์ไฟเรืองแสงส่องกรอบฟอร์มทั้งหมด)',
        snippet: '/* เมื่อผู้ใช้คลิกพิมพ์ช่องอินพุตด้านใน ให้กล่องแม่เปลี่ยนสีขอบขึ้นเงาตาม */\n.input-card-group:focus-within {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);\n}',
        possibleValues: [':focus-within (ตรวจคลาสลูกด้านในถูกโฟกัส)']
      },
      {
        tag: 'Pseudo-elements (::before & ::after)',
        desc: 'สร้างองค์ประกอบจำลองเพื่อวาดรูปทรงเสริมโดยไม่ต้องปะแท็กขยะใน HTML (จำเป็นต้องมีคำสั่ง content: "" ระบุคุณลักษณะเสมอ)',
        snippet: '/* ทำปุ่มออนไลน์สีเขียวลอยนำหน้าคำว่า Online */\n.status-badge::before {\n  content: "";                 /* บังคับต้องประกาศสัญญลักษณ์ห้ามขาด */\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #10b981;   /* เม็ดสีเขียว */\n  margin-right: 6px;\n}',
        possibleValues: ['::before (จำลองไว้ข้างหน้า)', '::after (จำลองไว้ข้างหลัง)', 'content: "ข้อความ/รูป"']
      },
      {
        tag: 'Image Aspect-Ratio Cover',
        desc: 'คำสั่งแก้ปัญหารูปเบี้ยว ยืด โย้: บังคับการครอปตัดพิกเซลให้พอดีกรอบรูปภาพโดยรักษาอัตราส่วนดั้งเดิม (Aspect Ratio) สไตล์พรีเมียม',
        snippet: '.post-media-photo {\n  width: 100%;\n  height: 300px;\n  object-fit: cover;           /* ครอปตัดภาพส่วนเกินออกและตรึงพิกเซลไม่ให้เบี้ยว */\n  object-position: center;     /* ขยับจัดพิกัดดึงศูนย์กลางภาพโชว์ */\n}',
        possibleValues: ['object-fit: cover', 'object-fit: contain', 'object-fit: fill', 'object-position: center|top|bottom']
      },
      {
        tag: 'Glassmorphism Formula (สูตรกระจกฝ้า)',
        desc: 'สูตรสำเร็จทำดีไซน์การ์ดและเลย์เอาต์กระจกใสพรีเมียมสะท้อนขอบแก้วที่ใช้ใน UI สมัยใหม่ คล้ายกระจกสลัวเบลอฉากหลัง',
        snippet: '.glass-card-premium {\n  background: rgba(255, 255, 255, 0.08); /* พื้นหลังสีขาวโปร่งแสงจัดใส */\n  backdrop-filter: blur(12px);          /* สั่งเบลอข้อมูลฉากหลังการ์ดสะท้อน */\n  -webkit-backdrop-filter: blur(12px);\n  \n  border: 1px solid rgba(255, 255, 255, 0.15); /* ขอบบางสะท้อนประกายขอบแก้ว */\n  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);  /* เงาเบาบางคุมมิติ */\n}',
        possibleValues: ['backdrop-filter: blur(8px)', 'background: rgba(0,0,0,0.4) (กระจกดำ)', '-webkit-backdrop-filter: blur(...)']
      },
      {
        tag: 'CSS Transforms 2D / 3D',
        desc: 'คำสั่งปรับแต่งรูปร่างการแสดงผล: หมุน (rotate), ปรับอัตราส่วนย่อขยายขนาด (scale), และเลื่อนพิกัดตำแหน่งแกนราบดิ่ง (translate)',
        snippet: '.floating-icon {\n  /* transform: translate([แกน X], [แกน Y]) rotate([มุมองศา]) scale([สเกลซูม]); */\n  transform: translate(-50%, -50%) rotate(45deg) scale(1.15);\n}',
        possibleValues: ['translate(x, y)', 'scale(1.2)', 'rotate(45deg)', 'skewX(10deg)']
      }
    ]
  };

  // Filter content based on active tab and search term
  const activeData = cheatSheetData[activeTab].filter(item => 
    item.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.snippet.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="cheat-sheet-overlay">
      <div className="cheat-sheet-card">
        {/* Header */}
        <div className="cheat-sheet-header">
          <div className="header-title-area">
            <div className="title-icon">
              <FileCode size={20} />
            </div>
            <div>
              <h3>คัมภีร์พัฒนาเว็บฉบับเจาะลึก (WebDev Comprehensive Handbook)</h3>
              <p>สารบัญรวมโครงร่างคีย์เวิร์ด HTML สไตล์ CSS บล็อก Layout และคำอธิบายพารามิเตอร์เชิงลึก</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Filters Panel */}
        <div className="cheat-sheet-filters">
          <div className="search-box-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="พิมพ์ตรวจหาคีย์เวิร์ดพารามิเตอร์ (เช่น: flex, float, meta, specificity, margin, border-radius)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="clear-search">
                <X size={14} />
              </button>
            )}
          </div>

          <div className="cheat-sheet-tabs">
            <button
              onClick={() => setActiveTab('html')}
              className={`filter-tab ${activeTab === 'html' ? 'active' : ''}`}
            >
              HTML Elements ({cheatSheetData.html.length})
            </button>
            <button
              onClick={() => setActiveTab('css')}
              className={`filter-tab ${activeTab === 'css' ? 'active' : ''}`}
            >
              CSS Basics ({cheatSheetData.css.length})
            </button>
            <button
              onClick={() => setActiveTab('layouts')}
              className={`filter-tab ${activeTab === 'layouts' ? 'active' : ''}`}
            >
              Layouts Flex & Grid ({cheatSheetData.layouts.length})
            </button>
            <button
              onClick={() => setActiveTab('tips')}
              className={`filter-tab ${activeTab === 'tips' ? 'active' : ''}`}
            >
              Transforms & Effects ({cheatSheetData.tips.length})
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="cheat-sheet-body">
          {activeData.length === 0 ? (
            <div className="no-results">
              <p>ไม่พบผลลัพธ์ข้อมูลคู่มือที่ตรงกับการค้นหา: "{searchTerm}"</p>
            </div>
          ) : (
            <div className="guide-grid">
              {activeData.map((item, index) => (
                <div className="guide-card" key={index}>
                  <div className="guide-card-header">
                    <h4>{item.tag}</h4>
                    <button
                      onClick={() => handleCopy(item.snippet)}
                      className="copy-snippet-btn"
                      title="คัดลอกคำสั่งโค้ดนี้"
                    >
                      {copiedText === item.snippet ? (
                        <span style={{ color: '#10b981', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '2px', fontWeight: 'bold' }}>
                          <Check size={12} /> คัดลอกสำเร็จ
                        </span>
                      ) : (
                        <span style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Copy size={12} /> คัดลอกโค้ด
                        </span>
                      )}
                    </button>
                  </div>
                  <p className="guide-desc">{item.desc}</p>
                  <pre className="guide-snippet">
                    <code>{item.snippet}</code>
                  </pre>
                  {item.possibleValues && item.possibleValues.length > 0 && (
                    <div className="possible-values-hover">
                      <div className="possible-values-title">ค่าที่เป็นไปได้ / ไวยากรณ์เพิ่มเติม:</div>
                      <div className="possible-values-list">
                        {item.possibleValues.map((val, idx) => (
                          <span key={idx} className="possible-value-badge">{val}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="cheat-sheet-footer">
          <span>💡 เคล็ดลับการเรียนรู้: อ่านคู่มือในคอมเมนต์โค้ดสีเขียวเพื่อเรียนรู้นิยามความหมายของพารามิเตอร์แต่ละตำแหน่ง และคลิก "คัดลอกโค้ด" เพื่อนำไปลองรันในโปรแกรมจำลองได้ทันที!</span>
        </div>
      </div>
    </div>
  );
}
