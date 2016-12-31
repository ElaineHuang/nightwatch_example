"use strict";
module.exports = {
    beforeEach(browser) {
        browser.goPage();
    },
    afterEach(browser, done) {
        done();
    },
    after(browser) {
        browser.end();
    },
    '輸入待辦事項後應清空輸入框': (browser) => {
        const todo = `new todo 1`;

        browser
            .addTodo(todo);
    },
    '建立新待辦事項後應該出現在列表': (browser) => {
        const todo = `new todo 1`;

        browser
            .addTodo(todo)
            .shouldSeeAtList(1, todo);
    },
    '從api取得待辦事項後應該出現在列表': (browser) => {

        const todos = ['add1', 'add2'];

        browser.page.todo()
            .click('@btn_ajax');

        todos.map((todo, index) => {
            browser
                .shouldSeeAtList(index+1, todo);
        });
    },
    '完成待辦事項後應標記為完成': (browser) => {
        const todo = `new todo 1`;

        browser
            .addTodo(todo)
            .shouldSeeAtList(1, todo)
            .page.todo().completeTodo(1)
            .page.todo().shouldCompletedTodo(1);
    },
    '可從列表刪除待辦事項': (browser) => {
        const todo = `new todo 1`;

        browser
            .addTodo(todo)
            .shouldSeeAtList(1, todo)
            .page.todo().deleteTodo(1);
    },
    '切換filter並驗證': (browser) => {
        const todos = [
            {
                name: `new todo 1`,
                completed: true
            }, {
                name: `new todo 2`,
                completed: false
            }, {
                name: `new todo 3`,
                completed: true
            },
        ];

        todos.map((todo, index) => {
            browser
                .addTodo(todo.name)
                .shouldSeeAtList(index+1, todo.name);

            if (todo.completed) {
                browser
                    .page.todo().completeTodo(index+1)
                    .page.todo().shouldCompletedTodo(index+1);
            }
        });

        browser
            .page.todo().switchTag('Completed')
            .page.todo().switchTag('Active');
    }
};