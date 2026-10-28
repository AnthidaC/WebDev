import { test, expect } from '@playwright/test';
import { guidedProjects } from '../../src/fullstack/guidedProjects.js';
import { fullstackCurriculum } from '../../src/fullstack/curriculum.js';
import { readProjectZip } from '../../src/fullstack/workspace.js';
import { readFile } from 'node:fs/promises';

test('guided reading stays in one step, keeps navigation visible and resumes without editing files', async ({ page }) => {
  await page.goto('/?course=fullstack');
  await page.locator('.fs-lesson-link').filter({ hasText: guidedProjects[3].title }).click();
  const reader = page.getByRole('region', { name: 'อ่านทีละขั้น', exact: true });
  const choice = page.getByLabel('เลือกขั้นตอนการอ่าน');
  await expect(reader.locator('article')).toHaveCount(1);
  await expect(reader).toContainText('ทำขั้นนี้ไปทำไม');
  await expect(reader).toContainText('โค้ดทำงานอย่างไร');
  await expect(page.getByRole('button', { name: 'ก่อนหน้า', exact: true })).toBeDisabled();
  const before = await page.evaluate(() => localStorage.getItem('fullstack-v1:guided-3'));
  await page.getByLabel('รูปแบบพื้นที่อ่าน').selectOption('normal');
  const initialWidth = (await page.locator('.fs-guide').boundingBox()).width;
  await page.getByLabel('รูปแบบพื้นที่อ่าน').selectOption('full');
  expect((await page.locator('.fs-guide').boundingBox()).width).toBeGreaterThan(initialWidth);
  await expect(page.locator('.fs-code-area')).toBeHidden();
  await page.getByLabel('รูปแบบพื้นที่อ่าน').selectOption('wide');
  const handle = page.getByRole('separator', {name:'ปรับความกว้างแผงโจทย์',exact:true});
  const initialGuide = (await page.locator('.fs-guide').boundingBox()).width;
  await handle.focus(); await page.keyboard.press('ArrowRight');
  expect((await page.locator('.fs-guide').boundingBox()).width).toBeGreaterThan(initialGuide);
  await page.keyboard.press('ArrowLeft');

  // Navigation remains usable after scrolling through a long step.
  await reader.getByText('ดูแนวคิดหลังลองตอบ', { exact: true }).click();
  const panel = page.locator('.fs-guide-content');
  const controls = page.getByRole('navigation', { name: 'ลำดับการอ่าน' });
  const panelBox = await panel.boundingBox();
  const navBox = await controls.boundingBox();
  expect(navBox.y + navBox.height).toBeLessThanOrEqual(panelBox.y + 1);
  expect(navBox.y + navBox.height).toBeLessThanOrEqual(panelBox.y + panelBox.height + 1);
  await page.getByRole('button', { name: 'ถัดไป', exact: true }).click();
  await expect(choice).toHaveValue('1');
  await expect(reader.locator('article > h3')).toBeFocused();
  await expect(reader.locator('article > h3')).toBeInViewport();
  await expect(reader).toContainText('response.ok');
  await expect(reader.locator('article')).toHaveCount(1);
  await page.reload();
  await expect(page.getByLabel('เลือกขั้นตอนการอ่าน')).toHaveValue('1');
  await page.getByLabel('เลือกขั้นตอนการอ่าน').selectOption('3');
  await expect(page.getByRole('button', { name: 'ถัดไป', exact: true })).toBeDisabled();
  await expect(reader).toContainText('ครบขั้นของ Level นี้แล้ว');
  expect(await page.evaluate(() => localStorage.getItem('fullstack-v1:guided-3'))).toBe(before);
  await page.screenshot({ path: 'tmp/reading-desktop.png' });
});

