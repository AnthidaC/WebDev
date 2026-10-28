import React, { useState } from 'react';
import { BookOpen, Search, ArrowRight, X, CheckCircle2, Sparkles } from 'lucide-react';
import { knowledgeCategories } from './knowledgeBookData';
import CopyCode from './CopyCode';

export default function KnowledgeBook({ onOpenActivity, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');

  const query = search.trim().toLowerCase();

  const filteredCategories = knowledgeCategories
    .filter(cat => selectedCategory === 'all' || cat.id === selectedCategory)
    .map(cat => {
      if (!query) return cat;
      const matchingSections = cat.sections.filter(sec => {
        const text = [
          cat.title,
          cat.badge,
          sec.title,
          sec.whenToUse,
          ...(sec.keyPoints || []),
          sec.code,
        ]
          .join(' ')
          .toLowerCase();
        return text.includes(query);
      });
      return { ...cat, sections: matchingSections };
    })
    .filter(cat => cat.sections.length > 0);

  return (
    <main className="fs-overview fs-knowledge-book" style={{ maxWidth: '1080px', margin: '0 auto', padding: '28px 24px 64px' }}>
      {/* Header Banner */}
      <section
        style={{
          background: 'linear-gradient(135deg, rgba(8, 127, 108, 0.14) 0%, rgba(2, 132, 199, 0.1) 100%)',
          border: '1px solid var(--fs-border, #cbd5e1)',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ maxWidth: '720px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '700', color: '#087f6c', marginBottom: '8px' }}>
            <BookOpen size={15} /> FULL-STACK CODE HANDBOOK &amp; CHEAT SHEET
          </div>
          <h1 style={{ margin: '0 0 8px 0', fontSize: '26px', letterSpacing: '-0.5px' }}>
            📚 คลังสมุดโค้ด: Node.js + Express + Database + React + Auth/Role
          </h1>
          <p style={{ margin: 0, opacity: 0.85, lineHeight: 1.6 }}>
            รวบรวมโครงสร้างโค้ด คำสั่งสำคัญ HTTP Status Codes และแพตเทิร์นที่ออกสอบปลายภาคครบทุกบท
            สามารถค้นหาคำสำคัญและกด <strong>คัดลอก</strong> โค้ดไปปรับใช้ในโปรเจกต์ได้ทันที
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          {onOpenActivity && (
            <button
              type="button"
              className="fs-primary"
              onClick={() => onOpenActivity('exam-final-practice')}
            >
              <Sparkles size={15} /> ฝึกทำข้อสอบปลายภาค (สอบ F) <ArrowRight size={15} />
            </button>
          )}
          {onClose && (
            <button
              type="button"
              className="fs-secondary"
              onClick={onClose}
              aria-label="ปิดสมุดโค้ด"
            >
              <X size={15} /> ปิดหน้าต่าง
            </button>
          )}
        </div>
      </section>

      {/* Search & Category Tabs */}
      <section style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '14px' }}>
          <label className="fs-search" style={{ flex: '1 1 320px' }}>
            <Search size={16} />
            <input
              aria-label="ค้นหาในคลังสมุดโค้ด"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="ค้นหา เช่น verifyToken, bcrypt, 409, reduce, Router, Prisma, role..."
            />
          </label>
          {search && (
            <button type="button" className="fs-secondary fs-compact" onClick={() => setSearch('')}>
              ล้างคำค้นหา
            </button>
          )}
        </div>

        <div className="fs-filters" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            type="button"
            className={selectedCategory === 'all' ? 'active' : ''}
            onClick={() => setSelectedCategory('all')}
          >
            ทั้งหมด ({knowledgeCategories.length} หมวด)
          </button>
          {knowledgeCategories.map(cat => (
            <button
              key={cat.id}
              type="button"
              className={selectedCategory === cat.id ? 'active' : ''}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.badge}
            </button>
          ))}
        </div>
      </section>

      {/* Category & Code Sections */}
      {filteredCategories.length === 0 ? (
        <p className="fs-empty">ไม่พบหัวข้อที่ตรงกับ &ldquo;{search}&rdquo; ลองค้นด้วยคำอื่น เช่น jwt, 403, map, axios หรือ prisma</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {filteredCategories.map(cat => (
            <section
              key={cat.id}
              style={{
                border: '1px solid var(--fs-border, #cbd5e1)',
                borderRadius: '14px',
                padding: '22px',
                background: 'var(--fs-surface, rgba(255,255,255,0.03))',
              }}
            >
              <div style={{ marginBottom: '16px', borderBottom: '1px solid var(--fs-border, #cbd5e1)', paddingBottom: '12px' }}>
                <span className="fs-kind lesson" style={{ marginBottom: '6px', display: 'inline-block' }}>
                  {cat.badge}
                </span>
                <h2 style={{ margin: '4px 0 6px 0', fontSize: '20px' }}>{cat.title}</h2>
                <p style={{ margin: 0, opacity: 0.8, fontSize: '14px' }}>{cat.summary}</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {cat.sections.map(sec => (
                  <article
                    key={sec.title}
                    style={{
                      border: '1px solid var(--fs-border, #cbd5e1)',
                      borderRadius: '10px',
                      padding: '16px',
                      background: 'var(--fs-bg, rgba(0,0,0,0.02))',
                    }}
                  >
                    <h3 style={{ margin: '0 0 6px 0', fontSize: '16px' }}>{sec.title}</h3>
                    <p style={{ margin: '0 0 10px 0', fontSize: '13px', opacity: 0.85 }}>
                      <strong>ใช้เมื่อไหร่:</strong> {sec.whenToUse}
                    </p>
                    {sec.keyPoints?.length > 0 && (
                      <ul style={{ margin: '0 0 12px 0', paddingLeft: '18px', fontSize: '13px', lineHeight: 1.6 }}>
                        {sec.keyPoints.map((pt, idx) => (
                          <li key={idx} style={{ marginBottom: '4px' }}>
                            <CheckCircle2 size={13} style={{ verticalAlign: 'middle', marginRight: '6px', color: '#087f6c' }} />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <CopyCode label={sec.title} text={sec.code} />
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}
