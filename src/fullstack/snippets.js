import { language } from './workspace.js';

export const extensionPacks = [
  {
    id: 'emmet',
    name: 'Emmet Abbreviations (HTML / JSX / CSS)',
    badge: 'Built-in Extension',
    description: 'พิมพ์ย่อแล้วกด Tab เช่น div.grid>article*2>h2+p, ul>li*3, input:text, df, dg',
  },
  {
    id: 'es7-react',
    name: 'ES7+ React / Router / Hooks Snippets',
    badge: 'VS Code Pack',
    description: 'rafce, rfc, imrs, imrse, imrr, imrc, us, ue, uefetch, uref, uctx, cctx, ulmap, inp, btn, alertp',
  },
  {
    id: 'es6-js',
    name: 'JavaScript ES6+ Array & Async Snippets',
    badge: 'VS Code Pack',
    description: 'clg, afn, red (reduce), map, fil (filter), find, findi, some, fof, prom, delay, trycatch, fetchjson',
  },
  {
    id: 'node-express',
    name: 'Node.js, CommonJS & Express API Snippets',
    badge: 'VS Code Pack',
    description: 'req, reqfs, reqpath, exp, modexp, fsread, pathjoin, sendfile, appget, rget, rpost, rput, rdel, res400, res404',
  },
  {
    id: 'auth-db',
    name: 'Full-Stack Auth (bcrypt/JWT), SQL & Prisma Pack',
    badge: 'VS Code Pack',
    description: 'bchash, bccomp, jwtsign, jwtverify, authmiddleware, sqlprep, prismamany',
  },
];

