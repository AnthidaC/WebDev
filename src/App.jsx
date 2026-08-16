import React, { useState, useEffect } from 'react';
import { curriculum } from './data/curriculum';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';
import InstructionPanel from './components/InstructionPanel';
import EditorContainer from './components/EditorContainer';
import PreviewContainer from './components/PreviewContainer';
import confetti from 'canvas-confetti';
import { RotateCcw, Check, Sparkles, BookOpen, AlertCircle, Menu, Trash2, Download } from 'lucide-react';
import CheatSheet from './components/CheatSheet';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('webdev-theme') || 'dark';
  });

  // Active curriculum item
  const [activeId, setActiveId] = useState('html-structure');
  
  // Tabs states
  const [activeEditorTab, setActiveEditorTab] = useState('html');
  
  // Sandbox code cache: { [itemId]: { html, css } }
  const [codeCache, setCodeCache] = useState(() => {
    const saved = localStorage.getItem('webdev-code-cache');
    return saved ? JSON.parse(saved) : {};
  });

  // Current HTML and CSS code
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');

  // Validation States
  const [validationError, setValidationError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // User Progress: { [itemId]: true }
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('webdev-progress');
    return saved ? JSON.parse(saved) : {};
  });

  // Resizing state
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [leftWidth, setLeftWidth] = useState(50); // percentage of workspace width
  const [topHeight, setTopHeight] = useState(40); // percentage of left panel height
  const [isDraggingH, setIsDraggingH] = useState(false);
  const [isDraggingV, setIsDraggingV] = useState(false);
  const [editorFontSize, setEditorFontSize] = useState(14);
  const [showCheatSheet, setShowCheatSheet] = useState(false);

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

    const handleMouseUp = () => {
      setIsDraggingH(false);
    };

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

    const handleMouseUp = () => {
      setIsDraggingV(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingV]);

  // Get active item (lesson or challenge)
  const activeItem =
    curriculum.lessons.find((l) => l.id === activeId) ||
    curriculum.challenges.find((c) => c.id === activeId) ||
    curriculum.lessons[0];

  const isChallenge = curriculum.challenges.some((c) => c.id === activeId);

  // 1. Sync theme class on body
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('webdev-theme', theme);
  }, [theme]);



  // 2. Load code when activeItem changes
  useEffect(() => {
    if (codeCache[activeId]) {
      setHtml(codeCache[activeId].html);
      setCss(codeCache[activeId].css);
    } else {
      setHtml(activeItem.starterHtml);
      setCss(activeItem.starterCss);
    }
    // Reset validations
    setValidationError(null);
    setIsSuccess(false);
    setShowSuccessModal(false);
    // Set appropriate editor tab based on active item type
    if (activeItem && activeItem.category && activeItem.category.includes('HTML')) {
      setActiveEditorTab('html');
    } else {
      setActiveEditorTab('css');
    }
  }, [activeId]);

  // 3. Save code changes to Cache & LocalStorage (auto-save)
  useEffect(() => {
    if (!html && !css) return; // Skip initial empty sets
    const updated = {
      ...codeCache,
      [activeId]: { html, css },
    };
    setCodeCache(updated);
    localStorage.setItem('webdev-code-cache', JSON.stringify(updated));
  }, [html, css]);

  // Handle Theme Toggle
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Reset all workspace codes and progress
  const handleResetAll = () => {
    if (window.confirm('คุณต้องการล้างความคืบหน้าการเรียนและรีเซ็ตโค้ดของทุกบทเรียนทั้งหมดเพื่อเริ่มต้นใหม่ใช่หรือไม่? (ข้อมูลทั้งหมดจะถูกลบและเริ่มต้นใหม่)')) {
      localStorage.removeItem('webdev-code-cache');
      localStorage.removeItem('webdev-progress');
      setCodeCache({});
      setProgress({});
      
      const defaultItem = curriculum.lessons.find((l) => l.id === activeId) || curriculum.challenges.find((c) => c.id === activeId);
      setHtml(defaultItem.starterHtml);
      setCss(defaultItem.starterCss);
      setValidationError(null);
      setIsSuccess(false);
      alert('รีเซ็ตระบบเรียนรู้ทั้งหมดแล้ว! โค้ดและประวัติการเรียนถูกล้างแล้วครับ');
    }
  };

  // Reset current code to starter code
  const handleResetCode = () => {
    if (window.confirm('คุณต้องการรีเซ็ตโค้ดของบทเรียนนี้กลับไปเป็นค่าเริ่มต้นใช่หรือไม่?')) {
      setHtml(activeItem.starterHtml);
      setCss(activeItem.starterCss);
      setValidationError(null);
      setIsSuccess(false);
      
      const updatedCache = { ...codeCache };
      delete updatedCache[activeId];
      setCodeCache(updatedCache);
      localStorage.setItem('webdev-code-cache', JSON.stringify(updatedCache));
    }
  };

  // Download project files (index.html & style.css)
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

    URL.revokeObjectURL(htmlUrl);
    URL.revokeObjectURL(cssUrl);
  };

  // Run Code Verification Assertions
  const handleVerify = () => {
    // Look up the running iframe in the preview container
    const iframe =
      document.querySelector('iframe[title="Live Preview"]') ||
      document.querySelector('iframe[title="Live Preview Overlap"]');

    if (!iframe) {
      setValidationError('เกิดข้อผิดพลาดในการโหลดระบบแสดงผล กรุณาลองใหม่อีกครั้ง');
      return;
    }

    try {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      
      // Run validation function
      const result = activeItem.validation(doc, css);

      if (result === true) {
        setValidationError(null);
        setIsSuccess(true);
        
        // Save progress
        const newProgress = { ...progress, [activeId]: true };
        setProgress(newProgress);
        localStorage.setItem('webdev-progress', JSON.stringify(newProgress));

        // Fire Confetti!
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#10b981', '#fbbf24', '#f43f5e']
        });

        // Trigger victory modal after a small delay
        setTimeout(() => {
          setShowSuccessModal(true);
        }, 600);

      } else {
        setValidationError(result);
        setIsSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setValidationError('ตรวจพบข้อผิดพลาดในโครงสร้างโค้ดของคุณ กรุณาตรวจสอบแท็กหรือวงเล็บเปิดปิด');
      setIsSuccess(false);
    }
  };

  // Find next item in curriculum
  const handleNextItem = () => {
    const allItems = [...curriculum.lessons, ...curriculum.challenges];
    const currentIndex = allItems.findIndex((item) => item.id === activeId);
    
    if (currentIndex !== -1 && currentIndex < allItems.length - 1) {
      const nextItem = allItems[currentIndex + 1];
      setActiveId(nextItem.id);
    }
    setShowSuccessModal(false);
  };

  // Calculate Progress Stats
  const totalItems = curriculum.lessons.length + curriculum.challenges.length;
  const completedCount = Object.keys(progress).length;
  const percentCompleted = Math.round((completedCount / totalItems) * 100);

  return (
    <div className={`app-container ${isDraggingH ? 'is-dragging-h' : ''} ${isDraggingV ? 'is-dragging-v' : ''}`}>
      {/* App Header */}
      <header className="app-header">
        <div className="logo-container">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="icon-btn"
            style={{ marginRight: '10px' }}
            title={sidebarOpen ? "ซ่อนเมนูข้าง" : "แสดงเมนูข้าง"}
            aria-label="Toggle Sidebar"
          >
            <Menu size={18} />
          </button>
          <BookOpen className="text-blue-500" size={24} />
          <h1 className="logo-text">WebDev Academy</h1>
        </div>

        {/* Progress Tracker */}
        <div className="header-center">
          <span className="progress-label">
            คืบหน้า: {completedCount}/{totalItems} ({percentCompleted}%)
          </span>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${percentCompleted}%` }}></div>
          </div>
        </div>

        <div className="header-right">
          <button
            onClick={handleResetAll}
            className="icon-btn"
            style={{ borderColor: 'var(--danger-color)', color: 'var(--danger-color)' }}
            title="ล้างประวัติการเรียนและโค้ดของทุกบทเรียนทั้งหมด (เริ่มใหม่ทั้งหมด)"
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
            title="ดาวน์โหลดไฟล์งานโปรเจกต์นี้ (index.html และ style.css)"
          >
            <Download size={16} />
          </button>

          <button
            onClick={() => setShowCheatSheet(true)}
            className="icon-btn"
            style={{ borderColor: 'var(--accent-color)', color: 'var(--accent-color)' }}
            title="ดูคู่มือสรุปคำสั่งและทิปเขียนเว็บ (Cheat Sheet)"
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
          lessons={curriculum.lessons}
          challenges={curriculum.challenges}
          activeId={activeId}
          setActiveId={setActiveId}
          progress={progress}
          isOpen={sidebarOpen}
        />

        {/* Interactive Workspace Splitter */}
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
              isChallenge={isChallenge}
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

          {/* Right Area (Live preview, target preview & comparison slider) */}
          <PreviewContainer
            html={html}
            css={css}
            targetHtml={activeItem.targetHtml}
            targetCss={activeItem.targetCss}
            showCompare={!!activeItem.targetHtml}
          />
        </main>
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
                ? `ยินดีด้วย! คุณสามารถท้าทายการสร้างเลย์เอาต์หน้าจอและโครงสร้าง UI ได้อย่างสมบูรณ์แบบ ได้รับการสะสมดาวเรียบร้อย!`
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
                  <span className="stat-val font-bold" style={{ color: 'var(--warning-color)' }}>+{activeItem.points} XP</span>
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

      <CheatSheet
        isOpen={showCheatSheet}
        onClose={() => setShowCheatSheet(false)}
      />
    </div>
  );
}
