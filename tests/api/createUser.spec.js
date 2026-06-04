const { test, expect } = require('@playwright/test');

test('Create User API', async ({ request }) => {

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

  console.log(responseBody);

});