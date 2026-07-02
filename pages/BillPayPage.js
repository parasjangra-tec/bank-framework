class BillPayPage {

  constructor(page) {

    this.page = page;

    this.billPayLink =
      page.getByRole('link', {
        name: 'Bill Pay'
      });

    this.payeeName =
      page.locator('input[name="payee.name"]');

    this.address =
      page.locator('input[name="payee.address.street"]');

    this.city =
      page.locator('input[name="payee.address.city"]');

    this.state =
      page.locator('input[name="payee.address.state"]');

    this.zipCode =
      page.locator('input[name="payee.address.zipCode"]');

    this.phone =
      page.locator('input[name="payee.phoneNumber"]');

    this.accountNumber =
      page.locator('input[name="payee.accountNumber"]');

    this.verifyAccountNumber =
      page.locator('input[name="verifyAccount"]');

    this.amount =
      page.locator('input[name="amount"]');

    this.sendPaymentButton =
      page.locator('input[value="Send Payment"]');

    this.successMessage =
      page.locator('#billpayResult');

  }

  async navigateToBillPay() {

    await this.billPayLink.click();

  }

  async payBill() {

    await this.payeeName.fill('Electricity Board');
    await this.address.fill('Sector 74');
    await this.city.fill('Mohali');
    await this.state.fill('Punjab');
    await this.zipCode.fill('160055');
    await this.phone.fill('9999999999');
    await this.accountNumber.fill('12345');
    await this.verifyAccountNumber.fill('12345');
    await this.amount.fill('500');

    await this.sendPaymentButton.click();

  }

}

module.exports = { BillPayPage };