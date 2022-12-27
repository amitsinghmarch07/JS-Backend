import { TodoComponent } from "./TodoComponent";
import { TodoRemoteService } from "./TodoRemoteService";
import { TodoTempRouter } from "./TodoTempRouter";

document.addEventListener("DOMContentLoaded", () => {
    // const todoComponent = new TodoComponent("app-root", new TodoLocalService()); 
    const todoComponent = new TodoComponent("app-root", new TodoRemoteService(new TodoTempRouter()));

});