import React, { useState, useEffect, useRef } from 'react';
import { Eye, Columns, Sliders, Sparkles } from 'lucide-react';

export default function PreviewContainer({ html, css, targetHtml, targetCss, showCompare }) {
  const [activePreviewTab, setActivePreviewTab] = useState('live'); // 'live' or 'compare'
  const [sliderVal, setSliderVal] = useState(50); // 0 to 100
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(400);

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
    if (!showCompare) {
      setActivePreviewTab('live');
    }
  }, [showCompare]);

  // Build the compiled code injection document
  const getSrcDoc = (htmlCode, cssCode) => {
    // If htmlCode is already a full document, inject reset fonts and student css directly into <head>
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
      `;
      if (htmlCode.includes('</head>')) {
        return htmlCode.replace('</head>', `${injectionStyles}</head>`);
      } else {
        return htmlCode + injectionStyles;
      }
    }

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Sarabun:wght@300;400;500;600;700&display=swap" rel="stylesheet">
          <style>
            /* CSS reset custom to make sandbox robust */
            body {
              margin: 0;
              padding: 0;
              font-family: 'Inter', 'Sarabun', sans-serif;
              box-sizing: border-box;
            }
            ${cssCode}
          </style>
        </head>
        <body>
          ${htmlCode}
        </body>
      </html>
    `;
  };

  const liveSrcDoc = getSrcDoc(html, css);
  const targetSrcDoc = getSrcDoc(targetHtml || '', targetCss || '');

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
      </div>

      <div className="preview-body">
        {activePreviewTab === 'live' && (
          <iframe
            title="Live Preview"
            srcDoc={liveSrcDoc}
            className="preview-iframe"
            sandbox="allow-scripts allow-same-origin"
          />
        )}

        {activePreviewTab === 'target' && (
          <iframe
            title="Target Preview Demo"
            srcDoc={targetSrcDoc}
            className="preview-iframe"
            sandbox="allow-scripts allow-same-origin"
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
                sandbox="allow-scripts allow-same-origin"
              />
              <div className="preview-watermark target">เฉลยต้นแบบ (Target)</div>
            </div>

            {/* Live User Frame (Foreground clipped by width) */}
            <div
              className="live-frame-wrapper"
              style={{ width: `${sliderVal}%` }}
            >
              {/* Force identical sizing for perfect alignment overlap */}
              <div style={{ width: `${containerWidth}px`, height: '100%' }}>
                <iframe
                  title="Live Preview Overlap"
                  srcDoc={liveSrcDoc}
                  className="preview-iframe"
                  sandbox="allow-scripts allow-same-origin"
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

            {/* Invisible Range Overlay to capture mouse dragging smoothly */}
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
