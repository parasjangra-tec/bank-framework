const { test, expect } = require('@playwright/test');

test('@api @regression Update User API', async ({ request }) => {

  const response = await request.put(
    'https://jsonplaceholder.typicode.com/users/1',
    {
      data: {
        name: 'Paras Updated',
        email: 'updated@test.com'
      }
    }
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.name).toBe('Paras Updated');

});