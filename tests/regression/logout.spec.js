const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');

test('@regression Logout User', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.openWebsite();

  await loginPage.login(
    process.env.PARABANK_USERNAME,
    process.env.PARABANK_PASSWORD
  );

  await page.getByRole('link', {
    name: 'Log Out'
  }).click();

  await expect(page).toHaveURL(/index.htm/);

  await expect(
    page.getByRole('heading', {
      name: 'Customer Login'
    })
  ).toBeVisible();

});