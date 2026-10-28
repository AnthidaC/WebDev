import React, { useState } from 'react';
import './requirement-mockup.css';
import { Monitor, Layers, CheckCircle } from 'lucide-react';

/**
 * RequirementMockupViewer
 * แสดงภาพตัวอย่างผลลัพธ์แต่ละหน้าจอ (UI & API Mockups) แนบในโจทย์และบทเรียน
 * ตรงกับชุดตรวจอัตโนมัติ (tests/goal.test.jsx) และเฉลย 100%
 */
export default function RequirementMockupViewer({ item, compact = false }) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  if (!item) return null;

  const screens = getScreensForActivity(item.id, item);

  if (!screens || screens.length === 0) return null;

  const currentScreen = screens[activeScreenIndex] || screens[0];

  return (
    <div className={`fs-requirement-mockup ${compact ? 'is-compact' : ''}`}>
      {/* Header */}
      <div className="fs-mockup-header">
        <div className="fs-mockup-title">
          <Monitor size={15} color="#0284c7" />
          <span>🖼️ ภาพตัวอย่างผลลัพธ์ตามเกณฑ์ชุดตรวจ (Target Spec &amp; Mockup)</span>
        </div>
        <span className="fs-mockup-badge">
          {screens.length > 1 ? `สเปก ${screens.length} ส่วน` : 'สเปกเป้าหมาย'}
        </span>
      </div>

      {/* Screen Selection Tabs (เมื่อมีหลายหน้า) */}
      {screens.length > 1 && (
        <div className="fs-mockup-screen-tabs">
          {screens.map((screen, idx) => (
            <button
              key={idx}
              type="button"
              className={`fs-mockup-tab-btn ${idx === activeScreenIndex ? 'active' : ''}`}
              onClick={() => setActiveScreenIndex(idx)}
            >
              <Layers size={13} />
              <span>{screen.tabLabel || `ส่วนที่ ${idx + 1}: ${screen.title}`}</span>
            </button>
          ))}
        </div>
      )}

      {/* Browser Mockup Window */}
      <div className="fs-browser-frame">
        <div className="fs-browser-bar">
          <div className="fs-browser-dots">
            <span className="fs-browser-dot fs-dot-red" />
            <span className="fs-browser-dot fs-dot-yellow" />
            <span className="fs-browser-dot fs-dot-green" />
          </div>
          <div className="fs-browser-url">
            {currentScreen.url || 'http://localhost:5173'}
          </div>
          <span className="fs-browser-status">
            {currentScreen.statusBadge || '200 OK'}
          </span>
        </div>

        {/* Browser Content */}
        <div className="fs-browser-content">
          {currentScreen.render(item)}
        </div>
      </div>

      {/* Requirement Spec Points / Callouts */}
      {currentScreen.specNotes && currentScreen.specNotes.length > 0 && (
        <div className="fs-mockup-spec-notes">
          <strong>📌 จุดสำคัญที่ชุดตรวจอัตโนมัติตรวจสอบในข้อนี้:</strong>
          <ul>
            {currentScreen.specNotes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function renderApiTerminal({ method = 'GET', path, requestBody, status = '200 OK', headers = 'Content-Type: application/json; charset=utf-8', responseBody }) {
  return (
    <div style={{ background: '#0f172a', padding: '14px', borderRadius: '6px', color: '#e2e8f0', fontFamily: 'monospace', fontSize: '12px' }}>
      <div style={{ color: '#fbbf24', marginBottom: '6px', fontWeight: 'bold' }}>
        {method} {path}
      </div>
      {requestBody !== undefined && (
        <div style={{ marginBottom: '10px', padding: '8px', background: '#1e293b', borderRadius: '4px', color: '#93c5fd' }}>
          <div style={{ fontSize: '10px', color: '#94a3b8', marginBottom: '4px' }}>Request Body:</div>
          <pre style={{ margin: 0 }}>{typeof requestBody === 'string' ? requestBody : JSON.stringify(requestBody, null, 2)}</pre>
        </div>
      )}
      <div style={{ color: '#38bdf8', marginBottom: '4px', fontWeight: 'bold' }}>
        HTTP/1.1 {status}
      </div>
      <div style={{ color: '#94a3b8', fontSize: '11px', marginBottom: '8px', whiteSpace: 'pre-line' }}>
        {headers}
      </div>
      <pre style={{ margin: 0, color: '#4ade80', whiteSpace: 'pre-wrap' }}>
        {typeof responseBody === 'string' ? responseBody : JSON.stringify(responseBody, null, 2)}
      </pre>
    </div>
  );
}

/* =========================================================================
   Screen Specifications Data for all Activities (Aligned with tests/goal.test.jsx)
   ========================================================================= */
function getScreensForActivity(id) {
  // guided-0
  if (id === 'guided-0') {
    return [
      {
        title: 'ผลลัพธ์ใน Terminal (node scripts/hello.js)',
        tabLabel: 'Terminal Output',
        url: 'terminal://node scripts/hello.js',
        statusBadge: 'EXIT 0',
        specNotes: [
          'แก้ไฟล์ scripts/hello.js ให้แสดงข้อความ Hello Node, Mali ทาง console.log',
          'Route GET /api/health ตอบกลับ {"ok": true}',
        ],
        render: () => (
          <div style={{ background: '#0f172a', padding: '14px', borderRadius: '6px', color: '#4ade80', fontFamily: 'monospace', fontSize: '13px' }}>
            <div style={{ color: '#94a3b8', marginBottom: '6px' }}>$ node scripts/hello.js</div>
            <div>Hello Node, Mali</div>
          </div>
        ),
      },
    ];
  }

  // fs-00
  if (id === 'fs-00') {
    return [
      {
        title: 'หน้าเว็บ React (frontend/App.jsx)',
        tabLabel: 'หน้า 1: หน้าเว็บ React (:5173)',
        url: 'http://localhost:5173',
        statusBadge: 'REACT UI',
        specNotes: [
          'แท็ก <h1> ใน frontend/App.jsx ต้องแสดงข้อความ "My Full Stack Lab" ตรงตัว',
          'คงแท็ก <p>แก้ข้อความนี้ใน frontend/App.jsx</p> ไว้ใน <main className="page">',
        ],
        render: () => (
          <div style={{ padding: '18px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
            <h1 style={{ margin: '0 0 8px 0', color: '#0f172a', fontSize: '22px' }}>My Full Stack Lab</h1>
            <p style={{ margin: 0, color: '#475569', fontSize: '14px' }}>แก้ข้อความนี้ใน frontend/App.jsx</p>
          </div>
        ),
      },
      {
        title: 'ตรวจสอบสถานะ API (GET /api/health)',
        tabLabel: 'หน้า 2: API Health (:3000)',
        url: 'http://localhost:3000/api/health',
        statusBadge: '200 OK',
        specNotes: ['ทดสอบเรียก GET /api/health ในแท็บ API Client ต้องได้ {"ok": true}'],
        render: () =>
          renderApiTerminal({
            method: 'GET',
            path: '/api/health',
            responseBody: { ok: true },
          }),
      },
    ];
  }

  // fs-01
  if (id === 'fs-01') {
    return [
      {
        title: 'คำนวณราคารวมสินค้า (POST /api/total)',
        tabLabel: 'POST /api/total',
        url: 'http://localhost:3000/api/total',
        statusBadge: '200 OK',
        specNotes: [
          'แก้เฉพาะไฟล์ backend/lib/prices.js ในฟังก์ชัน exports.total = (items) => ...',
          'เมื่อรับ [{ price: 40, quantity: 2 }, { price: 15, quantity: 3 }] ต้องคืนค่า 125',
          'เมื่อรับอาร์เรย์ว่าง [] ต้องคืนค่า 0',
        ],
        render: () =>
          renderApiTerminal({
            method: 'POST',
            path: '/api/total',
            requestBody: {
              items: [
                { price: 40, quantity: 2 },
                { price: 15, quantity: 3 },
              ],
            },
            responseBody: { total: 125 },
          }),
      },
    ];
  }

  // fs-02
  if (id === 'fs-02') {
    return [
      {
        title: 'รอ Promise แล้วคูณสอง (POST /api/double)',
        tabLabel: 'POST /api/double',
        url: 'http://localhost:3000/api/double',
        statusBadge: '200 OK (~40ms)',
        specNotes: [
          'ใน backend/lib/async.js ฟังก์ชัน exports.waitAndDouble ต้อง await Promise อย่างน้อย 30ms',
          'หลังจากรอเสร็จให้ return value * 2 (เช่น ส่ง value: 6 ต้องได้ { "result": 12 })',
        ],
        render: () =>
          renderApiTerminal({
            method: 'POST',
            path: '/api/double',
            requestBody: { value: 6 },
            responseBody: { result: 12 },
          }),
      },
    ];
  }

  // fs-03
  if (id === 'fs-03') {
    return [
      {
        title: 'อ่านเมนูจากไฟล์ JSON (GET /api/menu)',
        tabLabel: 'GET /api/menu',
        url: 'http://localhost:3000/api/menu',
        statusBadge: '200 OK',
        specNotes: [
          'ใน backend/lib/menu.js ใช้ path.join(__dirname, "../data/menu.json")',
          'อ่านไฟล์ด้วย fs.readFile(..., "utf8") จาก node:fs/promises แล้วแปลงด้วย JSON.parse()',
          'GET /api/menu ต้องคืน Array ที่มี ข้าวผัด (60) และ ชาไทย (35)',
        ],
        render: () =>
          renderApiTerminal({
            method: 'GET',
            path: '/api/menu',
            responseBody: [
              { id: 1, name: 'ข้าวผัด', price: 60 },
              { id: 2, name: 'ชาไทย', price: 35 },
            ],
          }),
      },
    ];
  }

  // fs-04
  if (id === 'fs-04') {
    return [
      {
        title: 'ส่ง params และ query ถูกต้อง (200 OK)',
        tabLabel: 'กรณีข้อมูลถูกต้อง (200)',
        url: 'http://localhost:3000/api/items/tea?price=35',
        statusBadge: '200 OK',
        specNotes: [
          'สร้าง Route GET /api/items/:name ใน backend/app.js',
          'อ่านชื่อจาก req.params.name และแปลง req.query.price เป็น Number',
          'เมื่อส่ง /api/items/tea?price=35 ต้องตอบ 200 พร้อม { "name": "tea", "price": 35 }',
        ],
        render: () =>
          renderApiTerminal({
            method: 'GET',
            path: '/api/items/tea?price=35',
            responseBody: { name: 'tea', price: 35 },
          }),
      },
      {
        title: 'ส่งราคาผิดรูปแบบหรือไม่ส่งราคา (400 Bad Request)',
        tabLabel: 'กรณีราคาผิดพลาด (400)',
        url: 'http://localhost:3000/api/items/tea?price=abc',
        statusBadge: '400 Bad Request',
        specNotes: [
          'หากไม่ส่ง price, แปลงเป็นตัวเลขไม่ได้ (เช่น price=abc), หรือ price < 0 ต้องตอบ Status 400',
          'ส่ง JSON { "message": "Invalid price" }',
        ],
        render: () =>
          renderApiTerminal({
            method: 'GET',
            path: '/api/items/tea?price=abc',
            status: '400 Bad Request',
            responseBody: { message: 'Invalid price' },
          }),
      },
    ];
  }

  // guided-1
  if (id === 'guided-1') {
    return [
      {
        title: 'ดึงรายการงาน Task Board (GET /api/tasks)',
        tabLabel: 'GET /api/tasks',
        url: 'http://localhost:3000/api/tasks',
        statusBadge: '200 OK',
        specNotes: [
          'เพิ่ม Route GET /api/tasks ใน backend/app.js',
          'ส่งคืน JSON Array [{ "id": 1, "title": "เรียน Node", "done": false }]',
        ],
        render: () =>
          renderApiTerminal({
            method: 'GET',
            path: '/api/tasks',
            responseBody: [{ id: 1, title: 'เรียน Node', done: false }],
          }),
      },
    ];
  }

  // fs-05
  if (id === 'fs-05') {
    return [
      {
        title: 'แยก Router /home, /menu, /order พร้อม Header X-Practice',
        tabLabel: 'GET /home, /menu, /order',
        url: 'http://localhost:3000/menu',
        statusBadge: '200 OK + Header',
        specNotes: [
          'ใน backend/routes/pages.js ต้องมีครบทั้ง /home (<h1>Home</h1>), /menu (<h1>Menu</h1>), และ /order (<h1>Order</h1>)',
          'ใน backend/app.js ต้องมี Middleware ตั้งค่า res.set("X-Practice", "ready") แล้วเรียก next() ก่อน mount Router',
        ],
        render: () =>
          renderApiTerminal({
            method: 'GET',
            path: '/menu',
            headers: 'Content-Type: text/html; charset=utf-8\nX-Practice: ready',
            responseBody: '<h1>Menu</h1>',
          }),
      },
    ];
  }

  // lab-restaurant
  if (id === 'lab-restaurant') {
    return [
      {
        title: 'หน้าแรกและหน้าเมนูจากไฟล์ HTML (/home, /menu, /order)',
        tabLabel: 'หน้า 1: หน้าเว็บ HTML (:3000)',
        url: 'http://localhost:3000/menu',
        statusBadge: 'HTML 200',
        specNotes: [
          'ใน backend/routes/pages.js ใช้ res.sendFile(path.join(__dirname, "../../public/..."))',
          '/ หรือ /home ส่ง public/index.html, /menu ส่ง public/info/menu.html, /order ส่ง public/info/order.html',
          'โหลดไฟล์ CSS จาก /css/style.css ผ่าน express.static ที่ตั้งไว้ใน app.js',
        ],
        render: () => (
          <div style={{ padding: '16px', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '6px' }}>
            <h1 style={{ color: '#b45309', margin: '0 0 8px 0', fontSize: '20px' }}>เมนูอาหาร</h1>
            <p style={{ margin: '0 0 10px 0', fontSize: '13px', color: '#78350f' }}>ไฟล์ HTML จาก public/info/menu.html พร้อมเชื่อม /css/style.css</p>
            <span style={{ display: 'inline-block', padding: '6px 12px', background: '#d97706', color: '#fff', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
              ดูรายละเอียดชาไทย (/item/tea/price/35)
            </span>
          </div>
        ),
      },
      {
        title: 'หน้ารายละเอียดเมนู (/item/:name/price/:price) และ 404',
        tabLabel: 'หน้า 2: Dynamic Route & 404',
        url: 'http://localhost:3000/item/tea/price/35',
        statusBadge: '200 / 400 / 404',
        specNotes: [
          'GET /item/tea/price/35 แสดงชื่อเมนูและราคา เช่น <h1>tea</h1><p>35 บาท</p>',
          'หาก price ไม่ใช่ตัวเลขหรือติดลบ (เช่น /item/tea/price/abc) ต้องตอบ Status 400',
          'URL ที่ไม่มีจริงต้องเข้า Middleware ท้ายสุดและตอบ Status 404',
        ],
        render: () => (
          <div style={{ padding: '16px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '6px' }}>
            <h1 style={{ margin: '0 0 6px 0', color: '#1e40af', fontSize: '20px' }}>tea</h1>
            <p style={{ margin: 0, color: '#16a34a', fontWeight: 'bold', fontSize: '15px' }}>35 บาท</p>
          </div>
        ),
      },
    ];
  }

  // fs-06
  if (id === 'fs-06') {
    return [
      {
        title: 'แสดงการ์ดเมนูอาหารด้วย MenuCard Component',
        tabLabel: 'MenuCard Props UI',
        url: 'http://localhost:5173',
        statusBadge: 'REACT PROPS',
        specNotes: [
          'สร้างไฟล์ frontend/components/MenuCard.jsx รับ props { name, price }',
          'ภายใน MenuCard แสดง <h2>{name}</h2> และ <p>{price} บาท</p>',
          'ใน frontend/App.jsx แสดง MenuCard 2 รายการ: ข้าวผัด (60 บาท) และ ชาไทย (35 บาท)',
        ],
        render: () => (
          <div style={{ padding: '16px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
            <h1 style={{ margin: '0 0 12px 0', fontSize: '20px', color: '#0f172a' }}>Menu</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <article style={{ padding: '12px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
                <h2 style={{ margin: '0 0 6px 0', fontSize: '16px', color: '#0f172a' }}>ข้าวผัด</h2>
                <p style={{ margin: 0, color: '#0284c7', fontWeight: 'bold', fontSize: '14px' }}>60 บาท</p>
              </article>
              <article style={{ padding: '12px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
                <h2 style={{ margin: '0 0 6px 0', fontSize: '16px', color: '#0f172a' }}>ชาไทย</h2>
                <p style={{ margin: 0, color: '#0284c7', fontWeight: 'bold', fontSize: '14px' }}>35 บาท</p>
              </article>
            </div>
          </div>
        ),
      },
    ];
  }

  // guided-2
  if (id === 'guided-2') {
    return [
      {
        title: 'หน้าแรกของ My Task Board (frontend/App.jsx)',
        tabLabel: 'Task Board UI',
        url: 'http://localhost:5173',
        statusBadge: 'REACT JSX',
        specNotes: [
          'แสดง <h1>My Task Board</h1>',
          'แสดง <p>ฉันกำลังสร้างเว็บของตัวเอง</p>',
        ],
        render: () => (
          <div style={{ padding: '18px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
            <h1 style={{ margin: '0 0 8px 0', color: '#0f172a', fontSize: '20px' }}>My Task Board</h1>
            <p style={{ margin: 0, color: '#475569', fontSize: '14px' }}>ฉันกำลังสร้างเว็บของตัวเอง</p>
          </div>
        ),
      },
    ];
  }

  // fs-07
  if (id === 'fs-07') {
    return [
      {
        title: 'ตัวนับจำนวนพร้อมป้องกันค่าติดลบ (Counter)',
        tabLabel: 'State Counter UI',
        url: 'http://localhost:5173',
        statusBadge: 'REACT STATE',
        specNotes: [
          'แสดงค่าปัจจุบันใน <output aria-label="จำนวน">{count}</output>',
          'ปุ่ม "+" เพิ่มค่าทีละ 1, ปุ่ม "−" ลดค่าแต่ไม่ต่ำกว่า 0, และปุ่ม "รีเซ็ต" ตั้งค่ากลับเป็น 0',
        ],
        render: () => (
          <div style={{ textAlign: 'center', padding: '16px', background: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
            <h1 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#0f172a' }}>Counter</h1>
            <div style={{ fontSize: '30px', fontWeight: 'bold', color: '#0284c7', margin: '8px 0' }}>2</div>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
              <span style={{ padding: '6px 14px', background: '#0284c7', color: '#fff', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold' }}>+</span>
              <span style={{ padding: '6px 14px', background: '#e2e8f0', color: '#0f172a', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold' }}>−</span>
              <span style={{ padding: '6px 14px', background: '#e2e8f0', color: '#0f172a', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold' }}>รีเซ็ต</span>
            </div>
          </div>
        ),
      },
    ];
  }

  // fs-08
  if (id === 'fs-08') {
    return [
      {
        title: 'ฟอร์มบันทึกชื่อลูกค้าและการตรวจสอบค่าว่าง (Customer form)',
        tabLabel: 'Controlled Form & Alert',
        url: 'http://localhost:5173',
        statusBadge: 'CONTROLLED FORM',
        specNotes: [
          'ช่องกรอกผูกกับ <label>ชื่อ<input value={name} onChange={...} /></label> และปุ่ม "บันทึก"',
          'หากกดบันทึกตอนชื่อว่าง ต้องแสดง <p role="alert">กรุณากรอกชื่อ</p>',
          'หากกรอก "Mali" แล้วกดบันทึก ต้องแสดง <p>บันทึก Mali</p> และล้างช่อง input ให้ว่าง',
        ],
        render: () => (
          <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
            <h1 style={{ margin: '0 0 12px 0', fontSize: '18px', color: '#0f172a' }}>Customer form</h1>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>
              <label style={{ fontSize: '13px', color: '#334155', fontWeight: 'bold' }}>ชื่อ</label>
              <div style={{ padding: '6px 10px', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '13px', color: '#0f172a', minWidth: '160px' }}>
                Mali
              </div>
              <span style={{ padding: '6px 14px', background: '#0284c7', color: '#fff', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold' }}>
                บันทึก
              </span>
            </div>
            <div style={{ fontSize: '12px', color: '#dc2626', background: '#fee2e2', padding: '6px 10px', borderRadius: '4px', marginBottom: '6px' }}>
              ⚠️ กรณีส่งค่าว่าง (role="alert"): กรุณากรอกชื่อ
            </div>
            <div style={{ fontSize: '13px', color: '#16a34a', fontWeight: 'bold' }}>
              ✓ กรณีบันทึกสำเร็จ: บันทึก Mali
            </div>
          </div>
        ),
      },
    ];
  }

  // fs-10
  if (id === 'fs-10') {
    return [
      {
        title: 'หน้าแรก (/) และหน้าลูกค้า (/customers) ภายใต้ Layout',
        tabLabel: 'หน้า 1: Home & Customers',
        url: 'http://localhost:5173/customers',
        statusBadge: 'REACT ROUTER',
        specNotes: [
          'Layout มี <nav><Link to="/">Home</Link><Link to="/customers">Customers</Link></nav> และ <Outlet />',
          'Route "/" แสดง <h1>Welcome Home</h1> (จาก frontend/pages/Home.jsx)',
          'Route "/customers" แสดง <h1>Our Customers</h1> (จาก frontend/pages/Customers.jsx)',
        ],
        render: () => (
          <div style={{ padding: '14px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
            <nav style={{ display: 'flex', gap: '12px', paddingBottom: '10px', marginBottom: '12px', borderBottom: '1px solid #e2e8f0', fontSize: '13px', fontWeight: 'bold' }}>
              <span style={{ color: '#64748b' }}>Home</span>
              <span style={{ color: '#0284c7', textDecoration: 'underline' }}>Customers</span>
            </nav>
            <h1 style={{ margin: 0, fontSize: '20px', color: '#0f172a' }}>Our Customers</h1>
          </div>
        ),
      },
      {
        title: 'หน้าไม่พบเส้นทาง (path="*")',
        tabLabel: 'หน้า 2: หน้า 404 Not Found',
        url: 'http://localhost:5173/missing',
        statusBadge: '404 ROUTE',
        specNotes: ['เมื่อเปิด URL ที่ไม่มีอยู่จริง (เช่น /missing) ต้องแสดงหัวเรื่อง <h1>404</h1>'],
        render: () => (
          <div style={{ padding: '14px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
            <h1 style={{ margin: 0, fontSize: '20px', color: '#dc2626' }}>404</h1>
          </div>
        ),
      },
    ];
  }

  // fs-11
  if (id === 'fs-11') {
    return [
      {
        title: 'สลับธีมด้วย useContext และโฟกัสช่องกรอกด้วย useRef',
        tabLabel: 'Context & Ref UI',
        url: 'http://localhost:5173',
        statusBadge: 'CONTEXT & REF',
        specNotes: [
          'แสดงข้อความ <p>ธีม: {theme}</p> (เริ่มต้นเป็น "ธีม: light")',
          'เมื่อคลิกปุ่ม "เปลี่ยนธีม" ต้องเปลี่ยนข้อความเป็น "ธีม: dark"',
          'เมื่อคลิกปุ่ม "โฟกัสชื่อ" ต้องเรียก input.current.focus() ไปที่ช่อง <label>ชื่อ<input ref={input} /></label>',
        ],
        render: () => (
          <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
            <h1 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#0f172a' }}>Context &amp; Ref</h1>
            <p style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold', color: '#334155' }}>ธีม: dark</p>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ padding: '5px 12px', background: '#334155', color: '#fff', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
                เปลี่ยนธีม
              </span>
              <label style={{ fontSize: '13px', color: '#334155' }}>
                ชื่อ <span style={{ padding: '4px 10px', background: '#fff', border: '2px solid #0284c7', borderRadius: '4px' }}>|</span>
              </label>
              <span style={{ padding: '5px 12px', background: '#0284c7', color: '#fff', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
                โฟกัสชื่อ
              </span>
            </div>
          </div>
        ),
      },
    ];
  }

  // fs-09 & guided-3
  if (id === 'fs-09' || id === 'guided-3') {
    const isTask = id === 'guided-3';
    return [
      {
        title: isTask ? 'ดึงรายการงานจาก /api/tasks' : 'ดึงรายชื่อลูกค้าจาก /api/customers',
        tabLabel: 'useEffect Fetch UI',
        url: 'http://localhost:5173',
        statusBadge: 'EFFECT & FETCH',
        specNotes: [
          'แสดง <p>กำลังโหลด...</p> ขณะกำลังรอคำตอบจาก API',
          isTask
            ? 'เรียก fetch("/api/tasks") แล้วแสดงชื่องาน เช่น "เรียน Node" ใน <ul><li>'
            : 'เรียก fetch("/api/customers") แล้วแสดงชื่อลูกค้า เช่น "Mali" ใน <ul><li>',
          'หาก API ตอบกลับไม่สำเร็จ (!r.ok) ต้องแสดงข้อความใน <p role="alert">{error}</p>',
        ],
        render: () => (
          <div style={{ padding: '16px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
            <h1 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#0f172a' }}>
              {isTask ? 'My Task Board' : 'Customers'}
            </h1>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: '#334155' }}>
              <li>{isTask ? 'เรียน Node' : 'Mali'}</li>
            </ul>
          </div>
        ),
      },
    ];
  }

  // guided-4
  if (id === 'guided-4') {
    return [
      {
        title: 'Task Board CRUD ครบวงจร (เพิ่ม, สลับสถานะ, ลบ)',
        tabLabel: 'Task Board CRUD',
        url: 'http://localhost:5173',
        statusBadge: 'FULL STACK CRUD',
        specNotes: [
          'ฟอร์มมี <label>ชื่องาน<input ... /></label> และปุ่ม "เพิ่มงาน" (ถ้าชื่อว่างแสดง role="alert")',
          'แต่ละรายการมีปุ่มสลับสถานะ ("เสร็จแล้ว" / "ยังไม่เสร็จ") และปุ่ม "ลบ"',
        ],
        render: () => (
          <div style={{ padding: '16px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
            <h1 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#0f172a' }}>My Task Board</h1>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 'bold' }}>ชื่องาน</span>
              <span style={{ padding: '5px 10px', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '12px', minWidth: '140px' }}>ฝึก React</span>
              <span style={{ padding: '5px 12px', background: '#0284c7', color: '#fff', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>เพิ่มงาน</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px' }}>
              <span>• เรียน Node</span>
              <span style={{ padding: '2px 8px', background: '#e2e8f0', borderRadius: '4px', fontSize: '11px' }}>เสร็จแล้ว</span>
              <span style={{ padding: '2px 8px', background: '#fee2e2', color: '#dc2626', borderRadius: '4px', fontSize: '11px' }}>ลบ</span>
            </div>
          </div>
        ),
      },
    ];
  }

  // fs-12 & exam-api
  if (id === 'fs-12' || id === 'exam-api') {
    return [
      {
        title: 'สร้างลูกค้าใหม่ (POST /api/customers -> 201 Created)',
        tabLabel: 'POST / PUT / DELETE /api/customers',
        url: 'http://localhost:3000/api/customers',
        statusBadge: '201 / 200 / 400 / 404',
        specNotes: [
          'ใน backend/controllers/customers.js เติม exports.create, exports.update, และ exports.remove',
          'POST /api/customers: ถ้าไม่มี name หรือ email ที่ถูกต้องตอบ 400, ถ้าผ่านสร้างใหม่ตอบ 201',
          'PUT /api/customers/:id และ DELETE /api/customers/:id: ถ้าไม่พบ ID ตอบ 404, ถ้าสำเร็จตอบ 200',
        ],
        render: () =>
          renderApiTerminal({
            method: 'POST',
            path: '/api/customers',
            requestBody: { name: 'Suda', email: 'suda@example.com' },
            status: '201 Created',
            responseBody: { id: 2, name: 'Suda', email: 'suda@example.com' },
          }),
      },
    ];
  }

  // fs-13, exam-react, lab-customers
  if (['fs-13', 'exam-react', 'lab-customers'].includes(id)) {
    const isWorkshop = id === 'lab-customers';
    return [
      {
        title: 'ฟอร์มและรายการลูกค้า (Customer CRUD)',
        tabLabel: 'Customer CRUD UI',
        url: 'http://localhost:5173',
        statusBadge: 'REACT CRUD',
        specNotes: [
          'มีช่องกรอก <label>ชื่อ<input .../></label> และ <label>อีเมล<input .../></label>',
          isWorkshop
            ? 'ปุ่มส่งฟอร์มแสดง "เพิ่มลูกค้า" (และเปลี่ยนเป็น "อัปเดตลูกค้า" เมื่อกดปุ่ม "แก้ไข")'
            : 'ปุ่มส่งฟอร์มแสดง "เพิ่มลูกค้า" (และเปลี่ยนเป็น "บันทึกการแก้ไข" เมื่อกดปุ่ม "แก้ไข")',
          'แต่ละรายการแสดงชื่อและอีเมล พร้อมปุ่ม "แก้ไข" และปุ่ม "ลบ" และแสดง role="alert" เมื่อ API ล้มเหลว',
        ],
        render: () => (
          <div style={{ padding: '16px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
            <h1 style={{ margin: '0 0 12px 0', fontSize: '18px', color: '#0f172a' }}>Customer CRUD</h1>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '14px', padding: '10px', background: '#f8fafc', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
              <label style={{ fontSize: '12px', fontWeight: 'bold' }}>
                ชื่อ <span style={{ padding: '4px 8px', background: '#fff', border: '1px solid #cbd5e1', borderRadius: '4px', fontWeight: 'normal' }}>Suda</span>
              </label>
              <label style={{ fontSize: '12px', fontWeight: 'bold' }}>
                อีเมล <span style={{ padding: '4px 8px', background: '#fff', border: '1px solid #cbd5e1', borderRadius: '4px', fontWeight: 'normal' }}>suda@example.com</span>
              </label>
              <span style={{ padding: '5px 12px', background: '#0284c7', color: '#fff', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
                เพิ่มลูกค้า
              </span>
            </div>
            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: '#0f172a' }}>
              <li style={{ marginBottom: '6px' }}>
                <strong>Mali</strong> (mali@example.com){' '}
                <span style={{ padding: '2px 8px', background: '#e2e8f0', borderRadius: '4px', fontSize: '11px', marginLeft: '6px' }}>แก้ไข</span>{' '}
                <span style={{ padding: '2px 8px', background: '#fee2e2', color: '#dc2626', borderRadius: '4px', fontSize: '11px' }}>ลบ</span>
              </li>
            </ul>
          </div>
        ),
      },
    ];
  }

  // fs-14
  if (id === 'fs-14') {
    return [
      {
        title: 'ค้นหาลูกค้าด้วย Parameterized Query (GET /api/search?keyword=Mali)',
        tabLabel: 'GET /api/search',
        url: 'http://localhost:3000/api/search?keyword=Mali',
        statusBadge: '200 OK (SQL Safe)',
        specNotes: [
          'ใน backend/db.js ใช้ db.prepare("SELECT * FROM customers WHERE name LIKE ?")',
          'ผูกค่าด้วย statement.bind(["%" + keyword + "%"]) และคืนแถวข้อมูลพร้อม statement.free()',
          'ป้องกัน SQL Injection เมื่อส่ง keyword="\' OR 1=1 --" ต้องได้อาร์เรย์ว่าง []',
        ],
        render: () =>
          renderApiTerminal({
            method: 'GET',
            path: '/api/search?keyword=Mali',
            responseBody: [{ id: 1, name: 'Mali', email: 'mali@example.com' }],
          }),
      },
    ];
  }

  // fs-15
  if (id === 'fs-15') {
    return [
      {
        title: 'ดึงข้อมูลลูกค้าผ่าน Prisma Client (GET /api/customers?keyword=Mali)',
        tabLabel: 'Prisma findMany',
        url: 'http://localhost:3000/api/customers?keyword=Mali',
        statusBadge: 'PRISMA + MYSQL',
        specNotes: [
          'ใน backend/controllers/customers.js เติม exports.list ให้เรียก prisma.customer.findMany',
          'ใช้ where: { name: { contains: String(req.query.keyword || "") } } และ orderBy: { id: "asc" }',
        ],
        render: () =>
          renderApiTerminal({
            method: 'GET',
            path: '/api/customers?keyword=Mali',
            responseBody: [{ id: 1, name: 'Mali', email: 'mali@example.com' }],
          }),
      },
    ];
  }

  // fs-16, fs-17, exam-auth
  if (['fs-16', 'fs-17', 'exam-auth'].includes(id)) {
    return [
      {
        title: 'สมัครสมาชิกและเข้าสู่ระบบรับ JWT Token (/api/auth/register & /login)',
        tabLabel: 'หน้า 1: Register & Login API',
        url: 'http://localhost:3000/api/auth/login',
        statusBadge: '201 / 200 / 401 / 409',
        specNotes: [
          'POST /api/auth/register: รับ { userName, email, password } (password >= 8 ตัวอักษร), ตรวจซ้ำตอบ 409, แฮชด้วย bcrypt.hash(password, 10), บังคับ role: "user", ตอบ 201',
          'POST /api/auth/login: รับ { userName, password }, ตรวจด้วย bcrypt.compare (ถ้าผิดตอบ 401), ตอบ { token }',
        ],
        render: () =>
          renderApiTerminal({
            method: 'POST',
            path: '/api/auth/login',
            requestBody: { userName: 'mali', password: 'password123' },
            responseBody: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' },
          }),
      },
      {
        title: 'ตรวจสอบสิทธิ์ด้วย Bearer Token (GET /api/auth/me)',
        tabLabel: 'หน้า 2: Protected Route (/me)',
        url: 'http://localhost:3000/api/auth/me',
        statusBadge: '200 OK / 401',
        specNotes: [
          'ใน backend/middleware/verifyToken.js ตรวจ Header Authorization: Bearer <token>',
          'ใช้ jwt.verify(header.slice(7), secret) เก็บลง req.user แล้วเรียก next() (ถ้าผิดหรือไม่มีตอบ 401)',
        ],
        render: () =>
          renderApiTerminal({
            method: 'GET',
            path: '/api/auth/me',
            headers: 'Authorization: Bearer eyJhbGciOiJIUzI1Ni...\nContent-Type: application/json',
            responseBody: { id: 1, userName: 'mali', role: 'user' },
          }),
      },
    ];
  }

  // lab-member
  if (id === 'lab-member') {
    return [
      {
        title: 'หน้าเข้าสู่ระบบ (Login.jsx) และสมัครสมาชิก (Register.jsx)',
        tabLabel: 'หน้า 1: Login & Register',
        url: 'http://localhost:5173/login',
        statusBadge: 'AUTH FLOW',
        specNotes: [
          'หน้า /login มี label "ชื่อผู้ใช้", "รหัสผ่าน" และปุ่ม "เข้าสู่ระบบ"',
          'หน้า /register มี label "userName", "email", "password", "confirmation" และปุ่ม "สมัครสมาชิก"',
          'เก็บ Token ใน sessionStorage ชื่อ "practice-token" และแชร์ผ่าน AuthContext',
        ],
        render: () => (
          <div style={{ maxWidth: '340px', margin: '0 auto', background: '#ffffff', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <h1 style={{ margin: '0 0 12px 0', fontSize: '18px', color: '#0f172a' }}>เข้าสู่ระบบ</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
              <label>
                ชื่อผู้ใช้
                <div style={{ padding: '6px 8px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '4px', marginTop: '2px' }}>mali</div>
              </label>
              <label>
                รหัสผ่าน
                <div style={{ padding: '6px 8px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '4px', marginTop: '2px' }}>••••••••</div>
              </label>
              <span style={{ display: 'block', textAlign: 'center', padding: '7px', background: '#0284c7', color: '#ffffff', borderRadius: '4px', fontWeight: 'bold', marginTop: '4px' }}>
                เข้าสู่ระบบ
              </span>
            </div>
          </div>
        ),
      },
      {
        title: 'หน้าสมาชิกที่ป้องกันด้วย ProtectedRoute (/home)',
        tabLabel: 'หน้า 2: Protected Home (/home)',
        url: 'http://localhost:5173/home',
        statusBadge: 'PROTECTED ROUTE',
        specNotes: [
          'ถ้าไม่มี Token ใน sessionStorage เมื่อเปิด /home จะถูก Navigate ไปหน้า /login ทันที',
          'เมื่อยืนยันตัวตนสำเร็จ แสดง <h1>สวัสดี {user.userName}</h1> และปุ่ม "ออกจากระบบ"',
        ],
        render: () => (
          <div style={{ background: '#f0fdf4', padding: '16px', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={18} color="#16a34a" />
                <h1 style={{ margin: 0, fontSize: '18px', color: '#166534' }}>สวัสดี mali</h1>
              </div>
              <span style={{ padding: '4px 10px', background: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
                ออกจากระบบ
              </span>
            </div>
          </div>
        ),
      },
    ];
  }

  // lab-food
  if (id === 'lab-food') {
    return [
      {
        title: 'ระบบจัดการเมนูอาหารพร้อมตัวกรองประเภท (FoodContainer)',
        tabLabel: 'FoodContainer & FoodForm',
        url: 'http://localhost:5173/menu',
        statusBadge: 'FULL STACK MENU',
        specNotes: [
          'Backend (backend/routes/menu.js): รองรับ GET /, GET /types, POST /, PUT /:id, DELETE /:id',
          'FoodForm มี label "ชื่อเมนู", "ราคา", "ประเภท", "ขายดี" และปุ่ม "เพิ่มเมนู" (หรือ "บันทึกเมนู")',
          'FoodContainer มีตัวกรอง <label>กรองประเภท<select .../></label> และรายการเมนูพร้อมป้าย "ขายดี"',
        ],
        render: () => (
          <div style={{ padding: '14px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
            <h1 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#0f172a' }}>จัดการเมนูอาหาร</h1>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', padding: '10px', background: '#f8fafc', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '10px', fontSize: '12px' }}>
              <span>ชื่อเมนู: <strong>ต้มยำ</strong></span>
              <span>ราคา: <strong>80</strong></span>
              <span>ประเภท: <strong>อาหารจานหลัก ▼</strong></span>
              <span>☑️ ขายดี</span>
              <span style={{ padding: '2px 10px', background: '#0284c7', color: '#fff', borderRadius: '4px', fontWeight: 'bold' }}>เพิ่มเมนู</span>
            </div>
            <div style={{ fontSize: '12px', marginBottom: '8px' }}>
              กรองประเภท: <strong>ทั้งหมด ▼</strong>
            </div>
            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px' }}>
              <li>
                <strong>ข้าวผัด</strong> — 60 บาท <em>(ขายดี)</em>{' '}
                <span style={{ padding: '1px 6px', background: '#e2e8f0', borderRadius: '4px', fontSize: '11px' }}>แก้ไข</span>{' '}
                <span style={{ padding: '1px 6px', background: '#fee2e2', color: '#dc2626', borderRadius: '4px', fontSize: '11px' }}>ลบ</span>
              </li>
            </ul>
          </div>
        ),
      },
    ];
  }

  // lab-booking
  if (id === 'lab-booking') {
    return [
      {
        title: 'ระบบจองที่นั่งเวิร์กช็อปและรหัสยกเลิก (BookingPage)',
        tabLabel: 'Workshop Booking',
        url: 'http://localhost:5173/booking',
        statusBadge: 'CAPACITY & CODE',
        specNotes: [
          'แสดงที่นั่งว่างของแต่ละกิจกรรม เช่น "ว่าง 5 / 5 ที่นั่ง"',
          'BookingForm มี label "กิจกรรม", "ชื่อผู้จอง", "จำนวนที่นั่ง" และปุ่ม "ยืนยันการจอง"',
          'การยกเลิกส่ง PATCH /api/bookings/:id/cancel พร้อม Header X-Booking-Code',
        ],
        render: () => (
          <div style={{ padding: '14px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '12px' }}>
            <h1 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#0f172a' }}>Workshop booking</h1>
            <div style={{ padding: '8px 12px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '6px', marginBottom: '10px' }}>
              <strong>React Weekend</strong> — ว่าง 3 / 5 ที่นั่ง
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '10px' }}>
              <span>ชื่อผู้จอง: <strong>Mali</strong></span>
              <span>จำนวนที่นั่ง: <strong>2</strong></span>
              <span style={{ padding: '4px 10px', background: '#0284c7', color: '#fff', borderRadius: '4px', fontWeight: 'bold' }}>ยืนยันการจอง</span>
            </div>
            <div style={{ padding: '8px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '4px' }}>
              <strong>#1 Mali · 2 ที่นั่ง</strong> (confirmed) · <small>รหัสการจอง: a1b2-c3d4</small>
            </div>
          </div>
        ),
      },
    ];
  }

  // lab-inventory
  if (id === 'lab-inventory') {
    return [
      {
        title: 'ระบบคลังสินค้า ประวัติการเคลื่อนไหว และตรวจ Version',
        tabLabel: 'Inventory & Audit Trail',
        url: 'http://localhost:5173/',
        statusBadge: 'OPTIMISTIC LOCK',
        specNotes: [
          'แสดงการ์ดสินค้า เช่น Keyboard "คงเหลือ 10 ชิ้น" พร้อม version',
          'ฟอร์มมี label "สินค้า", "ประเภท" (เบิกออก/รับเข้า), "จำนวน", "เหตุผล" และปุ่ม "บันทึกรายการ"',
          'POST /api/movements ตรวจ version (ถ้าเก่าตอบ 409) และตรวจไม่ให้เบิกเกินสต็อก (409)',
        ],
        render: () => (
          <div style={{ padding: '14px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '12px' }}>
            <h1 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#0f172a' }}>คลังสินค้า</h1>
            <div style={{ padding: '8px 12px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '6px', marginBottom: '10px' }}>
              <strong>Keyboard</strong> — คงเหลือ 7 ชิ้น <small>(version 2)</small>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '10px' }}>
              <span>ประเภท: <strong>เบิกออก</strong></span>
              <span>จำนวน: <strong>3</strong></span>
              <span>เหตุผล: <strong>ยืมไปใช้</strong></span>
              <span style={{ padding: '4px 10px', background: '#0284c7', color: '#fff', borderRadius: '4px', fontWeight: 'bold' }}>บันทึกรายการ</span>
            </div>
            <div style={{ color: '#475569' }}>• out 3 · 10 → 7 · ยืมไปใช้</div>
          </div>
        ),
      },
    ];
  }

  // lab-community
  if (id === 'lab-community') {
    return [
      {
        title: 'ระบบรีวิวเมนูอาหาร 3 ระดับสิทธิ์ (Guest / User / Admin)',
        tabLabel: 'Community Menu & Reviews',
        url: 'http://localhost:5173/',
        statusBadge: 'RBAC & REVIEWS',
        specNotes: [
          'หน้าหลักแสดงเมนูพร้อมคะแนนเฉลี่ย เช่น "★ 4.5 · 2 รีวิว" และลิงก์ "อ่านรีวิว / ให้คะแนน"',
          'สมาชิกที่ล็อกอินให้คะแนน 1-5 ดาวได้เมนูละ 1 ครั้ง (ซ้ำตอบ 409)',
          'หน้า /admin เฉพาะ role === "admin" เท่านั้น (ถ้าเป็น user ปกติแสดง "403 · เฉพาะผู้ดูแล")',
        ],
        render: () => (
          <div style={{ padding: '14px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '12px' }}>
            <h1 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#0f172a' }}>Community menu</h1>
            <div style={{ padding: '10px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
              <h2 style={{ margin: '0 0 4px 0', fontSize: '15px' }}>ข้าวผัด</h2>
              <div>60 บาท · <strong>★ 4.5 · 2 รีวิว</strong></div>
              <span style={{ color: '#0284c7', textDecoration: 'underline', fontWeight: 'bold', display: 'inline-block', marginTop: '4px' }}>
                อ่านรีวิว / ให้คะแนน
              </span>
            </div>
          </div>
        ),
      },
    ];
  }

  // exam-campus-gear
  if (id === 'exam-campus-gear') {
    return [
      {
        title: 'ระบบยืม-คืนอุปกรณ์มหาวิทยาลัย (Campus Gear Borrowing)',
        tabLabel: 'Campus Gear Exam',
        url: 'http://localhost:5173',
        statusBadge: 'CAPSTONE EXAM',
        specNotes: [
          'ดูรายละเอียด Endpoint และปุ่มทั้งหมดในไฟล์ EXAM_REQUIREMENTS.md',
          'สามารถเปิดแท็บ "👁️ ตัวอย่างผลลัพธ์ (Demo)" เพื่อทดลองเล่นระบบตัวอย่างได้ทันที',
        ],
        render: () => (
          <div style={{ padding: '14px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '12px' }}>
            <h3 style={{ margin: '0 0 6px 0', color: '#0f172a' }}>🎓 Campus Gear Borrowing System</h3>
            <p style={{ margin: 0, color: '#475569' }}>แสดงรายการอุปกรณ์, สถานะคงเหลือ, ฟอร์มยืมอุปกรณ์ และการกดคืนอุปกรณ์</p>
          </div>
        ),
      },
    ];
  }

  // exam-store-hub
  if (id === 'exam-store-hub') {
    return [
      {
        title: 'Store & Order Hub (จัดการสต็อกและสั่งซื้อสินค้า)',
        tabLabel: 'Store & Order Hub',
        url: 'http://localhost:5173',
        statusBadge: 'FULL STACK EXAM',
        specNotes: [
          'ดึงและแสดงรายการสินค้าจาก GET /api/products พร้อมฟอร์มเพิ่มสินค้า (POST /api/products)',
          'ฟอร์มสั่งซื้อสินค้า (POST /api/orders) ตรวจสอบสต็อกและแสดงข้อผิดพลาดใน role="alert" เมื่อสต็อกไม่พอ',
        ],
        render: () => (
          <div style={{ padding: '14px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '12px' }}>
            <h3 style={{ margin: '0 0 6px 0', color: '#0f172a' }}>📦 Store &amp; Order Hub</h3>
            <p style={{ margin: 0, color: '#475569' }}>ตารางสินค้า, ฟอร์มเพิ่มสินค้าใหม่, ฟอร์มสั่งซื้อตัดสต็อก และประวัติออเดอร์</p>
          </div>
        ),
      },
    ];
  }

  return [];
}
