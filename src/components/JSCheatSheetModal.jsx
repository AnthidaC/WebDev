import React, { useState, useEffect, useMemo } from 'react';
import { jsCheatSheetData } from '../data/jsCheatSheetData';
import { X, Search, BookOpen, Code, Copy, Check, Sparkles, Lightbulb, Terminal, CornerDownLeft } from 'lucide-react';

export default function JSCheatSheetModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategoryIndex, setActiveCategoryIndex] = useState('all');
  const [copiedId, setCopiedId] = useState(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Quick search suggestion tags
  const quickTags = [
    'const/let',
    'Ternary',
    'Array.map',
    'JSON',
    'addEventListener',
    'preventDefault',
    'this',
    'localStorage',
    'setTimeout',
    'Destructuring',
    'async/await'
  ];

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  // Filter categories and items
  const filteredCategories = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return jsCheatSheetData
      .map((cat, catIdx) => {
        // Category filter
        if (activeCategoryIndex !== 'all' && activeCategoryIndex !== catIdx) {
          return null;
        }

        const matchingItems = cat.items.filter((item) => {
          if (!term) return true;
          return (
            item.title.toLowerCase().includes(term) ||
            item.code.toLowerCase().includes(term) ||
            item.note.toLowerCase().includes(term) ||
            cat.category.toLowerCase().includes(term)
          );
        });

        if (matchingItems.length === 0) return null;
        return {
          ...cat,
          catIdx,
          items: matchingItems
        };
      })
      .filter(Boolean);
  }, [searchTerm, activeCategoryIndex]);

  const totalFilteredItems = useMemo(() => {
    return filteredCategories.reduce((sum, cat) => sum + cat.items.length, 0);
  }, [filteredCategories]);

  const totalAllItems = useMemo(() => {
    return jsCheatSheetData.reduce((sum, cat) => sum + cat.items.length, 0);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="js-cheat-overlay cheatsheet-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="js-cheat-card cheatsheet-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="js-cheat-header cheatsheet-header">
          <div className="js-cheat-title-group">
            <div className="js-cheat-badge">
              <span className="js-badge-text">JS</span>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <h2 className="js-cheat-title">คู่มือสรุปไวยากรณ์ JavaScript</h2>
                <span className="js-cheat-tag-es6">ES6+ & WebDev Handbook</span>
              </div>
              <p className="js-cheat-subtitle">
                รวบรวมคำสั่งสำคัญ ไวยากรณ์ลัด โค้ดตัวอย่าง และคำอธิบายเชิงลึกสำหรับประกอบการเรียนรู้
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="js-cheat-esc-hint" title="กดแป้น Esc เพื่อปิด">
              <kbd>Esc</kbd>
            </span>
            <button onClick={onClose} className="js-cheat-close-btn icon-btn" title="ปิดหน้าต่าง (Esc)">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Toolbar: Search & Category Chips */}
        <div className="js-cheat-toolbar cheatsheet-search-bar">
          <div className="js-cheat-search-wrapper">
            <Search size={18} className="js-cheat-search-icon" />
            <input
              type="text"
              placeholder="ค้นหาคำสั่ง เช่น localStorage, map, addEventListener, this, destructuring, arrow..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="js-cheat-search-input"
              autoFocus
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="js-cheat-clear-btn"
                title="ล้างคำค้นหา"
              >
                <X size={15} />
              </button>
            )}
            <div className="js-cheat-search-count">
              {searchTerm ? `พบ ${totalFilteredItems} คำสั่ง` : `ทั้งหมด ${totalAllItems} คำสั่ง`}
            </div>
          </div>

          {/* Quick Filter Tags */}
          <div className="js-cheat-quick-tags">
            <span className="js-cheat-quick-label">คีย์เวิร์ดด่วน:</span>
            {quickTags.map((tag) => (
              <button
                key={tag}
                className={`js-cheat-quick-tag-btn ${searchTerm === tag ? 'active' : ''}`}
                onClick={() => {
                  setSearchTerm(tag === searchTerm ? '' : tag);
                  setActiveCategoryIndex('all');
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Category Tabs */}
          <div className="js-cheat-tabs">
            <button
              onClick={() => setActiveCategoryIndex('all')}
              className={`js-cheat-tab ${activeCategoryIndex === 'all' ? 'active' : ''}`}
            >
              <span>📌 ทั้งหมด</span>
              <span className="js-cheat-tab-count">{totalAllItems}</span>
            </button>
            {jsCheatSheetData.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`js-cheat-tab ${activeCategoryIndex === idx ? 'active' : ''}`}
              >
                <span>{cat.category}</span>
                <span className="js-cheat-tab-count">{cat.items.length}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="js-cheat-body cheatsheet-body">
          {filteredCategories.map((cat) => (
            <div key={cat.catIdx} className="js-cheat-category-block cheatsheet-category-section">
              <div className="js-cheat-category-header">
                <div className="js-cheat-category-header-title">
                  <Terminal size={17} className="text-yellow-500" />
                  <h3 className="category-title">{cat.category}</h3>
                </div>
                <span className="js-cheat-category-badge">{cat.items.length} คำสั่ง</span>
              </div>

              <div className="js-cheat-grid cheatsheet-grid">
                {cat.items.map((item, itemIdx) => {
                  const globalIdx = `${cat.catIdx}-${itemIdx}`;
                  const isCopied = copiedId === globalIdx;

                  return (
                    <div key={itemIdx} className="js-cheat-item-card cheatsheet-card">
                      {/* Card Header */}
                      <div className="js-cheat-item-header card-header">
                        <div className="js-cheat-item-title-wrapper">
                          <span className="js-cheat-item-dot" />
                          <h4 className="js-cheat-item-title card-title">{item.title}</h4>
                        </div>
                        <button
                          onClick={() => handleCopy(item.code, globalIdx)}
                          className={`js-cheat-copy-btn copy-btn ${isCopied ? 'copied' : ''}`}
                          title="คัดลอกโค้ดนี้"
                        >
                          {isCopied ? (
                            <>
                              <Check size={14} className="text-green-500" />
                              <span>คัดลอกแล้ว!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              <span>คัดลอก</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Code Block Container */}
                      <div className="js-cheat-code-container">
                        <div className="js-cheat-code-bar">
                          <div className="js-cheat-window-dots">
                            <span className="dot red" />
                            <span className="dot yellow" />
                            <span className="dot green" />
                          </div>
                          <span className="js-cheat-lang-badge">javascript</span>
                        </div>
                        <pre className="js-cheat-code-pre code-block">
                          <code>{item.code}</code>
                        </pre>
                      </div>

                      {/* Note & Explanation */}
                      <div className="js-cheat-note-box">
                        <div className="js-cheat-note-icon">
                          <Lightbulb size={15} />
                        </div>
                        <p className="js-cheat-note-text note-text">{item.note}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Empty Search Result State */}
          {filteredCategories.length === 0 && (
            <div className="js-cheat-empty empty-search">
              <div className="js-cheat-empty-icon">
                <Search size={36} />
              </div>
              <h4 className="js-cheat-empty-title">ไม่พบคำสั่งที่ตรงกับการค้นหา</h4>
              <p className="js-cheat-empty-desc">
                ไม่พบคำสั่งหรือคีย์เวิร์ดที่ตรงกับ <strong>"{searchTerm}"</strong>
              </p>
              <div className="js-cheat-empty-actions">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategoryIndex('all');
                  }}
                  className="js-cheat-reset-btn"
                >
                  ล้างตัวกรองและแสดงทั้งหมด
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="js-cheat-footer">
          <div className="js-cheat-footer-tip">
            <Sparkles size={15} className="text-yellow-500" />
            <span>
              💡 <strong>เคล็ดลับ:</strong> คลิกปุ่ม <em>"คัดลอก"</em> เพื่อนำโค้ดไปทดลองรันใน Editor หรือกด <strong>Esc</strong> เพื่อปิดหน้าต่าง
            </span>
          </div>
          <div className="js-cheat-footer-stat">
            ครอบคลุม {totalAllItems} ไวยากรณ์ใน {jsCheatSheetData.length} หมวดหมู่
          </div>
        </div>
      </div>
    </div>
  );
}
