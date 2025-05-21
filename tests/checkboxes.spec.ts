import { test, expect } from '@playwright/test';

test.describe('Checkboxes tests', () => {

  test('Toggle checkboxes', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const checkboxes = page.locator('input[type="checkbox"]');

    // Check the first box if not already checked
    if (!(await checkboxes.nth(0).isChecked())) {
      await checkboxes.nth(0).check();
    }
    await expect(checkboxes.nth(0)).toBeChecked();

    // Uncheck the second box if it is checked
    if (await checkboxes.nth(1).isChecked()) {
      await checkboxes.nth(1).uncheck();
    }
    await expect(checkboxes.nth(1)).not.toBeChecked();
  });

});
