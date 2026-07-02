const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { FundTransferPage } = require('../../pages/FundTransferPage');

test('@regression Verify Fund Transfer', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const fundTransferPage = new FundTransferPage(page);

  await loginPage.openWebsite();

  await loginPage.login(
    process.env.PARABANK_USERNAME,
    process.env.PARABANK_PASSWORD
  );

  await fundTransferPage.openTransferFunds();

  await fundTransferPage.transferFunds();

  await expect(
    fundTransferPage.successMessage
  ).toContainText('Transfer Complete');

});