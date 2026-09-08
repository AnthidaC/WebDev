import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';
import { FileCode, Sparkles } from 'lucide-react';

export default function EditorContainer({
  html,
  setHtml,
  css,
  setCss,
  js = '',
  setJs = () => {},
  activeTab,
  setActiveTab,
  theme,
  activeItem,
  fontSize,
  setFontSize
}) {
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

  const handleAutoFillJs = () => {
    if (activeItem && activeItem.starterJs !== undefined) {
      setJs(activeItem.starterJs);
    }
  };

  const handleLoadSolution = () => {
    if (!activeItem) return;
    if (activeItem.targetHtml) setHtml(activeItem.targetHtml);
    if (activeItem.targetCss) setCss(activeItem.targetCss);
    if (activeItem.targetJs !== undefined) setJs(activeItem.targetJs);
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

          <button
            onClick={() => setActiveTab('js')}
            className={`editor-tab ${activeTab === 'js' ? 'active' : ''}`}
            style={activeTab === 'js' ? { borderBottomColor: '#eab308' } : {}}
          >
            <FileCode size={14} style={{ color: '#eab308' }} />
            <span>script.js</span>
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

          {activeTab === 'html' && (
            <button
              onClick={handleAutoFillHtml}
              className="editor-action-btn html-btn"
              title="ใส่โครงร่าง HTML เริ่มต้นสำหรับบทนี้"
            >
              <Sparkles size={11} />
              <span>กู้คืน HTML เริ่มต้น</span>
            </button>
          )}

          {activeTab === 'css' && (
            <button
              onClick={handleAutoFillCss}
              className="editor-action-btn css-btn"
              title="ใส่โค้ด CSS เริ่มต้นสำหรับบทนี้"
            >
              <Sparkles size={11} />
              <span>กู้คืน CSS เริ่มต้น</span>
            </button>
          )}

          {activeTab === 'js' && (
            <button
              onClick={handleAutoFillJs}
              className="editor-action-btn"
              style={{ background: 'rgba(234, 179, 8, 0.1)', color: '#ca8a04', borderColor: 'rgba(234, 179, 8, 0.3)' }}
              title="ใส่โค้ด JavaScript เริ่มต้นสำหรับบทนี้"
            >
              <Sparkles size={11} />
              <span>กู้คืน JS เริ่มต้น</span>
            </button>
          )}

          {activeItem && activeItem.targetHtml && (
            <button
              onClick={handleLoadSolution}
              className="editor-action-btn"
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.2))',
                color: '#059669',
                borderColor: 'rgba(16, 185, 129, 0.4)',
                fontWeight: '600'
              }}
              title="โหลดโค้ดตัวอย่างที่ทำงานสมบูรณ์ 100% เข้ามาใน Editor ทั้ง 3 แท็บ เพื่อทดลองใช้งานและดูการทำงานจริง"
            >
              <Sparkles size={11} className="text-emerald-500" />
              <span>โหลดตัวอย่างที่ทำงานจริง</span>
            </button>
          )}
        </div>
      </div>

      <div className="editor-container-inner">
        {activeTab === 'html' && (
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
        )}

        {activeTab === 'css' && (
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

        {activeTab === 'js' && (
          <Editor
            height="100%"
            language="javascript"
            value={js}
            onChange={(val) => setJs(val || '')}
            theme={editorTheme}
            onMount={handleEditorDidMount}
            loading={
              <div className="editor-loading">
                <div className="spinner"></div>
                <span>กำลังโหลด JavaScript Editor...</span>
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
