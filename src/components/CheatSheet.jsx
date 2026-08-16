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
        snippet: '<html lang="th">\n  <head>...</head>\n  <body>...</body>\n</html>'
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
        snippet: '<h1>หัวข้อหลักที่ 1 (แนะนำมีเพจละ 1 ตัว)</h1>\n<h2>หัวข้อย่อยระดับที่ 2</h2>\n<h3>หัวข้อย่อยระดับที่ 3</h3>'
      },
      {
        tag: '<p> & <br> & <hr>',
        desc: 'แท็กจัดการย่อหน้าและบรรทัด: <p> (ย่อหน้าแบบเว้นช่องว่างหัวท้าย), <br> (สั่งขยับขึ้นบรรทัดใหม่ทันที), และ <hr> (ขีดเส้นแบ่งส่วนแนวนอน)',
        snippet: '<p>เนื้อหาในบล็อกย่อหน้าแรก<br>สั่งขึ้นบรรทัดใหม่ตรงนี้</p>\n<hr>\n<p>เนื้อหาย่อหน้าถัดไปหลังเส้นคั่น</p>'
      },
      {
        tag: '<strong> & <em> & <mark>',
        desc: 'แท็กเน้นคำสำคัญเฉพาะจุด: strong (เน้นหนาเตือนสายตา), em (เน้นเอียงเสียงอ่าน), และ mark (ระบายแถบไฮไลต์พื้นหลังเหลือง)',
        snippet: 'ระบบปฏิบัติการนี้ <strong>ห้ามปิดเครื่อง</strong> และกรุณา <em>ตรวจสอบสัญญาณ</em> ตรงที่ <mark>ขึ้นไฟสีแดง</mark>'
      },
      {
        tag: '<ul> & <ol> & <li> (Lists)',
        desc: 'สร้างรายการข้อมูล: <ul> (รายการสัญลักษณ์จุดหัวข้อกลม), <ol> (รายการเรียงลำดับตัวเลข 1, 2, 3...) โดยใช้แท็กย่อย <li> คลุมตัวข้อมูล',
        snippet: '<!-- รายการจุดกลม -->\n<ul>\n  <li>ผลไม้แอปเปิ้ล</li>\n  <li>ผลไม้ส้ม</li>\n</ul>\n\n<!-- รายการเรียงตัวเลข -->\n<ol>\n  <li>เปิดเตาอบ</li>\n  <li>ใส่ขนมปังเข้าเครื่อง</li>\n</ol>'
      },
      {
        tag: '<a> (Anchor Links)',
        desc: 'สร้างลิงก์ปลายทาง ระบุพิกัดใน href และใช้ target="_blank" เพื่อสั่งให้เปิดลิงก์ในแท็บใหม่ของบราวเซอร์',
        snippet: '<!-- เปิดในหน้าเดิม -->\n<a href="https://example.com">เข้าสู่เว็บไซต์หลัก</a>\n\n<!-- เปิดในแท็บใหม่พร้อมความปลอดภัย -->\n<a href="https://google.com" target="_blank" rel="noopener noreferrer">ค้นหาบน Google</a>'
      },
      {
        tag: '<img> (Image Embed)',
        desc: 'แทรกไฟล์รูปภาพลงในหน้าเว็บ โดย src คือที่อยู่รูปภาพ และ alt คือคำอธิบายสั้นๆ ทดแทนกรณีรูปโหลดไม่ขึ้นหรือสำหรับเครื่องอ่านคนพิการ',
        snippet: '<img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop"\n     alt="รูปภาพใบหน้าผู้สอนวิชาวิทยาการคอมพิวเตอร์"\n     width="80"\n     height="80">'
      },
      {
        tag: '<video> & <audio>',
        desc: 'ฝังวิดีโอหรือเสียงลงในหน้าเพจ โดยใส่ controls เพื่อแสดงแผงเล่น หยุด เลื่อนตำแหน่งวิดีโอ และเร่งลดเสียง',
        snippet: '<video src="assets/preview.mp4" controls width="400" poster="thumbnail.jpg">\n  เบราว์เซอร์ของคุณไม่รองรับไฟล์วิดีโอนี้\n</video>'
      },
      {
        tag: '<table> & <tr> & <th> & <td>',
        desc: 'แท็กสร้างตารางข้อมูล: table (กรอบตารางหลัก), tr (แถวตาราง), th (หัวคอลัมน์หนากึ่งกลาง), และ td (เซลล์ข้อมูลช่องปกติ)',
        snippet: '<table border="1">\n  <tr>\n    <th>รายการสินค้า</th>\n    <th>ราคา</th>\n  </tr>\n  <tr>\n    <td>กาแฟเย็น</td>\n    <td>฿45</td>\n  </tr>\n</table>'
      },
      {
        tag: 'colspan & rowspan (Table Span)',
        desc: 'แอตทริบิวต์ระบุบน th/td เพื่อขยายขนาดช่อง: colspan (ควบรวมช่องแนวขวางขวา), rowspan (ควบรวมช่องแนวดิ่งลงล่าง)',
        snippet: '<table>\n  <tr>\n    <!-- รวมหัวข้อเป็น 2 ช่องแนวนอน -->\n    <th colspan="2">หัวข้อตารางแนวยาว</th>\n  </tr>\n  <tr>\n    <!-- รวมเซลล์นี้ลงล่าง 2 แถวแนวตั้ง -->\n    <td rowspan="2">ข้อมูลแนวตั้ง 2 แถว</td>\n    <td>ข้อมูลคอลัมน์ขวา แถว 1</td>\n  </tr>\n  <tr>\n    <td>ข้อมูลคอลัมน์ขวา แถว 2</td>\n  </tr>\n</table>'
      },
      {
        tag: '<form> & <input>',
        desc: 'ระบบฟอร์มคุมช่องส่งข้อมูล: type="text" (ข้อความสั้น), type="password" (ซ่อนตาปิดรหัส), และ type="email" (เช็คสัญญลักษณ์ @ อัตโนมัติ)',
        snippet: '<form action="/submit-data" method="POST">\n  <label for="usr">ชื่อผู้ใช้:</label>\n  <input type="text" id="usr" placeholder="กรอกชื่อผู้ใช้" required>\n  \n  <label for="pwd">รหัสผ่าน:</label>\n  <input type="password" id="pwd" required>\n  \n  <button type="submit">ส่งข้อมูล</button>\n</form>'
      },
      {
        tag: 'radio & checkbox (Form Controls)',
        desc: 'ตัวเลือกการเลือก: type="radio" (เลือกได้อย่างเดียวในกลุ่ม โดยผูกกลุ่มด้วยแอตทริบิวต์ name เดียวกัน) และ type="checkbox" (ติ๊กถูกหลายตัวเลือกอิสระ)',
        snippet: '<!-- กลุ่มปุ่มวิทยุเลือกเพศ (เลือกได้ค่าเดียว) -->\n<label><input type="radio" name="gender" value="m"> ชาย</label>\n<label><input type="radio" name="gender" value="f"> หญิง</label>\n\n<!-- กล่องเลือกรับข่าวสาร (เลือกได้หลายตัว) -->\n<label><input type="checkbox" name="hobbies" value="reading" checked> การอ่าน</label>\n<label><input type="checkbox" name="hobbies" value="coding"> เขียนโค้ด</label>'
      },
      {
        tag: '<select> & <option> & <textarea>',
        desc: 'แท็กDropdownเลือกตัวเลือก: select/option (เมนูคีย์เลือกดรอปดาวน์) และ textarea (กล่องสี่เหลี่ยมพิมพ์บรรยายขยายสเกลความกว้างแถวได้)',
        snippet: '<!-- Dropdown เมนู -->\n<select name="cars">\n  <option value="toyota">Toyota</option>\n  <option value="honda" selected>Honda</option>\n</select>\n\n<!-- ช่องพิมพ์แบบขึ้นบรรทัดยาว -->\n<textarea name="message" rows="4" cols="40" placeholder="ระบุที่อยู่จัดส่ง..."></textarea>'
      },
      {
        tag: 'Semantic Structural Tags',
        desc: 'กลุ่มแท็กระบุขอบเขตแบ่งหน้าจอเพื่อให้ Search Engines และบอทคัดแยกสัดส่วนหน้าเพจได้มาตรฐาน (สำคัญต่อความโปร่งใสและระบบ SEO)',
        snippet: '<header>โลโก้และแถบนำทางหลัก</header>\n<nav>\n  <a href="#home">หน้าหลัก</a>\n</nav>\n<main>\n  <section>\n    <h2>กลุ่มเรื่องที่ 1</h2>\n    <article>บทความที่ 1</article>\n  </section>\n  <aside>คอลัมน์โฆษณาหรือข้อมูลข้างเคียง</aside>\n</main>\n<footer>ส่วนล่างสุดแจ้งลิขสิทธิ์</footer>'
      }
    ],
    css: [
      {
        tag: 'Universal Reset (*)',
        desc: 'การล้างคุณสมบัติระยะห่างและบ็อกซ์โมเดลสากล (Global Reset) ป้องกันเบราว์เซอร์ดึงค่าดีฟอลต์ต่างกันจนสัดส่วนเพจเพี้ยนเบี้ยวเหลื่อม',
        snippet: '* {\n  margin: 0;              /* ล้างช่องว่างขอบนอกเป็นศูนย์ */\n  padding: 0;             /* ล้างช่องว่างขอบในเป็นศูนย์ */\n  box-sizing: border-box; /* บังคับความกว้างกล่องนับรวมกรอบและแพดดิ้ง */\n}'
      },
      {
        tag: 'CSS Selectors Syntax',
        desc: 'ไวยากรณ์หลักในการเชื่อมโยง CSS เข้ากับองค์ประกอบ HTML: Selector แบบแท็กเดี่ยว, คลาสมีจุดนำหน้า, และไอดีขึ้นต้นด้วยชาร์ป',
        snippet: '/* 1. Tag Selector: มีผลกับแท็กนั้นๆ ทุกจุดในหน้าเว็บ */\nh1 { color: #2563eb; }\n\n/* 2. Class Selector: มีผลกับทุกจุดที่ผูกคลาสนี้ไว้ (ใช้ซ้ำได้บ่อย) */\n.btn-primary { padding: 10px 20px; }\n\n/* 3. ID Selector: มีผลเฉพาะจุดเดียวที่มีไอดีตรงกันเท่านั้น (ห้ามใช้ชื่อไอดีซ้ำ) */\n#navbar-main { background-color: #0f172a; }'
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
        snippet: '.premium-box {\n  color: #1e293b;                              /* สีตัวหนังสือ Hex Code */\n  border-color: rgba(59, 130, 246, 0.2);       /* สีขอบน้ำเงินใส 20% */\n  \n  /* การไล่สีฉากหลัง: linear-gradient([มุมองศา], [สีที่ 1], [สีที่ 2]) */\n  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);\n}'
      },
      {
        tag: 'Typography Formats (ตัวอักษร)',
        desc: 'การคุมรูปแบบตัวหนังสือ: font-size (ขนาด), font-weight (ความหนา 100-900), line-height (ช่องว่างบรรทัด), และ letter-spacing (ช่องไฟอักษร)',
        snippet: '.article-body {\n  font-family: \'Sarabun\', sans-serif;\n  font-size: 16px;\n  font-weight: 400;       /* ความหนาตัวหนังสือปกติ (700 = ตัวหนา) */\n  line-height: 1.6;       /* ระยะห่างแถว (แนะนำ 1.5 - 1.7 เพื่อถนอมสายตา) */\n  letter-spacing: 0.5px;  /* ช่องว่างระหว่างอักษรขยายความโปร่งสลวย */\n  text-align: justify;    /* จัดขอบหน้าหลังตรงเรียบเท่ากัน */\n}'
      },
      {
        tag: 'Box Model - Padding & Width',
        desc: 'การตั้งขนาดพื้นที่กล่อง: width/height และกำหนดขนาดแพดดิ้ง (Padding) ซึ่งคือช่องว่างดันสิ่งของภายในกล่องยืดห่างออกจากขอบกรอบ',
        snippet: '.box {\n  width: 100%;\n  max-width: 450px;           /* บังคับไม่ให้กว้างเกินนี้ในจอคอมพิวเตอร์ */\n  height: auto;\n  \n  /* padding: [บนล่าง] [ซ้ายขวา] | หรือแยก 4 ด้าน: [บน] [ขวา] [ล่าง] [ซ้าย] */\n  padding: 16px 24px;\n  box-sizing: border-box;     /* ล็อกสัดส่วนกล่องรวมพิกเซลขอบและแพดดิ้ง */\n}'
      },
      {
        tag: 'Box Model - Margin & Border',
        desc: 'การจัดการส่วนรอบกล่อง: มาร์จิ้น (Margin คือพื้นที่ว่างเว้นช่วงภายนอกกล่องเพื่อจัดระยะห่างไม่ให้กล่องอื่นมาดัน) และการโค้งมนขอบกล่อง',
        snippet: '.avatar-card {\n  /* margin: [บนล่าง] [ซ้ายขวา] | หรือแยก 4 ทิศ */\n  margin: 20px auto;          /* บนล่างห่าง 20px ซ้ายขวาจัดตรงกึ่งกลางจอ */\n  \n  border: 2px solid #cbd5e1;  /* เส้นกรอบ: [ขนาด] [ประเภทเส้น] [สีขอบ] */\n  /* ค่าประเภทเส้นขอบ: solid (เส้นตรง), dashed (เส้นประ), dotted (ไข่ปลา) */\n  \n  border-radius: 50%;         /* โค้งมน: 50% ทำวงกลมสมบูรณ์, 8px-12px ทำขอบมน */\n}'
      },
      {
        tag: 'Box Shadows (เงาสามมิติ)',
        desc: 'ตกแต่งใส่ความมีระดับด้วยเงาขอบใต้กล่องดูลอยนูนขึ้นมาตามระดับพารามิเตอร์ที่ใส่ระบุ',
        snippet: '.elevated-box {\n  /* \n     โครงสร้างค่า: box-shadow: [เยื้องขวา X] [เยื้องล่าง Y] [ความฟุ้งเบลอ] [ขนาดความหนาเงา] [รหัสสีเงา];\n     - ใส่ค่าเยื้องติดลบเพื่อเยื้องซ้ายหรือเยื้องขึ้นบน\n     - แนะนำใช้สีแนว RGBA เพื่อสร้างเงาใสดูเนียนธรรมชาติ\n  */\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),\n              0 8px 10px -6px rgba(0, 0, 0, 0.05);\n}'
      },
      {
        tag: 'Display Properties',
        desc: 'กำหนดประเภทการแสดงร่างของกล่อง: block (กินพื้นที่หน้ากว้างเต็มพิกัดบรรทัด), inline (ไหลตามข้อความคุมกว้างยาวไม่ได้), และ inline-block',
        snippet: '.tag-label {\n  /* inline-block: ไหลต่อตัวในแนวนอน แต่สามารถปรับ width/height และ padding รอบตัวได้ */\n  display: inline-block;\n  width: 120px;\n  text-align: center;\n}'
      },
      {
        tag: 'Visibility vs Display None',
        desc: 'ความแตกต่างของคำสั่งสั่งซ่อน: display:none (สั่งลบทิ้งไปจากเลย์เอาต์ ปล่อยพื้นที่ว่าง), visibility:hidden (สั่งล่องหน แต่พื้นที่กล่องเท่าเดิม)',
        snippet: '/* ลบชิ้นงานนี้ออกจากหน้าจอและโครงสร้างชั่วคราว */\n.hidden-completely { display: none; }\n\n/* ล่องหนแต่ยังคงเหลือพื้นที่เปล่าสีขาวไว้ห้ามองค์ประกอบอื่นดึงเสียที่ */\n.hidden-but-keeps-space { visibility: hidden; }'
      },
      {
        tag: 'Text Alignment (จัดขอบข้อความ)',
        desc: 'กำหนดการจัดวางตำแหน่งตัวหนังสือในแนวนอนภายในกรอบเนื้อหา',
        snippet: '.aligned-text {\n  /* \n     ค่าพารามิเตอร์จัดตำแหน่ง:\n     - left   : จัดชิดซ้ายเริ่มต้น (ดีฟอลต์สำหรับภาษาซ้ายไปขวา)\n     - right  : จัดชิดขวาสุด\n     - center : จัดข้อความอยู่กึ่งกลางแนวนอนพอดี\n     - justify: จัดดึงระยะหน้าหลังขยายเว้นช่องไฟเพื่อปูให้ขอบข้างเรียบตรงสวยงาม\n  */\n  text-align: center;\n}'
      },
      {
        tag: 'Text Decoration (เส้นตกแต่งคำ)',
        desc: 'กำหนดการขีดเส้นตกแต่งให้กับตัวหนังสือ เช่น ขีดเส้นใต้คำ, ขีดกลางลบคำ หรือล้างเส้นใต้ของแท็กลิงก์ <a> ดีฟอลต์ออก',
        snippet: '.styled-line {\n  /*\n     ค่าขีดเส้นคุมสไตล์:\n     - none         : ล้างเส้นตกแต่งออกทั้งหมด (นิยมใช้เคลียร์ขีดเส้นใต้แท็กลิงก์ <a>)\n     - underline    : ขีดเส้นใต้ตัวอักษร\n     - overline     : ขีดเส้นเหนือบ่าตัวอักษรด้านบน\n     - line-through : ขีดเส้นคาดทับกลางอักษร (นิยมทำป้าย SALE ลดราคา)\n  */\n  text-decoration: none;\n}'
      },
      {
        tag: 'Text Transform (ปรับตัวพิมพ์อักษร)',
        desc: 'ควบคุมการแปลงขนาดพิมพ์เล็ก-พิมพ์ใหญ่ของตัวอักษรภาษาอังกฤษโดยอัตโนมัติผ่าน CSS',
        snippet: '.english-case {\n  /*\n     ค่าควบคุมสเตตัสการพิมพ์:\n     - none       : ขนาดอักษรเดิมตามที่พิมพ์ลง HTML\n     - uppercase  : แปลงอักษรทุกตัวให้กลายเป็นตัวพิมพ์ใหญ่ทั้งหมด (เช่น hello -> HELLO)\n     - lowercase  : แปลงอักษรทุกตัวให้กลายเป็นตัวพิมพ์เล็กทั้งหมด\n     - capitalize : แปลงเฉพาะตัวอักษรแรกสุดของคำให้เป็นตัวพิมพ์ใหญ่ (เช่น hello -> Hello)\n  */\n  text-transform: uppercase;\n}'
      },
      {
        tag: 'List Styles Bullet (จุดรายการลิสต์)',
        desc: 'กำหนดการจัดสไตล์ของจุดรายการหน้ารายการลิสต์ <ul> และ <ol> หรือล้างออกเพื่อทำแถบเมนูนำทาง',
        snippet: '.custom-list {\n  /* \n     ค่าสัญลักษณ์หัวข้อ:\n     - none     : ล้างจุดกลมหรือตัวเลขออกทั้งหมด (นิยมทำแถบเมนูนำทางหรือการ์ด)\n     - disc     : จุดวงกลมทึบดีฟอลต์\n     - circle   : วงกลมกลวงโปร่งใน\n     - square   : จุดกล่องสี่เหลี่ยมจัตุรัสทึบ\n     - decimal  : ตัวเลขเรียงลำดับ 1, 2, 3...\n  */\n  list-style-type: none;\n}'
      },
      {
        tag: 'Table Border Collapse (ยุบเส้นขอบตาราง)',
        desc: 'รวมเส้นกรอบเซลล์ตารางของ td และ th ให้ยุบควบแน่นเหลือเพียงเส้นเดี่ยว เพื่อป้องกันเส้นกรอบตารางซ้อนทับหนาเป็นสองเท่า',
        snippet: 'table {\n  /*\n     ค่าคุมขอบตาราง:\n     - collapse : สั่งยุบขอบที่สัมผัสกันมารวมร่างเป็นเส้นขอบเดี่ยวดูเพรียวสวยงาม (แนะนำใช้เสมอ)\n     - separate : แยกขอบออกจากกันแบบอิสระดีฟอลต์ (ทำให้เกิดขอบซ้อนหนา)\n  */\n  border-collapse: collapse;\n}'
      }
    ],
    layouts: [
      {
        tag: 'Absolute & Relative Position',
        desc: 'การจัดตำแหน่งซ้อนทับกัน: กำหนด position: relative คลุมที่ตัวแม่ และระบุ position: absolute ที่ตัวลูก เพื่อบังคับพิกัดการลอยทับ',
        snippet: '/* 1. กล่องแม่ (ใช้เป็นฐานระบุพิกัดอิงตัว) */\n.parent-card {\n  position: relative;\n}\n\n/* 2. กล่องลูก (วางลอยทับตำแหน่งเจาะจง) */\n.child-badge {\n  position: absolute;\n  top: 12px;                  /* ยึดห่างขอบบนแม่ 12px */\n  right: 12px;                /* ยึดห่างขอบขวาแม่ 12px */\n  /* ค่าปรับแต่งทิศทาง: top | bottom | left | right */\n}'
      },
      {
        tag: 'Fixed & Sticky Position',
        desc: 'การจัดเลื่อนตามจอ: position: fixed (ตรึงตำแหน่งไว้กับ viewport หน้าต่างเดิมตลอดเวลา), position: sticky (เลื่อนตามเพจแต่ล็อกเกาะติดขอบทิศทางยามชนขอบ)',
        snippet: '/* เมนูบาร์เกาะติดขอบจอด้านบนตลอดเวลาเมื่อเลื่อนหน้าจอลงล่าง */\n.navbar-sticky {\n  position: sticky;\n  top: 0;                     /* ติดหนึบขอบบนสุด */\n  z-index: 999;               /* ยกความลอยตัวระดับสูงป้องกันการโดนบล็อกทับ */\n}'
      },
      {
        tag: 'Flexbox Containers ( display: flex )',
        desc: 'เปิดใช้งานแถวยืดหยุ่นจัดเรียงใน 1 มิติ (แนวราบหรือแนวดิ่ง) ควบคุมการแบ่งทิศทางและสั่งหักขึ้นบรรทัดใหม่เมื่อชนขอบจอ',
        snippet: '.flex-parent {\n  display: flex;\n  flex-direction: row;        /* row (เรียงแนวนอนดีฟอลต์) | column (เรียงแนวดิ่ง) */\n  flex-wrap: wrap;            /* wrap (ตัดขึ้นบรรทัดใหม่เมื่อสุดจอ) | nowrap (เบียดบีบ) */\n  gap: 16px;                  /* ช่องไฟระยะห่างระหว่างกล่องลูก */\n}'
      },
      {
        tag: 'Flex Justify & Align',
        desc: 'จัดระเบียบและตำแหน่งของกล่องลูกภายในแถว Flexbox ทั้งในแนวแกนหลัก (แนวนอน) และแนวแกนรอง (แนวตั้ง)',
        snippet: '.flex-parent {\n  display: flex;\n  \n  /* justify-content: จัดช่องไฟในแนวแกนหลัก (แกนนอน)\n     - flex-start    : กองรวมฝั่งซ้ายเริ่มต้น\n     - flex-end      : กองรวมฝั่งขวาสุด\n     - center        : รวมตรงกลางแถว\n     - space-between : ชิดขอบซ้ายขวาสุด แบ่งพื้นที่ว่างตรงกลางเท่ากัน\n     - space-around  : ปรับช่องไฟรอบข้างเท่ากัน (ขอบนอกซ้ายขวาจะแคบกว่าครึ่งหนึ่ง)\n     - space-evenly  : แบ่งเว้นช่องไฟทุกส่วนรวมถึงขอบซ้ายขวาอย่างเท่าเทียมเป๊ะ\n  */\n  justify-content: space-between;\n  \n  /* align-items: จัดตำแหน่งลูกในแนวแกนรอง (แนวตั้งแนวดิ่ง)\n     - stretch       : ยืดตัวยาวสุดเต็มแถวดิ่ง (ดีฟอลต์)\n     - center        : จัดให้ตรงกลางแนวดิ่ง\n     - flex-start    : แขวนไว้ขอบบนสุด\n     - flex-end      : ห้อยไว้ขอบล่างสุด\n  */\n  align-items: center;\n}'
      },
      {
        tag: 'Flex Grow & Shrink & Basis',
        desc: 'คุณสมบัติคุมขนาดเฉพาะส่วนบนแท็กกล่องลูกย่อยเพื่อยืดหดขยายขนาดให้เข้าสเปก Layout แถว',
        snippet: '/* กล่องลูกหลักที่ต้องการให้ขยายยืดครองพื้นที่ว่างแนวนอนที่เหลือทั้งหมด */\n.search-input-grow {\n  flex-grow: 1;               /* ขยายเติมพื้นที่ว่าง (0 = ขนาดเดิม) */\n}\n\n/* กล่องลูกรองที่ไม่ต้องการให้เบราว์เซอร์บีบหดสเกลขนาดกว้างเมื่อจอแคบ */\n.logo-fixed {\n  flex-shrink: 0;             /* ล็อกความกว้างห้ามบีบหดเล็กลง */\n  flex-basis: 120px;          /* กำหนดขนาดฐานเริ่มต้น */\n}'
      },
      {
        tag: 'CSS Grid Template Columns',
        desc: 'ออกแบบแบ่งห้องแถว Layout ตารางรูปแบบ 2 มิติอย่างสะดวกรวดเร็วโดยกำหนดจำนวนช่องคอลัมน์แนวนอนและขนาดเว้นห่าง',
        snippet: '.grid-parent {\n  display: grid;\n  /* repeat(จำนวนช่อง, ขนาดกว้าง) | fr คือเศษส่วนแชร์พื้นที่อย่างเท่าเทียม */\n  grid-template-columns: repeat(3, 1fr);  /* แบ่ง 3 คอลัมน์กว้างเท่ากันเท่าตัว */\n  gap: 16px 20px;                         /* [ห่างแนวตั้ง] [ห่างแนวนอน] */\n}'
      },
      {
        tag: 'CSS Grid Areas Layout',
        desc: 'ขึ้นโครงสร้างหน้าแดชบอร์ดซับซ้อนตามชื่อตัวแปรที่วาดพิมพ์เขียวเอาไว้ (มัดคลาสลูกด้วยคำสั่ง grid-area)',
        snippet: '/* 1. วาดโครงร่างแบ่งพื้นที่กล่องแม่ */\n.dashboard-grid {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-rows: auto 1fr;\n  grid-template-areas:\n    "header header"\n    "sidebar content";\n}\n\n/* 2. ระบุบอกตำแหน่งกล่องลูกตามพื้นที่ที่วาดไว้ */\n.nav-header { grid-area: header; }\n.nav-sidebar { grid-area: sidebar; }\n.panel-main { grid-area: content; }'
      },
      {
        tag: 'Responsive Media Queries',
        desc: 'คำสั่งคุมสัญญลักษณ์ CSS เปลี่ยนสไตล์สี ความกว้าง เลย์เอาต์ ให้เหมาะสมตามประเภทขนาดความกว้างหน้าจอบราวเซอร์ในขณะนั้น',
        snippet: '/* สไตล์ดีฟอลต์ (เช่น แสดงผลบนคอมพิวเตอร์หน้าจอกว้าง) */\n.layout-wrapper { display: flex; }\n.sidebar { width: 250px; }\n\n/* สไตล์เมื่อเปิดดูบนโทรศัพท์มือถือหรือหน้าจอแคบกว่า 768px */\n@media (max-width: 768px) {\n  .layout-wrapper {\n    flex-direction: column;   /* ปรับต่อแนวดิ่งแทนแนวนอน */\n  }\n  .sidebar {\n    width: 100%;              /* ยืดกว้างเต็มจอ */\n    display: none;            /* หรือลบซ่อนแถบข้างทิ้งเพื่อความเรียบร้อย */\n  }\n}'
      },
      {
        tag: 'CSS Grid Auto Responsive Layout',
        desc: 'จัดเรียงช่องกริดแบบยืดหด ปรับจำนวนคอลัมน์อัตโนมัติยามย่อขยายหน้าจอ โดยไม่ต้องเขียน Media Queries บังคับ',
        snippet: '.gallery-responsive {\n  display: grid;\n  /* repeat(auto-fit, minmax(ความกว้างต่ำสุด, ความกว้างสูงสุด)) \n     - auto-fit: สั่งจัดจำแนกจำนวนคอลัมน์แชร์อัตโนมัติตามพื้นที่บราวเซอร์\n     - minmax(200px, 1fr): บังคับการ์ดห้ามแคบกว่า 200px หากเหลือที่ให้ยืดเต็มที่\n  */\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}'
      }
    ],
    tips: [
      {
        tag: 'CSS Transitions (สลับนุ่มนวล)',
        desc: 'ตั้งค่าวาดแอนิเมชันให้เวลาเปลี่ยนสี ขยับ ปรับสไตล์ของกล่องดำเนินไปอย่างเรียบลื่นสโลว์โมชัน ปราศจากการกระตุกตา',
        snippet: '.interactive-card {\n  /* transition: [ชื่อสไตล์ที่จับ] [ระยะเวลาเล่น] [เส้นโค้งความเร็ว] [เวลาหน่วงเริ่มต้น]; */\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  /* ค่าอัตราความเร็วเริ่มต้น (Timing Function):\n     - linear      : วิ่งเร็วเสมอกันต้นจนจบ\n     - ease        : เริ่มช้า -> เร็วกลาง -> ช้าช่วงท้าย (เนียนเป็นธรรมชาติสุด)\n     - ease-in-out : เร่งกลางช้าหัวท้าย\n  */\n}'
      },
      {
        tag: 'Keyframes Loop Animations (เคลื่อนไหวต่อเนื่อง)',
        desc: 'สร้างเนื้อเรื่องอนิเมชันให้ระบบขยับ ย่อขยาย สไลด์ เรืองแสง หมุนติ้ว ดำเนินการแบบวนลูปไม่จำกัด (infinite)',
        snippet: '/* 1. วาดเรื่องราวการเปลี่ยนรูปทรงเป็นองศา */\n@keyframes spin-loader {\n  0%   { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n/* 2. มัดเข้ากับองค์ประกอบและระบุสั่งเล่น */\n.loading-spinner {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 3px solid #cbd5e1;\n  border-top-color: #3b82f6;\n  \n  /* สั่งการขยับหมุนสปินอย่างสม่ำเสมอ ความเร็ว 1 วินาที วนซ้ำไม่มีสิ้นสุด */\n  animation: spin-loader 1s linear infinite;\n}'
      },
      {
        tag: 'Hover & Active Pseudo-classes',
        desc: 'สร้างความรู้สึกมีตัวตนเมื่อเมาส์สัมผัสปุ่ม: :hover (เมื่อเมาส์ไปจ่อทับ) และ :active (ปุ่มกดบุ๋มเมื่อนิ้วคลิกซ้ายสัมผัสค้าง)',
        snippet: '.premium-btn {\n  background-color: #3b82f6;\n  color: white;\n  transition: transform 0.2s, background-color 0.2s;\n}\n\n/* เมื่อผู้เรียนเอาเมาส์มาวางทับ */\n.premium-btn:hover {\n  background-color: #2563eb;  /* เปลี่ยนเป็นน้ำเงินเข้มขึ้น */\n  transform: translateY(-2px); /* ลอยตัวขึ้นบนขยับ 2px */\n}\n\n/* เมื่อคลิกเมาส์ค้างยามสัมผัสจริง */\n.premium-btn:active {\n  transform: scale(0.95);      /* ย่อขนาดเล็กลงเหลือ 95% สร้างปุ่มยุบสมจริง */\n}'
      },
      {
        tag: 'Focus Within state (ไฮไลต์ฟอร์ม)',
        desc: 'สเตทตรวจจับเมื่อมีอิลิเมนต์ย่อยภายในกล่องแม่ได้รับการโฟกัสหรือคลิกพิมพ์ (มักใช้ทำเอฟเฟกต์ไฟเรืองแสงส่องกรอบฟอร์มทั้งหมด)',
        snippet: '/* เมื่อผู้ใช้คลิกพิมพ์ช่องอินพุตด้านใน ให้กล่องแม่เปลี่ยนสีขอบขึ้นเงาตาม */\n.input-card-group:focus-within {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);\n}'
      },
      {
        tag: 'Pseudo-elements (::before & ::after)',
        desc: 'สร้างองค์ประกอบจำลองเพื่อวาดรูปทรงเสริมโดยไม่ต้องปะแท็กขยะใน HTML (จำเป็นต้องมีคำสั่ง content: "" ระบุคุณลักษณะเสมอ)',
        snippet: '/* ทำปุ่มออนไลน์สีเขียวลอยนำหน้าคำว่า Online */\n.status-badge::before {\n  content: "";                 /* บังคับต้องประกาศสัญญลักษณ์ห้ามขาด */\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #10b981;   /* เม็ดสีเขียว */\n  margin-right: 6px;\n}'
      },
      {
        tag: 'Image Aspect-Ratio Cover',
        desc: 'คำสั่งแก้ปัญหารูปเบี้ยว ยืด โย้: บังคับการครอปตัดพิกเซลให้พอดีกรอบรูปภาพโดยรักษาอัตราส่วนดั้งเดิม (Aspect Ratio) สไตล์พรีเมียม',
        snippet: '.post-media-photo {\n  width: 100%;\n  height: 300px;\n  object-fit: cover;           /* ครอปตัดภาพส่วนเกินออกและตรึงพิกเซลไม่ให้เบี้ยว */\n  object-position: center;     /* ขยับจัดพิกัดดึงศูนย์กลางภาพโชว์ */\n}'
      },
      {
        tag: 'Glassmorphism Formula (สูตรกระจกฝ้า)',
        desc: 'สูตรสำเร็จทำดีไซน์การ์ดและเลย์เอาต์กระจกใสพรีเมียมสะท้อนขอบแก้วที่ใช้ใน UI สมัยใหม่ คล้ายกระจกสลัวเบลอฉากหลัง',
        snippet: '.glass-card-premium {\n  background: rgba(255, 255, 255, 0.08); /* พื้นหลังสีขาวโปร่งแสงจัดใส */\n  backdrop-filter: blur(12px);          /* สั่งเบลอข้อมูลฉากหลังการ์ดสะท้อน */\n  -webkit-backdrop-filter: blur(12px);\n  \n  border: 1px solid rgba(255, 255, 255, 0.15); /* ขอบบางสะท้อนประกายขอบแก้ว */\n  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);  /* เงาเบาบางคุมมิติ */\n}'
      },
      {
        tag: 'CSS Transforms 2D / 3D',
        desc: 'คำสั่งปรับแต่งรูปร่างการแสดงผล: หมุน (rotate), ปรับอัตราส่วนย่อขยายขนาด (scale), และเลื่อนพิกัดตำแหน่งแกนราบดิ่ง (translate)',
        snippet: '.floating-icon {\n  /* transform: translate([แกน X], [แกน Y]) rotate([มุมองศา]) scale([สเกลซูม]); */\n  transform: translate(-50%, -50%) rotate(45deg) scale(1.15);\n}'
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
              placeholder="พิมพ์ตรวจหาคีย์เวิร์ดพารามิเตอร์ (เช่น: flex, meta, specificity, margin, border-radius)..."
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
