const { test, expect } = require('@playwright/test');

test('Practice locators', async ({ page }) => {

  // Open website
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  // Type username
  await page.locator('input[name="username"]').fill('john');

  // Type password
  await page.locator('input[name="password"]').fill('demo');

  // Click login button
  await page.locator('input[value="Log In"]').click();

});