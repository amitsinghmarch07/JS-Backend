import { iTodoService } from "./iTodoService";
import { Todo } from "./Todo";


export class TodoComponent {

    private todoList  : Todo[] = []; 
    private todoService: iTodoService;

   private addButton : HTMLButtonElement;
   private todoInput : HTMLInputElement;
   private itemList : HTMLUListElement;

    constructor(selector: string, todoService: iTodoService) {
        this.todoService = todoService;

        this.createView(document.querySelector(selector) ?? document.body);

        this.addButton = document.querySelector("#add-button") as HTMLButtonElement;
        this.todoInput = document.querySelector("#todo-input") as HTMLInputElement;
        this.itemList = document.querySelector("#item-list") as HTMLUListElement;
        
        this.init(selector);
     }


    async init(selector: string) {
        const root = document.querySelector(selector);
        this.todoList = await this.todoService.getAllTodos();

        this.todoList.forEach( (todo: Todo) => {
            console.log(todo.todoKey);
            const item = `<li id="todo-${todo.todoKey}">${todo.todoItem}<button>X</button></li>`;
            this.itemList.insertAdjacentHTML("beforeend", item);
        });

        this.addButton?.addEventListener("click", async () => {
            let todo = await this.todoService.createTodo(this.todoInput?.value)
            this.renderTodo(todo);
            this.todoInput.value = "";
        });

        const list = await this.todoService.getAllTodos();
        list.forEach((todo: Todo) => this.renderTodo(todo));

    }

    private createView(root: HTMLElement) {

        const template = `
        
        <div>
        <input id="todo-input" type="text" placeHolder="Enter text here"/>
        <button id="add-button">Create</buton>
        </div>

        <ul id="item-list"></ul>
        `;

        root?.insertAdjacentHTML("beforeend", template);
    }

    private renderTodo(todo: Todo) {
        
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

        this.itemList.querySelector(`#todo-${todo.todoKey} > button`)
        ?.addEventListener("click", () => {
            this.todoService.deleteTodo(todo.todoKey);
            this.itemList.querySelector(`#todo-${todo.todoKey}`)?.remove();
        });

    }
}

// module.exports = TodoComponent;