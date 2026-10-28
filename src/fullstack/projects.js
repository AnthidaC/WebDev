import { baseFiles, customerFiles, authFiles, apiTest, uiTest } from './templates.js';
const page = (title, content) => `<!doctype html><html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="/css/style.css"><title>${title}</title></head><body><header><strong>บ้านอร่อย</strong><nav><a href="/home">Home</a><a href="/menu">Menu</a><a href="/order">Order</a></nav></header><main><h1>${title}</h1>${content}</main></body></html>`;
export const restaurantFiles = {
  'backend/app.js': baseFiles['backend/app.js'].replace('module.exports = app;', `const path = require('node:path');
app.use((req,res,next) => { res.set('X-Practice','ready'); next(); });
app.use(express.static(path.join(__dirname,'../public')));
app.use(require('./routes/pages.js'));
module.exports = app;`),
  'backend/routes/pages.js': `const router = require('express').Router();
const path = require('node:path');
const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
router.get(['/', '/home'], (req,res) => res.sendFile(path.join(__dirname,'../../public/index.html')));
router.get('/menu', (req,res) => res.sendFile(path.join(__dirname,'../../public/info/menu.html')));
router.get('/order', (req,res) => res.sendFile(path.join(__dirname,'../../public/info/order.html')));
router.get('/item/:name/price/:price', (req,res) => {
  const price = Number(req.params.price);
  if(!Number.isFinite(price) || price < 0) return res.status(400).send('Invalid price');
  res.send('<!doctype html><meta charset="utf-8"><h1>' + escape(req.params.name) + '</h1><p>' + price + ' บาท</p><a href="/menu">Menu</a>');
});
router.use((req,res) => res.status(404).send('<h1>404 — ไม่พบหน้า</h1>'));
module.exports = router;`,
  'public/index.html': page('Home', '<p>อาหารทำสดทุกวัน เริ่มเลือกเมนูโปรดได้เลย</p><a class="button" href="/menu">ดูเมนู</a>'),
  'public/info/menu.html': page('Menu', '<div class="grid"><article><h2>ข้าวผัด</h2><p>60 บาท</p><a href="/item/ข้าวผัด/price/60">ดูรายละเอียด</a></article><article><h2>ชาไทย</h2><p>35 บาท</p><a href="/item/ชาไทย/price/35">ดูรายละเอียด</a></article></div>'),
  'public/info/order.html': page('Order', '<p>โทรสั่งอาหาร 02-000-0000 หรือเลือกเมนูที่หน้าร้าน</p><a href="/menu">กลับไปเลือกเมนู</a>'),
  'public/css/style.css': `*{box-sizing:border-box}body{margin:0;font:16px/1.8 system-ui;background:#faf5ec;color:#302b20}header{display:flex;justify-content:space-between;padding:20px 8%;background:#fff}nav{display:flex;gap:20px}a{color:#886027}main{max-width:950px;margin:70px auto;padding:0 24px}h1{font-size:48px;letter-spacing:-2px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px}article{padding:24px;background:white;border:1px solid #eadfca;border-radius:12px}.button{display:inline-block;background:#886027;color:white;padding:10px 20px;border-radius:7px;text-decoration:none}@media(max-width:500px){header{padding:15px}nav{gap:12px}main{margin-top:30px}}`,
};
export const restaurantTests = apiTest(`test('restaurant pages, assets, route params and missing page', async () => {
  for(const [path,title] of [['/home','Home'],['/menu','Menu'],['/order','Order']]) {
    const response=await request(path); expect(response.status).toBe(200); expect(await response.text()).toContain('<h1>'+title+'</h1>');
  }
  const css=await request('/css/style.css'); expect(css.status).toBe(200); expect(css.headers.get('content-type')).toContain('text/css');
  const menu=await (await request('/menu')).text(); expect(menu).toContain('/item/');
  const item=await (await request('/item/tea/price/35')).text(); expect(item).toContain('tea'); expect(item).toContain('35');
  expect((await request('/item/tea/price/abc')).status).toBe(400);
  expect((await request('/missing')).status).toBe(404);
});`);

