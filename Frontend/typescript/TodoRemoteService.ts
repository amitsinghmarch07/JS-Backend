import { iTodoService } from "./iTodoService";
import { Todo } from "./Todo";
import { TodoTempRouter } from "./TodoTempRouter";

export class TodoRemoteService implements iTodoService {

    private service: TodoTempRouter;

    constructor(service: TodoTempRouter) {
        this.service = service;
    }

    async createTodo(item: string): Promise<Todo> {
        console.log("create todo");
        throw new Error("Method not implemented.");
    }
    async getTodo(todoKey: number): Promise<Todo | undefined> {
        throw new Error("Method not implemented.");
    }
    async getAllTodos(): Promise<Todo[]> {
        throw new Error("Method not implemented.");
    }
    async deleteTodo(todoKey: number): Promise<boolean | Todo> {
        throw new Error("Method not implemented.");
    }
    async updateTodo(todoKey: number, todoItem: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}