const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { FundTransferPage } = require('../../pages/FundTransferPage');

test('Transfer Funds', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const fundTransferPage =
    new FundTransferPage(page);

  await loginPage.openWebsite();

  await loginPage.login(
    'john',
    'demo'
  );

  await fundTransferPage.navigateToTransferFunds();

  await fundTransferPage.transferFunds('100');

  await expect(
    fundTransferPage.successMessage
  ).toContainText('Transfer Complete');

});