import Editor, { loader } from '@monaco-editor/react';
import { useEffect, useRef, useState } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
// editor.api is intentionally used for a smaller bundle, so load the editor
// contributions that power completion UI and snippet tabstops explicitly.
import 'monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestController';
import { SnippetController2 } from 'monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetController2';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution';
// The language services below provide IntelliSense, while these basic-language
// contributions provide Monarch tokenizers (syntax colors) for CSS and HTML.
import 'monaco-editor/esm/vs/basic-languages/css/css.contribution';
import 'monaco-editor/esm/vs/basic-languages/html/html.contribution';
import 'monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution';
import 'monaco-editor/esm/vs/basic-languages/sql/sql.contribution';
import 'monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution';
import 'monaco-editor/esm/vs/language/typescript/monaco.contribution';
import 'monaco-editor/esm/vs/language/json/monaco.contribution';
import 'monaco-editor/esm/vs/language/css/monaco.contribution';
import 'monaco-editor/esm/vs/language/html/monaco.contribution';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker.js?worker';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker.js?worker';
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker.js?worker';
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker.js?worker';
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker.js?worker';
import { language } from './workspace';
import { extensionPacks, snippetGroups, htmlSnippets, getSnippets, snippetPreview, snippetUsage } from './snippets';
import { emmetHTML, emmetCSS, emmetJSX } from 'emmet-monaco-es';

self.MonacoEnvironment = { getWorker(_, label) {
  if (label === 'json') return new JsonWorker();
  if (['css', 'scss', 'less'].includes(label)) return new CssWorker();
  if (['html', 'handlebars', 'razor'].includes(label)) return new HtmlWorker();
  if (['typescript', 'javascript'].includes(label)) return new TsWorker();
  return new EditorWorker();
} };
loader.config({ monaco });

// Register Emmet extensions for HTML, CSS, and JSX/JavaScript
globalThis.__fullstackEmmetDisposables?.forEach(dispose => dispose?.());
globalThis.__fullstackEmmetDisposables = [
  emmetHTML(monaco, ['html']),
  emmetCSS(monaco, ['css']),
  emmetJSX(monaco, ['javascript', 'typescript']),
];