export const splitCustomerFiles = {
  ...customerFiles,
  'frontend/App.jsx': `import Customer from './pages/customers/Customer';
export default function App() { return <main><Customer /></main>; }`,
  'frontend/pages/customers/CustomerForm.jsx': `import { useState, useEffect } from 'react';
export default function CustomerForm({ editing, onSave, busy }) {
  const [name,setName]=useState(''); const [email,setEmail]=useState('');
  useEffect(()=>{setName(editing?.name || '');setEmail(editing?.email || '');},[editing]);
  async function submit(e) { e.preventDefault(); if(await onSave({name,email})) {setName('');setEmail('');} }
  return <form onSubmit={submit}><label>ชื่อ<input required value={name} onChange={e=>setName(e.target.value)}/></label><label>อีเมล<input type="email" required value={email} onChange={e=>setEmail(e.target.value)}/></label><button disabled={busy}>{editing?'บันทึกการแก้ไข':'เพิ่มลูกค้า'}</button></form>;
}`, 
  'frontend/pages/customers/CustomerList.jsx': `export default function CustomerList({ rows, onEdit, onRemove }) {
  if(!rows.length) return <p>ยังไม่มีลูกค้า</p>;
  return <ul>{rows.map(c=><li key={c.id}><strong>{c.name}</strong> — {c.email}<button onClick={()=>onEdit(c)}>แก้ไข</button><button onClick={()=>{if(window.confirm('ลบลูกค้านี้?'))onRemove(c.id);}}>ลบ</button></li>)}</ul>;
}`,
  'frontend/pages/customers/Customer.jsx': `import {useState,useEffect} from 'react';
import {customerApi} from '../../services/customerApi';
import CustomerForm from './CustomerForm'; import CustomerList from './CustomerList';
export default function Customer() {
  const [rows,setRows]=useState([]); const [editing,setEditing]=useState(null); const [busy,setBusy]=useState(false); const [loading,setLoading]=useState(true); const [error,setError]=useState('');
  async function load(){setRows(await customerApi.list());}
  useEffect(()=>{load().catch(()=>setError('โหลดข้อมูลไม่สำเร็จ')).finally(()=>setLoading(false));},[]);
  async function save(data){setBusy(true);setError('');try{if(editing)await customerApi.update(editing.id,data);else await customerApi.create(data);await load();setEditing(null);return true;}catch{setError('บันทึกไม่สำเร็จ');return false;}finally{setBusy(false);}}
  async function remove(id){try{await customerApi.remove(id);await load();}catch{setError('ลบไม่สำเร็จ');}}
  return <><h1>จัดการลูกค้า</h1>{error&&<p role="alert">{error}</p>}<CustomerForm editing={editing} onSave={save} busy={busy}/>{loading?<p>กำลังโหลด...</p>:<CustomerList rows={rows} onEdit={setEditing} onRemove={remove}/>}</>;
}`,
};
export const routedCustomerFiles = {
  ...splitCustomerFiles,
  'frontend/App.jsx': `import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Customer from './pages/customers/Customer';
function Layout(){return <main><nav><Link to="/">Home</Link><Link to="/customers">Customers</Link></nav><Outlet/></main>;}
export default function App(){return <BrowserRouter><Routes><Route element={<Layout/>}><Route path="/" element={<><h1>Home</h1><Customer/></>}/><Route path="/customers" element={<Customer/>}/><Route path="*" element={<h1>404</h1>}/></Route></Routes></BrowserRouter>;}`,
};

