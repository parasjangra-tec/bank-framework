class TransactionHistoryPage {

  constructor(page) {

    this.page = page;

    this.firstAccountLink =
      page.locator('#accountTable a').first();

    this.accountDetailsHeading =
      page.getByRole('heading', {
        name: 'Account Details'
      });

    this.accountActivityHeading =
      page.getByRole('heading', {
        name: 'Account Activity'
      });

    this.transactionTable =
      page.locator('#transactionTable');

  }

  async openFirstAccount() {

    await this.firstAccountLink.click();

  }

}

module.exports = { TransactionHistoryPage };