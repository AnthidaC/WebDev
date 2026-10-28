import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { readProjectZip } from '../../src/fullstack/workspace.js';

test.beforeEach(async ({ page }) => { await page.addInitScript(() => { localStorage.setItem('fullstack-reading-mode', JSON.stringify('normal')); }); });

test('catalog, files, persistence and isolated projects', async ({ page }) => {
  const errors = []; page.on('pageerror', error => errors.push(error.message));
  await page.goto('/?course=fullstack');
  await expect(page.getByRole('heading', { name: /จากไฟล์แรก/ })).toBeVisible();
  await page.screenshot({ path: 'tmp/fullstack-overview.png' });
  await page.locator('.fs-lesson-link').filter({ hasText: 'รู้จักโปรเจกต์และแก้หน้าแรก' }).click();
  await expect(page.locator('.monaco-editor').first()).toBeVisible();
  await page.getByRole('button', { name: 'เพิ่มไฟล์', exact: true }).click();
  await page.getByRole('dialog').getByRole('textbox').fill('frontend/pages/About.jsx');
  await page.getByRole('button', { name: 'ยืนยัน', exact: true }).click();
  await expect(page.locator('.fs-breadcrumb')).toContainText('frontend/pages/About.jsx');
  await page.locator('.monaco-editor').click();
  await page.keyboard.insertText('export default function About() { return <h1>About me</h1>; }');
  await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem('fullstack-v1:fs-00')).files['frontend/pages/About.jsx'])).toContain('About me');
  await page.reload();
  await page.getByRole('button', { name: 'About.jsx', exact: true }).click();
  await expect(page.locator('.fs-breadcrumb')).toContainText('About.jsx');
  await page.getByRole('button', { name: /01.*ES6/ }).click();
  await expect(page.getByRole('button', { name: 'About.jsx', exact: true })).toHaveCount(0);
  await page.screenshot({ path: 'tmp/fullstack-workspace.png' });
  expect(errors).toEqual([]);
});

test('Chrome editor offers language-matched snippets and Tab stops', async ({ page }) => {
  const errors = []; page.on('pageerror', error => errors.push(error.message));
  await page.goto('/?course=fullstack');
  await page.locator('.fs-lesson-link').filter({ hasText: 'รู้จักโปรเจกต์และแก้หน้าแรก' }).click();

  async function expandSnippet(file, prefix, expected) {
    await page.locator('button.fs-tree-row').filter({ hasText: new RegExp(`${file}$`) }).last().click();
    await page.locator('.monaco-editor textarea').first().focus();
    await page.keyboard.press('Control+a');
    await page.keyboard.insertText(prefix);
    await expect(page.locator('.suggest-widget')).toContainText(prefix, { timeout: 15000 });
    await page.keyboard.press('Tab');
    await expect(page.locator('.monaco-editor .view-lines')).toContainText(expected);
  }

  await expandSnippet('App.jsx', 'rfc', 'export default function ComponentName');
  await expandSnippet('styles.css', 'card', '.card');
  await expandSnippet('index.html', 'html5', '<!doctype html>');
  expect(errors).toEqual([]);
});

test('exam persists deadline, hides solutions and submits a frozen snapshot', async ({ page }) => {
  await page.goto('/?course=fullstack');
  await page.getByRole('button', { name: /สอบ A ·/ }).first().click();
  await expect(page.getByRole('button', { name: 'เฉลย', exact: true })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'เพิ่มไฟล์', exact: true })).toBeDisabled();
  await page.getByRole('button', { name: 'เริ่มสอบ', exact: true }).click();
  const deadline = await page.evaluate(() => JSON.parse(localStorage.getItem('fullstack-v1:exam-api')).attempt.deadline);
  await page.reload();
  await expect(page.getByRole('button', { name: 'เพิ่มไฟล์', exact: true })).toBeEnabled();
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('fullstack-v1:exam-api')).attempt.deadline)).toBe(deadline);
  await page.getByRole('button', { name: 'ส่งข้อสอบ', exact: true }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'ยืนยัน' }).click();
  await expect(page.getByRole('button', { name: 'เฉลย', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'เพิ่มไฟล์', exact: true })).toBeDisabled();
  expect(await page.evaluate(() => !!JSON.parse(localStorage.getItem('fullstack-v1:exam-api')).attempt.snapshot['backend/app.js'])).toBe(true);
});

