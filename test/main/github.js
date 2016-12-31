"use strict";
let randomstring = require("randomstring");
let username = 'fastfood001';
let password = 'fastfood000';
let repositoryName = randomstring.generate({
  length: 12,
  charset: 'alphabetic'
});

module.exports = {
  beforeEach(browser) {
      browser
        .resizeWindow(1920, 1080)
        .login(username, password);
  },
  afterEach(browser, done) {
      done();
  },
  after(browser) {
      browser.end();
  },
  'go to github index page': (browser) => {
    browser
      .page.github().createRepo(repositoryName)
      .page.github().deleteRepo(username, repositoryName);
  }
};