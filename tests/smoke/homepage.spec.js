const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');

test('@smoke Homepage Opens', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.openWebsite();

  await expect(page).toHaveTitle(/ParaBank/);

  await expect(
    page.getByRole('heading', {
      name: 'Customer Login'
    })
  ).toBeVisible();

});