test('beginner orientation opens real files and preserves starter comparison', async ({ page }) => {
  await page.goto('/?course=fullstack');
  await page.locator('.fs-lesson-link').filter({ hasText: 'รู้จักโปรเจกต์และแก้หน้าแรก' }).click();
  await page.getByLabel('เลือกขั้นตอนการอ่าน').selectOption({ label: 'ทดลองและสังเกตผล' });
  await expect(page.getByRole('region', { name: 'คู่มือฝึกทีละขั้น' })).toContainText('ผลที่ควรได้');
  await page.getByRole('button', { name: 'โครง / เริ่มรัน', exact: true }).click();
  await page.locator('.fs-file-map').getByRole('button', { name: 'backend/app.js', exact: true }).click();
  await expect(page.locator('.fs-orientation')).toContainText('ตั้ง Express');
  await page.getByRole('button', { name: 'เปิดไฟล์นี้ใน Editor' }).click();
  await expect(page.locator('.fs-breadcrumb')).toContainText('backend/app.js');
  await page.locator('.monaco-editor textarea').first().focus();
  await page.keyboard.press('Control+a');
  await page.keyboard.insertText('// my changed API');
  await page.getByRole('button', { name: 'งานปัจจุบัน', exact: true }).click();
  await expect(page.locator('.fs-orientation .fs-worked-example').first()).toContainText('my changed API');
  await page.getByRole('button', { name: 'ตอนเริ่มบท', exact: true }).click();
  await expect(page.locator('.fs-orientation .fs-worked-example').first()).toContainText("require('express')");
  await page.getByRole('button', { name: 'เส้นทางการเรียนรู้', exact: true }).click();
  await page.getByRole('button', { name: /เรียนต่อ:/ }).click();
  await expect(page.locator('.fs-workspace-bar h1')).toContainText('รู้จักโปรเจกต์');
});

test('snippet library inserts editable snippets, supports undo and follows file language', async ({ page }) => {
  const errors = []; page.on('pageerror', error => errors.push(error.message));
  await page.goto('/?course=fullstack');
  await page.locator('.fs-lesson-link').filter({ hasText: 'รู้จักโปรเจกต์และแก้หน้าแรก' }).click();
  await expect(page.locator('.monaco-editor').first()).toBeVisible();
  await page.locator('.monaco-editor textarea').first().focus();
  await page.keyboard.press('Control+a');
  await page.getByRole('button', { name: /คลัง Snippet/ }).click();
  await page.getByRole('textbox', { name: 'ค้นหา snippet' }).fill('rfc');
  await page.locator('.fs-snippet-results summary').first().click();
  await page.getByRole('button', { name: 'แทรก rfc', exact: true }).click();
  await expect.poll(() => page.evaluate(() => JSON.parse(localStorage.getItem('fullstack-v1:fs-00')).files['frontend/App.jsx'])).toContain('function ComponentName');
  await page.keyboard.insertText('MyFirstComponent');
  await page.keyboard.press('Tab');
  await page.keyboard.insertText('<h1>Learning</h1>');
  await expect(page.locator('.monaco-editor .view-lines')).toContainText('MyFirstComponent');
  await page.keyboard.press('Control+z');
  await expect(page.locator('.monaco-editor .view-lines')).not.toContainText('Learning');
  await page.getByRole('textbox', { name: 'ค้นหา snippet' }).fill('fetchjson');
  await expect(page.locator('.fs-snippet-results')).toContainText('fetchjson');
  await page.locator('button.fs-tree-row').filter({ hasText: /^app.js$/ }).click();
  await page.getByRole('textbox', { name: 'ค้นหา snippet' }).fill('expressget');
  await page.locator('.fs-snippet-results summary').click();
  await page.getByRole('button', { name: 'แทรก expressget', exact: true }).click();
  await expect(page.locator('.monaco-editor .view-lines')).toContainText('app.get(');
  await page.screenshot({ path: 'tmp/fullstack-snippet-library.png' });
  expect(errors).toEqual([]);
});

