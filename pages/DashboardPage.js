class DashboardPage {

  constructor(page) {

    this.page = page;

    this.accountsOverviewHeading =
      page.getByRole('heading', {
        name: 'Accounts Overview'
      });

    this.accountNumbers =
      page.locator('#accountTable a');

  }

}

module.exports = { DashboardPage };