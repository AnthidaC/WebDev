// JavaScript Curriculum based on ch4 JavaScript 1-3 slides
// Part 1: ch4 JavaScript.pdf (Fundamentals)
// Part 2: ch4 JavaScript_2.pdf (DOM & Forms)
// Part 3: ch4 JavaScript_3.pptx.pdf (this, Timers, Web APIs)

export const jsCurriculum = {
  lessons: [
    // ==========================================
    // หมวดที่ 1: JavaScript Fundamentals (สไลด์เล่ม 1)
    // ==========================================
    {
      id: "js-intro-display",
      title: "1. การแทรกสคริปต์และคำสั่งแสดงผล (Display & Insertion)",
      category: "1. พื้นฐาน JavaScript",
      slideRef: "ch4 JavaScript.pdf (หน้า 8-15)",
      description: `เริ่มต้นเรียนรู้การทำงานของภาษา JavaScript บนหน้าเว็บ!
      
**รูปแบบการแทรก JavaScript เข้าสู่ HTML:**
1. **Inline:** เขียนในแอตทริบิวต์ เช่น \`<button onclick="alert('สวัสดี!')">คลิก</button>\`
2. **Internal:** เขียนภายในแท็ก \`<script> ... </script>\`
3. **External:** ดึงไฟล์สคริปต์ภายนอก เช่น \`<script src="script.js"></script>\`

**คำสั่งแสดงผลข้อมูลยอดนิยม:**
- \`document.getElementById(id).innerHTML = "ข้อความ"\` : เขียนหรือแทนที่เนื้อหาใน HTML element
- \`console.log(data)\` : พิมพ์ข้อมูลออกทาง Developer Console เพื่อทดสอบหรือดีบั๊ก
- \`window.alert(message)\` : แสดงกล่องข้อความแจ้งเตือน (Pop-up)

**เป้าหมายการฝึกฝน:**
1. ในไฟล์ \`script.js\` ให้ค้นหา element ที่มี id เป็น \`"output"\`
2. กำหนดให้ \`innerHTML\` ของ element นั้นแสดงข้อความว่า **"Hello JavaScript!"**
3. ใช้คำสั่ง \`console.log("Welcome to JS Academy")\` เพื่อส่งข้อความออกไปยังคอนโซล`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>JS Introduction</title>
</head>
<body>
  <h1 id="output">รอข้อความจาก JavaScript...</h1>
</body>
</html>`,
      starterCss: `body {
  font-family: 'Sarabun', sans-serif;
  padding: 30px;
  background: #f1f5f9;
}
#output {
  color: #2563eb;
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`,
      starterJs: `// เขียนโค้ด JavaScript ของคุณที่นี่
`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>JS Introduction</title>
</head>
<body>
  <h1 id="output">Hello JavaScript!</h1>
</body>
</html>`,
      targetCss: `body { font-family: 'Sarabun', sans-serif; padding: 30px; background: #f1f5f9; } #output { color: #2563eb; padding: 16px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }`,
      targetJs: `document.getElementById("output").innerHTML = "Hello JavaScript!";
console.log("Welcome to JS Academy");`,
      validation: (doc, css, js) => {
        const el = doc.getElementById('output');
        if (!el) return "ไม่พบ Element ที่มี id='output' ในเอกสาร HTML";
        if (!el.textContent.includes("Hello JavaScript!")) {
          return "ข้อความใน #output ต้องเป็น 'Hello JavaScript!' (ใช้ document.getElementById('output').innerHTML = 'Hello JavaScript!')";
        }
        if (!js.includes("console.log")) {
          return "อย่าลืมเรียกใช้คำสั่ง console.log เพื่อพิมพ์ข้อความออกทางคอนโซลด้วยนะครับ";
        }
        return true;
      },
      hints: [
        "ใช้: document.getElementById('output').innerHTML = 'Hello JavaScript!';",
        "ตามด้วย: console.log('Welcome to JS Academy');"
      ]
    },

    {
      id: "js-variables",
      title: "2. ตัวแปรและการประกาศ (var, let, const)",
      category: "1. พื้นฐาน JavaScript",
      slideRef: "ch4 JavaScript.pdf (หน้า 19-27)",
      description: `การประกาศตัวแปรในภาษา JavaScript ยุคปัจจุบันมี 3 คีย์เวิร์ดหลัก:
      
1. \`var\` : วิธีดั้งเดิม (ES5) มีขอบเขตแบบ Function scope หรือ Global และมีพฤติกรรม Hoisting
2. \`let\` : แนะนำสำหรับตัวแปรที่ **ต้องเปลี่ยนค่าได้** มีขอบเขตแบบ Block scope \`{ ... }\` และไม่อนุญาตให้ประกาศชื่อซ้ำในบล็อกเดียวกัน
3. \`const\` : สำหรับค่าคงที่ที่ไม่ต้องการให้ Reassign (กำหนดค่าใหม่) อีกเด็ดขาด

**กฎการตั้งชื่อตัวแปร (Naming Convention):**
- ขึ้นต้นด้วยตัวอักษร, \`_\` หรือ \`$\` (ห้ามขึ้นต้นด้วยตัวเลข)
- เป็น Case-sensitive เช่น \`myVar\` ต่างจาก \`myvar\`
- นิยมใช้รูปแบบ camelCase เช่น \`studentScore\`

**เป้าหมายการฝึกฝน:**
1. ประกาศตัวแปรคงที่ \`const courseName = "JavaScript Fundamental";\`
2. ประกาศตัวแปร \`let score = 85;\`
3. แสดงผลค่าทั้งสองลงใน element id \`"info"\` ด้วย Template Literal (\`\` \`คอร์ส: \${courseName} | คะแนน: \${score}\` \`\`)
4. พิมพ์ค่า \`score\` ออกทาง \`console.log\``,
      starterHtml: `<div class="card">
  <h2>ข้อมูลการเรียนรู้</h2>
  <p id="info">รอการแสดงผลตัวแปร...</p>
</div>`,
      starterCss: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
#info { font-size: 18px; font-weight: bold; color: #0284c7; }`,
      starterJs: `// ประกาศตัวแปร const และ let ตามโจทย์
`,
      targetHtml: `<div class="card">
  <h2>ข้อมูลการเรียนรู้</h2>
  <p id="info">คอร์ส: JavaScript Fundamental | คะแนน: 85</p>
</div>`,
      targetCss: `body { font-family: sans-serif; padding: 20px; background: #f8fafc; } .card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); } #info { font-size: 18px; font-weight: bold; color: #0284c7; }`,
      targetJs: `const courseName = "JavaScript Fundamental";
let score = 85;
document.getElementById("info").innerHTML = \`คอร์ส: \${courseName} | คะแนน: \${score}\`;
console.log("คะแนน:", score);`,
      validation: (doc, css, js) => {
        if (!js.includes("const ") || !js.includes("courseName")) {
          return "กรุณาประกาศตัวแปร const courseName ตามคำสั่ง";
        }
        if (!js.includes("let ") || !js.includes("score")) {
          return "กรุณาประกาศตัวแปร let score ตามคำสั่ง";
        }
        const info = doc.getElementById("info");
        if (!info || !info.textContent.includes("JavaScript Fundamental") || !info.textContent.includes("85")) {
          return "กรุณานำค่า courseName และ score ไปใส่ใน #info ให้ถูกต้อง";
        }
        return true;
      },
      hints: [
        "const courseName = 'JavaScript Fundamental';",
        "let score = 85;",
        "document.getElementById('info').innerHTML = `คอร์ส: ${courseName} | คะแนน: ${score}`;"
      ]
    },

    {
      id: "js-operators",
      title: "3. ตัวดำเนินการและการคำนวณ (Operators & Ternary)",
      category: "1. พื้นฐาน JavaScript",
      slideRef: "ch4 JavaScript.pdf (หน้า 28-41)",
      description: `JavaScript มีตัวดำเนินการหลากหลายประเภทที่จำเป็นต้องใช้ในการพัฒนา:
      
- **Arithmetic:** \`+\`, \`-\`, \`*\`, \`/\`, \`%\` (หารเอาเศษ), \`**\` (ยกกำลัง), \`++\`, \`--\`
- **Assignment:** \`=\`, \`+=\`, \`-=\`, \`*=\`, \`/=\`
- **Strict Equality:** \`===\` และ \`!==\` (เช็คทั้งค่าและชนิดข้อมูล แนะนำให้ใช้เสมอ แทน \`==\`)
- **Logical:** \`&&\` (AND), \`||\` (OR), \`!\` (NOT)
- **Ternary Operator:** ตัวดำเนินการย่อเงื่อนไข \`condition ? trueValue : falseValue\`

**เป้าหมายการฝึกฝน:**
1. กำหนดตัวแปร \`let price = 500;\` และ \`let discount = 50;\`
2. คำนวณราคาสุทธิ \`let total = price - discount;\`
3. ใช้ Ternary Operator ตรวจสอบสถานะการจัดส่ง: ถ้า \`total >= 400\` ให้ได้ \`"ส่งฟรี (Free Shipping)"\` ถ้าไม่ถึงให้แสดงว่า \`"มีค่าส่ง 50 บาท"\`
4. แสดงราคาสุทธิและสถานะจัดส่งใน element id \`"summary"\``,
      starterHtml: `<div class="box">
  <h3>สรุปคำสั่งซื้อ</h3>
  <div id="summary">กำลังคำนวณ...</div>
</div>`,
      starterCss: `body { font-family: sans-serif; padding: 25px; }
.box { border: 2px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 350px; }
#summary { margin-top: 10px; font-size: 16px; color: #334155; }`,
      starterJs: `let price = 500;
let discount = 50;
let total = price - discount;

// ใช้ Ternary Operator กำหนด shippingStatus
let shippingStatus = total >= 400 ? "ส่งฟรี (Free Shipping)" : "มีค่าส่ง 50 บาท";

// แสดงผลใน #summary
`,
      targetHtml: `<div class="box">
  <h3>สรุปคำสั่งซื้อ</h3>
  <div id="summary">ยอดรวม: 450 บาท (ส่งฟรี (Free Shipping))</div>
</div>`,
      targetCss: `body { font-family: sans-serif; padding: 25px; } .box { border: 2px solid #e2e8f0; padding: 20px; border-radius: 8px; max-width: 350px; } #summary { margin-top: 10px; font-size: 16px; color: #334155; }`,
      targetJs: `let price = 500;
let discount = 50;
let total = price - discount;
let shippingStatus = total >= 400 ? "ส่งฟรี (Free Shipping)" : "มีค่าส่ง 50 บาท";
document.getElementById("summary").innerHTML = \`ยอดรวม: \${total} บาท (\${shippingStatus})\`;`,
      validation: (doc, css, js) => {
        const sum = doc.getElementById('summary');
        if (!sum) return "ไม่พบ element #summary";
        if (!sum.textContent.includes("450") || !sum.textContent.includes("ส่งฟรี")) {
          return "ผลลัพธ์ใน #summary ต้องมียอด 450 และสถานะ 'ส่งฟรี (Free Shipping)'";
        }
        if (!js.includes("?")) {
          return "กรุณาใช้ Ternary Operator (?) ในการตัดสินเงื่อนไขค่าจัดส่ง";
        }
        return true;
      },
      hints: [
        "document.getElementById('summary').innerHTML = `ยอดรวม: ${total} บาท (${shippingStatus})`;"
      ]
    },

    {
      id: "js-objects",
      title: "4. ออบเจกต์และการเข้าถึงข้อมูล (Objects & Methods)",
      category: "1. พื้นฐาน JavaScript",
      slideRef: "ch4 JavaScript.pdf (หน้า 50-61)",
      description: `Object ใน JavaScript เก็บข้อมูลในรูปแบบของคู่ **Key : Value**
      
\`\`\`javascript
const student = {
  name: "Somchai",
  age: 20,
  skills: ["HTML", "CSS", "JS"],
  getGrade: function(score) {
    return score >= 80 ? "A" : "B";
  }
};
\`\`\`

**การเข้าถึง Property:**
- Dot notation: \`student.name\`
- Bracket notation: \`student["age"]\`

**คำสั่งจัดการ Object ที่สำคัญ:**
- \`Object.keys(obj)\` : ดึงรายการ key ทั้งหมดออกมาเป็น Array
- \`Object.values(obj)\` : ดึงรายการ value ทั้งหมดออกมาเป็น Array
- \`JSON.stringify(obj)\` : แปลง Object ให้อยู่ในรูป JSON string

**เป้าหมายการฝึกฝน:**
1. สร้าง Object ชื่อ \`car\` มี properties:
   - \`brand\`: "Toyota"
   - \`model\`: "Yaris Cross"
   - \`year\`: 2024
2. เพิ่ม Method ใน Object ชื่อ \`getInfo()\` คืนค่าเป็น string: \`"Toyota Yaris Cross ปี 2024"\` โดยใช้คีย์เวิร์ด \`this\`
3. เรียก \`car.getInfo()\` แล้วนำไปแสดงใน element id \`"car-display"\``,
      starterHtml: `<div class="card">
  <h2>ข้อมูลรถยนต์</h2>
  <div id="car-display">กำลังโหลดข้อมูล...</div>
</div>`,
      starterCss: `body { font-family: sans-serif; padding: 20px; }
.card { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 20px; border-radius: 8px; }
#car-display { font-size: 18px; color: #166534; font-weight: 600; margin-top: 10px; }`,
      starterJs: `const car = {
  brand: "Toyota",
  model: "Yaris Cross",
  year: 2024,
  // เพิ่มเมธอด getInfo ที่นี่
};

// นำผลลัพธ์จาก car.getInfo() ใส่ใน #car-display
`,
      targetHtml: `<div class="card">
  <h2>ข้อมูลรถยนต์</h2>
  <div id="car-display">Toyota Yaris Cross ปี 2024</div>
</div>`,
      targetCss: `body { font-family: sans-serif; padding: 20px; } .card { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 20px; border-radius: 8px; } #car-display { font-size: 18px; color: #166534; font-weight: 600; margin-top: 10px; }`,
      targetJs: `const car = {
  brand: "Toyota",
  model: "Yaris Cross",
  year: 2024,
  getInfo: function() {
    return \`\${this.brand} \${this.model} ปี \${this.year}\`;
  }
};
document.getElementById("car-display").innerHTML = car.getInfo();`,
      validation: (doc, css, js) => {
        const el = doc.getElementById('car-display');
        if (!el || !el.textContent.includes("Toyota Yaris Cross") || !el.textContent.includes("2024")) {
          return "ข้อความใน #car-display ต้องแสดงข้อมูล 'Toyota Yaris Cross ปี 2024' ให้ครบถ้วน";
        }
        if (!js.includes("getInfo")) {
          return "ต้องมีเมธอด getInfo ภายใน object car";
        }
        return true;
      },
      hints: [
        "getInfo: function() { return `${this.brand} ${this.model} ปี ${this.year}`; }",
        "document.getElementById('car-display').innerHTML = car.getInfo();"
      ]
    },

    {
      id: "js-object-constructors",
      title: "5. คอนสตรัคเตอร์ออบเจกต์ (Object Constructors & new)",
      category: "1. พื้นฐาน JavaScript",
      slideRef: "ch4 JavaScript.pdf (หน้า 57)",
      description: `เมื่อต้องการสร้าง Object หลายชิ้นที่มีโครงสร้าง (Properties & Methods) เหมือนกัน เช่น ข้อมูลพนักงาน หรือนักศึกษา สไลด์แนะนำให้ใช้ **Object Constructor Function**:

\`\`\`javascript
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.getFullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

// สร้าง Instance ด้วยคีย์เวิร์ด new
const father = new Person("John", "Doe", 50, "blue");
\`\`\`

**หัวใจสำคัญ:**
1. นิยมตั้งชื่อฟังก์ชันด้วยตัวพิมพ์ใหญ่ขึ้นต้น (PascalCase) เช่น \`Student\`, \`Person\`
2. คีย์เวิร์ด \`this\` ภายใน Constructor ชี้ไปยัง Object ตัวใหม่ที่ถูกสร้างขึ้น
3. คีย์เวิร์ด \`new\` ทำหน้าที่สร้าง Object เปล่าแล้วผูก \`this\` ให้กับคอนสตรัคเตอร์

**เป้าหมายการฝึกฝน:**
1. ประกาศ Constructor Function ชื่อ \`Student(name, score)\`
2. กำหนดคุณสมบัติ \`this.name = name;\` และ \`this.score = score;\`
3. เพิ่มเมธอด \`this.getGrade = function() { return this.score >= 50 ? "Pass" : "Fail"; };\`
4. สร้าง Instance ใหม่ชื่อ \`s1\` ด้วยคำสั่ง:
   \`const s1 = new Student("สมชาย", 85);\`
5. นำข้อมูลมาแสดงผลใน \`#student-card\`:
   \`document.getElementById("student-card").innerHTML = \`\${s1.name} - คะแนน \${s1.score} (\${s1.getGrade()})\`;\``,
      starterHtml: `<div class="card">
  <h3>บัตรรายงานผลคะแนนนักศึกษา</h3>
  <p id="student-card">รอดำเนินการสร้างข้อมูล...</p>
</div>`,
      starterCss: `body { font-family: sans-serif; padding: 25px; background: #f8fafc; }
.card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); max-width: 400px; border-left: 5px solid #3b82f6; }
#student-card { font-size: 18px; font-weight: bold; color: #1e40af; margin-top: 10px; }`,
      starterJs: `// 1. ประกาศ Constructor Function: Student(name, score)
// 2. กำหนด this.name, this.score และ this.getGrade()
// 3. สร้าง instance s1 ด้วย new Student("สมชาย", 85)
// 4. แสดงผลใน #student-card
`,
      targetHtml: `<div class="card">
  <h3>บัตรรายงานผลคะแนนนักศึกษา</h3>
  <p id="student-card">สมชาย - คะแนน 85 (Pass)</p>
</div>`,
      targetCss: `body { font-family: sans-serif; padding: 25px; background: #f8fafc; } .card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); max-width: 400px; border-left: 5px solid #3b82f6; } #student-card { font-size: 18px; font-weight: bold; color: #1e40af; margin-top: 10px; }`,
      targetJs: `function Student(name, score) {
  this.name = name;
  this.score = score;
  this.getGrade = function() {
    return this.score >= 50 ? "Pass" : "Fail";
  };
}

const s1 = new Student("สมชาย", 85);
document.getElementById("student-card").innerHTML = \`\${s1.name} - คะแนน \${s1.score} (\${s1.getGrade()})\`;`,
      validation: (doc, css, js) => {
        const el = doc.getElementById('student-card');
        if (!el || !el.textContent.includes("สมชาย") || !el.textContent.includes("85") || !el.textContent.includes("Pass")) {
          return "ข้อความใน #student-card ต้องแสดง 'สมชาย - คะแนน 85 (Pass)'";
        }
        if (!js.includes("function Student") && !js.includes("Student = function")) {
          return "ต้องประกาศ Constructor Function ชื่อ Student(name, score)";
        }
        if (!js.includes("this.name") || !js.includes("this.score")) {
          return "ภายใน Constructor Function ต้องผูกค่าด้วย this.name และ this.score";
        }
        if (!js.includes("new Student")) {
          return "ต้องสร้าง Instance ด้วยคีย์เวิร์ด new Student(...)";
        }
        return true;
      },
      hints: [
        "function Student(name, score) { this.name = name; this.score = score; this.getGrade = function() { return this.score >= 50 ? 'Pass' : 'Fail'; }; }",
        "const s1 = new Student('สมชาย', 85);",
        "document.getElementById('student-card').innerHTML = `${s1.name} - คะแนน ${s1.score} (${s1.getGrade()})`;"
      ]
    },

    {
      id: "js-arrays",
      title: "6. อาร์เรย์และเมธอดจัดการข้อมูล (Arrays & Methods)",
      category: "1. พื้นฐาน JavaScript",
      slideRef: "ch4 JavaScript.pdf (หน้า 62-67)",
      description: `Array ใช้เก็บรายการข้อมูลแบบลำดับ (Index เริ่มจาก 0)
      
\`\`\`javascript
const fruits = ["Apple", "Banana", "Orange"];
\`\`\`

**เมธอดที่ใช้บ่อย:**
- \`push(item)\` : เพิ่มสมาชิกต่อท้าย
- \`pop()\` : นำสมาชิกตัวสุดท้ายออก
- \`unshift(item)\` : เพิ่มสมาชิกที่ตำแหน่งแรกสุด
- \`shift()\` : นำสมาชิกตัวแรกสุดออก
- \`join(separator)\` : รวมสมาชิกเป็น String คั่นด้วยเครื่องหมายที่ต้องการ
- \`length\` : คุณสมบัติระบุจำนวนสมาชิกทั้งหมด

**เป้าหมายการฝึกฝน:**
1. กำหนด \`const tech = ["HTML", "CSS"];\`
2. ใช้คำสั่ง \`.push("JavaScript")\` เพื่อเพิ่ม "JavaScript" ต่อท้าย
3. ใช้คำสั่ง \`.join(" ➔ ")\` เพื่อรวมคำเป็นข้อความเดียว
4. นำผลลัพธ์ไปใส่ใน element id \`"tech-stack"\``,
      starterHtml: `<div class="badge-container">
  <h3>ทักษะการเขียนเว็บของฉัน:</h3>
  <div id="tech-stack">รอดำเนินการ...</div>
</div>`,
      starterCss: `body { font-family: sans-serif; padding: 20px; }
.badge-container { background: #fdf4ff; border: 1px solid #f0abfc; padding: 20px; border-radius: 8px; }
#tech-stack { font-size: 20px; color: #86198f; font-weight: bold; margin-top: 10px; }`,
      starterJs: `const tech = ["HTML", "CSS"];

// 1. push "JavaScript"
// 2. join ด้วย " ➔ "
// 3. แสดงผลใน #tech-stack
`,
      targetHtml: `<div class="badge-container">
  <h3>ทักษะการเขียนเว็บของฉัน:</h3>
  <div id="tech-stack">HTML ➔ CSS ➔ JavaScript</div>
</div>`,
      targetCss: `body { font-family: sans-serif; padding: 20px; } .badge-container { background: #fdf4ff; border: 1px solid #f0abfc; padding: 20px; border-radius: 8px; } #tech-stack { font-size: 20px; color: #86198f; font-weight: bold; margin-top: 10px; }`,
      targetJs: `const tech = ["HTML", "CSS"];
tech.push("JavaScript");
document.getElementById("tech-stack").innerHTML = tech.join(" ➔ ");`,
      validation: (doc, css, js) => {
        const el = doc.getElementById('tech-stack');
        if (!el || !el.textContent.includes("HTML") || !el.textContent.includes("JavaScript")) {
          return "เนื้อหาใน #tech-stack ต้องมี HTML, CSS และ JavaScript";
        }
        if (!js.includes(".push")) {
          return "กรุณาใช้เมธอด .push() ในการเพิ่มข้อมูล";
        }
        return true;
      },
      hints: [
        "tech.push('JavaScript');",
        "document.getElementById('tech-stack').innerHTML = tech.join(' ➔ ');"
      ]
    },

    {
      id: "js-control-loops",
      title: "7. การควบคุมทิศทางและลูปวนซ้ำ (Control Flow & Loops)",
      category: "1. พื้นฐาน JavaScript",
      slideRef: "ch4 JavaScript.pdf (หน้า 68-77)",
      description: `การทำซ้ำ (Loops) ใน JavaScript มีหลายรูปแบบ:
      
- \`for (let i = 0; i < n; i++)\` : วนซ้ำตามจำนวนรอบที่ระบุ
- \`while (condition)\` : วนซ้ำตราบใดที่เงื่อนไขยังเป็นจริง
- \`for...of\` : วนลูปหยิบสมาชิกใน Array หรือ Iterable
- \`for...in\` : วนลูปดูชื่อ property (keys) ใน Object

**เป้าหมายการฝึกฝน:**
1. กำหนดอาร์เรย์ \`const scores = [80, 45, 90, 60, 30];\`
2. วนลูปนับจำนวนคนที่ **ผ่านเกณฑ์** (คะแนน >= 50)
3. สร้างข้อความสรุป: \`"ผ่านเกณฑ์ทั้งหมด 3 คน จากทั้งหมด 5 คน"\`
4. แสดงใน element id \`"result"\``,
      starterHtml: `<div class="panel">
  <h3>สรุปผลการสอบ</h3>
  <p id="result">กำลังตรวจนับ...</p>
</div>`,
      starterCss: `body { font-family: sans-serif; padding: 20px; }
.panel { background: #fffbeb; border: 1px solid #fde68a; padding: 20px; border-radius: 8px; }
#result { font-size: 18px; color: #92400e; font-weight: 600; }`,
      starterJs: `const scores = [80, 45, 90, 60, 30];
let passCount = 0;

// วนลูป scores เพื่อเพิ่ม passCount เมื่อ score >= 50

// แสดงผลใน #result
`,
      targetHtml: `<div class="panel">
  <h3>สรุปผลการสอบ</h3>
  <p id="result">ผ่านเกณฑ์ทั้งหมด 3 คน จากทั้งหมด 5 คน</p>
</div>`,
      targetCss: `body { font-family: sans-serif; padding: 20px; } .panel { background: #fffbeb; border: 1px solid #fde68a; padding: 20px; border-radius: 8px; } #result { font-size: 18px; color: #92400e; font-weight: 600; }`,
      targetJs: `const scores = [80, 45, 90, 60, 30];
let passCount = 0;
for (const score of scores) {
  if (score >= 50) {
    passCount++;
  }
}
document.getElementById("result").innerHTML = \`ผ่านเกณฑ์ทั้งหมด \${passCount} คน จากทั้งหมด \${scores.length} คน\`;`,
      validation: (doc, css, js) => {
        const el = doc.getElementById('result');
        if (!el || !el.textContent.includes("3") || !el.textContent.includes("5")) {
          return "ข้อความใน #result ต้องแสดง 'ผ่านเกณฑ์ทั้งหมด 3 คน จากทั้งหมด 5 คน'";
        }
        if (!js.includes("for") && !js.includes("while") && !js.includes("forEach")) {
          return "กรุณาใช้ loop (เช่น for...of หรือ for) ในการคำนวณ";
        }
        return true;
      },
      hints: [
        "for (let s of scores) { if (s >= 50) passCount++; }",
        "document.getElementById('result').innerHTML = `ผ่านเกณฑ์ทั้งหมด ${passCount} คน จากทั้งหมด ${scores.length} คน`;"
      ]
    },

    {
      id: "js-functions-arrow",
      title: "8. ฟังก์ชันและ Arrow Functions (Functions & Scope)",
      category: "1. พื้นฐาน JavaScript",
      slideRef: "ch4 JavaScript.pdf (หน้า 78-81)",
      description: `ฟังก์ชันคือบล็อกคำสั่งที่เขียนไว้เพื่อให้เรียกใช้ซ้ำได้
      
**1. Function Declaration (แบบดั้งเดิม):**
\`\`\`javascript
function calculateArea(width, height) {
  return width * height;
}
\`\`\`

**2. Arrow Function (ES6 มาตรฐานปัจจุบัน):**
\`\`\`javascript
const calculateArea = (width, height) => width * height;
\`\`\`
- ไวยากรณ์สั้น กระชับ
- ถ้ามีคำสั่ง return เพียงบรรทัดเดียว ไม่ต้องใส่วงเล็บปีกกาและคำว่า \`return\`

**เป้าหมายการฝึกฝน:**
1. เขียน Arrow Function ชื่อ \`toCelsius\` ที่รับพารามิเตอร์ \`fahrenheit\` และคำนวณสูตร \`(fahrenheit - 32) * (5 / 9)\`
2. เรียกใช้ \`toCelsius(104)\` (ผลลัพธ์จะได้ 40)
3. นำผลลัพธ์ไปใส่ใน element id \`"temp-result"\``,
      starterHtml: `<div class="card">
  <h3>แปลงอุณหภูมิ: 104°F</h3>
  <p id="temp-result">กำลังแปลงค่า...</p>
</div>`,
      starterCss: `body { font-family: sans-serif; padding: 20px; }
.card { background: #eff6ff; padding: 20px; border-radius: 8px; border: 1px solid #bfdbfe; }
#temp-result { font-size: 20px; font-weight: bold; color: #1d4ed8; }`,
      starterJs: `// สร้าง Arrow Function ชื่อ toCelsius
const toCelsius = (fahrenheit) => {
  // เขียนสูตรที่นี่
};

// เรียกใช้กับ 104 แล้วแสดงผลใน #temp-result
`,
      targetHtml: `<div class="card">
  <h3>แปลงอุณหภูมิ: 104°F</h3>
  <p id="temp-result">เท่ากับ 40 °C</p>
</div>`,
      targetCss: `body { font-family: sans-serif; padding: 20px; } .card { background: #eff6ff; padding: 20px; border-radius: 8px; border: 1px solid #bfdbfe; } #temp-result { font-size: 20px; font-weight: bold; color: #1d4ed8; }`,
      targetJs: `const toCelsius = (f) => (f - 32) * (5 / 9);
document.getElementById("temp-result").innerHTML = \`เท่ากับ \${toCelsius(104)} °C\`;`,
      validation: (doc, css, js) => {
        const el = doc.getElementById('temp-result');
        if (!el || !el.textContent.includes("40")) {
          return "ผลลัพธ์ใน #temp-result ต้องแสดงค่า 40 °C";
        }
        if (!js.includes("=>")) {
          return "กรุณาเขียนฟังก์ชันด้วยไวยากรณ์ Arrow Function (=>)";
        }
        return true;
      },
      hints: [
        "const toCelsius = (f) => (f - 32) * 5 / 9;",
        "document.getElementById('temp-result').innerHTML = `เท่ากับ ${toCelsius(104)} °C`;"
      ]
    },

    // ==========================================
    // หมวดที่ 2: DOM Manipulation & Forms (สไลด์เล่ม 2)
    // ==========================================
    {
      id: "js-dom-selectors",
      title: "9. การเข้าถึง HTML Elements (DOM Selectors)",
      category: "2. การจัดการ DOM & ฟอร์ม",
      slideRef: "ch4 JavaScript_2.pdf (หน้า 1-8)",
      description: `DOM (Document Object Model) คือโครงสร้างต้นไม้ออบเจกต์ที่เบราว์เซอร์สร้างขึ้นเมื่อโหลดหน้าเว็บ
      
**เมธอดในการเลือก Element ยอดนิยม:**
1. \`document.getElementById("id")\` : ค้นหาด้วย ID (ได้ element เดียว)
2. \`document.getElementsByClassName("className")\` : ค้นหาด้วย Class (ได้ HTMLCollection)
3. \`document.querySelector("selector")\` : ค้นหา element แรกที่ตรงกับ CSS Selector
4. \`document.querySelectorAll("selector")\` : ค้นหา element ทั้งหมดที่ตรงกับ CSS Selector (ได้ NodeList)

**เป้าหมายการฝึกฝน:**
1. ใช้ \`document.querySelector(".target")\` เลือก element ที่มีคลาส \`.target\`
2. เปลี่ยนสีข้อความ \`style.color = "crimson"\`
3. เปลี่ยนขนาดตัวอักษร \`style.fontSize = "24px"\`
4. เปลี่ยนข้อความด้านในเป็น \`"ค้นพบและเปลี่ยนสไตล์สำเร็จแล้ว!"\``,
      starterHtml: `<div class="container">
  <p class="normal">ข้อความธรรมดา</p>
  <p class="target">รอการปรับแต่งสไตล์...</p>
  <p class="normal">ข้อความธรรมดาอีกข้อความ</p>
</div>`,
      starterCss: `body { font-family: sans-serif; padding: 20px; }
.normal { color: #64748b; }
.target { font-weight: bold; }`,
      starterJs: `// ใช้ document.querySelector เลือก .target แล้วเปลี่ยนสี ขนาดตัวอักษร และข้อความ
`,
      targetHtml: `<div class="container">
  <p class="normal">ข้อความธรรมดา</p>
  <p class="target" style="color: crimson; font-size: 24px;">ค้นพบและเปลี่ยนสไตล์สำเร็จแล้ว!</p>
  <p class="normal">ข้อความธรรมดาอีกข้อความ</p>
</div>`,
      targetCss: `body { font-family: sans-serif; padding: 20px; } .normal { color: #64748b; } .target { font-weight: bold; }`,
      targetJs: `const el = document.querySelector(".target");
el.style.color = "crimson";
el.style.fontSize = "24px";
el.innerHTML = "ค้นพบและเปลี่ยนสไตล์สำเร็จแล้ว!";`,
      validation: (doc, css, js) => {
        const el = doc.querySelector('.target');
        if (!el || !el.textContent.includes("ค้นพบและเปลี่ยนสไตล์สำเร็จแล้ว!")) {
          return "ข้อความใน .target ต้องเปลี่ยนเป็น 'ค้นพบและเปลี่ยนสไตล์สำเร็จแล้ว!'";
        }
        if (!js.includes("querySelector")) {
          return "กรุณาใช้คำสั่ง document.querySelector ตามโจทย์";
        }
        return true;
      },
      hints: [
        "const el = document.querySelector('.target');",
        "el.style.color = 'crimson';",
        "el.style.fontSize = '24px';",
        "el.innerHTML = 'ค้นพบและเปลี่ยนสไตล์สำเร็จแล้ว!';"
      ]
    },

    {
      id: "js-event-listeners",
      title: "10. การดักจับเหตุการณ์ (addEventListener & Events)",
      category: "2. การจัดการ DOM & ฟอร์ม",
      slideRef: "ch4 JavaScript_2.pdf (หน้า 12-17)",
      description: `การผูก Event ในเว็บยุคปัจจุบัน แนะนำให้ใช้ \`addEventListener\` เสมอ เพราะรองรับการผูกหลายฟังก์ชันและลบออกได้ง่าย (\`removeEventListener\`)
      
\`\`\`javascript
element.addEventListener("click", function(event) {
  console.log("ถูกคลิก!", event.target);
});
\`\`\`

**เหตุการณ์ยอดนิยม:**
- Mouse: \`click\`, \`dblclick\`, \`mouseenter\`, \`mouseleave\`
- Keyboard: \`keydown\`, \`keyup\`
- Form: \`submit\`, \`change\`, \`input\`

**เป้าหมายการฝึกฝน (โจทย์จากสไลด์ 1 หน้า 86):**
1. เลือกปุ่ม \`#action-btn\`
2. ผูกอีเวนต์ \`click\` ด้วย \`addEventListener\`
3. เมื่อผู้ใช้คลิกปุ่ม ให้:
   - เปลี่ยนสีพื้นหลังของปุ่ม \`btn.style.backgroundColor = "#10b981"\` (สีเขียว)
   - เปลี่ยนสีข้อความปุ่ม \`btn.style.color = "#ffffff"\`
   - เปลี่ยนข้อความบนปุ่มเป็น \`"คลิกสำเร็จแล้ว!"\``,
      starterHtml: `<div class="center-box">
  <button id="action-btn">คลิกเพื่อเปลี่ยนสีและข้อความ</button>
</div>`,
      starterCss: `body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f8fafc; }
#action-btn {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #cbd5e1;
  border-radius: 8px;
  background: white;
  color: #334155;
  cursor: pointer;
  transition: all 0.2s ease;
}`,
      starterJs: `const btn = document.getElementById("action-btn");

// ใช้ addEventListener ดักจับการคลิก
btn.addEventListener("click", () => {
  // เขียนคำสั่งเปลี่ยนสีพื้นหลัง สีตัวอักษร และข้อความ
});
`,
      targetHtml: `<div class="center-box">
  <button id="action-btn" style="background-color: rgb(16, 185, 129); color: rgb(255, 255, 255);">คลิกสำเร็จแล้ว!</button>
</div>`,
      targetCss: `body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f8fafc; } #action-btn { padding: 12px 24px; font-size: 16px; font-weight: bold; border: 2px solid #cbd5e1; border-radius: 8px; background: white; color: #334155; cursor: pointer; transition: all 0.2s ease; }`,
      targetJs: `const btn = document.getElementById("action-btn");
btn.addEventListener("click", () => {
  btn.style.backgroundColor = "#10b981";
  btn.style.color = "#ffffff";
  btn.innerHTML = "คลิกสำเร็จแล้ว!";
});
// Trigger simulate
btn.click();`,
      validation: (doc, css, js) => {
        const btn = doc.getElementById('action-btn');
        if (!btn) return "ไม่พบปุ่ม #action-btn";
        if (!js.includes("addEventListener") || !js.includes("click")) {
          return "กรุณาใช้ addEventListener('click', ...) ในการดักจับเหตุการณ์";
        }
        btn.click();
        if (!btn.textContent.includes("คลิกสำเร็จแล้ว!")) {
          return "เมื่อคลิกปุ่มแล้ว ข้อความบนปุ่มต้องเปลี่ยนเป็น 'คลิกสำเร็จแล้ว!'";
        }
        return true;
      },
      hints: [
        "btn.addEventListener('click', () => {",
        "  btn.style.backgroundColor = '#10b981';",
        "  btn.style.color = '#ffffff';",
        "  btn.innerHTML = 'คลิกสำเร็จแล้ว!';",
        "});"
      ]
    },

    {
      id: "js-form-validation",
      title: "11. การตรวจสอบข้อมูลในฟอร์ม (Form Validation)",
      category: "2. การจัดการ DOM & ฟอร์ม",
      slideRef: "ch4 JavaScript_2.pdf (หน้า 18-23)",
      description: `การ Validate ข้อมูลฟอร์มด้วย JavaScript ช่วยป้องกันข้อมูลที่ไม่สมบูรณ์ก่อนส่งไป Server
      
\`\`\`javascript
function validateForm(event) {
  event.preventDefault(); // ป้องกันไม่ให้หน้าเว็บ Refresh
  const input = document.getElementById("username");
  if (input.value.trim() === "") {
    alert("กรุณากรอกชื่อผู้ใช้!");
    return false;
  }
}
\`\`\`

**เป้าหมายการฝึกฝน:**
1. ดักจับอีเวนต์ \`submit\` ของฟอร์ม \`#reg-form\`
2. ใช้ \`e.preventDefault()\` ป้องกันการโหลดหน้าใหม่
3. ตรวจสอบค่าในช่องรหัสผ่าน \`#password-input\`:
   - ถ้าความยาวน้อยกว่า 6 ตัวอักษร ให้แสดงข้อความเตือนใน \`#error-msg\` ว่า \`"รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร"\` พร้อมเปลี่ยนสีเป็นสีแดง
   - ถ้าถูกต้อง ให้แสดงข้อความใน \`#error-msg\` ว่า \`"ข้อมูลถูกต้องพร้อมส่ง!"\` พร้อมเปลี่ยนสีเป็นสีเขียว`,
      starterHtml: `<form id="reg-form" class="card">
  <h3>สมัครสมาชิก</h3>
  <div class="field">
    <label for="password-input">รหัสผ่าน (ขั้นต่ำ 6 ตัวอักษร):</label>
    <input type="password" id="password-input" placeholder="กรอกรหัสผ่าน">
  </div>
  <p id="error-msg"></p>
  <button type="submit">ส่งข้อมูล</button>
</form>`,
      starterCss: `body { font-family: sans-serif; padding: 30px; background: #f1f5f9; }
.card { background: white; padding: 24px; border-radius: 8px; max-width: 360px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.field { margin-bottom: 12px; }
input { width: 100%; padding: 8px 12px; margin-top: 6px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; }
#error-msg { font-size: 14px; font-weight: 500; min-height: 20px; }
button { width: 100%; padding: 10px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }`,
      starterJs: `const form = document.getElementById("reg-form");
const passwordInput = document.getElementById("password-input");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ตรวจสอบความยาวรหัสผ่านที่นี่
});
`,
      targetHtml: `<form id="reg-form" class="card">
  <h3>สมัครสมาชิก</h3>
  <div class="field">
    <label for="password-input">รหัสผ่าน (ขั้นต่ำ 6 ตัวอักษร):</label>
    <input type="password" id="password-input" placeholder="กรอกรหัสผ่าน">
  </div>
  <p id="error-msg" style="color: green;">ข้อมูลถูกต้องพร้อมส่ง!</p>
  <button type="submit">ส่งข้อมูล</button>
</form>`,
      targetCss: `body { font-family: sans-serif; padding: 30px; background: #f1f5f9; } .card { background: white; padding: 24px; border-radius: 8px; max-width: 360px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); } .field { margin-bottom: 12px; } input { width: 100%; padding: 8px 12px; margin-top: 6px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; } #error-msg { font-size: 14px; font-weight: 500; min-height: 20px; } button { width: 100%; padding: 10px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }`,
      targetJs: `const form = document.getElementById("reg-form");
const passwordInput = document.getElementById("password-input");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (passwordInput.value.length < 6) {
    errorMsg.style.color = "red";
    errorMsg.innerHTML = "รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร";
  } else {
    errorMsg.style.color = "green";
    errorMsg.innerHTML = "ข้อมูลถูกต้องพร้อมส่ง!";
  }
});`,
      validation: (doc, css, js) => {
        const form = doc.getElementById('reg-form');
        const input = doc.getElementById('password-input');
        const err = doc.getElementById('error-msg');
        if (!form || !input || !err) return "โครงสร้างฟอร์มไม่ครบถ้วน";
        if (!js.includes("preventDefault")) return "อย่าลืมใส่ e.preventDefault() เพื่อป้องกันหน้ารีเฟรช";

        const EventConstructor = doc.defaultView?.Event || Event;
        input.value = "123";
        form.dispatchEvent(new EventConstructor('submit', { cancelable: true }));
        if (!err.textContent.includes("อย่างน้อย 6 ตัวอักษร")) {
          return "ถ้ารหัสผ่านสั้นกว่า 6 ตัว ต้องแสดงข้อความเตือนว่า 'รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร'";
        }

        input.value = "1234567";
        form.dispatchEvent(new EventConstructor('submit', { cancelable: true }));
        if (!err.textContent.includes("ข้อมูลถูกต้องพร้อมส่ง!")) {
          return "ถ้ารหัสผ่านถูกต้อง ต้องแสดงข้อความว่า 'ข้อมูลถูกต้องพร้อมส่ง!'";
        }
        return true;
      },
      hints: [
        "if (passwordInput.value.length < 6) {",
        "  errorMsg.style.color = 'red';",
        "  errorMsg.innerHTML = 'รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร';",
        "} else {",
        "  errorMsg.style.color = 'green';",
        "  errorMsg.innerHTML = 'ข้อมูลถูกต้องพร้อมส่ง!';",
        "}"
      ]
    },

    {
      id: "js-dom-crud-elements",
      title: "12. การสร้างและลบ Element ใน DOM (createElement & appendChild)",
      category: "2. การจัดการ DOM & ฟอร์ม",
      slideRef: "ch4 JavaScript_2.pdf (หน้า 30-35)",
      description: `การสร้าง Element ขึ้นมาใหม่ด้วย JavaScript และนำไปแทรกในหน้าเว็บ:
      
\`\`\`javascript
// 1. สร้างแท็กใหม่
const newItem = document.createElement("li");

// 2. ใส่ข้อความหรือลูกเล่น
newItem.innerHTML = "หัวข้อใหม่";
newItem.className = "list-item";

// 3. นำไปต่อท้ายพ่อแม่ (Parent)
document.getElementById("my-list").appendChild(newItem);

// 4. การลบโหนด
newItem.remove(); // ลบตัวเอง
\`\`\`

**เป้าหมายการฝึกฝน:**
1. ดักจับการคลิกปุ่ม \`#add-btn\`
2. อ่านค่าข้อความจากช่อง \`#item-input\`
3. ถ้าไม่เป็นค่าว่าง ให้สร้างแท็ก \`<li>\` ใหม่ กำหนดข้อความตามที่พิมพ์
4. ใช้ \`.appendChild()\` นำแท็ก \`<li>\` ไปใส่ใน \`#item-list\`
5. เคลียร์ค่าในช่อง \`#item-input\` ให้เป็นค่าว่าง`,
      starterHtml: `<div class="todo-box">
  <h3>รายการสิ่งที่ต้องทำ</h3>
  <div class="input-row">
    <input type="text" id="item-input" placeholder="พิมพ์รายการใหม่...">
    <button id="add-btn">เพิ่มรายการ</button>
  </div>
  <ul id="item-list"></ul>
</div>`,
      starterCss: `body { font-family: sans-serif; padding: 20px; }
.todo-box { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; max-width: 400px; }
.input-row { display: flex; gap: 8px; margin-bottom: 16px; }
input { flex: 1; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; }
button { padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; }
ul { list-style: none; padding: 0; margin: 0; }
li { padding: 8px 12px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; border-radius: 4px; margin-bottom: 4px; }`,
      starterJs: `const addBtn = document.getElementById("add-btn");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

addBtn.addEventListener("click", () => {
  // สร้าง <li> และใช้ appendChild
});
`,
      targetHtml: `<div class="todo-box">
  <h3>รายการสิ่งที่ต้องทำ</h3>
  <div class="input-row">
    <input type="text" id="item-input" placeholder="พิมพ์รายการใหม่...">
    <button id="add-btn">เพิ่มรายการ</button>
  </div>
  <ul id="item-list">
    <li>เรียนรู้ JavaScript</li>
  </ul>
</div>`,
      targetCss: `body { font-family: sans-serif; padding: 20px; } .todo-box { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; max-width: 400px; } .input-row { display: flex; gap: 8px; margin-bottom: 16px; } input { flex: 1; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; } button { padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 6px; cursor: pointer; } ul { list-style: none; padding: 0; margin: 0; } li { padding: 8px 12px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; border-radius: 4px; margin-bottom: 4px; }`,
      targetJs: `const addBtn = document.getElementById("add-btn");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

addBtn.addEventListener("click", () => {
  const val = itemInput.value.trim();
  if (val !== "") {
    const li = document.createElement("li");
    li.textContent = val;
    itemList.appendChild(li);
    itemInput.value = "";
  }
});`,
      validation: (doc, css, js) => {
        const btn = doc.getElementById('add-btn');
        const input = doc.getElementById('item-input');
        const list = doc.getElementById('item-list');
        if (!btn || !input || !list) return "องค์ประกอบในหน้าไม่ครบถ้วน";
        if (!js.includes("createElement") || !js.includes("appendChild")) {
          return "ต้องใช้ document.createElement('li') และ appendChild ในการเพิ่มองค์ประกอบ";
        }
        input.value = "เรียนรู้ JavaScript";
        btn.click();
        if (list.children.length === 0 || !list.textContent.includes("เรียนรู้ JavaScript")) {
          return "เมื่อพิมพ์ข้อความแล้วกดปุ่ม ต้องมี <li> เพิ่มเข้ามาใน #item-list";
        }
        return true;
      },
      hints: [
        "const li = document.createElement('li');",
        "li.textContent = itemInput.value;",
        "itemList.appendChild(li);",
        "itemInput.value = '';"
      ]
    },

    {
      id: "js-dom-tree-advanced",
      title: "13. โครงสร้าง DOM Tree ขั้นสูง (insertBefore & replaceChild)",
      category: "2. การจัดการ DOM & ฟอร์ม",
      slideRef: "ch4 JavaScript_2.pdf (หน้า 24-29, 34-35)",
      description: `นอกจากการใช้ \`appendChild()\` เพื่อต่อท้าย Element แล้ว เอกสาร DOM ในภาษา JavaScript ยังมีเมธอดทรงพลังในการแทรกและแทนที่โหนดตามตำแหน่งที่ต้องการ:

\`\`\`javascript
// 1. parentNode.insertBefore(newNode, referenceNode)
// แทรก newNode ไว้ข้างหน้า referenceNode
list.insertBefore(newItem, list.firstChild);

// 2. parentNode.replaceChild(newChild, oldChild)
// นำ newChild มาแทนที่ oldChild ตัวเดิม
list.replaceChild(newBadge, oldBadge);
\`\`\`

**คุณสมบัติการท่องต้นไม้ DOM (DOM Navigation):**
- \`parentNode\` : โหนดแม่
- \`children\` / \`childNodes\` : รายการโหนดลูก
- \`firstElementChild\` / \`lastElementChild\` : ลูกคนแรก / ลูกคนสุดท้าย

**เป้าหมายการฝึกฝน:**
ในระบบคิวงานบริการ:
1. สร้าง \`<li>\` ใหม่สำหรับงานด่วน VIP:
   - กำหนดข้อความ: \`"🔥 งานด่วน VIP: กู้ระบบ Server"\`
   - กำหนดคลาส: \`"urgent-item"\`
   - แทรกไว้เป็น **รายการแรกสุดของคิว** ก่อนหน้าลูกคนแรก โดยใช้คำสั่ง:
     \`list.insertBefore(urgentLi, list.firstElementChild);\`
2. สร้าง \`<li>\` ใหม่สำหรับงานที่อนุมัติแล้ว:
   - กำหนดข้อความ: \`"✅ ตรวจสอบสัญญาเรียบร้อย (Approved)"\`
   - กำหนดคลาส: \`"approved-item"\`
   - แทนที่รายการรอตรวจ (\`#pending-item\`) ด้วยคำสั่ง:
     \`list.replaceChild(approvedLi, document.getElementById("pending-item"));\``,
      starterHtml: `<div class="queue-card">
  <h3>คิวการดำเนินงาน (Task Queue)</h3>
  <ul id="task-list">
    <li id="pending-item" class="pending-item">⏳ รอการตรวจสอบสัญญา</li>
    <li class="regular-item">📄 จัดทำรายงานประจำเดือน</li>
  </ul>
</div>`,
      starterCss: `body { font-family: sans-serif; padding: 25px; background: #f1f5f9; }
.queue-card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); max-width: 450px; }
ul { list-style: none; padding: 0; margin: 15px 0 0; display: flex; flex-direction: column; gap: 8px; }
li { padding: 12px; border-radius: 8px; font-weight: 500; font-size: 15px; }
.urgent-item { background: #fee2e2; color: #991b1b; border: 1px solid #f87171; }
.pending-item { background: #fef3c7; color: #92400e; border: 1px solid #fcd34d; }
.regular-item { background: #e2e8f0; color: #334155; }
.approved-item { background: #dcfce7; color: #166534; border: 1px solid #86efac; }`,
      starterJs: `const list = document.getElementById("task-list");

// 1. สร้าง <li> งานด่วน VIP แล้วแทรกไว้บนสุดด้วย list.insertBefore(urgentLi, list.firstElementChild)
// 2. สร้าง <li> งานอนุมัติแล้ว และแทนที่ #pending-item ด้วย list.replaceChild(approvedLi, oldItem)
`,
      targetHtml: `<div class="queue-card">
  <h3>คิวการดำเนินงาน (Task Queue)</h3>
  <ul id="task-list">
    <li class="urgent-item">🔥 งานด่วน VIP: กู้ระบบ Server</li>
    <li class="approved-item">✅ ตรวจสอบสัญญาเรียบร้อย (Approved)</li>
    <li class="regular-item">📄 จัดทำรายงานประจำเดือน</li>
  </ul>
</div>`,
      targetCss: `body { font-family: sans-serif; padding: 25px; background: #f1f5f9; } .queue-card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); max-width: 450px; } ul { list-style: none; padding: 0; margin: 15px 0 0; display: flex; flex-direction: column; gap: 8px; } li { padding: 12px; border-radius: 8px; font-weight: 500; font-size: 15px; } .urgent-item { background: #fee2e2; color: #991b1b; border: 1px solid #f87171; } .pending-item { background: #fef3c7; color: #92400e; border: 1px solid #fcd34d; } .regular-item { background: #e2e8f0; color: #334155; } .approved-item { background: #dcfce7; color: #166534; border: 1px solid #86efac; }`,
      targetJs: `const list = document.getElementById("task-list");

// 1. insertBefore
const urgentLi = document.createElement("li");
urgentLi.className = "urgent-item";
urgentLi.textContent = "🔥 งานด่วน VIP: กู้ระบบ Server";
list.insertBefore(urgentLi, list.firstElementChild);

// 2. replaceChild
const pendingItem = document.getElementById("pending-item");
if (pendingItem) {
  const approvedLi = document.createElement("li");
  approvedLi.className = "approved-item";
  approvedLi.textContent = "✅ ตรวจสอบสัญญาเรียบร้อย (Approved)";
  list.replaceChild(approvedLi, pendingItem);
}`,
      validation: (doc, css, js) => {
        const list = doc.getElementById('task-list');
        if (!list) return "ไม่พบ #task-list ในโครงสร้างเอกสาร";
        if (!list.firstElementChild || !list.firstElementChild.textContent.includes("งานด่วน VIP")) {
          return "รายการแรกสุดของ #task-list ต้องเป็นงานด่วน VIP (ใช้ list.insertBefore(urgentLi, list.firstElementChild))";
        }
        const pending = doc.getElementById('pending-item');
        if (pending) {
          return "ต้องแทนที่ #pending-item ด้วยโหนดที่อนุมัติแล้ว โดยใช้ list.replaceChild(...)";
        }
        if (!list.textContent.includes("อนุมัติเรียบร้อย") && !list.textContent.includes("Approved")) {
          return "ต้องมีรายการงานที่อนุมัติแล้ว (Approved) แทนที่รายการเดิม";
        }
        if (!js.includes("insertBefore")) {
          return "กรุณาใช้คำสั่ง insertBefore ในการแทรกโหนดตามโจทย์";
        }
        if (!js.includes("replaceChild")) {
          return "กรุณาใช้คำสั่ง replaceChild ในการแทนที่โหนดตามโจทย์";
        }
        return true;
      },
      hints: [
        "list.insertBefore(urgentLi, list.firstElementChild);",
        "const pendingItem = document.getElementById('pending-item');",
        "list.replaceChild(approvedLi, pendingItem);"
      ]
    },

    // ==========================================
    // หมวดที่ 3: Advanced JS & Web APIs (สไลด์เล่ม 3)
    // ==========================================
    {
      id: "js-this-binding",
      title: "14. คีย์เวิร์ด this และการผูกค่า (this & Explicit Binding)",
      category: "3. เทคนิคขั้นสูงและ Web APIs",
      slideRef: "ch4 JavaScript_3.pptx.pdf (หน้า 1-6)",
      description: `คีย์เวิร์ด \`this\` มีค่าขึ้นอยู่กับ **วิธีการที่ฟังก์ชันถูกเรียกใช้ (How it is invoked)**:
      
1. **ใน Object Method:** \`this\` จะอ้างถึง Object ที่เป็นเจ้าของ Method นั้น
2. **ใน Event Listener:** \`this\` จะอ้างถึง Element ที่ได้รับเหตุการณ์นั้น
3. **Explicit Binding:** การกำหนดค่า \`this\` แบบเจาะจง:
   - \`call(thisArg, arg1, arg2)\` : เรียกใช้ฟังก์ชันทันทีด้วยค่า \`this\` ที่กำหนด
   - \`apply(thisArg, [args])\` : ส่ง arguments เป็น Array
   - \`bind(thisArg)\` : สร้างฟังก์ชันใหม่ที่มีค่า \`this\` ถูกตรึงไว้ถาวร

**เป้าหมายการฝึกฝน:**
1. มี Object ชื่อ \`person1 = { firstName: "Somchai", lastName: "Jaidee" }\`
2. มีฟังก์ชัน \`function getFullName() { return this.firstName + " " + this.lastName; }\`
3. ใช้ \`getFullName.call(person1)\` เพื่อเรียกใช้ฟังก์ชันโดยผูกกับ \`person1\`
4. นำผลลัพธ์ไปใส่ใน element id \`"name-output"\``,
      starterHtml: `<div class="card">
  <h3>ผลลัพธ์การเรียกใช้ฟังก์ชันด้วย .call()</h3>
  <p id="name-output">รอผลลัพธ์...</p>
</div>`,
      starterCss: `body { font-family: sans-serif; padding: 25px; }
.card { background: #faf5ff; border: 1px solid #e9d5ff; padding: 20px; border-radius: 8px; }
#name-output { font-size: 20px; font-weight: bold; color: #7e22ce; }`,
      starterJs: `const person1 = {
  firstName: "Somchai",
  lastName: "Jaidee"
};

function getFullName() {
  return this.firstName + " " + this.lastName;
}

// ใช้ getFullName.call(person1) และแสดงใน #name-output
`,
      targetHtml: `<div class="card">
  <h3>ผลลัพธ์การเรียกใช้ฟังก์ชันด้วย .call()</h3>
  <p id="name-output">Somchai Jaidee</p>
</div>`,
      targetCss: `body { font-family: sans-serif; padding: 25px; } .card { background: #faf5ff; border: 1px solid #e9d5ff; padding: 20px; border-radius: 8px; } #name-output { font-size: 20px; font-weight: bold; color: #7e22ce; }`,
      targetJs: `const person1 = { firstName: "Somchai", lastName: "Jaidee" };
function getFullName() { return this.firstName + " " + this.lastName; }
document.getElementById("name-output").innerHTML = getFullName.call(person1);`,
      validation: (doc, css, js) => {
        const el = doc.getElementById('name-output');
        if (!el || !el.textContent.includes("Somchai Jaidee")) {
          return "ข้อความใน #name-output ต้องเป็น 'Somchai Jaidee'";
        }
        if (!js.includes(".call")) {
          return "ต้องใช้เมธอด .call() เพื่อส่ง person1 เป็นค่า this";
        }
        return true;
      },
      hints: [
        "const result = getFullName.call(person1);",
        "document.getElementById('name-output').innerHTML = result;"
      ]
    },

    {
      id: "js-timers-interval",
      title: "15. การจับเวลาและการทำงานแบบอะซิงโครนัส (setTimeout & setInterval)",
      category: "3. เทคนิคขั้นสูงและ Web APIs",
      slideRef: "ch4 JavaScript_3.pptx.pdf (หน้า 7-14)",
      description: `JavaScript มีคำสั่งตั้งเวลา (Timers) 2 ตัวหลัก:
      
1. \`setTimeout(func, delayMs)\` : รันฟังก์ชัน **เพียง 1 ครั้ง** หลังเวลาผ่านไปตามที่กำหนด
   - ยกเลิกด้วย: \`clearTimeout(timeoutId)\`
2. \`setInterval(func, intervalMs)\` : รันฟังก์ชัน **วนซ้ำทุกๆ ช่วงเวลา**
   - ยกเลิกด้วย: \`clearInterval(intervalId)\`

**เป้าหมายการฝึกฝน:**
1. เขียนระบบนับเลขถอยหลัง (Countdown) จาก 5 ลงมาถึง 0
2. เริ่มต้นค่าใน \`#timer-display\` เป็น \`5\`
3. ใช้ \`setInterval\` รันทุกๆ 1000ms (1 วินาที) ลดค่าลงทีละ 1
4. เมื่อตัวเลขนับถึง 0 ให้ใช้ \`clearInterval\` หยุดการนับ แล้วเปลี่ยนข้อความใน \`#timer-display\` เป็น \`"หมดเวลา! (Time's Up)"\``,
      starterHtml: `<div class="timer-box">
  <h2>นาฬิกานับถอยหลัง</h2>
  <div id="timer-display">5</div>
</div>`,
      starterCss: `body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #0f172a; color: white; }
.timer-box { text-align: center; }
#timer-display { font-size: 64px; font-weight: 800; color: #38bdf8; margin-top: 20px; }`,
      starterJs: `let timeLeft = 5;
const display = document.getElementById("timer-display");

// สร้าง setInterval เพื่อลดค่า timeLeft และ clearInterval เมื่อถึง 0
`,
      targetHtml: `<div class="timer-box">
  <h2>นาฬิกานับถอยหลัง</h2>
  <div id="timer-display">หมดเวลา! (Time's Up)</div>
</div>`,
      targetCss: `body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #0f172a; color: white; } .timer-box { text-align: center; } #timer-display { font-size: 64px; font-weight: 800; color: #38bdf8; margin-top: 20px; }`,
      targetJs: `let timeLeft = 5;
const display = document.getElementById("timer-display");
const timer = setInterval(() => {
  timeLeft--;
  if (timeLeft > 0) {
    display.innerHTML = timeLeft;
  } else {
    display.innerHTML = "หมดเวลา! (Time's Up)";
    clearInterval(timer);
  }
}, 1000);`,
      validation: (doc, css, js) => {
        if (!js.includes("setInterval") || !js.includes("clearInterval")) {
          return "ต้องใช้ setInterval ในการนับถอยหลัง และ clearInterval เมื่อเวลาหมด";
        }
        return true;
      },
      hints: [
        "const timer = setInterval(() => { timeLeft--; if (timeLeft <= 0) { display.innerHTML = \"หมดเวลา! (Time's Up)\"; clearInterval(timer); } else { display.innerHTML = timeLeft; } }, 1000);"
      ]
    },

    {
      id: "js-drag-and-drop-api",
      title: "16. การลากและวางข้อมูล (HTML5 Drag and Drop API)",
      category: "3. เทคนิคขั้นสูงและ Web APIs",
      slideRef: "ch4 JavaScript_3.pptx.pdf (หน้า 18-19)",
      description: `HTML5 มี Drag and Drop API ในตัว ทำให้สามารถลาก Element ใดก็ได้ไปวางในเป้าหมายที่กำหนด:

**ขั้นตอนการทำงานตามสไลด์:**
1. **ทำให้ Element สามารถลากได้:**
   กำหนดแอตทริบิวต์ \`draggable="true"\`
2. **ดักจับจังหวะเริ่มลาก (\`dragstart\`):**
   ใช้ \`ev.dataTransfer.setData("text/plain", ev.target.id)\` เพื่อฝาก id หรือข้อมูลของ Element ไว้
3. **อนุญาตให้วางบน Drop Zone (\`dragover\`):**
   โดยปกติเบราว์เซอร์จะไม่อนุญาตให้วาง ต้องดักจับ \`dragover\` แล้วเรียก \`ev.preventDefault()\` เพื่อเปิดรับ
4. **จังหวะที่ปล่อยวาง (\`drop\`):**
   เรียก \`ev.preventDefault()\` และดึงข้อมูลด้วย \`const data = ev.dataTransfer.getData("text/plain")\` จากนั้นนำ Element ย้ายเข้าไปด้วย \`ev.target.appendChild(document.getElementById(data))\`

**เป้าหมายการฝึกฝน:**
1. ให้กล่อง \`#drag-item\` ดักจับอีเวนต์ \`dragstart\` และส่ง id ของตนเองด้วย \`e.dataTransfer.setData("text/plain", e.target.id)\`
2. ให้โซนวาง \`#drop-zone\` ดักจับอีเวนต์ \`dragover\` และเรียก \`e.preventDefault()\`
3. ให้โซนวาง \`#drop-zone\` ดักจับอีเวนต์ \`drop\`:
   - เรียก \`e.preventDefault()\`
   - อ่าน id ด้วย \`const itemId = e.dataTransfer.getData("text/plain");\`
   - ย้าย Element ไปวางด้วย \`dropZone.appendChild(document.getElementById(itemId));\`
   - เปลี่ยนข้อความใน \`#status-msg\` เป็น **"สถานะ: วางวัตถุสำเร็จ!"**`,
      starterHtml: `<div class="dnd-container">
  <h3>HTML5 Drag & Drop Playground</h3>
  <div class="zones">
    <div id="source-zone" class="zone">
      <div id="drag-item" draggable="true" class="box">📦 กล่องพัสดุ A</div>
    </div>
    <div id="drop-zone" class="zone drop-target">
      <p class="placeholder-text">ลากกล่องพัสดุมาวางที่นี่</p>
    </div>
  </div>
  <p id="status-msg">สถานะ: รอดำเนินการ</p>
</div>`,
      starterCss: `body { font-family: sans-serif; padding: 25px; background: #f8fafc; }
.dnd-container { background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.06); max-width: 500px; }
.zones { display: flex; gap: 16px; margin: 20px 0; }
.zone { flex: 1; min-height: 120px; border: 2px dashed #cbd5e1; border-radius: 8px; padding: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #f8fafc; }
.drop-target { border-color: #3b82f6; background: #eff6ff; }
.box { background: #3b82f6; color: white; padding: 12px 18px; border-radius: 8px; font-weight: bold; cursor: grab; user-select: none; }
.placeholder-text { color: #64748b; font-size: 13px; margin: 0; pointer-events: none; }
#status-msg { font-weight: bold; color: #334155; }`,
      starterJs: `const dragItem = document.getElementById("drag-item");
const dropZone = document.getElementById("drop-zone");
const statusMsg = document.getElementById("status-msg");

// 1. ดักจับ dragstart บน dragItem และ setData("text/plain", ...)
// 2. ดักจับ dragover บน dropZone และ preventDefault()
// 3. ดักจับ drop บน dropZone: ย้าย element และเปลี่ยน statusMsg เป็น "สถานะ: วางวัตถุสำเร็จ!"
`,
      targetHtml: `<div class="dnd-container">
  <h3>HTML5 Drag & Drop Playground</h3>
  <div class="zones">
    <div id="source-zone" class="zone"></div>
    <div id="drop-zone" class="zone drop-target">
      <p class="placeholder-text">ลากกล่องพัสดุมาวางที่นี่</p>
      <div id="drag-item" draggable="true" class="box">📦 กล่องพัสดุ A</div>
    </div>
  </div>
  <p id="status-msg">สถานะ: วางวัตถุสำเร็จ!</p>
</div>`,
      targetCss: `body { font-family: sans-serif; padding: 25px; background: #f8fafc; } .dnd-container { background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.06); max-width: 500px; } .zones { display: flex; gap: 16px; margin: 20px 0; } .zone { flex: 1; min-height: 120px; border: 2px dashed #cbd5e1; border-radius: 8px; padding: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #f8fafc; } .drop-target { border-color: #3b82f6; background: #eff6ff; } .box { background: #3b82f6; color: white; padding: 12px 18px; border-radius: 8px; font-weight: bold; cursor: grab; user-select: none; } .placeholder-text { color: #64748b; font-size: 13px; margin: 0; pointer-events: none; } #status-msg { font-weight: bold; color: #334155; }`,
      targetJs: `const dragItem = document.getElementById("drag-item");
const dropZone = document.getElementById("drop-zone");
const statusMsg = document.getElementById("status-msg");

dragItem.addEventListener("dragstart", (e) => {
  if (e.dataTransfer) {
    e.dataTransfer.setData("text/plain", e.target.id);
  }
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const id = e.dataTransfer ? e.dataTransfer.getData("text/plain") : "drag-item";
  const item = document.getElementById(id);
  if (item) {
    dropZone.appendChild(item);
  }
  statusMsg.textContent = "สถานะ: วางวัตถุสำเร็จ!";
});`,
      validation: (doc, css, js) => {
        const item = doc.getElementById('drag-item');
        const dropZone = doc.getElementById('drop-zone');
        const statusMsg = doc.getElementById('status-msg');
        if (!item || !dropZone || !statusMsg) return "ไม่พบคอมโพเนนต์ HTML ที่จำเป็น";
        
        if (!js.includes("dragstart")) {
          return "ต้องมีการดักจับอีเวนต์ 'dragstart' บน element ที่ลาก";
        }
        if (!js.includes("dragover")) {
          return "ต้องมีการดักจับอีเวนต์ 'dragover' บน dropZone และเรียก preventDefault()";
        }
        if (!js.includes("drop")) {
          return "ต้องมีการดักจับอีเวนต์ 'drop' บน dropZone";
        }
        if (!js.includes("setData") || !js.includes("getData")) {
          return "ต้องใช้ dataTransfer.setData ใน dragstart และ dataTransfer.getData ใน drop";
        }
        return true;
      },
      hints: [
        "dragItem.addEventListener('dragstart', (e) => { e.dataTransfer.setData('text/plain', e.target.id); });",
        "dropZone.addEventListener('dragover', (e) => { e.preventDefault(); });",
        "dropZone.addEventListener('drop', (e) => { e.preventDefault(); const id = e.dataTransfer.getData('text/plain'); dropZone.appendChild(document.getElementById(id)); statusMsg.textContent = 'สถานะ: วางวัตถุสำเร็จ!'; });"
      ]
    },

    {
      id: "js-web-storage",
      title: "17. บันทึกข้อมูลฝั่งไคลเอนต์ (Web Storage: localStorage)",
      category: "3. เทคนิคขั้นสูงและ Web APIs",
      slideRef: "ch4 JavaScript_3.pptx.pdf (หน้า 20-24)",
      description: `Web Storage API ช่วยให้เว็บสามารถจัดเก็บข้อมูลไว้บนเบราว์เซอร์ของผู้ใช้ได้:
      
- \`localStorage\` : ข้อมูลถูกบันทึกอย่างถาวร ไม่หายแม้ปิดแท็บหรือปิดเบราว์เซอร์
- \`sessionStorage\` : ข้อมูลจะหายไปทันทีเมื่อปิดแท็บหรือหน้าต่างเบราว์เซอร์

**คำสั่งสำคัญของ localStorage:**
- \`localStorage.setItem("key", "value")\` : บันทึกข้อมูล (ค่าต้องเป็น string เสมอ)
- \`localStorage.getItem("key")\` : ดึงข้อมูล
- \`localStorage.removeItem("key")\` : ลบข้อมูลเฉพาะคีย์
- \`localStorage.clear()\` : ล้างข้อมูลทั้งหมด
- หากต้องการเก็บ Object ต้องแปลงด้วย \`JSON.stringify(obj)\` และแปลงกลับด้วย \`JSON.parse(str)\`

**เป้าหมายการฝึกฝน:**
1. สร้าง Object ข้อมูลนักศึกษา \`const user = { name: "Somchai", role: "Student" };\`
2. แปลงเป็น JSON string แล้วบันทึกลงใน \`localStorage\` โดยใช้คีย์ \`"savedUser"\`
3. ดึงค่านั้นกลับมา แปลงกลับเป็น Object ด้วย \`JSON.parse\`
4. แสดงชื่อ \`user.name\` ใน element id \`"user-display"\``,
      starterHtml: `<div class="storage-card">
  <h3>ข้อมูลจาก LocalStorage</h3>
  <p id="user-display">กำลังดึงข้อมูล...</p>
</div>`,
      starterCss: `body { font-family: sans-serif; padding: 20px; }
.storage-card { background: #fefce8; border: 1px solid #fef08a; padding: 20px; border-radius: 8px; }
#user-display { font-size: 20px; font-weight: bold; color: #854d0e; }`,
      starterJs: `const user = { name: "Somchai", role: "Student" };

// 1. เก็บ user ลงใน localStorage คีย์ "savedUser" ด้วย JSON.stringify
// 2. ดึงค่ากลับมาด้วย JSON.parse
// 3. แสดงชื่อใน #user-display
`,
      targetHtml: `<div class="storage-card">
  <h3>ข้อมูลจาก LocalStorage</h3>
  <p id="user-display">ผู้ใช้งาน: Somchai</p>
</div>`,
      targetCss: `body { font-family: sans-serif; padding: 20px; } .storage-card { background: #fefce8; border: 1px solid #fef08a; padding: 20px; border-radius: 8px; } #user-display { font-size: 20px; font-weight: bold; color: #854d0e; }`,
      targetJs: `const user = { name: "Somchai", role: "Student" };
localStorage.setItem("savedUser", JSON.stringify(user));
const retrieved = JSON.parse(localStorage.getItem("savedUser"));
document.getElementById("user-display").innerHTML = \`ผู้ใช้งาน: \${retrieved.name}\`;`,
      validation: (doc, css, js) => {
        const el = doc.getElementById('user-display');
        if (!el || !el.textContent.includes("Somchai")) {
          return "ข้อความใน #user-display ต้องแสดงชื่อ 'Somchai'";
        }
        if (!js.includes("localStorage.setItem") || !js.includes("localStorage.getItem")) {
          return "ต้องใช้ localStorage.setItem และ localStorage.getItem ตามโจทย์";
        }
        if (!js.includes("JSON.stringify") || !js.includes("JSON.parse")) {
          return "ต้องใช้ JSON.stringify ในการจัดเก็บ และ JSON.parse ในการแปลงข้อมูลกลับ";
        }
        return true;
      },
      hints: [
        "localStorage.setItem('savedUser', JSON.stringify(user));",
        "const retrieved = JSON.parse(localStorage.getItem('savedUser'));",
        "document.getElementById('user-display').innerHTML = `ผู้ใช้งาน: ${retrieved.name}`;"
      ]
    },

    {
      id: "js-syntactic-sugar",
      title: "18. ไวยากรณ์ทางลัดสมัยใหม่ (Modern Syntactic Sugar: ES6+)",
      category: "3. เทคนิคขั้นสูงและ Web APIs",
      slideRef: "ES6+ Modern JavaScript Standards (ไวยากรณ์ทางลัดที่ใช้จริงในการพัฒนา)",
      description: `ไวยากรณ์ทางลัด (Syntactic Sugar) ใน JavaScript มาตรฐาน ES6+ ช่วยให้เขียนโค้ดได้กระชับ อ่านง่าย ปลอดภัย และลดความผิดพลาดในการเข้าถึงข้อมูล:

**1. Destructuring Assignment (การแยกส่วนค่า):**
- Object: \`const { username, score = 0 } = rawData;\` (ดึงค่า property ออกมาเป็นตัวแปร พร้อมใส่ default value ได้)
- Array: \`const [first, second] = colors;\`

**2. Spread Operator (\`...\`):**
- โคลนและผสาน Object หรือ Array โดยไม่กระทบกับข้อมูลต้นฉบับ:
\`const updated = { ...rawProfile, isVIP: true };\`

**3. Optional Chaining (\`?.\`):**
- เข้าถึงคุณสมบัติซ้อนลึกอย่างปลอดภัย หากค่าข้างหน้าเป็น \`null\` หรือ \`undefined\` จะได้ผลลัพธ์เป็น \`undefined\` ทันที โดยไม่เกิด TypeError หยุดการทำงานของโปรแกรม:
\`const badgeTitle = userProfile.badge?.title;\`

**4. Nullish Coalescing (\`??\`):**
- กำหนดค่าเริ่มต้นสำรองเฉพาะเมื่อตัวแปรเป็น \`null\` หรือ \`undefined\` เท่านั้น (ไม่เหมือน \`||\` ที่เผลอตัดค่า \`0\` หรือ \`false\` ทิ้ง):
\`const displayBadge = userProfile.badge?.title ?? "Standard";\`

---
**เป้าหมายการฝึกฝน:**
กำหนด Object \`rawUserData\` มาให้ใน starter code:
1. ใช้ **Object Destructuring** ดึงค่า \`username\` และ \`score\` จาก \`rawUserData\`
2. ใช้ **Spread Operator (\`...\`)** โคลน \`rawUserData\` พร้อมเพิ่ม property \`status: "Active"\` เก็บไว้ในตัวแปร \`userProfile\`
3. ใช้ **Optional Chaining (\`?.\`)** ร่วมกับ **Nullish Coalescing (\`??\`)** ดึงค่า \`userProfile.details?.badge ?? "General"\` เก็บไว้ในตัวแปร \`badge\`
4. ใช้ **Nullish Coalescing (\`??\`)** ดึงค่า \`userProfile.avatar ?? "default-avatar.png"\` เก็บไว้ในตัวแปร \`avatar\`
5. กำหนดเนื้อหาใน element \`#profile-card\` ให้แสดง:
   - \`<div class="info-row"><strong>ชื่อผู้ใช้:</strong> \${username}</div>\`
   - \`<div class="info-row"><strong>สถานะ:</strong> \${userProfile.status}</div>\`
   - \`<div class="info-row"><strong>คะแนน:</strong> \${score}</div>\`
   - \`<div class="badge">\${badge}</div>\`
   - \`<div class="info-row"><small>รูปโปรไฟล์: \${avatar}</small></div>\``,
      starterHtml: `<div class="profile-card" id="profile-container">
  <h3>บัตรข้อมูลสมาชิก (Modern ES6+)</h3>
  <div id="profile-card">รอการประมวลผลข้อมูล...</div>
</div>`,
      starterCss: `body { font-family: 'Sarabun', sans-serif; padding: 20px; background: #f8fafc; }
.profile-card { background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; max-width: 360px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.08); }
.profile-card h3 { margin-top: 0; color: #1e293b; font-size: 18px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
.info-row { margin: 8px 0; color: #334155; font-size: 15px; }
.badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 13px; font-weight: 600; background: #dbeafe; color: #1d4ed8; margin: 6px 0; }`,
      starterJs: `const rawUserData = {
  username: "alex99",
  score: 0,
  details: {
    badge: "Gold Member"
  }
};

// 1. Destructuring: ดึง username และ score จาก rawUserData
// 2. Spread: สร้าง userProfile จาก rawUserData พร้อม status: "Active"
// 3. Optional Chaining & Nullish Coalescing: ดึง badge และ avatar
// 4. แสดงผลข้อมูลลงใน #profile-card
`,
      targetHtml: `<div class="profile-card" id="profile-container">
  <h3>บัตรข้อมูลสมาชิก (Modern ES6+)</h3>
  <div id="profile-card">
    <div class="info-row"><strong>ชื่อผู้ใช้:</strong> alex99</div>
    <div class="info-row"><strong>สถานะ:</strong> Active</div>
    <div class="info-row"><strong>คะแนน:</strong> 0</div>
    <div class="badge">Gold Member</div>
    <div class="info-row"><small>รูปโปรไฟล์: default-avatar.png</small></div>
  </div>
</div>`,
      targetCss: `body { font-family: 'Sarabun', sans-serif; padding: 20px; background: #f8fafc; }
.profile-card { background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; max-width: 360px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.08); }
.profile-card h3 { margin-top: 0; color: #1e293b; font-size: 18px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
.info-row { margin: 8px 0; color: #334155; font-size: 15px; }
.badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; font-size: 13px; font-weight: 600; background: #dbeafe; color: #1d4ed8; margin: 6px 0; }`,
      targetJs: `const rawUserData = {
  username: "alex99",
  score: 0,
  details: {
    badge: "Gold Member"
  }
};

const { username, score } = rawUserData;
const userProfile = { ...rawUserData, status: "Active" };
const badge = userProfile.details?.badge ?? "General";
const avatar = userProfile.avatar ?? "default-avatar.png";

const card = document.getElementById("profile-card");
card.innerHTML = \`
  <div class="info-row"><strong>ชื่อผู้ใช้:</strong> \${username}</div>
  <div class="info-row"><strong>สถานะ:</strong> \${userProfile.status}</div>
  <div class="info-row"><strong>คะแนน:</strong> \${score}</div>
  <div class="badge">\${badge}</div>
  <div class="info-row"><small>รูปโปรไฟล์: \${avatar}</small></div>
\`;`,
      validation: (doc, css, js) => {
        const card = doc.getElementById('profile-card');
        if (!card) return "ไม่พบ element #profile-card";
        const text = card.textContent;
        if (!text.includes("alex99")) {
          return "ข้อความใน #profile-card ต้องแสดงชื่อผู้ใช้ 'alex99'";
        }
        if (!text.includes("Active")) {
          return "ข้อความใน #profile-card ต้องแสดงสถานะ 'Active' จากการ Spread";
        }
        if (!text.includes("Gold Member")) {
          return "ข้อความใน #profile-card ต้องแสดงเหรียญรางวัล 'Gold Member' ด้วย Optional Chaining (?.)";
        }
        if (!text.includes("default-avatar.png")) {
          return "ข้อความใน #profile-card ต้องแสดงรูปเริ่มต้น 'default-avatar.png' ด้วย Nullish Coalescing (??)";
        }
        if (!js.includes("...")) {
          return "ต้องใช้ Spread Operator (...) ในการสร้าง userProfile";
        }
        if (!js.includes("?.") && !js.includes("??")) {
          return "ต้องใช้ไวยากรณ์ Optional Chaining (?.) หรือ Nullish Coalescing (??)";
        }
        if (!js.includes("{") || !js.includes("}")) {
          return "ต้องใช้ Object Destructuring { ... } ในการดึงค่าตัวแปร";
        }
        return true;
      },
      hints: [
        "const { username, score } = rawUserData;",
        "const userProfile = { ...rawUserData, status: 'Active' };",
        "const badge = userProfile.details?.badge ?? 'General';",
        "const avatar = userProfile.avatar ?? 'default-avatar.png';",
        "card.innerHTML = `<div class=\"info-row\"><strong>ชื่อผู้ใช้:</strong> ${username}</div>...`;"
      ]
    }
  ],

  // ==========================================
  // เวิร์กช็อปโปรเจกต์ (จากสไลด์ Todo ท้ายบททั้งหมด)
  // ==========================================
  projects: [
    {
      id: "project-bmi-calculator",
      title: "โปรเจกต์ 1: Body Mass Index (BMI) Calculator",
      category: "ภารกิจโปรเจกต์ (Slide 2: P37)",
      difficulty: "Medium",
      points: 100,
      description: `สร้างโปรแกรมคำนวณดัชนีมวลกาย (BMI Calculator) ตามโจทย์ในสไลด์ \`ch4 JavaScript_2.pdf\` หน้า 37
      
**สูตรการคำนวณ:**
\`BMI = น้ำหนัก (kg) / (ส่วนสูง (m) * ส่วนสูง (m))\`

**เกณฑ์การวินิจฉัย (Condition):**
- BMI < 18.5 : \`ผอมเกินไป (Underweight)\` (สีฟ้า)
- 18.5 <= BMI < 23 : \`น้ำหนักปกติ สมส่วน (Normal)\` (สีเขียว)
- 23 <= BMI < 25 : \`น้ำหนักเกิน ท้วม (Overweight)\` (สีเหลือง)
- BMI >= 25 : \`อ้วน (Obese)\` (สีแดง)

**เป้าหมาย:**
1. กดปุ่ม \`#btn-compute\` เพื่อดึงค่าน้ำหนัก (\`#weight\`) และส่วนสูง (\`#height\` ในหน่วย cm)
2. แปลงส่วนสูงเป็นเมตร (\`height / 100\`) แล้วคำนวณ BMI ปัดทศนิยม 2 ตำแหน่งด้วย \`.toFixed(2)\`
3. แสดงผลค่า BMI และเกณฑ์สภาพร่างกายใน \`#bmi-result\``,
      starterHtml: `<div class="calculator-card">
  <h2>โปรแกรมคำนวณค่า BMI</h2>
  <div class="input-group">
    <label>น้ำหนัก (กก.):</label>
    <input type="number" id="weight" placeholder="เช่น 65">
  </div>
  <div class="input-group">
    <label>ส่วนสูง (ซม.):</label>
    <input type="number" id="height" placeholder="เช่น 170">
  </div>
  <button id="btn-compute">คำนวณค่า BMI</button>
  <div id="bmi-result" class="result-box">กรอกข้อมูลแล้วกดคำนวณ</div>
</div>`,
      starterCss: `body { font-family: sans-serif; padding: 30px; background: #f8fafc; }
.calculator-card { background: white; max-width: 380px; margin: 0 auto; padding: 24px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); }
.input-group { margin-bottom: 16px; }
label { display: block; margin-bottom: 6px; font-weight: 600; color: #334155; }
input { width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; }
button { width: 100%; padding: 12px; background: #2563eb; color: white; border: none; border-radius: 6px; font-size: 16px; font-weight: bold; cursor: pointer; }
.result-box { margin-top: 20px; padding: 16px; border-radius: 8px; text-align: center; font-size: 18px; font-weight: bold; background: #f1f5f9; color: #475569; }`,
      starterJs: `// เขียนโค้ดคำนวณค่า BMI และการแสดงผลลัพธ์ตามเกณฑ์ด้วยตนเองทั้งหมด
`,
      targetHtml: `<div class="calculator-card">
  <h2>โปรแกรมคำนวณค่า BMI</h2>
  <div class="input-group">
    <label>น้ำหนัก (กก.):</label>
    <input type="number" id="weight" value="65">
  </div>
  <div class="input-group">
    <label>ส่วนสูง (ซม.):</label>
    <input type="number" id="height" value="170">
  </div>
  <button id="btn-compute">คำนวณค่า BMI</button>
  <div id="bmi-result" class="result-box" style="background-color: rgb(220, 252, 231); color: rgb(22, 101, 52);">BMI: 22.49 (น้ำหนักปกติ สมส่วน)</div>
</div>`,
      targetCss: `body { font-family: sans-serif; padding: 30px; background: #f8fafc; } .calculator-card { background: white; max-width: 380px; margin: 0 auto; padding: 24px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.08); } .input-group { margin-bottom: 16px; } label { display: block; margin-bottom: 6px; font-weight: 600; color: #334155; } input { width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; } button { width: 100%; padding: 12px; background: #2563eb; color: white; border: none; border-radius: 6px; font-size: 16px; font-weight: bold; cursor: pointer; } .result-box { margin-top: 20px; padding: 16px; border-radius: 8px; text-align: center; font-size: 18px; font-weight: bold; background: #f1f5f9; color: #475569; }`,
      targetJs: `const computeBtn = document.getElementById("btn-compute");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultBox = document.getElementById("bmi-result");

computeBtn.addEventListener("click", () => {
  const w = parseFloat(weightInput.value);
  const h = parseFloat(heightInput.value) / 100;
  if (!w || !h) return;
  const bmi = (w / (h * h)).toFixed(2);
  let condition = "";
  if (bmi < 18.5) condition = "ผอมเกินไป";
  else if (bmi < 23) condition = "น้ำหนักปกติ สมส่วน";
  else if (bmi < 25) condition = "น้ำหนักเกิน ท้วม";
  else condition = "อ้วน";
  
  resultBox.innerHTML = \`BMI: \${bmi} (\${condition})\`;
  resultBox.style.backgroundColor = bmi < 23 && bmi >= 18.5 ? "#dcfce7" : "#fee2e2";
  resultBox.style.color = bmi < 23 && bmi >= 18.5 ? "#166534" : "#991b1b";
});`,
      validation: (doc) => {
        const btn = doc.getElementById('btn-compute');
        const w = doc.getElementById('weight');
        const h = doc.getElementById('height');
        const res = doc.getElementById('bmi-result');
        if (!btn || !w || !h || !res) return "ไม่พบคอมโพเนนต์ที่จำเป็น";
        w.value = "70";
        h.value = "175";
        btn.click();
        if (!res.textContent.includes("22.86") && !res.textContent.includes("22.9")) {
          return "การคำนวณ BMI สำหรับน้ำหนัก 70 ส่วนสูง 175 ซม. จะต้องได้ค่าประมาณ 22.86";
        }
        return true;
      },
      hints: [
        "const bmi = (weight / ((height/100) * (height/100))).toFixed(2);",
        "resultBox.innerHTML = `BMI: ${bmi} (${condition})`;"
      ]
    },

    {
      id: "project-color-counter",
      title: "โปรเจกต์ 2: Dynamic Color Counter",
      category: "ภารกิจโปรเจกต์ (Slide 2: P38)",
      difficulty: "Easy",
      points: 80,
      description: `สร้างตัวนับตัวเลข (Counter) พร้อมฟังก์ชันเปลี่ยนสีตามค่าที่ได้ ตามโจทย์ในสไลด์ \`ch4 JavaScript_2.pdf\` หน้า 38
      
**ข้อกำหนดการทำงาน:**
1. ปุ่ม **Increase (+)** : เพิ่มตัวเลขทีละ 1
2. ปุ่ม **Decrease (-)** : ลดตัวเลขทีละ 1
3. ปุ่ม **Reset** : รีเซ็ตตัวเลขกลับเป็น 0
4. **The color of number change by the counter value:**
   - ถ้าค่ามากกว่า 0 (\`> 0\`) ➔ ตัวเลขแสดง **สีเขียว (#10b981)**
   - ถ้าน้อยกว่า 0 (\`< 0\`) ➔ ตัวเลขแสดง **สีแดง (#ef4444)**
   - ถ้าเท่ากับ 0 (\`=== 0\`) ➔ ตัวเลขแสดง **สีเทาเข้ม (#334155)**`,
      starterHtml: `<div class="counter-container">
  <h2>Dynamic Counter</h2>
  <div id="counter-value">0</div>
  <div class="button-group">
    <button id="btn-decrease">Decrease (-)</button>
    <button id="btn-reset">Reset</button>
    <button id="btn-increase">Increase (+)</button>
  </div>
</div>`,
      starterCss: `body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f8fafc; }
.counter-container { text-align: center; background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
#counter-value { font-size: 72px; font-weight: 800; color: #334155; margin: 20px 0; transition: color 0.2s; }
.button-group { display: flex; gap: 12px; }
button { padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 8px; border: 1px solid #cbd5e1; background: white; cursor: pointer; }
#btn-decrease:hover { background: #fee2e2; border-color: #ef4444; color: #ef4444; }
#btn-increase:hover { background: #dcfce7; border-color: #10b981; color: #10b981; }
#btn-reset:hover { background: #f1f5f9; }`,
      starterJs: `// เขียนระบบนับตัวเลข และเงื่อนไขเปลี่ยนสีเมื่อเป็นค่าบวก/ลบ/ศูนย์ด้วยตนเองทั้งหมด
`,
      targetHtml: `<div class="counter-container">
  <h2>Dynamic Counter</h2>
  <div id="counter-value" style="color: rgb(16, 185, 129);">1</div>
  <div class="button-group">
    <button id="btn-decrease">Decrease (-)</button>
    <button id="btn-reset">Reset</button>
    <button id="btn-increase">Increase (+)</button>
  </div>
</div>`,
      targetCss: `body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f8fafc; } .counter-container { text-align: center; background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); } #counter-value { font-size: 72px; font-weight: 800; color: #334155; margin: 20px 0; transition: color 0.2s; } .button-group { display: flex; gap: 12px; } button { padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 8px; border: 1px solid #cbd5e1; background: white; cursor: pointer; }`,
      targetJs: `let count = 0;
const valueEl = document.getElementById("counter-value");
const btnInc = document.getElementById("btn-increase");
const btnDec = document.getElementById("btn-decrease");
const btnReset = document.getElementById("btn-reset");

function updateDisplay() {
  valueEl.textContent = count;
  if (count > 0) valueEl.style.color = "#10b981";
  else if (count < 0) valueEl.style.color = "#ef4444";
  else valueEl.style.color = "#334155";
}

btnInc.addEventListener("click", () => { count++; updateDisplay(); });
btnDec.addEventListener("click", () => { count--; updateDisplay(); });
btnReset.addEventListener("click", () => { count = 0; updateDisplay(); });`,
      validation: (doc) => {
        const val = doc.getElementById('counter-value');
        const inc = doc.getElementById('btn-increase');
        const dec = doc.getElementById('btn-decrease');
        const reset = doc.getElementById('btn-reset');
        if (!val || !inc || !dec || !reset) return "ไม่พบปุ่มควบคุม Counter";
        inc.click();
        inc.click();
        if (val.textContent !== "2") return "กด Increase 2 ครั้ง ตัวเลขต้องเป็น 2";
        dec.click();
        dec.click();
        dec.click();
        if (val.textContent !== "-1") return "กด Decrease จนติดลบ ตัวเลขต้องเป็น -1";
        reset.click();
        if (val.textContent !== "0") return "กด Reset ตัวเลขต้องกลับมาเป็น 0";
        return true;
      },
      hints: [
        "if (count > 0) valueEl.style.color = '#10b981';",
        "else if (count < 0) valueEl.style.color = '#ef4444';",
        "else valueEl.style.color = '#334155';"
      ]
    },

    {
      id: "project-todo-list",
      title: "โปรเจกต์ 3: Full Todo List (Add, Check, Delete)",
      category: "ภารกิจโปรเจกต์ (Slide 2: P40)",
      difficulty: "Medium",
      points: 120,
      description: `สร้างระบบจัดการรายการงานที่ต้องทำ (Todo list) ครบวงจร ตามโจทย์ในสไลด์ \`ch4 JavaScript_2.pdf\` หน้า 40
      
**ฟังก์ชันการทำงาน:**
1. **Add task:** พิมพ์ในกล่องข้อความแล้วกดปุ่ม "เพิ่ม" เพื่องานใหม่ลงใน List
2. **Check task:** คลิกที่ตัวข้อความเพื่อขีดฆ่า (Strike-through) ทำเครื่องหมายว่าเสร็จแล้ว
3. **Delete task:** มีปุ่มกากบาท \`✕\` ท้ายแต่ละรายการ เมื่อคลิกแล้วจะลบรายการนั้นออกจาก DOM ทันที`,
      starterHtml: `<div class="todo-app">
  <h2>My Task Manager</h2>
  <div class="add-bar">
    <input type="text" id="task-input" placeholder="สิ่งที่ต้องทำ...">
    <button id="add-task-btn">เพิ่มงาน</button>
  </div>
  <ul id="task-list"></ul>
</div>`,
      starterCss: `body { font-family: sans-serif; padding: 30px; background: #f8fafc; }
.todo-app { max-width: 400px; margin: 0 auto; background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
.add-bar { display: flex; gap: 8px; margin-bottom: 20px; }
input { flex: 1; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; }
button { padding: 10px 18px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }
ul { list-style: none; padding: 0; margin: 0; }
li { display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #f1f5f9; border-radius: 6px; margin-bottom: 8px; cursor: pointer; }
li.completed { text-decoration: line-through; opacity: 0.6; background: #e2e8f0; }
.del-btn { background: #ef4444; color: white; border: none; border-radius: 4px; padding: 4px 8px; cursor: pointer; }`,
      starterJs: `// เขียนระบบจัดการ Todo List (เพิ่มงานใหม่, ขีดฆ่าเมื่อเสร็จ, ลบงาน) ทั้งหมดด้วยตนเอง
`,
      targetHtml: `<div class="todo-app">
  <h2>My Task Manager</h2>
  <div class="add-bar">
    <input type="text" id="task-input" placeholder="สิ่งที่ต้องทำ...">
    <button id="add-task-btn">เพิ่มงาน</button>
  </div>
  <ul id="task-list">
    <li><span>ทบทวนสไลด์ JS</span><button class="del-btn">✕</button></li>
  </ul>
</div>`,
      targetCss: `body { font-family: sans-serif; padding: 30px; background: #f8fafc; } .todo-app { max-width: 400px; margin: 0 auto; background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); } .add-bar { display: flex; gap: 8px; margin-bottom: 20px; } input { flex: 1; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; } button { padding: 10px 18px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; } ul { list-style: none; padding: 0; margin: 0; } li { display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #f1f5f9; border-radius: 6px; margin-bottom: 8px; cursor: pointer; } li.completed { text-decoration: line-through; opacity: 0.6; background: #e2e8f0; } .del-btn { background: #ef4444; color: white; border: none; border-radius: 4px; padding: 4px 8px; cursor: pointer; }`,
      targetJs: `const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;
  span.addEventListener("click", () => li.classList.toggle("completed"));
  
  const delBtn = document.createElement("button");
  delBtn.textContent = "✕";
  delBtn.className = "del-btn";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);`,
      validation: (doc) => {
        const input = doc.getElementById('task-input');
        const btn = doc.getElementById('add-task-btn');
        const list = doc.getElementById('task-list');
        if (!input || !btn || !list) return "ไม่พบคอมโพเนนต์ Todo App";
        input.value = "ทำการบ้าน JS";
        btn.click();
        if (list.children.length === 0) return "กดยืนยันแล้วต้องมีรายการงานเพิ่มขึ้นใน #task-list";
        return true;
      },
      hints: [
        "const li = document.createElement('li');",
        "li.addEventListener('click', () => li.classList.toggle('completed'));",
        "delBtn.addEventListener('click', () => li.remove());"
      ]
    },

    {
      id: "project-vote-storage",
      title: "โปรเจกต์ 4: Vote the Favorite with LocalStorage",
      category: "ภารกิจโปรเจกต์ (Slide 3: P26)",
      difficulty: "Hard",
      points: 150,
      description: `สร้างระบบลงคะแนนโหวตสิ่งที่ชื่นชอบ พร้อมบันทึกคะแนนลง \`localStorage\` ตามโจทย์ในสไลด์ \`ch4 JavaScript_3.pptx.pdf\` หน้า 26
      
**ข้อกำหนดการทำงาน:**
1. แสดงการ์ดตัวเลือก 3 รายการ (Option A, Option B, Option C) พร้อมแสดงคะแนนปัจจุบัน
2. เมื่อคลิกที่การ์ด ให้บวกคะแนนเพิ่มทีละ 1 และบันทึกค่าลงใน \`localStorage\` ทันที
3. เมื่อรีเฟรชหน้าเว็บ คะแนนโหวตต้องไม่หายไป โดยอ่านค่าจาก \`localStorage\` มาแสดง
4. มีปุ่ม **"Clear Vote to 0 0 0"** สำหรับล้างคะแนนทั้งหมดกลับเป็น 0`,
      starterHtml: `<div class="vote-arena">
  <h2>Vote Your Favorite Language</h2>
  <div class="vote-cards">
    <div class="card" id="card-js">
      <span class="icon">💛</span>
      <h3>JavaScript</h3>
      <div class="score" id="score-js">0</div>
      <button class="vote-btn" data-lang="js">โหวต JS</button>
    </div>
    <div class="card" id="card-py">
      <span class="icon">🐍</span>
      <h3>Python</h3>
      <div class="score" id="score-py">0</div>
      <button class="vote-btn" data-lang="py">โหวต Python</button>
    </div>
    <div class="card" id="card-go">
      <span class="icon">💙</span>
      <h3>Go</h3>
      <div class="score" id="score-go">0</div>
      <button class="vote-btn" data-lang="go">โหวต Go</button>
    </div>
  </div>
  <button id="btn-clear-votes">Clear Vote to 0 0 0</button>
</div>`,
      starterCss: `body { font-family: sans-serif; padding: 30px; background: #0f172a; color: white; text-align: center; }
.vote-arena { max-width: 600px; margin: 0 auto; }
.vote-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 30px 0; }
.card { background: #1e293b; padding: 20px; border-radius: 12px; border: 1px solid #334155; }
.icon { font-size: 40px; display: block; margin-bottom: 8px; }
.score { font-size: 32px; font-weight: 800; color: #38bdf8; margin: 12px 0; }
.vote-btn { background: #0284c7; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; width: 100%; }
#btn-clear-votes { background: #ef4444; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; cursor: pointer; }`,
      starterJs: `// เขียนระบบโหวตภาษาโปรแกรมมิ่งและการบันทึกคะแนนลงใน localStorage ด้วยตนเอง
`,
      targetHtml: `<div class="vote-arena">
  <h2>Vote Your Favorite Language</h2>
  <div class="vote-cards">
    <div class="card" id="card-js"><span class="icon">💛</span><h3>JavaScript</h3><div class="score" id="score-js">1</div><button class="vote-btn" data-lang="js">โหวต JS</button></div>
    <div class="card" id="card-py"><span class="icon">🐍</span><h3>Python</h3><div class="score" id="score-py">0</div><button class="vote-btn" data-lang="py">โหวต Python</button></div>
    <div class="card" id="card-go"><span class="icon">💙</span><h3>Go</h3><div class="score" id="score-go">0</div><button class="vote-btn" data-lang="go">โหวต Go</button></div>
  </div>
  <button id="btn-clear-votes">Clear Vote to 0 0 0</button>
</div>`,
      targetCss: `body { font-family: sans-serif; padding: 30px; background: #0f172a; color: white; text-align: center; } .vote-arena { max-width: 600px; margin: 0 auto; } .vote-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 30px 0; } .card { background: #1e293b; padding: 20px; border-radius: 12px; border: 1px solid #334155; } .icon { font-size: 40px; display: block; margin-bottom: 8px; } .score { font-size: 32px; font-weight: 800; color: #38bdf8; margin: 12px 0; } .vote-btn { background: #0284c7; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; width: 100%; } #btn-clear-votes { background: #ef4444; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: bold; cursor: pointer; }`,
      targetJs: `let votes = JSON.parse(localStorage.getItem("app_votes")) || { js: 0, py: 0, go: 0 };
function renderVotes() {
  document.getElementById("score-js").textContent = votes.js;
  document.getElementById("score-py").textContent = votes.py;
  document.getElementById("score-go").textContent = votes.go;
}
renderVotes();

document.querySelectorAll(".vote-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    votes[lang]++;
    localStorage.setItem("app_votes", JSON.stringify(votes));
    renderVotes();
  });
});

document.getElementById("btn-clear-votes").addEventListener("click", () => {
  votes = { js: 0, py: 0, go: 0 };
  localStorage.setItem("app_votes", JSON.stringify(votes));
  renderVotes();
});`,
      validation: (doc) => {
        const btnJs = doc.querySelector('.vote-btn[data-lang="js"]');
        const clearBtn = doc.getElementById('btn-clear-votes');
        const scoreJs = doc.getElementById('score-js');
        if (!btnJs || !clearBtn || !scoreJs) return "ไม่พบปุ่มโหวตหรือตัวนับคะแนน";
        btnJs.click();
        if (scoreJs.textContent === "0") return "เมื่อกดโหวตแล้ว คะแนนของ JS ต้องเพิ่มขึ้น";
        clearBtn.click();
        if (scoreJs.textContent !== "0") return "เมื่อกด Clear Vote คะแนนต้องกลับมาเป็น 0";
        return true;
      },
      hints: [
        "votes[lang]++;",
        "localStorage.setItem('app_votes', JSON.stringify(votes));",
        "renderVotes();"
      ]
    }
  ],

  // ==========================================
  // ข้อสอบปฏิบัติการเชิงประยุกต์ (Applied Full-Stack Practical Exams)
  // ประยุกต์ใช้ HTML + CSS + JavaScript ร่วมกันในการสร้างแอปพลิเคชันจริง
  // ==========================================
  appliedExams: [
    {
      id: "exam-ecommerce-cart",
      title: "ข้อสอบปฏิบัติการที่ 1: ตะกร้าสินค้า E-Commerce & โค้ดส่วนลด",
      category: "ข้อสอบปฏิบัติการเชิงประยุกต์",
      description: `ยินดีต้อนรับสู่ข้อสอบปฏิบัติการเชิงประยุกต์ชุดที่ 1! ในข้อสอบนี้ คุณต้องผสานการเขียน **HTML, CSS, และ JavaScript** เข้าด้วยกัน เพื่อสร้างโมดูลตะกร้าสินค้าออนไลน์สำหรับร้านค้าจริง

**ข้อกำหนดทางเทคนิค (Specifications):**
1. **HTML:**
   - โครงสร้างสินค้าในตะกร้าอย่างน้อย 2 รายการ แต่ละรายการเป็นคลาส \`.cart-item\` ที่ระบุ \`data-price\` (เช่น 350 และ 120)
   - แต่ละรายการต้องมีปุ่มลดจำนวน \`.btn-qty-minus\`, สแปนแสดงจำนวน \`.item-qty\` (เริ่มต้นคือ 1), และปุ่มเพิ่มจำนวน \`.btn-qty-plus\`
   - มีช่องกรอกคูปอง \`<input id="coupon-input" placeholder="...">\` และปุ่ม \`<button id="btn-apply-coupon">ใช้โค้ด</button>\`
   - ส่วนสรุปราคาต้องมี \`<span id="subtotal">0</span>\`, \`<span id="discount">0</span>\`, และ \`<span id="grand-total">0</span>\`
2. **CSS:**
   - จัดเลย์เอาต์การ์ดตะกร้าสินค้าให้สวยงาม กึ่งกลางหน้าจอ พร้อมขอบมนและเงา Card Shadow
   - จัดแถวรายการสินค้าแบบ Flexbox ให้ชื่อสินค้า ปุ่มจำนวน (+/-) และราคาอยู่เป็นระเบียบ
3. **JavaScript:**
   - เมื่อกด \`.btn-qty-plus\` ให้เพิ่มจำนวนชิ้นของสินค้านั้นทีละ 1
   - เมื่อกด \`.btn-qty-minus\` ให้ลดจำนวนชิ้น (แต่ต้องไม่น้อยกว่า 1)
   - ฟังก์ชันคำนวณราคายอดรวม (Subtotal) = ผลรวมของ (จำนวนชิ้น × ราคาสินค้าแต่ละชิ้น)
   - เมื่อกดปุ่ม \`#btn-apply-coupon\`: หากกรอกโค้ด \`"SAVE50"\` ให้หักส่วนลด 50 บาท (Discount = 50) และอัปเดต \`#discount\`
   - ยอดรวมสุทธิ Grand Total = Subtotal - Discount (ไม่ต่ำกว่า 0) และอัปเดต \`#grand-total\``,
      difficulty: "Intermediate",
      points: 200,
      xp: 200,
      starterHtml: `<!-- 🛒 เขียนโครงสร้าง HTML สำหรับตะกร้าสินค้าตามข้อกำหนดในโจทย์ -->
`,
      starterCss: `/* ==========================================
   🎨 Color Presets & Palette (พรีเซ็ตสีสำหรับใช้งาน)
   ========================================== */
:root {
  --bg-page: #f1f5f9;
  --card-bg: #ffffff;
  --text-main: #0f172a;
  --text-muted: #64748b;
  --primary: #0284c7;
  --primary-hover: #0369a1;
  --success: #059669;
  --border: #e2e8f0;
}

/* เขียนสไตล์ CSS ตะกร้าสินค้าของคุณต่อจากนี้ */
`,
      starterJs: `// เขียนโค้ดระบบตะกร้าสินค้าและการคำนวณราคาทั้งหมดด้วยตนเองตามข้อกำหนดในโจทย์
`,
      targetHtml: `<div class="cart-container">
  <h2>🛒 ตะกร้าสินค้าของฉัน</h2>
  <div class="cart-list">
    <div class="cart-item" data-price="350">
      <div class="item-info">
        <h4>หูฟังไร้สาย Wireless Pro</h4>
        <span class="unit-price">฿350 / ชิ้น</span>
      </div>
      <div class="qty-control">
        <button class="btn-qty-minus">-</button>
        <span class="item-qty">1</span>
        <button class="btn-qty-plus">+</button>
      </div>
      <span class="item-subtotal">฿350</span>
    </div>
    <div class="cart-item" data-price="120">
      <div class="item-info">
        <h4>สายชาร์จ Fast Charge Type-C</h4>
        <span class="unit-price">฿120 / ชิ้น</span>
      </div>
      <div class="qty-control">
        <button class="btn-qty-minus">-</button>
        <span class="item-qty">1</span>
        <button class="btn-qty-plus">+</button>
      </div>
      <span class="item-subtotal">฿120</span>
    </div>
  </div>
  <div class="coupon-section">
    <input type="text" id="coupon-input" placeholder="ใส่โค้ด SAVE50 รับส่วนลด">
    <button id="btn-apply-coupon">ใช้โค้ด</button>
  </div>
  <div class="cart-summary">
    <div class="summary-row">
      <span>ยอดรวมสินค้า:</span>
      <span>฿<span id="subtotal">470</span></span>
    </div>
    <div class="summary-row text-emerald">
      <span>ส่วนลด:</span>
      <span>-฿<span id="discount">0</span></span>
    </div>
    <div class="summary-row total-row">
      <span>ยอดชำระสุทธิ:</span>
      <span>฿<span id="grand-total">470</span></span>
    </div>
  </div>
</div>`,
      targetCss: `body { font-family: 'Prompt', sans-serif; background: #f1f5f9; padding: 24px; } .cart-container { max-width: 480px; margin: 0 auto; background: #ffffff; padding: 24px; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08); } .cart-item { display: flex; align-items: center; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid #e2e8f0; } .qty-control { display: flex; align-items: center; gap: 8px; } .qty-control button { width: 28px; height: 28px; border-radius: 6px; border: 1px solid #cbd5e1; background: #f8fafc; cursor: pointer; font-weight: bold; } .coupon-section { display: flex; gap: 8px; margin: 18px 0; } .coupon-section input { flex: 1; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 8px; } .coupon-section button { padding: 8px 16px; background: #0284c7; color: white; border: none; border-radius: 8px; cursor: pointer; } .cart-summary { background: #f8fafc; padding: 16px; border-radius: 12px; } .summary-row { display: flex; justify-content: space-between; margin-bottom: 8px; } .total-row { font-size: 1.15rem; font-weight: bold; border-top: 1px solid #cbd5e1; padding-top: 10px; } .text-emerald { color: #059669; }`,
      targetJs: `let discountAmount = 0;

function updateTotals() {
  let subtotal = 0;
  const items = document.querySelectorAll(".cart-item");
  
  items.forEach(item => {
    const price = parseFloat(item.getAttribute("data-price")) || 0;
    const qtySpan = item.querySelector(".item-qty");
    const subSpan = item.querySelector(".item-subtotal");
    const qty = parseInt(qtySpan.textContent) || 1;
    const itemTotal = price * qty;
    subtotal += itemTotal;
    if (subSpan) subSpan.textContent = "฿" + itemTotal;
  });

  const grandTotal = Math.max(0, subtotal - discountAmount);

  const subtotalEl = document.getElementById("subtotal");
  const discountEl = document.getElementById("discount");
  const grandTotalEl = document.getElementById("grand-total");

  if (subtotalEl) subtotalEl.textContent = subtotal;
  if (discountEl) discountEl.textContent = discountAmount;
  if (grandTotalEl) grandTotalEl.textContent = grandTotal;
}

document.querySelectorAll(".cart-item").forEach(item => {
  const plusBtn = item.querySelector(".btn-qty-plus");
  const minusBtn = item.querySelector(".btn-qty-minus");
  const qtySpan = item.querySelector(".item-qty");

  if (plusBtn) {
    plusBtn.addEventListener("click", () => {
      let q = parseInt(qtySpan.textContent) || 1;
      qtySpan.textContent = q + 1;
      updateTotals();
    });
  }

  if (minusBtn) {
    minusBtn.addEventListener("click", () => {
      let q = parseInt(qtySpan.textContent) || 1;
      if (q > 1) {
        qtySpan.textContent = q - 1;
        updateTotals();
      }
    });
  }
});

const applyBtn = document.getElementById("btn-apply-coupon");
const couponInput = document.getElementById("coupon-input");

if (applyBtn && couponInput) {
  applyBtn.addEventListener("click", () => {
    const code = couponInput.value.trim().toUpperCase();
    if (code === "SAVE50") {
      discountAmount = 50;
    } else {
      discountAmount = 0;
    }
    updateTotals();
  });
}

updateTotals();`,
      validation: (doc) => {
        const items = doc.querySelectorAll('.cart-item');
        if (items.length < 2) return "ต้องมีรายการสินค้าอย่างน้อย 2 รายการ (.cart-item)";
        const plusBtn = items[0].querySelector('.btn-qty-plus');
        const minusBtn = items[0].querySelector('.btn-qty-minus');
        const qtySpan = items[0].querySelector('.item-qty');
        const subtotalEl = doc.getElementById('subtotal');
        const discountEl = doc.getElementById('discount');
        const grandTotalEl = doc.getElementById('grand-total');
        const couponInput = doc.getElementById('coupon-input');
        const applyBtn = doc.getElementById('btn-apply-coupon');

        if (!plusBtn || !minusBtn || !qtySpan) return "ต้องมีปุ่ม .btn-qty-plus, .btn-qty-minus และสแปน .item-qty";
        if (!subtotalEl || !discountEl || !grandTotalEl) return "ต้องมีไอดี #subtotal, #discount และ #grand-total ในส่วนสรุปยอด";
        if (!couponInput || !applyBtn) return "ต้องมีช่อง #coupon-input และปุ่ม #btn-apply-coupon";

        const initialSubtotal = parseFloat(subtotalEl.textContent) || 0;
        const initialQty = parseInt(qtySpan.textContent) || 1;
        plusBtn.click();
        const afterPlusQty = parseInt(qtySpan.textContent) || 1;
        const afterPlusSub = parseFloat(subtotalEl.textContent) || 0;
        if (afterPlusQty !== initialQty + 1) return "เมื่อคลิก .btn-qty-plus จำนวนชิ้นต้องเพิ่มขึ้น 1";
        if (afterPlusSub <= initialSubtotal) return "เมื่อเพิ่มจำนวนชิ้น ยอดรวม subtotal ต้องเพิ่มขึ้นตามราคา";

        couponInput.value = "SAVE50";
        applyBtn.click();
        const disc = parseFloat(discountEl.textContent) || 0;
        const grand = parseFloat(grandTotalEl.textContent) || 0;
        if (disc !== 50) return "เมื่อกรอกคูปอง SAVE50 และกดใช้โค้ด #discount ต้องแสดง 50";
        if (grand !== (parseFloat(subtotalEl.textContent) - 50)) return "ยอดสุทธิ #grand-total ต้องเท่ากับ #subtotal ลบส่วนลด #discount";

        return true;
      },
      hints: [
        "วนลูปคำนวณราคาสินค้าแต่ละชิ้นจากราคาและจำนวน แล้วนำมารวมกันเป็นยอดรวมย่อย (Subtotal)",
        "เมื่อมีการกดปุ่มบวกหรือลบ ให้เปลี่ยนค่าตัวเลขจำนวนสินค้าและเรียกฟังก์ชันคำนวณราคาใหม่",
        "เมื่อกดใช้โค้ดส่วนลด ให้ตรวจสอบข้อความที่ผู้ใช้กรอก หากตรงตามเงื่อนไขให้หักลบออกจากยอดรวมสุทธิ"
      ]
    },
    {
      id: "exam-live-badge-generator",
      title: "ข้อสอบปฏิบัติการที่ 2: ระบบสร้างบัตรสัมมนา Live Conference Pass",
      category: "ข้อสอบปฏิบัติการเชิงประยุกต์",
      description: `ในข้อสอบชุดนี้ คุณจะได้สร้างระบบฟอร์มออกบัตรผู้เข้าร่วมงานสัมมนาเทคโนโลยี (Tech Summit Badge) ที่แสดงผลแบบ Live Preview 2 ทางทันทีเมื่อผู้ใช้พิมพ์ข้อมูล พร้อมระบบเปลี่ยนธีมสีการ์ดผ่าน \`<select>\`

**ข้อกำหนดทางเทคนิค (Specifications):**
1. **HTML:**
   - ฝั่งฟอร์ม:
     - ช่องพิมพ์ชื่อ \`<input id="input-name" placeholder="...">\`
     - ช่องพิมพ์ตำแหน่ง \`<input id="input-role" placeholder="...">\`
     - ตัวเลือกธีมสี \`<select id="select-theme">\`: มี options \`theme-blue\`, \`theme-emerald\`, \`theme-purple\`
     - ปุ่มรีเซ็ต \`<button id="btn-reset-pass" type="button">รีเซ็ตข้อมูล</button>\`
   - ฝั่งบัตรพรีวิว:
     - การ์ดบัตร \`<div id="pass-card" class="theme-blue">\`
     - ชื่อผู้ถือบัตร \`<h3 id="preview-name">YOUR NAME</h3>\`
     - ตำแหน่งงาน \`<p id="preview-role">DEVELOPER</p>\`
2. **CSS:**
   - ออกแบบการ์ดบัตรสัมมนา Pass Card ให้โมเดิร์น
   - กำหนดคลาสธีมสี 3 รูปแบบ: \`.theme-blue\`, \`.theme-emerald\`, \`.theme-purple\`
3. **JavaScript:**
   - ดักจับ Event \`input\` จาก \`#input-name\`: อัปเดต \`#preview-name\` แบบเรียลไทม์ (ถ้าว่างแสดง "YOUR NAME")
   - ดักจับ Event \`input\` จาก \`#input-role\`: อัปเดต \`#preview-role\` แบบเรียลไทม์ (ถ้าว่างแสดง "DEVELOPER")
   - ดักจับ Event \`change\` จาก \`#select-theme\`: อัปเดต class ของ \`#pass-card\` ตามธีมที่เลือก
   - เมื่อคลิก \`#btn-reset-pass\`: ล้างฟอร์มและคืนค่าเริ่มต้นของบัตร`,
      difficulty: "Intermediate",
      points: 200,
      xp: 200,
      starterHtml: `<!-- 🎫 สร้างโครงสร้าง HTML สำหรับฟอร์มและบัตรพรีวิว Tech Summit Pass ตามข้อกำหนด -->
`,
      starterCss: `/* ==========================================
   🎨 Color Presets & Gradients (พรีเซ็ตสีและธีมบัตร)
   ========================================== */
:root {
  --bg-page: #0f172a;
  --panel-bg: #1e293b;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --border: #334155;
  --btn-reset: #475569;
}

/* พรีเซ็ต Gradient สำหรับคลาสธีมของบัตรตามโจทย์กำหนด */
.theme-blue {
  background: linear-gradient(135deg, #1e40af, #3b82f6);
  border: 1px solid #60a5fa;
}
.theme-emerald {
  background: linear-gradient(135deg, #065f46, #10b981);
  border: 1px solid #34d399;
}
.theme-purple {
  background: linear-gradient(135deg, #581c87, #a855f7);
  border: 1px solid #c084fc;
}

/* เขียนสไตล์ CSS จัดเลย์เอาต์ฟอร์มและการ์ดของคุณต่อจากนี้ */
`,
      starterJs: `// เขียนโค้ดระบบสร้างบัตรสัมมนาและการอัปเดตแบบเรียลไทม์ทั้งหมดด้วยตนเอง
`,
      targetHtml: `<div class="badge-app">
  <div class="form-pane">
    <h2>🎫 สร้างบัตร Tech Summit Pass</h2>
    <form id="pass-form">
      <div class="form-group">
        <label>ชื่อ-นามสกุล:</label>
        <input type="text" id="input-name" placeholder="เช่น Somchai Tech">
      </div>
      <div class="form-group">
        <label>ตำแหน่ง / บทบาท:</label>
        <input type="text" id="input-role" placeholder="เช่น Full-Stack Developer">
      </div>
      <div class="form-group">
        <label>ธีมสีของบัตร:</label>
        <select id="select-theme">
          <option value="theme-blue">Blue Ocean</option>
          <option value="theme-emerald">Emerald Forest</option>
          <option value="theme-purple">Cyber Purple</option>
        </select>
      </div>
      <button type="button" id="btn-reset-pass">รีเซ็ตข้อมูล</button>
    </form>
  </div>
  <div class="preview-pane">
    <div id="pass-card" class="theme-blue">
      <div class="badge-header">
        <span>TECH SUMMIT 2026</span>
        <span class="badge-vip">VIP ACCESS</span>
      </div>
      <div class="badge-body">
        <div class="avatar-box">👤</div>
        <h3 id="preview-name">YOUR NAME</h3>
        <p id="preview-role">DEVELOPER</p>
      </div>
      <div class="badge-footer">
        <span id="preview-code">#DEV-2026</span>
        <span class="barcode">||||||||||||||||</span>
      </div>
    </div>
  </div>
</div>`,
      targetCss: `body { font-family: 'Prompt', sans-serif; background: #0f172a; color: #f8fafc; padding: 30px; } .badge-app { max-width: 760px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 28px; background: #1e293b; padding: 28px; border-radius: 16px; } .form-group { margin-bottom: 14px; } label { display: block; font-size: 13px; margin-bottom: 6px; color: #94a3b8; } input, select { width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #334155; background: #0f172a; color: white; box-sizing: border-box; } #btn-reset-pass { width: 100%; padding: 10px; margin-top: 10px; background: #475569; color: white; border: none; border-radius: 8px; cursor: pointer; } #pass-card { padding: 24px; border-radius: 16px; color: white; min-height: 240px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 10px 25px rgba(0,0,0,0.4); } .theme-blue { background: linear-gradient(135deg, #1e40af, #3b82f6); border: 1px solid #60a5fa; } .theme-emerald { background: linear-gradient(135deg, #065f46, #10b981); border: 1px solid #34d399; } .theme-purple { background: linear-gradient(135deg, #581c87, #a855f7); border: 1px solid #c084fc; } .avatar-box { font-size: 40px; margin: 10px 0; } .badge-header, .badge-footer { display: flex; justify-content: space-between; font-size: 11px; opacity: 0.8; }`,
      targetJs: `const inputName = document.getElementById("input-name");
const inputRole = document.getElementById("input-role");
const selectTheme = document.getElementById("select-theme");
const btnReset = document.getElementById("btn-reset-pass");

const previewName = document.getElementById("preview-name");
const previewRole = document.getElementById("preview-role");
const passCard = document.getElementById("pass-card");

if (inputName && previewName) {
  inputName.addEventListener("input", () => {
    previewName.textContent = inputName.value.trim() || "YOUR NAME";
  });
}

if (inputRole && previewRole) {
  inputRole.addEventListener("input", () => {
    previewRole.textContent = inputRole.value.trim() || "DEVELOPER";
  });
}

if (selectTheme && passCard) {
  selectTheme.addEventListener("change", () => {
    passCard.className = selectTheme.value;
  });
}

if (btnReset) {
  btnReset.addEventListener("click", () => {
    if (inputName) inputName.value = "";
    if (inputRole) inputRole.value = "";
    if (selectTheme) selectTheme.value = "theme-blue";
    if (previewName) previewName.textContent = "YOUR NAME";
    if (previewRole) previewRole.textContent = "DEVELOPER";
    if (passCard) passCard.className = "theme-blue";
  });
}`,
      validation: (doc) => {
        const inputName = doc.getElementById("input-name");
        const inputRole = doc.getElementById("input-role");
        const selectTheme = doc.getElementById("select-theme");
        const previewName = doc.getElementById("preview-name");
        const previewRole = doc.getElementById("preview-role");
        const passCard = doc.getElementById("pass-card");
        const btnReset = doc.getElementById("btn-reset-pass");

        if (!inputName || !inputRole || !selectTheme || !previewName || !previewRole || !passCard || !btnReset) {
          return "ไม่พบ element ฟอร์มหรือบัตรพรีวิวที่กำหนด";
        }

        const Evt = doc.defaultView?.Event || Event;
        inputName.value = "Jane Doe";
        inputName.dispatchEvent(new Evt("input", { bubbles: true }));
        if (previewName.textContent.trim() !== "Jane Doe") {
          return "เมื่อพิมพ์ชื่อใน #input-name ข้อความบน #preview-name ต้องเปลี่ยนตามแบบเรียลไทม์";
        }

        selectTheme.value = "theme-emerald";
        selectTheme.dispatchEvent(new Evt("change", { bubbles: true }));
        if (!passCard.classList.contains("theme-emerald")) {
          return "เมื่อเปลี่ยน #select-theme เป็น 'theme-emerald' ตัวการ์ด #pass-card ต้องมีคลาสธีมนั้น";
        }

        btnReset.click();
        if (previewName.textContent.trim() !== "YOUR NAME") {
          return "เมื่อกดปุ่มรีเซ็ต #btn-reset-pass ข้อความบัตรต้องกลับเป็นค่าเริ่มต้น 'YOUR NAME'";
        }

        return true;
      },
      hints: [
        "ดักจับ event 'input' บนช่องกรอกข้อความ เพื่อนำค่าไปอัปเดตบนบัตรตัวอย่างแบบเรียลไทม์",
        "ดักจับ event 'change' บนตัวเลือกธีม แล้วนำค่าที่เลือกไปกำหนดเป็น class ให้กับกล่องบัตร",
        "เมื่อกดปุ่มรีเซ็ต ให้คืนค่าข้อความบนบัตรและตัวเลือกทั้งหมดกลับเป็นค่าเริ่มต้น"
      ]
    },
    {
      id: "exam-memory-card-game",
      title: "ข้อสอบปฏิบัติการที่ 3: มินิเกมจับคู่ไพ่ Memory Match (สไลด์ 3 หน้า 28)",
      category: "ข้อสอบปฏิบัติการเชิงประยุกต์",
      description: `ข้อสอบชุดนี้สร้างขึ้นเพื่อฝึกทักษะการสร้างเกมจับคู่ไพ่ **Memory Match Game (กระดาน 4x4 รวม 16 ใบ / 8 คู่)** โดยผู้สอบต้องพัฒนาเกมจับคู่ไพ่ที่มีการพลิกไพ่ด้วย CSS Flip และควบคุมตรรกะการจับคู่ด้วย JavaScript

**ข้อกำหนดทางเทคนิค (Specifications):**
1. **HTML:**
   - ส่วนสถิติ:
     - ตัวนับรอบที่เปิด \`<strong id="moves-count">0</strong>\`
     - ตัวนับคู่ที่จับถูก \`<strong id="matched-count">0</strong>\`
     - ปุ่มเริ่มเกมใหม่ \`<button id="btn-restart-game">เริ่มเกมใหม่</button>\`
   - กระดานไพ่: กล่อง \`.card-grid\` บรรจุไพ่ 16 ใบ (4x4) แต่ละใบมี class \`.memory-card\` และมี attribute \`data-card\` สำหรับระบุประเภท 8 คู่ (เช่น \`rocket\`, \`bolt\`, \`planet\`, \`robot\`, \`gem\`, \`alien\`, \`fire\`, \`star\`)
   - ด้านในไพ่แต่ละใบมี \`<span class="front-emoji">\` (แสดงรูปอิโมจิ) และ \`<span class="back-mark">?</span>\`
2. **CSS:**
   - จัดวางตารางไพ่แบบ 4x4 (\`grid-template-columns: repeat(4, 1fr)\`)
   - ปกติซ่อน \`.front-emoji\` และแสดง \`.back-mark\`
   - เมื่อมีคลาส \`.flipped\` ให้แสดงหน้าไพ่ (อิโมจิ)
   - เมื่อมีคลาส \`.matched\` ให้แสดงสถานะจับคู่สำเร็จ (เช่น กรอบสีเขียว)
3. **JavaScript:**
   - สุ่มสลับตำแหน่งไพ่ (Shuffle cards) ทั้งตอนเริ่มต้นและเมื่อกดเริ่มเกมใหม่ โดยสุ่มจัดลำดับ (เช่น สุ่มกำหนดค่า \`style.order\` ให้การ์ดแต่ละใบ \`card.style.order = Math.floor(Math.random() * 16)\` หรือสลับลำดับใน DOM)
   - เมื่อคลิก \`.memory-card\` ให้เพิ่มคลาส \`.flipped\`
   - เมื่อเปิดครบ 2 ใบใน 1 รอบ:
     - เพิ่มตัวนับ \`#moves-count\` ขึ้น 1
     - ตรวจสอบว่า \`data-card\` ตรงกันหรือไม่:
       - ถ้าตรงกัน: ใส่คลาส \`.matched\` ให้ทั้งสองใบ และเพิ่ม \`#matched-count\` ขึ้น 1
       - ถ้าไม่ตรงกัน: ใช้ \`setTimeout\` หน่วงเวลาสักครู่ (เช่น 600ms) แล้วเอาคลาส \`.flipped\` ออกจากทั้งสองใบ
   - เมื่อกดปุ่ม \`#btn-restart-game\`: รีเซ็ตคะแนนและสถิติเป็น 0, ลบคลาส \`.flipped\`, \`.matched\` ออกจากทุกใบ และสุ่มสลับตำแหน่งไพ่ใหม่ (shuffle)`,
      difficulty: "Advanced",
      points: 250,
      xp: 250,
      starterHtml: `<!-- 🧠 เขียนโครงสร้าง HTML สำหรับแผงสถิติ (#moves-count, #matched-count, #btn-restart-game) และกระดานไพ่ 4x4 รวม 16 ใบ (.memory-card) ตามข้อกำหนด -->
`,
      starterCss: `/* ==========================================
   🎨 Color Presets & Card Palette (พรีเซ็ตสีสำหรับการ์ด)
   ========================================== */
:root {
  --bg-page: #0f172a;
  --panel-bg: #1e293b;
  --card-back: #334155;
  --card-flipped: #1e40af;
  --card-matched: #065f46;
  --border-flipped: #60a5fa;
  --border-matched: #34d399;
  --text-main: #ffffff;
  --text-muted: #94a3b8;
  --btn-restart: #3b82f6;
}

/* เขียนสไตล์ CSS จัดวาง Grid และสถานะไพ่ (.flipped, .matched) ของคุณต่อจากนี้ */
`,
      starterJs: `// เขียนตรรกะเกมจับคู่ไพ่ การสุ่มสลับตำแหน่งไพ่ (shuffle) การตรวจคู่ และการนับสถิติทั้งหมดด้วยตนเอง
`,
      targetHtml: `<div class="game-wrapper">
  <h2>🧠 Memory Card Matcher (4x4)</h2>
  <div class="game-stats">
    <div>ครั้งที่เปิด: <strong id="moves-count">0</strong></div>
    <div>คู่ที่ตรงกัน: <strong id="matched-count">0</strong> / 8</div>
    <button id="btn-restart-game">เริ่มเกมใหม่</button>
  </div>
  <div class="card-grid">
    <div class="memory-card" data-card="rocket"><span class="front-emoji">🚀</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="bolt"><span class="front-emoji">⚡</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="planet"><span class="front-emoji">🪐</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="robot"><span class="front-emoji">🤖</span><span class="back-mark">?</span></div>

    <div class="memory-card" data-card="gem"><span class="front-emoji">💎</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="rocket"><span class="front-emoji">🚀</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="alien"><span class="front-emoji">👾</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="fire"><span class="front-emoji">🔥</span><span class="back-mark">?</span></div>

    <div class="memory-card" data-card="star"><span class="front-emoji">🌟</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="bolt"><span class="front-emoji">⚡</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="gem"><span class="front-emoji">💎</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="robot"><span class="front-emoji">🤖</span><span class="back-mark">?</span></div>

    <div class="memory-card" data-card="planet"><span class="front-emoji">🪐</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="alien"><span class="front-emoji">👾</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="star"><span class="front-emoji">🌟</span><span class="back-mark">?</span></div>
    <div class="memory-card" data-card="fire"><span class="front-emoji">🔥</span><span class="back-mark">?</span></div>
  </div>
</div>`,
      targetCss: `body { font-family: 'Prompt', sans-serif; background: #0f172a; color: white; padding: 24px; display: flex; justify-content: center; } .game-wrapper { background: #1e293b; padding: 24px; border-radius: 16px; width: 440px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.4); } .game-stats { display: flex; justify-content: space-between; align-items: center; margin: 14px 0 18px 0; font-size: 14px; } #btn-restart-game { padding: 6px 14px; background: #3b82f6; border: none; color: white; border-radius: 6px; cursor: pointer; font-weight: bold; } #btn-restart-game:hover { background: #2563eb; } .card-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; } .memory-card { height: 75px; background: #334155; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 28px; cursor: pointer; border: 2px solid transparent; user-select: none; transition: transform 0.2s, background 0.2s; } .memory-card:hover { transform: scale(1.03); background: #475569; } .memory-card .front-emoji { display: none; } .memory-card.flipped { background: #1e40af; border-color: #60a5fa; } .memory-card.flipped .front-emoji { display: inline; } .memory-card.flipped .back-mark { display: none; } .memory-card.matched { background: #065f46; border-color: #34d399; cursor: default; }`,
      targetJs: `let flippedCards = [];
let lockBoard = false;
let moves = 0;
let matches = 0;

const movesEl = document.getElementById("moves-count");
const matchesEl = document.getElementById("matched-count");
const cards = document.querySelectorAll(".memory-card");
const restartBtn = document.getElementById("btn-restart-game");

function shuffle() {
  cards.forEach(card => {
    const randomPos = Math.floor(Math.random() * cards.length);
    card.style.order = randomPos;
  });
}

function flipCard() {
  if (lockBoard) return;
  if (this.classList.contains("flipped")) return;

  this.classList.add("flipped");
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    moves++;
    if (movesEl) movesEl.textContent = moves;
    checkMatch();
  }
}

function checkMatch() {
  const [c1, c2] = flippedCards;
  const isMatch = c1.getAttribute("data-card") === c2.getAttribute("data-card");

  if (isMatch) {
    c1.classList.add("matched");
    c2.classList.add("matched");
    matches++;
    if (matchesEl) matchesEl.textContent = matches;
    flippedCards = [];
  } else {
    lockBoard = true;
    setTimeout(() => {
      c1.classList.remove("flipped");
      c2.classList.remove("flipped");
      flippedCards = [];
      lockBoard = false;
    }, 600);
  }
}

function restart() {
  flippedCards = [];
  lockBoard = false;
  moves = 0;
  matches = 0;
  if (movesEl) movesEl.textContent = "0";
  if (matchesEl) matchesEl.textContent = "0";
  cards.forEach(card => {
    card.classList.remove("flipped", "matched");
  });
  shuffle();
}

shuffle();
cards.forEach(c => c.addEventListener("click", flipCard));
if (restartBtn) restartBtn.addEventListener("click", restart);`,
      validation: (doc, css = "", js = "") => {
        const cards = doc.querySelectorAll('.memory-card');
        const movesEl = doc.getElementById('moves-count');
        const matchesEl = doc.getElementById('matched-count');
        const restartBtn = doc.getElementById('btn-restart-game');

        if (cards.length < 16) return "ต้องมีไพ่อย่างน้อย 16 ใบ (กระดาน 4x4) ที่มีคลาส .memory-card";
        if (!movesEl || !matchesEl || !restartBtn) return "ต้องมี #moves-count, #matched-count และ #btn-restart-game";

        const hasOrder = Array.from(cards).some(c => c.style.order !== '');
        const hasRandom = typeof js === 'string' && js.includes('Math.random');
        if (!hasOrder && !hasRandom && js !== '') {
          return "ต้องมีฟังก์ชันสุ่มสลับตำแหน่งไพ่ (Shuffle) เช่น การสุ่มกำหนด style.order ให้กับไพ่แต่ละใบ";
        }

        cards[0].click();
        if (!cards[0].classList.contains('flipped')) {
          return "เมื่อคลิกที่ไพ่ ไพ่ใบนั้นต้องได้รับคลาส .flipped";
        }

        restartBtn.click();
        if (cards[0].classList.contains('flipped')) {
          return "เมื่อกดปุ่มเริ่มใหม่ #btn-restart-game ไพ่ทุกใบต้องถูกปิดคลาส .flipped";
        }

        return true;
      },
      hints: [
        "สุ่มสลับตำแหน่งไพ่ (Shuffle) โดยวนลูปการ์ดแต่ละใบแล้วสุ่มลำดับ CSS เช่น card.style.order = Math.floor(Math.random() * 16) เมื่อเริ่มเกมและเมื่อกดปุ่มเริ่มใหม่",
        "จำสถานะไพ่ที่เปิดในรอบปัจจุบันเพื่อนำมาเปรียบเทียบว่ามีค่า data หรือสัญลักษณ์ตรงกันหรือไม่",
        "หากไพ่ทั้งสองใบตรงกัน ให้กำหนดสถานะจับคู่สำเร็จ (.matched) แต่หากไม่ตรงกัน ให้ใช้ setTimeout พลิกไพ่กลับ",
        "เมื่อกดปุ่มเริ่มใหม่ ให้รีเซ็ตสถิติ ปิดหน้าไพ่ทุกใบ และเรียกฟังก์ชันสุ่มสลับตำแหน่งไพ่ใหม่"
      ]
    },
    {
      id: "exam-finance-tracker",
      title: "ข้อสอบปฏิบัติการที่ 4: บัญชีรายรับ-รายจ่าย & กรองหมวดหมู่ (FinTech Tracker)",
      category: "ข้อสอบปฏิบัติการเชิงประยุกต์",
      description: `ข้อสอบชุดนี้เป็นการประยุกต์ใช้ **HTML form controls + Dynamic CSS Status Classes + JavaScript Array Methods & DOM Rendering** เพื่อสร้างระบบบันทึกการเงินรายรับ-รายจ่ายส่วนบุคคล พร้อมปุ่มตัวกรอง (Filter) แบบไร้รอยต่อ

**ข้อกำหนดทางเทคนิค (Specifications):**
1. **HTML:**
   - ฟอร์มบันทึกรายการ:
     - ช่องชื่อรายการ \`<input id="tx-title" placeholder="...">\`
     - ช่องจำนวนเงิน \`<input id="tx-amount" type="number" placeholder="...">\`
     - ตัวเลือกประเภท \`<select id="tx-type">\`: \`<option value="income">รายรับ (+)</option>\`, \`<option value="expense">รายจ่าย (-)</option>\`
     - ปุ่มบันทึก \`<button id="btn-add-tx">บันทึกรายการ</button>\`
   - แผงสรุปยอดเงิน:
     - เงินคงเหลือสุทธิ \`<span id="balance-total">0</span>\`
     - รายรับรวม \`<span id="total-income">0</span>\`
     - รายจ่ายรวม \`<span id="total-expense">0</span>\`
   - แถบปุ่มกรอง (Filter):
     - ปุ่ม \`<button class="filter-btn active" data-filter="all">ทั้งหมด</button>\`
     - ปุ่ม \`<button class="filter-btn" data-filter="income">รายรับ</button>\`
     - ปุ่ม \`<button class="filter-btn" data-filter="expense">รายจ่าย</button>\`
   - รายการประวัติ \`<ul id="tx-list"></ul>\`
2. **CSS:**
   - สไตล์การ์ดสรุปยอดเงิน (Balance Card) เด่นชัด
   - แถบสถานะสีเขียวสำหรับรายรับ (\`.income\`) และแถบสถานะสีแดงสำหรับรายจ่าย (\`.expense\`)
3. **JavaScript:**
   - บันทึกรายการลงใน Array เมื่อคลิก \`#btn-add-tx\`
   - คำนวณยอด Income รวม, Expense รวม, และ Balance = Income - Expense แล้วอัปเดตหน้าเว็บ
   - เมื่อกดปุ่มลบรายการ \`.btn-del-tx\`: ลบรายการนั้นและคำนวณยอดเงินใหม่ทันที
   - เมื่อคลิกปุ่มกรอง \`.filter-btn\`: กรองรายการใน \`#tx-list\` ให้แสดงตาม filter \`all\`, \`income\`, หรือ \`expense\``,
      difficulty: "Advanced",
      points: 250,
      xp: 250,
      starterHtml: `<!-- 💰 เขียนโครงสร้าง HTML สำหรับ Dashboard รายรับ-รายจ่าย, ฟอร์มบันทึก และประวัติรายการ (#balance-total, #total-income, #total-expense, #tx-list) ตามข้อกำหนด -->
`,
      starterCss: `/* ==========================================
   🎨 Color Presets (พรีเซ็ตสีสำหรับระบบการเงิน)
   ========================================== */
:root {
  --bg-page: #f8fafc;
  --card-bg: #ffffff;
  --text-main: #0f172a;
  --text-muted: #64748b;
  --income: #10b981;
  --expense: #ef4444;
  --primary: #2563eb;
  --primary-hover: #1d4ed8;
  --border: #cbd5e1;
}

/* สีขอบสถานะรายการสำหรับคลาส .income และ .expense */
.tx-item.income { border-left-color: var(--income); }
.tx-item.expense { border-left-color: var(--expense); }

/* เขียนสไตล์ CSS จัดเลย์เอาต์การ์ดและฟอร์มของคุณต่อจากนี้ */
`,
      starterJs: `// เขียนระบบบันทึกรายรับ-รายจ่าย คำนวณยอดคงเหลือ และการกรองหมวดหมู่ทั้งหมดด้วยตนเอง
`,
      targetHtml: `<div class="tracker-app">
  <h2>💰 เครื่องมือบันทึกรายรับ-รายจ่าย</h2>
  <div class="balance-card">
    <div class="sub-label">ยอดเงินคงเหลือสุทธิ</div>
    <div class="main-balance">฿<span id="balance-total">0</span></div>
    <div class="summary-split">
      <div class="income-box">
        <span>รายรับ (+)</span>
        <strong>฿<span id="total-income">0</span></strong>
      </div>
      <div class="expense-box">
        <span>รายจ่าย (-)</span>
        <strong>฿<span id="total-expense">0</span></strong>
      </div>
    </div>
  </div>
  <div class="form-card">
    <h3>เพิ่มรายการใหม่</h3>
    <div class="form-row">
      <input type="text" id="tx-title" placeholder="ชื่อรายการ เช่น เงินเดือน, ค่าอาหาร">
      <input type="number" id="tx-amount" placeholder="จำนวนเงิน">
    </div>
    <div class="form-row">
      <select id="tx-type">
        <option value="income">รายรับ (+)</option>
        <option value="expense">รายจ่าย (-)</option>
      </select>
      <button id="btn-add-tx">บันทึกรายการ</button>
    </div>
  </div>
  <div class="history-card">
    <div class="history-header">
      <h3>ประวัติรายการ</h3>
      <div class="filter-group">
        <button class="filter-btn active" data-filter="all">ทั้งหมด</button>
        <button class="filter-btn" data-filter="income">รายรับ</button>
        <button class="filter-btn" data-filter="expense">รายจ่าย</button>
      </div>
    </div>
    <ul id="tx-list"></ul>
  </div>
</div>`,
      targetCss: `body { font-family: 'Prompt', sans-serif; background: #f8fafc; padding: 24px; } .tracker-app { max-width: 480px; margin: 0 auto; } .balance-card { background: linear-gradient(135deg, #1e293b, #0f172a); color: white; padding: 24px; border-radius: 16px; text-align: center; margin-bottom: 20px; } .main-balance { font-size: 2rem; font-weight: bold; margin: 8px 0 16px 0; } .summary-split { display: flex; justify-content: space-around; border-top: 1px solid #334155; padding-top: 14px; } .income-box strong { color: #34d399; } .expense-box strong { color: #f87171; } .form-card, .history-card { background: white; padding: 20px; border-radius: 14px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); margin-bottom: 16px; } .form-row { display: flex; gap: 10px; margin-bottom: 10px; } input, select { flex: 1; padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px; } #btn-add-tx { padding: 10px 18px; background: #2563eb; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; } .history-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; } .filter-btn { padding: 4px 10px; border: 1px solid #cbd5e1; background: transparent; border-radius: 6px; cursor: pointer; font-size: 12px; } .filter-btn.active { background: #2563eb; color: white; border-color: #2563eb; } #tx-list { list-style: none; padding: 0; margin: 0; } .tx-item { display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; border-radius: 8px; background: #f1f5f9; margin-bottom: 8px; border-left: 4px solid #94a3b8; } .tx-item.income { border-left-color: #10b981; } .tx-item.expense { border-left-color: #ef4444; } .btn-del-tx { background: transparent; border: none; color: #ef4444; cursor: pointer; font-weight: bold; padding: 4px 8px; }`,
      targetJs: `let transactions = [];
let currentFilter = "all";

const titleInput = document.getElementById("tx-title");
const amountInput = document.getElementById("tx-amount");
const typeSelect = document.getElementById("tx-type");
const addBtn = document.getElementById("btn-add-tx");
const listEl = document.getElementById("tx-list");

const balanceEl = document.getElementById("balance-total");
const incomeEl = document.getElementById("total-income");
const expenseEl = document.getElementById("total-expense");

function updateCalculations() {
  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  if (incomeEl) incomeEl.textContent = totalIncome;
  if (expenseEl) expenseEl.textContent = totalExpense;
  if (balanceEl) balanceEl.textContent = balance;
}

function renderList() {
  if (!listEl) return;
  listEl.innerHTML = "";

  const filtered = transactions.filter(t => {
    if (currentFilter === "all") return true;
    return t.type === currentFilter;
  });

  filtered.forEach(t => {
    const li = document.createElement("li");
    li.className = "tx-item " + t.type;
    const sign = t.type === "income" ? "+" : "-";
    li.innerHTML = "<span>" + t.title + "</span><div><strong>" + sign + "฿" + t.amount + "</strong><button class='btn-del-tx' data-id='" + t.id + "'>✕</button></div>";

    const delBtn = li.querySelector(".btn-del-tx");
    delBtn.addEventListener("click", () => {
      transactions = transactions.filter(item => item.id !== t.id);
      updateCalculations();
      renderList();
    });

    listEl.appendChild(li);
  });
}

if (addBtn) {
  addBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (!title || isNaN(amount) || amount <= 0) return;

    transactions.push({
      id: Date.now(),
      title: title,
      amount: amount,
      type: typeSelect.value
    });

    titleInput.value = "";
    amountInput.value = "";

    updateCalculations();
    renderList();
  });
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.getAttribute("data-filter");
    renderList();
  });
});

updateCalculations();
renderList();`,
      validation: (doc) => {
        const titleInput = doc.getElementById('tx-title');
        const amountInput = doc.getElementById('tx-amount');
        const typeSelect = doc.getElementById('tx-type');
        const addBtn = doc.getElementById('btn-add-tx');
        const balanceEl = doc.getElementById('balance-total');
        const incomeEl = doc.getElementById('total-income');
        const expenseEl = doc.getElementById('total-expense');
        const listEl = doc.getElementById('tx-list');

        if (!titleInput || !amountInput || !typeSelect || !addBtn || !balanceEl || !incomeEl || !expenseEl || !listEl) {
          return "ไม่พบ element ที่จำเป็นของระบบบันทึกรายรับ-รายจ่าย";
        }

        const initIncome = parseFloat(incomeEl.textContent) || 0;
        const initExpense = parseFloat(expenseEl.textContent) || 0;
        const initBalance = parseFloat(balanceEl.textContent) || 0;

        titleInput.value = "เงินเดือน";
        amountInput.value = "30000";
        typeSelect.value = "income";
        addBtn.click();

        const afterIncome = parseFloat(incomeEl.textContent) || 0;
        const afterBalance = parseFloat(balanceEl.textContent) || 0;

        if (afterIncome !== initIncome + 30000 || afterBalance !== initBalance + 30000) {
          return "เมื่อเพิ่มรายรับ 30000 ยอด #total-income และ #balance-total ต้องเพิ่มขึ้น 30000";
        }

        titleInput.value = "ค่าเช่าห้อง";
        amountInput.value = "8000";
        typeSelect.value = "expense";
        addBtn.click();

        const afterExpense = parseFloat(expenseEl.textContent) || 0;
        const afterFinalBalance = parseFloat(balanceEl.textContent) || 0;

        if (afterExpense !== initExpense + 8000 || afterFinalBalance !== afterBalance - 8000) {
          return "เมื่อเพิ่มรายจ่าย 8000 ยอด #total-expense ต้องเพิ่ม 8000 และ #balance-total ต้องลดลง 8000";
        }

        return true;
      },
      hints: [
        "จัดเก็บรายการธุรกรรมใน Array เพื่อให้สามารถคำนวณและกรองข้อมูลได้ง่าย",
        "คำนวณยอดคงเหลือจาก ผลรวมรายรับ ทั้งหมด ลบด้วย ผลรวมรายจ่าย ทั้งหมด",
        "เมื่อผู้ใช้คลิกปุ่มตัวกรอง ให้อัปเดตสถานะตัวกรองปัจจุบันแล้วเรนเดอร์เฉพาะรายการที่ตรงเงื่อนไข"
      ]
    },
    {
      id: "exam-weather-api",
      title: "ข้อสอบปฏิบัติการที่ 5: พยากรณ์อากาศ & ดัชนี AQI (Fetch API & Async)",
      category: "ข้อสอบปฏิบัติการเชิงประยุกต์",
      description: `ในข้อสอบชุดนี้ คุณจะได้ใช้ **Fetch API & Async/Await** เพื่อพัฒนาแอปพลิเคชันพยากรณ์อากาศและคุณภาพอากาศ (Air Quality Index) ที่รองรับการค้นหาตามชื่อเมือง มีสถานะ Loading Spinner ระหว่างดึงข้อมูล จัดการข้อผิดพลาด (Error Handling) และบันทึกประวัติการค้นหาล่าสุดลงใน LocalStorage

**ข้อกำหนดทางเทคนิค (Specifications):**
1. **HTML:**
   - แถบค้นหา: ช่องพิมพ์ชื่อเมือง \`<input id="city-input" placeholder="...">\` และปุ่มค้นหา \`<button id="btn-search-weather">ค้นหา</button>\`
   - แถบชิปประวัติการค้นหาล่าสุด \`<div id="recent-cities"></div>\`
   - ตัวหมุนแสดงสถานะโหลด \`<div id="loading-spinner"></div>\` และกล่องข้อผิดพลาด \`<div id="weather-error"></div>\`
   - การ์ดแสดงผลสภาพอากาศ \`<div id="weather-card">\`:
     - ชื่อเมือง \`<h3 id="city-name">-</h3>\`
     - อุณหภูมิ \`<span id="temp-val">0</span>°C\`
     - สภาพอากาศ \`<div id="weather-desc">-</div>\`
     - ความชื้น \`<strong id="humidity-val">0</strong>%\`
     - ความเร็วลม \`<strong id="wind-val">0</strong> km/h\`
     - ป้ายระดับ AQI \`<span id="aqi-badge">AQI -</span>\`
2. **CSS:**
   - ดีไซน์การ์ดสภาพอากาศสไตล์ Glassmorphism
   - ป้าย AQI มีสีตามระดับ เช่น \`.aqi-good\`, \`.aqi-moderate\`
3. **JavaScript:**
   - ฟังก์ชัน \`fetchWeatherData(city)\` แบบ \`async/await\`
   - แสดง \`#loading-spinner\` ขณะกำลังดึงข้อมูล และซ่อนเมื่อดึงเสร็จ
   - หากค้นพบเมือง: อัปเดตข้อมูลบน \`#city-name\`, \`#temp-val\`, \`#weather-desc\`, \`#humidity-val\`, \`#wind-val\`, \`#aqi-badge\` และแสดง \`#weather-card\`
   - หากค้นหาไม่พบ: แสดงข้อความแจ้งเตือนใน \`#weather-error\`
   - บันทึกชื่อเมืองที่ค้นหาลงใน LocalStorage และแสดงเป็นชิปกดคลิกค้นหาซ้ำได้ทันที`,
      difficulty: "Advanced",
      points: 250,
      xp: 250,
      starterHtml: `<!-- ⛅ เขียนโครงสร้าง HTML สำหรับช่องค้นหา (#city-input), ปุ่ม (#btn-search-weather), สถานะ Loading/Error และการ์ดสภาพอากาศ (#weather-card) ตามข้อกำหนด -->
`,
      starterCss: `/* ==========================================
   🎨 Color Presets (พรีเซ็ตสีสำหรับสภาพอากาศ)
   ========================================== */
:root {
  --bg-page: #0f172a;
  --card-bg: #1e293b;
  --text-main: #ffffff;
  --text-muted: #94a3b8;
  --primary-btn: #0284c7;
  --spinner: #38bdf8;
  --aqi-good: #10b981;
  --aqi-mod: #f59e0b;
  --error-bg: rgba(239, 68, 68, 0.2);
  --error-border: #ef4444;
  --weather-grad: linear-gradient(135deg, #0284c7, #1e40af);
}

/* คลาสพรีเซ็ตสีสำหรับป้าย AQI */
.aqi-good { background: var(--aqi-good); color: white; }
.aqi-moderate { background: var(--aqi-mod); color: white; }

/* เขียนสไตล์ CSS สำหรับเลย์เอาต์การ์ดและผลลัพธ์สภาพอากาศต่อจากนี้ */
`,
      starterJs: `// เขียนโค้ดระบบค้นหาสภาพอากาศ การเชื่อมต่อ Fetch API และการจัดการสถานะทั้งหมดด้วยตนเอง
`,
      targetHtml: `<div class="weather-app">
  <h2>🌦️ Live Weather & AQI Hub</h2>
  <div class="search-bar">
    <input type="text" id="city-input" placeholder="พิมพ์ชื่อเมือง เช่น Bangkok, Tokyo, London...">
    <button id="btn-search-weather">ค้นหา</button>
  </div>
  <div id="recent-cities" class="chips-container"></div>
  <div id="loading-spinner" class="spinner" style="display: none;">กำลังดึงข้อมูลสภาพอากาศ...</div>
  <div id="weather-error" class="error-box" style="display: none;"></div>

  <div id="weather-card" class="weather-card" style="display: none;">
    <div class="card-head">
      <h3 id="city-name">-</h3>
      <span id="aqi-badge" class="badge">AQI -</span>
    </div>
    <div class="temp-display">
      <span id="temp-val">0</span>°C
    </div>
    <div id="weather-desc" class="condition-desc">-</div>
    <div class="metrics-grid">
      <div class="metric-item">
        <span>ความชื้น:</span>
        <strong id="humidity-val">0</strong>%
      </div>
      <div class="metric-item">
        <span>ความเร็วลม:</span>
        <strong id="wind-val">0</strong> km/h
      </div>
    </div>
  </div>
</div>`,
      targetCss: `body { font-family: 'Prompt', sans-serif; background: #0f172a; color: white; padding: 24px; } .weather-app { max-width: 440px; margin: 0 auto; background: #1e293b; padding: 24px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); } .search-bar { display: flex; gap: 8px; margin-bottom: 12px; } input { flex: 1; padding: 10px 14px; border-radius: 8px; border: 1px solid #334155; background: #0f172a; color: white; } button { padding: 10px 18px; background: #0284c7; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; } .chips-container { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px; } .city-chip { background: #334155; padding: 4px 10px; border-radius: 12px; font-size: 12px; cursor: pointer; } .spinner { color: #38bdf8; text-align: center; padding: 16px; font-size: 14px; } .error-box { background: rgba(239, 68, 68, 0.2); border: 1px solid #ef4444; color: #fca5a5; padding: 10px; border-radius: 8px; margin-bottom: 12px; font-size: 13px; } .weather-card { background: linear-gradient(135deg, #0284c7, #1e40af); padding: 20px; border-radius: 14px; margin-top: 10px; } .card-head { display: flex; justify-content: space-between; align-items: center; } .badge { padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: bold; } .aqi-good { background: #10b981; color: white; } .aqi-moderate { background: #f59e0b; color: white; } .temp-display { font-size: 2.8rem; font-weight: bold; margin: 10px 0 4px 0; } .condition-desc { font-size: 15px; opacity: 0.9; margin-bottom: 16px; } .metrics-grid { display: flex; justify-content: space-between; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 10px; font-size: 13px; }`,
      targetJs: `const mockWeatherDb = {
  bangkok: { name: "Bangkok, TH", temp: 33, desc: "☀️ ท้องฟ้าแจ่มใส แดดจัด", humidity: 62, wind: 12, aqi: 42, aqiStatus: "Good" },
  tokyo: { name: "Tokyo, JP", temp: 19, desc: "⛅ มีเมฆบางส่วน", humidity: 50, wind: 15, aqi: 25, aqiStatus: "Good" },
  london: { name: "London, UK", temp: 14, desc: "🌧️ ฝนตกโปรยปราย", humidity: 85, wind: 22, aqi: 30, aqiStatus: "Good" },
  chiangmai: { name: "Chiang Mai, TH", temp: 28, desc: "🌫️ หมอกควันจางๆ", humidity: 55, wind: 8, aqi: 85, aqiStatus: "Moderate" }
};

let recentCities = JSON.parse(localStorage.getItem("recent_weather_cities") || '["Bangkok", "Tokyo"]');

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("btn-search-weather");
const recentContainer = document.getElementById("recent-cities");
const spinner = document.getElementById("loading-spinner");
const errorBox = document.getElementById("weather-error");
const weatherCard = document.getElementById("weather-card");

const cityNameEl = document.getElementById("city-name");
const tempValEl = document.getElementById("temp-val");
const weatherDescEl = document.getElementById("weather-desc");
const humidityValEl = document.getElementById("humidity-val");
const windValEl = document.getElementById("wind-val");
const aqiBadgeEl = document.getElementById("aqi-badge");

function renderRecentChips() {
  if (!recentContainer) return;
  recentContainer.innerHTML = "";
  recentCities.forEach(city => {
    const chip = document.createElement("span");
    chip.className = "city-chip";
    chip.textContent = "📍 " + city;
    chip.addEventListener("click", () => {
      cityInput.value = city;
      handleSearch();
    });
    recentContainer.appendChild(chip);
  });
}

async function fetchWeatherData(city) {
  await new Promise(r => setTimeout(r, 40));
  const key = city.trim().toLowerCase().replace(/\\s+/g, "");
  if (mockWeatherDb[key]) {
    return mockWeatherDb[key];
  }
  if (city.trim().length > 0) {
    return {
      name: city.trim(),
      temp: 27,
      desc: "🌤️ อากาศปลอดโปร่ง",
      humidity: 58,
      wind: 10,
      aqi: 38,
      aqiStatus: "Good"
    };
  }
  throw new Error("ไม่พบข้อมูลสภาพอากาศของเมืองนี้");
}

async function handleSearch() {
  const query = cityInput.value.trim();
  if (!query) return;

  if (errorBox) errorBox.style.display = "none";
  if (weatherCard) weatherCard.style.display = "none";
  if (spinner) spinner.style.display = "block";

  try {
    const data = await fetchWeatherData(query);
    if (spinner) spinner.style.display = "none";
    if (weatherCard) weatherCard.style.display = "block";

    if (cityNameEl) cityNameEl.textContent = data.name;
    if (tempValEl) tempValEl.textContent = data.temp;
    if (weatherDescEl) weatherDescEl.textContent = data.desc;
    if (humidityValEl) humidityValEl.textContent = data.humidity;
    if (windValEl) windValEl.textContent = data.wind;

    if (aqiBadgeEl) {
      aqiBadgeEl.textContent = "AQI " + data.aqi + " (" + data.aqiStatus + ")";
      aqiBadgeEl.className = "badge " + (data.aqi > 50 ? "aqi-moderate" : "aqi-good");
    }

    if (!recentCities.includes(query)) {
      recentCities = [query, ...recentCities.slice(0, 4)];
      localStorage.setItem("recent_weather_cities", JSON.stringify(recentCities));
      renderRecentChips();
    }
  } catch (err) {
    if (spinner) spinner.style.display = "none";
    if (errorBox) {
      errorBox.textContent = err.message;
      errorBox.style.display = "block";
    }
  }
}

if (searchBtn) searchBtn.addEventListener("click", handleSearch);
if (cityInput) {
  cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSearch();
  });
}

renderRecentChips();
cityInput.value = "Bangkok";
handleSearch();`,
      validation: async (doc) => {
        const input = doc.getElementById('city-input');
        const btn = doc.getElementById('btn-search-weather');
        const card = doc.getElementById('weather-card');
        const cityName = doc.getElementById('city-name');
        const tempVal = doc.getElementById('temp-val');

        if (!input || !btn || !card || !cityName || !tempVal) {
          return "ต้องมี element #city-input, #btn-search-weather, #weather-card, #city-name, และ #temp-val";
        }

        input.value = "Tokyo";
        btn.click();
        await new Promise(r => setTimeout(r, 120));

        if (card.style.display === "none") {
          return "เมื่อค้นหาเมืองสำเร็จ กล่อง #weather-card ต้องแสดงผล (display != none)";
        }
        if (!cityName.textContent.includes("Tokyo")) {
          return "เมื่อค้นหา Tokyo ข้อความใน #city-name ต้องแสดงชื่อเมืองที่ค้นพบ";
        }
        return true;
      },
      hints: [
        "ใช้ async/await ในการเรียกข้อมูลจาก API",
        "ก่อนเริ่มค้นหา ให้แสดง #loading-spinner และซ่อนเมื่อข้อมูลมาถึง",
        "อัปเดตข้อมูลบน #temp-val และ #city-name ให้ตรงกับที่ได้รับ"
      ]
    },
    {
      id: "exam-movie-api",
      title: "ข้อสอบปฏิบัติการที่ 6: คลังภาพยนตร์ Movie Explorer (REST API & Debounce)",
      category: "ข้อสอบปฏิบัติการเชิงประยุกต์",
      description: `ข้อสอบชุดนี้เป็นการพัฒนาแอปพลิเคชันค้นหาภาพยนตร์และซีรีส์ที่มีการใช้เทคนิค **Search Debounce (หน่วงเวลาพิมพ์ 300ms)** เพื่อป้องกันการเรียก API ถี่เกินไป พร้อมแสดงผลแบบ Responsive Card Grid และหน้าต่าง Modal เจาะลึกรายละเอียดภาพยนตร์

**ข้อกำหนดทางเทคนิค (Specifications):**
1. **HTML:**
   - ช่องค้นหา: \`<input id="movie-search" placeholder="...">\`
   - ตัวกรองหมวดหมู่: \`<select id="genre-filter">\` มี \`all\`, \`action\`, \`sci-fi\`, \`drama\`
   - ตารางแสดงภาพยนตร์: \`<div id="movie-grid" class="movie-grid"></div>\`
   - หน้าต่าง Modal: \`<div id="movie-modal">\` พร้อมปุ่มปิด \`<button id="btn-close-modal">✕</button>\` และ \`<div id="modal-content"></div>\`
2. **CSS:**
   - การ์ดภาพยนตร์ \`.movie-card\` พร้อมเอฟเฟกต์ยกตัวเมื่อ Hover
   - หน้าต่าง Modal สไตล์ Backdrop Blur สวยงาม
3. **JavaScript:**
   - ใช้เทคนิค **Debounce** กับ event \`input\` บน \`#movie-search\`
   - Render การ์ดภาพยนตร์ลงใน \`#movie-grid\`
   - เมื่อคลิกการ์ด ให้เปิด Modal แสดงรายละเอียดเรื่องย่อและนักแสดง
   - ปุ่ม \`#btn-close-modal\` ปิดหน้าต่าง Modal`,
      difficulty: "Advanced",
      points: 250,
      xp: 250,
      starterHtml: `<!-- 🎬 เขียนโครงสร้าง HTML สำหรับช่องค้นหา (#movie-search), ตัวกรองหมวดหมู่ (#genre-filter), ตารางการ์ด (#movie-grid) และหน้าต่าง Modal (#movie-modal, #btn-close-modal, #modal-content) ตามข้อกำหนด -->
`,
      starterCss: `/* ==========================================
   🎨 Color Presets (พรีเซ็ตสีสำหรับ Movie Explorer)
   ========================================== */
:root {
  --bg-page: #0b0f19;
  --card-bg: #1e293b;
  --border: #334155;
  --accent: #6366f1;
  --text-main: #f1f5f9;
  --text-muted: #94a3b8;
  --modal-overlay: rgba(0, 0, 0, 0.75);
}

/* เขียนสไตล์ CSS จัดวาง Grid และ Modal Backdrop ของคุณต่อจากนี้ */
`,
      starterJs: `// เขียนโค้ดระบบค้นหาภาพยนตร์ เทคนิค Debounce และการจัดการ Modal ทั้งหมดด้วยตนเอง
`,
      targetHtml: `<div class="movie-app">
  <div class="app-header">
    <h2>🎬 Movie Explorer DB</h2>
    <div class="filter-bar">
      <input type="text" id="movie-search" placeholder="ค้นหาชื่อหนัง เช่น Inception, Parasite...">
      <select id="genre-filter">
        <option value="all">ทุกหมวดหมู่ (All Genres)</option>
        <option value="sci-fi">ไซไฟ (Sci-Fi)</option>
        <option value="action">แอ็กชัน (Action)</option>
        <option value="drama">ดราม่า (Drama)</option>
      </select>
    </div>
  </div>
  <div id="movie-grid" class="movie-grid"></div>
  <div id="movie-modal" class="modal-overlay" style="display: none;">
    <div class="modal-box">
      <button id="btn-close-modal" class="close-btn">✕</button>
      <div id="modal-content"></div>
    </div>
  </div>
</div>`,
      targetCss: `body { font-family: 'Prompt', sans-serif; background: #0b0f19; color: #f1f5f9; padding: 24px; } .movie-app { max-width: 680px; margin: 0 auto; } .app-header { margin-bottom: 20px; } .filter-bar { display: flex; gap: 10px; margin-top: 10px; } input, select { padding: 10px 14px; border-radius: 8px; border: 1px solid #1e293b; background: #1e293b; color: white; } input { flex: 1; } .movie-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px; } .movie-card { background: #1e293b; border-radius: 12px; padding: 16px; cursor: pointer; transition: transform 0.2s; border: 1px solid #334155; } .movie-card:hover { transform: translateY(-4px); border-color: #6366f1; } .poster-icon { font-size: 40px; text-align: center; margin-bottom: 10px; } .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 999; } .modal-box { background: #1e293b; padding: 24px; border-radius: 16px; max-width: 440px; position: relative; border: 1px solid #475569; } .close-btn { position: absolute; top: 12px; right: 12px; background: transparent; border: none; color: white; font-size: 18px; cursor: pointer; }`,
      targetJs: `const movies = [
  { id: 1, title: "Inception", year: 2010, rating: "8.8", genre: "sci-fi", poster: "🌀", desc: "การโจรกรรมข้อมูลผ่านการแทรกซึมเข้าสู่ความฝันซ้อนความฝันของเป้าหมาย", cast: "Leonardo DiCaprio, Joseph Gordon-Levitt" },
  { id: 2, title: "Interstellar", year: 2014, rating: "8.7", genre: "sci-fi", poster: "🚀", desc: "การเดินทางข้ามมิติรูหนอนอวกาศเพื่อค้นหาดาวดวงใหม่สำหรับมนุษยชาติ", cast: "Matthew McConaughey, Anne Hathaway" },
  { id: 3, title: "The Dark Knight", year: 2008, rating: "9.0", genre: "action", poster: "🦇", desc: "การต่อสู้ปกป้องเมืองก็อตแธมระหว่างแบทแมนกับโจ๊กเกอร์ผู้ไร้กฎเกณฑ์", cast: "Christian Bale, Heath Ledger" },
  { id: 4, title: "Parasite", year: 2019, rating: "8.5", genre: "drama", poster: "🏠", desc: "เรื่องราวตลกร้ายเสียดสีความเหลื่อมล้ำของสองครอบครัวที่มีชีวิตต่างกันสุดขั้ว", cast: "Song Kang-ho, Choi Woo-shik" },
  { id: 5, title: "Avengers: Endgame", year: 2019, rating: "8.4", genre: "action", poster: "🛡️", desc: "มหาศึกกอบกู้จักรวาลครั้งสุดท้ายของเหล่าอเวนเจอร์สเพื่อนำทุกคนกลับมา", cast: "Robert Downey Jr., Chris Evans" }
];

let debounceTimer = null;
const searchInput = document.getElementById("movie-search");
const genreFilter = document.getElementById("genre-filter");
const gridEl = document.getElementById("movie-grid");
const modalEl = document.getElementById("movie-modal");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.getElementById("btn-close-modal");

function renderMovies(list) {
  if (!gridEl) return;
  gridEl.innerHTML = "";

  list.forEach(m => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = "<div class='poster-icon'>" + m.poster + "</div><div class='card-meta'><h4>" + m.title + "</h4><div class='meta-row'><span>⭐ " + m.rating + "</span><span> (" + m.year + ")</span></div></div>";
    card.addEventListener("click", () => openModal(m));
    gridEl.appendChild(card);
  });
}

function openModal(movie) {
  if (!modalEl || !modalContent) return;
  modalContent.innerHTML = "<h2>" + movie.poster + " " + movie.title + " (" + movie.year + ")</h2><div style='color:#f59e0b; margin:6px 0;'>⭐ " + movie.rating + " / 10 | หมวด: " + movie.genre.toUpperCase() + "</div><p style='color:#cbd5e1; margin:12px 0;'>" + movie.desc + "</p><div style='font-size:13px; color:#94a3b8;'><strong>นักแสดง:</strong> " + movie.cast + "</div>";
  modalEl.style.display = "flex";
}

function closeModal() {
  if (modalEl) modalEl.style.display = "none";
}

function filterAndSearch() {
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const genre = genreFilter ? genreFilter.value : "all";

  const results = movies.filter(m => {
    const matchQuery = m.title.toLowerCase().includes(query) || m.desc.toLowerCase().includes(query);
    const matchGenre = genre === "all" || m.genre === genre;
    return matchQuery && matchGenre;
  });

  renderMovies(results);
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(filterAndSearch, 200);
  });
}

if (genreFilter) genreFilter.addEventListener("change", filterAndSearch);
if (closeBtn) closeBtn.addEventListener("click", closeModal);

renderMovies(movies);`,
      validation: (doc) => {
        const searchInput = doc.getElementById('movie-search');
        const gridEl = doc.getElementById('movie-grid');
        const modalEl = doc.getElementById('movie-modal');
        const closeBtn = doc.getElementById('btn-close-modal');

        if (!searchInput || !gridEl || !modalEl || !closeBtn) {
          return "ไม่พบ element #movie-search, #movie-grid, #movie-modal หรือ #btn-close-modal";
        }

        const cards = gridEl.querySelectorAll('.movie-card');
        if (cards.length === 0) {
          return "ต้องมีรายการภาพยนตร์ .movie-card แสดงใน #movie-grid";
        }

        cards[0].click();
        if (modalEl.style.display === "none") {
          return "เมื่อคลิกที่การ์ดภาพยนตร์ หน้าต่าง #movie-modal ต้องแสดงผล";
        }

        closeBtn.click();
        if (modalEl.style.display !== "none") {
          return "เมื่อคลิกปุ่ม #btn-close-modal หน้าต่าง Modal ต้องถูกปิด";
        }

        return true;
      },
      hints: [
        "ใช้ clearTimeout(debounceTimer) ก่อนตั้ง setTimeout เพื่อทำ debounce",
        "สร้างการ์ดด้วย document.createElement('div') และใส่ class 'movie-card'",
        "ผูก click บนการ์ดเพื่ออัปเดต #modal-content และแสดง #movie-modal"
      ]
    },
    {
      id: "exam-canvas-game",
      title: "ข้อสอบปฏิบัติการที่ 7: เกมยานอวกาศหลบอุกกาบาต Cyber Dodger (Canvas 2D Game Loop)",
      category: "ข้อสอบปฏิบัติการเชิงประยุกต์",
      description: `สร้างเกมอาร์เคด 2 มิติเต็มรูปแบบด้วย **HTML5 Canvas 2D API** และ **Game Loop (requestAnimationFrame)** ควบคุมยานอวกาศหลบหลีกอุกกาบาตที่ตกลงมาด้วยความเร็วที่เพิ่มขึ้นเรื่อยๆ พร้อมระบบคำนวณการชน (Collision Detection) และบันทึกคะแนนสูงสุด (High Score)

**ข้อกำหนดทางเทคนิค (Specifications):**
1. **HTML:**
   - พื้นที่กระดานเกม: \`<canvas id="game-canvas" width="360" height="340"></canvas>\`
   - แถบคะแนน: \`<strong id="game-score">0</strong>\`
   - จำนวนหัวใจชีวิต: \`<span id="player-lives">❤️❤️❤️</span>\`
   - ปุ่มควบคุม: \`<button id="btn-start-game">เริ่มเกม</button>\`, \`<button id="btn-left">◀ ซ้าย</button>\`, \`<button id="btn-right">ขวา ▶</button>\`
2. **CSS:**
   - จัดวาง Canvas และปุ่มควบคุมให้กึ่งกลางหน้าจอสวยงาม
3. **JavaScript:**
   - ใช้ \`canvas.getContext("2d")\` สำหรับวาดกราฟิก
   - วัตถุผู้เล่น (Player): เคลื่อนที่ตามปุ่มควบคุม
   - วัตถุอุกกาบาต (Asteroids): สุ่มตำแหน่งเกิดและตกลงมา
   - ตรวจสอบการชน (Collision Detection): ลดพลังชีวิตเมื่อชน
   - บันทึกคะแนนและจบเกมเมื่อพลังชีวิตหมด`,
      difficulty: "Advanced",
      points: 300,
      xp: 300,
      starterHtml: `<!-- 🚀 เขียนโครงสร้าง HTML สำหรับแผงคะแนน HUD, กระดาน Canvas (#game-canvas) และปุ่มควบคุม (#btn-start-game, #btn-left, #btn-right) ตามข้อกำหนด -->
`,
      starterCss: `/* ==========================================
   🎨 Color Presets (พรีเซ็ตสีสำหรับ Cyber Dodger)
   ========================================== */
:root {
  --bg-page: #030712;
  --game-box-bg: #111827;
  --canvas-bg: #0f172a;
  --border-hud: #1f2937;
  --player-color: #38bdf8;
  --asteroid-color: #f43f5e;
  --btn-ctrl: #2563eb;
  --btn-start: #059669;
  --text-main: #ffffff;
}

/* เขียนสไตล์ CSS จัดตำแหน่ง Canvas และปุ่มควบคุมของคุณต่อจากนี้ */
`,
      starterJs: `// เขียนโค้ดระบบเกม Canvas 2D การควบคุม และ Game Loop ทั้งหมดด้วยตนเอง
`,
      targetHtml: `<div class="game-box">
  <div class="hud">
    <div>แต้ม: <strong id="game-score">0</strong></div>
    <div>ชีวิต: <span id="player-lives">❤️❤️❤️</span></div>
    <div>สูงสุด: <strong id="high-score">0</strong></div>
  </div>
  <canvas id="game-canvas" width="360" height="340"></canvas>
  <div class="controls-bar">
    <button id="btn-left">◀ ซ้าย</button>
    <button id="btn-start-game">เริ่มเกม</button>
    <button id="btn-right">ขวา ▶</button>
  </div>
</div>`,
      targetCss: `body { font-family: 'Prompt', sans-serif; background: #030712; color: white; padding: 20px; display: flex; justify-content: center; } .game-box { background: #111827; padding: 20px; border-radius: 16px; width: 360px; text-align: center; border: 1px solid #1f2937; box-shadow: 0 10px 25px rgba(0,0,0,0.5); } .hud { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px; } canvas { background: #0f172a; border-radius: 8px; border: 1px solid #38bdf8; display: block; margin: 0 auto 14px auto; } .controls-bar { display: flex; justify-content: space-between; gap: 8px; } button { padding: 10px 14px; background: #2563eb; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; flex: 1; } #btn-start-game { background: #059669; }`,
      targetJs: `const canvas = document.getElementById("game-canvas");
const ctx = canvas && canvas.getContext ? canvas.getContext("2d") : null;
const scoreEl = document.getElementById("game-score");
const livesEl = document.getElementById("player-lives");
const highScoreEl = document.getElementById("high-score");
const startBtn = document.getElementById("btn-start-game");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

let score = 0;
let lives = 3;
let highScore = parseInt(localStorage.getItem("dodger_highscore") || "0");
let isRunning = false;
let animId = null;

let player = { x: 160, y: 300, width: 36, height: 24, speed: 6 };
let asteroids = [];

if (highScoreEl) highScoreEl.textContent = highScore;

function resetGame() {
  score = 0;
  lives = 3;
  player.x = 160;
  asteroids = [];
  isRunning = true;
  if (scoreEl) scoreEl.textContent = "0";
  if (livesEl) livesEl.textContent = "❤️❤️❤️";
  if (startBtn) startBtn.textContent = "เล่นใหม่";
}

function spawnAsteroid() {
  if (Math.random() < 0.05 && canvas) {
    asteroids.push({
      x: Math.random() * (canvas.width - 24),
      y: -20,
      size: 16 + Math.random() * 12,
      speed: 2.5 + Math.random() * 2
    });
  }
}

function updateGame() {
  if (!isRunning || !ctx || !canvas) return;

  ctx.fillStyle = "#0f172a";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw Player
  ctx.fillStyle = "#38bdf8";
  ctx.beginPath();
  ctx.moveTo(player.x + player.width / 2, player.y);
  ctx.lineTo(player.x, player.y + player.height);
  ctx.lineTo(player.x + player.width, player.y + player.height);
  ctx.closePath();
  ctx.fill();

  // Update & Draw Asteroids
  spawnAsteroid();
  for (let i = asteroids.length - 1; i >= 0; i--) {
    let a = asteroids[i];
    a.y += a.speed;

    ctx.fillStyle = "#f43f5e";
    ctx.beginPath();
    ctx.arc(a.x, a.y, a.size / 2, 0, Math.PI * 2);
    ctx.fill();

    // Collision Check
    const distX = Math.abs(a.x - (player.x + player.width / 2));
    const distY = Math.abs(a.y - (player.y + player.height / 2));
    if (distX < (player.width / 2 + a.size / 2) && distY < (player.height / 2 + a.size / 2)) {
      asteroids.splice(i, 1);
      lives--;
      if (livesEl) livesEl.textContent = "❤️".repeat(Math.max(0, lives));
      if (lives <= 0) {
        gameOver();
        return;
      }
      continue;
    }

    // Out of screen
    if (a.y > canvas.height + 20) {
      asteroids.splice(i, 1);
      score += 10;
      if (scoreEl) scoreEl.textContent = score;
    }
  }

  if (typeof requestAnimationFrame !== "undefined") {
    animId = requestAnimationFrame(updateGame);
  }
}

function gameOver() {
  isRunning = false;
  if (typeof cancelAnimationFrame !== "undefined") cancelAnimationFrame(animId);
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("dodger_highscore", highScore);
    if (highScoreEl) highScoreEl.textContent = highScore;
  }
  if (ctx && canvas) {
    ctx.fillStyle = "rgba(0,0,0,0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f43f5e";
    ctx.font = "bold 24px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
  }
}

if (startBtn) {
  startBtn.addEventListener("click", () => {
    resetGame();
    if (typeof cancelAnimationFrame !== "undefined") cancelAnimationFrame(animId);
    updateGame();
  });
}

function moveLeft() {
  player.x = Math.max(0, player.x - 20);
}
function moveRight() {
  player.x = Math.min(canvas ? canvas.width - player.width : 300, player.x + 20);
}

if (btnLeft) btnLeft.addEventListener("click", moveLeft);
if (btnRight) btnRight.addEventListener("click", moveRight);`,
      validation: (doc) => {
        const canvas = doc.getElementById('game-canvas');
        const scoreEl = doc.getElementById('game-score');
        const livesEl = doc.getElementById('player-lives');
        const startBtn = doc.getElementById('btn-start-game');

        if (!canvas || !scoreEl || !livesEl || !startBtn) {
          return "ต้องมี element #game-canvas, #game-score, #player-lives และ #btn-start-game";
        }
        if (canvas.width < 300 || canvas.height < 300) {
          return "ขนาดกระดาน Canvas ต้องมีความกว้างและความสูงอย่างน้อย 300px";
        }
        try {
          startBtn.click();
        } catch (e) {
          // Guard for headless environments without canvas context
        }
        return true;
      },
      hints: [
        "ใช้ canvas.getContext('2d') เพื่อเข้าถึงคำสั่งวาดภาพ",
        "สร้างฟังก์ชัน updateGame และเรียก requestAnimationFrame(updateGame)",
        "ตรวจสอบระยะห่างระหว่างจุดศูนย์กลางยานกับอุกกาบาตเพื่อตรวจจับการชน"
      ]
    },
    {
      id: "exam-whack-mole-game",
      title: "ข้อสอบปฏิบัติการที่ 8: เกมตีตุ่นประลองความไว Whack-A-Mole (Timers & Web Audio)",
      category: "ข้อสอบปฏิบัติการเชิงประยุกต์",
      description: `พัฒนาเกมตีตัวตุ่น (Whack-A-Mole) 9 ช่อง (3x3 Grid) ที่ฝึกใช้ **DOM Manipulation, Interval Timers, Event Listeners** และ **Web Audio API** สร้างเสียงเอฟเฟกต์สังเคราะห์โดยไม่ต้องพึ่งพาไฟล์เสียงภายนอก พร้อมระบบคอมโบ (Combo Streak) และเวลานับถอยหลัง 30 วินาที

**ข้อกำหนดทางเทคนิค (Specifications):**
1. **HTML:**
   - คะแนน \`<strong id="mole-score">0</strong>\`
   - เวลานับถอยหลัง \`<strong id="time-left">30</strong> วิ\`
   - ปุ่มเริ่มเกม \`<button id="btn-start-mole">เริ่มเล่น</button>\`
   - กระดานหลุมตุ่น 9 ช่อง: \`<div class="mole-grid">\` ภายในมี 9 ช่อง \`<div class="hole"><div class="mole">🐹</div></div>\`
2. **CSS:**
   - จัดวางตาราง 3x3 ด้วย CSS Grid
   - กำหนดสไตล์เมื่อตุ่นโผล่ \`.hole.up .mole\`
3. **JavaScript:**
   - สุ่มให้ตุ่นโผล่ขึ้นมาในแต่ละหลุม
   - เมื่อคลิกตีที่ \`.mole\`: ให้เพิ่มคะแนนใน \`#mole-score\` และหดตุ่นกลับลงหลุม
   - จับเวลาถอยหลัง และหยุดเกมเมื่อหมดเวลา`,
      difficulty: "Advanced",
      points: 300,
      xp: 300,
      starterHtml: `<!-- 🐹 เขียนโครงสร้าง HTML สำหรับแผงคะแนน (#mole-score, #time-left, #combo-streak, #btn-start-mole) และกระดานหลุมตุ่น 9 ช่อง (.mole-grid > .hole > .mole) ตามข้อกำหนด -->
`,
      starterCss: `/* ==========================================
   🎨 Color Presets (พรีเซ็ตสีสำหรับ Whack-A-Mole)
   ========================================== */
:root {
  --bg-page: #0f172a;
  --panel-bg: #1e293b;
  --hole-bg: #334155;
  --hole-shadow: #1e293b;
  --btn-start: #10b981;
  --text-main: #ffffff;
  --accent-score: #fbbf24;
}

/* เขียนสไตล์ CSS สำหรับตาราง Grid 3x3 และอนิเมชันตุ่นโผล่ (.hole.up .mole) ของคุณต่อจากนี้ */
`,
      starterJs: `// เขียนตรรกะเกมตีตัวตุ่น การสุ่มหลุม และระบบนับคะแนนทั้งหมดด้วยตนเอง
`,
      targetHtml: `<div class="mole-app">
  <h2>🔨 Whack-A-Mole Reflex Challenge</h2>
  <div class="game-meta">
    <div>คะแนน: <strong id="mole-score">0</strong></div>
    <div>เวลา: <strong id="time-left">30</strong> วิ</div>
    <div>คอมโบ: <span id="combo-streak">0</span>x</div>
    <button id="btn-start-mole">เริ่มเล่น</button>
  </div>
  <div class="mole-grid">
    <div class="hole"><div class="mole">🐹</div></div>
    <div class="hole"><div class="mole">🐹</div></div>
    <div class="hole"><div class="mole">🐹</div></div>
    <div class="hole"><div class="mole">🐹</div></div>
    <div class="hole"><div class="mole">🐹</div></div>
    <div class="hole"><div class="mole">🐹</div></div>
    <div class="hole"><div class="mole">🐹</div></div>
    <div class="hole"><div class="mole">🐹</div></div>
    <div class="hole"><div class="mole">🐹</div></div>
  </div>
</div>`,
      targetCss: `body { font-family: 'Prompt', sans-serif; background: #0f172a; color: white; padding: 24px; text-align: center; } .mole-app { max-width: 440px; margin: 0 auto; background: #1e293b; padding: 24px; border-radius: 16px; } .game-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; font-size: 14px; } #btn-start-mole { padding: 8px 16px; background: #10b981; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; } .mole-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; } .hole { height: 90px; background: #334155; border-radius: 12px; overflow: hidden; position: relative; border-bottom: 6px solid #1e293b; } .mole { font-size: 40px; position: absolute; width: 100%; height: 100%; top: 100%; transition: top 0.2s ease-in-out; display: flex; align-items: center; justify-content: center; cursor: pointer; user-select: none; } .hole.up .mole { top: 0; }`,
      targetJs: `const holes = document.querySelectorAll(".hole");
const scoreEl = document.getElementById("mole-score");
const timeEl = document.getElementById("time-left");
const comboEl = document.getElementById("combo-streak");
const startBtn = document.getElementById("btn-start-mole");

let lastHole = null;
let timeUp = false;
let score = 0;
let combo = 0;
let countdown = 30;
let timerId = null;
let moleTimerId = null;

function playHitSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 520 + combo * 40;
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {}
}

function randomHole() {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) return randomHole();
  lastHole = hole;
  return hole;
}

function peep() {
  if (timeUp) return;
  const time = Math.round(Math.random() * 400) + 600;
  const hole = randomHole();
  hole.classList.add("up");
  moleTimerId = setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}

function bonk() {
  if (!this.parentElement.classList.contains("up")) return;
  score += 10 + combo * 2;
  combo++;
  if (scoreEl) scoreEl.textContent = score;
  if (comboEl) comboEl.textContent = combo;
  playHitSound();
  this.parentElement.classList.remove("up");
}

function startGame() {
  score = 0;
  combo = 0;
  countdown = 30;
  timeUp = false;
  if (scoreEl) scoreEl.textContent = "0";
  if (comboEl) comboEl.textContent = "0";
  if (timeEl) timeEl.textContent = "30";
  clearInterval(timerId);
  clearTimeout(moleTimerId);

  holes.forEach(h => h.classList.remove("up"));
  peep();

  timerId = setInterval(() => {
    countdown--;
    if (timeEl) timeEl.textContent = countdown;
    if (countdown <= 0) {
      clearInterval(timerId);
      timeUp = true;
      holes.forEach(h => h.classList.remove("up"));
    }
  }, 1000);
}

document.querySelectorAll(".mole").forEach(mole => {
  mole.addEventListener("click", bonk);
});

if (startBtn) startBtn.addEventListener("click", startGame);`,
      validation: (doc) => {
        const holes = doc.querySelectorAll('.hole');
        const scoreEl = doc.getElementById('mole-score');
        const timeEl = doc.getElementById('time-left');
        const startBtn = doc.getElementById('btn-start-mole');

        if (holes.length !== 9) {
          return "กระดานเกมต้องมีหลุมตุ่น (.hole) ทั้งหมด 9 ช่อง";
        }
        if (!scoreEl || !timeEl || !startBtn) {
          return "ต้องมี element #mole-score, #time-left และ #btn-start-mole";
        }

        startBtn.click();
        holes[0].classList.add("up");
        const mole = holes[0].querySelector('.mole');
        mole.click();

        if (parseInt(scoreEl.textContent) <= 0) {
          return "เมื่อคลิกตีที่ตุ่น .mole คะแนนใน #mole-score ต้องเพิ่มขึ้น";
        }
        return true;
      },
      hints: [
        "ใช้ Math.floor(Math.random() * holes.length) เพื่อสุ่มหลุม",
        "เมื่อคลิก .mole ให้เพิ่ม class 'up' หลุดออก และบวกคะแนน",
        "ใช้ setInterval นับเวลาถอยหลัง และหยุดเมื่อครบ 30 วินาที"
      ]
    },
    {
      id: "exam-wordle-game",
      title: "ข้อสอบปฏิบัติการที่ 9: เกมทายคำศัพท์ Wordle Master (Keyboard & State)",
      category: "ข้อสอบปฏิบัติการเชิงประยุกต์",
      description: `สร้างเกมทายคำศัพท์ 5 ตัวอักษรยอดนิยมระดับโลก (Wordle Master) ด้วย **JavaScript 2D Matrix State, Keyboard Event Listeners (keydown), และ Dynamic Class Flipping** มี 6 แถว (โอกาสทาย 6 ครั้ง) พร้อมแป้นพิมพ์เสมือนจริงบนหน้าจอ

**ข้อกำหนดทางเทคนิค (Specifications):**
1. **HTML:**
   - กระดานตารางทายคำ: \`<div id="wordle-board">\` ประกอบด้วย 6 แถว แถวละ 5 ช่อง (\`.letter-tile\`) รวม 30 ช่อง
   - แป้นพิมพ์เสมือนจริงบนหน้าจอพร้อมปุ่มตัวอักษร, \`ENTER\`, และ \`DEL\`
   - ปุ่มเริ่มเกมใหม่ \`<button id="btn-restart-wordle">เริ่มรอบใหม่</button>\`
2. **CSS:**
   - สถานะสีมาตรฐาน: \`.correct\` (สีเขียว), \`.present\` (สีเหลือง), \`.absent\` (สีเทา)
3. **JavaScript:**
   - ดักจับ Event \`keydown\` พิมพ์ตัวอักษร A-Z และคลิกปุ่มบนหน้าจอ
   - เมื่อกด \`ENTER\`: ตรวจสอบความถูกต้องของตัวอักษรทั้ง 5 ตำแหน่งและใส่คลาสสี
   - ปุ่ม \`#btn-restart-wordle\` รีเซ็ตกระดานเริ่มรอบใหม่`,
      difficulty: "Advanced",
      points: 300,
      xp: 300,
      starterHtml: `<!-- 🟩 เขียนโครงสร้าง HTML สำหรับข้อความแจ้งเตือน (#wordle-msg), กระดาน (#wordle-board), คีย์บอร์ด (#kb-row-1, #kb-row-2, #kb-row-3) และปุ่มเริ่มใหม่ (#btn-restart-wordle) ตามข้อกำหนด -->
`,
      starterCss: `/* ==========================================
   🎨 Color Presets (พรีเซ็ตสีมาตรฐานสำหรับ Wordle)
   ========================================== */
:root {
  --bg-page: #0f172a;
  --panel-bg: #1e293b;
  --tile-border: #334155;
  --tile-filled: #64748b;
  --correct: #10b981;  /* สีเขียว: ตัวอักษรและตำแหน่งถูกต้อง */
  --present: #eab308;  /* สีเหลือง: มีตัวอักษรนี้แต่อยู่ผิดตำแหน่ง */
  --absent: #475569;   /* สีเทา: ไม่มีตัวอักษรนี้ในคำ */
  --key-bg: #334155;
  --key-wide: #475569;
  --btn-restart: #0284c7;
  --text-main: #ffffff;
}

/* คลาสพรีเซ็ตสีสำหรับช่องตัวอักษร */
.letter-tile.correct { background: var(--correct); border-color: var(--correct); }
.letter-tile.present { background: var(--present); border-color: var(--present); }
.letter-tile.absent { background: var(--absent); border-color: var(--absent); }

/* เขียนสไตล์ CSS สำหรับกระดานตาราง 6x5 และแป้นพิมพ์เสมือนจริงของคุณต่อจากนี้ */
`,
      starterJs: `// เขียนตรรกะเกมทายคำศัพท์ Wordle และการประมวลผลแป้นพิมพ์ทั้งหมดด้วยตนเอง
`,
      targetHtml: `<div class="wordle-app">
  <h2>🟩 Wordle Master (5 ตัวอักษร)</h2>
  <div id="wordle-msg" class="msg-banner"></div>
  <div id="wordle-board" class="board"></div>
  <div class="keyboard">
    <div class="kb-row" id="kb-row-1"></div>
    <div class="kb-row" id="kb-row-2"></div>
    <div class="kb-row" id="kb-row-3"></div>
  </div>
  <button id="btn-restart-wordle" class="restart-btn">เริ่มรอบใหม่</button>
</div>`,
      targetCss: `body { font-family: 'Prompt', sans-serif; background: #0f172a; color: white; padding: 20px; text-align: center; } .wordle-app { max-width: 440px; margin: 0 auto; } .msg-banner { height: 24px; font-weight: bold; color: #38bdf8; margin-bottom: 8px; font-size: 14px; } .board { display: grid; grid-template-rows: repeat(6, 1fr); gap: 6px; margin-bottom: 20px; } .row { display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; } .letter-tile { height: 50px; border: 2px solid #334155; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; text-transform: uppercase; background: #1e293b; } .letter-tile.filled { border-color: #64748b; } .letter-tile.correct { background: #10b981; border-color: #10b981; } .letter-tile.present { background: #eab308; border-color: #eab308; } .letter-tile.absent { background: #475569; border-color: #475569; } .keyboard { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; } .kb-row { display: flex; justify-content: center; gap: 4px; } .key-btn { padding: 12px 10px; background: #334155; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 12px; } .key-btn.wide { padding: 12px 14px; background: #475569; } .restart-btn { padding: 8px 18px; background: #0284c7; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; }`,
      targetJs: `const WORD_LIST = ["REACT", "LEARN", "LOGIC", "STYLE", "CLONE", "BUILD", "CLEAN"];
let targetWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
let currentRow = 0;
let currentTile = 0;
let isGameOver = false;

const board = document.getElementById("wordle-board");
const msgEl = document.getElementById("wordle-msg");
const restartBtn = document.getElementById("btn-restart-wordle");

function initBoard() {
  if (!board) return;
  board.innerHTML = "";
  for (let r = 0; r < 6; r++) {
    const row = document.createElement("div");
    row.className = "row";
    row.setAttribute("data-row", r);
    for (let c = 0; c < 5; c++) {
      const tile = document.createElement("div");
      tile.className = "letter-tile";
      tile.setAttribute("data-col", c);
      row.appendChild(tile);
    }
    board.appendChild(row);
  }
}

function initKeyboard() {
  const row1 = "QWERTYUIOP".split("");
  const row2 = "ASDFGHJKL".split("");
  const row3 = ["ENTER", ..."ZXCVBNM".split(""), "DEL"];

  const buildRow = (letters, rowId) => {
    const el = document.getElementById(rowId);
    if (!el) return;
    el.innerHTML = "";
    letters.forEach(k => {
      const btn = document.createElement("button");
      btn.className = "key-btn" + (k.length > 1 ? " wide" : "");
      btn.textContent = k;
      btn.setAttribute("data-key", k);
      btn.addEventListener("click", () => handleInput(k));
      el.appendChild(btn);
    });
  };

  buildRow(row1, "kb-row-1");
  buildRow(row2, "kb-row-2");
  buildRow(row3, "kb-row-3");
}

function handleInput(key) {
  if (isGameOver) return;

  if (key === "ENTER") {
    submitGuess();
  } else if (key === "DEL" || key === "BACKSPACE") {
    deleteLetter();
  } else if (/^[A-Z]$/.test(key)) {
    addLetter(key);
  }
}

function addLetter(letter) {
  if (currentTile >= 5) return;
  const rowEl = board.querySelector(".row[data-row='" + currentRow + "']");
  if (!rowEl) return;
  const tile = rowEl.children[currentTile];
  tile.textContent = letter;
  tile.classList.add("filled");
  currentTile++;
}

function deleteLetter() {
  if (currentTile <= 0) return;
  currentTile--;
  const rowEl = board.querySelector(".row[data-row='" + currentRow + "']");
  if (!rowEl) return;
  const tile = rowEl.children[currentTile];
  tile.textContent = "";
  tile.classList.remove("filled");
}

function submitGuess() {
  if (currentTile < 5) {
    if (msgEl) msgEl.textContent = "คำต้องมี 5 ตัวอักษร";
    return;
  }

  const rowEl = board.querySelector(".row[data-row='" + currentRow + "']");
  let guess = "";
  for (let i = 0; i < 5; i++) {
    guess += rowEl.children[i].textContent;
  }

  const targetArr = targetWord.split("");
  const guessArr = guess.split("");

  for (let i = 0; i < 5; i++) {
    const tile = rowEl.children[i];
    const letter = guessArr[i];
    if (letter === targetArr[i]) {
      tile.classList.add("correct");
    } else if (targetArr.includes(letter)) {
      tile.classList.add("present");
    } else {
      tile.classList.add("absent");
    }
  }

  if (guess === targetWord) {
    isGameOver = true;
    if (msgEl) msgEl.textContent = "🎉 ถูกต้องแล้ว! ยอดเยี่ยมมาก!";
    return;
  }

  currentRow++;
  currentTile = 0;

  if (currentRow >= 6) {
    isGameOver = true;
    if (msgEl) msgEl.textContent = "เฉลยคำตอบคือ: " + targetWord;
  }
}

function restartGame() {
  targetWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
  currentRow = 0;
  currentTile = 0;
  isGameOver = false;
  if (msgEl) msgEl.textContent = "";
  initBoard();
}

window.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  if (key === "ENTER" || key === "BACKSPACE" || /^[A-Z]$/.test(key)) {
    handleInput(key);
  }
});

if (restartBtn) restartBtn.addEventListener("click", restartGame);

initBoard();
initKeyboard();`,
      validation: (doc) => {
        const board = doc.getElementById('wordle-board');
        const restartBtn = doc.getElementById('btn-restart-wordle');

        if (!board || !restartBtn) {
          return "ต้องมี element #wordle-board และ #btn-restart-wordle";
        }
        const tiles = board.querySelectorAll('.letter-tile');
        if (tiles.length !== 30) {
          return "กระดาน Wordle ต้องมีช่องตัวอักษร (.letter-tile) ครบ 30 ช่อง (6 แถว × 5 ช่อง)";
        }

        const keyA = doc.querySelector(".key-btn[data-key='A']");
        if (keyA) keyA.click();
        if (tiles[0].textContent !== "A") {
          return "เมื่อกดพิมพ์ตัวอักษร ช่องแรกของแถวต้องแสดงตัวอักษรนั้น";
        }

        restartBtn.click();
        const resetTiles = board.querySelectorAll('.letter-tile');
        if (resetTiles[0].textContent !== "") {
          return "เมื่อกดปุ่มเริ่มรอบใหม่ ช่องตัวอักษรต้องถูกเคลียร์ว่าง";
        }

        return true;
      },
      hints: [
        "สร้าง 6 แถว แถวละ 5 ช่อง ด้วยลูปซ้อน 2 ชั้น",
        "เปรียบเทียบทีละตัวอักษร: ตัวตรงตำแหน่งใส่ 'correct', มีตัวในคำใส่ 'present', ไม่มีใส่ 'absent'",
        "ดักจับ event 'keydown' เพื่อรองรับการพิมพ์จากคีย์บอร์ดจริง"
      ]
    },
    {
      id: "exam-drag-drop-board",
      title: "ข้อสอบปฏิบัติการที่ 10: กระดานเคลื่อนย้ายงาน HTML5 Drag & Drop Kanban (สไลด์ 3 หน้า 18-19)",
      category: "3. เทคนิคขั้นสูงและ Web APIs",
      difficulty: "ยาก (Advanced Exam)",
      xp: 260,
      description: `ข้อสอบชุดนี้สร้างขึ้นเพื่อทดสอบความรู้และทักษะการใช้งาน **HTML5 Drag and Drop API** ตามที่สอนในสไลด์ชุดที่ 3 หน้า 18–19 โดยตรง!

ผู้สอบต้องพัฒนาระบบกระดานจัดหมวดหมู่งาน (Kanban Board) 2 คอลัมน์ ได้แก่:
1. **#col-todo** (คอลัมน์ "งานที่ต้องทำ") บรรจุการ์ดงานเบื้องต้นอย่างน้อย 2 ใบ
2. **#col-done** (คอลัมน์ "งานที่เสร็จแล้ว")

**ข้อกำหนดทางเทคนิค (Specifications):**
1. **HTML:**
   - การ์ดงานแต่ละใบต้องมีคลาส \`.kanban-card\` พร้อมแอตทริบิวต์ \`draggable="true"\` และระบุ id ประจำตัว (เช่น \`id="card-1"\`, \`id="card-2"\`)
   - คอลัมน์ทั้งสองมีคลาส \`.kanban-col\` และมี id เป็น \`col-todo\` และ \`col-done\`
   - ป้ายระบุจำนวนงาน: \`<span id="count-todo">2</span>\` และ \`<span id="count-done">0</span>\`
2. **JavaScript Drag & Drop Events:**
   - **\`dragstart\` บนการ์ด:** ส่ง id ของการ์ดเข้าไปใน dataTransfer ผ่านคำสั่ง \`ev.dataTransfer.setData("text/plain", ev.target.id);\` และใส่คลาส \`dragging\` ให้กับการ์ด
   - **\`dragend\` บนการ์ด:** ลบคลาส \`dragging\` ออกจากการ์ด
   - **\`dragover\` บนคอลัมน์:** เรียก \`ev.preventDefault();\` เสมอเพื่ออนุญาตให้วาง (Drop) ได้ และเพิ่มคลาส \`drag-over\` ให้กับคอลัมน์
   - **\`dragleave\` บนคอลัมน์:** ลบคลาส \`drag-over\` ออกจากคอลัมน์
   - **\`drop\` บนคอลัมน์:**
     - เรียก \`ev.preventDefault();\`
     - ดึง id ของการ์ดที่ถูกลากออกมาด้วยคำสั่ง \`const cardId = ev.dataTransfer.getData("text/plain");\`
     - ค้นหา element ของการ์ดด้วย \`document.getElementById(cardId)\`
     - ย้ายการ์ดเข้าไปต่อท้ายในคอลัมน์นั้นด้วย \`col.appendChild(card);\`
     - ลบคลาส \`drag-over\`
     - อัปเดตตัวเลขจำนวนงานบน \`#count-todo\` และ \`#count-done\` ให้ตรงกับจำนวนการ์ดจริง`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Kanban Drag and Drop</title>
</head>
<body>
  <div class="kanban-wrapper">
    <h2>📋 กระดานติดตามงาน (HTML5 Drag & Drop)</h2>
    <div class="board-container">
      <div class="kanban-col" id="col-todo">
        <div class="col-header">
          <h3>📌 งานที่ต้องทำ (<span id="count-todo">2</span>)</h3>
        </div>
        <div class="kanban-card" id="card-1" draggable="true">
          <h4>ออกแบบโครงสร้างฐานข้อมูล</h4>
          <span class="badge high">สำคัญมาก</span>
        </div>
        <div class="kanban-card" id="card-2" draggable="true">
          <h4>จัดทำสไลด์นำเสนอโปรเจกต์</h4>
          <span class="badge normal">ปกติ</span>
        </div>
      </div>

      <div class="kanban-col" id="col-done">
        <div class="col-header">
          <h3>✅ งานที่เสร็จแล้ว (<span id="count-done">0</span>)</h3>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
      starterCss: `body {
  font-family: 'Sarabun', sans-serif;
  background: #f8fafc;
  padding: 24px;
}
.kanban-wrapper {
  max-width: 800px;
  margin: 0 auto;
}
.board-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 16px;
}
.kanban-col {
  background: #f1f5f9;
  border-radius: 12px;
  padding: 16px;
  min-height: 320px;
  border: 2px dashed #cbd5e1;
  transition: all 0.2s ease;
}
.kanban-col.drag-over {
  background: #e0f2fe;
  border-color: #0284c7;
}
.col-header {
  font-size: 15px;
  margin-bottom: 12px;
  color: #1e293b;
}
.kanban-card {
  background: white;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.06);
  cursor: grab;
  transition: opacity 0.2s ease;
}
.kanban-card:active {
  cursor: grabbing;
}
.kanban-card.dragging {
  opacity: 0.4;
}
.badge {
  display: inline-block;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 999px;
  margin-top: 6px;
}
.badge.high { background: #fee2e2; color: #dc2626; }
.badge.normal { background: #e0f2fe; color: #0284c7; }`,
      starterJs: `// เขียนโค้ดระบบ HTML5 Drag and Drop จัดการ Kanban Board ของคุณที่นี่
`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Kanban Drag and Drop</title>
</head>
<body>
  <div class="kanban-wrapper">
    <h2>📋 กระดานติดตามงาน (HTML5 Drag & Drop)</h2>
    <div class="board-container">
      <div class="kanban-col" id="col-todo">
        <div class="col-header">
          <h3>📌 งานที่ต้องทำ (<span id="count-todo">2</span>)</h3>
        </div>
        <div class="kanban-card" id="card-1" draggable="true">
          <h4>ออกแบบโครงสร้างฐานข้อมูล</h4>
          <span class="badge high">สำคัญมาก</span>
        </div>
        <div class="kanban-card" id="card-2" draggable="true">
          <h4>จัดทำสไลด์นำเสนอโปรเจกต์</h4>
          <span class="badge normal">ปกติ</span>
        </div>
      </div>

      <div class="kanban-col" id="col-done">
        <div class="col-header">
          <h3>✅ งานที่เสร็จแล้ว (<span id="count-done">0</span>)</h3>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
      targetCss: `body { font-family: 'Sarabun', sans-serif; background: #f8fafc; padding: 24px; } .kanban-wrapper { max-width: 800px; margin: 0 auto; } .board-container { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 16px; } .kanban-col { background: #f1f5f9; border-radius: 12px; padding: 16px; min-height: 320px; border: 2px dashed #cbd5e1; transition: all 0.2s ease; } .kanban-col.drag-over { background: #e0f2fe; border-color: #0284c7; } .col-header { font-size: 15px; margin-bottom: 12px; color: #1e293b; } .kanban-card { background: white; padding: 12px 16px; border-radius: 8px; margin-bottom: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.06); cursor: grab; transition: opacity 0.2s ease; } .kanban-card:active { cursor: grabbing; } .kanban-card.dragging { opacity: 0.4; } .badge { display: inline-block; font-size: 11px; padding: 2px 8px; border-radius: 999px; margin-top: 6px; } .badge.high { background: #fee2e2; color: #dc2626; } .badge.normal { background: #e0f2fe; color: #0284c7; }`,
      targetJs: `function updateKanbanCounts() {
  const colTodo = document.getElementById("col-todo");
  const colDone = document.getElementById("col-done");
  const todoCards = colTodo.querySelectorAll(".kanban-card");
  const doneCards = colDone.querySelectorAll(".kanban-card");
  document.getElementById("count-todo").textContent = todoCards.length;
  document.getElementById("count-done").textContent = doneCards.length;
}

const cards = document.querySelectorAll(".kanban-card");
const columns = document.querySelectorAll(".kanban-col");

cards.forEach(card => {
  card.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
    card.classList.add("dragging");
  });

  card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
  });
});

columns.forEach(col => {
  col.addEventListener("dragover", (e) => {
    e.preventDefault();
    col.classList.add("drag-over");
  });

  col.addEventListener("dragleave", () => {
    col.classList.remove("drag-over");
  });

  col.addEventListener("drop", (e) => {
    e.preventDefault();
    col.classList.remove("drag-over");
    const cardId = e.dataTransfer.getData("text/plain");
    const card = document.getElementById(cardId);
    if (card) {
      col.appendChild(card);
      updateKanbanCounts();
    }
  });
});

updateKanbanCounts();`,
      validation: (doc, css, js) => {
        const colTodo = doc.getElementById("col-todo");
        const colDone = doc.getElementById("col-done");
        const countTodo = doc.getElementById("count-todo");
        const countDone = doc.getElementById("count-done");

        if (!colTodo || !colDone) {
          return "ต้องมี element คอลัมน์ #col-todo และ #col-done";
        }
        if (!countTodo || !countDone) {
          return "ต้องมีป้ายระบุจำนวนงาน #count-todo และ #count-done";
        }

        const cards = doc.querySelectorAll(".kanban-card");
        if (cards.length < 2) {
          return "ต้องมีการ์ด .kanban-card อย่างน้อย 2 ใบ";
        }
        for (const card of cards) {
          if (card.getAttribute("draggable") !== "true") {
            return "การ์ดแต่ละใบต้องมีแอตทริบิวต์ draggable='true'";
          }
        }

        if (typeof js === 'string') {
          if (!js.includes("dataTransfer") || !js.includes("setData") || !js.includes("getData")) {
            return "ต้องใช้ DataTransfer API (setData และ getData) ตามสไลด์ ch4 JavaScript_3 หน้า 18-19";
          }
          if (!js.includes("preventDefault")) {
            return "ในอีเวนต์ dragover และ drop ต้องเรียก preventDefault() เพื่ออนุญาตให้วางได้";
          }
        }

        return true;
      },
      hints: [
        "ระบุ draggable='true' ให้กับการ์ดเพื่อเปิดใช้งาน HTML5 Drag & Drop",
        "ใน dragstart ใช้ ev.dataTransfer.setData('text/plain', ev.target.id)",
        "ใน dragover บนคอลัมน์ ต้องเรียก ev.preventDefault() เสมอเพื่อให้สามารถวาง (drop) ได้",
        "ใน drop ใช้ ev.dataTransfer.getData('text/plain') และ col.appendChild(cardElement) เพื่อย้ายการ์ด"
      ]
    },
    {
      id: "exam-this-constructor-payroll",
      title: "ข้อสอบปฏิบัติการที่ 11: ระบบคำนวณเงินเดือน & สวัสดิการพนักงาน (Object Constructor & this Binding)",
      category: "3. เทคนิคขั้นสูงและ Web APIs",
      difficulty: "ยาก (Advanced Exam)",
      xp: 270,
      description: `ข้อสอบชุดนี้สร้างขึ้นเพื่อทดสอบ **Object Constructor Function (สไลด์ 1 หน้า 57)** และ **Explicit this Binding ด้วย .call(), .apply(), และ .bind() (สไลด์ 3 หน้า 1-6)**

**ข้อกำหนดทางเทคนิค (Specifications):**
1. **Object Constructor Function:**
   - ประกาศ Constructor Function ชื่อ \`Employee(id, name, baseSalary, department)\`
   - กำหนดค่า \`this.id = id;\`, \`this.name = name;\`, \`this.baseSalary = baseSalary;\`, \`this.department = department;\`
   - สร้างพนักงานอย่างน้อย 2 คนด้วยคีย์เวิร์ด \`new\`:
     - \`emp1 = new Employee(1, "วิชัย สายโค้ด", 35000, "Engineering");\`
     - \`emp2 = new Employee(2, "กัญญา การตลาด", 42000, "Marketing");\`
2. **ฟังก์ชันคำนวณค่าตอบแทนพิเศษ (Standalone Function ที่ใช้ \`this\`):**
   - สร้างฟังก์ชันภายนอก \`calculateNetComp(bonusRate, taxRate)\`
   - ฟังก์ชันนี้ต้องเข้าถึงฐานเงินเดือนผ่าน \`this.baseSalary\`
   - สูตรคำนวณ: \`const bonus = this.baseSalary * bonusRate;\`
   - หักภาษี: \`const tax = (this.baseSalary + bonus) * (taxRate / 100);\`
   - คืนค่าสุทธิ: \`return Math.round(this.baseSalary + bonus - tax);\`
3. **Explicit Binding Execution:**
   - **ใช้ \`.call()\`:** คำนวณเงินเดือนสุทธิของ \`emp1\` โดยส่ง Arguments ทีละตัว: \`calculateNetComp.call(emp1, 1.5, 5)\`
   - **ใช้ \`.apply()\`:** คำนวณเงินเดือนสุทธิของ \`emp2\` โดยส่ง Arguments เป็น Array: \`calculateNetComp.apply(emp2, [2.0, 7])\`
   - **ใช้ \`.bind()\`:** สร้างฟังก์ชันผูกค่า \`calcEmp1 = calculateNetComp.bind(emp1);\`
4. **DOM Display:**
   - แสดงการ์ดพนักงานทั้ง 2 คนลงใน \`#payroll-list\`
   - มีปุ่ม \`<button id="btn-calc-payroll">คำนวณเงินเดือนสุทธิ</button>\` เมื่อกดจะแสดงผลลัพธ์สุทธิของการ์ดแต่ละใบ และอัปเดตยอดรวมงบประมาณบน \`<strong id="total-payroll-budget">0</strong>\``,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Payroll & this Binding</title>
</head>
<body>
  <div class="payroll-container">
    <h2>🏢 ระบบบัญชีเงินเดือนและสวัสดิการ (Object Constructor & this Binding)</h2>
    <div class="action-bar">
      <button id="btn-calc-payroll">💰 คำนวณเงินเดือนสุทธิและสวัสดิการ</button>
      <div class="budget-stat">งบประมาณรวม: <strong id="total-payroll-budget">0</strong> บาท</div>
    </div>
    <div id="payroll-list" class="cards-grid">
      <!-- การ์ดพนักงานจะแสดงที่นี่ -->
    </div>
  </div>
</body>
</html>`,
      starterCss: `body {
  font-family: 'Sarabun', sans-serif;
  background: #f8fafc;
  padding: 24px;
}
.payroll-container {
  max-width: 780px;
  margin: 0 auto;
}
.action-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  margin-bottom: 20px;
}
#btn-calc-payroll {
  background: #2563eb;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
}
#btn-calc-payroll:hover {
  background: #1d4ed8;
}
.budget-stat {
  font-size: 16px;
  color: #334155;
}
#total-payroll-budget {
  color: #059669;
  font-size: 20px;
}
.cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.emp-card {
  background: white;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.06);
  border-left: 5px solid #2563eb;
}
.emp-card h3 { margin: 0 0 8px 0; color: #1e293b; }
.emp-card p { margin: 4px 0; color: #64748b; font-size: 14px; }
.net-pay {
  margin-top: 12px;
  padding: 8px;
  background: #ecfdf5;
  border-radius: 6px;
  color: #047857;
  font-weight: bold;
}`,
      starterJs: `// เขียนโค้ด Object Constructor Function และ Explicit this Binding ของคุณที่นี่
`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Payroll & this Binding</title>
</head>
<body>
  <div class="payroll-container">
    <h2>🏢 ระบบบัญชีเงินเดือนและสวัสดิการ (Object Constructor & this Binding)</h2>
    <div class="action-bar">
      <button id="btn-calc-payroll">💰 คำนวณเงินเดือนสุทธิและสวัสดิการ</button>
      <div class="budget-stat">งบประมาณรวม: <strong id="total-payroll-budget">0</strong> บาท</div>
    </div>
    <div id="payroll-list" class="cards-grid">
      <!-- การ์ดพนักงานจะแสดงที่นี่ -->
    </div>
  </div>
</body>
</html>`,
      targetCss: `body { font-family: 'Sarabun', sans-serif; background: #f8fafc; padding: 24px; } .payroll-container { max-width: 780px; margin: 0 auto; } .action-bar { display: flex; justify-content: space-between; align-items: center; background: white; padding: 16px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); margin-bottom: 20px; } #btn-calc-payroll { background: #2563eb; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-size: 15px; cursor: pointer; font-weight: bold; } #btn-calc-payroll:hover { background: #1d4ed8; } .budget-stat { font-size: 16px; color: #334155; } #total-payroll-budget { color: #059669; font-size: 20px; } .cards-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; } .emp-card { background: white; border-radius: 12px; padding: 18px; box-shadow: 0 2px 4px rgba(0,0,0,0.06); border-left: 5px solid #2563eb; } .emp-card h3 { margin: 0 0 8px 0; color: #1e293b; } .emp-card p { margin: 4px 0; color: #64748b; font-size: 14px; } .net-pay { margin-top: 12px; padding: 8px; background: #ecfdf5; border-radius: 6px; color: #047857; font-weight: bold; }`,
      targetJs: `function Employee(id, name, baseSalary, department) {
  this.id = id;
  this.name = name;
  this.baseSalary = baseSalary;
  this.department = department;
}

function calculateNetComp(bonusRate, taxRate) {
  const bonus = this.baseSalary * bonusRate;
  const tax = (this.baseSalary + bonus) * (taxRate / 100);
  return Math.round(this.baseSalary + bonus - tax);
}

const emp1 = new Employee(1, "วิชัย สายโค้ด", 35000, "Engineering");
const emp2 = new Employee(2, "กัญญา การตลาด", 42000, "Marketing");
const employees = [emp1, emp2];

function renderEmployees() {
  const list = document.getElementById("payroll-list");
  list.innerHTML = "";
  employees.forEach(emp => {
    const card = document.createElement("div");
    card.className = "emp-card";
    card.id = \`emp-\${emp.id}\`;
    card.innerHTML = \`
      <h3>\${emp.name}</h3>
      <p>แผนก: \${emp.department}</p>
      <p>ฐานเงินเดือน: \${emp.baseSalary.toLocaleString()} บาท</p>
      <div class="net-pay" id="net-pay-\${emp.id}">รอการคำนวณ...</div>
    \`;
    list.appendChild(card);
  });
}

document.getElementById("btn-calc-payroll").addEventListener("click", () => {
  // คำนวณ emp1 ด้วย .call()
  const net1 = calculateNetComp.call(emp1, 1.5, 5);
  // คำนวณ emp2 ด้วย .apply()
  const net2 = calculateNetComp.apply(emp2, [2.0, 7]);
  // ผูกค่าด้วย .bind()
  const boundEmp1 = calculateNetComp.bind(emp1);

  document.getElementById("net-pay-1").textContent = \`ยอดสุทธิรวมโบนัส: \${net1.toLocaleString()} บาท\`;
  document.getElementById("net-pay-2").textContent = \`ยอดสุทธิรวมโบนัส: \${net2.toLocaleString()} บาท\`;

  const total = net1 + net2;
  document.getElementById("total-payroll-budget").textContent = total.toLocaleString();
});

renderEmployees();`,
      validation: (doc, css, js) => {
        const list = doc.getElementById("payroll-list");
        const calcBtn = doc.getElementById("btn-calc-payroll");
        const totalBudget = doc.getElementById("total-payroll-budget");

        if (!list || !calcBtn || !totalBudget) {
          return "ต้องมี element #payroll-list, #btn-calc-payroll และ #total-payroll-budget";
        }

        if (typeof js === 'string') {
          if (!js.includes("function Employee") || !js.includes("this.baseSalary")) {
            return "ต้องประกาศ Object Constructor Function Employee และกำหนดค่า properties ผ่าน this ตามสไลด์ 1 หน้า 57";
          }
          if (!js.includes(".call(") || !js.includes(".apply(")) {
            return "ต้องมีการเรียกใช้ .call() และ .apply() ในการทำ Explicit Binding ตามสไลด์ 3 หน้า 5-6";
          }
        }

        calcBtn.click();
        const cards = list.querySelectorAll(".emp-card");
        if (cards.length < 2) {
          return "ต้องเรนเดอร์การ์ดพนักงาน (.emp-card) อย่างน้อย 2 คน";
        }

        const netPay1 = doc.getElementById("net-pay-1");
        const netPay2 = doc.getElementById("net-pay-2");
        if (!netPay1 || !netPay2 || netPay1.textContent.includes("รอการคำนวณ")) {
          return "เมื่อคลิกปุ่ม #btn-calc-payroll ต้องคำนวณยอดเงินสุทธิของพนักงานทุกคน";
        }

        return true;
      },
      hints: [
        "สร้าง constructor: function Employee(id, name, baseSalary, department) { this.name = ... }",
        "ฟังก์ชันคำนวณดึงค่าผ่าน this.baseSalary",
        "ใช้ .call(emp1, 1.5, 5) สำหรับการส่ง arguments แยกตัว",
        "ใช้ .apply(emp2, [2.0, 7]) สำหรับการส่ง arguments รวมเป็น Array"
      ]
    },
    {
      id: "exam-dom-node-queue",
      title: "ข้อสอบปฏิบัติการที่ 12: ระบบจัดการคิวด่วนพิเศษ DOM Node Tree (insertBefore & replaceChild)",
      category: "2. การจัดการ DOM & ฟอร์ม",
      difficulty: "ยาก (Advanced Exam)",
      xp: 280,
      description: `ข้อสอบชุดนี้สร้างขึ้นเพื่อทดสอบทักษะการจัดการ **DOM Node Tree (สไลด์เล่ม 2 หน้า 24–35)** โดยเฉพาะการใช้เมธอด:
- \`parentElement.insertBefore(newChild, referenceNode)\` (หน้า 35)
- \`parentElement.replaceChild(newChild, oldChild)\` (หน้า 34)
- \`parentElement.removeChild(childNode)\` หรือ \`childNode.remove()\` (หน้า 33)
- \`parentElement.appendChild(newChild)\` (หน้า 31)

**ข้อกำหนดทางเทคนิค (Specifications):**
1. **HTML:**
   - รายการคิว: \`<ul id="queue-list">\` มีคิวเริ่มต้น 3 รายการ (\`<li class="queue-item">...</li>\`)
   - ช่องกรอกชื่อ: \`<input id="input-patient" placeholder="พิมพ์ชื่อผู้รับบริการ...">\`
   - ปุ่มปฏิบัติการ:
     - \`<button id="btn-add-normal">ต่อท้ายคิวปกติ (appendChild)</button>\`
     - \`<button id="btn-insert-vip">แทรกคิวด่วน VIP หน้าสุด (insertBefore)</button>\`
     - \`<button id="btn-replace-emergency">สลับแทนที่คิวแรกด้วยเคสฉุกเฉิน (replaceChild)</button>\`
     - \`<button id="btn-call-next">เรียกคิวถัดไป (removeChild)</button>\`
   - ป้ายสถานะ: ผู้รับบริการปัจจุบัน \`<span id="serving-now">ยังไม่มีผู้รับบริการ</span>\` และจำนวนคิวรอ \`<strong id="queue-count">3</strong>\`
2. **JavaScript DOM Node Tree Operations:**
   - **เมื่อกด #btn-add-normal:**
     - ตรวจสอบช่องกรอก ถ้ามีข้อความให้สร้าง \`li\` ใหม่ด้วย \`document.createElement("li")\` ใส่ class \`queue-item\`
     - นำไปต่อท้ายด้วยคำสั่ง \`queueList.appendChild(newLi);\`
   - **เมื่อกด #btn-insert-vip:**
     - ตรวจสอบช่องกรอก ถ้ามีข้อความให้สร้าง \`li\` ใหม่ ใส่ class \`queue-item vip\`
     - แทรกไว้หน้าสุดด้วยคำสั่ง \`queueList.insertBefore(newLi, queueList.firstElementChild);\` (หากคิวว่างให้ใช้ appendChild)
   - **เมื่อกด #btn-replace-emergency:**
     - ตรวจสอบช่องกรอก ถ้ามีข้อความและมีคิวรออยู่อย่างน้อย 1 รายการ ให้สร้าง \`li\` ใหม่ ใส่ class \`queue-item emergency\`
     - ทำการแทนที่คิวแรกทันทีด้วยคำสั่ง \`queueList.replaceChild(newLi, queueList.firstElementChild);\`
   - **เมื่อกด #btn-call-next:**
     - หากมีคิวอยู่ในรายการ ให้นำชื่อของคิวแรกไปแสดงบน \`#serving-now\`
     - นำคิวแรกออกจาก DOM ด้วยคำสั่ง \`queueList.removeChild(queueList.firstElementChild);\`
   - ทุกครั้งที่มีการเปลี่ยนแปลงคิว ให้อัปเดตตัวเลขบน \`#queue-count\` ให้เท่ากับ \`queueList.children.length\` เสมอ และล้างค่าในช่องพิมพ์ให้ว่าง`,
      starterHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Hospital Priority Queue</title>
</head>
<body>
  <div class="queue-app">
    <h2>🏥 ระบบจัดการคิวผู้ป่วย DOM Node Hierarchy</h2>
    <div class="status-panel">
      <div>กำลังตรวจ: <span id="serving-now">ยังไม่มีผู้รับบริการ</span></div>
      <div>รอในคิว: <strong id="queue-count">3</strong> ท่าน</div>
    </div>

    <div class="input-group">
      <input type="text" id="input-patient" placeholder="พิมพ์ชื่อผู้ป่วย...">
    </div>

    <div class="buttons-grid">
      <button id="btn-add-normal" class="btn normal">➕ ต่อท้ายคิวปกติ (appendChild)</button>
      <button id="btn-insert-vip" class="btn vip">⭐ แทรกคิว VIP หน้าสุด (insertBefore)</button>
      <button id="btn-replace-emergency" class="btn emergency">🚨 แทนที่ด้วยเคสฉุกเฉิน (replaceChild)</button>
      <button id="btn-call-next" class="btn next">🔔 เรียกคิวถัดไป (removeChild)</button>
    </div>

    <ul id="queue-list" class="queue-list">
      <li class="queue-item">นายสมชาย รักสงบ</li>
      <li class="queue-item">นางสาวมณี สดใส</li>
      <li class="queue-item">นายบุญมี มีสุข</li>
    </ul>
  </div>
</body>
</html>`,
      starterCss: `body {
  font-family: 'Sarabun', sans-serif;
  background: #f1f5f9;
  padding: 24px;
}
.queue-app {
  max-width: 650px;
  margin: 0 auto;
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
.status-panel {
  display: flex;
  justify-content: space-between;
  background: #e2e8f0;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 15px;
  font-weight: bold;
}
#serving-now { color: #0284c7; }
#queue-count { color: #dc2626; font-size: 18px; }
.input-group input {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 15px;
  box-sizing: border-box;
  margin-bottom: 14px;
}
.buttons-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 20px;
}
.btn {
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  font-weight: bold;
}
.btn.normal { background: #3b82f6; color: white; }
.btn.vip { background: #f59e0b; color: white; }
.btn.emergency { background: #ef4444; color: white; }
.btn.next { background: #10b981; color: white; }
.queue-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.queue-item {
  padding: 12px 16px;
  background: #f8fafc;
  border-left: 4px solid #3b82f6;
  margin-bottom: 8px;
  border-radius: 4px;
  font-size: 15px;
}
.queue-item.vip {
  border-left-color: #f59e0b;
  background: #fffbeb;
  font-weight: bold;
}
.queue-item.emergency {
  border-left-color: #ef4444;
  background: #fef2f2;
  color: #b91c1c;
  font-weight: bold;
}`,
      starterJs: `// เขียนโค้ดระบบจัดการ DOM Node Tree คิวผู้ป่วยของคุณที่นี่
`,
      targetHtml: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Hospital Priority Queue</title>
</head>
<body>
  <div class="queue-app">
    <h2>🏥 ระบบจัดการคิวผู้ป่วย DOM Node Hierarchy</h2>
    <div class="status-panel">
      <div>กำลังตรวจ: <span id="serving-now">ยังไม่มีผู้รับบริการ</span></div>
      <div>รอในคิว: <strong id="queue-count">3</strong> ท่าน</div>
    </div>

    <div class="input-group">
      <input type="text" id="input-patient" placeholder="พิมพ์ชื่อผู้ป่วย...">
    </div>

    <div class="buttons-grid">
      <button id="btn-add-normal" class="btn normal">➕ ต่อท้ายคิวปกติ (appendChild)</button>
      <button id="btn-insert-vip" class="btn vip">⭐ แทรกคิว VIP หน้าสุด (insertBefore)</button>
      <button id="btn-replace-emergency" class="btn emergency">🚨 แทนที่ด้วยเคสฉุกเฉิน (replaceChild)</button>
      <button id="btn-call-next" class="btn next">🔔 เรียกคิวถัดไป (removeChild)</button>
    </div>

    <ul id="queue-list" class="queue-list">
      <li class="queue-item">นายสมชาย รักสงบ</li>
      <li class="queue-item">นางสาวมณี สดใส</li>
      <li class="queue-item">นายบุญมี มีสุข</li>
    </ul>
  </div>
</body>
</html>`,
      targetCss: `body { font-family: 'Sarabun', sans-serif; background: #f1f5f9; padding: 24px; } .queue-app { max-width: 650px; margin: 0 auto; background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); } .status-panel { display: flex; justify-content: space-between; background: #e2e8f0; padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 15px; font-weight: bold; } #serving-now { color: #0284c7; } #queue-count { color: #dc2626; font-size: 18px; } .input-group input { width: 100%; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 15px; box-sizing: border-box; margin-bottom: 14px; } .buttons-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px; } .btn { padding: 10px; border: none; border-radius: 6px; font-size: 13px; cursor: pointer; font-weight: bold; } .btn.normal { background: #3b82f6; color: white; } .btn.vip { background: #f59e0b; color: white; } .btn.emergency { background: #ef4444; color: white; } .btn.next { background: #10b981; color: white; } .queue-list { list-style: none; padding: 0; margin: 0; } .queue-item { padding: 12px 16px; background: #f8fafc; border-left: 4px solid #3b82f6; margin-bottom: 8px; border-radius: 4px; font-size: 15px; } .queue-item.vip { border-left-color: #f59e0b; background: #fffbeb; font-weight: bold; } .queue-item.emergency { border-left-color: #ef4444; background: #fef2f2; color: #b91c1c; font-weight: bold; }`,
      targetJs: `const queueList = document.getElementById("queue-list");
const inputPatient = document.getElementById("input-patient");
const countEl = document.getElementById("queue-count");
const servingEl = document.getElementById("serving-now");

function updateQueueCount() {
  countEl.textContent = queueList.children.length;
}

document.getElementById("btn-add-normal").addEventListener("click", () => {
  const name = inputPatient.value.trim();
  if (!name) return;
  const li = document.createElement("li");
  li.className = "queue-item";
  li.textContent = name;
  queueList.appendChild(li);
  inputPatient.value = "";
  updateQueueCount();
});

document.getElementById("btn-insert-vip").addEventListener("click", () => {
  const name = inputPatient.value.trim();
  if (!name) return;
  const li = document.createElement("li");
  li.className = "queue-item vip";
  li.textContent = \`⭐ [VIP] \${name}\`;
  if (queueList.firstElementChild) {
    queueList.insertBefore(li, queueList.firstElementChild);
  } else {
    queueList.appendChild(li);
  }
  inputPatient.value = "";
  updateQueueCount();
});

document.getElementById("btn-replace-emergency").addEventListener("click", () => {
  const name = inputPatient.value.trim();
  if (!name) return;
  if (!queueList.firstElementChild) return;
  const li = document.createElement("li");
  li.className = "queue-item emergency";
  li.textContent = \`🚨 [ฉุกเฉิน] \${name}\`;
  queueList.replaceChild(li, queueList.firstElementChild);
  inputPatient.value = "";
  updateQueueCount();
});

document.getElementById("btn-call-next").addEventListener("click", () => {
  const first = queueList.firstElementChild;
  if (first) {
    servingEl.textContent = first.textContent;
    queueList.removeChild(first);
    updateQueueCount();
  }
});

updateQueueCount();`,
      validation: (doc, css, js) => {
        const queueList = doc.getElementById("queue-list");
        const inputPatient = doc.getElementById("input-patient");
        const btnAdd = doc.getElementById("btn-add-normal");
        const btnVip = doc.getElementById("btn-insert-vip");
        const btnEmergency = doc.getElementById("btn-replace-emergency");
        const btnNext = doc.getElementById("btn-call-next");
        const countEl = doc.getElementById("queue-count");
        const servingEl = doc.getElementById("serving-now");

        if (!queueList || !inputPatient || !btnAdd || !btnVip || !btnEmergency || !btnNext || !countEl || !servingEl) {
          return "ต้องมีครบทุกองค์ประกอบ: #queue-list, #input-patient, ปุ่มทั้ง 4, #queue-count และ #serving-now";
        }

        if (typeof js === 'string') {
          if (!js.includes("insertBefore")) {
            return "ต้องใช้เมธอด insertBefore() สำหรับแทรกคิวด่วน VIP ตามสไลด์ 2 หน้า 35";
          }
          if (!js.includes("replaceChild")) {
            return "ต้องใช้เมธอด replaceChild() สำหรับสลับแทนที่คิวฉุกเฉินตามสไลด์ 2 หน้า 34";
          }
          if (!js.includes("removeChild")) {
            return "ต้องใช้เมธอด removeChild() สำหรับนำคิวที่เรียกแล้วออกจาก DOM Tree ตามสไลด์ 2 หน้า 33";
          }
        }

        // Test insert VIP
        inputPatient.value = "คุณหญิงสุดสวย";
        btnVip.click();
        if (!queueList.firstElementChild || !queueList.firstElementChild.textContent.includes("คุณหญิงสุดสวย")) {
          return "เมื่อกด #btn-insert-vip โหนดใหม่ต้องถูกแทรกไว้ที่ตำแหน่งแรกสุดด้วย insertBefore()";
        }

        // Test replace emergency
        inputPatient.value = "คนไข้หัวใจวิกฤต";
        btnEmergency.click();
        if (!queueList.firstElementChild || !queueList.firstElementChild.textContent.includes("คนไข้หัวใจวิกฤต")) {
          return "เมื่อกด #btn-replace-emergency โหนดแรกต้องถูกแทนที่ด้วย replaceChild()";
        }

        // Test call next
        btnNext.click();
        if (!servingEl.textContent.includes("คนไข้หัวใจวิกฤต")) {
          return "เมื่อกด #btn-call-next ต้องนำชื่อผู้ป่วยแรกไปแสดงบน #serving-now และลบออกจากรายการด้วย removeChild()";
        }

        return true;
      },
      hints: [
        "ใช้ queueList.appendChild(newLi) เพื่อต่อท้ายคิวปกติ",
        "ใช้ queueList.insertBefore(newLi, queueList.firstElementChild) เพื่อแทรกไว้หน้าสุด",
        "ใช้ queueList.replaceChild(emergencyLi, queueList.firstElementChild) เพื่อแทนที่คิวแรก",
        "ใช้ queueList.removeChild(queueList.firstElementChild) เพื่อนำโหนดแรกออก"
      ]
    }
  ],

  // ==========================================
  // คลังข้อสอบควิซ (Interactive Quiz Bank)
  // ครอบคลุมเนื้อหาทั้ง 3 สไลด์ พร้อมคำอธิบายเฉลยละเอียดภาษาไทย
  // ==========================================
  quizBank: [
    // --- บทที่ 1: JavaScript Fundamentals ---
    {
      id: "q1",
      category: "Part 1: พื้นฐาน JavaScript",
      chapter: 1,
      question: "ข้อใดอธิบายความแตกต่างระหว่าง 'let' และ 'var' ในการประกาศตัวแปรได้ถูกต้องที่สุด?",
      codeSnippet: `function test() {
  if (true) {
    var a = 10;
    let b = 20;
  }
  console.log(a);
  console.log(b);
}`,
      options: [
        "a แสดง 10, b เกิด ReferenceError เพราะ let มีขอบเขตแบบ Block-scoped",
        "ทั้ง a และ b แสดงค่า 10 และ 20 ได้ตามปกติ เพราะอยู่ในฟังก์ชันเดียวกัน",
        "ทั้งคู่เกิด ReferenceError เพราะประกาศอยู่ภายในบล็อก if",
        "b แสดง 20 แต่ a เกิดข้อผิดพลาดเพราะ var ไม่สามารถใช้งานใน if ได้"
      ],
      correctIndex: 0,
      explanation: "ถูกต้องครับ! 'var' มีขอบเขตแบบ Function scope ทำให้ทะลุบล็อก if ออกมาภายนอกได้ ในขณะที่ 'let' และ 'const' มีขอบเขตแบบ Block scope { ... } ทำให้ตัวแปร b ถูกจำกัดอยู่เฉพาะภายในปีกกา if เท่านั้น หากเรียกนอกบล็อกจะเกิด ReferenceError ทันที"
    },
    {
      id: "q2",
      category: "Part 1: พื้นฐาน JavaScript",
      chapter: 1,
      question: "ผลลัพธ์ของการเปรียบเทียบต่อไปนี้คือข้อใดตามลำดับ?",
      codeSnippet: `console.log(5 == "5");
console.log(5 === "5");
console.log(typeof NaN);`,
      options: [
        "true, false, 'number'",
        "false, false, 'undefined'",
        "true, true, 'NaN'",
        "true, false, 'string'"
      ],
      correctIndex: 0,
      explanation: "5 == '5' เป็นการเปรียบเทียบแบบ Loose Equality โดยจะเกิด Type Coercion แปลงประเภทข้อมูลให้อัตโนมัติจึงได้ true, ส่วน 5 === '5' เป็น Strict Equality ที่ตรวจทั้งค่าและ Data Type (Number vs String) จึงได้ false, และ typeof NaN ใน JavaScript มีค่าเป็น 'number'"
    },
    {
      id: "q3",
      category: "Part 1: พื้นฐาน JavaScript",
      chapter: 1,
      question: "คำสั่งใดต่อไปนี้ใช้แปลง JavaScript Object ให้กลายเป็นสตริงในรูปแบบ JSON?",
      options: [
        "JSON.stringify(myObject)",
        "JSON.parse(myObject)",
        "myObject.toStringJSON()",
        "Object.toJSON(myObject)"
      ],
      correctIndex: 0,
      explanation: "JSON.stringify() ใช้สำหรับ Serialize ออบเจกต์หรืออาร์เรย์ให้กลายเป็นข้อความ JSON string ในขณะที่ JSON.parse() ใช้สำหรับแปลง JSON string กลับมาเป็น JavaScript Object"
    },
    {
      id: "q4",
      category: "Part 1: พื้นฐาน JavaScript",
      chapter: 1,
      question: "ข้อใดคือผลลัพธ์ของโค้ดอาร์เรย์ต่อไปนี้?",
      codeSnippet: `const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Mango");
fruits.shift();
console.log(fruits.join(", "));`,
      options: [
        "Orange, Apple, Mango",
        "Banana, Orange, Apple, Mango",
        "Banana, Orange, Apple",
        "Mango, Orange, Apple"
      ],
      correctIndex: 0,
      explanation: "fruits.push('Mango') จะเพิ่ม 'Mango' เข้าไปที่ท้ายอาร์เรย์ กลายเป็น ['Banana', 'Orange', 'Apple', 'Mango'] จากนั้น .shift() จะนำสมาชิกตัวแรกสุด ('Banana') ออก ทำให้เหลือ ['Orange', 'Apple', 'Mango'] เมื่อนำมา .join(', ') จึงได้ 'Orange, Apple, Mango'"
    },
    {
      id: "q5",
      category: "Part 1: พื้นฐาน JavaScript",
      chapter: 1,
      question: "ความแตกต่างระหว่างลูป 'for...in' และ 'for...of' ใน JavaScript คือข้อใด?",
      options: [
        "for...in ใช้วนลูปผ่านคีย์/Properties (Keys) ส่วน for...of ใช้วนลูปผ่านค่าสมาชิก (Values)",
        "for...in ใช้กับ Array เท่านั้น ส่วน for...of ใช้กับ Object เท่านั้น",
        "for...in วนลูปตามเงื่อนไขตัวเลข ส่วน for...of เป็นการวนลูปแบบไม่สิ้นสุด",
        "ทั้งสองคำสั่งทำงานเหมือนกันทุกประการเป็นเพียงไวยากรณ์คนละแบบ"
      ],
      correctIndex: 0,
      explanation: "for...in ถูกออกแบบมาสำหรับ Enumerating properties หรือดึงชื่อคีย์ (Keys/Indices) ของออบเจกต์ ในขณะที่ for...of ใช้สำหรับดึงค่าของสมาชิก (Iterate values) ของ Iterable objects เช่น Array, String หรือ Set"
    },
    {
      id: "q6",
      category: "Part 1: พื้นฐาน JavaScript",
      chapter: 1,
      question: "ผลลัพธ์ของ Ternary Operator ในโค้ดนี้คืออะไร?",
      codeSnippet: `const score = 75;
const result = score >= 80 ? "เกียรตินิยม" : score >= 50 ? "ผ่าน" : "ไม่ผ่าน";
console.log(result);`,
      options: [
        "ผ่าน",
        "เกียรตินิยม",
        "ไม่ผ่าน",
        "undefined"
      ],
      correctIndex: 0,
      explanation: "score มีค่า 75 เมื่อเช็คเงื่อนไขแรก score >= 80 จะเป็น false จึงตกมาทำส่วนหลัง คือ score >= 50 ซึ่งเป็นจริง (75 >= 50) จึงได้ผลลัพธ์เป็น 'ผ่าน'"
    },
    {
      id: "q7",
      category: "Part 1: พื้นฐาน JavaScript",
      chapter: 1,
      question: "คำสั่งใดใช้หาจำนวนสมาชิกทั้งหมดใน Array ชื่อ 'students'?",
      options: [
        "students.length",
        "students.count()",
        "students.size",
        "sizeof(students)"
      ],
      correctIndex: 0,
      explanation: "ใน JavaScript อาร์เรย์มี Property ชื่อ .length ที่ใช้ส่งกลับจำนวนสมาชิกทั้งหมด (ไม่ใช่เมธอด จึงไม่มีวงเล็บเปิดปิด)"
    },

    // --- บทที่ 2: HTML DOM & Form Validation ---
    {
      id: "q8",
      category: "Part 2: การจัดการ DOM & ฟอร์ม",
      chapter: 2,
      question: "เมธอดใดในการเลือก Element ที่คืนค่าเป็น NodeList ของทุกๆ Element ที่ตรงกับ CSS Selector?",
      options: [
        "document.querySelectorAll()",
        "document.querySelector()",
        "document.getElementById()",
        "document.getElementsByTagName()"
      ],
      correctIndex: 0,
      explanation: "document.querySelectorAll('selector') จะคืนค่าเป็น NodeList ของทุก Element ที่ตรงกับตัวเลือก CSS Selector ในขณะที่ querySelector() จะเลือกเฉพาะ Element แรกเพียงตัวเดียว"
    },
    {
      id: "q9",
      category: "Part 2: การจัดการ DOM & ฟอร์ม",
      chapter: 2,
      question: "หากต้องการเปลี่ยนสีข้อความของปุ่ม id='myBtn' ให้เป็นสีแดงด้วย JavaScript ต้องเขียนอย่างไร?",
      options: [
        "document.getElementById('myBtn').style.color = 'red';",
        "document.getElementById('myBtn').style.fontColor = 'red';",
        "document.getElementById('myBtn').css('color', 'red');",
        "document.getElementById('myBtn').color = 'red';"
      ],
      correctIndex: 0,
      explanation: "การเปลี่ยนสไตล์ของ HTML Element ผ่าน JavaScript ทำได้โดยเข้าถึง Property .style ตามด้วยชื่อของคุณสมบัติ CSS เช่น .style.color = 'red' หรือ .style.backgroundColor = 'blue'"
    },
    {
      id: "q10",
      category: "Part 2: การจัดการ DOM & ฟอร์ม",
      chapter: 2,
      question: "ในการตรวจฟอร์ม (Form Validation) คำสั่งใดใช้สำหรับหยุดการส่งฟอร์มและป้องกันไม่ให้เบราว์เซอร์รีเฟรชหน้าเว็บ?",
      codeSnippet: `form.addEventListener('submit', function(event) {
  // บรรทัดนี้ควรใส่อะไร?
});`,
      options: [
        "event.preventDefault();",
        "event.stopPropagation();",
        "window.stop();",
        "form.cancelSubmit();"
      ],
      correctIndex: 0,
      explanation: "event.preventDefault() ใช้สำหรับป้องกันพฤติกรรมเริ่มต้น (Default action) ของอีเวนต์นั้นๆ ซึ่งสำหรับฟอร์มคือการส่งข้อมูลและ Refresh หน้าเว็บ ทำให้เราสามารถตรวจสอบข้อมูลด้วย JavaScript ก่อนส่งได้"
    },
    {
      id: "q11",
      category: "Part 2: การจัดการ DOM & ฟอร์ม",
      chapter: 2,
      question: "ลำดับคำสั่งใดที่ถูกต้องในการสร้างแท็ก <p> ใหม่ และนำไปต่อท้ายภายใน <div> ที่มี id='box'?",
      options: [
        "const p = document.createElement('p'); document.getElementById('box').appendChild(p);",
        "const p = document.newElement('p'); document.getElementById('box').insert(p);",
        "document.getElementById('box').createChild('p');",
        "const p = document.appendElement('p'); document.getElementById('box').add(p);"
      ],
      correctIndex: 0,
      explanation: "การเพิ่มโหนดใน DOM ต้องสร้าง element ก่อนด้วย document.createElement('tagName') จากนั้นจึงใช้ parentElement.appendChild(newNode) เพื่อนำไปต่อท้าย"
    },
    {
      id: "q12",
      category: "Part 2: การจัดการ DOM & ฟอร์ม",
      chapter: 2,
      question: "ความแตกต่างระหว่าง innerHTML และ textContent คือข้อใด?",
      options: [
        "innerHTML จะแปลงข้อความเป็นแท็ก HTML ได้ ส่วน textContent จะมองทุกอย่างเป็นข้อความธรรมดา (ปลอดภัยจาก XSS)",
        "textContent ใช้ได้กับ <input> เท่านั้น ส่วน innerHTML ใช้กับ <div>",
        "innerHTML อ่านได้เฉพาะสไตล์ CSS ส่วน textContent อ่านตัวหนังสือ",
        "ทั้งสองคำสั่งทำงานเหมือนกันทุกประการ ไม่มีข้อแตกต่าง"
      ],
      correctIndex: 0,
      explanation: "innerHTML จะทำการ Parse ข้อความให้กลายเป็นโครงสร้างแท็ก HTML ในขณะที่ textContent (หรือ innerText) จะแทรกข้อความแบบ Raw Text เสมอ จึงช่วยป้องกันช่องโหว่ด้านความปลอดภัย Cross-Site Scripting (XSS) ได้ดีกว่า"
    },

    // --- บทที่ 3: Advanced JS & Web APIs ---
    {
      id: "q13",
      category: "Part 3: เทคนิคขั้นสูงและ Web APIs",
      chapter: 3,
      question: "ใน Regular Function ของ Object Method คีย์เวิร์ด 'this' จะชี้ไปที่อะไร?",
      codeSnippet: `const person = {
  name: "John",
  greet: function() {
    console.log(this.name);
  }
};
person.greet();`,
      options: [
        "ชี้ไปที่ออบเจกต์ 'person' (เจ้าของเมธอดนั้น)",
        "ชี้ไปที่ global object (window)",
        "ชี้ไปที่ฟังก์ชัน greet เสมอ",
        "มีค่าเป็น undefined"
      ],
      correctIndex: 0,
      explanation: "เมื่อฟังก์ชันถูกเรียกใช้ในฐานะ Method ของออบเจกต์ (person.greet()) คีย์เวิร์ด 'this' ภายในฟังก์ชันนั้นจะอ้างอิงถึงออบเจกต์ที่เป็นเจ้าของ คือ 'person' ทำให้ this.name ได้ค่า 'John'"
    },
    {
      id: "q14",
      category: "Part 3: เทคนิคขั้นสูงและ Web APIs",
      chapter: 3,
      question: "ข้อใดอธิบายความแตกต่างระหว่าง .call() และ .bind() ในการทำ Explicit Binding ได้ถูกต้อง?",
      options: [
        ".call() จะรันฟังก์ชันทันที ส่วน .bind() จะคืนค่าเป็นฟังก์ชันใหม่ที่ถูกตรึงค่า this ไว้สำหรับเรียกใช้ภายหลัง",
        ".bind() จะรันฟังก์ชันทันที ส่วน .call() ไม่สามารถรับ arguments ได้",
        "ทั้งคู่เหมือนกันทุกประการ",
        ".call() ใช้ได้กับ Arrow Function เท่านั้น"
      ],
      correctIndex: 0,
      explanation: ".call(thisArg, ...args) จะทำการเรียกประมวลผลฟังก์ชันนั้นทันทีโดยเปลี่ยนค่า this ตามที่ระบุ ส่วน .bind(thisArg) จะสร้างฟังก์ชันใหม่ขึ้นมา (Copy) โดยผูกค่า this ไว้อย่างถาวรเพื่อรอการเรียกใช้ในอนาคต"
    },
    {
      id: "q15",
      category: "Part 3: เทคนิคขั้นสูงและ Web APIs",
      chapter: 3,
      question: "หากต้องการสั่งให้ฟังก์ชัน showAlert ทำงานซ้ำทุกๆ 3 วินาที จะต้องใช้คำสั่งใด?",
      options: [
        "setInterval(showAlert, 3000);",
        "setTimeout(showAlert, 3000);",
        "setTimer(showAlert, 3);",
        "wait(3000).repeat(showAlert);"
      ],
      correctIndex: 0,
      explanation: "setInterval(callback, milliseconds) เป็นคำสั่งสำหรับสั่งให้ฟังก์ชันทำงานวนซ้ำอย่างต่อเนื่องตามคาบเวลาที่ระบุ (หน่วยเป็นมิลลิวินาที 1 วินาที = 1000ms ดังนั้น 3 วินาที = 3000ms) ในขณะที่ setTimeout จะทำงานเพียงครั้งเดียว"
    },
    {
      id: "q16",
      category: "Part 3: เทคนิคขั้นสูงและ Web APIs",
      chapter: 3,
      question: "ความแตกต่างสำคัญระหว่าง 'localStorage' และ 'sessionStorage' คือข้อใด?",
      options: [
        "localStorage ข้อมูลจะคงอยู่ตลอดไปจนกว่าจะถูกลบ ส่วน sessionStorage ข้อมูลจะหายไปทันทีเมื่อปิดแท็บเบราว์เซอร์",
        "localStorage เก็บได้เฉพาะตัวเลข ส่วน sessionStorage เก็บสตริงได้",
        "sessionStorage เก็บข้อมูลบน Server ส่วน localStorage เก็บข้อมูลบน Browser",
        "localStorage ปลอดภัยกว่า sessionStorage เพราะเข้ารหัสอัตโนมัติ"
      ],
      correctIndex: 0,
      explanation: "ตามสไลด์ ch4 JavaScript_3 หน้า 20-24 ทั้งคู่เก็บข้อมูลฝั่ง Client (เบราว์เซอร์) แต่ localStorage มีอายุยาวนานไม่มีวันหมดอายุจนกว่าผู้ใช้จะล้างแคชหรือเขียนโค้ดลบ ส่วน sessionStorage จะมีอายุอยู่เฉพาะใน Session ของแท็บนั้นๆ เมื่อปิดแท็บข้อมูลจะถูกทำลายทันที"
    },
    {
      id: "q17",
      category: "Part 3: เทคนิคขั้นสูงและ Web APIs",
      chapter: 3,
      question: "ในการทำ HTML5 Drag & Drop ข้อใดคือแอตทริบิวต์ที่ต้องใส่ให้กับองค์ประกอบ HTML เพื่อให้ผู้ใช้สามารถลากได้?",
      codeSnippet: `<div id="dragItem" ???>ลากฉันสิ</div>`,
      options: [
        "draggable=\"true\"",
        "drag=\"enabled\"",
        "allow-drag=\"yes\"",
        "droppable=\"false\""
      ],
      correctIndex: 0,
      explanation: "ใน HTML5 การกำหนดให้ Element ใดๆ สามารถลากได้ จะต้องระบุแอตทริบิวต์ draggable=\"true\" (ตามสไลด์ ch4 JavaScript_3 หน้า 18)"
    },
    {
      id: "q18",
      category: "Part 3: เทคนิคขั้นสูงและ Web APIs",
      chapter: 3,
      question: "หากต้องการหยุดการทำงานของตัวนับเวลาที่สร้างจาก setInterval(myFunc, 1000) จะต้องใช้คำสั่งใด?",
      codeSnippet: `const timerId = setInterval(myFunc, 1000);`,
      options: [
        "clearInterval(timerId);",
        "clearTimeout(timerId);",
        "timerId.stop();",
        "stopInterval(timerId);"
      ],
      correctIndex: 0,
      explanation: "เมื่อสร้าง setInterval ตัวฟังก์ชันจะคืนค่า timer ID ออกมา ซึ่งเราสามารถนำ ID นี้ไปยกเลิกการทำงานได้ด้วยคำสั่ง clearInterval(timerId)"
    },
    {
      id: "q19",
      category: "Part 1: พื้นฐาน JavaScript",
      chapter: 1,
      question: "ข้อใดคือการเขียน Arrow Function ที่รับตัวเลข x แล้วคืนค่า x ยกกำลัง 2 ที่ถูกต้องและสั้นที่สุด?",
      options: [
        "const square = x => x ** 2;",
        "const square = (x) { return x ** 2; };",
        "const square = function(x) => x ** 2;",
        "const square => x = x ** 2;"
      ],
      correctIndex: 0,
      explanation: "หาก Arrow Function มีพารามิเตอร์เพียงตัวเดียวสามารถละเว้นวงเล็บรอบพารามิเตอร์ได้ และหากมีคำสั่งคืนค่าเพียงอย่างเดียวสามารถละเว้นปีกกาและคำว่า return ได้ (Implicit return) จึงเขียนได้เป็น: const square = x => x ** 2;"
    },
    {
      id: "q20",
      category: "Part 2: การจัดการ DOM & ฟอร์ม",
      chapter: 2,
      question: "หากต้องการเพิ่มคลาส CSS ชื่อ 'highlight' ให้กับ element id='card' โดยไม่ลบคลาสเดิมออก ต้องเขียนอย่างไร?",
      options: [
        "document.getElementById('card').classList.add('highlight');",
        "document.getElementById('card').className = 'highlight';",
        "document.getElementById('card').addClass('highlight');",
        "document.getElementById('card').style.class = 'highlight';"
      ],
      correctIndex: 0,
      explanation: "การใช้ .classList.add('className') จะเป็นการเพิ่มคลาสใหม่ต่อท้ายคลาสเดิมโดยไม่ไปทับหรือลบคลาสที่มีอยู่แล้ว ในขณะที่ .className = 'highlight' จะเป็นการเขียนทับคลาสเดิมทั้งหมด"
    },
    {
      id: "q33",
      category: "Part 1: พื้นฐาน JavaScript",
      chapter: 1,
      question: "ตามสไลด์ ch4 JavaScript หน้า 57 หากต้องการสร้างพิมพ์เขียวสำหรับออบเจกต์ประเภทเดียวกันหลายๆ ชิ้น (Object Type Blueprint) ต้องใช้สิ่งใด?",
      codeSnippet: `function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}
const father = new Person("John", "Doe", 50);`,
      options: [
        "Object Constructor Function โดยเรียกใช้คู่กับคีย์เวิร์ด new",
        "Object Literal แบบธรรมดา",
        "Array.prototype.push()",
        "JSON.stringify()"
      ],
      correctIndex: 0,
      explanation: "ตามสไลด์ ch4 JavaScript หน้า 57 การสร้างโครงสร้างต้นแบบ (Object Type) เพื่อสร้าง Object ซ้ำๆ ได้อย่างสะดวก จะใช้ 'Object Constructor Function' นิยมตั้งชื่อขึ้นต้นด้วยตัวพิมพ์ใหญ่ และสร้าง Instance ใหม่ด้วยคีย์เวิร์ด 'new'"
    },
    {
      id: "q34",
      category: "Part 2: การจัดการ DOM & ฟอร์ม",
      chapter: 2,
      question: "ตามสไลด์ ch4 JavaScript_2 หน้า 34-35 เมธอดใดของโหนดแม่ที่ใช้สำหรับ 'แทนที่โหนดลูกเดิมด้วยโหนดใหม่'?",
      codeSnippet: `const parent = document.getElementById("div1");
const child = document.getElementById("p1");
const newPara = document.createElement("p");
newPara.textContent = "เนื้อหาใหม่";
// คำสั่งแทนที่ child ด้วย newPara คือข้อใด?`,
      options: [
        "parent.replaceChild(newPara, child);",
        "parent.insertBefore(newPara, child);",
        "parent.appendChild(newPara, child);",
        "child.replaceWith(parent);"
      ],
      correctIndex: 0,
      explanation: "ตามสไลด์ ch4 JavaScript_2 หน้า 34 เมธอด parentElement.replaceChild(newChild, oldChild) ใช้สำหรับสลับแทนที่โหนดลูกเดิมด้วยโหนดลูกใหม่ ส่วน insertBefore() ใช้แทรกโหนดใหม่ไว้ข้างหน้าโหนดที่มีอยู่เดิม"
    },
    {
      id: "q35",
      category: "Part 2: การจัดการ DOM & ฟอร์ม",
      chapter: 2,
      question: "ตามสไลด์ ch4 JavaScript_2 หน้า 8 และหน้า 23 การเข้าถึงค่าของช่องกรอกชื่อ 'fname' ในฟอร์มชื่อ 'myForm' ผ่าน DOM Collection ทำได้ตามข้อใด?",
      codeSnippet: `<form name="myForm" action="/submit" onsubmit="return validateForm()">
  <input type="text" name="fname">
</form>`,
      options: [
        "document.forms[\"myForm\"][\"fname\"].value",
        "document.getForm(\"myForm\").getValue(\"fname\")",
        "document.elements[\"myForm\"].fname",
        "document.forms.getInput(\"fname\").text"
      ],
      correctIndex: 0,
      explanation: "ตามสไลด์ ch4 JavaScript_2 หน้า 8 และ 23 เราสามารถเข้าถึง Elements ในฟอร์มผ่าน Collection document.forms โดยระบุชื่อ form name และ field name เช่น document.forms[\"myForm\"][\"fname\"].value"
    },
    {
      id: "q36",
      category: "Part 3: เทคนิคขั้นสูงและ Web APIs",
      chapter: 3,
      question: "ตามสไลด์ ch4 JavaScript_3 หน้า 17 คำสั่งใดใน Geolocation API ใช้สำหรับขอพิกัดละติจูดและลองจิจูดปัจจุบันของผู้ใช้?",
      codeSnippet: `if (navigator.geolocation) {
  // เรียกคำสั่งดึงพิกัดตำแหน่งปัจจุบัน
}`,
      options: [
        "navigator.geolocation.getCurrentPosition(showPosition);",
        "navigator.geolocation.watchGPS(showPosition);",
        "window.getLocation.getCoordinates();",
        "document.geolocation.fetchPosition();"
      ],
      correctIndex: 0,
      explanation: "ตามสไลด์ ch4 JavaScript_3 หน้า 17 การขอตำแหน่งพิกัดทางภูมิศาสตร์ของเบราว์เซอร์ ใช้เมธอด navigator.geolocation.getCurrentPosition(successCallback, errorCallback)"
    },
    {
      id: "q37",
      category: "Part 3: เทคนิคขั้นสูงและ Web APIs",
      chapter: 3,
      question: "ตามสไลด์ ch4 JavaScript_3 หน้า 5-6 ข้อใดอธิบายความแตกต่างระหว่าง .call() และ .apply() ได้ถูกต้องที่สุด?",
      codeSnippet: `const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
};
const person1 = { firstName: "John", lastName: "Doe" };`,
      options: [
        ".call() รับ Arguments แยกเป็นตัวๆ ด้วยเครื่องหมายจุลภาค ส่วน .apply() รับ Arguments ทั้งหมดรวมกันเป็น Array",
        ".apply() รับ Arguments แยกเป็นตัวๆ ส่วน .call() บังคับส่งเป็น Array",
        ".apply() ทำงานแบบอะซิงโครนัส ส่วน .call() ทำงานแบบซิงโครนัส",
        "ทั้งคู่รับ Arguments เป็น Array เหมือนกันทุกประการ"
      ],
      correctIndex: 0,
      explanation: "ตามสไลด์ ch4 JavaScript_3 หน้า 5-6 เมธอด .call() และ .apply() รันฟังก์ชันทันทีเหมือนกัน แต่จุดต่างคือ .call() จะส่ง argument ทีละตัว เช่น .call(person1, 'Oslo', 'Norway') ในขณะที่ .apply() จะส่ง arguments รวมกันเป็น Array เช่น .apply(person1, ['Oslo', 'Norway'])"
    },

    // ==========================================
    // ส่วนเพิ่มเติมพิเศษ: นอกเนื้อหาสไลด์ (Modern JS & Real-World Pro Tips)
    // ==========================================
    {
      id: "q21",
      category: "นอกเนื้อหาสไลด์: Modern JS",
      chapter: 4,
      question: "ข้อใดอธิบายประโยชน์สำคัญที่สุดของ 'async/await' ใน ES2017 เมื่อเทียบกับ Promise .then() แบบดั้งเดิม?",
      codeSnippet: `async function loadData() {
  try {
    const res = await fetch("https://api.example.com/users");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("เกิดข้อผิดพลาด:", err);
  }
}`,
      options: [
        "ช่วยให้เขียนโค้ดอะซิงโครนัสให้อ่านง่ายเหมือนลำดับบรรทัดซิงโครนัส และดักจับ Error ด้วย try...catch ได้อย่างสะดวก",
        "ทำให้ฟังก์ชันทำงานเร็วขึ้นเป็น 2 เท่าเพราะแปลงโค้ดเป็น Multithreading อัตโนมัติ",
        "ยกเลิกการทำงานของ Promise ทิ้งไปโดยไม่จำเป็นต้องใช้ Promise อีกต่อไป",
        "ทำงานได้เฉพาะบน Node.js แต่ไม่สามารถทำงานบนเว็บเบราว์เซอร์ได้"
      ],
      correctIndex: 0,
      explanation: "async/await เป็น Syntactic Sugar ที่ครอบการทำงานของ Promise เพื่อให้นักพัฒนาสามารถเขียนโค้ด Asynchronous ให้อ่านง่าย เป็นระเบียบเหมือนโค้ด Synchronous ทั่วไป และสามารถใช้ try...catch ในการดักจับข้อผิดพลาดได้โดยตรง ช่วยลดปัญหา Callback Hell"
    },
    {
      id: "q22",
      category: "นอกเนื้อหาสไลด์: Modern JS",
      chapter: 4,
      question: "ผลลัพธ์ของคำสั่ง Destructuring Assignment พร้อม Default Value ต่อไปนี้คือข้อใด?",
      codeSnippet: `const user = { id: 101, username: "dev_pro", role: "admin" };
const { username, role, level = "beginner" } = user;
console.log(username, role, level);`,
      options: [
        "dev_pro admin beginner",
        "dev_pro admin undefined",
        "undefined undefined beginner",
        "เกิดข้อผิดพลาด ReferenceError"
      ],
      correctIndex: 0,
      explanation: "Destructuring ช่วยดึงค่า property ออกมาจาก Object ได้อย่างรวดเร็ว และเราสามารถระบุ Default Value (level = 'beginner') ไว้ได้ หากใน Object ต้นทางไม่มีค่านั้น (undefined) ตัวแปรจะได้ค่าเริ่มต้นทันที"
    },
    {
      id: "q23",
      category: "นอกเนื้อหาสไลด์: Modern JS",
      chapter: 4,
      question: "การใช้ Spread Syntax (...) ในการคัดลอก Array ในโค้ดนี้ส่งผลลัพธ์อย่างไร?",
      codeSnippet: `const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original.length, copy.length);`,
      options: [
        "3 4 เพราะ Spread Operator [...] สร้าง Array ใหม่แยกออกจาก Array เดิม (Shallow Copy)",
        "4 4 เพราะ copy ชี้ไปยังตำแหน่งหน่วยความจำเดียวกับ original",
        "3 3 เพราะไม่สามารถ push สมาชิกใหม่เข้าไปใน copy ได้",
        "เกิดข้อผิดพลาด SyntaxError จากเครื่องหมาย ..."
      ],
      correctIndex: 0,
      explanation: "การใช้ Spread Operator [...original] จะเป็นการสร้าง Array ก้อนใหม่แยกต่างหาก (Shallow Copy) ดังนั้นการแก้ไข copy.push(4) จึงไม่กระทบต่อ original ที่ยังคงมีความยาว 3 ตัวเท่าเดิม ต่างจากการเขียน copy = original ที่เป็นเพียงการส่ง Reference เดียวกัน"
    },
    {
      id: "q24",
      category: "นอกเนื้อหาสไลด์: Modern JS",
      chapter: 4,
      question: "ผลลัพธ์ของการรัน Array Higher-Order Methods (.filter() และ .map()) ด้านล่างคือข้อใด?",
      codeSnippet: `const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 10);
console.log(result);`,
      options: [
        "[20, 40]",
        "[10, 30, 50]",
        "[2, 4]",
        "[10, 20, 30, 40, 50]"
      ],
      correctIndex: 0,
      explanation: ".filter(n => n % 2 === 0) จะคัดกรองเอาเฉพาะเลขคู่ ได้ผลลัพธ์เป็น [2, 4] จากนั้นนำมา .map(n => n * 10) เพื่อนำสมาชิกแต่ละตัวไปคูณ 10 จึงได้ผลลัพธ์สุดท้ายเป็น [20, 40]"
    },
    {
      id: "q25",
      category: "นอกเนื้อหาสไลด์: Modern JS",
      chapter: 4,
      question: "ผลลัพธ์ของ Optional Chaining (?.) และ Nullish Coalescing (??) ในโค้ดนี้คือข้อใด?",
      codeSnippet: `const student = { name: "Ananda", contact: null };
const phone = student.contact?.phone ?? "ไม่มีเบอร์โทรศัพท์";
console.log(phone);`,
      options: [
        "'ไม่มีเบอร์โทรศัพท์' โดย ?. ช่วยป้องกัน TypeError เมื่อ contact เป็น null และ ?? กำหนดค่าสำรอง",
        "เกิด TypeError: Cannot read property 'phone' of null",
        "undefined",
        "null"
      ],
      correctIndex: 0,
      explanation: "Optional Chaining (?.) ช่วยให้เข้าถึง property ซ้อนกันได้อย่างปลอดภัย หากค่าด้านหน้าเป็น null หรือ undefined จะคืนค่า undefined โดยไม่พ่น Error และ Nullish Coalescing (??) จะนำค่าด้านขวามาใช้เฉพาะเมื่อด้านซ้ายเป็น null หรือ undefined เท่านั้น"
    },
    {
      id: "q26",
      category: "นอกเนื้อหาสไลด์: Modern JS",
      chapter: 4,
      question: "ผลลัพธ์ของการเรียกฟังก์ชัน counter1() ทั้งสองครั้งคืออะไร และเกิดจากคุณสมบัติใดใน JavaScript?",
      codeSnippet: `function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter1 = createCounter();
console.log(counter1());
console.log(counter1());`,
      options: [
        "1 และ 2 เกิดจากคุณสมบัติ Closures ที่ฟังก์ชันภายในจดจำตัวแปร count ใน Lexical Scope ไว้ได้",
        "1 และ 1 เพราะตัวแปร count ถูกรีเซ็ตกลับเป็น 0 ทุกครั้งที่เรียก",
        "undefined และ undefined เพราะฟังก์ชันลูกเข้าถึงตัวแปรภายในไม่ได้",
        "เกิด ReferenceError เพราะ createCounter ทำงานเสร็จสิ้นไปแล้ว"
      ],
      correctIndex: 0,
      explanation: "Closure คือคุณสมบัติที่ฟังก์ชันภายในยังคงสามารถเข้าถึงและจดจำตัวแปรในขอบเขตของฟังก์ชันภายนอกได้ แม้ฟังก์ชันภายนอกจะทำงานเสร็จสิ้นไปแล้วก็ตาม ทำให้ตัวแปร count ยังคงถูกเก็บไว้ในหน่วยความจำและนับค่าเพิ่มได้ต่อเนื่องเป็น 1 และ 2"
    },
    {
      id: "q27",
      category: "นอกเนื้อหาสไลด์: Modern JS",
      chapter: 4,
      question: "ตามหลักการของ Event Loop ใน JavaScript ลำดับการแสดงผลตัวเลขออกทางคอนโซลคือข้อใด?",
      codeSnippet: `console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");`,
      options: [
        "1, 4, 3, 2",
        "1, 2, 3, 4",
        "1, 3, 4, 2",
        "1, 4, 2, 3"
      ],
      correctIndex: 0,
      explanation: "Event Loop จะรัน Synchronous Code ใน Call Stack ให้เสร็จก่อนเสมอ ('1' และ '4') จากนั้นจะดึง Microtasks (Promise.then) มาทำงานต่อ ได้ '3' และสุดท้ายจึงดึง Macrotasks / Timers (setTimeout แม้จะ 0ms) มาประมวลผล ได้ '2' ลำดับจึงเป็น 1, 4, 3, 2"
    },
    {
      id: "q28",
      category: "นอกเนื้อหาสไลด์: Modern JS",
      chapter: 4,
      question: "เทคนิคการผูก Event Listener ไว้ที่โหนดแม่ (Parent) เพื่อดักจับเหตุการณ์ของโหนดลูก (Children) เรียกว่าอะไร?",
      codeSnippet: `document.getElementById("todo-list").addEventListener("click", function(e) {
  if (e.target && e.target.nodeName === "LI") {
    console.log("คลิกที่รายการ:", e.target.textContent);
  }
});`,
      options: [
        "Event Delegation โดยอาศัยหลักการ Event Bubbling ที่เหตุการณ์จะลอยขึ้นสู่โหนดแม่",
        "Event Capturing โดยดักจับเหตุการณ์จากชั้นบนสุดลงล่างสุด",
        "Virtual DOM Routing",
        "Dynamic Event Injector"
      ],
      correctIndex: 0,
      explanation: "Event Delegation คือเทคนิคที่ผูก Event Listener ไว้ที่ Element แม่เพียงตัวเดียว เพื่อดักจับเหตุการณ์ที่เกิดขึ้นกับลูกๆ ทุกตัวผ่าน Event Bubbling ช่วยประหยัดหน่วยความจำ และรองรับโหนดลูกที่ถูกสร้างเพิ่มเข้ามาในอนาคตได้ทันที"
    },
    {
      id: "q29",
      category: "นอกเนื้อหาสไลด์: Modern JS",
      chapter: 4,
      question: "ข้อใดคือการ Import โมดูลจากไฟล์ ES6 Module ด้านล่างที่ถูกต้อง?",
      codeSnippet: `// ไฟล์ mathUtils.js
export const PI = 3.14;
export function add(a, b) { return a + b; }
export default function multiply(a, b) { return a * b; }`,
      options: [
        "import multiply, { PI, add } from './mathUtils.js';",
        "import { multiply, PI, add } from './mathUtils.js';",
        "import default multiply, { PI, add } from './mathUtils.js';",
        "const { multiply, PI, add } = import('./mathUtils.js');"
      ],
      correctIndex: 0,
      explanation: "ในระบบ ES Module ตัวที่เป็น Default Export สามารถ import โดยตั้งชื่อตรงๆ นอกวงเล็บปีกกาได้ทันที (import multiply) ส่วน Named Exports จะต้องใส่ในเครื่องหมายปีกกา { PI, add }"
    },
    {
      id: "q30",
      category: "นอกเนื้อหาสไลด์: Modern JS",
      chapter: 4,
      question: "ใน JavaScript มาตรฐานยุคใหม่ คำสั่งใดใช้ทำ Deep Copy ออบเจกต์ทุกระดับชั้นอย่างสมบูรณ์แบบโดยไม่ต้องพึ่ง JSON.parse()?",
      codeSnippet: `const original = { name: "User", details: { age: 25 } };
const copy = structuredClone(original);
copy.details.age = 30;
console.log(original.details.age);`,
      options: [
        "25 เพราะ structuredClone() เป็นฟังก์ชันมาตรฐานสำหรับทำ Deep Copy อย่างแท้จริง",
        "30 เพราะ structuredClone() เป็นเพียง Shallow Copy",
        "undefined",
        "เกิดข้อผิดพลาด ReferenceError"
      ],
      correctIndex: 0,
      explanation: "structuredClone() เป็น Web API มาตรฐานใหม่ที่มีในเบราว์เซอร์และ Node.js ยุคใหม่ สำหรับสร้าง Deep Clone ของออบเจกต์ทุกระดับชั้น การแก้ไข copy.details จึงไม่ส่งผลต่อ original.details เลย"
    },
    {
      id: "q31",
      category: "นอกเนื้อหาสไลด์: Modern JS",
      chapter: 4,
      question: "ผลลัพธ์ของคำสั่งกำจัดค่าซ้ำใน Array ด้วย Set ในโค้ดนี้คืออะไร?",
      codeSnippet: `const duplicates = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(duplicates)];
console.log(unique);`,
      options: [
        "[1, 2, 3, 4, 5] เพราะ Set จะเก็บเฉพาะค่าที่ไม่ซ้ำกันเท่านั้น",
        "[1, 2, 2, 3, 4, 4, 5] เพราะ Set ไม่สามารถตัดค่าซ้ำได้",
        "5 เพราะ Set ส่งกลับขนาดจำนวนสมาชิก",
        "เกิด TypeError เพราะ Set ไม่สามารถใช้ Spread ได้"
      ],
      correctIndex: 0,
      explanation: "Set เป็นโครงสร้างข้อมูลที่บังคับให้สมาชิกทุกตัวมีค่าไม่ซ้ำกัน (Unique Values) การเขียน [...new Set(duplicates)] จึงเป็นวิธีที่สั้นและมีประสิทธิภาพสูงสุดในการลบค่าซ้ำออกจาก Array"
    },
    {
      id: "q32",
      category: "นอกเนื้อหาสไลด์: Modern JS",
      chapter: 4,
      question: "ผลลัพธ์ของการคำนวณยอดรวมในตะกร้าสินค้าด้วย Array.prototype.reduce() คือตัวเลขใด?",
      codeSnippet: `const cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 50 },
  { item: "Bag", price: 750 }
];
const total = cart.reduce((sum, product) => sum + product.price, 0);
console.log(total);`,
      options: [
        "1000",
        "950",
        "200",
        "NaN"
      ],
      correctIndex: 0,
      explanation: "เมธอด .reduce(callback, initialValue) จะวนลูปสะสมค่า โดยเริ่มจาก 0 และนำราคาของแต่ละชิ้นมาบวกสะสม: 0 + 200 + 50 + 750 = 1000"
    },
    {
      id: "q33",
      category: "นอกเนื้อหาสไลด์: Modern JS",
      chapter: 4,
      question: "ข้อใดอธิบายความแตกต่างระหว่าง Nullish Coalescing (??) กับ Logical OR (||) ได้ถูกต้องที่สุด?",
      codeSnippet: `const count = 0;
const a = count || 10;
const b = count ?? 10;
console.log(a, b);`,
      options: [
        "a = 10 และ b = 0 เพราะ ?? ตรวจสอบเฉพาะ null หรือ undefined ส่วน || ตรวจสอบทุกค่า Falsy",
        "a = 0 และ b = 10 เพราะ ?? ทำงานเหมือน || ทุกประการ",
        "a = 0 และ b = 0 เพราะเลข 0 มีค่าเท่ากันทั้งคู่",
        "เกิด SyntaxError เพราะ ?? ไม่สามารถใช้ร่วมกับตัวแปรตัวเลขได้"
      ],
      correctIndex: 0,
      explanation: "?? (Nullish Coalescing) จะให้ค่าเริ่มต้นเฉพาะเมื่อฝั่งซ้ายเป็น null หรือ undefined เท่านั้น ในขณะที่ || มองว่าเลข 0, boolean false, หรือสตริงว่างเป็น Falsy จึงทำให้ count || 10 ได้ค่า 10 แต่ count ?? 10 ยังคงได้เลข 0 ตามเดิม"
    },
    {
      id: "q34",
      category: "นอกเนื้อหาสไลด์: Modern JS",
      chapter: 4,
      question: "ผลลัพธ์ของการทำ Object Destructuring พร้อมระบุ Default Value ในโค้ดนี้คืออะไร?",
      codeSnippet: `const user = { name: "Somchai", age: null };
const { name, age = 18, role = "Guest" } = user;
console.log(name, age, role);`,
      options: [
        "Somchai null Guest เพราะ Default Value จะทำงานเมื่อค่าเป็น undefined เท่านั้น (null จะไม่ถูกแทนที่)",
        "Somchai 18 Guest เพราะทั้ง null และ undefined จะถูกแทนที่ด้วย Default Value",
        "Somchai 18 undefined เพราะไม่ได้ระบุค่า role ไว้ใน Object",
        "เกิด ReferenceError เพราะหาค่า role ไม่พบบนตัวแปร"
      ],
      correctIndex: 0,
      explanation: "ใน Destructuring Assignment ค่า Default Value จะถูกนำมาใช้ต่อเมื่อค่านั้นเป็น undefined (หรือไม่ได้กำหนด key ไว้) เท่านั้น แต่ในที่นี้ user.age มีค่าเป็น null ชัดเจน จึงไม่ถูกแทนที่ด้วย 18 ส่วน role ไม่มีอยู่ใน user จึงได้รับค่าเริ่มต้น 'Guest'"
    },
    {
      id: "q35",
      category: "นอกเนื้อหาสไลด์: Modern JS",
      chapter: 4,
      question: "ประโยชน์สำคัญที่สุดของการใช้งาน Optional Chaining (?.) คือข้อใด?",
      codeSnippet: `const order = { id: 101, customer: null };
const zip = order.customer?.address?.zipcode;
console.log(zip);`,
      options: [
        "ป้องกัน TypeError: Cannot read properties of null/undefined โดยจะคืนค่า undefined ทันทีหากคุณสมบัติใดชั้นหนึ่งเป็น null หรือ undefined",
        "บังคับให้โปรแกรมเกิด Exception และหยุดการทำงานทันทีเพื่อความปลอดภัย",
        "แปลงค่า null และ undefined ให้กลายเป็น Object เปล่าเสมอ",
        "เพิ่มความเร็วในการประมวลผลให้เร็วกว่าการใช้จุด (.) ปกติ 10 เท่า"
      ],
      correctIndex: 0,
      explanation: "Optional Chaining (?.) ช่วยป้องกันข้อผิดพลาดรุนแรงระดับ TypeError หากมีค่าข้างหน้าเป็น null หรือ undefined จะเกิดการ Short-circuit และคืนค่า undefined กลับมาอย่างปลอดภัยโดยหน้าเว็บไม่พัง"
    },
    {
      id: "q36",
      category: "นอกเนื้อหาสไลด์: Modern JS",
      chapter: 4,
      question: "ผลลัพธ์ของการใช้ Spread Operator (...) รวมและทับค่าใน Object ต่อไปนี้คืออะไร?",
      codeSnippet: `const base = { theme: "light", fontSize: 14 };
const custom = { fontSize: 18, showAvatar: true };
const finalConfig = { ...base, ...custom, theme: "dark" };
console.log(finalConfig);`,
      options: [
        "{ theme: 'dark', fontSize: 18, showAvatar: true } เพราะคุณสมบัติที่ระบุทีหลังจะ Override ทับค่าเดิม",
        "{ theme: 'light', fontSize: 14, showAvatar: true } เพราะค่าเดิมจาก base จะถูกคงไว้เสมอ",
        "เกิดข้อผิดพลาด SyntaxError เพราะห้ามระบุ property ซ้ำซ้อนกันใน Object",
        "{ theme: ['light', 'dark'], fontSize: [14, 18], showAvatar: true }"
      ],
      correctIndex: 0,
      explanation: "การ Spread Object จากซ้ายไปขวา หากมีคีย์ซ้ำกัน ค่าที่ระบุทีหลังจะเขียนทับ (Override) ค่าเดิมเสมอ ในที่นี้ fontSize 14 ถูกแทนที่ด้วย 18 และ theme 'light' ถูกแทนที่ด้วย 'dark'"
    }
  ]
};
