const MySql = require("mysql");

const connectionSetting = {
    host: "localsql",
    user: "root",
    password: "Jpr!2345",
    database: "todoschema.todo"
}

const connection = MySql.createConnection(connectionSetting);
connection.connect()

const query = connection.query("SELECT * FROM todo", (error,result) => {
    if (!error)
        console.log(result);
    else 
        console.log(error);
})

console.log("done");
connection.end();