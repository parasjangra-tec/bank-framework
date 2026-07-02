const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { DashboardPage } = require('../../pages/DashboardPage');

test('@regression Verify Dashboard Page', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.openWebsite();

  await loginPage.login(
    process.env.PARABANK_USERNAME,
    process.env.PARABANK_PASSWORD
  );

  await expect(
    dashboardPage.accountsOverviewHeading
  ).toBeVisible();

  const accountCount =
    await dashboardPage.accountNumbers.count();

  expect(accountCount).toBeGreaterThan(0);

});