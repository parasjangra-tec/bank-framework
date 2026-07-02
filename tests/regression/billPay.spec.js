const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { BillPayPage } = require('../../pages/BillPayPage');

test('@regression Verify Bill Payment', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const billPayPage = new BillPayPage(page);

  await loginPage.openWebsite();

  await loginPage.login(
    process.env.PARABANK_USERNAME,
    process.env.PARABANK_PASSWORD
  );

  await billPayPage.navigateToBillPay();

  await billPayPage.payBill();

  await expect(
    billPayPage.successMessage
  ).toContainText('Bill Payment Complete');

});