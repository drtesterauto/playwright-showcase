import { test, expect } from '@playwright/test';

test.describe('Login tests on the-internet.herokuapp.com', () => {

  test('Successful login shows success message', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');

    const flash = page.locator('#flash');
    await expect(flash).toContainText('You logged into a secure area!');
  });

  test('Login with invalid credentials shows error', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    await page.fill('#username', 'wronguser');
    await page.fill('#password', 'wrongpass');
    await page.click('button[type="submit"]');

    const flash = page.locator('#flash');
    await expect(flash).toContainText('Your username is invalid!');
  });

});
