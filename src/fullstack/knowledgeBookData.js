/**
 * คลังสมุดโค้ดและสรุปความรู้ Full Stack (Node.js + Express + Database/Prisma + React + Router + Auth/Role)
 * จัดหมวดหมู่ตามเนื้อหาเรียนและรูปแบบข้อสอบปลายภาค พร้อมโค้ดตัวอย่างที่คัดลอกไปปรับใช้ได้ทันที
 */

export const knowledgeCategories = [
  {
    id: 'node-es6',
    badge: 'บทที่ 1 · Node & ES6+',
    title: 'Node.js, โมดูล, Array Methods & ไฟล์ JSON',
    summary: 'พื้นฐานการแยกไฟล์ CommonJS vs ES Module, การคำนวณด้วย map/filter/reduce และการอ่านเขียนไฟล์ด้วย fs/promises',
    sections: [
      {
        title: '1.1 การแยกไฟล์โมดูล: CommonJS (Backend .js) vs ES Modules (Frontend .jsx)',
        whenToUse: 'ใช้เมื่อต้องการแยกฟังก์ชันคำนวณ ฐานข้อมูล หรือ Route ออกจากไฟล์หลัก',
        keyPoints: [
          'ฝั่ง Backend (Node/Express) ในคอร์สนี้ใช้ CommonJS: ส่งออกด้วย module.exports หรือ exports.fn และนำเข้าด้วย require("./path.js")',
          'ฝั่ง Frontend (React/Vite) ใช้ ES Modules: ส่งออกด้วย export default หรือ export const และนำเข้าด้วย import ... from "./path"',
        ],
        code: `// ==========================================
// 1. ฝั่ง Backend (CommonJS - ไฟล์ .js)
// ==========================================
// ไฟล์ backend/lib/prices.js
exports.total = (items = []) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

// หรือส่งออกหลายฟังก์ชันพร้อมกัน
module.exports = {
  total: (items = []) => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
};

// ไฟล์ backend/app.js (การนำเข้ามาใช้)
const { total } = require('./lib/prices.js');

// ==========================================
// 2. ฝั่ง Frontend (ES Modules - ไฟล์ .js / .jsx)
// ==========================================
// ไฟล์ frontend/services/api.js
export const API_URL = '/api';
export default function formatPrice(n) {
  return Number(n).toLocaleString() + ' บาท';
}

// ไฟล์ frontend/App.jsx (การนำเข้ามาใช้)
import formatPrice, { API_URL } from './services/api';`,
      },
      {
        title: '1.2 ES6 Array Methods ที่ใช้บ่อยที่สุดในการสอบ (map, filter, reduce, find, some)',
        whenToUse: 'ใช้ค้นหา คัดกรอง แปลงข้อมูล หรือคำนวณผลรวมทั้งใน API และหน้า React',
        keyPoints: [
          'map() คืน Array ใหม่ที่มีจำนวนเท่าเดิม (นิยมใช้แปลงข้อมูลหรือวาด JSX)',
          'filter() คืน Array ใหม่เฉพาะตัวที่เงื่อนไขเป็น true (ใช้ค้นหาหรือลบรายการ)',
          'reduce((sum, item) => ..., 0) รวมค่าทั้ง Array เป็นค่าเดียว (อย่าลืมใส่ค่าเริ่มต้น 0 เสมอ)',
          'find() คืน Object ตัวแรกที่เจอ (ถ้าไม่เจอได้ undefined) ส่วน some() คืน true/false (ใช้เช็กข้อมูลซ้ำ)',
        ],
        code: `const courses = [
  { id: 1, code: 'CS301', title: 'Full Stack React', price: 1500, seats: 3, enrolled: 1 },
  { id: 2, code: 'AI202', title: 'Machine Learning', price: 2200, seats: 2, enrolled: 2 },
];

// 1. map: เติมฟิลด์คำนวณที่นั่งว่าง (availableSeats) โดยไม่แก้ของเดิม
const enriched = courses.map(c => ({
  ...c,
  availableSeats: Math.max(0, c.seats - c.enrolled),
}));

// 2. filter: ค้นหาตาม keyword (ไม่สนตัวพิมพ์เล็ก-ใหญ่)
const keyword = 'react'.toLowerCase();
const matched = courses.filter(c =>
  c.title.toLowerCase().includes(keyword) || c.code.toLowerCase().includes(keyword)
);

// 3. find: ค้นหารายการตาม ID (อย่าลืมแปลง req.params.id เป็น Number)
const target = courses.find(c => c.id === Number(req.params.id));

// 4. some: เช็กว่ามีรหัสวิชาซ้ำหรือไม่
const isDuplicate = courses.some(c => c.code.toUpperCase() === newCode.trim().toUpperCase());

// 5. reduce: คำนวณราคารวมทั้งหมด
const totalPrice = courses.reduce((sum, c) => sum + c.price, 0);`,
      },
      {
        title: '1.3 Async / Await, Promise Delay และการอ่าน-เขียนไฟล์ JSON (fs/promises)',
        whenToUse: 'ใช้เมื่อต้องหน่วงเวลาจำลอง หรืออ่าน/เขียนไฟล์ข้อมูล .json บนเซิร์ฟเวอร์',
        keyPoints: [
          'ใช้ path.join(__dirname, "../data/menu.json") เสมอ เพื่อให้หาไฟล์เจอไม่ว่าจะสั่งรันจากโฟลเดอร์ไหน',
          'fs.readFile(filePath, "utf8") คืนค่าเป็นข้อความ String ต้องแปลงด้วย JSON.parse() ก่อนใช้งาน',
        ],
        code: `const fs = require('node:fs/promises');
const path = require('node:path');

// 1. การสร้างฟังก์ชันหน่วงเวลาด้วย Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitAndDouble(value) {
  await delay(40);
  return value * 2;
}

// 2. การอ่านไฟล์ JSON อย่างปลอดภัย
const dataFile = path.join(__dirname, '../data/menu.json');

async function readMenu() {
  const text = await fs.readFile(dataFile, 'utf8');
  return JSON.parse(text);
}

// 3. การเขียนทับไฟล์ JSON
async function saveMenu(items) {
  const jsonText = JSON.stringify(items, null, 2);
  await fs.writeFile(dataFile, jsonText, 'utf8');
}`,
      },
    ],
  },
  {
    id: 'express-api',
    badge: 'บทที่ 2 · Express & REST API',
    title: 'Express.js, Routing, Params/Query & HTTP Status',
    summary: 'การตั้งค่าเซิร์ฟเวอร์ Express, การรับค่าจาก URL/Body, การแยก Router/Controller และการส่ง Status Code ให้ตรงเกณฑ์ตรวจ',
    sections: [
      {
        title: '2.1 โครงสร้าง Express App มาตรฐาน (app.js & server.js)',
        whenToUse: 'ไฟล์เริ่มต้นของระบบ Backend ทุกโปรเจกต์',
        keyPoints: [
          'ต้องใส่ app.use(cors()) และ app.use(express.json()) ก่อนประกาศ Route เสมอ มิฉะนั้น req.body จะเป็น undefined',
          'แยก app.js (ส่งออก module.exports = app) ออกจาก server.js (ที่สั่ง app.listen) เพื่อให้ชุดตรวจอัตโนมัติ import app ไปทดสอบได้',
        ],
        code: `// ไฟล์ backend/app.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.js');
const courseRoutes = require('./routes/courses.js');

const app = express();

// 1. Global Middleware
app.use(cors());
app.use(express.json());

// 2. Health Check & Custom Header Middleware
app.use((req, res, next) => {
  res.set('X-Practice', 'ready');
  next();
});
app.get('/api/health', (req, res) => res.json({ ok: true }));

// 3. Mount Routers
app.use('/api/auth', authRoutes);
app.use('/api', courseRoutes);

module.exports = app;

// ------------------------------------------
// ไฟล์ backend/server.js
const app = require('./app.js');
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => console.log('API ready on port ' + port));`,
      },
      {
        title: '2.2 การรับค่า req.params, req.query, req.body และ req.get()',
        whenToUse: 'ใช้ดึงข้อมูลที่ผู้ใช้ส่งมาจาก URL, Query String, JSON Body หรือ HTTP Header',
        keyPoints: [
          'ค่าจาก req.params และ req.query เป็น String เสมอ! หากต้องเทียบกับ id หรือคำนวณตัวเลข ต้องแปลงด้วย Number() ก่อน',
          'ตรวจความถูกต้องของตัวเลขด้วย Number.isFinite(n) หรือ Number.isInteger(n)',
        ],
        code: `// ตัวอย่าง URL: GET /api/courses/12?keyword=react&categoryId=2
router.get('/courses/:id', (req, res) => {
  // 1. Path Parameter (:id) -> แปลงเป็นตัวเลข
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: 'Invalid ID' });
  }

  // 2. Query Parameter (?keyword=...&categoryId=...)
  const keyword = String(req.query.keyword || '').trim().toLowerCase();
  const categoryId = req.query.categoryId ? Number(req.query.categoryId) : null;

  // 3. Request Header (เช่น Authorization หรือ X-Booking-Code)
  const authHeader = req.get('Authorization') || '';

  res.json({ id, keyword, categoryId, hasAuth: authHeader.startsWith('Bearer ') });
});`,
      },
      {
        title: '2.3 คัมภีร์ HTTP Status Codes ที่ใช้ตรวจข้อสอบ',
        whenToUse: 'ใช้เลือก res.status(...) ให้ตรงกับสถานการณ์ที่โจทย์กำหนด',
        keyPoints: [
          '200 OK = ดึงข้อมูลสำเร็จ (GET) หรือแก้ไข/ลบสำเร็จ (PUT / PATCH / DELETE)',
          '201 Created = สร้างข้อมูลใหม่สำเร็จ (POST เช่น สมัครสมาชิก, เพิ่มสินค้า, สร้างใบจอง)',
          '400 Bad Request = ข้อมูลที่ส่งมาไม่ครบ ผิดรูปแบบ ราคาติดลบ หรือรหัสผ่านสั้นเกินไป',
          '401 Unauthorized = ยังไม่ได้ล็อกอิน ไม่ส่ง Token ส่ง Token ผิด หรือรหัสผ่านตอน Login ไม่ถูกต้อง',
          '403 Forbidden = ล็อกอินแล้ว แต่ไม่มีสิทธิ์ (เช่น Student จะเข้า Route ของ Admin หรือจะลบข้อมูลของคนอื่น)',
          '404 Not Found = ไม่พบข้อมูลตาม ID ที่ระบุ',
          '409 Conflict = ข้อมูลซ้ำ (อีเมลซ้ำ/รหัสวิชาซ้ำ/รีวิวซ้ำ) หรือขัดแย้งกับสถานะปัจจุบัน (ที่นั่งเต็ม/สต็อกไม่พอ/ยกเลิกซ้ำ)',
        ],
        code: `// รูปแบบการวางลำดับ Guard Clauses ใน Controller/Route (แนะนำให้ตรวจจากบนลงล่าง)
router.post('/enrollments', verifyToken, (req, res) => {
  const courseId = Number(req.body?.courseId);

  // 1. ตรวจรูปแบบข้อมูล (400 Bad Request)
  if (!Number.isInteger(courseId) || courseId <= 0) {
    return res.status(400).json({ message: 'Invalid courseId' });
  }

  // 2. ตรวจว่ามีข้อมูลอยู่จริงไหม (404 Not Found)
  const course = store.courses.find(c => c.id === courseId);
  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }

  // 3. ตรวจความขัดแย้งทางธุรกิจ / ซ้ำ / สต็อกเต็ม (409 Conflict)
  const alreadyEnrolled = store.enrollments.some(
    e => e.userId === req.user.userId && e.courseId === courseId && e.status === 'active'
  );
  if (alreadyEnrolled) {
    return res.status(409).json({ message: 'Already enrolled' });
  }
  if (course.enrolled >= course.seats) {
    return res.status(409).json({ message: 'Course is full' });
  }

  // 4. เมื่อผ่านทุกด่าน จึงเปลี่ยนข้อมูลและตอบ 201 Created
  course.enrolled += 1;
  const created = { id: store.nextEnrollmentId++, userId: req.user.userId, courseId, status: 'active' };
  store.enrollments.push(created);
  return res.status(201).json(created);
});`,
      },
      {
        title: '2.4 การเขียน REST CRUD ครบ 5 ฟังก์ชัน (List, Get, Create, Update, Remove)',
        whenToUse: 'โครงสร้างมาตรฐานสำหรับจัดการข้อมูล (เช่น ลูกค้า สินค้า เมนูอาหาร หรือคอร์สเรียน)',
        keyPoints: [
          'แยกการตรวจความถูกต้องของข้อมูล (Validation) เป็นฟังก์ชันช่วยเพื่อใช้ซ้ำได้ทั้งตอน POST และ PUT',
          'ตอน DELETE หากใช้ Array ให้ใช้ findIndex + splice หรือ filter',
        ],
        code: `let items = [{ id: 1, name: 'Keyboard', price: 990 }];
let nextId = 2;

// GET /api/items?keyword=
exports.list = (req, res) => {
  const kw = String(req.query.keyword || '').toLowerCase();
  res.json(items.filter(i => i.name.toLowerCase().includes(kw)));
};

// GET /api/items/:id
exports.get = (req, res) => {
  const item = items.find(i => i.id === Number(req.params.id));
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
};

// POST /api/items
exports.create = (req, res) => {
  const { name, price } = req.body || {};
  if (!name?.trim() || typeof price !== 'number' || price < 0) {
    return res.status(400).json({ message: 'Invalid input' });
  }
  const created = { id: nextId++, name: name.trim(), price };
  items.push(created);
  res.status(201).json(created);
};

// PUT /api/items/:id
exports.update = (req, res) => {
  const item = items.find(i => i.id === Number(req.params.id));
  if (!item) return res.status(404).json({ message: 'Not found' });
  const { name, price } = req.body || {};
  if (!name?.trim() || typeof price !== 'number' || price < 0) {
    return res.status(400).json({ message: 'Invalid input' });
  }
  item.name = name.trim();
  item.price = price;
  res.status(200).json(item);
};

// DELETE /api/items/:id
exports.remove = (req, res) => {
  const index = items.findIndex(i => i.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Not found' });
  items.splice(index, 1);
  res.status(200).json({ message: 'Deleted' });
};`,
      },
    ],
  },
  {
    id: 'database-orm',
    badge: 'บทที่ 3 · SQL & Prisma ORM',
    title: 'ฐานข้อมูล SQL (MySQL2 / SQLite) & Prisma ORM',
    summary: 'การเขียนคำสั่ง SQL แบบ Parameterized ป้องกัน SQL Injection และการจัดการฐานข้อมูลด้วย Prisma Client',
    sections: [
      {
        title: '3.1 การใช้ Parameterized Query (?) ป้องกัน SQL Injection',
        whenToUse: 'เมื่อเขียนคำสั่ง SQL ดิบทั้งใน mysql2/promise หรือ sql.js',
        keyPoints: [
          'ห้ามนำตัวแปรจากผู้ใช้มาต่อสตริงด้วย + หรือ `${keyword}` ในคำสั่ง SQL เด็ดขาด',
          'ให้ใช้เครื่องหมาย ? ใน SQL แล้วส่งค่าเป็น Array แยกต่างหากเสมอ',
        ],
        code: `// ==========================================
// แบบที่ 1: ใช้ mysql2/promise (เชื่อมต่อ MySQL จริง / XAMPP)
// ==========================================
const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'skillhub_exam',
});

async function searchCoursesMySql(keyword = '') {
  const [rows] = await pool.execute(
    'SELECT * FROM courses WHERE title LIKE ? OR code LIKE ? ORDER BY id ASC',
    ['%' + keyword + '%', '%' + keyword + '%']
  );
  return rows;
}

// ==========================================
// แบบที่ 2: ใช้ sql.js (SQLite ในหน่วยความจำของห้องฝึกเว็บ)
// ==========================================
async function searchCustomersSqlite(db, keyword = '') {
  const statement = db.prepare('SELECT * FROM customers WHERE name LIKE ? ORDER BY id');
  try {
    statement.bind(['%' + keyword + '%']);
    const rows = [];
    while (statement.step()) {
      rows.push(statement.getAsObject());
    }
    return rows;
  } finally {
    statement.free(); // ต้องคืนหน่วยความจำใน finally เสมอ
  }
}`,
      },
      {
        title: '3.2 โครงสร้างไฟล์ .sql (CREATE TABLE + FOREIGN KEY + INSERT)',
        whenToUse: 'ใช้ออกแบบตารางฐานข้อมูลหรือตรวจสอบไฟล์ .sql ก่อน Import เข้า phpMyAdmin',
        keyPoints: [
          'ตารางที่มี FOREIGN KEY (เช่น enrollments อ้างอิง courses) ต้องสร้างหลังตารางแม่ และตอน DROP TABLE ต้องลบตารางลูกก่อนเสมอ',
        ],
        code: `CREATE DATABASE IF NOT EXISTS skillhub_exam CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE skillhub_exam;

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
  CONSTRAINT fk_courses_category FOREIGN KEY (categoryId) REFERENCES categories(id)
);

INSERT INTO categories (id, name) VALUES (1, 'Web Development'), (2, 'Data & AI');
INSERT INTO courses (code, title, categoryId, price, seats, enrolled)
VALUES ('CS301', 'Full Stack Node & React', 1, 1500, 3, 1);`,
      },
      {
        title: '3.3 การใช้งาน Prisma ORM (schema.prisma & PrismaClient CRUD)',
        whenToUse: 'เมื่อโจทย์ใช้ Prisma ORM แทนการเขียน SQL เอง',
        keyPoints: [
          'Error Code สำคัญของ Prisma: e.code === "P2002" คือข้อมูลซ้ำ (@unique) ควรตอบ 409, ส่วน e.code === "P2025" คือหา record ที่จะแก้/ลบไม่เจอ ควรตอบ 404',
        ],
        code: `const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// 1. อ่านรายการทั้งหมด + ค้นหา + เรียงลำดับ + ดึงตารางที่สัมพันธ์กัน (include)
exports.list = async (req, res, next) => {
  try {
    const keyword = String(req.query.keyword || '');
    const rows = await prisma.course.findMany({
      where: { title: { contains: keyword } },
      include: { category: true },
      orderBy: { id: 'asc' },
    });
    res.json(rows);
  } catch (err) {
    next(err);
  }
};

// 2. อ่านรายการเดียวตาม ID
exports.get = async (req, res, next) => {
  try {
    const item = await prisma.course.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

// 3. สร้างรายการใหม่ (ดัก P2002 กรณีซ้ำ)
exports.create = async (req, res, next) => {
  try {
    const created = await prisma.course.create({
      data: {
        code: req.body.code.trim(),
        title: req.body.title.trim(),
        categoryId: Number(req.body.categoryId),
        price: Number(req.body.price),
        seats: Number(req.body.seats),
      },
    });
    res.status(201).json(created);
  } catch (err) {
    if (err.code === 'P2002') return res.status(409).json({ message: 'Duplicate code' });
    next(err);
  }
};

// 4. แก้ไขและลบ (ดัก P2025 กรณีไม่พบ ID)
exports.remove = async (req, res, next) => {
  try {
    await prisma.course.delete({ where: { id: Number(req.params.id) } });
    res.json({ message: 'Deleted' });
  } catch (err) {
    if (err.code === 'P2025') return res.status(404).json({ message: 'Not found' });
    next(err);
  }
};`,
      },
    ],
  },
  {
    id: 'react-core',
    badge: 'บทที่ 4 · React Core & Hooks',
    title: 'React Components, State, Form, useEffect & Context',
    summary: 'การสร้าง Component, การผูก Controlled Form, การดึง API ด้วย useEffect และการแชร์ข้อมูลด้วย Context/useRef',
    sections: [
      {
        title: '4.1 การสร้าง Component, การส่ง Props และการวาดรายการด้วย .map()',
        whenToUse: 'ใช้แยกส่วนแสดงผล เช่น การ์ดสินค้า แถวในตาราง หรือปุ่มกด',
        keyPoints: [
          'ชื่อ Component ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่เสมอ (เช่น CourseCard)',
          'เมื่อใช้ .map() วาด JSX ต้องใส่ prop key={item.id} ที่ไม่ซ้ำกันในแท็กนอกสุดเสมอ',
        ],
        code: `// ไฟล์ frontend/components/CourseCard.jsx
export default function CourseCard({ course, onEnroll }) {
  const isFull = course.availableSeats <= 0;
  return (
    <article className="card">
      <small>{course.code} · {course.categoryName}</small>
      <h2>{course.title}</h2>
      <p>ราคา {course.price} บาท</p>
      <p>ว่าง {course.availableSeats} / {course.seats} ที่นั่ง</p>
      <button
        type="button"
        disabled={isFull}
        onClick={() => onEnroll(course.id)}
      >
        {isFull ? 'ที่นั่งเต็ม' : 'ลงทะเบียนเรียน'}
      </button>
    </article>
  );
}

// การเรียกใช้ในหน้าหลัก
// {courses.map(c => <CourseCard key={c.id} course={c} onEnroll={handleEnroll} />)}`,
      },
      {
        title: '4.2 Controlled Form, การแปลงตัวเลข และการแสดง Error (role="alert")',
        whenToUse: 'ใช้กับทุกฟอร์มในข้อสอบ (เช่น ฟอร์มเพิ่มสินค้า ฟอร์มเข้าสู่ระบบ ฟอร์มจอง)',
        keyPoints: [
          'ต้องใส่ e.preventDefault() บรรทัดแรกของฟังก์ชัน onSubmit เสมอเพื่อไม่ให้หน้าเว็บรีเฟรชเอง',
          'ค่าจาก e.target.value ของ <input> และ <select> เป็น String เสมอ ต้องแปลงด้วย Number() ก่อนส่งไป API',
          'ข้อความแจ้งเตือนข้อผิดพลาดควรอยู่ใน <p role="alert">{error}</p> เพื่อให้ชุดตรวจจับได้',
        ],
        code: `import React, { useState } from 'react';

export default function CourseForm({ categories, onSave }) {
  const [code, setCode] = useState('');
  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState('1');
  const [price, setPrice] = useState('');
  const [seats, setSeats] = useState('10');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!code.trim() || !title.trim()) {
      setError('กรุณากรอกรหัสวิชาและชื่อวิชาให้ครบ');
      return;
    }
    setBusy(true);
    try {
      await onSave({
        code: code.trim().toUpperCase(),
        title: title.trim(),
        categoryId: Number(categoryId),
        price: Number(price),
        seats: Number(seats),
      });
      // ล้างฟอร์มเมื่อบันทึกสำเร็จ
      setCode('');
      setTitle('');
      setPrice('');
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'บันทึกไม่สำเร็จ');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p role="alert">{error}</p>}
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
      <button type="submit" disabled={busy}>บันทึกคอร์ส</button>
    </form>
  );
}`,
      },
      {
        title: '4.3 การโหลดข้อมูลด้วย useEffect พร้อมสถานะ Loading และ Error',
        whenToUse: 'ใช้ดึงข้อมูลจาก Backend ทันทีที่เปิดหน้าเว็บ หรือเมื่อเปลี่ยนคำค้นหา',
        keyPoints: [
          'แยกฟังก์ชัน loadData() ออกมาเพื่อให้เรียกซ้ำได้ทั้งใน useEffect และหลังจากกดปุ่มเพิ่ม/ลบข้อมูลสำเร็จ',
        ],
        code: `import React, { useState, useEffect } from 'react';
import { api } from '../services/api';

export default function CatalogPage() {
  const [courses, setCourses] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function loadData() {
    setError('');
    try {
      const data = await api.courses(keyword ? { keyword } : {});
      setCourses(data);
    } catch (err) {
      setError(err.response?.data?.message || 'โหลดข้อมูลไม่สำเร็จ');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, [keyword]); // โหลดใหม่เมื่อ keyword เปลี่ยน

  if (loading) return <p>กำลังโหลด...</p>;
  return (
    <section>
      {error && <p role="alert">{error}</p>}
      {/* แสดงรายการ courses */}
    </section>
  );
}`,
      },
    ],
  },
  {
    id: 'router-axios',
    badge: 'บทที่ 5 · Router & Axios',
    title: 'การทำเว็บหลายหน้า (React Router) & Axios Service',
    summary: 'การตั้งค่า BrowserRouter, Routes, Link, useParams, useNavigate และการรวมคำสั่งเรียก API ไว้ที่ไฟล์ Service',
    sections: [
      {
        title: '5.1 โครงสร้างเว็บหลายหน้าด้วย React Router (Navbar + Routes + 404)',
        whenToUse: 'เมื่อโจทย์กำหนดให้มีหลายหน้า เช่น หน้าแรก (/), หน้าเข้าสู่ระบบ (/login), หน้าของฉัน (/my-courses), และหน้าผู้ดูแล (/admin)',
        keyPoints: [
          'ใช้ <Link to="..."> แทน <a href="..."> เพื่อเปลี่ยนหน้าโดยไม่ทำให้เบราว์เซอร์รีโหลดหน้าใหม่ทั้งหมด',
          'ใส่ <Route path="*" element={<h1>404</h1>} /> ไว้ล่างสุดเสมอเพื่อรับ URL ที่ไม่มีในระบบ',
        ],
        code: `import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
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
          <>
            <span>{user.userName} ({user.role})</span>
            <button type="button" onClick={logout}>ออกจากระบบ</button>
          </>
        ) : (
          <Link to="/login">เข้าสู่ระบบ</Link>
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
        title: '5.2 การเขียน Axios Service Layer พร้อมแนบ Bearer Token อัตโนมัติ',
        whenToUse: 'แยกโค้ดการยิง HTTP ออกจากหน้า React เพื่อให้ทุกหน้าเรียกใช้ง่ายและแก้จุดเดียว',
        keyPoints: [
          'axios เก็บผลลัพธ์ JSON ไว้ใน response.data เสมอ',
          'สำหรับ axios.delete(url, config) พารามิเตอร์ตัวที่ 2 คือ config (ใส่ headers ได้เลย) แต่สำหรับ axios.post(url, data, config) และ axios.patch(url, data, config) พารามิเตอร์ตัวที่ 2 คือ body และตัวที่ 3 คือ config!',
        ],
        code: `import axios from 'axios';

export const TOKEN_KEY = 'practice-token';

// ฟังก์ชันช่วยสร้าง Header Authorization
export function authHeaders() {
  const token = sessionStorage.getItem(TOKEN_KEY);
  return token ? { headers: { Authorization: 'Bearer ' + token } } : {};
}

export const api = {
  // Public GET (ส่ง query ผ่าน { params })
  courses: async (params = {}) => (await axios.get('/api/courses', { params })).data,

  // Auth
  login: async (data) => (await axios.post('/api/auth/login', data)).data,
  register: async (data) => (await axios.post('/api/auth/register', data)).data,
  me: async () => (await axios.get('/api/auth/me', authHeaders())).data,

  // Protected Requests (ต้องแนบ authHeaders())
  myEnrollments: async () => (await axios.get('/api/enrollments/my', authHeaders())).data,
  enroll: async (courseId) => (await axios.post('/api/enrollments', { courseId }, authHeaders())).data,
  // ข้อควรระวัง: axios.patch(url, body, config) ต้องส่ง {} เป็น body ก่อน แล้วค่อยส่ง authHeaders() เป็นตัวที่ 3
  cancelEnrollment: async (id) => (await axios.patch('/api/enrollments/' + id + '/cancel', {}, authHeaders())).data,

  // Admin CRUD
  createCourse: async (data) => (await axios.post('/api/courses', data, authHeaders())).data,
  updateCourse: async (id, data) => (await axios.put('/api/courses/' + id, data, authHeaders())).data,
  // axios.delete(url, config) ส่ง authHeaders() เป็นตัวที่ 2 ได้เลย
  deleteCourse: async (id) => (await axios.delete('/api/courses/' + id, authHeaders())).data,
};`,
      },
    ],
  },
  {
    id: 'auth-rbac',
    badge: 'บทที่ 6 · Auth, JWT & Role Guard',
    title: 'ระบบสมาชิก, bcrypt, JWT & การแยกสิทธิ์ Role (Student / Admin)',
    summary: 'หัวใจของข้อสอบปลายภาค: การแฮชรหัสผ่าน, การออก/ตรวจ JWT, การกั้นสิทธิ์ 401 vs 403 และการทำ AuthContext',
    sections: [
      {
        title: '6.1 Backend Middleware: verifyToken (401) และ requireAdmin (403)',
        whenToUse: 'ใช้คั่นหน้า Route ที่ต้องการให้ล็อกอินก่อน หรือ Route ที่อนุญาตเฉพาะ Admin เท่านั้น',
        keyPoints: [
          'ไม่ส่ง Token หรือ Token ปลอม/หมดอายุ -> ตอบ 401 Unauthorized',
          'ส่ง Token ถูกต้องแล้ว แต่ req.user.role !== "admin" -> ตอบ 403 Forbidden',
        ],
        code: `const jwt = require('jsonwebtoken');
const store = require('../db/store.js');
const secret = process.env.JWT_KEY || 'practice-only-change-this-key';

// 1. ตรวจว่าล็อกอินหรือยัง (401)
function verifyToken(req, res, next) {
  const header = req.get('Authorization') || '';
  if (!header.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing token' });
  }
  const token = header.slice(7).trim();
  try {
    const payload = jwt.verify(token, secret);
    const user = store.users.find(u => u.id === payload.userId);
    if (!user) return res.status(401).json({ message: 'Invalid user' });

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

// 2. ตรวจว่าเป็น Admin หรือไม่ (403)
function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin only' });
  }
  next();
}

module.exports = { verifyToken, requireAdmin, secret };`,
      },
      {
        title: '6.2 Backend Auth Routes: Register (bcrypt.hash) & Login (bcrypt.compare + jwt.sign)',
        whenToUse: 'ใช้ในไฟล์ backend/routes/auth.js',
        keyPoints: [
          'ตอนสมัครสมาชิก (POST /register) ห้ามนำค่า req.body.role มาใช้เด็ดขาด ต้องบังคับ role: "student" (หรือ "user") เสมอ และห้ามส่ง passwordHash กลับไปใน JSON response',
          'ตอนเข้าสู่ระบบ (POST /login) ต้องใช้ await bcrypt.compare(password, user.passwordHash)',
        ],
        code: `const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const store = require('../db/store.js');
const { verifyToken, secret } = require('../middleware/auth.js');

// POST /api/auth/register
router.post('/register', async (req, res) => {
  const { userName, email, password } = req.body || {};
  if (!userName?.trim() || !email?.includes('@') || !password || password.length < 6) {
    return res.status(400).json({ message: 'Invalid registration data' });
  }
  const exists = store.users.some(
    u => u.userName.toLowerCase() === userName.trim().toLowerCase() ||
         u.email.toLowerCase() === email.trim().toLowerCase()
  );
  if (exists) return res.status(409).json({ message: 'Duplicate user' });

  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = {
    id: store.nextUserId++,
    userName: userName.trim(),
    email: email.trim().toLowerCase(),
    passwordHash,
    role: 'student', // บังคับสิทธิ์เริ่มต้นเสมอ
  };
  store.users.push(newUser);
  res.status(201).json({ id: newUser.id, userName: newUser.userName, email: newUser.email, role: newUser.role });
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { userName, email, password } = req.body || {};
  const iden = String(userName || email || '').trim().toLowerCase();
  const user = store.users.find(
    u => u.userName.toLowerCase() === iden || u.email.toLowerCase() === iden
  );
  if (!user || !(await bcrypt.compare(String(password || ''), user.passwordHash))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ userId: user.id, role: user.role }, secret, { expiresIn: '2h' });
  res.json({
    token,
    user: { id: user.id, userName: user.userName, email: user.email, role: user.role },
  });
});

// GET /api/auth/me
router.get('/me', verifyToken, (req, res) => res.json(req.user));

module.exports = router;`,
      },
      {
        title: '6.3 Frontend Role Guard: การกั้นหน้าเฉพาะสมาชิกและหน้าเฉพาะ Admin',
        whenToUse: 'ใช้ในหน้า MyCoursesPage.jsx (ต้องล็อกอิน) และ AdminPage.jsx (ต้องเป็น role === "admin")',
        keyPoints: [
          'ตรวจสอบ user จาก useAuth() ก่อนวาดฟอร์มจัดการข้อมูล',
          'แม้จะซ่อนปุ่มหรือกั้นหน้าใน React แล้ว ฝั่ง Express API ก็ยังต้องใส่ verifyToken และ requireAdmin เสมอ!',
        ],
        code: `// 1. กั้นหน้าสำหรับสมาชิกที่ล็อกอินแล้วเท่านั้น (เช่น MyCoursesPage.jsx)
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

// 2. กั้นหน้าสำหรับ Admin เท่านั้น (เช่น AdminPage.jsx)
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
    id: 'exam-patterns',
    badge: 'บทที่ 7 · สูตรลัด Logic ข้อสอบ',
    title: 'รวมสูตร Logic ออกสอบบ่อย (ตัดสต็อก / โควตาที่นั่ง / คืนยอด / เช็กเจ้าของ)',
    summary: 'รวมแพตเทิร์นเงื่อนไขทางธุรกิจที่มักออกในข้อสอบปฏิบัติ 100 คะแนน',
    sections: [
      {
        title: '7.1 สูตรตรวจเจ้าของข้อมูล หรือ Admin (Owner or Admin Guard)',
        whenToUse: 'เมื่อโจทย์กำหนดว่า "ยกเลิกการจองได้เฉพาะเจ้าของรายการ หรือ Admin เท่านั้น"',
        keyPoints: [
          'เปรียบเทียบ item.userId !== req.user.userId && req.user.role !== "admin" ถ้าเป็นจริงให้ตอบ 403 Forbidden',
        ],
        code: `router.patch('/enrollments/:id/cancel', verifyToken, (req, res) => {
  const enrollment = store.enrollments.find(e => e.id === Number(req.params.id));
  if (!enrollment) {
    return res.status(404).json({ message: 'Not found' });
  }

  // ตรวจสิทธิ์: ถ้าไม่ใช่เจ้าของ และไม่ใช่ admin -> 403 Forbidden
  if (enrollment.userId !== req.user.userId && req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden: Owner or admin only' });
  }

  // ตรวจว่าเคยยกเลิกไปแล้วหรือยัง -> 409 Conflict (ป้องกันการคืนที่นั่งซ้ำ!)
  if (enrollment.status === 'cancelled') {
    return res.status(409).json({ message: 'Already cancelled' });
  }

  // เปลี่ยนสถานะและคืนที่นั่ง 1 ครั้ง
  enrollment.status = 'cancelled';
  const course = store.courses.find(c => c.id === enrollment.courseId);
  if (course) {
    course.enrolled = Math.max(0, course.enrolled - 1);
  }

  res.json(enrollment);
});`,
      },
      {
        title: '7.2 สูตรป้องกันการแก้จำนวนที่นั่งต่ำกว่าคนเรียน และป้องกันการลบคอร์สที่มีคนเรียนอยู่',
        whenToUse: 'ใช้ใน PUT /api/courses/:id และ DELETE /api/courses/:id ของหน้า Admin',
        keyPoints: [
          'ตอนแก้ไขคอร์ส (PUT): ถ้า seats ใหม่ < course.enrolled ปัจจุบัน ต้องตอบ 409',
          'ตอนลบคอร์ส (DELETE): ถ้า course.enrolled > 0 (ยังมีคนเรียนอยู่) ต้องตอบ 409 ห้ามลบ',
        ],
        code: `// ใน PUT /api/courses/:id
if (Number(req.body.seats) < course.enrolled) {
  return res.status(409).json({ message: 'Seats cannot be less than enrolled students' });
}

// ใน DELETE /api/courses/:id
const hasActiveEnrollments =
  course.enrolled > 0 ||
  store.enrollments.some(e => e.courseId === course.id && e.status === 'active');

if (hasActiveEnrollments) {
  return res.status(409).json({ message: 'Cannot delete course with active enrollments' });
}`,
      },
    ],
  },
];
