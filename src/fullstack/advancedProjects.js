import { baseFiles, authFiles, apiTest, uiTest } from './templates.js';
import { memberFiles } from './projects.js';

export const bookingFiles = {
  'backend/app.js': baseFiles['backend/app.js'].replace('module.exports = app;', `app.use('/api',require('./routes/booking.js'));
module.exports=app;`),
  'backend/routes/booking.js': `const router=require('express').Router();
const {randomUUID}=require('node:crypto');
const events=[{id:1,title:'React Weekend',capacity:5,booked:0},{id:2,title:'Node API Lab',capacity:3,booked:0}];
const bookings=[];let nextId=1;
router.get('/events',(req,res)=>res.json(events.map(e=>({...e,available:e.capacity-e.booked}))));
router.post('/bookings',(req,res)=>{
  const {eventId,name,seats}=req.body;
  if(typeof name!=='string'||name.trim().length<2||!Number.isInteger(seats)||seats<1)return res.status(400).json({message:'ชื่อและจำนวนที่นั่งไม่ถูกต้อง'});
  const event=events.find(e=>e.id===eventId);if(!event)return res.status(404).json({message:'ไม่พบกิจกรรม'});
  if(seats>event.capacity-event.booked)return res.status(409).json({message:'ที่นั่งไม่เพียงพอ'});
  // No await between the capacity check and allocation in this in-memory lesson.
  event.booked+=seats;
  const booking={id:nextId++,eventId,name:name.trim(),seats,status:'confirmed',code:randomUUID()};
  bookings.push(booking);res.status(201).json(booking);
});
router.patch('/bookings/:id/cancel',(req,res)=>{
  const booking=bookings.find(b=>b.id===Number(req.params.id));if(!booking)return res.status(404).json({message:'ไม่พบการจอง'});
  const code=req.get('X-Booking-Code');if(!code)return res.status(401).json({message:'ต้องใช้รหัสการจอง'});if(code!==booking.code)return res.status(403).json({message:'รหัสไม่ถูกต้อง'});
  if(booking.status==='cancelled')return res.status(409).json({message:'ยกเลิกไปแล้ว'});
  booking.status='cancelled';events.find(e=>e.id===booking.eventId).booked-=booking.seats;
  res.json(booking);
});
module.exports=router;`,
  'frontend/services/bookingApi.js': `import axios from 'axios';
export const bookingApi={events:async()=>(await axios.get('/api/events')).data,create:async input=>(await axios.post('/api/bookings',input)).data,cancel:async booking=>(await axios.patch('/api/bookings/'+booking.id+'/cancel',{}, {headers:{'X-Booking-Code':booking.code}})).data};`,
  'frontend/components/BookingForm.jsx': `import {useState} from 'react';
export default function BookingForm({events,onBook,busy}){const [eventId,setEventId]=useState('1');const [name,setName]=useState('');const [seats,setSeats]=useState('1');
async function submit(e){e.preventDefault();if(await onBook({eventId:Number(eventId),name,seats:Number(seats)}))setName('');}
return <form onSubmit={submit}><h2>จองที่นั่ง</h2><label>กิจกรรม<select value={eventId} onChange={e=>setEventId(e.target.value)}>{events.map(event=><option key={event.id} value={event.id}>{event.title}</option>)}</select></label><label>ชื่อผู้จอง<input required minLength={2} value={name} onChange={e=>setName(e.target.value)}/></label><label>จำนวนที่นั่ง<input type="number" min="1" required value={seats} onChange={e=>setSeats(e.target.value)}/></label><button disabled={busy||!events.length}>ยืนยันการจอง</button></form>;}`,
  'frontend/pages/BookingPage.jsx': `import {useEffect,useState} from 'react';import {bookingApi} from '../services/bookingApi';import BookingForm from '../components/BookingForm';
export default function BookingPage(){const [events,setEvents]=useState([]);const [mine,setMine]=useState([]);const [error,setError]=useState('');const [loading,setLoading]=useState(true);const [busy,setBusy]=useState(false);
async function load(){setEvents(await bookingApi.events());}
useEffect(()=>{load().catch(()=>setError('โหลดกิจกรรมไม่สำเร็จ')).finally(()=>setLoading(false));},[]);
async function book(input){setError('');setBusy(true);try{const booking=await bookingApi.create(input);setMine(rows=>[...rows,booking]);await load();return true;}catch(e){setError(e.response?.data?.message||'จองไม่สำเร็จ');return false;}finally{setBusy(false);}}
async function cancel(booking){try{const changed=await bookingApi.cancel(booking);setMine(rows=>rows.map(row=>row.id===changed.id?changed:row));await load();}catch(e){setError(e.response?.data?.message||'ยกเลิกไม่สำเร็จ');}}
return <><h1>Workshop booking</h1>{error&&<p role="alert">{error}</p>}{loading?<p>กำลังโหลด...</p>:<div className="grid">{events.map(event=><article key={event.id}><h2>{event.title}</h2><p>ว่าง {event.available} / {event.capacity} ที่นั่ง</p></article>)}</div>}<BookingForm events={events} onBook={book} busy={busy}/><h2>การจองในรอบนี้</h2>{mine.map(booking=><article key={booking.id}><strong>#{booking.id} {booking.name} · {booking.seats} ที่นั่ง</strong><p>{booking.status}</p><small>รหัสการจอง: {booking.code}</small><button disabled={booking.status==='cancelled'} onClick={()=>cancel(booking)}>ยกเลิกการจอง</button></article>)}</>;}`,
  'frontend/App.jsx': `import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';import BookingPage from './pages/BookingPage';
export default function App(){return <BrowserRouter><main><nav><Link to="/">Home</Link><Link to="/booking">Booking</Link></nav><Routes><Route path="/" element={<><h1>Weekend workshops</h1><p>เลือกกิจกรรมและจองที่นั่ง</p></>}/><Route path="/booking" element={<BookingPage/>}/><Route path="*" element={<h1>404</h1>}/></Routes></main></BrowserRouter>;}`,
};
export const bookingTests=apiTest(`test('capacity, cancellation code and concurrent last-seat requests',async()=>{
  expect((await request('/api/bookings','POST',{eventId:1,name:'Mali',seats:0})).status).toBe(400);
  expect((await request('/api/bookings','POST',{eventId:99,name:'Mali',seats:1})).status).toBe(404);
  const response=await request('/api/bookings','POST',{eventId:1,name:'Mali',seats:4});expect(response.status).toBe(201);const booking=await response.json();
  const competitors=await Promise.all(['A1','B2'].map(name=>request('/api/bookings','POST',{eventId:1,name,seats:1})));
  expect(competitors.map(r=>r.status).sort()).toEqual([201,409]);
  expect((await(await request('/api/events')).json()).find(e=>e.id===1).available).toBe(0);
  expect((await request('/api/bookings/'+booking.id+'/cancel','PATCH',{})).status).toBe(401);
  const cancel=()=>fetch(base+'/api/bookings/'+booking.id+'/cancel',{method:'PATCH',headers:{'X-Booking-Code':booking.code}});
  expect((await cancel()).status).toBe(200);expect((await cancel()).status).toBe(409);
  expect((await(await request('/api/events')).json()).find(e=>e.id===1).available).toBe(4);
});`);
export const bookingUiTests=uiTest(`import {bookingApi} from '../frontend/services/bookingApi';
vi.mock('../frontend/services/bookingApi',()=>({bookingApi:{events:vi.fn(),create:vi.fn(),cancel:vi.fn()}}));
test('booking form converts seats and displays booking confirmation',async()=>{
  window.history.replaceState({},'','/booking');bookingApi.events.mockResolvedValue([{id:1,title:'React Weekend',available:5,capacity:5}]);bookingApi.create.mockResolvedValue({id:1,eventId:1,name:'Mali',seats:2,status:'confirmed',code:'test-code'});
  render(<App/>);await screen.findByText('ว่าง 5 / 5 ที่นั่ง');
  fireEvent.change(screen.getByLabelText('ชื่อผู้จอง'),{target:{value:'Mali'}});fireEvent.change(screen.getByLabelText('จำนวนที่นั่ง'),{target:{value:'2'}});fireEvent.click(screen.getByRole('button',{name:'ยืนยันการจอง'}));
  await waitFor(()=>expect(bookingApi.create).toHaveBeenCalledWith({eventId:1,name:'Mali',seats:2}));expect(await screen.findByText('confirmed')).toBeTruthy();
});`);

