import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Download } from 'lucide-react';
import { loadSaved, revision } from './workspace';
import { guidedProjects, setupBoardFiles } from './guidedProjects';
import { setupSources, setupStages } from './setupGuideData';
import CopyCode from './CopyCode';
import ReadingSequence from './ReadingSequence';
import { guidedTeaching } from './guidedTeaching';

export function GuidedPath({ onOpen }) {
  return <section className="fs-guided-path" aria-label="เวิร์กช็อปจับมือทำ"><h2>โปรเจกต์แรก เรียนทีละ Level</h2><p>เริ่มไฟล์แรกจนเป็น My Task Board ที่เพิ่มงาน สลับสถานะ และลบได้ แต่ละระดับให้โครงจากระดับก่อนที่ทำเสร็จแล้ว งานที่คุณแก้เก็บแยกกัน จึงกลับไปทบทวนได้</p><div>{guidedProjects.map(item => {
    const saved = loadSaved('fullstack-v1:' + item.id, {});
    const passed = saved.check?.code === 0 && saved.check.revision === revision(saved.files || {});
    return <button className="fs-guided-card" key={item.id} onClick={() => onOpen(item.id)}><span>{passed ? <Check size={18}/> : String(item.guidedLevel).padStart(2, '0')}</span><strong>{item.title}</strong><small>{passed ? 'ตรวจผ่านแล้ว' : item.minutes + ' นาที · เปิดฝึกได้'}</small><small className="fs-guided-connection">{item.connectsTo.lessonId ? 'ต่อจาก ' : ''}{item.connectsTo.title}</small><ArrowRight size={16}/></button>;
  })}</div></section>;
}

export function GuidedSteps({ item, onSelect }) {
  return <section className="fs-guided-steps" aria-label="ขั้นตอนจับมือทำ">
    <ReadingSequence key={item.id} id={item.id} sections={item.walkthrough}>{index => {
      const step = item.walkthrough[index];
      const teaching = guidedTeaching[item.id]?.[index];
      return <>
        {teaching && <><h4>ทำขั้นนี้ไปทำไม</h4><p>{teaching.why}</p><h4>โค้ดทำงานอย่างไร</h4><p>{teaching.trace}</p></>}
        <h4>ลงมือที่ไฟล์นี้</h4><button className="fs-text-btn" onClick={() => onSelect(step.path)}>เปิด {step.path}</button><p>{step.instruction}</p>
        {step.code && <details><summary>ดูโครงสำหรับขั้นนี้</summary><CopyCode text={step.code} label={step.path}/></details>}
        <p className="fs-callout"><strong>ผลที่ควรเห็น:</strong> {step.expected}</p>
        {teaching && <><h4>ลองเปลี่ยน แล้วอธิบายด้วยตัวเอง</h4><p>{teaching.tryIt}</p><details><summary>ดูแนวคิดหลังลองตอบ</summary><p>{teaching.answer}</p></details></>}
        {index === item.walkthrough.length - 1 && <p className="fs-callout">ครบขั้นของ Level นี้แล้ว ลองรันโปรเจกต์และกดตรวจงาน จากนั้นใช้รายการทบทวนด้านล่างตรวจความเข้าใจ</p>}
      </>;
    }}</ReadingSequence>
  </section>;
}

function StageContent({ stage }) {
  const paths = Object.keys(stage.files);
  const [file, setFile] = useState(paths[0] || '');
  return <><p className="fs-setup-location"><strong>ทำที่:</strong> {stage.where}</p><p>{stage.text}</p>
    {stage.steps && <><h3>ทำตามลำดับนี้</h3><ol className="fs-setup-steps">{stage.steps.map((step, index) => <li key={index}>{step}</li>)}</ol></>}
    {stage.commands.length > 0 && <CopyCode text={stage.commands.join('\n')} label="คำสั่ง Terminal (รันทีละบรรทัด)"/>}
    <div className="fs-callout"><strong>ผลที่ควรเห็น</strong><p>{stage.expected}</p></div>
    <h3>โครงไฟล์ช่วงนี้</h3><pre className="fs-data-flow">{stage.tree}</pre>
    {paths.length > 0 && <><h3>เปิดอ่านไฟล์ตัวอย่าง</h3><div className="fs-filters">{paths.map(path => <button className={path === file ? 'active' : ''} key={path} onClick={() => setFile(path)}>{path}</button>)}</div><CopyCode text={stage.files[file]} label={file}/></>}
    {stage.afterFilesCommand && <><h3>รันหลังสร้างและบันทึกไฟล์แล้ว</h3><CopyCode text={stage.afterFilesCommand} label="เริ่ม API"/></>}
    <h3>เข้าใจก่อนขยับต่อ</h3><ul>{stage.notes.map(note => <li key={note}>{note}</li>)}</ul>
    <details className="fs-setup-rescue"><summary>ถ้าติดขั้นนี้</summary><p>{stage.rescue}</p></details>
  </>;
}

