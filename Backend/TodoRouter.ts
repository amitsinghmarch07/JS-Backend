import express, {Router, Express} from "express";

class Todo {
    todoKey: number;
    todoItem: string;

    constructor(key: number, todoItem: string) {
        this.todoKey = key;
        this.todoItem = todoItem;
    }
}

class TodoRouter {
    private port = 10000;
    private router: Express;
    private todoList: Todo[] = [];
    constructor() {
        this.router = express();
        this.todoList.push(new Todo(1,"Buy Milk"));
        this.addRoutes();

        this.router.listen(this.port, ()=>console.log(`Todo5 started on ${this.port}`));
    }

    private addRoutes(): void {
        this.router.get("/", (req, res)=> {
            console.log(req);
            res.send({"todoKey":"1", "todoItem":'Buy Milk'});
        });

        this.router.post("/", (req, res)=> {
            res.send("kya hua be request");
        })
    }
}

const todoRouter = new TodoRouter()