export const snippetGroups = {
  javascript: [
    // --- Shared ES6+ JavaScript Snippets (usable in both Node .js and React .jsx) ---
    ['log', 'console.log', 'แสดงค่าใน Terminal ของ Node หรือ console ของ browser', `console.log(\${1:value});\${0}`],
    ['clg', 'console.log (ES7 style)', 'ทางลัดพิมพ์ console.log แบบส่วนขยาย ES7+', `console.log(\${1:first});\${0}`],
    ['cer', 'console.error', 'แสดงข้อผิดพลาดใน console', `console.error(\${1:error});\${0}`],
    ['afn', 'Arrow function', 'สร้างฟังก์ชันลูกศร ES6', `(\${1:params}) => {\n  \${0}\n}`],
    ['anfn', 'Const arrow function', 'ประกาศตัวแปรเก็บ Arrow Function', `const \${1:name} = (\${2:params}) => {\n  \${0}\n};`],
    ['fn', 'Function declaration', 'ประกาศฟังก์ชันมาตรฐาน', `function \${1:name}(\${2:params}) {\n  \${0}\n}`],
    ['af', 'Async function', 'ประกาศฟังก์ชัน async สำหรับใช้คู่กับ await', `async function \${1:name}(\${2:params}) {\n  \${0}\n}`],
    ['dest', 'Destructuring object', 'แยกตัวแปรจาก object เช่น req.body หรือ props', `const { \${1:name} } = \${2:obj};\${0}`],
    ['red', 'Array.reduce (รวมค่า)', 'รวมสมาชิกใน array เป็นค่าเดียว เช่น รวมราคาสินค้า', `\${1:items}.reduce((sum, \${2:item}) => sum + \${3:item.price * item.quantity}, 0)\${0}`],
    ['map', 'Array.map (แปลงค่า)', 'แปลงสมาชิกทุกตัวใน array เป็น array ใหม่', `\${1:items}.map((\${2:item}) => \${0})`],
    ['fil', 'Array.filter (กรองข้อมูล)', 'กรองเฉพาะสมาชิกที่ตรงเงื่อนไข', `\${1:items}.filter((\${2:item}) => \${0})`],
    ['find', 'Array.find (ค้นหา 1 รายการ)', 'ค้นหาสมาชิกตัวแรกที่ตรงเงื่อนไข เช่น หาตาม id', `\${1:items}.find((\${2:item}) => \${2:item}.id === Number(\${3:id}))\${0}`],
    ['findi', 'Array.findIndex (หาตำแหน่ง)', 'หาตำแหน่ง index ใน array เพื่อใช้คู่กับ splice ลบข้อมูล', `\${1:items}.findIndex((\${2:item}) => \${2:item}.id === Number(\${3:id}))\${0}`],
    ['some', 'Array.some (ตรวจว่ามีซ้ำไหม)', 'ตรวจว่ามีสมาชิกอย่างน้อย 1 ตัวที่ตรงเงื่อนไขหรือไม่', `\${1:items}.some((\${2:item}) => \${0})`],
    ['fre', 'Array.forEach', 'วนลูปทำคำสั่งกับสมาชิกทุกตัวใน array', `\${1:items}.forEach((\${2:item}) => {\n  \${0}\n});`],
    ['fof', 'for...of loop', 'วนลูปสมาชิกทีละตัวใน array (รองรับ await ด้านใน)', `for (const \${1:item} of \${2:items}) {\n  \${0}\n}`],
    ['prom', 'new Promise', 'สร้าง Promise สำหรับงานแบบ asynchronous', `new Promise((resolve, reject) => {\n  \${0}\n})`],
    ['delay', 'await Promise setTimeout', 'หน่วงเวลารอด้วย Promise และ setTimeout (เช่น บทที่ 02)', `await new Promise((resolve) => setTimeout(resolve, \${1:40}));\${0}`],
    ['trycatch', 'try / catch', 'จับ error จากงาน async เพื่อจัดการข้อผิดพลาด', `try {\n  \${0}\n} catch (error) {\n  console.error(error);\n}`],
    ['fetchjson', 'fetch JSON (GET)', 'เรียก API ตรวจ HTTP status และแปลง response เป็น JSON', `const response = await fetch(\${1:"/api/items"});\nif (!response.ok) throw new Error("HTTP " + response.status);\nconst data = await response.json();\n\${0}`],
    ['fetchpost', 'fetch POST JSON', 'ส่งข้อมูล JSON ไป API ด้วยเมธอด POST', `const response = await fetch(\${1:"/api/items"}, {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify(\${2:payload}),\n});\nconst result = await response.json();\nif (!response.ok) throw new Error(result.message || "ส่งข้อมูลไม่สำเร็จ");\n\${0}`],
    ['axiosget', 'axios.get', 'ดึงข้อมูลจาก API ด้วย Axios', `const { data } = await axios.get(\${1:"/api/items"});\${0}`],
    ['axiospost', 'axios.post', 'ส่งข้อมูลสร้างรายการใหม่ด้วย Axios', `const { data } = await axios.post(\${1:"/api/items"}, \${2:payload});\${0}`],
    ['jsonparse', 'JSON.parse', 'แปลงข้อความ JSON เป็นข้อมูล JavaScript', `JSON.parse(\${1:text})\${0}`],
    ['jsonstr', 'JSON.stringify', 'แปลงข้อมูล JavaScript เป็นข้อความ JSON', `JSON.stringify(\${1:data})\${0}`],

    // --- ES7+ React / Router / Frontend Snippets ---
    ['rfc', 'React Functional Component', 'สร้าง component ที่ return JSX พร้อมตำแหน่งพิมพ์เนื้อหา', `export default function \${1:ComponentName}() {\n  return (\n    <main>\n      \${0}\n    </main>\n  );\n}`],
    ['rafce', 'React Arrow Function Component (ES7+)', 'สร้าง component แบบ Arrow Function พร้อม export default', `import React from 'react';\n\nconst \${1:ComponentName} = () => {\n  return (\n    <main>\n      <h1>\${1:ComponentName}</h1>\n      \${0}\n    </main>\n  );\n};\n\nexport default \${1:ComponentName};`],
    ['rfce', 'React Function Component Export (ES7+)', 'สร้าง component พร้อม import React และ export', `import React from 'react';\n\nfunction \${1:ComponentName}() {\n  return (\n    <main>\n      \${0}\n    </main>\n  );\n}\n\nexport default \${1:ComponentName};`],
    ['rfcn', 'Named React component', 'สร้าง named component สำหรับ export/import แบบระบุชื่อ', `export function \${1:ComponentName}() {\n  return <section>\${0}</section>;\n}`],
    ['imr', 'Import React', 'นำเข้า React', `import React from 'react';\${0}`],
    ['imrs', 'Import useState', 'นำเข้า useState จาก react', `import { useState } from 'react';\${0}`],
    ['imrse', 'Import useState & useEffect', 'นำเข้า useState และ useEffect จาก react', `import { useState, useEffect } from 'react';\${0}`],
    ['imrc', 'Import Context & Ref Hooks', 'นำเข้า createContext, useContext, useState, useRef จาก react', `import { createContext, useContext, useState, useRef } from 'react';\${0}`],
    ['imrr', 'Import React Router DOM', 'นำเข้า BrowserRouter, Routes, Route, Link, Outlet จาก react-router-dom', `import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';\${0}`],
    ['imax', 'Import Axios', 'นำเข้า axios สำหรับเรียก API', `import axios from 'axios';\${0}`],
    ['us', 'useState Hook', 'เก็บ state ใน component (ต้อง import useState จาก React ก่อน)', `const [\${1:value}, set\${2:Value}] = useState(\${3:initialValue});\${0}`],
    ['usobj', 'Object state & handleChange', 'เก็บและอัปเดต object state โดยคง property เดิมไว้', `const [\${1:form}, set\${2:Form}] = useState({ \${3:name}: "" });\n\nfunction handleChange(event) {\n  const { name, value } = event.target;\n  set\${2:Form}(current => ({ ...current, [name]: value }));\n}\${0}`],
    ['ue', 'useEffect Hook', 'ทำงานเมื่อ component แสดงผล (ต้อง import useEffect จาก React ก่อน)', `useEffect(() => {\n  \${0}\n}, [\${1:}]);`],
    ['uefetch', 'Fetch in useEffect (ครบ 3 สถานะ)', 'โหลด JSON ตอน mount พร้อมจัดการ loading และ error', `useEffect(() => {\n  fetch(\${1:"/api/customers"})\n    .then((r) => {\n      if (!r.ok) throw new Error("โหลดไม่สำเร็จ");\n      return r.json();\n    })\n    .then(\${2:setRows})\n    .catch((e) => setError(e.message))\n    .finally(() => setLoading(false));\n}, []);\${0}`],
    ['uref', 'useRef Hook', 'สร้างตัวอ้างอิง DOM element เช่น ช่อง input', `const \${1:inputRef} = useRef(null);\${0}`],
    ['uctx', 'useContext Hook', 'อ่านค่าจาก React Context', `const { \${1:theme}, \${2:setTheme} } = useContext(\${3:ThemeContext});\${0}`],
    ['cctx', 'createContext + Provider', 'สร้าง Context และ Provider สำหรับแชร์ข้อมูล', `const \${1:ThemeContext} = createContext(null);\${0}`],
    ['um', 'useMemo Hook', 'คำนวณค่าซ้ำเฉพาะเมื่อ dependency เปลี่ยน', `const \${1:result} = useMemo(() => \${2:items.filter(item => item.active)}, [\${3:items}]);\${0}`],
    ['ur', 'useReducer Hook', 'จัดการ state ที่มี action หลายชนิดด้วย reducer', `function \${1:reducer}(state, action) {\n  switch (action.type) {\n    case "\${2:increment}":\n      return { ...state, count: state.count + 1 };\n    default:\n      return state;\n  }\n}\nconst [state, dispatch] = useReducer(\${1:reducer}, { count: 0 });\${0}`],
    ['mapjsx', 'Render array in JSX (<article>)', 'วน array เป็นการ์ด JSX และใส่ key ที่ไม่ซ้ำ', `{\${1:items}.map((\${2:item}) => (\n  <article key={\${2:item}.id}>\n    <h2>{\${2:item}.name}</h2>\n  </article>\n))}\${0}`],
    ['ulmap', 'Render list in JSX (<ul><li>)', 'วน array แสดงรายการใน <ul> และ <li> พร้อม key', `<ul>\n  {\${1:rows}.map((\${2:item}) => (\n    <li key={\${2:item}.id}>{\${2:item}.\${3:name}}</li>\n  ))}\n</ul>\${0}`],
    ['filtermap', 'Filter and render list', 'กรองข้อมูลแล้วแสดงรายการพร้อมข้อความเมื่อว่าง', `{\${1:items}.filter(item => item.name.toLowerCase().includes(\${2:query}.toLowerCase())).map(item => (\n  <article key={item.id}>{item.name}</article>\n))}\${0}`],
    ['inp', 'Controlled <label> + <input>', 'ช่องกรอกข้อความที่ผูกกับ state และ label', `<label>\n  \${1:ชื่อ}\n  <input value={\${2:name}} onChange={(e) => \${3:setName}(e.target.value)} />\n</label>\${0}`],
    ['sel', 'Controlled <label> + <select>', 'ตัวเลือก dropdown ที่ผูกกับ state', `<label>\n  \${1:ประเภท}\n  <select value={\${2:typeId}} onChange={(e) => \${3:setTypeId}(e.target.value)}>\n    {\${4:types}.map((t) => (\n      <option key={t.id} value={t.id}>{t.name}</option>\n    ))}\n  </select>\n</label>\${0}`],
    ['chk', 'Controlled checkbox', 'ช่องทำเครื่องหมาย checkbox ที่ผูกกับ boolean state', `<label>\n  <input type="checkbox" checked={\${1:checked}} onChange={(e) => \${2:setChecked}(e.target.checked)} />\n  \${3:ขายดี}\n</label>\${0}`],
    ['btn', 'JSX <button>', 'ปุ่มกดพร้อมอีเวนต์ onClick', `<button onClick={() => \${1:handleClick()}}>\${2:คลิก}</button>\${0}`],
    ['alertp', 'Error Alert (<p role="alert">)', 'แสดงข้อความแจ้งเตือนข้อผิดพลาดตามเกณฑ์ชุดตรวจ', `{error && <p role="alert">{error}</p>}\${0}`],
    ['loadp', 'Loading indicator (<p>กำลังโหลด...)', 'แสดงสถานะกำลังโหลดข้อมูล', `{loading && <p>กำลังโหลด...</p>}\${0}`],
    ['formstate', 'Controlled input with htmlFor', 'ผูก input กับ state พร้อม id และ htmlFor', `<label htmlFor="\${1:name}">\${2:ชื่อ}</label>\n<input id="\${1:name}" value={\${3:name}} onChange={event => \${4:setName}(event.target.value)} />\${0}`],
    ['formsubmit', 'React submit handler', 'ฟังก์ชันจัดการ onSubmit ของฟอร์มพร้อมป้องกันหน้าเว็บรีเฟรช', `async function handleSubmit(event) {\n  event.preventDefault();\n  setError("");\n  setBusy(true);\n  try {\n    \${0}\n  } catch (error) {\n    setError(error.message || "บันทึกไม่สำเร็จ");\n  } finally {\n    setBusy(false);\n  }\n}`],
    ['formui', 'React form JSX', 'โครงสร้างฟอร์มที่เชื่อมกับ onSubmit และแสดง role="alert"', `<form onSubmit={\${1:submit}}>\n  <label>ชื่อ<input value={\${2:name}} onChange={(e) => \${3:setName}(e.target.value)} /></label>\n  <button type="submit">\${4:บันทึก}</button>\n</form>\n{error && <p role="alert">{error}</p>}\${0}`],
    ['router', 'React Router setup (Layout + Outlet)', 'ตั้ง BrowserRouter, Layout, Routes, Route และหน้า 404', `import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';\n\nfunction Layout() {\n  return (\n    <main>\n      <nav>\n        <Link to="/">Home</Link>\n        <Link to="/\${1:customers}">\${2:Customers}</Link>\n      </nav>\n      <Outlet />\n    </main>\n  );\n}\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route element={<Layout />}>\n          <Route path="/" element={<\${3:Home} />} />\n          <Route path="/\${1:customers}" element={<\${2:Customers} />} />\n          <Route path="*" element={<h1>404</h1>} />\n        </Route>\n      </Routes>\n    </BrowserRouter>\n  );\n}\${0}`],
    ['navlink', 'Navigation links', 'สร้างเมนูลิงก์นำทางด้วย Link หรือ NavLink', `<nav>\n  <Link to="/">Home</Link>\n  <Link to="/\${1:customers}">\${2:Customers}</Link>\n</nav>\${0}`],

    // --- Node.js, CommonJS, Express, Auth, SQL & Prisma Backend Snippets ---
    ['nodehello', 'First Node program', 'ไฟล์ .js แรก รันด้วย node ตามด้วย path ของไฟล์', `const learner = "\${1:Mali}";\nconsole.log("Hello Node, " + learner);\${0}`],
    ['req', 'require module', 'นำเข้า CommonJS module ใน Node.js', `const \${1:pkg} = require('\${2:express}');\${0}`],
    ['reqd', 'require destructuring', 'นำเข้าฟังก์ชันจากไฟล์ module แบบ destructuring', `const { \${1:total} } = require('\${2:./lib/prices.js}');\${0}`],
    ['reqfs', 'require node:fs/promises', 'นำเข้าโมดูล fs/promises สำหรับอ่านเขียนไฟล์ด้วย await', `const fs = require('node:fs/promises');\${0}`],
    ['reqpath', 'require node:path', 'นำเข้าโมดูล path สำหรับจัดการตำแหน่งไฟล์ด้วย path.join', `const path = require('node:path');\${0}`],
    ['exp', 'exports.fn = ...', 'ส่งออกฟังก์ชันจาก CommonJS module', `exports.\${1:functionName} = (\${2:params}) => {\n  \${0}\n};`],
    ['expa', 'exports.fn = async (req, res)', 'ส่งออก async controller function ใน Express', `exports.\${1:action} = async (req, res) => {\n  \${0}\n};`],
    ['modexp', 'module.exports = ...', 'ส่งออกค่าหลักของไฟล์ เช่น router หรือ app', `module.exports = \${1:router};\${0}`],
    ['pathjoin', 'path.join(__dirname, ...)', 'สร้าง path อ้างอิงจากโฟลเดอร์ของไฟล์ปัจจุบัน', `path.join(__dirname, '\${1:../data/menu.json}')\${0}`],
    ['fsread', 'Read & parse JSON file', 'อ่านไฟล์ JSON ด้วย fs.readFile และแปลงด้วย JSON.parse (บทที่ 03)', `const filePath = path.join(__dirname, '\${1:../data/menu.json}');\nconst text = await fs.readFile(filePath, 'utf8');\nreturn JSON.parse(text);\${0}`],
    ['fswrite', 'Write JSON file', 'เขียนข้อมูลลงไฟล์ JSON ด้วย fs.writeFile', `const filePath = path.join(__dirname, '\${1:../data/menu.json}');\nawait fs.writeFile(filePath, JSON.stringify(\${2:data}, null, 2), 'utf8');\${0}`],
    ['sendfile', 'res.sendFile(path.join(...))', 'ส่งไฟล์ HTML กลับไปยังเบราว์เซอร์ (เช่น เวิร์กช็อปร้านอาหาร)', `res.sendFile(path.join(__dirname, '\${1:../../public/index.html}'));\${0}`],
    ['numcheck', 'Validate numeric query/param', 'ตรวจว่าค่าที่แปลงด้วย Number() เป็นตัวเลขที่ใช้ได้และไม่ติดลบ (บทที่ 04)', `const \${1:price} = Number(\${2:req.query.price});\nif (\${2:req.query.price} === undefined || String(\${2:req.query.price}).trim() === '' || !Number.isFinite(\${1:price}) || \${1:price} < 0) {\n  return res.status(400).json({ message: '\${3:Invalid price}' });\n}\${0}`],
    ['appget', 'app.get route', 'สร้างเส้นทาง GET บน Express app', `app.get('\${1:/api/items}', (req, res) => {\n  res.json(\${2:[]});\n});\${0}`],
    ['apppost', 'app.post route', 'สร้างเส้นทาง POST บน Express app', `app.post('\${1:/api/items}', (req, res) => {\n  \${0}\n});`],
    ['appuse', 'app.use middleware', 'ลงทะเบียน middleware บน Express app', `app.use((req, res, next) => {\n  res.set('\${1:X-Practice}', '\${2:ready}');\n  next();\n});\${0}`],
    ['rget', 'router.get route', 'สร้างเส้นทาง GET บน Express Router', `router.get('\${1:/menu}', (req, res) => {\n  res.send('\${2:<h1>Menu</h1>}');\n});\${0}`],
    ['rpost', 'router.post route', 'สร้างเส้นทาง POST บน Express Router', `router.post('\${1:/}', async (req, res) => {\n  \${0}\n});`],
    ['rput', 'router.put route', 'สร้างเส้นทาง PUT แก้ไขข้อมูลตาม :id', `router.put('\${1:/:id}', async (req, res) => {\n  \${0}\n});`],
    ['rpatch', 'router.patch route', 'สร้างเส้นทาง PATCH อัปเดตบางส่วนตาม :id', `router.patch('\${1:/:id}', async (req, res) => {\n  \${0}\n});`],
    ['rdel', 'router.delete route', 'สร้างเส้นทาง DELETE ลบข้อมูลตาม :id', `router.delete('\${1:/:id}', async (req, res) => {\n  \${0}\n});`],
    ['resjson', 'res.json(...)', 'ส่งคำตอบกลับในรูปแบบ JSON (200 OK)', `res.json(\${1:data});\${0}`],
    ['res201', 'res.status(201).json(...)', 'ส่งคำตอบเมื่อสร้างข้อมูลสำเร็จ (201 Created)', `res.status(201).json(\${1:created});\${0}`],
    ['res400', 'return 400 Bad Request', 'ปฏิเสธคำขอเมื่อข้อมูลไม่ถูกต้องและหยุดการทำงานทันที', `return res.status(400).json({ message: '\${1:Invalid input}' });\${0}`],
    ['res401', 'return 401 Unauthorized', 'ปฏิเสธคำขอเมื่อยังไม่ยืนยันตัวตนหรือรหัสผ่านผิด', `return res.status(401).json({ message: '\${1:Invalid credentials}' });\${0}`],
    ['res403', 'return 403 Forbidden', 'ปฏิเสธคำขอเมื่อไม่มีสิทธิ์เข้าถึง', `return res.status(403).json({ message: '\${1:Forbidden}' });\${0}`],
    ['res404', 'return 404 Not Found', 'ตอบกลับเมื่อไม่พบข้อมูลตาม ID ที่ระบุ', `return res.status(404).json({ message: '\${1:Not found}' });\${0}`],
    ['res409', 'return 409 Conflict', 'ตอบกลับเมื่อข้อมูลซ้ำหรือขัดแย้งกับสถานะปัจจุบัน', `return res.status(409).json({ message: '\${1:Duplicate or conflict}' });\${0}`],
    ['expressget', 'Express GET route (async/try)', 'อ่านข้อมูลและตอบกลับเป็น JSON พร้อมดักจับ error', `app.get(\${1:"/api/items"}, async (req, res, next) => {\n  try {\n    res.json(\${2:items});\n  } catch (error) {\n    next(error);\n  }\n});\${0}`],
    ['expresspost', 'Express POST route (validate + 201)', 'อ่าน body ตรวจข้อมูล และตอบ 201 เมื่อสร้างสำเร็จ', `app.post(\${1:"/api/items"}, async (req, res, next) => {\n  try {\n    const { \${2:name} } = req.body;\n    if (!\${2:name}) return res.status(400).json({ message: "กรุณากรอกข้อมูล" });\n    const created = \${3:await createItem(req.body)};\n    res.status(201).json(created);\n  } catch (error) {\n    next(error);\n  }\n});\${0}`],
    ['expresscrud', 'Express CRUD routes', 'โครง GET/POST/PUT/DELETE สำหรับ resource', `router.get("/", async (req, res, next) => {\n  try { res.json(await service.list(req.query)); } catch (error) { next(error); }\n});\nrouter.get("/:id", async (req, res, next) => {\n  try { const item = await service.get(req.params.id); if (!item) return res.status(404).json({ message: "ไม่พบข้อมูล" }); res.json(item); } catch (error) { next(error); }\n});\nrouter.post("/", async (req, res, next) => {\n  try { res.status(201).json(await service.create(req.body)); } catch (error) { next(error); }\n});\nrouter.put("/:id", async (req, res, next) => {\n  try { const item = await service.update(req.params.id, req.body); if (!item) return res.status(404).json({ message: "ไม่พบข้อมูล" }); res.json(item); } catch (error) { next(error); }\n});\nrouter.delete("/:id", async (req, res, next) => {\n  try { await service.remove(req.params.id); res.status(204).end(); } catch (error) { next(error); }\n});\${0}`],
    ['expressrouter', 'Express Router file', 'แยก route ออกจาก app หลักแล้ว export ไป mount ต่อ', `const router = require("express").Router();\n\nrouter.get("/", (req, res) => {\n  res.json([]);\n});\n\nmodule.exports = router;\${0}`],
    ['expressapp', 'Express app setup', 'ตั้ง JSON middleware, router, 404 handler และ error handler', `const express = require("express");\nconst app = express();\napp.use(express.json());\napp.use("/api/\${1:items}", require("./routes/\${2:items}.js"));\napp.use((req, res) => res.status(404).json({ message: "ไม่พบเส้นทาง" }));\napp.use((error, req, res, next) => {\n  console.error(error);\n  res.status(error.status || 500).json({ message: error.message || "เกิดข้อผิดพลาด" });\n});\nmodule.exports = app;\${0}`],
    ['middleware', 'Express middleware', 'ตรวจ request ก่อนส่งต่อด้วย next()', `function \${1:myMiddleware}(req, res, next) {\n  try {\n    \${0}\n    next();\n  } catch (error) {\n    next(error);\n  }\n}\nmodule.exports = \${1:myMiddleware};`],
    ['bchash', 'bcrypt.hash(password, 10)', 'เข้ารหัสผ่านทางเดียวก่อนบันทึกผู้ใช้ใหม่ (บทที่ 16)', `const passwordHash = await bcrypt.hash(\${1:password}, 10);\${0}`],
    ['bccomp', 'bcrypt.compare(password, hash)', 'เปรียบเทียบรหัสผ่านที่กรอกกับ hash ที่เก็บไว้ (บทที่ 16)', `const isMatch = await bcrypt.compare(String(\${1:req.body.password} || ''), \${2:user.passwordHash});\nif (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });\${0}`],
    ['jwtsign', 'jwt.sign token', 'สร้าง JWT token พร้อมกำหนดวันหมดอายุ (บทที่ 16-17)', `const token = jwt.sign({ userId: \${1:user.id}, role: \${2:user.role} }, \${3:secret}, { expiresIn: '1h' });\nres.json({ token });\${0}`],
    ['jwtverify', 'jwt.verify Bearer token', 'ตรวจสอบ Bearer token ใน middleware (บทที่ 17)', `const header = req.headers.authorization || '';\nif (!header.startsWith('Bearer ')) return res.status(401).json({ message: 'Token required' });\ntry {\n  req.user = jwt.verify(header.slice(7), \${1:secret});\n  next();\n} catch {\n  res.status(401).json({ message: 'Invalid or expired token' });\n}\${0}`],
    ['authmiddleware', 'Bearer token middleware function', 'ฟังก์ชัน middleware ตรวจสอบ Bearer token เต็มรูปแบบ', `function requireAuth(req, res, next) {\n  const header = req.get("Authorization") || "";\n  const token = header.startsWith("Bearer ") ? header.slice(7) : null;\n  if (!token) return res.status(401).json({ message: "กรุณาเข้าสู่ระบบ" });\n  try {\n    req.user = jwt.verify(token, process.env.JWT_KEY);\n    next();\n  } catch {\n    res.status(401).json({ message: "token ไม่ถูกต้องหรือหมดอายุ" });\n  }\n}\${0}`],
    ['sqlprep', 'SQLite Prepared Statement (sql.js)', 'ค้นหาข้อมูลด้วย Parameterized Query ป้องกัน SQL Injection (บทที่ 14)', `const db = await ready;\nconst statement = db.prepare('SELECT * FROM customers WHERE name LIKE ?');\ntry {\n  statement.bind(['%' + \${1:keyword} + '%']);\n  const rows = [];\n  while (statement.step()) rows.push(statement.getAsObject());\n  return rows;\n} finally {\n  statement.free();\n}\${0}`],
    ['prismamany', 'Prisma findMany (search & sort)', 'ค้นหาและเรียงลำดับข้อมูลด้วย Prisma Client (บทที่ 15)', `await prisma.\${1:customer}.findMany({\n  where: { \${2:name}: { contains: String(\${3:req.query.keyword} || '') } },\n  orderBy: { id: 'asc' },\n})\${0}`],
    ['asyncroute', 'Express async route wrapper', 'ส่ง error จาก async route ไปยัง error middleware', `const asyncHandler = handler => (req, res, next) =>\n  Promise.resolve(handler(req, res, next)).catch(next);\n\${0}`],
    ['errorhandler', 'Express error handler', 'ตอบ JSON error โดยไม่เปิดเผยรายละเอียดภายในให้ client', `app.use((error, req, res, next) => {\n  console.error(error);\n  if (res.headersSent) return next(error);\n  const status = Number.isInteger(error.status) ? error.status : 500;\n  res.status(status).json({ message: status >= 500 ? "เกิดข้อผิดพลาดในระบบ" : error.message });\n});\${0}`],
    ['env', 'Environment config', 'โหลด dotenv และตรวจค่าตั้งต้นที่ server ต้องมี', `require("dotenv").config();\nconst requiredEnv = ["JWT_KEY"];\nfor (const key of requiredEnv) {\n  if (!process.env[key]) throw new Error(\`Missing environment variable: \\\${key}\`);\n}\${0}`],
  ],
  css: [
    ['reset','CSS reset','ตั้ง box sizing และล้าง margin เริ่มต้น',`*, *::before, *::after { box-sizing: border-box; }\nhtml { line-height: 1.5; -webkit-text-size-adjust: 100%; }\nbody { margin: 0; min-height: 100vh; }\nimg, picture, video, canvas, svg { display: block; max-width: 100%; }\nbutton, input, textarea, select { font: inherit; }\${0}`],
    ['flex','Flex row','จัดของให้อยู่ในแถวและเว้นช่องไฟ',`.container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\${0}`],
    ['center','Center with grid','จัดเนื้อหาไว้กลางแนวนอนและแนวตั้ง',`.center {\n  display: grid;\n  place-items: center;\n}\${0}`],
    ['grid','Responsive grid','สร้าง grid ที่ปรับจำนวนคอลัมน์ตามความกว้าง',`.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem;\n}\${0}`],
    ['card','Card style','กล่องการ์ดพร้อมเส้นขอบและมุมโค้ง',`.card {\n  padding: 1.25rem;\n  border: 1px solid #dfe7e2;\n  border-radius: 12px;\n  background: #fff;\n  box-shadow: 0 8px 24px rgb(25 45 35 / 10%);\n}\${0}`],
    ['button','Button states','ปุ่มพร้อม hover, focus-visible และ disabled',`.button {\n  border: 0;\n  border-radius: .5rem;\n  padding: .7rem 1rem;\n  color: #fff;\n  background: #176b55;\n  cursor: pointer;\n  transition: background-color .2s, transform .2s;\n}\n.button:hover { background: #10523f; }\n.button:focus-visible { outline: 3px solid #8bd3b3; outline-offset: 2px; }\n.button:disabled { opacity: .55; cursor: not-allowed; }\${0}`],
    ['formcss','Form controls','รูปแบบ input, label และข้อความ validation',`.form-field { display: grid; gap: .4rem; margin-block: 1rem; }\n.form-field input, .form-field select, .form-field textarea {\n  width: 100%;\n  padding: .7rem .8rem;\n  border: 1px solid #b9c9c0;\n  border-radius: .45rem;\n  background: #fff;\n}\n.form-field :focus-visible { outline: 3px solid #8bd3b3; outline-offset: 1px; }\n.form-error { color: #b42318; font-size: .9rem; }\${0}`],
    ['layout','Page layout','header, main และ footer ที่ยืดหยุ่นตามความสูงหน้าจอ',`.page { min-height: 100vh; display: flex; flex-direction: column; }\n.page__header, .page__footer { flex: none; }\n.page__main { width: min(100% - 2rem, 72rem); margin-inline: auto; flex: 1; padding-block: 2rem; }\${0}`],
    ['truncate','Text ellipsis','ตัดข้อความยาวให้เหลือบรรทัดเดียว',`.truncate { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }\${0}`],
    ['focus','Accessible focus','แสดง focus ring ชัดสำหรับผู้ใช้ keyboard',`:focus-visible { outline: 3px solid #176b55; outline-offset: 3px; }\${0}`],
    ['darkmode','Dark mode variables','เปลี่ยนชุดสีเมื่อผู้ใช้เลือกโหมดมืด',`:root { color-scheme: light; --surface: #fff; --text: #18231e; --border: #dfe7e2; }\n@media (prefers-color-scheme: dark) {\n  :root { color-scheme: dark; --surface: #17211d; --text: #eef7f1; --border: #39483f; }\n}\nbody { color: var(--text); background: var(--surface); }\${0}`],
    ['animation','Reduced-motion animation','เพิ่ม animation แบบเคารพการตั้งค่าลด motion',`@keyframes \${1:fade-in} { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }\n.\${2:appear} { animation: \${1:fade-in} .25s ease-out both; }\n@media (prefers-reduced-motion: reduce) { .\${2:appear} { animation: none; } }\${0}`],
    ['media','Mobile breakpoint','เปลี่ยน layout เมื่อหน้าจอกว้างไม่เกิน 640px',`@media (max-width: 640px) {\n  .container {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\${0}`],
    ['rootvars','CSS variables','ประกาศสีและระยะที่ใช้ซ้ำทั้งเว็บ',`:root {\n  --color-primary: #176b55;\n  --color-accent: #73a78d;\n  --color-surface: #edf5ef;\n  --space-md: 1rem;\n}\${0}`],
  ],
  json: [
    ['jsonobj','JSON object','object สำหรับข้อมูล API',`{\n  "id": \${1:1},\n  "name": "\${2:Example}",\n  "active": \${3:true}\n}\${0}`],
    ['jsonarray','JSON array','รายการ object หลายรายการ',`[\n  { "id": 1, "name": "\${1:First item}" },\n  { "id": 2, "name": "\${2:Second item}" }\n]\${0}`],
    ['jsonresponse','API response','รูปแบบ response ที่มีข้อมูลและข้อความสถานะ',`{\n  "data": \${1:[]},\n  "message": "\${2:สำเร็จ}"\n}\${0}`],
  ],
  sql: [
    ['select','SELECT query','ค้นหาและเรียงข้อมูล',`SELECT \${1:id, name}\nFROM \${2:items}\nWHERE \${3:active = 1}\nORDER BY \${4:created_at DESC}\nLIMIT \${5:20};\${0}`],
    ['join','JOIN query','เชื่อมข้อมูลจากสองตาราง',`SELECT \${1:users.name}, \${2:orders.total}\nFROM \${3:users}\nJOIN \${4:orders} ON \${4}.user_id = \${3}.id\nWHERE \${5:users.id = ?};\${0}`],
    ['insert','INSERT query','เพิ่มแถวโดยระบุคอลัมน์และค่า',`INSERT INTO \${1:items} (\${2:name, active})\nVALUES (\${3:?, ?});\${0}`],
    ['update','UPDATE query','แก้ไขแถวโดยมีเงื่อนไข WHERE',`UPDATE \${1:items}\nSET \${2:name = ?}\nWHERE id = \${3:?};\${0}`],
    ['delete','DELETE query','ลบแถวโดยระบุเงื่อนไขป้องกันลบทั้งหมด',`DELETE FROM \${1:items}\nWHERE id = \${2:?};\${0}`],
    ['createtable','CREATE TABLE','สร้างตารางพร้อม primary key และ timestamps',`CREATE TABLE \${1:items} (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP\n);\${0}`],
    ['transaction','SQL transaction','เริ่ม transaction และปิดด้วย COMMIT หรือ ROLLBACK',`BEGIN TRANSACTION;\n\${0}\nCOMMIT;`],
  ],
  markdown: [
    ['h2','Section heading','หัวข้อระดับ 2',`## \${1:หัวข้อ}\n\n\${0}`],
    ['checklist','Task checklist','รายการตรวจงานแบบ checkbox',`- [ ] \${1:งานที่ต้องทำ}\n- [ ] \${2:งานถัดไป}\n\${0}`],
    ['codeblock','Fenced code block','บล็อกโค้ดพร้อมระบุภาษา',`\`\`\`\${1:js}\n\${0}\n\`\`\``],
    ['mdtable','Markdown table','ตารางหัวข้อและข้อมูล',`| \${1:หัวข้อ} | \${2:ค่า} |\n| --- | --- |\n| \${3:ตัวอย่าง} | \${4:ข้อมูล} |\${0}`],
    ['link','Markdown link','ลิงก์พร้อมข้อความที่อ่านรู้เรื่อง',`[\${1:ข้อความลิงก์}](\${2:https://example.com})\${0}`],
  ],
  yaml: [
    ['devservice','Vite Docker Compose service','สำหรับ compose.yaml ต้องมี Docker และ package.json ของ React',`services:\n  web:\n    image: node:22\n    working_dir: /app\n    volumes:\n      - .:/app\n    ports:\n      - "5173:5173"\n    command: sh -c "npm install && npm run dev -- --host 0.0.0.0"\${0}`],
    ['compose','Docker Compose services','โครง services พร้อม port, environment และ depends_on',`services:\n  \${1:app}:\n    build: .\n    ports:\n      - "\${2:3000}:3000"\n    environment:\n      NODE_ENV: development\n    depends_on:\n      - \${3:db}\${0}`],
    ['workflow','GitHub Actions Node workflow','ติดตั้ง Node dependencies และรัน checks',`name: \${1:Node checks}\non:\n  push:\n  pull_request:\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 22\n      - run: npm ci\n      - run: npm test\${0}`],
  ],
  plaintext: [
    ['todo','TODO checklist','บันทึกขั้นตอนที่ต้องทำต่อ',`TODO:\n- \${1:งานที่ต้องทำ}\n- \${2:เงื่อนไขที่ต้องตรวจ}\n\${0}`],
    ['note','Project note','โน้ตสั้นสำหรับอธิบายไฟล์หรือข้อจำกัด',`# \${1:หัวข้อ}\n\n\${0}`],
  ],
};

