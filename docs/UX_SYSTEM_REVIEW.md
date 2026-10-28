# รีวิวเว็บฝึก Node + React

วันที่: 28 ตุลาคม 2026

## ขอบเขต

ตรวจหลักสูตร Full Stack 18 บท, 7 เวิร์กช็อป, 4 ข้อสอบ รวม 29 กิจกรรม ตรวจโค้ดหน้าเว็บและทดลองปุ่มสำคัญใน Edge Chromium จริง ทั้ง desktop และ mobile viewport พร้อมรันโปรเจกต์ตัวอย่างแยกจากเว็บ ชุดทดสอบคอร์ส HTML/CSS และ JavaScript เดิมยังผ่าน 83 tests

## ปัญหาที่พบและแก้แล้ว

| ปัญหา | สิ่งที่ปรับ |
| --- | --- |
| ผู้เริ่มต้นไม่รู้ว่าแต่ละไฟล์มาจากไหนและต้องเริ่มแก้ตรงไหน | เพิ่มแท็บ “โครง / เริ่มรัน” แสดงไฟล์ตั้งต้นจริงของแต่ละโปรเจกต์ หน้าที่ไฟล์ เส้นทาง request และเปิดไฟล์นั้นใน Editor ได้ |
| ดาวน์โหลด ZIP แล้วไม่รู้วิธีเริ่มบนเครื่อง | เพิ่มวิธีติดตั้ง Node LTS, ตรวจ node/npm, ติดตั้งแพ็กเกจ, เปิด React/API, รัน tests, หยุด server และแก้ปัญหา Terminal |
| ไม่เห็นความต่างระหว่างโครงเริ่มต้นกับงานตัวเอง | สลับดู “ตอนเริ่มบท” / “งานปัจจุบัน” ได้โดยไม่เขียนทับงาน |
| คำใบ้เหมือนกันหลายบทและไม่บอกวิธีลองผล | เพิ่มคู่มือเฉพาะครบ 18 บท: เป้าหมาย ความรู้ก่อนเรียน คำศัพท์ อธิบายตัวอย่าง วิธีทดลอง ผลที่ควรได้ ข้อผิดพลาด และคำใบ้ 3 ระดับ |
| snippet ต้องจำ prefix และผู้เรียนไม่รู้ว่าปุ่มทำงานอย่างไร | เพิ่มคลัง snippet ค้นหา เปิดดูโค้ด และกดแทรกตรงเคอร์เซอร์/แทน selection ได้ ใช้ Tab เปลี่ยนช่องกรอกและ Ctrl+Z ย้อนกลับได้ |
| React มองไม่เห็น fetch/try-catch snippets | ปรับการกรองให้ snippet ที่ใช้ร่วมกันปรากฏทั้ง frontend/backend |
| Express CommonJS ไม่มี member completion ที่ถูกต้อง | เปลี่ยน ambient declaration ให้ตรง export assignment ของ CommonJS และเพิ่ม method ที่ snippet ใช้ เช่น end/sendFile |
| snippet บังรายการ method/property | ไม่เสนอ snippet ระหว่างเข้าถึงสมาชิก เช่น app. หรือ process. เพื่อให้ language service แสดงสมาชิก |
| ผู้เรียนต้องพิมพ์ method/path/body เองทุกครั้ง | เพิ่ม request ตัวอย่างประจำบทใน API Client เลือกแล้วตรวจและส่งเองได้ Login สำเร็จเติม Bearer token ให้อัตโนมัติ |
| ย้อนหน้าเส้นทางแล้วไม่รู้จะเรียนต่อจากไหน | เพิ่มปุ่มเรียนต่อโปรเจกต์ล่าสุด และลำดับเริ่มฝึกแบบสั้น |
| ลบไฟล์แล้วไฟล์ใหม่ที่แสดงไม่มี tab | เปิด tab ของไฟล์ที่เลือกถัดไปให้ตรงกับ Editor |
| กดถัดไปจากกิจกรรมสุดท้ายแล้ววนกลับบทแรก | กลับหน้าเส้นทางแทน |
| ตัวบทเรียนอ่านยากเมื่อเริ่มใช้งานครั้งแรก | เพิ่มขนาดตัวอักษรบทเรียนเริ่มต้นเป็น 14px และยังปรับได้ |

## การตรวจที่ทำจริง

