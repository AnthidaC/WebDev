import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { getSnippets, snippetPreview } from '../../src/fullstack/snippets.js';
import { readProjectZip } from '../../src/fullstack/workspace.js';
import { setupStages } from '../../src/fullstack/setupGuideData.js';
import { fullstackCurriculum } from '../../src/fullstack/curriculum.js';

test.beforeEach(async ({ page }) => { await page.addInitScript(() => { localStorage.setItem('fullstack-reading-mode', JSON.stringify('normal')); }); });

test('setup guide explains every stage, copies commands, saves progress and exports a complete project', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/?course=fullstack');
  await page.getByRole('button', { name: 'ไม่เคยใช้ npm เริ่มตรงนี้' }).click();
  await expect(page.getByRole('heading', { name: 'เริ่ม Node + React ครั้งแรก' })).toBeVisible();
  for (const stage of setupStages) {
    await page.getByRole('navigation', { name: 'ขั้นตอนเริ่มโปรเจกต์' }).getByRole('button', { name: stage.title, exact: false }).click();
    await expect(page.locator('.fs-setup-stage h2')).toHaveText(stage.title);
    await expect(page.locator('.fs-setup-stage')).toContainText(stage.expected);
    await page.getByText('ถ้าติดขั้นนี้', { exact: true }).click();
    await expect(page.locator('.fs-setup-rescue')).toContainText(stage.rescue);
    for (const path of Object.keys(stage.files)) {
      await page.locator('.fs-setup-stage .fs-filters').getByRole('button', { name: path, exact: true }).click();
      await expect(page.locator('.fs-copy-code').filter({has: page.getByText(path,{exact:true})}).locator('pre')).toHaveText(stage.files[path]);
    }
    if (stage.commands.length) {
      await page.getByRole('button', { name: 'คัดลอก คำสั่ง Terminal (รันทีละบรรทัด)', exact: true }).click();
      await expect.poll(() => page.evaluate(() => navigator.clipboard.readText().then(text => text.replaceAll("\r\n", "\n")))).toBe(stage.commands.join('\n'));
    }
    await page.getByRole('checkbox').check();
  }
  await page.reload();
  await expect(page.locator('.fs-setup-page')).toContainText('ลองเองแล้ว 9/9 ขั้น');
  const pending = page.waitForEvent('download');
  await page.getByRole('button', { name: 'ZIP โปรเจกต์ปลายทาง' }).click();
  const zip = await pending;
  const files = readProjectZip(await readFile(await zip.path()));
  expect(files['src/App.jsx']).toContain('My Task Board');
  expect(files['index.html']).toContain('/src/main.jsx');
  expect(files['tests/goal.test.jsx']).toContain('../src/App.jsx');
  expect(JSON.parse(files['package.json']).scripts.test).toContain('vitest');
  await page.getByRole('button', { name: 'เริ่มเวิร์กช็อปจับมือทำ', exact: true }).click();
  await expect(page.locator('.fs-workspace-bar h1')).toHaveText('Level 1 · รัน Node ไฟล์แรก');
  await expect(page.getByRole('region', { name: 'ขั้นตอนจับมือทำ' })).toBeVisible();
});

for (const path of ['frontend/all-snippets.jsx', 'backend/all-snippets.js', 'all-snippets.css', 'all-snippets.html', 'all-snippets.json', 'all-snippets.sql', 'all-snippets.md', 'all-snippets.yaml', 'all-snippets.txt']) {
  test(`every snippet inserts usable default text in ${path}`, async ({ page }) => {
    test.setTimeout(90000);
    const errors = []; page.on('pageerror', error => errors.push(error.message));
    await page.goto('/?course=fullstack');
    await page.locator('.fs-lesson-link').filter({ hasText: 'รู้จักโปรเจกต์และแก้หน้าแรก' }).click();
    await page.getByRole('button', { name: 'เพิ่มไฟล์', exact: true }).click();
    await page.getByRole('dialog').getByRole('textbox').fill(path);
    await page.getByRole('button', { name: 'ยืนยัน', exact: true }).click();
    await page.getByRole('button', { name: /คลัง Snippet/ }).click();
    for (const row of getSnippets(path)) {
      await page.locator('.monaco-editor textarea').first().focus();
      await page.keyboard.press('Escape');
      await page.keyboard.press('Control+a');
      await page.getByRole('textbox', { name: 'ค้นหา snippet' }).fill(row[0]);
      const details = page.locator('.fs-snippet-results details').filter({ has: page.locator('summary code').getByText(row[0], { exact: true }) });
      await details.locator('summary').click();
      await expect(details).toContainText('วางตรงไหน / เตรียมอะไร:');
      await details.getByRole('button', { name: 'แทรก ' + row[0], exact: true }).click();
      await expect.poll(() => page.evaluate(path => JSON.parse(localStorage.getItem('fullstack-v1:fs-00')).files[path].replaceAll('\r\n', '\n'), path), { message: row[0] + ' must expand tabstops and replace selection' }).toBe(snippetPreview(row.at(-1)));
    }
    expect(errors).toEqual([]);
  });
}

