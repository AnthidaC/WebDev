/**
 * คลังสมุดโค้ดและสรุปความรู้ Full Stack (Node.js + Express + Real DB MySQL/Prisma + React + Hooks + Router + Auth/Role)
 * เรียงลำดับตั้งแต่การดึงฐานข้อมูลจริง (MySQL2 & Prisma) ไปจนถึงเขียน Controller, Route, Middleware และเชื่อมต่อ React จนเสร็จสมบูรณ์
 */

export const knowledgeCategories = [
  {
    id: 'exam-gameplan',
    badge: '🧭 แผนผังทำข้อสอบ (เมื่อสมองว่าง เริ่มตรงนี้)',
    title: 'ลำดับการทำข้อสอบ Full Stack ทีละก้าว (จาก 0 จนครบ 100 คะแนน)',
    summary: 'ถ้าเปิดข้อสอบมาแล้วสมองว่าง ไม่รู้จะเริ่มพิมพ์ไฟล์ไหนก่อน ให้เดินตาม 6 ขั้นตอนนี้ทีละก้าว ห้ามทำข้ามขั้น เพราะแต่ละขั้นจะปลดล็อกคะแนนขั้นถัดไป',
    sections: [
      {
        step: 'ก้าวที่ 1 (5 นาทีแรก)',
        file: 'database/*.sql และ .env → backend/db/mysql.js',
        title: '1. ส่องตารางในไฟล์ .sql แล้วเชื่อมฐานข้อมูลให้ติดก่อน (ยังไม่ต้องแตะ React)',
        whenToUse: 'ทันทีที่เปิดโจทย์สอบ สิ่งแรกที่ต้องรู้คือ "มีตารางชื่ออะไร และคอลัมน์ชื่ออะไรบ้าง"',
        keyPoints: [
          'เปิดไฟล์ .sql ดูชื่อตาราง (เช่น users, categories, courses, enrollments) และชื่อคอลัมน์ให้แม่น',
          'รันไฟล์ .sql เข้า MySQL/XAMPP แล้วเช็กไฟล์ .env ว่า DB_NAME ตรงกับชื่อฐานข้อมูลใน .sql',
          'สร้าง/เช็กไฟล์ backend/db/mysql.js ให้ส่งออก mysql.createPool(...) พร้อมใช้งาน',
        ],
        code: `// =========================================================
// เช็กลิสต์ 5 นาทีแรกเวลาเปิดข้อสอบ:
// =========================================================
// 1. เปิดไฟล์ database/*.sql ดูชื่อตารางและคอลัมน์จริง เช่น:
//    - users       (id, userName, email, passwordHash, role)
//    - categories  (id, name)
//    - courses     (id, code, title, categoryId, price, seats, enrolled)
//    - enrollments (id, userId, courseId, status, createdAt)
//
// 2. เช็กไฟล์ .env ให้ชื่อ DB_NAME ตรงกับ CREATE DATABASE ใน .sql
// 3. เปิดเซิร์ฟเวอร์ทวนว่าเชื่อม DB ติด ก่อนเริ่มเขียน API`,
      },
      {
        step: 'ก้าวที่ 2 (เก็บคะแนนไวที่สุด)',
        file: 'backend/controllers/courseController.js (เฉพาะ GET)',
        title: '2. ทำ API ดึงข้อมูลสาธารณะ (GET) ที่ไม่ต้องล็อกอินก่อนเสมอ',
        whenToUse: 'ทำเป็นอันดับแรกของโค้ด เพราะทดสอบง่ายสุด ไม่ติด Token และเอาไปเทสหน้าแรกของ React ได้เลย',
        keyPoints: [
          'เริ่มจาก GET /api/categories และ GET /api/courses (พร้อม LEFT JOIN ตารางหมวดหมู่ และ WHERE LIKE สำหรับค้นหา)',
          'คำนวณค่าที่โจทย์ต้องการเพิ่มใน SQL เลย เช่น (c.seats - c.enrolled) AS availableSeats',
          'ลองยิงผ่าน API Client หรือเปิดเบราว์เซอร์ดูว่าได้ Array JSON กลับมาครบไหม',
        ],
        code: `// เริ่มจากเขียนแค่ฟังก์ชัน GET ก่อน เพื่อปลดล็อกคะแนนก้อนแรกทันที:
exports.listCategories = async (req, res, next) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM categories ORDER BY id ASC');
    res.status(200).json(rows);
  } catch (err) { next(err); }
};`,
      },
      {
        step: 'ก้าวที่ 3 (ปลดล็อกระบบสิทธิ์)',
        file: 'backend/middleware/auth.js และ routes/auth.js',
        title: '3. ทำระบบ Login / Register และ Middleware (verifyToken + requireAdmin)',
        whenToUse: 'พอ GET ผ่านแล้ว ต้องรีบทำ Auth ทันที เพราะข้อที่เหลือทั้งหมด (POST/PUT/DELETE/Enroll) ต้องใช้ Token!',
        keyPoints: [
          'ทำ POST /api/auth/login (เช็กอีเมลจาก DB + bcrypt.compare + ออก jwt.sign ที่ใส่ { userId, role })',
          'ทำ POST /api/auth/register (เช็กอีเมลซ้ำ 409 + bcrypt.hash + INSERT ลงตาราง users ตอบ 201)',
          'ทำ middleware verifyToken (ไม่มี/ผิด ตอบ 401) และ requireAdmin (ไม่ใช่ admin ตอบ 403)',
        ],
        code: `// จำกฎเหล็ก Status Code ของระบบ Auth:
// - ไม่ได้ส่ง Header Authorization: Bearer <token> หรือ Token ผิด  --> 401 Unauthorized
// - ล็อกอินแล้ว แต่ req.user.role !== 'admin'                    --> 403 Forbidden
// - สมัครสมาชิกด้วย email ที่มีในตาราง users แล้ว                 --> 409 Conflict`,
      },
      {
        step: 'ก้าวที่ 4 (เก็บคะแนนฝั่งจัดการข้อมูล)',
        file: 'controllers/courseController.js + enrollmentController.js',
        title: '4. ทำ API ที่ต้องใช้สิทธิ์: Admin CRUD (POST/PUT/DELETE) และระบบลงทะเบียน (Enroll/Cancel)',
        whenToUse: 'เมื่อมี verifyToken และ requireAdmin พร้อมแล้ว ค่อยมาเขียนปุ่มเพิ่ม/แก้/ลบ และปุ่มลงทะเบียน',
        keyPoints: [
          'จำลำดับเช็กใน Controller ทุกตัว: 1) เช็กพบข้อมูลไหม (404) -> 2) เช็กข้อมูลว่าง/ติดลบ (400) -> 3) เช็กข้อมูลซ้ำ/ที่นั่งเต็ม/มีคนเรียนอยู่ (409) -> 4) สั่ง INSERT (201) หรือ UPDATE/DELETE (200)',
          'ตอนลงทะเบียน (POST /api/enrollments) ต้องทำ 2 อย่างคู่กัน: INSERT ลง enrollments + UPDATE courses SET enrolled = enrolled + 1',
          'ตอนยกเลิก (PATCH /api/enrollments/:id/cancel) ต้องเช็กว่าเป็นเจ้าของหรือ Admin (403) และถ้า status === "cancelled" ไปแล้วให้ตอบ 409 ห้ามคืนที่นั่งซ้ำ!',
        ],
        code: `// สูตรจำลำดับการดัก Error ใน Controller ทุกข้อ (เขียนเรียงตามนี้ได้คะแนนครบทุกเคส):
// 1. หาแถวตาม id ก่อน -> ถ้า rows.length === 0          return res.status(404)
// 2. เช็กสิทธิ์เจ้าของ  -> ถ้าไม่ใช่เจ้าของและไม่ใช่ admin    return res.status(403)
// 3. เช็ก Input ว่าง/ผิด -> ถ้า !title || price < 0       return res.status(400)
// 4. เช็กซ้ำ/เต็ม/ขัดแย้ง -> ถ้าซ้ำ หรือ enrolled >= seats  return res.status(409)
// 5. บันทึกลง DB จริง   -> INSERT ตอบ 201 / UPDATE,DELETE ตอบ 200`,
      },
      {
        step: 'ก้าวที่ 5 (เชื่อมหน้าบ้าน React)',
        file: 'frontend/App.jsx และ frontend/pages/*.jsx',
        title: '5. ทำฝั่ง React เรียงจาก: เก็บ Token → หน้าแรกดึงรายการ → ปุ่มกดส่ง API → กั้นหน้า Admin',
        whenToUse: 'หลังจาก Backend ตอบ JSON ถูกต้องแล้ว ค่อยสลับมาทำหน้าเว็บ React',
        keyPoints: [
          '1) เช็กว่าตอน Login สำเร็จ เก็บ token และ user ลง localStorage และแนบ Authorization: Bearer <token> ไปกับทุก Request',
          '2) หน้าแรก (Catalog): ใช้ useEffect ดึงคอร์สเมื่อ keyword หรือ categoryId เปลี่ยน',
          '3) ปุ่มกด (ลงทะเบียน / ยกเลิก / เพิ่มลบคอร์ส): พอยิง API สำเร็จ ให้เรียกฟังก์ชันดึงข้อมูลใหม่ (loadData()) ทันทีเพื่อให้เลขที่นั่งอัปเดตบนหน้าจอ',
          '4) กั้น Route หน้า /admin: ถ้า !user ให้ <Navigate to="/login" /> ถ้า user.role !== "admin" ให้แสดงข้อความ 403 Access Denied',
        ],
        code: `// แพทเทิร์นมาตรฐานของปุ่มกดทุกปุ่มใน React เวลาสอบ:
async function handleAction(id) {
  setError('');
  try {
    await api.post('/api/enrollments', { courseId: id });
    await loadCourses(); // <-- สำคัญมาก! โหลดข้อมูลใหม่เพื่อให้หน้าจออัปเดตทันที
  } catch (err) {
    setError(err.response?.data?.message || err.message); // แสดงข้อความ Error จาก Backend
  }
}`,
      },
    ],
  },
  {
    id: 'db-to-api-e2e',
    badge: '🔥 ดึง DB จริง (แบบไม่ใช้ Prisma) → API เสร็จ',
    title: 'Step-by-Step: ดึงฐานข้อมูลจริงด้วย MySQL2 ล้วน (ไม่ใช้ Prisma) จนได้ API ครบทั้งระบบ',
    summary: 'โค้ดเพียว SQL (mysql2/promise) ไล่ทีละไฟล์ตั้งแต่ .env → ตัวเชื่อม mysql.js → Controller ดึง/ค้นหา/JOIN/เพิ่ม/แก้/ลบ → ลงทะเบียน & ยกเลิกคืนที่นั่ง → ผูก Route',
    sections: [
      {
        step: 'Step 1',
        file: '.env และ backend/db/mysql.js',
        title: '1. สร้างไฟล์เชื่อมต่อฐานข้อมูล MySQL จริงด้วย mysql2/promise (ไม่ใช้ Prisma)',
        whenToUse: 'ก้าวแรกสุดของฝั่ง Backend เพื่อให้ทุก Controller เรียกใช้ pool.execute(sql, params) ได้ทันที',
        keyPoints: [
          'ใช้ require("mysql2/promise") เพื่อให้ใช้ async/await ได้เลยโดยไม่ต้องเขียน Callback',
          'ผลลัพธ์จาก await pool.execute(sql, params) จะเป็น Array คู่ [rows] เสมอ จึงต้องแกะด้วย const [rows] = ...',
          'ใช้เครื่องหมาย ? ในคำสั่ง SQL แล้วส่งค่าผ่าน Array ตัวที่สองเสมอ (ป้องกัน SQL Injection และไม่ต้องต่อ String เอง)',
        ],
        code: `// =========================================================
// 1. ไฟล์ .env (วางไว้ที่โฟลเดอร์นอกสุดของโปรเจกต์)
// =========================================================
PORT=3000
JWT_KEY=my-super-secret-exam-key
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=skillhub_exam

// =========================================================
// 2. ไฟล์ backend/db/mysql.js (ตัวเชื่อมต่อฐานข้อมูล MySQL จริง)
// =========================================================
require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'skillhub_exam',
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;`,
      },
      {
        step: 'Step 2',
        file: 'backend/controllers/courseController.js',
        title: '2. เขียน Controller ดึง DB จริงด้วย SQL ล้วน (SELECT + LEFT JOIN + ค้นหา + INSERT + UPDATE + DELETE)',
        whenToUse: 'ใช้จัดการข้อมูลหลักของระบบ เช่น คอร์สเรียน/สินค้า/อุปกรณ์ พร้อมเชื่อมชื่อหมวดหมู่ (LEFT JOIN) และเช็กเงื่อนไขครบทุกข้อ',
        keyPoints: [
          'ตอนดึงรายการ (SELECT): ใช้ LEFT JOIN เพื่อเอาชื่อหมวดหมู่มาแสดง และคำนวณ (c.seats - c.enrolled) AS availableSeats ใน SQL ได้เลย',
          'ตอนเพิ่มข้อมูล (INSERT): เช็กรหัสซ้ำก่อน (ถ้าซ้ำตอบ 409) พอ INSERT เสร็จเอา result.insertId ไป SELECT แถวใหม่ส่งกลับพร้อม status 201',
          'ตอนแก้ไข/ลบ (UPDATE / DELETE): ต้อง SELECT เช็กก่อนว่ามี id นี้จริงไหม (ถ้าไม่มีตอบ 404) และเช็กเงื่อนไขห้ามลดที่นั่งต่ำกว่าคนเรียน / ห้ามลบถ้ามีคนเรียนอยู่ (ตอบ 409)',
        ],
        code: `// ไฟล์ backend/controllers/courseController.js (เขียนด้วย mysql2/promise ล้วน ไม่ใช้ Prisma)
const pool = require('../db/mysql.js');

// 0. GET /api/categories (ดึงหมวดหมู่ทั้งหมดไปทำปุ่มกรอง/Dropdown)
exports.listCategories = async (req, res, next) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM categories ORDER BY id ASC');
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
};

// 1. GET /api/courses?keyword=&categoryId= (ดึงคอร์ส + JOIN หมวดหมู่ + ค้นหา)
exports.listCourses = async (req, res, next) => {
  try {
    const keyword = String(req.query.keyword || '').trim();
    const categoryId = req.query.categoryId ? Number(req.query.categoryId) : null;

    let sql = \`
      SELECT c.*, cat.name AS categoryName,
             (c.seats - c.enrolled) AS availableSeats
      FROM courses c
      LEFT JOIN categories cat ON c.categoryId = cat.id
      WHERE (c.title LIKE ? OR c.code LIKE ? OR c.instructor LIKE ?)
    \`;
    const like = '%' + keyword + '%';
    const params = [like, like, like];

    if (categoryId) {
      sql += ' AND c.categoryId = ?';
      params.push(categoryId);
    }
    sql += ' ORDER BY c.id ASC';

    const [rows] = await pool.execute(sql, params);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
};

// 2. GET /api/courses/:id (ดึงรายละเอียดคอร์สเดียวตาม ID)
exports.getCourseById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const [rows] = await pool.execute(
      \`SELECT c.*, cat.name AS categoryName, (c.seats - c.enrolled) AS availableSeats
       FROM courses c
       LEFT JOIN categories cat ON c.categoryId = cat.id
       WHERE c.id = ?\`,
      [id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(rows[0]);
  } catch (err) {
    next(err);
  }
};

// 3. POST /api/courses (Admin สร้างคอร์สใหม่ลง DB จริง)
exports.createCourse = async (req, res, next) => {
  try {
    const { code, title, categoryId, instructor, price, seats, level, description } = req.body || {};

    // เช็กข้อมูลบังคับ (400 Bad Request)
    if (!code?.trim() || !title?.trim() || Number(price) < 0 || Number(seats) < 1) {
      return res.status(400).json({ message: 'Invalid course data' });
    }

    // เช็กรหัสวิชาซ้ำใน DB (409 Conflict)
    const cleanCode = code.trim().toUpperCase();
    const [dup] = await pool.execute('SELECT id FROM courses WHERE code = ?', [cleanCode]);
    if (dup.length > 0) {
      return res.status(409).json({ message: 'Duplicate course code' });
    }

    // บันทึกลงตาราง courses
    const [result] = await pool.execute(
      \`INSERT INTO courses (code, title, categoryId, instructor, price, seats, enrolled, level, description)
       VALUES (?, ?, ?, ?, ?, ?, 0, ?, ?)\`,
      [
        cleanCode,
        title.trim(),
        Number(categoryId || 1),
        instructor?.trim() || 'Staff Instructor',
        Number(price),
        Number(seats),
        level || 'Beginner',
        description?.trim() || '',
      ]
    );

    // ดึงแถวที่เพิ่งสร้างส่งกลับไปพร้อม status 201 Created
    const [created] = await pool.execute('SELECT * FROM courses WHERE id = ?', [result.insertId]);
    res.status(201).json(created[0]);
  } catch (err) {
    next(err);
  }
};

// 4. PUT /api/courses/:id (Admin แก้ไขคอร์สใน DB จริง + ห้ามลดที่นั่งต่ำกว่าคนเรียน)
exports.updateCourse = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { code, title, categoryId, instructor, price, seats, level, description } = req.body || {};

    // เช็กก่อนว่ามีคอร์สนี้ไหม (404 Not Found)
    const [existing] = await pool.execute('SELECT * FROM courses WHERE id = ?', [id]);
    if (existing.length === 0) {
      return res.status(404).json({ message: 'Course not found' });
    }
    const current = existing[0];

    // ถ้าส่ง seats มาใหม่ ต้องไม่น้อยกว่าจำนวนคนเรียนปัจจุบัน (409 Conflict)
    const nextSeats = seats !== undefined ? Number(seats) : current.seats;
    if (nextSeats < current.enrolled) {
      return res.status(409).json({ message: 'Cannot reduce seats below enrolled count' });
    }

    await pool.execute(
      \`UPDATE courses
       SET code = ?, title = ?, categoryId = ?, instructor = ?, price = ?, seats = ?, level = ?, description = ?
       WHERE id = ?\`,
      [
        code ? code.trim().toUpperCase() : current.code,
        title ? title.trim() : current.title,
        categoryId !== undefined ? Number(categoryId) : current.categoryId,
        instructor !== undefined ? instructor.trim() : current.instructor,
        price !== undefined ? Number(price) : current.price,
        nextSeats,
        level || current.level,
        description !== undefined ? description : current.description,
        id,
      ]
    );

    const [updated] = await pool.execute('SELECT * FROM courses WHERE id = ?', [id]);
    res.status(200).json(updated[0]);
  } catch (err) {
    next(err);
  }
};

// 5. DELETE /api/courses/:id (Admin ลบคอร์สจาก DB จริง + ห้ามลบถ้ามีคนลงทะเบียนอยู่)
exports.deleteCourse = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const [existing] = await pool.execute('SELECT * FROM courses WHERE id = ?', [id]);
    if (existing.length === 0) {
      return res.status(404).json({ message: 'Course not found' });
    }
    if (existing[0].enrolled > 0) {
      return res.status(409).json({ message: 'Cannot delete course with active enrollments' });
    }

    await pool.execute('DELETE FROM courses WHERE id = ?', [id]);
    res.status(200).json({ message: 'Course deleted' });
  } catch (err) {
    next(err);
  }
};`,
      },
      {
        step: 'Step 3',
        file: 'backend/controllers/enrollmentController.js',
        title: '3. เขียน Controller ลงทะเบียนเรียน (ตัดที่นั่ง) & ยกเลิกการลงทะเบียน (คืนที่นั่ง) ด้วย MySQL2 ล้วน',
        whenToUse: 'เมื่อต้องแก้ไข 2 ตารางพร้อมกันใน DB จริง (ตาราง enrollments และตาราง courses)',
        keyPoints: [
          'ใช้ const conn = await pool.getConnection() แล้วครอบด้วย beginTransaction() -> commit() / rollback() เพื่อให้ตัดและคืนที่นั่งแม่นยำ 100%',
          'ตอนลงทะเบียน (POST /api/enrollments): เช็กคอร์สมีจริงไหม (404) -> เช็กลงซ้ำไหม (409) -> เช็กที่นั่งเต็มไหม (409) -> INSERT + UPDATE enrolled + 1 (ตอบ 201)',
          'ตอนยกเลิก (PATCH /api/enrollments/:id/cancel): เช็กมีรายการไหม (404) -> เช็กเป็นเจ้าของหรือ Admin ไหม (403) -> เช็กยกเลิกซ้ำไหม (409) -> UPDATE status="cancelled" + UPDATE enrolled - 1 (ตอบ 200)',
        ],
        code: `// ไฟล์ backend/controllers/enrollmentController.js (เขียนด้วย mysql2/promise ล้วน)
const pool = require('../db/mysql.js');

// 1. GET /api/enrollments/my (ดึงรายการลงทะเบียนของฉัน + JOIN ข้อมูลคอร์ส)
exports.listMyEnrollments = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const [rows] = await pool.execute(
      \`SELECT e.*, c.code AS courseCode, c.title AS courseTitle, c.price, c.instructor
       FROM enrollments e
       INNER JOIN courses c ON e.courseId = c.id
       WHERE e.userId = ?
       ORDER BY e.id DESC\`,
      [userId]
    );
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
};

// 2. POST /api/enrollments (ลงทะเบียนเรียน + ตัดที่นั่งใน DB จริง)
exports.enrollCourse = async (req, res, next) => {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    const userId = req.user.userId;
    const courseId = Number(req.body?.courseId);

    // 2.1 ดึงข้อมูลคอร์ส (404 ถ้าไม่พบ)
    const [courses] = await conn.execute('SELECT * FROM courses WHERE id = ? FOR UPDATE', [courseId]);
    if (courses.length === 0) {
      await conn.rollback();
      return res.status(404).json({ message: 'Course not found' });
    }
    const course = courses[0];

    // 2.2 เช็กว่าลงทะเบียนคอร์สนี้แบบ active อยู่แล้วหรือไม่ (409 ถ้าลงซ้ำ)
    const [dup] = await conn.execute(
      'SELECT id FROM enrollments WHERE userId = ? AND courseId = ? AND status = "active"',
      [userId, courseId]
    );
    if (dup.length > 0) {
      await conn.rollback();
      return res.status(409).json({ message: 'Already enrolled in this course' });
    }

    // 2.3 เช็กที่นั่งว่าง (409 ถ้าที่นั่งเต็ม)
    if (course.enrolled >= course.seats) {
      await conn.rollback();
      return res.status(409).json({ message: 'Course is full' });
    }

    // 2.4 เพิ่มแถวลง enrollments และบวกจำนวนคนเรียนใน courses
    const [ins] = await conn.execute(
      'INSERT INTO enrollments (userId, courseId, status) VALUES (?, ?, "active")',
      [userId, courseId]
    );
    await conn.execute('UPDATE courses SET enrolled = enrolled + 1 WHERE id = ?', [courseId]);

    await conn.commit();
    res.status(201).json({ id: ins.insertId, userId, courseId, status: 'active' });
  } catch (err) {
    await conn.rollback();
    next(err);
  } finally {
    conn.release();
  }
};

// 3. PATCH /api/enrollments/:id/cancel (ยกเลิกใบลงทะเบียน + คืนที่นั่ง 1 ที่)
exports.cancelEnrollment = async (req, res, next) => {
  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    const enrollmentId = Number(req.params.id);
    const [rows] = await conn.execute('SELECT * FROM enrollments WHERE id = ? FOR UPDATE', [enrollmentId]);

    // 3.1 เช็กว่ามีใบลงทะเบียนนี้ไหม (404 Not Found)
    if (rows.length === 0) {
      await conn.rollback();
      return res.status(404).json({ message: 'Enrollment not found' });
    }
    const enrollment = rows[0];

    // 3.2 เช็กสิทธิ์: ต้องเป็นเจ้าของใบลงทะเบียน หรือเป็น Admin เท่านั้น (403 Forbidden)
    if (enrollment.userId !== req.user.userId && req.user.role !== 'admin') {
      await conn.rollback();
      return res.status(403).json({ message: 'Forbidden: Owner or admin only' });
    }

    // 3.3 เช็กว่าเคยยกเลิกไปแล้วหรือยัง (409 Conflict ห้ามคืนที่นั่งซ้ำ!)
    if (enrollment.status === 'cancelled') {
      await conn.rollback();
      return res.status(409).json({ message: 'Enrollment already cancelled' });
    }

    // 3.4 เปลี่ยนสถานะเป็น cancelled และลดจำนวน enrolled ลง 1
    await conn.execute('UPDATE enrollments SET status = "cancelled" WHERE id = ?', [enrollmentId]);
    await conn.execute(
      'UPDATE courses SET enrolled = GREATEST(0, enrolled - 1) WHERE id = ?',
      [enrollment.courseId]
    );

    await conn.commit();
    res.status(200).json({ ...enrollment, status: 'cancelled' });
  } catch (err) {
    await conn.rollback();
    next(err);
  } finally {
    conn.release();
  }
};`,
      },
      {
        step: 'Step 4',
        file: 'backend/routes/*.js และ backend/app.js',
        title: '4. ผูก Controller เข้ากับ Express Router และเปิดใช้งานใน app.js จนเสร็จสมบูรณ์',
        whenToUse: 'ขั้นตอนสุดท้ายในการประกอบร่าง API ให้พร้อมรับ Request จาก React หรือ API Client',
        keyPoints: [
          'Route ไหนที่ใครก็ดูได้ (Public) ไม่ต้องใส่ Middleware',
          'Route ไหนต้องล็อกอินก่อน ให้ใส่ verifyToken คั่นตรงกลาง',
          'Route ไหนเฉพาะ Admin ให้ใส่ verifyToken, requireAdmin เรียงกันตามลำดับ',
        ],
        code: `// =========================================================
// 1. ไฟล์ backend/routes/courses.js
// =========================================================
const router = require('express').Router();
const courseController = require('../controllers/courseController.js');
const { verifyToken, requireAdmin } = require('../middleware/auth.js');

// Public Routes (ทุกคนดูได้ ไม่ต้องล็อกอิน)
router.get('/categories', courseController.listCategories);
router.get('/courses', courseController.listCourses);
router.get('/courses/:id', courseController.getCourseById);

// Admin Only Routes (ต้องล็อกอิน และมี role === 'admin')
router.post('/courses', verifyToken, requireAdmin, courseController.createCourse);
router.put('/courses/:id', verifyToken, requireAdmin, courseController.updateCourse);
router.delete('/courses/:id', verifyToken, requireAdmin, courseController.deleteCourse);

module.exports = router;

// =========================================================
// 2. ไฟล์ backend/routes/enrollments.js
// =========================================================
const enrollRouter = require('express').Router();
const enrollmentController = require('../controllers/enrollmentController.js');
const { verifyToken } = require('../middleware/auth.js');

enrollRouter.get('/my', verifyToken, enrollmentController.listMyEnrollments);
enrollRouter.post('/', verifyToken, enrollmentController.enrollCourse);
enrollRouter.patch('/:id/cancel', verifyToken, enrollmentController.cancelEnrollment);

module.exports = enrollRouter;

// =========================================================
// 3. ไฟล์ backend/app.js (ประกอบร่าง API ทั้งระบบ)
// =========================================================
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.js');
const courseRoutes = require('./routes/courses.js');
const enrollmentRoutes = require('./routes/enrollments.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', courseRoutes);
app.use('/api/enrollments', enrollmentRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: err.message || 'Internal Server Error' });
});

module.exports = app;`,
      },
    ],
  },
  {
    id: 'auth-rbac',
    badge: '🔐 Auth + JWT + Role (ดึง DB จริง)',
    title: 'ระบบสมาชิก, bcrypt, JWT & Role Guard (เชื่อมต่อฐานข้อมูลจริง)',
    summary: 'การเขียน Register / Login / Middleware ตรวจสิทธิ์ที่ดึงข้อมูลจากตาราง users ในฐานข้อมูลจริง พร้อมกั้นหน้า React ตาม Role',
    sections: [
      {
        step: 'Auth 1',
        file: 'backend/middleware/auth.js',
        title: '1. Middleware ตรวจ Token จากฐานข้อมูลจริง: verifyToken (401) & requireAdmin (403)',
        whenToUse: 'ใช้ตรวจบัตรผ่าน (JWT) และดึงข้อมูลผู้ใช้ล่าสุดจากตาราง users ใน DB',
        keyPoints: [
          '401 Unauthorized = ไม่มี Header Bearer, Token หมดอายุ/ถูกแก้ไข หรือไม่มี userId นี้ในฐานข้อมูลแล้ว',
          '403 Forbidden = ยืนยันตัวตนผ่านแล้ว แต่ req.user.role !== "admin"',
        ],
        code: `// ไฟล์ backend/middleware/auth.js
const jwt = require('jsonwebtoken');
const pool = require('../db/mysql.js'); // หรือใช้ store / prisma ตามที่โปรเจกต์ตั้งไว้
const secret = process.env.JWT_KEY || 'practice-only-change-this-key';

async function verifyToken(req, res, next) {
  const header = req.get('Authorization') || '';
  if (!header.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing token' });
  }
  const token = header.slice(7).trim();
  try {
    const payload = jwt.verify(token, secret);

    // ดึงข้อมูลผู้ใช้จากตาราง users ใน DB จริง
    const [rows] = await pool.execute(
      'SELECT id, userName, email, role FROM users WHERE id = ?',
      [payload.userId]
    );
    if (rows.length === 0) {
      return res.status(401).json({ message: 'User not found' });
    }

    const user = rows[0];
    req.user = {
      userId: user.id,
      id: user.id,
      userName: user.userName,
      email: user.email,
      role: user.role,
    };
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin only' });
  }
  next();
}

module.exports = { verifyToken, requireAdmin, secret };`,
      },
      {
        step: 'Auth 2',
        file: 'backend/routes/auth.js',
        title: '2. สมัครสมาชิก (INSERT ลง DB + bcrypt.hash) และเข้าสู่ระบบ (SELECT จาก DB + jwt.sign)',
        whenToUse: 'ใช้ทำระบบลงทะเบียนและล็อกอินด้วยฐานข้อมูลจริง',
        keyPoints: [
          'ตอนสมัคร: เช็กซ้ำใน DB ก่อน (SELECT id FROM users WHERE userName = ? OR email = ?) ถ้าเจอตอบ 409',
          'แฮชรหัสผ่านด้วย await bcrypt.hash(password, 10) แล้วค่อย INSERT ลงคอลัมน์ passwordHash',
          'ตอนล็อกอิน: ดึงแถวจาก DB มาตรวจรหัสผ่านด้วย await bcrypt.compare(password, user.passwordHash)',
        ],
        code: `// ไฟล์ backend/routes/auth.js (เชื่อมต่อตาราง users ใน MySQL จริง)
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../db/mysql.js');
const { verifyToken, secret } = require('../middleware/auth.js');

// POST /api/auth/register
router.post('/register', async (req, res, next) => {
  try {
    const { userName, email, password } = req.body || {};
    if (!userName?.trim() || !email?.includes('@') || !password || password.length < 6) {
      return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ถูกต้อง (รหัสผ่านอย่างน้อย 6 ตัวอักษร)' });
    }

    const cleanName = userName.trim();
    const cleanEmail = email.trim().toLowerCase();

    // 1. ตรวจชื่อผู้ใช้หรืออีเมลซ้ำใน DB
    const [existing] = await pool.execute(
      'SELECT id FROM users WHERE LOWER(userName) = LOWER(?) OR LOWER(email) = ?',
      [cleanName, cleanEmail]
    );
    if (existing.length > 0) {
      return res.status(409).json({ message: 'ชื่อผู้ใช้หรืออีเมลนี้ถูกใช้งานแล้ว' });
    }

    // 2. แฮชรหัสผ่านและบันทึกลง DB (บังคับ role เป็น student เสมอ)
    const passwordHash = await bcrypt.hash(password, 10);
    const [result] = await pool.execute(
      'INSERT INTO users (userName, email, passwordHash, role) VALUES (?, ?, ?, "student")',
      [cleanName, cleanEmail, passwordHash]
    );

    res.status(201).json({
      id: result.insertId,
      userName: cleanName,
      email: cleanEmail,
      role: 'student',
    });
  } catch (err) {
    next(err);
  }
});

// POST /api/auth/login
router.post('/login', async (req, res, next) => {
  try {
    const { userName, email, password } = req.body || {};
    const identifier = String(userName || email || '').trim();
    if (!identifier || !password) {
      return res.status(401).json({ message: 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน' });
    }

    // 1. ค้นหาผู้ใช้จากตาราง users
    const [rows] = await pool.execute(
      'SELECT * FROM users WHERE LOWER(userName) = LOWER(?) OR LOWER(email) = LOWER(?)',
      [identifier, identifier]
    );
    if (rows.length === 0) {
      return res.status(401).json({ message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' });
    }

    const user = rows[0];
    // 2. เปรียบเทียบรหัสผ่านด้วย bcrypt
    const matched = await bcrypt.compare(String(password), user.passwordHash);
    if (!matched) {
      return res.status(401).json({ message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' });
    }

    // 3. สร้าง JWT Token ส่งกลับพร้อมข้อมูลผู้ใช้ (ห้ามส่ง passwordHash กลับไป!)
    const token = jwt.sign({ userId: user.id, role: user.role }, secret, { expiresIn: '2h' });
    res.status(200).json({
      token,
      user: { id: user.id, userName: user.userName, email: user.email, role: user.role },
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/auth/me
router.get('/me', verifyToken, (req, res) => {
  res.status(200).json(req.user);
});

module.exports = router;`,
      },
      {
        step: 'Auth 3',
        file: 'frontend/pages/AdminPage.jsx & MyCoursesPage.jsx',
        title: '3. การกั้นสิทธิ์หน้าเว็บ React ตาม Role (Guest vs Student vs Admin)',
        whenToUse: 'ใช้ป้องกันไม่ให้คนทั่วไปหรือ Student เข้าถึงหน้าจัดการของ Admin',
        keyPoints: [
          'ถ้ายังไม่ล็อกอิน (!user) -> แจ้งให้ไปหน้า /login',
          'ถ้าล็อกอินแล้วแต่ user.role !== "admin" -> แสดงข้อความใน <p role="alert">ไม่มีสิทธิ์เข้าถึง (Admin เท่านั้น)</p>',
        ],
        code: `// 1. กั้นหน้าสำหรับสมาชิกที่ล็อกอินแล้ว (เช่น MyCoursesPage.jsx)
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

// 2. กั้นหน้าเฉพาะผู้ดูแลระบบ (เช่น AdminPage.jsx)
if (!user || user.role !== 'admin') {
  return (
    <section>
      <h1>จัดการคอร์สเรียน (Admin)</h1>
      <p role="alert">ไม่มีสิทธิ์เข้าถึง (Admin เท่านั้น)</p>
    </section>
  );
}`,
      },
    ],
  },
  {
    id: 'react-hooks',
    badge: '🪝 React Hooks ครบทุกตัว',
    title: 'สรุป React Hooks & Router Hooks ทั้งหมด (useState, useEffect, useRef, useContext, useMemo, useReducer, useParams, useNavigate)',
    summary: 'คู่มือรวมทุก Hook ที่ต้องใช้ใน React และ React Router พร้อมแพตเทิร์นการอัปเดต Array/Object State แบบไม่พัง',
    sections: [
      {
        step: 'Hook 1',
        file: 'useState (State พื้นฐาน, Object, Array)',
        title: 'useState — การเก็บและอัปเดตค่าตัวเลข ข้อความ Object และ Array (เพิ่ม/แก้/ลบ)',
        whenToUse: 'เมื่อต้องการให้หน้าจอ React วาดใหม่ (re-render) ทันทีที่ข้อมูลเปลี่ยน',
        keyPoints: [
          'ห้ามแก้ตัวแปร state โดยตรง (เช่น ห้าม items.push()) ต้องสร้างค่าใหม่ส่งเข้าฟังก์ชัน set... เสมอ',
          'ถ้าค่าใหม่คำนวณจากค่าก่อนหน้า ให้ใช้ Functional Update: setCount(prev => prev + 1)',
          'สำหรับ Array: เพิ่มใช้ [...prev, newItem], แก้ไขใช้ prev.map(...), ลบใช้ prev.filter(...)',
        ],
        code: `import { useState } from 'react';

// 1. State พื้นฐาน (ตัวเลข / ข้อความ / Boolean)
const [count, setCount] = useState(0);
const [keyword, setKeyword] = useState('');
const [loading, setLoading] = useState(false);

// เพิ่ม/ลดตัวเลขโดยไม่ติดลบ
const increment = () => setCount(prev => prev + 1);
const decrement = () => setCount(prev => Math.max(0, prev - 1));

// 2. State แบบ Object (เช่น ข้อมูลฟอร์ม) -> ใช้ Spread (...prev)
const [form, setForm] = useState({ name: '', price: '' });
const updateField = (field, value) => {
  setForm(prev => ({ ...prev, [field]: value }));
};

// 3. State แบบ Array (เพิ่ม / แก้ไข / ลบ แบบ Immutable)
const [items, setItems] = useState([{ id: 1, name: 'ชาไทย', done: false }]);

// เพิ่มรายการต่อท้าย
const addItem = (newItem) => setItems(prev => [...prev, newItem]);

// แก้ไขรายการตาม id
const toggleItem = (id) =>
  setItems(prev => prev.map(item => (item.id === id ? { ...item, done: !item.done } : item)));

// ลบรายการตาม id
const removeItem = (id) =>
  setItems(prev => prev.filter(item => item.id !== id));`,
      },
      {
        step: 'Hook 2',
        file: 'useEffect (โหลด API & Dependency Array)',
        title: 'useEffect — การรันโค้ดเมื่อเปิดหน้าเว็บ เมื่อตัวแปรเปลี่ยน และการทำ Cleanup',
        whenToUse: 'ใช้ดึงข้อมูลจาก API (fetch / axios) ตอนเปิดหน้าเว็บ หรือสั่งโหลดใหม่เมื่อคำค้นหา/พารามิเตอร์เปลี่ยน',
        keyPoints: [
          'ใส่ [] (Array ว่าง) -> รันแค่ครั้งเดียวตอนเปิดหน้า Component ครั้งแรก',
          'ใส่ [keyword, categoryId] -> รันตอนเริ่ม และรันใหม่ทุกครั้งที่ keyword หรือ categoryId เปลี่ยนค่า',
          'return () => { ... } คือฟังก์ชัน Cleanup รันก่อนออกจากหน้า',
        ],
        code: `import { useState, useEffect } from 'react';
import { api } from '../services/api';

export default function CourseListDemo() {
  const [courses, setCourses] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;

    async function fetchCourses() {
      setLoading(true);
      setError('');
      try {
        const data = await api.courses(keyword ? { keyword } : {});
        if (!ignore) setCourses(data);
      } catch (err) {
        if (!ignore) setError(err.response?.data?.message || 'โหลดข้อมูลไม่สำเร็จ');
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchCourses();
    return () => { ignore = true; };
  }, [keyword]); // โหลดใหม่ทุกครั้งที่ keyword เปลี่ยน

  return null;
}`,
      },
      {
        step: 'Hook 3',
        file: 'useRef (อ้างอิง DOM / Focus ช่องกรอก)',
        title: 'useRef — การสั่ง Focus ช่อง Input และเก็บค่าโดยไม่ทำให้หน้า Re-render',
        whenToUse: 'เมื่อต้องการสั่ง inputRef.current.focus() หลังจากกดปุ่มหรือส่งฟอร์มเสร็จ',
        keyPoints: [
          'สร้างด้วย const inputRef = useRef(null) แล้วผูกเข้ากับแท็ก JSX ด้วย ref={inputRef}',
          'เข้าถึง DOM จริงผ่าน inputRef.current?.focus()',
        ],
        code: `import { useRef } from 'react';

export default function SearchBox() {
  const inputRef = useRef(null);

  return (
    <div>
      <label>
        ชื่อ
        <input ref={inputRef} type="text" placeholder="กดปุ่มเพื่อโฟกัสช่องนี้" />
      </label>
      <button type="button" onClick={() => inputRef.current?.focus()}>
        โฟกัสชื่อ
      </button>
    </div>
  );
}`,
      },
      {
        step: 'Hook 4',
        file: 'createContext & useContext (แชร์ข้อมูลข้ามหน้า)',
        title: 'createContext & useContext — การแชร์ข้อมูล User / Theme ให้ทุกหน้าเรียกใช้ได้ทันที',
        whenToUse: 'เมื่อหลายหน้าต้องใช้ข้อมูลชุดเดียวกัน เช่น user ที่ล็อกอินอยู่ หรือธีมของแอปโดยไม่ต้องส่ง props หลายชั้น',
        keyPoints: [
          'สร้างด้วย createContext(null) -> ห่อด้วย <Context.Provider value={{ ... }}> -> อ่านค่าด้วย useContext(Context)',
        ],
        code: `import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const logout = () => {
    sessionStorage.removeItem('practice-token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}`,
      },
      {
        step: 'Hook 5',
        file: 'useMemo & useReducer',
        title: 'useMemo & useReducer — การจำค่าคำนวณยอดรวม และการจัดการ State แบบ Action',
        whenToUse: 'ใช้ useMemo คำนวณผลรวม/กรองข้อมูล และใช้ useReducer จัดการ State ที่มีหลายคำสั่ง',
        keyPoints: [
          'useMemo(() => ..., [items]) คำนวณใหม่เฉพาะเมื่อ items เปลี่ยน',
          'useReducer(reducer, initialState) คืนค่า [state, dispatch]',
        ],
        code: `import { useMemo, useReducer } from 'react';

// 1. useMemo คำนวณยอดรวมเฉพาะรายการที่ active
const totalFee = useMemo(() => {
  return enrollments
    .filter(item => item.status === 'active')
    .reduce((sum, item) => sum + item.price, 0);
}, [enrollments]);

// 2. useReducer จัดการตะกร้าสินค้า
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': return [...state, action.item];
    case 'REMOVE': return state.filter(i => i.id !== action.id);
    case 'CLEAR': return [];
    default: return state;
  }
}
const [cart, dispatch] = useReducer(cartReducer, []);`,
      },
      {
        step: 'Hook 6',
        file: 'useParams, useNavigate, useLocation, useSearchParams',
        title: 'React Router Hooks — การอ่าน :id จาก URL และการสั่งเปลี่ยนหน้าด้วยโค้ด',
        whenToUse: 'ใช้ในเว็บหลายหน้าด้วย react-router-dom',
        keyPoints: [
          'const { id } = useParams() อ่านค่า :id จาก Route เช่น /courses/:id',
          'const navigate = useNavigate() ใช้สั่ง navigate("/") หลังล็อกอินหรือบันทึกข้อมูลสำเร็จ',
        ],
        code: `import { useParams, useNavigate, useLocation, useSearchParams } from 'react-router-dom';

export default function CourseDetailPage() {
  const { id } = useParams(); // ได้ค่าเป็น String เช่น "1"
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <section>
      <h1>คอร์สรหัส #{Number(id)}</h1>
      <button type="button" onClick={() => navigate('/my-courses')}>
        ไปหน้าคอร์สของฉัน
      </button>
    </section>
  );
}`,
      },
    ],
  },
  {
    id: 'router-axios',
    badge: '🌐 React หลายหน้า + Axios ต่อ API',
    title: 'การทำเว็บหลายหน้า (React Router) & การเขียน Axios Service ต่อกับ API',
    summary: 'การตั้งค่า BrowserRouter 4 หน้า, การเขียน Axios แนบ Bearer Token และการผูก Controlled Form เข้ากับ API',
    sections: [
      {
        step: 'Frontend 1',
        file: 'frontend/services/api.js',
        title: '1. สร้างไฟล์ Axios Service รวมทุกคำสั่งยิง API พร้อมแนบ Token',
        whenToUse: 'เขียนไว้ที่เดียวเพื่อให้ทุกหน้าใน React เรียกใช้งานได้สะอาดและไม่เขียน URL ซ้ำ',
        keyPoints: [
          'axios.get(url, { params, headers }) และ axios.delete(url, { headers }) รับ config เป็นพารามิเตอร์ตัวที่ 2',
          'ส่วน axios.post(url, body, { headers }), axios.put(...) และ axios.patch(...) รับ body เป็นตัวที่ 2 และ config เป็นตัวที่ 3!',
        ],
        code: `// ไฟล์ frontend/services/api.js
import axios from 'axios';

export const TOKEN_KEY = 'practice-token';

export function authHeaders() {
  const token = sessionStorage.getItem(TOKEN_KEY);
  return token ? { headers: { Authorization: 'Bearer ' + token } } : {};
}

export const api = {
  // Auth
  login: async (data) => (await axios.post('/api/auth/login', data)).data,
  register: async (data) => (await axios.post('/api/auth/register', data)).data,
  me: async () => (await axios.get('/api/auth/me', authHeaders())).data,

  // Public Courses & Categories
  categories: async () => (await axios.get('/api/categories')).data,
  courses: async (params = {}) => (await axios.get('/api/courses', { params })).data,

  // Student Enrollments (แนบ Token)
  myEnrollments: async () => (await axios.get('/api/enrollments/my', authHeaders())).data,
  enroll: async (courseId) => (await axios.post('/api/enrollments', { courseId }, authHeaders())).data,
  cancelEnrollment: async (id) => (await axios.patch('/api/enrollments/' + id + '/cancel', {}, authHeaders())).data,

  // Admin Course CRUD (แนบ Token)
  createCourse: async (data) => (await axios.post('/api/courses', data, authHeaders())).data,
  updateCourse: async (id, data) => (await axios.put('/api/courses/' + id, data, authHeaders())).data,
  deleteCourse: async (id) => (await axios.delete('/api/courses/' + id, authHeaders())).data,
};`,
      },
      {
        step: 'Frontend 2',
        file: 'frontend/App.jsx',
        title: '2. โครงสร้างเว็บหลายหน้าด้วย BrowserRouter, Navbar และ Routes',
        whenToUse: 'ใช้จัดโครงสร้างหลักของแอปที่มีหลายหน้าและแสดงปุ่มตามสถานะการล็อกอิน',
        keyPoints: [
          'ห่อ <BrowserRouter> และ <AuthProvider> ไว้ชั้นนอกสุด',
          'ใช้ <Link to="..."> สำหรับสร้างเมนูนำทางโดยไม่รีโหลดหน้าเว็บ',
        ],
        code: `// ไฟล์ frontend/App.jsx
import React from 'react';
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
      <nav>
        <Link to="/">คอร์สเรียนทั้งหมด</Link>
        <Link to="/my-courses">คอร์สของฉัน</Link>
        <Link to="/admin">จัดการคอร์ส (Admin)</Link>
        {user ? (
          <span>
            {user.userName} ({user.role})
            <button type="button" onClick={logout}>ออกจากระบบ</button>
          </span>
        ) : (
          <Link to="/login">เข้าสู่ระบบ / สมัครสมาชิก</Link>
        )}
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
}`,
      },
      {
        step: 'Frontend 3',
        file: 'frontend/pages/AdminPage.jsx',
        title: '3. Controlled Form สำหรับเพิ่มและแก้ไขข้อมูล (Create & Edit ในฟอร์มเดียวกัน)',
        whenToUse: 'เมื่อหน้าจัดการต้องทั้งเพิ่มรายการใหม่ (POST) และกดปุ่ม "แก้ไข" เพื่อดึงค่าเดิมมาแก้ (PUT)',
        keyPoints: [
          'ใช้ state editingId เก็บ id ที่กำลังแก้ (ถ้าเป็น null แปลว่ากำลังเพิ่มใหม่)',
          'อย่าลืมแปลงค่าตัวเลขด้วย Number(...) ก่อนส่งเข้า api.createCourse หรือ api.updateCourse',
        ],
        code: `const [editingId, setEditingId] = useState(null);
const [code, setCode] = useState('');
const [title, setTitle] = useState('');
const [categoryId, setCategoryId] = useState('1');
const [price, setPrice] = useState('');
const [seats, setSeats] = useState('');
const [error, setError] = useState('');

async function handleSubmit(e) {
  e.preventDefault();
  setError('');
  const payload = {
    code: code.trim().toUpperCase(),
    title: title.trim(),
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
    // ล้างฟอร์มและโหลดตารางใหม่
    setEditingId(null);
    setCode('');
    setTitle('');
    setPrice('');
    setSeats('');
    await loadCourses();
  } catch (err) {
    setError(err.response?.data?.message || 'บันทึกไม่สำเร็จ');
  }
}`,
      },
    ],
  },
  {
    id: 'node-es6',
    badge: '📦 Node.js & ES6+ พื้นฐาน',
    title: 'การแยกโมดูล CommonJS, Array Methods (map/filter/reduce) & ไฟล์ JSON',
    summary: 'พื้นฐานการแยกไฟล์ require/module.exports, การคำนวณด้วย Array Methods และการอ่านเขียนไฟล์ด้วย fs/promises',
    sections: [
      {
        step: 'Node 1',
        file: 'backend/lib/prices.js',
        title: 'CommonJS (require / module.exports) vs ES Modules (import / export)',
        whenToUse: 'ใช้แยกฟังก์ชันคำนวณหรือตัวจัดการข้อมูลออกจากไฟล์ Route',
        keyPoints: [
          'Backend (.js) ใช้ module.exports / require()',
          'Frontend (.jsx) ใช้ export default / import',
        ],
        code: `// ไฟล์ backend/lib/prices.js
exports.total = (items = []) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

// ไฟล์ backend/app.js
const { total } = require('./lib/prices.js');`,
      },
      {
        step: 'Node 2',
        file: 'Array Methods',
        title: 'สูตรใช้ map, filter, reduce, find, some สำหรับจัดการข้อมูล',
        whenToUse: 'ใช้ค้นหา กรอง คำนวณผลรวม หรือเช็กข้อมูลซ้ำ',
        keyPoints: [
          'map = แปลงทุกตัว, filter = คัดหลายตัว, find = หาตัวเดียว, some = เช็กว่ามีไหม (true/false), reduce = รวมเป็นค่าเดียว',
        ],
        code: `// 1. map: เติม availableSeats
const enriched = courses.map(c => ({ ...c, availableSeats: c.seats - c.enrolled }));

// 2. filter: ค้นหาตาม keyword
const matched = courses.filter(c => c.title.toLowerCase().includes(keyword.toLowerCase()));

// 3. find: หาตาม id
const item = courses.find(c => c.id === Number(req.params.id));

// 4. some: เช็กซ้ำ
const exists = users.some(u => u.email.toLowerCase() === email.toLowerCase());

// 5. reduce: รวมราคา
const sumPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);`,
      },
      {
        step: 'Node 3',
        file: 'node:fs/promises & node:path',
        title: 'การอ่านและเขียนไฟล์ JSON ด้วย fs/promises และ path.join(__dirname, ...)',
        whenToUse: 'เมื่อโจทย์เก็บข้อมูลในไฟล์ .json บนเครื่องเซิร์ฟเวอร์',
        keyPoints: [
          'ใช้ path.join(__dirname, "../data/menu.json") เสมอเพื่อป้องกันปัญหาหาไฟล์ไม่เจอ',
        ],
        code: `const fs = require('node:fs/promises');
const path = require('node:path');
const file = path.join(__dirname, '../data/menu.json');

async function readMenu() {
  const text = await fs.readFile(file, 'utf8');
  return JSON.parse(text);
}

async function writeMenu(data) {
  await fs.writeFile(file, JSON.stringify(data, null, 2), 'utf8');
}`,
      },
    ],
  },
  {
    id: 'status-and-rules',
    badge: '🎯 ตาราง HTTP Status & กฎข้อสอบ',
    title: 'สรุป HTTP Status Codes (200/201/400/401/403/404/409) & สูตรเช็กเงื่อนไขข้อสอบ',
    summary: 'ตารางเทียบ Status Code ทุกกรณี และสูตรเช็กเจ้าของข้อมูล / การยกเลิกคืนสต็อกแบบไม่คืนซ้ำ',
    sections: [
      {
        step: 'Rule 1',
        file: 'HTTP Status Codes',
        title: 'ตารางเลือกใช้ HTTP Status Code ให้ตรงกับชุดตรวจข้อสอบ',
        whenToUse: 'เช็กทุกครั้งก่อนส่ง res.status(...).json(...)',
        keyPoints: [
          '200 OK = ดึงข้อมูล (GET), แก้ไข (PUT/PATCH), หรือลบ (DELETE) สำเร็จ',
          '201 Created = สร้างข้อมูลใหม่สำเร็จ (POST เช่น สมัครสมาชิก, เพิ่มคอร์ส, ลงทะเบียน)',
          '400 Bad Request = ข้อมูลว่าง, รูปแบบผิด, ราคาติดลบ, รหัสผ่านสั้นเกินไป',
          '401 Unauthorized = ไม่ได้ส่ง Token, Token ผิด/หมดอายุ, หรือ Login รหัสผ่านผิด',
          '403 Forbidden = ล็อกอินแล้ว แต่ Role ไม่ใช่ Admin หรือพยายามแก้/ลบข้อมูลของคนอื่น',
          '404 Not Found = ไม่พบ ID ของข้อมูลที่ระบุ',
          '409 Conflict = ข้อมูลซ้ำ (อีเมลซ้ำ/รหัสวิชาซ้ำ/ลงทะเบียนซ้ำ) หรือขัดแย้งกับสถานะ (ที่นั่งเต็ม/สต็อกหมด/ยกเลิกซ้ำ/ลบคอร์สที่มีคนเรียนอยู่)',
        ],
        code: `// ลำดับการเช็กใน Route แนะนำให้เรียงตามนี้:
// 1. ตรวจ Token / สิทธิ์ (401 -> 403)
// 2. ตรวจว่ามีรายการอยู่จริงไหม (404 Not Found)
// 3. ตรวจรูปแบบข้อมูล Input (400 Bad Request)
// 4. ตรวจข้อมูลซ้ำ / โควตาเต็ม / สถานะขัดแย้ง (409 Conflict)
// 5. บันทึกข้อมูลและส่งกลับ (201 Created หรือ 200 OK)`,
      },
      {
        step: 'Rule 2',
        file: 'Owner or Admin + Cancel Refund',
        title: 'สูตรตรวจสิทธิ์ "เจ้าของหรือ Admin" และยกเลิกคืนที่นั่งครั้งเดียว',
        whenToUse: 'ใช้ใน PATCH /api/enrollments/:id/cancel หรือ DELETE รีวิว',
        keyPoints: [
          'ถ้า enrollment.userId !== req.user.userId && req.user.role !== "admin" -> ตอบ 403',
          'ถ้า enrollment.status === "cancelled" อยู่แล้ว -> ตอบ 409 และห้ามคืนที่นั่งซ้ำเด็ดขาด',
        ],
        code: `if (enrollment.userId !== req.user.userId && req.user.role !== 'admin') {
  return res.status(403).json({ message: 'Forbidden: Owner or admin only' });
}
if (enrollment.status === 'cancelled') {
  return res.status(409).json({ message: 'Already cancelled' });
}
enrollment.status = 'cancelled';
course.enrolled = Math.max(0, course.enrolled - 1);`,
      },
    ],
  },
];
