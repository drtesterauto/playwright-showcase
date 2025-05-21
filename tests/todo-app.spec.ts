import { test, expect } from '@playwright/test';

test('should add and complete a todo item', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await page.getByPlaceholder('What needs to be done?').fill('Learn Playwright');
  await page.keyboard.press('Enter');
  await expect(page.locator('.todo-list li')).toHaveCount(1);
  await page.locator('.toggle').click();
  await expect(page.locator('.todo-list li')).toHaveClass(/completed/);
});
