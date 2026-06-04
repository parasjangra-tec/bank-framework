const { test, expect } = require('@playwright/test');

test('Get Users API', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  expect(response.status()).toBe(200);

});