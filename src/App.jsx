import React, { lazy, Suspense, useState, useEffect } from 'react';
import { curriculum } from './data/curriculum';
import { jsCurriculum } from './data/jsCurriculum';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';
import InstructionPanel from './components/InstructionPanel';
import useIdleReady from './hooks/useIdleReady';
import PreviewContainer from './components/PreviewContainer';
import QuizArena from './components/QuizArena';
import CheatSheet from './components/CheatSheet';
import JSCheatSheetModal from './components/JSCheatSheetModal';
import confetti from 'canvas-confetti';
import {
  RotateCcw,
  Sparkles,
  BookOpen,
  Menu,
  Trash2,
  Download,
  HelpCircle,
  Code2,
  Layers,
  Code,
  Eye,
  Play
} from 'lucide-react';

const FullStackAcademy = lazy(() => import('./fullstack/FullStackAcademy'));
const EditorContainer = lazy(() => import('./components/EditorContainer'));
function readLocalRecord(key) {
  try {
    const value = JSON.parse(window.localStorage.getItem(key) || '{}');
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  } catch {
    return {};
  }
}

export default function App() {
  const [area, setArea] = useState(() => new URLSearchParams(window.location.search).get('course') === 'fullstack' ? 'fullstack' : localStorage.getItem('webdev-area') || 'legacy');
  function openFullstack() { localStorage.setItem('webdev-area', 'fullstack'); setArea('fullstack'); }
  function exitFullstack(course) {
    localStorage.setItem('webdev-course', course); localStorage.setItem('webdev-area', 'legacy');
    const url = new URL(window.location.href); url.searchParams.delete('course');
    window.history.replaceState({}, '', url.pathname + url.search + url.hash);
    setArea('legacy');
  }
  if (area === 'fullstack') return <Suspense fallback={<div className="editor-loading">กำลังเปิด Full Stack Academy...</div>}><FullStackAcademy onExit={exitFullstack}/></Suspense>;
  return <LegacyApp onOpenFullstack={openFullstack}/>;
}