test('mobile and light mode remain usable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/?course=fullstack');
  await page.getByRole('button', { name: 'เปลี่ยนธีม' }).click();
  await expect(page.locator('.fs-app')).toHaveClass(/light/);
  await page.screenshot({ path: 'tmp/fullstack-mobile.png' });
  await page.getByRole('button',{name:'เริ่มเรียนจากศูนย์',exact:true}).click();
  await page.getByRole('button', { name: 'ไฟล์ / Editor' }).click();
  await expect(page.locator('.monaco-editor').first()).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.getByRole('button', { name: 'Preview / API' }).click();
  await expect(page.getByRole('button', { name: 'API Client', exact: true })).toBeVisible();
});

test('lesson API examples prepare requests without sending or changing code', async ({ page }) => {
  await page.goto('/?course=fullstack');
  await page.getByRole('button', { name: /01.*ES6/ }).click();
  await page.getByRole('button', { name: 'API Client', exact: true }).click();
  await page.getByRole('button', { name: 'รวมราคาสินค้า', exact: true }).click();
  await expect(page.getByLabel('HTTP method', { exact: true })).toHaveValue('POST');
  await expect(page.getByLabel('API path', { exact: true })).toHaveValue('/api/total');
  await expect(page.locator('.fs-api-client textarea')).toContainText('quantity');
  await expect(page.getByRole('button', { name: 'ส่ง request', exact: true })).toBeDisabled();
  await page.getByRole('button', { name: 'ตะกร้าว่าง', exact: true }).click();
  expect(JSON.parse(await page.locator('.fs-api-client textarea').inputValue())).toEqual({ items: [] });
});

test('Node completion understands CommonJS Express and process env', async ({ page }) => {
  await page.goto('/?course=fullstack');
  await page.locator('.fs-lesson-link').filter({ hasText: 'รู้จักโปรเจกต์และแก้หน้าแรก' }).click();
  await page.locator('button.fs-tree-row').filter({ hasText: /^app.js$/ }).click();
  const input = page.locator('.monaco-editor textarea').first();
  await input.focus();
  await page.keyboard.press('Control+a');
  await page.keyboard.insertText("const express = require('express');\nconst app = express();\napp.li");
  await page.getByRole('button', { name: 'เปิดรายการ autocomplete และดูวิธีใช้ snippets' }).click();
  await expect(page.locator('.suggest-widget')).toContainText('listen', { timeout: 15000 });
  await page.keyboard.press('Escape');
  await input.focus();
  await page.keyboard.press('Control+a');
  await page.keyboard.insertText('process.e');
  await page.getByRole('button', { name: 'เปิดรายการ autocomplete และดูวิธีใช้ snippets' }).click();
  await expect(page.locator('.suggest-widget')).toContainText('env', { timeout: 15000 });
});

test('ZIP backup, file rename, reset and restore keep the learner work recoverable', async ({ page }) => {
  await page.goto('/?course=fullstack');
  await page.locator('.fs-lesson-link').filter({ hasText: 'รู้จักโปรเจกต์และแก้หน้าแรก' }).click();
  await page.getByRole('button', { name: 'เพิ่มไฟล์', exact: true }).click();
  await page.getByRole('dialog').getByRole('textbox').fill('frontend/note.js');
  await page.getByRole('button', { name: 'ยืนยัน', exact: true }).click();
  await page.locator('.monaco-editor textarea').first().focus();
  await page.keyboard.insertText('export const note = "my practice";');
  await page.getByRole('button', { name: 'เปลี่ยนชื่อ', exact: true }).click();
  await page.getByRole('dialog').getByRole('textbox').fill('frontend/renamed.js');
  await page.getByRole('button', { name: 'ยืนยัน', exact: true }).click();
  await expect(page.locator('.fs-breadcrumb')).toContainText('frontend/renamed.js');
  const downloading = page.waitForEvent('download');
  await page.getByRole('button', { name: 'ZIP', exact: true }).click();
  const download = await downloading;
  const zipPath = await download.path();
  expect(readProjectZip(await readFile(zipPath))['frontend/renamed.js']).toContain('my practice');
  await page.getByRole('button', { name: 'เริ่มใหม่', exact: true }).click();
  await page.getByRole('dialog').getByRole('button', { name: 'ยืนยัน' }).click();
  await expect(page.locator('.fs-tree-row').filter({ hasText: 'renamed.js' })).toHaveCount(0);
  await page.locator('input[type=file]').setInputFiles({ name: 'backup.zip', mimeType: 'application/zip', buffer: await readFile(zipPath) });
  await page.getByRole('dialog').getByRole('button', { name: 'ยืนยัน' }).click();
  await page.locator('.fs-tree-row').filter({ hasText: /^renamed.js$/ }).click();
  await expect(page.locator('.monaco-editor .view-lines')).toContainText('my practice');
});

