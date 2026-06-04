const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {

  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

});

test('Verify title', async ({ page }) => {

  await expect(page).toHaveTitle(/ParaBank/);

});

test('Verify URL', async ({ page }) => {

  await expect(page).toHaveURL(/parabank/);

});