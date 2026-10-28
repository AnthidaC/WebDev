/**
 * Exam E: Store & Order Hub (Full Stack From Scratch Challenge)
 * ข้อสอบท้าทาย Full Stack สร้างจากศูนย์
 * จัดเตรียมเฉพาะ setup ที่บังคับ format (package.json, ports, exact field names)
 * โค้ดคอมโพเนนต์และเราต์เริ่มต้นเป็นโครงโปร่งใส เพื่อให้ผู้เรียนสร้างระบบด้วยตนเอง
 */

export const storeHubRequirements = `# CAMPUS STORE & ORDER HUB — สอบปฏิบัติ Full Stack จากศูนย์

เวลา 3 ชั่วโมง · คะแนน 100 · React + Express · ระบบจัดการสินค้าและสั่งซื้อ

ดูเว็บตัวอย่างจริงที่จำลองเล่นได้ในแท็บ "👁️ ตัวอย่างผลลัพธ์ (Demo)" เพื่อดูการทำงานจริงของหน้าเว็บ

## การรันโปรเจกต์
- npm install
- npm run dev
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

---

## กฎและ Format ที่ระบบตรวจ (Strict Format Specifications)

### 1. ข้อมูลสินค้า (Product Specification)
- ฟิลด์ที่ต้องมี:
  - id: number
  - name: string (ชื่อสินค้า)
  - price: number (ราคามากกว่า 0)
  - stock: number (จำนวนสต็อกคงเหลือ มากกว่าหรือเท่ากับ 0)

### 2. ข้อมูลการสั่งซื้อ (Order Specification)
- ฟิลด์ที่ต้องมี:
  - id: number
  - productId: number (รหัสสินค้าที่สั่ง)
  - productName: string (ชื่อสินค้า)
  - quantity: number (จำนวนที่สั่ง มากกว่า 0)
  - totalPrice: number (ราคารวม = price * quantity)
  - createdAt: string

### 3. API Endpoints ที่ต้องสร้าง
- GET /api/products
  - ตอบกลับ 200 OK พร้อม Array ของสินค้าทั้งหมด
- POST /api/products
  - รับ body: { name, price, stock }
  - ตรวจสอบ: หากไม่มี name หรือ price <= 0 หรือ stock < 0 ให้ตอบกลับ 400 Bad Request ({ message: "..." })
  - เมื่อถูกต้อง สร้างสินค้าใหม่ กำหนด id, บันทึก และตอบกลับ 201 Created พร้อม JSON ของสินค้าใหม่
- POST /api/orders
  - รับ body: { productId, quantity }
  - ตรวจสอบ: ค้นหาสินค้าตาม productId หากไม่พบให้ตอบกลับ 404 Not Found
  - ตรวจสอบ: หาก quantity <= 0 ให้ตอบกลับ 400 Bad Request
  - ตรวจสอบ: หาก quantity > product.stock (สต็อกไม่พอ) ให้ตอบกลับ 409 Conflict หรือ 400 Bad Request
  - เมื่อถูกต้อง: หักสต็อกสินค้า (product.stock -= quantity), สร้างรายการ order, ตอบกลับ 201 Created
- GET /api/orders
  - ตอบกลับ 200 OK พร้อม Array ของรายการสั่งซื้อทั้งหมด

### 4. หน้าจอ React (Frontend Requirements)
- มีฟอร์มเพิ่มสินค้าพร้อม Label:
  - <label htmlFor="name-input">ชื่อสินค้า</label>
  - <label htmlFor="price-input">ราคา</label>
  - <label htmlFor="stock-input">จำนวนสต็อก</label>
  - ปุ่มกดบันทึก: <button type="submit">บันทึกสินค้า</button>
- มีส่วนสั่งซื้อสินค้า:
  - ช่องกรอกจำนวน: <label htmlFor="order-qty">จำนวนที่สั่ง</label>
  - ปุ่มกดสั่งซื้อ: <button type="submit">สั่งซื้อสินค้า</button>
- มีการแสดงข้อความ Error เมื่อเกิดข้อผิดพลาด: element ที่มี role="alert"
`;

