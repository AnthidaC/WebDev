import React, { useState, useMemo, useRef } from 'react';
import { knowledgeCategories } from './knowledgeBookData';

const CHAPTER_COLORS = [
  '#38bdf8',
  '#a855f7',
  '#22c55e',
  '#f59e0b',
  '#ec4899',
  '#6366f1',
];

const styles = {
  container: (isModal) => ({
    flex: 1,
    width: '100%',
    height: isModal ? 'min(88vh, 900px)' : 'calc(100vh - 58px)',
    minHeight: '620px',
    backgroundColor: '#0b1120',
    border: isModal ? '1px solid #334155' : 'none',
    borderRadius: isModal ? '16px' : '0',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    color: '#f8fafc',
    fontFamily: "'Inter', 'Noto Sans Thai', system-ui, -apple-system, sans-serif",
  }),
  topBar: {
    padding: '14px 22px',
    backgroundColor: '#0f172a',
    borderBottom: '1px solid #1e293b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    flexWrap: 'wrap',
  },
  titleGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  bookBadge: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
    flexShrink: 0,
  },
  title: {
    margin: 0,
    fontSize: '17px',
    fontWeight: 800,
    color: '#f8fafc',
    letterSpacing: '-0.01em',
  },
  subtitle: {
    margin: '2px 0 0 0',
    fontSize: '12.5px',
    color: '#94a3b8',
  },
  controlsGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flex: '1 1 380px',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
  searchBox: {
    position: 'relative',
    flex: '1 1 250px',
    maxWidth: '360px',
  },
  searchInput: {
    width: '100%',
    padding: '9px 32px 9px 34px',
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '9px',
    color: '#f8fafc',
    fontSize: '13.5px',
    outline: 'none',
    boxSizing: 'border-box',
  },
  searchIcon: {
    position: 'absolute',
    left: '11px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#94a3b8',
    fontSize: '13px',
    pointerEvents: 'none',
  },
  fontBtnGroup: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  fontBtn: (active) => ({
    padding: '6px 10px',
    border: 'none',
    backgroundColor: active ? '#3b82f6' : 'transparent',
    color: active ? '#ffffff' : '#cbd5e1',
    fontSize: '12px',
    fontWeight: 700,
    cursor: 'pointer',
  }),
  actionBtn: {
    padding: '8px 13px',
    backgroundColor: '#1e293b',
    border: '1px solid #3b82f6',
    borderRadius: '9px',
    color: '#93c5fd',
    fontSize: '12.5px',
    fontWeight: 700,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  closeBtn: {
    padding: '8px 14px',
    backgroundColor: '#dc2626',
    border: '1px solid #ef4444',
    borderRadius: '9px',
    color: '#ffffff',
    fontSize: '13px',
    fontWeight: 700,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  workspace: {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: '310px 1fr',
    overflow: 'hidden',
  },
  sidebar: {
    backgroundColor: '#0f172a',
    borderRight: '1px solid #1e293b',
    overflowY: 'auto',
    padding: '14px 12px 28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  sidebarLabel: {
    fontSize: '11px',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '0.07em',
    color: '#64748b',
    padding: '4px 10px 6px',
  },
  chapterBtn: (active, color) => ({
    width: '100%',
    textAlign: 'left',
    padding: '11px 12px',
    borderRadius: '10px',
    border: active ? `1.5px solid ${color}` : '1px solid transparent',
    backgroundColor: active ? '#1e293b' : 'transparent',
    color: active ? '#ffffff' : '#cbd5e1',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    transition: 'all 0.15s ease',
  }),
  chapterBadgeSmall: (color) => ({
    fontSize: '11px',
    fontWeight: 800,
    color: color,
  }),
  chapterBtnTop: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '8px',
    fontSize: '13px',
    fontWeight: 700,
    lineHeight: 1.4,
  },
  chapterCount: (active, color) => ({
    padding: '2px 7px',
    borderRadius: '999px',
    fontSize: '11px',
    fontWeight: 800,
    backgroundColor: active ? color : '#1e293b',
    color: active ? '#090d16' : '#94a3b8',
    flexShrink: 0,
  }),
  topicSubList: {
    marginLeft: '10px',
    marginTop: '4px',
    marginBottom: '8px',
    paddingLeft: '10px',
    borderLeft: '2px solid #334155',
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  topicJumpBtn: {
    textAlign: 'left',
    padding: '6px 9px',
    borderRadius: '7px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#94a3b8',
    fontSize: '12px',
    fontWeight: 500,
    cursor: 'pointer',
    lineHeight: 1.38,
  },
  mainPane: {
    overflowY: 'auto',
    padding: '22px 28px 44px',
    backgroundColor: '#0b1120',
  },
  chapterHero: (color) => ({
    padding: '18px 22px',
    borderRadius: '14px',
    background: 'linear-gradient(135deg, #162238 0%, #0f172a 100%)',
    border: '1px solid #26354d',
    borderLeft: `5px solid ${color}`,
    marginBottom: '22px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  }),
  chapterHeroBadge: (color) => ({
    alignSelf: 'flex-start',
    padding: '4px 10px',
    borderRadius: '6px',
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    border: `1px solid ${color}`,
    color: color,
    fontSize: '12px',
    fontWeight: 800,
  }),
  chapterHeroTitle: {
    margin: 0,
    fontSize: '20px',
    fontWeight: 800,
    color: '#ffffff',
    lineHeight: 1.35,
  },
  chapterHeroDesc: {
    margin: 0,
    fontSize: '14px',
    color: '#cbd5e1',
    lineHeight: 1.6,
  },
  stepPillsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '6px',
  },
  stepPill: {
    padding: '6px 12px',
    borderRadius: '8px',
    border: '1px solid #334155',
    backgroundColor: '#0f172a',
    color: '#e2e8f0',
    fontSize: '12.5px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  sectionsStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  card: {
    backgroundColor: '#111c30',
    border: '1px solid #28364f',
    borderRadius: '14px',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.28)',
  },
  cardHeader: {
    padding: '16px 20px 14px',
    backgroundColor: '#162238',
    borderBottom: '1px solid #26354d',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  badgeRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    flexWrap: 'wrap',
  },
  badgesLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
  },
  stepBadge: (color) => ({
    padding: '4px 10px',
    borderRadius: '6px',
    backgroundColor: color || '#38bdf8',
    color: '#090d16',
    fontSize: '12px',
    fontWeight: 800,
    letterSpacing: '0.02em',
  }),
  fileBadge: {
    padding: '4px 10px',
    borderRadius: '6px',
    backgroundColor: '#0b1324',
    border: '1px solid #334155',
    color: '#7dd3fc',
    fontSize: '12.5px',
    fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
    fontWeight: 600,
  },
  cardTitle: (scale) => ({
    margin: 0,
    fontSize: `${Math.round(17 * scale)}px`,
    fontWeight: 800,
    color: '#ffffff',
    lineHeight: 1.4,
  }),
  whenBox: (scale) => ({
    margin: 0,
    padding: '10px 14px',
    backgroundColor: '#0f172a',
    borderLeft: '3px solid #38bdf8',
    borderRadius: '6px',
    fontSize: `${Math.round(13.5 * scale)}px`,
    color: '#e2e8f0',
    lineHeight: 1.55,
  }),
  keyPointsBox: {
    padding: '14px 20px',
    backgroundColor: '#131f35',
    borderBottom: '1px solid #24324a',
  },
  keyPointsTitle: {
    fontSize: '12px',
    fontWeight: 800,
    color: '#fbbf24',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '8px',
  },
  keyPointsList: (scale) => ({
    margin: 0,
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    fontSize: `${Math.round(14 * scale)}px`,
    color: '#f1f5f9',
    lineHeight: 1.65,
  }),
  codeHeader: {
    padding: '8px 18px',
    backgroundColor: '#090f1d',
    borderBottom: '1px solid #1e293b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '12px',
    color: '#94a3b8',
  },
  copyBtn: (copied) => ({
    padding: '6px 13px',
    borderRadius: '7px',
    border: copied ? '1px solid #22c55e' : '1px solid #475569',
    backgroundColor: copied ? 'rgba(34, 197, 94, 0.2)' : '#1e293b',
    color: copied ? '#86efac' : '#f8fafc',
    fontSize: '12.5px',
    fontWeight: 700,
    cursor: 'pointer',
  }),
  codePre: (scale) => ({
    margin: 0,
    padding: '18px 20px',
    backgroundColor: '#070b14',
    color: '#e2e8f0',
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace",
    fontSize: `${Math.round(13.5 * scale)}px`,
    lineHeight: 1.68,
    overflowX: 'auto',
    tabSize: 2,
  }),
  footerNav: {
    marginTop: '28px',
    paddingTop: '18px',
    borderTop: '1px solid #1e293b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    flexWrap: 'wrap',
  },
  navBtn: {
    padding: '10px 16px',
    borderRadius: '10px',
    border: '1px solid #334155',
    backgroundColor: '#1e293b',
    color: '#f8fafc',
    fontSize: '13.5px',
    fontWeight: 700,
    cursor: 'pointer',
  },
};

