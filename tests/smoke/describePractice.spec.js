const { test, expect } = require('@playwright/test');

test.describe('Login Feature', () => {

  test.beforeAll(async () => {
    console.log('Starting Login Tests...');
  });

  test.afterAll(async () => {
    console.log('Login Tests Completed...');
  });

  test('Verify homepage title', async ({ page }) => {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    await expect(page).toHaveTitle(/ParaBank/);

  });

  test('Verify homepage URL', async ({ page }) => {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    await expect(page).toHaveURL(/parabank/);

  });

});