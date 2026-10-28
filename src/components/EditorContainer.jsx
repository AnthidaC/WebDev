import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';
import { FileCode, Sparkles } from 'lucide-react';
import { emmetHTML, emmetCSS, emmetJSX } from 'emmet-monaco-es';

const lessonSnippets = {
  html: [
    ['html5','HTML5 document',`<!doctype html>\n<html lang="\${1:th}">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>\${2:Page title}</title>\n</head>\n<body>\n  <main>\n    \${0}\n  </main>\n</body>\n</html>`],
    ['formhtml','Accessible form',`<form action="\${1:/submit}" method="\${2:post}">\n  <label for="\${3:email}">\${4:Email}</label>\n  <input id="\${3:email}" name="\${3:email}" type="email" required />\n  <button type="submit">\${5:Send}</button>\n</form>\${0}`],
    ['navhtml','Semantic navigation',`<header>\n  <nav aria-label="Main navigation">\n    <a href="/">\${1:Home}</a>\n    <a href="/\${2:about}">\${3:About}</a>\n  </nav>\n</header>\n<main>\n  \${0}\n</main>`],
    ['tablehtml','Accessible table',`<table>\n  <caption>\${1:Items}</caption>\n  <thead><tr><th scope="col">\${2:Name}</th><th scope="col">\${3:Status}</th></tr></thead>\n  <tbody><tr><td>\${4:Example}</td><td>\${5:Ready}</td></tr></tbody>\n</table>\${0}`],
  ],
  css: [
    ['reset','CSS reset',`*, *::before, *::after { box-sizing: border-box; }\nbody { margin: 0; min-height: 100vh; }\nimg { display: block; max-width: 100%; }\nbutton, input, textarea, select { font: inherit; }\${0}`],
    ['flex','Flex layout',`.container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\${0}`],
    ['grid','Responsive grid',`.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem;\n}\${0}`],
    ['card','Card component',`.card {\n  padding: 1.25rem;\n  border: 1px solid #dfe7e2;\n  border-radius: 12px;\n  background: #fff;\n  box-shadow: 0 8px 24px rgb(25 45 35 / 10%);\n}\${0}`],
    ['media','Mobile breakpoint',`@media (max-width: 640px) {\n  .container { flex-direction: column; align-items: stretch; }\n}\${0}`],
    ['rootvars','CSS variables',`:root {\n  --color-primary: #176b55;\n  --color-surface: #edf5ef;\n  --space-md: 1rem;\n}\${0}`],
  ],
  javascript: [
    ['rfc','React component',`export default function \${1:ComponentName}() {\n  return (\n    <main>\n      \${0}\n    </main>\n  );\n}`],
    ['us','useState',`const [\${1:value}, set\${2:Value}] = useState(\${3:initialValue});\${0}`],
    ['ue','useEffect',`useEffect(() => {\n  \${0}\n}, [\${1:dependency}]);`],
    ['mapjsx','Render array in JSX',`{items.map(item => (\n  <article key={item.id}>\n    <h2>{item.name}</h2>\n  </article>\n))}\${0}`],
    ['fetchjson','Fetch JSON',`const response = await fetch(\${1:"/api/items"});\nif (!response.ok) throw new Error("Request failed");\nconst data = await response.json();\n\${0}`],
    ['trycatch','Try / catch',`try {\n  \${0}\n} catch (error) {\n  console.error(error);\n}`],
    ['expressget','Express GET route',`app.get(\${1:"/api/items"}, async (req, res, next) => {\n  try {\n    res.json(\${2:items});\n  } catch (error) {\n    next(error);\n  }\n});\${0}`],
  ],
};

function registerLessonSnippets(monaco) {
  const registry = globalThis.__lessonSnippetProviders ||= new WeakMap();
  const providers = registry.get(monaco) || new Map();
  if (!providers.has('__emmet')) {
    providers.set('__emmet', {
      dispose() {},
      disposables: [
        emmetHTML(monaco, ['html']),
        emmetCSS(monaco, ['css']),
        emmetJSX(monaco, ['javascript', 'typescript']),
      ],
    });
  }
  for (const [language, snippets] of Object.entries(lessonSnippets)) {
    providers.get(language)?.dispose();
    providers.set(language, monaco.languages.registerCompletionItemProvider(language, {
      provideCompletionItems(model, position) {
        const word = model.getWordUntilPosition(position);
        const range = { startLineNumber:position.lineNumber, endLineNumber:position.lineNumber, startColumn:word.startColumn, endColumn:word.endColumn };
        return { suggestions:snippets.map(([label,detail,insertText],index)=>({
          label, filterText:label+' '+detail, insertText,
          insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          kind:monaco.languages.CompletionItemKind.Snippet, detail, range, sortText:'9'+String(index).padStart(2,'0'),
        })) };
      },
    }));
  }
  registry.set(monaco, providers);
}

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
    registerLessonSnippets(monaco);
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
              quickSuggestions: { other: true, comments: false, strings: false },
              quickSuggestionsDelay: 100,
              suggestOnTriggerCharacters: true,
              acceptSuggestionOnEnter: 'on',
              tabCompletion: 'onlySnippets',
              snippetSuggestions: 'bottom',
              snippetsPreventQuickSuggestions: false,
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
              quickSuggestions: { other: true, comments: false, strings: false },
              quickSuggestionsDelay: 100,
              suggestOnTriggerCharacters: true,
              acceptSuggestionOnEnter: 'on',
              tabCompletion: 'onlySnippets',
              snippetSuggestions: 'bottom',
              snippetsPreventQuickSuggestions: false,
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
              quickSuggestions: { other: true, comments: false, strings: false },
              quickSuggestionsDelay: 100,
              suggestOnTriggerCharacters: true,
              acceptSuggestionOnEnter: 'on',
              tabCompletion: 'onlySnippets',
              snippetSuggestions: 'bottom',
              snippetsPreventQuickSuggestions: false,
            }}
          />
        )}
      </div>
    </div>
  );
}