export const memberFiles = {
  ...authFiles,
  'tests/member-ui.test.jsx': uiTest(`import {beforeEach} from 'vitest';
import axios from 'axios';
vi.mock('axios',()=>({default:{get:vi.fn(),post:vi.fn()}}));
beforeEach(()=>{sessionStorage.clear();axios.get.mockReset();axios.post.mockReset();});
test('registration validates confirmation before requesting API',async()=>{
  window.history.replaceState({},'','/register');render(<App/>);
  fireEvent.change(screen.getByLabelText('userName'),{target:{value:'Mali'}});
  fireEvent.change(screen.getByLabelText('email'),{target:{value:'m@example.com'}});
  fireEvent.change(screen.getByLabelText('password'),{target:{value:'password123'}});
  fireEvent.change(screen.getByLabelText('confirmation'),{target:{value:'different'}});
  fireEvent.click(screen.getByRole('button',{name:'สมัครสมาชิก'}));
  expect(screen.getByRole('alert').textContent).toContain('ไม่ตรงกัน');expect(axios.post).not.toHaveBeenCalled();
  axios.post.mockResolvedValue({data:{message:'Registered'}});
  fireEvent.change(screen.getByLabelText('confirmation'),{target:{value:'password123'}});
  fireEvent.click(screen.getByRole('button',{name:'สมัครสมาชิก'}));
  await waitFor(()=>expect(axios.post).toHaveBeenCalledWith('/api/auth/register',{userName:'Mali',email:'m@example.com',password:'password123'}));
  expect(await screen.findByRole('heading',{name:'เข้าสู่ระบบ'})).toBeTruthy();
});
test('login opens protected home and logout clears token',async()=>{
  window.history.replaceState({},'','/login');axios.post.mockResolvedValue({data:{token:'test-token'}});axios.get.mockResolvedValue({data:{id:1,userName:'Mali',role:'user'}});render(<App/>);
  fireEvent.change(screen.getByLabelText('ชื่อผู้ใช้'),{target:{value:'Mali'}});
  fireEvent.change(screen.getByLabelText('รหัสผ่าน'),{target:{value:'password123'}});
  fireEvent.click(screen.getByRole('button',{name:'เข้าสู่ระบบ'}));
  expect(await screen.findByRole('heading',{name:'สวัสดี Mali'})).toBeTruthy();expect(sessionStorage.getItem('practice-token')).toBe('test-token');
  fireEvent.click(screen.getByRole('button',{name:'ออกจากระบบ'}));
  expect(await screen.findByRole('heading',{name:'เข้าสู่ระบบ'})).toBeTruthy();expect(sessionStorage.getItem('practice-token')).toBeNull();
});
test('invalid token returns to login',async()=>{
  window.history.replaceState({},'','/');sessionStorage.setItem('practice-token','expired');axios.get.mockRejectedValue(new Error('401'));render(<App/>);
  expect(await screen.findByRole('heading',{name:'เข้าสู่ระบบ'})).toBeTruthy();expect(sessionStorage.getItem('practice-token')).toBeNull();
});`),
  'frontend/context/AuthContext.jsx': `import {createContext,useContext,useState,useEffect} from 'react';
import axios from 'axios';
const AuthContext=createContext(null);
export function AuthProvider({children}) {
  const [user,setUser]=useState(null); const [loading,setLoading]=useState(true);
  async function login(token){const {data}=await axios.get('/api/auth/me',{headers:{Authorization:'Bearer '+token}});sessionStorage.setItem('practice-token',token);setUser(data);}
  function logout(){sessionStorage.removeItem('practice-token');setUser(null);}
  useEffect(()=>{const token=sessionStorage.getItem('practice-token');if(!token){setLoading(false);return;}login(token).catch(logout).finally(()=>setLoading(false));},[]);
  return <AuthContext.Provider value={{user,loading,login,logout}}>{children}</AuthContext.Provider>;
}
export const useAuth=()=>useContext(AuthContext);`,
  'frontend/components/ProtectedRoute.jsx': `import {Navigate} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';
export default function ProtectedRoute({children}){const {user,loading}=useAuth();if(loading)return <p>กำลังตรวจสิทธิ์...</p>;return user?children:<Navigate to="/login" replace/>;}`,
  'frontend/pages/Login.jsx': `import {useState} from 'react'; import {useNavigate} from 'react-router-dom'; import axios from 'axios'; import {useAuth} from '../context/AuthContext';
export default function Login(){const [userName,setUserName]=useState('');const [password,setPassword]=useState('');const [error,setError]=useState('');const [busy,setBusy]=useState(false);const auth=useAuth();const navigate=useNavigate();
async function submit(e){e.preventDefault();setBusy(true);setError('');try{const {data}=await axios.post('/api/auth/login',{userName,password});await auth.login(data.token);navigate('/');}catch(err){setError(err.response?.data?.message||'เข้าสู่ระบบไม่สำเร็จ');}finally{setBusy(false);}}
return <form onSubmit={submit}><h1>เข้าสู่ระบบ</h1><label>ชื่อผู้ใช้<input required value={userName} onChange={e=>setUserName(e.target.value)}/></label><label>รหัสผ่าน<input type="password" required value={password} onChange={e=>setPassword(e.target.value)}/></label><button disabled={busy}>เข้าสู่ระบบ</button>{error&&<p role="alert">{error}</p>}</form>;}`,
  'frontend/pages/Register.jsx': `import {useState} from 'react';import {useNavigate} from 'react-router-dom';import axios from 'axios';
export default function Register(){const [inputs,setInputs]=useState({userName:'',email:'',password:'',confirmation:''});const [error,setError]=useState('');const [busy,setBusy]=useState(false);const navigate=useNavigate();
async function submit(e){e.preventDefault();setError('');if(inputs.password!==inputs.confirmation){setError('รหัสผ่านไม่ตรงกัน');return;}setBusy(true);try{const {userName,email,password}=inputs;await axios.post('/api/auth/register',{userName,email,password});navigate('/login');}catch(err){setError(err.response?.data?.message||'สมัครไม่สำเร็จ');}finally{setBusy(false);}}
return <form onSubmit={submit}><h1>สมัครสมาชิก</h1>{Object.keys(inputs).map(key=><label key={key}>{key}<input required minLength={key==='password'?8:undefined} type={['password','confirmation'].includes(key)?'password':key==='email'?'email':'text'} value={inputs[key]} onChange={e=>setInputs({...inputs,[key]:e.target.value})}/></label>)}<button disabled={busy}>สมัครสมาชิก</button>{error&&<p role="alert">{error}</p>}</form>;}`,
  'frontend/pages/Home.jsx': `import {useNavigate} from 'react-router-dom';import {useAuth} from '../context/AuthContext';
export default function Home(){const {user,logout}=useAuth();const navigate=useNavigate();return <><h1>สวัสดี {user.userName}</h1><p>Member dashboard · {user.role}</p><button onClick={()=>{logout();navigate('/login');}}>ออกจากระบบ</button></>;}`,
  'frontend/App.jsx': `import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {AuthProvider} from './context/AuthContext';import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';import Login from './pages/Login';import Register from './pages/Register';
export default function App(){return <BrowserRouter><AuthProvider><main><nav><Link to="/">Home</Link><Link to="/login">Login</Link><Link to="/register">Register</Link></nav><Routes><Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/><Route path="/login" element={<Login/>}/><Route path="/register" element={<Register/>}/><Route path="*" element={<h1>404</h1>}/></Routes></main></AuthProvider></BrowserRouter>;}`,
};

