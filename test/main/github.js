"use strict";
let randomstring = require("randomstring");
let username = 'fastfood001';
let password = 'fastfood000';
let project = 'fubo-flea-market';
let repositoryName = randomstring.generate({
  length: 12,
  charset: 'alphabetic'
});
let startRepo = randomstring.generate({
  length: 12,
  charset: 'alphabetic'
});

module.exports = {
  before(browser) {
      browser
        .resizeWindow(1920, 1080)
        .login(username, password);
  },
  afterEach(browser, done) {
      done();
  },
  after(browser, done) {
      browser.end(() => {
        done();
      });
  },
  'create repo': (browser) => {
    browser
      .page.github().createRepo(repositoryName)
      .page.github().deleteRepo(username, repositoryName);
  },
  'star project': (browser) => {
    browser
      .page.github().createRepo(startRepo)
      .page.github().starProject(startRepo)
      .page.github().unstarProject()
      .page.github().deleteRepo(username, startRepo);
  }
};