- Unit tests: 83/83 ผ่าน
- โปรเจกต์เฉลยที่รันใน browser ได้: 25/25 ชุดที่ไม่ซ้ำ ผ่าน tests ของโปรเจกต์จริง ไม่ใช่ตรวจเพียงว่าไฟล์มีอยู่
- Prisma/MySQL: generate, db push, seed, CRUD และเขียน/อ่านข้ามโปรเซส ผ่านบน MariaDB ฐานข้อมูลฝึก fullstack_lab ที่แยกจากฐานข้อมูลอื่น
- Browser interactions: แค็ตตาล็อก, แยกงานแต่ละบท, บันทึก/รีโหลด, editor, snippet expansion/Tab, snippet library insert/Undo, โครงไฟล์/เทียบก่อนหลัง, เรียนต่อ, API presets, autocomplete CommonJS/process.env, timer/submit snapshot และ mobile/light mode
- สำรองและกู้คืน: ดาวน์โหลด ZIP ผ่านปุ่มจริง ตรวจข้อมูลข้างใน เปลี่ยนชื่อไฟล์ รีเซ็ตบท แล้วนำเข้า ZIP คืนงาน ผ่าน
- Production build: ผ่าน มีคำเตือน bundle ของ Monaco ขนาดใหญ่

ผลรอบสุดท้าย:

- Browser suite เปิด FULLSTACK_RUNTIME=1: 9/9 ผ่าน ไม่มี skip รวม React Preview, API 200, starter ตรวจไม่ผ่าน, แก้โค้ดแล้วตรวจผ่าน, เขียนไฟล์จาก Terminal และสลับบทโดยไม่ปนไฟล์
- ZIP backup/rename/reset/import: อีก 1/1 ผ่านแยกต่างหาก รวม browser cases ที่ตรวจผ่าน 10 รายการ
- Starter projects: 24/24 ชุดไม่ซ้ำให้ผลไม่ผ่านตามที่คาด เพราะยังมีส่วนให้ผู้เรียนลงมือทำ ไม่แสดงผ่านตั้งแต่ยังไม่แก้โจทย์
- Build สุดท้ายหลังแก้ CommonJS และ API Client: ผ่าน คงมีคำเตือนขนาด bundle ของ Monaco

ปัญหาระหว่างตรวจที่แก้แล้ว: Express declaration ใช้ default export ทำให้ require ไม่ได้ชนิด callable จึงเปลี่ยนเป็น export assignment และยืนยันผ่าน language worker กับ browser UI; รอบ runtime ก่อนหน้าถูกการ reload ระหว่างพัฒนารบกวน จึงรันใหม่บน dev server คงที่หลังหยุดแก้ source และผ่านทั้ง flow

## ข้อจำกัดที่ยังต้องทราบ

- ผล unit/browser tests ยืนยันเส้นทางที่ทดสอบ ไม่ใช่รับรองว่าไม่มี bug หรือรองรับทุก package/API
- ชุด type declarations เป็นตัวช่วยสำหรับ API ที่ใช้ในบทเรียน ยังไม่เทียบเท่า language server พร้อม types ของทุก dependency
- งานบันทึกใน browser นี้ ไม่ sync ข้ามเครื่อง ต้องสำรอง ZIP เอง
- Node runtime ในเว็บต้องใช้อินเทอร์เน็ตและ browser ที่รองรับ WebContainer; mobile viewport ทดสอบ layout/interaction แต่ไม่ได้รับรอง runtime บนโทรศัพท์ทุกเครื่อง
- Prisma/MySQL ใช้ชุด ZIP ภายนอก เว็บยังไม่รับผลตรวจฐานข้อมูลกลับมาเป็นคะแนน
- automated checks ครอบคลุมบางพฤติกรรม ผู้เรียนยังต้องทำรายการ self-review ด้าน UI, responsive และการใช้งานจริง
- ยังไม่ได้ตรวจ deployment บน production hosting ของผู้ใช้

## เอกสารอ้างอิงสำหรับคู่มือเริ่มต้น

