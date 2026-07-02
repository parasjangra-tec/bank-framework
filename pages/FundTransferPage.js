class FundTransferPage {

  constructor(page) {

    this.page = page;

    this.transferFundsLink =
      page.getByRole('link', {
        name: 'Transfer Funds'
      });

    this.amount =
      page.locator('#amount');

    this.transferButton =
      page.locator('input[value="Transfer"]');

    this.successMessage =
      page.locator('#showResult');

  }

  async openTransferFunds() {

    await this.transferFundsLink.click();

  }

  async transferFunds() {

    await this.amount.fill('100');

    await this.transferButton.click();

  }

}

module.exports = { FundTransferPage };