class LoginPage {

  constructor(page) {

    this.page = page;

    // Locators
    this.usernameInput = page.locator('input[name="username"]');

    this.passwordInput = page.locator('input[name="password"]');

    this.loginButton = page.locator('input[value="Log In"]');

    this.errorMessage = page.locator('.error');

  }

  // Open website
  async openWebsite() {

    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');

  }

  // Login method
  async login(username, password) {

    await this.usernameInput.fill(username);

    await this.passwordInput.fill(password);

    await this.loginButton.click();

  }

}

module.exports = { LoginPage };