// Monaco's language service supplies normal, local IntelliSense (HTML tags,
// CSS properties, JS symbols). These small ambient declarations let its
// JavaScript service also understand common React/Router/Express imports in JSX.
const completionTypes = `
declare module "react" {
  export type ReactNode = any;
  export type SetStateAction<S> = S | ((previous: S) => S);
  export type Dispatch<A> = (value: A) => void;
  export interface Context<T> { Provider: any; Consumer: any; }
  export function useState<S>(initial: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  export function useEffect(effect: () => void | (() => void), dependencies?: readonly any[]): void;
  export function useContext<T>(context: Context<T>): T;
  export function createContext<T>(initial: T): Context<T>;
  export function useRef<T>(initial: T): { current: T };
  export function useMemo<T>(factory: () => T, dependencies: readonly any[]): T;
  export function useReducer<S, A>(reducer: (state: S, action: A) => S, initial: S): [S, Dispatch<A>];
  export const Fragment: any;
}
declare module "react/jsx-runtime" { export const jsx: any; export const jsxs: any; export const Fragment: any; }
declare module "react-router-dom" {
  export const BrowserRouter: any; export const Routes: any; export const Route: any;
  export const Link: any; export const NavLink: any; export const Outlet: any; export const Navigate: any;
  export function useNavigate(): (path: string, options?: any) => void;
  export function useParams<T = Record<string, string>>(): T;
  export function useLocation(): { pathname: string; search: string; hash: string; state: any };
  export function useSearchParams(): [URLSearchParams, (params: any) => void];
}
declare const process: { env: Record<string, string | undefined>; argv: string[]; cwd(): string; exit(code?: number): never; }
declare const module: { exports: any };
declare const exports: any;
declare const __dirname: string;
declare const __filename: string;
declare function require(id: "express"): typeof import("express");
declare function require(id: "node:path" | "path"): typeof import("node:path");
declare function require(id: "node:fs" | "fs"): typeof import("node:fs");
declare function require(id: "node:fs/promises" | "fs/promises"): typeof import("node:fs/promises");
declare function require(id: "axios"): typeof import("axios");
declare function require(id: string): any;
declare module "node:path" { export function join(...parts: string[]): string; export function resolve(...parts: string[]): string; export function basename(path: string): string; export function extname(path: string): string; export function dirname(path: string): string; }
declare module "path" { export * from "node:path"; }
declare module "node:fs" {
  export function readFile(path: string, options?: any, callback?: any): any;
  export function writeFile(path: string, data: any, options?: any, callback?: any): any;
  export function existsSync(path: string): boolean;
  export function mkdirSync(path: string, options?: any): void;
  export function readFileSync(path: string, options?: any): any;
  export function writeFileSync(path: string, data: any, options?: any): void;
  export const promises: { readFile(path: string, options?: any): Promise<any>; writeFile(path: string, data: any, options?: any): Promise<void>; mkdir(path: string, options?: any): Promise<void>; };
}
declare module "fs" { export * from "node:fs"; }
declare module "node:fs/promises" {
  export function readFile(path: string, options?: any): Promise<any>;
  export function writeFile(path: string, data: any, options?: any): Promise<void>;
  export function appendFile(path: string, data: any, options?: any): Promise<void>;
  export function mkdir(path: string, options?: any): Promise<void>;
  export function readdir(path: string, options?: any): Promise<string[]>;
  export function unlink(path: string): Promise<void>;
}
declare module "fs/promises" { export * from "node:fs/promises"; }
declare module "axios" {
  export interface AxiosResponse<T = any> { data: T; status: number; statusText: string; headers: Record<string, string>; }
  export interface AxiosInstance {
    get<T = any>(url: string, config?: any): Promise<AxiosResponse<T>>;
    post<T = any>(url: string, data?: any, config?: any): Promise<AxiosResponse<T>>;
    put<T = any>(url: string, data?: any, config?: any): Promise<AxiosResponse<T>>;
    patch<T = any>(url: string, data?: any, config?: any): Promise<AxiosResponse<T>>;
    delete<T = any>(url: string, config?: any): Promise<AxiosResponse<T>>;
    create(config?: any): AxiosInstance;
  }
  const axios: AxiosInstance;
  export default axios;
}
declare module "node:crypto" { export function randomUUID(): string; export function randomBytes(size: number): any; export function createHash(algorithm: string): any; }
declare module "crypto" { export * from "node:crypto"; }
declare module "jsonwebtoken" { export function sign(payload: any, secret: string, options?: any): string; export function verify(token: string, secret: string, options?: any): any; }
declare module "bcryptjs" { export function hash(value: string, rounds: number): Promise<string>; export function compare(value: string, hash: string): Promise<boolean>; }
declare module "cors" { const cors: (options?: any) => any; export default cors; }
declare module "dotenv" { export function config(options?: any): { parsed?: Record<string, string>; error?: Error }; }
declare module "express" {
  interface Request { params: Record<string,string>; query: Record<string,any>; body: any; user?: any; get(name:string): string | undefined; }
  interface Response { status(code:number): Response; json(data:any): Response; send(data:any): Response; set(name:string,value:string): Response; end(): Response; sendFile(path:string): void; }
  type NextFunction = (error?: any) => void;
  type Handler = (req:Request, res:Response, next:NextFunction) => any;
  interface Router { get(path:string,...handlers:Handler[]): Router; post(path:string,...handlers:Handler[]): Router; put(path:string,...handlers:Handler[]): Router; patch(path:string,...handlers:Handler[]): Router; delete(path:string,...handlers:Handler[]): Router; use(...handlers:Handler[]): Router; }
  interface Application extends Router { listen(port:number, callback?:()=>void): { close(callback?:()=>void): void }; }
  interface ExpressFactory { (): Application; Router(): Router; json(): Handler; urlencoded(options?:any): Handler; static(path:string): Handler; }
  const express: ExpressFactory; export = express;
}
declare namespace JSX {
  interface Element {} interface ElementChildrenAttribute { children: {}; }
  interface HTMLAttributes { id?: string; className?: string; class?: string; title?: string; role?: string; children?: any; onClick?: (event:any) => any; onChange?: (event:any) => any; value?: any; type?: string; disabled?: boolean; [attribute: string]: any; }
  interface IntrinsicElements {
    a: HTMLAttributes; abbr: HTMLAttributes; address: HTMLAttributes; area: HTMLAttributes; article: HTMLAttributes; aside: HTMLAttributes; audio: HTMLAttributes;
    b: HTMLAttributes; base: HTMLAttributes; bdi: HTMLAttributes; bdo: HTMLAttributes; blockquote: HTMLAttributes; body: HTMLAttributes; br: HTMLAttributes; button: HTMLAttributes;
    canvas: HTMLAttributes; caption: HTMLAttributes; code: HTMLAttributes; data: HTMLAttributes; datalist: HTMLAttributes; dd: HTMLAttributes; del: HTMLAttributes; details: HTMLAttributes; div: HTMLAttributes; dl: HTMLAttributes; dt: HTMLAttributes;
    em: HTMLAttributes; fieldset: HTMLAttributes; figcaption: HTMLAttributes; figure: HTMLAttributes; footer: HTMLAttributes; form: HTMLAttributes;
    h1: HTMLAttributes; h2: HTMLAttributes; h3: HTMLAttributes; h4: HTMLAttributes; h5: HTMLAttributes; h6: HTMLAttributes; head: HTMLAttributes; header: HTMLAttributes; hr: HTMLAttributes; html: HTMLAttributes;
    i: HTMLAttributes; iframe: HTMLAttributes; img: HTMLAttributes; input: HTMLAttributes; label: HTMLAttributes; legend: HTMLAttributes; li: HTMLAttributes; link: HTMLAttributes;
    main: HTMLAttributes; meta: HTMLAttributes; nav: HTMLAttributes; ol: HTMLAttributes; option: HTMLAttributes; output: HTMLAttributes; p: HTMLAttributes; picture: HTMLAttributes; pre: HTMLAttributes; script: HTMLAttributes; section: HTMLAttributes; select: HTMLAttributes; small: HTMLAttributes; span: HTMLAttributes; strong: HTMLAttributes; style: HTMLAttributes; summary: HTMLAttributes; table: HTMLAttributes; tbody: HTMLAttributes; td: HTMLAttributes; textarea: HTMLAttributes; th: HTMLAttributes; thead: HTMLAttributes; time: HTMLAttributes; title: HTMLAttributes; tr: HTMLAttributes; ul: HTMLAttributes; video: HTMLAttributes;
  }
}
`;
monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
  ...monaco.languages.typescript.javascriptDefaults.getCompilerOptions(),
  allowJs:true, allowSyntheticDefaultImports:true, esModuleInterop:true,
  jsx:monaco.languages.typescript.JsxEmit.ReactJSX,
  module:monaco.languages.typescript.ModuleKind.ESNext,
  moduleResolution:monaco.languages.typescript.ModuleResolutionKind.NodeJs,
  target:monaco.languages.typescript.ScriptTarget.ESNext,
});
globalThis.__fullstackCompletionTypes?.dispose();
globalThis.__fullstackCompletionTypes = monaco.languages.typescript.javascriptDefaults.addExtraLib(completionTypes, 'file:///node_modules/@types/fullstack-practice/index.d.ts');

