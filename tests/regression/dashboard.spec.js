const { test, expect } = require('@playwright/test');

test('Verify Dashboard Page', async ({ page }) => {

  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await page.locator('input[name="username"]').fill('john');

  await page.locator('input[name="password"]').fill('demo');

  await page.locator('input[value="Log In"]').click();

  await expect(page).toHaveURL(/overview.htm/);

  await expect(
    page.getByRole('heading', {
      name: 'Accounts Overview'
    })
  ).toBeVisible();

});