export const storeHubStarter = {
  'package.json': JSON.stringify({
    name: 'store-order-hub',
    version: '1.0.0',
    type: 'module',
    scripts: {
      dev: 'vite',
      build: 'vite build',
      test: 'vitest run'
    },
    dependencies: {
      react: '^18.3.1',
      'react-dom': '^18.3.1',
      express: '^4.21.2',
      cors: '^2.8.5'
    },
    devDependencies: {
      '@vitejs/plugin-react': '^4.3.4',
      vite: '^5.4.11',
      vitest: '^2.1.8',
      '@testing-library/react': '^16.1.0',
      '@testing-library/jest-dom': '^6.6.3',
      jsdom: '^25.0.1'
    }
  }, null, 2),

  'vite.config.js': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
});
`,

  'index.html': `<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Store & Order Hub</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/frontend/main.jsx"></script>
  </body>
</html>
`,

  'frontend/main.jsx': `import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(<App />);
`,

  'frontend/App.jsx': `import React, { useState, useEffect } from 'react';

/**
 * 📌 โจทย์ท้าทาย Full Stack (สร้างจากศูนย์):
 * 
 * สิ่งที่ระบบจัดเตรียมให้ (Setup Format):
 * 1. Proxy '/api' ชี้ไปยัง Backend Port 3000 อัตโนมัติ
 * 2. Label ที่ชุดตรวจอัตโนมัติค้นหา:
 *    - 'ชื่อสินค้า' (สำหรับ input ชื่อ)
 *    - 'ราคา' (สำหรับ input ราคา)
 *    - 'จำนวนสต็อก' (สำหรับ input สต็อก)
 *    - ปุ่มบันทึก: 'บันทึกสินค้า'
 *    - ช่องจำนวนสั่ง: 'จำนวนที่สั่ง'
 *    - ปุ่มสั่งซื้อ: 'สั่งซื้อสินค้า'
 *    - กล่องแจ้งเตือน Error: role="alert"
 * 
 * ดูตัวอย่างเว็บจำลองที่กดเล่นได้ในแท็บ "👁️ ตัวอย่างผลลัพธ์ (Demo)" ด้านขวา
 */
export default function App() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  // TODO: เขียน State, ฟังก์ชันดึงข้อมูล GET /api/products, ฟังก์ชันเพิ่มสินค้า และฟังก์ชันสั่งซื้อ
  return (
    <main style={{ padding: '24px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1>📦 Store & Order Hub</h1>
      <p style={{ color: '#64748b' }}>
        เริ่มพัฒนาคอมโพเนนต์และเชื่อมต่อกับ Express API ได้ที่นี่ (คลิกดู Demo ตัวอย่างเว็บจริงได้ที่แผงขวา)
      </p>

      {error && <div role="alert" style={{ background: '#fee2e2', color: '#dc2626', padding: '10px', borderRadius: '6px' }}>{error}</div>}

      {/* TODO: สร้างฟอร์มเพิ่มสินค้า และตารางแสดงรายการสินค้า / สั่งซื้อ */}
    </main>
  );
}
`,

  'backend/server.js': `const app = require('./app.js');
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log('Store API running on http://localhost:' + port);
});
`,

  'backend/app.js': `const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ข้อมูลจำลองในหน่วยความจำเริ่มต้น (In-Memory Database)
let products = [
  { id: 1, name: 'ปากกาเจล', price: 25, stock: 10 },
  { id: 2, name: 'สมุดโน้ตสันห่วง', price: 50, stock: 5 },
];
let orders = [];
let nextProductId = 3;
let nextOrderId = 1;

// 📌 1. GET /api/products - ส่งรายการสินค้าทั้งหมด
app.get('/api/products', (req, res) => {
  // TODO: ส่งคืนรายการสินค้าทั้งหมด
  res.json(products);
});

