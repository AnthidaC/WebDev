import { baseFiles, packageFile } from '../templates.js';

const pkg = JSON.parse(packageFile);
pkg.name = 'campus-gear-exam';
pkg.scripts['dev:api'] = 'nodemon --watch backend --ignore backend/data/ --ext js,cjs,json backend/server.js';
pkg.scripts.reset = 'node backend/reset.js';

export const gearBase = {
  ...baseFiles,
  'package.json': JSON.stringify(pkg, null, 2),
  '.gitignore': 'node_modules/\ndist/\n.env\nbackend/data/\n',
  '.env.example': 'PORT=3000\nJWT_KEY=campus-gear-local-practice-key\n',
  'backend/server.js': `require('dotenv').config();
const app = require('./app.js');
app.listen(process.env.PORT || 3000, '0.0.0.0', () => console.log('CAMPUS GEAR API ready'));
`,
  'backend/lib/errors.js': `exports.fail = (status, message) => { const error = new Error(message); error.status = status; throw error; };
`,
  'backend/lib/dates.js': `const { fail } = require('./errors.js');
const today = () => new Date(Date.now() + 7 * 3600000).toISOString().slice(0, 10);
const offset = (date, days) => new Date(Date.parse(date + 'T00:00:00Z') + days * 86400000).toISOString().slice(0, 10);
function range(from, to, future = true) {
  for (const value of [from, to]) {
    if (typeof value !== 'string' || !/^\\d{4}-\\d{2}-\\d{2}$/.test(value) || !Number.isFinite(Date.parse(value + 'T00:00:00Z')) || new Date(value + 'T00:00:00Z').toISOString().slice(0, 10) !== value) fail(400, 'วันที่ไม่ถูกต้อง');
  }
  if (to < from || (future && from < today())) fail(400, 'ช่วงวันที่ไม่ถูกต้อง');
  const days = Math.round((Date.parse(to) - Date.parse(from)) / 86400000) + 1;
  if (days > 7) fail(400, 'ยืมได้ไม่เกิน 7 วันต่อครั้ง');
  return Array.from({ length: days }, (_, index) => offset(from, index));
}
module.exports = { today, offset, range };
`,
  'backend/seed.js': `const bcrypt = require('bcryptjs');
const { today, offset } = require('./lib/dates.js');
module.exports = function seed() {
  const date = today();
  const users = [
    { id: 1, name: 'Admin Campus', email: 'admin@campus.test', role: 'admin' },
    { id: 2, name: 'Mali Jaidee', email: 'mali@campus.test', role: 'student' },
    { id: 3, name: 'Niran Studio', email: 'niran@campus.test', role: 'student' },
  ].map(user => ({ ...user, passwordHash: bcrypt.hashSync('Campus123!', 10) }));
  const equipment = [
    { id: 1, name: 'Sony Alpha A7 IV', category: 'Camera', code: 'CAM-001', stock: 4, deposit: 1500, description: 'กล้อง Mirrorless สำหรับงานภาพนิ่งและวิดีโอ พร้อมเลนส์มาตรฐานและกระเป๋า', icon: 'camera', tone: 'lavender' },
    { id: 2, name: 'Manfrotto Tripod', category: 'Accessories', code: 'ACC-002', stock: 6, deposit: 300, description: 'ขาตั้งกล้องปรับระดับได้ เหมาะกับงานสัมภาษณ์และถ่ายภาพในสตูดิโอ', icon: 'tripod', tone: 'sand' },
    { id: 3, name: 'Epson Projector', category: 'Presentation', code: 'PRE-003', stock: 3, deposit: 800, description: 'โปรเจกเตอร์สำหรับห้องเรียนและกิจกรรม พร้อมสาย HDMI', icon: 'projector', tone: 'mint' },
    { id: 4, name: 'Rode Wireless GO II', category: 'Audio', code: 'AUD-004', stock: 2, deposit: 500, description: 'ไมโครโฟนไร้สายสองตัว พร้อมตัวรับและชุดสายเชื่อมต่อ', icon: 'mic', tone: 'blue' },
    { id: 5, name: 'LED Studio Light', category: 'Lighting', code: 'LGT-005', stock: 5, deposit: 400, description: 'ไฟ LED ปรับความสว่างและอุณหภูมิสีได้ พร้อมขาตั้ง', icon: 'light', tone: 'peach' },
    { id: 6, name: 'JBL Portable Speaker', category: 'Audio', code: 'AUD-006', stock: 4, deposit: 500, description: 'ลำโพงพกพาสำหรับกิจกรรมขนาดเล็ก พร้อมสายชาร์จ', icon: 'speaker', tone: 'rose' },
  ];
  const bookings = [
    { id: 1, equipmentId: 1, equipmentName: equipment[0].name, userId: 2, userName: users[1].name, quantity: 1, from: offset(date, 1), to: offset(date, 2), deposit: 1500, status: 'approved', createdAt: new Date().toISOString() },
    { id: 2, equipmentId: 3, equipmentName: equipment[2].name, userId: 2, userName: users[1].name, quantity: 1, from: offset(date, 4), to: offset(date, 5), deposit: 800, status: 'pending', createdAt: new Date().toISOString() },
    { id: 3, equipmentId: 2, equipmentName: equipment[1].name, userId: 2, userName: users[1].name, quantity: 1, from: date, to: date, deposit: 300, status: 'cancelled', createdAt: new Date().toISOString() },
    { id: 4, equipmentId: 1, equipmentName: equipment[0].name, userId: 3, userName: users[2].name, quantity: 1, from: offset(date, 1), to: offset(date, 1), deposit: 1500, status: 'pending', createdAt: new Date().toISOString() },
  ];
  return { users, equipment, bookings, nextUser: 4, nextEquipment: 7, nextBooking: 5 };
};
`,
  'backend/store.js': `// Storage adapter is PROVIDED. Updates are synchronous and persisted atomically.
const fs = require('node:fs'); const path = require('node:path');
const file = process.env.EXAM_DB_FILE || path.join(__dirname, 'data/db.json');
function save(db) { fs.mkdirSync(path.dirname(file), {recursive:true}); fs.writeFileSync(file + '.tmp', JSON.stringify(db, null, 2)); fs.renameSync(file + '.tmp', file); }
function read() { if (!fs.existsSync(file)) save(require('./seed.js')()); return JSON.parse(fs.readFileSync(file,'utf8')); }
function update(callback) { const db = read(); const result = callback(db); if(result && typeof result.then === 'function') throw new Error('Store callback must be synchronous'); save(db); return result; }
module.exports = { read, update };
`,
  'backend/reset.js': `const store = require('./store.js'); const seed = require('./seed.js');
store.update(db => { for(const key of Object.keys(db)) delete db[key]; Object.assign(db, seed()); });
console.log('Practice data reset. Password for demo accounts: Campus123!');
`,
  'backend/middleware/auth.js': `const jwt = require('jsonwebtoken'); const store = require('../store.js');
const key = () => process.env.JWT_KEY || 'campus-gear-local-practice-key';
function auth(req,res,next) {
  const header = req.get('Authorization') || '';
  if(!header.startsWith('Bearer ')) return res.status(401).json({message:'กรุณาเข้าสู่ระบบ'});
  let token; try { token = jwt.verify(header.slice(7), key()); } catch { return res.status(401).json({message:'Token ไม่ถูกต้องหรือหมดอายุ'}); }
  const user = store.read().users.find(user => user.id === token.userId);
  if(!user) return res.status(401).json({message:'ไม่พบบัญชีผู้ใช้'});
  req.user = {id:user.id,name:user.name,email:user.email,role:user.role}; next();
}
function admin(req,res,next) { auth(req,res,()=>req.user.role==='admin'?next():res.status(403).json({message:'เฉพาะผู้ดูแลระบบ'})); }
module.exports = { auth, admin, key };
`,
  'backend/app.js': `const express = require('express'); const cors = require('cors');
const app = express(); app.use(cors()); app.use(express.json());
app.get('/api/health',(req,res)=>res.json({ok:true}));
app.use('/api',require('./routes/api.js'));
app.use((req,res)=>res.status(404).json({message:'ไม่พบเส้นทาง'}));
app.use((error,req,res,next)=>{res.status(error.status || 500).json({message:error.status?error.message:'เกิดข้อผิดพลาดในระบบ'});});
module.exports = app;
`,
  'backend/routes/api.js': `const router = require('express').Router();
const c = require('../controllers/gear.js'); const { auth, admin } = require('../middleware/auth.js');
const wrap = fn => (req,res,next) => Promise.resolve().then(()=>fn(req,res)).catch(next);
router.post('/auth/login',wrap(c.login));
router.post('/auth/register',wrap(c.register));
router.get('/auth/me',auth,(req,res)=>res.json(req.user));
router.get('/equipment',wrap(c.list)); router.get('/equipment/:id',wrap(c.detail));
router.post('/equipment',admin,wrap(c.createEquipment)); router.put('/equipment/:id',admin,wrap(c.updateEquipment)); router.delete('/equipment/:id',admin,wrap(c.deleteEquipment));
router.get('/bookings',auth,wrap(c.myBookings)); router.post('/bookings',auth,wrap(c.book));
router.patch('/bookings/:id/cancel',auth,wrap(c.cancel)); router.patch('/bookings/:id/status',admin,wrap(c.changeStatus));
router.get('/admin/summary',admin,wrap(c.summary));
module.exports = router;
`,
};

