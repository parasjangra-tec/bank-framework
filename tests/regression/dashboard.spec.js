const { test, expect } = require('@playwright/test');

test('Verify Dashboard Page', async ({ page }) => {

  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await expect(page).toHaveTitle(/ParaBank/);

});