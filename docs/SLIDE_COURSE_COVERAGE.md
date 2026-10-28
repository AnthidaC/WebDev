# Node → React → Full Stack ตามสไลด์

ตรวจต้นฉบับจาก `.codex-remote-attachments/` ทั้ง 5 ชุด ไม่ใช่อนุมานจากชื่อวิชา: Node/Express PPTX, React PDF, Full 1 PDF, Full2 PDF และ Auten PDF คำอธิบายในเว็บเขียนใหม่และแบ่งเป็นช่วงสั้นเพื่อเรียนต่อเนื่อง

## ลำดับพื้นฐาน

| ช่วง | บทในเว็บ | เหตุผลของลำดับ |
|---|---|---|
| Node | Level 1 → 01 module → 02 async → 03 fs/path → 04 HTTP → Level 2 → 05 Router/static → ร้านอาหาร Express | รันไฟล์และเข้าใจฟังก์ชัน/ข้อมูลก่อนเปิด server จากนั้นทดสอบ API โดยยังไม่ต้องรู้ React |
| React | 00 โครงหน้า → 06 props → Level 3 → 07 state → 08 form → 10 Router → 11 Context/Ref | ฝึกส่วนแสดงผลและการโต้ตอบด้วยข้อมูลในหน้า ก่อนเพิ่มปัญหาเครือข่าย |
| Full Stack | 09 Effect/API → Level 4 → 12 API CRUD → 13 UI/service → Level 5 → 14 SQL/MySQL → 15 Prisma/Docker → 16 hash/login → 17 JWT → เวิร์กช็อป → สอบ | รู้จักสองฝั่งก่อนเชื่อม สร้างสัญญา API ก่อน UI เขียนข้อมูล แล้วค่อยเปลี่ยนแหล่งเก็บเป็นฐานข้อมูลและเพิ่มสิทธิ์ |

เลข ID บางบทคงเดิมเพื่อรักษางานที่บันทึกไว้ ลำดับจริงใน Sidebar และปุ่มเริ่มเรียนใช้สามช่วงด้านบน

## เนื้อหาและ prerequisites

| บท | เนื้อหาที่อธิบายเป็นลำดับ | Dependencies/ขอบเขต |
|---|---|---|
| 00 | App/JSX → ข้อความหนึ่งบรรทัด → CSS → ผลใน Preview | React, React DOM, Vite/plugin; ยังไม่ต้องรู้ API |
| 01 | object/array → function/return → exports/require → loop สะสมยอด | Node; Express route ให้แล้ว |
| 02 | callback/timer → Promise/resolve → async/await → catch | timer/Promise ติดมากับ JavaScript |
| 03 | __dirname/path → readFile utf8 → JSON.parse | node:fs/promises และ node:path ไม่ใช่แพ็กเกจที่ต้อง npm install |
| 04 | method/path → params/query → แปลงชนิด/validation → status/return | Express/cors |
| 05 | middleware/next → Router/export → prefix → static assets | Express และ node:path |
| 06 | props.name → parent ส่งข้อมูล → destructuring → MenuCard | React; ระบุไฟล์ที่ต้องสร้าง/import |
| 07 | state/setter → event callback → functional update → render รอบใหม่ | React useState |
| 08 | value/onChange → event.target.value → form → validate → แยกค่ากรอกกับผลสำเร็จ | React; import/useState เรียนมาก่อน |
| 09 | fetch/Promise/then → HTTP error → effect dependencies → cleanup/loading/error | React, Express/Vite; เทียบ Axios และมีชุดดาวน์โหลดจริง |
| 10 | page component → Route → BrowserRouter → Layout/Link/Outlet → 404 | react-router-dom รุ่น 6.30.1 ในโครง |
| 11 | Context → Provider/state → consumer → Ref/focus | React Hooks; ไม่ใช้ ref แทน state ที่แสดงบนหน้า |
| 12 | server/app/routes/controller → POST validate → PUT/id → DELETE/status | Express; ข้อมูลในหน่วยความจำ |
| 13 | สัญญา service → form/list/editing → รอ API สำเร็จ → Axios response.data | fetch service ในโจทย์เดิม; Axios service ในชุดสไลด์และเวิร์กช็อป |
| 14 | SELECT/LIKE → prepare/bind → rows/free → mysql2/promise pool | sql.js ใน browser; mysql2 ในชุด MySQL ภายนอก ไม่สลับ API ของสอง library |
| 15 | schema/env/generate → Client/CRUD → db pull vs db push → filters/select/order/pagination/aggregate → relation/include/_count → adapter → Docker | Prisma/@prisma/client 6.19; built-in connector ของชุดหลัก; แนว adapter อธิบายแยกพร้อมรุ่นและ config |
| 16 | register vs login → validate/duplicate → hash/salt → compare → response | bcryptjs ใน browser; สไลด์ใช้ bcrypt ซึ่งต้องมี native binary |
| 17 | sign/token/expiry → Bearer/verify → identity/role/owner → logout/polling cleanup | jsonwebtoken และ JWT_KEY ฝั่ง server |

## ส่วน Full Stack ที่เคยขาด