// Monaco's built-in HTML language service can be lazy-loaded by the worker.
// Keep a small local tag provider as a reliable fallback for practice files.
const htmlTags = 'a abbr address area article aside audio b base bdi bdo blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd label legend li link main map mark math menu meta meter nav noscript object ol optgroup option output p picture pre progress q rp rt ruby s samp script search section select slot small source span strong style sub summary sup svg table tbody td template textarea tfoot th thead time title tr track u ul var video wbr'.split(' ');
const htmlAttributes = 'class id style title href src alt type name value placeholder role aria-label target rel action method width height data-'.split(' ');
const cssProperties = 'align-content align-items align-self animation background background-color background-image background-position background-repeat background-size border border-color border-radius border-style border-width bottom box-shadow box-sizing color column-gap cursor display fill flex flex-basis flex-direction flex-flow flex-grow flex-shrink flex-wrap float font font-family font-size font-style font-weight gap grid grid-area grid-auto-columns grid-auto-flow grid-auto-rows grid-column grid-row grid-template-areas grid-template-columns grid-template-rows height justify-content justify-items justify-self left letter-spacing line-height list-style margin margin-bottom margin-left margin-right margin-top max-height max-width min-height min-width object-fit opacity order outline overflow overflow-x overflow-y padding padding-bottom padding-left padding-right padding-top place-content place-items pointer-events position right row-gap text-align text-decoration text-overflow text-transform top transform transition user-select vertical-align visibility white-space width word-break z-index'.split(' ');
const cssValues = 'absolute auto block bold border-box center column column-reverse contain cover currentColor flex flex-end flex-start fixed grid hidden inline inline-block inherit initial italic left linear-gradient max-content min-content none normal nowrap relative repeat scroll space-around space-between space-evenly static sticky stretch transparent uppercase unset visible wrap'.split(' ');
const javascriptWords = 'async await break case catch class const continue debugger default delete do else export extends false finally for from function get if import in instanceof let new null of return set static super switch this throw true try typeof undefined var void while yield Array Boolean Date Error JSON Map Math Number Object Promise RegExp Set String Symbol WeakMap WeakSet console document fetch localStorage sessionStorage window useEffect useMemo useRef useState'.split(' ');
globalThis.__fullstackHtmlCompletionProvider?.dispose();
globalThis.__fullstackHtmlCompletionProvider = monaco.languages.registerCompletionItemProvider('html', {
  triggerCharacters: ['<', ' ', '/'],
  provideCompletionItems(model, position) {
    const word = model.getWordUntilPosition(position);
    const range = { startLineNumber:position.lineNumber, endLineNumber:position.lineNumber, startColumn:word.startColumn, endColumn:word.endColumn };
    const line = model.getLineContent(position.lineNumber).slice(0, position.column - 1);
    const closingTag = /<\/[\w-]*$/.test(line);
    const inTag = /<[^<>]*\s[^<>]*$/.test(line);
    const choices = (inTag ? htmlAttributes.map(label => [label, 'HTML attribute']) : htmlTags.map(label => [label, closingTag ? 'HTML closing element' : 'HTML element']));
    const tags = choices.map(([label, detail], index) => ({
      label, kind:inTag ? monaco.languages.CompletionItemKind.Property : monaco.languages.CompletionItemKind.Class,
      insertText:closingTag ? `${label}>` : label, detail, sortText:String(index).padStart(3,'0'), range,
    }));
    const snippets = htmlSnippets.map(([label,name,description,insertText],index)=>({
      label, filterText:`${label} ${name} ${description}`, insertText,
      insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
      kind:monaco.languages.CompletionItemKind.Snippet, detail:name, documentation:{value:description},
      range, sortText:(label === word.word ? '0' : word.word && label.startsWith(word.word) ? '1' : '9')+String(index).padStart(2,'0'),
      preselect:Boolean(word.word && label === word.word),
    }));
    return { suggestions:[...tags,...snippets] };
  },
});
const previousProviderRegistry = globalThis.__fullstackSnippetProviders;
const installedProviders = previousProviderRegistry instanceof Map ? previousProviderRegistry : new Map();
globalThis.__fullstackSnippetProviders = installedProviders;
const snippetTriggers = { javascript:['<','/','{','.'], css:[':', ';', '{'], json:['{', ':', ','], sql:[' ', '('], markdown:['#', '-', '`'], yaml:[':', '\n'], plaintext:['#', '-'] };
for (const languageId of Object.keys(snippetGroups)) {
  installedProviders.get(languageId)?.dispose();
  const provider = monaco.languages.registerCompletionItemProvider(languageId, {
    triggerCharacters: snippetTriggers[languageId] || [],
    provideCompletionItems(model, position, context) {
      const word = model.getWordUntilPosition(position);
      const range = { startLineNumber:position.lineNumber, endLineNumber:position.lineNumber, startColumn:word.startColumn, endColumn:word.endColumn };
      const line = model.getLineContent(position.lineNumber).slice(0, position.column - 1);
      // Property access should show the language service's members, rather than
      // burying app.get / res.status / process.env below unrelated snippets.
      if (languageId === 'javascript' && /[\w$)\]]\.[\w$]*$/.test(line)) return { suggestions: [] };
      const jsxClosingTag = languageId === 'javascript' && /<\/[\w-]*$/.test(line);
      const jsxTagContext = languageId === 'javascript' && (jsxClosingTag || /<[a-zA-Z]?[\w-]*$/.test(line) || context?.triggerKind === monaco.languages.CompletionTriggerKind.Invoke);
      const cssBeforeCursor = languageId === 'css' ? model.getValueInRange({ startLineNumber:1, startColumn:1, endLineNumber:position.lineNumber, endColumn:position.column }) : '';
      const openCssBlocks = (cssBeforeCursor.match(/{/g) || []).length - (cssBeforeCursor.match(/}/g) || []).length;
      const insideCssBlock = openCssBlocks > 0;
      const cssBlockContext = languageId === 'css' && (insideCssBlock || context?.triggerKind === monaco.languages.CompletionTriggerKind.Invoke);
      const cssValueContext = languageId === 'css' && insideCssBlock && /:\s*[\w-]*$/.test(line);
      const jsInvokeContext = languageId === 'javascript' && context?.triggerKind === monaco.languages.CompletionTriggerKind.Invoke;
      const relevantItems = getSnippets(model.uri.path, languageId);
      const snippets = relevantItems.map(([label,name,description,insertText],index)=>({
        label, filterText:`${label} ${name} ${description}`, insertText, insertTextRules:monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        kind:monaco.languages.CompletionItemKind.Snippet, detail:name, documentation:{value:description},
        range, sortText:(label === word.word ? '0' : word.word && label.startsWith(word.word) ? '1' : '9')+String(index).padStart(2,'0'),
        preselect:Boolean(word.word && label === word.word),
      }));
      const jsxTags = jsxTagContext ? htmlTags.map((label,index)=>({
        label, insertText:jsxClosingTag ? `${label}>` : label, kind:monaco.languages.CompletionItemKind.Class,
        detail:jsxClosingTag ? 'JSX closing element' : 'JSX element', range, sortText:String(index).padStart(3,'0'),
      })) : [];
      const cssItems = cssBlockContext ? (cssValueContext ? cssValues : cssProperties).map((label,index)=>({
        label, insertText:label, kind:cssValueContext ? monaco.languages.CompletionItemKind.Value : monaco.languages.CompletionItemKind.Property,
        detail:cssValueContext ? 'CSS value' : 'CSS property', range, sortText:String(index).padStart(3,'0'),
      })) : [];
      const jsItems = jsInvokeContext ? javascriptWords.map((label,index)=>({
        label, insertText:label, kind:monaco.languages.CompletionItemKind.Keyword,
        detail:'JavaScript / React', range, sortText:String(index).padStart(3,'0'),
      })) : [];
      return { suggestions:[...jsxTags, ...cssItems, ...jsItems, ...snippets] };
    },
  });
  installedProviders.set(languageId, provider);
}

