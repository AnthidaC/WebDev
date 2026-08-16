import React, { useState, useEffect } from 'react';
import { Lightbulb, CheckCircle2, XCircle, ChevronDown, ChevronUp, Play, Trophy } from 'lucide-react';

export default function InstructionPanel({ activeItem, onVerify, validationError, isSuccess, isChallenge }) {
  const [showHints, setShowHints] = useState(false);

  // Close hints when item changes
  useEffect(() => {
    setShowHints(false);
  }, [activeItem.id]);

  const renderMarkdown = (text) => {
    const lines = text.split('\n');
    const elements = [];
    let inList = false;
    let listItems = [];

    const flushList = (key) => {
      if (listItems.length > 0) {
        const isNumbered = listItems[0].isNumbered;
        const Tag = isNumbered ? 'ol' : 'ul';
        elements.push(
          <Tag key={`list-${key}`} style={{ paddingLeft: '20px', marginBottom: '16px', listStylePosition: 'outside' }}>
            {listItems.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '6px' }} dangerouslySetInnerHTML={{ __html: item.text }} />
            ))}
          </Tag>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      
      // Check if empty line
      if (!trimmed) {
        flushList(idx);
        return;
      }

      // Check if bullet point (requires a space after indicator)
      if (trimmed.startsWith('- ') || (trimmed.startsWith('* ') && !trimmed.startsWith('** '))) {
        inList = true;
        const content = trimmed.replace(/^[-*]\s*/, '');
        listItems.push({ text: formatInlineCode(content), isNumbered: false });
        return;
      }

      // Check if numbered point (requires space after number and dot)
      if (/^\d+\.\s+/.test(trimmed)) {
        inList = true;
        const content = trimmed.replace(/^\d+\.\s*/, '');
        listItems.push({ text: formatInlineCode(content), isNumbered: true });
        return;
      }

      // If we were in a list and hit a normal line, flush the list first
      if (inList) {
        flushList(idx);
      }

      // Check if bold/header-like line
      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        const content = trimmed.slice(2, -2);
        elements.push(
          <h4 key={idx} style={{ margin: '16px 0 8px 0', color: 'var(--text-primary)', fontWeight: '700', fontSize: '14.5px' }}>
            {content}
          </h4>
        );
        return;
      }

      // Default paragraph
      elements.push(
        <p key={idx} style={{ marginBottom: '12px' }} dangerouslySetInnerHTML={{ __html: formatInlineCode(line) }} />
      );
    });

    // Flush any remaining list
    flushList('final');

    return elements;
  };

  return (
    <div className="instruction-panel">
      <div className="instruction-header">
        <h2>{activeItem.title}</h2>
        {isChallenge && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Trophy size={16} className="text-yellow-500" />
            <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-secondary)' }}>
              +{activeItem.points} คะแนน
            </span>
          </div>
        )}
      </div>

      <div className="instruction-content">
        {renderMarkdown(activeItem.description)}

        {/* Validation Feedback Box */}
        <div className="validation-box">
          <div className="validation-title">ตรวจสอบความถูกต้อง</div>
          
          {isSuccess ? (
            <div className="validation-item success">
              <CheckCircle2 size={16} style={{ flexShrink: 0 }} />
              <span>ยอดเยี่ยมมาก! โค้ดของคุณถูกต้องตรงตามข้อกำหนดเรียบร้อยแล้ว</span>
            </div>
          ) : validationError ? (
            <div className="validation-item" style={{ color: 'var(--danger-color)' }}>
              <XCircle size={16} style={{ flexShrink: 0 }} />
              <span>{validationError}</span>
            </div>
          ) : (
            <div className="validation-item pending">
              <CheckCircle2 size={16} style={{ flexShrink: 0 }} />
              <span>เขียนโค้ดและคลิกปุ่ม "ตรวจคำตอบ" ด้านล่างเพื่อส่งผลงาน</span>
            </div>
          )}

          <button onClick={onVerify} className="verify-btn">
            <Play size={14} fill="white" />
            <span>ตรวจคำตอบ</span>
          </button>
        </div>

        {/* Hints Section */}
        {activeItem.hints && activeItem.hints.length > 0 && (
          <div className="hint-toggle-bar">
            <button onClick={() => setShowHints(!showHints)} className="hint-trigger">
              <Lightbulb size={16} className="text-yellow-500" />
              <span>{showHints ? 'ซ่อนคำแนะนำ' : 'แสดงคำแนะนำ'}</span>
              {showHints ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            {showHints && (
              <ul className="hints-list">
                {activeItem.hints.map((hint, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: formatInlineCode(hint) }} />
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Escapes raw HTML entities to prevent rendering tags in markdown text
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Helper to highlight markdown-like formatting in descriptions
function formatInlineCode(text) {
  const escaped = escapeHtml(text);
  const codeRegex = /`([^`]+)`/g;
  const boldRegex = /\*\*(.*?)\*\*/g;
  const italicRegex = /\*([^*]+)\*/g;
  return escaped
    .replace(codeRegex, '<code>$1</code>')
    .replace(boldRegex, '<strong>$1</strong>')
    .replace(italicRegex, '<em>$1</em>');
}
