import React, { useState } from 'react';
import { Play, CheckCircle2, Eye, Server, RefreshCw, Send, ShieldCheck, Terminal, Layers } from 'lucide-react';

export default function TargetDemoViewer({ item }) {
  const id = item.id;

  return (
    <div className="fs-target-demo-viewer" style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary, #ffffff)' }}>
      {/* Target Demo Banner */}
      <div
        style={{
          padding: '10px 16px',
          background: 'linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%)',
          borderBottom: '1px solid var(--border-color, #cbd5e1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 8px', borderRadius: '12px', background: '#16a34a', color: '#ffffff', fontSize: '11px', fontWeight: '700' }}>
            <Eye size={12} /> ผลลัพธ์เป้าหมายจริง (Demo)
          </span>
          <span style={{ fontSize: '13px', fontWeight: '600', color: '#0f172a' }}>
            {item.title}
          </span>
        </div>
        <span style={{ fontSize: '11px', color: '#64748b' }}>
          ตัวอย่างที่ต้องได้เมื่อทำโจทย์สำเร็จ
        </span>
      </div>

      {/* Interactive Demo Body */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
        {renderInteractiveDemo(id, item)}
      </div>
    </div>
  );
}

function renderInteractiveDemo(id, item) {
  // 1. Campus Gear Capstone Exam
  if (id === 'exam-store-hub') {
    return <StoreHubTargetDemo />;
  }
  if (id === 'exam-final-practice') {
    return <FinalPracticeTargetDemo />;
  }

  if (id === 'exam-campus-gear') {
    return (
      <iframe
        src={`${import.meta.env.BASE_URL}exams/campus-gear/index.html`}
        title="CAMPUS GEAR Target Demo"
        style={{ width: '100%', height: '100%', minHeight: '520px', border: 'none', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
      />
    );
  }

  // 2. Restaurant Multi-page Website (lab-restaurant - Todo 2 in ch5)
  if (id === 'lab-restaurant') {
    return <RestaurantTargetDemo />;
  }

  // 3. Food Menu with User / Admin Mode (lab-food - Todo in ch6 & ch7)
  if (id === 'lab-food') {
    return <FoodTargetDemo />;
  }

  // 4. Customer Manager CRUD (lab-customers, fs-13, exam-react)
  if (['lab-customers', 'fs-13', 'exam-react'].includes(id)) {
    return <CustomerTargetDemo />;
  }

  // 5. Member Auth & JWT Portal (lab-member, fs-16, fs-17, exam-auth)
  if (['lab-member', 'fs-16', 'fs-17', 'exam-auth'].includes(id)) {
    return <AuthTargetDemo id={id} />;
  }

  // 6. React UI Basics (fs-00, fs-06, fs-07, fs-08, fs-09, fs-10, fs-11, guided-2, guided-3, guided-4)
  if (['fs-00', 'guided-2'].includes(id)) {
    return (
      <div style={{ padding: '30px', textAlign: 'center', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h1 style={{ color: '#0284c7', fontSize: '24px', marginBottom: '10px' }}>My Full Stack Lab</h1>
        <p style={{ color: '#475569', fontSize: '15px' }}>พื้นที่ฝึก Full Stack ของฉัน (แก้ไขใน frontend/App.jsx แล้ว)</p>
        <div style={{ marginTop: '20px', padding: '8px 16px', background: '#e0f2fe', color: '#0369a1', borderRadius: '20px', display: 'inline-block', fontSize: '12px', fontWeight: '600' }}>
          ✓ ข้อความตรงตามโจทย์ 100%
        </div>
      </div>
    );
  }

  if (id === 'fs-06') {
    return (
      <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '16px', color: '#0f172a' }}>รายการเมนูแนะนำ (MenuCard Component)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div style={{ background: '#ffffff', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#1e293b' }}>ข้าวผัด</h4>
            <p style={{ margin: 0, color: '#16a34a', fontWeight: '700', fontSize: '16px' }}>60 บาท</p>
          </div>
          <div style={{ background: '#ffffff', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h4 style={{ margin: '0 0 8px 0', color: '#1e293b' }}>ชาไทย</h4>
            <p style={{ margin: 0, color: '#16a34a', fontWeight: '700', fontSize: '16px' }}>35 บาท</p>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'fs-07') {
    return <CounterTargetDemo />;
  }

  if (id === 'fs-08') {
    return <FormTargetDemo />;
  }

  if (id === 'fs-09' || id === 'guided-3') {
    return <FetchApiTargetDemo />;
  }

  if (id === 'fs-10') {
    return <RouterTargetDemo />;
  }

  if (id === 'guided-4') {
    return <TaskBoardTargetDemo />;
  }

  // 7. Backend API Demos (guided-0, guided-1, fs-01, fs-02, fs-03, fs-04, fs-05, fs-12, fs-14, fs-15, exam-api, lab-booking, lab-inventory, lab-community)
  return <ApiTargetDemo id={id} item={item} />;
}

/* =========================================================================
   Interactive Component 1: Restaurant Multi-page Demo (lab-restaurant)
   ========================================================================= */
function RestaurantTargetDemo() {
  const [route, setRoute] = useState('/home');

  return (
    <div style={{ border: '1px solid #cbd5e1', borderRadius: '8px', overflow: 'hidden', background: '#ffffff' }}>
      {/* Mock Browser URL Bar */}
      <div style={{ background: '#f1f5f9', padding: '8px 12px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>URL:</span>
        <span style={{ background: '#ffffff', padding: '4px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '12px', fontFamily: 'monospace', flex: 1 }}>
          http://localhost:3000{route}
        </span>
        <div style={{ display: 'flex', gap: '4px' }}>
          {['/home', '/menu', '/order', '/item/ชาไทย/price/35', '/item/ชาเขียว/price/40'].map(p => (
            <button
              key={p}
              onClick={() => setRoute(p)}
              style={{
                padding: '3px 8px',
                fontSize: '11px',
                borderRadius: '4px',
                border: '1px solid #cbd5e1',
                background: route === p ? '#0284c7' : '#ffffff',
                color: route === p ? '#ffffff' : '#334155',
                cursor: 'pointer',
              }}
            >
              {p.split('/')[1] || 'home'}
            </button>
          ))}
        </div>
      </div>

      {/* Page Content View */}
      <div style={{ padding: '24px', minHeight: '260px' }}>
        {route === '/home' && (
          <div>
            <h1 style={{ color: '#b91c1c', borderBottom: '2px solid #b91c1c', paddingBottom: '8px' }}>ยินดีต้อนรับสู่ร้านอาหารไทย (index.html)</h1>
            <p style={{ fontSize: '15px', color: '#334155' }}>เราบริการอาหารไทยรสเลิศ ปรุงสดใหม่ทุกวัน</p>
            <div style={{ marginTop: '16px' }}>
              <button onClick={() => setRoute('/menu')} style={{ padding: '8px 16px', background: '#b91c1c', color: '#ffffff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                ดูรายการอาหารทั้งหมด ➔
              </button>
            </div>
          </div>
        )}

        {route === '/menu' && (
          <div>
            <h1 style={{ color: '#b91c1c' }}>รายการอาหารแนะนำ (menu.html)</h1>
            <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
              <li>
                <span style={{ fontWeight: '600' }}>ชาไทย - 35 บาท</span>{' '}
                <button onClick={() => setRoute('/item/ชาไทย/price/35')} style={{ marginLeft: '10px', padding: '2px 8px', fontSize: '12px', background: '#e0f2fe', color: '#0369a1', border: '1px solid #bae6fd', borderRadius: '4px', cursor: 'pointer' }}>
                  ดูรายละเอียด (/item/ชาไทย/price/35)
                </button>
              </li>
              <li>
                <span style={{ fontWeight: '600' }}>ชาเขียว - 40 บาท</span>{' '}
                <button onClick={() => setRoute('/item/ชาเขียว/price/40')} style={{ marginLeft: '10px', padding: '2px 8px', fontSize: '12px', background: '#e0f2fe', color: '#0369a1', border: '1px solid #bae6fd', borderRadius: '4px', cursor: 'pointer' }}>
                  ดูรายละเอียด (/item/ชาเขียว/price/40)
                </button>
              </li>
            </ul>
          </div>
        )}

        {route === '/order' && (
          <div>
            <h1 style={{ color: '#b91c1c' }}>สั่งซื้ออาหารออนไลน์ (order.html)</h1>
            <p>กรอกแบบฟอร์มเพื่อสั่งอาหารเดลิเวอรีส่งตรงถึงบ้าน</p>
          </div>
        )}

        {route.startsWith('/item/') && (
          <div style={{ background: '#fef2f2', padding: '20px', borderRadius: '8px', border: '1px solid #fecaca' }}>
            <span style={{ fontSize: '11px', background: '#ef4444', color: '#ffffff', padding: '2px 6px', borderRadius: '4px', fontWeight: '700' }}>
              Route Parameters Result
            </span>
            <h2 style={{ color: '#991b1b', marginTop: '8px' }}>
              เมนู: {decodeURIComponent(route.split('/')[2])}
            </h2>
            <p style={{ fontSize: '18px', fontWeight: '700', color: '#16a34a' }}>
              ราคา: {route.split('/')[4]} บาท
            </p>
            <button onClick={() => setRoute('/menu')} style={{ marginTop: '10px', padding: '4px 10px', fontSize: '12px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer' }}>
              ← กลับไปหน้ารายการเมนู
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================================
   Interactive Component 2: Food Menu with User/Admin Mode (lab-food)
   ========================================================================= */
function FoodTargetDemo() {
  const [mode, setMode] = useState('admin'); // 'user' | 'admin'
  const [foods, setFoods] = useState([
    { id: 1, name: 'cake', price: 35, isBestSeller: true },
    { id: 2, name: 'bread', price: 25, isBestSeller: false },
    { id: 3, name: 'milk', price: 15, isBestSeller: true },
    { id: 4, name: 'donut', price: 45, isBestSeller: false },
    { id: 5, name: 'cookie', price: 55, isBestSeller: true },
  ]);
  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newBestSeller, setNewBestSeller] = useState('true');

  function handleAdd(e) {
    e.preventDefault();
    if (!newName.trim() || !newPrice) return;
    setFoods([
      ...foods,
      { id: Date.now(), name: newName.trim(), price: Number(newPrice), isBestSeller: newBestSeller === 'true' },
    ]);
    setNewName('');
    setNewPrice('');
  }

  function handleDelete(id) {
    setFoods(foods.filter(f => f.id !== id));
  }

  return (
    <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h2 style={{ margin: 0, color: '#0f172a', fontSize: '18px' }}>Our Menu (FoodContainer Demo)</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12px', fontWeight: '600', color: mode === 'admin' ? '#b91c1c' : '#0369a1' }}>
            โหมดปัจจุบัน: {mode === 'admin' ? '🛡️ ADMIN MODE' : '👤 USER MODE'}
          </span>
          <button
            onClick={() => setMode(mode === 'admin' ? 'user' : 'admin')}
            style={{
              padding: '5px 12px',
              fontSize: '12px',
              fontWeight: '700',
              borderRadius: '6px',
              border: 'none',
              background: mode === 'admin' ? '#0284c7' : '#e11d48',
              color: '#ffffff',
              cursor: 'pointer',
            }}
          >
            สลับเป็น {mode === 'admin' ? 'User Mode' : 'Admin Mode'}
          </button>
        </div>
      </div>

      {/* Admin Form: Only visible in Admin Mode */}
      {mode === 'admin' && (
        <form onSubmit={handleAdd} style={{ background: '#ffffff', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <strong style={{ fontSize: '13px', width: '100%', color: '#334155' }}>+ เพิ่มเมนูใหม่ (FoodForm - เฉพาะแอดมิน):</strong>
          <input
            placeholder="ชื่อเมนู เช่น pancake"
            value={newName}
            onChange={e => setNewName(e.target.value)}
            style={{ padding: '6px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px', flex: '1 1 140px' }}
          />
          <input
            placeholder="ราคา"
            type="number"
            value={newPrice}
            onChange={e => setNewPrice(e.target.value)}
            style={{ padding: '6px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px', width: '80px' }}
          />
          <select
            value={newBestSeller}
            onChange={e => setNewBestSeller(e.target.value)}
            style={{ padding: '6px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '13px' }}
          >
            <option value="true">Best Seller</option>
            <option value="false">Normal</option>
          </select>
          <button
            type="submit"
            style={{ padding: '6px 14px', background: '#16a34a', color: '#ffffff', border: 'none', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}
          >
            Add menu
          </button>
        </form>
      )}

      {/* Food List */}
      <div style={{ background: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', padding: '12px' }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#475569' }}>รายการเมนูอาหาร ({foods.length} รายการ):</h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {foods.map(item => (
            <li
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 12px',
                borderBottom: '1px solid #f1f5f9',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontWeight: '600', fontSize: '14px', color: '#1e293b' }}>{item.name}</span>
                <span style={{ color: '#16a34a', fontWeight: '700' }}>{item.price} บาท</span>
                {item.isBestSeller && (
                  <span style={{ background: '#fef08a', color: '#854d0e', padding: '2px 6px', borderRadius: '10px', fontSize: '11px', fontWeight: '700' }}>
                    ★ Best Seller
                  </span>
                )}
              </div>
              {mode === 'admin' && (
                <button
                  onClick={() => handleDelete(item.id)}
                  style={{
                    padding: '3px 8px',
                    background: '#fef2f2',
                    color: '#dc2626',
                    border: '1px solid #fecaca',
                    borderRadius: '4px',
                    fontSize: '12px',
                    cursor: 'pointer',
                  }}
                >
                  Del
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* =========================================================================
   Interactive Component 3: Customer Manager CRUD Demo (lab-customers)
   ========================================================================= */
function CustomerTargetDemo() {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'สมชาย ใจดี', email: 'somchai@example.com' },
    { id: 2, name: 'มานี มีสุข', email: 'manee@example.com' },
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleAdd(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setCustomers([...customers, { id: Date.now(), name: name.trim(), email: email.trim() }]);
    setName('');
    setEmail('');
  }

  function handleDelete(id) {
    if (window.confirm('คุณต้องการลบข้อมูลลูกค้ารายนี้ใช่หรือไม่?')) {
      setCustomers(customers.filter(c => c.id !== id));
    }
  }

  return (
    <div style={{ background: '#ffffff', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
      <h3 style={{ margin: '0 0 14px 0', color: '#0f172a' }}>Customer Manager (Parent & Child Architecture)</h3>
      <form onSubmit={handleAdd} style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
        <input
          placeholder="ชื่อลูกค้า"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ padding: '6px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', flex: '1 1 140px' }}
        />
        <input
          placeholder="อีเมล"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ padding: '6px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', flex: '1 1 180px' }}
        />
        <button
          type="submit"
          disabled={!name.trim() || !email.trim()}
          style={{ padding: '6px 16px', background: '#0284c7', color: '#ffffff', border: 'none', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}
        >
          บันทึกข้อมูล
        </button>
      </form>

      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
        <thead>
          <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
            <th style={{ padding: '8px' }}>ID</th>
            <th style={{ padding: '8px' }}>ชื่อ</th>
            <th style={{ padding: '8px' }}>อีเมล</th>
            <th style={{ padding: '8px', textAlign: 'center' }}>จัดการ</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '8px', color: '#64748b' }}>{c.id}</td>
              <td style={{ padding: '8px', fontWeight: '600' }}>{c.name}</td>
              <td style={{ padding: '8px', color: '#0369a1' }}>{c.email}</td>
              <td style={{ padding: '8px', textAlign: 'center' }}>
                <button
                  onClick={() => handleDelete(c.id)}
                  style={{ padding: '2px 8px', background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', borderRadius: '4px', cursor: 'pointer' }}
                >
                  ลบ
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* =========================================================================
   Interactive Component 4: Member Portal & JWT Auth Demo (lab-member)
   ========================================================================= */
function AuthTargetDemo({ id }) {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('user@test.com');
  const [password, setPassword] = useState('123456');
  const [token, setToken] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ1c2VyQHRlc3QuY29tIn0.mock_signature_38291';
    setToken(fakeToken);
    setUser({ id: 1, email });
  }

  function handleLogout() {
    setToken('');
    setUser(null);
  }

  return (
    <div style={{ maxWidth: '420px', margin: '0 auto', padding: '20px', background: '#ffffff', borderRadius: '8px', border: '1px solid #cbd5e1', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      {user ? (
        <div style={{ textAlign: 'center' }}>
          <div style={{ color: '#16a34a', marginBottom: '8px' }}><ShieldCheck size={36} /></div>
          <h3 style={{ margin: '0 0 6px 0', color: '#0f172a' }}>ยินดีต้อนรับสู่ระบบสมาชิก!</h3>
          <p style={{ margin: '0 0 12px 0', color: '#475569' }}>อีเมล: <strong>{user.email}</strong></p>
          <div style={{ background: '#f1f5f9', padding: '8px', borderRadius: '4px', fontSize: '11px', fontFamily: 'monospace', wordBreak: 'break-all', marginBottom: '16px', textAlign: 'left' }}>
            <strong>Bearer Token:</strong><br />
            {token}
          </div>
          <button
            onClick={handleLogout}
            style={{ padding: '6px 18px', background: '#dc2626', color: '#ffffff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}
          >
            ออกจากระบบ (Logout)
          </button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h3 style={{ margin: '0 0 14px 0', color: '#0f172a', textAlign: 'center' }}>เข้าสู่ระบบ (Login)</h3>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '4px' }}>อีเมล</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ width: '100%', padding: '6px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '4px' }}>รหัสผ่าน</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ width: '100%', padding: '6px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', boxSizing: 'border-box' }}
            />
          </div>
          <button
            type="submit"
            style={{ width: '100%', padding: '8px', background: '#0284c7', color: '#ffffff', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}
          >
            เข้าสู่ระบบ ➔
          </button>
        </form>
      )}
    </div>
  );
}

/* =========================================================================
   Interactive Component 5: State Counter Demo (fs-07)
   ========================================================================= */
function CounterTargetDemo() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '30px', textAlign: 'center', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <h3 style={{ marginBottom: '10px', color: '#1e293b' }}>State Counter (useState Hook)</h3>
      <div style={{ fontSize: '48px', fontWeight: '800', color: count > 0 ? '#16a34a' : count < 0 ? '#dc2626' : '#0284c7', margin: '20px 0' }}>
        {count}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
        <button
          onClick={() => setCount(c => c - 1)}
          style={{ width: '45px', height: '45px', fontSize: '20px', fontWeight: '700', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#ffffff', cursor: 'pointer' }}
        >
          -
        </button>
        <button
          onClick={() => setCount(0)}
          style={{ padding: '0 16px', height: '45px', fontSize: '13px', fontWeight: '600', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#f1f5f9', cursor: 'pointer' }}
        >
          Reset
        </button>
        <button
          onClick={() => setCount(c => c + 1)}
          style={{ width: '45px', height: '45px', fontSize: '20px', fontWeight: '700', borderRadius: '8px', border: 'none', background: '#16a34a', color: '#ffffff', cursor: 'pointer' }}
        >
          +
        </button>
      </div>
    </div>
  );
}

/* =========================================================================
   Interactive Component 6: Controlled Form Demo (fs-08)
   ========================================================================= */
function FormTargetDemo() {
  const [text, setText] = useState('');
  const [items, setItems] = useState(['ตัวอย่างเมนู 1']);

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setItems([...items, text.trim()]);
    setText('');
  }

  return (
    <div style={{ padding: '20px', background: '#ffffff', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
      <h3 style={{ margin: '0 0 12px 0' }}>Controlled Form Demo</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
        <input
          placeholder="กรอกชื่อเมนูใหม่..."
          value={text}
          onChange={e => setText(e.target.value)}
          style={{ padding: '6px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', flex: 1 }}
        />
        <button
          type="submit"
          disabled={!text.trim()}
          style={{ padding: '6px 14px', background: '#0284c7', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          เพิ่ม
        </button>
      </form>
      <ul style={{ paddingLeft: '20px', margin: 0, lineHeight: '1.8' }}>
        {items.map((it, idx) => (
          <li key={idx} style={{ fontWeight: '600' }}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

/* =========================================================================
   Interactive Component 7: Fetch API Demo (fs-09)
   ========================================================================= */
function FetchApiTargetDemo() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    { id: 1, name: 'ข้าวผัด', price: 60 },
    { id: 2, name: 'ชาไทย', price: 35 },
  ]);

  function handleReload() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }

  return (
    <div style={{ padding: '20px', background: '#ffffff', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <h3 style={{ margin: 0 }}>API Data Loading (useEffect Simulation)</h3>
        <button
          onClick={handleReload}
          style={{ padding: '4px 10px', fontSize: '12px', borderRadius: '4px', border: '1px solid #cbd5e1', background: '#f8fafc', cursor: 'pointer' }}
        >
          ↻ โหลดใหม่
        </button>
      </div>

      {loading ? (
        <p style={{ color: '#0284c7', fontWeight: '600' }}>กำลังโหลดข้อมูลจาก /api/menu...</p>
      ) : (
        <ul style={{ paddingLeft: '20px', margin: 0, lineHeight: '2' }}>
          {data.map(it => (
            <li key={it.id}>
              <strong>{it.name}</strong> — <span style={{ color: '#16a34a' }}>{it.price} บาท</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* =========================================================================
   Interactive Component 8: React Router Demo (fs-10)
   ========================================================================= */
function RouterTargetDemo() {
  const [page, setPage] = useState('home');

  return (
    <div style={{ border: '1px solid #cbd5e1', borderRadius: '8px', overflow: 'hidden' }}>
      <nav style={{ background: '#1e293b', padding: '10px 16px', display: 'flex', gap: '16px' }}>
        <button onClick={() => setPage('home')} style={{ background: 'none', border: 'none', color: page === 'home' ? '#38bdf8' : '#ffffff', cursor: 'pointer', fontWeight: '600' }}>หน้าหลัก (/)</button>
        <button onClick={() => setPage('menu')} style={{ background: 'none', border: 'none', color: page === 'menu' ? '#38bdf8' : '#ffffff', cursor: 'pointer', fontWeight: '600' }}>เมนู (/menu)</button>
        <button onClick={() => setPage('404')} style={{ background: 'none', border: 'none', color: page === '404' ? '#38bdf8' : '#ffffff', cursor: 'pointer', fontWeight: '600' }}>ลองหน้าไม่มีจริง (*)</button>
      </nav>
      <div style={{ padding: '24px', minHeight: '160px', background: '#ffffff' }}>
        {page === 'home' && <div><h2>หน้าแรก (HomePage Component)</h2><p>ยินดีต้อนรับสู่เว็บแอปพลิเคชัน SPA</p></div>}
        {page === 'menu' && <div><h2>หน้าเมนูอาหาร (MenuPage Component)</h2><p>รายการอาหารจานเด็ด</p></div>}
        {page === '404' && <div style={{ color: '#dc2626' }}><h2>404 Not Found</h2><p>ไม่พบหน้าที่คุณต้องการ</p></div>}
      </div>
    </div>
  );
}

/* =========================================================================
   Interactive Component 9: Task Board Demo (guided-4)
   ========================================================================= */
function TaskBoardTargetDemo() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'เรียน Node', done: true },
    { id: 2, title: 'ฝึก React และ Express', done: false },
  ]);
  const [text, setText] = useState('');

  function addTask(e) {
    e.preventDefault();
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: text.trim(), done: false }]);
    setText('');
  }

  function toggleTask(id) {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  return (
    <div style={{ background: '#ffffff', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
      <h3 style={{ margin: '0 0 12px 0' }}>My Task Board</h3>
      <form onSubmit={addTask} style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
        <input
          placeholder="เพิ่มงานใหม่..."
          value={text}
          onChange={e => setText(e.target.value)}
          style={{ padding: '6px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', flex: 1 }}
        />
        <button type="submit" style={{ padding: '6px 14px', background: '#0284c7', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          + เพิ่มงาน
        </button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {tasks.map(t => (
          <li key={t.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px', borderBottom: '1px solid #f1f5f9' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input type="checkbox" checked={t.done} onChange={() => toggleTask(t.id)} />
              <span style={{ textDecoration: t.done ? 'line-through' : 'none', color: t.done ? '#94a3b8' : '#0f172a' }}>
                {t.title}
              </span>
            </label>
            <button onClick={() => deleteTask(t.id)} style={{ padding: '2px 8px', background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', borderRadius: '4px', cursor: 'pointer' }}>
              ลบ
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =========================================================================
   Interactive Component 10: Backend API Response Demo
   ========================================================================= */
function ApiTargetDemo({ id, item }) {
  const [responseState, setResponseState] = useState('success');

  const apiDemos = {
    'guided-0': {
      endpoint: 'Terminal Execution',
      command: 'node scripts/hello.js',
      output: 'Hello Node, Mali',
      notes: 'รัน JavaScript บน Node เซิร์ฟเวอร์ และแสดงผลผ่าน Console สำเร็จ',
    },
    'guided-1': {
      endpoint: 'GET /api/tasks',
      status: '200 OK',
      body: [{ id: 1, title: 'เรียน Node', done: false }],
      notes: 'Express ส่ง Array ของงานกลับในรูปแบบ JSON',
    },
    'fs-01': {
      endpoint: 'POST /api/total',
      input: [{ name: 'ขนม', price: 60, quantity: 2 }, { name: 'น้ำ', price: 35, quantity: 1 }],
      status: '200 OK',
      body: { total: 155 },
      notes: 'ฟังก์ชัน total ใน prices.js คำนวณ (60*2) + (35*1) = 155 บาท',
    },
    'fs-02': {
      endpoint: 'POST /api/double',
      input: { value: 6 },
      status: '200 OK',
      body: { result: 12 },
      notes: 'รอด้วย Promise 30ms แล้วคืนค่า 6 * 2 = 12',
    },
    'fs-03': {
      endpoint: 'GET /api/menu',
      status: '200 OK',
      body: [{ id: 1, name: 'ข้าวผัด', price: 60 }, { id: 2, name: 'ชาไทย', price: 35 }],
      notes: 'อ่านข้อมูลจริงจาก backend/data/menu.json ด้วย fs และ path',
    },
    'fs-04': {
      endpoint: 'GET /api/items/tea?price=35',
      status: '200 OK',
      body: { name: 'tea', price: 35 },
      invalidEndpoint: 'GET /api/items/tea?price=abc (400 Bad Request)',
      notes: 'ดึง name จาก params และ price จาก query พร้อมตรวจความถูกต้อง',
    },
    'fs-05': {
      endpoint: 'GET /home',
      status: '200 OK',
      body: 'HTML Content of public/index.html',
      notes: 'Express Router ส่งไฟล์ Static ผ่าน res.sendFile',
    },
    'fs-12': {
      endpoint: 'GET /api/customers',
      status: '200 OK',
      body: [{ id: 1, name: 'สมชาย', email: 'somchai@test.com' }],
      notes: 'Controller CRUD คืนข้อมูลลูกค้าทั้งหมด',
    },
    'exam-api': {
      endpoint: 'POST /api/customers',
      input: { name: 'มานี', email: 'manee@test.com' },
      status: '201 Created',
      body: { id: 3, name: 'มานี', email: 'manee@test.com' },
      notes: 'สร้างลูกค้าใหม่และคืน HTTP 201 พร้อม ID ใหม่',
    },
  };

  const demo = apiDemos[id] || {
    endpoint: `API Endpoint: ${item.title}`,
    status: '200 OK',
    body: { status: 'success', message: 'Target response matches exam specification' },
    notes: 'ตัวอย่างผลลัพธ์ที่ถูกต้องตามข้อกำหนด',
  };

  return (
    <div style={{ background: '#1e293b', color: '#f8fafc', padding: '18px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '13px', lineHeight: '1.6' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '10px', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Server size={16} style={{ color: '#38bdf8' }} />
          <strong style={{ color: '#38bdf8' }}>{demo.endpoint}</strong>
        </div>
        {demo.status && (
          <span style={{ padding: '2px 8px', borderRadius: '4px', background: '#16a34a', color: '#ffffff', fontSize: '11px', fontWeight: '700' }}>
            {demo.status}
          </span>
        )}
      </div>

      {demo.command && (
        <div style={{ marginBottom: '12px' }}>
          <span style={{ color: '#94a3b8' }}>$ {demo.command}</span>
          <pre style={{ margin: '6px 0 0 0', color: '#4ade80' }}>{demo.output}</pre>
        </div>
      )}

      {demo.input && (
        <div style={{ marginBottom: '12px' }}>
          <span style={{ color: '#94a3b8' }}>// Request Body:</span>
          <pre style={{ margin: '4px 0 0 0', color: '#fbbf24' }}>{JSON.stringify(demo.input, null, 2)}</pre>
        </div>
      )}

      {demo.body && (
        <div>
          <span style={{ color: '#94a3b8' }}>// Expected Response:</span>
          <pre style={{ margin: '4px 0 0 0', color: '#4ade80', overflowX: 'auto' }}>
            {typeof demo.body === 'string' ? demo.body : JSON.stringify(demo.body, null, 2)}
          </pre>
        </div>
      )}

      <div style={{ marginTop: '16px', paddingTop: '10px', borderTop: '1px solid #334155', fontSize: '12px', color: '#94a3b8' }}>
        💡 <strong>คำอธิบาย:</strong> {demo.notes}
      </div>
    </div>
  );
}


/* =========================================================================
   Interactive Component 8: Store & Order Hub Playable Demo (exam-store-hub)
   ========================================================================= */
function StoreHubTargetDemo() {
  const [products, setProducts] = useState([
    { id: 1, name: 'ปากกาเจล Sarasa 0.5', price: 25, stock: 10 },
    { id: 2, name: 'สมุดบันทึกสันห่วง B5', price: 50, stock: 5 },
    { id: 3, name: 'กระเป๋าดินสอ Canvas', price: 120, stock: 3 },
  ]);
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [selectedId, setSelectedId] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [orderId, setOrderId] = useState(1);

  const handleAddProduct = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!name.trim() || Number(price) <= 0 || Number(stock) < 0) {
      setError('ข้อมูลสินค้าไม่ถูกต้อง: กรุณากรอกชื่อ ราคา (>0) และสต็อก (>=0)');
      return;
    }
    const newP = { id: nextId, name: name.trim(), price: Number(price), stock: Number(stock) };
    setProducts([...products, newP]);
    setNextId(nextId + 1);
    setName('');
    setPrice('');
    setStock('');
    setSuccess(`บันทึกสินค้า "${newP.name}" เรียบร้อยแล้ว (POST /api/products 201)`);
  };

  const handleCreateOrder = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    const prod = products.find(p => p.id === Number(selectedId));
    if (!prod) {
      setError('ไม่พบรหัสสินค้าที่ระบุ (404 Not Found)');
      return;
    }
    const qty = Number(quantity);
    if (qty <= 0) {
      setError('จำนวนสั่งซื้อต้องมากกว่า 0 (400 Bad Request)');
      return;
    }
    if (qty > prod.stock) {
      setError(`สต็อกไม่เพียงพอ! สินค้าคงเหลือเพียง ${prod.stock} ชิ้น (409 Conflict)`);
      return;
    }

    setProducts(products.map(p => p.id === prod.id ? { ...p, stock: p.stock - qty } : p));
    const newOrd = {
      id: orderId,
      productId: prod.id,
      productName: prod.name,
      quantity: qty,
      totalPrice: prod.price * qty,
      createdAt: new Date().toLocaleTimeString('th-TH'),
    };
    setOrders([newOrd, ...orders]);
    setOrderId(orderId + 1);
    setQuantity(1);
    setSuccess(`สั่งซื้อ "${prod.name}" จำนวน ${qty} ชิ้น สำเร็จ! ตัดสต็อกเหลือ ${prod.stock - qty} ชิ้น`);
  };

  return (
    <div style={{ background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px', marginBottom: '16px' }}>
        <div>
          <h2 style={{ margin: '0 0 4px 0', color: '#0f172a', fontSize: '18px' }}>📦 Store & Order Hub (Interactive Playable Demo)</h2>
          <span style={{ fontSize: '12px', color: '#64748b' }}>ตัวอย่างผลลัพธ์จริงที่สามารถกดทดลองเพิ่มสินค้า สั่งซื้อ และดูการตัดสต็อกได้ทันที</span>
        </div>
        <span style={{ padding: '4px 10px', background: '#dcfce7', color: '#15803d', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold' }}>
          ✓ Live Interactive Demo
        </span>
      </div>

      {error && (
        <div role="alert" style={{ background: '#fee2e2', color: '#dc2626', border: '1px solid #fecaca', padding: '10px 14px', borderRadius: '6px', marginBottom: '16px', fontSize: '13px' }}>
          ⚠️ {error}
        </div>
      )}
      {success && (
        <div style={{ background: '#dcfce7', color: '#15803d', border: '1px solid #bbf7d0', padding: '10px 14px', borderRadius: '6px', marginBottom: '16px', fontSize: '13px' }}>
          ✓ {success}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
        <form onSubmit={handleAddProduct} style={{ background: '#f8fafc', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#0f172a' }}>➕ ฟอร์มเพิ่มสินค้าใหม่ (POST /api/products)</h4>
          <div style={{ marginBottom: '8px' }}>
            <label htmlFor="name-input" style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#475569', marginBottom: '3px' }}>ชื่อสินค้า</label>
            <input id="name-input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="เช่น ปากกาไฮไลท์" style={{ width: '100%', padding: '6px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '12px' }} />
          </div>
          <div style={{ marginBottom: '8px' }}>
            <label htmlFor="price-input" style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#475569', marginBottom: '3px' }}>ราคา</label>
            <input id="price-input" type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="เช่น 35" style={{ width: '100%', padding: '6px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '12px' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="stock-input" style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#475569', marginBottom: '3px' }}>จำนวนสต็อก</label>
            <input id="stock-input" type="number" value={stock} onChange={e => setStock(e.target.value)} placeholder="เช่น 20" style={{ width: '100%', padding: '6px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '12px' }} />
          </div>
          <button type="submit" style={{ padding: '6px 14px', background: '#0284c7', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>บันทึกสินค้า</button>
        </form>

        <form onSubmit={handleCreateOrder} style={{ background: '#f8fafc', padding: '14px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#0f172a' }}>🛒 ฟอร์มสั่งซื้อและตัดสต็อก (POST /api/orders)</h4>
          <div style={{ marginBottom: '8px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#475569', marginBottom: '3px' }}>เลือกสินค้า</label>
            <select value={selectedId} onChange={e => setSelectedId(e.target.value)} style={{ width: '100%', padding: '6px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '12px' }}>
              {products.map(p => (
                <option key={p.id} value={p.id}>{p.name} - ฿{p.price} (คงเหลือ {p.stock})</option>
              ))}
            </select>
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label htmlFor="order-qty" style={{ display: 'block', fontSize: '11px', fontWeight: 'bold', color: '#475569', marginBottom: '3px' }}>จำนวนที่สั่ง</label>
            <input id="order-qty" type="number" min="1" value={quantity} onChange={e => setQuantity(e.target.value)} style={{ width: '100%', padding: '6px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '12px' }} />
          </div>
          <button type="submit" style={{ padding: '6px 14px', background: '#16a34a', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>สั่งซื้อสินค้า</button>
        </form>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#0f172a' }}>📋 ตารางสินค้าคงคลัง (Real-time Stock)</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
          <thead>
            <tr style={{ background: '#f1f5f9', borderBottom: '2px solid #cbd5e1', textAlign: 'left' }}>
              <th style={{ padding: '6px 8px' }}>ID</th>
              <th style={{ padding: '6px 8px' }}>ชื่อสินค้า</th>
              <th style={{ padding: '6px 8px' }}>ราคา</th>
              <th style={{ padding: '6px 8px' }}>สต็อกคงเหลือ</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '6px 8px' }}>{p.id}</td>
                <td style={{ padding: '6px 8px', fontWeight: 'bold' }}>{p.name}</td>
                <td style={{ padding: '6px 8px' }}>฿{p.price}</td>
                <td style={{ padding: '6px 8px' }}>
                  <span style={{ padding: '2px 7px', borderRadius: '10px', fontSize: '10px', fontWeight: 'bold', background: p.stock > 0 ? '#dcfce7' : '#fee2e2', color: p.stock > 0 ? '#15803d' : '#dc2626' }}>
                    {p.stock > 0 ? `${p.stock} ชิ้น` : 'หมดสต็อก'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#0f172a' }}>📜 รายการสั่งซื้อล่าสุด (GET /api/orders)</h4>
        {orders.length === 0 ? (
          <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>ยังไม่มีรายการสั่งซื้อ (ทดลองเลือกสินค้าและกด "สั่งซื้อสินค้า" ด้านบน)</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {orders.map(o => (
              <div key={o.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#f8fafc', borderRadius: '4px', border: '1px solid #e2e8f0', fontSize: '12px' }}>
                <div><strong>#{o.id}</strong> {o.productName} × {o.quantity} ชิ้น <span style={{ color: '#94a3b8', fontSize: '11px' }}>({o.createdAt})</span></div>
                <div style={{ color: '#16a34a', fontWeight: 'bold' }}>฿{o.totalPrice}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


function FinalPracticeTargetDemo() {
  const [page, setPage] = useState('/');
  const [role, setRole] = useState('student');
  const [keyword, setKeyword] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [courses, setCourses] = useState([
    { id: 1, code: 'CS301', title: 'Full Stack Node & React', categoryId: 1, categoryName: 'Web Development', price: 1500, seats: 3, enrolled: 1 },
    { id: 2, code: 'AI202', title: 'Applied Machine Learning', categoryId: 2, categoryName: 'Data & AI', price: 2200, seats: 2, enrolled: 0 },
    { id: 3, code: 'SEC101', title: 'Web Security & JWT Auth', categoryId: 3, categoryName: 'Cybersecurity', price: 1800, seats: 1, enrolled: 1 },
  ]);
  const [enrollments, setEnrollments] = useState([
    { id: 1, courseId: 1, courseCode: 'CS301', courseTitle: 'Full Stack Node & React', price: 1500, status: 'active' },
    { id: 2, courseId: 3, courseCode: 'SEC101', courseTitle: 'Web Security & JWT Auth', price: 1800, status: 'active' },
  ]);
  const [code, setCode] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('1500');
  const [seats, setSeats] = useState('5');
  const [alertMsg, setAlertMsg] = useState('');

  const filtered = courses.filter(c => {
    const matchK = !keyword || c.title.toLowerCase().includes(keyword.toLowerCase()) || c.code.toLowerCase().includes(keyword.toLowerCase());
    const matchC = !categoryId || c.categoryId === Number(categoryId);
    return matchK && matchC;
  });

  function enroll(course) {
    setAlertMsg('');
    if (role === 'guest') { setAlertMsg('401 Unauthorized: กรุณาเข้าสู่ระบบก่อนลงทะเบียนเรียน'); return; }
    if (enrollments.some(e => e.courseId === course.id && e.status === 'active')) {
      setAlertMsg('409 Conflict: ลงทะเบียนคอร์สนี้ไปแล้ว'); return;
    }
    if (course.enrolled >= course.seats) {
      setAlertMsg('409 Conflict: ที่นั่งเต็มแล้ว'); return;
    }
    setCourses(list => list.map(c => c.id === course.id ? { ...c, enrolled: c.enrolled + 1 } : c));
    setEnrollments(list => [...list, { id: Date.now(), courseId: course.id, courseCode: course.code, courseTitle: course.title, price: course.price, status: 'active' }]);
  }

  function cancelEnroll(item) {
    setAlertMsg('');
    setEnrollments(list => list.map(e => e.id === item.id ? { ...e, status: 'cancelled' } : e));
    setCourses(list => list.map(c => c.id === item.courseId ? { ...c, enrolled: Math.max(0, c.enrolled - 1) } : c));
  }

  function addCourse(e) {
    e.preventDefault();
    setAlertMsg('');
    if (!code.trim() || !title.trim()) { setAlertMsg('400 Bad Request: กรอกรหัสและชื่อวิชาให้ครบ'); return; }
    if (courses.some(c => c.code.toUpperCase() === code.trim().toUpperCase())) { setAlertMsg('409 Conflict: รหัสวิชาซ้ำ'); return; }
    setCourses(list => [...list, { id: Date.now(), code: code.trim().toUpperCase(), title: title.trim(), categoryId: 1, categoryName: 'Web Development', price: Number(price) || 0, seats: Number(seats) || 1, enrolled: 0 }]);
    setCode(''); setTitle('');
  }

  return (
    <div style={{ background: '#ffffff', borderRadius: '8px', border: '1px solid #cbd5e1', padding: '16px', fontSize: '13px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', padding: '8px 12px', background: '#f8fafc', borderRadius: '6px', marginBottom: '12px', border: '1px solid #e2e8f0' }}>
        <div><strong>จำลองสลับ Role ทดสอบสิทธิ์:</strong></div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {[['guest', 'Guest (ยังไม่ Login)'], ['student', 'Student (mali)'], ['admin', 'Admin (admin)']].map(([r, label]) => (
            <button key={r} type="button" onClick={() => { setRole(r); setAlertMsg(''); }} style={{ padding: '4px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', background: role === r ? '#087f6c' : '#fff', color: role === r ? '#fff' : '#0f172a', fontWeight: 'bold', fontSize: '11px', cursor: 'pointer' }}>{label}</button>
          ))}
        </div>
      </div>

      <nav style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #dce6df', paddingBottom: '10px', marginBottom: '14px' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {[['/', 'คอร์สเรียนทั้งหมด (/)'], ['/my-courses', 'คอร์สของฉัน (/my-courses)'], ['/admin', 'จัดการคอร์ส (/admin)'], ['/login', 'เข้าสู่ระบบ (/login)']].map(([p, label]) => (
            <button key={p} type="button" onClick={() => { setPage(p); setAlertMsg(''); }} style={{ background: 'none', border: 'none', color: page === p ? '#087f6c' : '#475569', fontWeight: page === p ? 'bold' : 'normal', textDecoration: page === p ? 'underline' : 'none', cursor: 'pointer', padding: 0 }}>{label}</button>
          ))}
        </div>
        <span style={{ fontSize: '11px', color: '#64748b' }}>สถานะ: <strong>{role}</strong></span>
      </nav>

      {alertMsg && <div role="alert" style={{ padding: '8px 12px', background: '#fee2e2', color: '#dc2626', borderRadius: '6px', marginBottom: '12px', fontWeight: 'bold' }}>{alertMsg}</div>}

      {page === '/' && (
        <div>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
            <input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="ค้นหาคอร์ส (รหัส/ชื่อวิชา)..." style={{ padding: '6px 10px', borderRadius: '4px', border: '1px solid #cbd5e1', flex: 1 }} />
            <select value={categoryId} onChange={e => setCategoryId(e.target.value)} style={{ padding: '6px 10px', borderRadius: '4px', border: '1px solid #cbd5e1' }}>
              <option value="">ทุกหมวดหมู่</option>
              <option value="1">Web Development</option>
              <option value="2">Data &amp; AI</option>
              <option value="3">Cybersecurity</option>
            </select>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
            {filtered.map(c => {
              const avail = Math.max(0, c.seats - c.enrolled);
              return (
                <div key={c.id} style={{ padding: '12px', border: '1px solid #dce6df', borderRadius: '8px', background: '#f8fafc' }}>
                  <small style={{ color: '#64748b' }}>{c.code} · {c.categoryName}</small>
                  <h4 style={{ margin: '4px 0' }}>{c.title}</h4>
                  <div>ราคา {c.price} บาท · <strong>ว่าง {avail} / {c.seats} ที่นั่ง</strong></div>
                  <button type="button" disabled={avail <= 0} onClick={() => enroll(c)} style={{ marginTop: '8px', padding: '5px 10px', background: avail > 0 ? '#087f6c' : '#94a3b8', color: '#fff', border: 'none', borderRadius: '4px', cursor: avail > 0 ? 'pointer' : 'not-allowed', fontSize: '12px' }}>
                    {avail > 0 ? 'ลงทะเบียนเรียน' : 'ที่นั่งเต็ม'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {page === '/my-courses' && (
        role === 'guest' ? (
          <div role="alert" style={{ padding: '12px', background: '#fee2e2', color: '#dc2626', borderRadius: '6px' }}>กรุณาเข้าสู่ระบบก่อนดูรายการลงทะเบียน</div>
        ) : (
          <div>
            <p>ยอดรวมค่าเรียนที่ลงทะเบียนอยู่ (active): <strong>{enrollments.filter(e => e.status === 'active').reduce((s, e) => s + e.price, 0)} บาท</strong></p>
            {enrollments.map(e => (
              <div key={e.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', border: '1px solid #dce6df', borderRadius: '6px', marginBottom: '6px' }}>
                <span><strong>{e.courseCode} · {e.courseTitle}</strong> ({e.price} บาท) — สถานะ: {e.status}</span>
                {e.status === 'active' && <button type="button" onClick={() => cancelEnroll(e)} style={{ padding: '4px 8px', background: '#dc2626', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '11px', cursor: 'pointer' }}>ยกเลิกลงทะเบียน</button>}
              </div>
            ))}
          </div>
        )
      )}

      {page === '/admin' && (
        role !== 'admin' ? (
          <div role="alert" style={{ padding: '12px', background: '#fee2e2', color: '#dc2626', borderRadius: '6px', fontWeight: 'bold' }}>403 Forbidden: ไม่มีสิทธิ์เข้าถึง (Admin เท่านั้น)</div>
        ) : (
          <div>
            <form onSubmit={addCourse} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px', padding: '10px', background: '#f8fafc', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
              <input value={code} onChange={e => setCode(e.target.value)} placeholder="รหัสวิชา เช่น WEB404" style={{ padding: '5px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', width: '130px' }} />
              <input value={title} onChange={e => setTitle(e.target.value)} placeholder="ชื่อวิชา" style={{ padding: '5px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', flex: 1 }} />
              <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="ราคา" style={{ padding: '5px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', width: '80px' }} />
              <input type="number" value={seats} onChange={e => setSeats(e.target.value)} placeholder="ที่นั่ง" style={{ padding: '5px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', width: '70px' }} />
              <button type="submit" style={{ padding: '5px 12px', background: '#087f6c', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>บันทึกคอร์ส</button>
            </form>
            {courses.map(c => (
              <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', border: '1px solid #dce6df', borderRadius: '6px', marginBottom: '6px' }}>
                <span><strong>{c.code} · {c.title}</strong> ({c.price} บาท · ลงทะเบียน {c.enrolled}/{c.seats})</span>
                <button type="button" onClick={() => {
                  if (c.enrolled > 0) { setAlertMsg('409 Conflict: ห้ามลบคอร์สที่มีผู้ลงทะเบียนอยู่'); return; }
                  setCourses(list => list.filter(x => x.id !== c.id));
                }} style={{ padding: '4px 8px', background: '#dc2626', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '11px', cursor: 'pointer' }}>ลบคอร์ส</button>
              </div>
            ))}
          </div>
        )
      )}

      {page === '/login' && (
        <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
          <p style={{ margin: '0 0 8px 0' }}>ในโปรเจกต์จริง หน้า <code>/login</code> จะมีฟอร์มเข้าสู่ระบบ (<code>POST /api/auth/login</code>) และสมัครสมาชิก (<code>POST /api/auth/register</code>) พร้อมเก็บ JWT ลง <code>sessionStorage</code></p>
          <small style={{ color: '#64748b' }}>บัญชีเริ่มต้น: admin / admin12345 (role: admin) และ mali / mali12345 (role: student)</small>
        </div>
      )}
    </div>
  );
}
