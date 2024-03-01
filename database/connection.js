const mysql = require("mysql2");

const database = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "employee_db"
    },
    console.log("logged into the employee_db")
);

module.exports = database;