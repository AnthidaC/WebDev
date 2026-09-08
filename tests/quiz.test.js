import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { jsCurriculum } from '../src/data/jsCurriculum.js';

describe('JavaScript Quiz Bank Automated Tests', () => {
  const { quizBank } = jsCurriculum;

  it('quizBank should contain at least 15 comprehensive questions', () => {
    assert.ok(Array.isArray(quizBank), 'quizBank must be an array');
    assert.ok(quizBank.length >= 15, `Expected >= 15 questions, got ${quizBank.length}`);
  });

  it('every quiz question must have valid structure and fields', () => {
    quizBank.forEach((q, idx) => {
      assert.ok(q.id, `Question at index ${idx} missing id`);
      assert.ok(q.question && q.question.trim().length > 5, `Question ${q.id} missing question text`);
      assert.ok(Array.isArray(q.options) && q.options.length >= 2, `Question ${q.id} must have at least 2 options`);
      assert.ok(typeof q.correctIndex === 'number', `Question ${q.id} correctIndex must be a number`);
      assert.ok(
        q.correctIndex >= 0 && q.correctIndex < q.options.length,
        `Question ${q.id} correctIndex ${q.correctIndex} out of bounds (options: ${q.options.length})`
      );
      assert.ok(
        q.explanation && q.explanation.trim().length > 10,
        `Question ${q.id} must have a detailed Thai explanation`
      );
      assert.ok([1, 2, 3, 4].includes(q.chapter), `Question ${q.id} chapter must be 1, 2, 3, or 4`);
    });
  });

  it('no question should have duplicate choice options', () => {
    quizBank.forEach((q) => {
      const uniqueOptions = new Set(q.options.map((opt) => opt.trim()));
      assert.strictEqual(
        uniqueOptions.size,
        q.options.length,
        `Question ${q.id} has duplicate choices`
      );
    });
  });

  it('all 4 quiz chapters (including bonus real-world JS) must be well represented', () => {
    const ch1 = quizBank.filter((q) => q.chapter === 1);
    const ch2 = quizBank.filter((q) => q.chapter === 2);
    const ch3 = quizBank.filter((q) => q.chapter === 3);
    const ch4 = quizBank.filter((q) => q.chapter === 4);

    assert.ok(ch1.length >= 4, `Chapter 1 must have >= 4 questions, got ${ch1.length}`);
    assert.ok(ch2.length >= 4, `Chapter 2 must have >= 4 questions, got ${ch2.length}`);
    assert.ok(ch3.length >= 4, `Chapter 3 must have >= 4 questions, got ${ch3.length}`);
    assert.ok(ch4.length >= 8, `Chapter 4 (Bonus Modern JS) must have >= 8 questions, got ${ch4.length}`);
  });
});
