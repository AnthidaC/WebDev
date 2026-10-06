export const jsCheatSheetData = [
  {
    category: "1. ตัวแปร & Scope (Variables & Scope)",
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
        note: "ควรเริ่มต้นด้วยการใช้ const เสมอ หากต้องเปลี่ยนค่าในภายหลังให้ใช้ let หลีกเลี่ยงการใช้ var เพื่อป้องกันปัญหา Hoisting"
      },
      {
        title: "Template Literals (การต่อข้อความ)",
        code: `const name = "Somchai";
const score = 95;
// ใช้สัญลักษณ์ \` (Backtick) และ \${}
const message = \`ยินดีด้วยคุณ \${name} สอบได้ \${score} คะแนน\`;
const multiline = \`บรรทัดที่ 1
บรรทัดที่ 2
บรรทัดที่ 3\`;`,
        note: "ช่วยให้ต่อข้อความกับตัวแปรได้ง่าย รองรับการขึ้นบรรทัดใหม่ และใส่ Expression คำนวณใน ${} ได้ทันที"
      },
      {
        title: "Data Types & typeof (การตรวจสอบชนิดข้อมูล)",
        code: `typeof "Hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (ข้อควรระวังใน JS!)
typeof [1, 2, 3]    // "object" (ใช้ Array.isArray() ตรวจ)
typeof { a: 1 }     // "object"
typeof function(){} // "function"`,
        note: "ตรวจ Array ให้ใช้ Array.isArray(arr) แทน typeof เพราะ typeof array จะคืนค่าเป็น 'object'"
      }
    ]
  },
  {
    category: "2. ตัวดำเนินการ & ตรรกะ (Operators & Logic)",
    items: [
      {
        title: "Strict Equality (=== vs ==)",
        code: `5 == "5"   // true  (แปลงชนิดข้อมูลให้อัตโนมัติ - Loose)
5 === "5"  // false (ตรวจทั้งค่าและชนิดข้อมูล - Strict แนะนำให้ใช้เสมอ)
null == undefined  // true
null === undefined // false
0 == false         // true
0 === false        // false`,
        note: "ควรใช้ === และ !== เสมอเพื่อป้องกันข้อผิดพลาดที่ไม่คาดคิดจาก Type Coercion"
      },
      {
        title: "Ternary Operator (ย่อ if-else)",
        code: `const age = 20;
// syntax: condition ? valueIfTrue : valueIfFalse
const status = age >= 18 ? "ผู้ใหญ่" : "เด็ก";

// ใช้งานซ้อนกัน (Chaining)
const score = 85;
const grade = score >= 80 ? "A" : score >= 70 ? "B" : "C";`,
        note: "เหมาะกับการกำหนดค่าตัวแปรหรือส่ง Prop ตามเงื่อนไขในบรรทัดเดียวได้อย่างกระชับ"
      },
      {
        title: "Logical Assignment (&&=, ||=, ??=)",
        code: `let x = true;
x &&= 10; // ถ้า x เป็น truthy จะกำหนด x = 10

let y = "";
y ||= "ค่าดีฟอลต์"; // ถ้า y เป็น falsy ("", 0, false, null) จะกำหนดค่า

let z = null;
z ??= "ค่าเริ่มต้น"; // กำหนดค่าเฉพาะเมื่อเป็น null หรือ undefined`,
        note: "ช่วยย่อการตรวจสอบค่าว่างหรือค่าเริ่มต้นตามสไลด์ ch4 JavaScript หน้า 33-34"
      },
      {
        title: "Nullish Coalescing (??) vs OR (||)",
        code: `const count = 0;
// || มอง 0, "", false เป็น Falsy ทั้งหมด
const res1 = count || 10; // ได้ 10 (อาจผิดพลาดถ้าเราต้องการเลข 0 จริงๆ)

// ?? มองเฉพาะ null และ undefined เท่านั้นที่เป็น Nullish
const res2 = count ?? 10; // ได้ 0 (ถูกต้อง!)`,
        note: "ใช้ ?? เมื่อค่าตัวเลข 0, ข้อความว่าง \"\", หรือ boolean false เป็นค่าที่ยอมรับได้และไม่ใช่กรณีว่าง"
      }
    ]
  },
  {
    category: "3. อาร์เรย์ & ออบเจกต์ (Arrays & Objects)",
    items: [
      {
        title: "Array Methods พื้นฐาน",
        code: `const fruits = ["Apple", "Banana"];

fruits.push("Orange");  // เพิ่มท้าย -> ["Apple", "Banana", "Orange"]
fruits.pop();           // ลบท้าย   -> ["Apple", "Banana"]
fruits.unshift("Mango");// เพิ่มหัว  -> ["Mango", "Apple", "Banana"]
fruits.shift();         // ลบหัว    -> ["Apple", "Banana"]

const sliced = fruits.slice(0, 1); // ตัดช่วง ไม่แก้ตัวเดิม
fruits.splice(1, 1, "Cherry");     // ลบ/แทนที่ แก้ตัวแปรเดิม`,
        note: "slice() คืนค่าอาร์เรย์ใหม่โดยไม่แก้ไขของเดิม ส่วน splice() แก้ไขอาร์เรย์เดิมโดยตรง (Mutate)"
      },
      {
        title: "Array Iteration (map, filter, reduce, forEach)",
        code: `const numbers = [1, 2, 3, 4, 5];

// map: แปลงทุกตัว คืน Array ใหม่ขนาดเท่าเดิม
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter: กรองเฉพาะตัวที่ผ่านเงื่อนไข
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce: รวมค่าเป็นผลลัพธ์เดียว
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15

// find: ค้นหาตัวแรกที่ตรงเงื่อนไข
const found = numbers.find(n => n > 3); // 4`,
        note: "map, filter, reduce เป็นหัวใจสำคัญของการเขียน Functional JavaScript และนิยมใช้อย่างมากใน React"
      },
      {
        title: "Object & JSON (การแปลงข้อมูล)",
        code: `const student = {
  name: "Somchai",
  age: 20,
  skills: ["HTML", "JS"]
};

// เข้าถึงข้อมูล
console.log(student.name);        // "Somchai" (Dot notation)
console.log(student["age"]);      // 20 (Bracket notation)

// แปลง Object <-> JSON String
const jsonString = JSON.stringify(student);
const parsedObj  = JSON.parse(jsonString);`,
        note: "JSON.stringify ใช้เตรียมข้อมูลก่อนบันทึกลง localStorage หรือส่ง API ส่วน JSON.parse แปลงสตริงกลับเป็น Object"
      },
      {
        title: "Object Keys, Values & Entries",
        code: `const user = { name: "Somchai", role: "Admin", score: 95 };

Object.keys(user);   // ["name", "role", "score"]
Object.values(user); // ["Somchai", "Admin", 95]
Object.entries(user);// [["name", "Somchai"], ["role", "Admin"], ["score", 95]]

// วนลูป Object ด้วย Object.entries
for (const [key, value] of Object.entries(user)) {
  console.log(\`\${key}: \${value}\`);
}`,
        note: "ใช้ Object.entries() ร่วมกับ Array Destructuring เพื่อวนลูปอ่านทั้งคีย์และค่าของ Object ได้อย่างสะดวก"
      }
    ]
  },
  {
    category: "4. ฟังก์ชัน & Scope (Functions & Scope)",
    items: [
      {
        title: "Function Declaration vs Arrow Function",
        code: `// 1. Function Declaration (มี Hoisting เรียกก่อนประกาศได้)
function add(a, b) {
  return a + b;
}

// 2. Arrow Function (กระชับ, ไม่มี this เป็นของตนเอง)
const multiply = (a, b) => a * b;

// 3. Arrow Function บรรทัดเดียว คืนค่า Object ต้องครอบ ()
const makeUser = (name) => ({ name, active: true });`,
        note: "Arrow Function นิยมใช้เขียนเป็น Callback หรือเมธอดใน map/filter เพราะสั้นกระชับและไม่ผูก this ใหม่"
      },
      {
        title: "Default Parameters & Rest Parameters",
        code: `// Default Parameters: กำหนดค่าเริ่มต้นเมื่อไม่มีการส่ง argument
function greet(name = "ผู้ใช้งาน", greeting = "สวัสดี") {
  return \`\${greeting}, คุณ\${name}\`;
}

// Rest Parameters: รับพารามิเตอร์ไม่จำกัดจำนวนเป็น Array
function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
sumAll(1, 2, 3, 4); // 10`,
        note: "Rest Parameter (...args) ต้องอยู่ตำแหน่งสุดท้ายเสมอในลำดับพารามิเตอร์ของฟังก์ชัน"
      },
      {
        title: "Callback Functions & Higher-Order Functions",
        code: `// Callback Function คือฟังก์ชันที่ส่งเป็น argument ให้ฟังก์ชันอื่น
function processData(items, callback) {
  for (const item of items) {
    callback(item);
  }
}

processData(["A", "B", "C"], (val) => {
  console.log("กำลังประมวลผล:", val);
});`,
        note: "addEventListener และ Array methods ทุกตัว ล้วนทำงานโดยใช้ Callback Function เป็นพื้นฐาน"
      }
    ]
  },
  {
    category: "5. DOM Manipulation & Events",
    items: [
      {
        title: "การค้นหา HTML Elements (DOM Selectors)",
        code: `// 1. ค้นหาด้วย ID (รวดเร็ว คืนค่า Element เดียว)
const title = document.getElementById("title");

// 2. ค้นหาด้วย CSS Selector (คืนค่า Element แรกที่ตรง)
const card = document.querySelector(".card-item");

// 3. ค้นหาทั้งหมดที่ตรง Selector (คืนค่า NodeList)
const allButtons = document.querySelectorAll("button.btn");
allButtons.forEach(btn => btn.classList.add("ready"));`,
        note: "querySelector และ querySelectorAll รองรับไวยากรณ์ CSS Selector ทุกรูปแบบ ทำให้ยืดหยุ่นสูงมาก"
      },
      {
        title: "การเปลี่ยนเนื้อหาและสไตล์ (Content & Classes)",
        code: `const el = document.getElementById("demo");

// จัดการข้อความ/HTML
el.textContent = "ข้อความธรรมดา (ปลอดภัยจาก XSS)";
el.innerHTML = "<strong>ข้อความเน้นหนา</strong>";

// จัดการ CSS Styles (camelCase)
el.style.color = "blue";
el.style.backgroundColor = "#f1f5f9";
el.style.display = "flex";

// จัดการ Class (แนะนำมากกว่าการเขียน style ตรงๆ)
el.classList.add("active");
el.classList.remove("hidden");
el.classList.toggle("open"); // สลับเปิด-ปิด
el.classList.contains("active"); // true / false`,
        note: "ใช้ textContent แทน innerHTML เสมอเมื่อแสดงข้อมูลจากผู้ใช้เพื่อป้องกันช่องโหว่ด้านความปลอดภัย XSS"
      },
      {
        title: "Event Listener & Form Validation",
        code: `const btn = document.getElementById("myBtn");
btn.addEventListener("click", (event) => {
  console.log("ปุ่มถูกคลิก!", event.target);
});

// ดักจับฟอร์มไม่ให้รีเฟรชหน้าเว็บ
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // สำคัญมาก! ป้องกัน Browser Refresh
  const input = document.getElementById("username");
  if (input.value.trim() === "") {
    alert("กรุณากรอกชื่อผู้ใช้!");
  }
});`,
        note: "e.preventDefault() จำเป็นอย่างยิ่งในการทำ Form Validation ใน JavaScript สมัยใหม่"
      },
      {
        title: "การสร้างและลบโหนด (Element CRUD)",
        code: `// สร้าง Element ใหม่
const li = document.createElement("li");
li.textContent = "รายการใหม่";
li.className = "item";

// เพิ่มเข้าสู่ DOM Tree
const list = document.getElementById("my-list");
list.appendChild(li); // ต่อท้าย
list.prepend(li);     // แทรกหัวแถว

// ลบ Element
li.remove();`,
        note: "document.createElement ร่วมกับ appendChild คือหัวใจของการสร้าง Dynamic UI เช่น Todo List หรือ Shopping Cart"
      },
      {
        title: "DOM Tree Traversal (การเข้าถึงโหนดข้างเคียง)",
        code: `const btn = document.querySelector(".delete-btn");

const parentCard = btn.parentElement;        // โหนดแม่
const closestBox = btn.closest(".card-box"); // ค้นหาบรรพบุรุษที่ตรง selector
const nextSibling = btn.nextElementSibling;  // โหนดพี่น้องถัดไป
const firstChild  = parentCard.firstElementChild; // โหนดย่อยตัวแรก`,
        note: "element.closest(selector) มีประโยชน์มากใน Event Delegation เพื่อหาการ์ดแม่ที่ครอบปุ่มคลิกอยู่"
      }
    ]
  },
  {
    category: "6. คีย์เวิร์ด this และการผูกค่า (this & Binding)",
    items: [
      {
        title: "คีย์เวิร์ด this ในบริบทต่างๆ",
        code: `// 1. ใน Object Method: this ชี้ไปยังตัว Object ที่เรียก
const person = {
  name: "Somchai",
  greet() {
    return \`สวัสดี \${this.name}\`;
  }
};
person.greet(); // "สวัสดี Somchai"

// 2. ใน Arrow Function: ไม่มี this เป็นของตนเอง (จำค่าจากสโคปภายนอก)
const badUser = {
  name: "Alex",
  greet: () => this.name // ไม่แนะนำ! this จะชี้ window/undefined
};`,
        note: "ห้ามใช้ Arrow Function สำหรับ Object Method ที่ต้องอ้างอิง this ของตัวออบเจกต์นั้นๆ"
      },
      {
        title: "Explicit Binding: call, apply, bind",
        code: `function introduce(title, country) {
  return \`\${title} \${this.name} มาจาก \${country}\`;
}
const user = { name: "Somchai" };

// .call(): ส่งอาร์กิวเมนต์แบบแยกตัวคอมมา รันทันที
introduce.call(user, "คุณ", "ไทย");

// .apply(): ส่งอาร์กิวเมนต์เป็น Array รันทันที
introduce.apply(user, ["นาย", "ไทย"]);

// .bind(): คืนเป็นฟังก์ชันใหม่พร้อมใช้งานภายหลัง
const boundFn = introduce.bind(user, "อ.");
boundFn("ไทย");`,
        note: "bind() มักใช้เมื่อต้องการส่งฟังก์ชันเป็น Callback ให้ event listener โดยที่ยังคงค่า this ที่ต้องการไว้"
      }
    ]
  },
  {
    category: "7. Web Storage & Timers",
    items: [
      {
        title: "Web Storage API (localStorage & sessionStorage)",
        code: `// บันทึกข้อมูล (รับเฉพาะ string)
localStorage.setItem("username", "JohnDoe");
localStorage.setItem("profile", JSON.stringify({ theme: "dark", score: 100 }));

// อ่านข้อมูล
const username = localStorage.getItem("username");
const profile = JSON.parse(localStorage.getItem("profile"));

// ลบข้อมูล
localStorage.removeItem("username");
localStorage.clear(); // ลบทั้งหมดในโดเมนนี้`,
        note: "localStorage ข้อมูลคงอยู่ถาวรแม้ปิดบราวเซอร์ ส่วน sessionStorage ข้อมูลจะหายไปเมื่อปิดแท็บ"
      },
      {
        title: "Timers: setTimeout & setInterval",
        code: `// 1. setTimeout: หน่วงเวลา 2 วินาทีแล้วทำงานครั้งเดียว
const timeoutId = setTimeout(() => {
  console.log("ครบ 2 วินาที!");
}, 2000);
clearTimeout(timeoutId); // สั่งยกเลิกก่อนเวลา

// 2. setInterval: ทำงานซ้ำทุก 1 วินาที
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log("วินาทีที่:", count);
  if (count >= 5) clearInterval(intervalId); // หยุดเมื่อครบ 5
}, 1000);`,
        note: "เมื่อใช้งาน Timer อย่าลืมเก็บ ID ไว้เรียก clearTimeout / clearInterval เสมอ เพื่อป้องกัน Memory Leak"
      },
      {
        title: "HTML5 Drag and Drop API",
        code: `// ใน HTML กำหนด: <div draggable="true" id="item1">ลากฉัน</div>
const item = document.getElementById("item1");
const dropZone = document.getElementById("dropzone");

item.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault(); // บังคับใส่เพื่อให้ยอมรับการ Drop ได้!
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  dropZone.appendChild(document.getElementById(id));
});`,
        note: "สำคัญมาก: ต้องมี e.preventDefault() ใน event dragover เสมอ มิฉะนั้น event drop จะไม่ทำงาน"
      }
    ]
  },
  {
    category: "8. ไวยากรณ์ทางลัดสมัยใหม่ & Async (ES6+ & Async)",
    items: [
      {
        title: "Destructuring Assignment (การกระจายค่า)",
        code: `// 1. Object Destructuring
const student = { name: "Somchai", major: "CS", gpa: 3.75 };
const { name, gpa, country = "Thailand" } = student;
console.log(name, gpa, country); // "Somchai", 3.75, "Thailand"

// 2. Array Destructuring
const rgb = [255, 128, 0];
const [r, g, b] = rgb;

// 3. Swap ค่าตัวแปรโดยไม่ต้องมี temp
let a = 1, b = 2;
[a, b] = [b, a]; // a = 2, b = 1`,
        note: "ช่วยให้เขียนโค้ดกระชับขึ้นและอ่านง่าย ไม่ต้องเขียน user.name, user.gpa ซ้ำซ้อน"
      },
      {
        title: "Spread & Rest Operators (...)",
        code: `// 1. Spread ใน Object (โคลนและแก้ไข/เพิ่มค่า)
const base = { theme: "dark", lang: "th" };
const updated = { ...base, lang: "en", autoSave: true };

// 2. Spread ใน Array (รวมชุดข้อมูล)
const frontend = ["HTML", "CSS", "JS"];
const fullstack = [...frontend, "Node.js", "MongoDB"];

// 3. รวม Object หลายตัว
const merged = { ...objA, ...objB };`,
        note: "Spread (...) ช่วยโคลน Array หรือ Object แบบ Shallow Copy ได้อย่างรวดเร็วและปลอดภัยจาก Mutation"
      },
      {
        title: "Optional Chaining (?.) & Property Shorthand",
        code: `const profile = {
  user: { name: "Suda" }
  // contact ยังไม่มี
};

// ?. เข้าถึงคุณสมบัติซ้อนลึกอย่างปลอดภัย (ไม่เกิด TypeError Uncaught)
const email = profile.contact?.email; // ได้ undefined อย่างปลอดภัย

// Property & Method Shorthand
const title = "JS Handbook";
const price = 450;
const book = {
  title, // เท่ากับ title: title
  price,
  getInfo() { return \`\${this.title} ฿\${this.price}\`; }
};`,
        note: "?. มีประโยชน์มากเมื่ออ่านข้อมูลจาก API ที่บางฟิลด์อาจเป็น null หรือไม่มีอยู่จริง"
      },
      {
        title: "Async / Await & Fetch API (การทำงานแบบ Asynchronous)",
        code: `// ฟังก์ชันแบบ Async รองรับการ await งานที่ใช้เวลา
async function fetchUserProfile(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    if (!response.ok) {
      throw new Error(\`เกิดข้อผิดพลาด HTTP: \${response.status}\`);
    }
    const data = await response.json();
    console.log("ข้อมูลที่ได้:", data);
    return data;
  } catch (error) {
    console.error("เชื่อมต่อล้มเหลว:", error.message);
  }
}`,
        note: "ใช้ async/await ร่วมกับ try...catch เพื่อจัดการข้อผิดพลาดและทำให้โค้ดแบบ Asynchronous อ่านง่ายเหมือนโค้ดปกติ"
      }
    ]
  }
];
