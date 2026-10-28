import { strToU8, strFromU8, zipSync, unzipSync } from 'fflate';

export function validPath(input) {
  const path = input.trim().replaceAll('\\', '/');
  if (!path || path.length > 200 || path.startsWith('/') || path.endsWith('/') || [...path].some(c => c.charCodeAt(0) < 32) || /[:*?"<>|]/.test(path)) throw new Error('ชื่อไฟล์ไม่ถูกต้อง');
  const segments = path.split('/');
  if (segments.some(s => !s || s === '.' || s === '..' || ['node_modules', '.git', '__proto__', 'constructor', 'prototype'].includes(s))) throw new Error('เส้นทางนี้ใช้ไม่ได้');
  return path;
}
export function assertFilePaths(files) {
  const paths = Object.keys(files);
  for (const path of paths) {
    validPath(path);
    if (paths.some(other => other.startsWith(path + '/'))) throw new Error('ชื่อไฟล์ชนกับโฟลเดอร์: ' + path);
    if (typeof files[path] !== 'string') throw new Error('รองรับเฉพาะไฟล์ข้อความ');
  }
  return files;
}
export function renamePath(files, from, to) {
  to = validPath(to);
  const entries = Object.entries(files);
  const moving = entries.filter(([p]) => p === from || p.startsWith(from + '/'));
  if (!moving.length) throw new Error('ไม่พบไฟล์');
  if (from === to) return files;
  const next = Object.fromEntries(entries.filter(([p]) => !moving.some(([m]) => m === p)));
  for (const [path, text] of moving) {
    const dest = to + path.slice(from.length);
    if (Object.hasOwn(next, dest)) throw new Error('มีไฟล์ชื่อนี้แล้ว');
    next[dest] = text;
  }
  return assertFilePaths(next);
}
export function toTree(files) {
  assertFilePaths(files);
  const root = Object.create(null);
  for (const [path, contents] of Object.entries(files)) {
    const parts = path.split('/'); let node = root;
    for (const part of parts.slice(0, -1)) { node[part] ??= { directory: Object.create(null) }; node = node[part].directory; }
    node[parts.at(-1)] = { file: { contents } };
  }
  return root;
}
export function projectZip(files) {
  assertFilePaths(files);
  return zipSync(Object.fromEntries(Object.entries(files).map(([path, contents]) => [path, strToU8(contents)])));
}
export function readProjectZip(buffer) {
  if (buffer.byteLength > 5 * 1024 * 1024) throw new Error('ZIP ต้องไม่เกิน 5 MB');
  let total = 0;
  const archive = unzipSync(new Uint8Array(buffer), { filter: entry => {
    if (entry.name.endsWith('/')) return false;
    validPath(entry.name);
    total += entry.originalSize;
    if (total > 10 * 1024 * 1024 || entry.originalSize > 1024 * 1024) throw new Error('ไฟล์ใน ZIP มีขนาดใหญ่เกินกำหนด');
    return true;
  } });
  const files = Object.fromEntries(Object.entries(archive).map(([path, bytes]) => [path, strFromU8(bytes)]));
  if (Object.keys(files).length > 200 || !files['package.json']) throw new Error('ต้องมี package.json และไม่เกิน 200 ไฟล์');
  JSON.parse(files['package.json']);
  return assertFilePaths(files);
}
export function loadSaved(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
export function revision(files) {
  // Stored with check results to avoid marking subsequently edited work as passed.
  return JSON.stringify(Object.entries(files).sort(([a], [b]) => a.localeCompare(b)));
}
export function language(path) {
  const extension = path.split('.').at(-1).toLowerCase();
  if (['jsx', 'js', 'cjs', 'mjs'].includes(extension)) return 'javascript';
  if (['tsx', 'ts', 'mts', 'cts'].includes(extension)) return 'typescript';
  if (['json', 'jsonc'].includes(extension)) return 'json';
  if (['css', 'scss', 'sass', 'less', 'html', 'htm', 'md', 'sql', 'yaml', 'yml'].includes(extension)) {
    return ({ scss:'css', sass:'css', less:'css', htm:'html', md:'markdown', yml:'yaml' })[extension] || extension;
  }
  return 'plaintext';
}
