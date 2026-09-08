import React, { useState, useEffect, useRef } from 'react';
import { Eye, Columns, Sliders, Sparkles, Terminal, Trash2 } from 'lucide-react';

export default function PreviewContainer({
  html = '',
  css = '',
  js = '',
  targetHtml = '',
  targetCss = '',
  targetJs = '',
  showCompare = false
}) {
  const [activePreviewTab, setActivePreviewTab] = useState('live'); // 'live', 'console', 'target', 'compare'
  const [sliderVal, setSliderVal] = useState(50); // 0 to 100
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(400);
  const [logs, setLogs] = useState([]);

  // Listen for console logs sent from inside iframe sandbox
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'CONSOLE_LOG') {
        const newLog = {
          id: Date.now() + Math.random(),
          level: event.data.level || 'log',
          text: event.data.data,
          time: new Date().toLocaleTimeString()
        };
        setLogs((prev) => [...prev.slice(-99), newLog]);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Clear logs when user explicitly changes code significantly or clears
  const handleClearLogs = () => {
    setLogs([]);
  };

  // Measure container width dynamically on compare mode load/resize
  useEffect(() => {
    if (activePreviewTab !== 'compare' || !containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activePreviewTab]);

  // If compare is hidden (e.g. in lessons), fall back to live view
  useEffect(() => {
    if (!showCompare && activePreviewTab === 'compare') {
      setActivePreviewTab('live');
    }
  }, [showCompare]);

  // Build the compiled code injection document with console spy
  const getSrcDoc = (htmlCode, cssCode, jsCode = '') => {
    const consoleSpyScript = `
      <script>
        (function() {
          const _log = console.log;
          const _warn = console.warn;
          const _error = console.error;
          const _info = console.info;

          function sendToParent(type, args) {
            try {
              const messages = Array.from(args).map(function(arg) {
                if (arg === null) return "null";
                if (arg === undefined) return "undefined";
                if (typeof arg === "object") {
                  try { return JSON.stringify(arg, null, 2); } catch (e) { return String(arg); }
                }
                return String(arg);
              });
              window.parent.postMessage({ type: 'CONSOLE_LOG', level: type, data: messages.join(' ') }, '*');
            } catch (e) {}
          }

          console.log = function() { _log.apply(console, arguments); sendToParent('log', arguments); };
          console.warn = function() { _warn.apply(console, arguments); sendToParent('warn', arguments); };
          console.error = function() { _error.apply(console, arguments); sendToParent('error', arguments); };
          console.info = function() { _info.apply(console, arguments); sendToParent('info', arguments); };

          window.addEventListener('error', function(e) {
            sendToParent('error', [e.message + ' (บรรทัด ' + e.lineno + ')']);
          });
        })();
      </script>
    `;

    const userScript = `
      <script>
        try {
          ${jsCode}
        } catch(err) {
          console.error(err.name + ": " + err.message);
        }
      </script>
    `;

    // If htmlCode is already a full document
    if (htmlCode.includes('<!DOCTYPE html>') || htmlCode.includes('<html')) {
      const injectionStyles = `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Sarabun:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', 'Sarabun', sans-serif;
            box-sizing: border-box;
          }
          ${cssCode}
        </style>
        ${consoleSpyScript}
      `;
      let output = htmlCode;
      if (output.includes('</head>')) {
        output = output.replace('</head>', `${injectionStyles}</head>`);
      } else {
        output = injectionStyles + output;
      }

      if (output.includes('</body>')) {
        output = output.replace('</body>', `${userScript}</body>`);
      } else {
        output = output + userScript;
      }
      return output;
    }

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Sarabun:wght@300;400;500;600;700&display=swap" rel="stylesheet">
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: 'Inter', 'Sarabun', sans-serif;
              box-sizing: border-box;
            }
            ${cssCode}
          </style>
          ${consoleSpyScript}
        </head>
        <body>
          ${htmlCode}
          ${userScript}
        </body>
      </html>
    `;
  };

  const liveSrcDoc = getSrcDoc(html, css, js);
  const targetSrcDoc = getSrcDoc(targetHtml || '', targetCss || '', targetJs || '');

  return (
    <div className="preview-panel">
      <div className="preview-tabs-container">
        <div className="tabs-group">
          <button
            onClick={() => setActivePreviewTab('live')}
            className={`preview-tab ${activePreviewTab === 'live' ? 'active' : ''}`}
          >
            <Eye size={14} />
            <span>ผลลัพธ์ของฉัน (Live Preview)</span>
          </button>

          <button
            onClick={() => setActivePreviewTab('console')}
            className={`preview-tab ${activePreviewTab === 'console' ? 'active' : ''}`}
          >
            <Terminal size={14} />
            <span>คอนโซล (Console)</span>
            {logs.length > 0 && (
              <span className="log-count-badge">{logs.length}</span>
            )}
          </button>

          {showCompare && (
            <button
              onClick={() => setActivePreviewTab('target')}
              className={`preview-tab ${activePreviewTab === 'target' ? 'active' : ''}`}
            >
              <Sparkles size={14} className="text-yellow-500" />
              <span>ตัวโชว์เฉลยต้นแบบ (Demo Preview)</span>
            </button>
          )}
          
          {showCompare && (
            <button
              onClick={() => setActivePreviewTab('compare')}
              className={`preview-tab ${activePreviewTab === 'compare' ? 'active' : ''}`}
            >
              <Columns size={14} />
              <span>เปรียบเทียบผลลัพธ์ (Compare Match)</span>
            </button>
          )}
        </div>

        {activePreviewTab === 'compare' && (
          <div className="slider-control-bar">
            <Sliders size={12} />
            <span>ปรับสไลเดอร์: {sliderVal}%</span>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderVal}
              onChange={(e) => setSliderVal(Number(e.target.value))}
              className="range-slider"
            />
          </div>
        )}

        {activePreviewTab === 'console' && (
          <button
            onClick={handleClearLogs}
            className="clear-console-btn"
            title="ล้างข้อความในคอนโซล"
          >
            <Trash2 size={12} />
            <span>ล้างคอนโซล</span>
          </button>
        )}
      </div>

      <div className="preview-body">
        {activePreviewTab === 'live' && (
          <iframe
            title="Live Preview"
            srcDoc={liveSrcDoc}
            className="preview-iframe"
            sandbox="allow-scripts allow-same-origin allow-modals allow-forms"
          />
        )}

        {activePreviewTab === 'console' && (
          <div className="console-panel-inner">
            {logs.length === 0 ? (
              <div className="console-empty">
                <Terminal size={32} style={{ opacity: 0.3, marginBottom: '8px' }} />
                <p>ยังไม่มีข้อความส่งออกทาง Console</p>
                <span style={{ fontSize: '12px', opacity: 0.6 }}>
                  ลองใช้คำสั่ง <code>console.log(...)</code> ในไฟล์ script.js แล้วดูผลลัพธ์ที่นี่
                </span>
              </div>
            ) : (
              <div className="console-logs-list">
                {logs.map((log) => (
                  <div key={log.id} className={`console-log-row ${log.level}`}>
                    <span className="log-time">[{log.time}]</span>
                    <span className={`log-level-badge ${log.level}`}>{log.level.toUpperCase()}</span>
                    <pre className="log-text">{log.text}</pre>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activePreviewTab === 'target' && (
          <iframe
            title="Target Preview Demo"
            srcDoc={targetSrcDoc}
            className="preview-iframe"
            sandbox="allow-scripts allow-same-origin allow-modals allow-forms"
          />
        )}

        {activePreviewTab === 'compare' && (
          <div ref={containerRef} className="visual-match-wrapper">
            {/* Target Output Frame (Background) */}
            <div className="target-frame-wrapper">
              <iframe
                title="Target Preview"
                srcDoc={targetSrcDoc}
                className="preview-iframe"
                sandbox="allow-scripts allow-same-origin allow-modals allow-forms"
              />
              <div className="preview-watermark target">เฉลยต้นแบบ (Target)</div>
            </div>

            {/* Live User Frame (Foreground clipped by width) */}
            <div
              className="live-frame-wrapper"
              style={{ width: `${sliderVal}%` }}
            >
              <div style={{ width: `${containerWidth}px`, height: '100%' }}>
                <iframe
                  title="Live Preview Overlap"
                  srcDoc={liveSrcDoc}
                  className="preview-iframe"
                  sandbox="allow-scripts allow-same-origin allow-modals allow-forms"
                />
              </div>
              <div className="preview-watermark live">โค้ดของคุณ (Your UI)</div>
            </div>

            {/* Split Drag Line */}
            <div
              className="slider-separator-handle"
              style={{ left: `${sliderVal}%` }}
            >
              <div className="slider-handle-button">&lt;&gt;</div>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={sliderVal}
              onChange={(e) => setSliderVal(Number(e.target.value))}
              className="diff-input-overlay"
            />
          </div>
        )}
      </div>
    </div>
  );
}
