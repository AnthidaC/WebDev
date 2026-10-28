import { baseFiles, apiTest } from '../templates.js';

/**
 * Exam F: Final Exam Comprehensive Practice (Multi-Page + Role Auth + DB CRUD)
 * เตรียมเฉพาะโครงไฟล์โปรเจกต์ (Project Skeleton) และฐานข้อมูลพร้อม Seed (backend/db/store.js + prisma/schema.prisma)
 * พร้อมโจทย์ละเอียดครบทุกส่วนสำหรับฝึกสอบปลายภาค
 */

export const finalPracticeRequirements = `# 🎓 ข้อสอบจำลองปลายภาค (Final Exam Comprehensive Practice)
## ระบบลงทะเบียนเรียนและจัดการคอร์สออนไลน์ (SKILLHUB ACADEMY)

เวลาฝึกทำ: **240 นาที** · คะแนนเต็ม: **100 คะแนน**
ครอบคลุมเนื้อหาทุกบท: **Node.js + Express REST API + Database/ORM + JWT & Role Auth (Student / Admin) + React Multi-Page Router + Context + CRUD + Seat Quota**

---

## 📦 สิ่งที่ระบบเตรียมให้แล้วในโปรเจกต์และไฟล์ ZIP (ไม่ต้องสร้างใหม่)
1. **ไฟล์ฐานข้อมูล \`.sql\` สำหรับ Import ลง MySQL / phpMyAdmin / XAMPP** (อยู่ในโฟลเดอร์ \`database/\` เมื่อกดปุ่ม **ZIP** ดาวน์โหลด):
   - \`database/skillhub_exam.sql\`: ไฟล์ SQL ตัวเต็ม (รวม \`CREATE DATABASE\`, \`CREATE TABLE\` ทั้ง 4 ตาราง พร้อม \`FOREIGN KEY\` และ \`INSERT INTO\` ข้อมูลเริ่มต้น) นำไปกด **Import** ใน phpMyAdmin ได้ทันที
   - \`database/schema.sql\`: คำสั่งสร้างตาราง \`users\`, \`categories\`, \`courses\`, \`enrollments\`
   - \`database/seed.sql\`: คำสั่ง \`INSERT\` ข้อมูลตั้งต้น
   - \`backend/db/mysql.js\`: ตัวเชื่อมต่อ \`mysql2/promise\` Pool พร้อมใช้งานคู่กับไฟล์ \`.env.example\` สำหรับรันกับ MySQL จริงบนเครื่อง
2. **ฐานข้อมูลจำลองในหน่วยความจำพร้อม Seed ที่ตรงกับ \`.sql\` ทุกตาราง**: \`backend/db/store.js\` (และสคีมาอ้างอิงใน \`prisma/schema.prisma\`)
   - **บัญชีผู้ใช้เริ่มต้น 2 บัญชี (รหัสผ่านแฮชด้วย \`bcryptjs\` แล้ว)**:
     - ผู้ดูแลระบบ (**Admin**): \`userName: "admin"\`, \`email: "admin@uni.ac.th"\`, รหัสผ่าน \`"admin12345"\`, \`role: "admin"\`
     - นักศึกษา (**Student**): \`userName: "mali"\`, \`email: "mali@uni.ac.th"\`, รหัสผ่าน \`"mali12345"\`, \`role: "student"\`
   - **หมวดหมู่วิชา (\`categories\`)**: 3 หมวดหมู่ (\`1: Web Development\`, \`2: Data & AI\`, \`3: Cybersecurity\`)
   - **คอร์สเรียนเริ่มต้น (\`courses\`)**:
     - \`id: 1\`, \`code: "CS301"\`, \`title: "Full Stack Node & React"\`, \`categoryId: 1\`, \`price: 1500\`, \`seats: 3\`, \`enrolled: 1\`
     - \`id: 2\`, \`code: "AI202"\`, \`title: "Applied Machine Learning"\`, \`categoryId: 2\`, \`price: 2200\`, \`seats: 2\`, \`enrolled: 0\`
     - \`id: 3\`, \`code: "SEC101"\`, \`title: "Web Security & JWT Auth"\`, \`categoryId: 3\`, \`price: 1800\`, \`seats: 1\`, \`enrolled: 1\` (เต็มแล้ว)
   - **รายการลงทะเบียนเริ่มต้น (\`enrollments\`)**:
     - \`mali\` ลงทะเบียนคอร์ส \`id: 1\` และ \`id: 3\` สถานะ \`"active"\`
3. **โครงไฟล์ทั้งฝั่ง Backend และ Frontend (Multi-Page 4 หน้า)** ที่มี \`// TODO\` บอกจุดที่ต้องเขียนเพิ่มทีละไฟล์

---

## 📋 รายละเอียดโจทย์และเกณฑ์การตรวจ (100 คะแนน)

### ส่วนที่ 1: ระบบยืนยันตัวตนและแยกสิทธิ์ Role Middleware (25 คะแนน)

#### 1.1 ไฟล์ \`backend/middleware/auth.js\` (10 คะแนน)
- ใช้ Secret Key: \`const secret = process.env.JWT_KEY || 'practice-only-change-this-key';\`
- **\`verifyToken(req, res, next)\`**:
  - อ่าน Header \`Authorization\` รูปแบบ \`Bearer <token>\`
  - หากไม่มี Header หรือไม่ได้ขึ้นต้นด้วย \`Bearer \` ให้ตอบ **\`401\`** \`{ message: "Missing token" }\`
  - ใช้ \`jwt.verify(token, secret)\` เพื่อถอดรหัส และค้นหาผู้ใช้จาก \`store.users\` ด้วย \`payload.userId\`
  - หาก Token ไม่ถูกต้อง/หมดอายุ หรือไม่พบผู้ใช้ในระบบ ให้ตอบ **\`401\`** \`{ message: "Invalid token" }\`
  - หากสำเร็จ ให้แนบ \`req.user = { userId: user.id, id: user.id, userName: user.userName, email: user.email, role: user.role }\` แล้วเรียก \`next()\`
- **\`requireAdmin(req, res, next)\`**:
  - เรียกตรวจ \`verifyToken\` ก่อน (หรือตรวจต่อจาก \`req.user\`)
  - หาก \`req.user.role !== 'admin'\` ให้ตอบ **\`403\`** \`{ message: "Admin only" }\`
  - หากเป็น \`admin\` ให้เรียก \`next()\`

#### 1.2 ไฟล์ \`backend/routes/auth.js\` (15 คะแนน)
- **\`POST /api/auth/register\`**:
  - รับ \`{ userName, email, password }\` จาก \`req.body\`
  - **Validation**:
    - ต้องมี \`userName\` (ความยาวหลัง trim >= 2), \`email\` (มีเครื่องหมาย \`@\`), และ \`password\` (ความยาว >= 6 ตัวอักษร) มิฉะนั้นตอบ **\`400\`** \`{ message: "Invalid registration data" }\`
    - ตรวจซ้ำ: หากมี \`userName\` หรือ \`email\` (เปรียบเทียบแบบตัวพิมพ์เล็ก \`toLowerCase()\`) ซ้ำใน \`store.users\` ให้ตอบ **\`409\`** \`{ message: "Username or email already exists" }\`
  - **การทำงาน**:
    - แฮชรหัสผ่านด้วย \`await bcrypt.hash(password, 10)\`
    - บังคับ \`role: "student"\` เสมอ (ห้ามรับ \`role\` จาก \`req.body\` เพื่อป้องกันการยกระดับสิทธิ์)
    - บันทึกลง \`store.users\` โดยใช้ \`id: store.nextUserId++\`
    - ตอบกลับ **\`201\`** พร้อม \`{ id, userName, email, role: "student" }\` (ห้ามส่ง \`passwordHash\` กลับไป)
- **\`POST /api/auth/login\`**:
  - รับ \`{ userName, email, password }\` (อนุญาตให้ส่ง \`userName\` หรือ \`email\` อย่างใดอย่างหนึ่งมาในช่องชื่อผู้ใช้ได้)
  - ค้นหาผู้ใช้ที่ \`u.userName === identifier || u.email === identifier\` และตรวจรหัสผ่านด้วย \`await bcrypt.compare(password, user.passwordHash)\`
  - หากไม่พบผู้ใช้หรือรหัสผ่านไม่ตรง ให้ตอบ **\`401\`** \`{ message: "Invalid credentials" }\`
  - สร้าง JWT ด้วย \`jwt.sign({ userId: user.id, role: user.role }, secret, { expiresIn: '2h' })\`
  - ตอบกลับ **\`200\`** พร้อม \`{ token, user: { id: user.id, userName: user.userName, email: user.email, role: user.role } }\`
- **\`GET /api/auth/me\`**:
  - ป้องกันด้วย \`verifyToken\`
  - ตอบกลับ **\`200\`** พร้อม \`{ id: req.user.id, userName: req.user.userName, email: req.user.email, role: req.user.role }\`

---

### ส่วนที่ 2: REST API จัดการคอร์สเรียน & ค้นหา/กรองตามหมวดหมู่ (30 คะแนน)
แก้ไขในไฟล์ **\`backend/routes/courses.js\`** (Mount ที่ \`/api\` ใน \`backend/app.js\`):

- **รูปแบบข้อมูลคอร์สที่ส่งกลับ (Enriched Course Object)**:
  - ทุกครั้งที่ส่งข้อมูลคอร์สกลับไป ให้คำนวณฟิลด์เพิ่มเติม 2 ฟิลด์เสมอ:
    - \`availableSeats: course.seats - course.enrolled\`
    - \`categoryName\`: ชื่อหมวดหมู่จาก \`store.categories\`
- **\`GET /api/categories\`** (Public):
  - ตอบกลับ **\`200\`** พร้อม Array ของ \`store.categories\`
- **\`GET /api/courses\`** (Public):
  - รองรับ Query Parameters:
    - \`?keyword=\`: ค้นหาแบบไม่สนตัวพิมพ์เล็ก-ใหญ่ (\`toLowerCase()\`) ว่าตรงกับ \`course.title\` **หรือ** \`course.code\`
    - \`?categoryId=\`: ถ้าระบุมา ให้กรองเฉพาะคอร์สที่ \`course.categoryId === Number(req.query.categoryId)\`
  - ตอบกลับ **\`200\`** พร้อม Array ของคอร์สที่มี \`availableSeats\` และ \`categoryName\`
- **\`GET /api/courses/:id\`** (Public):
  - ค้นหาคอร์สตาม \`Number(req.params.id)\` หากไม่พบตอบ **\`404\`** \`{ message: "Course not found" }\` หากพบตอบ **\`200\`**
- **\`POST /api/courses\`** (**Admin เท่านั้น** — ใช้ \`verifyToken, requireAdmin\`):
  - รับ \`{ code, title, categoryId, price, seats }\`
  - **Validation**:
    - \`code\` และ \`title\` ต้องไม่ว่าง, \`categoryId\` ต้องมีอยู่ใน \`store.categories\`, \`price\` ต้องเป็นตัวเลข \`>= 0\`, \`seats\` ต้องเป็นจำนวนเต็ม \`>= 1\` มิฉะนั้นตอบ **\`400\`**
    - หาก \`code.trim().toUpperCase()\` ซ้ำกับคอร์สที่มีอยู่แล้ว ให้ตอบ **\`409\`** \`{ message: "Duplicate course code" }\`
  - สร้างคอร์สใหม่โดยตั้ง \`enrolled: 0\`, \`id: store.nextCourseId++\` แล้วตอบ **\`201\`**
- **\`PUT /api/courses/:id\`** (**Admin เท่านั้น** — ใช้ \`verifyToken, requireAdmin\`):
  - หากไม่พบคอร์สตอบ **\`404\`**
  - ตรวจความถูกต้องของ \`title\`, \`categoryId\`, \`price >= 0\`, \`seats >= 1\` (หากผิดตอบ **\`400\`**)
  - **กติกาสำคัญ**: ห้ามแก้ไข \`seats\` ให้ต่ำกว่าจำนวนคนที่ลงทะเบียนอยู่แล้ว (\`Number(seats) < course.enrolled\`) หากต่ำกว่าให้ตอบ **\`409\`** \`{ message: "Seats cannot be less than enrolled students" }\`
  - อัปเดตข้อมูลและตอบ **\`200\`**
- **\`DELETE /api/courses/:id\`** (**Admin เท่านั้น** — ใช้ \`verifyToken, requireAdmin\`):
  - หากไม่พบคอร์สตอบ **\`404\`**
  - **กติกาสำคัญ**: หากคอร์สยังมีผู้ลงทะเบียนอยู่ (\`course.enrolled > 0\` หรือมี enrollment ที่ \`status === 'active'\`) ห้ามลบ ให้ตอบ **\`409\`** \`{ message: "Cannot delete course with active enrollments" }\`
  - หากลบได้ ให้เอาออกจาก \`store.courses\` และตอบ **\`200\`** \`{ message: "Course deleted" }\`

---

### ส่วนที่ 3: REST API ลงทะเบียนเรียน ตัดโควตาที่นั่ง และยกเลิก (20 คะแนน)
แก้ไขในไฟล์ **\`backend/routes/enrollments.js\`** (Mount ที่ \`/api/enrollments\` ใน \`backend/app.js\`):

- **\`GET /api/enrollments/my\`** (ต้อง Login — \`verifyToken\`):
  - ดึงรายการใน \`store.enrollments\` เฉพาะของ \`req.user.userId\`
  - แนบข้อมูลคอร์ส (\`courseTitle\`, \`courseCode\`, \`price\`) ไปกับแต่ละรายการ
  - ตอบกลับ **\`200\`**
- **\`POST /api/enrollments\`** (ต้อง Login — \`verifyToken\`):
  - รับ \`{ courseId }\` จาก \`req.body\`
  - ค้นหาคอร์สตาม \`Number(courseId)\` หากไม่พบตอบ **\`404\`** \`{ message: "Course not found" }\`
  - **ตรวจลงทะเบียนซ้ำ**: หากผู้ใช้นี้มีรายการลงทะเบียนคอร์สนี้ที่มี \`status === 'active'\` อยู่แล้ว ให้ตอบ **\`409\`** \`{ message: "Already enrolled in this course" }\`
  - **ตรวจที่นั่งว่าง**: หาก \`course.enrolled >= course.seats\` ให้ตอบ **\`409\`** \`{ message: "Course is full" }\`
  - เมื่อผ่าน: เพิ่ม \`course.enrolled += 1\`, สร้างรายการลงทะเบียนใหม่ \`{ id: store.nextEnrollmentId++, userId: req.user.userId, courseId: course.id, status: 'active', createdAt: new Date().toISOString() }\` แล้วตอบ **\`201\`**
- **\`PATCH /api/enrollments/:id/cancel\`** (ต้อง Login — \`verifyToken\`):
  - ค้นหารายการลงทะเบียนตาม \`Number(req.params.id)\` หากไม่พบตอบ **\`404\`**
  - **ตรวจสิทธิ์เจ้าของหรือ Admin**: หาก \`enrollment.userId !== req.user.userId && req.user.role !== 'admin'\` ให้ตอบ **\`403\`** \`{ message: "Forbidden" }\`
  - **ตรวจสถานะ**: หาก \`enrollment.status === 'cancelled'\` อยู่แล้ว ให้ตอบ **\`409\`** \`{ message: "Already cancelled" }\`
  - เมื่อผ่าน: เปลี่ยน \`enrollment.status = 'cancelled'\` และคืนที่นั่งให้คอร์ส \`course.enrolled = Math.max(0, course.enrolled - 1)\` แล้วตอบ **\`200\`** พร้อมรายการที่อัปเดต

---

### ส่วนที่ 4: หน้าเว็บ React แบบหลายหน้า (Multi-Page Router + AuthContext + Role Guard) (25 คะแนน)

ระบบแบ่งหน้าเว็บด้วย \`react-router-dom\` ออกเป็น **4 หน้าหลัก** ดังนี้:

1. **แถบนำทางและโครงสร้างหลัก (\`frontend/App.jsx\` & \`frontend/context/AuthContext.jsx\`)**:
   - มีลิงก์นำทางไปหน้า \`/\` (คอร์สเรียนทั้งหมด), \`/my-courses\` (คอร์สของฉัน), \`/admin\` (จัดการคอร์ส), และ \`/login\` (เข้าสู่ระบบ)
   - แสดงชื่อผู้ใช้และสิทธิ์ปัจจุบัน (เช่น \`mali (student)\` หรือ \`admin (admin)\`) พร้อมปุ่ม **\`ออกจากระบบ\`**
2. **หน้า 1: \`/\` — ค้นหาและลงทะเบียนคอร์ส (\`frontend/pages/CatalogPage.jsx\`)**:
   - มีช่องค้นหา \`<label>ค้นหาคอร์ส<input ... /></label>\` และตัวกรอง \`<label>หมวดหมู่<select ... /></label>\`
   - แสดงการ์ดคอร์สเรียน พร้อมรหัสวิชา, ชื่อวิชา, ราคา, และจำนวนที่นั่งว่าง (\`ว่าง X / Y ที่นั่ง\`)
   - มีปุ่ม **\`ลงทะเบียนเรียน\`** (ปิดปุ่มหรือแจ้งเตือนเมื่อที่นั่งเต็ม) เมื่อกดจะเรียก \`POST /api/enrollments\` และโหลดจำนวนที่นั่งใหม่ทันที
3. **หน้า 2: \`/login\` — เข้าสู่ระบบและสมัครสมาชิก (\`frontend/pages/LoginPage.jsx\`)**:
   - ฟอร์มเข้าสู่ระบบที่มี \`<label>ชื่อผู้ใช้<input ... /></label>\`, \`<label>รหัสผ่าน<input ... /></label>\`, และปุ่ม **\`เข้าสู่ระบบ\`**
   - ฟอร์มสมัครสมาชิกที่มีช่องกรอกชื่อผู้ใช้, อีเมล, รหัสผ่าน และปุ่ม **\`สมัครสมาชิก\`**
   - เมื่อเกิด Error จาก API ต้องแสดงในแท็กที่มี \`role="alert"\`
4. **หน้า 3: \`/my-courses\` — คอร์สของฉัน (\`frontend/pages/MyCoursesPage.jsx\`)**:
   - หากยังไม่เข้าสู่ระบบ ให้แสดงข้อความแจ้งหรือลิงก์ไปหน้า \`/login\`
   - แสดงรายการที่ลงทะเบียนของตนเอง สรุป **ยอดรวมค่าเรียน (เฉพาะรายการที่ \`status === 'active'\`)** และมีปุ่ม **\`ยกเลิกลงทะเบียน\`** ที่เรียก \`PATCH /api/enrollments/:id/cancel\`
5. **หน้า 4: \`/admin\` — จัดการคอร์สเรียนสำหรับ Admin (\`frontend/pages/AdminPage.jsx\`)**:
   - **Role Guard**: หากผู้ใช้ไม่ได้มี \`role === 'admin'\` ให้แสดงข้อความแจ้งเตือนใน \`role="alert"\` ว่า **\`ไม่มีสิทธิ์เข้าถึง (Admin เท่านั้น)\`** และไม่แสดงฟอร์มจัดการคอร์ส
   - หากเป็น \`admin\`: แสดงฟอร์มเพิ่ม/แก้ไขคอร์สเรียน พร้อม Label:
     - \`รหัสวิชา\`, \`ชื่อวิชา\`, \`หมวดหมู่วิชา\`, \`ราคาคอร์ส\`, \`จำนวนที่นั่ง\` และปุ่ม **\`บันทึกคอร์ส\`**
   - แสดงตารางคอร์สพร้อมปุ่ม **\`แก้ไข\`** และ **\`ลบคอร์ส\`**
`;

