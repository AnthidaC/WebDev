# Full Stack Academy: แผนและสถานะการพัฒนา

## เป้าหมาย

เพิ่มคอร์สในเว็บเดิม ให้แต่ละโจทย์เป็นโปรเจกต์หลายไฟล์คล้ายการเปิดโฟลเดอร์ใน VS Code มีเทมเพลตและแพ็กเกจที่ระบบเตรียมให้ ผู้เรียนเริ่มทำงานได้โดยไม่ต้องตั้งโปรเจกต์หรือติดตั้ง Node บนเครื่องเพื่อเรียนบททั่วไป

คอร์ส HTML/CSS และ JavaScript เดิมยังเข้าถึงได้จากแถบสลับคอร์ส

## แผนบทเรียนจากเอกสารที่ได้รับ

| ลำดับ | เนื้อหา | เอกสาร / หน้า หรือสไลด์ | งานที่ฝึก |
| --- | --- | --- | --- |
| 00 | อ่านโครงสร้างโปรเจกต์ | Node 92–97, React 14–16 | แก้ App และ CSS, อ่าน scripts |
| 01–02 | ES6, modules, Promise, async/await | Node 14–58, React 5–11 | แยก module และรอผล asynchronous |
| 03–05 | fs/path, HTTP, Express, params/query, Router | Node 59–111 | อ่าน JSON, สร้าง API, แยกหลายหน้า |
| 06–08 | JSX, props, event, useState, forms | React 17–68 | สร้าง component เอง, controlled form |
| 09–11 | Effect, routing/layout, context/ref | Full 1 หน้า 2–13, Full2 หน้า 2–21 | เรียก API, เปลี่ยนหน้า, แชร์ state |
| 12–14 | Controller CRUD, service layer, SQL | Full 1 หน้า 14–41, Full2 หน้า 4–23 | CRUD ครบ, validation, parameterized query |
| 15 | Prisma/MySQL และ Docker | Full 1 หน้า 42–59, Auten หน้า 3–19 และ 42–51 | ORM และชุดฐานข้อมูลจริงภายนอก |
| 16–17 | Register/Login, hash, JWT, logout | Auten หน้า 21–40 | ตรวจข้อมูลซ้ำ, verify token และ expiry |

ไฟล์ต้นฉบับอยู่ใน `.codex-remote-attachments/` ซึ่งเป็นข้อมูลเฉพาะเครื่องและไม่รวมใน Git หรือ build หน้าเว็บแสดงชื่อชีท/เลขหน้าที่สัมพันธ์กับบทเรียน โค้ดและคำอธิบายถูกเขียนใหม่สำหรับเว็บนี้

## พื้นที่ทำโปรเจกต์

- Explorer แสดงโฟลเดอร์ สร้างไฟล์/โฟลเดอร์ ลบและเปลี่ยนชื่อไฟล์
- Monaco editor หลายแท็บ พร้อม syntax highlighting และ worker ที่ bundle มากับเว็บ
- แต่ละข้อมี starter, reference solution, tests และไฟล์งานแยกกัน
- Terminal ใช้ shell ของ Node runtime จริง ไม่รันโค้ดผู้เรียนบนเครื่อง host ของเว็บไซต์
- Preview เลือก port และ URL path ได้ พร้อมเปิดหน้าต่างแยก
- API Client ทดลอง method, JSON body และ Bearer token
- ซิงก์โค้ดเข้า runtime และอ่านไฟล์ที่สร้างใน Terminal กลับมาใน Explorer
- บันทึกใน localStorage และนำเข้า/ส่งออก ZIP โดยตรวจเส้นทางไฟล์ก่อนใช้
- ผลตรวจผูกกับโค้ดที่ตรวจ หากแก้ไฟล์แล้วต้องตรวจใหม่

## วิธีฝึก

เวิร์กช็อป 7 ชุด: ร้านอาหารหลายหน้า, Customer manager, Member portal, Food CRUD, จองที่นั่ง, คลังสินค้า และร้านอาหารที่มีรีวิว/สิทธิ์ guest-user-admin โดยชุดหลังเพิ่มกติกาความจุ การคืนยอด ข้อมูลเก่า ownership และการคำนวณคะแนน ไม่ได้จำกัดอยู่ที่ Todo หรือ CRUD พื้นฐาน