test('all lessons and workshops expose preparation and narrated examples without overlapping controls', async ({ page }) => {
  test.setTimeout(120000);
  await page.goto('/?course=fullstack');
  await page.getByRole('button', {name:'เริ่มเรียนจากศูนย์',exact:true}).click();
  await expect(page.locator('.fs-workspace-bar h1')).toContainText('Level 1');
  for (const item of fullstackCurriculum.filter(item => !item.walkthrough && item.kind !== 'exam')) {
    await page.locator('.fs-lesson-link').filter({hasText:item.title}).click();
    await page.getByRole('button',{name:'บทเรียน',exact:true}).click();
    const choice = page.getByLabel('เลือกขั้นตอนการอ่าน');
    await choice.selectOption({label:'เตรียมไฟล์และ dependencies'});
    const reader = page.getByRole('region',{name:'อ่านทีละขั้น',exact:true});
    await expect(reader).toContainText('แพ็กเกจที่ใช้ในช่วงนี้');
    await expect(reader).not.toContainText('.cjs');
    await expect(reader.locator('article')).toHaveCount(1);
    // The next stage cannot inherit the end of the previous stage's scroll.
    await page.locator('.fs-guide-content').evaluate(element => { element.scrollTop=element.scrollHeight; });
    const navBefore = await page.getByRole('navigation',{name:'ลำดับการอ่าน'}).boundingBox();
    const panel = await page.locator('.fs-guide-content').boundingBox();
    expect(navBefore.y+navBefore.height).toBeLessThanOrEqual(panel.y+1);
    await choice.selectOption('3');
    await expect(reader.locator('article > h3')).toBeInViewport();
    await expect(reader.locator('pre')).toBeVisible();
    await choice.selectOption({label:'จากตัวอย่างไปโจทย์'});
    await expect(reader).toContainText('ลองอธิบายก่อนเปิดแนวคิด');
  }
});

test('reading expands and shrinks with a real drag and full mode never covers paragraph text', async ({ page }) => {
  await page.goto('/?course=fullstack');
  await page.locator('.fs-lesson-link').filter({hasText:'รู้จักโปรเจกต์และแก้หน้าแรก'}).click();
  await page.getByLabel('รูปแบบพื้นที่อ่าน').selectOption('wide');
  const handle=page.getByRole('separator',{name:'ปรับความกว้างแผงโจทย์',exact:true});
  const before=(await page.locator('.fs-guide').boundingBox()).width;
  let box=await handle.boundingBox();
  await page.mouse.move(box.x+box.width/2,box.y+box.height/2);await page.mouse.down();await page.mouse.move(box.x+140,box.y+box.height/2);await page.mouse.up();
  const expanded=(await page.locator('.fs-guide').boundingBox()).width;
  expect(expanded).toBeGreaterThan(before+60);
  box=await handle.boundingBox();
  await page.mouse.move(box.x+box.width/2,box.y+box.height/2);await page.mouse.down();await page.mouse.move(box.x-120,box.y+box.height/2);await page.mouse.up();
  expect((await page.locator('.fs-guide').boundingBox()).width).toBeLessThan(expanded-60);
  await page.getByLabel('รูปแบบพื้นที่อ่าน').selectOption('full');
  await expect(page.locator('.fs-code-area')).toBeHidden();
  await expect(page.locator('.fs-course-sidebar')).toBeHidden();
  await page.getByLabel('เลือกขั้นตอนการอ่าน').selectOption({label:'คำศัพท์ที่จะใช้กับตัวอย่าง'});
  const paragraph=page.locator('.fs-reading-sequence li').first();
  await paragraph.scrollIntoViewIfNeeded();
  const toolbar=await page.getByRole('navigation',{name:'ลำดับการอ่าน'}).boundingBox();
  const text=await paragraph.boundingBox();expect(text.y).toBeGreaterThanOrEqual(toolbar.y+toolbar.height);
  await page.screenshot({path:'tmp/reading-full-desktop.png'});
  await page.getByLabel('รูปแบบพื้นที่อ่าน').selectOption('normal');
  await expect(page.locator('.fs-code-area')).toBeVisible();
  await expect(page.locator('.fs-output')).toBeVisible();
});

