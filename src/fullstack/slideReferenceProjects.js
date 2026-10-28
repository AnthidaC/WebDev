import { baseFiles, packageFile } from './templates.js';

const pkg = JSON.parse(packageFile);
pkg.name = 'slide-mysql-axios';
pkg.dependencies.mysql2 = '3.24.6';
export const mysqlSlideFiles = {
  ...baseFiles,
  'package.json': JSON.stringify(pkg, null, 2),
  '.env.example': 'PORT=3000\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_USER=root\nDB_PASSWORD=\nDB_NAME=slide_fullstack_lab\n',
  '.gitignore': 'node_modules/\n.env\ndist/\n',
  '.dockerignore': 'node_modules\ndist\n.env\n.git\n',
  'Dockerfile': `FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:alpine
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
`,
  'backend/Dockerfile': `FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "backend/server.js"]
`,
  'frontend/nginx.conf': `server {
  listen 80;
  root /usr/share/nginx/html;
  location /api/ { proxy_pass http://backend:3000; }
  location / { try_files $uri $uri/ /index.html; }
}
`,
  'compose.yaml': `services:
  db:
    image: mysql:8.4
    environment:
      MYSQL_ROOT_PASSWORD: practice-only-password
      MYSQL_DATABASE: slide_fullstack_lab
    volumes:
      - slide_data:/var/lib/mysql
      - ./database/schema.sql:/docker-entrypoint-initdb.d/01-schema.sql:ro
    healthcheck:
      test: ["CMD-SHELL", "mysqladmin ping -h localhost -p$$MYSQL_ROOT_PASSWORD --silent"]
      interval: 5s
      retries: 30
  backend:
    build:
      context: .
      dockerfile: backend/Dockerfile
    environment:
      PORT: 3000
      DB_HOST: db
      DB_PORT: 3306
      DB_USER: root
      DB_PASSWORD: practice-only-password
      DB_NAME: slide_fullstack_lab
    ports: ["3000:3000"]
    depends_on:
      db:
        condition: service_healthy
  frontend:
    build: .
    ports: ["5173:80"]
    depends_on: [backend]
volumes:
  slide_data:
`,
  'database/schema.sql': `-- Run only in a new database reserved for this exercise.
CREATE DATABASE IF NOT EXISTS slide_fullstack_lab CHARACTER SET utf8mb4;
USE slide_fullstack_lab;
CREATE TABLE IF NOT EXISTS provinces (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) NOT NULL);
CREATE TABLE IF NOT EXISTS customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100) NOT NULL, email VARCHAR(191) NOT NULL UNIQUE, provinceId INT NULL, FOREIGN KEY (provinceId) REFERENCES provinces(id));
INSERT IGNORE INTO provinces (id,name) VALUES (1,'Bangkok'),(2,'Chiang Mai');
INSERT IGNORE INTO customers (id,name,email,provinceId) VALUES (1,'Mali','mali@example.com',1);
`,
  'backend/db/pool.js': `const mysql = require('mysql2/promise');
const path = require('node:path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
module.exports = mysql.createPool({ host: process.env.DB_HOST || '127.0.0.1', port: Number(process.env.DB_PORT || 3306), user: process.env.DB_USER || 'root', password: process.env.DB_PASSWORD || '', database: process.env.DB_NAME || 'slide_fullstack_lab', connectionLimit: 5 });
`,
  'backend/controllers/customers.js': `const pool = require('../db/pool.js');
function input(body) {
  const {name,email,provinceId} = body;
  if (typeof name !== 'string' || !name.trim() || typeof email !== 'string' || !email.includes('@') || !Number.isInteger(provinceId) || provinceId < 1) {
    const error = new Error('กรอกชื่อ อีเมล และจังหวัดให้ครบ'); error.status=400; throw error;
  }
  return [name.trim(),email.trim(),provinceId];
}
exports.list = async (req,res,next) => { try {
  const [rows] = await pool.execute('SELECT c.*, p.name AS provinceName FROM customers c LEFT JOIN provinces p ON p.id=c.provinceId WHERE c.name LIKE ? ORDER BY c.id', ['%'+String(req.query.keyword||'')+'%']); res.json(rows);
} catch(error) { next(error); } };
exports.get = async (req,res,next) => { try {
  const [rows] = await pool.execute('SELECT * FROM customers WHERE id=?',[req.params.id]);
  if(!rows.length) return res.status(404).json({message:'Not found'}); res.json(rows[0]);
} catch(error) { next(error); } };
exports.create = async (req,res,next) => { try {
  const values=input(req.body); const [result]=await pool.execute('INSERT INTO customers (name,email,provinceId) VALUES (?,?,?)', values);
  res.status(201).json({id:result.insertId,name:values[0],email:values[1],provinceId:values[2]});
} catch(error) { next(error); } };
exports.update = async (req,res,next) => { try {
  const values=input(req.body); const [exists]=await pool.execute('SELECT id FROM customers WHERE id=?',[req.params.id]);
  if(!exists.length) return res.status(404).json({message:'Not found'});
  await pool.execute('UPDATE customers SET name=?,email=?,provinceId=? WHERE id=?',[...values,req.params.id]);
  res.json({id:Number(req.params.id),name:values[0],email:values[1],provinceId:values[2]});
} catch(error) { next(error); } };
exports.remove = async (req,res,next) => { try {
  const [result]=await pool.execute('DELETE FROM customers WHERE id=?',[req.params.id]);
  if(!result.affectedRows) return res.status(404).json({message:'Not found'}); res.json({message:'Deleted'});
} catch(error) { next(error); } };
`,
  'backend/routes/customers.js': `const router=require('express').Router();
const controller=require('../controllers/customers.js');
router.get('/',controller.list);
router.get('/search',controller.list); // before /:id
router.get('/:id',controller.get);
router.post('/',controller.create);
router.put('/:id',controller.update);
router.delete('/:id',controller.remove);
module.exports=router;
`,
  'backend/app.js': `const express=require('express');
const pool=require('./db/pool.js');
const app=express();
app.use(require('cors')()); app.use(express.json());
app.get('/api/health',(req,res)=>res.json({ok:true}));
app.get('/api/provinces',async(req,res,next)=>{try {const [rows]=await pool.query('SELECT * FROM provinces ORDER BY id');res.json(rows);}catch(error){next(error);}});
app.use('/api/customers',require('./routes/customers.js'));
app.use((error,req,res,next)=>{const status=error.status||(error.code==='ER_DUP_ENTRY'?409:error.code==='ER_NO_REFERENCED_ROW_2'?400:500);res.status(status).json({message:status===500?'Database request failed':error.message});});
module.exports=app;
`,
  'frontend/services/customerApi.js': `import axios from 'axios';
const http=axios.create({baseURL:'/api'});
export const customerApi={
 list:async keyword=>(await http.get('/customers',{params:{keyword}})).data,
 provinces:async()=>(await http.get('/provinces')).data,
 create:async data=>(await http.post('/customers',data)).data,
 update:async(id,data)=>(await http.put('/customers/'+id,data)).data,
 remove:async id=>(await http.delete('/customers/'+id)).data,
};
`,
  'frontend/components/CustomerForm.jsx': `import {useEffect,useState} from 'react';
export default function CustomerForm({editing,provinces,onSave,busy}) {
 const [name,setName]=useState('');const [email,setEmail]=useState('');const [provinceId,setProvinceId]=useState('1');
 useEffect(()=>{setName(editing?.name||'');setEmail(editing?.email||'');setProvinceId(String(editing?.provinceId||1));},[editing]);
 async function submit(event){event.preventDefault();const ok=await onSave({name,email,provinceId:Number(provinceId)});if(ok){setName('');setEmail('');}}
 return <form onSubmit={submit}><label>ชื่อ<input required value={name} onChange={e=>setName(e.target.value)}/></label><label>อีเมล<input required type="email" value={email} onChange={e=>setEmail(e.target.value)}/></label><label>จังหวัด<select value={provinceId} onChange={e=>setProvinceId(e.target.value)}>{provinces.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select></label><button disabled={busy||!provinces.length}>{editing?'บันทึกการแก้ไข':'เพิ่มลูกค้า'}</button></form>;
}
`,
  'frontend/components/CustomerList.jsx': `export default function CustomerList({rows,onEdit,onRemove,busy}) { return <ul>{rows.map(c=><li key={c.id}><strong>{c.name}</strong> — {c.email} ({c.provinceName}) <button disabled={busy} onClick={()=>onEdit(c)}>แก้ไข</button><button disabled={busy} onClick={()=>onRemove(c.id)}>ลบ</button></li>)}</ul>; }
`,
  'frontend/pages/Customers.jsx': `import {useEffect,useState} from 'react';
import {customerApi} from '../services/customerApi.js';
import CustomerForm from '../components/CustomerForm.jsx';
import CustomerList from '../components/CustomerList.jsx';
export default function Customers(){
 const [rows,setRows]=useState([]);const [provinces,setProvinces]=useState([]);const [editing,setEditing]=useState(null);const [error,setError]=useState('');const [loading,setLoading]=useState(true);const [busy,setBusy]=useState(false);
 useEffect(()=>{let active=true;Promise.all([customerApi.list(),customerApi.provinces()]).then(([r,p])=>{if(active){setRows(r);setProvinces(p);}}).catch(()=>{if(active)setError('โหลดข้อมูลไม่สำเร็จ ตรวจ API และ MySQL');}).finally(()=>{if(active)setLoading(false);});return()=>{active=false;};},[]);
 async function save(data){setBusy(true);setError('');try{if(editing)await customerApi.update(editing.id,data);else await customerApi.create(data);setRows(await customerApi.list());setEditing(null);return true;}catch(e){setError(e.response?.data?.message||'บันทึกไม่สำเร็จ');return false;}finally{setBusy(false);}}
 async function remove(id){setBusy(true);setError('');try{await customerApi.remove(id);setRows(await customerApi.list());if(editing?.id===id)setEditing(null);}catch(e){setError(e.response?.data?.message||'ลบไม่สำเร็จ');}finally{setBusy(false);}}
 return <><h1>Customers</h1>{error&&<p role="alert">{error}</p>}{loading?<p>กำลังโหลด...</p>:<><CustomerForm editing={editing} provinces={provinces} onSave={save} busy={busy}/><CustomerList rows={rows} onEdit={setEditing} onRemove={remove} busy={busy}/>{!rows.length&&<p>ยังไม่มีลูกค้า</p>}</>}</>;
}
`,
  'frontend/App.jsx': `import {BrowserRouter,Routes,Route,Link,Outlet} from 'react-router-dom';
import Customers from './pages/Customers.jsx';
function Layout(){return <main><nav><Link to="/">Home</Link><Link to="/customers">Customers</Link></nav><Outlet/></main>;}
export default function App(){return <BrowserRouter><Routes><Route element={<Layout/>}><Route path="/" element={<><h1>MySQL + Axios</h1><p>เปิด Customers เพื่ออ่านฐานข้อมูลผ่าน API</p></>}/><Route path="/customers" element={<Customers/>}/><Route path="*" element={<h1>404</h1>}/></Route></Routes></BrowserRouter>;}
`,
  'tests/goal.test.jsx': `// API integration tests: requires a dedicated MySQL database and schema.sql.
import {beforeAll,afterAll,test,expect} from 'vitest';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);const app=require('../backend/app.js');const pool=require('../backend/db/pool.js');
let server,base;
beforeAll(async()=>{server=app.listen(0,'127.0.0.1');await new Promise(resolve=>server.on('listening',resolve));base='http://127.0.0.1:'+server.address().port;});
afterAll(async()=>{await new Promise(resolve=>server.close(resolve));await pool.end();});
test('API reads provinces and validates customer input',async()=>{
 expect((await fetch(base+'/api/health')).status).toBe(200);
 const provinces=await(await fetch(base+'/api/provinces')).json();expect(provinces.length).toBeGreaterThan(0);
 expect((await fetch(base+'/api/customers',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'})).status).toBe(400);
});
test('creates updates and removes one isolated customer',async()=>{
 const send=(path,method,data)=>fetch(base+path,{method,headers:{'Content-Type':'application/json'},body:data?JSON.stringify(data):undefined});
 const email='test-'+Date.now()+'@example.com';
 const response=await send('/api/customers','POST',{name:'Test roundtrip',email,provinceId:1});expect(response.status).toBe(201);const created=await response.json();
 try {expect((await send('/api/customers/'+created.id,'PUT',{name:'Test updated',email,provinceId:2})).status).toBe(200);expect((await(await fetch(base+'/api/customers/'+created.id)).json()).name).toBe('Test updated');}
 finally {expect((await send('/api/customers/'+created.id,'DELETE')).status).toBe(200);}
 expect((await fetch(base+'/api/customers/'+created.id)).status).toBe(404);
});
`,
  'README.md': `# Full 1 + Full2: MySQL / Express / React / Axios

ไฟล์ Node .js + CommonJS, React .jsx + ES modules ตามสไลด์ โครงรวม package.json ที่ root สำหรับเปิดสองฝั่งพร้อมกัน backend/package.json แยก CommonJS ให้ Node

## เตรียมทีละขั้น
1. ติดตั้ง Node และเปิด MySQL/MariaDB ของ XAMPP (หรือ service บนเครื่อง)
2. เปิด phpMyAdmin แล้วนำเข้า database/schema.sql เพื่อสร้างฐานข้อมูลฝึก slide_fullstack_lab และ seed ชุดเล็ก ไม่ใช้ฐานข้อมูลงานจริง
3. คัดลอก .env.example เป็น .env ที่ root ตั้ง host/port/user/password ให้ตรง ระบบใช้ dotenv อ่านไฟล์นี้
4. เปิด Terminal ที่ root นี้ รัน npm install รอจนไม่มี error
5. npm run dev เปิด Vite :5173 กับ API :3000 พร้อมกัน ปล่อย Terminal รันอยู่
6. ทดสอบ http://localhost:3000/api/provinces ต้องได้ Bangkok/Chiang Mai ก่อนเปิด http://localhost:5173/customers
7. เพิ่ม → แก้ → ลบ → รีเฟรช ยืนยันว่าข้อมูลที่ยังไม่ลบอยู่ใน MySQL
8. เปิด Terminal อีกอันที่ root แล้ว npm test (ใช้ฐานข้อมูลฝึกนี้เท่านั้น) และ npm run build
9. Ctrl+C หยุด dev server ข้อมูลใน MySQL ยังอยู่

## เส้นทางข้อมูล
CustomerForm → onSave → customerApi (Axios) → Vite proxy /api → Express Router → controller → mysql2 pool → MySQL → response.data → React state → CustomerList

## Dependencies
express/cors/dotenv/mysql2 ฝั่ง Node; react/react-dom/react-router-dom/axios ฝั่ง React; vite/plugin-react/nodemon/concurrently และ vitest สำหรับพัฒนา/ตรวจ รุ่นอยู่ใน package.json ติดตั้งครั้งเดียวด้วย npm install ของ ZIP นี้
ถ้าสร้างแยกตามสไลด์ ให้ npm install แต่ละฝั่งใน frontend/backend ของตัวเอง อย่านำ package.json รวมนี้ไปทับโครงแยกครึ่งเดียว

## Docker ทางเลือกตาม Auten หน้า 47–51
หยุด npm run dev เดิมก่อนและเปิด Docker Desktop จาก root นี้รัน docker compose up --build
compose เปิด MySQL, Node API และ Nginx ที่ serve React build แยกสาม container พร้อม volume ฐานข้อมูล
เปิด http://localhost:5173/customers; Nginx ส่ง /api ไป backend และ fallback index.html สำหรับ Router
ตรวจด้วย docker compose exec backend npm test; หยุดด้วย docker compose down โดยไม่ใส่ -v
schema.sql ถูกนำเข้าครั้งแรกที่สร้าง volume หากแก้ schema ภายหลังให้ปรับฐานข้อมูลฝึกด้วยขั้นตอนชัดเจน ไม่ลบ volume ของงานที่ต้องเก็บ
DB_HOST ใน compose เป็น db ซึ่งเป็นชื่อ service ไม่ใช่ localhost ของเครื่อง

## จุดสังเกต
Axios ใช้ response.data ไม่เรียก .json() เพิ่ม; mysql2 ใช้ ? กับ values; /search อยู่ก่อน /:id; form แปลง provinceId เป็น Number; backend ตรวจข้อมูลซ้ำเอง ไม่พึ่ง UI; password ไม่อยู่ในโปรเจกต์นี้เพราะเป็นขั้นก่อนบท auth
ECONNREFUSED: ตรวจ MySQL และ port; ER_BAD_DB_ERROR/NO_SUCH_TABLE: นำเข้า schema; Access denied: ตรวจ .env; EADDRINUSE: หยุด server เดิมก่อน
`,
};