1. **เรียนจากศูนย์**: อ่านบท อธิบายแนวคิด เปิดไฟล์ทำตามขั้น ขอคำใบ้ทีละขั้น และอ่านเฉลยรายไฟล์
2. **เวิร์กช็อป**: ต่อหลายทักษะในโปรเจกต์ มีข้อกำหนดเพิ่มเติมและ checklist สำหรับทดลองเอง
3. **จำลองสอบ**: เริ่มจากเทมเพลต จับเวลาตาม deadline ที่บันทึก ปิดคำใบ้/เฉลยระหว่างทำ เก็บ snapshot และล็อกงานเมื่อส่งหรือหมดเวลา

ระบบเป็นพื้นที่ฝึกส่วนตัว ผู้เรียนแก้ localStorage/เครื่องตัวเองได้ จึงไม่ใช่ระบบคุมสอบหรือออกคะแนนรับรอง ชุดตรวจอัตโนมัติครอบคลุมพฤติกรรมที่ระบุ ส่วน CSS, โครงสร้าง และบาง flow ต้องประเมินเองตาม checklist

## ขอบเขต runtime ที่ทำงานต่างกัน

| ประเภท | วิธีรัน | การเตรียมให้ |
| --- | --- | --- |
| React/Node/Express | WebContainer ใน browser | ระบบ npm install แล้วเริ่ม frontend และ API อัตโนมัติ |
| SQL เบื้องต้น | SQLite ผ่าน sql.js/WASM ใน Node | ตาราง/ข้อมูลเริ่มต้น ไม่ต้องติดตั้ง DB |
| Prisma/MySQL | ส่งออก ZIP แล้วใช้ Docker Compose | Dockerfile, MySQL, schema, seed และคำสั่งตรวจ |

บททั่วไปและตัวอย่าง auth เก็บข้อมูลในหน่วยความจำ ซึ่งหายเมื่อ backend เริ่มใหม่ ชุด Docker ใช้ MySQL volume เพื่อคงข้อมูล ห้ามเรียก SQLite ว่า MySQL หรือให้ผลตรวจจำลองแทนฐานข้อมูลจริง

ในเครื่องพัฒนานี้มี XAMPP ที่ `D:\xampp1` จึงเปิด MariaDB 10.4.32 แยกที่ `127.0.0.1:33307` และใช้ฐานข้อมูล `fullstack_lab` พร้อมบัญชีเฉพาะสำหรับทดสอบ ไม่ใช้ data directory เดิมของ XAMPP การทดสอบ Prisma CRUD และอ่านข้อมูลข้ามโปรเซสผ่านแล้ว

เปิดฐานข้อมูลฝึก: `powershell -ExecutionPolicy Bypass -File scripts/start-practice-database.ps1`

ตรวจฐานข้อมูลจริง: `node scripts/verify-fullstack-database.mjs`

หยุดเฉพาะฐานข้อมูลฝึก: `powershell -ExecutionPolicy Bypass -File scripts/stop-practice-database.ps1`

ข้อมูลเชื่อมต่ออยู่ใน `tmp/prisma-validation/.env` ซึ่งไม่รวมใน Git/build

Docker ต้องมี Docker Desktop ที่พร้อมใช้บนเครื่องผู้เรียนก่อน ระบบไม่ได้ติดตั้ง Docker ให้ การรัน MySQL/Docker ภายในหน้าเว็บและการส่งตรวจฐานข้อมูลภายนอกกลับเข้าเว็บยังไม่รองรับ

## Hosting

พัฒนาต่อใน checkout เดิม ไม่สร้าง Site/เปลี่ยนระบบเผยแพร่โดยอัตโนมัติ

