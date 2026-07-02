const { test, expect } = require('@playwright/test');

test('@api @regression Create User API', async ({ request }) => {

  const response = await request.post(
    'https://jsonplaceholder.typicode.com/users',
    {
      data: {
        name: 'Paras',
        email: 'paras@test.com'
      }
    }
  );

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  expect(responseBody.name).toBe('Paras');

  expect(responseBody.email).toBe('paras@test.com');

});