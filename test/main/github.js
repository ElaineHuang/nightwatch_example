let username = 'fastfood001';
let password = 'fastfood000';
let repositoryName = 'eulfieiflsfjiejflsf';

module.exports = {
    beforeEach(browser) {
        browser
          .resizeWindow(1920, 1080)
          .login();
    },
    afterEach(browser, done) {
        done();
    },
    after(browser) {
        browser.end();
    },
  'go to github index page': (browser) => {
    browser
      .page.github().createRepository(repositoryName)
      .page.github().deleteRepository(username, repositoryName);
  }
};