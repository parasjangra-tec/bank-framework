const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { RequestLoanPage } = require('../../pages/RequestLoanPage');

test('@regression Request Loan', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const requestLoanPage = new RequestLoanPage(page);

  await loginPage.openWebsite();

  await loginPage.login(
    process.env.PARABANK_USERNAME,
    process.env.PARABANK_PASSWORD
  );

  await requestLoanPage.openRequestLoan();

  await requestLoanPage.requestLoan();

  await expect(
    requestLoanPage.resultHeading
  ).toBeVisible();

});