export default function CodeEditor({ projectId, path, value, onChange, readOnly, theme, fontSize = 14, insertRef, suggestRef }) {
  const editorRef = useRef(null);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [extensionsOpen, setExtensionsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [feedback, setFeedback] = useState('');
  useEffect(() => () => {
    editorRef.current = null;
    if (insertRef) insertRef.current = null;
    if (suggestRef) suggestRef.current = null;
  }, [insertRef, suggestRef]);
  useEffect(() => { setSearch(''); setFeedback(''); }, [path]);
  const available = getSnippets(path);
  const matches = available.filter(row => row.slice(0, 3).join(' ').toLowerCase().includes(search.toLowerCase()));
  function insertSnippet(row) {
    const editor = editorRef.current;
    if (!editor || readOnly) return;
    editor.focus();
    editor.pushUndoStop();
    SnippetController2.get(editor)?.insert(row.at(-1));
    editor.pushUndoStop();
    setFeedback(`แทรก ${row[0]} แล้ว · กด Tab เลื่อนไปช่องถัดไป · Ctrl+Z ย้อนกลับ`);
  }
  function handleEditorDidMount(editor) {
    editorRef.current = editor;
    if (insertRef) insertRef.current = text => { const selection=editor.getSelection(); editor.executeEdits('css-tools',[{range:selection,text,forceMoveMarkers:true}]); editor.focus(); };
    if (suggestRef) suggestRef.current = () => { editor.focus(); editor.trigger('toolbar','editor.action.triggerSuggest',{}); };
    editor.onKeyDown(event => {
      if (event.keyCode !== monaco.KeyCode.Tab || editor.getOption(monaco.editor.EditorOption.readOnly)) return;
      const model = editor.getModel();
      const position = editor.getPosition();
      if (!model || !position) return;
      const languageId = model.getLanguageId();
      const line = model.getLineContent(position.lineNumber).slice(0, position.column - 1);
      const prefix = line.match(/(?:^|[\s({[=,;:!])([\w-]+)$/)?.[1];
      if (!prefix) return;
      const match = getSnippets(model.uri.path, languageId).find(([label]) => label === prefix);
      if (!match) return;
      event.preventDefault();
      event.stopPropagation();
      editor.setSelection(new monaco.Range(position.lineNumber, position.column - prefix.length, position.lineNumber, position.column));
      SnippetController2.get(editor)?.insert(match.at(-1));
    });
    editor.onDidChangeModelContent(() => {
      const model = editor.getModel();
      const position = editor.getPosition();
      if (!model || !position || editor.getOption(monaco.editor.EditorOption.readOnly)) return;
      const line = model.getLineContent(position.lineNumber).slice(0, position.column - 1);
      const languageId = model.getLanguageId();
      const available = getSnippets(model.uri.path, languageId);
      const word = line.match(/[\w-]+$/)?.[0];
      const isSnippetPrefix = word && available.some(([prefix]) => prefix === word);
      const startsJsxTag = languageId === 'javascript' && /<\/?[a-zA-Z-]*$/.test(line);
      const startsCssCompletion = languageId === 'css' && /[{:]$/.test(line);
      if (isSnippetPrefix || startsJsxTag || startsCssCompletion) {
        requestAnimationFrame(() => editor.trigger('typing','editor.action.triggerSuggest',{}));
      }
    });
  }
  return <div className="fs-editor-with-library"><div className="fs-snippet-toolbar"><button type="button" aria-expanded={libraryOpen} onClick={() => setLibraryOpen(open => !open)}>คลัง Snippet ({available.length})</button><button type="button" aria-expanded={extensionsOpen} onClick={() => setExtensionsOpen(open => !open)}>🧩 Extensions เสริม ({extensionPacks.length + 1})</button><span>พิมพ์คำย่อ/Emmet → Tab หรือเลือกจากคลัง</span></div>
    {extensionsOpen && <section className="fs-snippet-library" aria-label="Extensions เสริม"><p><strong>ชุดส่วนขยายที่เปิดใช้งานใน Editor นี้แล้ว (Built-in Extensions):</strong></p><div className="fs-snippet-results"><details open><summary><code>emmet-monaco-es</code> · Emmet Abbreviation (HTML / JSX / CSS)</summary><p>ย่อ HTML/JSX และ CSS แบบ VS Code เช่น พิมพ์ <code>div.card&gt;h2+p</code> หรือ <code>ul&gt;li*3</code> หรือใน CSS พิมพ์ <code>df</code>, <code>aic</code>, <code>jcsb</code>, <code>p16</code> แล้วกด <strong>Tab / Enter</strong></p></details>{extensionPacks.map(ext => <details key={ext.id}><summary><code>{ext.id}</code> · {ext.name}</summary><p>{ext.description} — พิมพ์คำย่อในโค้ดแล้วกด <strong>Tab</strong> ได้ทันที (แม้พิมพ์ต่อท้ายบรรทัด เช่น <code>return red</code> + Tab)</p></details>)}</div></section>}
    {libraryOpen && <section className="fs-snippet-library" aria-label="คลัง Snippet"><label>ค้นหา snippet สำหรับ {path}<input aria-label="ค้นหา snippet" value={search} onChange={event => setSearch(event.target.value)} placeholder="เช่น component, state, route, red, req, fsread" /></label><p>แทรกตรงเคอร์เซอร์หรือแทนข้อความที่เลือก ตัวอย่างบางอันต้อง import หรือประกาศตัวแปรตามคำอธิบายก่อน</p><div className="fs-snippet-results">{matches.map(row => <details key={row[0]}><summary><code>{row[0]}</code> · {row[1]}</summary><p>{row[2]}</p><p className="fs-snippet-usage"><strong>วางตรงไหน / เตรียมอะไร:</strong> {snippetUsage(row[0], language(path))}</p><pre>{snippetPreview(row.at(-1))}</pre><button type="button" disabled={readOnly} onClick={() => insertSnippet(row)}>แทรก {row[0]}</button></details>)}{!matches.length && <p>ไม่พบ snippet สำหรับไฟล์นี้ ลองคำอื่นหรือเลือกไฟล์ .jsx, .js, .css หรือ .html</p>}</div><p role="status">{feedback}</p></section>}
    <div className="fs-editor-surface"><Editor path={`${projectId}/${path}`} language={language(path)} value={value} onChange={text => onChange(text ?? '')}
    theme={theme === 'dark' ? 'vs-dark' : 'light'} height="100%" onMount={handleEditorDidMount}
    options={{ readOnly, fontSize, minimap: { enabled: false }, automaticLayout: true, scrollBeyondLastLine: false, tabSize: 2, wordWrap: 'on', padding: { top: 14 }, bracketPairColorization: { enabled: true }, quickSuggestions:{other:true,comments:false,strings:false}, quickSuggestionsDelay:120, suggestOnTriggerCharacters:true, acceptSuggestionOnEnter:'on', tabCompletion:'on', snippetSuggestions:'top', snippetsPreventQuickSuggestions:false, wordBasedSuggestions:'allDocuments', parameterHints:{enabled:true}, hover:{enabled:true}, suggest:{showSnippets:true,showWords:true,showFunctions:true,showMethods:true} }} /></div></div>;
}
