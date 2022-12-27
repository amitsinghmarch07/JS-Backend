"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const Todo_1 = require("./Todo");
class TodoService {
    constructor() {
        var _a, _b;
        this.localStorageKey = "TodoList";
        const list = this.getAllTodos();
        Todo_1.Todo.lastKey = (_b = (_a = list.at(-1)) === null || _a === void 0 ? void 0 : _a.todoKey) !== null && _b !== void 0 ? _b : 0;
    }
    deleteTodo(todoKey) {
        console.log("TOKEN NUMBER");
        console.log(todoKey);
        let list = this.getAllTodos();
        console.log("BEFORE");
        console.log(list);
        list = list.filter(todo => todo.todoKey != todoKey);
        this.saveTodoList(list);
        console.log("AFTER");
        console.log(list);
        console.log("LOCAL");
        console.log(this.getAllTodos());
    }
    createTodo(item) {
        var _a, _b;
        const list = this.getAllTodos();
        Todo_1.Todo.lastKey = (_b = (_a = list.at(-1)) === null || _a === void 0 ? void 0 : _a.todoKey) !== null && _b !== void 0 ? _b : 0;
        const todo = new Todo_1.Todo(item);
        list.push(todo);
        this.saveTodoList(list);
        return todo;
    }
    saveTodoList(list) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(list));
    }
    getAllTodos() {
        var _a;
        return JSON.parse((_a = localStorage.getItem(this.localStorageKey)) !== null && _a !== void 0 ? _a : "[]");
    }
    updateTodo(todoKey, item) {
        const list = this.getAllTodos();
        const todo = list.find((todo) => todo.todoKey == todoKey);
        if (todo) {
            todo.todoItem = item;
            this.saveTodoList(list);
            return true;
        }
        return false;
    }
}
exports.TodoService = TodoService;
