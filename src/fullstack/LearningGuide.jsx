import React, { useState } from 'react';
import { Lightbulb, CheckCircle2, ChevronDown, ChevronUp, BookOpen, ExternalLink, Play } from 'lucide-react';
import { filePurpose } from './learningGuides';
import { lessonDescriptions, activityDescriptions } from './lessonDescriptions';
import RequirementMockupViewer from './RequirementMockupViewer';

export function LessonWalkthrough({
  item,
  onSelect,
  hints = 0,
  setHints = () => {},
  passed = false,
  onNext,
  isExam = false,
}) {
  const [showHints, setShowHints] = useState(false);

  const rawDescription =
    lessonDescriptions[item.id] ||
    activityDescriptions[item.id] ||
    item.description ||
    (item.paragraphs ? `${item.paragraphs.join('\n\n')}\n\n**เป้าหมายการฝึกฝน:**\n${item.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}` : '');

  const allHints = item.hints || [];

  function extractFilePath(text) {
    const match = text.match(/((?:frontend|backend|scripts|prisma|tests)\/[a-zA-Z0-9_\-\.\/]+|[a-zA-Z0-9_\-]+\.(?:jsx?|json|css|prisma|md))/);
    return match ? match[1] : null;
  }

  // Render markdown with support for code blocks, headers, lists, and file links
  const renderMarkdown = (text) => {
    const lines = text.split('\n');
    const elements = [];
    let inList = false;
    let listItems = [];
    let inCodeBlock = false;
    let codeLines = [];
    let codeLang = '';

    const flushList = (key) => {
      if (listItems.length > 0) {
        const isNumbered = listItems[0].isNumbered;
        const Tag = isNumbered ? 'ol' : 'ul';
        elements.push(
          <Tag key={`list-${key}`} style={{ paddingLeft: '22px', marginBottom: '16px', listStylePosition: 'outside' }}>
            {listItems.map((li, idx) => (
              <li key={idx} style={{ marginBottom: '8px', lineHeight: '1.7' }}>
                <span dangerouslySetInnerHTML={{ __html: li.html }} />
                {li.file && onSelect && (
                  <button
                    type="button"
                    className="fs-quick-file-btn"
                    onClick={() => onSelect(li.file)}
                    title={`เปิดไฟล์ ${li.file} ใน Editor`}
                    style={{
                      marginLeft: '8px',
                      padding: '2px 8px',
                      fontSize: '11px',
                      borderRadius: '4px',
                      border: '1px solid var(--border-color, #cbd5e1)',
                      background: 'var(--bg-secondary, #f1f5f9)',
                      color: 'var(--text-primary, #0f172a)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    📂 เปิด {li.file}
                  </button>
                )}
              </li>
            ))}
          </Tag>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, idx) => {
      const trimmed = line.trim();

      // Handle Code Blocks ```
      if (trimmed.startsWith('```')) {
        if (inCodeBlock) {
          // Flush code block
          elements.push(
            <pre
              key={`code-${idx}`}
              className="fs-worked-example"
              style={{
                background: '#1e293b',
                color: '#f8fafc',
                padding: '14px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                lineHeight: '1.5',
                overflowX: 'auto',
                marginBottom: '16px',
                fontFamily: 'monospace',
              }}
            >
              <code>{codeLines.join('\n')}</code>
            </pre>
          );
          codeLines = [];
          inCodeBlock = false;
        } else {
          flushList(idx);
          inCodeBlock = true;
          codeLang = trimmed.replace(/^```/, '').trim();
        }
        return;
      }

      if (inCodeBlock) {
        codeLines.push(line);
        return;
      }

      // Check empty line
      if (!trimmed) {
        flushList(idx);
        return;
      }

      // Bullet points
      if (trimmed.startsWith('- ') || (trimmed.startsWith('* ') && !trimmed.startsWith('** '))) {
        inList = true;
        const content = trimmed.replace(/^[-*]\s*/, '');
        const file = extractFilePath(content);
        listItems.push({ html: formatInlineCode(content), isNumbered: false, file });
        return;
      }

      // Numbered list
      if (/^\d+\.\s+/.test(trimmed)) {
        inList = true;
        const content = trimmed.replace(/^\d+\.\s*/, '');
        const file = extractFilePath(content);
        listItems.push({ html: formatInlineCode(content), isNumbered: true, file });
        return;
      }

      if (inList) {
        flushList(idx);
      }

      // Bold header line
      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        const content = trimmed.slice(2, -2);
        elements.push(
          <h3
            key={idx}
            style={{
              margin: '20px 0 10px 0',
              color: 'var(--text-primary, #0f172a)',
              fontWeight: '700',
              fontSize: '15.5px',
              borderBottom: '1px solid var(--border-light, #e2e8f0)',
              paddingBottom: '4px',
            }}
          >
            {content}
          </h3>
        );
        return;
      }

      // Default paragraph
      elements.push(
        <p key={idx} style={{ marginBottom: '12px', lineHeight: '1.7' }} dangerouslySetInnerHTML={{ __html: formatInlineCode(line) }} />
      );
    });

    flushList('final');
    if (inCodeBlock && codeLines.length > 0) {
      elements.push(
        <pre
          key="code-final"
          className="fs-worked-example"
          style={{
            background: '#1e293b',
            color: '#f8fafc',
            padding: '14px 16px',
            borderRadius: '8px',
            fontSize: '13px',
            lineHeight: '1.5',
            overflowX: 'auto',
            marginBottom: '16px',
            fontFamily: 'monospace',
          }}
        >
          <code>{codeLines.join('\n')}</code>
        </pre>
      );
    }

    return elements;
  };

  return (
    <div className="instruction-panel fs-instruction-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header matching JS / HTML / CSS Academy */}
      <div className="instruction-header" style={{ padding: '14px 18px', borderBottom: '1px solid var(--border-color, #e2e8f0)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-secondary, #64748b)', display: 'block', marginBottom: '2px' }}>
            {item.chapter}
          </span>
          <h2 style={{ fontSize: '16px', fontWeight: '700', margin: 0, color: 'var(--text-primary, #0f172a)' }}>
            {item.title}
          </h2>
        </div>
        {item.source && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '6px',
              background: 'var(--bg-primary, #ffffff)',
              border: '1px solid var(--border-color, #cbd5e1)',
              fontSize: '12px',
              fontWeight: '600',
              color: 'var(--text-secondary, #475569)',
              flexShrink: 0,
            }}
            title="อ้างอิงจากสไลด์เรียนต้นฉบับ D:\Y4\css\full"
          >
            <BookOpen size={14} style={{ color: '#2563eb' }} />
            <span>{item.source}</span>
          </div>
        )}
      </div>

      {/* Content area: Rich narrative, syntax, and tasks */}
      <div className="instruction-content" style={{ flex: 1, overflowY: 'auto', padding: '20px', fontSize: '14px', lineHeight: '1.7', color: 'var(--text-secondary, #334155)' }}>
        {renderMarkdown(rawDescription)}

        {/* Visual Requirement Mockup Screens */}
        <RequirementMockupViewer item={item} />

        {/* Validation Feedback Box */}
        <div
          className="validation-box"
          style={{
            marginTop: '24px',
            padding: '16px',
            borderRadius: '10px',
            background: 'var(--bg-primary, #ffffff)',
            border: '1px solid var(--border-color, #e2e8f0)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          }}
        >
          <div style={{ fontSize: '12.5px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-primary, #0f172a)', marginBottom: '8px' }}>
            สถานะการตรวจงาน
          </div>

          {passed ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#16a34a', fontWeight: '600' }}>
              <CheckCircle2 size={18} />
              <span>ยอดเยี่ยมมาก! โค้ดของคุณถูกต้องและผ่านการทดสอบตามข้อกำหนดแล้ว</span>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary, #64748b)' }}>
              <Play size={16} />
              <span>เขียนโค้ดตามเป้าหมายด้านบน แล้วคลิกปุ่ม "ตรวจงาน" ด้านล่างเพื่อส่งตรวจ</span>
            </div>
          )}
        </div>

        {/* Collapsible Hints Section */}
        {allHints.length > 0 && !isExam && (
          <div style={{ marginTop: '16px' }}>
            <button
              type="button"
              onClick={() => setShowHints(!showHints)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid var(--border-color, #e2e8f0)',
                background: 'var(--bg-primary, #ffffff)',
                color: 'var(--text-primary, #0f172a)',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '13.5px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Lightbulb size={16} style={{ color: '#eab308' }} />
                <span>{showHints ? 'ซ่อนคำแนะนำและคำใบ้' : `💡 ดูคำแนะนำและคำใบ้ (${allHints.length} ข้อ)`}</span>
              </div>
              {showHints ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {showHints && (
              <ul
                style={{
                  marginTop: '10px',
                  paddingLeft: '20px',
                  background: 'var(--bg-secondary, #f8fafc)',
                  border: '1px solid var(--border-color, #e2e8f0)',
                  borderRadius: '8px',
                  padding: '12px 16px 12px 32px',
                }}
              >
                {allHints.map((hint, idx) => (
                  <li key={idx} style={{ marginBottom: '6px', fontSize: '13px' }} dangerouslySetInnerHTML={{ __html: formatInlineCode(hint) }} />
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Escapes raw HTML entities
function escapeHtml(unsafe) {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Highlight inline code and bold formatting in descriptions
function formatInlineCode(text) {
  const escaped = escapeHtml(text);
  const codeRegex = /`([^`]+)`/g;
  const boldRegex = /\*\*(.*?)\*\*/g;
  const italicRegex = /\*([^*]+)\*/g;

  return escaped
    .replace(codeRegex, '<code style="background:var(--border-light,#e2e8f0);padding:2px 5px;border-radius:4px;color:#dc2626;font-size:12.5px;font-family:monospace;">$1</code>')
    .replace(boldRegex, '<strong style="color:var(--text-primary,#0f172a);font-weight:700;">$1</strong>')
    .replace(italicRegex, '<em style="color:var(--text-secondary,#475569);">$1</em>');
}

export function ProjectOrientation({ item, files, onSelect }) {
  const [selected, setSelected] = useState(item.entry);
  const [mode, setMode] = useState('starter');
  const original = item.starter[selected];
  return <section className="fs-orientation">
    <h3>โครงที่ได้เมื่อเปิดบทหรือแตก ZIP</h3>
    <p>คลิกชื่อไฟล์เพื่ออ่านหน้าที่และโค้ดตั้งต้น แล้วกดเปิดใน Editor เพื่อแก้ไฟล์จริง งานที่แก้ไว้ยังอยู่ในเบราว์เซอร์นี้</p>
    <pre className="fs-data-flow">{'Browser → index.html → main.jsx → App.jsx\nReact → fetch("/api/…") → Vite proxy\n→ server.js → app.js → route → JSON → UI'}</pre>
    <div className="fs-file-map">{Object.keys(item.starter).sort().map(path => <button className={selected === path ? 'active' : ''} key={path} onClick={() => setSelected(path)}>{path}</button>)}</div>
    <h3>{selected}</h3><p>{filePurpose(selected)}</p>
    <div className="fs-filters"><button className={mode === 'starter' ? 'active' : ''} onClick={() => setMode('starter')}>ตอนเริ่มบท</button><button className={mode === 'current' ? 'active' : ''} onClick={() => setMode('current')}>งานปัจจุบัน</button></div>
    <pre className="fs-worked-example">{mode === 'starter' ? original : files[selected] ?? 'ไฟล์นี้ถูกลบหรือเปลี่ยนชื่อในงานปัจจุบัน'}</pre>
    <button className="fs-secondary" disabled={!Object.hasOwn(files, selected)} onClick={() => onSelect(selected)}>เปิดไฟล์นี้ใน Editor</button>
    <h3>เริ่มบนเครื่องของตัวเอง</h3>
    <p>กด ZIP ที่มุมบนเพื่อส่งออกงาน แล้วแตกไฟล์ลงโฟลเดอร์ใหม่ เปิดโฟลเดอร์ที่มี package.json ใน VS Code และเปิด Terminal ที่โฟลเดอร์นั้น</p>
    {item.runtime === 'external' ? <p>บทนี้ใช้ MySQL จริง อ่าน README.md และ .env.example ในชุดที่ดาวน์โหลด เลือกวิธี XAMPP หรือ Docker ก่อนรันคำสั่งของชุดนั้น</p> : <>
      <p>ติดตั้ง Node.js รุ่น LTS จาก <a href="https://nodejs.org/en/download" target="_blank" rel="noreferrer">เว็บ Node.js</a> แล้วเปิด Terminal ใหม่ ตรวจว่าคำสั่งสองบรรทัดแรกแสดงเลขเวอร์ชัน</p>
      <pre className="fs-worked-example">{'node --version\nnpm --version\nnpm install\nnpm run dev'}</pre>
      <p><strong>วิธีนี้ใช้กับ ZIP ของบทเรียน:</strong> สคริปต์ <code>npm run dev</code> ใน <code>package.json</code> เรียกเครื่องมือ <code>concurrently</code> เพื่อเปิด Vite (เว็บ) และ Node/Express (API) ให้พร้อมกัน จึงไม่ต้องรัน <code>node backend/server.js</code> ซ้ำเองจาก Terminal เดียวกัน หลังพิมพ์คำสั่ง Terminal จะค้างและแสดง log ต่อไป นั่นหมายถึง server ยังทำงานอยู่ ให้เปิด <code>http://localhost:5173</code> ใน browser เพื่อใช้เว็บ และ <code>http://localhost:3000/api/health</code> เพื่อดู API ได้เลย อย่าปิด Terminal ระหว่างใช้งาน</p>
      <p>ถ้ารันแบบแยกเองแทนสคริปต์นี้ ต้องเปิด Terminal สองแท็บในโฟลเดอร์โปรเจกต์: แท็บหนึ่งรัน <code>npm run dev:web</code> สำหรับ Vite; อีกแท็บรัน <code>node backend/server.js</code> สำหรับ API โดย path นี้ใช้เมื่อ <code>backend</code> อยู่ใน root เดียวกับ <code>package.json</code> ของโปรเจกต์บทเรียน เมื่อเลิกใช้ กลับไปยัง Terminal ที่รัน server แล้วกด <code>Ctrl+C</code>; ถ้าต้องการตรวจงาน ให้เปิด Terminal อีกแท็บในโฟลเดอร์เดิมและรัน <code>npm test</code></p>
      <details><summary>ถ้าจะสร้างโครงเองจากโฟลเดอร์ว่าง</summary><p>เริ่มแยกสองส่วนเพื่อเข้าใจหน้าที่ก่อน โครงมาตรฐาน Vite จะใช้ src/ ส่วนแบบฝึกนี้จัดเป็น frontend/ และ backend/ เพื่อเรียนร่วมกัน</p><pre className="fs-worked-example">{'# React (รันทีละบรรทัด)\nnpm create vite@latest my-web -- --template react\ncd my-web\nnpm install\nnpm run dev\n\n# Node: เปิด Terminal อีกอันที่โฟลเดอร์แม่\nmkdir my-api\ncd my-api\nnpm init -y\nnpm install express'}</pre><p>สร้าง server.js ใน my-api ตามตัวอย่างนี้ แล้วรัน <code>node server.js</code></p><pre className="fs-worked-example">{'const express = require("express");\nconst app = express();\napp.use(express.json());\napp.get("/api/health", (req, res) => res.json({ ok: true }));\napp.listen(3000, () => console.log("API :3000"));'}</pre><p>ทดสอบ API ผ่าน URL ของ port 3000 ก่อน การเรียกจาก React ด้วย /api ต้องตั้ง proxy ใน vite.config.js ให้ชี้ไป http://localhost:3000 เหมือนโครงของบทนี้</p></details>
    </>}
    <details><summary>ปัญหาตอนเริ่มที่พบบ่อย</summary><ul><li>npm ไม่รู้จักคำสั่ง: ตรวจติดตั้ง Node แล้วเปิด Terminal ใหม่ บน PowerShell ถ้า npm.ps1 ถูกบล็อก ให้ใช้ npm.cmd แทน npm</li><li>ไม่พบ package.json: เปิด Terminal ผิดโฟลเดอร์ ต้องเข้าโฟลเดอร์ที่แตกไฟล์และมี package.json</li><li>Port ถูกใช้: หยุดโปรเจกต์เดิมด้วย Ctrl+C ก่อนเปิดใหม่</li><li>รันในเว็บไม่ได้: ใช้ Chrome/Edge desktop บน localhost หรือ HTTPS และอนุญาตการทำงานของ browser runtime หรือส่งออก ZIP ไปรันบนเครื่อง</li></ul></details>
    <p><a href="https://nodejs.org/learn" target="_blank" rel="noreferrer">คู่มือ Node.js</a> · <a href="https://react.dev/learn/build-a-react-app-from-scratch" target="_blank" rel="noreferrer">React จากศูนย์</a> · <a href="https://vite.dev/guide/" target="_blank" rel="noreferrer">คู่มือ Vite</a></p>
  </section>;
}
