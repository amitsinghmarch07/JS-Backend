import express, {Router, Express, Request, Response} from "express";
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
        this.router.use(bodyParser.json());
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

      this.router.post("/", (req: Request,res: Response) => {
        console.log(req.url);

        const body = req.body;
        const length = this.todoList.length;
        let lastKey = length == 0 ? 1 : (this.todoList!.at(length-1)?.todoKey)! + 1;

        console.log(`last key ${lastKey}`);
        const todo = new Todo(lastKey ?? 1, req.body.todoItem);
        this.todoList.push(todo);
        res.send(todo);
      });

      this.router.delete("/:todoKey", (req,res) => {

            const found = this.todoList.find(todo => todo.todoKey == +req.params.todoKey);

            console.log(`all list ${this.todoList}`);

            if (!found){
                res.sendStatus(404);
                console.log(`not deleted 404`);
      }
            else {
                console.log(`deleted ${+req.params.todoKey}`);
                this.todoList = this.todoList.filter(todo => todo.todoKey != +req.params.todoKey);
                res.send(true);
            }
      });
    }
}

const todoRouter = new TodoRouter()