export const gearService = `const {fail} = require('../lib/errors.js');
const {range,today} = require('../lib/dates.js');
const active = booking => ['pending','approved'].includes(booking.status);
function available(db, item, from, to) {
  const days = range(from,to);
  return Math.min(...days.map(day => item.stock - db.bookings.filter(b => b.equipmentId === item.id && active(b) && b.from <= day && b.to >= day).reduce((sum,b)=>sum+b.quantity,0)));
}
function validateEquipment(body) {
  if(typeof body.name!=='string'||!body.name.trim()||typeof body.code!=='string'||!body.code.trim()||!['Camera','Audio','Presentation','Lighting','Accessories'].includes(body.category)||!Number.isInteger(body.stock)||body.stock<1||body.stock>100||!Number.isInteger(body.deposit)||body.deposit<0||typeof body.description!=='string') fail(400,'ข้อมูลอุปกรณ์ไม่ถูกต้อง');
  return {name:body.name.trim(),code:body.code.trim(),category:body.category,stock:body.stock,deposit:body.deposit,description:body.description,icon:['camera','mic','tripod','projector','light','speaker'].includes(body.icon)?body.icon:'camera',tone:['lavender','sand','mint','blue','peach','rose'].includes(body.tone)?body.tone:'mint'};
}
function peak(db,id) {
  const bookings=db.bookings.filter(b=>b.equipmentId===id&&active(b));
  const days=[...new Set(bookings.flatMap(b=>range(b.from,b.to,false)))];
  return Math.max(0,...days.map(day=>bookings.filter(b=>b.from<=day&&b.to>=day).reduce((sum,b)=>sum+b.quantity,0)));
}
function book(db, user, body) {
  range(body.from,body.to);
  if(!Number.isInteger(body.equipmentId)||!Number.isInteger(body.quantity)||body.quantity<1) fail(400,'จำนวนต้องเป็นจำนวนเต็มบวก');
  const item=db.equipment.find(e=>e.id===body.equipmentId); if(!item) fail(404,'ไม่พบอุปกรณ์');
  if(available(db,item,body.from,body.to)<body.quantity) fail(409,'อุปกรณ์ไม่พอในช่วงวันที่เลือก');
  const booking={id:db.nextBooking++,equipmentId:item.id,equipmentName:item.name,userId:user.id,userName:user.name,quantity:body.quantity,from:body.from,to:body.to,deposit:item.deposit*body.quantity,status:'pending',createdAt:new Date().toISOString()};
  db.bookings.push(booking); return booking;
}
function cancel(db,user,id) {
  const booking=db.bookings.find(b=>b.id===id); if(!booking) fail(404,'ไม่พบรายการจอง');
  if(booking.userId!==user.id) fail(403,'ยกเลิกได้เฉพาะรายการของตัวเอง');
  if(!active(booking)) fail(409,'รายการนี้ยกเลิกไม่ได้');
  booking.status='cancelled'; booking.updatedAt=new Date().toISOString(); return booking;
}
function changeStatus(db,user,id,status) {
  const booking=db.bookings.find(b=>b.id===id); if(!booking) fail(404,'ไม่พบรายการจอง');
  const allowed={pending:['approved','rejected'],approved:['returned']};
  if(!(allowed[booking.status]||[]).includes(status)) fail(409,'เปลี่ยนสถานะตามลำดับที่กำหนดเท่านั้น');
  booking.status=status; booking.updatedAt=new Date().toISOString(); booking.updatedBy=user.id; return booking;
}
module.exports={active,available,validateEquipment,peak,book,cancel,changeStatus,today};
`;