export const htmlSnippets = [
  ['html5','HTML document','เอกสาร HTML5 พร้อมภาษา, viewport, stylesheet และ entry script',`<!doctype html>\n<html lang="\${1:th}">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>\${2:Page title}</title>\n  <link rel="stylesheet" href="\${3:./style.css}" />\n</head>\n<body>\n  <main>\n    \${0}\n  </main>\n  <script type="module" src="\${4:./main.js}"></script>\n</body>\n</html>`],
  ['formhtml','Accessible HTML form','ฟอร์มที่มี label, input, required และปุ่ม submit',`<form action="\${1:/submit}" method="\${2:post}">\n  <label for="\${3:email}">\${4:Email}</label>\n  <input id="\${3:email}" name="\${3:email}" type="email" autocomplete="email" required />\n  <button type="submit">\${5:ส่งข้อมูล}</button>\n</form>\${0}`],
  ['tablehtml','Data table','ตารางข้อมูลพร้อม caption และหัวคอลัมน์',`<table>\n  <caption>\${1:รายการข้อมูล}</caption>\n  <thead><tr><th scope="col">\${2:ชื่อ}</th><th scope="col">\${3:สถานะ}</th></tr></thead>\n  <tbody>\n    <tr><td>\${4:ตัวอย่าง}</td><td>\${5:พร้อมใช้งาน}</td></tr>\n  </tbody>\n</table>\${0}`],
  ['navhtml','Semantic page navigation','โครง header, nav และ main แบบ semantic',`<header>\n  <a href="/" aria-label="\${1:หน้าแรก}">\${2:ชื่อเว็บไซต์}</a>\n  <nav aria-label="เมนูหลัก">\n    <a href="/\${3:items}">\${4:รายการ}</a>\n  </nav>\n</header>\n<main id="main-content">\n  \${0}\n</main>`],
  ['imghtml','Responsive accessible image','รูปภาพที่มี alt และ lazy loading',`<img src="\${1:/images/photo.jpg}" alt="\${2:คำอธิบายภาพ}" loading="lazy" />\${0}`],
  ['scriptmodule','ES module script','โหลด JavaScript เป็น module',`<script type="module" src="\${1:./main.js}"></script>\${0}`],
];