const dbStoreFile = `const bcrypt = require('bcryptjs');

function createInitialData() {
  return {
    nextUserId: 3,
    nextCourseId: 4,
    nextEnrollmentId: 3,
    users: [
      {
        id: 1,
        userName: 'admin',
        email: 'admin@uni.ac.th',
        passwordHash: bcrypt.hashSync('admin12345', 10),
        role: 'admin',
      },
      {
        id: 2,
        userName: 'mali',
        email: 'mali@uni.ac.th',
        passwordHash: bcrypt.hashSync('mali12345', 10),
        role: 'student',
      },
    ],
    categories: [
      { id: 1, name: 'Web Development' },
      { id: 2, name: 'Data & AI' },
      { id: 3, name: 'Cybersecurity' },
    ],
    courses: [
      { id: 1, code: 'CS301', title: 'Full Stack Node & React', categoryId: 1, price: 1500, seats: 3, enrolled: 1 },
      { id: 2, code: 'AI202', title: 'Applied Machine Learning', categoryId: 2, price: 2200, seats: 2, enrolled: 0 },
      { id: 3, code: 'SEC101', title: 'Web Security & JWT Auth', categoryId: 3, price: 1800, seats: 1, enrolled: 1 },
    ],
    enrollments: [
      { id: 1, userId: 2, courseId: 1, status: 'active', createdAt: '2026-10-01T09:00:00.000Z' },
      { id: 2, userId: 2, courseId: 3, status: 'active', createdAt: '2026-10-02T10:00:00.000Z' },
    ],
  };
}

const store = createInitialData();

store.resetStore = function resetStore() {
  const fresh = createInitialData();
  store.nextUserId = fresh.nextUserId;
  store.nextCourseId = fresh.nextCourseId;
  store.nextEnrollmentId = fresh.nextEnrollmentId;
  store.users = fresh.users;
  store.categories = fresh.categories;
  store.courses = fresh.courses;
  store.enrollments = fresh.enrollments;
};

module.exports = store;
`;

