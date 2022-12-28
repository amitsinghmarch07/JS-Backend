import { TodoComponent } from "./TodoComponent";
import { TodoRemoteService } from "./TodoRemoteService";

document.addEventListener("DOMContentLoaded", () => {
    // const todoComponent = new TodoComponent("app-root", new TodoLocalService());
    const url = "http://localhost:10000" 
    const todoComponent = new TodoComponent(
        "app-root",
         new TodoRemoteService(url));
});