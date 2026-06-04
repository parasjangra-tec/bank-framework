const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { loginData } = require('../../test-data/loginData');

loginData.forEach((data) => {

  test(`Login Test - ${data.username} - ${data.valid}`, async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.openWebsite();

    await loginPage.login(
      data.username,
      data.password
    );

    if (data.valid) {

      await expect(page).toHaveURL(/overview.htm/);

    } else {

      await expect(loginPage.errorMessage).toBeVisible();

    }

  });

});