function LegacyApp({ onOpenFullstack }) {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('webdev-theme') || 'dark';
  });

  // Course selector: 'js' (Default JavaScript Academy) or 'css' (HTML & CSS Academy)
  const [course, setCourse] = useState(() => {
    return localStorage.getItem('webdev-course') || 'js';
  });

  // Mode state for JS: 'learn' (Lessons & Labs) or 'quiz' (Quiz Arena)
  const [activeMode, setActiveMode] = useState('learn');

  // Active curriculum item
  const [activeId, setActiveId] = useState(() => {
    return course === 'js' ? 'js-intro-display' : 'html-structure';
  });

  // Tabs states
  const [activeEditorTab, setActiveEditorTab] = useState(() => {
    return course === 'js' ? 'js' : 'html';
  });

  // Active Preview Tab: 'live', 'console', 'target', 'compare'
  const [activePreviewTab, setActivePreviewTab] = useState('live');

  // Sandbox code cache: { [itemId]: { html, css, js } }
  const [codeCache, setCodeCache] = useState(() => {
    const key = course === 'js' ? 'webdev-code-cache-js' : 'webdev-code-cache';
    return readLocalRecord(key);
  });

  // Current HTML, CSS, and JS code
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  // Validation States
  const [validationError, setValidationError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // User Progress: { [itemId]: true }
  const [progress, setProgress] = useState(() => {
    const key = course === 'js' ? 'webdev-progress-js' : 'webdev-progress';
    return readLocalRecord(key);
  });

  // Layout states
  const [sidebarOpen, setSidebarOpen] = useState(() => typeof window !== 'undefined' ? window.innerWidth >= 1024 : true);
  const [mobileTab, setMobileTab] = useState('instruction'); // 'instruction' | 'editor' | 'preview'
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 1024 : false);
  const editorReady = useIdleReady(!isMobile || mobileTab === 'editor');

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [leftWidth, setLeftWidth] = useState(50); // percentage
  const [topHeight, setTopHeight] = useState(40); // percentage
  const [isDraggingH, setIsDraggingH] = useState(false);
  const [isDraggingV, setIsDraggingV] = useState(false);
  const [editorFontSize, setEditorFontSize] = useState(14);
  const [showCheatSheet, setShowCheatSheet] = useState(false);

  // Active Course Curriculum
  const currentCurriculum = course === 'js' ? {
    lessons: jsCurriculum.lessons,
    challenges: jsCurriculum.projects,
    appliedExams: jsCurriculum.appliedExams || []
  } : {
    ...curriculum,
    appliedExams: []
  };

  // Active Item
  const activeItem =
    currentCurriculum.lessons.find((l) => l.id === activeId) ||
    currentCurriculum.challenges.find((c) => c.id === activeId) ||
    (currentCurriculum.appliedExams && currentCurriculum.appliedExams.find((e) => e.id === activeId)) ||
    currentCurriculum.lessons[0];

  const isChallenge = currentCurriculum.challenges.some((c) => c.id === activeId);
  const isAppliedExam = currentCurriculum.appliedExams?.some((e) => e.id === activeId);

  // Switch Course Handler
  const handleSwitchCourse = (newCourse) => {
    if (newCourse === course) return;
    setCourse(newCourse);
    localStorage.setItem('webdev-course', newCourse);

    const newKey = newCourse === 'js' ? 'webdev-code-cache-js' : 'webdev-code-cache';
    setCodeCache(readLocalRecord(newKey));

    const progKey = newCourse === 'js' ? 'webdev-progress-js' : 'webdev-progress';
    setProgress(readLocalRecord(progKey));

    const newId = newCourse === 'js' ? 'js-intro-display' : 'html-structure';
    setActiveId(newId);
    setActiveEditorTab(newCourse === 'js' ? 'js' : 'html');
    setActiveMode('learn');
  };

  // Sync theme class on body
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('webdev-theme', theme);
  }, [theme]);

  // Load code when activeItem changes
  useEffect(() => {
    if (codeCache[activeId]) {
      setHtml(codeCache[activeId].html || '');
      setCss(codeCache[activeId].css || '');
      setJs(codeCache[activeId].js || '');
    } else {
      setHtml(activeItem.starterHtml || '');
      setCss(activeItem.starterCss || '');
      setJs(activeItem.starterJs || '');
    }
    // Reset validations & preview tab
    setValidationError(null);
    setIsSuccess(false);
    setShowSuccessModal(false);
    setActivePreviewTab('live');

    // Set editor tab
    if (activeItem && activeItem.id && activeItem.id.startsWith('exam-')) {
      setActiveEditorTab('html');
    } else if (course === 'js') {
      setActiveEditorTab('js');
    } else if (activeItem && activeItem.category && activeItem.category.includes('HTML')) {
      setActiveEditorTab('html');
    } else {
      setActiveEditorTab('css');
    }
  }, [activeId, course]);

  // Auto-save code changes
  useEffect(() => {
    if (!html && !css && !js) return;
    const updated = {
      ...codeCache,
      [activeId]: { html, css, js },
    };
    setCodeCache(updated);
    const key = course === 'js' ? 'webdev-code-cache-js' : 'webdev-code-cache';
    localStorage.setItem(key, JSON.stringify(updated));
  }, [html, css, js]);

  // Handle Dragging
  const startHorizontalDrag = (e) => {
    setIsDraggingH(true);
    e.preventDefault();
  };

  const startVerticalDrag = (e) => {
    setIsDraggingV(true);
    e.preventDefault();
  };

  useEffect(() => {
    if (!isDraggingH) return;
    const handleMouseMove = (e) => {
      const workspace = document.querySelector('.app-workspace');
      if (!workspace) return;
      const rect = workspace.getBoundingClientRect();
      const newWidth = ((e.clientX - rect.left) / rect.width) * 100;
      setLeftWidth(Math.max(20, Math.min(80, newWidth)));
    };
    const handleMouseUp = () => setIsDraggingH(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingH]);

  useEffect(() => {
    if (!isDraggingV) return;
    const handleMouseMove = (e) => {
      const panel = document.querySelector('.left-work-panel');
      if (!panel) return;
      const rect = panel.getBoundingClientRect();
      const newHeight = ((e.clientY - rect.top) / rect.height) * 100;
      setTopHeight(Math.max(15, Math.min(85, newHeight)));
    };
    const handleMouseUp = () => setIsDraggingV(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingV]);

  // Handle Theme Toggle
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Reset all workspace codes and progress
  const handleResetAll = () => {
    if (window.confirm(`คุณต้องการล้างความคืบหน้าการเรียนและรีเซ็ตโค้ดของคอร์ส ${course === 'js' ? 'JavaScript' : 'HTML/CSS'} ทั้งหมดใช่หรือไม่?`)) {
      const cacheKey = course === 'js' ? 'webdev-code-cache-js' : 'webdev-code-cache';
      const progKey = course === 'js' ? 'webdev-progress-js' : 'webdev-progress';
      localStorage.removeItem(cacheKey);
      localStorage.removeItem(progKey);
      setCodeCache({});
      setProgress({});
      
      const defaultItem = currentCurriculum.lessons.find((l) => l.id === activeId) 
        || currentCurriculum.challenges.find((c) => c.id === activeId)
        || (currentCurriculum.appliedExams && currentCurriculum.appliedExams.find((e) => e.id === activeId));
      if (defaultItem) {
        setHtml(defaultItem.starterHtml || '');
        setCss(defaultItem.starterCss || '');
        setJs(defaultItem.starterJs || '');
      }
      setValidationError(null);
      setIsSuccess(false);
      alert('รีเซ็ตข้อมูลคอร์สเรียบร้อยแล้ว!');
    }
  };

  // Reset current code to starter code
  const handleResetCode = () => {
    if (window.confirm('คุณต้องการรีเซ็ตโค้ดของบทเรียนนี้กลับไปเป็นค่าเริ่มต้นใช่หรือไม่?')) {
      setHtml(activeItem.starterHtml || '');
      setCss(activeItem.starterCss || '');
      setJs(activeItem.starterJs || '');
      setValidationError(null);
      setIsSuccess(false);
      
      const updatedCache = { ...codeCache };
      delete updatedCache[activeId];
      setCodeCache(updatedCache);
      const cacheKey = course === 'js' ? 'webdev-code-cache-js' : 'webdev-code-cache';
      localStorage.setItem(cacheKey, JSON.stringify(updatedCache));
    }
  };

  // Download project files
  const handleDownloadProject = () => {
    // 1. Download index.html
    const htmlBlob = new Blob([html], { type: 'text/html;charset=utf-8;' });
    const htmlUrl = URL.createObjectURL(htmlBlob);
    const htmlLink = document.createElement('a');
    htmlLink.href = htmlUrl;
    htmlLink.download = 'index.html';
    document.body.appendChild(htmlLink);
    htmlLink.click();
    document.body.removeChild(htmlLink);

    // 2. Download style.css
    const cssBlob = new Blob([css], { type: 'text/css;charset=utf-8;' });
    const cssUrl = URL.createObjectURL(cssBlob);
    const cssLink = document.createElement('a');
    cssLink.href = cssUrl;
    cssLink.download = 'style.css';
    document.body.appendChild(cssLink);
    cssLink.click();
    document.body.removeChild(cssLink);

    // 3. Download script.js if JavaScript course
    if (js) {
      const jsBlob = new Blob([js], { type: 'text/javascript;charset=utf-8;' });
      const jsUrl = URL.createObjectURL(jsBlob);
      const jsLink = document.createElement('a');
      jsLink.href = jsUrl;
      jsLink.download = 'script.js';
      document.body.appendChild(jsLink);
      jsLink.click();
      document.body.removeChild(jsLink);
    }
  };

  // Run Code Verification
  const handleVerify = async () => {
    if (!activeItem || typeof activeItem.validation !== 'function') return;

    let iframe =
      document.querySelector('iframe[title="Live Preview"]') ||
      document.querySelector('iframe[title="Live Preview Overlap"]');

    let doc = null;
    let tempIframe = null;

    if (iframe) {
      try {
        doc = iframe.contentDocument || iframe.contentWindow?.document;
      } catch (e) {
        doc = null;
      }
    }

    // Ultra-reliable fallback: if live preview iframe is not found or inaccessible,
    // dynamically spin up a headless sandbox frame to evaluate the code
    if (!doc || !doc.body) {
      try {
        tempIframe = document.createElement('iframe');
        tempIframe.style.cssText = 'position:absolute;width:0;height:0;border:0;visibility:hidden;pointer-events:none;';
        tempIframe.sandbox = 'allow-scripts allow-same-origin';
        document.body.appendChild(tempIframe);

        const tDoc = tempIframe.contentDocument || tempIframe.contentWindow.document;
        tDoc.open();
        tDoc.write(`<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`);
        tDoc.close();
        doc = tDoc;
      } catch (err) {
        console.warn('Fallback iframe error, attempting DOMParser:', err);
        try {
          const parser = new DOMParser();
          doc = parser.parseFromString(`<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}</body></html>`, 'text/html');
        } catch (e2) {}
      }
    }

    if (!doc) {
      if (tempIframe) {
        try { document.body.removeChild(tempIframe); } catch (e) {}
      }
      setValidationError('เกิดข้อผิดพลาดในการโหลดระบบแสดงผล กรุณาลองใหม่อีกครั้ง');
      return;
    }

    try {
      // Run validation function with doc, css, js
      const result = await activeItem.validation(doc, css, js);

      if (result === true) {
        setValidationError(null);
        setIsSuccess(true);
        
        // Save progress
        const newProgress = { ...progress, [activeId]: true };
        setProgress(newProgress);
        const progKey = course === 'js' ? 'webdev-progress-js' : 'webdev-progress';
        localStorage.setItem(progKey, JSON.stringify(newProgress));

        // Fire Confetti!
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#eab308', '#3b82f6', '#10b981', '#f43f5e']
        });

        setTimeout(() => {
          setShowSuccessModal(true);
        }, 600);
      } else {
        setValidationError(result);
        setIsSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setValidationError('ตรวจพบข้อผิดพลาดในโค้ดของคุณ: ' + err.message);
      setIsSuccess(false);
    } finally {
      if (tempIframe) {
        try {
          document.body.removeChild(tempIframe);
        } catch (e) {}
      }
    }
  };

  // Find next item
  const handleNextItem = () => {
    const allItems = [
      ...currentCurriculum.lessons,
      ...currentCurriculum.challenges,
      ...(currentCurriculum.appliedExams || [])
    ];
    const currentIndex = allItems.findIndex((item) => item.id === activeId);
    
    if (currentIndex !== -1 && currentIndex < allItems.length - 1) {
      const nextItem = allItems[currentIndex + 1];
      setActiveId(nextItem.id);
    }
    setShowSuccessModal(false);
  };

  // View interactive working demo in preview without injecting solution code to editor
  const handleViewDemo = () => {
    setActivePreviewTab('target');
    if (isMobile) {
      setMobileTab('preview');
    }
  };

  // Calculate Progress Stats
  const totalItems =
    currentCurriculum.lessons.length +
    currentCurriculum.challenges.length +
    (currentCurriculum.appliedExams ? currentCurriculum.appliedExams.length : 0);
  const completedCount = Object.keys(progress).length;
  const percentCompleted = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

  return (
    <div className={`app-container ${isDraggingH ? 'is-dragging-h' : ''} ${isDraggingV ? 'is-dragging-v' : ''}`}>
      {/* App Header */}
      <header className="app-header">
        <div className="logo-container">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="icon-btn"
            style={{ marginRight: '6px' }}
            title={sidebarOpen ? "ซ่อนเมนูข้าง" : "แสดงเมนูข้าง"}
            aria-label="Toggle Sidebar"
          >
            <Menu size={18} />
          </button>
          
          <div className="logo-badge-icon" style={{ background: course === 'js' ? '#fef08a' : '#dbeafe', color: course === 'js' ? '#ca8a04' : '#2563eb' }}>
            {course === 'js' ? <Code2 size={20} /> : <BookOpen size={20} />}
          </div>
          
          <div className="logo-text-group">
            <h1 className="logo-text">
              {course === 'js' ? 'JavaScript Academy' : 'WebDev Academy'}
            </h1>
            <span className="logo-subtitle">
              {course === 'js' ? 'เรียนรู้ & ฝึกควิซ JS Interactive' : 'HTML & CSS Interactive Learning'}
            </span>
          </div>
        </div>

        {/* Course Switcher & Mode Switcher in Center */}
        <div className="header-center">
          <div className="course-switcher-pill">
            <button onClick={onOpenFullstack} className="course-btn" title="ฝึก Node + React แบบโปรเจกต์หลายไฟล์">
              <span>Node + React</span>
              <span className="course-badge">ใหม่</span>
            </button>
            <button
              onClick={() => handleSwitchCourse('js')}
              className={`course-btn ${course === 'js' ? 'active js' : ''}`}
            >
              <span>🚀 JavaScript</span>
              <span className="course-badge">ใหม่</span>
            </button>
            <button
              onClick={() => handleSwitchCourse('css')}
              className={`course-btn ${course === 'css' ? 'active css' : ''}`}
            >
              <span>🎨 HTML & CSS</span>
            </button>
          </div>

          {course === 'js' && (
            <div className="mode-switcher-pill">
              <button
                onClick={() => setActiveMode('learn')}
                className={`mode-tab-btn ${activeMode === 'learn' ? 'active' : ''}`}
              >
                <Layers size={14} />
                <span>บทเรียน & แล็บ</span>
              </button>
              <button
                onClick={() => setActiveMode('quiz')}
                className={`mode-tab-btn ${activeMode === 'quiz' ? 'active' : ''}`}
              >
                <HelpCircle size={14} />
                <span>ห้องฝึกควิซ</span>
                <span className="quiz-badge-pill">{jsCurriculum.quizBank.length}</span>
              </button>
            </div>
          )}
        </div>

        {/* Header Right Actions */}
        <div className="header-right">
          {activeMode === 'learn' && (
            <>
              {/* Sleek Compact Progress Indicator */}
              <div
                className="header-progress-compact"
                title={`ผ่านแล้ว ${completedCount} จาก ${totalItems} (${percentCompleted}%)`}
              >
                <span className="progress-compact-text">
                  {completedCount}/{totalItems}
                </span>
                <div className="progress-compact-track">
                  <div
                    className="progress-compact-fill"
                    style={{ width: `${percentCompleted}%` }}
                  />
                </div>
                <span className="progress-compact-percent">
                  {percentCompleted}%
                </span>
              </div>

              <button
                onClick={handleResetAll}
                className="icon-btn btn-header-trash"
                style={{ borderColor: 'var(--danger-color)', color: 'var(--danger-color)' }}
                title="ล้างประวัติการเรียนและโค้ดของคอร์สนี้ทั้งหมด"
              >
                <Trash2 size={16} />
              </button>

              <button
                onClick={handleResetCode}
                className="icon-btn btn-header-reset"
                title="รีเซ็ตโค้ดของบทเรียนปัจจุบัน"
              >
                <RotateCcw size={16} />
              </button>

              <button
                onClick={handleDownloadProject}
                className="icon-btn btn-header-download"
                style={{ borderColor: 'var(--accent-color)', color: 'var(--accent-color)' }}
                title="ดาวน์โหลดไฟล์งาน (HTML, CSS, JS)"
              >
                <Download size={16} />
              </button>
            </>
          )}

          <button
            onClick={() => setShowCheatSheet(true)}
            className="icon-btn"
            style={{ borderColor: '#eab308', color: '#ca8a04' }}
            title={course === 'js' ? "เปิดคู่มือสรุปไวยากรณ์ JavaScript (Cheat Sheet)" : "เปิดคู่มือสรุป HTML & CSS"}
          >
            <BookOpen size={16} />
          </button>
          
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </header>

      {/* Main workspace area */}
      <div className="app-body">
        {/* Navigation Sidebar */}
        <Sidebar
          lessons={currentCurriculum.lessons}
          challenges={currentCurriculum.challenges}
          appliedExams={currentCurriculum.appliedExams}
          activeId={activeId}
          setActiveId={(id) => {
            setActiveId(id);
            if (isMobile) setSidebarOpen(false);
          }}
          progress={progress}
          isOpen={sidebarOpen}
          course={course}
          activeMode={activeMode}
          setActiveMode={setActiveMode}
          onOpenCheatSheet={() => setShowCheatSheet(true)}
        />

        {/* Mobile Backdrop when Sidebar is Open */}
        {isMobile && sidebarOpen && (
          <div
            className="sidebar-backdrop"
            onClick={() => setSidebarOpen(false)}
            aria-label="ปิดเมนูข้าง"
          />
        )}

        {/* Workspace Content: Quiz Arena or Interactive Code Splitter */}
        {activeMode === 'quiz' && course === 'js' ? (
          <main className="quiz-main-full">
            <QuizArena
              quizBank={jsCurriculum.quizBank}
              onBackToLessons={() => setActiveMode('learn')}
            />
          </main>
        ) : isMobile ? (
          /* Mobile Workspace with Segmented Tabs */
          <main className="app-workspace mobile-workspace">
            <div className="mobile-view-tabs">
              <button
                className={`mobile-view-tab ${mobileTab === 'instruction' ? 'active' : ''}`}
                onClick={() => setMobileTab('instruction')}
              >
                <BookOpen size={15} />
                <span>คำอธิบาย</span>
                {validationError && <span className="mobile-tab-dot error" />}
                {isSuccess && <span className="mobile-tab-dot success" />}
              </button>

              <button
                className={`mobile-view-tab ${mobileTab === 'editor' ? 'active' : ''}`}
                onClick={() => setMobileTab('editor')}
              >
                <Code size={15} />
                <span>โค้ด ({activeEditorTab})</span>
              </button>

              <button
                className={`mobile-view-tab ${mobileTab === 'preview' ? 'active' : ''}`}
                onClick={() => setMobileTab('preview')}
              >
                <Eye size={15} />
                <span>ผลลัพธ์</span>
                {activePreviewTab === 'target' && <span className="mobile-demo-pill">Demo</span>}
              </button>
            </div>

            <div className="mobile-content-container">
              <div
                className="mobile-pane-full"
                style={{ display: mobileTab === 'instruction' ? 'flex' : 'none' }}
              >
                <InstructionPanel
                  activeItem={activeItem}
                  onVerify={handleVerify}
                  validationError={validationError}
                  isSuccess={isSuccess}
                  isChallenge={isChallenge || isAppliedExam}
                  onViewDemo={handleViewDemo}
                />
              </div>

              <div
                className="mobile-pane-full mobile-editor-wrapper"
                style={{ display: mobileTab === 'editor' ? 'flex' : 'none' }}
              >
                {editorReady ? <Suspense fallback={<div className="editor-panel editor-deferred" role="status">กำลังเปิดตัวแก้ไขโค้ด…</div>}><EditorContainer
                  html={html}
                  setHtml={setHtml}
                  css={css}
                  setCss={setCss}
                  js={js}
                  setJs={setJs}
                  activeTab={activeEditorTab}
                  setActiveTab={setActiveEditorTab}
                  theme={theme}
                  activeItem={activeItem}
                  fontSize={editorFontSize}
                  setFontSize={setEditorFontSize}
                /></Suspense> : <div className="editor-panel editor-deferred" role="status">แตะแท็บโค้ดเพื่อเปิดตัวแก้ไข</div>}
                <div className="mobile-editor-actions-bar">
                  <button onClick={handleVerify} className="mobile-action-btn primary">
                    <Play size={14} fill="white" />
                    <span>ตรวจคำตอบ</span>
                  </button>
                  <button onClick={() => setMobileTab('preview')} className="mobile-action-btn secondary">
                    <Eye size={14} />
                    <span>ดูผลลัพธ์</span>
                  </button>
                </div>
              </div>

              <div
                className="mobile-pane-full"
                style={{ display: mobileTab === 'preview' ? 'flex' : 'none' }}
              >
                <PreviewContainer
                  html={html}
                  css={css}
                  js={js}
                  targetHtml={activeItem.targetHtml}
                  targetCss={activeItem.targetCss}
                  targetJs={activeItem.targetJs}
                  showCompare={!!activeItem.targetHtml}
                  activePreviewTab={activePreviewTab}
                  setActivePreviewTab={setActivePreviewTab}
                />
              </div>
            </div>
          </main>
        ) : (
          /* Desktop Workspace with Draggable Splitters */
          <main
            className="app-workspace desktop-workspace"
            style={{ gridTemplateColumns: `${leftWidth}% 6px 1fr` }}
          >
            {/* Left Area (Instruction + Monaco Editor) */}
            <div
              className="left-work-panel"
              style={{ gridTemplateRows: `${topHeight}% 6px 1fr` }}
            >
              <InstructionPanel
                activeItem={activeItem}
                onVerify={handleVerify}
                validationError={validationError}
                isSuccess={isSuccess}
                isChallenge={isChallenge || isAppliedExam}
                onViewDemo={handleViewDemo}
              />

              {/* Vertical Split Drag Bar */}
              <div
                className={`resizer-vertical ${isDraggingV ? 'active' : ''}`}
                onMouseDown={startVerticalDrag}
              />

              {editorReady ? <Suspense fallback={<div className="editor-panel editor-deferred" role="status">กำลังเปิดตัวแก้ไขโค้ด…</div>}><EditorContainer
                html={html}
                setHtml={setHtml}
                css={css}
                setCss={setCss}
                js={js}
                setJs={setJs}
                activeTab={activeEditorTab}
                setActiveTab={setActiveEditorTab}
                theme={theme}
                activeItem={activeItem}
                fontSize={editorFontSize}
                setFontSize={setEditorFontSize}
              /></Suspense> : <div className="editor-panel editor-deferred" role="status">กำลังเตรียมตัวแก้ไขโค้ด…</div>}
            </div>

            {/* Horizontal Split Drag Bar */}
            <div
              className={`resizer-horizontal ${isDraggingH ? 'active' : ''}`}
              onMouseDown={startHorizontalDrag}
            />

            {/* Right Area (Live preview, console log, target preview) */}
            <PreviewContainer
              html={html}
              css={css}
              js={js}
              targetHtml={activeItem.targetHtml}
              targetCss={activeItem.targetCss}
              targetJs={activeItem.targetJs}
              showCompare={!!activeItem.targetHtml}
              activePreviewTab={activePreviewTab}
              setActivePreviewTab={setActivePreviewTab}
            />
          </main>
        )}
      </div>

      {/* Success Victory Modal overlay */}
      {showSuccessModal && (
        <div className="success-overlay">
          <div className="success-card">
            <div className="success-icon-wrapper">
              <Sparkles size={36} />
            </div>
            <h3>
              {isChallenge ? 'ผ่านภารกิจสำเร็จ!' : 'เรียนรู้สำเร็จ!'}
            </h3>
            <p>
              {isChallenge
                ? `ยอดเยี่ยมมาก! คุณสามารถสร้างโปรเจกต์ ${activeItem.title} ได้อย่างสมบูรณ์แบบ ได้รับการสะสมแต้มเรียบร้อย!`
                : `คุณผ่านแบบฝึกหัดในหัวข้อนี้แล้ว พร้อมที่จะเรียนรู้เนื้อหาขั้นต่อไปหรือยัง?`}
            </p>
            {isChallenge && activeItem.points && (
              <div className="victory-scorecard">
                <div className="scorecard-stat">
                  <span className="stat-lbl">ความยาก</span>
                  <span className={`difficulty-badge ${activeItem.difficulty.toLowerCase()}`}>
                    {activeItem.difficulty}
                  </span>
                </div>
                <div className="scorecard-stat">
                  <span className="stat-lbl">คะแนนภารกิจ</span>
                  <span className="stat-val font-bold" style={{ color: 'var(--warning-color)' }}>
                    +{activeItem.points} XP
                  </span>
                </div>
              </div>
            )}
            <div className="success-actions">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="success-btn secondary"
              >
                ทบทวนโค้ด
              </button>
              
              {completedCount < totalItems && (
                <button
                  onClick={handleNextItem}
                  className="success-btn primary"
                >
                  ทำหัวข้อถัดไป
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Cheat Sheet Modals */}
      {course === 'js' ? (
        <JSCheatSheetModal
          isOpen={showCheatSheet}
          onClose={() => setShowCheatSheet(false)}
        />
      ) : (
        <CheatSheet
          isOpen={showCheatSheet}
          onClose={() => setShowCheatSheet(false)}
        />
      )}
    </div>
  );
}
