const { test } = require('@playwright/test');

test.beforeEach(async ({ page }) => {

  await page.goto(process.env.BASE_URL);

});

test.afterEach(async () => {

  console.log('Test Finished');

});