export default function KnowledgeBook({ isOpen, onClose, onOpenActivity }) {
  const categories = useMemo(
    () =>
      knowledgeCategories.map((cat, idx) => ({
        ...cat,
        color: CHAPTER_COLORS[idx % CHAPTER_COLORS.length],
        sections: cat.sections.map((sec, sIdx) => ({
          ...sec,
          uid: sec.id || `${cat.id}-${sIdx}`,
        })),
      })),
    []
  );

  const [activeCategoryId, setActiveCategoryId] = useState(
    categories[0]?.id || 'db-to-api-e2e'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [fontScale, setFontScale] = useState(1);
  const mainPaneRef = useRef(null);

  const isSearching = searchQuery.trim().length > 0;

  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return categories;

    return categories
      .map((cat) => {
        const matchedSections = cat.sections.filter(
          (sec) =>
            sec.title.toLowerCase().includes(q) ||
            (sec.file && sec.file.toLowerCase().includes(q)) ||
            (sec.step && sec.step.toLowerCase().includes(q)) ||
            (sec.whenToUse && sec.whenToUse.toLowerCase().includes(q)) ||
            (sec.keyPoints &&
              sec.keyPoints.some((kp) => kp.toLowerCase().includes(q))) ||
            sec.code.toLowerCase().includes(q)
        );
        return {
          ...cat,
          sections: matchedSections,
        };
      })
      .filter((cat) => cat.sections.length > 0);
  }, [searchQuery, categories]);

  if (isOpen === false) return null;

  const currentCategory =
    categories.find((c) => c.id === activeCategoryId) || categories[0];

  const currentCatIndex = categories.findIndex(
    (c) => c.id === currentCategory?.id
  );
  const prevCategory =
    currentCatIndex > 0 ? categories[currentCatIndex - 1] : null;
  const nextCategory =
    currentCatIndex >= 0 && currentCatIndex < categories.length - 1
      ? categories[currentCatIndex + 1]
      : null;

  const handleCopy = async (uid, code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(uid);
      setTimeout(() => {
        setCopiedId((prev) => (prev === uid ? null : prev));
      }, 1800);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(uid);
      setTimeout(() => setCopiedId(null), 1800);
    }
  };

  const selectChapter = (catId) => {
    setSearchQuery('');
    setActiveCategoryId(catId);
    if (mainPaneRef.current) {
      mainPaneRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (uid) => {
    const el = document.getElementById(`kb-sec-${uid}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderSectionCard = (sec, catColor) => {
    const isCopied = copiedId === sec.uid;
    return (
      <article id={`kb-sec-${sec.uid}`} key={sec.uid} style={styles.card}>
        <div style={styles.cardHeader}>
          <div style={styles.badgeRow}>
            <div style={styles.badgesLeft}>
              {sec.step && (
                <span style={styles.stepBadge(catColor)}>{sec.step}</span>
              )}
              {sec.file && (
                <span style={styles.fileBadge}>📄 {sec.file}</span>
              )}
            </div>
            <button
              type="button"
              style={styles.copyBtn(isCopied)}
              onClick={() => handleCopy(sec.uid, sec.code)}
            >
              {isCopied ? '✓ คัดลอกโค้ดแล้ว' : '📋 คัดลอกโค้ด'}
            </button>
          </div>

          <h3 style={styles.cardTitle(fontScale)}>{sec.title}</h3>
          {sec.whenToUse && (
            <p style={styles.whenBox(fontScale)}>
              <strong style={{ color: '#38bdf8' }}>💡 ใช้เมื่อไหร่: </strong>
              {sec.whenToUse}
            </p>
          )}
        </div>

        {sec.keyPoints && sec.keyPoints.length > 0 && (
          <div style={styles.keyPointsBox}>
            <div style={styles.keyPointsTitle}>📌 จุดสำคัญที่ต้องจำเวลาสอบ</div>
            <ul style={styles.keyPointsList(fontScale)}>
              {sec.keyPoints.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          </div>
        )}

        <div style={styles.codeHeader}>
          <span>💻 ตัวอย่างโค้ดพร้อมใช้งาน (คัดลอกไปปรับใช้ได้ทันที)</span>
          <span style={{ fontFamily: 'monospace', color: '#7dd3fc' }}>
            {sec.file || 'JavaScript / JSX'}
          </span>
        </div>
        <pre style={styles.codePre(fontScale)}>
          <code>{sec.code}</code>
        </pre>
      </article>
    );
  };

  return (
    <div style={styles.container(Boolean(onClose))}>
      {/* Top Header */}
      <div style={styles.topBar}>
        <div style={styles.titleGroup}>
          <div style={styles.bookBadge}>📘</div>
          <div>
            <h2 style={styles.title}>
              คลังสมุดโค้ด Full Stack (ตั้งแต่ต่อ DB จริง → API → Auth → React Hooks)
            </h2>
            <p style={styles.subtitle}>
              เลือกบททางซ้ายเพื่ออ่านทีละบทแบบสบายตา • มีลำดับไฟล์ Step 1 → 4 พร้อมปุ่มคัดลอกโค้ด
            </p>
          </div>
        </div>

        <div style={styles.controlsGroup}>
          <div style={styles.searchBox}>
            <span style={styles.searchIcon}>🔍</span>
            <input
              type="text"
              placeholder="ค้นหา เช่น mysql2, JOIN, transaction, JWT, useEffect..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  fontSize: '13px',
                }}
                title="ล้างคำค้นหา"
              >
                ✕
              </button>
            )}
          </div>

          <div style={styles.fontBtnGroup} title="ปรับขนาดตัวอักษร">
            <button
              type="button"
              style={styles.fontBtn(fontScale === 0.92)}
              onClick={() => setFontScale(0.92)}
            >
              A-
            </button>
            <button
              type="button"
              style={styles.fontBtn(fontScale === 1)}
              onClick={() => setFontScale(1)}
            >
              A
            </button>
            <button
              type="button"
              style={styles.fontBtn(fontScale === 1.12)}
              onClick={() => setFontScale(1.12)}
            >
              A+
            </button>
          </div>

          {onOpenActivity && (
            <button
              type="button"
              style={styles.actionBtn}
              onClick={() => onOpenActivity('exam-final-practice')}
            >
              🎯 ไปโจทย์ซ้อมสอบปลายภาค (F)
            </button>
          )}

          {onClose && (
            <button type="button" style={styles.closeBtn} onClick={onClose}>
              ✕ ปิดสมุด
            </button>
          )}
        </div>
      </div>

      {/* Two-Column Notebook Layout */}
      <div style={styles.workspace}>
        {/* Left Table of Contents Sidebar */}
        <aside style={styles.sidebar}>
          <div style={styles.sidebarLabel}>
            สารบัญบทเรียน ({categories.length} หมวด)
          </div>

          {categories.map((cat) => {
            const isSelected = !isSearching && activeCategoryId === cat.id;
            return (
              <div key={cat.id}>
                <button
                  type="button"
                  style={styles.chapterBtn(isSelected, cat.color)}
                  onClick={() => selectChapter(cat.id)}
                >
                  <span style={styles.chapterBadgeSmall(cat.color)}>
                    {cat.badge}
                  </span>
                  <div style={styles.chapterBtnTop}>
                    <span>{cat.title}</span>
                    <span style={styles.chapterCount(isSelected, cat.color)}>
                      {cat.sections.length}
                    </span>
                  </div>
                </button>

                {isSelected && (
                  <div style={styles.topicSubList}>
                    {cat.sections.map((sec) => (
                      <button
                        key={sec.uid}
                        type="button"
                        style={styles.topicJumpBtn}
                        onClick={() => scrollToSection(sec.uid)}
                      >
                        {sec.step ? `[${sec.step}] ` : '• '}
                        {sec.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </aside>

        {/* Right Main Reading Pane */}
        <main ref={mainPaneRef} style={styles.mainPane}>
          {isSearching ? (
            filteredCategories.length === 0 ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                  color: '#94a3b8',
                }}
              >
                <div style={{ fontSize: '42px', marginBottom: '12px' }}>🔎</div>
                <div
                  style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc' }}
                >
                  ไม่พบหัวข้อที่ตรงกับ &ldquo;{searchQuery}&rdquo;
                </div>
                <div style={{ fontSize: '13.5px', marginTop: '6px' }}>
                  ลองค้นหาด้วยคำว่า pool, query, prisma, transaction, jwt,
                  useEffect, axios
                </div>
              </div>
            ) : (
              <div style={styles.sectionsStack}>
                <div
                  style={{
                    padding: '12px 18px',
                    borderRadius: '10px',
                    backgroundColor: '#162238',
                    border: '1px solid #334155',
                    fontSize: '14px',
                    color: '#cbd5e1',
                  }}
                >
                  🔍 ผลการค้นหาสำหรับ{' '}
                  <strong style={{ color: '#38bdf8' }}>
                    &ldquo;{searchQuery}&rdquo;
                  </strong>
                </div>
                {filteredCategories.map((cat) => (
                  <div key={cat.id} style={styles.sectionsStack}>
                    <h3
                      style={{
                        margin: '8px 0 0',
                        fontSize: '16px',
                        color: cat.color,
                      }}
                    >
                      {cat.badge} — {cat.title}
                    </h3>
                    {cat.sections.map((sec) =>
                      renderSectionCard(sec, cat.color)
                    )}
                  </div>
                ))}
              </div>
            )
          ) : (
            <>
              {/* Chapter Hero Banner */}
              <div style={styles.chapterHero(currentCategory.color)}>
                <span style={styles.chapterHeroBadge(currentCategory.color)}>
                  {currentCategory.badge}
                </span>
                <h3 style={styles.chapterHeroTitle}>{currentCategory.title}</h3>
                <p style={styles.chapterHeroDesc}>{currentCategory.summary}</p>

                {/* Quick Jump Pills */}
                <div style={styles.stepPillsRow}>
                  {currentCategory.sections.map((sec) => (
                    <button
                      key={sec.uid}
                      type="button"
                      style={styles.stepPill}
                      onClick={() => scrollToSection(sec.uid)}
                    >
                      {sec.step ? `${sec.step}: ` : ''}
                      {sec.file ? sec.file.split(' ')[0] : sec.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chapter Sections */}
              <div style={styles.sectionsStack}>
                {currentCategory.sections.map((sec) =>
                  renderSectionCard(sec, currentCategory.color)
                )}
              </div>

              {/* Prev / Next Chapter Footer Navigation */}
              <div style={styles.footerNav}>
                {prevCategory ? (
                  <button
                    type="button"
                    style={styles.navBtn}
                    onClick={() => selectChapter(prevCategory.id)}
                  >
                    ← หมวดก่อนหน้า: {prevCategory.badge}
                  </button>
                ) : (
                  <div />
                )}

                {nextCategory && (
                  <button
                    type="button"
                    style={{
                      ...styles.navBtn,
                      backgroundColor: '#2563eb',
                      borderColor: '#3b82f6',
                    }}
                    onClick={() => selectChapter(nextCategory.id)}
                  >
                    หมวดถัดไป: {nextCategory.badge} →
                  </button>
                )}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
