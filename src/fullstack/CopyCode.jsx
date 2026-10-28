import { useState } from 'react';

export default function CopyCode({ text, label = 'โค้ด' }) {
  const [status, setStatus] = useState('');
  async function copy() {
    try { await navigator.clipboard.writeText(text); setStatus('คัดลอกแล้ว'); }
    catch { setStatus('คัดลอกอัตโนมัติไม่ได้ เลือกข้อความในกรอบแล้วกด Ctrl+C หรือ Cmd+C'); }
  }
  return <div className="fs-copy-code"><div><span>{label}</span><button type="button" className="fs-secondary fs-compact" onClick={copy} aria-label={'คัดลอก ' + label}>คัดลอก</button></div><pre tabIndex={0}>{text}</pre>{status && <p role="status">{status}</p>}</div>;
}
