const { test, expect } = require('@playwright/test');

test('@api @regression Get Users API', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.length).toBeGreaterThan(0);

});