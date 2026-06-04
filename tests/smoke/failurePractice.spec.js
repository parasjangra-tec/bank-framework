const { test, expect } = require('@playwright/test');

test('Intentional failure', async ({ page }) => {

  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  await expect(page).toHaveTitle('Wrong Title');

});