import { test, expect } from '@playwright/test';
import { guidedProjects } from '../../src/fullstack/guidedProjects.js';

test.beforeEach(async ({ page }) => { await page.addInitScript(() => { localStorage.setItem('fullstack-reading-mode', JSON.stringify('normal')); }); });

test('a beginner completes all five levels through the editor, real Node and a working task board', async ({ page }) => {
  test.skip(process.env.FULLSTACK_RUNTIME !== '1', 'Requires downloading packages for the real browser runtime');
  test.setTimeout(900000);
  const errors = []; page.on('pageerror', error => errors.push(error.message));
  await page.goto('/?course=fullstack');
  try {
    for (const [index, item] of guidedProjects.entries()) {
      if (index > 0) await page.getByRole('button', { name: 'เส้นทางการเรียนรู้', exact: true }).click();
      await page.getByRole('region', { name: 'เวิร์กช็อปจับมือทำ' }).getByRole('button').nth(index).click();
      console.log('Guided level', index + 1, 'opening', item.entry);
      await expect(page.locator('.fs-workspace-bar h1')).toHaveText(item.title);
      await expect(page.getByRole('region', { name: 'ขั้นตอนจับมือทำ' })).toBeVisible();
      const code = index === 0 ? 'const learner = "Mali";\nconsole.log(`Hello Node, ${learner}`);\n' : item.solution[item.entry];
      await page.locator('.monaco-editor textarea').first().focus();
      await page.keyboard.press('Control+a');
      await page.keyboard.insertText(code);
      if (index === 0) {
        await page.getByRole('button', { name: 'ตรวจงาน', exact: true }).click();
        await expect(page.locator('.fs-notice')).toContainText('ผ่านชุดตรวจอัตโนมัติแล้ว', { timeout: 90000 });
        await expect(page.locator('.fs-runtime-status')).toHaveText('พร้อมตรวจงาน');
        await page.getByRole('button', { name: 'รันโปรเจกต์', exact: true }).click();
      } else {
        await page.getByRole('button', { name: 'รันโปรเจกต์', exact: true }).click();
      }
      await expect(page.locator('.fs-runtime-status')).toHaveText('กำลังรัน', { timeout: 150000 });
      console.log('Guided level', index + 1, 'runtime ready');
      if (index === 0) {
        await page.locator('.xterm-helper-textarea').focus();
        await page.keyboard.type('node scripts/hello.js'); await page.keyboard.press('Enter');
        await expect(page.locator('.xterm-screen')).toContainText('Hello Node, Mali', { timeout: 15000 });
      } else if (index === 1) {
        await page.getByRole('button', { name: 'API Client', exact: true }).click();
        await page.getByRole('button', { name: 'ส่ง request', exact: true }).click();
        await expect(page.locator('.fs-api-client pre')).toContainText('เรียน Node', { timeout: 15000 });
        await page.getByRole('button', { name: 'Preview', exact: true }).click();
      } else {
        const preview = page.frameLocator('iframe[title="Full Stack project preview"]');
        await expect(preview.getByRole('heading', { name: 'My Task Board' })).toBeVisible({ timeout: 45000 });
        if (index >= 3) await expect(preview.getByText('เรียน Node', { exact: true })).toBeVisible();
        if (index === 4) {
          await preview.getByLabel('ชื่องาน', { exact: true }).fill('งานที่ฉันทำเอง');
          await preview.getByRole('button', { name: 'เพิ่มงาน', exact: true }).click();
          await expect(preview.getByText('งานที่ฉันทำเอง', { exact: true })).toBeVisible();
          const toggle = preview.getByRole('button', { name: 'สลับสถานะ งานที่ฉันทำเอง', exact: true });
          await toggle.click(); await expect(toggle).toHaveText('ทำต่อ');
          await page.getByRole('button', { name: 'รีเฟรช Preview' }).click();
          await expect(preview.getByRole('button', { name: 'สลับสถานะ งานที่ฉันทำเอง', exact: true })).toHaveText('ทำต่อ', { timeout: 15000 });
          await preview.getByRole('button', { name: 'ลบ งานที่ฉันทำเอง', exact: true }).click();
          await expect(preview.getByText('งานที่ฉันทำเอง', { exact: true })).toHaveCount(0);
          await page.screenshot({ path: 'tmp/guided-finished-project.png' });
        }
      }
      if (index > 0) {
        await page.getByRole('button', { name: 'ตรวจงาน', exact: true }).click();
        await expect(page.locator('.fs-notice')).toContainText('ผ่านชุดตรวจอัตโนมัติแล้ว', { timeout: 45000 });
      }
      console.log('Guided level', index + 1, 'passed');
    }
    await page.getByRole('button', { name: 'เส้นทางการเรียนรู้', exact: true }).click();
    await expect(page.getByRole('region', { name: 'เวิร์กช็อปจับมือทำ' }).getByText('ตรวจผ่านแล้ว', { exact: true })).toHaveCount(5);
    expect(errors).toEqual([]);
  } finally {
    console.log('Final runtime:', await page.locator('.fs-runtime-status').allTextContents());
    console.log('Notices:', await page.locator('.fs-notice').allTextContents());
  }
});