export default function SetupGuide({ onOpen, onDownload, onLesson }) {
  const [stageIndex, setStageIndex] = useState(() => {
    const index = loadSaved('fullstack-setup-stage', 0);
    return Number.isInteger(index) && index >= 0 && index < setupStages.length ? index : 0;
  });
  const [done, setDone] = useState(() => {
    const saved = loadSaved('fullstack-setup-done', []);
    return Array.isArray(saved) ? saved.filter(id => setupStages.some(stage => stage.id === id)) : [];
  });
  const [saveError, setSaveError] = useState('');
  const navigation = useRef(null);
  const stage = setupStages[stageIndex];
  useEffect(() => {
    const nav = navigation.current;
    const selected = nav?.querySelector('[aria-current="step"]');
    if (selected && nav.scrollWidth > nav.clientWidth) nav.scrollTo({ left: nav.scrollLeft + selected.getBoundingClientRect().left - nav.getBoundingClientRect().left - 8 });
  }, [stageIndex]);
  useEffect(() => {
    try { localStorage.setItem('fullstack-setup-stage', JSON.stringify(stageIndex)); localStorage.setItem('fullstack-setup-done', JSON.stringify(done)); setSaveError(''); }
    catch { setSaveError('บันทึกขั้นตอนใน browser ไม่สำเร็จ แต่ยังอ่านและฝึกต่อได้'); }
  }, [stageIndex, done]);
  return <main className="fs-setup-page"><div className="fs-eyebrow">START HERE · ZERO TO FULL STACK</div><h1>เริ่ม Node + React ครั้งแรก</h1><p className="fs-setup-intro">ไม่เคยใช้ npm ก็เริ่มได้ ดูคำสั่ง ไฟล์ที่เกิดขึ้น และผลที่ควรเห็นทีละช่วง คู่มือนี้ใช้ Terminal บนเครื่อง หากยังไม่พร้อมติดตั้ง ให้ฝึก Level 1 ในแอปก่อนแล้วกลับมาอ่านได้</p>
    <div className="fs-setup-actions"><button className="fs-primary" onClick={() => onOpen(guidedProjects[0].id)}>ฝึก Level 1 ในแอป <ArrowRight size={16}/></button><button className="fs-secondary" onClick={() => onDownload(setupBoardFiles, 'my-first-task-board')}><Download size={16}/>ZIP โปรเจกต์ปลายทาง</button></div>
    <div className="fs-setup-grid"><nav ref={navigation} aria-label="ขั้นตอนเริ่มโปรเจกต์">{setupStages.map((item, index) => <button key={item.id} aria-current={stageIndex === index ? 'step' : undefined} onClick={() => setStageIndex(index)}><span>{done.includes(item.id) ? <Check size={15}/> : String(index + 1).padStart(2, '0')}</span>{item.title}</button>)}<p>ลองเองแล้ว {done.length}/{setupStages.length} ขั้น</p></nav>
      <article className="fs-setup-stage"><h2>{stage.title}</h2><StageContent key={stage.id} stage={stage}/><label className="fs-review"><input type="checkbox" checked={done.includes(stage.id)} onChange={() => setDone(current => current.includes(stage.id) ? current.filter(id => id !== stage.id) : [...current, stage.id])}/><span>ฉันลองขั้นนี้และเห็นผลแล้ว (บันทึกทบทวนเอง)</span></label>{saveError && <p role="status">{saveError}</p>}<div className="fs-setup-pagination"><button className="fs-secondary" disabled={stageIndex === 0} onClick={() => setStageIndex(index => index - 1)}><ArrowLeft size={15}/>ขั้นก่อนหน้า</button>{stageIndex < setupStages.length - 1 ? <button className="fs-primary" onClick={() => setStageIndex(index => index + 1)}>ขั้นถัดไป <ArrowRight size={15}/></button> : <button className="fs-primary" onClick={() => onOpen(guidedProjects[0].id)}>เริ่มเวิร์กช็อปจับมือทำ <ArrowRight size={15}/></button>}</div></article>
    </div><GuidedPath onOpen={onOpen}/><button className="fs-secondary" onClick={onLesson}>กลับบทเรียน 00</button><p className="fs-setup-sources">แหล่งอ่านเพิ่มเติม: {setupSources.map(([title, url]) => <a key={url} href={url} target="_blank" rel="noreferrer">{title}</a>)}</p>
  </main>;
}
