const { test, expect } = require('@playwright/test');

test('@api @regression Validate User Response', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody).toHaveProperty('id');

  expect(responseBody).toHaveProperty('name');

  expect(responseBody).toHaveProperty('username');

  expect(responseBody).toHaveProperty('email');

});