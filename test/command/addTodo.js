exports.command = function addTodo(todo){
    var browser = this.page.todo();
    browser
        .setValue('@new_todo', todo)
        .click('@btn_add')
        .assert.value('@new_todo', '', 'input field is empty')

    return this;
}
