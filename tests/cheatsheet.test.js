import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { jsCheatSheetData } from '../src/data/jsCheatSheetData.js';

describe('JavaScript Cheat Sheet Automated Tests', () => {
  it('cheat sheet should contain multiple structured categories', () => {
    assert.ok(Array.isArray(jsCheatSheetData), 'CheatSheet must be an array');
    assert.ok(jsCheatSheetData.length >= 4, 'Must have at least 4 categories');
  });

  it('every category must contain valid items with code and notes', () => {
    jsCheatSheetData.forEach((cat) => {
      assert.ok(cat.category && cat.category.length > 0, 'Category name must exist');
      assert.ok(Array.isArray(cat.items) && cat.items.length > 0, 'Category must have items');

      cat.items.forEach((item) => {
        assert.ok(item.title, 'Item must have a title');
        assert.ok(item.code && item.code.trim().length > 0, 'Item must have code snippet');
        assert.ok(item.note && item.note.trim().length > 0, 'Item must have explanatory note');
      });
    });
  });
});