const prismaSchemaFile = `// ไฟล์อ้างอิงโครงสร้างฐานข้อมูลเชิงสัมพันธ์ (Prisma Schema Reference)
// สำหรับทบทวนความสัมพันธ์ 1:N และ Constraint สำหรับสอบปลายภาค
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model User {
  id           Int          @id @default(autoincrement())
  userName     String       @unique
  email        String       @unique
  passwordHash String
  role         String       @default("student") // "student" | "admin"
  enrollments  Enrollment[]
}

model Category {
  id      Int      @id @default(autoincrement())
  name    String   @unique
  courses Course[]
}

model Course {
  id          Int          @id @default(autoincrement())
  code        String       @unique
  title       String
  categoryId  Int
  category    Category     @relation(fields: [categoryId], references: [id])
  price       Int
  seats       Int
  enrolled    Int          @default(0)
  enrollments Enrollment[]
}

model Enrollment {
  id        Int      @id @default(autoincrement())
  userId    Int
  courseId  Int
  status    String   @default("active") // "active" | "cancelled"
  createdAt DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id])
  course    Course   @relation(fields: [courseId], references: [id])
}
`;

export const finalPracticeStarter = {
  ...baseFiles,
  'EXAM_REQUIREMENTS.md': finalPracticeRequirements,
  'prisma/schema.prisma': prismaSchemaFile,
  'backend/db/store.js': dbStoreFile,
  '.env.example': `PORT=3000
JWT_KEY=practice-only-change-this-key
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=skillhub_exam
DATABASE_URL="mysql://root:@localhost:3306/skillhub_exam"
`,
  'database/schema.sql': `-- โครงสร้างตารางฐานข้อมูลสำหรับข้อสอบจำลองปลายภาค (SkillHub Academy)
CREATE DATABASE IF NOT EXISTS skillhub_exam CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE skillhub_exam;

DROP TABLE IF EXISTS enrollments;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userName VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(120) NOT NULL UNIQUE,
  passwordHash VARCHAR(255) NOT NULL,
  role ENUM('student', 'admin') NOT NULL DEFAULT 'student'
);

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(20) NOT NULL UNIQUE,
  title VARCHAR(200) NOT NULL,
  categoryId INT NOT NULL,
  price INT NOT NULL DEFAULT 0,
  seats INT NOT NULL DEFAULT 1,
  enrolled INT NOT NULL DEFAULT 0,
  CONSTRAINT fk_courses_category FOREIGN KEY (categoryId) REFERENCES categories(id) ON DELETE RESTRICT
);

CREATE TABLE enrollments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  courseId INT NOT NULL,
  status ENUM('active', 'cancelled') NOT NULL DEFAULT 'active',
  createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_enrollments_user FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_enrollments_course FOREIGN KEY (courseId) REFERENCES courses(id) ON DELETE RESTRICT
);
`,
  'database/seed.sql': `-- ข้อมูลเริ่มต้น (Seed Data) สำหรับทดสอบระบบ
-- รหัสผ่านของ admin คือ admin12345
-- รหัสผ่านของ mali คือ mali12345
USE skillhub_exam;

INSERT INTO users (id, userName, email, passwordHash, role) VALUES
  (1, 'admin', 'admin@uni.ac.th', '$2b$10$7Q8y0w4Z5k9X1v2M3n4B5O6p7Q8r9S0t1U2v3W4x5Y6z7A8b9C0d1', 'admin'),
  (2, 'mali', 'mali@uni.ac.th', '$2b$10$9A8b7C6d5E4f3G2h1I0j9K8l7M6n5O4p3Q2r1S0t9U8v7W6x5Y4z3', 'student');

INSERT INTO categories (id, name) VALUES
  (1, 'Web Development'),
  (2, 'Data & AI'),
  (3, 'Cybersecurity');

INSERT INTO courses (id, code, title, categoryId, price, seats, enrolled) VALUES
  (1, 'CS301', 'Full Stack Node & React', 1, 1500, 3, 1),
  (2, 'AI202', 'Applied Machine Learning', 2, 2200, 2, 0),
  (3, 'SEC101', 'Web Security & JWT Auth', 3, 1800, 1, 1);

INSERT INTO enrollments (id, userId, courseId, status, createdAt) VALUES
  (1, 2, 1, 'active', '2026-10-01 09:00:00'),
  (2, 2, 3, 'active', '2026-10-02 10:00:00');
`,
  'database/skillhub_exam.sql': `-- ไฟล์รวม Schema + Seed สำหรับ Import เข้า phpMyAdmin / MySQL / XAMPP ได้ทันทีในไฟล์เดียว
CREATE DATABASE IF NOT EXISTS skillhub_exam CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE skillhub_exam;

DROP TABLE IF EXISTS enrollments;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userName VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(120) NOT NULL UNIQUE,
  passwordHash VARCHAR(255) NOT NULL,
  role ENUM('student', 'admin') NOT NULL DEFAULT 'student'
);

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(20) NOT NULL UNIQUE,
  title VARCHAR(200) NOT NULL,
  categoryId INT NOT NULL,
  price INT NOT NULL DEFAULT 0,
  seats INT NOT NULL DEFAULT 1,
  enrolled INT NOT NULL DEFAULT 0,
  CONSTRAINT fk_courses_category FOREIGN KEY (categoryId) REFERENCES categories(id) ON DELETE RESTRICT
);

CREATE TABLE enrollments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  courseId INT NOT NULL,
  status ENUM('active', 'cancelled') NOT NULL DEFAULT 'active',
  createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_enrollments_user FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_enrollments_course FOREIGN KEY (courseId) REFERENCES courses(id) ON DELETE RESTRICT
);

INSERT INTO categories (id, name) VALUES
  (1, 'Web Development'),
  (2, 'Data & AI'),
  (3, 'Cybersecurity');

INSERT INTO courses (id, code, title, categoryId, price, seats, enrolled) VALUES
  (1, 'CS301', 'Full Stack Node & React', 1, 1500, 3, 1),
  (2, 'AI202', 'Applied Machine Learning', 2, 2200, 2, 0),
  (3, 'SEC101', 'Web Security & JWT Auth', 3, 1800, 1, 1);
`,
  'backend/db/mysql.js': `/**
 * ไฟล์เชื่อมต่อฐานข้อมูล MySQL จริง (สำหรับกรณีแตกไฟล์ ZIP ไปรันคู่กับ XAMPP / MySQL บนเครื่อง)
 * วิธีใช้:
 * 1. นำไฟล์ database/skillhub_exam.sql ไป Import ใน phpMyAdmin หรือรัน mysql -u root < database/skillhub_exam.sql
 * 2. คัดลอกไฟล์ .env.example เป็น .env แล้วตั้งค่า DB_USER / DB_PASSWORD / DB_NAME
 * 3. ติดตั้ง mysql2 (npm install mysql2) แล้วเรียกใช้ pool.execute('SELECT * FROM courses WHERE categoryId = ?', [categoryId])
 */
require('dotenv').config();

async function createMySqlPool() {
  const mysql = require('mysql2/promise');
  return mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'skillhub_exam',
    waitForConnections: true,
    connectionLimit: 10,
  });
}

module.exports = { createMySqlPool };
`,

  'backend/app.js': `const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.js');
const courseRoutes = require('./routes/courses.js');
const enrollmentRoutes = require('./routes/enrollments.js');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ ok: true }));

// เชื่อมต่อ Route ทั้ง 3 ส่วนของระบบ
app.use('/api/auth', authRoutes);
app.use('/api', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);

module.exports = app;
`,

  'backend/middleware/auth.js': `const jwt = require('jsonwebtoken');
const store = require('../db/store.js');

const secret = process.env.JWT_KEY || 'practice-only-change-this-key';

/**
 * TODO 1.1: สร้าง Middleware ตรวจสอบ JWT Token (verifyToken)
 * - อ่าน Header Authorization รูปแบบ "Bearer <token>"
 * - ถ้าไม่มี Header หรือไม่ได้ขึ้นต้นด้วย "Bearer " ให้ตอบ 401 { message: 'Missing token' }
 * - ใช้ jwt.verify(token, secret) แล้วหา user จาก store.users ด้วย payload.userId
 * - ถ้า token ผิดหรือหา user ไม่เจอ ให้ตอบ 401 { message: 'Invalid token' }
 * - ถ้าสำเร็จ ให้กำหนด req.user = { userId: user.id, id: user.id, userName: user.userName, email: user.email, role: user.role } แล้วเรียก next()
 */
function verifyToken(req, res, next) {
  // เขียนโค้ดตรวจสอบ Token ที่นี่
  return res.status(501).json({ message: 'TODO: implement verifyToken' });
}

/**
 * TODO 1.2: สร้าง Middleware ตรวจสอบสิทธิ์ Admin (requireAdmin)
 * - ตรวจว่า req.user มีค่าและ req.user.role === 'admin'
 * - ถ้าไม่ใช่ admin ให้ตอบ 403 { message: 'Admin only' }
 * - ถ้าใช่ ให้เรียก next()
 */
function requireAdmin(req, res, next) {
  // เขียนโค้ดตรวจสอบ Role Admin ที่นี่
  return res.status(501).json({ message: 'TODO: implement requireAdmin' });
}

module.exports = { verifyToken, requireAdmin, secret };
`,

  'backend/routes/auth.js': `const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const store = require('../db/store.js');
const { verifyToken, secret } = require('../middleware/auth.js');

/**
 * TODO 2.1: POST /api/auth/register
 * - รับ { userName, email, password }
 * - ตรวจความถูกต้อง: userName.trim().length >= 2, email มี '@', password.length >= 6 (ผิดตอบ 400)
 * - ตรวจซ้ำใน store.users (เทียบ userName หรือ email แบบ toLowerCase) หากซ้ำตอบ 409
 * - แฮชรหัสผ่านด้วย bcrypt.hash(password, 10)
 * - บังคับ role: 'student' เสมอ, ใช้ id: store.nextUserId++
 * - ตอบ 201 พร้อม { id, userName, email, role }
 */
router.post('/register', async (req, res) => {
  return res.status(501).json({ message: 'TODO: POST /api/auth/register' });
});

/**
 * TODO 2.2: POST /api/auth/login
 * - รับ { userName, email, password } (หาผู้ใช้จาก userName หรือ email)
 * - ตรวจรหัสผ่านด้วย bcrypt.compare(password, user.passwordHash)
 * - ถ้าไม่พบผู้ใช้หรือรหัสผ่านผิด ตอบ 401 { message: 'Invalid credentials' }
 * - สร้าง token ด้วย jwt.sign({ userId: user.id, role: user.role }, secret, { expiresIn: '2h' })
 * - ตอบ 200 พร้อม { token, user: { id, userName, email, role } }
 */
router.post('/login', async (req, res) => {
  return res.status(501).json({ message: 'TODO: POST /api/auth/login' });
});

/**
 * TODO 2.3: GET /api/auth/me
 * - ใช้ middleware verifyToken
 * - ตอบ 200 พร้อมข้อมูลผู้ใช้จาก req.user
 */
router.get('/me', verifyToken, (req, res) => {
  return res.json(req.user);
});

module.exports = router;
`,

  'backend/routes/courses.js': `const router = require('express').Router();
const store = require('../db/store.js');
const { verifyToken, requireAdmin } = require('../middleware/auth.js');

// ฟังก์ชันช่วยเติม availableSeats และ categoryName ให้แต่ละคอร์ส
function enrichCourse(course) {
  const category = store.categories.find(c => c.id === course.categoryId);
  return {
    ...course,
    categoryName: category ? category.name : 'Uncategorized',
    availableSeats: Math.max(0, course.seats - course.enrolled),
  };
}

// GET /api/categories - ส่งรายการหมวดหมู่ทั้งหมด
router.get('/categories', (req, res) => {
  res.json(store.categories);
});

/**
 * TODO 3.1: GET /api/courses
 * - รองรับ query ?keyword= (ค้นหาใน title หรือ code แบบไม่สนตัวพิมพ์เล็ก-ใหญ่)
 * - รองรับ query ?categoryId= (กรองตาม Number(categoryId))
 * - ส่งกลับเป็น array ที่ผ่าน enrichCourse() แล้ว
 */
router.get('/courses', (req, res) => {
  // TODO: เพิ่มการกรองด้วย keyword และ categoryId
  res.json(store.courses.map(enrichCourse));
});

/**
 * TODO 3.2: GET /api/courses/:id
 * - ค้นหาคอร์สตาม Number(req.params.id)
 * - ไม่พบตอบ 404, พบตอบ 200 พร้อม enrichCourse(course)
 */
router.get('/courses/:id', (req, res) => {
  return res.status(501).json({ message: 'TODO: GET /api/courses/:id' });
});

/**
 * TODO 3.3: POST /api/courses (Admin เท่านั้น: verifyToken, requireAdmin)
 * - รับ { code, title, categoryId, price, seats }
 * - ตรวจว่า code/title ไม่ว่าง, categoryId มีใน store.categories, price >= 0, Number.isInteger(seats) && seats >= 1 (ผิดตอบ 400)
 * - ตรวจว่า code ไม่ซ้ำ (เทียบ toUpperCase()) หากซ้ำตอบ 409
 * - สร้างคอร์สใหม่ { id: store.nextCourseId++, code, title, categoryId, price, seats, enrolled: 0 }
 * - ตอบ 201 พร้อม enrichCourse(newCourse)
 */
router.post('/courses', verifyToken, requireAdmin, (req, res) => {
  return res.status(501).json({ message: 'TODO: POST /api/courses' });
});

/**
 * TODO 3.4: PUT /api/courses/:id (Admin เท่านั้น: verifyToken, requireAdmin)
 * - ไม่พบคอร์สตอบ 404
 * - ตรวจข้อมูลเหมือนตอนสร้าง (ผิดตอบ 400)
 * - ห้ามลด seats ให้ต่ำกว่า course.enrolled ปัจจุบัน (หาก seats < course.enrolled ตอบ 409)
 * - อัปเดตและตอบ 200 พร้อม enrichCourse(course)
 */
router.put('/courses/:id', verifyToken, requireAdmin, (req, res) => {
  return res.status(501).json({ message: 'TODO: PUT /api/courses/:id' });
});

/**
 * TODO 3.5: DELETE /api/courses/:id (Admin เท่านั้น: verifyToken, requireAdmin)
 * - ไม่พบคอร์สตอบ 404
 * - หาก course.enrolled > 0 ห้ามลบ ให้ตอบ 409 { message: 'Cannot delete course with active enrollments' }
 * - ลบคอร์สออกจาก store.courses แล้วตอบ 200 { message: 'Course deleted' }
 */
router.delete('/courses/:id', verifyToken, requireAdmin, (req, res) => {
  return res.status(501).json({ message: 'TODO: DELETE /api/courses/:id' });
});

module.exports = router;
`,

  'backend/routes/enrollments.js': `const router = require('express').Router();
const store = require('../db/store.js');
const { verifyToken } = require('../middleware/auth.js');

/**
 * TODO 4.1: GET /api/enrollments/my (ต้อง Login: verifyToken)
 * - กรอง store.enrollments เฉพาะที่ userId === req.user.userId
 * - แนบข้อมูลคอร์ส (courseCode, courseTitle, price) ให้แต่ละรายการ
 * - ตอบ 200
 */
router.get('/my', verifyToken, (req, res) => {
  return res.status(501).json({ message: 'TODO: GET /api/enrollments/my' });
});

/**
 * TODO 4.2: POST /api/enrollments (ต้อง Login: verifyToken)
 * - รับ { courseId } จาก req.body
 * - หาคอร์สจาก store.courses หากไม่พบตอบ 404
 * - ตรวจว่าผู้ใช้นี้ลงทะเบียนคอร์สนี้แบบ status === 'active' ไปแล้วหรือยัง หากซ้ำตอบ 409
 * - ตรวจว่าที่นั่งเต็มหรือยัง (course.enrolled >= course.seats) หากเต็มตอบ 409
 * - เพิ่ม course.enrolled += 1 และบันทึก enrollment ใหม่ (status: 'active')
 * - ตอบ 201 พร้อมข้อมูล enrollment ที่สร้าง
 */
router.post('/', verifyToken, (req, res) => {
  return res.status(501).json({ message: 'TODO: POST /api/enrollments' });
});

/**
 * TODO 4.3: PATCH /api/enrollments/:id/cancel (ต้อง Login: verifyToken)
 * - หารายการ enrollment ตาม Number(req.params.id) หากไม่พบตอบ 404
 * - ตรวจสิทธิ์: ต้องเป็นเจ้าของ (enrollment.userId === req.user.userId) หรือเป็น admin เท่านั้น มิฉะนั้นตอบ 403
 * - หาก enrollment.status === 'cancelled' อยู่แล้ว ให้ตอบ 409
 * - เปลี่ยน status เป็น 'cancelled' และลด course.enrolled ลง 1
 * - ตอบ 200 พร้อมข้อมูล enrollment ที่อัปเดต
 */
router.patch('/:id/cancel', verifyToken, (req, res) => {
  return res.status(501).json({ message: 'TODO: PATCH /api/enrollments/:id/cancel' });
});

module.exports = router;
`,

  'frontend/services/api.js': `import axios from 'axios';

export const TOKEN_KEY = 'practice-token';

export function authHeaders() {
  const token = sessionStorage.getItem(TOKEN_KEY);
  return token ? { headers: { Authorization: 'Bearer ' + token } } : {};
}

// Service สำหรับเรียก Backend API
export const api = {
  // Auth
  login: async (credentials) => (await axios.post('/api/auth/login', credentials)).data,
  register: async (payload) => (await axios.post('/api/auth/register', payload)).data,
  me: async () => (await axios.get('/api/auth/me', authHeaders())).data,

  // Categories & Courses
  categories: async () => (await axios.get('/api/categories')).data,
  courses: async (params = {}) => (await axios.get('/api/courses', { params })).data,
  createCourse: async (data) => (await axios.post('/api/courses', data, authHeaders())).data,
  updateCourse: async (id, data) => (await axios.put('/api/courses/' + id, data, authHeaders())).data,
  deleteCourse: async (id) => (await axios.delete('/api/courses/' + id, authHeaders())).data,

  // Enrollments
  myEnrollments: async () => (await axios.get('/api/enrollments/my', authHeaders())).data,
  enroll: async (courseId) => (await axios.post('/api/enrollments', { courseId }, authHeaders())).data,
  cancelEnrollment: async (id) => (await axios.patch('/api/enrollments/' + id + '/cancel', {}, authHeaders())).data,
};
`,

  'frontend/context/AuthContext.jsx': `import React, { createContext, useContext, useState, useEffect } from 'react';
import { api, TOKEN_KEY } from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem(TOKEN_KEY);
    if (!token) {
      setLoading(false);
      return;
    }
    api.me()
      .then(data => setUser(data))
      .catch(() => sessionStorage.removeItem(TOKEN_KEY))
      .finally(() => setLoading(false));
  }, []);

  const loginWithToken = (token, userData) => {
    sessionStorage.setItem(TOKEN_KEY, token);
    setUser(userData);
  };

  const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, loginWithToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
`,

  'frontend/App.jsx': `import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import CatalogPage from './pages/CatalogPage';
import LoginPage from './pages/LoginPage';
import MyCoursesPage from './pages/MyCoursesPage';
import AdminPage from './pages/AdminPage';

function Layout() {
  const { user, logout } = useAuth();

  return (
    <main>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderBottom: '1px solid #dce6df', paddingBottom: '12px' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <strong>🎓 SkillHub</strong>
          <Link to="/">คอร์สเรียนทั้งหมด</Link>
          <Link to="/my-courses">คอร์สของฉัน</Link>
          <Link to="/admin">จัดการคอร์ส (Admin)</Link>
        </div>
        <div>
          {user ? (
            <span>
              เข้าสู่ระบบในชื่อ: <strong>{user.userName}</strong> ({user.role}){' '}
              <button type="button" onClick={logout}>ออกจากระบบ</button>
            </span>
          ) : (
            <Link to="/login">เข้าสู่ระบบ / สมัครสมาชิก</Link>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my-courses" element={<MyCoursesPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<h1>404 ไม่พบหน้านี้</h1>} />
      </Routes>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </BrowserRouter>
  );
}
`,

  'frontend/pages/CatalogPage.jsx': `import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';

/**
 * TODO 5.1: หน้าคอร์สเรียนทั้งหมด (CatalogPage)
 * - โหลดรายการหมวดหมู่ (api.categories) และรายการคอร์ส (api.courses({ keyword, categoryId }))
 * - มีช่องค้นหา <label>ค้นหาคอร์ส<input ... /></label>
 * - มีตัวกรองหมวดหมู่ <label>หมวดหมู่<select ... /></label>
 * - แสดงรายการคอร์ส พร้อมรหัสวิชา, ชื่อวิชา, ราคา, และที่นั่งว่าง ("ว่าง X / Y ที่นั่ง")
 * - มีปุ่ม "ลงทะเบียนเรียน" เพื่อเรียก api.enroll(course.id) แล้วโหลดข้อมูลคอร์สใหม่
 * - แสดงข้อความแจ้งเตือนใน <p role="alert"> เมื่อเกิดข้อผิดพลาด
 */
export default function CatalogPage() {
  return (
    <section>
      <h1>คอร์สเรียนทั้งหมด</h1>
      <p>TODO: สร้างช่องค้นหา ตัวกรองหมวดหมู่ และรายการคอร์สพร้อมปุ่มลงทะเบียนเรียน</p>
    </section>
  );
}
`,

  'frontend/pages/LoginPage.jsx': `import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';

/**
 * TODO 5.2: หน้าเข้าสู่ระบบและสมัครสมาชิก (LoginPage)
 * - ฟอร์มเข้าสู่ระบบ: <label>ชื่อผู้ใช้<input ... /></label>, <label>รหัสผ่าน<input ... /></label>, ปุ่ม "เข้าสู่ระบบ"
 *   เมื่อสำเร็จให้เรียก loginWithToken(res.token, res.user) แล้ว navigate('/')
 * - ฟอร์มสมัครสมาชิก: ช่องกรอกชื่อผู้ใช้, อีเมล, รหัสผ่าน และปุ่ม "สมัครสมาชิก"
 * - แสดง error ใน <p role="alert">
 */
export default function LoginPage() {
  return (
    <section>
      <h1>เข้าสู่ระบบ / สมัครสมาชิก</h1>
      <p>TODO: สร้างฟอร์มเข้าสู่ระบบและฟอร์มสมัครสมาชิก</p>
    </section>
  );
}
`,

  'frontend/pages/MyCoursesPage.jsx': `import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';

/**
 * TODO 5.3: หน้าคอร์สของฉัน (MyCoursesPage)
 * - ถ้ายังไม่ได้ login (!user) ให้แสดงลิงก์ไปหน้า /login
 * - โหลดรายการจาก api.myEnrollments()
 * - คำนวณและแสดงยอดรวมค่าเรียนเฉพาะรายการที่ status === 'active'
 * - มีปุ่ม "ยกเลิกลงทะเบียน" สำหรับรายการที่ active เพื่อเรียก api.cancelEnrollment(id)
 */
export default function MyCoursesPage() {
  const { user } = useAuth();
  if (!user) {
    return (
      <section>
        <h1>คอร์สของฉัน</h1>
        <p role="alert">กรุณาเข้าสู่ระบบก่อนดูรายการลงทะเบียน</p>
        <Link to="/login">ไปหน้าเข้าสู่ระบบ</Link>
      </section>
    );
  }
  return (
    <section>
      <h1>คอร์สของฉัน</h1>
      <p>TODO: แสดงรายการคอร์สที่ลงทะเบียน ยอดรวมค่าเรียน และปุ่มยกเลิกลงทะเบียน</p>
    </section>
  );
}
`,

  'frontend/pages/AdminPage.jsx': `import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';

/**
 * TODO 5.4: หน้าจัดการคอร์สเรียนสำหรับ Admin (AdminPage)
 * - ตรวจสิทธิ์: ถ้า !user หรือ user.role !== 'admin' ต้องแสดง <p role="alert">ไม่มีสิทธิ์เข้าถึง (Admin เท่านั้น)</p>
 * - ถ้าเป็น admin: แสดงฟอร์มเพิ่ม/แก้ไขคอร์สเรียนที่มี Label:
 *   "รหัสวิชา", "ชื่อวิชา", "หมวดหมู่วิชา", "ราคาคอร์ส", "จำนวนที่นั่ง" และปุ่ม "บันทึกคอร์ส"
 * - แสดงรายการคอร์สทั้งหมดพร้อมปุ่ม "แก้ไข" และ "ลบคอร์ส"
 */
export default function AdminPage() {
  const { user } = useAuth();
  if (!user || user.role !== 'admin') {
    return (
      <section>
        <h1>จัดการคอร์สเรียน (Admin)</h1>
        <p role="alert">ไม่มีสิทธิ์เข้าถึง (Admin เท่านั้น)</p>
      </section>
    );
  }
  return (
    <section>
      <h1>จัดการคอร์สเรียน (Admin)</h1>
      <p>TODO: สร้างฟอร์มเพิ่ม/แก้ไขคอร์ส และตารางจัดการคอร์สสำหรับผู้ดูแลระบบ</p>
    </section>
  );
}
`,
};

