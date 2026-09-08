export const jsCheatSheetData = [
  {
    category: "1. ตัวแปรและการประกาศ (Variables)",
    items: [
      {
        title: "var vs let vs const",
        code: `// const: ค่าคงที่ ห้ามกำหนดค่าใหม่ (Reassign ไม่ได้)
const PI = 3.14159;

// let: ตัวแปรเปลี่ยนค่าได้ มีขอบเขตแบบ Block Scope { ... }
let count = 0;
count = count + 1;

// var: ขอบเขต Function Scope / มี Hoisting (ไม่แนะนำในโค้ดใหม่)
var name = "John";`,
        note: "ควรเริ่มต้นด้วยการใช้ const เสมอ หากต้องเปลี่ยนค่าในภายหลังให้ใช้ let หลีกเลี่ยงการใช้ var"
      },
      {
        title: "Template Literals (Interpolation)",
        code: `const name = "Somchai";
const score = 95;
// ใช้สัญลักษณ์ \` (Backtick) และ \${}
const message = \`ยินดีด้วยคุณ \${name} สอบได้ \${score} คะแนน\`;`,
        note: "ช่วยให้ต่อข้อความกับตัวแปรได้ง่าย และรองรับการขึ้นบรรทัดใหม่ได้ทันที"
      }
    ]
  },
  {
    category: "2. ตัวดำเนินการและตรรกะ (Operators)",
    items: [
      {
        title: "Strict Equality (=== vs ==)",
        code: `5 == "5"   // true  (แปลงชนิดข้อมูลให้อัตโนมัติ - Loose)
5 === "5"  // false (ตรวจทั้งค่าและชนิดข้อมูล - Strict แนะนำให้ใช้เสมอ)
null == undefined  // true
null === undefined // false`,
        note: "ควรใช้ === และ !== เสมอเพื่อป้องกันข้อผิดพลาดจาก Type Coercion"
      },
      {
        title: "Ternary Operator (ย่อ if-else)",
        code: `const age = 20;
// condition ? valueIfTrue : valueIfFalse
const status = age >= 18 ? "ผู้ใหญ่" : "เด็ก";`,
        note: "เหมาะกับการกำหนดค่าตัวแปรตามเงื่อนไขในบรรทัดเดียว"
      },
      {
        title: "Logical Assignment (&&=, ||=, ??=)",
        code: `let x = true;
x &&= 10; // ถ้า x เป็นจริง จะกำหนด x = 10

let y = null;
y ??= "ค่าเริ่มต้น"; // กำหนดค่าเมื่อเป็น null หรือ undefined`,
        note: "ตามที่สอนในสไลด์ ch4 JavaScript หน้า 33-34"
      }
    ]
  },
  {
    category: "3. การจัดการ Array & Object",
    items: [
      {
        title: "Array Methods ที่ใช้บ่อย",
        code: `const arr = ["A", "B", "C"];

arr.push("D");    // เพิ่มท้าย -> ["A", "B", "C", "D"]
arr.pop();        // ลบท้าย   -> ["A", "B", "C"]
arr.unshift("Z"); // เพิ่มหัว  -> ["Z", "A", "B", "C"]
arr.shift();      // ลบหัว    -> ["A", "B", "C"]

const text = arr.join(", "); // "A, B, C"
const total = arr.length;    // 3`,
        note: "Array ใน JS เป็นแบบ Zero-indexed (เริ่มจากตำแหน่ง 0 เสมอ)"
      },
      {
        title: "Object & JSON",
        code: `const student = {
  name: "Duangpen",
  age: 25,
  skills: ["HTML", "JS"]
};

// เข้าถึงข้อมูล
console.log(student.name);        // "Duangpen"
console.log(student["age"]);      // 25

// แปลง Object <-> JSON String
const jsonString = JSON.stringify(student);
const parsedObj  = JSON.parse(jsonString);`,
        note: "JSON.stringify ใช้เตรียมข้อมูลก่อนบันทึกลง localStorage หรือส่ง API"
      }
    ]
  },
  {
    category: "4. DOM Manipulation & Events",
    items: [
      {
        title: "การค้นหา HTML Elements",
        code: `// 1. ค้นหาด้วย ID (ได้ element เดียว)
const title = document.getElementById("title");

// 2. ค้นหาด้วย CSS Selector (ได้ element แรกที่ตรง)
const card = document.querySelector(".card-item");

// 3. ค้นหาทั้งหมด (ได้ NodeList)
const allButtons = document.querySelectorAll("button.btn");`,
        note: "querySelector และ querySelectorAll มีความยืดหยุ่นสูงเหมือนเขียน CSS"
      },
      {
        title: "การเปลี่ยนเนื้อหาและสไตล์",
        code: `const el = document.getElementById("demo");

el.innerHTML = "<strong>เน้นข้อความ</strong>";
el.textContent = "ข้อความธรรมดาปลอดภัย";

// เปลี่ยนสไตล์ CSS
el.style.color = "blue";
el.style.backgroundColor = "#f1f5f9";
el.style.fontSize = "18px";

// จัดการ Class
el.classList.add("active");
el.classList.remove("hidden");
el.classList.toggle("open");`,
        note: "สไตล์ที่เป็นคำคู่ใน CSS เช่น background-color ใน JS จะเขียนเป็น camelCase คือ backgroundColor"
      },
      {
        title: "Event Listener & Form Validation",
        code: `const btn = document.getElementById("myBtn");
btn.addEventListener("click", (event) => {
  console.log("ถูกคลิกที่:", event.target);
});

// ดักฟอร์มไม่ให้รีเฟรช
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // สำคัญมาก! ป้องกันหน้าเว็บ Refresh
  const input = document.getElementById("username");
  if (input.value.trim() === "") {
    alert("กรุณากรอกข้อมูล!");
  }
});`,
        note: "event.preventDefault() ใช้หยุดการ Submit ของฟอร์มเพื่อตรวจสอบค่าก่อน"
      },
      {
        title: "การสร้างและลบโหนด (Element CRUD)",
        code: `// สร้าง element ใหม่
const li = document.createElement("li");
li.textContent = "รายการใหม่";
li.className = "item";

// ต่อท้ายเข้า DOM
document.getElementById("my-list").appendChild(li);

// ลบโหนด
li.remove();`,
        note: "document.createElement + appendChild คือหัวใจของการทำ Dynamic UI"
      }
    ]
  },
  {
    category: "5. Web APIs & เทคนิคขั้นสูง",
    items: [
      {
        title: "คีย์เวิร์ด this & Explicit Binding",
        code: `const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
const person1 = { firstName: "John", lastName: "Doe" };

// .call() เรียกใช้ทันที
person.fullName.call(person1); // "John Doe"

// .bind() คืนเป็นฟังก์ชันใหม่
const boundFunc = person.fullName.bind(person1);
boundFunc(); // "John Doe"`,
        note: "ตามสไลด์ ch4 JavaScript_3 หน้า 1-6"
      },
      {
        title: "Timers: setTimeout & setInterval",
        code: `// รันครั้งเดียวหลังหน่วงเวลา 2 วินาที (2000ms)
const timer = setTimeout(() => {
  console.log("2 วินาทีผ่านไป");
}, 2000);
clearTimeout(timer); // สั่งยกเลิก

// รันซ้ำทุกๆ 1 วินาที (1000ms)
let count = 0;
const interval = setInterval(() => {
  count++;
  console.log("นับ:", count);
  if (count >= 5) clearInterval(interval); // หยุดเมื่อครบ 5
}, 1000);`,
        note: "อย่าลืมเก็บ ID ไว้ เพื่อใช้ clearTimeout / clearInterval เมื่อต้องการหยุด"
      },
      {
        title: "Web Storage API (localStorage)",
        code: `// บันทึกข้อมูล
localStorage.setItem("username", "JohnDoe");
localStorage.setItem("profile", JSON.stringify({ theme: "dark", level: 5 }));

// อ่านข้อมูล
const user = localStorage.getItem("username");
const profile = JSON.parse(localStorage.getItem("profile"));

// ลบข้อมูล
localStorage.removeItem("username");
localStorage.clear(); // ล้างทั้งหมด`,
        note: "ข้อมูลใน localStorage จะไม่หายไปแม้ปิดแท็บหรือรีสตาร์ตเครื่อง"
      }
    ]
  }
];
