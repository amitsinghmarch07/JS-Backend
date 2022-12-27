import { iTodoService } from "./iTodoService";
import { Todo } from "./Todo";

export class TodoLocalService implements iTodoService {
    
    private localStorageKey = "TodoList";

    constructor() {
        this.init();
    }

    
    async init() {
        const list = await this.getAllTodos();
        Todo.lastKey = list.at(-1)?.todoKey ?? 0;
    }

    async createTodo(item: string) :Promise< Todo> {
        const list = await this.getAllTodos();
        Todo.lastKey = list.at(-1)?.todoKey ?? 0;
        const todo = new Todo(item);
        list.push(todo);
        this.saveTodoList(list);
        return todo;
    }

    async getTodo(todoKey: number): Promise<Todo | undefined> {
        return await (await this.getAllTodos()).find( todo => todo.todoKey == todoKey);
    }


    async getAllTodos() : Promise<Todo[]> {
        return JSON.parse(localStorage.getItem(this.localStorageKey) ?? "[]") as Todo[];
     }

    async deleteTodo(todoKey: number): Promise<Todo | boolean> {
        let list = await this.getAllTodos();
        list = list.filter( todo => todo.todoKey != todoKey );
        this.saveTodoList(list);
        return true;
    }

    async updateTodo(todoKey: number, item: string) {
        const list = await this.getAllTodos();
        const todo = list.find( (todo: Todo) => todo.todoKey == todoKey);
        if (todo) {
            todo.todoItem = item;
            this.saveTodoList(list);
            return true;
        }
        return false;
    }
    
    private saveTodoList(list: any) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(list));
    }
}