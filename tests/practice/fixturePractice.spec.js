const { test, expect } = require('../../fixtures/pageFixture');

test('Open homepage using fixture', async ({ page, loginPage }) => {

  await loginPage.openWebsite();

  await expect(page).toHaveTitle(/ParaBank/);

});