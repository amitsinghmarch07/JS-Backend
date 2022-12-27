"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoLocalService = void 0;
const Todo_1 = require("./Todo");
class TodoLocalService {
    constructor() {
        this.localStorageKey = "TodoList";
        this.init();
    }
    init() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield this.getAllTodos();
            Todo_1.Todo.lastKey = (_b = (_a = list.at(-1)) === null || _a === void 0 ? void 0 : _a.todoKey) !== null && _b !== void 0 ? _b : 0;
        });
    }
    createTodo(item) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield this.getAllTodos();
            Todo_1.Todo.lastKey = (_b = (_a = list.at(-1)) === null || _a === void 0 ? void 0 : _a.todoKey) !== null && _b !== void 0 ? _b : 0;
            const todo = new Todo_1.Todo(item);
            list.push(todo);
            this.saveTodoList(list);
            return todo;
        });
    }
    getTodo(todoKey) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield this.getAllTodos()).find(todo => todo.todoKey == todoKey);
        });
    }
    getAllTodos() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return JSON.parse((_a = localStorage.getItem(this.localStorageKey)) !== null && _a !== void 0 ? _a : "[]");
        });
    }
    deleteTodo(todoKey) {
        return __awaiter(this, void 0, void 0, function* () {
            let list = yield this.getAllTodos();
            list = list.filter(todo => todo.todoKey != todoKey);
            this.saveTodoList(list);
            return true;
        });
    }
    updateTodo(todoKey, item) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield this.getAllTodos();
            const todo = list.find((todo) => todo.todoKey == todoKey);
            if (todo) {
                todo.todoItem = item;
                this.saveTodoList(list);
                return true;
            }
            return false;
        });
    }
    saveTodoList(list) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(list));
    }
}
exports.TodoLocalService = TodoLocalService;
