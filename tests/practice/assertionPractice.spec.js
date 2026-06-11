const { test, expect } = require('@playwright/test');

test('Verify homepage title', async ({ page }) => {

  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await expect(page).toHaveTitle(/ParaBank/);

  await expect(page).toHaveURL(/parabank/);

});