export const finalPracticeSolution = {
  ...finalPracticeStarter,

  'backend/middleware/auth.js': `const jwt = require('jsonwebtoken');
const store = require('../db/store.js');

const secret = process.env.JWT_KEY || 'practice-only-change-this-key';

function verifyToken(req, res, next) {
  const header = req.get('Authorization') || '';
  if (!header.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing token' });
  }
  const token = header.slice(7).trim();
  try {
    const payload = jwt.verify(token, secret);
    const user = store.users.find(u => u.id === payload.userId);
    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = {
      userId: user.id,
      id: user.id,
      userName: user.userName,
      email: user.email,
      role: user.role,
    };
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin only' });
  }
  next();
}

module.exports = { verifyToken, requireAdmin, secret };
`,

  'backend/routes/auth.js': `const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const store = require('../db/store.js');
const { verifyToken, secret } = require('../middleware/auth.js');

router.post('/register', async (req, res) => {
  const { userName, email, password } = req.body || {};
  if (
    typeof userName !== 'string' ||
    userName.trim().length < 2 ||
    typeof email !== 'string' ||
    !email.includes('@') ||
    typeof password !== 'string' ||
    password.length < 6
  ) {
    return res.status(400).json({ message: 'Invalid registration data' });
  }
  const cleanName = userName.trim();
  const cleanEmail = email.trim().toLowerCase();
  const exists = store.users.some(
    u => u.userName.toLowerCase() === cleanName.toLowerCase() || u.email.toLowerCase() === cleanEmail
  );
  if (exists) {
    return res.status(409).json({ message: 'Username or email already exists' });
  }
  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = {
    id: store.nextUserId++,
    userName: cleanName,
    email: cleanEmail,
    passwordHash,
    role: 'student',
  };
  store.users.push(newUser);
  return res.status(201).json({
    id: newUser.id,
    userName: newUser.userName,
    email: newUser.email,
    role: newUser.role,
  });
});

router.post('/login', async (req, res) => {
  const { userName, email, password } = req.body || {};
  const identifier = String(userName || email || '').trim().toLowerCase();
  if (!identifier || typeof password !== 'string') {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const user = store.users.find(
    u => u.userName.toLowerCase() === identifier || u.email.toLowerCase() === identifier
  );
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ userId: user.id, role: user.role }, secret, { expiresIn: '2h' });
  return res.status(200).json({
    token,
    user: { id: user.id, userName: user.userName, email: user.email, role: user.role },
  });
});

router.get('/me', verifyToken, (req, res) => {
  return res.status(200).json({
    id: req.user.id,
    userName: req.user.userName,
    email: req.user.email,
    role: req.user.role,
  });
});

module.exports = router;
`,

  'backend/routes/courses.js': `const router = require('express').Router();
const store = require('../db/store.js');
const { verifyToken, requireAdmin } = require('../middleware/auth.js');

function enrichCourse(course) {
  const category = store.categories.find(c => c.id === course.categoryId);
  return {
    ...course,
    categoryName: category ? category.name : 'Uncategorized',
    availableSeats: Math.max(0, course.seats - course.enrolled),
  };
}

function validateCourseInput(body) {
  const code = typeof body?.code === 'string' ? body.code.trim().toUpperCase() : '';
  const title = typeof body?.title === 'string' ? body.title.trim() : '';
  const categoryId = Number(body?.categoryId);
  const price = Number(body?.price);
  const seats = Number(body?.seats);
  const validCategory = store.categories.some(c => c.id === categoryId);
  const valid =
    code.length >= 2 &&
    title.length >= 2 &&
    validCategory &&
    Number.isFinite(price) &&
    price >= 0 &&
    Number.isInteger(seats) &&
    seats >= 1;
  return { valid, code, title, categoryId, price, seats };
}

router.get('/categories', (req, res) => {
  res.json(store.categories);
});

router.get('/courses', (req, res) => {
  const keyword = String(req.query.keyword || '').trim().toLowerCase();
  const categoryId = req.query.categoryId ? Number(req.query.categoryId) : null;
  const filtered = store.courses.filter(course => {
    const matchKeyword =
      !keyword ||
      course.title.toLowerCase().includes(keyword) ||
      course.code.toLowerCase().includes(keyword);
    const matchCategory = !categoryId || course.categoryId === categoryId;
    return matchKeyword && matchCategory;
  });
  res.json(filtered.map(enrichCourse));
});

router.get('/courses/:id', (req, res) => {
  const course = store.courses.find(c => c.id === Number(req.params.id));
  if (!course) return res.status(404).json({ message: 'Course not found' });
  res.json(enrichCourse(course));
});

router.post('/courses', verifyToken, requireAdmin, (req, res) => {
  const { valid, code, title, categoryId, price, seats } = validateCourseInput(req.body);
  if (!valid) {
    return res.status(400).json({ message: 'Invalid course data' });
  }
  if (store.courses.some(c => c.code.toUpperCase() === code)) {
    return res.status(409).json({ message: 'Duplicate course code' });
  }
  const created = {
    id: store.nextCourseId++,
    code,
    title,
    categoryId,
    price,
    seats,
    enrolled: 0,
  };
  store.courses.push(created);
  res.status(201).json(enrichCourse(created));
});

router.put('/courses/:id', verifyToken, requireAdmin, (req, res) => {
  const course = store.courses.find(c => c.id === Number(req.params.id));
  if (!course) return res.status(404).json({ message: 'Course not found' });

  const merged = {
    code: req.body?.code ?? course.code,
    title: req.body?.title ?? course.title,
    categoryId: req.body?.categoryId ?? course.categoryId,
    price: req.body?.price ?? course.price,
    seats: req.body?.seats ?? course.seats,
  };
  const { valid, code, title, categoryId, price, seats } = validateCourseInput(merged);
  if (!valid) {
    return res.status(400).json({ message: 'Invalid course data' });
  }
  if (store.courses.some(c => c.id !== course.id && c.code.toUpperCase() === code)) {
    return res.status(409).json({ message: 'Duplicate course code' });
  }
  if (seats < course.enrolled) {
    return res.status(409).json({ message: 'Seats cannot be less than enrolled students' });
  }
  Object.assign(course, { code, title, categoryId, price, seats });
  res.json(enrichCourse(course));
});

router.delete('/courses/:id', verifyToken, requireAdmin, (req, res) => {
  const id = Number(req.params.id);
  const course = store.courses.find(c => c.id === id);
  if (!course) return res.status(404).json({ message: 'Course not found' });
  if (course.enrolled > 0 || store.enrollments.some(e => e.courseId === id && e.status === 'active')) {
    return res.status(409).json({ message: 'Cannot delete course with active enrollments' });
  }
  store.courses = store.courses.filter(c => c.id !== id);
  res.json({ message: 'Course deleted' });
});

module.exports = router;
`,

  'backend/routes/enrollments.js': `const router = require('express').Router();
const store = require('../db/store.js');
const { verifyToken } = require('../middleware/auth.js');

function enrichEnrollment(enrollment) {
  const course = store.courses.find(c => c.id === enrollment.courseId);
  return {
    ...enrollment,
    courseCode: course ? course.code : '',
    courseTitle: course ? course.title : 'Unknown Course',
    price: course ? course.price : 0,
  };
}

router.get('/my', verifyToken, (req, res) => {
  const list = store.enrollments
    .filter(e => e.userId === req.user.userId)
    .map(enrichEnrollment);
  res.json(list);
});

router.post('/', verifyToken, (req, res) => {
  const courseId = Number(req.body?.courseId);
  const course = store.courses.find(c => c.id === courseId);
  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }
  const duplicate = store.enrollments.some(
    e => e.userId === req.user.userId && e.courseId === courseId && e.status === 'active'
  );
  if (duplicate) {
    return res.status(409).json({ message: 'Already enrolled in this course' });
  }
  if (course.enrolled >= course.seats) {
    return res.status(409).json({ message: 'Course is full' });
  }
  course.enrolled += 1;
  const created = {
    id: store.nextEnrollmentId++,
    userId: req.user.userId,
    courseId: course.id,
    status: 'active',
    createdAt: new Date().toISOString(),
  };
  store.enrollments.push(created);
  res.status(201).json(enrichEnrollment(created));
});

router.patch('/:id/cancel', verifyToken, (req, res) => {
  const enrollment = store.enrollments.find(e => e.id === Number(req.params.id));
  if (!enrollment) {
    return res.status(404).json({ message: 'Enrollment not found' });
  }
  if (enrollment.userId !== req.user.userId && req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden' });
  }
  if (enrollment.status === 'cancelled') {
    return res.status(409).json({ message: 'Already cancelled' });
  }
  enrollment.status = 'cancelled';
  const course = store.courses.find(c => c.id === enrollment.courseId);
  if (course) {
    course.enrolled = Math.max(0, course.enrolled - 1);
  }
  res.json(enrichEnrollment(enrollment));
});

module.exports = router;
`,

  'frontend/pages/CatalogPage.jsx': `import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function CatalogPage() {
  const { user } = useAuth();
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  async function loadCourses(nextKeyword = keyword, nextCategory = categoryId) {
    try {
      const [cats, list] = await Promise.all([
        api.categories(),
        api.courses({
          ...(nextKeyword ? { keyword: nextKeyword } : {}),
          ...(nextCategory ? { categoryId: nextCategory } : {}),
        }),
      ]);
      setCategories(cats);
      setCourses(list);
    } catch (err) {
      setError(err.response?.data?.message || 'โหลดข้อมูลคอร์สไม่สำเร็จ');
    }
  }

  useEffect(() => {
    loadCourses();
  }, [keyword, categoryId]);

  async function handleEnroll(courseId) {
    setError('');
    setMessage('');
    if (!user) {
      setError('กรุณาเข้าสู่ระบบก่อนลงทะเบียนเรียน');
      return;
    }
    try {
      await api.enroll(courseId);
      setMessage('ลงทะเบียนเรียนสำเร็จ');
      await loadCourses();
    } catch (err) {
      setError(err.response?.data?.message || 'ลงทะเบียนไม่สำเร็จ');
    }
  }

  return (
    <section>
      <h1>คอร์สเรียนทั้งหมด</h1>
      {error && <p role="alert">{error}</p>}
      {message && <p>{message}</p>}

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
        <label>
          ค้นหาคอร์ส
          <input
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา..."
          />
        </label>
        <label>
          หมวดหมู่
          <select value={categoryId} onChange={e => setCategoryId(e.target.value)}>
            <option value="">ทุกหมวดหมู่</option>
            {categories.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid">
        {courses.map(course => (
          <article key={course.id}>
            <small>{course.code} · {course.categoryName}</small>
            <h2>{course.title}</h2>
            <p>ราคา {course.price} บาท</p>
            <p>ว่าง {course.availableSeats} / {course.seats} ที่นั่ง</p>
            <button
              type="button"
              disabled={course.availableSeats <= 0}
              onClick={() => handleEnroll(course.id)}
            >
              {course.availableSeats > 0 ? 'ลงทะเบียนเรียน' : 'ที่นั่งเต็ม'}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
`,

  'frontend/pages/LoginPage.jsx': `import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { loginWithToken } = useAuth();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    setError('');
    try {
      const data = await api.login({ userName, password });
      loginWithToken(data.token, data.user);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'เข้าสู่ระบบไม่สำเร็จ');
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      await api.register({ userName: regName, email: regEmail, password: regPassword });
      setMessage('สมัครสมาชิกสำเร็จ กรุณาเข้าสู่ระบบ');
      setUserName(regName);
      setRegName('');
      setRegEmail('');
      setRegPassword('');
    } catch (err) {
      setError(err.response?.data?.message || 'สมัครสมาชิกไม่สำเร็จ');
    }
  }

  return (
    <section>
      <h1>เข้าสู่ระบบ / สมัครสมาชิก</h1>
      {error && <p role="alert">{error}</p>}
      {message && <p>{message}</p>}

      <div className="grid">
        <form onSubmit={handleLogin}>
          <h2>เข้าสู่ระบบ</h2>
          <label>
            ชื่อผู้ใช้
            <input value={userName} onChange={e => setUserName(e.target.value)} required />
          </label>
          <label>
            รหัสผ่าน
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </label>
          <button type="submit">เข้าสู่ระบบ</button>
        </form>

        <form onSubmit={handleRegister}>
          <h2>สมัครสมาชิกใหม่</h2>
          <label>
            ชื่อผู้ใช้ใหม่
            <input value={regName} onChange={e => setRegName(e.target.value)} required />
          </label>
          <label>
            อีเมล
            <input type="email" value={regEmail} onChange={e => setRegEmail(e.target.value)} required />
          </label>
          <label>
            รหัสผ่านใหม่
            <input type="password" value={regPassword} onChange={e => setRegPassword(e.target.value)} required />
          </label>
          <button type="submit">สมัครสมาชิก</button>
        </form>
      </div>
    </section>
  );
}
`,

  'frontend/pages/MyCoursesPage.jsx': `import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function MyCoursesPage() {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  async function loadMyCourses() {
    if (!user) return;
    try {
      setItems(await api.myEnrollments());
    } catch (err) {
      setError(err.response?.data?.message || 'โหลดรายการลงทะเบียนไม่สำเร็จ');
    }
  }

  useEffect(() => {
    loadMyCourses();
  }, [user]);

  if (!user) {
    return (
      <section>
        <h1>คอร์สของฉัน</h1>
        <p role="alert">กรุณาเข้าสู่ระบบก่อนดูรายการลงทะเบียน</p>
        <Link to="/login">ไปหน้าเข้าสู่ระบบ</Link>
      </section>
    );
  }

  async function handleCancel(id) {
    setError('');
    try {
      await api.cancelEnrollment(id);
      await loadMyCourses();
    } catch (err) {
      setError(err.response?.data?.message || 'ยกเลิกไม่สำเร็จ');
    }
  }

  const totalActivePrice = items
    .filter(item => item.status === 'active')
    .reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <section>
      <h1>คอร์สของฉัน</h1>
      {error && <p role="alert">{error}</p>}
      <p>ยอดรวมค่าเรียนที่ลงทะเบียนอยู่: <strong>{totalActivePrice} บาท</strong></p>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.courseCode} · {item.courseTitle}</strong> ({item.price} บาท) — สถานะ: <span>{item.status}</span>
            {item.status === 'active' && (
              <button type="button" onClick={() => handleCancel(item.id)}>
                ยกเลิกลงทะเบียน
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
`,

  'frontend/pages/AdminPage.jsx': `import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function AdminPage() {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [code, setCode] = useState('');
  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState('1');
  const [price, setPrice] = useState('');
  const [seats, setSeats] = useState('');
  const [error, setError] = useState('');

  async function loadAdminData() {
    if (!user || user.role !== 'admin') return;
    try {
      const [cats, list] = await Promise.all([api.categories(), api.courses()]);
      setCategories(cats);
      setCourses(list);
    } catch (err) {
      setError(err.response?.data?.message || 'โหลดข้อมูลไม่สำเร็จ');
    }
  }

  useEffect(() => {
    loadAdminData();
  }, [user]);

  if (!user || user.role !== 'admin') {
    return (
      <section>
        <h1>จัดการคอร์สเรียน (Admin)</h1>
        <p role="alert">ไม่มีสิทธิ์เข้าถึง (Admin เท่านั้น)</p>
      </section>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    const payload = {
      code,
      title,
      categoryId: Number(categoryId),
      price: Number(price),
      seats: Number(seats),
    };
    try {
      if (editingId) {
        await api.updateCourse(editingId, payload);
      } else {
        await api.createCourse(payload);
      }
      setEditingId(null);
      setCode('');
      setTitle('');
      setCategoryId('1');
      setPrice('');
      setSeats('');
      await loadAdminData();
    } catch (err) {
      setError(err.response?.data?.message || 'บันทึกคอร์สไม่สำเร็จ');
    }
  }

  async function handleDelete(id) {
    setError('');
    try {
      await api.deleteCourse(id);
      await loadAdminData();
    } catch (err) {
      setError(err.response?.data?.message || 'ลบคอร์สไม่สำเร็จ');
    }
  }

  return (
    <section>
      <h1>จัดการคอร์สเรียน (Admin)</h1>
      {error && <p role="alert">{error}</p>}

      <form onSubmit={handleSubmit}>
        <h2>{editingId ? 'แก้ไขคอร์สเรียน' : 'เพิ่มคอร์สเรียนใหม่'}</h2>
        <label>
          รหัสวิชา
          <input value={code} onChange={e => setCode(e.target.value)} required />
        </label>
        <label>
          ชื่อวิชา
          <input value={title} onChange={e => setTitle(e.target.value)} required />
        </label>
        <label>
          หมวดหมู่วิชา
          <select value={categoryId} onChange={e => setCategoryId(e.target.value)}>
            {categories.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </label>
        <label>
          ราคาคอร์ส
          <input type="number" min="0" value={price} onChange={e => setPrice(e.target.value)} required />
        </label>
        <label>
          จำนวนที่นั่ง
          <input type="number" min="1" value={seats} onChange={e => setSeats(e.target.value)} required />
        </label>
        <button type="submit">บันทึกคอร์ส</button>
      </form>

      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <strong>{course.code} · {course.title}</strong> ({course.price} บาท · ลงทะเบียน {course.enrolled}/{course.seats})
            <button
              type="button"
              onClick={() => {
                setEditingId(course.id);
                setCode(course.code);
                setTitle(course.title);
                setCategoryId(String(course.categoryId));
                setPrice(String(course.price));
                setSeats(String(course.seats));
              }}
            >
              แก้ไข
            </button>
            <button type="button" onClick={() => handleDelete(course.id)}>
              ลบคอร์ส
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
`,
};