- `npm run dev` และ `npm run preview` ส่ง COOP/COEP headers สำหรับ runtime
- build มี `coi-serviceworker.js` ที่ origin เดียวกัน สำหรับ static hosting เช่น GitHub Pages
- Service Worker เปิดใช้เมื่อเข้าคอร์ส Full Stack และอาจ reload หน้าแรกเพื่อเปิด isolation
- Production ต้องเป็น HTTPS; localhost ใช้พัฒนาได้
- เหมาะกับ Chrome/Edge desktop; การบล็อก third-party storage อาจทำให้ runtime เปิดไม่สำเร็จ
- การเตรียม runtime ครั้งแรกต้องมีอินเทอร์เน็ต ไม่ได้สัญญาว่าเป็นระบบ offline

เอกสารเทคนิค: [WebContainer API](https://webcontainers.io/api), [headers](https://webcontainers.io/guides/configuring-headers), [browser support](https://webcontainers.io/guides/browser-support), [static hosting worker](https://github.com/gzuidhof/coi-serviceworker)

## การตรวจสอบ

- `npm test`: regression คอร์สเดิม พร้อมโครงสร้างคอร์สใหม่, ZIP และการจัดการไฟล์
- `npm run test:e2e`: browser UI, เพิ่มไฟล์, บันทึก/กู้คืน, deadline, ส่งข้อสอบ, mobile และ theme
- `FULLSTACK_RUNTIME=1` เปิด browser test ที่ใช้เครือข่ายสำหรับ runtime/React/API จริง
- `npm run test:fullstack-projects`: สร้างและรันเฉลยแต่ละโปรเจกต์ด้วย dependencies ของเทมเพลต
- `node scripts/verify-fullstack-projects.mjs --starters`: starter ที่ยังไม่ทำต้องไม่ผ่านชุดตรวจ
- ชุด Prisma/MySQL ตรวจแยกผ่าน XAMPP/MariaDB จริงแล้ว; เส้นทาง Docker Compose มีไฟล์ให้ แต่ยังไม่ได้รัน Docker บนเครื่องนี้

## งานต่อยอดที่แยกไว้

- บริการ container ที่เตรียม MySQL/Prisma และ snapshot ไว้บน server เพื่อให้บท DB ขั้นสูงเปิดจากเว็บได้โดยไม่ใช้ Docker ฝั่งผู้เรียน
- เพิ่มแบบฝึก Prisma relations/aggregate ต่อจากเวิร์กช็อป guest/user/admin และ rating ที่มีอยู่แล้ว
- ระบบบัญชีและ cloud sync แทนการผูกงานกับ browser เดียว
- snapshot ของ dependencies สำหรับลดเวลารอเปิดโปรเจกต์ครั้งแรก
- ชุดโจทย์แปรผันและเกณฑ์ตรวจ UI เพิ่มเติมตามเทมเพลตสอบจริงที่จะได้รับ

สิ่งเหล่านี้เป็นงานระยะถัดไป ไม่ใช่ฟังก์ชันที่อ้างว่ารองรับแล้ว


## เส้นทางสำหรับผู้เริ่มต้นที่เพิ่มในรอบถัดมา

- หน้าเริ่มติดตั้ง 9 ขั้น อธิบาย Terminal, npm init/install/run, โครง Vite จริง, src เทียบ frontend, port, proxy และวิธีเปิด ZIP ใหม่
- เวิร์กช็อปจับมือทำ 5 Level แยกงานเป็น Node ไฟล์แรก → Express API → React UI → เชื่อม HTTP → Task Board CRUD รวมเวิร์กช็อปเป็น 12 ชุดและกิจกรรมทั้งหมด 34 ชุด
- แต่ละ Level เริ่มจากโครงที่ทำระดับก่อนสำเร็จแล้ว ไม่ย้ายหรือลบงานของผู้เรียนจากระดับก่อน มีคำอธิบาย โครงย่อย ปุ่มเปิดไฟล์ และเกณฑ์ทดลองผล
- เริ่มบนเครื่องจริงได้จาก ZIP ปลายทางที่ใช้ src แบบ Vite และมี dev/test/build พร้อม
- ใช้ node scripts/verify-beginner-journey.mjs เพื่อตรวจตั้งแต่ npm init, scaffold Vite, CRUD ใน browser และการติดตั้ง/test/build ของ ZIP แยกต่างหาก
