class FundTransferPage {

  constructor(page) {

    this.page = page;

    this.transferFundsLink =
      page.locator('a[href*="transfer"]');

    this.amountInput =
      page.locator('#amount');

    this.fromAccountDropdown =
      page.locator('#fromAccountId');

    this.toAccountDropdown =
      page.locator('#toAccountId');

    this.transferButton =
      page.locator('input[value="Transfer"]');

    this.successMessage =
      page.locator('#showResult');
  }

  async navigateToTransferFunds() {

    await this.transferFundsLink.click();

  }

  async transferFunds(amount) {

    await this.amountInput.fill(amount);

    await this.transferButton.click();

  }

}

module.exports = { FundTransferPage };