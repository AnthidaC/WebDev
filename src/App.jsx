import React, { useState, useEffect } from 'react';
import { curriculum } from './data/curriculum';
import { jsCurriculum } from './data/jsCurriculum';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';
import InstructionPanel from './components/InstructionPanel';
import EditorContainer from './components/EditorContainer';
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
  Layers
} from 'lucide-react';

export default function App() {
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

  // Sandbox code cache: { [itemId]: { html, css, js } }
  const [codeCache, setCodeCache] = useState(() => {
    const key = course === 'js' ? 'webdev-code-cache-js' : 'webdev-code-cache';
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : {};
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
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : {};
  });

  // Layout states
  const [sidebarOpen, setSidebarOpen] = useState(true);
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
    const savedCache = localStorage.getItem(newKey);
    setCodeCache(savedCache ? JSON.parse(savedCache) : {});

    const progKey = newCourse === 'js' ? 'webdev-progress-js' : 'webdev-progress';
    const savedProg = localStorage.getItem(progKey);
    setProgress(savedProg ? JSON.parse(savedProg) : {});

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
    // Reset validations
    setValidationError(null);
    setIsSuccess(false);
    setShowSuccessModal(false);

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
    const iframe =
      document.querySelector('iframe[title="Live Preview"]') ||
      document.querySelector('iframe[title="Live Preview Overlap"]');

    if (!iframe) {
      setValidationError('เกิดข้อผิดพลาดในการโหลดระบบแสดงผล กรุณาลองใหม่อีกครั้ง');
      return;
    }

    try {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      
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

  // Load full working solution for live demonstration
  const handleLoadSolution = () => {
    if (!activeItem) return;
    if (activeItem.targetHtml) setHtml(activeItem.targetHtml);
    if (activeItem.targetCss) setCss(activeItem.targetCss);
    if (activeItem.targetJs !== undefined) setJs(activeItem.targetJs);
    setValidationError(null);
    setIsSuccess(false);
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

          {activeMode === 'learn' && (
            <div className="progress-group">
              <span className="progress-label">
                ผ่านแล้ว: {completedCount}/{totalItems} ({percentCompleted}%)
              </span>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${percentCompleted}%` }}></div>
              </div>
            </div>
          )}
        </div>

        {/* Header Right Actions */}
        <div className="header-right">
          {activeMode === 'learn' && (
            <>
              <button
                onClick={handleResetAll}
                className="icon-btn"
                style={{ borderColor: 'var(--danger-color)', color: 'var(--danger-color)' }}
                title="ล้างประวัติการเรียนและโค้ดของคอร์สนี้ทั้งหมด"
              >
                <Trash2 size={16} />
              </button>

              <button
                onClick={handleResetCode}
                className="icon-btn"
                title="รีเซ็ตโค้ดของบทเรียนปัจจุบัน"
              >
                <RotateCcw size={16} />
              </button>

              <button
                onClick={handleDownloadProject}
                className="icon-btn"
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
          setActiveId={setActiveId}
          progress={progress}
          isOpen={sidebarOpen}
          course={course}
          activeMode={activeMode}
          setActiveMode={setActiveMode}
          onOpenCheatSheet={() => setShowCheatSheet(true)}
        />

        {/* Workspace Content: Quiz Arena or Interactive Code Splitter */}
        {activeMode === 'quiz' && course === 'js' ? (
          <main className="quiz-main-full">
            <QuizArena
              quizBank={jsCurriculum.quizBank}
              onBackToLessons={() => setActiveMode('learn')}
            />
          </main>
        ) : (
          <main
            className="app-workspace"
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
                onLoadSolution={handleLoadSolution}
              />

              {/* Vertical Split Drag Bar */}
              <div
                className={`resizer-vertical ${isDraggingV ? 'active' : ''}`}
                onMouseDown={startVerticalDrag}
              />

              <EditorContainer
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
              />
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
