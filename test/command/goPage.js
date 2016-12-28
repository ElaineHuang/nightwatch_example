exports.command = function(){
    let browser = this.page.todo();
    browser
        .navigate()
        .waitForElementPresent('@app', 'page ok')
        .assert.containsText('@title', 'todo MVC', 'title ok')
        .assert.elementPresent('@filters', 'filter ok')
        .assert.elementPresent('@new_todo', 'input field ok')
        .assert.elementPresent('@btn_add', 'add button ok')
        .assert.elementPresent('@btn_ajax', 'ajax button ok');
    return this;
};
