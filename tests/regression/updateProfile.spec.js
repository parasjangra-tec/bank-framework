const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { UpdateProfilePage } = require('../../pages/UpdateProfilePage');

test('@regression Update Contact Information', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const updateProfilePage = new UpdateProfilePage(page);

  await loginPage.openWebsite();

  await loginPage.login(
    process.env.PARABANK_USERNAME,
    process.env.PARABANK_PASSWORD
  );

  await updateProfilePage.openUpdateProfile();

  await updateProfilePage.updateProfile();

  await expect(
    updateProfilePage.successMessage
  ).toBeVisible();

});