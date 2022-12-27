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
exports.TodoComponent = void 0;
class TodoComponent {
    constructor(selector, todoService) {
        var _a;
        this.todoList = [];
        this.todoService = todoService;
        this.createView((_a = document.querySelector(selector)) !== null && _a !== void 0 ? _a : document.body);
        this.addButton = document.querySelector("#add-button");
        this.todoInput = document.querySelector("#todo-input");
        this.itemList = document.querySelector("#item-list");
        this.init(selector);
    }
    init(selector) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const root = document.querySelector(selector);
            this.todoList = yield this.todoService.getAllTodos();
            this.todoList.forEach((todo) => {
                console.log(todo.todoKey);
                const item = `<li id="todo-${todo.todoKey}">${todo.todoItem}<button>X</button></li>`;
                this.itemList.insertAdjacentHTML("beforeend", item);
            });
            (_a = this.addButton) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                var _b;
                let todo = yield this.todoService.createTodo((_b = this.todoInput) === null || _b === void 0 ? void 0 : _b.value);
                this.renderTodo(todo);
                this.todoInput.value = "";
            }));
            const list = yield this.todoService.getAllTodos();
            list.forEach((todo) => this.renderTodo(todo));
        });
    }
    createView(root) {
        const template = `
        
        <div>
        <input id="todo-input" type="text" placeHolder="Enter text here"/>
        <button id="add-button">Create</buton>
        </div>

        <ul id="item-list"></ul>
        `;
        root === null || root === void 0 ? void 0 : root.insertAdjacentHTML("beforeend", template);
    }
    renderTodo(todo) {
        var _a;
        const buttonStyle = `
        background-color:transparent;
        color:red;
        border:none`;
        const item = `
        <li id="todo-${todo.todoKey}">
        ${todo.todoItem}
        <button style="${buttonStyle}">X</button>
        </li>`;
        this.itemList.insertAdjacentHTML("beforeend", item);
        (_a = this.itemList.querySelector(`#todo-${todo.todoKey} > button`)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            var _a;
            this.todoService.deleteTodo(todo.todoKey);
            (_a = this.itemList.querySelector(`#todo-${todo.todoKey}`)) === null || _a === void 0 ? void 0 : _a.remove();
        });
    }
}
exports.TodoComponent = TodoComponent;
// module.exports = TodoComponent;
