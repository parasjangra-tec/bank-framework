class UpdateProfilePage {

  constructor(page) {

    this.page = page;

    this.updateProfileLink =
      page.getByRole('link', {
        name: 'Update Contact Info'
      });

    this.updateButton =
      page.getByRole('button', {
        name: 'Update Profile'
      });

    this.successMessage =
      page.getByText('Profile Updated');

  }

  async openUpdateProfile() {

    await this.updateProfileLink.click();

  }

  async updateProfile() {

    await this.updateButton.click();

  }

}

module.exports = { UpdateProfilePage };