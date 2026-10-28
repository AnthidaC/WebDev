import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fullstackCurriculum, lessons, workshops, exams } from '../src/fullstack/curriculum.js';
import { toTree, validPath, renamePath, projectZip, readProjectZip, revision } from '../src/fullstack/workspace.js';

test('every activity has a runnable package, instructions, tests and reference', () => {
  assert.equal(lessons.length, 18); assert.equal(workshops.length, 12); assert.equal(exams.length, 6);
  assert.equal(new Set(fullstackCurriculum.map(p => p.id)).size, fullstackCurriculum.length);
  for (const item of fullstackCurriculum) {
    assert.ok(item.source && item.steps.length && item.paragraphs.length && item.manual.length, item.id);
    for (const files of [item.starter, item.solution]) {
      const pkg = JSON.parse(files['package.json']);
      assert.ok(pkg.scripts.dev && pkg.scripts.test, item.id);
      assert.ok(files['tests/goal.test.jsx'], item.id);
      assert.doesNotThrow(() => toTree(files), item.id);
    }
    assert.notEqual(revision(item.starter), revision(item.solution), item.id + ' must contain work to do');
  }
});
test('ZIP round trip preserves nested Unicode files and protects paths', () => {
  const files = { 'package.json': '{}', 'frontend/pages/ชื่อ.jsx': 'export default "สวัสดี";', '.env.example': 'PORT=3000' };
  assert.deepEqual(readProjectZip(projectZip(files)), files);
  for (const path of ['../outside', '/root', 'a/../../x', 'a//b', 'node_modules/x', '__proto__/x', 'C:/x', 'a\u0000b']) assert.throws(() => validPath(path));
  assert.throws(() => toTree({ a: '', 'a/b': '' }));
});
test('rename cannot overwrite files, collide with folders or escape the project', () => {
  const files = { 'src/a.jsx': 'A', 'src/b.jsx': 'B' };
  assert.deepEqual(renamePath(files, 'src/a.jsx', 'pages/Home.jsx'), { 'src/b.jsx': 'B', 'pages/Home.jsx': 'A' });
  assert.throws(() => renamePath(files, 'src/a.jsx', 'src/b.jsx'));
  assert.throws(() => renamePath(files, 'src/a.jsx', '../x'));
  assert.equal(revision(files), revision({ 'src/b.jsx': 'B', 'src/a.jsx': 'A' }));
  assert.notEqual(revision(files), revision({ ...files, 'src/a.jsx': 'changed' }));
});
