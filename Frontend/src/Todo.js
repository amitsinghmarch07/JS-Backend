"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    constructor(todoItem) {
        this.todoKey = ++Todo.lastKey;
        this.todoItem = todoItem;
    }
}
exports.Todo = Todo;
Todo.lastKey = 0;