export const finalPracticeTests = apiTest(`
const store = require('../backend/db/store.js');

test('Part 1: Register, Login, JWT /me and Role enforcement', async () => {
  store.resetStore();

  // 1. Register validation (400) & success (201) & duplicate (409)
  expect((await request('/api/auth/register', 'POST', { userName: 'a', email: 'bad', password: '123' })).status).toBe(400);
  const regRes = await request('/api/auth/register', 'POST', {
    userName: 'somchai',
    email: 'somchai@uni.ac.th',
    password: 'password123',
    role: 'admin', // Must be ignored and forced to 'student'
  });
  expect(regRes.status).toBe(201);
  const newStudent = await regRes.json();
  expect(newStudent.role).toBe('student');
  expect(newStudent.passwordHash).toBeUndefined();

  // Duplicate registration -> 409
  expect((await request('/api/auth/register', 'POST', {
    userName: 'somchai',
    email: 'somchai@uni.ac.th',
    password: 'password123',
  })).status).toBe(409);

  // 2. Login as student & admin
  expect((await request('/api/auth/login', 'POST', { userName: 'mali', password: 'wrong' })).status).toBe(401);
  const studentLogin = await (await request('/api/auth/login', 'POST', { userName: 'mali', password: 'mali12345' })).json();
  expect(studentLogin.token).toBeTruthy();
  expect(studentLogin.user.role).toBe('student');

  const adminLogin = await (await request('/api/auth/login', 'POST', { userName: 'admin', password: 'admin12345' })).json();
  expect(adminLogin.token).toBeTruthy();
  expect(adminLogin.user.role).toBe('admin');

  // 3. /api/auth/me requires Bearer token
  expect((await request('/api/auth/me')).status).toBe(401);
  const meRes = await request('/api/auth/me', 'GET', undefined, studentLogin.token);
  expect(meRes.status).toBe(200);
  expect((await meRes.json()).userName).toBe('mali');
});

test('Part 2: Courses search/filter and Admin-only CRUD guards', async () => {
  store.resetStore();
  const studentToken = (await (await request('/api/auth/login', 'POST', { userName: 'mali', password: 'mali12345' })).json()).token;
  const adminToken = (await (await request('/api/auth/login', 'POST', { userName: 'admin', password: 'admin12345' })).json()).token;

  // Search & category filter
  const searchRes = await (await request('/api/courses?keyword=react')).json();
  expect(searchRes.length).toBe(1);
  expect(searchRes[0].code).toBe('CS301');
  expect(searchRes[0].availableSeats).toBe(2);

  const catRes = await (await request('/api/courses?categoryId=2')).json();
  expect(catRes.length).toBe(1);
  expect(catRes[0].code).toBe('AI202');

  // Student cannot create/update/delete courses (403)
  expect((await request('/api/courses', 'POST', { code: 'WEB404', title: 'Next.js', categoryId: 1, price: 900, seats: 5 }, studentToken)).status).toBe(403);

  // Admin creates course (201) and prevents duplicate code (409)
  const createRes = await request('/api/courses', 'POST', { code: 'WEB404', title: 'Next.js Pro', categoryId: 1, price: 900, seats: 5 }, adminToken);
  expect(createRes.status).toBe(201);
  const created = await createRes.json();
  expect(created.availableSeats).toBe(5);

  expect((await request('/api/courses', 'POST', { code: 'WEB404', title: 'Duplicate', categoryId: 1, price: 900, seats: 5 }, adminToken)).status).toBe(409);

  // Admin cannot reduce seats below current enrolled (course 1 has 1 enrolled)
  expect((await request('/api/courses/1', 'PUT', { code: 'CS301', title: 'Full Stack Node & React', categoryId: 1, price: 1500, seats: 0 }, adminToken)).status).toBe(400);
  // If course 1 has 2 enrolled, setting seats to 1 must return 409
  await request('/api/enrollments', 'POST', { courseId: 1 }, adminToken);
  expect((await request('/api/courses/1', 'PUT', { code: 'CS301', title: 'Full Stack Node & React', categoryId: 1, price: 1500, seats: 1 }, adminToken)).status).toBe(409);

  // Admin cannot delete course with active enrollments (409), but can delete empty course (200)
  expect((await request('/api/courses/1', 'DELETE', undefined, adminToken)).status).toBe(409);
  expect((await request('/api/courses/' + created.id, 'DELETE', undefined, adminToken)).status).toBe(200);
});

test('Part 3: Enrollment seat quota, duplicate prevention, and cancellation refund', async () => {
  store.resetStore();
  const maliToken = (await (await request('/api/auth/login', 'POST', { userName: 'mali', password: 'mali12345' })).json()).token;
  const adminToken = (await (await request('/api/auth/login', 'POST', { userName: 'admin', password: 'admin12345' })).json()).token;

  // Mali already enrolled in course 1 -> 409
  expect((await request('/api/enrollments', 'POST', { courseId: 1 }, maliToken)).status).toBe(409);

  // Course 3 is already full (1/1) -> admin trying to enroll gets 409
  expect((await request('/api/enrollments', 'POST', { courseId: 3 }, adminToken)).status).toBe(409);

  // Mali cancels enrollment #2 (which is for course 3) -> 200 and refunds seat
  const cancelRes = await request('/api/enrollments/2/cancel', 'PATCH', {}, maliToken);
  expect(cancelRes.status).toBe(200);
  expect((await cancelRes.json()).status).toBe('cancelled');

  // Cancel again -> 409
  expect((await request('/api/enrollments/2/cancel', 'PATCH', {}, maliToken)).status).toBe(409);

  // Now Course 3 has 1 available seat, so admin can enroll -> 201
  const enrollRes = await request('/api/enrollments', 'POST', { courseId: 3 }, adminToken);
  expect(enrollRes.status).toBe(201);
});
`);
