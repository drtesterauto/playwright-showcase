import { test, expect, devices } from '@playwright/test';

test.use({ ...devices['iPhone 13'] });

test('mobile view - check layout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
});