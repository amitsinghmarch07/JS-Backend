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
exports.TodoRemoteService = void 0;
class TodoRemoteService {
    constructor() {
        this.url = "http://localhost:10000";
    }
    createTodo(item) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(JSON.stringify({ todoItem: item }));
            const result = yield fetch(this.url + "/", {
                method: "post",
                mode: "cors",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({ todoItem: item })
            });
            const response = yield result.json();
            console.log(response);
            return response;
        });
    }
    getTodo(todoKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield fetch(this.url + "/" + todoKey);
            return result.json();
        });
    }
    getAllTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (yield fetch(this.url + "/")).json();
        });
    }
    deleteTodo(todoKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield fetch(this.url + `/${todoKey}`, {
                method: "delete",
                mode: "cors"
            });
            return yield result.json();
        });
    }
    updateTodo(todoKey, todoItem) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield fetch(this.url + `/${todoKey}`, {
                method: "put",
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ todoItem: todoItem })
            });
            return yield result.json();
        });
    }
}
exports.TodoRemoteService = TodoRemoteService;
