module.exports = {
    url: 'https://bbandydd.github.io/React_Redux_Todolist/',
    elements: {
        app: '#app',
        title: '#title',
        filters: '#filters',
        new_todo: '#new_todo',
        btn_add: '#btn_add',
        btn_ajax: '#btn_ajax'
    },
    commands: [{
        completeTodo(index) {
            this.waitForElementPresent(`#todo_list > li.todo:nth-child(${index}) > button.complete`, `todo:${index} complete btn ok`)
                .click(`#todo_list > li.todo:nth-child(${index}) > button.complete`);
            return this.api;
        },
        shouldCompletedTodo(index) {
            this.assert.attributeContains(`#todo_list > li.todo:nth-child(${index}) > span`, 'style', 'line-through', `todo:${index} is completed`);

            return this.api;
        },
        deleteTodo(index) {
            this.waitForElementPresent(`#todo_list > li.todo:nth-child(${index}) > button.delete`, `todo:${index} delete btn ok`)
                .click(`#todo_list > li.todo:nth-child(${index}) > button.delete`);

            return this.api;
        },
        switchTag(name) {
            this.waitForElementPresent(`#filters > .filter_${name}`, `${name} ok`)
                .click(`#filters > .filter_${name}`);

            return this.api;
        }
    }]
};