import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { jsCurriculum } from '../src/data/jsCurriculum.js';

describe('JavaScript Lessons Validation Auto-Tests', () => {
  const { lessons } = jsCurriculum;

  it('curriculum should have all 18 structured lessons', () => {
    assert.strictEqual(lessons.length, 18, 'Should contain exactly 18 lessons across 3 chapters');
  });

  lessons.forEach((lesson) => {
    describe(`Lesson: ${lesson.title} (${lesson.id})`, () => {
      it('should have required metadata, descriptions, and starter code', () => {
        assert.ok(lesson.id, 'Lesson must have an id');
        assert.ok(lesson.title, 'Lesson must have a title');
        assert.ok(lesson.category, 'Lesson must have a category');
        assert.ok(lesson.description, 'Lesson must have description');
        assert.ok(typeof lesson.validation === 'function', 'Lesson must have validation function');
        assert.ok(Array.isArray(lesson.hints) && lesson.hints.length > 0, 'Lesson must have hints');
      });

      it('target code must successfully pass validation (Assertion: result === true)', () => {
        const dom = new JSDOM(lesson.targetHtml || '<!DOCTYPE html><html><body></body></html>', {
          runScripts: 'dangerously'
        });
        const doc = dom.window.document;

        // Run target JavaScript in DOM context if safe
        try {
          if (lesson.targetJs) {
            dom.window.eval(lesson.targetJs);
          }
        } catch (e) {
          // Expected if certain browser-only APIs are invoked
        }

        const result = lesson.validation(doc, lesson.targetCss || '', lesson.targetJs || '');
        assert.strictEqual(
          result,
          true,
          `Target code failed validation for ${lesson.id}: ${result}`
        );
      });

      it('empty starter code must fail validation and provide helpful feedback', () => {
        const dom = new JSDOM(lesson.starterHtml || '<!DOCTYPE html><html><body></body></html>');
        const doc = dom.window.document;

        const result = lesson.validation(doc, lesson.starterCss || '', '');
        assert.notStrictEqual(
          result,
          true,
          `Empty starter code should NOT pass validation for ${lesson.id}`
        );
        assert.ok(
          typeof result === 'string' && result.trim().length > 0,
          `Validation failure must return helpful string message for ${lesson.id}`
        );
      });
    });
  });
});