test('real browser Node runtime starts React, API and checks learner code', async ({ page }) => {
  test.skip(process.env.FULLSTACK_RUNTIME !== '1', 'Network-dependent browser runtime verification');
  test.setTimeout(240000);
  page.on('pageerror', error => console.log('browser:', error.message));
  await page.goto('/?course=fullstack');
  await page.locator('.fs-lesson-link').filter({ hasText: 'รู้จักโปรเจกต์และแก้หน้าแรก' }).click();
  await page.getByRole('button', { name: 'รันโปรเจกต์', exact: true }).click();
  try {
    await expect(page.locator('.fs-runtime-status')).toHaveText('กำลังรัน', { timeout: 180000 });
    await expect(page.frameLocator('iframe[title="Full Stack project preview"]').getByRole('heading', { name: 'Hello Full Stack' })).toBeVisible({ timeout: 30000 });
    await page.getByRole('button', { name: 'API Client', exact: true }).click();
    await page.getByRole('button', { name: 'ส่ง request', exact: true }).click();
    await expect(page.locator('.fs-api-client pre')).toContainText('200');
    await expect(page.locator('.fs-api-client pre')).toContainText('"ok": true');
    await page.getByRole('button', { name: 'ตรวจงาน', exact: true }).click();
    await expect(page.locator('.fs-notice')).toContainText('ยังไม่ผ่าน', { timeout: 40000 });
    await page.locator('.monaco-editor').click();
    await page.keyboard.press('Control+a');
    await page.keyboard.insertText('export default function App() { return <main><h1>My Full Stack Lab</h1></main>; }');
    await page.getByRole('button', { name: 'Preview', exact: true }).click();
    await expect(page.frameLocator('iframe[title="Full Stack project preview"]').getByRole('heading', { name: 'My Full Stack Lab' })).toBeVisible({ timeout: 15000 });
    await page.getByRole('button', { name: 'ตรวจงาน', exact: true }).click();
    await expect(page.locator('.fs-notice')).toContainText('ผ่านชุดตรวจอัตโนมัติแล้ว', { timeout: 30000 });
    await page.locator('.xterm-helper-textarea').focus();
    await page.keyboard.type("echo 'hello from terminal' > note.txt");
    await page.keyboard.press('Enter');
    await expect(page.getByRole('button', { name: 'note.txt', exact: true })).toBeVisible({ timeout: 15000 });
    await page.getByRole('button', { name: /04.*HTTP, routes/ }).click();
    await page.getByRole('button', { name: 'รันโปรเจกต์', exact: true }).click();
    await expect(page.locator('.fs-runtime-status')).toHaveText('กำลังรัน', { timeout: 90000 });
    await page.getByRole('button', { name: 'API Client', exact: true }).click();
    await page.getByRole('textbox', { name: 'API path', exact: true }).fill('/api/health');
    await page.getByRole('button', { name: 'ส่ง request', exact: true }).click();
    await expect(page.locator('.fs-api-client pre')).toContainText('200', { timeout: 10000 });
    await expect(page.getByRole('button', { name: 'note.txt', exact: true })).toHaveCount(0);
  } finally {
    console.log('runtime status:', await page.locator('.fs-runtime-status').innerText());
    console.log('runtime notice:', await page.locator('.fs-notice').allTextContents());
    console.log('terminal:', await page.locator('.xterm-screen').innerText());
    await page.screenshot({ path: 'tmp/fullstack-runtime.png' });
  }
});
