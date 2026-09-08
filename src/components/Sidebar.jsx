import React, { useState } from 'react';
import {
  BookOpen,
  Award,
  CheckCircle2,
  Circle,
  Star,
  Sparkles,
  HelpCircle,
  FileCode2,
  Code
} from 'lucide-react';

export default function Sidebar({
  lessons = [],
  challenges = [],
  appliedExams = [],
  activeId,
  setActiveId,
  progress = {},
  isOpen,
  course = 'js',
  activeMode = 'learn',
  setActiveMode = () => {},
  onOpenCheatSheet = () => {}
}) {
  const [examFilter, setExamFilter] = useState('all');

  const getExamCategory = (exam) => {
    const id = exam.id;
    if (id.includes('weather') || id.includes('movie')) return 'api';
    if (id.includes('memory') || id.includes('canvas') || id.includes('mole') || id.includes('wordle')) return 'games';
    return 'apps';
  };

  // Group lessons by category
  const categories = {};
  lessons.forEach((lesson) => {
    if (!categories[lesson.category]) {
      categories[lesson.category] = [];
    }
    categories[lesson.category].push(lesson);
  });

  return (
    <aside className={`app-sidebar ${isOpen ? '' : 'collapsed'}`}>
      {/* Quick Action Navigation for JavaScript Course */}
      {course === 'js' && (
        <div className="sidebar-special-box">
          <button
            onClick={() => setActiveMode('quiz')}
            className={`sidebar-mode-card ${activeMode === 'quiz' ? 'active' : ''}`}
          >
            <div className="card-icon-wrap" style={{ background: '#fef3c7', color: '#d97706' }}>
              <HelpCircle size={20} />
            </div>
            <div className="card-text-wrap">
              <span className="card-title-bold">🎯 ห้องฝึกควิซ (Quiz Arena)</span>
              <span className="card-subtitle-sm">ทดสอบความรู้ 20 ข้อ พร้อมเฉลย</span>
            </div>
          </button>

          <button
            onClick={onOpenCheatSheet}
            className="sidebar-mode-card"
            style={{ marginTop: '8px' }}
          >
            <div className="card-icon-wrap" style={{ background: '#e0e7ff', color: '#4338ca' }}>
              <BookOpen size={18} />
            </div>
            <div className="card-text-wrap">
              <span className="card-title-bold">📖 สรุปไวยากรณ์ (Cheat Sheet)</span>
              <span className="card-subtitle-sm">ทริค & สูตรลัด JavaScript</span>
            </div>
          </button>
        </div>
      )}

      {/* Lessons Section */}
      {Object.keys(categories).map((catName) => (
        <div key={catName} className="sidebar-section">
          <h3 className="sidebar-title">
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Code size={13} className="text-yellow-500" />
              {catName}
            </span>
          </h3>
          {categories[catName].map((lesson) => {
            const isCompleted = progress[lesson.id];
            const isActive = activeId === lesson.id && activeMode === 'learn';

            return (
              <button
                key={lesson.id}
                onClick={() => {
                  setActiveId(lesson.id);
                  setActiveMode('learn');
                }}
                className={`sidebar-item ${isActive ? 'active' : ''}`}
              >
                <div className="item-left">
                  <span className="status-badge">
                    {isCompleted ? (
                      <CheckCircle2 size={16} className="status-check" />
                    ) : (
                      <Circle size={16} className="text-slate-400" />
                    )}
                  </span>
                  <span>{lesson.title.replace(/^\d+\.\s*/, '')}</span>
                </div>
              </button>
            );
          })}
        </div>
      ))}

      {/* Challenges / Projects Section */}
      {challenges.length > 0 && (
        <div className="sidebar-section">
          <h3 className="sidebar-title">
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Sparkles size={12} className="text-yellow-500" /> ภารกิจโปรเจกต์ (Slide Challenges)
            </span>
          </h3>
          {challenges.map((challenge) => {
            const isCompleted = progress[challenge.id];
            const isActive = activeId === challenge.id && activeMode === 'learn';

            return (
              <button
                key={challenge.id}
                onClick={() => {
                  setActiveId(challenge.id);
                  setActiveMode('learn');
                }}
                className={`sidebar-item ${isActive ? 'active' : ''}`}
                style={{ paddingRight: '6px' }}
              >
                <div className="item-left">
                  <span className="status-badge">
                    {isCompleted ? (
                      <Star size={16} className="status-star" />
                    ) : (
                      <Award size={16} className="text-slate-400" />
                    )}
                  </span>
                  <span style={{ fontWeight: '500' }}>
                    {challenge.title.replace(/^(ภารกิจที่|โปรเจกต์)\s*\d+:\s*/, '')}
                  </span>
                </div>
                {challenge.difficulty && (
                  <span className={`difficulty-badge ${challenge.difficulty.toLowerCase()}`}>
                    {challenge.difficulty}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Applied Practical Exams Section for JavaScript Course */}
      {course === 'js' && appliedExams && appliedExams.length > 0 && (
        <div className="sidebar-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <h3 className="sidebar-title" style={{ margin: 0 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f59e0b' }}>
                <Award size={14} className="text-amber-500" />
                🏆 ข้อสอบปฏิบัติการ ({appliedExams.length})
              </span>
            </h3>
          </div>

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            gap: '3px',
            marginBottom: '8px',
            padding: '2px',
            background: 'var(--bg-secondary, rgba(0,0,0,0.05))',
            borderRadius: '6px'
          }}>
            {[
              { id: 'all', label: 'ทั้งหมด' },
              { id: 'apps', label: '💼 Apps' },
              { id: 'api', label: '🌐 APIs' },
              { id: 'games', label: '🎮 Games' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setExamFilter(tab.id)}
                style={{
                  flex: 1,
                  border: 'none',
                  background: examFilter === tab.id ? 'var(--card-bg, #ffffff)' : 'transparent',
                  color: examFilter === tab.id ? '#b45309' : 'var(--text-muted, #64748b)',
                  fontWeight: examFilter === tab.id ? '700' : '500',
                  fontSize: '0.7rem',
                  padding: '4px 2px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  boxShadow: examFilter === tab.id ? '0 1px 2px rgba(0,0,0,0.1)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {appliedExams
            .filter((exam) => examFilter === 'all' || getExamCategory(exam) === examFilter)
            .map((exam) => {
              const isCompleted = progress[exam.id];
              const isActive = activeId === exam.id && activeMode === 'learn';
              const cat = getExamCategory(exam);
              const catBadge = cat === 'api' ? { label: 'API', bg: '#e0f2fe', color: '#0369a1' }
                : cat === 'games' ? { label: 'Game', bg: '#f3e8ff', color: '#7e22ce' }
                : { label: 'App', bg: '#fef3c7', color: '#b45309' };

              return (
                <button
                  key={exam.id}
                  onClick={() => {
                    setActiveId(exam.id);
                    setActiveMode('learn');
                  }}
                  className={`sidebar-item ${isActive ? 'active' : ''}`}
                  style={{ paddingRight: '6px' }}
                >
                  <div className="item-left">
                    <span className="status-badge">
                      {isCompleted ? (
                        <CheckCircle2 size={16} className="status-check" />
                      ) : (
                        <Star size={16} style={{ color: '#f59e0b' }} />
                      )}
                    </span>
                    <span style={{ fontWeight: '600', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span style={{
                        fontSize: '0.62rem',
                        padding: '1px 4px',
                        borderRadius: '3px',
                        background: catBadge.bg,
                        color: catBadge.color,
                        fontWeight: 'bold',
                        letterSpacing: '0.3px',
                        flexShrink: 0
                      }}>
                        {catBadge.label}
                      </span>
                      {exam.title.replace(/^ข้อสอบปฏิบัติการที่\s*\d+:\s*/, '')}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    {exam.xp && (
                      <span style={{ fontSize: '0.68rem', padding: '1px 5px', borderRadius: '4px', background: '#fef3c7', color: '#b45309', fontWeight: 'bold' }}>
                        +{exam.xp} XP
                      </span>
                    )}
                    {exam.difficulty && (
                      <span className={`difficulty-badge ${exam.difficulty.toLowerCase()}`}>
                        {exam.difficulty}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
        </div>
      )}

      {/* Midterm Exam Section for HTML/CSS Course */}
      {course === 'css' && (
        <div className="sidebar-section">
          <h3 className="sidebar-title">
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              📝 จำลองสอบกลางภาค (Midterm)
            </span>
          </h3>
          
          <a 
            href="/layout-exercises/midterm-shop-solution.html" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sidebar-item"
            style={{ textDecoration: 'none' }}
          >
            <div className="item-left">
              <span className="status-badge">🌿</span>
              <span>หน้าที่ 1: ข้อมูลร้าน (เว็บตัวอย่างจริง)</span>
            </div>
            <span style={{ fontSize: '0.68rem', padding: '1px 5px', borderRadius: '4px', background: '#dcfce7', color: '#15803d', fontWeight: 'bold' }}>
              Live
            </span>
          </a>

          <a 
            href="/layout-exercises/midterm-menu-solution.html" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sidebar-item"
            style={{ textDecoration: 'none' }}
          >
            <div className="item-left">
              <span className="status-badge">🍰</span>
              <span>หน้าที่ 2: เมนู & บริการ (เว็บตัวอย่างจริง)</span>
            </div>
            <span style={{ fontSize: '0.68rem', padding: '1px 5px', borderRadius: '4px', background: '#dcfce7', color: '#15803d', fontWeight: 'bold' }}>
              Live
            </span>
          </a>

          <a 
            href="/layout-exercises/midterm-booking-solution.html" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sidebar-item"
            style={{ textDecoration: 'none' }}
          >
            <div className="item-left">
              <span className="status-badge">📅</span>
              <span>หน้าที่ 3: ฟอร์มจองโต๊ะ (เว็บตัวอย่างจริง)</span>
            </div>
            <span style={{ fontSize: '0.68rem', padding: '1px 5px', borderRadius: '4px', background: '#dcfce7', color: '#15803d', fontWeight: 'bold' }}>
              Live
            </span>
          </a>

          <a 
            href="/layout-exercises/midterm-instructions.html" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sidebar-item"
            style={{ textDecoration: 'none' }}
          >
            <div className="item-left">
              <span className="status-badge">📋</span>
              <span style={{ color: 'var(--warning-color)' }}>เกณฑ์และกติกาข้อสอบ</span>
            </div>
          </a>

          <a 
            href="/layout-exercises/midterm-shop.html" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sidebar-item"
            style={{ textDecoration: 'none', opacity: 0.75 }}
          >
            <div className="item-left">
              <span className="status-badge">✍️</span>
              <span>โหมดทดลองเขียนเอง (Blank Starter)</span>
            </div>
          </a>
        </div>
      )}
    </aside>
  );
}
