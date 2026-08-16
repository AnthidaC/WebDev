import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';
import { FileCode, Sparkles } from 'lucide-react';

export default function EditorContainer({ html, setHtml, css, setCss, activeTab, setActiveTab, theme, activeItem, fontSize, setFontSize }) {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  const editorTheme = theme === 'dark' ? 'vs-dark' : 'light';

  const handleAutoFillHtml = () => {
    if (activeItem && activeItem.starterHtml) {
      setHtml(activeItem.starterHtml);
    }
  };

  const handleAutoFillCss = () => {
    if (activeItem && activeItem.starterCss) {
      setCss(activeItem.starterCss);
    }
  };

  return (
    <div className="editor-panel">
      <div className="editor-tabs-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex' }}>
          <button
            onClick={() => setActiveTab('html')}
            className={`editor-tab ${activeTab === 'html' ? 'active' : ''}`}
          >
            <FileCode size={14} className="text-orange-500" />
            <span>index.html</span>
          </button>
          <button
            onClick={() => setActiveTab('css')}
            className={`editor-tab ${activeTab === 'css' ? 'active' : ''}`}
          >
            <FileCode size={14} className="text-blue-500" />
            <span>style.css</span>
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingRight: '10px' }}>
          {/* Font size adjustment */}
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-color)', borderRadius: '6px', overflow: 'hidden', height: '24px', marginRight: '4px' }}>
            <button
              onClick={() => setFontSize(Math.max(12, fontSize - 1))}
              style={{ background: 'var(--bg-primary)', border: 'none', color: 'var(--text-secondary)', width: '24px', height: '100%', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold' }}
              title="ลดขนาดตัวอักษร"
            >
              A-
            </button>
            <div style={{ padding: '0 6px', fontSize: '10px', fontWeight: '600', color: 'var(--text-muted)', borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)', background: 'var(--bg-secondary)', height: '100%', display: 'flex', alignItems: 'center' }}>
              {fontSize}px
            </div>
            <button
              onClick={() => setFontSize(Math.min(24, fontSize + 1))}
              style={{ background: 'var(--bg-primary)', border: 'none', color: 'var(--text-secondary)', width: '24px', height: '100%', cursor: 'pointer', fontSize: '11px', fontWeight: 'bold' }}
              title="เพิ่มขนาดตัวอักษร"
            >
              A+
            </button>
          </div>

          {activeTab === 'html' ? (
            <button
              onClick={handleAutoFillHtml}
              className="editor-action-btn html-btn"
              title="ใส่โครงร่าง HTML เริ่มต้นสำหรับบทนี้"
            >
              <Sparkles size={11} />
              <span>กู้คืนโครงร่าง HTML เริ่มต้น</span>
            </button>
          ) : (
            <button
              onClick={handleAutoFillCss}
              className="editor-action-btn css-btn"
              title="ใส่โค้ด CSS เริ่มต้นสำหรับบทนี้"
            >
              <Sparkles size={11} />
              <span>กู้คืนสไตล์ CSS เริ่มต้น</span>
            </button>
          )}
        </div>
      </div>

      <div className="editor-container-inner">
        {activeTab === 'html' ? (
          <Editor
            height="100%"
            language="html"
            value={html}
            onChange={(val) => setHtml(val || '')}
            theme={editorTheme}
            onMount={handleEditorDidMount}
            loading={
              <div className="editor-loading">
                <div className="spinner"></div>
                <span>กำลังโหลด HTML Editor...</span>
              </div>
            }
            options={{
              fontSize: fontSize,
              minimap: { enabled: false },
              wordWrap: 'on',
              lineNumbersMinChars: 3,
              automaticLayout: true,
              scrollBeyondLastLine: false,
              tabSize: 2,
            }}
          />
        ) : (
          <Editor
            height="100%"
            language="css"
            value={css}
            onChange={(val) => setCss(val || '')}
            theme={editorTheme}
            onMount={handleEditorDidMount}
            loading={
              <div className="editor-loading">
                <div className="spinner"></div>
                <span>กำลังโหลด CSS Editor...</span>
              </div>
            }
            options={{
              fontSize: fontSize,
              minimap: { enabled: false },
              wordWrap: 'on',
              lineNumbersMinChars: 3,
              automaticLayout: true,
              scrollBeyondLastLine: false,
              tabSize: 2,
            }}
          />
        )}
      </div>
    </div>
  );
}