test('file errors stay visible in dialog and Escape restores focus', async ({ page }) => {
  await page.goto('/?course=fullstack');
  await page.locator('.fs-lesson-link').filter({ hasText: 'รู้จักโปรเจกต์และแก้หน้าแรก' }).click();
  await page.getByRole('button', { name: 'เพิ่มไฟล์', exact: true }).click();
  await page.getByRole('dialog').getByRole('textbox').fill('../bad.js');
  await page.getByRole('dialog').getByRole('button', { name: 'ยืนยัน' }).click();
  await expect(page.getByRole('dialog').getByRole('alert')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'เพิ่มไฟล์', exact: true })).toBeFocused();
});

test('mobile setup and guided file navigation are reachable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/?course=fullstack');
  await page.getByRole('button', { name: 'ไม่เคยใช้ npm เริ่มตรงนี้' }).click();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.getByRole('button', { name: 'ฝึก Level 1 ในแอป', exact: true }).click();
  await page.getByRole('button', { name: 'เปิด scripts/hello.js', exact: true }).first().click();
  await expect(page.locator('.monaco-editor')).toBeVisible();
  await page.screenshot({ path: 'tmp/beginner-mobile.png' });
});

test('every activity opens its instructions, editor, hints and solution with exam locks', async ({ page }) => {
  test.setTimeout(120000);
  const errors = []; page.on('pageerror', error => errors.push(error.message));
  await page.goto('/?course=fullstack');
  for (const item of fullstackCurriculum) {
    await page.locator('.fs-lesson-link').filter({ hasText: item.title }).click();
    await expect(page.locator('.fs-workspace-bar h1')).toHaveText(item.title);
    await expect(page.locator('.fs-breadcrumb')).toContainText(item.entry);
    await expect(page.locator('.monaco-editor')).toBeVisible();
    await page.getByRole('button', { name: 'โครง / เริ่มรัน', exact: true }).click();
    await expect(page.locator('.fs-file-map')).toContainText('package.json');
    await page.getByRole('button', { name: 'ลงมือทำ', exact: true }).click();
    if (item.kind === 'exam') {
      await expect(page.getByRole('button', { name: 'เฉลย', exact: true })).toBeDisabled();
      await expect(page.getByRole('button', { name: 'เพิ่มไฟล์', exact: true })).toBeDisabled();
    } else {
      for (let index = 0; index < item.hints.length; index++) await page.getByRole('button', { name: /เปิดคำใบ้/ }).click();
      await expect(page.getByRole('button', { name: /เปิดคำใบ้/ })).toBeDisabled();
      await page.getByRole('button', { name: 'เฉลย', exact: true }).click();
      await expect(page.getByRole('button', { name: 'ส่งออกตัวอย่างเฉลย' })).toBeVisible();
    }
  }
  expect(errors).toEqual([]);
});

test('CSS tools controls, clipboard, insertion and keyboard close work', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/?course=fullstack');
  await page.locator('.fs-lesson-link').filter({ hasText: 'รู้จักโปรเจกต์และแก้หน้าแรก' }).click();
  await page.locator('.fs-tree-row').filter({ hasText: /^styles.css$/ }).click();
  await page.getByRole('button', { name: 'เครื่องมือ CSS', exact: true }).click();
  const dialog = page.getByRole('dialog', { name: 'เครื่องมือช่วยเขียน CSS' });
  for (const name of ['Forest', 'Ocean', 'Sunset', 'Lavender', 'Mono']) {
    await dialog.getByRole('button', { name, exact: true }).click();
    await expect(dialog.locator('.fs-css-output pre')).toContainText('--color-primary:');
  }
  await dialog.getByLabel('สีหลัก').fill('#123456');
  await expect(dialog.locator('.fs-css-output pre')).toContainText('#123456');
  await dialog.getByRole('button', { name: 'Gradient', exact: true }).click();
  await dialog.getByRole('slider').fill('180');
  await expect(dialog.locator('.fs-css-output pre')).toContainText('180deg');
  await dialog.getByRole('button', { name: 'Layout', exact: true }).click();
  for (const name of ['Flex row', 'Responsive grid', 'Center content', 'Card', 'Mobile breakpoint']) {
    await dialog.getByRole('button', { name, exact: true }).click();
    await expect(dialog.locator('.fs-css-output pre')).not.toBeEmpty();
  }
  await dialog.getByRole('button', { name: 'เงา', exact: true }).click();
  for (const name of ['Soft', 'Lifted', 'Inset']) await dialog.getByRole('button', { name, exact: true }).click();
  const code = await dialog.locator('.fs-css-output pre').textContent();
  await dialog.getByRole('button', { name: 'คัดลอก', exact: true }).click();
  await expect.poll(() => page.evaluate(() => navigator.clipboard.readText().then(text => text.replaceAll('\r\n', '\n')))).toBe(code);
  await dialog.getByRole('button', { name: 'แทรกที่ cursor ในไฟล์ CSS' }).click();
  await expect(dialog).toHaveCount(0);
  await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem('fullstack-v1:fs-00')).files['frontend/styles.css'])).toContain('inset 0 2px 8px');
  await page.getByRole('button', { name: 'เครื่องมือ CSS', exact: true }).click();
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
});
