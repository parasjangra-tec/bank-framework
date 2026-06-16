const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');

const { BillPayPage } = require('../../pages/BillPayPage');

test('Verify Bill Payment', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const billPayPage = new BillPayPage(page);

  await loginPage.openWebsite();

  await loginPage.login(
    'john',
    'demo'
  );

  await billPayPage.navigateToBillPay();

  await billPayPage.payBill();

  await expect(
    billPayPage.successMessage
  ).toContainText('Bill Payment Complete');

});