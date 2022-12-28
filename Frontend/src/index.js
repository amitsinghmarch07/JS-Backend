"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoComponent_1 = require("./TodoComponent");
const TodoRemoteService_1 = require("./TodoRemoteService");
document.addEventListener("DOMContentLoaded", () => {
    // const todoComponent = new TodoComponent("app-root", new TodoLocalService()); 
    const todoComponent = new TodoComponent_1.TodoComponent("app-root", new TodoRemoteService_1.TodoRemoteService());
});
