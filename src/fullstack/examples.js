// Short worked examples teach the pattern without filling in the learner's task.
export const examples = {
  'fs-00': `// frontend/App.jsx — component คืน JSX
export default function App() {
  return (
    <main>
      <h1>My first page</h1>
      <p>แก้ข้อความ แล้วดูผลจาก Preview</p>
    </main>
  );
}`,
  'fs-01': `// backend/lib/math.js
exports.add = (a, b) => a + b;

// ใช้จากไฟล์อื่น
const { add } = require('./lib/math.js');
console.log(add(2, 3)); // 5

// frontend ใช้ ES modules
export const names = people.map(person => person.name);`,
  'fs-02': `function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function announce() {
  console.log('เริ่มรอ');
  await delay(1000);
  console.log('ครบหนึ่งวินาที');
}
announce().catch(console.error);`,
  'fs-03': `const fs = require('node:fs/promises');
const path = require('node:path');

async function readSettings() {
  const file = path.join(__dirname, 'settings.json');
  const text = await fs.readFile(file, 'utf8');
  return JSON.parse(text);
}`,
  'fs-04': `// GET /api/books/7?language=th
app.get('/api/books/:id', (req, res) => {
  const id = Number(req.params.id); // 7
  const language = req.query.language; // 'th'
  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: 'Invalid ID' });
  }
  res.json({ id, language });
});`,
  'fs-05': `// backend/routes/books.js
const router = require('express').Router();
router.get('/', (req, res) => res.json([]));
module.exports = router;

// backend/app.js — mount ด้วย prefix
app.use(express.json());
app.use('/api/books', require('./routes/books.js'));
// GET /api/books จึงเข้าฟังก์ชันด้านบน`,
  'fs-06': `// components/Greeting.jsx
export default function Greeting({ name }) {
  return <p className="greeting">สวัสดี {name}</p>;
}

// App.jsx
import Greeting from './components/Greeting';
export default function App() {
  return <Greeting name="Mali" />;
}`,
  'fs-07': `import { useState } from 'react';
export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  return (
    <button onClick={() => setLikes(previous => previous + 1)}>
      ถูกใจ {likes}
    </button>
  );
}`,
  'fs-08': `const [email, setEmail] = useState('');
function submit(event) {
  event.preventDefault();
  console.log(email.trim());
}
return (
  <form onSubmit={submit}>
    <label>อีเมล
      <input type="email" value={email}
        onChange={event => setEmail(event.target.value)} />
    </label>
    <button>ส่ง</button>
  </form>
);`,
  'fs-09': `useEffect(() => {
  const controller = new AbortController();
  fetch('/api/health', { signal: controller.signal })
    .then(response => {
      if (!response.ok) throw new Error('Request failed');
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => {
      if (error.name !== 'AbortError') console.error(error);
    });
  return () => controller.abort();
}, []);`,
  'fs-10': `<BrowserRouter>
  <nav><Link to="/about">About</Link></nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
// เมื่อเปลี่ยน Link: route เลือก component ใหม่
// หน้าเว็บไม่ต้อง reload ทั้งเอกสาร`,
  'fs-11': `const UserContext = createContext(null);
// ฝั่งแม่
<UserContext.Provider value={{ name: 'Mali' }}>
  <Profile />
</UserContext.Provider>

// ฝั่งลูก
const user = useContext(UserContext);
const inputRef = useRef(null);
// <input ref={inputRef} />
// <button onClick={() => inputRef.current.focus()}>Focus</button>`,
  'fs-12': `// แยก route ออกจากงานจัดการข้อมูล
router.post('/', controller.create);

// controller
exports.create = (req, res) => {
  if (!req.body.name?.trim()) {
    return res.status(400).json({ message: 'Name required' });
  }
  const book = { id: nextId++, name: req.body.name.trim() };
  books.push(book);
  res.status(201).json(book);
};`,
  'fs-13': `// services/bookApi.js
import axios from 'axios';
export const getBooks = async () => {
  const response = await axios.get('/api/books');
  return response.data;
};

// component เรียก service แล้วปรับ state
try {
  const rows = await getBooks();
  setBooks(rows);
} catch {
  setError('โหลดหนังสือไม่สำเร็จ');
}`,
  'fs-14': `// mysql2 ตามแนวในชีท
const [rows] = await pool.query(
  'SELECT * FROM books WHERE name LIKE ?',
  ['%' + keyword + '%']
);
// ? แยกค่าจาก SQL ไม่เอาข้อความผู้ใช้ต่อเข้า query

// sql.js ในบทฝึกเว็บ
const stmt = db.prepare('SELECT * FROM books WHERE name LIKE ?');
stmt.bind(['%' + keyword + '%']);
while (stmt.step()) console.log(stmt.getAsObject());
stmt.free();`,
  'fs-15': `// Prisma คืน object หรือ null
const one = await prisma.customer.findUnique({
  where: { email: 'mali@example.com' }
});

// findMany คืน array
const rows = await prisma.customer.findMany({
  where: { name: { contains: 'Ma' } },
  select: { id: true, name: true },
  orderBy: { id: 'asc' }
});`,
  'fs-16': `const bcrypt = require('bcryptjs');
// ตอนสมัคร: บันทึก hash แทนรหัสผ่าน
const passwordHash = await bcrypt.hash(password, 10);

// ตอน login: เปรียบเทียบผ่าน bcrypt
const matched = await bcrypt.compare(password, user.passwordHash);
if (!matched) return res.status(401).json({ message: 'Invalid credentials' });
// อย่าส่ง passwordHash กลับไปที่หน้าเว็บ`,
  'fs-17': `const jwt = require('jsonwebtoken');
const token = jwt.sign(
  { userId: user.id },
  process.env.JWT_KEY,
  { expiresIn: '1h' }
);

// middleware ฝั่ง server
try {
  const payload = jwt.verify(token, process.env.JWT_KEY);
  req.user = payload;
  next();
} catch {
  return res.status(401).json({ message: 'Invalid or expired token' });
}`,
};
