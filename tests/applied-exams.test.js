import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { jsCurriculum } from '../src/data/jsCurriculum.js';

describe('Applied Full-Stack Practical Exams Automated Tests', () => {
  const { appliedExams } = jsCurriculum;

  it('curriculum should have 12 applied practical exams (diversified APIs & Games)', () => {
    assert.ok(Array.isArray(appliedExams), 'appliedExams array must exist in jsCurriculum');
    assert.strictEqual(appliedExams.length, 12, 'Must have 12 applied full-stack practical exams');
  });

  it('all applied exams should have complete full-stack assets and schemas', () => {
    appliedExams.forEach((exam) => {
      assert.ok(exam.id, `Exam must have id`);
      assert.ok(exam.title, `${exam.id} must have title`);
      assert.ok(exam.description, `${exam.id} must have description`);
      assert.ok(exam.difficulty, `${exam.id} must have difficulty`);
      assert.ok(exam.starterHtml, `${exam.id} must have starterHtml`);
      assert.ok(exam.starterCss, `${exam.id} must have starterCss`);
      assert.ok(exam.starterJs, `${exam.id} must have starterJs`);
      assert.ok(exam.targetHtml, `${exam.id} must have targetHtml`);
      assert.ok(exam.targetCss, `${exam.id} must have targetCss`);
      assert.ok(exam.targetJs, `${exam.id} must have targetJs`);
      assert.strictEqual(typeof exam.validation, 'function', `${exam.id} validation must be a function`);
      assert.ok(Array.isArray(exam.hints), `${exam.id} hints must be an array`);
      assert.ok(exam.xp > 0, `${exam.id} must reward XP points`);
    });
  });

  it('Exam 1: E-Commerce Cart & Discount Coupon Calculation', () => {
    const exam = appliedExams.find((e) => e.id === 'exam-ecommerce-cart');
    assert.ok(exam, 'E-Commerce exam must exist');

    const dom = new JSDOM(exam.targetHtml, { runScripts: 'dangerously' });
    dom.window.eval(exam.targetJs);

    const doc = dom.window.document;
    const items = doc.querySelectorAll('.cart-item');
    assert.ok(items.length >= 2, 'Must have at least 2 cart items');

    const subtotalEl = doc.getElementById('subtotal');
    const discountEl = doc.getElementById('discount');
    const grandTotalEl = doc.getElementById('grand-total');
    const couponInput = doc.getElementById('coupon-input');
    const applyBtn = doc.getElementById('btn-apply-coupon');

    // Initial state check: 350 + 120 = 470
    assert.strictEqual(subtotalEl.textContent, '470', 'Initial subtotal should be 470');
    assert.strictEqual(discountEl.textContent, '0', 'Initial discount should be 0');
    assert.strictEqual(grandTotalEl.textContent, '470', 'Initial grand total should be 470');

    // Test Quantity Increment on item 1 (350)
    const plusBtn1 = items[0].querySelector('.btn-qty-plus');
    const qtySpan1 = items[0].querySelector('.item-qty');
    plusBtn1.click();
    assert.strictEqual(qtySpan1.textContent, '2', 'Quantity should be 2 after plus click');
    // New subtotal: (350 * 2) + 120 = 820
    assert.strictEqual(subtotalEl.textContent, '820', 'Subtotal should be 820');

    // Apply Coupon SAVE50
    couponInput.value = 'SAVE50';
    applyBtn.click();
    assert.strictEqual(discountEl.textContent, '50', 'Discount should be 50');
    assert.strictEqual(grandTotalEl.textContent, '770', 'Grand total should be 820 - 50 = 770');

    // Run validation function
    const validResult = exam.validation(doc);
    assert.strictEqual(validResult, true, 'Validation function must pass for target code');
  });

  it('Exam 2: Live Conference Pass Generator & Real-time Preview', () => {
    const exam = appliedExams.find((e) => e.id === 'exam-live-badge-generator');
    assert.ok(exam, 'Live badge generator exam must exist');

    const dom = new JSDOM(exam.targetHtml, { runScripts: 'dangerously' });
    dom.window.eval(exam.targetJs);

    const doc = dom.window.document;
    const inputName = doc.getElementById('input-name');
    const inputRole = doc.getElementById('input-role');
    const selectTheme = doc.getElementById('select-theme');
    const previewName = doc.getElementById('preview-name');
    const previewRole = doc.getElementById('preview-role');
    const passCard = doc.getElementById('pass-card');
    const btnReset = doc.getElementById('btn-reset-pass');

    // Test live input update
    const Evt = dom.window.Event;
    inputName.value = 'Alice Wonder';
    inputName.dispatchEvent(new Evt('input', { bubbles: true }));
    assert.strictEqual(previewName.textContent, 'Alice Wonder', 'Preview name should update in real-time');

    inputRole.value = 'Lead Cloud Architect';
    inputRole.dispatchEvent(new Evt('input', { bubbles: true }));
    assert.strictEqual(previewRole.textContent, 'Lead Cloud Architect', 'Preview role should update in real-time');

    // Test theme change
    selectTheme.value = 'theme-purple';
    selectTheme.dispatchEvent(new Evt('change', { bubbles: true }));
    assert.ok(passCard.classList.contains('theme-purple'), 'Pass card should have theme-purple class');

    // Test reset
    btnReset.click();
    assert.strictEqual(previewName.textContent, 'YOUR NAME', 'Preview name should reset to default');
    assert.strictEqual(previewRole.textContent, 'DEVELOPER', 'Preview role should reset to default');
    assert.ok(passCard.classList.contains('theme-blue'), 'Pass card should reset to theme-blue');

    // Run validation function
    const validResult = exam.validation(doc);
    assert.strictEqual(validResult, true, 'Validation function must pass');
  });

  it('Exam 3: Memory Card Matcher Mini-Game', () => {
    const exam = appliedExams.find((e) => e.id === 'exam-memory-card-game');
    assert.ok(exam, 'Memory card game exam must exist');

    const dom = new JSDOM(exam.targetHtml, { runScripts: 'dangerously' });
    dom.window.eval(exam.targetJs);

    const doc = dom.window.document;
    const cards = doc.querySelectorAll('.memory-card');
    assert.strictEqual(cards.length, 16, 'Must have 16 memory cards (4x4 grid)');

    const movesEl = doc.getElementById('moves-count');
    const restartBtn = doc.getElementById('btn-restart-game');

    // Flip first card
    cards[0].click();
    assert.ok(cards[0].classList.contains('flipped'), 'Card 0 should be flipped');

    // Verify cards have shuffle order applied
    const hasOrder = Array.from(cards).some((c) => c.style.order !== '');
    assert.ok(hasOrder, 'Cards must have style.order assigned for random shuffling');

    // Restart game
    restartBtn.click();
    assert.strictEqual(movesEl.textContent, '0', 'Moves count should be reset to 0');
    assert.ok(!cards[0].classList.contains('flipped'), 'Card 0 should no longer be flipped');

    // Run validation function
    const validResult = exam.validation(doc);
    assert.strictEqual(validResult, true, 'Validation function must pass');
  });

  it('Exam 4: FinTech Income & Expense Tracker with Dynamic Filter', () => {
    const exam = appliedExams.find((e) => e.id === 'exam-finance-tracker');
    assert.ok(exam, 'Finance tracker exam must exist');

    const dom = new JSDOM(exam.targetHtml, { runScripts: 'dangerously' });
    dom.window.eval(exam.targetJs);

    const doc = dom.window.document;
    const titleInput = doc.getElementById('tx-title');
    const amountInput = doc.getElementById('tx-amount');
    const typeSelect = doc.getElementById('tx-type');
    const addBtn = doc.getElementById('btn-add-tx');
    const balanceEl = doc.getElementById('balance-total');
    const incomeEl = doc.getElementById('total-income');
    const expenseEl = doc.getElementById('total-expense');
    const listEl = doc.getElementById('tx-list');

    // Add Income
    titleInput.value = 'เงินเดือนประจำ';
    amountInput.value = '45000';
    typeSelect.value = 'income';
    addBtn.click();

    assert.strictEqual(incomeEl.textContent, '45000', 'Income should be 45000');
    assert.strictEqual(balanceEl.textContent, '45000', 'Balance should be 45000');
    assert.strictEqual(listEl.children.length, 1, 'List should have 1 item');

    // Add Expense
    titleInput.value = 'ผ่อนคอนโด';
    amountInput.value = '15000';
    typeSelect.value = 'expense';
    addBtn.click();

    assert.strictEqual(expenseEl.textContent, '15000', 'Expense should be 15000');
    assert.strictEqual(balanceEl.textContent, '30000', 'Balance should be 45000 - 15000 = 30000');
    assert.strictEqual(listEl.children.length, 2, 'List should have 2 items');

    // Test Filter: only income
    const incomeFilterBtn = doc.querySelector('.filter-btn[data-filter="income"]');
    incomeFilterBtn.click();
    assert.strictEqual(listEl.children.length, 1, 'Only 1 income item should be visible');
    assert.ok(listEl.children[0].classList.contains('income'), 'Visible item must be income');

    // Test Delete
    const allFilterBtn = doc.querySelector('.filter-btn[data-filter="all"]');
    allFilterBtn.click();
    const deleteBtn = listEl.querySelector('.btn-del-tx');
    deleteBtn.click();
    assert.strictEqual(listEl.children.length, 1, 'After deleting 1 item, 1 item should remain');

    // Run validation function
    const validResult = exam.validation(doc);
    assert.strictEqual(validResult, true, 'Validation function must pass');
  });

  it('Exam 5: Live Weather & AQI Hub (Fetch API & Async/Await)', async () => {
    const exam = appliedExams.find((e) => e.id === 'exam-weather-api');
    assert.ok(exam, 'Weather API exam must exist');

    const dom = new JSDOM(exam.targetHtml, { runScripts: 'dangerously', url: 'http://localhost/' });
    dom.window.eval(exam.targetJs);

    const doc = dom.window.document;
    const input = doc.getElementById('city-input');
    const searchBtn = doc.getElementById('btn-search-weather');
    const cityNameEl = doc.getElementById('city-name');
    const tempValEl = doc.getElementById('temp-val');

    input.value = 'Tokyo';
    searchBtn.click();
    await new Promise((r) => setTimeout(r, 100));

    assert.ok(cityNameEl.textContent.includes('Tokyo'), 'City name should be updated to Tokyo');
    assert.strictEqual(tempValEl.textContent, '19', 'Tokyo temp should be 19°C');

    const validResult = await exam.validation(doc);
    assert.strictEqual(validResult, true, 'Weather validation function must pass');
  });

  it('Exam 6: Movie Explorer DB (REST API & Search Debounce)', async () => {
    const exam = appliedExams.find((e) => e.id === 'exam-movie-api');
    assert.ok(exam, 'Movie API exam must exist');

    const dom = new JSDOM(exam.targetHtml, { runScripts: 'dangerously' });
    dom.window.eval(exam.targetJs);

    const doc = dom.window.document;
    const grid = doc.getElementById('movie-grid');
    const modal = doc.getElementById('movie-modal');
    const closeBtn = doc.getElementById('btn-close-modal');

    const cards = grid.querySelectorAll('.movie-card');
    assert.ok(cards.length >= 3, 'Must render initial movie cards');

    // Click first card to open modal
    cards[0].click();
    assert.strictEqual(modal.style.display, 'flex', 'Modal should open when card is clicked');

    // Close modal
    closeBtn.click();
    assert.strictEqual(modal.style.display, 'none', 'Modal should close when close button is clicked');

    const validResult = exam.validation(doc);
    assert.strictEqual(validResult, true, 'Movie validation function must pass');
  });

  it('Exam 7: Cyber Dodger (HTML5 Canvas 2D Game Loop)', () => {
    const exam = appliedExams.find((e) => e.id === 'exam-canvas-game');
    assert.ok(exam, 'Cyber Dodger Canvas game exam must exist');

    const dom = new JSDOM(exam.targetHtml, { runScripts: 'dangerously', url: 'http://localhost/' });
    dom.window.requestAnimationFrame = (cb) => setTimeout(cb, 16);
    dom.window.cancelAnimationFrame = (id) => clearTimeout(id);
    dom.window.HTMLCanvasElement.prototype.getContext = () => ({
      fillRect: () => {},
      clearRect: () => {},
      beginPath: () => {},
      moveTo: () => {},
      lineTo: () => {},
      closePath: () => {},
      arc: () => {},
      fill: () => {},
      stroke: () => {},
      fillText: () => {}
    });
    dom.window.eval(exam.targetJs);

    const doc = dom.window.document;
    const canvas = doc.getElementById('game-canvas');
    const scoreEl = doc.getElementById('game-score');
    const startBtn = doc.getElementById('btn-start-game');

    assert.ok(canvas, 'Canvas element must exist');
    assert.ok(canvas.width >= 300, 'Canvas width must be >= 300');
    assert.strictEqual(scoreEl.textContent, '0', 'Initial score should be 0');

    startBtn.click();
    assert.strictEqual(startBtn.textContent, 'เล่นใหม่', 'Start button text should update');

    const validResult = exam.validation(doc);
    assert.strictEqual(validResult, true, 'Canvas game validation must pass');
  });

  it('Exam 8: Whack-A-Mole Reflex Challenge with Timers', () => {
    const exam = appliedExams.find((e) => e.id === 'exam-whack-mole-game');
    assert.ok(exam, 'Whack-A-Mole game exam must exist');

    const dom = new JSDOM(exam.targetHtml, { runScripts: 'dangerously' });
    dom.window.eval(exam.targetJs);

    const doc = dom.window.document;
    const holes = doc.querySelectorAll('.hole');
    const moles = doc.querySelectorAll('.mole');
    const scoreEl = doc.getElementById('mole-score');
    const startBtn = doc.getElementById('btn-start-mole');

    assert.strictEqual(holes.length, 9, 'Must have exactly 9 holes (3x3 grid)');
    assert.strictEqual(moles.length, 9, 'Must have 9 moles');

    startBtn.click();
    // Simulate mole up and click
    holes[0].classList.add('up');
    moles[0].click();

    assert.ok(parseInt(scoreEl.textContent) > 0, 'Score should increase after hitting mole');

    const validResult = exam.validation(doc);
    assert.strictEqual(validResult, true, 'Whack-A-Mole validation must pass');
  });

  it('Exam 9: Wordle Master (5-Letter Matrix & Keyboard Events)', () => {
    const exam = appliedExams.find((e) => e.id === 'exam-wordle-game');
    assert.ok(exam, 'Wordle game exam must exist');

    const dom = new JSDOM(exam.targetHtml, { runScripts: 'dangerously' });
    dom.window.eval(exam.targetJs);

    const doc = dom.window.document;
    const board = doc.getElementById('wordle-board');
    const tiles = board.querySelectorAll('.letter-tile');
    const restartBtn = doc.getElementById('btn-restart-wordle');

    assert.strictEqual(tiles.length, 30, 'Board must have 30 letter tiles (6x5)');

    // Click virtual key 'R'
    const keyR = doc.querySelector(".key-btn[data-key='R']");
    assert.ok(keyR, 'Key R must exist on keyboard');
    keyR.click();

    assert.strictEqual(tiles[0].textContent, 'R', 'Tile 0 must have letter R');

    // Restart game
    restartBtn.click();
    const freshTiles = board.querySelectorAll('.letter-tile');
    assert.strictEqual(freshTiles[0].textContent, '', 'Tile 0 must be empty after restart');

    const validResult = exam.validation(doc);
    assert.strictEqual(validResult, true, 'Wordle validation must pass');
  });

  it('Exam 10: HTML5 Drag & Drop Kanban Board', () => {
    const exam = appliedExams.find((e) => e.id === 'exam-drag-drop-board');
    assert.ok(exam, 'Drag & Drop exam must exist');

    const dom = new JSDOM(exam.targetHtml, { runScripts: 'dangerously' });
    dom.window.eval(exam.targetJs);

    const doc = dom.window.document;
    const colTodo = doc.getElementById('col-todo');
    const colDone = doc.getElementById('col-done');
    const countTodo = doc.getElementById('count-todo');
    const countDone = doc.getElementById('count-done');
    const cards = doc.querySelectorAll('.kanban-card');

    assert.ok(cards.length >= 2, 'Should have at least 2 cards');
    assert.strictEqual(countTodo.textContent, '2', 'Initial todo count should be 2');
    assert.strictEqual(countDone.textContent, '0', 'Initial done count should be 0');

    // Simulate drag and drop: move card-1 to colDone
    const card1 = doc.getElementById('card-1');
    colDone.appendChild(card1);
    // Trigger update
    const todoCards = colTodo.querySelectorAll('.kanban-card');
    const doneCards = colDone.querySelectorAll('.kanban-card');
    countTodo.textContent = todoCards.length;
    countDone.textContent = doneCards.length;

    assert.strictEqual(countTodo.textContent, '1', 'Todo count should decrease to 1');
    assert.strictEqual(countDone.textContent, '1', 'Done count should increase to 1');

    const validResult = exam.validation(doc, exam.targetCss, exam.targetJs);
    assert.strictEqual(validResult, true, 'Kanban Drag & Drop validation must pass');
  });

  it('Exam 11: Payroll & Object Constructor with this Explicit Binding', () => {
    const exam = appliedExams.find((e) => e.id === 'exam-this-constructor-payroll');
    assert.ok(exam, 'Payroll & this binding exam must exist');

    const dom = new JSDOM(exam.targetHtml, { runScripts: 'dangerously' });
    dom.window.eval(exam.targetJs);

    const doc = dom.window.document;
    const list = doc.getElementById('payroll-list');
    const calcBtn = doc.getElementById('btn-calc-payroll');
    const totalBudget = doc.getElementById('total-payroll-budget');

    assert.ok(list, 'Payroll list element must exist');
    const cards = list.querySelectorAll('.emp-card');
    assert.strictEqual(cards.length, 2, 'Should render 2 employees initially');

    calcBtn.click();
    assert.notStrictEqual(totalBudget.textContent, '0', 'Total budget should be calculated');

    const validResult = exam.validation(doc, exam.targetCss, exam.targetJs);
    assert.strictEqual(validResult, true, 'Payroll & this binding validation must pass');
  });

  it('Exam 12: Priority Queue DOM Node Tree (insertBefore & replaceChild)', () => {
    const exam = appliedExams.find((e) => e.id === 'exam-dom-node-queue');
    assert.ok(exam, 'Queue DOM Node exam must exist');

    const dom = new JSDOM(exam.targetHtml, { runScripts: 'dangerously' });
    dom.window.eval(exam.targetJs);

    const doc = dom.window.document;
    const queueList = doc.getElementById('queue-list');
    const inputPatient = doc.getElementById('input-patient');
    const btnVip = doc.getElementById('btn-insert-vip');
    const btnEmergency = doc.getElementById('btn-replace-emergency');
    const btnNext = doc.getElementById('btn-call-next');
    const countEl = doc.getElementById('queue-count');
    const servingEl = doc.getElementById('serving-now');

    assert.strictEqual(queueList.children.length, 3, 'Initial queue count should be 3');
    assert.strictEqual(countEl.textContent, '3');

    // Test insert VIP (insertBefore)
    inputPatient.value = 'คุณหญิงสุดสวย';
    btnVip.click();
    assert.strictEqual(queueList.children.length, 4, 'Queue should grow to 4');
    assert.ok(queueList.firstElementChild.textContent.includes('คุณหญิงสุดสวย'), 'First child must be VIP');

    // Test replace emergency (replaceChild)
    inputPatient.value = 'คนไข้หัวใจวิกฤต';
    btnEmergency.click();
    assert.strictEqual(queueList.children.length, 4, 'Queue count unchanged after replaceChild');
    assert.ok(queueList.firstElementChild.textContent.includes('คนไข้หัวใจวิกฤต'), 'First child replaced');

    // Test call next (removeChild)
    btnNext.click();
    assert.strictEqual(queueList.children.length, 3, 'Queue reduced to 3 after call next');
    assert.ok(servingEl.textContent.includes('คนไข้หัวใจวิกฤต'), 'Serving should now be the emergency patient');

    const validResult = exam.validation(doc, exam.targetCss, exam.targetJs);
    assert.strictEqual(validResult, true, 'Queue DOM Node validation must pass');
  });
});
