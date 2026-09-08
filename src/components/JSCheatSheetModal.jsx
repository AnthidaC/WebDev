import React, { useState } from 'react';
import { jsCheatSheetData } from '../data/jsCheatSheetData';
import { X, Search, BookOpen, Code, Copy, Check } from 'lucide-react';

export default function JSCheatSheetModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!isOpen) return null;

  const handleCopy = (code, idx) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const filteredCategories = jsCheatSheetData.map((cat) => {
    const matchingItems = cat.items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.note.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...cat, items: matchingItems };
  }).filter((cat) => cat.items.length > 0);

  return (
    <div className="cheatsheet-overlay" onClick={onClose}>
      <div className="cheatsheet-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cheatsheet-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen className="text-yellow-500" size={20} />
            <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>คู่มือสรุปไวยากรณ์ JavaScript (JS Cheat Sheet)</h2>
          </div>
          <button onClick={onClose} className="icon-btn" title="ปิดหน้าต่าง">
            <X size={18} />
          </button>
        </div>

        {/* Search Filter Bar */}
        <div className="cheatsheet-search-bar">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            placeholder="ค้นหาคำสั่ง เช่น localStorage, Ternary, addEventListener, this..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Content List */}
        <div className="cheatsheet-body">
          {filteredCategories.map((cat, catIdx) => (
            <div key={catIdx} className="cheatsheet-category-section">
              <h3 className="category-title">{cat.category}</h3>
              <div className="cheatsheet-grid">
                {cat.items.map((item, itemIdx) => {
                  const globalIdx = `${catIdx}-${itemIdx}`;
                  return (
                    <div key={itemIdx} className="cheatsheet-card">
                      <div className="card-header">
                        <span className="card-title">{item.title}</span>
                        <button
                          onClick={() => handleCopy(item.code, globalIdx)}
                          className="copy-btn"
                          title="คัดลอกโค้ด"
                        >
                          {copiedIndex === globalIdx ? (
                            <Check size={14} className="text-green-500" />
                          ) : (
                            <Copy size={14} />
                          )}
                        </button>
                      </div>
                      <pre className="code-block">
                        <code>{item.code}</code>
                      </pre>
                      <p className="note-text">{item.note}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="empty-search">
              <p>ไม่พบคำสั่งที่ตรงกับ "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
