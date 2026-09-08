export const curriculum = {
  lessons: [
    // --- หมวดใหญ่ 1: HTML Core (12 บทเรียนย่อย) ---
    {
      id: "html-structure",
      title: "1. โครงสร้างหลัก HTML5 (DOCTYPE & Head Metadata)",
      category: "1. HTML Core",
      description: `เริ่มต้นเขียนเว็บด้วยการตั้งโครงสร้างไฟล์ HTML5 ที่สมบูรณ์และถูกต้องตามมาตรฐานอุตสาหกรรมสากล
      
โครงสร้างและข้อมูลอักขระเมทาแท็ก (Head Metadata) ที่จำเป็น:
- \`<!DOCTYPE html>\` : ประกาศประเภทเอกสารบรรทัดแรกสุด
- \`<html lang="th">\` : แท็กหลักครอบเนื้อหาทั้งหมด (ระบุแอตทริบิวต์ภาษาไทย \`lang="th"\`)
- \`<head>\` : ส่วนเก็บข้อมูลเบื้องหลังเพื่อระบุหัวข้อและการเข้ารหัสภาษา
- \`<meta charset="UTF-8">\` : คีย์สำคัญระบุการแปลงอักขระ รองรับภาษาไทยและอักษรทั่วโลก
- \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\` : คำสั่งช่วยให้การแสดงผลยืดหยุ่นรองรับทุกอุปกรณ์ (Responsive Viewport)
- \`<title>WebDev Academy</title>\` : ระบุข้อความหัวเรื่องบนแถบเบราว์เซอร์
- \`<body>\` : ส่วนพื้นที่หลักสำหรับเขียนโค้ดและข้อมูลแสดงผลหน้าเว็บ

**เป้าหมาย:**
ประกอบโครงร่างหลักของหน้าเว็บให้ถูกต้องครบถ้วนตามรายการแท็กมาตรฐานด้านบน`,
      starterHtml: `<!-- พิมพ์โครงสร้างหน้าเว็บมาตรฐาน HTML5 ของคุณที่นี่ -->`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebDev Academy</title>
</head>
<body>
  <h1>ยินดีต้อนรับเข้าเรียน</h1>
</body>
</html>`,
      targetCss: `body { font-family: sans-serif; padding: 20px; }`,
      starterCss: `body { font-family: sans-serif; padding: 20px; }`,
      validation: (doc) => {
        const title = doc.querySelector('title');
        const metaCharset = doc.querySelector('meta[charset]');
        const metaViewport = doc.querySelector('meta[name="viewport"]');
        const body = doc.querySelector('body');
        
        if (!title || !title.textContent.includes("WebDev Academy")) {
          return "กรุณาสร้างแท็ก <title> และพิมพ์ข้อความ 'WebDev Academy' ด้านในแท็ก <head>";
        }
        if (!metaCharset || metaCharset.getAttribute('charset').toUpperCase() !== 'UTF-8') {
          return 'กรุณาใส่แท็กระบุภาษาอักขระ <meta charset="UTF-8"> ไว้ในส่วน <head>';
        }
        if (!metaViewport || !metaViewport.getAttribute('content') || !metaViewport.getAttribute('content').includes('width=device-width')) {
          return 'กรุณาใส่แท็ก <meta name="viewport" content="width=device-width, initial-scale=1.0"> ใน <head> เพื่อทำระบบ Responsive';
        }
        if (!body) {
          return "กรุณาสร้างแท็ก <body> เพื่อแบ่งโครงสร้างหน้าจอแสดงผลหลัก";
        }
        return true;
      },
      hints: ["พิมพ์: <!DOCTYPE html> ตามด้วย <html lang='th'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>WebDev Academy</title></head><body><h1>ยินดีต้อนรับเข้าเรียน</h1></body></html>"]
    },
    {
      id: "html-headings",
      title: "2. การจัดหัวข้อและเว้นบรรทัด (Headings & Breaks)",
      category: "1. HTML Core",
      description: `เรียนรู้การเรียงลำดับหัวข้อและความสำคัญของเนื้อหา
- \`<h1>\` : หัวข้อใหญ่สุดของหน้า
- \`<h2>\` : หัวข้อย่อยรองลงมา
- \`<br>\` : สั่งขึ้นบรรทัดใหม่
- \`<hr>\` : สั่งขีดเส้นคั่นแนวขวาง

**เป้าหมาย:**
1. สร้างหัวข้อใหญ่สุด \`<h1>\` เขียนว่า "ยินดีต้อนรับสู่ห้องเรียน"
2. สร้างหัวข้อย่อย \`<h2>\` เขียนว่า "บทเรียน HTML ขั้นต้น"
3. พิมพ์แท็กย่อหน้า \`<p>\` และสั่งขึ้นบรรทัดใหม่ตรงกลางย่อหน้าด้วย \`<br>\` ตามด้วยเส้นคั่น \`<hr>\` ด้านล่าง`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- เริ่มเขียนหัวข้อและเนื้อหาที่นี่ -->
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <h1>ยินดีต้อนรับสู่ห้องเรียน</h1>
<h2>บทเรียน HTML ขั้นต้น</h2>
<p>เริ่มเรียนรู้โครงสร้าง<br>และจัดแบ่งเนื้อหาหน้าเพจ</p>
<hr>
</body>
</html>`,
      targetCss: `body { font-family: sans-serif; padding: 20px; }`,
      starterCss: `body { font-family: sans-serif; padding: 20px; }`,
      validation: (doc) => {
        const h1 = doc.querySelector('h1');
        const h2 = doc.querySelector('h2');
        const p = doc.querySelector('p');
        const br = doc.querySelector('p br');
        const hr = doc.querySelector('hr');
        
        if (!h1 || !h1.textContent.includes("ยินดีต้อนรับสู่ห้องเรียน")) return "ขาดแท็ก <h1> พร้อมข้อความ 'ยินดีต้อนรับสู่ห้องเรียน'";
        if (!h2 || !h2.textContent.includes("บทเรียน HTML ขั้นต้น")) return "ขาดแท็ก <h2> พร้อมข้อความ 'บทเรียน HTML ขั้นต้น'";
        if (!p || !br) return "กรุณาใส่แท็ก <p> และใส่ <br> ด้านในย่อหน้าเพื่อขึ้นบรรทัดใหม่";
        if (!hr) return "อย่าลืมขีดเส้นคั่นใต้บทความด้วยแท็ก <hr>";
        return true;
      },
      hints: ["ใช้ <h1>, <h2>, <p> อ้างอิง และขีดเส้นใต้ด้วย <hr> ด้านล่างสุด"]
    },
    {
      id: "html-text-format",
      title: "3. การตกแต่งและเน้นคำ (Text Formatting)",
      category: "1. HTML Core",
      description: `การจัดรูปแบบข้อความเน้นคำสำคัญเพื่อผลต่อสายตาและบอทกูเกิล:
- \`<strong>\` : ทำข้อความตัวหนาหนึบเพื่อระบุความสำคัญ
- \`<em>\` : ทำข้อความตัวเอียงเพื่อระบุสเตทเปรียบเทียบ
- \`<mark>\` : ไฮไลท์แถบสีข้อความ (เหมือนขีดปากกาเคมี)

**เป้าหมาย:**
เขียนข้อความย่อหน้า \`<p>\` ที่มีคำที่ถูกเน้นความหนาด้วย \`<strong>\` ที่คำว่า "สำคัญที่สุด" และเน้นตัวเอียงด้วย \`<em>\` ที่คำว่า "ความเพียร" พร้อมทำสีไฮไลท์ด้วย \`<mark>\` ที่คำว่า "เรียนฟรีที่นี่"`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- ฝึกเขียนเน้นข้อความของคุณที่นี่ -->
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <p>สิ่งที่เป็น <strong>สำคัญที่สุด</strong> ในการเรียนพัฒนาเว็บคือ <em>ความเพียร</em> และสามารถเริ่มต้น <mark>เรียนฟรีที่นี่</mark> ได้ทันที</p>
</body>
</html>`,
      targetCss: `body { font-family: sans-serif; padding: 20px; }`,
      starterCss: `body { font-family: sans-serif; padding: 20px; }`,
      validation: (doc) => {
        const strong = doc.querySelector('strong');
        const em = doc.querySelector('em');
        const mark = doc.querySelector('mark');
        
        if (!strong || !strong.textContent.includes("สำคัญที่สุด")) return "กรุณาใช้ <strong> ครอบคำว่า 'สำคัญที่สุด'";
        if (!em || !em.textContent.includes("ความเพียร")) return "กรุณาใช้ <em> ครอบคำว่า 'ความเพียร'";
        if (!mark || !mark.textContent.includes("เรียนฟรีที่นี่")) return "กรุณาใช้ <mark> ครอบคำว่า 'เรียนฟรีที่นี่'";
        return true;
      },
      hints: ["ประกอบแท็ก <strong>สำคัญที่สุด</strong>, <em>ความเพียร</em>, และ <mark>เรียนฟรีที่นี่</mark> ในแท็ก <p>"]
    },
    {
      id: "html-lists",
      title: "4. รายการลำดับหัวข้อ (HTML Lists)",
      category: "1. HTML Core",
      description: `การนำเสนอเป็นข้อๆ ทำได้สองแบบ:
- **Unordered List** (\`<ul>\`) : รายการสัญลักษณ์จุดวงกลม
- **Ordered List** (\`<ol>\`) : รายการแบบเรียงลำดับเลข 1, 2, 3...
- ทั้งคู่ต้องใส่ไอเทมด้วยแท็ก \`<li>\` เสมอ

**เป้าหมาย:**
1. สร้างรายการไม่มีลำดับ \`<ul>\` บรรจุผลไม้ 2 อย่าง: "แอปเปิ้ล", "กล้วย"
2. สร้างรายการมีลำดับเลข \`<ol>\` บรรจุขั้นตอน 2 ลำดับ: "เตรียมโค้ด", "เขียนโปรแกรม"`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- สร้างรายการลิสต์ของคุณด้านล่างนี้ -->
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <ul>
  <li>แอปเปิ้ล</li>
  <li>กล้วย</li>
</ul>
<ol>
  <li>เตรียมโค้ด</li>
  <li>เขียนโปรแกรม</li>
</ol>
</body>
</html>`,
      targetCss: `body { font-family: sans-serif; padding: 20px; }`,
      starterCss: `body { font-family: sans-serif; padding: 20px; }`,
      validation: (doc) => {
        const uli = doc.querySelectorAll('ul li');
        const oli = doc.querySelectorAll('ol li');
        if (uli.length < 2) return "กรุณาสร้างรายการผลไม้ใน <ul> คลาสลิสต์อย่างน้อย 2 รายการ";
        if (oli.length < 2) return "กรุณาสร้างลำดับขั้นตอนใน <ol> คลาสลิสต์อย่างน้อย 2 ลำดับ";
        return true;
      },
      hints: ["พิมพ์ <ul> พร้อม <li> 2 รายการ และต่อด้วย <ol> พร้อม <li> 2 รายการ"]
    },
    {
      id: "html-tables-basic",
      title: "5. ตารางข้อมูลพื้นฐาน (HTML Tables)",
      category: "1. HTML Core",
      description: `จัดระเบียบข้อมูลสถิติหรือรายชื่อเป็นแถวและคอลัมน์:
- \`<table>\` : แท็กเริ่มระบบตาราง
- \`<tr>\` (Table Row) : แถวแนวนอน
- \`<td>\` (Table Data) : ช่องเซลล์เก็บข้อมูล

**เป้าหมาย:**
สร้างตารางขนาด **2 แถว x 2 คอลัมน์** โดยแถวแรกมีข้อความ "ส้ม", "฿30" และแถวสองมีข้อความ "องุ่น", "฿80"`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- สร้างตารางพื้นฐานที่นี่ -->
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <table>
  <tr>
    <td>ส้ม</td>
    <td>฿30</td>
  </tr>
  <tr>
    <td>องุ่น</td>
    <td>฿80</td>
  </tr>
</table>
</body>
</html>`,
      targetCss: `table, td { border: 1px solid #cbd5e1; border-collapse: collapse; padding: 8px; font-family: sans-serif; }`,
      starterCss: `table, td { border: 1px solid #cbd5e1; border-collapse: collapse; padding: 8px; font-family: sans-serif; }`,
      validation: (doc) => {
        const table = doc.querySelector('table');
        const rows = doc.querySelectorAll('table tr');
        const cells = doc.querySelectorAll('table tr td');
        
        if (!table) return "ขาดแท็ก <table>";
        if (rows.length < 2) return "ตารางต้องมีอย่างน้อย 2 แถว (<tr>)";
        if (cells.length < 4) return "ต้องมีเซลล์ข้อมูล (<td>) ทั้งหมดอย่างน้อย 4 ช่อง";
        return true;
      },
      hints: ["ใช้โครงสร้าง <table> ตามด้วย <tr> 2 ชุด แต่ละชุดมี <td> สองช่องข้างใน"]
    },
    {
      id: "html-tables-span",
      title: "6. ตารางรวมช่องตาราง (Advanced Table Spanning)",
      category: "1. HTML Core",
      description: `การรวมช่องตารางในแนวขวางหรือแนวดิ่ง:
- \`colspan="ตัวเลข"\` : สั่งให้เซลล์ขยายรวมคอลัมน์แนวขวาง
- \`rowspan="ตัวเลข"\` : สั่งให้เซลล์ขยายรวมแถวแนวดิ่ง

**เป้าหมาย:**
สร้างตาราง 2 แถว โดยแถวแรกมี 1 ช่องเซลล์พิเศษที่ขยายความกว้างทับ 2 ช่อง (\`colspan="2"\`) เขียนข้อความ "ข้อมูลรวมยอด" และแถวสองมี 2 ช่องปกติเขียนข้อความ "สินค้า A", "฿500"`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- ตารางเชื่อมช่องข้อมูลที่นี่ -->
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <table>
  <tr>
    <td colspan="2" style="text-align: center; font-weight: bold;">ข้อมูลรวมยอด</td>
  </tr>
  <tr>
    <td>สินค้า A</td>
    <td>฿500</td>
  </tr>
</table>
</body>
</html>`,
      targetCss: `table, td { border: 1px solid #cbd5e1; border-collapse: collapse; padding: 8px; font-family: sans-serif; }`,
      starterCss: `table, td { border: 1px solid #cbd5e1; border-collapse: collapse; padding: 8px; font-family: sans-serif; }`,
      validation: (doc) => {
        const td = doc.querySelector('td[colspan="2"]');
        if (!td) return "ไม่พบแท็ก <td> ที่มีการใช้คุณสมบัติ colspan='2'";
        return true;
      },
      hints: ["กำหนด <td colspan='2'> ในเซลล์แรกของแถวแรกเพื่อยืดขวางตาราง"]
    },
    {
      id: "html-links",
      title: "7. ลิงก์เชื่อมโยงและแท็บใหม่ (Anchor Links & Target)",
      category: "1. HTML Core",
      description: `การเชื่อมโยงหน้าเว็บเพจไปยังปลายทางอื่นๆ:
- แท็ก \`<a>\` (Anchor)
- แอตทริบิวต์ \`href\` : ระบุ URL ปลายทาง
- \`target="_blank"\` : สั่งให้เปิดลิงก์ในแท็บเบราว์เซอร์ใหม่

**เป้าหมาย:**
สร้างลิงก์ <a> เชื่อมโยงไปยังเว็บไซต์ \`https://google.com\` โดยกำหนดให้เปิดหน้าต่างแท็บใหม่ (\`target="_blank"\`) และมีข้อความเขียนบนลิงก์ว่า "ค้นหาข้อมูลเพิ่มเติม"`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- สร้างลิงก์เชื่อมโยงที่นี่ -->
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <a href="https://google.com" target="_blank">ค้นหาข้อมูลเพิ่มเติม</a>
</body>
</html>`,
      targetCss: `a { font-family: sans-serif; color: #2563eb; text-decoration: none; font-weight: bold; }`,
      starterCss: `a { font-family: sans-serif; color: #2563eb; text-decoration: none; font-weight: bold; }`,
      validation: (doc) => {
        const a = doc.querySelector('a');
        if (!a || !a.getAttribute('href') || !a.getAttribute('href').includes('google.com')) {
          return "กรุณาสร้างแท็ก <a> ลิงก์ไปยัง https://google.com";
        }
        if (a.getAttribute('target') !== '_blank') {
          return "กรุณาใส่แอตทริบิวต์ target='_blank' เพื่อสั่งให้เปิดลิงก์ในแท็บใหม่";
        }
        return true;
      },
      hints: ["เขียนโครงสร้าง <a href='https://google.com' target='_blank'>ค้นหาข้อมูลเพิ่มเติม</a>"]
    },
    {
      id: "html-images",
      title: "8. รูปภาพและคำอธิบายทางเลือก (Images & Alt)",
      category: "1. HTML Core",
      description: `การดึงรูปภาพภายนอกมาเรนเดอร์ในหน้าเว็บ:
- แท็ก \`<img>\` (เป็นแท็กเดี่ยว ไม่มีแท็กปิด)
- แอตทริบิวต์ \`src\` : ระบุที่อยู่รูปภาพ
- แอตทริบิวต์ \`alt\` : เขียนข้อความบรรยายรูปภาพเพื่อช่วยระบบ SEO และการเข้าถึงของคนตาบอด

**เป้าหมาย:**
ดึงภาพจากลิงก์ \`https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=120\` และระบุแอตทริบิวต์ \`alt="red shoes"\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- แทรกรูปภาพสินค้าที่นี่ -->
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=120" alt="red shoes">
</body>
</html>`,
      targetCss: `img { border-radius: 8px; }`,
      starterCss: `img { border-radius: 8px; }`,
      validation: (doc) => {
        const img = doc.querySelector('img');
        if (!img) return "กรุณาสร้างแท็ก <img> เพื่อดึงรูปภาพมาแสดง";
        if (!img.getAttribute('src') || !img.getAttribute('src').includes('photo')) return "กรุณาใส่ src ลิงก์รูปภาพให้ถูกต้อง";
        if (img.getAttribute('alt') !== 'red shoes') return "ต้องใส่แอตทริบิวต์ alt='red shoes' สำหรับอธิบายรูปภาพสินค้า";
        return true;
      },
      hints: ["พิมพ์ `<img src='https://...' alt='red shoes'>` ห้ามใส่แท็กปิด </img>"]
    },
    {
      id: "html-multimedia",
      title: "9. การฝังไฟล์สื่อมัลติมีเดีย (Video & Audio Elements)",
      category: "1. HTML Core",
      description: `การใส่เสียงและวิดีโอในหน้าเว็บโดยตรง:
- แท็ก \`<video>\` : ควบคุมไฟล์ภาพเคลื่อนไหว
- แอตทริบิวต์ \`controls\` : แสดงปุ่มเล่น หยุด และปรับเสียงบนหน้าเว็บ

**เป้าหมาย:**
สร้างบล็อกเล่นวิดีโอโดยใช้แท็ก \`<video>\` ระบุคุณสมบัติ \`controls\` ให้ผู้ใช้กดเล่นได้ และกำหนดไฟล์วิดีโอไปที่ลิงก์ \`https://www.w3schools.com/html/mov_bbb.mp4\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- ฝังบล็อกเล่นวิดีโอที่นี่ -->
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <video controls src="https://www.w3schools.com/html/mov_bbb.mp4" width="240"></video>
</body>
</html>`,
      targetCss: `body { font-family: sans-serif; }`,
      starterCss: `body { font-family: sans-serif; }`,
      validation: (doc) => {
        const vid = doc.querySelector('video');
        if (!vid) return "กรุณาสร้างแท็ก <video>";
        if (!vid.hasAttribute('controls')) return "กรุณาใส่แอตทริบิวต์ controls เพื่อเปิดแผงเล่นควบคุม";
        if (!vid.getAttribute('src') || !vid.getAttribute('src').includes('.mp4')) return "ระบุ src ลิงก์ไฟล์วิดีโอ .mp4 ให้ถูกต้อง";
        return true;
      },
      hints: ["พิมพ์: `<video controls src='https://www.w3schools.com/html/mov_bbb.mp4' width='240'></video>`"]
    },
    {
      id: "html-inputs",
      title: "10. ช่องรับข้อมูลเบื้องต้น (Basic Form Inputs)",
      category: "1. HTML Core",
      description: `แบบฟอร์ม (\`<form>\`) อาศัยอินพุตในการรับข้อมูลเข้าพิมพ์:
- \`<input type="text">\` : รับข้อความสั้นทั่วไป
- \`<input type="password">\` : ซ่อนข้อมูลพิมพ์เป็นจุดกลมดำ
- ใส่ \`placeholder\` แสดงคำไกด์ข้อมูลในกล่องอินพุต

**เป้าหมาย:**
1. สร้างครอบฟอร์มด้วยแท็ก \`<form>\`
2. สร้างช่อง Username ด้วย \`<input type="text" placeholder="พิมพ์ชื่อผู้ใช้งาน">\`
3. สร้างช่อง Password ด้วย \`<input type="password" placeholder="พิมพ์รหัสผ่าน">\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- สร้างฟอร์มนำเข้าข้อมูลพื้นฐานที่นี่ -->
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <form>
  <input type="text" placeholder="พิมพ์ชื่อผู้ใช้งาน">
  <input type="password" placeholder="พิมพ์รหัสผ่าน">
</form>
</body>
</html>`,
      targetCss: `input { display: block; margin-bottom: 8px; padding: 8px; border-radius: 4px; border: 1px solid #ccc; width: 180px; }`,
      starterCss: `input { display: block; margin-bottom: 8px; padding: 8px; border-radius: 4px; border: 1px solid #ccc; width: 180px; }`,
      validation: (doc) => {
        const form = doc.querySelector('form');
        const user = doc.querySelector('input[type="text"]');
        const pass = doc.querySelector('input[type="password"]');
        if (!form) return "กรุณาสร้างครอบฟอร์มด้วยแท็ก <form>";
        if (!user || !user.placeholder) return "กรุณาสร้าง input ประเภท text พร้อมระบุ placeholder";
        if (!pass || !pass.placeholder) return "กรุณาสร้าง input ประเภท password พร้อมระบุ placeholder";
        return true;
      },
      hints: ["ครอบด้วย <form> และใส่อินพุตสองประเภท <input type='text'> และ <input type='password'>"]
    },
    {
      id: "html-radios",
      title: "11. ปุ่มวิทยุและกล่องเลือกตัวเลือก (Radios & Checkboxes)",
      category: "1. HTML Core",
      description: `- \`<input type="radio">\` : ปุ่มเลือกตัวเลือกที่มีสิทธิเลือกได้แค่ข้อเดียวจากกลุ่ม (ใช้ \`name\` กลุ่มเดียวกัน)
- \`<input type="checkbox">\` : กล่องติ๊กถูก เลือกตัวเลือกได้หลายอย่างอิสระ

**เป้าหมาย:**
1. สร้างกลุ่ม Radio เลือกเพศ มี 2 ปุ่มโดยกำหนด \`name="gender"\` เขียนข้อความ "ชาย" และ "หญิง" กำกับหลังช่องแต่ละปุ่ม
2. สร้าง Checkbox สำหรับกติกาสัญญา มี 1 กล่องระบุคำว่า "ยอมรับข้อตกลง"`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- สร้างกลุ่มเลือกข้อมูลที่นี่ -->
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <label><input type="radio" name="gender"> ชาย</label>
<label><input type="radio" name="gender"> หญิง</label>
<br>
<label><input type="checkbox"> ยอมรับข้อตกลง</label>
</body>
</html>`,
      targetCss: `body { font-family: sans-serif; padding: 20px; line-height: 1.6; }`,
      starterCss: `body { font-family: sans-serif; padding: 20px; line-height: 1.6; }`,
      validation: (doc) => {
        const radios = doc.querySelectorAll('input[type="radio"]');
        const checkbox = doc.querySelector('input[type="checkbox"]');
        if (radios.length < 2) return "สร้างอินพุตวิทยุ (radio) อย่างน้อย 2 ตัวเลือก";
        if (radios[0].name !== 'gender' || radios[1].name !== 'gender') return "ปุ่มวิทยุทั้งคู่ต้องผูกกลุ่มเดียวกันโดยตั้ง name='gender'";
        if (!checkbox) return "สร้างกล่องติ๊กถูกกติกาสัญญา (checkbox)";
        return true;
      },
      hints: ["ใช้ `<input type='radio' name='gender'>` และ `<input type='checkbox'>` ในการออกแบบสเตท"]
    },
    {
      id: "html-selects",
      title: "12. เมนูเลือกและช่องพิมพ์คำบรรยาย (Dropdown Select & Textarea)",
      category: "1. HTML Core",
      description: `การรับข้อมูลตัวเลือกขนาดใหญ่หรือย่อหน้ายาวๆ:
- \`<select>\` และ \`<option>\` : สร้างรายการ Dropdown เลือกเมนูช้อยส์
- \`<textarea>\` : ช่องพิมพ์ขนาดใหญ่เพื่อพิมพ์ข้อมูลข้อความยาวหลายบรรทัด

**เป้าหมาย:**
1. สร้างเมนูเลือกจังหวัด \`<select>\` มีตัวเลือก \`<option>\` สองข้อ: "กรุงเทพฯ" และ "เชียงใหม่"
2. สร้างช่องพิมพ์คำบรรยายเพิ่มเติมประวัติ \`<textarea placeholder="ประวัติย่อ..."></textarea>\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- สร้างตัวเลือกและช่องพิมพ์คำบรรยายด้านล่างนี้ -->
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <select>
  <option>กรุงเทพฯ</option>
  <option>เชียงใหม่</option>
</select>
<br><br>
<textarea placeholder="ประวัติย่อ..."></textarea>
</body>
</html>`,
      targetCss: `select, textarea { padding: 8px; border-radius: 4px; font-family: sans-serif; display: block; margin-bottom: 10px; width: 200px; }`,
      starterCss: `select, textarea { padding: 8px; border-radius: 4px; font-family: sans-serif; display: block; margin-bottom: 10px; width: 200px; }`,
      validation: (doc) => {
        const select = doc.querySelector('select');
        const options = doc.querySelectorAll('select option');
        const textarea = doc.querySelector('textarea');
        
        if (!select || options.length < 2) return "กรุณาสร้างรายการตัวเลือก <select> และมีอย่างน้อย 2 ตัวเลือกย่อย <option>";
        if (!textarea) return "กรุณาสร้างช่องพิมพ์ข้อความบรรยายขนาดใหญ่ด้วยแท็ก <textarea>";
        return true;
      },
      hints: ["พิมพ์เมนูกลุ่มตัวเลือก <select> คู่กับ <option> และสร้างบล็อกป้อนข้อมูลอิสระ <textarea>"]
    },
    {
      id: "html-inputs-advanced",
      title: "14. กล่องรับข้อมูลเฉพาะทาง HTML5 (Advanced Input Types)",
      category: "1. HTML Core",
      description: `เรียนรู้การใช้งานช่องรับข้อมูลประเภทเฉพาะทางใน HTML5 โดยระบุที่แอตทริบิวต์ \`type\` เพื่อเปลี่ยนพฤติกรรมอินเตอร์เฟสของเบราว์เซอร์ให้สอดคล้องกับข้อมูล:
1. **ช่องกรอกตัวเลข (\`type="number"\`)** : คีย์เฉพาะตัวเลข มีลูกศรปรับค่าขึ้น-ลง สามารถควบคุมขอบเขตด้วย \`min\`, \`max\`
2. **ช่องเลือกวันที่ (\`type="date"\`)** : แสดงปฏิทินให้คลิกเลือกวัน-เดือน-ปี
3. **ช่องระดับสเกลแถบเลื่อน (\`type="range"\`)** : แถบเลื่อนปรับค่า สามารถตั้งค่า \`min\`, \`max\`, และค่าเริ่มต้น \`value\`
4. **ช่องเลือกพาเลทสี (\`type="color"\`)** : กล่องคลิกเปิดแถบจานสีเลือกสี

**เป้าหมาย:**
สร้างฟอร์มส่งข้อมูลที่มีช่องรับข้อมูลดังนี้ภายในแท็ก \`<body>\`:
1. ช่องระบุอายุเป็น **ตัวเลข** (\`type="number"\`) โดยระบุค่าต่ำสุดเป็น \`1\` และสูงสุดเป็น \`100\` (\`min="1" max="100"\`)
2. ช่องระบุวันเกิดเป็น **วันที่** (\`type="date"\`)
3. ช่องระดับความพึงพอใจเป็น **แถบเลื่อน** (\`type="range"\`) กำหนดจาก \`1\` ถึง \`5\` และมีค่าเริ่มต้นเป็น \`3\` (\`min="1" max="5" value="3"\`)
4. ช่องเลือกธีมสีส่วนตัวเป็น **จานเลือกสี** (\`type="color"\`)`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <form>
    <!-- เริ่มพิมพ์ช่องรับข้อมูลเฉพาะทางที่นี่ -->
    
  </form>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <form>
    <label>อายุ: <input type="number" min="1" max="100" required></label>
    <br><br>
    <label>วันเกิด: <input type="date" required></label>
    <br><br>
    <label>ความพึงพอใจ: <input type="range" min="1" max="5" value="3"></label>
    <br><br>
    <label>ธีมสี: <input type="color"></label>
  </form>
</body>
</html>`,
      starterCss: `form { font-family: sans-serif; padding: 20px; }`,
      targetCss: `form { font-family: sans-serif; padding: 20px; }`,
      validation: (doc) => {
        const num = doc.querySelector('input[type="number"]');
        const date = doc.querySelector('input[type="date"]');
        const range = doc.querySelector('input[type="range"]');
        const color = doc.querySelector('input[type="color"]');

        if (!num) return "กรุณาสร้างช่องระบุตัวเลข input[type='number']";
        if (num.getAttribute('min') !== '1' || num.getAttribute('max') !== '100') {
          return "กรุณากำหนดแอตทริบิวต์ min='1' และ max='100' ให้ช่องตัวเลข";
        }
        if (!date) return "กรุณาสร้างช่องเลือกวันที่ input[type='date']";
        if (!range) return "กรุณาสร้างแถบเลื่อนระดับ input[type='range']";
        if (range.getAttribute('min') !== '1' || range.getAttribute('max') !== '5' || range.getAttribute('value') !== '3') {
          return "กรุณากำหนด min='1' max='5' และ value='3' ให้ช่องแถบเลื่อน";
        }
        if (!color) return "กรุณาสร้างกล่องเลือกสี input[type='color']";
        return true;
      },
      hints: [
        "เขียนอินพุตระบุประเภทดังนี้: <input type='number' min='1' max='100'>",
        "<input type='date'>",
        "<input type='range' min='1' max='5' value='3'>",
        "<input type='color'>"
      ]
    },

    // --- หมวดใหญ่ 2: Semantic HTML (4 บทเรียนย่อย) ---
    {
      id: "html-div-span",
      title: "14. การแบ่งหมวดด้วยกล่องสี่เหลี่ยม (Block Div vs Inline Span)",
      category: "2. Semantic HTML",
      description: `กล่องจัดวางอิลิเมนต์มีพื้นฐานที่พฤติกรรมแนวนอนต่างกัน:
- \`<div>\` (Block) : คุมพื้นที่แถวกว้างเต็มจอ และบังคับตัดขึ้นบรรทัดใหม่
- \`<span>\` (Inline) : คุมเนื้อหาเจาะจงเฉพาะตัวอักษร ไม่บังคับขึ้นแถวใหม่

**เป้าหมาย:**
สร้างกล่องแม่ \`<div>\` คลาส \`.wrap\` และใส่ตัวอักษรเจาะจงเน้นภายในโดยใช้แท็ก \`<span>\` คลาส \`.highlight\` เขียนคำว่า "ยอดเยี่ยม"`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- จัดกลุ่มข้อความด้วย div และ span ที่นี่ -->
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="wrap">
  คุณทำผลงานได้ <span class="highlight">ยอดเยี่ยม</span> มากวันนี้!
</div>
</body>
</html>`,
      targetCss: `.wrap { padding: 20px; background: #f8fafc; border-radius: 8px; font-family: sans-serif; }
.highlight { color: #e11d48; font-weight: bold; }`,
      starterCss: `.wrap { padding: 20px; background: #f8fafc; border-radius: 8px; font-family: sans-serif; }
.highlight { color: #e11d48; font-weight: bold; }`,
      validation: (doc) => {
        const div = doc.querySelector('.wrap');
        const span = doc.querySelector('.highlight');
        if (!div) return "ไม่พบกล่องแม่ที่มีคลาส .wrap";
        if (!span || !span.textContent.includes("ยอดเยี่ยม")) return "ไม่พบแท็กคำเจาะจง <span> ที่มีคลาส .highlight";
        return true;
      },
      hints: ["ครอบความกว้างด้วย `<div class='wrap'>...<span class='highlight'>ยอดเยี่ยม</span>...</div>`"]
    },
    {
      id: "html-layout-semantics",
      title: "15. โครงสร้างความหมายหลัก (Semantic Layout Structure)",
      category: "2. Semantic HTML",
      description: `การกำหนดเลย์เอาต์หน้าต่างหลักเชิงความหมายระดับมหาวิทยาลัย:
- \`<header>\` : แถบส่วนหัว
- \`<nav>\` : แถบลิงก์เมนูนำทาง
- \`<main>\` : เนื้อหาหลักแกนกลางของเอกสาร
- \`<footer>\` : แถบระบุลิขสิทธิ์และประวัติสั้นๆ ด้านล่างสุด

**เป้าหมาย:**
เขียนจัดแบ่งหมวดหน้าเว็บเพจเปล่าเชิงความหมาย โดยสร้างแท็ก \`<header>\`, \`<nav>\`, \`<main>\` และ \`<footer>\` เรียงจากบนลงล่างให้ครบถ้วน`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- เริ่มเขียนแท็กเชิงโครงสร้างนำทางเชิงความหมายที่นี่ -->
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <header>หัวข้อและโลโก้หลัก</header>
<nav>เมนูลิงก์เว็บเพจ</nav>
<main>เนื้อหาข้อมูลสถิติประมวลผลหลัก</main>
<footer>ลิขสิทธิ์ข้อมูลระบบ © 2026</footer>
</body>
</html>`,
      targetCss: `header, nav, main, footer { padding: 12px; margin-bottom: 6px; font-family: sans-serif; border-radius: 4px; }
header { background: #cbd5e1; }
nav { background: #cbd5e1; }
main { background: #cbd5e1; min-height: 60px; }
footer { background: #cbd5e1; font-size: 12px; }`,
      starterCss: `header, nav, main, footer { padding: 12px; margin-bottom: 6px; font-family: sans-serif; border-radius: 4px; }
header { background: #cbd5e1; }
nav { background: #cbd5e1; }
main { background: #cbd5e1; min-height: 60px; }
footer { background: #cbd5e1; font-size: 12px; }`,
      validation: (doc) => {
        if (!doc.querySelector('header')) return "กรุณาใส่แท็ก <header>";
        if (!doc.querySelector('nav')) return "กรุณาใส่แท็ก <nav>";
        if (!doc.querySelector('main')) return "กรุณาใส่แท็ก <main>";
        if (!doc.querySelector('footer')) return "กรุณาใส่แท็ก <footer>";
        return true;
      },
      hints: ["พิมพ์จัดส่วนประกอบหลัก `<header></header>`, `<nav></nav>`, `<main></main>`, และ `<footer></footer>`"]
    },
    {
      id: "html-content-semantics",
      title: "16. การจัดเนื้อหาบทความย่อย (Section, Article & Aside)",
      category: "2. Semantic HTML",
      description: `การจำแนกเนื้อหาย่อยภายในพื้นที่หน้าจอหลัก:
- \`<section>\` : จัดสัดส่วนกลุ่มหัวข้อใหญ่
- \`<article>\` : กลุ่มบล็อกเนื้อหาที่เป็นบทความข่าวสารหรือบล็อกโพสต์ที่เป็นเอกเทศ
- \`<aside>\` : ข้อมูลส่วนเกินขอบหน้าจอที่เป็นพวกเมนู คีย์ข้อมูล หรือโฆษณาแนะนำข้างๆ

**เป้าหมาย:**
1. สร้างกลุ่มหลัก \`<section>\`
2. ภายในส่วนนี้สร้างบล็อกโพสต์บทความข่าวสาร \`<article>\` เขียนรายละเอียดว่า "บทความเรียน CSS"
3. สร้างแท็บข้อแนะนำขอบข้าง \`<aside>\` เขียนรายละเอียดว่า "ลิงก์สนับสนุนย่อย"`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- สไตล์จัดเนื้อหากลุ่มย่อย Semantic ที่นี่ -->
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <section>
  <article>บทความเรียน CSS</article>
  <aside>ลิงก์สนับสนุนย่อย</aside>
</section>
</body>
</html>`,
      targetCss: `body { font-family: sans-serif; }
section { border: 1px solid #ccc; padding: 15px; }
article { background: #f8fafc; padding: 10px; margin-bottom: 5px; }
aside { color: #64748b; font-size: 13px; }`,
      starterCss: `body { font-family: sans-serif; }
section { border: 1px solid #ccc; padding: 15px; }
article { background: #f8fafc; padding: 10px; margin-bottom: 5px; }
aside { color: #64748b; font-size: 13px; }`,
      validation: (doc) => {
        if (!doc.querySelector('section')) return "ขาดแท็กจัดสัดส่วนใหญ่ <section>";
        if (!doc.querySelector('article')) return "ขาดแท็กระบุบทความ <article>";
        if (!doc.querySelector('aside')) return "ขาดแท็กคอลัมน์ข้างย่อย <aside>";
        return true;
      },
      hints: ["ครอบด้วย <section> ข้างในมี <article> และ <aside>"]
    },
    {
      id: "html-details-summary",
      title: "19. กล่องคำถามพับยืดหดไร้ JS (Interactive Details & Summary)",
      category: "2. Semantic HTML",
      description: `เรียนรู้การสร้างโครงสร้างแบบพับเปิด-ปิดเนื้อหาได้ด้วยตัวเอง (Accordion) โดยใช้เพียงแท็กมาตรฐาน HTML5 แท้ ๆ ไม่ต้องพึ่งพาโค้ด JavaScript:
1. **แท็กแม่ครอบสปริง (\`<details>\`)** : ทำหน้าที่เป็นกล่องสไลด์พับ ซึ่งหากมีแอตทริบิวต์ \`open\` จะเปิดเผยเนื้อหาด้านในโดยเริ่มต้น
2. **แท็กหัวเรื่องปุ่มคลิก (\`<summary>\`)** : ทำหน้าที่เป็นข้อความหัวเรื่องหลักที่แสดงให้เห็นตลอดเวลา และเมื่อคลิกจะสลับสภาวะเปิด-ปิด
3. **เนื้อหาเสริมภายใน** : บรรจุแท็ก \`<p>\`, \`<img>\` หรืออะไรก็ได้ ซึ่งจะถูกซ่อนไว้เบื้องหลังหัวข้อ และโผล่แสดงเมื่อกดสลับเปิด

**เป้าหมาย:**
สร้างกล่องคำถามพบบ่อย (FAQ Accordion) ภายใน \`<body>\` ดังนี้:
1. สร้างแท็ก \`<details>\` ครอบเนื้อหาคำถาม-คำตอบ
2. ด้านในแท็กรายละเอียด ให้ใส่หัวเรื่องหลักด้วยแท็ก \`<summary>\` เขียนข้อความว่า "คำถาม: คอร์สเรียนนี้จำกัดเวลาเรียนไหม?"
3. ใส่เนื้อหาอธิบายคำตอบในบรรทัดถัดไปโดยใช้แท็ก \`<p>\` เขียนคำตอบว่า "คำตอบ: เข้าเรียนได้ตลอดชีพ ไม่มีวันหมดอายุครับ"`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- พิมพ์แท็ก details และ summary ที่นี่ -->
  
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <details>
    <summary>คำถาม: คอร์สเรียนนี้จำกัดเวลาเรียนไหม?</summary>
    <p>คำตอบ: เข้าเรียนได้ตลอดชีพ ไม่มีวันหมดอายุครับ</p>
  </details>
</body>
</html>`,
      starterCss: `details { font-family: sans-serif; padding: 10px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; width: 320px; }
summary { font-weight: bold; cursor: pointer; padding: 5px; outline: none; }
p { margin: 10px 0 0 0; padding: 5px; color: #475569; font-size: 14px; line-height: 1.5; }`,
      targetCss: `details { font-family: sans-serif; padding: 10px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; width: 320px; }
summary { font-weight: bold; cursor: pointer; padding: 5px; outline: none; }
p { margin: 10px 0 0 0; padding: 5px; color: #475569; font-size: 14px; line-height: 1.5; }`,
      validation: (doc) => {
        const details = doc.querySelector('details');
        const summary = doc.querySelector('summary');
        const p = doc.querySelector('details p');

        if (!details) return "กรุณาสร้างกล่องหลักด้วยแท็ก <details>";
        if (!summary) return "กรุณาสร้างหัวเรื่องข้อความด้วยแท็ก <summary> ด้านในแท็ก <details>";
        if (!summary.textContent.includes("จำกัดเวลาเรียนไหม")) {
          return "กรุณาพิมพ์ข้อความคำถามใน <summary> ให้ตรงสเปก";
        }
        if (!p) return "กรุณาใส่แท็กคำตอบ <p> ไว้ใต้หัวเรื่องภายในแท็ก <details>";
        if (!p.textContent.includes("เข้าเรียนได้ตลอดชีพ")) {
          return "กรุณาพิมพ์ข้อความคำตอบ in <p> ให้ตรงสเปก";
        }
        return true;
      },
      hints: ["พิมพ์: <details><summary>คำถาม: คอร์สเรียนนี้จำกัดเวลาเรียนไหม?</summary><p>คำตอบ: เข้าเรียนได้ตลอดชีพ ไม่มีวันหมดอายุครับ</p></details>"]
    },

    // --- หมวดใหญ่ 3: CSS Basics (10 บทเรียนย่อย) ---
    {
      id: "css-selectors",
      title: "18. ตัวเลือกเป้าหมายสไตล์ (CSS Selectors Syntax)",
      category: "3. CSS Basics",
      description: `การเชื่อมโยงแต่งสไตล์ในจุดต่างๆ:
- Tag Name Selector : \`h1\`
- Class Selector : \`.คลาส\`
- ID Selector : \`#ไอดี\`

**เป้าหมาย:**
1. ตกแต่งหัวข้อ \`<h1>\` ทั้งหมดให้กลายเป็นสีเขียวสว่าง \`#10b981\`
2. ตกแต่งคลาส \`.error\` ให้มีอักษรหนา (\`font-weight: bold;\`)
3. ตกแต่งไอดีเดี่ยว \`#footer-copyright\` ให้เป็นสีเทาอ่อน \`#94a3b8\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <h1>หัวข้อเป้าหมาย</h1>
<p class="error">ผิดพลาดกรอกข้อมูล</p>
<p id="footer-copyright">สงวนลิขสิทธิ์</p>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <h1>หัวข้อเป้าหมาย</h1>
<p class="error">ผิดพลาดกรอกข้อมูล</p>
<p id="footer-copyright">สงวนลิขสิทธิ์</p>
</body>
</html>`,
      targetCss: `h1 { color: #10b981; }
.error { font-weight: bold; }
#footer-copyright { color: #94a3b8; }`,
      starterCss: `/* 1. แต่ง Tag Selector h1 ให้เป็นสีเขียว */


/* 2. แต่ง Class Selector .error ให้หนา */


/* 3. แต่ง ID Selector #footer-copyright ให้เป็นสีเทา */
`,
      validation: (doc, cssText) => {
        const h1 = doc.querySelector('h1');
        const err = doc.querySelector('.error');
        const foot = doc.querySelector('#footer-copyright');
        
        if (!h1 || !err || !foot) return "โครงสร้าง HTML ไม่สมบูรณ์";
        const hStyle = doc.defaultView.getComputedStyle(h1);
        const eStyle = doc.defaultView.getComputedStyle(err);
        const fStyle = doc.defaultView.getComputedStyle(foot);
        
        if (hStyle.color !== 'rgb(16, 185, 129)') return "สไตล์ h1 ต้องเปลี่ยนเป็นสีเขียวสว่าง #10b981";
        if (eStyle.fontWeight !== 'bold' && eStyle.fontWeight !== '700') return "สไตล์ .error ต้องกำหนด font-weight: bold;";
        if (fStyle.color !== 'rgb(148, 163, 184)') return "สไตล์ไอดี #footer-copyright ต้องเป็นสีเทา #94a3b8";
        return true;
      },
      hints: ["พิมพ์ h1 { color: #10b981; }", "พิมพ์ .error { font-weight: bold; }", "พิมพ์ #footer-copyright { color: #94a3b8; }"]
    },
    {
      id: "css-colors",
      title: "19. การเล่นสีและเงาตัวอักษร (Colors, BG & Shadow Styling)",
      category: "3. CSS Basics",
      description: `การตกแต่งสีสันและเงาเพื่อเพิ่มความทันสมัยพรีเมียม:
- \`color\` : สีตัวอักษร
- \`background-color\` : สีพื้นหลัง
- \`text-shadow\` : การใส่เงาตัวอักษรฟอนต์ เช่น \`2px 2px 4px rgba(0,0,0,0.1)\`

**เป้าหมาย:**
ตกแต่งกล่องคลาส \`.banner\` ดังนี้:
1. กำหนดสไตล์สีตัวหนังสือเป็นสีขาว (\`#ffffff\`)
2. ใส่สีพื้นหลังเป็นน้ำเงินคราม (\`#3b82f6\`)
3. ใส่เงาตัวอักษร \`text-shadow: 2px 2px 4px rgba(0,0,0,0.3);\` เพื่อยกระดับความหรูหรา`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="banner">สถาบัน WebDev Academy</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="banner">สถาบัน WebDev Academy</div>
</body>
</html>`,
      targetCss: `.banner {
  padding: 30px;
  font-family: sans-serif;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  background-color: #3b82f6;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}`,
      starterCss: `.banner {
  padding: 30px;
  font-family: sans-serif;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  /* 1. สีตัวหนังสือขาว */
  
  /* 2. สีพื้นหลังน้ำเงิน #3b82f6 */
  
  /* 3. เงาตัวอักษร text-shadow */
  
}`,
      validation: (doc) => {
        const banner = doc.querySelector('.banner');
        if (!banner) return "ไม่พบคลาส .banner";
        const style = doc.defaultView.getComputedStyle(banner);
        
        if (style.color !== 'rgb(255, 255, 255)') return "กรุณากำหนดสีตัวหนังสือใน .banner ให้เป็นสีขาว #ffffff";
        if (style.backgroundColor !== 'rgb(59, 130, 246)') return "กรุณากำหนด background-color เป็น #3b82f6";
        if (!style.textShadow || style.textShadow === 'none') return "กรุณาใส่ค่าเงาฟอนต์ text-shadow ตามเป้าหมาย";
        return true;
      },
      hints: ["พิมพ์ `color: #ffffff;`, `background-color: #3b82f6;`, และ `text-shadow: 2px 2px 4px rgba(0,0,0,0.3);`"]
    },
    {
      id: "css-fonts",
      title: "20. รูปแบบตัวอักษรเชิงลึก (Font Styles & Line Spacing)",
      category: "3. CSS Basics",
      description: `ตกแต่งความสวยงามของข้อความบทความระดับวิชาการ:
- \`font-size\` : ขนาดความกว้างยาวของตัวอักษร
- \`line-height\` : ระยะห่างระหว่างบรรทัด (แนะนำค่า \`1.6\` หรือ \`1.8\` เพื่อให้อ่านง่าย สบายตา)
- \`letter-spacing\` : ระยะห่างระหว่างตัวอักษรแต่ละตัว เช่น \`1px\` หรือ \`2px\`

**เป้าหมาย:**
ตกแต่งกล่องคลาส \`.content-text\` ดังนี้:
1. กำหนดขนาดฟอนต์เป็น \`18px\`
2. กำหนดระยะบรรทัด \`line-height\` เป็น \`1.8\`
3. กำหนดความห่างตัวอักษร \`letter-spacing\` เป็น \`1px\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <p class="content-text">CSS3 มีความสามารถสูงในการจัดรูปแบบตัวหนังสือให้มีความสวยงาม อ่านง่าย และเหมาะสำหรับหน้าจอขนาดต่างๆ ทั่วไป</p>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <p class="content-text">CSS3 มีความสามารถสูงในการจัดรูปแบบตัวหนังสือให้มีความสวยงาม อ่านง่าย และเหมาะสำหรับหน้าจอขนาดต่างๆ ทั่วไป</p>
</body>
</html>`,
      targetCss: `.content-text {
  font-family: sans-serif;
  font-size: 18px;
  line-height: 1.8;
  letter-spacing: 1px;
}`,
      starterCss: `.content-text {
  font-family: sans-serif;
  /* 1. ขนาดตัวอักษร */
  
  /* 2. ระยะห่างระหว่างบรรทัด */
  
  /* 3. ระยะห่างช่องว่างตัวหนังสือ */
  
}`,
      validation: (doc) => {
        const text = doc.querySelector('.content-text');
        if (!text) return "ไม่พบคลาส .content-text";
        const style = doc.defaultView.getComputedStyle(text);
        
        if (style.fontSize !== '18px') return "ขนาดฟอนต์ของเนื้อหาต้องเท่ากับ 18px";
        if (style.lineHeight !== '1.8' && style.lineHeight !== '32.4px') return "กำหนดค่า line-height เป็น 1.8 เพื่อความสบายตา";
        if (style.letterSpacing !== '1px') return "กำหนดค่า letter-spacing เป็น 1px";
        return true;
      },
      hints: ["ระบุสไตล์: `font-size: 18px; line-height: 1.8; letter-spacing: 1px;`"]
    },
    {
      id: "css-box-padding",
      title: "21. กล่องและระยะห่างในกล่อง (Box Model - Width & Padding)",
      category: "3. CSS Basics",
      description: `การตั้งความกว้างและการเว้นระยะห่างด้านในเพื่อไม่ให้กล่องดูอึดอัดเกินไป:
- \`width\` : ขนาดความกว้าง
- \`padding\` : ระยะเว้นช่องไฟภายในกรอบขอบกล่อง
- \`box-sizing: border-box;\` : สั่งให้กล่องควบคุมรวมความกว้างไม่ให้ล้นออกนอกตัวเลขพิกเซล

**เป้าหมาย:**
ตกแต่งกล่องคลาส \`.box\` ดังนี้:
1. ตั้งความกว้างเป็น \`260px\`
2. เว้นระยะห่างภายในตัวหนังสือกับเส้นขอบทุกด้าน (\`padding\`) เป็น \`25px\`
3. ล็อกโครงสร้างกล่องไม่ให้บวมออกด้วย \`box-sizing: border-box;\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="box">กล่องสี่เหลี่ยมจัดสเกล</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="box">กล่องสี่เหลี่ยมจัดสเกล</div>
</body>
</html>`,
      targetCss: `.box {
  width: 260px;
  padding: 25px;
  background-color: #f1f5f9;
  border: 1px solid #cbd5e1;
  box-sizing: border-box;
  font-family: sans-serif;
}`,
      starterCss: `.box {
  background-color: #f1f5f9;
  border: 1px solid #cbd5e1;
  font-family: sans-serif;
  /* 1. ตั้งความกว้าง 260px */
  
  /* 2. ตั้งค่าระยะห่างภายใน 25px */
  
  /* 3. ล็อกโครงสร้างกล่องกลมกลืน */
  
}`,
      validation: (doc) => {
        const box = doc.querySelector('.box');
        if (!box) return "ไม่พบคลาส .box";
        const style = doc.defaultView.getComputedStyle(box);
        
        const widthVal = parseFloat(style.width);
        const paddingVal = parseFloat(style.paddingTop || style.padding);
        if (isNaN(widthVal) || Math.round(widthVal) !== 260) return "กำหนดความกว้างเป็น 260px";
        if (isNaN(paddingVal) || Math.round(paddingVal) !== 25) return "กำหนด padding รอบด้านเป็น 25px";
        if (style.boxSizing !== 'border-box') return "กำหนดกล่องเป็น box-sizing: border-box;";
        return true;
      },
      hints: ["พิมพ์ `width: 260px;`, `padding: 25px;`, และ `box-sizing: border-box;`"]
    },
    {
      id: "css-box-margin",
      title: "22. กล่องและระยะห่างนอกกล่อง (Box Model - Margin & Border)",
      category: "3. CSS Basics",
      description: `การจัดขอบมนและการเว้นช่องไฟเพื่อเว้นระยะห่างจากกล่องตัวตนอื่นๆ รอบข้าง:
- \`margin\` : ระยะขยายช่องไฟรอบกล่องด้านนอก เพื่อไม่ให้กล่องชนกัน
- \`border\` : สีกรอบเส้นและรูปแบบ (\`border: 2px solid #3b82f6;\`)
- \`border-radius\` : ควบคุมความมนของมุมกล่องให้สวยมน

**เป้าหมาย:**
ตกแต่งกล่องคลาส \`.element\` ดังนี้:
1. ใส่ขอบมนโค้ง (\`border-radius\`) เป็น \`16px\`
2. ลากกรอบเป็นเส้นขอบหนา \`3px\` ชนิดทึบสีน้ำเงินเข้ม (\`#1e3a8a\`)
3. เว้นช่องว่างนอกกล่องด้านล่าง (\`margin-bottom\`) เป็น \`30px\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="element">การ์ดของขวัญพิเศษ</div>
<div style="background-color: #eee; height: 10px; width: 100px;"></div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="element">การ์ดของขวัญพิเศษ</div>
<div style="background-color: #eee; height: 10px; width: 100px;"></div>
</body>
</html>`,
      targetCss: `.element {
  padding: 15px;
  background-color: #eff6ff;
  font-family: sans-serif;
  border-radius: 16px;
  border: 3px solid #1e3a8a;
  margin-bottom: 30px;
}`,
      starterCss: `.element {
  padding: 15px;
  background-color: #eff6ff;
  font-family: sans-serif;
  /* 1. สไตล์ขอบมน */
  
  /* 2. สไตล์สีกรอบและขนาดขอบ */
  
  /* 3. ระยะเว้นขอบนอกด้านล่าง margin-bottom */
  
}`,
      validation: (doc) => {
        const el = doc.querySelector('.element');
        if (!el) return "ไม่พบคลาส .element";
        const style = doc.defaultView.getComputedStyle(el);
        
        if (style.borderRadius !== '16px') return "กรุณาใส่ขอบโค้งมน border-radius: 16px;";
        const bWidth = parseFloat(style.borderTopWidth || style.borderWidth);
        if (isNaN(bWidth) || Math.round(bWidth) !== 3 || (!style.borderColor.includes('138') && !style.borderColor.includes('30'))) {
          return "กรุณาใส่ขอบหนา 3px และใช้สีน้ำเงินเข้ม #1e3a8a";
        }
        if (style.marginBottom !== '30px') return "กรุณากำหนดระยะห่างภายนอกด้านล่าง margin-bottom: 30px;";
        return true;
      },
      hints: ["พิมพ์ `border-radius: 16px;`, `border: 3px solid #1e3a8a;`, และ `margin-bottom: 30px;`"]
    },
    {
      id: "css-display-property",
      title: "30. รูปแบบการแสดงผลอิลิเมนต์ (CSS Display Property)",
      category: "3. CSS Basics",
      description: `การกำหนดพฤติกรรมการแสดงผลและการจองพื้นที่ของกล่องอิลิเมนต์ด้วยคุณสมบัติ \`display\`:
- \`display: block;\` : กล่องจะกินพื้นที่เต็มความกว้างแนวนอน และบังคับตัวถัดไปขึ้นบรรทัดใหม่เสมอ (เช่น \`<div>\`, \`<p>\`, \`<h1>\`)
- \`display: inline;\` : กล่องจะไหลต่อเนื่องตามตัวหนังสือ ไม่ขึ้นบรรทัดใหม่ และไม่สามารถระบุความกว้าง (\`width\`) หรือความสูง (\`height\`) ได้ (เช่น \`<span>\`, \`<a>\`, \`<strong>\`)
- \`display: inline-block;\` : ไหลแนวนอนตามข้อความเหมือน inline แต่สามารถระบุขนาดความกว้าง ความสูง และระยะขอบได้อย่างสมบูรณ์ (เช่น \`<button>\`, \`<img>\`)
- \`display: none;\` : สั่งซ่อนองค์ประกอบอย่างสมบูรณ์และนำออกจากเลย์เอาต์ (ไม่กินพื้นที่หน้าจอเลย)

**เป้าหมาย:**
1. กำหนดให้กล่อง \`.box-block\` แสดงผลเป็น \`block\`
2. กำหนดให้กล่อง \`.box-inline-block\` แสดงผลเป็น \`inline-block\` และปรับขนาดความกว้างเป็น \`120px\`
3. กำหนดให้กล่อง \`.box-none\` ซ่อนตัวล่องหนไปจากหน้าจอด้วย \`none\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="box-block">1. กล่องแบบ Block (กินเต็มแถว)</div>
  <div class="box-inline-block">2. กล่องย่อย A</div>
  <div class="box-inline-block">2. กล่องย่อย B</div>
  <div class="box-none">3. กล่องนี้ควรจะล่องหนไป</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="box-block">1. กล่องแบบ Block (กินเต็มแถว)</div>
  <div class="box-inline-block">2. กล่องย่อย A</div>
  <div class="box-inline-block">2. กล่องย่อย B</div>
  <div class="box-none">3. กล่องนี้ควรจะล่องหนไป</div>
</body>
</html>`,
      targetCss: `.box-block {
  background-color: #3b82f6;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  font-family: sans-serif;
  border-radius: 4px;
  display: block;
}
.box-inline-block {
  background-color: #10b981;
  color: white;
  padding: 10px;
  font-family: sans-serif;
  border-radius: 4px;
  display: inline-block;
  width: 120px;
  text-align: center;
}
.box-none {
  background-color: #ef4444;
  color: white;
  padding: 10px;
  font-family: sans-serif;
  display: none;
}`,
      starterCss: `.box-block {
  background-color: #3b82f6;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  font-family: sans-serif;
  border-radius: 4px;
  /* 1. กำหนดรูปแบบการแสดงผลเป็น block */
  
}
.box-inline-block {
  background-color: #10b981;
  color: white;
  padding: 10px;
  font-family: sans-serif;
  border-radius: 4px;
  text-align: center;
  /* 2. กำหนดรูปแบบการแสดงผลเป็น inline-block และความกว้าง 120px */
  
}
.box-none {
  background-color: #ef4444;
  color: white;
  padding: 10px;
  font-family: sans-serif;
  /* 3. กำหนดรูปแบบการแสดงผลเป็น none เพื่อสั่งซ่อน */
  
}`,
      validation: (doc) => {
        const block = doc.querySelector('.box-block');
        const inlineBlocks = doc.querySelectorAll('.box-inline-block');
        const hidden = doc.querySelector('.box-none');

        if (!block || inlineBlocks.length < 2 || !hidden) return "กรุณาห้ามลบแท็กใน HTML ดั้งเดิม";

        const styleBlock = doc.defaultView.getComputedStyle(block);
        const styleInlineBlock1 = doc.defaultView.getComputedStyle(inlineBlocks[0]);
        const styleInlineBlock2 = doc.defaultView.getComputedStyle(inlineBlocks[1]);
        const styleHidden = doc.defaultView.getComputedStyle(hidden);

        if (styleBlock.display !== 'block') return "กรุณากำหนดให้ .box-block มี display: block;";
        if (styleInlineBlock1.display !== 'inline-block' || styleInlineBlock2.display !== 'inline-block') {
          return "กรุณากำหนดให้ .box-inline-block มี display: inline-block;";
        }
        if (styleInlineBlock1.width !== '120px' || styleInlineBlock2.width !== '120px') {
          return "กรุณากำหนดความกว้าง width: 120px; ให้กับคลาส .box-inline-block";
        }
        if (styleHidden.display !== 'none') return "กรุณากำหนดให้ .box-none มี display: none; เพื่อซ่อนกล่อง";
        return true;
      },
      hints: [
        "คลาส `.box-block` ใช้ `display: block;`",
        "คลาส `.box-inline-block` ใช้ `display: inline-block; width: 120px;`",
        "คลาส `.box-none` ใช้ `display: none;`"
      ]
    },
    {
      id: "css-border-radius-advanced",
      title: "31. ความโค้งมนและมุมย่อย (Advanced Border Radius)",
      category: "3. CSS Basics",
      description: `เจาะลึกการระบุความโค้งมนของขอบมุมกล่องในรูปแบบละเอียดต่างๆ:
1. **กำหนดแยกมุมแต่ละด้าน** :
   - \`border-top-left-radius\` : มุมบนซ้าย
   - \`border-top-right-radius\` : มุมบนขวา
   - \`border-bottom-right-radius\` : มุมล่างขวา
   - \`border-bottom-left-radius\` : มุมล่างซ้าย
2. **เขียนย่อรวม 4 ค่าในคำสั่งเดียว** (วนตามเข็มนาฬิกา: บนซ้าย -> บนขวา -> ล่างขวา -> ล่างซ้าย) :
   - เช่น \`border-radius: 10px 20px 30px 40px;\`
   - หรือหากคุมแบบคู่: \`border-radius: 20px 20px 0 0;\` (จะทำให้ขอบบนมนส่วนขอบล่างตัดตรงเป็นเหลี่ยม เหมาะสำหรับทำรูปภาพหัวการ์ด)
3. **การทำวงกลมสมบูรณ์** : ใช้หน่วยเปอร์เซ็นต์ \`border-radius: 50%;\` ร่วมกับกล่องที่ความกว้างและความสูงเท่ากัน

**เป้าหมาย:**
1. กำหนดขอบมนให้กับการ์ด \`.custom-card\` โดยใช้คุณสมบัติย่อเพื่อให้มุมด้านบนซ้ายและบนขวาโค้งมน \`24px\` ส่วนมุมล่างทั้งสองด้านเป็น \`0px\` (\`border-radius: 24px 24px 0 0;\`)
2. ตกแต่งภาพโปรไฟล์ \`.circle-avatar\` ให้เป็นวงกลมสมบูรณ์ด้วย \`border-radius: 50%;\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="custom-card">
    <div class="avatar-container">
      <div class="circle-avatar"></div>
    </div>
    <div style="padding: 15px; font-family: sans-serif;">
      <h3>การ์ดข้อมูลผู้ใช้</h3>
      <p>มุมด้านบนการ์ดจะโค้งมนสวยงาม ส่วนมุมด้านล่างจะเหลี่ยมตรง</p>
    </div>
  </div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="custom-card">
    <div class="avatar-container">
      <div class="circle-avatar"></div>
    </div>
    <div style="padding: 15px; font-family: sans-serif;">
      <h3>การ์ดข้อมูลผู้ใช้</h3>
      <p>มุมด้านบนการ์ดจะโค้งมนสวยงาม ส่วนมุมด้านล่างจะเหลี่ยมตรง</p>
    </div>
  </div>
</body>
</html>`,
      targetCss: `.custom-card {
  width: 250px;
  background-color: #f8fafc;
  border: 2px solid #e2e8f0;
  font-family: sans-serif;
  border-radius: 24px 24px 0 0;
}
.avatar-container {
  background-color: #3b82f6;
  padding: 30px;
  display: flex;
  justify-content: center;
  border-radius: 22px 22px 0 0;
}
.circle-avatar {
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 50%;
}`,
      starterCss: `.custom-card {
  width: 250px;
  background-color: #f8fafc;
  border: 2px solid #e2e8f0;
  font-family: sans-serif;
  /* 1. กำหนดขอบมนเฉพาะด้านบน 24px (บนซ้าย บนขวา) ด้านล่างเป็น 0 */
  
}
.avatar-container {
  background-color: #3b82f6;
  padding: 30px;
  display: flex;
  justify-content: center;
  border-radius: 22px 22px 0 0;
}
.circle-avatar {
  width: 80px;
  height: 80px;
  background-color: white;
  /* 2. กำหนดขอบมน 50% เพื่อทำรูปวงกลม */
  
}`,
      validation: (doc) => {
        const card = doc.querySelector('.custom-card');
        const avatar = doc.querySelector('.circle-avatar');

        if (!card || !avatar) return "กรุณาห้ามลบแท็กใน HTML ดั้งเดิม";

        const styleCard = doc.defaultView.getComputedStyle(card);
        const styleAvatar = doc.defaultView.getComputedStyle(avatar);

        if (styleAvatar.borderRadius !== '50%') return "กรุณากำหนดให้ .circle-avatar มี border-radius: 50%;";

        const tl = styleCard.borderTopLeftRadius;
        const tr = styleCard.borderTopRightRadius;
        const br = styleCard.borderBottomRightRadius;
        const bl = styleCard.borderBottomLeftRadius;

        if (tl !== '24px' || tr !== '24px' || (br !== '0px' && br !== '0') || (bl !== '0px' && bl !== '0')) {
          return "กรุณาระบุ border-radius ของการ์ดให้มุมบนซ้ายและบนขวาโค้ง 24px และมุมล่างทั้งสองเป็น 0 (เช่น border-radius: 24px 24px 0 0;)";
        }
        return true;
      },
      hints: [
        "สำหรับการ์ดใช้ `border-radius: 24px 24px 0 0;` (หรือเขียนแยกคุณสมบัติ)",
        "สำหรับภาพโปรไฟล์กลมใช้ `border-radius: 50%;`"
      ]
    },
    {
      id: "css-box-shorthands",
      title: "32. การย่อเขียนระยะห่างหลายทิศทาง (Margins & Paddings Shorthands)",
      category: "3. CSS Basics",
      description: `เรียนรู้การย่อโค้ดสำหรับการกำหนดระยะห่าง (Margin และ Padding) รอบด้านของกล่องในรูปแบบย่อที่ใช้บ่อย:
1. **แบบระบุค่าเดียว** : \`padding: 15px;\` (มีผลเท่ากันทั้ง 4 ทิศ บน-ขวา-ล่าง-ซ้าย)
2. **แบบระบุ 2 ค่า** : \`padding: 10px 20px;\` (ค่าแรกคุม บน-ล่าง, ค่าที่สองคุม ซ้าย-ขวา)
3. **แบบระบุ 3 ค่า** : \`padding: 10px 20px 30px;\` (บน=10px, ซ้าย/ขวา=20px, ล่าง=30px)
4. **แบบระบุ 4 ค่า** : \`padding: 10px 20px 30px 40px;\` (เรียงตามเข็มนาฬิกา บน -> ขวา -> ล่าง -> ซ้าย)
5. **เขียนเจาะจงรายด้าน (Longhand)** : เช่น \`margin-bottom: 24px;\` หรือ \`padding-left: 8px;\`

**เป้าหมาย:**
ตกแต่งกล่องคอนเทนเนอร์ \`.banner-card\` และปุ่ม \`.btn\` ดังนี้:
1. กำหนดระยะขอบภายใน \`.banner-card\` โดยใช้รูปแบบย่อแบบ 2 ค่า เพื่อให้บน-ล่างมีระยะห่าง \`30px\` และซ้าย-ขวามีระยะห่าง \`40px\`
2. กำหนดระยะขอบนอกด้านล่างให้ \`.banner-card\` เท่ากับ \`25px\` โดยใช้คำสั่งเจาะจงทิศทาง
3. กำหนดระยะห่างภายในให้ปุ่ม \`.btn\` โดยใช้รูปแบบย่อแบบ 2 ค่า เพื่อให้บน-ล่างมีระยะห่าง \`8px\` และซ้าย-ขวามีระยะห่าง \`16px\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="banner-card">
    <h3>ยินดีต้อนรับสู่สถาบัน</h3>
    <p>เริ่มต้นเรียนรู้การย่อโค้ด CSS เพื่อจัดสเปกหน้าจออย่างมืออาชีพ</p>
    <button class="btn">เริ่มต้นเรียนรู้</button>
  </div>
  <div style="background-color: #f1f5f9; height: 50px; text-align: center; line-height: 50px; font-family: sans-serif;">บล็อกอ้างอิงด้านล่าง</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="banner-card">
    <h3>ยินดีต้อนรับสู่สถาบัน</h3>
    <p>เริ่มต้นเรียนรู้การย่อโค้ด CSS เพื่อจัดสเปกหน้าจออย่างมืออาชีพ</p>
    <button class="btn">เริ่มต้นเรียนรู้</button>
  </div>
  <div style="background-color: #f1f5f9; height: 50px; text-align: center; line-height: 50px; font-family: sans-serif;">บล็อกอ้างอิงด้านล่าง</div>
</body>
</html>`,
      targetCss: `.banner-card {
  background-color: white;
  border: 2px solid #cbd5e1;
  border-radius: 8px;
  font-family: sans-serif;
  padding: 30px 40px;
  margin-bottom: 25px;
}
.btn {
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  padding: 8px 16px;
}`,
      starterCss: `.banner-card {
  background-color: white;
  border: 2px solid #cbd5e1;
  border-radius: 8px;
  font-family: sans-serif;
  /* 1. กำหนด padding บน-ล่าง 30px และ ซ้าย-ขวา 40px ด้วยรูปแบบย่อ */
  
  /* 2. กำหนด margin ด้านล่าง 25px ด้วยคำสั่งเจาะจง */
  
}
.btn {
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  /* 3. กำหนด padding บน-ล่าง 8px และ ซ้าย-ขวา 16px ด้วยรูปแบบย่อ */
  
}`,
      validation: (doc) => {
        const card = doc.querySelector('.banner-card');
        const btn = doc.querySelector('.btn');
        if (!card || !btn) return "กรุณาห้ามลบแท็กใน HTML ดั้งเดิม";

        const styleCard = doc.defaultView.getComputedStyle(card);
        const styleBtn = doc.defaultView.getComputedStyle(btn);

        if (styleCard.paddingTop !== '30px' || styleCard.paddingBottom !== '30px' || styleCard.paddingLeft !== '40px' || styleCard.paddingRight !== '40px') {
          return "กรุณากำหนด padding ให้กับ .banner-card ให้ถูกต้อง (บน-ล่าง 30px, ซ้าย-ขวา 40px)";
        }
        if (styleCard.marginBottom !== '25px') {
          return "กรุณากำหนด margin-bottom ให้กับ .banner-card เป็น 25px";
        }
        if (styleBtn.paddingTop !== '8px' || styleBtn.paddingBottom !== '8px' || styleBtn.paddingLeft !== '16px' || styleBtn.paddingRight !== '16px') {
          return "กรุณากำหนด padding ให้กับ .btn ให้ถูกต้อง (บน-ล่าง 8px, ซ้าย-ขวา 16px)";
        }
        return true;
      },
      hints: [
        "คลาส `.banner-card` ใช้ `padding: 30px 40px;` และ `margin-bottom: 25px;`",
        "คลาส `.btn` ใช้ `padding: 8px 16px;`"
      ]
    },
    {
      id: "css-borders-detailed",
      title: "33. เส้นขอบเฉพาะด้านและสไตล์ขอบ (Borders on Specific Sides)",
      category: "3. CSS Basics",
      description: `เรียนรู้การกำหนดเส้นขอบเจาะจงเฉพาะทิศทางและรูปแบบสไตล์ที่หลากหลาย:
1. **กำหนดแยกทิศทาง** : 
   - \`border-top\` : ขอบบน
   - \`border-bottom\` : ขอบล่าง
   - \`border-left\` : ขอบซ้าย
   - \`border-right\` : ขอบขวา
2. **คุณสมบัติย่อยของขอบ** : \`border: [ความหนา] [รูปแบบ] [สี];\`
   - รูปแบบเส้นขอบ (\`border-style\`): \`solid\` (เส้นทึบ), \`dashed\` (เส้นประ), \`dotted\` (เส้นจุดไข่ปลา), \`double\` (เส้นคู่), \`none\` (ไม่มีเส้นขอบ)
3. **การใช้งานยอดนิยม** : การทำขอบเน้นด้านข้างสำหรับกล่องแจ้งเตือน (Alert Box) หรือทำเส้นแบ่งใต้หัวข้อ (Underline Divider)

**เป้าหมาย:**
ตกแต่งกล่องแจ้งเตือนภัย \`.alert-box\` ดังนี้:
1. ล้างขอบดีฟอลต์ทั้งหมดออก และตั้งค่าเส้นขอบเฉพาะ **ด้านซ้าย** (\`border-left\`) ให้หนา \`6px\` ชนิดเส้นทึบ (\`solid\`) ใช้สีแดง (\`#ef4444\`)
2. ตั้งเส้นขอบเฉพาะ **ด้านล่าง** (\`border-bottom\`) ให้หนา \`1px\` ชนิดเส้นจุดไข่ปลา (\`dotted\`) ใช้สีเทาอ่อน (\`#cbd5e1\`)`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="alert-box">
    <strong>คำเตือน:</strong> ข้อมูลการแก้ไขนี้จะถูกเก็บบันทึกในฐานข้อมูลทันที กรุณาตรวจสอบความถูกต้องก่อนกดบันทึก
  </div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="alert-box">
    <strong>คำเตือน:</strong> ข้อมูลการแก้ไขนี้จะถูกเก็บบันทึกในฐานข้อมูลทันที กรุณาตรวจสอบความถูกต้องก่อนกดบันทึก
  </div>
</body>
</html>`,
      targetCss: `.alert-box {
  padding: 15px;
  background-color: #fef2f2;
  color: #991b1b;
  font-family: sans-serif;
  border-radius: 4px;
  border: none;
  border-left: 6px solid #ef4444;
  border-bottom: 1px dotted #cbd5e1;
}`,
      starterCss: `.alert-box {
  padding: 15px;
  background-color: #fef2f2;
  color: #991b1b;
  font-family: sans-serif;
  border-radius: 4px;
  /* เริ่มต้นล้างขอบออก่อน */
  border: none;
  
  /* 1. กำหนดขอบด้านซ้ายให้หนา 6px ชนิดทึบ (solid) สีแดง #ef4444 */
  
  /* 2. กำหนดขอบด้านล่างให้หนา 1px ชนิดจุดไข่ปลา (dotted) สีเทา #cbd5e1 */
  
}`,
      validation: (doc) => {
        const el = doc.querySelector('.alert-box');
        if (!el) return "ไม่พบคลาส .alert-box";
        const style = doc.defaultView.getComputedStyle(el);

        const leftWidth = parseFloat(style.borderLeftWidth);
        if (isNaN(leftWidth) || Math.round(leftWidth) !== 6 || style.borderLeftStyle !== 'solid') {
          return "กรุณากำหนดขอบด้านซ้ายให้หนา 6px ชนิด solid";
        }
        if (!style.borderLeftColor.includes('239') && !style.borderLeftColor.includes('68')) {
          return "กรุณาใช้สีแดง #ef4444 สำหรับขอบด้านซ้าย";
        }
        const bottomWidth = parseFloat(style.borderBottomWidth);
        if (isNaN(bottomWidth) || Math.round(bottomWidth) !== 1 || style.borderBottomStyle !== 'dotted') {
          return "กรุณากำหนดขอบด้านล่างให้หนา 1px ชนิด dotted (จุดไข่ปลา)";
        }
        if (!style.borderBottomColor.includes('203') && !style.borderBottomColor.includes('226')) {
          return "กรุณาใช้สีเทา #cbd5e1 สำหรับขอบด้านล่าง";
        }
        if (parseFloat(style.borderTopWidth) > 0 || parseFloat(style.borderRightWidth) > 0) {
          return "กรุณาล้างขอบด้านบนและด้านขวาออก (ให้คงเหลือเฉพาะด้านซ้ายและด้านล่าง)";
        }
        return true;
      },
      hints: ["พิมพ์ `border-left: 6px solid #ef4444;` และ `border-bottom: 1px dotted #cbd5e1;`"]
    },
    {
      id: "css-backgrounds-advanced",
      title: "34. ภาพพื้นหลังและการไล่โทนสี (Background Images & Gradients)",
      category: "3. CSS Basics",
      description: `เรียนรู้การตั้งค่าพื้นหลังด้วยรูปภาพและการปรับขนาดจัดวาง รวมถึงการสร้างสีพื้นหลังแบบไล่เฉดโทนสี (Gradients):
1. **รูปภาพพื้นหลัง (\`background-image\`)** : ระบุผ่านฟังก์ชัน \`url('พิกัดที่อยู่รูป')\`
2. **การปรับขนาดรูป (\`background-size\`)** :
   - \`cover\` : ยืดรูปภาพให้เต็มพื้นที่กล่องพอดี (สัดส่วนรูปเดิม แต่อาจมีขอบบางส่วนถูกครอปตัดออก)
   - \`contain\` : ย่อสเกลรูปให้เห็นรูปครบถ้วนที่สุดในกล่อง (อาจมีที่ว่างสีขาวเหลือข้างๆ)
3. **การวางตำแหน่งรูป (\`background-position\`)** : ระบุเช่น \`center\`, \`top\`, \`bottom\`, \`left\`, \`right\`
4. **การควบคุมการทำซ้ำ (\`background-repeat\`)** : ตั้งเป็น \`no-repeat\` เพื่อป้องกันไม่ให้รูปที่เล็กกว่ากล่องถูกนำมาต่อจิ๊กซอว์ซ้ำๆ
5. **การไล่ระดับสีพื้นหลัง (Linear Gradients)** : เช่น \`background: linear-gradient(135deg, #3b82f6, #8b5cf6);\`

**เป้าหมาย:**
ตกแต่งกล่องโปรไฟล์ฮีโร่ \`.hero-banner\` ดังนี้:
1. ระบุภาพพื้นหลังโดยใช้ภาพจากลิงก์: \`https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600\`
2. สั่งให้ภาพขยายเต็มพื้นที่พอดีกล่อง (\`cover\`) โดยจุดศูนย์กลางของภาพอยู่กึ่งกลางกล่อง (\`center\`) และไม่มีการทำซ้ำภาพ (\`no-repeat\`)`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="hero-banner">
    <div class="hero-content">
      <h1>เทคโนโลยีสำหรับอนาคต</h1>
      <p>เรียนรู้วิธีการเขียนโค้ดและพัฒนาแอปพลิเคชันด้วยเครื่องมือระดับสากล</p>
    </div>
  </div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="hero-banner">
    <div class="hero-content">
      <h1>เทคโนโลยีสำหรับอนาคต</h1>
      <p>เรียนรู้วิธีการเขียนโค้ดและพัฒนาแอปพลิเคชันด้วยเครื่องมือระดับสากล</p>
    </div>
  </div>
</body>
</html>`,
      targetCss: `.hero-banner {
  width: 100%;
  height: 220px;
  border-radius: 8px;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.hero-content {
  background-color: rgba(255, 255, 255, 0.85);
  padding: 15px;
  border-radius: 6px;
  max-width: 320px;
}
.hero-content h1 {
  margin: 0 0 5px 0;
  font-size: 18px;
  color: #1e293b;
}
.hero-content p {
  margin: 0;
  font-size: 13px;
  color: #475569;
  line-height: 1.4;
}`,
      starterCss: `.hero-banner {
  width: 100%;
  height: 220px;
  border-radius: 8px;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  
  /* 1. ใส่ภาพพื้นหลังด้วย URL: https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600 */
  
  /* 2. ตั้งค่าปรับสัดส่วนรูปภาพไม่ให้ซ้ำ จัดกึ่งกลาง และกว้างครอบคลุมกล่อง (cover) */
  
}
.hero-content {
  background-color: rgba(255, 255, 255, 0.85);
  padding: 15px;
  border-radius: 6px;
  max-width: 320px;
}
.hero-content h1 {
  margin: 0 0 5px 0;
  font-size: 18px;
  color: #1e293b;
}
.hero-content p {
  margin: 0;
  font-size: 13px;
  color: #475569;
  line-height: 1.4;
}`,
      validation: (doc) => {
        const banner = doc.querySelector('.hero-banner');
        if (!banner) return "ไม่พบคลาส .hero-banner";
        const style = doc.defaultView.getComputedStyle(banner);

        if (!style.backgroundImage || style.backgroundImage === 'none') {
          return "กรุณาใส่ภาพพื้นหลัง background-image";
        }
        if (!style.backgroundImage.includes('1579546929518-9e396f3cc809')) {
          return "กรุณาใช้ URL ภาพที่กำหนดให้ถูกต้อง";
        }
        if (style.backgroundSize !== 'cover') {
          return "กรุณากำหนด background-size: cover;";
        }
        if (style.backgroundPosition.trim() !== 'center' && !style.backgroundPosition.includes('50%')) {
          return "กรุณากำหนด background-position: center;";
        }
        if (style.backgroundRepeat !== 'no-repeat') {
          return "กรุณากำหนด background-repeat: no-repeat;";
        }
        return true;
      },
      hints: [
        "พิมพ์: background-image: url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600');",
        "พิมพ์: background-size: cover; background-position: center; background-repeat: no-repeat;"
      ]
    },

    // --- หมวดใหญ่ 4: CSS Layout Engineering (12 บทเรียนย่อย) ---
    {
      id: "css-layout-absolute",
      title: "28. การจัดตำแหน่งซ้อนทับภาพ (Absolute Positioning)",
      category: "4. CSS Layouts",
      description: `การจัดตำแหน่งแบบซ้อนทับช่วยวางเลเยอร์ของกล่องลูกลอยอยู่เหนือพื้นที่กล่องแม่:
- กล่องแม่ต้องประกาศ \`position: relative;\`
- กล่องลูกที่จะลอยระบุ \`position: absolute;\` และบังคับพิกัดด้วย \`top\`, \`left\`, \`right\`, \`bottom\`

**เป้าหมาย:**
วางป้ายราคา (\`.price-badge\`) ทับรูปภาพให้อยู่ที่ **มุมซ้ายล่าง** ของการ์ด (\`.card-wrapper\`):
1. คลาสแม่ \`.card-wrapper\` ต้องตั้งค่า \`position: relative;\`
2. คลาสลูก \`.price-badge\` ต้องตั้งค่า \`position: absolute;\` และระบุพิกัดเกาะขอบล่างขอบซ้าย (\`bottom: 10px; left: 10px;\`)`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="card-wrapper">
  <div class="price-badge">฿120</div>
  <div style="background-color: #ddd; width: 100%; height: 120px; border-radius: 6px;"></div>
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="card-wrapper">
  <div class="price-badge">฿120</div>
  <div style="background-color: #ddd; width: 100%; height: 120px; border-radius: 6px;"></div>
</div>
</body>
</html>`,
      targetCss: `.card-wrapper {
  width: 200px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  position: relative;
}
.price-badge {
  background-color: #2563eb;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  font-family: sans-serif;
  position: absolute;
  bottom: 10px;
  left: 10px;
}`,
      starterCss: `.card-wrapper {
  width: 200px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  /* 1. สไตล์คีย์พิกเซลคุมแม่ */
  
}
.price-badge {
  background-color: #2563eb;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
  font-family: sans-serif;
  /* 2. สไตล์พิกเซลลูกลอยขอบล่างซ้าย */
  
}`,
      validation: (doc) => {
        const wrap = doc.querySelector('.card-wrapper');
        const badge = doc.querySelector('.price-badge');
        if (!wrap || !badge) return "โครงสร้างตัวอย่างไม่สมบูรณ์";
        
        const wStyle = doc.defaultView.getComputedStyle(wrap);
        const bStyle = doc.defaultView.getComputedStyle(badge);
        
        if (wStyle.position !== 'relative') return "กรุณาใส่ position: relative; ให้ .card-wrapper";
        if (bStyle.position !== 'absolute') return "กรุณาใส่ position: absolute; ให้ .price-badge";
        if (bStyle.bottom !== '10px' || bStyle.left !== '10px') return "ตั้งพิกัด bottom: 10px; left: 10px; เพื่อระบุขอบล่างซ้าย";
        return true;
      },
      hints: ["คุมแม่: `position: relative;`", "คุมลูกลอย: `position: absolute; bottom: 10px; left: 10px;`"]
    },
    {
      id: "css-layout-sticky",
      title: "29. แถบเกาะติดขอบหน้าจอ (Fixed & Sticky Elements)",
      category: "4. CSS Layouts",
      description: `การจัดองค์ประกอบแถวเมนูให้ค้างอยู่ที่หน้าจอเวลาเลื่อนสกอลบาร์ลง:
- \`position: sticky;\` : ลอยเกาะขอบเมื่อถูกเลื่อนถึง และเคลื่อนตัวกลับเมื่อสกอลกลับ (ต้องระบุ \`top: 0;\` เสมอ)
- \`position: fixed;\` : เกาะอยู่กับจุดพิกัดหน้าจอบนขอบถาวรไม่เปลี่ยนรูป

**เป้าหมาย:**
จัดให้แถบหัวเมนูนำทาง \`.sticky-bar\` ค้างติดขอบบนสุดของกล่องแม่เวลาเลื่อนหน้าเพจ:
1. ตั้งค่า \`position: sticky;\` ให้กับคลาส \`.sticky-bar\`
2. กำหนดพิกัดเกาะขอบบนสุด \`top: 0;\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div style="height: 300px; overflow-y: auto; border: 1px solid #ccc;">
  <div class="sticky-bar">เมนูนำทางติดหนึบ (Sticky Header)</div>
  <div style="padding: 20px; font-family: sans-serif;">
    <p>บทความย่อยที่ 1 ...</p>
    <p style="margin-top: 150px;">บทความย่อยที่ 2 ...</p>
    <p style="margin-top: 150px;">บทความย่อยที่ 3 ...</p>
  </div>
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div style="height: 300px; overflow-y: auto; border: 1px solid #ccc;">
  <div class="sticky-bar">เมนูนำทางติดหนึบ (Sticky Header)</div>
  <div style="padding: 20px; font-family: sans-serif;">
    <p>บทความย่อยที่ 1 ...</p>
    <p style="margin-top: 150px;">บทความย่อยที่ 2 ...</p>
    <p style="margin-top: 150px;">บทความย่อยที่ 3 ...</p>
  </div>
</div>
</body>
</html>`,
      targetCss: `.sticky-bar {
  background-color: #0f172a;
  color: white;
  padding: 15px;
  font-family: sans-serif;
  font-weight: bold;
  position: sticky;
  top: 0;
}`,
      starterCss: `.sticky-bar {
  background-color: #0f172a;
  color: white;
  padding: 15px;
  font-family: sans-serif;
  font-weight: bold;
  /* 1. ตั้งค่าพิกัดให้ติดหน้าจอค้างที่นี่ */
  
}`,
      validation: (doc) => {
        const bar = doc.querySelector('.sticky-bar');
        if (!bar) return "ไม่พบแถบ .sticky-bar";
        const style = doc.defaultView.getComputedStyle(bar);
        
        if (style.position !== 'sticky') return "กรุณากำหนดตำแหน่งให้เป็น position: sticky;";
        if (style.top !== '0px') return "อย่าลืมกำหนดจุดค้างบนสุดเป็น top: 0;";
        return true;
      },
      hints: ["พิมพ์: `position: sticky; top: 0;`"]
    },
    {
      id: "css-flex-direction",
      title: "30. ทิศทางการเรียงกล่อง (Flex Direction & Wrapping)",
      category: "4. CSS Layouts",
      description: `การจัดการเรียงกล่องลูกของระบบ Flexbox:
- \`flex-direction: row;\` : จัดเรียงตามแนวนอน (เริ่มต้น)
- \`flex-direction: column;\` : จัดเรียงตามแนวตั้งจากบนลงล่าง
- \`flex-wrap: wrap;\` : สั่งให้กล่องลูกขึ้นแถวใหม่เมื่อพื้นที่ไม่เพียงพอ ป้องกันการล้นกล่องแม่

**เป้าหมาย:**
จัดเลย์เอาต์การ์ดสินค้า \`.items-group\` ดังนี้:
1. จัดกลุ่มให้เรียงเป็นแนวตั้ง (\`flex-direction: column;\`)
2. เปิดใช้งานระบบสลับแถว (\`flex-wrap: wrap;\`)`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="items-group">
  <div class="box">กล่อง A</div>
  <div class="box">กล่อง B</div>
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="items-group">
  <div class="box">กล่อง A</div>
  <div class="box">กล่อง B</div>
</div>
</body>
</html>`,
      targetCss: `.items-group {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
}
.box {
  background-color: #f1f5f9;
  padding: 20px;
  border-radius: 6px;
  font-family: sans-serif;
  font-weight: bold;
  border: 1px solid #cbd5e1;
}`,
      starterCss: `.items-group {
  display: flex;
  gap: 10px;
  /* 1. จัดเรียงในทิศทางแนวตั้ง */
  
  /* 2. สั่งให้เว้นสลับขึ้นแถวใหม่ */
  
}
.box {
  background-color: #f1f5f9;
  padding: 20px;
  border-radius: 6px;
  font-family: sans-serif;
  font-weight: bold;
  border: 1px solid #cbd5e1;
}`,
      validation: (doc) => {
        const group = doc.querySelector('.items-group');
        if (!group) return "ไม่พบคลาส .items-group";
        const style = doc.defaultView.getComputedStyle(group);
        
        if (style.flexDirection !== 'column') return "กรุณาจัดทิศทางเรียงเป็นแนวตั้ง flex-direction: column;";
        if (style.flexWrap !== 'wrap') return "กรุณากำหนด flex-wrap: wrap;";
        return true;
      },
      hints: ["พิมพ์: `flex-direction: column; flex-wrap: wrap;` ในคลาส .items-group"]
    },
    {
      id: "css-flex-align",
      title: "31. การจัดกึ่งกลางและระยะจัด Flexbox (Flex Align & Justify)",
      category: "4. CSS Layouts",
      description: `การคุมระยะจัดแนวกล่องลูกภายในระบบ Flex:
- \`justify-content\` : คุมขอบระยะแนวนอน เช่น \`center\` (ตรงกลาง), \`space-between\` (แยกซ้ายขวาสุด)
- \`align-items\` : คุมขอบระยะแนวตั้ง เช่น \`center\` (ตรงกลาง)

**เป้าหมาย:**
จัดให้ไอคอนและข้อความข้างในการ์ด \`.card-header\` อยู่ตรงกลางหน้าจอแนวนอนและตรงกลางแนวตั้ง:
1. จัดกึ่งกลางทางราบ: \`justify-content: center;\`
2. จัดกึ่งกลางแนวดิ่ง: \`align-items: center;\`
3. เว้นระยะห่างระหว่าไอเทม: \`gap: 12px;\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="card-header">
  <div style="background-color: #2563eb; width: 24px; height: 24px; border-radius: 50%;"></div>
  <span style="font-family: sans-serif; font-weight: bold;">ผู้เข้าเรียนหลัก</span>
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="card-header">
  <div style="background-color: #2563eb; width: 24px; height: 24px; border-radius: 50%;"></div>
  <span style="font-family: sans-serif; font-weight: bold;">ผู้เข้าเรียนหลัก</span>
</div>
</body>
</html>`,
      targetCss: `.card-header {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}`,
      starterCss: `.card-header {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 15px;
  display: flex;
  /* 1. จัดกึ่งกลางแนวนอน */
  
  /* 2. จัดกึ่งกลางแนวตั้ง */
  
  /* 3. จัดระยะห่าง */
  
}`,
      validation: (doc) => {
        const header = doc.querySelector('.card-header');
        if (!header) return "ไม่พบคลาส .card-header";
        const style = doc.defaultView.getComputedStyle(header);
        
        if (style.justifyContent !== 'center') return "กรุณากำหนด justify-content: center;";
        if (style.alignItems !== 'center') return "กรุณากำหนด align-items: center;";
        if (parseFloat(style.gap) < 10) return "กรุณาระบุ gap: 12px;";
        return true;
      },
      hints: ["ระบุสไตล์: `justify-content: center; align-items: center; gap: 12px;`"]
    },
    {
      id: "css-grid-columns",
      title: "32. โครงสร้างแถวตารางพื้นฐาน (CSS Grid Columns & Gap)",
      category: "4. CSS Layouts",
      description: `การจัดวางตารางการ์ดข้อมูลแบบ 2 มิติ:
- \`display: grid;\` : เปิดระบบกริด
- \`grid-template-columns: repeat(2, 1fr);\` : แบ่งเป็น 2 คอลัมน์กว้างเท่ากันในแถวเดียว

**เป้าหมาย:**
จัดคลาส \`.grid-box\` ให้แบ่งกล่องเป็น **2 คอลัมน์** ขนาดกว้างเท่ากันและเว้นช่องไฟห่าง **15px**:
1. ใช้ \`display: grid;\`
2. กำหนด 2 คอลัมน์ด้วย \`grid-template-columns: repeat(2, 1fr);\`
3. ตั้งช่องไฟ \`gap: 15px;\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="grid-box">
  <div class="card">ข้อมูล A</div>
  <div class="card">ข้อมูล B</div>
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="grid-box">
  <div class="card">ข้อมูล A</div>
  <div class="card">ข้อมูล B</div>
</div>
</body>
</html>`,
      targetCss: `.grid-box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}
.card {
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  padding: 20px;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
}`,
      starterCss: `.grid-box {
  /* 1. สไตล์จัดคลาสกริดที่นี่ */
  
}
.card {
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  padding: 20px;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
}`,
      validation: (doc) => {
        const box = doc.querySelector('.grid-box');
        if (!box) return "ไม่พบคลาส .grid-box";
        const style = doc.defaultView.getComputedStyle(box);
        
        if (style.display !== 'grid') return "กรุณาใส่สไตล์ display: grid;";
        if (style.gridTemplateColumns.split(' ').length !== 2) return "กรุณาแบ่งออกเป็น 2 คอลัมน์";
        if (parseFloat(style.gap) < 10) return "อย่าลืมกำหนด gap: 15px;";
        return true;
      },
      hints: ["พิมพ์: `display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;`"]
    },
    {
      id: "css-grid-areas",
      title: "33. พื้นที่จัดโครงร่างกล่อง (Advanced CSS Grid Areas)",
      category: "4. CSS Layouts",
      description: `การกำหนดเลย์เอาต์ตามพื้นที่วาดแบบแผนผัง (Layout Grid Area Planning):
- \`grid-template-areas: "side main";\`
- การ์ดลูกระบุตำแหน่งตนเองผ่าน \`grid-area: side;\`

**เป้าหมาย:**
จัดตำแหน่ง \`.dashboard\` ให้แบ่งเป็นพื้นที่ซ้ายขวา:
1. คลาสแม่ \`.dashboard\` ระบุโครงสร้าง \`grid-template-areas: "sidebar main";\`
2. คลาสลูก \`.side\` มัดตนเองกับพื้นที่ด้านซ้าย \`grid-area: sidebar;\`
3. คลาสลูก \`.body\` มัดตนเองกับพื้นที่ด้านขวา \`grid-area: main;\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="dashboard">
  <div class="side">เมนูซ้าย</div>
  <div class="body">เนื้อหาขวา</div>
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="dashboard">
  <div class="side">เมนูซ้าย</div>
  <div class="body">เนื้อหาขวา</div>
</div>
</body>
</html>`,
      targetCss: `.dashboard {
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-areas: "sidebar main";
  gap: 10px;
  font-family: sans-serif;
}
.side {
  grid-area: sidebar;
  background-color: #1e293b;
  color: white;
  padding: 20px;
  text-align: center;
}
.body {
  grid-area: main;
  background-color: #f1f5f9;
  padding: 20px;
}`,
      starterCss: `.dashboard {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 10px;
  font-family: sans-serif;
  /* 1. กำหนดสไตล์วาดแผนผังที่นี่ */
  
}
.side {
  background-color: #1e293b;
  color: white;
  padding: 20px;
  text-align: center;
  /* 2. ผูกพื้นที่ sidebar */
  
}
.body {
  background-color: #f1f5f9;
  padding: 20px;
  /* 3. ผูกพื้นที่ main */
  
}`,
      validation: (doc, cssText) => {
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes('grid-template-areas')) return "ขาดคุณสมบัติ grid-template-areas ใน .dashboard";
        if (!cleaned.includes('grid-area:sidebar') && !cleaned.includes('grid-area:"sidebar"')) return "กรุณาผูกคลาส .side เข้ากับ sidebar";
        if (!cleaned.includes('grid-area:main') && !cleaned.includes('grid-area:"main"')) return "กรุณาผูกคลาส .body เข้ากับ main";
        return true;
      },
      hints: [
        "แม่: `grid-template-areas: 'sidebar main';`",
        "ลูกซ้าย: `grid-area: sidebar;`",
        "ลูกขวา: `grid-area: main;`"
      ]
    },
    // --- หมวดใหญ่ 5: Advanced & Responsive CSS (5 บทเรียนย่อย) ---
    {
      id: "css-variables-scoping",
      title: "34. ตัวแปรเก็บสีส่วนกลาง (CSS Variables Scoping)",
      category: "5. Responsive & Advanced",
      description: `การประกาศตัวแปรส่วนกลางของหน้าเพจเพื่อแก้ไขได้ง่ายในจุดเดียว:
- มักประกาศไว้ในระดับขอบเขตสูงสุด \`:root { --primary-color: #3b82f6; }\`
- ดึงมาใช้งานด้วยฟังก์ชัน \`var(--primary-color)\`

**เป้าหมาย:**
1. ในบล็อก \`:root\` ประกาศตัวแปร \`--brand-color: #ec4899;\` (สีชมพู)
2. ในคลาส \`.badge\` ให้ดึงตัวแปรมาตกแต่งสีพื้นหลัง (\`background-color: var(--brand-color);\`)`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <span class="badge">ป้ายลดราคา</span>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <span class="badge">ป้ายลดราคา</span>
</body>
</html>`,
      targetCss: `:root {
  --brand-color: #ec4899;
}
.badge {
  padding: 6px 12px;
  color: white;
  border-radius: 20px;
  font-family: sans-serif;
  font-weight: bold;
  background-color: var(--brand-color);
}`,
      starterCss: `:root {
  /* 1. ประกาศตัวแปรสียี่ห้อ --brand-color */
  
}
.badge {
  padding: 6px 12px;
  color: white;
  border-radius: 20px;
  font-family: sans-serif;
  font-weight: bold;
  /* 2. ดึงตัวแปรมาใช้ใส่สีพื้นหลัง */
  
}`,
      validation: (doc, cssText) => {
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes('--brand-color:#ec4899') && !cleaned.includes('--brand-color:rgb(236,72,153)')) return "กรุณาประกาศตัวแปร --brand-color ให้ถูกต้อง";
        if (!cleaned.includes('var(--brand-color)')) return "อย่าลืมดึงตัวแปรมาใช้ด้วยการพิมพ์ var(--brand-color)";
        return true;
      },
      hints: [":root { --brand-color: #ec4899; }", ".badge { background-color: var(--brand-color); }"]
    },
    {
      id: "css-pseudo-classes",
      title: "35. สถานะตอบสนองปุ่มเมาส์ (Pseudo-classes hover & active)",
      category: "5. Responsive & Advanced",
      description: `การดีไซน์การปฏิสัมพันธ์เมื่อผู้ใช้สั่งกดหรือชี้เมาส์:
- \`:hover\` : เมื่อชี้เมาส์
- \`:active\` : เมื่อกดเมาส์ค้างไว้

**เป้าหมาย:**
ตกแต่งปุ่ม \`.btn\` ดังนี้:
1. ชี้เมาส์ (\`.btn:hover\`) ให้เปลี่ยนสีพื้นหลังเป็นแดงเข้ม \`#be123c\`
2. สเตทกดคลิกค้าง (\`.btn:active\`) ให้ย่อขนาดปุ่มลงโดยระบุ \`transform: scale(0.95);\` เพื่อสร้างแรงกดดันความสมจริง`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <button class="btn">กดปุ่ม</button>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <button class="btn">กดปุ่ม</button>
</body>
</html>`,
      targetCss: `.btn {
  background-color: #f43f5e;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}
.btn:hover {
  background-color: #be123c;
}
.btn:active {
  transform: scale(0.95);
}`,
      starterCss: `.btn {
  background-color: #f43f5e;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}

/* 1. สไตล์เมื่อ hover */


/* 2. สไตล์เมื่อ active */
`,
      validation: (doc, cssText) => {
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes('.btn:hover') && !cleaned.includes('button:hover')) return "กรุณาเพิ่ม CSS Rule สำหรับ .btn:hover";
        if (!cleaned.includes('.btn:active') && !cleaned.includes('button:active')) return "กรุณาเพิ่ม CSS Rule สำหรับ .btn:active";
        if (!cleaned.includes('scale(0.95)')) return "อย่าลืมระบุ transform: scale(0.95); ตอนกดคลิกปุ่ม";
        return true;
      },
      hints: [".btn:hover { background-color: #be123c; }", ".btn:active { transform: scale(0.95); }"]
    },
    {
      id: "css-pseudo-elements",
      title: "36. กล่องโครงสร้างตัวตนเสมือน (Pseudo-elements ::after)",
      category: "5. Responsive & Advanced",
      description: `การวาดภาพหรือเส้นเสมือนออกมาด้วย CSS โดยไม่แตะต้องเอกสาร HTML:
- แท็ก \`::after\` หรือ \`::before\`
- ต้องกำหนดคุณสมบัติ \`content: "";\` ไว้ด้วยเสมอไม่เช่นนั้นจะไม่เรนเดอร์

**เป้าหมาย:**
สร้างสติกเกอร์รูปวงกลมสีเขียว (\`.status::after\`) ต่อท้ายข้อความเพื่อแสดงสเตตัสออนไลน์:
1. ตั้งค่าสไตล์ \`.status::after\` ให้กำหนด \`content: "";\`
2. ระบุความกว้างความสูง \`width: 8px; height: 8px; background-color: #22c55e;\` และความโค้งมน \`border-radius: 50%;\`
3. ลอยวัตถุด้วย \`display: inline-block; margin-left: 8px;\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="status">สถานะเซิร์ฟเวอร์</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="status">สถานะเซิร์ฟเวอร์</div>
</body>
</html>`,
      targetCss: `.status { font-family: sans-serif; font-weight: bold; }
.status::after {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #22c55e;
  border-radius: 50%;
  margin-left: 8px;
}`,
      starterCss: `.status { font-family: sans-serif; font-weight: bold; }

/* 1. ตกแต่งกล่องเสมือนต่อท้าย status ด้วย ::after */
.status::after {
  
}`,
      validation: (doc, cssText) => {
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes('::after') && !cleaned.includes(':after')) return "กรุณาใช้งาน pseudo-element ::after";
        if (!cleaned.includes('content:')) return "อย่าลืมระบุคุณสมบัติ content: ''; (หรือ content: \"\";) ให้เสร็จสิ้น";
        if (!cleaned.includes('border-radius:50%')) return "อย่าลืมคุมขอบกลม border-radius: 50% ให้กล่องปุ่มเขียว";
        return true;
      },
      hints: [
        ".status::after { content: ''; display: inline-block; width: 8px; height: 8px; background-color: #22c55e; border-radius: 50%; margin-left: 8px; }"
      ]
    },
    {
      id: "css-media-queries",
      title: "37. ปรับขนาดสไตล์ตามหน้าต่างอุปกรณ์ (Media Queries)",
      category: "5. Responsive & Advanced",
      description: `การเขียนกติกาคัดกรองขอบกว้างหน้าจอ:
- \`@media (max-width: 768px)\` ครอบคำสั่งสำหรับอุปกรณ์หน้าจอแคบ (เช่น ไอแพดหรือมือถือ)

**เป้าหมาย:**
จัดให้ \`.content-box\` สลับสไตล์เปลี่ยนพื้นหลังเป็นสีเหลืองอ่อน \`#fef9c3\` เฉพาะเมื่อเปิดจอบราวเซอร์ที่มีความกว้าง **ไม่เกิน 768px**:
1. เขียนบล็อกมีเดียคิวรี \`@media (max-width: 768px) { ... }\`
2. ด้านในระบุคลาส \`.content-box\` และใส่สีพื้นหลังเป็น \`background-color: #fef9c3;\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="content-box">ข้อมูลปรับตามความเหมาะสมของอุปกรณ์</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="content-box">ข้อมูลปรับตามความเหมาะสมของอุปกรณ์</div>
</body>
</html>`,
      targetCss: `.content-box {
  padding: 20px;
  background-color: #e0f2fe;
  font-family: sans-serif;
  border-radius: 6px;
  font-weight: bold;
}
@media (max-width: 768px) {
  .content-box {
    background-color: #fef9c3;
  }
}`,
      starterCss: `.content-box {
  padding: 20px;
  background-color: #e0f2fe;
  font-family: sans-serif;
  border-radius: 6px;
  font-weight: bold;
}

/* 1. พิมพ์กฎ @media ตรวจหา max-width 768px ด้านล่างนี้ */
`,
      validation: (doc, cssText) => {
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes('@media(max-width:768px)')) return "กรุณาใช้ @media (max-width: 768px) ในไฟล์ CSS";
        if (!cleaned.includes('background-color:#fef9c3') && !cleaned.includes('background-color:rgb(254,249,195)')) {
          return "กรุณากำหนดพื้นหลังเหลืองอ่อน #fef9c3 ภายใต้ขอบเงื่อนไขหน้าจอแคบ";
        }
        return true;
      },
      hints: [
        "ลากกติกาล่างสุด: `@media (max-width: 768px) { .content-box { background-color: #fef9c3; } }`"
      ]
    },
    {
      id: "css-auto-grid",
      title: "38. จัดตารางยืดหดยกกำลังไม่ต้องพึ่งคิวรี (Auto Grid minmax)",
      category: "5. Responsive & Advanced",
      description: `การผสานสูตรขั้นเทพคุมระยะช่องตารางให้เลื่อนไหลแบบ Responsive อัตโนมัติ:
- \`grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\`

**เป้าหมาย:**
จัดคลาส \`.auto-grid\` ให้มีระบบคำนวณแบ่งช่องคอลัมน์กว้างอย่างน้อยที่สุด \`140px\` และหดขยายกว้างเท่ากันยืดหยุ่น:
1. เปิดการทำงาน \`display: grid;\`
2. สั่งแบ่งช่องคอลัมน์อัตโนมัติ: \`grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="auto-grid">
  <div class="cell">ช่อง 1</div>
  <div class="cell">ช่อง 2</div>
  <div class="cell">ช่อง 3</div>
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="auto-grid">
  <div class="cell">ช่อง 1</div>
  <div class="cell">ช่อง 2</div>
  <div class="cell">ช่อง 3</div>
</div>
</body>
</html>`,
      targetCss: `.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
}
.cell {
  background-color: #10b981;
  color: white;
  padding: 30px 10px;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  border-radius: 6px;
}`,
      starterCss: `.auto-grid {
  /* 1. จัดระบบกริดขยายตัวอัตโนมัติที่นี่ */
  
}
.cell {
  background-color: #10b981;
  color: white;
  padding: 30px 10px;
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  border-radius: 6px;
}`,
      validation: (doc) => {
        const grid = doc.querySelector('.auto-grid');
        if (!grid) return "ไม่พบคลาส .auto-grid";
        const style = doc.defaultView.getComputedStyle(grid);
        
        if (style.display !== 'grid') return "กรุณาใส่สไตล์ display: grid;";
        if (!style.gridTemplateColumns.includes('px') && !style.gridTemplateColumns.includes('fr')) {
          return "กรุณาพิมพ์สูตร repeat(auto-fit, minmax(140px, 1fr)) ใน CSS";
        }
        return true;
      },
      hints: ["พิมพ์: `grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));` ในคลาส .auto-grid"]
    },
    // --- หมวดใหญ่ 6: Transitions & Animations (3 บทเรียนย่อย) ---
    {
      id: "css-transitions-timing",
      title: "39. ระยะเวลาการเปลี่ยนผ่าน (Transition Timing)",
      category: "6. Transitions & Animations",
      description: `การหน่วงสปีดเอฟเฟกต์การแสดงสไตล์เพื่อลบล้างความหยาบกระด้าง:
- \`transition-duration\` : ระบุระยะเวลา เช่น \`0.3s\` (300 มิลลิวินาที)
- \`transition-property\` : เลือกสไตล์ที่จะคุมหน่วงเวลา
- รูปแบบย่อสากล: \`transition: all 0.3s ease-in-out;\`

**เป้าหมาย:**
ตกแต่งปุ่ม \`.btn\` ให้หน่วงการเคลื่อนไหวเปลี่ยนผ่านสไตล์ความกว้างและสีอย่างลื่นไหล:
1. ระบุ \`transition: all 0.3s ease-in-out;\`
2. เปลี่ยนแปลงความกว้างของปุ่มเมื่อเมาส์ชี้ (\`.btn:hover\`) ไปที่ความกว้าง \`180px\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <button class="btn">ยืดความกว้างปุ่ม</button>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <button class="btn">ยืดความกว้างปุ่ม</button>
</body>
</html>`,
      targetCss: `.btn {
  background-color: #8b5cf6;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  width: 140px;
  transition: all 0.3s ease-in-out;
}
.btn:hover {
  width: 180px;
  background-color: #6d28d9;
}`,
      starterCss: `.btn {
  background-color: #8b5cf6;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  width: 140px;
  /* 1. ใส่สไตล์หน่วงทรานซิชันลื่นไหล */
  
}
.btn:hover {
  /* 2. เปลี่ยนความกว้างยืดออก */
  
}`,
      validation: (doc, cssText) => {
        const btn = doc.querySelector('.btn');
        if (!btn) return "ไม่พบปุ่ม .btn";
        const style = doc.defaultView.getComputedStyle(btn);
        
        if (style.transitionDuration === '0s') return "กรุณาระบุระยะทรานซิชัน transition: all 0.3s ease-in-out;";
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes('width:180px')) return "อย่าลืมยืดกว้าง width: 180px; ตอนชี้เมาส์บอร์ด";
        return true;
      },
      hints: [".btn { transition: all 0.3s ease-in-out; }", ".btn:hover { width: 180px; background-color: #6d28d9; }"]
    },
    {
      id: "css-keyframes-infinite",
      title: "40. อนิเมชันเคลื่อนไหวต่อเนื่อง (Keyframes Animation)",
      category: "6. Transitions & Animations",
      description: `การทำแอนิเมชันเคลื่อนขยับหรือเต้นตามสัดส่วนคีย์เฟรมอย่างสมบูรณ์:
- \`@keyframes ชื่องาน { 0% { ... } 100% { ... } }\`
- ผูกใช้งาน: \`animation: ชื่องาน 1.5s infinite;\` (\`infinite\` สั่งให้เต้นวนซ้ำไม่หยุด)

**เป้าหมาย:**
สร้างลูกเล่นการ์ดหัวใจเต้นขยับยืดหด (\`pulse\`):
1. สร้างแอนิเมชันชื่องาน \`pulse\` โดยกำหนดจุด \`0%\` มี \`transform: scale(1);\` และ \`50%\` มี \`transform: scale(1.1);\` และกลับสู่ \`100%\` มี \`transform: scale(1);\`
2. ผูกในคลาส \`.pulse-box\` ให้ขยับระยะเวลา \`1.5s\` แบบลูปต่อเนื่องไม่สิ้นสุด (\`infinite\`)`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="pulse-box">❤️ หัวใจเต้น</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="pulse-box">❤️ หัวใจเต้น</div>
</body>
</html>`,
      targetCss: `.pulse-box {
  display: inline-block;
  padding: 15px 25px;
  background: white;
  border: 1px solid #ffccd5;
  color: #e11d48;
  font-family: sans-serif;
  font-weight: bold;
  border-radius: 20px;
  animation: pulse 1.5s infinite ease-in-out;
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}`,
      starterCss: `.pulse-box {
  display: inline-block;
  padding: 15px 25px;
  background: white;
  border: 1px solid #ffccd5;
  color: #e11d48;
  font-family: sans-serif;
  font-weight: bold;
  border-radius: 20px;
  /* 2. ผูกแอนิเมชันชื่องาน pulse เต้นต่อเนื่อง */
  
}

/* 1. เขียนคีย์เฟรมแอนิเมชันชื่องาน pulse */
`,
      validation: (doc, cssText) => {
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes('@keyframespulse') && !cleaned.includes('keyframespulse')) return "ขาดโครงสร้างหลักสิทธิ์ @keyframes pulse";
        if (!cleaned.includes('scale(1.1)')) return "อย่าลืมยืดสัดส่วน scale(1.1) ในคีย์เฟรม 50%";
        if (!cleaned.includes('pulse') || !cleaned.includes('infinite')) return "ระบุเชื่อมสไตล์แอนิเมชันและตั้งลูปวนลูปไร้ขอบเขต (infinite)";
        return true;
      },
      hints: [
        "@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }",
        ".pulse-box { animation: pulse 1.5s infinite ease-in-out; }"
      ]
    },
    {
      id: "css-validation-states",
      title: "41. สีเตือนเมื่อป้อนข้อมูลผิด (Form Validation States)",
      category: "6. Transitions & Animations",
      description: `การตรวจสอบความถูกต้องของข้อมูล (Email format) สดๆ โดยแจ้งสีขอบกล่องอินพุตเป็นสีแดงเพื่อเตือนสายตา:
- \`input:invalid\` : สเตทเมื่อคีย์ข้อมูลในอินพุตไม่ผ่านความถูกต้อง (เช่น พิมพ์เมลไม่มี @)
- \`input:focus\` : สเตทกรอบเวลากดเลือกพิมพ์

**เป้าหมาย:**
ตกแต่งให้ช่องป้อนอินพุต \`.field\` ขยับสีเตือนผู้ใช้:
1. สเตทพิมพ์ผิดพลาด (\`.field:invalid\`) ให้ระบุสีเส้นขอบเป็นสีส้มแดง \`#f97316\`
2. สเตทโฟกัสพิมพ์สปอร์ตไลท์ (\`.field:focus\`) ให้ระบุเส้นขอบเป็นสีฟ้านีออน \`#06b6d4\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <form style="max-width: 280px;">
  <input type="email" required placeholder="name@email.com" class="field">
</form>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <form style="max-width: 280px;">
  <input type="email" required placeholder="name@email.com" class="field">
</form>
</body>
</html>`,
      targetCss: `.field {
  width: 100%;
  padding: 10px;
  border: 2px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
}
.field:invalid {
  border-color: #f97316;
}
.field:focus {
  border-color: #06b6d4;
}`,
      starterCss: `.field {
  width: 100%;
  padding: 10px;
  border: 2px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
}

/* 1. สไตล์ขอบเมื่อพิมพ์ผิดฟอร์แมต */


/* 2. สไตล์ขอบเมื่อเลือกพิมพ์ */
`,
      validation: (doc, cssText) => {
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes(':invalid')) return "กรุณาระบุ CSS rule สำหรับสถานะ :invalid";
        if (!cleaned.includes(':focus')) return "กรุณาระบุ CSS rule สำหรับสถานะ :focus";
        return true;
      },
      hints: [".field:invalid { border-color: #f97316; }", ".field:focus { border-color: #06b6d4; }"]
    },
    {
      id: "css-specificity",
      title: "42. น้ำหนักความสำคัญของตัวเลือก (CSS Specificity)",
      category: "3. CSS Basics",
      description: `เรียนรู้กฎเหล็กเรื่องลำดับการประมวลผลและการเอาชนะของสไตล์ (Specificity) เมื่อองค์ประกอบมีหลายตัวเลือกสั่งการทับซ้อนกัน

กฎค่าน้ำหนักความสำคัญสากล (เรียงจากสูงไปต่ำ):
1. **ID Selector** (เช่น \`#main-title\`) : ค่าน้ำหนัก 100 คะแนน (ชนะเสมอในการจับคู่ทั่วไป)
2. **Class Selector** (เช่น \`.highlight\`) : ค่าน้ำหนัก 10 คะแนน
3. **Tag Selector** (เช่น \`h1\`) : ค่าน้ำหนัก 1 คะแนน

**เป้าหมาย:**
จงเขียน CSS 3 ชุดเพื่อระบายสีข้อความหัวข้อ \`<h1>\` ดังนี้:
1. ใช้ **Tag Selector** ระบายสีข้อความเป็น **สีเขียว (#10b981)**
2. ใช้ **Class Selector** ระบายสีข้อความเป็น **สีน้ำเงิน (#3b82f6)**
3. ใช้ **ID Selector** ระบายสีข้อความเป็น **สีส้ม (#f97316)**
*(สังเกตผลลัพธ์พรีวิวว่า สีส้มจาก ID จะชนะตัวเลือกคลาสและแท็กเสมอแม้จะเขียนไว้บรรทัดแรกสุด)*`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <h1 id="main-title" class="highlight">สวัสดีชาวโลก</h1>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <h1 id="main-title" class="highlight">สวัสดีชาวโลก</h1>
</body>
</html>`,
      targetCss: `h1 { color: #10b981; }
.highlight { color: #3b82f6; }
#main-title { color: #f97316; }`,
      starterCss: `/* 1. เขียนระบายสีเขียว (#10b981) ด้วย Tag Selector (h1) */


/* 2. เขียนระบายสีน้ำเงิน (#3b82f6) ด้วย Class Selector (.highlight) */


/* 3. เขียนระบายสีส้ม (#f97316) ด้วย ID Selector (#main-title) */`,
      validation: (doc, cssText) => {
        const h1 = doc.querySelector('h1');
        if (!h1) return "ห้ามลบแท็ก <h1>";
        
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes('h1{color:#10b981') && !cleaned.includes('h1{color:rgb(16,185,129)')) {
          return "กรุณาใส่ Tag Selector h1 และกำหนดสีเป็น #10b981";
        }
        if (!cleaned.includes('.highlight{color:#3b82f6') && !cleaned.includes('.highlight{color:rgb(59,130,246)')) {
          return "กรุณาใส่ Class Selector .highlight และกำหนดสีเป็น #3b82f6";
        }
        if (!cleaned.includes('#main-title{color:#f97316') && !cleaned.includes('#main-title{color:rgb(249,115,22)')) {
          return "กรุณาใส่ ID Selector #main-title และกำหนดสีเป็น #f97316";
        }
        
        const computedColor = doc.defaultView.getComputedStyle(h1).color;
        if (computedColor !== 'rgb(249, 115, 22)' && computedColor !== '#f97316') {
          return "ค่าน้ำหนักสีส้มจาก ID ยังทำงานไม่ถูกต้อง";
        }
        return true;
      },
      hints: ["เขียน h1 { color: #10b981; } ต่อด้วย .highlight { color: #3b82f6; } และ #main-title { color: #f97316; }"]
    },
    {
      id: "css-flex-grow",
      title: "43. การขยายและยืดกล่องยืดหยุ่น (Flex Grow & Fill)",
      category: "4. CSS Layouts",
      description: `เรียนรู้การทำให้กล่องย่อยลูกยืดหยุ่นขยายพื้นที่เพื่อเติมช่องว่างที่เหลืออยู่ในแถว Flexbox container ด้วยคำสั่ง \`flex-grow\`

คุณสมบัติสำคัญ:
- \`flex-grow: 1;\` (หรือคำสั่งย่อ \`flex: 1;\`) : ระบุให้องค์ประกอบขยายตัวยึดครองพื้นที่ว่างในแนวนอนที่เหลือทั้งหมด
- มักนิยมใช้ทำช่องค้นหาข้อมูล (Search Bar) หรือเนื้อหาตรงกลางที่ต้องการให้ยืดขยายตามขนาดหน้าต่าง โดยที่ปุ่มด้านซ้ายและขวามีขนาดคงที่เท่าเดิม

**เป้าหมาย:**
ทำให้ช่องแสดงข้อความค้นหาข้อมูลที่มีคลาส \`.search-bar\` ขยายกว้างเต็มพื้นที่ของแถบนำทางที่เหลืออยู่`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="navbar">
  <div class="logo">LOGO</div>
  <div class="search-bar">พิมพ์ค้นหาที่นี่...</div>
  <button class="login-btn">เข้าสู่ระบบ</button>
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="navbar">
  <div class="logo">LOGO</div>
  <div class="search-bar">พิมพ์ค้นหาที่นี่...</div>
  <button class="login-btn">เข้าสู่ระบบ</button>
</div>
</body>
</html>`,
      targetCss: `.navbar {
  display: flex;
  gap: 10px;
  background-color: #f1f5f9;
  padding: 10px;
  border-radius: 8px;
}
.logo {
  background-color: #3b82f6;
  color: white;
  padding: 8px 12px;
  font-weight: bold;
  border-radius: 4px;
}
.search-bar {
  background-color: white;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  color: #64748b;
  flex-grow: 1;
}
.login-btn {
  background-color: #10b981;
  color: white;
  border: none;
  padding: 8px 12px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
}`,
      starterCss: `.navbar {
  display: flex;
  gap: 10px;
  background-color: #f1f5f9;
  padding: 10px;
  border-radius: 8px;
}
.logo {
  background-color: #3b82f6;
  color: white;
  padding: 8px 12px;
  font-weight: bold;
  border-radius: 4px;
}
.search-bar {
  background-color: white;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  color: #64748b;
  /* 1. ใส่ CSS เพื่อขยายขนาดช่องค้นหานี้ให้เติมพื้นที่ว่างทั้งหมด */
  
}
.login-btn {
  background-color: #10b981;
  color: white;
  border: none;
  padding: 8px 12px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
}`,
      validation: (doc, cssText) => {
        const search = doc.querySelector('.search-bar');
        if (!search) return "ไม่พบช่องค้นหาคลาส .search-bar";
        
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes('flex-grow:1') && !cleaned.includes('flex:1')) {
          return "กรุณาระบุ flex-grow: 1; หรือ flex: 1; ให้กับคลาส .search-bar";
        }
        return true;
      },
      hints: ["ระบุ flex-grow: 1; หรือ flex: 1; ไว้ในบล็อกสไตล์ .search-bar เพื่อขยายสเปก Layout แนวนอน"]
    },
    {
      id: "css-universal-reset",
      title: "44. ตัวเลือกครอบจักรวาลและการล้างระยะขอบ (Universal Selector & Global Reset)",
      category: "3. CSS Basics",
      description: `เรียนรู้การล้างค่าดีฟอลต์ (Style Reset) ที่เบราว์เซอร์ติดตัวมาด้วย และบังคับให้การนับพื้นที่กล่องทั้งระบบเป็นแบบบอร์ดเดอร์บล็อกโดยใช้ตัวเลือกครอบจักรวาล \`*\`

คุณสมบัติสำคัญ:
- ตัวเลือกครอบจักรวาล \`*\` (Universal Selector) : แทนทุกแท็กอักขระในหน้าเอกสาร
- นักพัฒนาเว็บมืออาชีพจะทำสิ่งนี้เป็นบรรทัดแรกของโปรเจกต์ เพื่อกำจัดระยะห่างส่วนเกินและจัดระเบียบสัดส่วน

**เป้าหมาย:**
จงเขียนตัวเลือกครอบจักรวาล \`*\` เพื่อสั่งการตั้งค่าดังนี้:
1. รีเซ็ตระยะห่างขอบภายนอก \`margin: 0;\`
2. รีเซ็ตระยะห่างขอบภายใน \`padding: 0;\`
3. ตั้งระบบกล่องเป็น \`box-sizing: border-box;\` ทั้งระบบ`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="card">
  <h2>กล่องทดสอบสากล</h2>
  <p>ระยะห่างดีฟอลต์ภายนอกและภายในต้องกลายเป็นศูนย์ทั้งหมด</p>
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="card">
  <h2>กล่องทดสอบสากล</h2>
  <p>ระยะห่างดีฟอลต์ภายนอกและภายในต้องกลายเป็นศูนย์ทั้งหมด</p>
</div>
</body>
</html>`,
      targetCss: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: sans-serif;
  padding: 20px;
  background-color: #f1f5f9;
}
.card {
  background: white;
  border: 5px solid #3b82f6;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
}`,
      starterCss: `/* 1. ประกาศ Universal Selector (*) และเขียนเคลียร์ค่า margin, padding และ box-sizing ให้ครบ */


body {
  font-family: sans-serif;
  padding: 20px;
  background-color: #f1f5f9;
}
.card {
  background: white;
  border: 5px solid #3b82f6;
  width: 300px;
  padding: 20px;
  border-radius: 8px;
}`,
      validation: (doc, cssText) => {
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes('*{') && !cleaned.includes('*,*::before,*::after{')) {
          return "กรุณาเริ่มต้นด้วยการประกาศตัวเลือกครอบจักรวาล *";
        }
        if (!cleaned.includes('margin:0') && !cleaned.includes('margin:0px')) {
          return "กรุณาล้างระยะห่างภายนอกด้วย margin: 0;";
        }
        if (!cleaned.includes('padding:0') && !cleaned.includes('padding:0px')) {
          return "กรุณาล้างระยะห่างภายในด้วย padding: 0;";
        }
        if (!cleaned.includes('box-sizing:border-box')) {
          return "กรุณากำหนดการจัดระบบพิกเซลกล่องด้วย box-sizing: border-box;";
        }
        
        const h2 = doc.querySelector('h2');
        if (h2) {
          const style = doc.defaultView.getComputedStyle(h2);
          if (style.marginTop !== '0px' || style.paddingTop !== '0px') {
            return "ระยะห่างเริ่มต้นรอบหัวข้อ h2 ยังไม่ได้ถูกล้างค่าให้เหลือศูนย์";
          }
        }
        return true;
      },
      hints: ["พิมพ์: * { box-sizing: border-box; margin: 0; padding: 0; } ที่บรรทัดแรกสุดของแท็บ CSS"]
    },
    {
      id: "css-layout-float",
      title: "45. การไหลของข้อความล้อมรอบรูปภาพ (CSS Float & Text Wrap)",
      category: "4. CSS Layouts",
      description: `เรียนรู้การใช้งานคุณสมบัติ \`float\` ซึ่งเป็นคำสั่งดั้งเดิมที่มีความสำคัญมากในการทำให้อักษรหรือข้อความต่าง ๆ ไหลโอบล้อมรอบรูปภาพ (Text Wrapping) เหมือนกับการจัดหน้าคอลัมน์ในนิตยสารหรือข่าวสารต่าง ๆ

คุณสมบัติและพารามิเตอร์สำคัญ:
- \`float: left;\` : สั่งให้กล่องหรือรูปภาพลอยไปเกาะติดขอบซ้าย และให้ข้อความย่อหน้าที่ตามมาไหลอ้อมรอบทางด้านขวาและด้านล่าง
- \`float: right;\` : สั่งให้กล่องหรือรูปภาพลอยไปเกาะติดขอบขวา และให้ข้อความย่อหน้าที่ตามมาไหลอ้อมรอบทางด้านซ้ายและด้านล่าง
- \`margin-left\` / \`margin-bottom\` / \`margin-right\` : ใช้ร่วมกับ float เพื่อเว้นระยะช่องไฟที่เหมาะสม ไม่ให้ตัวหนังสือไหลมาชนติดขอบรูปภาพจนอ่านยาก

**เป้าหมาย:**
ทำให้ภาพประกอบคลาส \`.avatar-float\` ลอยตัวไปติดขอบทางขวาของการ์ด และมีระยะช่องไฟที่เหมาะสม:
1. กำหนดคุณสมบัติให้ภาพลอยชิดขวา (\`float: right;\`)
2. กำหนดระยะห่างรอบภาพเพื่อเว้นขอบตัวหนังสือ (\`margin-left: 15px;\` และ \`margin-bottom: 10px;\`)`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="article-box">
  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop" class="avatar-float" alt="Tutor Photo">
  <p>ยินดีต้อนรับสู่หลักสูตรพัฒนาเว็บดีไซน์ ในบทเรียนย่อยนี้เราจะได้ลองจัดสเปกหน้าบทความที่แทรกรูปภาพ โดยการเปิดใช้งานคุณสมบัติ float เพื่อให้ข้อความตัวหนังสือไหลโอบล้อมรูปภาพอย่างเหมาะสม สวยงาม และดูมีระดับเป็นธรรมชาติ</p>
  <p>หากไม่มีการสั่งค่า float รูปภาพจะจองพื้นที่เป็นแถวใหม่หรือเรียงซ้อนแบบผิดปกติ แต่เมื่อสั่ง float แล้ว บราว์เซอร์จะดันตัวหนังสือให้ไหลเข้ามาแชร์พื้นที่ว่างรอบๆ รูปภาพอย่างสวยงาม</p>
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="article-box">
  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop" class="avatar-float" alt="Tutor Photo">
  <p>ยินดีต้อนรับสู่หลักสูตรพัฒนาเว็บดีไซน์ ในบทเรียนย่อยนี้เราจะได้ลองจัดสเปกหน้าบทความที่แทรกรูปภาพ โดยการเปิดใช้งานคุณสมบัติ float เพื่อให้ข้อความตัวหนังสือไหลโอบล้อมรูปภาพอย่างเหมาะสม สวยงาม และดูมีระดับเป็นธรรมชาติ</p>
  <p>หากไม่มีการสั่งค่า float รูปภาพจะจองพื้นที่เป็นแถวใหม่หรือเรียงซ้อนแบบผิดปกติ แต่เมื่อสั่ง float แล้ว บราว์เซอร์จะดันตัวหนังสือให้ไหลเข้ามาแชร์พื้นที่ว่างรอบๆ รูปภาพอย่างสวยงาม</p>
</div>
</body>
</html>`,
      targetCss: `body {
  font-family: sans-serif;
  padding: 20px;
  background-color: #f8fafc;
}
.article-box {
  background: white;
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  line-height: 1.6;
  color: #334155;
}
.avatar-float {
  float: right;
  margin-left: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 2px solid #3b82f6;
}`,
      starterCss: `body {
  font-family: sans-serif;
  padding: 20px;
  background-color: #f8fafc;
}
.article-box {
  background: white;
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  line-height: 1.6;
  color: #334155;
}
.avatar-float {
  border-radius: 8px;
  border: 2px solid #3b82f6;
  /* 1. กำหนดให้รูปภาพลอยชิดขวา */
  
  /* 2. กำหนดระยะห่าง margin ด้านซ้าย 15px และด้านล่าง 10px */
  
}`,
      validation: (doc, cssText) => {
        const img = doc.querySelector('.avatar-float');
        if (!img) return "ไม่พบรูปภาพคลาส .avatar-float";
        
        const style = doc.defaultView.getComputedStyle(img);
        if (style.float !== 'right') {
          return "กรุณากำหนดให้รูปภาพลอยชิดขวาด้วย float: right;";
        }
        
        const ml = parseFloat(style.marginLeft);
        const mb = parseFloat(style.marginBottom);
        if (isNaN(ml) || ml < 14 || isNaN(mb) || mb < 9) {
          return "อย่าลืมเว้นช่องไฟรอบภาพด้วย margin-left: 15px; และ margin-bottom: 10px;";
        }
        return true;
      },
      hints: ["เขียนสไตล์: `float: right; margin-left: 15px; margin-bottom: 10px;` ในคลาส .avatar-float"]
    },
    {
      id: "css-text-overflow",
      title: "46. การจัดข้อความล้นกล่องและจุดไข่ปลา (CSS Text Overflow & Ellipsis)",
      category: "3. CSS Basics",
      description: `เมื่อมีข้อความที่ยาวเกินขนาดความกว้างของกล่องคอนเทนเนอร์ (เช่น หัวข้อข่าวสาร, ชื่อสินค้า หรือชื่อผู้ใช้) ข้อความนั้นจะล้นขอบออกมานอกกล่องจนทำให้โครงสร้างหน้าเว็บเสียหาย วิธีแก้ปัญหายอดนิยมคือการตัดคำและแสดงจุดไข่ปลา (\`...\`) ที่ท้ายบรรทัด

คุณสมบัติ CSS 3 ประการที่จำเป็นต้องทำงานร่วมกัน (ขาดอย่างใดอย่างหนึ่งไม่ได้):
- \`white-space: nowrap;\` : บังคับให้ข้อความทั้งหมดอยู่ในบรรทัดเดียว ไม่ขึ้นบรรทัดใหม่
- \`overflow: hidden;\` : ซ่อนข้อความส่วนที่ยื่นล้นออกนอกกล่อง
- \`text-overflow: ellipsis;\` : ใส่จุดไข่ปลา (\`...\`) แทนข้อความส่วนที่ถูกซ่อน

**เป้าหมาย:**
ทำให้ข้อความในส่วนหัวเรื่องคลาส \`.title-truncate\` ถูกตัดขอบและแสดงจุดไข่ปลาเมื่อข้อความล้นกล่องการ์ดที่มีความกว้าง 280px
1. กำหนด \`white-space: nowrap;\`
2. กำหนด \`overflow: hidden;\`
3. กำหนด \`text-overflow: ellipsis;\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="card">
    <div class="card-image"></div>
    <div class="card-content">
      <h3 class="title-truncate">เรียนรู้วิธีการเขียนเว็บสไตล์โปรเพสชันนอลและเทคนิคการเขียน CSS ให้มีประสิทธิภาพสูงสุดสำหรับนักพัฒนาปี 2026</h3>
      <p class="desc">บทเรียนการทำ Text Overflow ตัดคำแสดงจุดไข่ปลา</p>
    </div>
  </div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="card">
    <div class="card-image"></div>
    <div class="card-content">
      <h3 class="title-truncate">เรียนรู้วิธีการเขียนเว็บสไตล์โปรเพสชันนอลและเทคนิคการเขียน CSS ให้มีประสิทธิภาพสูงสุดสำหรับนักพัฒนาปี 2026</h3>
      <p class="desc">บทเรียนการทำ Text Overflow ตัดคำแสดงจุดไข่ปลา</p>
    </div>
  </div>
</body>
</html>`,
      targetCss: `body {
  font-family: sans-serif;
  background-color: #f1f5f9;
  padding: 40px;
  display: flex;
  justify-content: center;
}
.card {
  background: white;
  width: 280px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  border: 1px solid #e2e8f0;
}
.card-image {
  height: 120px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
}
.card-content {
  padding: 16px;
}
.title-truncate {
  font-size: 16px;
  color: #1e293b;
  margin: 0 0 8px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.desc {
  font-size: 13px;
  color: #64748b;
  margin: 0;
}`,
      starterCss: `body {
  font-family: sans-serif;
  background-color: #f1f5f9;
  padding: 40px;
  display: flex;
  justify-content: center;
}
.card {
  background: white;
  width: 280px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  border: 1px solid #e2e8f0;
}
.card-image {
  height: 120px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
}
.card-content {
  padding: 16px;
}
.title-truncate {
  font-size: 16px;
  color: #1e293b;
  margin: 0 0 8px 0;
  
  /* 1. สั่งห้ามข้อความขึ้นบรรทัดใหม่ */
  
  /* 2. ซ่อนข้อความส่วนที่ล้นออกไป */
  
  /* 3. แสดงจุดไข่ปลา (...) ท้ายข้อความ */
  
}
.desc {
  font-size: 13px;
  color: #64748b;
  margin: 0;
}`,
      validation: (doc, cssText) => {
        const title = doc.querySelector('.title-truncate');
        if (!title) return "ไม่พบหัวเรื่องคลาส .title-truncate";
        
        const style = doc.defaultView.getComputedStyle(title);
        
        if (style.whiteSpace !== 'nowrap') {
          return "กรุณากำหนดคุณสมบัติ white-space เป็น nowrap เพื่อบังคับให้อักษรเรียงบรรทัดเดียว";
        }
        if (style.overflow !== 'hidden') {
          return "กรุณากำหนดคุณสมบัติ overflow เป็น hidden เพื่อซ่อนคำที่ล้นกล่อง";
        }
        if (style.textOverflow !== 'ellipsis') {
          return "กรุณากำหนดคุณสมบัติ text-overflow เป็น ellipsis เพื่อเพิ่มจุดไข่ปลา (...) ปิดท้าย";
        }
        return true;
      },
      hints: ["เขียนสไตล์: `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` ในคลาส .title-truncate"]
    }
  ],
  challenges: [
    {
      id: "challenge-profile-card",
      title: "ภารกิจที่ 1: Profile Card (การ์ดประวัติส่วนตัว)",
      difficulty: "Beginner",
      points: 100,
      description: `**จงสร้างการ์ดโปรไฟล์ให้เหมือนตัวอย่าง โดยไม่ดูโค้ด**
      
ข้อกำหนดในการออกแบบและข้อมูลที่ต้องการ:
- คลาสหลัก \`.profile-card\` มีความกว้าง \`320px\`, พื้นหลังขาว, ขอบมน \`16px\`, และเงาด้านหลังที่นุ่มนวล
- ใช้แท็กรูปภาพ \`<img>\` คลาส \`avatar\` โดยดึงรูปภาพจากลิงก์เฉพาะนี้:
  **\`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop\`** (ต้องระบุขอบโค้งมนเป็นวงกลมสมบูรณ์)
- มีหัวข้อ \`<h2>\` เขียนชื่อ: \`ศิรินทร์ แก้วมณี\`
- มีแท็กย่อหน้า \`<p>\` คลาส \`role\` เขียนบทบาท: \`UI/UX Designer\`
- มีแท็กย่อหน้า \`<p>\` คลาส \`bio\` เขียนคำบรรยาย: \`ผู้รักการออกแบบและพัฒนาส่วนติดต่อผู้ใช้งานที่เรียบง่ายและเป็นธรรมชาติ\`
- มีกลุ่มปุ่มคลาส \`actions\` ประกอบด้วยแท็ก \`<button>\` คลาส \`btn-primary\` (ข้อความ: \`ติดตาม\`) และคลาส \`btn-secondary\` (ข้อความ: \`ข้อความ\`)`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- ออกแบบหน้าต่างการ์ดโปรไฟล์ของคุณที่นี่ -->
<div class="profile-card">
  <!-- ใส่รูป avatar, ชื่อ, บทบาท, bio, และปุ่มกดให้ครบถ้วน -->
  
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="profile-card">
  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" alt="User Profile" class="avatar">
  <h2>ศิรินทร์ แก้วมณี</h2>
  <p class="role">UI/UX Designer</p>
  <p class="bio">ผู้รักการออกแบบและพัฒนาส่วนติดต่อผู้ใช้งานที่เรียบง่ายและเป็นธรรมชาติ</p>
  <div class="actions">
    <button class="btn-primary">ติดตาม</button>
    <button class="btn-secondary">ข้อความ</button>
  </div>
</div>
</body>
</html>`,
      targetCss: `body {
  background-color: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: 'Inter', sans-serif;
}

.profile-card {
  background: white;
  width: 320px;
  padding: 30px 20px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  text-align: center;
  box-sizing: border-box;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #f1f5f9;
  object-fit: cover;
  margin-bottom: 15px;
}

h2 {
  margin: 10px 0 5px 0;
  font-size: 22px;
  color: #1e293b;
}

.role {
  color: #2563eb;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 15px;
}

.bio {
  color: #64748b;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
  padding: 0 10px;
}

.actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

button {
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  flex: 1;
}

.btn-primary {
  background-color: #2563eb;
  color: white;
}

.btn-primary:hover {
  background-color: #1d4ed8;
}

.btn-secondary {
  background-color: #e2e8f0;
  color: #475569;
}

.btn-secondary:hover {
  background-color: #cbd5e1;
}`,
      starterCss: `/* เขียนสไตล์ตกแต่งที่นี่เพื่อให้ตรงกับตัวอย่างต้นแบบ */
body {
  background-color: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: sans-serif;
}

.profile-card {
  
}`,
      validation: (doc) => {
        const card = doc.querySelector('.profile-card');
        const img = doc.querySelector('.avatar, img');
        const buttons = doc.querySelectorAll('button');
        if (!card) return "ขาด Container หลักที่มีคลาส .profile-card";
        if (!img) return "กรุณาใส่รูปโปรไฟล์ (แท็ก <img>)";
        
        const style = doc.defaultView.getComputedStyle(card);
        const imgStyle = doc.defaultView.getComputedStyle(img);
        
        if (parseFloat(style.borderRadius) < 10) return "การ์ด .profile-card ต้องมีความโค้งมนสวยงาม (border-radius)";
        if (imgStyle.borderRadius !== '50%' && !imgStyle.borderRadius.includes('50px')) return "รูปภาพโปรไฟล์จะต้องมีขอบโค้งมนเป็นวงกลมสมบูรณ์ (border-radius: 50%)";
        if (buttons.length < 2) return "กรุณาสร้างปุ่มอย่างน้อย 2 ปุ่ม (ปุ่มติดตาม และปุ่มข้อความ)";
        
        return true;
      }
    },
    {
      id: "challenge-chat-ui",
      title: "ภารกิจที่ 2: Chat UI Window (หน้าจอห้องแชท)",
      difficulty: "Intermediate",
      points: 150,
      description: `**จงสร้างหน้าต่างแชท (Chat Window) สไตล์โมเดิร์นตามตัวอย่าง**
      
ข้อกำหนดในการออกแบบและข้อมูลที่ต้องการ:
- ส่วนหัว \`chat-header\` แสดงชื่อผู้ติดต่อ: \`คุณครูสมศรี\` และสถานะ \`กำลังพิมพ์...\` โดยมีจุดสถานะ \`status-dot\` สีเขียวออนไลน์
- ข้อความแชทมี 3 ข้อความ คลาส \`message\` เรียงลำดับดังนี้:
  1. ข้อความรับเข้า (\`incoming\`): \`สวัสดีค่ะ มีข้อสงสัยเรื่อง CSS ตรงไหนถามครูได้เลยนะ\`
  2. ข้อความส่งออก (\`outgoing\`): \`ขอบคุณครับครู ผมยังงงเรื่องการจัดตำแหน่งด้วย Flexbox อยู่ครับ\`
  3. ข้อความรับเข้า (\`incoming\`): \`ไม่ยากเลย ลองเรียนบทเรียนที่ 5 ของเราหรือยังคะ?\`
- ส่วนพิมพ์ส่งด้านล่างคลาส \`chat-footer\` มีช่อง \`<input type="text">\` ป้ายตัวนำทาง \`placeholder="พิมพ์ข้อความที่นี่..."\` และปุ่ม \`<button>\` ข้อความ \`ส่ง\`
- จัดการให้ข้อความรับและส่งแยกชิดซ้ายและขวาแยกจากกันให้ถูกต้อง`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="chat-container">
  <!-- 1. ส่วนหัว (Header) -->
  
  
  <!-- 2. ประวัติข้อความ (Messages Area) -->
  
  
  <!-- 3. ส่วนพิมพ์ส่ง (Footer) -->
  
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="chat-container">
  <div class="chat-header">
    <div class="user-info">
      <span class="status-dot"></span>
      <div>
        <h3>คุณครูสมศรี</h3>
        <p>กำลังพิมพ์...</p>
      </div>
    </div>
  </div>
  <div class="chat-messages">
    <div class="message incoming">สวัสดีค่ะ มีข้อสงสัยเรื่อง CSS ตรงไหนถามครูได้เลยนะ</div>
    <div class="message outgoing">ขอบคุณครับครู ผมยังงงเรื่องการจัดตำแหน่งด้วย Flexbox อยู่ครับ</div>
    <div class="message incoming">ไม่ยากเลย ลองเรียนบทเรียนที่ 5 ของเราหรือยังคะ?</div>
  </div>
  <div class="chat-footer">
    <input type="text" placeholder="พิมพ์ข้อความที่นี่...">
    <button>ส่ง</button>
  </div>
</div>
</body>
</html>`,
      targetCss: `body {
  background-color: #e2e8f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: 'Inter', sans-serif;
}

.chat-container {
  width: 360px;
  height: 480px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-header {
  background-color: #0f172a;
  color: white;
  padding: 15px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.status-dot {
  width: 10px;
  height: 10px;
  background-color: #22c55e;
  border-radius: 50%;
}

.chat-header h3 {
  margin: 0;
  font-size: 16px;
}

.chat-header p {
  margin: 2px 0 0 0;
  font-size: 12px;
  color: #94a3b8;
}

.chat-messages {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message {
  max-width: 75%;
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.4;
}

.incoming {
  background-color: #e2e8f0;
  color: #1e293b;
  align-self: flex-start;
  border-top-left-radius: 2px;
}

.outgoing {
  background-color: #2563eb;
  color: white;
  align-self: flex-end;
  border-top-right-radius: 2px;
}

.chat-footer {
  padding: 12px;
  border-top: 1px solid #e2e8f0;
  display: flex;
  gap: 8px;
}

.chat-footer input {
  flex: 1;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 10px;
  outline: none;
  font-size: 14px;
}

.chat-footer button {
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 0 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

.chat-footer button:hover {
  background-color: #1d4ed8;
}`,
      starterCss: `body {
  background-color: #e2e8f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: sans-serif;
}

.chat-container {
  /* สร้างกล่องแชทแนวตั้ง */
  
}`,
      validation: (doc) => {
        const container = doc.querySelector('.chat-container');
        const messages = doc.querySelectorAll('.message');
        const input = doc.querySelector('input');
        const btn = doc.querySelector('button');
        
        if (!container) return "ไม่พบคลาส .chat-container สำหรับตัวคุมห้องแชทหลัก";
        if (messages.length < 3) return "กรุณาสร้างประวัติข้อความ (.message) อย่างน้อย 3 รายการ";
        if (!input || !btn) return "กรุณาใส่ช่องกรอกข้อความ <input> และปุ่มส่ง <button> ในส่วน Footer";
        
        const cStyle = doc.defaultView.getComputedStyle(container);
        if (cStyle.display !== 'flex' || cStyle.flexDirection !== 'column') {
          return "แนะนำให้ตั้งค่า .chat-container ให้มี display: flex; และ flex-direction: column;";
        }
        
        let hasIncoming = false;
        let hasOutgoing = false;
        messages.forEach(msg => {
          if (msg.classList.contains('incoming')) hasIncoming = true;
          if (msg.classList.contains('outgoing')) hasOutgoing = true;
        });
        
        if (!hasIncoming || !hasOutgoing) return "กรุณาใส่คลาสให้ชัดเจน เช่น .incoming สำหรับแชทเข้า และ .outgoing สำหรับแชทออก";
        
        return true;
      }
    },
    {
      id: "challenge-glassmorphism",
      title: "ภารกิจที่ 3: Glassmorphic Login Form (ฟอร์มล็อกอินกระจกฝ้า)",
      difficulty: "Hard",
      points: 200,
      description: `**สร้างฟอร์ม Login โปร่งแสงแนว Glassmorphism ลอยอยู่บนพื้นหลัง Gradient หลากสี**
      
ข้อกำหนดในการออกแบบและข้อมูลที่ต้องการ:
- ฉากหลังหน้าจอมีสีไล่ระดับ \`linear-gradient(135deg, #667eea 0%, #764ba2 100%)\`
- กล่องฟอร์มหลักคลาส \`login-box\` มีคุณสมบัติโปร่งแสงและเบลอพื้นหลังด้วย \`backdrop-filter: blur(12px);\`
- มีหัวข้อ \`<h2>\` เขียนว่า \`เข้าสู่ระบบ\`
- มีแบบฟอร์มคลาส \`input-group\` สองชุด:
  1. ช่องกรอกอีเมล: ป้ายชื่อ \`<label>\` เขียนว่า \`อีเมล\` ช่องป้อนข้อความ \`<input type="email">\` มีตัวนำทาง \`placeholder="example@email.com"\`
  2. ช่องกรอกรหัสผ่าน: ป้ายชื่อ \`<label>\` เขียนว่า \`รหัสผ่าน\` ช่องป้อนข้อความ \`<input type="password">\` มีตัวนำทาง \`placeholder="••••••••"\`
- ปุ่มกดคลาส \`btn-login\` เขียนว่า \`เข้าสู่ระบบ\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="login-box">
  <!-- หัวข้อ, ฟอร์มล็อกอิน, และช่องกรอกข้อมูลแบบกระจกฝ้า -->
  
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="login-box">
  <h2>เข้าสู่ระบบ</h2>
  <form>
    <div class="input-group">
      <label>อีเมล</label>
      <input type="email" placeholder="example@email.com" required>
    </div>
    <div class="input-group">
      <label>รหัสผ่าน</label>
      <input type="password" placeholder="••••••••" required>
    </div>
    <button type="submit" class="btn-login">เข้าสู่ระบบ</button>
  </form>
</div>
</body>
</html>`,
      targetCss: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: 'Inter', sans-serif;
}

.login-box {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  width: 350px;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  color: white;
  box-sizing: border-box;
}

h2 {
  text-align: center;
  margin-top: 0;
  margin-bottom: 30px;
  font-weight: 600;
  letter-spacing: 1px;
}

.input-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-group label {
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
}

.input-group input {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 12px;
  color: white;
  outline: none;
  font-size: 14px;
  transition: 0.3s;
}

.input-group input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.input-group input:focus {
  border-color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.15);
}

.btn-login {
  background: white;
  color: #764ba2;
  border: none;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.3s ease;
}

.btn-login:hover {
  background: #f1f5f9;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}`,
      starterCss: `body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: sans-serif;
}

.login-box {
  /* 1. ใส่สีพื้นหลังโปร่งแสง */
  
  /* 2. เบลอฉากหลังด้วย backdrop-filter */
  
  /* 3. ขอบกระจกโปร่งใส */
  
}`,
      validation: (doc) => {
        const box = doc.querySelector('.login-box');
        if (!box) return "ไม่พบกล่องล็อกอิน .login-box";
        
        const style = doc.defaultView.getComputedStyle(box);
        const bgVal = style.backgroundColor;
        const bdFilter = style.backdropFilter || style.webkitBackdropFilter;
        
        if (!bgVal.includes('rgba') && bgVal !== 'transparent') {
          const opacityMatch = bgVal.match(/rgba\(\d+,\s*\d+,\s*\d+,\s*([\d.]+)\)/);
          if (opacityMatch && parseFloat(opacityMatch[1]) >= 0.95) {
            return "พื้นหลัง .login-box ต้องมีความโปร่งใสบางส่วน (ใช้ rgba(255, 255, 255, 0.1) เป็นต้น)";
          }
        }
        
        if (!bdFilter || bdFilter === 'none') {
          return "กรุณาใส่สไตล์เบลอฉากหลัง backdrop-filter: blur(...) เพื่อสร้างลักษณะกระจกฝ้า";
        }
        
        return true;
      }
    },
    {
      id: "challenge-pricing-table",
      title: "ภารกิจที่ 4: Pricing Cards (ตารางราคาตอบสนอง)",
      difficulty: "Hard",
      points: 200,
      description: `**จงสร้างตารางการ์ดราคา (Pricing Cards) 2 ใบที่ตอบสนองเมื่อผู้ใช้ชี้เมาส์**

ข้อกำหนดในการออกแบบและข้อมูลที่ต้องการ:
- กล่องคุมหลัก \`pricing-container\` บรรจุการ์ดราคา \`price-card\` สองใบเรียงกันในแนวนอน:
  1. การ์ดใบแรก (ทั่วไป):
     - หัวข้อ \`<h3>\` เขียนว่า \`เริ่มต้น\`
     - แถบแสดงราคา คลาส \`price\` เขียนว่า \`฿0\` และมีสแปน \`<span>/เดือน</span>\`
     - รายการฟีเจอร์ คลาส \`features\` (ใช้แท็ก \`<ul>\` และ \`<li>\`): \`เข้าเรียนเนื้อหาพื้นฐาน\`, \`แชทห้องสาธารณะ\`, \`จำกัด 3 โจทย์ความท้าทาย\`
     - ปุ่มยืนยัน คลาส \`btn\` ข้อความ: \`เรียนฟรีเลย\`
  2. การ์ดใบที่สอง (ยอดนิยม) คลาสพิเศษ \`price-card popular\`:
     - มีป้ายกำกับลอยด้านบน คลาส \`badge\` เขียนว่า \`ยอดนิยม\`
     - หัวข้อ \`<h3>\` เขียนว่า \`โปรแกรด\`
     - แถบแสดงราคา คลาส \`price\` เขียนว่า \`฿299\` และมีสแปน \`<span>/เดือน</span>\`
     - รายการฟีเจอร์: \`เข้าถึงบทเรียนทั้งหมด 100%\`, \`สิทธิส่งงานให้ผู้เชี่ยวชาญตรวจ\`, \`เข้าถึงทุกโจทย์ไม่จำกัด\`
     - ปุ่มคลาส \`btn btn-popular\` ข้อความ: \`สมัครสมาชิกระดับโปร\`
- ใส่ Hover Effect ให้การ์ดยกตัวขึ้น \`transform: translateY(-8px);\` เมื่อชี้เมาส์`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="pricing-container">
  <!-- ตารางการ์ดราคา 2 ใบ (มีใบหนึ่งมีคลาส .popular) -->
  
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="pricing-container">
  <div class="price-card">
    <h3>เริ่มต้น</h3>
    <div class="price">฿0<span>/เดือน</span></div>
    <ul class="features">
      <li>เข้าเรียนเนื้อหาพื้นฐาน</li>
      <li>แชทห้องสาธารณะ</li>
      <li>จำกัด 3 โจทย์ความท้าทาย</li>
    </ul>
    <button class="btn">เรียนฟรีเลย</button>
  </div>
  <div class="price-card popular">
    <div class="badge">ยอดนิยม</div>
    <h3>โปรแกรด</h3>
    <div class="price">฿299<span>/เดือน</span></div>
    <ul class="features">
      <li>เข้าถึงบทเรียนทั้งหมด 100%</li>
      <li>สิทธิส่งงานให้ผู้เชี่ยวชาญตรวจ</li>
      <li>เข้าถึงทุกโจทย์ไม่จำกัด</li>
    </ul>
    <button class="btn btn-popular">สมัครสมาชิกระดับโปร</button>
  </div>
</div>
</body>
</html>`,
      targetCss: `body {
  background-color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: 'Inter', sans-serif;
  padding: 20px;
}

.pricing-container {
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 700px;
  justify-content: center;
  box-sizing: border-box;
}

.price-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 35px 25px;
  flex: 1;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  display: flex;
  flex-direction: column;
}

.price-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
}

.price-card.popular {
  border: 2px solid #2563eb;
}

.popular .badge {
  position: absolute;
  top: -12px;
  right: 20px;
  background-color: #2563eb;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 20px;
}

.price-card h3 {
  margin: 0 0 15px 0;
  color: #475569;
  font-size: 18px;
}

.price {
  font-size: 36px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 20px;
}

.price span {
  font-size: 14px;
  color: #64748b;
  font-weight: normal;
}

.features {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
  flex: 1;
}

.features li {
  padding: 10px 0;
  color: #475569;
  font-size: 14px;
  border-bottom: 1px solid #f1f5f9;
}

.btn {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background: transparent;
  color: #475569;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:hover {
  background-color: #f1f5f9;
}

.btn-popular {
  background-color: #2563eb;
  color: white;
  border: none;
}

.btn-popular:hover {
  background-color: #1d4ed8;
}

@media (max-width: 600px) {
  .pricing-container {
    flex-direction: column;
  }
}`,
      starterCss: `body {
  background-color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: sans-serif;
}

.pricing-container {
  /* วางเลย์เอาต์การ์ดเรียงแนวนอน */
  
}

.price-card {
  /* สไตล์การ์ดทั่วไป มี Transition */
  
}

.price-card:hover {
  /* ยกตัวกล่องและเพิ่มเงาเวลา Hover */
  
}

.price-card.popular {
  /* เส้นขอบสีน้ำเงินพิเศษ */
  
}`,
      validation: (doc, cssText) => {
        const cards = doc.querySelectorAll('.price-card');
        const popular = doc.querySelector('.price-card.popular');
        
        if (cards.length < 2) return "กรุณาสร้างการ์ดราคา (.price-card) อย่างน้อย 2 ใบ";
        if (!popular) return "ต้องมีการ์ดใบหนึ่งระบุคลาสยอดนิยมด้วยคลาส .price-card.popular";
        
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes('translateY(-') && !cleaned.includes('translate3d(')) {
          return "อย่าลืมเพิ่มเอฟเฟกต์ยกตัวกล่องการ์ดขึ้น เช่น transform: translateY(-8px); ในช่วง hover";
        }
        
        return true;
      }
    },
    {
      id: "challenge-dashboard",
      title: "ภารกิจที่ 5: Responsive Dashboard (แดชบอร์ดจัดการระบบ)",
      difficulty: "Hard",
      points: 250,
      description: `**ภารกิจจัดเลย์เอาต์ระบบแดชบอร์ดสองมิติด้วย CSS Grid Areas และคุม Responsive**
      
โจทย์กำหนดให้สร้างโครงสร้างแดชบอร์ดประกอบด้วย:
1. คลาสแม่ \`.dashboard\` จัด Layout หลักโดยใช้ \`grid-template-areas\` แผงหน้าจอ
- Desktop layout มี 2 คอลัมน์ แถวบนหัวข้อ แถวล่างพื้นที่ทำงาน:
  - คอลัมน์ซ้ายสุดเป็นเมนูขอบข้าง (\`sidebar\`)
  - คอลัมน์ขวาเป็นแถวหัวข้อ (\`header\`) และแถบพื้นที่ทำงานหลัก (\`main\`)
2. มีสื่อสารตอบสนอง \`@media (max-width: 768px)\` เพื่อปรับเปลี่ยนเลย์เอาต์ให้ยืดแบบคอลัมน์เดี่ยวแนวดิ่ง (จัดให้ \`header\`, \`sidebar\`, \`main\` แสดงเรียงกันบนลงล่าง)

*(หมายเหตุ: โค้ดเฉลยถูกซ่อนไว้ ให้ใช้แท็บ Compare เลื่อนเปรียบเทียบผลงานพิกเซลต่อพิกเซลเพื่อทำตามแบบ)*`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="dashboard">
  <aside class="side-panel">เมนูข้าง (Sidebar)</aside>
  <header class="top-nav">หัวข้อแดชบอร์ด (Header)</header>
  <main class="content-area">
    <div class="grid-cards">
      <div class="stat-card">ผู้เข้าชม: 12,450</div>
      <div class="stat-card">รายได้สะสม: ฿45,000</div>
      <div class="stat-card">ยอดการสั่งซื้อ: 320 รายการ</div>
    </div>
  </main>
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="dashboard">
  <aside class="side-panel">เมนูข้าง (Sidebar)</aside>
  <header class="top-nav">หัวข้อแดชบอร์ด (Header)</header>
  <main class="content-area">
    <div class="grid-cards">
      <div class="stat-card">ผู้เข้าชม: 12,450</div>
      <div class="stat-card">รายได้สะสม: ฿45,000</div>
      <div class="stat-card">ยอดการสั่งซื้อ: 320 รายการ</div>
    </div>
  </main>
</div>
</body>
</html>`,
      targetCss: `body {
  margin: 0;
  font-family: sans-serif;
  background-color: #f1f5f9;
}
.dashboard {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas: 
    "sidebar header"
    "sidebar main";
  height: 100vh;
}
@media (max-width: 768px) {
  .dashboard {
    grid-template-columns: 1fr;
    grid-template-rows: 60px auto auto;
    grid-template-areas: 
      "header"
      "sidebar"
      "main";
    height: auto;
  }
}
.side-panel {
  background-color: #1e293b;
  color: white;
  padding: 20px;
  grid-area: sidebar;
}
.top-nav {
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
  grid-area: header;
  font-weight: bold;
}
.content-area {
  padding: 20px;
  grid-area: main;
}
.grid-cards {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
.stat-card {
  flex: 1;
  min-width: 180px;
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  font-size: 18px;
  font-weight: bold;
}`,
      starterCss: `body {
  margin: 0;
  font-family: sans-serif;
  background-color: #f1f5f9;
}

.dashboard {
  /* 1. จัดเลย์เอาต์ Grid Areas สำหรับ Desktop */
  
}

@media (max-width: 768px) {
  .dashboard {
    /* 2. จัดเลย์เอาต์ใหม่สำหรับหน้าจอมือถือ */
    
  }
}

.side-panel {
  background-color: #1e293b;
  color: white;
  padding: 20px;
  grid-area: sidebar;
}
.top-nav {
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid #e2e8f0;
  grid-area: header;
  font-weight: bold;
}
.content-area {
  padding: 20px;
  grid-area: main;
}
.grid-cards {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}
.stat-card {
  flex: 1;
  min-width: 180px;
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  font-size: 18px;
  font-weight: bold;
}`,
      validation: (doc, cssText) => {
        const dashboard = doc.querySelector('.dashboard');
        if (!dashboard) return "ไม่พบกล่องหลัก .dashboard";
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes('grid-template-areas')) return "กรุณาใช้ระบบ grid-template-areas ในการจัดเลย์เอาต์";
        if (!cleaned.includes('@media')) return "กรุณาระบุ CSS Media Query (@media) สำหรับรองรับจอมือถือตามโจทย์";
        return true;
      }
    },
    {
      id: "challenge-music-player",
      title: "ภารกิจที่ 6: Premium Music Player (เครื่องเล่นเพลง Synthwave)",
      difficulty: "Hard",
      points: 300,
      description: `**ภารกิจสร้างเครื่องเล่นเพลงธีมมืดสุดหรูหราพร้อมอนิเมชันอัลบั้มหมุนต่อเนื่อง**
      
ข้อกำหนดในการออกแบบและข้อมูลที่ต้องการ:
- การ์ดเครื่องเล่นเพลง คลาส \`player-card\` มีฉากหลังไล่เฉดสีมืดและเงาสีนีออน
- รูปหน้าปกอัลบั้ม คลาส \`album-art\` วงกลมหมุนได้รอบตัว ต้องใช้ลิงก์เฉพาะนี้:
  **\`https://images.unsplash.com/photo-1614680376593-902f74fa0d41?w=150&h=150&fit=crop\`** (กำหนดหมุนตลอดไปด้วยแอนิเมชัน spinAlbum 12s linear infinite)
- รายละเอียดเพลง คลาส \`song-info\` มีชื่อเพลง \`Cyberpunk Night\` ในหัวข้อ \`<h3>\` และศิลปิน \`Neon Synthwave\` ในแท็ก \`<p>\`
- แถบความคืบหน้าการเล่น คลาส \`progress-bar-container\` มีแถบขยายตัวด้านในคลาส \`progress-line\` แสดงสัดส่วนแถบความยาว \`65%\`
- แถบควบคุม คลาส \`controls\` ประกอบด้วยปุ่มเล่นย้อนกลับ \`◀◀\`, ปุ่มหลักเล่นคลาส \`play\` เขียนว่า \`▶\` และปุ่มเล่นข้าม \`▶▶\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="player-card">
  <div class="album-art-container">
    <img src="https://images.unsplash.com/photo-1614680376593-902f74fa0d41?w=150&h=150&fit=crop" class="album-art">
  </div>
  <div class="song-info">
    <h3>Cyberpunk Night</h3>
    <p>Neon Synthwave</p>
  </div>
  <div class="progress-bar-container">
    <div class="progress-line"></div>
  </div>
  <div class="controls">
    <button class="btn-ctrl">◀◀</button>
    <button class="btn-ctrl play">▶</button>
    <button class="btn-ctrl">▶▶</button>
  </div>
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="player-card">
  <div class="album-art-container">
    <img src="https://images.unsplash.com/photo-1614680376593-902f74fa0d41?w=150&h=150&fit=crop" class="album-art">
  </div>
  <div class="song-info">
    <h3>Cyberpunk Night</h3>
    <p>Neon Synthwave</p>
  </div>
  <div class="progress-bar-container">
    <div class="progress-line"></div>
  </div>
  <div class="controls">
    <button class="btn-ctrl">◀◀</button>
    <button class="btn-ctrl play">▶</button>
    <button class="btn-ctrl">▶▶</button>
  </div>
</div>
</body>
</html>`,
      targetCss: `body {
  background-color: #0b0f19;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: sans-serif;
}
.player-card {
  background: linear-gradient(135deg, #1e293b, #0f172a);
  border-radius: 20px;
  width: 280px;
  padding: 30px 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(59,130,246,0.15);
  box-sizing: border-box;
  border: 1px solid rgba(255,255,255,0.05);
}
.album-art-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.album-art {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #334155;
  object-fit: cover;
  animation: spinAlbum 12s linear infinite;
}
@keyframes spinAlbum {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.song-info {
  text-align: center;
  color: white;
  margin: 15px 0;
}
.song-info h3 { margin: 0; font-size: 18px; }
.song-info p { margin: 5px 0 0 0; color: #3b82f6; font-size: 13px; font-weight: bold; }
.progress-bar-container {
  height: 4px;
  background-color: #334155;
  border-radius: 2px;
  margin-bottom: 20px;
  position: relative;
}
.progress-line {
  width: 65%;
  height: 100%;
  background-color: #3b82f6;
  border-radius: 2px;
  box-shadow: 0 0 8px #3b82f6;
}
.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.btn-ctrl {
  background: none;
  border: none;
  color: #94a3b8;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.2s;
}
.btn-ctrl:hover { color: white; }
.btn-ctrl.play {
  background-color: #3b82f6;
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  transition: all 0.2s;
}
.btn-ctrl.play:hover {
  transform: scale(1.1);
  background-color: #60a5fa;
}
`,
      starterCss: `body {
  background-color: #0b0f19;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: sans-serif;
}

.player-card {
  /* 1. สไตล์การ์ดธีมมืดและเงาสีน้ำเงิน */
  
}

.album-art {
  /* 2. สไตล์ขอบกลมและแอนิเมชันหมุนวนหมุนตลอดเวลา */
  
}

/* เขียน @keyframes สำหรับการหมุน */

.song-info {
  text-align: center;
  color: white;
  margin: 15px 0;
}
.song-info h3 { margin: 0; font-size: 18px; }
.song-info p { margin: 5px 0 0 0; color: #3b82f6; font-size: 13px; font-weight: bold; }

.progress-bar-container {
  height: 4px;
  background-color: #334155;
  border-radius: 2px;
  margin-bottom: 20px;
  position: relative;
}
.progress-line {
  width: 65%;
  height: 100%;
  background-color: #3b82f6;
  border-radius: 2px;
  box-shadow: 0 0 8px #3b82f6;
}
.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.btn-ctrl {
  background: none;
  border: none;
  color: #94a3b8;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.2s;
}
.btn-ctrl:hover { color: white; }
.btn-ctrl.play {
  background-color: #3b82f6;
  color: white;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  transition: all 0.2s;
}
.btn-ctrl.play:hover {
  transform: scale(1.1);
  background-color: #60a5fa;
}`,
      validation: (doc, cssText) => {
        const img = doc.querySelector('.album-art');
        if (!img) return "ไม่พบรูปภาพปก .album-art";
        const imgStyle = doc.defaultView.getComputedStyle(img);
        if (imgStyle.borderRadius !== '50%' && !imgStyle.borderRadius.includes('50px')) return "รูปอัลบั้มต้องกลมสนิท (border-radius: 50%)";
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes('infinite') || !cleaned.includes('spin')) return "อย่าลืมระบุคุณสมบัติแอนิเมชันสำหรับหมุนอัลบั้มต่อเนื่อง";
        return true;
      }
    },
    {
      id: "challenge-accordion",
      title: "ภารกิจที่ 7: CSS-only FAQs Accordion (ระบบสไลด์ยืดหดไร้ JS)",
      difficulty: "Hard",
      points: 350,
      description: `**ภารกิจออกแบบเมนูยืดหดอัจฉริยะโดยใช้คุณสมบัติสเตทและ Sibling Selector ใน CSS เท่านั้น**
      
ข้อกำหนด FAQs Accordion:
1. ซ่อนเช็คบ็อกซ์ \`input[type="checkbox"]\` ของระบบเริ่มต้น
2. ลิงก์หัวข้อ \`label\` ให้เข้ากับอินพุต เมื่อผู้ใช้กดคลิก หัวข้อจะทำการ Toggle สถานะเช็คอินพุต
3. ตั้งค่าความสูงกล่องเนื้อหา \`.content-box\` เริ่มต้นเป็น 0 และซ่อนเนื้อหา (\`max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out;\`)
4. เมื่อเช็คบ็อกซ์ถูกติ๊กเลือก (\`:checked\`) ให้ตั้งความสูงสยายกางแสดงกล่องยืดเนื้อหา (\`max-height: 120px;\`) โดยการอ้างอิงผ่าน sibling selector (\`input:checked ~ .content-box\`)`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="accordion">
  <div class="item">
    <input type="checkbox" id="faq-1" class="accordion-toggle">
    <label for="faq-1" class="accordion-header">CSS คืออะไร?</label>
    <div class="content-box">
      <p>CSS ย่อมาจาก Cascading Style Sheets เป็นภาษาที่ใช้สำหรับการกำหนดรูปแบบสไตล์และดีไซน์หน้าตาของหน้าเว็บเพจ</p>
    </div>
  </div>
  <div class="item">
    <input type="checkbox" id="faq-2" class="accordion-toggle">
    <label for="faq-2" class="accordion-header">Flexbox ต่างจาก Grid อย่างไร?</label>
    <div class="content-box">
      <p>Flexbox ออกแบบมาสำหรับการจัดเลย์เอาต์หน้าจอในมิติเดียว (แนวนอนหรือแนวตั้ง) ในขณะที่ Grid ออกแบบมาสำหรับสองมิติพร้อมกัน (คอลัมน์และแถว)</p>
    </div>
  </div>
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="accordion">
  <div class="item">
    <input type="checkbox" id="faq-1" class="accordion-toggle">
    <label for="faq-1" class="accordion-header">CSS คืออะไร?</label>
    <div class="content-box">
      <p>CSS ย่อมาจาก Cascading Style Sheets เป็นภาษาที่ใช้สำหรับการกำหนดรูปแบบสไตล์และดีไซน์หน้าตาของหน้าเว็บเพจ</p>
    </div>
  </div>
  <div class="item">
    <input type="checkbox" id="faq-2" class="accordion-toggle">
    <label for="faq-2" class="accordion-header">Flexbox ต่างจาก Grid อย่างไร?</label>
    <div class="content-box">
      <p>Flexbox ออกแบบมาสำหรับการจัดเลย์เอาต์หน้าจอในมิติเดียว (แนวนอนหรือแนวตั้ง) ในขณะที่ Grid ออกแบบมาสำหรับสองมิติพร้อมกัน (คอลัมน์และแถว)</p>
    </div>
  </div>
</div>
</body>
</html>`,
      targetCss: `body {
  background-color: #f8fafc;
  font-family: sans-serif;
  padding: 40px 20px;
}
.accordion {
  max-width: 450px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  overflow: hidden;
}
.item {
  border-bottom: 1px solid #e2e8f0;
}
.accordion-toggle {
  display: none;
}
.accordion-header {
  display: block;
  padding: 20px;
  font-weight: bold;
  color: #1e293b;
  cursor: pointer;
  background-color: white;
  transition: background 0.2s;
}
.accordion-header:hover { background-color: #f8fafc; }
.content-box {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}
.content-box p { margin: 0; padding: 20px; color: #475569; line-height: 1.5; font-size: 14px; }
.accordion-toggle:checked ~ .content-box {
  max-height: 120px;
}
`,
      starterCss: `body {
  background-color: #f8fafc;
  font-family: sans-serif;
  padding: 40px 20px;
}

.accordion {
  max-width: 450px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  overflow: hidden;
}

.item {
  border-bottom: 1px solid #e2e8f0;
}

.accordion-toggle {
  /* 1. ซ่อนเช็คบ็อกซ์ไม่ให้มองเห็น */
  
}

.accordion-header {
  display: block;
  padding: 20px;
  font-weight: bold;
  color: #1e293b;
  cursor: pointer;
  background-color: white;
  transition: background 0.2s;
}
.accordion-header:hover { background-color: #f8fafc; }

.content-box {
  /* 2. ตั้งค่าความสูงกล่องเนื้อหาเป็น 0 และปิดการแสดงผลไว้พร้อมใส่ Transition */
  
}
.content-box p { margin: 0; padding: 20px; color: #475569; line-height: 1.5; font-size: 14px; }

/* 3. เขียน Selector เชื่อมโยงเพื่อให้กล่องเนื้อหาโผล่ออกมาเมื่อเช็คบ็อกซ์ถูกคลิกเลือก (:checked) */
`,
      validation: (doc, cssText) => {
        const toggles = doc.querySelectorAll('.accordion-toggle');
        if (toggles.length === 0) return "ไม่พบเช็คบ็อกซ์สำหรับสลับการยืดหด";
        const toggleStyle = doc.defaultView.getComputedStyle(toggles[0]);
        if (toggleStyle.display !== 'none') return "อย่าลืมซ่อนกล่องเช็คบ็อกซ์ดั้งเดิมด้วย display: none;";
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes(':checked~.content-box') && !cleaned.includes(':checked+.content-box')) {
          return "กรุณาใช้ selector input:checked ~ .content-box เพื่อสั่งกางข้อมูลออกเมือปุ่มถูกกดเลือก";
        }
        return true;
      }
    },
    {
      id: "challenge-html-portfolio",
      title: "ภารกิจที่ 8: HTML Portfolio Schema (โครงสร้างหน้าเว็บผลงานส่วนตัว)",
      difficulty: "Beginner",
      points: 100,
      description: `**ภารกิจเขียนโครงสร้างเนื้อหาประวัติตนเองโดยใช้ HTML Core (ห้ามเน้นตกแต่ง CSS)**
      
โจทย์ระบุให้จัดองค์ประกอบดังนี้:
1. ส่วนหัวใช้ \`<header>\` มีชื่อตนเองเป็น \`<h1>\` และแถบนำทาง \`<nav>\` ที่มีลิงก์ 3 เส้นไปหน้าส่วนล่าง
2. ส่วนเนื้อหาใช้ \`<main>\` มีหัวข้อประวัติการทำงานเป็น \`<h2>\` และรายการทักษะที่ใช้อื่นๆ เป็น \`<ul>\` มีข้อความอย่างน้อย 3 ทักษะ
3. ส่วนข้อมูลตารางใช้ \`<table>\` มีหัวตาราง (\`<th>\`) แสดงตารางโปรเจ็กต์ที่เคยทำอย่างน้อย 2 แถว
4. ส่วนแบบฟอร์มติดต่อกลับใช้ \`<form>\` มีช่องพิมพ์ \`input[type="email"]\` และมีปุ่มยืนยัน \`<button type="submit">\` ส่งคำขอ`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- เขียนเฉพาะโครงสร้าง HTML ของคุณให้สมบูรณ์ โดยไม่ต้องเน้นเขียน CSS -->

</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <header>
  <h1>สมชาย เก่งกล้า</h1>
  <nav>
    <a href="#about">เกี่ยวกับ</a>
    <a href="#skills">ทักษะ</a>
    <a href="#contact">ติดต่อ</a>
  </nav>
</header>
<main id="about">
  <h2>ประวัติการทำงาน</h2>
  <p>นักพัฒนาซอฟต์แวร์ผู้หลงใหลการสร้างสรรค์นวัตกรรมดิจิทัลระดับสากล</p>
  <div id="skills">
    <h3>ทักษะหลัก</h3>
    <ul>
      <li>HTML5 & Semantic Web</li>
      <li>CSS3 Layout Mechanics</li>
      <li>JavaScript ES6</li>
    </ul>
  </div>
  <table>
    <thead>
      <tr>
        <th>ชื่อโครงการ</th>
        <th>บทบาท</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Web Academy Portal</td>
        <td>Frontend Lead</td>
      </tr>
      <tr>
        <td>Mobile Banking App</td>
        <td>UI Specialist</td>
      </tr>
    </tbody>
  </table>
  <form id="contact">
    <h3>ติดต่อส่งข้อความ</h3>
    <input type="email" placeholder="email@example.com" required>
    <button type="submit">ส่งข้อมูล</button>
  </form>
</main>
</body>
</html>`,
      targetCss: `body { font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #334155; }
header { background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
nav { display: flex; gap: 10px; }
nav a { text-decoration: none; color: #2563eb; }
table { width: 100%; border-collapse: collapse; margin: 20px 0; }
th, td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; }
form { background: #f1f5f9; padding: 20px; border-radius: 8px; margin-top: 20px; }
input { display: block; width: 100%; padding: 8px; margin-bottom: 10px; box-sizing: border-box; }
button { padding: 10px 20px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer; }`,
      starterCss: `body { font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #334155; }
header { background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
nav { display: flex; gap: 10px; }
nav a { text-decoration: none; color: #2563eb; }
table { width: 100%; border-collapse: collapse; margin: 20px 0; }
th, td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; }
form { background: #f1f5f9; padding: 20px; border-radius: 8px; margin-top: 20px; }
input { display: block; width: 100%; padding: 8px; margin-bottom: 10px; box-sizing: border-box; }
button { padding: 10px 20px; background: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer; }`,
      validation: (doc) => {
        const header = doc.querySelector('header');
        const nav = doc.querySelector('nav');
        const main = doc.querySelector('main');
        const lis = doc.querySelectorAll('ul li');
        const table = doc.querySelector('table');
        const form = doc.querySelector('form');
        const email = doc.querySelector('input[type="email"]');
        
        if (!header || !nav) return "กรุณาใส่โครงสร้าง <header> และแท็ก <nav> นำทางของหน้าผลงาน";
        if (!main) return "กรุณาระบุขอบเขตหลักโดยใช้แท็ก <main>";
        if (lis.length < 3) return "กรุณาสร้างรายการทักษะย่อยโดยใช้ <li> อย่างน้อย 3 ทักษะ";
        if (!table) return "กรุณาแสดงรายการโครงการเป็นตารางโดยใช้ <table>";
        if (!form || !email) return "กรุณาสร้างแบบฟอร์มติดต่อกลับ <form> พร้อมระบุ input สำหรับป้อน email";
        return true;
      }
    },
    {
      id: "challenge-responsive-article",
      title: "ภารกิจที่ 9: Responsive Article Layout (บทความวิชาการจัดสองคอลัมน์)",
      difficulty: "Intermediate",
      points: 150,
      description: `**ภารกิจจัดการแบ่งเนื้อหาความรู้ออกเป็นสัดส่วนเชิงวิชาการด้วยโครงสร้าง Semantic และยืดหดตามจอภาพด้วย CSS Grid**
      
ข้อกำหนดการจัดเลย์เอาต์:
1. ใช้โครงสร้างหลักอย่างมีระเบียบ: แท็ก \`<article>\` เก็บเนื้อหาข่าวแกนหลัก, แท็ก \`<aside>\` เก็บลิงก์เพิ่มเติมด้านข้าง
2. กล่องคุมหลักมีคลาส \`.article-grid\` จัดเลย์เอาต์ Desktop เป็น Grid 2 คอลัมน์ (\`grid-template-columns: 2fr 1fr;\`) พร้อมมีช่องว่างห่าง \`30px\`
3. เมื่อความกว้างบราวเซอร์แคบกว่า \`768px\` ให้ยุบตัวสลับเป็นคอลัมน์แถวเดี่ยวแนวตั้งเต็มพื้นที่ (\`grid-template-columns: 1fr;\`)`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="article-grid">
  <article class="main-post">
    <h2>วิวัฒนาการของโครงข่ายเว็บ</h2>
    <p>เทคโนโลยีทางด้านสถาปัตยกรรมเว็บเพจและส่วนแสดงผลได้รับการยกระดับอย่างมหาศาลจากเดิมที่เป็นเพียงหน้าแสดงข้อมูลดิบสู่หน้าที่มีความสามารถเสมือนแอพพลิเคชันดั้งเดิม...</p>
  </article>
  <aside class="sidebar-info">
    <h3>บทความแนะนำ</h3>
    <p>แนวทางการสไตลิ่งแบบยั่งยืน</p>
    <p>ความเร็วเพจกับคะแนนกูเกิล</p>
  </aside>
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="article-grid">
  <article class="main-post">
    <h2>วิวัฒนาการของโครงข่ายเว็บ</h2>
    <p>เทคโนโลยีทางด้านสถาปัตยกรรมเว็บเพจและส่วนแสดงผลได้รับการยกระดับอย่างมหาศาลจากเดิมที่เป็นเพียงหน้าแสดงข้อมูลดิบสู่หน้าที่มีความสามารถเสมือนแอพพลิเคชันดั้งเดิม...</p>
  </article>
  <aside class="sidebar-info">
    <h3>บทความแนะนำ</h3>
    <p>แนวทางการสไตลิ่งแบบยั่งยืน</p>
    <p>ความเร็วเพจกับคะแนนกูเกิล</p>
  </aside>
</div>
</body>
</html>`,
      targetCss: `body { font-family: sans-serif; margin: 0; padding: 20px; background-color: #fafafa; }
.article-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}
@media (max-width: 768px) {
  .article-grid {
    grid-template-columns: 1fr;
  }
}
.main-post { background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
.sidebar-info { background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; }`,
      starterCss: `body { font-family: sans-serif; margin: 0; padding: 20px; background-color: #fafafa; }
.article-grid {
  /* 1. จัดตำแหน่ง Desktop Grid ที่นี่ */
  
}
@media (max-width: 768px) {
  .article-grid {
    /* 2. เปลี่ยนเลย์เอาต์ในจอมือถือที่นี่ */
    
  }
}
.main-post { background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
.sidebar-info { background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; }`,
      validation: (doc, cssText) => {
        const grid = doc.querySelector('.article-grid');
        const article = doc.querySelector('article');
        const aside = doc.querySelector('aside');
        
        if (!grid || !article || !aside) return "กรุณาจัดสัดส่วนและใช้แท็ก <article> และ <aside> เชิงโครงสร้าง";
        
        const style = doc.defaultView.getComputedStyle(grid);
        if (style.display !== 'grid') return "กรุณาจัดวางด้วยสไตล์ display: grid;";
        
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes('@media')) return "กรุณากำหนด media query (@media) ในการจัด Responsive จอมือถือ";
        return true;
      }
    },
    {
      id: "challenge-floating-form",
      title: "ภารกิจที่ 10: Interactive Floating Form (แบบฟอร์มการกรอกข้อมูลระดับพรีเมียม)",
      difficulty: "Hard",
      points: 250,
      description: `**ภารกิจรวบรวมเทคนิค CSS ทั้งหมดเพื่อสร้างหน้าฟอร์มที่ตอบสนองเมื่อผู้ใช้กดเลือกกล่องและตรวจสอบคำตอบสด**
      
ข้อกำหนดของดีไซน์:
1. ออกแบบฟอร์ม \`.premium-form\` ให้มีขนาดความกว้างสูงสุด \`380px\` คุมขอบมน และเงาสีเข้ม
2. ตัวป้อนพิมพ์ \`input\` ต้องมีกรอบเดิมเป็นสีเทาบาง และเมื่อมีปฏิสัมพันธ์ชี้พิมพ์ (\`:focus\`) ให้กรอบเปลี่ยนเป็นสีน้ำเงินสว่าง (\`#2563eb\`) และแผ่ออร่าเรืองแสงสีฟ้าอ่อนออกรอบกล่อง (\`box-shadow: 0 0 8px rgba(37, 99, 235, 0.25);\`) ด้วยเอฟเฟกต์การยืดทรานซิชันนุ่มนวล
3. อินพุตมีคุณสมบัติ \`required\` และถ้าผู้ใช้กรอกข้อความผิดฟอร์แมต (\`:invalid\`) ให้เส้นขอบกลายเป็นสีแดงเตือน (\`#ef4444\`) อัตโนมัติ`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="form-wrapper">
  <form class="premium-form">
    <h2>ลงทะเบียนร่วมงาน</h2>
    <div class="input-box">
      <input type="text" required placeholder="ชื่อเต็มของคุณ">
    </div>
    <div class="input-box">
      <input type="email" required placeholder="name@domain.com">
    </div>
    <button type="submit">ยืนยันลงทะเบียน</button>
  </form>
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="form-wrapper">
  <form class="premium-form">
    <h2>ลงทะเบียนร่วมงาน</h2>
    <div class="input-box">
      <input type="text" required placeholder="ชื่อเต็มของคุณ">
    </div>
    <div class="input-box">
      <input type="email" required placeholder="name@domain.com">
    </div>
    <button type="submit">ยืนยันลงทะเบียน</button>
  </form>
</div>
</body>
</html>`,
      targetCss: `body { background-color: #f1f5f9; font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
.premium-form {
  background: white;
  width: 320px;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}
.input-box { margin-bottom: 20px; }
.premium-form input {
  width: 100%;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
  box-sizing: border-box;
  transition: all 0.2s ease;
}
.premium-form input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 8px rgba(37, 99, 235, 0.25);
}
.premium-form input:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
}
.premium-form button {
  width: 100%;
  padding: 12px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.premium-form button:hover {
  background-color: #1d4ed8;
}`,
      starterCss: `body { background-color: #f1f5f9; font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
.premium-form {
  background: white;
  width: 320px;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}
.input-box { margin-bottom: 20px; }
.premium-form input {
  width: 100%;
  padding: 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  outline: none;
  box-sizing: border-box;
  /* 1. ใส่เอฟเฟกต์การเปลี่ยนผ่าน (Transition) */
  
}
/* 2. สไตล์เมื่อ focus หรือ invalid */`,
      validation: (doc, cssText) => {
        const inputs = doc.querySelectorAll('input');
        if (inputs.length < 2) return "กรุณาสร้างอินพุตอย่างน้อย 2 ช่อง";
        
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes(':focus')) return "กรุณาใส่ CSS สำหรับสถานะ :focus ให้กับอินพุต";
        if (!cleaned.includes('box-shadow:')) return "อย่าลืมระบุ box-shadow เพื่อสร้างเอฟเฟกต์เรืองแสงยามกดเลือก";
        return true;
      }
    },
    {
      id: "challenge-facebook-post",
      title: "ภารกิจที่ 11: Facebook Feed Post (การ์ดโพสต์เฟซบุ๊ก)",
      difficulty: "Intermediate",
      points: 180,
      description: `**จงสร้างการ์ดโพสต์เฟซบุ๊ก (Facebook Feed Post Card) สไตล์โมเดิร์นตามตัวอย่าง**
      
ข้อกำหนดในการออกแบบและข้อมูลที่ต้องการ:
- การ์ดหลักคลาสหลัก \`.fb-post\` มีความกว้าง \`500px\`, พื้นหลังขาว, ขอบโค้งมน \`8px\`, และเงาบางๆ
- ส่วนหัวโพสต์ \`.post-header\` จัด Flexbox ประกอบด้วย:
  - รูปโปรไฟล์กลมคลาส \`.profile-img\` ใช้รูปภาพปลายทางเฉพาะนี้:
    **\`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop\`**
  - รายละเอียดชื่อผู้ใช้: \`วิภาดา รักษ์ดี\` (ตัวหนา) และเวลาโพสต์ \`2 ชั่วโมงที่แล้ว\`
- ส่วนข้อความเนื้อหาโพสต์ คลาส \`.post-content\` เขียนว่า:
  \`วันนี้ได้มาเปิดหูเปิดตากับการเรียนเขียนเว็บ HTML5 และ CSS3 สนุกมากจริงๆ แนะนำให้ทุกคนลองเล่นดูครับ! 💻🚀\`
- ส่วนรูปภาพประกอบโพสต์ คลาส \`.post-media\` คลุมขอบสี่เหลี่ยมใช้รูปธรรมชาติเฉพาะนี้:
  **\`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=300&fit=crop\`**
- ส่วนแสดงสถิติกดไลก์ คลาส \`.post-stats\` มีปุ่มแสดงความรู้สึก \`👍 ❤️ 128\` และจำนวนความคิดเห็น \`45 ความคิดเห็น • 12 แชร์\` ชิดขวา
- แถบปุ่มคลาส \`.post-actions\` มีปุ่มคลาส \`.action-btn\` 3 ปุ่ม: \`ถูกใจ\​, \`แสดงความคิดเห็น\​, และ \`แชร์\`
  - เมื่อชี้เมาส์ที่ปุ่มถูกใจ (Like) ให้เปลี่ยนตัวหนังสือเป็นสีน้ำเงินเฟซบุ๊ก \`#1877f2\` ยาม Hover`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- ออกแบบโครงสร้างหน้าโพสต์เฟซบุ๊กด้านล่างนี้ -->
<div class="fb-post">
  
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="fb-post">
  <div class="post-header">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop" class="profile-img" alt="Profile">
    <div class="user-meta">
      <span class="user-name">วิภาดา รักษ์ดี</span>
      <span class="post-time">2 ชั่วโมงที่แล้ว • 🌐</span>
    </div>
  </div>
  <div class="post-content">
    วันนี้ได้มาเปิดหูเปิดตากับการเรียนเขียนเว็บ HTML5 และ CSS3 สนุกมากจริงๆ แนะนำให้ทุกคนลองเล่นดูครับ! 💻🚀
  </div>
  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&h=300&fit=crop" class="post-media" alt="Post Image">
  <div class="post-stats">
    <span class="reactions">👍 ❤️ 128</span>
    <span class="comments-count">45 ความคิดเห็น • 12 แชร์</span>
  </div>
  <div class="post-actions">
    <button class="action-btn btn-like">👍 ถูกใจ</button>
    <button class="action-btn">💬 แสดงความคิดเห็น</button>
    <button class="action-btn">📤 แชร์</button>
  </div>
</div>
</body>
</html>`,
      targetCss: `body {
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: sans-serif;
  padding: 20px;
}
.fb-post {
  background-color: white;
  width: 500px;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  padding: 12px;
  box-sizing: border-box;
}
.post-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
.user-meta {
  display: flex;
  flex-direction: column;
}
.user-name {
  font-weight: bold;
  font-size: 14px;
  color: #050505;
}
.post-time {
  font-size: 12px;
  color: #65676b;
}
.post-content {
  font-size: 14px;
  color: #050505;
  line-height: 1.5;
  margin-bottom: 12px;
}
.post-media {
  width: calc(100% + 24px);
  margin-left: -12px;
  height: auto;
  max-height: 300px;
  object-fit: cover;
}
.post-stats {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ced0d4;
  margin-bottom: 4px;
}
.reactions {
  font-size: 13px;
  color: #65676b;
}
.comments-count {
  font-size: 13px;
  color: #65676b;
}
.post-actions {
  display: flex;
  justify-content: space-between;
}
.action-btn {
  flex: 1;
  background: none;
  border: none;
  padding: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #65676b;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
.action-btn:hover {
  background-color: #f2f2f2;
}
.btn-like:hover {
  color: #1877f2;
}`,
      starterCss: `body {
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: sans-serif;
  padding: 20px;
}
.fb-post {
  /* ออกแบบการ์ดโพสต์เฟซบุ๊กที่นี่ */
  
}`,
      validation: (doc, cssText) => {
        const post = doc.querySelector('.fb-post');
        const img = doc.querySelector('.profile-img');
        const media = doc.querySelector('.post-media');
        
        if (!post) return "ไม่พบ Container หลักคลาส .fb-post";
        if (!img || !img.src.includes('photo')) return "กรุณาใส่รูปภาพโปรไฟล์ในคลาส .profile-img ให้ถูกต้อง";
        if (!media || !media.src.includes('photo')) return "กรุณาใส่รูปภาพประกอบโพสต์ในคลาส .post-media ให้ถูกต้อง";
        
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes('color:#1877f2') && !cleaned.includes('color:rgb(24,119,242)')) {
          return "อย่าลืมเปลี่ยนสีตัวหนังสือเมื่อปุ่มถูกใจโดนชี้เมาส์ (Hover) เป็นสีน้ำเงินเฟซบุ๊ก #1877f2";
        }
        return true;
      }
    },
    {
      id: "challenge-instagram-post",
      title: "ภารกิจที่ 12: Instagram Photo Detail (การ์ดโพสต์ไอจี)",
      difficulty: "Intermediate",
      points: 180,
      description: `**จงสร้างการ์ดโพสต์อินสตาแกรม (Instagram Feed Card) ทรงสี่เหลี่ยมจัตุรัสตามตัวอย่าง**
      
ข้อกำหนดในการออกแบบและข้อมูลที่ต้องการ:
- การ์ดหลักคลาส \`.ig-card\` กว้าง \`400px\` พื้นหลังขาว และมีกรอบเส้นขอบบางสีเทาอ่อน
- ส่วนหัวคลาส \`.ig-header\` จัดเรียงแนวนอน ประกอบด้วย:
  - รูปโปรไฟล์กลมขนาดเล็ก คลาส \`.ig-avatar\` ใช้รูปภาพเฉพาะนี้:
    **\`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop\`**
  - ชื่อผู้ใช้ \`wiphada_designer\` (ตัวหนา)
- ส่วนรูปภาพหลักคลาส \`.ig-media\` เป็นรูปภาพสี่เหลี่ยมจัตุรัสกว้างเต็มความกว้างการ์ด ใช้รูปภาพเฉพาะนี้:
  **\`https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=400&fit=crop\`**
- ส่วนไอคอนปฏิกิริยาคลาส \`.ig-actions\` จัดเรียงซ้ายขวา:
  - กลุ่มไอคอนชิดซ้าย: \`❤️\`, \`💬\`, \`📤\`
  - ไอคอนบันทึกชิดขวาสุด: \`🔖\`
- ส่วนคำอธิบายภาพคลาส \`.ig-caption\`:
  - บรรทัดแสดงยอดไลก์: \`ถูกใจ 1,420 คน\` (ตัวหนา)
  - คำบรรยายใต้ภาพ: ชื่อผู้ใช้ \`wiphada_designer\` (ตัวหนา) ตามด้วยข้อความ \`เรียนรู้ศาสตร์สีสันและโครงสร้างหน้าเว็บสุดโมเดิร์น ✨🎨 #frontend #webdev\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <!-- ออกแบบหน้าโพสต์ไอจีด้านล่างนี้ -->
<div class="ig-card">
  
</div>
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ</title>
</head>
<body>
  <div class="ig-card">
  <div class="ig-header">
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop" class="ig-avatar" alt="Avatar">
    <span class="ig-username">wiphada_designer</span>
  </div>
  <img src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=400&fit=crop" class="ig-media" alt="Post">
  <div class="ig-actions">
    <div class="left-icons">
      <span class="action-icon">❤️</span>
      <span class="action-icon">💬</span>
      <span class="action-icon">📤</span>
    </div>
    <span class="action-icon bookmark">🔖</span>
  </div>
  <div class="ig-caption">
    <p class="likes-count">ถูกใจ 1,420 คน</p>
    <p class="caption-text">
      <span class="caption-user">wiphada_designer</span>
      เรียนรู้ศาสตร์สีสันและโครงสร้างหน้าเว็บสุดโมเดิร์น ✨🎨 #frontend #webdev
    </p>
  </div>
</div>
</body>
</html>`,
      targetCss: `body {
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  padding: 20px;
}
.ig-card {
  background-color: white;
  width: 400px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  box-sizing: border-box;
}
.ig-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
}
.ig-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}
.ig-username {
  font-weight: 600;
  font-size: 14px;
  color: #262626;
}
.ig-media {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}
.ig-actions {
  display: flex;
  justify-content: space-between;
  padding: 12px 14px;
}
.left-icons {
  display: flex;
  gap: 16px;
}
.action-icon {
  font-size: 20px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.1s ease;
}
.action-icon:hover {
  transform: scale(1.1);
}
.ig-caption {
  padding: 0 14px 14px 14px;
}
.likes-count {
  font-weight: 600;
  font-size: 14px;
  margin: 0 0 8px 0;
  color: #262626;
}
.caption-text {
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  color: #262626;
}
.caption-user {
  font-weight: 600;
  margin-right: 8px;
}
`,
      starterCss: `body {
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: sans-serif;
  padding: 20px;
}
.ig-card {
  /* ออกแบบการ์ดอินสตาแกรมที่นี่ */
  
}`,
      validation: (doc) => {
        const card = doc.querySelector('.ig-card');
        const avatar = doc.querySelector('.ig-avatar');
        const media = doc.querySelector('.ig-media');
        
        if (!card) return "ไม่พบ Container หลักคลาส .ig-card";
        if (!avatar || !avatar.src.includes('photo')) return "กรุณาใส่รูปอวาตาร์ส่วนหัวในคลาส .ig-avatar";
        if (!media || !media.src.includes('photo')) return "กรุณาใส่รูปโพสต์หลักในคลาส .ig-media";
        
        const style = doc.defaultView.getComputedStyle(media);
        const heightVal = parseFloat(style.height);
        if (isNaN(heightVal) || (Math.round(heightVal) !== 400 && style.height !== '100%')) {
          return "กรุณาตั้งความสูงของรูปโพสต์หลักให้เป็นสี่เหลี่ยมจัตุรัสสูง 400px";
        }
        return true;
      }
    },
    {
      id: "challenge-midterm-exam",
      title: "ภารกิจที่ 13: Mid-term Exam (ข้อสอบจำลองกลางภาค: ระบบลงทะเบียนเรียน)",
      difficulty: "Intermediate",
      points: 200,
      description: `**ข้อสอบจำลองกลางภาค (Mid-term Mock Exam): ระบบลงทะเบียนเรียน**

ยินดีต้อนรับเข้าสู่ข้อสอบจำลองกลางภาค! โจทย์นี้จะจำลองสภาพการออกสอบจริงที่ผสมผสานทั้งความรู้ทางโครงสร้างภาษา HTML และการควบคุมรูปลักษณ์ภายนอกด้วย CSS เพื่อสร้างแบบฟอร์มลงทะเบียนเรียนของนักศึกษาที่สมบูรณ์และสวยงาม

**ข้อกำหนดทางด้าน HTML:**
1. สร้างกลุ่มหัวข้อหลักด้วยแท็ก \`<main>\`
2. ภายใน \`<main>\` ให้สร้างฟอร์ม \`<form class="exam-form">\`
3. ภายในฟอร์ม ต้องประกอบด้วยแท็ก/คลาสและโครงสร้างข้อมูลดังต่อไปนี้:
   - แท็กหัวข้อ \`<h2>\` เขียนข้อความว่า \`ลงทะเบียนสอบกลางภาค\`
   - ช่องกรอก **ชื่อ-นามสกุล** โดยใช้ \`<input type="text" class="input-name" placeholder="ชื่อ-นามสกุลของคุณ" required>\`
   - ช่องรับ **อีเมล** โดยใช้ \`<input type="email" class="input-email" placeholder="อีเมลสถาบัน" required>\`
   - เมนูตัวเลือก **วิชาสอบ** โดยใช้แท็ก \`<select class="select-subject" required>\` ซึ่งมี 3 ตัวเลือกย่อยด้านใน:
     - ตัวเลือกแรก (ดีฟอลต์): \`<option value="">-- เลือกวิชาสอบ --</option>\`
     - ตัวเลือกเว็บเบสิก: \`<option value="web-basic">HTML5 & CSS3 Basics</option>\`
     - ตัวเลือกดีไซน์: \`<option value="ui-design">UI/UX Design Concept</option>\`
   - ช่องระบุ **วันลงทะเบียน** โดยใช้ \`<input type="date" class="input-date" required>\`
   - ช่องระบุ **จำนวนวิชาที่เคยเรียน (ตัวเลข)** โดยใช้ \`<input type="number" class="input-count" min="1" max="5" value="1" required>\` (จำกัดระหว่าง 1 ถึง 5)
   - แถบปรับ **ระดับความพร้อม** โดยใช้ \`<input type="range" class="input-level" min="1" max="5" value="3">\` (ระดับ 1 ถึง 5 ค่าเริ่มต้น 3)
   - ปุ่มส่งข้อมูลลงทะเบียน โดยใช้ \`<button type="submit" class="btn-submit">ยืนยันการสมัครสอบ</button>\`

**ข้อกำหนดทางด้าน CSS:**
1. จัดกึ่งกลางหน้าจอและการตกแต่งฟอร์ม \`.exam-form\`:
   - ตั้งความกว้างเป็น \`360px\` และจัดให้อยู่กึ่งกลางแนวนอนด้วย \`margin: 30px auto;\`
   - ใส่แพดดิ้งย่อแบบ 2 ค่า: บน-ล่าง \`25px\`, ซ้าย-ขวา \`30px\`
   - ใส่สีพื้นหลังเป็นขาวอมเทาอ่อน \`#f8fafc\` และขอบสีเทาเข้ม \`#cbd5e1\` ขนาด \`2px\` ชนิด \`solid\`
   - ทำมุมโค้งมนแบบไล่ทิศทาง (Border Radius Shorthand): มุมบนซ้ายและบนขวาโค้งมน \`20px\` ส่วนมุมล่างซ้ายและล่างขวาเป็นตัดตรง \`0px\` (นั่นคือ \`20px 20px 0 0\`)
   - มีเงาลอยตัวนุ่มนวล: \`box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);\`
2. จัดการแสดงผลช่องกรอกข้อมูลและปุ่ม (ยึดหลักสัดส่วนสวยงาม):
   - ช่องกรอกข้อมูลทุกตัว (\`.input-name\`, \`.input-email\`, \`.select-subject\`, \`.input-date\`, \`.input-count\`, \`.input-level\`) ต้องแสดงผลแบบบล็อก (\`display: block;\`), ความกว้างเต็มกรอบแม่ (\`width: 100%;\`), และระยะขอบภายนอกด้านล่างสำหรับเว้นช่องไฟ (\`margin-bottom: 15px;\`) พร้อมใส่แพดดิ้งภายในช่องกรอกขนาด (\`10px\`)
   - ปุ่มยืนยันลงทะเบียน \`.btn-submit\`: แสดงผลแบบบล็อก (\`display: block;\`), ความกว้างเต็มกรอบแม่ (\`width: 100%;\`), ระยะขอบภายในแพดดิ้ง บน-ล่าง \`12px\` ซ้าย-ขวา \`20px\`, ขอบเป็นเหลี่ยมมนขนาด \`6px\`, ล้างเส้นขอบดีฟอลต์ออก (\`border: none;\`), สีตัวอักษรขาว, สีพื้นหลังเป็นสีน้ำเงินเข้มสถาบัน \`#1e3a8a\`
   - สไตล์ปุ่มเมื่อเมาส์ชี้ทับ (\`.btn-submit:hover\`): เปลี่ยนสีพื้นหลังเป็นน้ำเงินสว่างขึ้น \`#2563eb\` และมีทรานซิชันเปลี่ยนผ่านนุ่มนวลเวลา 0.2 วินาที`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ - ข้อสอบจำลอง</title>
</head>
<body>
  <!-- เริ่มสร้างแบบฟอร์มสมัครสอบที่นี่ -->
  
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ - ข้อสอบจำลอง</title>
</head>
<body>
  <main>
    <form class="exam-form">
      <h2>ลงทะเบียนสอบกลางภาค</h2>
      
      <input type="text" class="input-name" placeholder="ชื่อ-นามสกุลของคุณ" required>
      <input type="email" class="input-email" placeholder="อีเมลสถาบัน" required>
      
      <select class="select-subject" required>
        <option value="">-- เลือกวิชาสอบ --</option>
        <option value="web-basic">HTML5 & CSS3 Basics</option>
        <option value="ui-design">UI/UX Design Concept</option>
      </select>
      
      <input type="date" class="input-date" required>
      <input type="number" class="input-count" min="1" max="5" value="1" required>
      <input type="range" class="input-level" min="1" max="5" value="3">
      
      <button type="submit" class="btn-submit">ยืนยันการสมัครสอบ</button>
    </form>
  </main>
</body>
</html>`,
      starterCss: `body {
  background-color: #cbd5e1;
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
}

.exam-form {
  /* 1. จัดแต่งกล่องฟอร์มตามข้อกำหนด (ขนาด, กึ่งกลาง, สีพื้นหลัง, ขอบเฉพาะมุม, เงา) */
  
}

.input-name, .input-email, .select-subject, .input-date, .input-count, .input-level {
  /* 2. จัดระเบียบช่องป้อนข้อมูลเป็น block, เต็มความกว้างแม่, และระยะห่าง */
  
}

.btn-submit {
  /* 3. ตกแต่งปุ่มยืนยันให้หนาสวยงาม พร้อมสีน้ำเงินเข้มและตัวหนังสือขาว */
  
}

.btn-submit:hover {
  /* 4. เพิ่มเอฟเฟกต์สีสว่างขึ้นเวลาเมาส์ชี้ทับ */
  
}`,
      targetCss: `body {
  background-color: #cbd5e1;
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
}

.exam-form {
  width: 360px;
  margin: 30px auto;
  padding: 25px 30px;
  background-color: #f8fafc;
  border: 2px solid #cbd5e1;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  box-sizing: border-box;
}

.exam-form h2 {
  margin: 0 0 20px 0;
  font-size: 20px;
  text-align: center;
  color: #1e3a8a;
}

.input-name, .input-email, .select-subject, .input-date, .input-count, .input-level {
  display: block;
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  box-sizing: border-box;
}

.btn-submit {
  display: block;
  width: 100%;
  padding: 12px 20px;
  border-radius: 6px;
  border: none;
  background-color: #1e3a8a;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-submit:hover {
  background-color: #2563eb;
}`,
      validation: (doc, cssText) => {
        const form = doc.querySelector('.exam-form');
        const name = doc.querySelector('.input-name');
        const email = doc.querySelector('.input-email');
        const subj = doc.querySelector('.select-subject');
        const date = doc.querySelector('.input-date');
        const count = doc.querySelector('.input-count');
        const lvl = doc.querySelector('.input-level');
        const submit = doc.querySelector('.btn-submit');

        if (!form) return "ไม่พบฟอร์มสมัครสอบคลาส .exam-form";
        if (!name || !email || !subj || !date || !count || !lvl || !submit) {
          return "กรุณาใส่ช่องกรอกข้อมูลและปุ่มทั้งหมดให้ครบตามกำหนด";
        }

        const styleForm = doc.defaultView.getComputedStyle(form);
        const styleSub = doc.defaultView.getComputedStyle(submit);

        const formWidth = parseFloat(styleForm.width);
        if (isNaN(formWidth) || Math.round(formWidth) !== 360) return "กรุณากำหนดความกว้างของฟอร์มเป็น 360px";
        const tl = parseFloat(styleForm.borderTopLeftRadius);
        const tr = parseFloat(styleForm.borderTopRightRadius);
        if (isNaN(tl) || Math.round(tl) !== 20 || isNaN(tr) || Math.round(tr) !== 20 || parseFloat(styleForm.borderBottomLeftRadius) > 0) {
          return "กรุณากำหนดขอบโค้งมนแบบย่อ border-radius: 20px 20px 0 0;";
        }
        if (!styleForm.boxShadow || styleForm.boxShadow === 'none') {
          return "กรุณาใส่เงาขอบให้นุ่มนวลด้วย box-shadow";
        }
        if (styleSub.backgroundColor !== 'rgb(30, 58, 138)' && !styleSub.backgroundColor.includes('#1e3a8a')) {
          return "กรุณาเลือกใช้สีน้ำเงินเข้ม #1e3a8a เป็นพื้นหลังปุ่มส่งข้อมูล";
        }
        
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes('.btn-submit:hover{background-color:#2563eb') && !cleaned.includes('.btn-submit:hover{background-color:rgb(37,99,235)')) {
          return "กรุณากำหนดสไตล์เมาส์ชี้ทับ .btn-submit:hover ให้เปลี่ยนเป็นสีน้ำเงินสว่าง #2563eb";
        }
        return true;
      }
    },
    {
      id: "challenge-e-commerce-store",
      title: "ภารกิจที่ 14: E-commerce Product Store (หน้าจอรายการสินค้าและตะกร้า)",
      difficulty: "Hard",
      points: 250,
      description: `**ภารกิจประยุกต์ใช้งานจริง: E-commerce Product Store (หน้าจอรายการสินค้าและตะกร้าช็อปปิ้ง)**

ภารกิจนี้ท้าทายให้คุณสร้างเว็บอินเตอร์เฟสร้านค้าออนไลน์ที่สมบูรณ์ ประกอบด้วยตารางกริดแสดงรายการสินค้า และสรุปยอดตะกร้าสินค้าในคอลัมน์ด้านข้าง โดยเน้นการจัดวางเลย์เอาต์ระบบ Flexbox และ Grid รวมถึงการกำหนดรูปลักษณ์ที่ดูหรูหราแบบพรีเมียม

**ข้อกำหนดทางด้าน HTML:**
1. สร้างโครงสร้างหน้าจอหลักด้วยแท็ก \`<div class="store-container">\`
2. ด้านในประกอบด้วย 2 ส่วนย่อย:
   - ส่วนแสดงกริดสินค้า \`<main class="product-grid">\`
   - ส่วนตะกร้าสรุปยอด \`<aside class="cart-summary">\`
3. ภายใน \`.product-grid\` ให้ใส่รายการสินค้าเป็นคลาส \`.product-card\` อย่างน้อย 2 ตัว แต่ละตัวมี:
   - แท็กภาพ \`<img class="product-image">\` ดึงภาพจากลิงก์:
     **\`https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300\`** (สินค้าตัวที่ 1) หรือ **\`https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300\`** (สินค้าตัวที่ 2)
   - ป้ายข้อมูลสินค้าคลาส \`.product-info\`:
     - หัวเรื่องย่อย \`<h3>\` แสดงชื่อสินค้า (เช่น "นาฬิกาสมาร์ทวอทช์" หรือ "รองเท้าผ้าใบสปอร์ต")
     - แท็กราคา \`<span class="product-price">\` แสดงราคา (เช่น "฿2,900" หรือ "฿1,800")
   - ปุ่มกดคลาส \`.btn-add-cart\` เขียนว่า "เพิ่มลงตะกร้า"
4. ภายใน \`.cart-summary\` ประกอบด้วย:
   - หัวข้อ \`<h2>\` เขียนข้อความ "ตะกร้าสินค้าของคุณ"
   - รายชื่อสินค้าที่เลือก คลาส \`.cart-item\` แสดงชื่อสินค้าและราคา
   - ส่วนสรุปยอดเงินทั้งหมดคลาส \`.cart-total\` แสดงข้อความ "ยอดรวมทั้งหมด: ฿4,700" (ใช้แท็ก \`<strong>\`)
   - ปุ่มสั่งซื้อคลาส \`.btn-checkout\` เขียนว่า "สั่งซื้อสินค้า"

**ข้อกำหนดทางด้าน CSS:**
1. ระบบเลย์เอาต์หน้าจอหลักของร้านค้า \`.store-container\`:
   - จัดวาง Layout ด้วยระบบ Grid โดยแบ่งออกเป็น 2 คอลัมน์ (สินค้ากว้าง \`1fr\` และตะกร้าสินค้ากว้าง \`300px\` มีระยะห่าง \`gap: 20px;\`)
2. การ์ดสินค้าแต่ละใบ \`.product-card\`:
   - พื้นหลังขาว, ขอบมนโค้งมนแบบ shorthand \`12px\`, มีขอบสีเทาอ่อนบางๆ
   - รูปภาพ \`.product-image\` ต้องถูกล็อกสเกลสูง \`180px\`, ความกว้างเต็มกรอบ \`100%\` และใช้ \`object-fit: cover;\` เพื่อรักษาอัตราส่วนดั้งเดิม
3. ส่วนสรุปยอดตะกร้า \`.cart-summary\`:
   - ตั้งค่าให้มีความยืดหยุ่นเกาะขอบยามเลื่อน โดยใช้ตำแหน่ง \`position: sticky; top: 20px;\`
   - พื้นหลังสีเทาอ่อนหรูหรา \`#f8fafc\`, ขอบมน \`8px\`, และแพดดิ้งรอบด้าน \`20px\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ - ร้านค้าออนไลน์</title>
</head>
<body>
  <!-- สร้างโครงสร้างร้านค้า store-container ด้านล่างนี้ -->
  
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>แบบฝึกหัดพัฒนาเว็บ - ร้านค้าออนไลน์</title>
</head>
<body>
  <div class="store-container">
    <main class="product-grid">
      <div class="product-card">
        <img class="product-image" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300" alt="Smart Watch">
        <div class="product-info">
          <h3>นาฬิกาสมาร์ทวอทช์</h3>
          <span class="product-price">฿2,900</span>
        </div>
        <button class="btn-add-cart">เพิ่มลงตะกร้า</button>
      </div>
      
      <div class="product-card">
        <img class="product-image" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300" alt="Sneaker">
        <div class="product-info">
          <h3>รองเท้าผ้าใบสปอร์ต</h3>
          <span class="product-price">฿1,800</span>
        </div>
        <button class="btn-add-cart">เพิ่มลงตะกร้า</button>
      </div>
    </main>
    
    <aside class="cart-summary">
      <h2>ตะกร้าสินค้าของคุณ</h2>
      <div class="cart-item">
        <span>นาฬิกาสมาร์ทวอทช์</span>
        <span>฿2,900</span>
      </div>
      <div class="cart-item">
        <span>รองเท้าผ้าใบสปอร์ต</span>
        <span>฿1,800</span>
      </div>
      <hr>
      <div class="cart-total">
        <span>ยอดรวมทั้งหมด:</span>
        <strong>฿4,700</strong>
      </div>
      <button class="btn-checkout">สั่งซื้อสินค้า</button>
    </aside>
  </div>
</body>
</html>`,
      starterCss: `body {
  background-color: #f1f5f9;
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
}

.store-container {
  /* 1. จัดเลย์เอาต์ระบบกริด 2 คอลัมน์ สินค้า 1fr และ ตะกร้า 300px ห่างกัน gap 20px */
  
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.product-card {
  /* 2. ออกแบบมุมโค้งมนการ์ดสินค้า 12px พื้นหลังขาว มีขอบเทาอ่อน */
  
}

.product-image {
  /* 3. ล็อกภาพความสูง 180px ปรับการครอปแบบปกป้องสัดส่วน cover */
  
}

.cart-summary {
  /* 4. กำหนดเป็นแถบแม่เหล็กเกาะติด position: sticky บาร์ด้านบนห่าง 20px */
  
}`,
      targetCss: `body {
  background-color: #f1f5f9;
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
}

.store-container {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.product-card {
  background-color: white;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.product-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.product-info {
  padding: 12px;
  flex-grow: 1;
}

.product-info h3 {
  margin: 0 0 6px 0;
  font-size: 16px;
  color: #1e293b;
}

.product-price {
  font-weight: bold;
  color: #2563eb;
  font-size: 15px;
}

.btn-add-cart {
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #f1f5f9;
  color: #1e293b;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-add-cart:hover {
  background-color: #cbd5e1;
}

.cart-summary {
  background-color: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 20px;
  position: sticky;
  top: 20px;
  height: fit-content;
  box-sizing: border-box;
}

.cart-summary h2 {
  margin: 0 0 15px 0;
  font-size: 16px;
  color: #1e293b;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #475569;
  margin-bottom: 8px;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 14px;
}

.btn-checkout {
  width: 100%;
  padding: 12px;
  border: none;
  background-color: #10b981;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-checkout:hover {
  background-color: #059669;
}

@media (max-width: 768px) {
  .store-container {
    grid-template-columns: 1fr;
  }
}`,
      validation: (doc) => {
        const container = doc.querySelector('.store-container');
        const grid = doc.querySelector('.product-grid');
        const cards = doc.querySelectorAll('.product-card');
        const summary = doc.querySelector('.cart-summary');

        if (!container) return "ไม่พบ Container หลักของร้านค้าคลาส .store-container";
        if (!grid || cards.length < 2) return "กรุณาใส่รายการสินค้าอย่างน้อย 2 การ์ดในคลาส .product-grid";
        if (!summary) return "ไม่พบกล่องสรุปตะกร้าสินค้าคลาส .cart-summary";

        const styleContainer = doc.defaultView.getComputedStyle(container);
        const styleSummary = doc.defaultView.getComputedStyle(summary);
        const styleCard = doc.defaultView.getComputedStyle(cards[0]);

        if (!styleContainer.display.includes('grid') && !styleContainer.display.includes('flex')) {
          return "กรุณาจัดเลย์เอาต์หลัก .store-container ด้วยระบบ Grid หรือ Flexbox";
        }
        if (styleSummary.position !== 'sticky') {
          return "กรุณากำหนดให้ .cart-summary มีสไตล์ตำแหน่งแบบเหนียวแน่น position: sticky;";
        }
        const br = parseFloat(styleCard.borderRadius);
        if (isNaN(br) || Math.round(br) !== 12) {
          return "กรุณากำหนดความโค้งมนของการ์ดสินค้า .product-card เป็น 12px";
        }
        return true;
      }
    },
    {
      id: "challenge-corporate-page",
      title: "ภารกิจที่ 16: Corporate Landing Page (หน้าแรกของเว็บบริษัทโฮมเพจ)",
      difficulty: "Intermediate",
      points: 220,
      description: `**ภารกิจจัดทำโครงร่างหน้าเว็บ: Corporate Landing Page (หน้าแรกของเว็บบริษัท)**

ในการสร้างเว็บบริษัทหรือองค์กร โครงสร้างและเนื้อหาต้องมีความเป็นสัดส่วน ชัดเจน และอ่านง่าย เพื่อให้ผู้ใช้งานเข้าถึงข้อมูลบริการของบริษัทได้รวดเร็วที่สุด

**ข้อกำหนดทางด้าน HTML:**
1. ส่วนหัวของเว็บไซต์ใช้แท็ก \`<header class="company-header">\` ประกอบด้วย:
   - หัวเรื่องหลัก \`<h1>\` เขียนชื่อบริษัท \`TechVanguard Solutions\`
   - แถบนำทาง \`<nav class="company-nav">\` ที่มีลิงก์ 3 ลิงก์: "หน้าแรก", "บริการของเรา", "ติดต่อเรา"
2. ส่วนเนื้อหาหลักใช้แท็ก \`<main class="company-main">\` ที่ครอบคลุม 2 ส่วนย่อย:
   - ส่วนแนะนำบริษัท \`<section class="hero-section">\`:
     - หัวเรื่องย่อย \`<h2>\` เขียนข้อความ \`นวัตกรรมเพื่อขับเคลื่อนธุรกิจของคุณ\`
     - ย่อหน้าคำอธิบาย \`<p>\` เขียนข้อความ \`เราคือผู้นำในการพัฒนาเทคโนโลยีระดับองค์กร...\`
     - รูปภาพประกอบ \`<img class="hero-image" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600" alt="สำนักงานบริษัท">\`
   - ส่วนบริการย่อย \`<section class="services-grid">\`:
     - บริการย่อย 2 คลาสย่อย \`.service-card\` แต่ละใบมี:
       - หัวเรื่องย่อย \`<h3>\` แสดงชื่อบริการ (เช่น "Cloud Solutions" หรือ "AI Analytics")
       - ย่อหน้าอธิบายคุณประโยชน์สั้นๆ
3. ส่วนท้ายเพจใช้แท็ก \`<footer class="company-footer">\` บรรจุข้อความลิขสิทธิ์ \`© 2026 TechVanguard Solutions. สงวนลิขสิทธิ์.\`

**ข้อกำหนดทางด้าน CSS:**
1. การตกแต่งส่วนหัว \`.company-header\`:
   - ใช้ระบบ **Flexbox** ในการจัดพื้นที่ให้ออกห่างกันในสองฝั่งแบบแนวนอน (\`justify-content: space-between; align-items: center;\`)
   - มีเส้นแบ่งด้านล่างบางๆ สีเทาอ่อน \`1px solid #e2e8f0\` และแพดดิ้ง \`15px 30px\`
2. การตกแต่งส่วนพื้นที่แนะนำและรูปภาพ \`.hero-section\`:
   - พื้นหลังสีเทาอ่อนหรูหรา \`#f8fafc\` มีระยะห่างแพดดิ้งย่อ 2 ค่า: บน-ล่าง \`40px\` และซ้าย-ขวา \`20px\` จัดวางเนื้อหาอยู่กึ่งกลางหน้าจอ (\`text-align: center;\`)
   - รูปภาพฮีโร่ \`.hero-image\`: ล็อกขนาดความกว้างสูงสุด \`100%\`, ความกว้างปกติ \`500px\`, ความสูง \`250px\`, มุมโค้งมน \`8px\`, และรักษาอัตราส่วนรูปภาพไม่ให้บิดเบี้ยวด้วย \`object-fit: cover;\`
3. ระบบการจัดเรียงบริการแบบเคียงข้างกัน \`.services-grid\`:
   - จัดรูปเลย์เอาต์ย่อยโดยใช้ **Flexbox หรือ Grid** แสดงการ์ดบริการแบบเคียงข้างกันในแนวนอน และมีระยะห่างช่องไฟ (\`gap: 20px;\`)
   - การ์ดบริการแต่ละใบ \`.service-card\`: พื้นหลังขาว, ขอบรอบตัวสีเทาอ่อนบางๆ, แพดดิ้ง \`20px\`, มุมโค้งมนสี่มุมเท่ากัน \`6px\`
4. ส่วนท้ายของเพจ \`.company-footer\`:
   - พื้นหลังสีน้ำเงินเข้มขรึม \`#0f172a\`, ข้อความสีเทาอ่อน \`#94a3b8\`, จัดกึ่งกลางจอ และแพดดิ้ง \`15px\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TechVanguard Solutions - หน้าแรก</title>
</head>
<body>
  <!-- เริ่มสร้างหน้าแรกเว็บบริษัทที่นี่ -->
  
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TechVanguard Solutions - หน้าแรก</title>
</head>
<body>
  <header class="company-header">
    <h1>TechVanguard Solutions</h1>
    <nav class="company-nav">
      <a href="#">หน้าแรก</a>
      <a href="#">บริการของเรา</a>
      <a href="#">ติดต่อเรา</a>
    </nav>
  </header>
  
  <main class="company-main">
    <section class="hero-section">
      <h2>นวัตกรรมเพื่อขับเคลื่อนธุรกิจของคุณ</h2>
      <p>เราคือผู้นำในการพัฒนาเทคโนโลยีระดับองค์กร...</p>
      <img class="hero-image" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600" alt="สำนักงานบริษัท">
    </section>
    
    <section class="services-grid">
      <div class="service-card">
        <h3>Cloud Solutions</h3>
        <p>บริการจัดเก็บและดูแลระบบฐานข้อมูลบนคลาวด์มาตรฐานสากลเพื่อความปลอดภัยสูงสุด</p>
      </div>
      <div class="service-card">
        <h3>AI Analytics</h3>
        <p>วิเคราะห์ประมวลผลข้อมูลทางธุรกิจและพฤติกรรมผู้บริโภคด้วยขุมพลังปัญญาประดิษฐ์</p>
      </div>
    </section>
  </main>
  
  <footer class="company-footer">
    © 2026 TechVanguard Solutions. สงวนลิขสิทธิ์.
  </footer>
</body>
</html>`,
      starterCss: `body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  color: #334155;
}

.company-header {
  /* 1. จัดพื้นที่หัวเว็บให้แยกฝั่งซ้ายขวาด้วย Flexbox และระยะห่าง */
  
}

.hero-section {
  /* 2. จัดพื้นที่แบนเนอร์กึ่งกลาง พื้นหลังเทาอ่อน และระยะห่าง */
  
}

.hero-image {
  /* 3. ปรับขนาดรูปฮีโร่ คุมสัดส่วน cover และโค้งมน */
  
}

.services-grid {
  /* 4. แสดงการ์ดบริการขนานกันในแนวนอนและเว้นช่องไฟ */
  
}

.service-card {
  /* 5. ตกแต่งการ์ดบริการขอบเทาอ่อน แพดดิ้ง และโค้งมน */
  
}

.company-footer {
  /* 6. ส่วนท้ายสีเข้มขรึมและจัดข้อความกึ่งกลาง */
  
}`,
      targetCss: `body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  color: #334155;
}

.company-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  border-bottom: 1px solid #e2e8f0;
}

.company-header h1 {
  margin: 0;
  font-size: 20px;
  color: #0f172a;
}

.company-nav a {
  text-decoration: none;
  color: #64748b;
  margin-left: 20px;
  font-weight: 500;
  transition: color 0.2s;
}

.company-nav a:hover {
  color: #0f172a;
}

.company-main {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.hero-section {
  background-color: #f8fafc;
  padding: 40px 20px;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 30px;
}

.hero-section h2 {
  font-size: 28px;
  color: #0f172a;
  margin: 0 0 10px 0;
}

.hero-section p {
  font-size: 16px;
  color: #475569;
  max-width: 600px;
  margin: 0 auto 20px auto;
  line-height: 1.6;
}

.hero-image {
  width: 100%;
  max-width: 500px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
}

.services-grid {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.service-card {
  flex: 1;
  background-color: white;
  border: 1px solid #e2e8f0;
  padding: 20px;
  border-radius: 6px;
}

.service-card h3 {
  margin: 0 0 10px 0;
  color: #0f172a;
  font-size: 18px;
}

.service-card p {
  margin: 0;
  font-size: 14px;
  color: #475569;
  line-height: 1.5;
}

.company-footer {
  background-color: #0f172a;
  color: #94a3b8;
  text-align: center;
  padding: 15px;
  font-size: 14px;
}`,
      validation: (doc) => {
        const header = doc.querySelector('.company-header');
        const main = doc.querySelector('.company-main');
        const footer = doc.querySelector('.company-footer');
        const img = doc.querySelector('.hero-image');
        const cards = doc.querySelectorAll('.service-card');

        if (!header) return "ไม่พบแท็กคลาส .company-header";
        if (!main) return "ไม่พบแท็กคลาส .company-main";
        if (!footer) return "ไม่พบแท็กคลาส .company-footer";
        if (!img) return "ไม่พบรูปภาพฮีโร่คลาส .hero-image";
        if (cards.length < 2) return "กรุณาสร้างการ์ดบริการคลาส .service-card อย่างน้อย 2 ใบ";

        const styleHeader = doc.defaultView.getComputedStyle(header);
        const styleImg = doc.defaultView.getComputedStyle(img);
        const styleFooter = doc.defaultView.getComputedStyle(footer);

        if (styleHeader.display !== 'flex') return "กรุณาจัดเลย์เอาต์ส่วนหัวด้วย Flexbox";
        if (styleImg.objectFit !== 'cover') return "กรุณากำหนดการจัดเรียงรูปภาพด้วย object-fit: cover;";
        if (styleFooter.textAlign !== 'center') return "กรุณากำหนดข้อความฟุตเตอร์ให้อยู่กึ่งกลาง";

        return true;
      }
    }
,
    {
      id: "challenge-streaming-dashboard",
      title: "ภารกิจที่ 16: Premium Streaming Dashboard (แดชบอร์ดจัดการระบบไลฟ์และสื่อ)",
      difficulty: "Hard",
      points: 300,
      description: `**ภารกิจระดับโหดหิน: Premium Streaming Dashboard (แดชบอร์ดสตรีมมิ่งรวมส่วนประกอบหนาแน่น)**

ภารกิจนี้ต้องการให้คุณออกแบบหน้าจอการควบคุมระบบความบันเทิง (Streaming Portal Dashboard) ที่รวมแทบทุกกลไกของ HTML และ CSS ในหน้าเดียว ประกอบไปด้วยโครงสร้างและเลย์เอาต์ซับซ้อน ครบถ้วนทั้งส่วนหัว, แถบนำทาง, เนื้อหาหลัก และส่วนท้ายสุด (Footer):

**ข้อกำหนดทางด้าน HTML:**
1. กล่องนอกสุดหลัก: \`<div class="dashboard-wrapper">\`
2. **ส่วนแถบด้านข้างนำทาง (Navigation Sidebar - คลาส \`.side-nav\`):**
   - หัวข้อ \`<h2>\` เขียนว่า \`PORTAL\`
   - รายการนำทาง \`<ul>\` มี 3 \`<li>\`: "หน้าหลัก", "ไลฟ์สตรีม", "การตั้งค่า"
3. **ส่วนหัวด้านบน (Header - คลาส \`.top-bar\`):**
   - ข้อความต้อนรับ \`<span>สวัสดี, สตรีมเมอร์</span>\`
   - กล่องรับค่าค้นหาประเภท \`<input type="search" class="search-box" placeholder="ค้นหาคลิป...">\`
   - กล่องเลือกสีประเภท \`<input type="color" class="theme-picker" value="#3b82f6">\`
4. **ส่วนพื้นที่หลักและเนื้อหา (Main Content - คลาส \`.portal-main\`):**
   - บล็อกแสดงสถานะไลฟ์ (Live Status Card - คลาส \`.status-card\`):
     - มีป้ายไฟจุดกะพริบ คลาส \`.live-dot\`
     - ข้อความสถานะ \`<span>LIVE STREAMING</span>\`
     - ช่องตัวเลขผู้ชม: \`<input type="number" class="viewer-input" min="0" value="1500" required>\`
   - แถบพับ FAQ เกี่ยวกับการตั้งค่า โดยใช้แท็ก \`<details>\` ด้านในมี \`<summary>\`เขียนว่า \`ดูค่าความคมชัดของไลฟ์\` และข้อความย่อหน้า \`<p>\`เขียนว่า \`ความละเอียดสตรีม 1080p Bitrate 6000kbps\`
5. **ส่วนแถบเครื่องมือควบคุมการเล่น (Control Widget - คลาส \`.media-widget\`):**
   - มีหัวข้อ \`<h3>\`เขียนว่า \`พรีวิวสตรีมสด\`
   - ฝังวิดีโอจำลองด้วย \`<video class="video-preview" src="assets/preview.mp4" controls></video>\`
   - แถบปรับระดับเสียงประเภทระดับแถบเลื่อน: \`<input type="range" class="volume-slider" min="0" max="100" value="70">\`
6. **ส่วนท้ายของเพจ (Footer - คลาส \`.portal-footer\`):**
   - มีข้อความย่อยบอกสถานะ \`<span>ระบบทำงานปกติ | Latency: 12ms</span>\`
   - มีข้อความลิขสิทธิ์ \`<span>© 2026 Portal Stream. สงวนลิขสิทธิ์</span>\`

**ข้อกำหนดทางด้าน CSS:**
1. เลย์เอาต์และตารางตำแหน่ง \`.dashboard-wrapper\`:
   - ใช้ระบบ **CSS Grid** ในการจัดกลุ่มพื้นที่: แบ่งแถบซ้ายเป็น Sidebar กว้าง \`220px\` และด้านขวา Content กว้าง \`1fr\` ห่างกัน \`gap: 20px;\`
2. ขอบโค้งมนแบบไล่คู่และการเฉดสีการ์ด:
   - การ์ดสถานะ \`.status-card\` และแท็บเครื่องมือควบคุม \`.media-widget\` ต้องมีขอบมนเฉพาะมุมบนซ้ายและบนขวา \`16px\` ส่วนมุมล่างเป็น \`0px\` (\`border-radius: 16px 16px 0 0;\`)
   - ใช้สีกระจกใสสะท้อนเงามิติ (Glassmorphism): พื้นหลังขาวโปร่งแสง \`rgba(255, 255, 255, 0.7)\` และใช้ \`backdrop-filter: blur(8px);\` ร่วมกับเงา \`box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.08);\`
3. เอฟเฟกต์และอนิเมชันคีย์เฟรม \`.live-dot\`:
   - จุดไฟกะพริบ \`.live-dot\` ต้องมีขนาดกว้างสูง \`10px\`, ความโค้งมนเป็นวงกลมสมบูรณ์ (\`border-radius: 50%;\`), สีแดง \`#ef4444\`, และมีอนิเมชันชื่อ \`pulse\` ความเร็ว \`1s\` แบบวนซ้ำไม่มีที่สิ้นสุด (\`animation: pulse 1s infinite;\`)
   - กำหนดเรื่องราวแอนิเมชัน \`@keyframes pulse\` เพื่อปรับการขยายขนาดจาก \`scale(0.95)\` เป็น \`scale(1.2)\` และปรับความโปร่งใสจาก \`opacity: 1\` เป็น \`opacity: 0.4\` เมื่อวนซ้ำ
4. ส่วนท้ายสุด \`.portal-footer\`:
   - ใช้ระบบจัดตำแหน่งแบบ **Flexbox** คุมให้เนื้อหาแยกไปสองฝั่ง (\`justify-content: space-between;\` และจัดให้อยู่กึ่งกลางแนวตั้ง \`align-items: center;\`) พร้อมแพดดิ้ง \`15px\` และสีตัวอักษรสีเทาอ่อน \`#94a3b8\`
5. แถบตอบสนองจอโทรศัพท์:
   - ตั้งค่า Media Query (เมื่อจอแคบกว่า \`768px\`) ให้ปิดการแสดงผลของ Sidebar (\`display: none;\`) และปรับให้คอลัมน์ขวาขยายกว้างเต็มหน้าจอ`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Streaming Dashboard Portal</title>
</head>
<body>
  <!-- ออกแบบแดชบอร์ดระดับโปรที่มีหัว เมนู เนื้อหา และท้ายสุดของคุณที่นี่ -->
  
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Streaming Dashboard Portal</title>
</head>
<body>
  <div class="dashboard-wrapper">
    <aside class="side-nav">
      <h2>PORTAL</h2>
      <ul>
        <li>หน้าหลัก</li>
        <li>ไลฟ์สตรีม</li>
        <li>การตั้งค่า</li>
      </ul>
    </aside>
    
    <div class="main-container">
      <header class="top-bar">
        <span>สวัสดี, สตรีมเมอร์</span>
        <input type="search" class="search-box" placeholder="ค้นหาคลิป...">
        <input type="color" class="theme-picker" value="#3b82f6">
      </header>
      
      <main class="portal-main">
        <div class="status-card">
          <div class="live-status">
            <div class="live-dot"></div>
            <span>LIVE STREAMING</span>
          </div>
          <input type="number" class="viewer-input" min="0" value="1500" required>
        </div>
        
        <details>
          <summary>ดูค่าความคมชัดของไลฟ์</summary>
          <p>ความละเอียดสตรีม 1080p Bitrate 6000kbps</p>
        </details>
      </main>
      
      <section class="media-widget">
        <h3>พรีวิวสตรีมสด</h3>
        <video class="video-preview" src="assets/preview.mp4" controls></video>
        <input type="range" class="volume-slider" min="0" max="100" value="70">
      </section>
      
      <footer class="portal-footer">
        <span>ระบบทำงานปกติ | Latency: 12ms</span>
        <span>© 2026 Portal Stream. สงวนลิขสิทธิ์</span>
      </footer>
    </div>
  </div>
</body>
</html>`,
      starterCss: `body {
  background-color: #0f172a;
  color: #f8fafc;
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
}

.dashboard-wrapper {
  /* 1. จัดตำแหน่งกริด 2 คอลัมน์ Sidebar กว้าง 220px และ Content กว้าง 1fr พร้อมช่องไฟ */
  
}

.status-card, .media-widget {
  /* 2. สไตล์ขอบมนเฉพาะด้านบน 16px และสูตรสะท้อนกระจกแก้ว Glassmorphism */
  
}

.live-dot {
  /* 3. สไตล์วงกลมสีแดงกว้างสูง 10px และผูกกับแอนิเมชันกะพริบ pulse */
  
}

/* 4. เรื่องราวคีย์เฟรมสำหรับแอนิเมชันกะพริบ @keyframes pulse หมุนปรับความโปร่งแสงและขนาด */


.portal-footer {
  /* 5. จัดระเบียบข้อความฟุตเตอร์แยกไปสองฝั่งด้วย Flexbox และตกแต่งสี */
  
}

@media (max-width: 768px) {
  /* 6. จอมือถือ: ให้ซ่อนแถบด้านข้าง side-nav */
  
}`,
      targetCss: `body {
  background-color: #0f172a;
  color: #f8fafc;
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
}

.dashboard-wrapper {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.side-nav {
  background-color: #1e293b;
  padding: 20px;
  border-radius: 12px;
  height: fit-content;
}

.side-nav h2 {
  margin: 0 0 20px 0;
  color: #3b82f6;
  font-size: 20px;
}

.side-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.side-nav li {
  padding: 10px;
  cursor: pointer;
  border-radius: 6px;
  margin-bottom: 5px;
  transition: background 0.2s;
}

.side-nav li:hover {
  background-color: #334155;
}

.main-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.top-bar {
  background-color: #1e293b;
  padding: 15px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.search-box {
  background-color: #334155;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  color: white;
  outline: none;
}

.theme-picker {
  border: none;
  background: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
}

.portal-main {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.status-card {
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px 16px 0 0;
  padding: 20px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.live-status {
  display: flex;
  align-items: center;
  gap: 10px;
}

.live-dot {
  width: 10px;
  height: 10px;
  background-color: #ef4444;
  border-radius: 50%;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 1;
  }
  50% {
    transform: scale(1.25);
    opacity: 0.5;
  }
  100% {
    transform: scale(0.95);
    opacity: 1;
  }
}

.viewer-input {
  background-color: #334155;
  border: 1px solid #475569;
  color: white;
  padding: 6px 10px;
  border-radius: 4px;
  width: 90px;
}

details {
  background-color: #1e293b;
  padding: 15px;
  border-radius: 8px;
}

summary {
  font-weight: bold;
  cursor: pointer;
  outline: none;
}

details p {
  margin: 10px 0 0 0;
  color: #94a3b8;
  font-size: 14px;
}

.media-widget {
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px 16px 0 0;
  padding: 20px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
}

.media-widget h3 {
  margin: 0 0 15px 0;
}

.video-preview {
  width: 100%;
  border-radius: 8px;
  background-color: black;
  margin-bottom: 15px;
}

.volume-slider {
  width: 100%;
  cursor: pointer;
}

.portal-footer {
  background-color: #1e293b;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #94a3b8;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .dashboard-wrapper {
    grid-template-columns: 1fr;
  }
  .side-nav {
    display: none;
  }
}`,
      validation: (doc, cssText) => {
        const wrapper = doc.querySelector('.dashboard-wrapper');
        const sideNav = doc.querySelector('.side-nav');
        const statusCard = doc.querySelector('.status-card');
        const dot = doc.querySelector('.live-dot');
        const details = doc.querySelector('details');
        const widget = doc.querySelector('.media-widget');
        const video = doc.querySelector('.video-preview');
        const footer = doc.querySelector('.portal-footer');

        if (!wrapper) return "ไม่พบ Container ครอบแดชบอร์ดหลักคลาส .dashboard-wrapper";
        if (!sideNav || !statusCard || !dot || !details || !widget || !video || !footer) {
          return "กรุณาประกอบส่วนโครงร่าง HTML ทุกชิ้นส่วนตามข้อกำหนดข้อสอบให้ครบถ้วน (หัว, แถบนำทาง, เนื้อหาหลัก, ฟุตเตอร์)";
        }

        const styleWrapper = doc.defaultView.getComputedStyle(wrapper);
        const styleDot = doc.defaultView.getComputedStyle(dot);
        const styleCard = doc.defaultView.getComputedStyle(statusCard);
        const styleFooter = doc.defaultView.getComputedStyle(footer);

        if (!styleWrapper.display.includes('grid')) return "กรุณาจัดวางเลย์เอาต์หลักด้วยระบบ Grid";
        if (styleDot.borderRadius !== '50%') return "กรุณากำหนดความโค้งมนของป้ายกะพริบ .live-dot เป็นวงกลม 50%";
        const tl = parseFloat(styleCard.borderTopLeftRadius);
        const tr = parseFloat(styleCard.borderTopRightRadius);
        if (isNaN(tl) || Math.round(tl) !== 16 || isNaN(tr) || Math.round(tr) !== 16 || parseFloat(styleCard.borderBottomLeftRadius) > 0) {
          return "กรุณากำหนดมุมขอบมนของการ์ดสถานะ .status-card เป็น border-radius: 16px 16px 0 0;";
        }
        if (styleFooter.display !== 'flex') return "กรุณาจัดวางเลย์เอาต์ฟุตเตอร์ด้วย Flexbox";

        const cleaned = cssText.replace(/\\s+/g, '');
        if (!cleaned.includes('@keyframespulse')) {
          return "กรุณาระบุรายละเอียดเรื่องราวแอนิเมชัน @keyframes pulse ให้ป้ายไฟสถานะสด";
        }
        if (!cleaned.includes('@media')) {
          return "อย่าลืมกำหนดแถบตอบสนองหน้าต่างบราว์เซอร์ด้วย @media (max-width: 768px)";
        }
        return true;
      }
    },
    {
      id: "midterm-challenge-1",
      title: "ภารกิจพิเศษ: ข้อสอบกลางภาค ตอนที่ 1 (Bento Grid & Glassmorphism)",
      difficulty: "Hard",
      points: 200,
      description: `### 🌿 ภารกิจจำลองข้อสอบกลางภาค ตอนที่ 1: ข้อมูลร้านและแกลเลอรีเรือนกระจก
      
จงเขียน CSS เพื่อวางโครงสร้างและสไตล์ของหน้าข้อมูลร้าน **Flora & Fauna Glasshouse** ตามเงื่อนไขดังต่อไปนี้:

1. **สไตล์นำทางกระจกฝ้า (.navbar)**:
   - ตรึงเมนูไว้ด้านบนสุดเสมอเมื่อเลื่อนดูเนื้อหาลงมา (\`position: sticky; top: 0;\`)
   - ตั้งค่าสไตล์โปร่งแสงและเบลอ (\`backdrop-filter: blur(10px); background-color: rgba(250, 248, 245, 0.85);\`)
   - จัดวางโลโก้อยู่ซ้าย ลิงก์เมนูอยู่ขวาด้วย Flexbox ใน \`.nav-container\`
2. **แบนเนอร์ Hero (.hero)**:
   - จัดเนื้อหาให้อยู่ตรงกลางแบนเนอร์เป๊ะทั้งแนวตั้งและแนวนอน
   - ตั้งสไตล์ \`.hero-overlay\` เคลือบสีดำโปร่งแสง (\`rgba(15, 27, 20, 0.55)\`) คลุมพื้นที่ให้ตัวหนังสือสีขาวอ่านง่าย
3. **แกลเลอรี Bento (.gallery-grid)**:
   - จัดวางแกลเลอรีเป็น Grid 3 คอลัมน์ (\`grid-template-columns: repeat(3, 1fr);\`)
   - กำหนดการกินพื้นที่อย่างไม่สมมาตร (Grid Spanning) ให้สวยงาม:
     - \`.item-1\`: กว้าง 2 คอลัมน์ และ สูง 2 แถว (\`grid-column: span 2; grid-row: span 2;\`)
     - \`.item-2\`: สูง 2 แถว (\`grid-row: span 2;\`)
     - \`.item-5\`: กว้าง 2 คอลัมน์ (\`grid-column: span 2;\`)
   - ท้าทาย: เมื่อ Hover ที่การ์ดให้รูปภาพด้านในขยายขอบเขตเล็กน้อย (\`transform: scale(1.08);\`) โดยมี Transition นุ่มนวล
4. **การรองรับมือถือ (@media (max-width: 768px))**:
   - ยุบแกลเลอรีให้แสดงเป็น 1 คอลัมน์แนวตั้งทั้งหมด และเคลียร์สปันให้ภาพกว้างเต็มปกติ`,
      starterHtml: `<!-- โครงสร้าง HTML หน้าข้อมูลร้าน (Midterm Shop Part 1) -->
<header class="navbar">
  <div class="nav-container">
    <div class="logo">🌿 Flora & Fauna</div>
    <nav class="nav-links">
      <a href="#" class="nav-item active">ข้อมูลร้าน</a>
      <a href="#" class="nav-item">เมนู & บริการ</a>
      <a href="#" class="nav-item">จองโต๊ะสัมมนา</a>
    </nav>
  </div>
</header>

<section class="hero">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <span class="badge">Glasshouse Cafe</span>
    <h1>สัมผัสรสชาติธรรมชาติใจกลางเมือง</h1>
    <p>คาเฟ่เรือนกระจกที่รวมเครื่องดื่มและพื้นที่ทำงานท่ามกลางสวนป่าสีเขียว</p>
    <a href="#" class="btn btn-primary">จองโต๊ะเลย</a>
  </div>
</section>

<main class="container">
  <section class="gallery-section">
    <h2>คลังภาพบรรยากาศร้าน (Glasshouse Gallery)</h2>
    <div class="gallery-grid">
      <div class="gallery-item item-1">
        <div class="gallery-img-wrapper"><img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600" alt="Glasshouse Area"></div>
        <div class="gallery-caption">Main Glasshouse Area</div>
      </div>
      <div class="gallery-item item-2">
        <div class="gallery-img-wrapper"><img src="https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600" alt="Slow Bar"></div>
        <div class="gallery-caption">Slow Bar & Specialty Coffee</div>
      </div>
      <div class="gallery-item item-3">
        <div class="gallery-img-wrapper"><img src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=600" alt="Botanical"></div>
        <div class="gallery-caption">Botanical Garden</div>
      </div>
      <div class="gallery-item item-4">
        <div class="gallery-img-wrapper"><img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600" alt="Bakery"></div>
        <div class="gallery-caption">Bakery Studio</div>
      </div>
      <div class="gallery-item item-5">
        <div class="gallery-img-wrapper"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600" alt="Co-working"></div>
        <div class="gallery-caption">Private Co-working Room</div>
      </div>
    </div>
  </section>
</main>`,
      starterCss: `/* 🎨 สไตล์ชีตเริ่มต้นเขียนเลย์เอาต์ */
:root {
  --primary-color: #1b3b2b;
  --accent-color: #c49a6c;
  --accent-light: #f5efe6;
  --bg-light: #faf8f5;
  --text-dark: #1b2520;
  --text-muted: #6c7870;
  --white: #ffffff;
  --border-color: #e5e0d8;
  --border-radius: 12px;
  --transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

body {
  font-family: sans-serif;
  background-color: var(--bg-light);
  color: var(--text-dark);
  margin: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.hero {
  height: 500px;
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80');
  background-size: cover;
  background-position: center;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: var(--white);
  max-width: 850px;
  padding: 40px 24px 0 24px; /* ป้องกันการทับซ้อน */
  margin: 0 auto; /* จัดให้อยู่กึ่งกลางแนวนอน */
}

/* --- เริ่มเขียนโค้ดของคุณด้านล่างนี้ --- */
`,
      targetHtml: ``,
      targetCss: ``,
      validation: (doc, cssText) => {
        const navbar = doc.querySelector('.navbar');
        const navContainer = doc.querySelector('.nav-container');
        const hero = doc.querySelector('.hero');
        const heroOverlay = doc.querySelector('.hero-overlay');
        const galleryGrid = doc.querySelector('.gallery-grid');
        const item1 = doc.querySelector('.item-1');
        const item2 = doc.querySelector('.item-2');
        const item5 = doc.querySelector('.item-5');

        if (!navbar || !navContainer || !hero || !galleryGrid || !item1) {
          return "กรุณาอย่าเปลี่ยนชื่อคลาส HTML หลักที่โจทย์กำหนดมา";
        }

        const styleNavbar = doc.defaultView.getComputedStyle(navbar);
        const styleNavContainer = doc.defaultView.getComputedStyle(navContainer);
        const styleHero = doc.defaultView.getComputedStyle(hero);
        const styleHeroOverlay = doc.defaultView.getComputedStyle(heroOverlay);
        const styleGrid = doc.defaultView.getComputedStyle(galleryGrid);

        // 1. Navbar checks
        if (styleNavbar.position !== 'sticky') {
          return "กรุณากำหนดสไตล์แถบนำทางให้เป็น Sticky (position: sticky; top: 0;)";
        }
        if (styleNavContainer.display !== 'flex') {
          return "กรุณาจัดวางเลย์เอาต์ของส่วนนำทางข้างใน .nav-container ด้วย Flexbox";
        }

        // 2. Hero checks
        if (styleHero.display !== 'flex') {
          return "กรุณาจัดวางข้อความกึ่งกลางของ Hero Banner ด้วยระบบ Flexbox";
        }
        if (styleHeroOverlay.position !== 'absolute') {
          return "กรุณากำหนดสไตล์ .hero-overlay ให้มี position: absolute เพื่อเคลือบพื้นหลังแบนเนอร์";
        }

        // 3. Bento Grid checks
        if (!styleGrid.display.includes('grid')) {
          return "กรุณาจัดวางแกลเลอรีรูปภาพ .gallery-grid ด้วยระบบ CSS Grid";
        }

        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes('grid-column') && !cleaned.includes('grid-row')) {
          return "กรุณาระบุ grid-column หรือ grid-row สปันให้กับ .item-1, .item-2 และ .item-5 เพื่อทำ Bento Grid";
        }
        
        if (!cleaned.includes('@media')) {
          return "อย่าลืมกำหนดการรองรับขนาดหน้าจอมือถือและการคืนค่าสปัน Grid Gallery บนมือถือด้วย @media (max-width: 768px)";
        }

        return true;
      },
      hints: [
        "ใช้ position: sticky; top: 0; backdrop-filter: blur(10px); สำหรับแถบนำทาง",
        "จัด Hero กลางจอโดยใช้ display: flex; justify-content: center; align-items: center; flex-direction: column;",
        "บีบ Bento Grid สปันด้วย grid-column: span 2; ในคลาส .item-1 และ .item-5"
      ]
    },
    {
      id: "midterm-challenge-2",
      title: "ภารกิจพิเศษ: ข้อสอบกลางภาค ตอนที่ 2 (Menu Catalog & Card Flexbox)",
      difficulty: "Hard",
      points: 200,
      description: `### 🍰 ภารกิจจำลองข้อสอบกลางภาค ตอนที่ 2: เมนูและการจัด Flexbox ให้เท่ากัน
      
จงเขียน CSS เพื่อจัดวางเลย์เอาต์การ์ดเมนูอาหารและเครื่องดื่ม **Flora & Fauna Glasshouse** ตามเงื่อนไขดังต่อไปนี้:

1. **เลย์เอาต์ Grid หมวดหมู่เมนู (.menu-grid)**:
   - หน้าจอปกติแสดงผลเป็น 4 คอลัมน์ความกว้างเท่ากัน (\`grid-template-columns: repeat(4, 1fr);\`)
   - มีระยะห่างที่สวยงาม (\`gap: 30px;\`)
2. **การ์ดเมนูแบบดึงล่างสุดเสมอกัน (.menu-card)**:
   - ตั้งค่าตัวการ์ดและเนื้อหาภายใน (\`.card-content\`) เป็นระบบ Flexbox แนวตั้ง (\`display: flex; flex-direction: column;\`)
   - **โจทย์หลัก**: ดันกล่องราคาและปุ่มสั่งซื้อ (\`.card-footer\`) ให้ตกลงไปชิดขอบการ์ดข้างล่างสุดเสมอกันทุกใบเป๊ะ โดยห้ามกำหนดความสูงคงที่ให้กับตัวเนื้อหา (คำใบ้: กำหนดให้คำบรรยาย \`.card-desc\` ใส่ค่า \`flex-grow: 1;\` เพื่อยืดขยายดันปุ่มลงล่างสุด)
3. **ป้ายโปรโมชันที่มุมการ์ด (.card-badge)**:
   - จัดวางตำแหน่งของป้ายสถานะสินค้าให้อยู่มุมขวาบนของภาพการ์ด (\`position: absolute; top: 20px; right: 20px;\`)
4. **เอฟเฟกต์แอนิเมชันลื่นไหล (Hover Transition)**:
   - เมื่อผู้ใช้นำเมาส์ไปชี้ที่การ์ด (\`.menu-card:hover\`) ให้การ์ดยกตัวลอยขึ้นเบาๆ (\`transform: translateY(-10px);\`) และเงาการ์ดฟุ้งชัดขึ้น (\`box-shadow\`)`,
      starterHtml: `<!-- โครงสร้างรายการเมนู (Midterm Menu Part 2) -->
<main class="container">
  <div class="menu-grid">
    
    <!-- เมนูที่ 1 -->
    <article class="menu-card">
      <div class="card-img-container">
        <img src="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400" alt="Matcha">
        <span class="card-badge bestseller">Best Seller</span>
      </div>
      <div class="card-content">
        <h3>Matcha Latte</h3>
        <p class="card-desc">มัทฉะเข้มข้นนำเข้าจากเมืองอุจิ ประเทศญี่ปุ่น ปลูกใต้ร่มเงาอย่างดี คัดสรรเฉพาะสามใบแรกเพื่อรสชาติลึกซึ้งกลมกล่อมตามสไตล์สโลว์บาร์</p>
        <div class="card-footer">
          <span class="price">฿145</span>
          <button class="btn">สั่งซื้อ</button>
        </div>
      </div>
    </article>

    <!-- เมนูที่ 2 -->
    <article class="menu-card">
      <div class="card-img-container">
        <img src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=400" alt="Cold Brew">
      </div>
      <div class="card-content">
        <h3>Rose Cold Brew</h3>
        <p class="card-desc">กาแฟอาราบิก้าสกัดเย็นบ่มนาน 18 ชั่วโมง ผสานกลิ่นกุหลาบสดชื่นเบาๆ</p>
        <div class="card-footer">
          <span class="price">฿160</span>
          <button class="btn">สั่งซื้อ</button>
        </div>
      </div>
    </article>

    <!-- เมนูที่ 3 -->
    <article class="menu-card">
      <div class="card-img-container">
        <img src="https://images.unsplash.com/photo-1562376502-6f769499c886?w=400" alt="Waffle">
      </div>
      <div class="card-content">
        <h3>Honey Waffle</h3>
        <p class="card-desc">วาฟเฟิลสไตล์เบลเยียมอบร้อนเนื้อในเหนียวนุ่ม ขอบนอกบางกรอบหอมกรุ่นเนยสดแท้ ราดด้วยน้ำผึ้งเกสรดอกลำไยแท้ส่งตรงจากสวน</p>
        <div class="card-footer">
          <span class="price">฿185</span>
          <button class="btn">สั่งซื้อ</button>
        </div>
      </div>
    </article>

  </div>
</main>`,
      starterCss: `/* 🎨 สไตล์ชีตเริ่มต้นเขียนเลย์เอาต์ */
:root {
  --primary-color: #1b3b2b;
  --accent-color: #c49a6c;
  --border-color: #e5e0d8;
  --border-radius: 12px;
  --white: #ffffff;
  --bestseller-color: #9e2a2b;
  --transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

body {
  font-family: sans-serif;
  background-color: #faf8f5;
  margin: 0;
  padding: 40px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.card-img-container {
  height: 200px;
  position: relative;
}

.price {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--accent-color);
}

.btn {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
}

/* --- เริ่มเขียนโค้ดของคุณด้านล่างนี้ --- */
`,
      targetHtml: ``,
      targetCss: ``,
      validation: (doc, cssText) => {
        const menuGrid = doc.querySelector('.menu-grid');
        const menuCard = doc.querySelector('.menu-card');
        const cardBadge = doc.querySelector('.card-badge');
        const cardContent = doc.querySelector('.card-content');
        const cardDesc = doc.querySelector('.card-desc');

        if (!menuGrid || !menuCard || !cardContent || !cardDesc) {
          return "กรุณาตรวจสอบโครงสร้างการ์ดและคลาสของเนื้อหาเมนูตามแบบฝึกหัด";
        }

        const styleGrid = doc.defaultView.getComputedStyle(menuGrid);
        const styleCard = doc.defaultView.getComputedStyle(menuCard);
        const styleContent = doc.defaultView.getComputedStyle(cardContent);
        const styleDesc = doc.defaultView.getComputedStyle(cardDesc);

        if (!styleGrid.display.includes('grid')) {
          return "กรุณากำหนดตัวครอบเมนู .menu-grid ให้แสดงผลแบบ Grid";
        }
        if (styleCard.display !== 'flex' || styleContent.display !== 'flex') {
          return "การทำปุ่มสั่งซื้อให้ชิดล่างเท่ากันได้ ต้องกำหนด .menu-card และ .card-content ให้เป็น display: flex;";
        }
        if (styleContent.flexDirection !== 'column') {
          return "กรุณากำหนดทิศทางของคอนเทนต์ด้านใน .card-content ให้เรียงในแนวตั้ง (flex-direction: column;)";
        }
        if (parseFloat(styleDesc.flexGrow) <= 0) {
          return "กรุณากำหนดให้ .card-desc สามารถยืดตัวได้ (flex-grow: 1;) เพื่อผลักดันปุ่มสั่งซื้อให้ลงขอบล่างเสมอกัน";
        }
        if (cardBadge) {
          const styleBadge = doc.defaultView.getComputedStyle(cardBadge);
          if (styleBadge.position !== 'absolute') {
            return "กรุณากำหนดสไตล์ให้ป้ายบอกโปรโมชัน .card-badge ให้เป็นแบบลอยทับรูปภาพ (position: absolute;)";
          }
        }

        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes(':hover') || !cleaned.includes('translateY')) {
          return "อย่าลืมระบุเอฟเฟกต์ยกตัวลอยของการ์ดเมื่อผู้ใช้ชี้เมาส์ในสเตท .menu-card:hover";
        }

        return true;
      },
      hints: [
        "ใช้ display: flex; flex-direction: column; บนคลาส .menu-card และ .card-content",
        "ใส่ค่า flex-grow: 1; ให้กับย่อหน้าบรรยายสินค้า .card-desc เพื่อขยายพื้นที่บีบขอบปุ่ม",
        "จัดสไตล์ป้ายลอยโดยกำหนด .card-img-container ให้มี position: relative; และให้ .card-badge มี position: absolute; top: X; right: Y;"
      ]
    },
    {
      id: "midterm-challenge-3",
      title: "ภารกิจพิเศษ: ข้อสอบกลางภาค ตอนที่ 3 (Visual Radio Cards & Switch Toggle)",
      difficulty: "Hard",
      points: 250,
      description: `### 📅 ภารกิจจำลองข้อสอบกลางภาค ตอนที่ 3: ฟอร์มแบบจดจำสถานะผ่าน CSS
      
จงเขียน CSS เพื่อจัดระบบและสไตล์ของแบบฟอร์มการจอง **Flora & Fauna Glasshouse** ตามเงื่อนไขดังต่อไปนี้:

1. **สปลิทเลย์เอาต์ 2 ฝั่ง (.split-layout)**:
   - ฝั่งซ้ายเป็นข้อมูลห้อง แผนผังโซนที่นั่ง และฝั่งขวาเป็นแบบฟอร์ม จัดวางแยกกันคนละคอลัมน์กว้าง 35% และ 65% ตามลำดับ
2. **จัดตำแหน่งช่องป้อนข้อมูลด้วย Grid (.form-grid)**:
   - จัดช่องอินพุตกลุ่ม ชื่อ-นามสกุล และ อีเมล-เบอร์โทร ให้แบ่งกันครึ่งละ 50% ตกแต่งให้อยู่แถวเดียวกัน
3. **ระบบปุ่มเลือกแพ็กเกจพื้นที่แบบ Custom Radio Cards (ความท้าทายสูง)**:
   - **กติกา**: ซ่อนปุ่มกลมวิทยุแท้และดั้งเดิมของเบราว์เซอร์ออกไป
   - จัดสไตล์ป้ายฉลาก \`.custom-radio-card\` ให้แสดงเป็นกรอบสี่เหลี่ยมคล้ายบัตรตัวเลือกสวยงาม
   - เมื่อผู้ใช้เลือกแพ็กเกจ (\`input[type="radio"]:checked\`) ให้การ์ดที่อยู่ตามหลังที่เป็นฉลาก (\`+ .custom-radio-card\`) เปลี่ยนกรอบเป็นสีป่าไม้เข้มและพื้นสีกระดาษทองจางๆ เคลื่อนไหวยกลอยขึ้นเบาๆ
4. **ปุ่มสวิตช์ปิดเปิดยอมรับข่าวสาร (Custom Toggle Switch)**:
   - ออกแบบเช็คบ็อกซ์รับข่าวสารให้ออกมาในรูปสไลเดอร์เปิด-ปิด
   - เมื่อผู้ใช้ติ๊กเลือก (\`:checked\`) ให้รางสวิตช์เปลี่ยนเป็นสีเขียวป่าไม้ และขยับเลื่อนลูกแก้วด้านในเลื่อนไปทางขวาด้วยคำสั่ง \`transform: translateX()\``,
      starterHtml: `<!-- โครงสร้างหน้าจองโต๊ะและแพ็กเกจ (Midterm Booking Part 3) -->
<main class="container">
  <div class="split-layout">
    
    <!-- ส่วนข้อมูลด้านซ้าย -->
    <aside class="info-sidebar">
      <div class="info-card">
        <h3>ระเบียบการสำรองที่นั่ง</h3>
        <p>กรุณาจองล่วงหน้าอย่างน้อย 24 ชั่วโมงและเข้าใช้บริการตรงเวลา</p>
      </div>
    </aside>

    <!-- ส่วนของฟอร์มจองด้านขวา -->
    <section class="form-container">
      <h2>แบบฟอร์มขอเข้าใช้บริการ</h2>
      <form class="booking-form">
        
        <!-- ฟิลด์ชื่อ-นามสกุล -->
        <div class="form-grid">
          <div class="form-group">
            <label for="firstname">ชื่อจริง</label>
            <input type="text" id="firstname" required>
          </div>
          <div class="form-group">
            <label for="lastname">นามสกุล</label>
            <input type="text" id="lastname" required>
          </div>
        </div>

        <!-- Custom Radio Cards เลือกแพ็กเกจ -->
        <div class="form-group">
          <label>เลือกแพ็กเกจบริการ</label>
          <div class="radio-cards-grid">
            
            <div class="radio-card-wrapper">
              <input type="radio" id="pkg-a" name="pkg" checked required>
              <label for="pkg-a" class="custom-radio-card">
                <div class="radio-title">Hot Desk Pass</div>
                <div class="radio-price">฿250 / วัน</div>
              </label>
            </div>

            <div class="radio-card-wrapper">
              <input type="radio" id="pkg-b" name="pkg">
              <label for="pkg-b" class="custom-radio-card">
                <div class="radio-title">Meeting Room</div>
                <div class="radio-price">฿600 / 2 ชม.</div>
              </label>
            </div>

          </div>
        </div>

        <!-- Custom Toggle Switch ยอมรับอีเมลข่าวสาร -->
        <div class="toggle-group">
          <label class="switch-container">
            <input type="checkbox" id="subscribe">
            <span class="switch-slider"></span>
          </label>
          <span class="toggle-label">รับข่าวสารเวิร์กชอปจากเรา</span>
        </div>

        <button type="submit" class="btn btn-primary">ยืนยันข้อมูลจอง</button>
      </form>
    </section>

  </div>
</main>`,
      starterCss: `/* 🎨 สไตล์ชีตเริ่มต้นเขียนเลย์เอาต์ */
:root {
  --primary-color: #1b3b2b;
  --accent-color: #c49a6c;
  --accent-light: #f5efe6;
  --border-color: #e5e0d8;
  --border-radius: 12px;
  --white: #ffffff;
}

body {
  font-family: sans-serif;
  background-color: #faf8f5;
  margin: 0;
  padding: 40px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.info-card, .form-container {
  background-color: var(--white);
  padding: 30px;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
}

/* --- เริ่มเขียนโค้ดของคุณด้านล่างนี้ --- */
`,
      targetHtml: ``,
      targetCss: ``,
      validation: (doc, cssText) => {
        const splitLayout = doc.querySelector('.split-layout');
        const formGrid = doc.querySelector('.form-grid');
        const radioCardsGrid = doc.querySelector('.radio-cards-grid');
        const switchSlider = doc.querySelector('.switch-slider');

        if (!splitLayout || !formGrid || !radioCardsGrid || !switchSlider) {
          return "กรุณาจัดวางโครงร่างและใช้ชื่อคลาสตามแบบฝึกหัดอย่างถูกต้อง";
        }

        const styleSplit = doc.defaultView.getComputedStyle(splitLayout);
        const styleFormGrid = doc.defaultView.getComputedStyle(formGrid);

        if (styleSplit.display !== 'grid' && styleSplit.display !== 'flex') {
          return "กรุณาจัดวางเลย์เอาต์หน้าแบ่งฝั่ง .split-layout ด้วย Flexbox หรือ Grid";
        }
        if (styleFormGrid.display !== 'grid' && styleFormGrid.display !== 'flex') {
          return "กรุณาจัดวางช่องกรอก ชื่อจริง-นามสกุล .form-grid ให้อยู่ระดับแนวนอนเดียวกันด้วย Flexbox หรือ Grid";
        }

        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes('checked+')) {
          return "ต้องใช้คุณสมบัติสเตทเลือกของการ์ดวิทยุและสวิตช์ด้วย Selector ดักจับประเภท :checked + .custom-radio-card และ :checked + .switch-slider";
        }
        if (!cleaned.includes('translateX') && !cleaned.includes('transform:translate')) {
          return "กรุณาส่งแอนิเมชันลูกแก้วในสวิตช์เปิดปิดสไลด์ด้วยคำสั่ง transform: translateX(ระยะทาง)";
        }

        return true;
      },
      hints: [
        "จัด Grid 2 คอลัมน์ให้หน้าแบ่งฝั่งด้วย grid-template-columns: 35% 65%;",
        "จัดสปันกรอบตัวเลือกด้วย input[type='radio']:checked + .custom-radio-card { border-color: var(--primary-color); background-color: var(--accent-light); }",
        "เลื่อนตุ่มสวิตช์โดยสไตล์สไลเดอร์ตอนเช็ค: input[type='checkbox']:checked + .switch-slider::before { transform: translateX(27px); }"
      ]
    },
    {
      id: "challenge-sales-table",
      title: "ภารกิจที่ 17: Premium Sales Report (ตารางสรุปยอดขายระดับโปร)",
      difficulty: "Intermediate",
      points: 150,
      description: `### 📊 ภารกิจสร้างตารางสรุปยอดขายสินค้า

จงสร้างตารางแสดงยอดขายที่มีดีไซน์สวยงาม อ่านง่าย และเป็นระเบียบตามเงื่อนไขต่อไปนี้:

**1. โครงสร้าง HTML:**
- สร้างแท็ก \`<table>\` และกำหนดคลาสเป็น \`.sales-table\`
- ส่วนหัวตาราง \`<thead>\` มี 1 แถว (\`<tr>\`) ประกอบด้วยเซลล์หัวข้อ (\`<th>\`) 4 ช่องตามลำดับ: **\"สินค้า\"**, **\"หมวดหมู่\"**, **\"จำนวนที่ขายได้\"**, และ **\"ยอดขายรวม\"**
- ส่วนเนื้อหาตาราง \`<tbody>\` มีแถวข้อมูล 3 แถวดังนี้:
  1. กาแฟดริป | เครื่องดื่ม | 120 แก้ว | ฿9,600
  2. เค้กช็อกโกแลต | เบเกอรี่ | 45 ชิ้น | ฿5,400
  3. ครัวซองต์เนยสด | เบเกอรี่ | 80 ชิ้น | ฿7,200
- ส่วนท้ายตาราง \`<tfoot>\` มีแถวสรุปยอดรวม 1 แถว โดยเซลล์แรกมีข้อความว่า **\"รวมทั้งหมด\"** และรวมเซลล์เข้าด้วยกัน 3 คอลัมน์ (ใช้แอตทริบิวต์ \`colspan=\"3\"\`) และเซลล์ที่สองมีข้อความว่า **\"฿22,200\"**

**2. การตกแต่ง CSS:**
- กำหนดให้ตารางมีความกว้างเต็มความกว้างของหน้าจอ (\`width: 100%\`) และใช้ขอบตารางแบบยุบรวมกัน (\`border-collapse: collapse;\`)
- ส่วนเซลล์หัวตาราง (\`thead th\`) ต้องมีพื้นหลังสีเข้ม \`#1e293b\`, ข้อความสีขาว \`#ffffff\`, และชิดซ้าย (\`text-align: left;\`)
- ทุกเซลล์ (\`th\` และ \`td\`) ต้องมีช่องไฟภายใน (\`padding: 12px 16px\`)
- แถวข้อมูลใน \`tbody\` ทุกแถวต้องมีเส้นขอบด้านล่างสีเทาอ่อน (\`border-bottom: 1px solid #e2e8f0\`)
- ทำสลับสีแถวตาราง (Zebra Striping) โดยแถวที่เป็นลำดับคู่ใน \`tbody\` (\`tbody tr:nth-child(even)\`) มีพื้นหลังสี \`#f8fafc\`
- เพิ่มเอฟเฟกต์โฮเวอร์บนแถว (\`tbody tr:hover\`) ให้เปลี่ยนสีพื้นหลังเป็น \`#f1f5f9\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ตารางสรุปยอดขาย</title>
</head>
<body>
  <!-- 1. สร้างตารางคลาส sales-table พร้อม thead, tbody, tfoot และข้อมูลตามที่กำหนดที่นี่ -->
  
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ตารางสรุปยอดขาย</title>
</head>
<body>
  <table class="sales-table">
    <thead>
      <tr>
        <th>สินค้า</th>
        <th>หมวดหมู่</th>
        <th>จำนวนที่ขายได้</th>
        <th>ยอดขายรวม</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>กาแฟดริป</td>
        <td>เครื่องดื่ม</td>
        <td>120 แก้ว</td>
        <td>฿9,600</td>
      </tr>
      <tr>
        <td>เค้กช็อกโกแลต</td>
        <td>เบเกอรี่</td>
        <td>45 ชิ้น</td>
        <td>฿5,400</td>
      </tr>
      <tr>
        <td>ครัวซองต์เนยสด</td>
        <td>เบเกอรี่</td>
        <td>80 ชิ้น</td>
        <td>฿7,200</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">รวมทั้งหมด</td>
        <td>฿22,200</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>`,
      starterCss: `body {
  font-family: sans-serif;
  background-color: #fafafa;
  padding: 40px;
}

.sales-table {
  /* เริ่มต้นตกแต่งตารางของคุณที่นี่ */
  
}`,
      targetCss: `body {
  font-family: sans-serif;
  background-color: #fafafa;
  padding: 40px;
}

.sales-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  overflow: hidden;
}

.sales-table th {
  background-color: #1e293b;
  color: #ffffff;
  text-align: left;
}

.sales-table th, .sales-table td {
  padding: 12px 16px;
}

.sales-table tbody tr {
  border-bottom: 1px solid #e2e8f0;
  transition: background 0.2s;
}

.sales-table tbody tr:nth-child(even) {
  background-color: #f8fafc;
}

.sales-table tbody tr:hover {
  background-color: #f1f5f9;
}

.sales-table tfoot {
  font-weight: bold;
  background-color: #f8fafc;
  border-top: 2px solid #e2e8f0;
}`,
      validation: (doc, cssText) => {
        const table = doc.querySelector('table.sales-table');
        if (!table) return "ไม่พบแท็ก table คลาส .sales-table";
        
        const thead = table.querySelector('thead');
        const tbody = table.querySelector('tbody');
        const tfoot = table.querySelector('tfoot');
        
        if (!thead || !tbody || !tfoot) {
          return "กรุณาจัดโครงสร้างตารางให้มีครบทั้ง thead, tbody, และ tfoot";
        }
        
        const rows = tbody.querySelectorAll('tr');
        if (rows.length < 3) {
          return "ข้อมูลใน tbody ต้องมีอย่างน้อย 3 แถวตามที่โจทย์ระบุ";
        }
        
        const footerCells = tfoot.querySelectorAll('td');
        const hasColspan = Array.from(footerCells).some(c => c.getAttribute('colspan') === '3');
        if (!hasColspan) {
          return "อย่าลืมรวมเซลล์ใน tfoot ให้มีขนาด 3 คอลัมน์ด้วย colspan=\"3\"";
        }
        
        // CSS properties validation
        const styleTable = doc.defaultView.getComputedStyle(table);
        const th = thead.querySelector('th');
        const td = tbody.querySelector('td');
        
        if (!th || !td) return "กรุณาเขียนแถวและเซลล์ข้อมูลตารางให้เรียบร้อย";
        
        const styleTh = doc.defaultView.getComputedStyle(th);
        const styleTd = doc.defaultView.getComputedStyle(td);
        
        if (styleTable.borderCollapse !== 'collapse') {
          return "กรุณากำหนด border-collapse: collapse; ให้กับคลาส .sales-table";
        }
        if (styleTable.width.indexOf('%') === -1 && parseFloat(styleTable.width) < 300) {
          return "กรุณากำหนดให้ตารางมีความกว้างกว้างเต็มพื้นที่ด้วย width: 100%";
        }
        
        const thBg = styleTh.backgroundColor.replace(/\s+/g, '');
        if (thBg !== 'rgb(30,41,59)' && thBg !== '#1e293b') {
          return "กรุณากำหนดสีพื้นหลังหัวตาราง th เป็นสี #1e293b";
        }
        
        const paddingTh = parseFloat(styleTh.paddingTop);
        const paddingTd = parseFloat(styleTd.paddingTop);
        if (paddingTh < 10 || paddingTd < 10) {
          return "กรุณากำหนดช่องไฟภายในเซลล์ด้วย padding: 12px 16px;";
        }
        
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes(':nth-child(even)') || !cleaned.includes(':hover')) {
          return "อย่าลืมเขียน CSS สลับสีแถวด้วย :nth-child(even) และเอฟเฟกต์โฮเวอร์เมาส์ด้วย :hover";
        }
        
        return true;
      },
      hints: [
        "ใน HTML ใช้ <td colspan='3'>รวมทั้งหมด</td> เพื่อรวมช่องเซลล์",
        "ใน CSS ใช้ .sales-table { width: 100%; border-collapse: collapse; }",
        "สำหรับ Zebra-striping ใช้ .sales-table tbody tr:nth-child(even) { background-color: #f8fafc; }"
      ]
    },
    {
      id: "challenge-modern-form",
      title: "ภารกิจที่ 18: Modern Newsletter & Survey Form (แบบฟอร์มสมัครข่าวสารและประเมินผล)",
      difficulty: "Intermediate",
      points: 150,
      description: `### 📝 ภารกิจออกแบบและจัดแต่งแบบฟอร์มการรับข้อมูล

จงสร้างแบบฟอร์มที่มีความทันสมัย สะอาดตา และมีการจัดหน้าอย่างถูกต้องตามเงื่อนไขต่อไปนี้:

**1. โครงสร้าง HTML:**
- สร้างแท็ก \`<form>\` และกำหนดคลาสเป็น \`.modern-form\`
- ภายในฟอร์มมีหัวข้อ \`<h2>\` เขียนว่า **\"ร่วมเป็นสมาชิกและแสดงความคิดเห็น\"**
- ช่องรับข้อมูลประกอบด้วยช่องเหล่านี้:
  - **ชื่อผู้ใช้งาน:** ใช้แท็ก \`<input type=\"text\" placeholder=\"ระบุชื่อของคุณ\" required>\`
  - **อีเมล:** ใช้แท็ก \`<input type=\"email\" placeholder=\"example@domain.com\" required>\`
  - **สนใจเรียนภาษาใดเป็นพิเศษ:** ใช้แท็ก \`<select>\` ที่มีตัวเลือกด้านในสองตัวเลือกคือ \"HTML & CSS\" และ \"JavaScript\"
  - **ข้อคิดเห็นเพิ่มเติม:** ใช้แท็ก \`<textarea placeholder=\"พิมพ์ข้อเสนอแนะที่นี่...\" required></textarea>\`
  - **ยอมรับเงื่อนไข:** ใช้แท็ก \`<input type=\"checkbox\" id=\"agree\" required>\` พร้อมแท็ก \`<label for=\"agree\">\` เขียนว่า **\"ฉันยอมรับเงื่อนไขการให้บริการ\"**
  - **ปุ่มยืนยันสมัคร:** ใช้แท็ก \`<button type=\"submit\" class=\"submit-btn\">\` มีข้อความด้านในเขียนว่า **\"ส่งข้อมูลสมัคร\"**

**2. การตกแต่ง CSS:**
- กล่องฟอร์ม \`.modern-form\`: กำหนดความกว้างสูงสุด \`max-width: 450px;\` จัดกึ่งกลางหน้าจอ (\`margin: 0 auto;\`), ใส่สีพื้นหลังขาว, ขอบมนมน \`12px\`, มีช่องไฟด้านใน \`24px\` และมีเงาด้านหลังบางเบา (\`box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1)\`)
- ปรับสไตล์ช่องกรอกข้อมูล (\`input[type=\"text\"], input[type=\"email\"], select, textarea\`) ให้มีขนาดความกว้างเต็มกล่อง (\`width: 100%\`), ใส่ขอบมน \`6px\`, กรอบขอบสีเทาอ่อน \`#cbd5e1\`, และแพดดิ้ง \`10px\`
- ใส่ลูกเล่นความน่าสนใจเมื่อผู้ใช้กดเลือกโฟกัสช่องกรอกข้อมูล (\`:focus\`) โดยกำหนดให้สีกรอบเปลี่ยนเป็นสีน้ำเงิน \`#3b82f6\` และแสดงวงแหวนเงาสีน้ำเงินจาง ๆ รอบกล่อง (\`box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\`) พร้อมใส่ Transition สั้น ๆ เพื่อให้ลื่นไหล
- ปุ่มกดส่งใบสมัคร \`.submit-btn\`: สีพื้นหลังเป็นสีน้ำเงิน \`#2563eb\`, อักษรขาว, ไม่มีเส้นกรอบ, ขอบมน \`6px\`, แพดดิ้งพอเหมาะ และเมื่อชี้เมาส์ (\`:hover\`) สีจะเปลี่ยนเป็นเข้มขึ้นเป็น \`#1d4ed8\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>สมัครสมาชิกและแสดงความคิดเห็น</title>
</head>
<body>
  <!-- 1. ออกแบบฟอร์มคลาส modern-form พร้อมหัวข้อ h2 และช่องรับข้อมูลต่างๆ ที่นี่ -->
  
</body>
</html>`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>สมัครสมาชิกและแสดงความคิดเห็น</title>
</head>
<body>
  <form class="modern-form">
    <h2>ร่วมเป็นสมาชิกและแสดงความคิดเห็น</h2>
    
    <div class="form-group">
      <label>ชื่อผู้ใช้งาน</label>
      <input type="text" placeholder="ระบุชื่อของคุณ" required>
    </div>
    
    <div class="form-group">
      <label>อีเมล</label>
      <input type="email" placeholder="example@domain.com" required>
    </div>
    
    <div class="form-group">
      <label>สนใจเรียนภาษาใดเป็นพิเศษ</label>
      <select required>
        <option value="html-css">HTML & CSS</option>
        <option value="javascript">JavaScript</option>
      </select>
    </div>
    
    <div class="form-group">
      <label>ข้อคิดเห็นเพิ่มเติม</label>
      <textarea placeholder="พิมพ์ข้อเสนอแนะที่นี่..." required></textarea>
    </div>
    
    <div class="checkbox-group">
      <input type="checkbox" id="agree" required>
      <label for="agree">ฉันยอมรับเงื่อนไขการให้บริการ</label>
    </div>
    
    <button type="submit" class="submit-btn">ส่งข้อมูลสมัคร</button>
  </form>
</body>
</html>`,
      starterCss: `body {
  font-family: sans-serif;
  background-color: #f1f5f9;
  padding: 40px;
}

.modern-form {
  /* ตกแต่งกล่องฟอร์มหลักที่นี่ */
  
}

.modern-form input[type="text"],
.modern-form input[type="email"],
.modern-form select,
.modern-form textarea {
  /* ตกแต่งความสวยงามของช่องป้อนข้อมูลที่นี่ */
  
}

.submit-btn {
  /* จัดแต่งสไตล์ปุ่มยืนยันส่งข้อมูลที่นี่ */
  
}`,
      targetCss: `body {
  font-family: sans-serif;
  background-color: #f1f5f9;
  padding: 40px;
}

.modern-form {
  max-width: 450px;
  margin: 0 auto;
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.modern-form h2 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 20px;
  color: #0f172a;
}

.form-group {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  color: #475569;
}

.modern-form input[type="text"],
.modern-form input[type="email"],
.modern-form select,
.modern-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.modern-form input[type="text"]:focus,
.modern-form input[type="email"]:focus,
.modern-form select:focus,
.modern-form textarea:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.checkbox-group {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.checkbox-group label {
  font-size: 14px;
  color: #475569;
}

.submit-btn {
  width: 100%;
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background-color: #1d4ed8;
}`,
      validation: (doc, cssText) => {
        const form = doc.querySelector('form.modern-form');
        if (!form) return "ไม่พบฟอร์มคลาส .modern-form";
        
        const h2 = form.querySelector('h2');
        if (!h2 || !h2.textContent.includes("ร่วมเป็นสมาชิกและแสดงความคิดเห็น")) {
          return "กรุณาใส่หัวข้อ <h2> ร่วมเป็นสมาชิกและแสดงความคิดเห็น ภายในฟอร์ม";
        }
        
        const textInput = form.querySelector('input[type="text"]');
        const emailInput = form.querySelector('input[type="email"]');
        const select = form.querySelector('select');
        const textarea = form.querySelector('textarea');
        const checkbox = form.querySelector('input[type="checkbox"]');
        const button = form.querySelector('.submit-btn');
        
        if (!textInput || !emailInput || !select || !textarea || !checkbox || !button) {
          return "กรุณาตรวจสอบว่ามีกล่อง ชื่อ (text), อีเมล (email), ภาษา (select), ความคิดเห็น (textarea), ยอมรับเงื่อนไข (checkbox) และปุ่มกด (.submit-btn) ครบถ้วน";
        }
        
        const styleForm = doc.defaultView.getComputedStyle(form);
        const styleInput = doc.defaultView.getComputedStyle(textInput);
        const styleBtn = doc.defaultView.getComputedStyle(button);
        
        if (parseFloat(styleForm.maxWidth) !== 450) {
          return "กรุณากำหนดความกว้างสูงสุดของฟอร์มเป็น max-width: 450px;";
        }
        if (styleForm.backgroundColor.replace(/\s+/g, '') !== 'rgb(255,255,255)' && styleForm.backgroundColor !== 'white') {
          return "กรุณากำหนดพื้นหลังของฟอร์มเป็นสีขาว";
        }
        if (styleInput.width.indexOf('%') === -1 && parseFloat(styleInput.width) < 300) {
          return "กรุณากำหนดความกว้างของช่องป้อนข้อมูลเป็น width: 100% เพื่อให้กว้างเต็มหน้าต่างการใช้งาน";
        }
        
        const cleaned = cssText.replace(/\s+/g, '');
        if (!cleaned.includes(':focus') || !cleaned.includes('box-shadow')) {
          return "อย่าลืมกำหนดการเปลี่ยนสีขอบและเงาเมื่อช่องป้อนข้อมูลถูกโฟกัสด้วย pseudo-class :focus";
        }
        
        if (styleBtn.backgroundColor.replace(/\s+/g, '') !== 'rgb(37,99,235)' && styleBtn.backgroundColor !== '#2563eb') {
          return "กรุณากำหนดสีพื้นหลังปุ่มส่งข้อมูลเป็นสี #2563eb";
        }
        
        return true;
      },
      hints: [
        "ใน HTML ครอบช่องป้อนข้อมูลด้วยกล่อง div เพื่อจัดระยะห่างเป็นระเบียบ",
        "ใน CSS กำหนด .modern-form input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.15); }",
        "สำหรับปุ่ม โฮเวอร์ปุ่มโดยใช้ .submit-btn:hover { background-color: #1d4ed8; }"
      ]
    }
  ]
};


