import express, {Router, Express} from "express";
import bodyParser from "body-parser";

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
      this.router.get("/", (_,res)=>res.send(this.todoList));

      this.router.get("/:tk", (req, res) => {
        const key = +req.params.tk;
        console.log("parameter",key);

        const foundTodo = this.todoList.find( todo => todo.todoKey == key);

        if (foundTodo)
            res.send(foundTodo);
        else
            res.sendStatus(404);
      });

      this.router.post("/", (req,res) => {
        const body = req.body;
        let lastKey = (this.todoList?.at(-1)?.todoKey)! + 1;
        const todo = new Todo(lastKey ?? 1, req.body.todoItem);
        this.todoList.push(todo);
        res.send(todo);
      });

      this.router.delete("/:todoKey", (req,res) => {
            const found = this.todoList.find(todo => todo.todoKey == +req.params.todoKey);

            if (!found)
                res.sendStatus(404);
            else {
                this.todoList = this.todoList.filter(todo => todo.todoKey != +req.params.todoKey);
                res.send(`Todo ${req.params.todoKey} deleted`);
            }
      });
    }
}

const todoRouter = new TodoRouter()