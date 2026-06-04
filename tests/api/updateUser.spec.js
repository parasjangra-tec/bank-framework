const { test, expect } = require('@playwright/test');

test('Update User API', async ({ request }) => {

  const response = await request.put(
    'https://jsonplaceholder.typicode.com/users/1',
    {
      data: {
        id: 1,
        name: 'Paras Updated',
        email: 'updated@test.com'
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.name).toBe('Paras Updated');

  console.log(body);

});