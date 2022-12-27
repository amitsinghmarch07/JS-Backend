"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoTempRouter = void 0;
const express_1 = __importDefault(require("express"));
class Todo {
    constructor(key, todoItem) {
        this.todoKey = key;
        this.todoItem = todoItem;
    }
}
class TodoTempRouter {
    constructor() {
        this.port = 10000;
        this.todoList = [];
        this.router = (0, express_1.default)();
        this.todoList.push(new Todo(1, "Buy Milk"));
        this.addRoutes();
        this.router.listen(this.port, () => console.log(`Todo5 started on ${this.port}`));
    }
    addRoutes() {
        this.router.get("/", (req, res) => {
            console.log(req);
            res.send({ "todoKey": "1", "todoItem": 'Buy Milk' });
        });
        this.router.post("/", (req, res) => {
            res.send("kya hua be request");
        });
    }
}
exports.TodoTempRouter = TodoTempRouter;
