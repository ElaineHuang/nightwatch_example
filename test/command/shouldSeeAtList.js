exports.command = function(index, todo){
    var browser = this.page.todo();
    browser
      .waitForElementPresent(`#todo_list > li.todo:nth-child(${index})`, `todo:${index} ok`)
      .assert.containsText(`#todo_list > li.todo:nth-child(${index}) > span > span:first-child`, todo, `todo:${index} should be '${todo}'`);

    return this;
};