export const gearController = `const bcrypt=require('bcryptjs'); const jwt=require('jsonwebtoken');
const store=require('../store.js'); const {fail}=require('../lib/errors.js'); const {key}=require('../middleware/auth.js');
const service=require('../services/gear.js'); const {today}=require('../lib/dates.js');
const publicUser=user=>({id:user.id,name:user.name,email:user.email,role:user.role});
exports.login=async(req,res)=>{const {email,password}=req.body;const user=store.read().users.find(u=>u.email===String(email).toLowerCase().trim());if(!user||typeof password!=='string'||!await bcrypt.compare(password,user.passwordHash)) fail(401,'อีเมลหรือรหัสผ่านไม่ถูกต้อง');res.json({token:jwt.sign({userId:user.id},key(),{expiresIn:'1h'}),user:publicUser(user)});};
exports.register=async(req,res)=>{const {name,email,password}=req.body;if(typeof name!=='string'||!name.trim()||typeof email!=='string'||!/^\\S+@\\S+\\.\\S+$/.test(email.trim())||typeof password!=='string'||password.length<8)fail(400,'ตรวจชื่อ อีเมล และรหัสผ่านอย่างน้อย 8 ตัวอักษร');const normalized=email.toLowerCase().trim();const passwordHash=await bcrypt.hash(password,10);const user=store.update(db=>{if(db.users.some(u=>u.email===normalized))fail(409,'อีเมลนี้ถูกใช้แล้ว');const user={id:db.nextUser++,name:name.trim(),email:normalized,passwordHash,role:'student'};db.users.push(user);return publicUser(user);});res.status(201).json(user);};
exports.list=(req,res)=>{const db=store.read();const {search='',category='',availableOnly='',sort='name'}=req.query;let rows=db.equipment.map(e=>({...e,available:service.available(db,e,today(),today())}));rows=rows.filter(e=>e.name.toLowerCase().includes(String(search).toLowerCase())&&(!category||e.category===category)&&(!availableOnly||availableOnly!=='true'||e.available>0));rows.sort(sort==='stock'?(a,b)=>b.available-a.available:(a,b)=>a.name.localeCompare(b.name));res.json(rows);};
exports.detail=(req,res)=>{const db=store.read();const item=db.equipment.find(e=>e.id===Number(req.params.id));if(!item)fail(404,'ไม่พบอุปกรณ์');const from=req.query.from||today(),to=req.query.to||from;res.json({...item,available:service.available(db,item,from,to),from,to});};
exports.book=(req,res)=>res.status(201).json(store.update(db=>service.book(db,req.user,req.body)));
exports.myBookings=(req,res)=>{let rows=store.read().bookings.filter(b=>req.user.role==='admin'||b.userId===req.user.id);if(req.query.status)rows=rows.filter(b=>b.status===req.query.status);res.json(rows.sort((a,b)=>b.id-a.id));};
exports.cancel=(req,res)=>res.json(store.update(db=>service.cancel(db,req.user,Number(req.params.id))));
exports.changeStatus=(req,res)=>res.json(store.update(db=>service.changeStatus(db,req.user,Number(req.params.id),req.body.status)));
exports.createEquipment=(req,res)=>{const data=service.validateEquipment(req.body);const item=store.update(db=>{if(db.equipment.some(e=>e.code===data.code))fail(409,'รหัสอุปกรณ์ซ้ำ');const item={id:db.nextEquipment++,...data};db.equipment.push(item);return item;});res.status(201).json(item);};
exports.updateEquipment=(req,res)=>{const data=service.validateEquipment(req.body);res.json(store.update(db=>{const item=db.equipment.find(e=>e.id===Number(req.params.id));if(!item)fail(404,'ไม่พบอุปกรณ์');if(db.equipment.some(e=>e.id!==item.id&&e.code===data.code))fail(409,'รหัสอุปกรณ์ซ้ำ');if(service.peak(db,item.id)>data.stock)fail(409,'ลดจำนวนต่ำกว่ายอดจองที่มีอยู่ไม่ได้');Object.assign(item,data);return item;}));};
exports.deleteEquipment=(req,res)=>res.json(store.update(db=>{const id=Number(req.params.id);if(!db.equipment.some(e=>e.id===id))fail(404,'ไม่พบอุปกรณ์');if(db.bookings.some(b=>b.equipmentId===id&&service.active(b)))fail(409,'ยังมีรายการจองที่ใช้งานอยู่');db.equipment=db.equipment.filter(e=>e.id!==id);return {message:'ลบอุปกรณ์แล้ว'};}));
exports.summary=(req,res)=>{const db=store.read();const active=db.bookings.filter(service.active);res.json({equipmentCount:db.equipment.length,totalStock:db.equipment.reduce((sum,e)=>sum+e.stock,0),activeBookings:active.length,pendingBookings:active.filter(b=>b.status==='pending').length,depositTotal:active.reduce((sum,b)=>sum+b.deposit,0)});};
`;

export const gearStarterService = `// TODO R04/R05/R06/R07/R08: implement business rules here.
const {fail}=require('../lib/errors.js'); const {today}=require('../lib/dates.js');
const todo=()=>fail(501,'ยังไม่ได้พัฒนา business rules');
exports.today=today;
exports.active=booking=>['pending','approved'].includes(booking.status);
exports.available=()=>0;
exports.validateEquipment=todo;
exports.peak=todo;
exports.book=todo;
exports.cancel=todo;
exports.changeStatus=todo;
`;
export const gearStarterController = gearController
  .replace(/exports.register=async\(req,res\)=>\{[\s\S]*?res.status\(201\)\.json\(user\);\};/, `exports.register=(req,res)=>res.status(501).json({message:'TODO R02 register'});`)
  .replace(/exports.summary=[\s\S]*$/, `exports.summary=(req,res)=>res.status(501).json({message:'TODO R09 summary'});\n`);