test('the slide project download contains matching file types, dependencies and database setup', async ({ page }) => {
  await page.goto('/?course=fullstack');
  await page.locator('.fs-lesson-link').filter({hasText:'SQL และ parameterized query'}).click();
  await page.getByLabel('เลือกขั้นตอนการอ่าน').selectOption({label:'เตรียมไฟล์และ dependencies'});
  const pending=page.waitForEvent('download');
  await page.getByRole('button',{name:'ดาวน์โหลด MySQL + Axios ตามสไลด์',exact:true}).click();
  const result=await pending;const files=readProjectZip(await readFile(await result.path()));
  const pkg=JSON.parse(files['package.json']);
  expect(pkg.dependencies.mysql2).toBeTruthy();expect(pkg.dependencies.axios).toBeTruthy();
  expect(JSON.parse(files['backend/package.json']).type).toBe('commonjs');
  expect(files['frontend/components/CustomerForm.jsx']).toContain('Number(provinceId)');
  expect(files['database/schema.sql']).toContain('CREATE TABLE');
  expect(files['compose.yaml']).toContain('service_healthy');
  expect(files['frontend/nginx.conf']).toContain('proxy_pass http://backend:3000');
  expect(Object.keys(files).some(path=>path.endsWith('.cjs'))).toBe(false);
});

test('lesson examples and their explanations share one reading step', async ({ page }) => {
  await page.goto('/?course=fullstack');
  await page.locator('.fs-lesson-link').filter({hasText:'รู้จักโปรเจกต์และแก้หน้าแรก'}).click();
  const reader = page.getByRole('region', { name: 'อ่านทีละขั้น', exact: true });
  await page.getByLabel('เลือกขั้นตอนการอ่าน').selectOption({label:'หาไฟล์ที่ควบคุมข้อความบนหน้า'});
  await expect(reader).toContainText('ไล่การทำงานของตัวอย่าง');
  await expect(reader.locator('pre')).toBeVisible();
  await expect(page.locator('.fs-guide-content pre')).toHaveCount(1);
  await page.getByLabel('เลือกขั้นตอนการอ่าน').selectOption({ label: 'ทดลองและสังเกตผล' });
  await reader.getByRole('button', { name: 'เริ่มลงมือทำ →', exact: true }).click();
  await expect(page.locator('.fs-guide-content')).toContainText('สิ่งที่ต้องทำ');
});

test('all five Levels can be read in order on mobile without horizontal scrolling', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/?course=fullstack');
  await page.getByRole('button', { name: 'ไม่เคยใช้ npm เริ่มตรงนี้' }).click();
  await page.getByRole('button', { name: 'ฝึก Level 1 ในแอป', exact: true }).click();
  const reader = page.getByRole('region', { name: 'อ่านทีละขั้น', exact: true });
  await page.getByRole('button', { name: 'ถัดไป', exact: true }).click();
  await expect(reader.locator('article > h3')).toBeInViewport();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await expect(reader.locator('article')).toHaveCount(1);
  await page.screenshot({ path: 'tmp/reading-mobile.png' });
  await reader.getByRole('button', { name: 'เปิด scripts/hello.js', exact: true }).click();
  await expect(page.locator('.monaco-editor')).toBeVisible();
  await page.getByRole('button', { name: 'โจทย์ / บทเรียน', exact: true }).click();
  await expect(page.getByLabel('เลือกขั้นตอนการอ่าน')).toHaveValue('1');

  await page.setViewportSize({ width: 1600, height: 1000 });
  for (const project of guidedProjects) {
    await page.locator('.fs-lesson-link').filter({ hasText: project.title }).click();
    for (let index = 0; index < project.walkthrough.length; index++) {
      await page.getByLabel('เลือกขั้นตอนการอ่าน').selectOption(String(index));
      await expect(reader).toContainText('ทำขั้นนี้ไปทำไม');
      await expect(reader).toContainText('โค้ดทำงานอย่างไร');
      await expect(reader).toContainText('ลองเปลี่ยน แล้วอธิบายด้วยตัวเอง');
      await expect(reader.locator('article')).toHaveCount(1);
    }
  }
});