export const inventoryFiles = {
  'backend/app.js': baseFiles['backend/app.js'].replace('module.exports = app;', `app.use('/api',require('./routes/inventory.js'));
module.exports=app;`),
  'backend/routes/inventory.js': `const router=require('express').Router();
const products=[{id:1,name:'Keyboard',stock:10,version:1},{id:2,name:'Mouse',stock:5,version:1}];const movements=[];
router.get('/products',(req,res)=>res.json(products));router.get('/movements',(req,res)=>res.json(movements));
router.post('/movements',(req,res)=>{
  const {productId,type,quantity,version,note}=req.body;const product=products.find(p=>p.id===productId);
  if(!product)return res.status(404).json({message:'ไม่พบสินค้า'});
  if(!['in','out'].includes(type)||!Number.isInteger(quantity)||quantity<=0||typeof note!=='string'||!note.trim())return res.status(400).json({message:'ตรวจชนิด จำนวน และเหตุผล'});
  if(version!==product.version)return res.status(409).json({message:'ข้อมูลเปลี่ยนแล้ว กรุณาโหลดใหม่'});
  if(type==='out'&&quantity>product.stock)return res.status(409).json({message:'สินค้าไม่เพียงพอ'});
  const before=product.stock;product.stock+=type==='in'?quantity:-quantity;product.version++;
  const movement={id:movements.length+1,productId,type,quantity,note:note.trim(),before,after:product.stock,createdAt:new Date().toISOString()};movements.push(movement);res.status(201).json(movement);
});
module.exports=router;`,
  'frontend/services/inventoryApi.js': `import axios from 'axios';export const inventoryApi={products:async()=>(await axios.get('/api/products')).data,movements:async()=>(await axios.get('/api/movements')).data,move:async data=>(await axios.post('/api/movements',data)).data};`,
  'frontend/pages/Inventory.jsx': `import {useEffect,useState} from 'react';import {inventoryApi} from '../services/inventoryApi';
export default function Inventory(){const [products,setProducts]=useState([]);const [history,setHistory]=useState([]);const [id,setId]=useState('1');const [type,setType]=useState('out');const [quantity,setQuantity]=useState('1');const [note,setNote]=useState('');const [error,setError]=useState('');const [busy,setBusy]=useState(false);
async function load(){const [p,h]=await Promise.all([inventoryApi.products(),inventoryApi.movements()]);setProducts(p);setHistory(h);}
useEffect(()=>{load().catch(()=>setError('โหลดข้อมูลไม่สำเร็จ'));},[]);
async function submit(e){e.preventDefault();setError('');setBusy(true);const product=products.find(p=>p.id===Number(id));try{await inventoryApi.move({productId:product.id,type,quantity:Number(quantity),note,version:product.version});setNote('');await load();}catch(err){setError(err.response?.data?.message||'บันทึกไม่สำเร็จ');await load().catch(()=>{});}finally{setBusy(false);}}
return <><h1>คลังสินค้า</h1>{error&&<p role="alert">{error}</p>}<div className="grid">{products.map(p=><article key={p.id}><h2>{p.name}</h2><p>คงเหลือ {p.stock} ชิ้น</p><small>version {p.version}</small></article>)}</div><form onSubmit={submit}><label>สินค้า<select value={id} onChange={e=>setId(e.target.value)}>{products.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select></label><label>ประเภท<select value={type} onChange={e=>setType(e.target.value)}><option value="out">เบิกออก</option><option value="in">รับเข้า</option></select></label><label>จำนวน<input required type="number" min="1" value={quantity} onChange={e=>setQuantity(e.target.value)}/></label><label>เหตุผล<input required value={note} onChange={e=>setNote(e.target.value)}/></label><button disabled={busy||!products.length}>บันทึกรายการ</button></form><h2>ประวัติการเคลื่อนไหว</h2><ul>{history.map(row=><li key={row.id}>{row.type} {row.quantity} · {row.before} → {row.after} · {row.note}</li>)}</ul></>;}`,
  'frontend/App.jsx': `import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';import Inventory from './pages/Inventory';
export default function App(){return <BrowserRouter><main><nav><Link to="/">Stock</Link><Link to="/guide">Guide</Link></nav><Routes><Route path="/" element={<Inventory/>}/><Route path="/guide" element={<><h1>การรับเข้าและเบิกออก</h1><p>ทุกครั้งที่ยอดเปลี่ยน ต้องมีประวัติและเหตุผล</p></>}/><Route path="*" element={<h1>404</h1>}/></Routes></main></BrowserRouter>;}`,
};
export const inventoryTests=apiTest(`test('stock cannot go negative, movements keep audit trail, stale versions rejected',async()=>{
  const original=(await(await request('/api/products')).json()).find(p=>p.id===1);
  expect((await request('/api/movements','POST',{productId:1,type:'out',quantity:0,note:'invalid',version:original.version})).status).toBe(400);
  expect((await request('/api/movements','POST',{productId:1,type:'out',quantity:99,note:'over',version:original.version})).status).toBe(409);
  const response=await request('/api/movements','POST',{productId:1,type:'out',quantity:3,note:'ยืมไปใช้',version:original.version});expect(response.status).toBe(201);expect(await response.json()).toMatchObject({before:10,after:7});
  expect((await request('/api/movements','POST',{productId:1,type:'out',quantity:1,note:'stale',version:original.version})).status).toBe(409);
  const changed=(await(await request('/api/products')).json()).find(p=>p.id===1);
  expect((await request('/api/movements','POST',{productId:1,type:'in',quantity:2,note:'คืน',version:changed.version})).status).toBe(201);
  expect((await(await request('/api/products')).json()).find(p=>p.id===1).stock).toBe(9);
  const history=await(await request('/api/movements')).json();expect(history).toHaveLength(2);expect(history[1]).toMatchObject({before:7,after:9,note:'คืน'});
});`);
export const inventoryUiTests=uiTest(`import {inventoryApi} from '../frontend/services/inventoryApi';
vi.mock('../frontend/services/inventoryApi',()=>({inventoryApi:{products:vi.fn(),movements:vi.fn(),move:vi.fn()}}));
test('stock form sends the loaded version and reloads balance',async()=>{
  window.history.replaceState({},'','/');inventoryApi.products.mockResolvedValueOnce([{id:1,name:'Keyboard',stock:10,version:1}]).mockResolvedValue([{id:1,name:'Keyboard',stock:7,version:2}]);inventoryApi.movements.mockResolvedValue([]);inventoryApi.move.mockResolvedValue({after:7});
  render(<App/>);await screen.findByText('คงเหลือ 10 ชิ้น');fireEvent.change(screen.getByLabelText('จำนวน'),{target:{value:'3'}});fireEvent.change(screen.getByLabelText('เหตุผล'),{target:{value:'ยืม'}});fireEvent.click(screen.getByRole('button',{name:'บันทึกรายการ'}));
  await waitFor(()=>expect(inventoryApi.move).toHaveBeenCalledWith({productId:1,type:'out',quantity:3,note:'ยืม',version:1}));expect(await screen.findByText('คงเหลือ 7 ชิ้น')).toBeTruthy();
});`);