| ต้นฉบับ | นำมาอธิบาย/ฝึกที่ใด |
|---|---|
| Full 1 หน้า 15–21: mysql2/connection, INSERT/UPDATE, result object | บท 14 และชุด MySQL ดาวน์โหลด: pool/execute/insertId/affectedRows พร้อม schema, seed และ API tests |
| Full 1 หน้า 24–41: frontend/backend, .env, pool/controller/routes/server, params/query และทดสอบ HTTP | ขั้นเตรียมทุกบท Full Stack + บท 12–14 + README ชุด MySQL |
| Full 1 หน้า 42–57: Prisma init/schema/db pull/generate, CRUD/search/include | บท 15; ขั้น setup ของฐานใหม่แยกจาก introspection ฐานเดิม และมีตัวอย่าง relation schema ที่ระบุว่าเป็นส่วนขยาย |
| Full2 หน้า 2–11: Axios, Promise.all, Form/List/Container และจังหวัด | บท 09/13 + ชุด MySQL มี Province/Customer, สอง request พร้อมกัน, Form/List/Container และการแปลง provinceId |
| Full2 หน้า 12–21: Router/Layout/Outlet, service CRUD, fallback | บท 10/13 และชุด MySQL ซึ่งมี Home/Customers/404 กับ Axios service |
| Full2 หน้า 23: FoodContainer/Form/List | เวิร์กช็อป Food อธิบายชนิดข้อมูล กติกา backend สัญญา props และการกรองประเภท |
| Auten หน้า 3–19: query/filter/select/include/relation/order/aggregate/_count | บท 15 แยกตัวอย่างที่ใช้ field ของ schema ปัจจุบัน ออกจากส่วนเพิ่ม relation ที่ต้องเปลี่ยน schema และ generate ใหม่ |
| Auten หน้า 21–40: Register/Login/JWT/protected route/polling/logout | บท 16–17 และเวิร์กช็อป Member; ตรวจ server จริงพร้อม Context/Router/UI |
| Auten หน้า 42–51: image/container/save/load, multi-container | บท 15 + ชุด MySQL มี Dockerfile, backend/Dockerfile, Nginx proxy/fallback และ Compose frontend/backend/db แยกสาม service |
| Auten หน้า 52–55: guest/user/admin, เมนู/คะแนน/รีวิว | เวิร์กช็อป Community รวม role/ownership/review uniqueness และค่าเฉลี่ยเมื่อเพิ่ม/ลบ |

## ชนิดไฟล์และความต่างที่ต้องบอกผู้เรียน

- Node/Express ใช้ `.js` และ `require/module.exports` ตาม Node สไลด์ 45–48; backend/package.json กำหนด CommonJS ให้ชัด แยกจาก root ที่ใช้ ES modules
- Component React ใช้ `.jsx` ตาม React หน้า 15–16; service ที่ไม่มี JSX ใช้ `.js`; CSS, HTML, JSON, `.env` และ `schema.prisma` ใช้ชนิดของตน ไม่เปลี่ยนทั้งโปรเจกต์เป็นชนิดเดียว
- ZIP ห้องฝึกรวม npm dependencies ไว้ root ส่วนสไลด์สร้าง frontend/backend แยก package.json ขั้นเตรียมบอกตำแหน่งติดตั้งทั้งสองแบบ ไม่ใช้คำสั่งครึ่งหนึ่งจากแต่ละโครงมารวมกัน
- สไลด์มีคำสะกด `cores` บางหน้า ชื่อแพ็กเกจที่ถูกต้องคือ `cors`
- สไลด์ใช้ backend :5000 หลายตัวอย่าง ชุดฝึกใช้ :3000 และตั้ง Vite/Nginx proxy ให้ตรงกัน อย่าคัดลอก URL โดยไม่ตรวจ port
- สไลด์ใช้ Axios ส่วนบทแรกที่สอน HTTP เริ่มด้วย fetch แล้วเทียบให้ชัด: fetch อ่าน `.json()` และตรวจ `.ok`; Axios อ่าน `.data` และ reject HTTP error ตามค่าเริ่มต้น
- สไลด์ใช้ field fName/lName/province ในบาง schema ชุดฝึกย่อเป็น name/email และชุด MySQL เพิ่ม provinceId/provinceName ต้องตรวจ schema ที่ใช้อยู่ก่อนอ้างชื่อ model/field
- Prisma ชุดหลักตรึง 6.19 และ built-in connector; adapter เป็นทางเลือกแยกที่ต้องติดตั้ง/ตั้งค่าให้ครบ ไม่ให้ผู้เรียนผสม config ต่างรุ่นโดยไม่มีคำอธิบาย
- ชุด SQLite ใน browser, MySQL ภายนอก และ ORM เป็นคนละขั้นการฝึก ไม่กล่าวว่าชุด SQLite รัน MySQL ได้

## การตรวจที่ทำได้และข้อจำกัด

ตรวจข้อความกับ starter/solution ทุกบทและเวิร์กช็อป ตรวจไฟล์ที่ลิงก์เปิดและการย้าย .cjs เดิมโดยไม่ทับงานชนชื่อ ตรวจ browser flow ทีละช่วงไม่ให้ toolbar ทับบทความ ตรวจ reference projects แบบ Node จริง และทดสอบ MySQL/Prisma บน MariaDB ภายใน workspace แยกจากฐานข้อมูลงานจริง

ตัวอย่าง relation schema และ adapter เป็นส่วนอธิบายต่อยอด ไม่ได้ใช้แทน schema ของโจทย์ตรวจคะแนนเดิม Dockerfile/Compose มีให้ครบ แต่เครื่องนี้ไม่มี Docker จึงยังไม่ผ่านการเปิด container จริง การจำลองอ่านตรวจความต่อเนื่องของเนื้อหา ไม่ใช่ผลทดลองความเข้าใจกับมนุษย์จริง

เอกสารทางเทคนิคสำหรับจุดต่างจากสไลด์: [Prisma driver adapters รุ่น 6](https://www.prisma.io/docs/orm/v6/overview/databases/database-drivers), [Prisma engineType client](https://www.prisma.io/docs/orm/v6/prisma-client/setup-and-configuration/no-rust-engine), [Axios response schema](https://axios-http.com/docs/res_schema)
