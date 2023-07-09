const MySql = require("sync-mysql");

const connectionSetting = {
    host: "localHost",
    user: "root",
    passwrd: "Jpr!2345",
    database: "TodoSchema"
};

const connection = new MySql(connectionSetting);

const insertResult = connection.query("INSERT INTO Todo(todoItem) values (?)",["Buy Apple"]);

console.log(insertResult);

const selectResult = connection.query("SELECT * from Todo");

console.log(selectResult);

connection.dispose();