// 📌 2. POST /api/products - เพิ่มสินค้าใหม่
// สเปก: ตรวจสอบ name, price > 0, stock >= 0 -> ถ้าผิดตอบ 400 Bad Request
// ถ้าถูก: สร้าง { id: nextProductId++, name, price: Number(price), stock: Number(stock) } -> ตอบ 201 Created
app.post('/api/products', (req, res) => {
  const { name, price, stock } = req.body || {};
  if (!name || price === undefined || stock === undefined || Number(price) <= 0 || Number(stock) < 0) {
    return res.status(400).json({ message: 'ข้อมูลสินค้าไม่ถูกต้อง กรุณากรอกชื่อ ราคา (>0) และสต็อก (>=0)' });
  }
  const newProduct = {
    id: nextProductId++,
    name: String(name).trim(),
    price: Number(price),
    stock: Number(stock),
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// 📌 3. POST /api/orders - ทำรายการสั่งซื้อสินค้า
// สเปก: ตรวจสอบ productId และ quantity > 0
// หากไม่พบสินค้าตอบ 404, หากสต็อกไม่พอตอบ 409 หรือ 400
// หัก stock ใน products และบันทึก order -> ตอบ 201 Created
app.post('/api/orders', (req, res) => {
  const { productId, quantity } = req.body || {};
  const qty = Number(quantity);
  const prod = products.find(p => p.id === Number(productId));

  if (!prod) {
    return res.status(404).json({ message: 'ไม่พบรหัสสินค้าที่ระบุ' });
  }
  if (!qty || qty <= 0) {
    return res.status(400).json({ message: 'จำนวนสั่งซื้อต้องมากกว่า 0' });
  }
  if (qty > prod.stock) {
    return res.status(409).json({ message: 'สินค้าคงเหลือไม่เพียงพอ (คงเหลือ ' + prod.stock + ' ชิ้น)' });
  }

  prod.stock -= qty;
  const newOrder = {
    id: nextOrderId++,
    productId: prod.id,
    productName: prod.name,
    quantity: qty,
    totalPrice: prod.price * qty,
    createdAt: new Date().toISOString(),
  };
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// 📌 4. GET /api/orders - ส่งรายการสั่งซื้อทั้งหมด
app.get('/api/orders', (req, res) => {
  res.json(orders);
});

module.exports = app;
`,

  'EXAM_REQUIREMENTS.md': storeHubRequirements,
};

export const storeHubSolution = {
  ...storeHubStarter,
  'frontend/App.jsx': `import React, { useState, useEffect } from 'react';

export default function App() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    try {
      setLoading(true);
      const [resProd, resOrd] = await Promise.all([
        fetch('/api/products').then(r => r.json()),
        fetch('/api/orders').then(r => r.json()),
      ]);
      setProducts(resProd);
      setOrders(resOrd);
      if (resProd.length > 0 && !selectedProduct) {
        setSelectedProduct(resProd[0].id);
      }
    } catch (err) {
      setError('ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price: Number(price), stock: Number(stock) }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'เพิ่มสินค้าไม่สำเร็จ');
      }
      setName('');
      setPrice('');
      setStock('');
      setSuccess('บันทึกสินค้าใหม่สำเร็จ!');
      await loadData();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCreateOrder = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: Number(selectedProduct), quantity: Number(quantity) }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'สั่งซื้อไม่สำเร็จ');
      }
      setSuccess('สั่งซื้อสินค้าสำเร็จและตัดสต็อกเรียบร้อย!');
      setQuantity(1);
      await loadData();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main style={{ padding: '24px', maxWidth: '840px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ color: '#0f172a' }}>📦 Store & Order Hub</h1>
      <p style={{ color: '#64748b', marginBottom: '20px' }}>ระบบจัดการสต็อกสินค้าและทำรายการสั่งซื้อ Full Stack</p>

      {error && <div role="alert" style={{ background: '#fee2e2', color: '#dc2626', padding: '10px 14px', borderRadius: '6px', marginBottom: '16px' }}>{error}</div>}
      {success && <div style={{ background: '#dcfce7', color: '#15803d', padding: '10px 14px', borderRadius: '6px', marginBottom: '16px' }}>{success}</div>}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '28px' }}>
        {/* ฟอร์มเพิ่มสินค้า */}
        <form onSubmit={handleAddProduct} style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', color: '#1e293b' }}>➕ เพิ่มสินค้าใหม่</h3>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="name-input" style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>ชื่อสินค้า</label>
            <input id="name-input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="เช่น สมุดสันห่วง" style={{ width: '100%', padding: '6px 8px', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="price-input" style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>ราคา</label>
            <input id="price-input" type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="เช่น 45" style={{ width: '100%', padding: '6px 8px', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label htmlFor="stock-input" style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>จำนวนสต็อก</label>
            <input id="stock-input" type="number" value={stock} onChange={e => setStock(e.target.value)} placeholder="เช่น 20" style={{ width: '100%', padding: '6px 8px', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
          </div>
          <button type="submit" style={{ background: '#0284c7', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>บันทึกสินค้า</button>
        </form>

        {/* ฟอร์มสั่งซื้อ */}
        <form onSubmit={handleCreateOrder} style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', color: '#1e293b' }}>🛒 ทำรายการสั่งซื้อ</h3>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>เลือกสินค้า</label>
            <select value={selectedProduct} onChange={e => setSelectedProduct(e.target.value)} style={{ width: '100%', padding: '6px 8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}>
              {products.map(p => (
                <option key={p.id} value={p.id}>{p.name} - ฿{p.price} (คงเหลือ {p.stock})</option>
              ))}
            </select>
          </div>
          <div style={{ marginBottom: '14px' }}>
            <label htmlFor="order-qty" style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>จำนวนที่สั่ง</label>
            <input id="order-qty" type="number" min="1" value={quantity} onChange={e => setQuantity(e.target.value)} style={{ width: '100%', padding: '6px 8px', borderRadius: '4px', border: '1px solid #cbd5e1' }} />
          </div>
          <button type="submit" style={{ background: '#16a34a', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>สั่งซื้อสินค้า</button>
        </form>
      </div>

      {/* ตารางสินค้า */}
      <section style={{ marginBottom: '28px' }}>
        <h3 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '10px' }}>📋 รายการสินค้าในคลัง</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: '#f1f5f9', borderBottom: '2px solid #cbd5e1', textAlign: 'left' }}>
              <th style={{ padding: '8px' }}>ID</th>
              <th style={{ padding: '8px' }}>ชื่อสินค้า</th>
              <th style={{ padding: '8px' }}>ราคา</th>
              <th style={{ padding: '8px' }}>คงเหลือ</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '8px' }}>{p.id}</td>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>{p.name}</td>
                <td style={{ padding: '8px' }}>฿{p.price}</td>
                <td style={{ padding: '8px' }}>
                  <span style={{ padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold', background: p.stock > 0 ? '#dcfce7' : '#fee2e2', color: p.stock > 0 ? '#15803d' : '#dc2626' }}>
                    {p.stock > 0 ? p.stock + ' ชิ้น' : 'สินค้าหมด'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ประวัติการสั่งซื้อ */}
      <section>
        <h3 style={{ fontSize: '16px', color: '#1e293b', marginBottom: '10px' }}>📜 ประวัติการสั่งซื้อ</h3>
        {orders.length === 0 ? (
          <p style={{ color: '#94a3b8', fontSize: '13px' }}>ยังไม่มีรายการสั่งซื้อ</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {orders.map(o => (
              <li key={o.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', borderBottom: '1px solid #e2e8f0', background: '#f8fafc', borderRadius: '6px', marginBottom: '6px', fontSize: '13px' }}>
                <div>
                  <strong>ออเดอร์ #{o.id}</strong>: {o.productName} × {o.quantity} ชิ้น
                </div>
                <div style={{ color: '#16a34a', fontWeight: 'bold' }}>ยอดรวม ฿{o.totalPrice}</div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
`,
};

export const storeHubTests = `import { beforeAll, afterAll, test, expect } from 'vitest';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const app = require('../backend/app.js');
let server, base;

beforeAll(async () => {
  server = app.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  base = 'http://127.0.0.1:' + server.address().port;
});

afterAll(() => new Promise(resolve => server.close(resolve)));

const req = (url, method = 'GET', body) => fetch(base + url, {
  method,
  headers: { 'Content-Type': 'application/json' },
  ...(body === undefined ? {} : { body: JSON.stringify(body) })
});

test('GET /api/products returns initial array', async () => {
  const r = await req('/api/products');
  expect(r.status).toBe(200);
  const items = await r.json();
  expect(Array.isArray(items)).toBe(true);
  expect(items.length).toBeGreaterThanOrEqual(2);
});

test('POST /api/products validates input and creates product', async () => {
  // Invalid data -> 400
  let r = await req('/api/products', 'POST', { name: '', price: -5, stock: -1 });
  expect(r.status).toBe(400);

  // Valid data -> 201
  r = await req('/api/products', 'POST', { name: 'กระเป๋าดินสอ', price: 80, stock: 15 });
  expect(r.status).toBe(201);
  const created = await r.json();
  expect(created.id).toBeDefined();
  expect(created.name).toBe('กระเป๋าดินสอ');
  expect(created.stock).toBe(15);
});

test('POST /api/orders validates stock and deducts available count', async () => {
  // Order exceeding stock -> 409 or 400
  let r = await req('/api/orders', 'POST', { productId: 1, quantity: 9999 });
  expect([400, 409]).toContain(r.status);

  // Valid order -> 201 and stock deducted
  r = await req('/api/orders', 'POST', { productId: 1, quantity: 2 });
  expect(r.status).toBe(201);
  const order = await r.json();
  expect(order.quantity).toBe(2);
  expect(order.totalPrice).toBe(50); // 2 * 25

  // Check deducted stock in products
  const check = await (await req('/api/products')).json();
  const prod = check.find(p => p.id === 1);
  expect(prod.stock).toBe(8); // 10 - 2
});
`;
