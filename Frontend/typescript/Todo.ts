export class Todo {
    public static lastKey = 0;

    public todoKey : number;
    public todoItem : string;

    
    constructor(todoItem: string) {
        this.todoKey = ++Todo.lastKey;
        this.todoItem = todoItem;
    }
}