const backendOnly = new Set([
  'nodehello', 'req', 'reqd', 'reqfs', 'reqpath', 'exp', 'expa', 'modexp',
  'pathjoin', 'fsread', 'fswrite', 'sendfile', 'numcheck',
  'appget', 'apppost', 'appuse', 'rget', 'rpost', 'rput', 'rpatch', 'rdel',
  'resjson', 'res201', 'res400', 'res401', 'res403', 'res404', 'res409',
  'expressget', 'expresscrud', 'expresspost', 'expressrouter', 'expressapp',
  'middleware', 'bchash', 'bccomp', 'jwtsign', 'jwtverify', 'authmiddleware',
  'sqlprep', 'prismamany', 'asyncroute', 'errorhandler', 'env',
]);

const shared = new Set([
  'log', 'clg', 'cer', 'afn', 'anfn', 'fn', 'af', 'dest',
  'red', 'map', 'fil', 'find', 'findi', 'some', 'fre', 'fof',
  'prom', 'delay', 'trycatch', 'fetchjson', 'fetchpost',
  'axiosget', 'axiospost', 'jsonparse', 'jsonstr',
]);

export function getSnippets(path, languageId = language(path)) {
  const items = languageId === 'html' ? htmlSnippets : snippetGroups[languageId] || [];
  const backend = /(^|\/)backend\/|(^|\/)scripts\/|\.js$/i.test(path) && !/\.jsx$/i.test(path);
  return items.filter(([prefix]) =>
    languageId !== 'javascript' ||
    (backend ? backendOnly.has(prefix) || shared.has(prefix) : !backendOnly.has(prefix))
  );
}

