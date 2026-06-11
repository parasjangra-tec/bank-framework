const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { loginData } = require('../../test-data/loginData');

test('Homepage opens', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.openWebsite();

  // Data file se read kar rahe hain
  console.log(loginData[0].username);

  await expect(page).toHaveTitle(/ParaBank/);

});