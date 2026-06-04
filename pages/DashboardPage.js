class DashboardPage {

  constructor(page) {
    this.page = page;
  }

  async verifyDashboardLoaded() {

    await this.page.waitForLoadState('networkidle');

  }

}

module.exports = { DashboardPage };