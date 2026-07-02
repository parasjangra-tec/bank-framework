const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { TransactionHistoryPage } = require('../../pages/TransactionHistoryPage');

test('@regression Verify Transaction History', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const transactionHistoryPage =
    new TransactionHistoryPage(page);

  await loginPage.openWebsite();

  await loginPage.login(
    process.env.PARABANK_USERNAME,
    process.env.PARABANK_PASSWORD
  );

  await transactionHistoryPage.openFirstAccount();

  await expect(
    transactionHistoryPage.accountDetailsHeading
  ).toBeVisible();

  await expect(
    transactionHistoryPage.accountActivityHeading
  ).toBeVisible();

  await expect(
    transactionHistoryPage.transactionTable
  ).toBeVisible();

});