- [Node.js Learn](https://nodejs.org/learn)
- [React: Build from scratch](https://react.dev/learn/build-a-react-app-from-scratch)
- [Vite: Getting started](https://vite.dev/guide/)


## รอบตรวจแบบผู้เริ่มต้น: npm ถึงโปรเจกต์แรก

ขยายจากการตรวจ UI เป็นการเดินตามคู่มือบนเครื่องจริง และเพิ่มเวิร์กช็อปจับมือทำในแอป

### สิ่งที่เพิ่ม

- เส้นทางเริ่มต้น 9 ขั้น ระบุ Terminal/โฟลเดอร์ที่ต้องอยู่ คำสั่งทีละบรรทัด สิ่งที่คำสั่งสร้างให้ ไฟล์ที่ต้องสร้างเอง ผลที่ควรเห็น และวิธีแก้เมื่อไม่ตรง
- อธิบายว่า npm init สร้าง package.json แต่ยังไม่มี dev/test ที่ใช้งานได้, install สร้าง node_modules/package-lock และ run dev เรียก scripts
- อธิบายโครง Vite ที่สร้างจริง: index.html → src/main.jsx → src/App.jsx, CSS demo และการเทียบ src/ กับ frontend/ ของห้องฝึก
- แยก Node โปรเจกต์แรกออกจากโปรเจกต์ Full Stack ใหม่ บอกว่าเมื่อไรต้อง cd .., หยุด server, เปิด Terminal ที่สอง หรือ restart Node
- เวิร์กช็อป 5 Level: ไฟล์ Node → JSON API → React UI → fetch/proxy → Task Board เพิ่ม/สลับสถานะ/ลบ
- ทุก Level มีปุ่มเปิดไฟล์ตามขั้น โครงย่อยพร้อมปุ่มคัดลอก คำใบ้ ผลที่ต้องสังเกต และชุดตรวจ; งานเก็บแยกแต่ละ Level และเริ่มด้วยโครงระดับก่อนที่ทำเสร็จแล้ว
- ZIP ปลายทางใช้ src/ แบบ Vite มี dev/test/build และ README เปิดใหม่ได้

### ข้อบกพร่องที่พบเพิ่มและแก้

| ปัญหา | การแก้ |
| --- | --- |
| SQL JOIN ใช้ tabstop เดียวแต่กำหนด default ต่างกัน ทำให้ชื่อคอลัมน์ผิดหลังแทรก | ใช้ mirror ของชื่อตารางแล้วต่อ .user_id / .id ให้ถูก |
| ฟอร์ม snippet รวม function handler และ JSX จนไม่ชัดว่าต้องวางตรงไหน | แยก formsubmit สำหรับก่อน return และ formui สำหรับ JSX |
| ตัวอย่าง filter/list ตรวจ empty จาก array ต้นฉบับ | ตรวจจำนวนรายการหลัง filter เพื่อแสดงข้อความเมื่อไม่พบผลลัพธ์ |
| JavaScript interpolation ใน env snippet ถูก Monaco อ่านเป็นตัวแปร snippet | escape interpolation ให้โค้ดที่แทรกยังมี ${key} จริง |
| auth snippet ใช้ JWT_SECRET แต่ชุดบทเรียนใช้ JWT_KEY | ใช้ JWT_KEY ให้ตรงและเพิ่มคำอธิบายการตั้งค่า |
| YAML snippet เคยอ้างว่าเป็น Vite config ทั้งที่ Vite ไม่อ่าน config YAML นี้ | เปลี่ยนเป็น Vite service สำหรับ compose.yaml พร้อมบอกว่าต้องมี Docker |
| ผู้เรียนแทรกโค้ดแต่ไม่รู้ import/state/ไฟล์ที่ต้องเตรียม | เพิ่มคำอธิบายตำแหน่งวางและสิ่งที่ต้องมีก่อนใช้ในทุก snippet |
| Preview แสดงพร้อมเริ่มขณะยังดาวน์โหลดแพ็กเกจ | แสดงคำอธิบายช่วงเตรียม runtime และเพิ่มปุ่มยกเลิกการเตรียม |
| สร้างไฟล์ผิด path แล้ว error อยู่หลัง modal | ย้าย error เข้า dialog และรองรับ Escape/วน focus/คืน focus ให้ปุ่มต้นทาง |
| คัดลอก CSS ล้มเหลวแล้วเงียบ | แสดงวิธีเลือกข้อความคัดลอกเอง และเปลี่ยนปุ่ม demo ที่ไม่มี action เป็นตัวอย่างภาพ |
| เปลี่ยนไฟล์แล้วคำค้น snippet เก่าทำให้ดูเหมือนไม่มี snippet | ล้างคำค้น/ข้อความสถานะเมื่อเปลี่ยนไฟล์ |
| Tab อาจขยาย prefix ที่อยู่ใน expression/string | ขยายอัตโนมัติเฉพาะ prefix เดี่ยวในบรรทัด; กดแทรกจากคลังได้ตามตำแหน่งที่เลือก |

### หลักฐานการตรวจรอบนี้

- Unit tests 83/83 ผ่าน รวมตรวจโครงสร้าง 18 บท 12 เวิร์กช็อป 4 ข้อสอบ
- กดแทรก snippet ครบ 71 ตัว รวม 75 บริบทไฟล์ผ่าน browser จริง เทียบข้อความที่บันทึกหลังแทน selection และขยาย tabstops
- เปิดคำอธิบาย Editor โครงไฟล์ คำใบ้ และเฉลยของกิจกรรมครบ 34 ชุด พร้อมตรวจว่า exam ล็อกการแก้ไข/เฉลยก่อนเริ่ม
- CSS tools: palette ทุกชุด, สีเอง, gradient, layout ทั้งหมด, shadow ทุกแบบ, copy, insert และ Escape ผ่าน
- โปรเจกต์เฉลย 30/30 ชุดไม่ซ้ำผ่าน และ starter 29/29 ชุดไม่ซ้ำยังไม่ผ่านตามที่ควรเป็นก่อนลงมือทำ
- scripts/verify-beginner-journey.mjs ผ่านจริง: npm init → Node hello → install Express → HTTP → scaffold Vite → ใส่ไฟล์ตามคู่มือ → UI เพิ่ม/แก้สถานะ/ลบ/รีโหลด → mobile ไม่มี overflow
- ZIP ปลายทางติดตั้ง dependency แยกจากแอปหลัก ผ่าน API/UI tests 4 กรณี รวม regression ของ React StrictMode และ production build

- Browser tests ล่าสุด 15/15 ผ่าน รวม browser runtime ใน WebContainer เดินครบ 5 Level: Node hello, API, React UI, proxy และ CRUD พร้อมรันชุดตรวจของแต่ละ Level ผ่าน

การทดสอบ snippet ยืนยันการกดแทรกและข้อความที่ได้ แต่ snippet หลายตัวเป็นชิ้นส่วนที่ต้องมี import/state/service ตามคำอธิบาย ไม่ใช่โปรเจกต์เดี่ยวที่รันได้โดยไม่มีบริบท การตรวจแบบจำลองเส้นทางผู้เริ่มต้นไม่ใช่ผลการทดลองเรียนกับมนุษย์จริง

## ปรับความเร็วการเปิดหน้า

- เลื่อนโหลด Monaco ของหลักสูตรเดิมจนเบราว์เซอร์ว่าง; มือถือรอจนผู้เรียนเปิดแท็บโค้ด
- เลื่อนโหลด Editor ของ Full Stack จนหลังวาดหน้าบทเรียน เพื่อลดงานตอนเปิดหน้า
- หลังปรับ ขนาด main bundle ลดจาก 995.84 KB เหลือ 965.74 KB (gzip 232.76 → 222.76 KB); Monaco editor API ขนาด 2.26 MB ยังคงเป็นไฟล์แยกและจะถูกขอเมื่อเข้า Editor
- Production build ผ่าน, unit tests 83/83 ผ่าน, หน้าเริ่มต้น/ snippets 14/14 ผ่าน, Full Stack browser checks 9/9 ผ่าน (มี real runtime หนึ่งกรณีที่ชุดนี้ตั้งใจข้าม)

## ตรวจความต่อเนื่อง Node + React

- จำกัดรอบนี้ไว้ที่ Node + React; ไม่เปลี่ยนลำดับหลักสูตร HTML/CSS หรือ JavaScript เดิม
- บท 00 ปูพื้นเท่าที่ใช้จริง: HTML/JSX และการปิด tag, `className` กับ CSS selector, `const`/function, array/object และ JSON พร้อมบอกชัดว่าไม่ต้องเรียนหลักสูตรพื้นฐานเต็มก่อน
- ลำดับบทหลัก: รู้จักโปรเจกต์ → JavaScript/modules และ async → Node/Express/routes → React components/state/forms → fetch/router/context → CRUD/ฐานข้อมูล → authentication → Workshop ต่อระบบ → สอบ
- GuidedPath 5 Level แทรกใน sidebar หลังบทที่ปูพื้นของ Level นั้นตามลำดับ (Node → API → React UI → fetch/proxy → CRUD) และการ์ดหน้าแรกบอกว่าต่อยอดจากบทไหน จึงไม่ดูเป็นเส้นทางแยก
- ทุกบท Node + React มีส่วน “เรียนบทนี้ไปทำไม” อธิบายปัญหาที่ความรู้นั้นช่วยแก้ และผลลัพธ์ที่ผู้เรียนจะทำได้; บทแรกทบทวน HTML/CSS/JS เฉพาะส่วนที่ต้องใช้
- ปุ่มตรวจงานเตรียมเฉพาะ runtime/test โดยไม่เปิด dev server; เก็บ WebContainer และ dependency ไว้ใช้ข้ามบทจนออกจากคอร์ส และเปลี่ยน Vitest ไปใช้ thread pool
- วัดชุดตัวอย่าง 4 tests บนเครื่องพัฒนา: Vitest forks 6.2 วินาที, threads 5.4 วินาที; ครั้งแรกที่ติดตั้ง dependency ยังใช้เวลานานกว่ารอบถัดไป
- ตรวจซ้ำ: Node + React flow tests รวมใน unit tests 86/86 ผ่าน; Full Stack browser 9/9 ผ่าน (ไม่รวม real-runtime test ในชุดปกติ); beginner browser 14/14 ผ่าน; production build ผ่าน
