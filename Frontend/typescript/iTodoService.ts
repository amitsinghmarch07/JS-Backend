import { Todo } from "./Todo";

export interface iTodoService {
    createTodo(item:string) : Promise<Todo>;
    getTodo(todoKey:number) : Promise<Todo | undefined>;
    getAllTodos() : Promise<Todo[]>;
    deleteTodo(todoKey:number) : Promise<Todo | boolean>;
    updateTodo(todoKey: number, todoItem: string): Promise<boolean>;
    
}