export const foodFiles = {
  'backend/app.js': baseFiles['backend/app.js'].replace('module.exports = app;', `app.use('/api/menu', require('./routes/menu.js'));
app.get('/api/types',(req,res)=>res.json([{typeId:1,name:'อาหาร'},{typeId:2,name:'เครื่องดื่ม'}]));
module.exports = app;`),
  'backend/routes/menu.js': `const router=require('express').Router();
let rows=[{menuId:1,name:'ข้าวผัด',price:60,isBestSeller:true,typeId:1}];let nextId=2;
function input(body){const {name,price,typeId,isBestSeller}=body;return typeof name==='string'&&name.trim()&&typeof price==='number'&&Number.isFinite(price)&&price>=0&&[1,2].includes(typeId)&&typeof isBestSeller==='boolean';}
router.get('/',(req,res)=>res.json(rows.filter(row=>!req.query.typeId||row.typeId===Number(req.query.typeId))));
router.post('/',(req,res)=>{if(!input(req.body))return res.status(400).json({message:'Invalid menu'});const {name,price,typeId,isBestSeller}=req.body;const row={menuId:nextId++,name:name.trim(),price,typeId,isBestSeller};rows.push(row);res.status(201).json(row);});
router.put('/:id',(req,res)=>{const row=rows.find(r=>r.menuId===Number(req.params.id));if(!row)return res.status(404).json({message:'Not found'});if(!input(req.body))return res.status(400).json({message:'Invalid menu'});const {name,price,typeId,isBestSeller}=req.body;Object.assign(row,{name:name.trim(),price,typeId,isBestSeller});res.json(row);});
router.delete('/:id',(req,res)=>{const index=rows.findIndex(r=>r.menuId===Number(req.params.id));if(index<0)return res.status(404).json({message:'Not found'});rows.splice(index,1);res.json({message:'Deleted'});});
module.exports=router;`,
  'frontend/services/foodApi.js': `import axios from 'axios';
export const foodApi={list:async()=>(await axios.get('/api/menu')).data,types:async()=>(await axios.get('/api/types')).data,save:async(id,data)=>(await(id?axios.put('/api/menu/'+id,data):axios.post('/api/menu',data))).data,remove:async id=>axios.delete('/api/menu/'+id)};`,
  'frontend/pages/FoodForm.jsx': `import {useEffect,useState} from 'react';
const empty={name:'',price:'',typeId:'1',isBestSeller:false};
export default function FoodForm({editing,types,onSave,busy}){const [inputs,setInputs]=useState(empty);useEffect(()=>setInputs(editing||empty),[editing]);
function change(e){setInputs({...inputs,[e.target.name]:e.target.type==='checkbox'?e.target.checked:e.target.value});}
async function submit(e){e.preventDefault();if(await onSave({name:inputs.name,price:Number(inputs.price),typeId:Number(inputs.typeId),isBestSeller:inputs.isBestSeller}))setInputs(empty);}
return <form onSubmit={submit}><label>ชื่อเมนู<input required name="name" value={inputs.name} onChange={change}/></label><label>ราคา<input required min="0" type="number" step="0.01" name="price" value={inputs.price} onChange={change}/></label><label>ประเภท<select name="typeId" value={inputs.typeId} onChange={change}>{types.map(t=><option key={t.typeId} value={t.typeId}>{t.name}</option>)}</select></label><label><span><input type="checkbox" name="isBestSeller" checked={inputs.isBestSeller} onChange={change}/> ขายดี</span></label><button disabled={busy}>{editing?'บันทึกเมนู':'เพิ่มเมนู'}</button></form>;}`,
  'frontend/pages/FoodList.jsx': `export default function FoodList({rows,onEdit,onRemove}){return <div className="grid">{rows.map(row=><article key={row.menuId}><h2>{row.name}</h2><p>{row.price} บาท {row.isBestSeller?'★ ขายดี':''}</p><button onClick={()=>onEdit(row)}>แก้ไข</button><button onClick={()=>onRemove(row.menuId)}>ลบ</button></article>)}</div>;}`,
  'frontend/pages/FoodContainer.jsx': `import {useState,useEffect} from 'react';import {foodApi} from '../services/foodApi';import FoodForm from './FoodForm';import FoodList from './FoodList';
export default function FoodContainer(){const [rows,setRows]=useState([]);const [types,setTypes]=useState([]);const [editing,setEditing]=useState(null);const [filter,setFilter]=useState('');const [error,setError]=useState('');const [loading,setLoading]=useState(true);const [busy,setBusy]=useState(false);
useEffect(()=>{Promise.all([foodApi.list(),foodApi.types()]).then(([r,t])=>{setRows(r);setTypes(t);}).catch(()=>setError('โหลดเมนูไม่สำเร็จ')).finally(()=>setLoading(false));},[]);
async function save(data){setError('');setBusy(true);try{await foodApi.save(editing?.menuId,data);setRows(await foodApi.list());setEditing(null);return true;}catch{setError('บันทึกไม่สำเร็จ');return false;}finally{setBusy(false);}}
async function remove(id){try{await foodApi.remove(id);setRows(await foodApi.list());}catch{setError('ลบไม่สำเร็จ');}}
return <><h1>จัดการเมนู</h1>{error&&<p role="alert">{error}</p>}<FoodForm editing={editing} types={types} onSave={save} busy={busy}/><label>กรองประเภท<select value={filter} onChange={e=>setFilter(e.target.value)}><option value="">ทั้งหมด</option>{types.map(t=><option key={t.typeId} value={t.typeId}>{t.name}</option>)}</select></label>{loading?<p>กำลังโหลด...</p>:<FoodList rows={rows.filter(r=>!filter||r.typeId===Number(filter))} onEdit={setEditing} onRemove={remove}/>}</>;}`,
  'frontend/App.jsx': `import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';import FoodContainer from './pages/FoodContainer';
export default function App(){return <BrowserRouter><main><nav><Link to="/">Home</Link><Link to="/menu">Menu</Link></nav><Routes><Route path="/" element={<><h1>บ้านอร่อย</h1><p>เลือกดูเมนูของร้านได้เลย</p></>}/><Route path="/menu" element={<FoodContainer/>}/><Route path="*" element={<h1>404</h1>}/></Routes></main></BrowserRouter>;}`,
};
export const foodTests=apiTest(`test('menu CRUD, categories, filtering, price and missing IDs',async()=>{
  expect((await(await request('/api/types')).json())).toHaveLength(2);
  expect((await request('/api/menu','POST',{})).status).toBe(400);
  const input={name:'ชาไทย',price:35,typeId:2,isBestSeller:true};
  const response=await request('/api/menu','POST',input);expect(response.status).toBe(201);const row=await response.json();
  const drinks=await(await request('/api/menu?typeId=2')).json();expect(drinks.every(r=>r.typeId===2)).toBe(true);expect(drinks.some(r=>r.menuId===row.menuId)).toBe(true);
  expect((await request('/api/menu','POST',{...input,price:-1})).status).toBe(400);
  expect((await request('/api/menu/'+row.menuId,'PUT',{...input,price:40})).status).toBe(200);
  expect((await(await request('/api/menu')).json()).find(r=>r.menuId===row.menuId).price).toBe(40);
  expect((await request('/api/menu/'+row.menuId,'DELETE')).status).toBe(200);
  expect((await request('/api/menu/'+row.menuId,'DELETE')).status).toBe(404);
});`);
export const foodUiTests=uiTest(`import {foodApi} from '../frontend/services/foodApi';
vi.mock('../frontend/services/foodApi',()=>({foodApi:{list:vi.fn(),types:vi.fn(),save:vi.fn(),remove:vi.fn()}}));
test('menu form sends numeric price and type, list renders new result',async()=>{
  window.history.replaceState({},'','/menu');
  foodApi.list.mockResolvedValueOnce([]).mockResolvedValue([{menuId:1,name:'ชาไทย',price:35,typeId:2,isBestSeller:false}]);
  foodApi.types.mockResolvedValue([{typeId:1,name:'อาหาร'},{typeId:2,name:'เครื่องดื่ม'}]);foodApi.save.mockResolvedValue({menuId:1});
  render(<App/>);await screen.findAllByText('เครื่องดื่ม');
  fireEvent.change(screen.getByLabelText('ชื่อเมนู'),{target:{value:'ชาไทย'}});
  fireEvent.change(screen.getByLabelText('ราคา'),{target:{value:'35'}});
  fireEvent.change(screen.getByLabelText('ประเภท',{exact:true}),{target:{value:'2'}});
  fireEvent.click(screen.getByRole('button',{name:'เพิ่มเมนู'}));
  await waitFor(()=>expect(foodApi.save).toHaveBeenCalledWith(undefined,{name:'ชาไทย',price:35,typeId:2,isBestSeller:false}));
  expect(await screen.findByRole('heading',{name:'ชาไทย'})).toBeTruthy();
});`);
