"use strict";
module.exports = {
  url: 'https://github.com',
  elements:{
    index_login_btn: 'body > header > div > div > div > a.btn.site-header-actions-btn.mr-1',
    login_field_username: '#login_field',
    login_field_password: '#password',
    login_field_submit: 'input.btn',
    index_avatar: 'img.avatar',
    index_create_button: '.header-nav-link.tooltipped.tooltipped-s.js-menu-target',
    index_dropdown: '.dropdown-menu.dropdown-menu-sw',
    index_dropdown_newrep: '.dropdown-item:first-child',
    newrep_field_name: '#repository_name',
    newrep_field_submit: '.btn.btn-primary.first-in-line',
    rep_container: '.pagehead-actions',
    rep_setting: '#js-repo-pjax-container > div.pagehead.repohead.instapaper_ignore.readability-menu.experiment-repo-nav > div:nth-child(2) > nav > a:nth-child(8)',
    setting_field_rename: '#rename_field',
    setting_delete: '#options_bucket > div.boxed-group.dangerzone > div > button:nth-child(11)',
    setting_modal: '#facebox',
    setting_modal_resname: '#facebox > div > div > form > p > input',
    setting_modal_del: '#facebox > div > div > form > button' ,
    index_flashnotice: '.flash-notice',
    search_bar: 'input.form-control.header-search-input',
    repo_icon: 'h1.public > svg.octicon.octicon-repo',
    search_form: 'form.js-site-search-form',
    target_project: 'div.d-inline-block.col-9.mb-1 > h3 > a.v-align-middle',
    unstar_num: 'form.unstarred > a.social-count.js-social-count',
    star_num: 'form.starred > a',
    star_btn: 'form.unstarred > button.btn.btn-sm.btn-with-count.js-toggler-target',
    user_dropdown: '#user-links > li:nth-child(3) > a.header-nav-link',
    your_starts: '#user-links > li.header-nav-item.dropdown.js-menu-container.active > div > div > a:nth-child(4)',
    unstar_btn: '#js-pjax-container > div > div.col-9.float-left.pl-2 > div.js-repo-filter.position-relative > div:nth-child(2) > div.float-right > div > form.starred > button'
  },
  commands: [{
    createRepo(repositoryName){
        this.click('@index_create_button')
            .waitForElementVisible('@index_dropdown')
            .click('@index_dropdown_newrep')
            .waitForElementVisible('@newrep_field_name')
            .setValue('@newrep_field_name', repositoryName)
            .click('@newrep_field_submit')
            .waitForElementVisible('@rep_container');

        return this.api;
    },
    deleteRepo(account, repositoryName) {
        let resName = account + '/' + repositoryName;
        this.click('svg.octicon.octicon-mark-github')
            .waitForElementVisible('div.boxed-group-action')
            .click('span[title="' + resName + '"]')
            .waitForElementVisible('@rep_container')
            .click('@rep_setting')
            .waitForElementVisible('@setting_field_rename')
            .click('@setting_delete')
            .waitForElementVisible('@setting_modal')
            .setValue('@setting_modal_resname', repositoryName)
            .click('@setting_modal_del')
            .waitForElementVisible('@index_flashnotice');
        return this.api;
    },
    starProject(project) {
        this.click('svg.octicon.octicon-mark-github')
            .waitForElementNotPresent('@repo_icon')
            .setValue('@search_bar', project)
            .submitForm('@search_form')
            .waitForElementVisible('@target_project')
            .click('@target_project')
            .waitForElementVisible('@star_btn')
            .click('@star_btn');
        return this.api;
    },
    unstarProject() {
        this.waitForElementVisible('@user_dropdown')
            .click('@user_dropdown')
            .waitForElementVisible('@your_starts')
            .click('@your_starts')
            .waitForElementVisible('@unstar_btn')
            .click('@unstar_btn');
        return this.api;
    }
  }]
};