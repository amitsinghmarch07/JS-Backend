import MySql from "mysql2/promise";

const connectionSettings = {
    host: "localsql",
    user: "root",
    password: "mysqltoor",
    database: "todoschema"
}

async function main() {
    let connection;

    try {
        connection = await MySql.createConnection(connectionSettings);

        const [rows, colums] = await connection.execute("SELECT * FROM todo");
        console.log(rows);
        
    } catch (e:any) {
        console.log(e.sqlMessage);
    }finally {
        connection?.end();
    }
}