import { useId, useLayoutEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { createPortal } from 'react-dom';
import { loadSaved } from './workspace';

export default function ReadingSequence({ id, sections, children }) {
  const storageKey = 'fullstack-reading:' + id;
  const modeKey = 'fullstack-reading-continuous';
  const [continuous, setContinuous] = useState(() => {
    return loadSaved(modeKey, true);
  });
  const [toolbar, setToolbar] = useState(null);
  const [index, setIndex] = useState(() => {
    const saved = loadSaved(storageKey, 0);
    return Number.isInteger(saved) && saved >= 0 && saved < sections.length ? saved : 0;
  });
  const root = useRef(null);
  const heading = useRef(null);
  const moved = useRef(false);
  const headingId = useId();

  useLayoutEffect(() => {
    setToolbar(root.current?.closest('.fs-guide')?.querySelector('.fs-reading-toolbar') || null);
  }, []);

  function toggleContinuous() {
    const next = !continuous;
    setContinuous(next);
    try { localStorage.setItem(modeKey, JSON.stringify(next)); } catch {}
  }

  function move(next) {
    if (next < 0 || next >= sections.length) return;
    moved.current = true;
    setIndex(next);
    try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch {}
    if (continuous) {
      const targetEl = root.current?.querySelector(`#fs-sec-${next}`);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  useLayoutEffect(() => {
    if (!moved.current || continuous) return;
    moved.current = false;
    const panel = root.current?.closest('.fs-guide-content');
    if (panel) panel.scrollTop = 0;
    heading.current?.focus({ preventScroll: true });
  }, [index, continuous]);

  const navigation = (
    <nav className="fs-reading-controls" aria-label="ลำดับการอ่าน">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', gap: '8px' }}>
        <label style={{ flex: 1, minWidth: 0, margin: 0 }}>
          <span>{continuous ? 'นำทางหัวข้อ' : `ขั้นที่ ${index + 1} / ${sections.length}`}</span>
          <select
            aria-label="เลือกขั้นตอนการอ่าน"
            value={index}
            onChange={event => move(Number(event.target.value))}
          >
            {sections.map((section, position) => (
              <option key={position} value={position}>
                {position + 1}. {section.title}
              </option>
            ))}
          </select>
        </label>
        <button
          type="button"
          className="fs-secondary"
          onClick={toggleContinuous}
          title={continuous ? 'สลับเป็นอ่านทีละขั้น' : 'สลับเป็นอ่านแบบต่อเนื่องทั้งหมด'}
          style={{ whiteSpace: 'nowrap', padding: '6px 10px', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          {continuous ? <Layers size={13} /> : <BookOpen size={13} />}
          <span>{continuous ? 'อ่านต่อเนื่อง' : 'ทีละขั้น'}</span>
        </button>
      </div>
      {!continuous && (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '6px' }}>
          <button className="fs-secondary" disabled={index === 0} onClick={() => move(index - 1)}>
            <ArrowLeft size={14} /> ก่อนหน้า
          </button>
          <button className="fs-secondary" disabled={index === sections.length - 1} onClick={() => move(index + 1)}>
            ถัดไป <ArrowRight size={14} />
          </button>
        </div>
      )}
    </nav>
  );

  return (
    <section ref={root} className={`fs-reading-sequence ${continuous ? 'is-continuous' : ''}`} aria-label="อ่านบทเรียน">
      {toolbar ? createPortal(navigation, toolbar) : navigation}
      {continuous ? (
        <div className="fs-continuous-content" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {sections.map((section, idx) => (
            <article
              key={idx}
              id={`fs-sec-${idx}`}
              className="fs-reading-section"
              style={{
                borderBottom: idx < sections.length - 1 ? '1px solid var(--fs-line)' : 'none',
                paddingBottom: '20px'
              }}
            >
              <h3 style={{ margin: '0 0 14px 0', fontSize: '15px', color: 'var(--fs-accent)', fontWeight: 650 }}>
                {idx + 1}. {section.title}
              </h3>
              {children(idx)}
            </article>
          ))}
        </div>
      ) : (
        <article aria-labelledby={headingId} key={index}>
          <h3 ref={heading} id={headingId} tabIndex={-1} style={{ margin: '0 0 14px 0', fontSize: '16px' }}>
            {index + 1}. {sections[index].title}
          </h3>
          {children(index)}
        </article>
      )}
    </section>
  );
}

