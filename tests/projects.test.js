import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { jsCurriculum } from '../src/data/jsCurriculum.js';

describe('JavaScript Slide Projects Automated Tests', () => {
  const { projects } = jsCurriculum;

  it('curriculum should have 4 core slide projects', () => {
    assert.strictEqual(projects.length, 4, 'Must have 4 workshop projects from slides');
  });

  it('Project 1: BMI Calculator logic and validation', () => {
    const p = projects.find((x) => x.id === 'project-bmi-calculator');
    assert.ok(p, 'BMI project must exist');

    const dom = new JSDOM(p.targetHtml, { runScripts: 'dangerously' });
    dom.window.eval(p.targetJs);

    const doc = dom.window.document;
    const wInput = doc.getElementById('weight');
    const hInput = doc.getElementById('height');
    const computeBtn = doc.getElementById('btn-compute');
    const resultBox = doc.getElementById('bmi-result');

    wInput.value = '70';
    hInput.value = '175';
    computeBtn.click();

    assert.ok(
      resultBox.textContent.includes('22.86') || resultBox.textContent.includes('22.9'),
      'BMI result for 70kg/175cm must be ~22.86'
    );
    assert.ok(
      resultBox.textContent.includes('ปกติ'),
      'Condition for BMI 22.86 must indicate normal weight'
    );

    const validResult = p.validation(doc);
    assert.strictEqual(validResult, true, 'Validation function must pass for target project');
  });

  it('Project 2: Dynamic Color Counter logic and validation', () => {
    const p = projects.find((x) => x.id === 'project-color-counter');
    assert.ok(p, 'Counter project must exist');

    const dom = new JSDOM(p.targetHtml, { runScripts: 'dangerously' });
    dom.window.eval(p.targetJs);

    const doc = dom.window.document;
    const valEl = doc.getElementById('counter-value');
    const incBtn = doc.getElementById('btn-increase');
    const decBtn = doc.getElementById('btn-decrease');
    const resetBtn = doc.getElementById('btn-reset');

    // Increase
    incBtn.click();
    assert.strictEqual(valEl.textContent, '1');
    assert.strictEqual(valEl.style.color, 'rgb(16, 185, 129)', 'Positive count must be green');

    // Decrease below 0
    decBtn.click();
    decBtn.click();
    assert.strictEqual(valEl.textContent, '-1');
    assert.strictEqual(valEl.style.color, 'rgb(239, 68, 68)', 'Negative count must be red');

    // Reset
    resetBtn.click();
    assert.strictEqual(valEl.textContent, '0');

    const validResult = p.validation(doc);
    assert.strictEqual(validResult, true, 'Validation function must pass for target project');
  });

  it('Project 3: Full Todo List logic and validation', () => {
    const p = projects.find((x) => x.id === 'project-todo-list');
    assert.ok(p, 'Todo project must exist');

    const dom = new JSDOM(p.targetHtml, { runScripts: 'dangerously' });
    dom.window.eval(p.targetJs);

    const doc = dom.window.document;
    const input = doc.getElementById('task-input');
    const addBtn = doc.getElementById('add-task-btn');
    const list = doc.getElementById('task-list');

    input.value = 'เขียนโค้ดทดสอบอัตโนมัติ';
    addBtn.click();

    const addedItem = Array.from(list.querySelectorAll('li')).find((li) =>
      li.textContent.includes('เขียนโค้ดทดสอบอัตโนมัติ')
    );
    assert.ok(addedItem, 'Newly added task must be present in DOM list');

    // Check complete toggle
    const span = addedItem.querySelector('span');
    span.click();
    assert.ok(addedItem.classList.contains('completed'), 'Clicking task must toggle completed class');

    // Check delete
    const delBtn = addedItem.querySelector('.del-btn');
    delBtn.click();
    assert.ok(
      !list.textContent.includes('เขียนโค้ดทดสอบอัตโนมัติ'),
      'Clicking delete button must remove item from DOM'
    );

    const validResult = p.validation(doc);
    assert.strictEqual(validResult, true, 'Validation function must pass for target project');
  });

  it('Project 4: Vote Storage with LocalStorage mock', () => {
    const p = projects.find((x) => x.id === 'project-vote-storage');
    assert.ok(p, 'Vote project must exist');

    const dom = new JSDOM(p.targetHtml, {
      runScripts: 'dangerously',
      url: 'http://localhost/'
    });

    dom.window.eval(p.targetJs);
    const doc = dom.window.document;
    const btnJs = doc.querySelector('.vote-btn[data-lang="js"]');
    const scoreJs = doc.getElementById('score-js');
    const clearBtn = doc.getElementById('btn-clear-votes');

    btnJs.click();
    assert.ok(Number(scoreJs.textContent) >= 1, 'Voting JS should increase its score display');
    assert.ok(dom.window.localStorage.getItem('app_votes'), 'Vote must be saved to localStorage');

    clearBtn.click();
    assert.strictEqual(scoreJs.textContent, '0', 'Clear votes should reset display to 0');

    const validResult = p.validation(doc);
    assert.strictEqual(validResult, true, 'Validation function must pass for target project');
  });
});
