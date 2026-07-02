class RequestLoanPage {

  constructor(page) {

    this.page = page;

    this.requestLoanLink =
      page.getByRole('link', {
        name: 'Request Loan'
      });

    this.loanAmount =
      page.locator('#amount');

    this.downPayment =
      page.locator('#downPayment');

    this.applyButton =
      page.locator('input[value="Apply Now"]');

    this.resultHeading =
      page.getByText('Loan Request Processed');

  }

  async openRequestLoan() {

    await this.requestLoanLink.click();

  }

  async requestLoan() {

    await this.loanAmount.fill('1000');

    await this.downPayment.fill('100');

    await this.applyButton.click();

  }

}

module.exports = { RequestLoanPage };