# WebDev Academy

เว็บฝึก HTML/CSS, JavaScript และ Full Stack มีบทเรียน เทมเพลตหลายไฟล์ และโหมดเตรียมสอบ คอร์ส Node + React เรียง **Node → React → Full Stack** โดยฝึกแต่ละฝั่งก่อนนำมาเชื่อมกัน

```sh
npm install
npm run dev
```

เปิดคอร์สใหม่ด้วยปุ่ม **Node + React** หรือ `http://localhost:5173/?course=fullstack`

Full Stack มี 18 บทเรียน, 12 เวิร์กช็อป (รวมจับมือทำ 5 Level) และ 4 ชุดจำลองสอบ ระบบเตรียม dependencies ของโจทย์อัตโนมัติเมื่อกดรันครั้งแรก ต้องใช้อินเทอร์เน็ตและ browser ที่รองรับ WebContainer เช่น Chrome/Edge desktop

```sh
npm test
npm run test:e2e
npm run test:fullstack-projects
node scripts/verify-beginner-journey.mjs
npm run build
```

Prisma/MySQL ใช้ชุด Docker หรือ XAMPP ภายนอก ต่างจากบททั่วไปที่รันใน browser เครื่องพัฒนานี้มี XAMPP พร้อมสคริปต์เปิดฐานข้อมูลฝึกแยกไว้แล้ว ดูรายละเอียดและขอบเขตที่รองรับใน [แผนพัฒนา](docs/FULLSTACK_PLAN.md)

## เริ่มเรียน Node + React

- ถ้ายังไม่เคยใช้ npm เปิด **ไม่เคยใช้ npm เริ่มตรงนี้** เพื่ออ่าน 9 ขั้นตั้งแต่ Terminal, npm init, ไฟล์ที่สร้างให้, React/Vite, proxy จนเป็นโปรเจกต์ Task Board
- ฝึกในแอปได้จาก **โปรเจกต์แรก เรียนทีละ Level**: Node ไฟล์แรก → API → React → เชื่อม API → เพิ่ม/สลับสถานะ/ลบ แต่ละ Level มีปุ่มเปิดไฟล์ โครงตัวอย่าง คำใบ้ และชุดตรวจ
- เริ่มบท 00 แล้วเปิด **โครง / เริ่มรัน** เพื่อดูหน้าที่ไฟล์ โค้ดก่อนเริ่ม เทียบงานปัจจุบัน และวิธีเปิด ZIP บนเครื่อง
- แต่ละบทมีเป้าหมาย คำศัพท์ คำอธิบายตัวอย่าง วิธีทดลอง ผลที่ควรได้ และคำใบ้เฉพาะบท
- บทเรียนทั้ง 18 บทและเวิร์กช็อปทั้ง 7 ชุดมีคำอธิบายทีละช่วง: เป้าหมาย → เตรียมไฟล์/dependencies → ศัพท์ → ตัวอย่างสั้นพร้อมเหตุผล → สะพานไปโจทย์ → ทดลอง ส่วนจับมือทำ 5 Level มีเหตุผล ลำดับข้อมูล และโจทย์ลองเปลี่ยนก่อนดูแนวตอบ
- แถบควบคุมอยู่นอกพื้นที่เลื่อน จึงไม่ทับข้อความ เลือก **อ่านคู่โค้ด / อ่านเต็มพื้นที่ / สามแผง** ได้จากทุกแท็บ ลากเส้นคั่นเพื่อย่อหรือขยายแผงอ่านได้ และจำขั้นที่อ่านไว้แยกตามบท
- Node ใช้ `.js` + CommonJS และ React ใช้ `.jsx` ตามสไลด์ ไฟล์เก่า `.cjs` ที่บันทึกไว้จะย้ายพร้อมแก้ references โดยเก็บโค้ดผู้เรียนไว้ หากชื่อชนกันจะเก็บทั้งสองไฟล์และแจ้งให้จัดการเอง
- ช่วง Full Stack มี **ดาวน์โหลด MySQL + Axios ตามสไลด์** ในขั้นเตรียมของบท 09, 13–15: รวม SQL/schema/seed, pool, controller, service, Form/List, `.env.example`, README, Docker/Nginx/Compose และ integration tests สำหรับ MySQL จริง ดู [การเทียบกับสไลด์](docs/SLIDE_COURSE_COVERAGE.md) และ [หลักการเขียนบทเรียน](docs/TEACHING_STANDARD.md)
- เปิด **คลัง Snippet** เหนือ Editor ค้นหา เปิดดูตัวอย่าง แล้วกดแทรกตรงเคอร์เซอร์ กด Tab เลื่อนช่องกรอก และ Ctrl+Z ย้อนกลับ
- API Client มีตัวอย่าง request ประจำบท เลือกแล้วกดส่งเมื่อ API พร้อม Login สำเร็จจะเติม Bearer token ให้อัตโนมัติ
- ใช้ ZIP สำรองงานก่อนย้ายเครื่องหรือล้างข้อมูล browser ปุ่ม **เรียนต่อ** บนหน้าเส้นทางพากลับโปรเจกต์ล่าสุด

สำหรับ browser runtime จริงให้ตั้ง FULLSTACK_RUNTIME=1 ก่อน npm run test:e2e (PowerShell: `$env:FULLSTACK_RUNTIME="1"`)

รายละเอียดผลตรวจและข้อจำกัดอยู่ใน [รีวิวระบบ](docs/UX_SYSTEM_REVIEW.md)

## Original Vite setup

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
