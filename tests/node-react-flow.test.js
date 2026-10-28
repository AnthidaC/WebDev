import test from 'node:test';
import assert from 'node:assert/strict';
import { fullstackCurriculum, coursePhases } from '../src/fullstack/curriculum.js';
import { learningGuides, learningWhy } from '../src/fullstack/learningGuides.js';
import { lessonNarratives } from '../src/fullstack/lessonNarratives.js';
import { migrateSlideFiles } from '../src/fullstack/slideFileMigration.js';

test('Node + React course moves from foundations to integration, projects and exams', () => {
  const chapters = [...new Set(fullstackCurriculum.map(item => item.chapter))];
  assert.deepEqual(chapters, ['1 · Node', '2 · React', '3 · Full Stack']);
  assert.deepEqual(fullstackCurriculum.slice(0, 8).map(item => item.id), ['guided-0','fs-01','fs-02','fs-03','fs-04','guided-1','fs-05','lab-restaurant']);
  assert.deepEqual(coursePhases.map(phase => phase.id), ['node','react','full']);
  assert.equal(fullstackCurriculum.find(item => item.id === 'fs-00').phase, 'react');
  assert.ok(fullstackCurriculum.indexOf(fullstackCurriculum.find(item => item.id === 'fs-11')) < fullstackCurriculum.indexOf(fullstackCurriculum.find(item => item.id === 'fs-09')));
  for (const project of fullstackCurriculum.filter(item => item.id.startsWith('guided-'))) {
    assert.equal(fullstackCurriculum.indexOf(project), fullstackCurriculum.findIndex(item => item.id === project.connectsTo.lessonId) + 1, `${project.id} follows the lesson that prepares it`);
    assert.ok(project.connectsTo.title, `${project.id} names its related lesson`);
  }
  assert.deepEqual(fullstackCurriculum.filter(item => item.kind === 'exam').map(item => item.chapter), Array(5).fill('3 · Full Stack'));
});

test('every lesson has a concrete reasoning path, exercise bridge and self explanation', () => {
  for (const item of fullstackCurriculum.filter(item => item.kind === 'lesson')) {
    const narrative = lessonNarratives[item.id];
    assert.ok(narrative, item.id);
    assert.ok(narrative.blocks.length >= 3, item.id);
    for (const block of narrative.blocks) {
      assert.ok(block.code && block.explanation.length > 80, item.id + ': ' + block.title);
      if (block.path) assert.ok(Object.hasOwn(item.starter, block.path), item.id + ' points to an existing exercise file: ' + block.path);
    }
    assert.ok(narrative.bridge && narrative.question && narrative.answer, item.id);
    for (const files of [item.starter, item.solution]) {
      assert.ok(!Object.keys(files).some(path => path.endsWith('.cjs')), item.id + ' uses slide .js file types');
      assert.equal(JSON.parse(files['backend/package.json']).type, 'commonjs');
    }
  }
});

test('legacy file migration keeps learner code, updates references and invalidates old checks', () => {
  const saved = { files: { 'backend/app.cjs': 'module.exports = { learner: "my work" };', 'package.json': '{"scripts":{"dev":"node backend/app.cjs"}}' }, check: { code: 0 }, reviewed: [1] };
  const migrated = migrateSlideFiles(saved, { 'backend/package.json': '{"type":"commonjs"}' });
  assert.equal(migrated.files['backend/app.js'], saved.files['backend/app.cjs']);
  assert.match(migrated.files['package.json'], /backend\/app\.js/);
  assert.equal(migrated.check, null);
  assert.deepEqual(migrated.reviewed, [1]);
  assert.ok(saved.files['backend/app.cjs']);
  const collision = { files: { 'backend/app.cjs': 'old', 'backend/app.js': 'new' } };
  assert.deepEqual(migrateSlideFiles(collision, {}).files, collision.files);
});

test('first Node + React lesson has a just-enough HTML/CSS/JS bridge', () => {
  const guide = learningGuides['fs-00'];
  assert.match(guide.before, /ไม่ต้องแม่น/);
  for (const topic of ['JSX', 'className', 'CSS', 'const', 'array', 'object']) {
    assert.ok(guide.terms.some(term => term.toLowerCase().includes(topic.toLowerCase())) || guide.explain.some(text => text.toLowerCase().includes(topic.toLowerCase())), `the quick bridge mentions ${topic}`);
  }
});

test('every Node + React lesson tells the learner why the concept is useful', () => {
  const lessons = fullstackCurriculum.filter(item => /^fs-\d+$/.test(item.id));
  assert.equal(Object.keys(learningWhy).length, lessons.length);
  for (const lesson of lessons) {
    assert.ok(learningWhy[lesson.id].length > 30, `${lesson.id} explains the practical reason to learn it`);
    assert.ok(learningGuides[lesson.id], `${lesson.id} includes how-to guidance`);
  }
});
