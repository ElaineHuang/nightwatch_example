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
    index_flashnotice: '.flash-notice'
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
        this.click('span[title="' + resName + '"]')
            .waitForElementVisible('@rep_container')
            .click('@rep_setting')
            .waitForElementVisible('@setting_field_rename')
            .click('@setting_delete')
            .waitForElementVisible('@setting_modal')
            .setValue('@setting_modal_resname', repositoryName)
            .click('@setting_modal_del')
            .waitForElementVisible('@index_flashnotice')
        return this.api;
    }
  }]
};