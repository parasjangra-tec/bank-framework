const { test, expect } = require('@playwright/test');

test('@smoke Verify homepage title', async ({ page }) => {

  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await expect(page).toHaveURL(/parabank/);

});