export const reviewFiles = {
  ...authFiles,
  ...Object.fromEntries(Object.entries(memberFiles).filter(([path])=>path.startsWith('frontend/'))),
  'backend/auth-store.js': `const bcrypt=require('bcryptjs');
module.exports={nextId:3,users:[{id:1,userName:'admin',email:'admin@example.com',passwordHash:bcrypt.hashSync('admin12345',10),role:'admin'},{id:2,userName:'member',email:'member@example.com',passwordHash:bcrypt.hashSync('member12345',10),role:'user'}]};`,
  'backend/app.js': authFiles['backend/app.js'].replace('module.exports = app;', `app.use('/api',require('./routes/community.js'));
module.exports=app;`),
  'backend/routes/community.js': `const router=require('express').Router();const verifyToken=require('../middleware/verifyToken.js');const store=require('../auth-store.js');
let menu=[{id:1,name:'ข้าวผัด',price:60},{id:2,name:'ชาไทย',price:35}];let reviews=[];let nextMenu=3,nextReview=1;
function authenticated(req,res,next){verifyToken(req,res,()=>{const user=store.users.find(u=>u.id===req.user.userId);if(!user)return res.status(401).json({message:'Unknown user'});req.account=user;next();});}
function admin(req,res,next){authenticated(req,res,()=>{if(req.account.role!=='admin')return res.status(403).json({message:'Admin only'});next();});}
function validMenu(body){return typeof body.name==='string'&&body.name.trim()&&typeof body.price==='number'&&Number.isFinite(body.price)&&body.price>=0;}
function validReview(body){return Number.isInteger(body.rating)&&body.rating>=1&&body.rating<=5&&typeof body.comment==='string'&&body.comment.length<=500;}
router.get('/menu',(req,res)=>res.json(menu.map(item=>{const ratings=reviews.filter(r=>r.menuId===item.id);return {...item,reviewCount:ratings.length,average:ratings.length?ratings.reduce((sum,r)=>sum+r.rating,0)/ratings.length:0};})));
router.post('/menu',admin,(req,res)=>{if(!validMenu(req.body))return res.status(400).json({message:'Invalid menu'});const item={id:nextMenu++,name:req.body.name.trim(),price:req.body.price};menu.push(item);res.status(201).json(item);});
router.put('/menu/:id',admin,(req,res)=>{const item=menu.find(m=>m.id===Number(req.params.id));if(!item)return res.status(404).json({message:'Not found'});if(!validMenu(req.body))return res.status(400).json({message:'Invalid menu'});Object.assign(item,{name:req.body.name.trim(),price:req.body.price});res.json(item);});
router.delete('/menu/:id',admin,(req,res)=>{const id=Number(req.params.id);if(!menu.some(m=>m.id===id))return res.status(404).json({message:'Not found'});menu=menu.filter(m=>m.id!==id);reviews=reviews.filter(r=>r.menuId!==id);res.json({message:'Deleted'});});
router.get('/menu/:id/reviews',(req,res)=>{const id=Number(req.params.id);if(!menu.some(m=>m.id===id))return res.status(404).json({message:'Not found'});res.json(reviews.filter(r=>r.menuId===id));});
router.post('/menu/:id/reviews',authenticated,(req,res)=>{const id=Number(req.params.id);if(!menu.some(m=>m.id===id))return res.status(404).json({message:'Not found'});if(!validReview(req.body))return res.status(400).json({message:'Rating must be 1..5'});if(reviews.some(r=>r.menuId===id&&r.userId===req.account.id))return res.status(409).json({message:'รีวิวเมนูนี้แล้ว'});const review={id:nextReview++,menuId:id,userId:req.account.id,userName:req.account.userName,rating:req.body.rating,comment:req.body.comment};reviews.push(review);res.status(201).json(review);});
router.put('/reviews/:id',authenticated,(req,res)=>{const review=reviews.find(r=>r.id===Number(req.params.id));if(!review)return res.status(404).json({message:'Not found'});if(review.userId!==req.account.id)return res.status(403).json({message:'Owner only'});if(!validReview(req.body))return res.status(400).json({message:'Invalid rating'});Object.assign(review,{rating:req.body.rating,comment:req.body.comment});res.json(review);});
router.delete('/reviews/:id',authenticated,(req,res)=>{const review=reviews.find(r=>r.id===Number(req.params.id));if(!review)return res.status(404).json({message:'Not found'});if(review.userId!==req.account.id&&req.account.role!=='admin')return res.status(403).json({message:'Owner or admin only'});reviews=reviews.filter(r=>r.id!==review.id);res.json({message:'Deleted'});});
module.exports=router;`,
  'frontend/services/communityApi.js': `import axios from 'axios';const auth=()=>({headers:{Authorization:'Bearer '+sessionStorage.getItem('practice-token')}});
export const communityApi={menu:async()=>(await axios.get('/api/menu')).data,reviews:async id=>(await axios.get('/api/menu/'+id+'/reviews')).data,review:async(id,data)=>(await axios.post('/api/menu/'+id+'/reviews',data,auth())).data,deleteReview:async id=>axios.delete('/api/reviews/'+id,auth()),saveMenu:async(id,data)=>id?axios.put('/api/menu/'+id,data,auth()):axios.post('/api/menu',data,auth()),deleteMenu:async id=>axios.delete('/api/menu/'+id,auth())};`,
  'frontend/pages/CommunityMenu.jsx': `import {useState,useEffect} from 'react';import {Link} from 'react-router-dom';import {communityApi} from '../services/communityApi';
export default function CommunityMenu(){const [rows,setRows]=useState([]);const [error,setError]=useState('');useEffect(()=>{communityApi.menu().then(setRows).catch(()=>setError('โหลดเมนูไม่สำเร็จ'));},[]);return <><h1>Community menu</h1>{error&&<p role="alert">{error}</p>}<div className="grid">{rows.map(row=><article key={row.id}><h2>{row.name}</h2><p>{row.price} บาท</p><p>★ {row.average.toFixed(1)} · {row.reviewCount} รีวิว</p><Link to={'/menu/'+row.id}>อ่านรีวิว / ให้คะแนน</Link></article>)}</div></>;}`,
  'frontend/pages/MenuDetail.jsx': `import {useState,useEffect} from 'react';import {useParams,Link} from 'react-router-dom';import {useAuth} from '../context/AuthContext';import {communityApi} from '../services/communityApi';
export default function MenuDetail(){const {id}=useParams();const {user}=useAuth();const [row,setRow]=useState(null);const [reviews,setReviews]=useState([]);const [rating,setRating]=useState('5');const [comment,setComment]=useState('');const [error,setError]=useState('');const [busy,setBusy]=useState(false);
async function load(){const [menu,list]=await Promise.all([communityApi.menu(),communityApi.reviews(id)]);setRow(menu.find(m=>m.id===Number(id)));setReviews(list);}
useEffect(()=>{load().catch(()=>setError('ไม่พบเมนูหรือโหลดไม่สำเร็จ'));},[id]);
async function submit(e){e.preventDefault();setError('');setBusy(true);try{await communityApi.review(id,{rating:Number(rating),comment});setComment('');await load();}catch(e){setError(e.response?.data?.message||'รีวิวไม่สำเร็จ');}finally{setBusy(false);}}
async function remove(reviewId){try{await communityApi.deleteReview(reviewId);await load();}catch(e){setError(e.response?.data?.message||'ลบไม่สำเร็จ');}}
return <>{error&&<p role="alert">{error}</p>}{row&&<><h1>{row.name}</h1><p>{row.price} บาท · ★ {row.average.toFixed(1)} ({row.reviewCount} รีวิว)</p></>}{user?<form onSubmit={submit}><label>คะแนน<select value={rating} onChange={e=>setRating(e.target.value)}>{[1,2,3,4,5].map(n=><option key={n}>{n}</option>)}</select></label><label>ความคิดเห็น<textarea maxLength={500} value={comment} onChange={e=>setComment(e.target.value)}/></label><button disabled={busy}>ส่งรีวิว</button></form>:<p><Link to="/login">เข้าสู่ระบบเพื่อให้คะแนน</Link></p>}<ul>{reviews.map(review=><li key={review.id}><strong>{review.userName} · {review.rating} ดาว</strong><p>{review.comment}</p>{user&&(review.userId===user.id||user.role==='admin')&&<button onClick={()=>remove(review.id)}>ลบรีวิว</button>}</li>)}</ul></>;}`,
  'frontend/pages/AdminMenu.jsx': `import {useState,useEffect} from 'react';import {communityApi} from '../services/communityApi';
export default function AdminMenu(){const [rows,setRows]=useState([]);const [editing,setEditing]=useState(null);const [name,setName]=useState('');const [price,setPrice]=useState('');const [error,setError]=useState('');const [busy,setBusy]=useState(false);async function load(){setRows(await communityApi.menu());}useEffect(()=>{load().catch(()=>setError('โหลดไม่สำเร็จ'));},[]);
async function submit(e){e.preventDefault();setBusy(true);setError('');try{await communityApi.saveMenu(editing,{name,price:Number(price)});setEditing(null);setName('');setPrice('');await load();}catch(e){setError(e.response?.data?.message||'บันทึกไม่สำเร็จ');}finally{setBusy(false);}}
async function remove(id){try{await communityApi.deleteMenu(id);await load();}catch{setError('ลบไม่สำเร็จ');}}
return <><h1>Admin · จัดการเมนู</h1>{error&&<p role="alert">{error}</p>}<form onSubmit={submit}><label>ชื่อเมนู<input required value={name} onChange={e=>setName(e.target.value)}/></label><label>ราคา<input required type="number" min="0" value={price} onChange={e=>setPrice(e.target.value)}/></label><button disabled={busy}>บันทึกเมนู</button></form><ul>{rows.map(row=><li key={row.id}>{row.name} {row.price} บาท<button onClick={()=>{setEditing(row.id);setName(row.name);setPrice(row.price);}}>แก้ไข</button><button onClick={()=>remove(row.id)}>ลบ</button></li>)}</ul></>;}`,
  'frontend/App.jsx': `import {BrowserRouter,Routes,Route,Link,Navigate} from 'react-router-dom';
import {AuthProvider,useAuth} from './context/AuthContext';import Login from './pages/Login';import Register from './pages/Register';import CommunityMenu from './pages/CommunityMenu';import MenuDetail from './pages/MenuDetail';import AdminMenu from './pages/AdminMenu';
function AdminRoute(){const {user,loading}=useAuth();if(loading)return <p>กำลังตรวจสิทธิ์...</p>;if(!user)return <Navigate to="/login" replace/>;return user.role==='admin'?<AdminMenu/>:<h1>403 · เฉพาะผู้ดูแล</h1>;}
function Frame(){const {user,logout}=useAuth();return <main><nav><Link to="/">Menu</Link>{user?<><span>{user.userName}</span><button onClick={logout}>Logout</button></>:<><Link to="/login">Login</Link><Link to="/register">Register</Link></>}{user?.role==='admin'&&<Link to="/admin">Admin</Link>}</nav><Routes><Route path="/" element={<CommunityMenu/>}/><Route path="/menu/:id" element={<MenuDetail/>}/><Route path="/login" element={<Login/>}/><Route path="/register" element={<Register/>}/><Route path="/admin" element={<AdminRoute/>}/><Route path="*" element={<h1>404</h1>}/></Routes><hr/><small>บัญชีฝึก: member / member12345 · admin / admin12345</small></main>;}
export default function App(){return <BrowserRouter><AuthProvider><Frame/></AuthProvider></BrowserRouter>;}`,
};
export const reviewTests=apiTest(`test('guest/user/admin permissions, ownership and aggregate scores',async()=>{
  const login=async(userName,password)=>(await(await request('/api/auth/login','POST',{userName,password})).json()).token;
  expect((await request('/api/menu')).status).toBe(200);expect((await request('/api/menu','POST',{name:'X',price:10})).status).toBe(401);
  const member=await login('member','member12345');const admin=await login('admin','admin12345');
  expect((await request('/api/menu','POST',{name:'X',price:10},member)).status).toBe(403);
  const created=await request('/api/menu','POST',{name:'Coffee',price:45},admin);expect(created.status).toBe(201);const menu=await created.json();
  expect((await request('/api/menu/'+menu.id+'/reviews','POST',{rating:6,comment:''},member)).status).toBe(400);
  const rated=await request('/api/menu/'+menu.id+'/reviews','POST',{rating:4,comment:'อร่อย'},member);expect(rated.status).toBe(201);const review=await rated.json();
  expect((await request('/api/menu/'+menu.id+'/reviews','POST',{rating:5,comment:'again'},member)).status).toBe(409);
  expect((await(await request('/api/menu')).json()).find(m=>m.id===menu.id)).toMatchObject({average:4,reviewCount:1});
  await request('/api/auth/register','POST',{userName:'other',email:'other@example.com',password:'password123',role:'admin'});
  const other=await login('other','password123');
  expect((await request('/api/reviews/'+review.id,'PUT',{rating:1,comment:'attack'},other)).status).toBe(403);
  expect((await request('/api/menu','POST',{name:'attack',price:1},other)).status).toBe(403);
  expect((await request('/api/reviews/'+review.id,'PUT',{rating:5,comment:'updated'},member)).status).toBe(200);
  expect((await request('/api/reviews/'+review.id,'DELETE',undefined,admin)).status).toBe(200);
  expect((await(await request('/api/menu')).json()).find(m=>m.id===menu.id)).toMatchObject({average:0,reviewCount:0});
  expect((await request('/api/menu/'+menu.id,'DELETE',undefined,admin)).status).toBe(200);
});`);
export const reviewUiTests=uiTest(`import axios from 'axios';
vi.mock('axios',()=>({default:{get:vi.fn(),post:vi.fn()}}));
test('guest can read ratings and follow review details',async()=>{
  window.history.replaceState({},'','/');sessionStorage.clear();axios.get.mockResolvedValue({data:[{id:1,name:'ข้าวผัด',price:60,average:4.5,reviewCount:2}]});render(<App/>);
  expect(await screen.findByRole('heading',{name:'ข้าวผัด'})).toBeTruthy();expect(screen.getByText('★ 4.5 · 2 รีวิว')).toBeTruthy();expect(screen.queryByRole('link',{name:'Admin'})).toBeNull();
});
test('user visiting admin URL is denied at UI too',async()=>{
  window.history.replaceState({},'','/admin');sessionStorage.setItem('practice-token','user-token');axios.get.mockResolvedValue({data:{id:2,userName:'member',role:'user'}});render(<App/>);
  expect(await screen.findByRole('heading',{name:'403 · เฉพาะผู้ดูแล'})).toBeTruthy();sessionStorage.clear();
});`);
