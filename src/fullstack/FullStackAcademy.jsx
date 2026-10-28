import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, BookOpen, Check, ChevronDown, ChevronRight, CircleHelp, Clock3, Code2, Download, ExternalLink, File, FilePlus2, Folder, FolderPlus, LayoutDashboard, Minus, Moon, Pencil, Pipette, Play, Plus, RotateCcw, Search, Send, Sparkles, Square, Sun, TerminalSquare, Trash2, Upload, X } from 'lucide-react';
import { fullstackCurriculum, lessons, workshops, exams, sourceFiles, coursePhases } from './curriculum';
import { assertFilePaths, language, loadSaved, projectZip, readProjectZip, renamePath, revision, validPath } from './workspace';
import { ProjectRuntime, shutdownProjectRuntime } from './runtime';
import Terminal from './Terminal';
import useDialogFocus from './useDialogFocus';
import useIdleReady from '../hooks/useIdleReady';
import CssTools from './CssTools';
import SetupGuide, { GuidedPath, GuidedSteps } from './SetupGuide';
import { LessonWalkthrough, ProjectOrientation } from './LearningGuide';
import { learningGuides, apiExamples, hasLessonGuide } from './learningGuides';
import { migrateSlideFiles } from './slideFileMigration';
import RequirementMockupViewer from './RequirementMockupViewer';
import TargetDemoViewer from './TargetDemoViewer';
import './fullstack.css';
const CodeEditor = lazy(() => import('./CodeEditor'));
function DeferredCodeEditor(props) {
  const ready = useIdleReady();
  return ready ? <CodeEditor {...props}/> : <p className="fs-empty" role="status">กำลังเตรียม Editor…</p>;
}
const storageKey = id => 'fullstack-v1:' + id;
const kindName = { lesson: 'บทเรียน', workshop: 'เวิร์กช็อป', exam: 'จำลองสอบ' };
const statusName = { idle: 'พร้อมเริ่ม', booting: 'เปิด Node runtime', installing: 'เตรียมแพ็กเกจ', ready: 'พร้อมตรวจงาน', starting: 'กำลังเปิดเซิร์ฟเวอร์', running: 'กำลังรัน', stopped: 'หยุดแล้ว', error: 'รันไม่สำเร็จ' };
function readProject(item) {
  const saved = loadSaved(storageKey(item.id), null);
  try { if (saved?.files && Object.keys(saved.files).length) { assertFilePaths(saved.files); return saved.attempt && !saved.attempt.submittedAt ? saved : migrateSlideFiles(saved, item.starter); } } catch { /* recover only this project */ }
  return { files: item.starter, attempt: null, check: null, reviewed: [] };
}
function download(files, name) {
  const url = URL.createObjectURL(new Blob([projectZip(files)], { type: 'application/zip' }));
  const a = document.createElement('a'); a.href = url; a.download = name + '.zip'; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function FileTree({ files, active, onSelect }) {
  const [collapsed, setCollapsed] = useState({});
  const tree = {};
  for (const path of Object.keys(files).sort()) {
    let node = tree;
    for (const part of path.split('/')) { node[part] ??= {}; node = node[part]; }
  }
  function render(node, parent = '', depth = 0) {
    return Object.entries(node).sort(([a, av], [b, bv]) => Number(Object.keys(bv).length > 0) - Number(Object.keys(av).length > 0) || a.localeCompare(b)).map(([name, child]) => {
      const path = parent ? parent + '/' + name : name;
      const folder = !Object.hasOwn(files, path);
      return <div key={path}><button className={`fs-tree-row ${active === path ? 'selected' : ''}`} style={{ paddingLeft: 12 + depth * 14 }} onClick={() => folder ? setCollapsed(s => ({ ...s, [path]: !s[path] })) : onSelect(path)} title={path}>
        {folder ? <>{collapsed[path] ? <ChevronRight size={12} /> : <ChevronDown size={12} />}<Folder size={14} /></> : <File size={14} className={'fs-lang-' + language(path)} />}<span>{name}</span>
      </button>{folder && !collapsed[path] && render(child, path, depth + 1)}</div>;
    });
  }
  return <div className="fs-file-tree">{render(tree)}</div>;
}

export default function FullStackAcademy({ onExit }) {
  const [view, setView] = useState(() => loadSaved('fullstack-last-view', 'overview'));
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');
  const [version, setVersion] = useState(0);
  const [theme, setTheme] = useState(() => localStorage.getItem('webdev-theme') || 'dark');
  const [menu, setMenu] = useState(false);
  const noteSaved = useCallback(() => setVersion(v => v + 1), []);
  const current = fullstackCurriculum.find(item => item.id === view);
  const resume = fullstackCurriculum.find(item => item.id === loadSaved('fullstack-recent-project', null));
  const passed = fullstackCurriculum.filter(item => {
    const p = loadSaved(storageKey(item.id), {});
    return p.check?.code === 0 && p.check.revision === revision(p.files || {});
  }).length;
  useEffect(() => { document.documentElement.classList.toggle('dark', theme === 'dark'); localStorage.setItem('webdev-theme', theme); }, [theme]);
  useEffect(() => {
    if (!window.crossOriginIsolated && !document.getElementById('fullstack-isolation')) {
      window.coi = { coepCredentialless: () => true, quiet: true };
      const script = document.createElement('script'); script.id = 'fullstack-isolation';
      script.src = new URL('coi-serviceworker.js', document.baseURI).href; document.head.appendChild(script);
    }
  }, []);
  useEffect(() => { localStorage.setItem('fullstack-last-view', JSON.stringify(view)); setMenu(false); }, [view]);
  useEffect(() => { if (current) localStorage.setItem('fullstack-recent-project', JSON.stringify(current.id)); }, [current]);
  useEffect(() => { const closeRuntime = () => { void shutdownProjectRuntime(); }; window.addEventListener('pagehide', closeRuntime); return () => window.removeEventListener('pagehide', closeRuntime); }, []);
  async function exitCourse(course) { await shutdownProjectRuntime(); onExit(course); }
  const visible = fullstackCurriculum.filter(i => (filter === 'all' || i.kind === filter) && (i.title + i.chapter).toLowerCase().includes(query.toLowerCase()));
  return <div className={`fs-app ${theme}`} data-version={version}>
    <header className="fs-header">
      <button className="fs-brand" onClick={() => setView('overview')}><span className="fs-brand-mark"><Code2 size={23} /></span><span>Full Stack<span className="fs-brand-sub">ACADEMY / PROJECT LAB</span></span></button>
      <div className="fs-course-nav"><button onClick={() => exitCourse('js')}>JavaScript</button><button onClick={() => exitCourse('css')}>HTML & CSS</button><span>Node + React</span></div>
      <div className="fs-header-end"><span className="fs-progress">ตรวจผ่าน {passed}/{fullstackCurriculum.length}</span><button className="fs-icon" aria-label="เปลี่ยนธีม" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button><button className="fs-mobile-menu fs-icon" onClick={() => setMenu(!menu)} aria-label="เปิดรายการบทเรียน"><BookOpen size={18}/></button></div>
    </header>
    <div className="fs-body">
      <aside className={`fs-course-sidebar ${menu ? 'open' : ''}`}>
        <button className={`fs-overview-link ${view === 'overview' ? 'active' : ''}`} onClick={() => setView('overview')}><LayoutDashboard size={17} />เส้นทางการเรียนรู้</button>
        <button className={`fs-overview-link ${view === 'setup' ? 'active' : ''}`} onClick={() => setView('setup')}><TerminalSquare size={17}/>เริ่มติดตั้ง / npm / ไฟล์แรก</button><div className="fs-sidebar-note">โปรเจกต์พร้อมใช้<br/><span>อ่าน → ลงมือทำ → รัน → ตรวจ</span></div>
        {[...new Set(fullstackCurriculum.map(i => i.chapter))].map(chapter => <section className="fs-chapter" key={chapter}><h2>{chapter}</h2>{fullstackCurriculum.filter(i => i.chapter === chapter).map(item => {
          const saved = loadSaved(storageKey(item.id), {});
          const complete = saved.check?.code === 0 && saved.check.revision === revision(saved.files || {});
          return <button key={item.id} className={`fs-lesson-link ${view === item.id ? 'active' : ''}`} onClick={() => setView(item.id)}><span className={complete ? 'fs-done-dot' : 'fs-lesson-dot'}>{complete ? <Check size={11}/> : item.kind === 'exam' ? 'E' : item.guidedLevel ? 'L' + item.guidedLevel : item.id.startsWith('lab-') ? 'ฝึก' : item.id.replace('fs-', '')}</span><span>{item.title}</span></button>;
        })}</section>)}
      </aside>
      {view === 'setup' ? <SetupGuide onOpen={setView} onDownload={download} onLesson={() => setView('fs-00')}/> : current ? <Workspace key={current.id} item={current} theme={theme} onSaved={noteSaved} onNext={() => setView(fullstackCurriculum[fullstackCurriculum.indexOf(current) + 1]?.id || 'overview')} /> :
        <main className="fs-overview">
          <div className="fs-eyebrow">NODE → REACT → FULL STACK</div><nav className="fs-course-phases" aria-label="สามช่วงการเรียน">{coursePhases.map(phase => <button key={phase.id} onClick={() => setView(phase.ids[0])}><strong>{phase.title}</strong><span>{phase.description}</span></button>)}</nav>
          <section className="fs-hero"><div><h1>จากไฟล์แรก<br/>สู่เว็บที่ทำงานทั้งระบบ<span>.</span></h1><p>ฝึก Node, React และ Full Stack จากชีทเรียน<br/>เปิดโปรเจกต์ เขียนหลายไฟล์ และลองทำเหมือนวันสอบ</p><button className="fs-primary" onClick={() => setView(fullstackCurriculum[0].id)}>เริ่มเรียนจากศูนย์ <ArrowRight size={17}/></button><button className="fs-text-btn" onClick={() => setFilter('exam')}>ไปห้องจำลองสอบ <ArrowRight size={15}/></button></div>
            <div className="fs-hero-code" aria-label="ตัวอย่างโครงสร้างโปรเจกต์"><div><span/><span/><span/><small>your-project / พร้อมเริ่ม</small></div><pre><span>▾ frontend</span>{'\n  ▸ components\n  ▸ pages\n  ▸ services\n    App.jsx\n    styles.css\n'}<span>▾ backend</span>{'\n  ▸ routes\n  ▸ controllers\n    app.js\n'}<span>▾ tests</span>{'\n  ✓ เขียน → รัน → ลอง → ตรวจ'}</pre></div>
          </section>
          <section className="fs-start-path"><h2>ครั้งแรก เริ่มตรงนี้</h2><button className="fs-primary" onClick={() => setView('setup')}>ไม่เคยใช้ npm เริ่มตรงนี้ <ArrowRight size={16}/></button><p>1. เปิดบท 00 และดู “โครง / เริ่มรัน” → 2. แก้ตามโจทย์ → 3. รันและทดลอง → 4. ตรวจงานและทบทวนเอง</p><p>เรียนในเว็บได้โดยไม่ติดตั้ง Node ครั้งแรกต้องใช้อินเทอร์เน็ต แนะนำ Chrome/Edge บนคอมพิวเตอร์ งานเก็บในเบราว์เซอร์นี้ ควรส่งออก ZIP ก่อนย้ายเครื่อง</p>{resume && <button className="fs-secondary" onClick={() => setView(resume.id)}>เรียนต่อ: {resume.title} <ArrowRight size={15}/></button>}</section>
          <div className="fs-stats"><div><strong>{lessons.length}</strong><span>บทเรียนตั้งแต่พื้นฐาน</span></div><div><strong>{workshops.length}</strong><span>เวิร์กช็อปต่อยอด</span></div><div><strong>{exams.length}</strong><span>ชุดสอบจากเทมเพลต</span></div><div><strong>พร้อมใช้</strong><span>เตรียมแพ็กเกจอัตโนมัติ</span></div></div>
          <GuidedPath onOpen={setView}/>
          <section className="fs-catalog"><div className="fs-section-heading"><div><h2>เลือกจุดเริ่มต้นของนาย</h2><p>ทุกข้อมีโปรเจกต์แยกกัน และบันทึกงานในเบราว์เซอร์นี้</p></div><label className="fs-search"><Search size={16}/><input aria-label="ค้นหาบทเรียน" placeholder="ค้นหาบทเรียน..." value={query} onChange={e => setQuery(e.target.value)}/></label></div>
            <div className="fs-filters">{[['all','ทั้งหมด'],['lesson','เรียนจากศูนย์'],['workshop','เวิร์กช็อป'],['exam','เตรียมสอบ']].map(([key,label]) => <button className={filter === key ? 'active' : ''} key={key} onClick={() => setFilter(key)}>{label}</button>)}</div>
            <div className="fs-course-grid">{visible.map(item => <button className="fs-course-card" key={item.id} onClick={() => setView(item.id)}><div><span className={`fs-kind ${item.kind}`}>{kindName[item.kind]}</span><small><Clock3 size={12}/>{item.minutes} นาที</small></div><h3>{item.title}</h3><p>{item.paragraphs[0]}</p><footer><span>{item.runtime === 'external' ? 'ชุด XAMPP / Docker' : 'โปรเจกต์พร้อมรัน'}</span><ArrowRight size={16}/></footer></button>)}</div>{!visible.length && <p className="fs-empty">ไม่พบบทเรียน ลองคำค้นอื่น</p>}
          </section>
          <section className="fs-source-section"><h2>เนื้อหาจากชีทเรียนของนาย</h2><div>{sourceFiles.map(source => <article key={source.file}><BookOpen size={18}/><strong>{source.title}</strong><p>{source.coverage}</p></article>)}</div><p>บท SQL ในเว็บใช้ SQLite จริง ส่วน Prisma/MySQL และ Docker มีชุดไฟล์สำหรับรันภายนอก ระบุไว้ในแต่ละบท</p></section>
        </main>}
    </div>
  </div>;
}

function Workspace({ item, theme, onSaved, onNext }) {
  const [saved] = useState(() => readProject(item));
  const [files, setFiles] = useState(saved.files);
  const [active, setActive] = useState(item.entry in saved.files ? item.entry : Object.keys(saved.files)[0]);
  const [tabs, setTabs] = useState([item.entry in saved.files ? item.entry : Object.keys(saved.files)[0]]);
  const [guide, setGuide] = useState('lesson');
  const [hints, setHints] = useState(0);
  const [tool, setTool] = useState('preview');
  const [status, setStatus] = useState('idle');
  const [servers, setServers] = useState({});
  const [port, setPort] = useState(item.previewPort || '5173');
  const [path, setPath] = useState('/');
  const [previewPath, setPreviewPath] = useState('/');
  const [previewVersion, setPreviewVersion] = useState(0);
  const [notice, setNotice] = useState(saved.migrationNotice || '');
  const [saveError, setSaveError] = useState('');
  const [dialog, setDialog] = useState(null);
  const [dialogError, setDialogError] = useState('');
  const closeDialog = useCallback(() => setDialog(null), []);
  useDialogFocus(!!dialog, '.fs-modal', closeDialog);
  const [input, setInput] = useState('');
  const [checking, setChecking] = useState(false);
  const [check, setCheck] = useState(saved.check);
  const [reviewed, setReviewed] = useState(saved.reviewed || []);
  const [attempt, setAttempt] = useState(saved.attempt);
  const [now, setNow] = useState(Date.now());
  const [mobile, setMobile] = useState('guide');
  useEffect(() => { setGuide('lesson'); }, [item.id]);
  const firstRequest = apiExamples[item.id]?.[0];
  const [apiMethod, setApiMethod] = useState(firstRequest?.[1] || 'GET');
  const [apiPath, setApiPath] = useState(firstRequest?.[2] || '/api/health');
  const [apiBody, setApiBody] = useState(firstRequest?.[3] ? JSON.stringify(firstRequest[3], null, 2) : '{\n  "name": "Mali",\n  "email": "m@example.com"\n}');
  const [apiToken, setApiToken] = useState('');
  const [apiResult, setApiResult] = useState('');
  const [readingMode, setReadingMode] = useState(() => { const value = loadSaved('fullstack-reading-mode', 'wide'); return ['normal', 'wide', 'full'].includes(value) ? value : 'wide'; });
  const [split, setSplit] = useState(() => loadSaved('fullstack-workspace-split', { guide:38, preview:22, terminal:170 }));
  const [fontSize, setFontSize] = useState(() => loadSaved('fullstack-editor-font-size',14));
  const [guideFontSize, setGuideFontSize] = useState(() => loadSaved('fullstack-guide-font-size',16));
  const [cssToolsOpen, setCssToolsOpen] = useState(false);
  const editorInsert = useRef(null);
  const editorSuggest = useRef(null);
  const splitDrag = useRef(null);
  const runtime = useRef(null);
  const terminal = useRef(null);
  const importRef = useRef(null);
  const latest = useRef(files); latest.current = files;
  const lastEdit = useRef(0);
  const isExam = item.kind === 'exam';
  const locked = isExam && (!attempt || !!attempt.submittedAt || now >= attempt.deadline);
  const reveal = !isExam || !!attempt?.submittedAt;
  const remaining = attempt ? Math.max(0, Math.ceil((attempt.deadline - now) / 1000)) : item.minutes * 60;
  const digest = revision(files);
  const passed = check?.code === 0 && check.revision === digest;
  const manual = [...item.manual];

  useEffect(() => {
    try { localStorage.setItem(storageKey(item.id), JSON.stringify({ files, attempt, check, reviewed })); setSaveError(''); onSaved(); }
    catch { setSaveError('บันทึกอัตโนมัติไม่สำเร็จ พื้นที่เบราว์เซอร์อาจเต็ม กรุณาส่งออก ZIP เก็บงาน'); }
  }, [files, attempt, check, reviewed, item.id, onSaved]); // Keyed workspace keeps saves scoped to this project.
  useEffect(() => { localStorage.setItem('fullstack-workspace-split', JSON.stringify(split)); }, [split]);
  useEffect(() => { localStorage.setItem('fullstack-editor-font-size', JSON.stringify(fontSize)); }, [fontSize]);
  useEffect(() => { localStorage.setItem('fullstack-guide-font-size', JSON.stringify(guideFontSize)); }, [guideFontSize]);
  useEffect(() => { const timer = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(timer); }, []);
  useEffect(() => {
    if (isExam && attempt && !attempt.submittedAt && now >= attempt.deadline) {
      setAttempt(a => ({ ...a, submittedAt: a.deadline, snapshot: latest.current, timedOut: true }));
      runtime.current?.dispose(); runtime.current = null; setStatus('stopped'); setServers({});
      setNotice('หมดเวลา ระบบเก็บงานและล็อกการแก้ไขแล้ว กดตรวจงานที่ส่งเพื่อดูผล');
    }
  }, [now, isExam, attempt]);
  useEffect(() => {
    if (status !== 'running' || locked) return;
    const timer = setTimeout(() => runtime.current?.sync(files).catch(() => {}), 450);
    return () => clearTimeout(timer);
  }, [files, status, locked]);
  useEffect(() => () => runtime.current?.dispose(), []);
  useEffect(() => {
    if (status !== 'running' || locked || checking) return;
    let capturing = false, cancelled = false;
    const timer = setInterval(async () => {
      if (capturing || Date.now() - lastEdit.current < 900) return;
      const editAt = lastEdit.current; capturing = true;
      try {
        const actual = await runtime.current?.capture();
        if (!cancelled && actual && editAt === lastEdit.current && revision(actual) !== revision(latest.current)) {
          assertFilePaths(actual); setFiles(actual); setReviewed([]);
        }
      } catch { /* explicit capture reports errors in the UI */ }
      finally { capturing = false; }
    }, 2000);
    return () => { cancelled = true; clearInterval(timer); };
  }, [status, locked, checking]);

  function select(file) { setActive(file); setTabs(t => t.includes(file) ? t : [...t, file]); }
  function changeFiles(next) { lastEdit.current = Date.now(); setFiles(next); setReviewed([]); }
  async function start() {
    if (item.runtime === 'external') { setGuide('structure'); setNotice('บทนี้ใช้ MySQL/MariaDB จริง: ส่งออก ZIP แล้วใช้ XAMPP หรือ Docker ตาม README.md'); return false; }
    if (status === 'running') return true;
    setServers({}); setNotice('');
    if (!runtime.current || runtime.current.disposed) runtime.current = new ProjectRuntime({ write: text => terminal.current?.write(text), onServer: (p, url) => setServers(s => ({ ...s, [p]: url })), onStatus: setStatus, onError: setNotice });
    try { await runtime.current.start(latest.current); return true; } catch { return false; }
  }
  async function stop() {
    try { const actual = status === 'running' ? await runtime.current?.capture() : null; if (actual && Object.keys(actual).length) { assertFilePaths(actual); if (!locked) setFiles(actual); } }
    catch (e) { setNotice('อ่านไฟล์จาก Terminal ไม่สำเร็จ: ' + e.message); }
    runtime.current?.dispose(); runtime.current = null; setStatus('stopped'); setServers({});
  }
  async function runCheck() {
    if (checking) return;
    if (item.runtime === 'external') { setNotice('ตรวจงานจริงด้วย npm test ในชุด XAMPP หรือ docker compose exec app npm test ใน Docker — เว็บนี้ยังไม่รับผลฐานข้อมูลภายนอกกลับมาให้คะแนน'); return; }
    setChecking(true); setNotice('');
    try {
      const submitted = isExam && attempt?.snapshot ? attempt.snapshot : latest.current;
      // Restore instructor tests before checking; code stays freely editable.
      const checkedFiles = { ...submitted };
      for (const [p, content] of Object.entries(item.starter)) if (p.startsWith('tests/')) checkedFiles[p] = content;
      if (!runtime.current || runtime.current.disposed) runtime.current = new ProjectRuntime({ write: text => terminal.current?.write(text), onServer: (p, url) => setServers(s => ({ ...s, [p]: url })), onStatus: setStatus, onError: setNotice });
      if (status !== 'running') await runtime.current.prepare(checkedFiles);
      const result = await runtime.current.check(checkedFiles);
      setCheck({ code: result, revision: revision(submitted), checkedAt: Date.now() });
      setNotice(result === 0 ? 'ผ่านชุดตรวจอัตโนมัติแล้ว ยังต้องทดลองรายการตรวจด้วยตนเองด้านล่าง' : 'ยังไม่ผ่าน เปิด Terminal เพื่อดูกรณีที่ผิด แล้วแก้ไขและตรวจใหม่');
    } catch (e) { setNotice(e.message); }
    finally { setChecking(false); }
  }
  async function submit() {
    // Stop terminal input/processes too: exam locking includes every editing surface.
    setAttempt(a => ({ ...a, submittedAt: Date.now(), snapshot: latest.current }));
    runtime.current?.dispose(); runtime.current = null; setStatus('stopped'); setServers({});
    setNotice('ส่งงานและล็อกการแก้ไขแล้ว กด “ตรวจงานที่ส่ง” เพื่อดูผล จากนั้นอ่านเฉลยเปรียบเทียบได้');
  }
  function openDialog(type, initial = '') { setDialogError(''); setInput(initial); setDialog({ type }); }
  function commitDialog(e) {
    e.preventDefault();
    try {
      if (dialog.type === 'new' || dialog.type === 'folder') {
        const p = validPath(input) + (dialog.type === 'folder' ? '/.gitkeep' : '');
        if (Object.hasOwn(files, p)) throw new Error('มีไฟล์นี้แล้ว');
        const next = assertFilePaths({ ...files, [p]: '' }); changeFiles(next); select(p);
      } else if (dialog.type === 'rename') {
        const p = validPath(input); changeFiles(renamePath(files, active, p)); setTabs(t => t.map(x => x === active ? p : x)); setActive(p);
      } else if (dialog.type === 'delete') {
        const next = { ...files }; delete next[active]; changeFiles(next); const nextActive = Object.keys(next)[0] || ''; setTabs(t => [...new Set([...t.filter(x => x !== active), ...(nextActive ? [nextActive] : [])])]); setActive(nextActive);
      } else if (dialog.type === 'reset') {
        runtime.current?.dispose(); runtime.current = null; setStatus('idle'); setServers({});
        changeFiles(item.starter); setCheck(null); setAttempt(null); setHints(0); setActive(item.entry); setTabs([item.entry]);
      } else if (dialog.type === 'import') {
        runtime.current?.dispose(); runtime.current = null; setStatus('idle'); setServers({});
        changeFiles(dialog.files); setCheck(null); setActive(Object.keys(dialog.files)[0]); setTabs([Object.keys(dialog.files)[0]]);
      }
      setDialog(null); setNotice('');
    } catch (err) { setDialogError(err.message); }
  }
  async function importZip(e) {
    try { const file = e.target.files[0]; if (!file) return; const imported = readProjectZip(await file.arrayBuffer()); setDialogError(''); setDialog({ type: 'import', files: imported }); }
    catch (err) { setNotice('นำเข้าไม่ได้: ' + err.message); }
    e.target.value = '';
  }
  async function capture() {
    try {
      if (!runtime.current || status !== 'running') throw new Error('เปิด runtime ก่อนอ่านไฟล์จาก Terminal');
      const captured = await runtime.current.capture(); assertFilePaths(captured); changeFiles(captured);
      setNotice('อ่านไฟล์จาก runtime แล้ว รวมไฟล์ที่สร้างใน Terminal');
    } catch (e) { setNotice(e.message); }
  }
  async function requestApi() {
    if (!servers[3000]) { setApiResult('เปิดโปรเจกต์และรอ API port 3000 ก่อน'); return; }
    try {
      if (!apiPath.startsWith('/') || apiPath.startsWith('//')) throw new Error('ใช้ path ที่ขึ้นต้นด้วย /');
      if (!['GET','HEAD'].includes(apiMethod)) JSON.parse(apiBody);
      const response = await runtime.current.request({ method: apiMethod, path: apiPath, body: apiBody, token: apiToken });
      let result = response.body; try { const data = JSON.parse(result); result = JSON.stringify(data, null, 2); if (apiPath === '/api/auth/login' && response.status === 200 && typeof data.token === 'string') setApiToken(data.token); } catch { /* HTML */ }
      setApiResult(response.status + ' ' + response.statusText + '\n' + result);
    } catch (e) { setApiResult('Request failed: ' + e.message); }
  }
  const previewUrl = servers[port] ? servers[port] + previewPath : '';
  const busy = ['booting','installing','starting'].includes(status);
  const titles = { new: 'เพิ่มไฟล์', folder: 'เพิ่มโฟลเดอร์', rename: 'เปลี่ยนชื่อไฟล์', delete: 'ลบไฟล์นี้?', reset: 'เริ่มโปรเจกต์ใหม่?', import: 'แทนที่งานด้วยไฟล์จาก ZIP?' };
  function resizeSplit(side, event) {
    if (event.type === 'pointerdown') { if (event.button !== 0) return; event.preventDefault(); splitDrag.current = { side, id:event.pointerId }; event.currentTarget.setPointerCapture(event.pointerId); return; }
    if (event.type === 'pointerup' || event.type === 'pointercancel') { splitDrag.current = null; return; }
    if (splitDrag.current?.side !== side || splitDrag.current.id !== event.pointerId) return;
    const rect = event.currentTarget.parentElement.getBoundingClientRect();
    if (side === 'guide') setSplit(value => ({...value,guide:Math.max(18,Math.min(readingMode === 'normal' ? 38 : 70,Math.round((event.clientX-rect.left)*100/rect.width)))}));
    if (side === 'preview') setSplit(value => ({...value,preview:Math.max(17,Math.min(30,Math.round((rect.right-event.clientX)*100/rect.width)))}));
    if (side === 'terminal') setSplit(value => ({...value,terminal:Math.max(80,Math.min(Math.round(rect.height*.55),Math.round(rect.bottom-event.clientY)))}));
  }
  function keyboardResize(side,event) {
    const key=event.key; if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(key)) return; event.preventDefault(); const delta=key==='ArrowLeft'||key==='ArrowUp'?-2:2;
    if(side==='guide') setSplit(value=>({...value,guide:key==='Home'?18:key==='End'?(readingMode === 'normal' ? 38 : 70):Math.max(18,Math.min(readingMode === 'normal' ? 38 : 70,value.guide+delta))}));
    if(side==='preview') setSplit(value=>({...value,preview:key==='Home'?17:key==='End'?30:Math.max(17,Math.min(30,value.preview+delta))}));
    if(side==='terminal') setSplit(value=>({...value,terminal:key==='Home'?80:key==='End'?Math.round(window.innerHeight*.55):Math.max(80,Math.min(Math.round(window.innerHeight*.55),value.terminal+delta*12))}));
  }
  return <main className="fs-workspace">
    <div className="fs-workspace-bar"><div><span className={`fs-kind ${item.kind}`}>{kindName[item.kind]}</span><h1>{item.title}</h1></div><div className="fs-workspace-actions"><span className={`fs-runtime-status ${status}`}><i/>{statusName[status]}</span>{isExam && <span className="fs-timer"><Clock3 size={14}/>{Math.floor(remaining/60).toString().padStart(2,'0')}:{(remaining%60).toString().padStart(2,'0')}</span>}<button className="fs-secondary fs-compact" onClick={() => download(files, item.id)} title="ส่งออกโปรเจกต์ ZIP"><Download size={15}/><span>ZIP</span></button><button className="fs-icon" aria-label="เริ่มใหม่" disabled={checking || busy} onClick={() => openDialog('reset')}><RotateCcw size={16}/></button></div></div>
    {(notice || saveError) && <div className={`fs-notice ${saveError ? 'error' : ''}`} role="status">{saveError || notice}<button className="fs-icon" aria-label="ปิดข้อความ" onClick={() => { setNotice(''); setSaveError(''); }}><X size={14}/></button></div>}
    <div className="fs-mobile-tabs">{[['guide','โจทย์ / บทเรียน'],['editor','ไฟล์ / Editor'],['preview','Preview / API']].map(([id,label]) => <button key={id} className={mobile===id?'active':''} onClick={()=>setMobile(id)}>{label}</button>)}</div>
    <div className={`fs-lab-layout reading-${readingMode} mobile-${mobile}`} style={{'--split-guide':`${split.guide}%`,'--split-preview':`${split.preview}%`,'--split-terminal':`${split.terminal}px`,'--guide-font-size':`${guideFontSize}px`}}>
      <section className="fs-guide"><div className="fs-panel-tabs">{[['lesson','บทเรียนและโจทย์'],['structure','โครง / เริ่มรัน'],['task','โจทย์ย่อ'],...(item.referenceImage?[['reference','เว็บเป้าหมาย']]:[]),['solution','เฉลย']].map(([key,label]) => <button key={key} disabled={key==='solution'&&!reveal} className={guide===key?'active':''} onClick={()=>setGuide(key)}>{label}</button>)}</div><div className="fs-guide-tools"><label>พื้นที่อ่าน<select aria-label="รูปแบบพื้นที่อ่าน" value={readingMode} onChange={event => { setReadingMode(event.target.value); try { localStorage.setItem('fullstack-reading-mode', JSON.stringify(event.target.value)); } catch {} }}><option value="normal">สามแผง</option><option value="wide">อ่านคู่โค้ด</option><option value="full">อ่านเต็มพื้นที่</option></select></label><div className="fs-guide-font"><button aria-label="ลดขนาดตัวอักษรโจทย์" title="ลดขนาดตัวอักษรโจทย์" disabled={guideFontSize<=11} onClick={()=>setGuideFontSize(size=>Math.max(11,size-1))}>A−</button><span>{guideFontSize}px</span><button aria-label="เพิ่มขนาดตัวอักษรโจทย์" title="เพิ่มขนาดตัวอักษรโจทย์" disabled={guideFontSize>=20} onClick={()=>setGuideFontSize(size=>Math.min(20,size+1))}>A+</button></div></div><div className="fs-reading-toolbar"/><div className="fs-guide-content">
        {guide !== 'lesson' && <details className="fs-reading-context"><summary>{item.title}</summary><p className="fs-source-ref">{item.chapter} · อ้างอิง {item.source}</p></details>}
        {isExam && !attempt && <div className="fs-exam-intro"><p>เวลา {item.minutes} นาที กดรันโปรเจกต์เพื่อเตรียมแพ็กเกจก่อนจับเวลาได้ เมื่อเริ่มสอบแล้วเวลาจะเดินต่อแม้เปลี่ยนข้อหรือปิดหน้าเว็บ ระหว่างสอบปิดคำใบ้และเฉลย</p><button className="fs-primary" disabled={['booting','installing','starting'].includes(status)} onClick={() => { const t=Date.now(); setAttempt({ startedAt:t, deadline:t+item.minutes*60000 }); setNow(t); setGuide('lesson'); }}>เริ่มสอบ <Play size={15}/></button></div>}
        {attempt?.submittedAt && <div className="fs-callout">{attempt.timedOut ? 'หมดเวลาและส่งงานแล้ว' : 'ส่งงานแล้ว'} · อ่านเฉลยเปรียบเทียบได้</div>}
        {guide === 'structure' && <ProjectOrientation item={item} files={files} onSelect={file => { if (!Object.hasOwn(files,file)) { setNotice('ไม่พบ ' + file + ' ในงานปัจจุบัน เพิ่มไฟล์หรือคืนค่าเริ่มต้นก่อนเปิด'); return; } select(file); setMobile('editor'); }}/>}
        {guide === 'lesson' && <>{hasLessonGuide(item.id) ? <LessonWalkthrough item={item} onPractice={() => setGuide('task')} onSelect={file => { if (Object.hasOwn(files, file)) { select(file); setMobile('editor'); } else setNotice('สร้างไฟล์ ' + file + ' ด้วยปุ่มเพิ่มไฟล์ก่อนเปิด'); }} hints={hints} setHints={setHints} reviewed={reviewed} setReviewed={setReviewed} passed={passed} onNext={onNext} isExam={isExam} manual={manual}/> : <>{item.paragraphs.map((p,i)=><p key={i}>{p}</p>)}{item.example && <><h3>ตัวอย่างวิธีใช้</h3><pre className="fs-worked-example">{item.example}</pre></>}</>}{!hasLessonGuide(item.id) && <div className="fs-callout"><strong>โปรเจกต์ตั้งต้นพร้อมใช้</strong><button className="fs-text-btn" onClick={() => setGuide('structure')}>ดูโครงไฟล์และวิธีเริ่มบนเครื่อง</button><p>{item.runtime === 'external' ? 'มี Dockerfile, compose.yaml, schema และ seed ให้ ส่งออก ZIP เพื่อรันชุด MySQL จริง หรือใช้ XAMPP ตาม README' : 'กดรันแล้วระบบเตรียมแพ็กเกจให้เอง แก้ไฟล์หรือเพิ่มไฟล์ได้ตามต้องการ'}</p></div>}{!hasLessonGuide(item.id) && <button className="fs-secondary" onClick={() => setGuide('task')}>เริ่มลงมือทำ <ArrowRight size={15}/></button>}</>}
        {guide === 'task' && <><RequirementMockupViewer item={item} />{item.walkthrough ? <GuidedSteps item={item} onSelect={file => { if (!Object.hasOwn(files,file)) { setNotice('ไม่พบ ' + file + ' ในงานปัจจุบัน เพิ่มไฟล์หรือคืนค่าเริ่มต้นก่อนเปิด'); return; } select(file); setMobile('editor'); }}/> : <><h3>สิ่งที่ต้องทำ</h3><ol>{item.steps.map((step,i)=><li key={i}>{step}</li>)}</ol></>}{item.requirements && <><h3>Requirement และคะแนน</h3>{item.requirements.map(([title,points,detail])=><details className="fs-exam-requirement" key={title}><summary><span>{title}</span><strong>{points} คะแนน</strong></summary><p>{detail}</p></details>)}<a className="fs-text-btn" href={`${import.meta.env.BASE_URL}exams/campus-gear-exam.zip`} download><Download size={14}/>ดาวน์โหลดโจทย์เต็ม ภาพ และ starter project</a></>}{!isExam && <div className="fs-hints"><h3>คำใบ้ทีละขั้น</h3>{(learningGuides[item.id]?.hints || item.hints).slice(0,hints).map((hint,i)=><p key={i}>{i+1}. {hint}</p>)}<button className="fs-secondary" disabled={hints >= item.hints.length} onClick={() => setHints(n=>n+1)}>เปิดคำใบ้ {Math.min(hints+1,item.hints.length)}/{item.hints.length}</button></div>}
          <h3>ลองตรวจด้วยตัวเอง</h3><p className="fs-muted">ชุดทดสอบตรวจบางพฤติกรรม รายการนี้เป็นการประเมินตนเอง</p>{manual.map((text,i)=><label className="fs-review" key={text}><input type="checkbox" checked={reviewed.includes(i)} onChange={()=>setReviewed(r=>r.includes(i)?r.filter(n=>n!==i):[...r,i])}/><span>{text}</span></label>)}
          {item.rubric && <><h3>เกณฑ์ฝึกให้คะแนน</h3>{item.rubric.map(r=><p className="fs-rubric" key={r.label}><span>{r.label}</span><strong>{r.points}</strong></p>)}<p className="fs-muted">ไม่ใช่คะแนนสอบจริง ระบบรายงานผลชุดตรวจ ส่วน UI/โครงสร้างให้ทบทวนเอง</p></>}
          {passed && <div className="fs-callout">ผ่านชุดตรวจแล้ว · ทบทวนเอง {reviewed.length}/{manual.length}<button className="fs-text-btn" onClick={onNext}>ไปข้อต่อไป <ArrowRight size={14}/></button></div>}
        </>}
        {guide === 'reference' && item.referenceImage && <><h3>หน้าเป้าหมาย · CAMPUS GEAR</h3><p>ภาพหน้าเว็บสมบูรณ์สำหรับเทียบ layout, สี, การ์ดอุปกรณ์ และข้อมูลตัวอย่าง เปิดภาพเต็มหรือดูไฟล์ HTML ออฟไลน์ในชุด ZIP ได้</p><a className="fs-reference-image" href={`${import.meta.env.BASE_URL}${item.referenceImage}`} target="_blank" rel="noreferrer"><img src={`${import.meta.env.BASE_URL}${item.referenceImage}`} alt="ภาพอ้างอิงหน้าเว็บ CAMPUS GEAR ที่ต้องการ"/></a><div className="fs-reference-actions"><a className="fs-secondary" href={`${import.meta.env.BASE_URL}exams/campus-gear-exam.zip`} download><Download size={15}/>ดาวน์โหลดโจทย์ + starter + ภาพตัวอย่าง</a><a className="fs-text-btn" href={`${import.meta.env.BASE_URL}exams/campus-gear/index.html`} target="_blank" rel="noreferrer">เปิดเว็บตัวอย่าง HTML ออฟไลน์ <ExternalLink size={13}/></a></div></>}
        {guide === 'solution' && reveal && <><p>ตัวอย่างแนวทางหนึ่ง เปิดอ่านแต่ละไฟล์แล้วกลับไปเขียนงานของตัวเอง เฉลยนี้เป็นจุดเริ่มสำหรับงานต่อยอดในเวิร์กช็อป</p>{Object.entries(item.solution).filter(([p]) => !p.startsWith('tests/') && item.solution[p] !== item.starter[p]).map(([p,text])=><details key={p}><summary>{p}</summary><pre>{text}</pre></details>)}<button className="fs-secondary" onClick={()=>download(item.solution,item.id+'-reference')}><Download size={15}/>ส่งออกตัวอย่างเฉลย</button></>}
      </div></section>
      <button type="button" role="separator" className="fs-resize-handle horizontal-resize guide-resize" aria-label="ปรับความกว้างแผงโจทย์" aria-orientation="vertical" aria-valuemin={18} aria-valuemax={readingMode === 'normal' ? 38 : 70} aria-valuenow={split.guide} title="ลากซ้ายหรือขวาเพื่อปรับความกว้างแผงอ่าน" onPointerDown={event=>resizeSplit('guide',event)} onPointerMove={event=>resizeSplit('guide',event)} onPointerUp={event=>resizeSplit('guide',event)} onPointerCancel={event=>resizeSplit('guide',event)} onKeyDown={event=>keyboardResize('guide',event)}/>
      <section className="fs-code-area"><div className="fs-editor-body"><aside className="fs-explorer"><div className="fs-explorer-title"><span>EXPLORER</span><div><button className="fs-icon" disabled={locked} aria-label="เพิ่มไฟล์" onClick={()=>openDialog('new')}><FilePlus2 size={14}/></button><button className="fs-icon" disabled={locked} aria-label="เพิ่มโฟลเดอร์" onClick={()=>openDialog('folder')}><FolderPlus size={14}/></button></div></div><FileTree files={files} active={active} onSelect={select}/><div className="fs-file-actions"><button disabled={locked||!active} onClick={()=>openDialog('rename',active)}><Pencil size={12}/>เปลี่ยนชื่อ</button><button disabled={locked||!active} onClick={()=>openDialog('delete')}><Trash2 size={12}/>ลบ</button><button disabled={locked} onClick={()=>importRef.current.click()}><Upload size={12}/>นำเข้า ZIP</button><input type="file" accept=".zip" hidden ref={importRef} onChange={importZip}/></div></aside>
        <div className="fs-editor"><div className="fs-file-tabs">{tabs.filter(p=>Object.hasOwn(files,p)).map(p=><div className={p===active?'active':''} key={p}><button onClick={()=>setActive(p)} title={p}><File size={13}/>{p.split('/').at(-1)}</button><button aria-label={'ปิดแท็บ '+p} onClick={()=>{const next=tabs.filter(t=>t!==p);setTabs(next);if(active===p)setActive(next.at(-1)||'');}}><X size={12}/></button></div>)}</div><div className="fs-breadcrumb"><span>{active || 'เลือกไฟล์จาก Explorer'}</span><div className="fs-editor-tools"><span>{locked ? 'อ่านอย่างเดียว' : saveError ? 'ยังไม่บันทึก' : 'บันทึกอัตโนมัติ'}</span><div className="fs-font-size"><button aria-label="ลดขนาดตัวอักษร" title="ลดขนาดตัวอักษร" disabled={fontSize<=12} onClick={()=>setFontSize(size=>Math.max(12,size-1))}><Minus size={12}/></button><span>{fontSize}px</span><button aria-label="เพิ่มขนาดตัวอักษร" title="เพิ่มขนาดตัวอักษร" disabled={fontSize>=24} onClick={()=>setFontSize(size=>Math.min(24,size+1))}><Plus size={12}/></button></div><button type="button" className="fs-autocomplete-help" title="พิมพ์ prefix ของ snippet เช่น rfc, card หรือ expressget แล้วกด Tab · หรือกด Ctrl+Space เพื่อดูรายการ" aria-label="เปิดรายการ autocomplete และดูวิธีใช้ snippets" disabled={!active || !Object.hasOwn(files,active)} onClick={()=>editorSuggest.current?.()}><CircleHelp size={14}/><span>Autocomplete</span></button>{/\.(css|scss|sass|less)$/i.test(active)&&<button className="fs-tool-button" disabled={locked} onClick={()=>setCssToolsOpen(true)}><Pipette size={12}/>เครื่องมือ CSS</button>}{Object.hasOwn(item.starter,active)&&files[active]!==item.starter[active]&&<button className="fs-tool-button" disabled={locked} onClick={()=>{if(window.confirm('คืน '+active+' เป็นโค้ดตั้งต้นของบทนี้หรือไม่?'))changeFiles({...files,[active]:item.starter[active]});}} title="คืนเฉพาะไฟล์นี้เป็นโค้ดตั้งต้น"><Sparkles size={12}/>คืนค่าเริ่มต้น</button>}</div></div><div className="fs-monaco"><Suspense fallback={<p className="fs-empty">กำลังเปิด Editor...</p>}>{active && Object.hasOwn(files,active) ? <DeferredCodeEditor projectId={item.id} path={active} value={files[active]} onChange={text=>{if(!locked)changeFiles({...files,[active]:text});}} readOnly={locked} theme={theme} fontSize={fontSize} insertRef={editorInsert} suggestRef={editorSuggest}/> : <p className="fs-empty">เลือกไฟล์เพื่อเริ่มเขียน</p>}</Suspense></div></div>
      </div><button type="button" role="separator" className="fs-resize-handle vertical-resize terminal-resize" aria-label="ปรับความสูง Terminal" aria-orientation="horizontal" aria-valuemin={80} aria-valuenow={split.terminal} title="ลากเพื่อปรับความสูง Terminal" onPointerDown={event=>resizeSplit('terminal',event)} onPointerMove={event=>resizeSplit('terminal',event)} onPointerUp={event=>resizeSplit('terminal',event)} onPointerCancel={event=>resizeSplit('terminal',event)} onKeyDown={event=>keyboardResize('terminal',event)}/><div className="fs-terminal-heading"><span><TerminalSquare size={14}/>TERMINAL</span><button className="fs-text-btn" disabled={locked||status!=='running'} onClick={capture}>อ่านไฟล์จาก Terminal</button></div><Terminal terminalRef={terminal} onInput={data=>{if(!locked)runtime.current?.input(data);}} onResize={(cols,rows)=>runtime.current?.resize(cols,rows)} ready={status==='running'}/></section>
      <button type="button" role="separator" className="fs-resize-handle horizontal-resize preview-resize" aria-label="ปรับความกว้าง Preview" aria-orientation="vertical" aria-valuemin={17} aria-valuemax={30} aria-valuenow={split.preview} title="ลากเพื่อปรับความกว้าง Preview" onPointerDown={event=>resizeSplit('preview',event)} onPointerMove={event=>resizeSplit('preview',event)} onPointerUp={event=>resizeSplit('preview',event)} onPointerCancel={event=>resizeSplit('preview',event)} onKeyDown={event=>keyboardResize('preview',event)}/>
      <section className="fs-output"><div className="fs-panel-tabs"><button className={tool==='preview'?'active':''} onClick={()=>setTool('preview')}>Preview งานของฉัน</button><button className={tool==='target'?'active':''} onClick={()=>setTool('target')}>👁️ ตัวอย่างผลลัพธ์ (Demo)</button><button className={tool==='api'?'active':''} onClick={()=>setTool('api')}>API Client</button></div>
        {tool === 'target' ? <TargetDemoViewer item={item} /> : tool === 'preview' ? <><form className="fs-address" onSubmit={e=>{e.preventDefault();if(path.startsWith('/')&&!path.startsWith('//'))setPreviewPath(path);else setNotice('ใช้เส้นทางที่ขึ้นต้นด้วย /');}}><select aria-label="Preview port" value={port} onChange={e=>setPort(e.target.value)}><option value="5173">React :5173</option><option value="3000">API :3000</option>{Object.keys(servers).filter(p=>!['5173','3000'].includes(p)).map(p=><option key={p} value={p}>:{p}</option>)}</select><input aria-label="Preview path" value={path} onChange={e=>setPath(e.target.value)}/><button className="fs-icon" aria-label="ไปยังเส้นทาง"><ArrowRight size={14}/></button><button type="button" className="fs-icon" aria-label="รีเฟรช Preview" onClick={()=>setPreviewVersion(v=>v+1)}><RotateCcw size={13}/></button>{previewUrl&&<a className="fs-icon" href={previewUrl} target="_blank" rel="noreferrer" aria-label="เปิด Preview แยกหน้าต่าง"><ExternalLink size={13}/></a>}</form>
          {previewUrl ? <iframe key={previewUrl+previewVersion} src={previewUrl} title="Full Stack project preview" allow="cross-origin-isolated" sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups allow-downloads"/> : <div className="fs-preview-empty"><div><Code2 size={32}/></div><h3>พร้อมเห็นเว็บของนายแล้ว</h3><p>{busy?'กำลังเตรียม Node และดาวน์โหลดแพ็กเกจ ครั้งแรกอาจใช้เวลาหลายนาที ดูความคืบหน้าที่ Terminal หรือกดยกเลิกการเตรียมได้':item.runtime==='external'?'บทนี้ใช้ชุด MySQL ภายนอก ส่งออก ZIP แล้วทำตาม README.md':'กดรันโปรเจกต์เพื่อเปิด React และ Node ระบบจะเตรียมแพ็กเกจให้เอง'}</p><small>ผลลัพธ์มาจากโค้ดในโปรเจกต์ที่เขียน</small></div>}</> : <div className="fs-api-client"><p>ส่ง HTTP ไปยัง backend ในโปรเจกต์ เลือกตัวอย่างเพื่อเตรียม request แล้วกดส่งเองหลัง API พร้อม</p>{apiExamples[item.id] && <div className="fs-api-examples">{apiExamples[item.id].map(([label, method, url, body]) => <button className="fs-secondary fs-compact" key={label} onClick={() => { setApiMethod(method); setApiPath(url); if (body !== undefined) setApiBody(JSON.stringify(body, null, 2)); setApiResult('เตรียม ' + method + ' ' + url + ' แล้ว กดส่ง request เพื่อทดลอง'); }}>{label}</button>)}</div>}<div><select aria-label="HTTP method" value={apiMethod} onChange={e=>setApiMethod(e.target.value)}>{['GET','POST','PUT','PATCH','DELETE'].map(m=><option key={m}>{m}</option>)}</select><input aria-label="API path" value={apiPath} onChange={e=>setApiPath(e.target.value)}/></div><label>Bearer token (เติมให้อัตโนมัติเมื่อ login สำเร็จ)<input value={apiToken} onChange={e=>setApiToken(e.target.value)} autoComplete="off"/></label>{apiMethod!=='GET'&&<label>JSON body<textarea value={apiBody} onChange={e=>setApiBody(e.target.value)} spellCheck={false}/></label>}<button className="fs-secondary" disabled={!servers[3000]} onClick={requestApi}><Send size={14}/>ส่ง request</button><pre aria-live="polite">{apiResult||'เปิดโปรเจกต์และรอ API :3000 แล้วส่ง request ผลตอบกลับจะแสดงที่นี่'}</pre></div>}
      </section>
    </div>
    <footer className="fs-workspace-footer"><span className="fs-muted">{Object.keys(files).length} ไฟล์ · {passed ? 'ผ่านชุดตรวจ' : check && check.revision !== digest ? 'แก้ไขแล้ว ต้องตรวจใหม่' : 'ยังไม่ผ่านชุดตรวจ'}{item.runtime==='external'?' · ฐานข้อมูลภายนอก':''}</span><div>{(status==='running'||busy)&&<button className="fs-secondary fs-compact" disabled={checking} onClick={stop}><Square size={13}/>{busy?'ยกเลิกการเตรียม':'หยุด'}</button>}<button className="fs-secondary fs-compact" disabled={busy||checking||(isExam&&!!attempt?.submittedAt)} onClick={start}><Play size={14}/>{busy?'กำลังเตรียม...':item.runtime==='external'?'วิธีรันฐานข้อมูล':'รันโปรเจกต์'}</button>{isExam && attempt && !attempt.submittedAt ? <button className="fs-primary fs-compact" onClick={()=>{setDialogError('');setDialog({type:'submit'});}}><Send size={14}/>ส่งข้อสอบ</button> : <button className="fs-primary fs-compact" disabled={checking||busy||(isExam&&!attempt?.submittedAt)} onClick={runCheck}><Check size={15}/>{checking?'กำลังตรวจ...':isExam?'ตรวจงานที่ส่ง':'ตรวจงาน'}</button>}</div></footer>
    {cssToolsOpen&&<CssTools onClose={()=>setCssToolsOpen(false)} onInsert={code=>{if(editorInsert.current)editorInsert.current(code);else if(active)changeFiles({...files,[active]:(files[active]||'')+code});}}/>}

    {dialog && <div className="fs-modal-backdrop" onClick={()=>setDialog(null)}><form className="fs-modal" onSubmit={dialog.type==='submit'?e=>{e.preventDefault();setDialog(null);submit();}:commitDialog} onClick={e=>e.stopPropagation()} role="dialog" aria-modal="true" aria-label={dialog.type==='submit'?'ส่งข้อสอบ':titles[dialog.type]}><h2>{dialog.type==='submit'?'ส่งข้อสอบ?':titles[dialog.type]}</h2>{['new','folder','rename'].includes(dialog.type) ? <label>เส้นทางภายในโปรเจกต์<input value={input} onChange={e=>setInput(e.target.value)} placeholder="frontend/pages/About.jsx" required/></label> : <p>{dialog.type==='delete'?active:dialog.type==='reset'?'โค้ดและผลตรวจของข้อนี้จะกลับเป็นค่าเริ่มต้น รวมถึงเวลาสอบ แนะนำส่งออก ZIP ก่อน':dialog.type==='submit'?'ระบบจะเก็บโค้ดที่ส่งและล็อกการแก้ไข จากนั้นเปิดเฉลยให้เทียบได้':'งานปัจจุบันของข้อนี้จะถูกแทนที่ แนะนำส่งออก ZIP เก็บไว้ก่อน'}</p>}{dialogError && <p role="alert">{dialogError}</p>}<div><button type="button" className="fs-secondary" onClick={()=>setDialog(null)}>ยกเลิก</button><button className="fs-primary">ยืนยัน</button></div></form></div>}
  </main>;
}