// Show code with default values, without Monaco's tabstop notation.
export function snippetPreview(template) {
  const values = {};
  template.replace(/\$\{(\d+):([^}]*)\}/g, (_, id, value) => { values[id] ??= value; return ''; });
  return template.replace(/\$\{(\d+):([^}]*)\}|\$\{(\d+)\}|\$(\d+)/g,
    (_, id, value, mirror, stop) => values[id ?? mirror ?? stop] ?? value ?? '').replace(/\\([$}\\])/g, '$1');
}

const usage = {
  rfc: 'ใช้แทนเนื้อหาไฟล์ component ใหม่ เช่น frontend/components/Card.jsx หรือเลือกทั้งหมดใน App.jsx ก่อนแทรก',
  rafce: 'สร้าง React Arrow Function Component พร้อม export default แบบส่วนขยาย ES7+',
  rfce: 'สร้าง React Function Component พร้อม export default แบบส่วนขยาย ES7+',
  rfcn: 'วางนอกฟังก์ชันอื่น และ import ด้วยชื่อเดียวกับ export เช่น import { Card } from "./Card"',
  us: 'วางใน component ก่อน return; import { useState } from "react"; เปลี่ยน initialValue เป็นค่าเริ่มจริง เช่น 0 หรือ ""',
  usobj: 'วางใน component ก่อน return; import useState; input ต้องมี name ที่ตรงกับ property และ onChange={handleChange}',
  ue: 'วางใน component ก่อน return; import useEffect; ใช้ [] เมื่อต้องการให้ทำงานครั้งเดียวตอนเปิดหน้า',
  uefetch: 'วางใน component ก่อน return; ต้องมี state rows/loading/error และ import useEffect/useState',
  uref: 'วางใน component ก่อน return; ผูกกับ <input ref={inputRef} /> แล้วเรียก inputRef.current.focus()',
  uctx: 'วางใน component ลูกที่อยู่ภายใต้ Provider เพื่ออ่านค่าจาก Context',
  cctx: 'วางนอกฟังก์ชัน component เพื่อประกาศ Context หลักของไฟล์',
  ulmap: 'วางใน JSX return เพื่อวนลูปแสดงรายการ <ul><li> พร้อม key',
  inp: 'วางใน <form> ของ JSX เพื่อสร้างช่องกรอกข้อมูลแบบ Controlled Input',
  btn: 'วางใน JSX เพื่อสร้างปุ่มกดพร้อมผูกฟังก์ชัน onClick',
  alertp: 'วางใน JSX เพื่อแสดงข้อความแจ้งเตือนที่มี role="alert" ตามที่ชุดตรวจต้องการ',
  loadp: 'วางใน JSX เพื่อแสดงข้อความ "กำลังโหลด..." ขณะรอข้อมูลจาก API',
  red: 'ใช้นับหรือรวมค่าจาก array เช่น items.reduce((sum, item) => sum + item.price * item.quantity, 0)',
  delay: 'วางในฟังก์ชัน async เพื่อหน่วงเวลารอด้วย Promise และ setTimeout',
  fsread: 'วางในฟังก์ชัน async ของ backend เพื่ออ่านไฟล์ JSON ด้วย path.join และ fs.readFile',
  sendfile: 'วางใน route handler เพื่อส่งไฟล์ HTML กลับไปให้เบราว์เซอร์',
  numcheck: 'วางต้น route handler เพื่อตรวจสอบพารามิเตอร์ตัวเลขก่อนคำนวณ',
  bchash: 'วางใน async route /register เพื่อแฮชรหัสผ่านด้วย bcrypt ก่อนบันทึก',
  bccomp: 'วางใน async route /login เพื่อตรวจรหัสผ่านกับ passwordHash',
  jwtsign: 'วางใน route /login หลังตรวจรหัสผ่านผ่านแล้วเพื่อส่ง token กลับ',
  jwtverify: 'วางในไฟล์ middleware verifyToken.js เพื่อตรวจ Bearer token',
  sqlprep: 'วางในฟังก์ชัน search ของ backend/db.js เพื่อค้นหาข้อมูลด้วย Parameterized Query',
  prismamany: 'วางใน controller ที่เป็น async เพื่อค้นหาข้อมูลผ่าน Prisma Client',
};

export function snippetUsage(prefix, languageId) {
  return usage[prefix] || ({
    javascript: 'พิมพ์คำย่อใน Editor แล้วกด Tab หรือ Ctrl+Space เพื่อแทรกโค้ดและกด Tab เลื่อนแก้ไขจุดถัดไป',
    css: 'วางในไฟล์ CSS ภายนอก rule อื่น หรือพิมพ์ย่อแบบ Emmet เช่น df, dg, p16 แล้วกด Tab',
    html: 'วางใน body ของ HTML หรือพิมพ์ย่อแบบ Emmet เช่น div.card>h2+p แล้วกด Tab',
    json: 'ใช้เป็นข้อมูล JSON ทั้งก้อนหรือ property ตามโครงตัวอย่าง รักษา double quotes',
    sql: 'ปรับชื่อตาราง/column ให้ตรงฐานข้อมูล',
    markdown: 'วางในไฟล์ Markdown เช่น README.md',
    yaml: 'วางในไฟล์ YAML ที่ตรงเครื่องมือและระดับ indentation',
    plaintext: 'วางในไฟล์โน้ตข้อความ',
  })[languageId];
}
