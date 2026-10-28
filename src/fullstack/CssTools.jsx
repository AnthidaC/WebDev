import { useCallback, useMemo, useState } from 'react';
import { Check, Copy, Pipette, Plus, X } from 'lucide-react';
import './css-tools.css';
import useDialogFocus from './useDialogFocus';

const palettes = [
  { name:'Forest', primary:'#176b55', accent:'#73a78d', background:'#edf5ef' },
  { name:'Ocean', primary:'#2563a6', accent:'#64a8d5', background:'#eef5fb' },
  { name:'Sunset', primary:'#c15f39', accent:'#e9a169', background:'#fff4ed' },
  { name:'Lavender', primary:'#7056a1', accent:'#ac91d2', background:'#f5f1fa' },
  { name:'Mono', primary:'#27313a', accent:'#82909c', background:'#f1f3f5' },
];
const layouts = {
  'Flex row':`.toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}`,
  'Responsive grid':`.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem;\n}`,
  'Center content':`.page {\n  width: min(100% - 2rem, 1120px);\n  margin-inline: auto;\n}`,
  'Card':`.card {\n  padding: 1.25rem;\n  border: 1px solid #dfe7e2;\n  border-radius: 12px;\n  background: #fff;\n}`,
  'Mobile breakpoint':`@media (max-width: 640px) {\n  .page { padding-inline: 1rem; }\n  .toolbar { align-items: stretch; flex-direction: column; }\n}`,
};
const shadows = {
  Soft:'0 8px 24px rgba(25, 45, 35, .10)',
  Lifted:'0 16px 40px rgba(25, 45, 35, .18)',
  Inset:'inset 0 2px 8px rgba(25, 45, 35, .16)',
};

export default function CssTools({ onClose, onInsert }) {
  const close = useCallback(() => onClose(), [onClose]);
  useDialogFocus(true, '.fs-css-tools', close);
  const [tab, setTab] = useState('colors');
  const [primary, setPrimary] = useState(palettes[0].primary);
  const [accent, setAccent] = useState(palettes[0].accent);
  const [surface, setSurface] = useState('#ffffff');
  const [start, setStart] = useState('#176b55');
  const [end, setEnd] = useState('#87c7a6');
  const [angle, setAngle] = useState(135);
  const [layout, setLayout] = useState('Responsive grid');
  const [shadow, setShadow] = useState('Soft');
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState('');
  const gradient = `linear-gradient(${angle}deg, ${start}, ${end})`;
  const code = useMemo(() => tab === 'colors' ? `:root {\n  --color-primary: ${primary};\n  --color-accent: ${accent};\n  --color-surface: ${surface};\n}\n\n.button-primary {\n  color: #fff;\n  background: var(--color-primary);\n}` : tab === 'gradient' ? `.hero {\n  background: ${gradient};\n}` : tab === 'layout' ? layouts[layout] : `.card {\n  box-shadow: ${shadows[shadow]};\n}`, [tab, primary, accent, surface, gradient, layout, shadow]);
  async function copy() { try { await navigator.clipboard.writeText(code); setCopyError(''); setCopied(true); setTimeout(()=>setCopied(false),1300); } catch { setCopied(false); setCopyError('คัดลอกไม่ได้ เลือกโค้ดด้านล่างแล้วกด Ctrl+C หรือ Cmd+C'); } }
  function applyPalette(palette) { setPrimary(palette.primary); setAccent(palette.accent); setSurface(palette.background); setStart(palette.primary); setEnd(palette.accent); }
  return <div className="fs-css-backdrop" role="presentation" onMouseDown={event=>{if(event.target===event.currentTarget)onClose();}}><section className="fs-css-tools" role="dialog" aria-modal="true" aria-labelledby="fs-css-title">
    <header><div className="fs-css-title-icon"><Pipette size={18}/></div><div><h2 id="fs-css-title">เครื่องมือช่วยเขียน CSS</h2><p>ปรับสีและ layout แล้วแทรกโค้ดลงไฟล์ ณ ตำแหน่ง cursor</p></div><button className="fs-icon" aria-label="ปิดเครื่องมือ CSS" onClick={onClose}><X size={19}/></button></header>
    <nav className="fs-css-tabs">{[['colors','ชุดสี'],['gradient','Gradient'],['layout','Layout'],['shadow','เงา']].map(([id,label])=><button key={id} className={tab===id?'active':''} onClick={()=>setTab(id)}>{label}</button>)}</nav>
    <div className="fs-css-body"><div className="fs-css-controls">
      {tab==='colors'&&<><h3>ชุดสีพร้อมใช้</h3><div className="fs-palette-list">{palettes.map(p=><button key={p.name} onClick={()=>applyPalette(p)}><span>{p.name}</span><i style={{'--swatch':p.primary}}/><i style={{'--swatch':p.accent}}/><i style={{'--swatch':p.background}}/></button>)}</div><h3>ปรับสีเอง</h3><label>สีหลัก<input type="color" value={primary} onChange={event=>setPrimary(event.target.value)}/><code>{primary}</code></label><label>สีเน้น<input type="color" value={accent} onChange={event=>setAccent(event.target.value)}/><code>{accent}</code></label><label>พื้นหลัง<input type="color" value={surface} onChange={event=>setSurface(event.target.value)}/><code>{surface}</code></label></>}
      {tab==='gradient'&&<><h3>สร้างไล่สี</h3><label>สีเริ่มต้น<input type="color" value={start} onChange={event=>setStart(event.target.value)}/><code>{start}</code></label><label>สีปลายทาง<input type="color" value={end} onChange={event=>setEnd(event.target.value)}/><code>{end}</code></label><label>ทิศทาง <strong>{angle}°</strong><input type="range" min="0" max="360" value={angle} onChange={event=>setAngle(Number(event.target.value))}/></label><div className="fs-gradient-preview" style={{background:gradient}}><span>Live preview</span></div></>}
      {tab==='layout'&&<><h3>รูปแบบที่ใช้บ่อย</h3><div className="fs-layout-options">{Object.keys(layouts).map(name=><button key={name} className={layout===name?'active':''} onClick={()=>setLayout(name)}>{name}</button>)}</div><div className="fs-layout-preview"><div/><div/><div/></div></>}
      {tab==='shadow'&&<><h3>เงาการ์ด</h3><div className="fs-shadow-options">{Object.entries(shadows).map(([name,value])=><button key={name} className={shadow===name?'active':''} onClick={()=>setShadow(name)}><span style={{boxShadow:value}}/><strong>{name}</strong></button>)}</div></>}
    </div><div className="fs-css-output"><div className="fs-css-demo" style={{background:tab==='gradient'?gradient:surface,color:primary,boxShadow:tab==='shadow'?shadows[shadow]:undefined}}><strong>ตัวอย่างการแสดงผล</strong><span className="fs-css-demo-button" style={{background:primary,color:'#fff'}}>ปุ่มตัวอย่าง</span><span style={{color:accent}}>สีเน้น</span></div><div className="fs-css-code-head"><span>CSS พร้อมใช้</span><button className="fs-secondary fs-compact" onClick={copy}>{copied?<Check size={13}/>:<Copy size={13}/>} {copied?'คัดลอกแล้ว':'คัดลอก'}</button></div><pre tabIndex={0}>{code}</pre>{copyError && <p role="status">{copyError}</p>}<button className="fs-primary fs-css-insert" onClick={()=>{onInsert(code+'\n');onClose();}}><Plus size={15}/>แทรกที่ cursor ในไฟล์ CSS</button></div></div>
  </section></div>;
}
