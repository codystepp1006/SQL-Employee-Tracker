const database = require("../database/connection");
// const cTable = require("console.table");

class Department {
    constructor(dpt_name){
         (this.dpt_name = dpt_name);
    }
    getAll(){
        const sql = `SELECT * FROM department`;
        return database
        .promise()
        .query(sql)
        .then(([rows]) => {
            return rows;
        });
    }


addDpt() {
    const sql = `INSERT INTO  department (dpt_name)
    VALUES ("${this.dpt_name}")`;
    return database.promise().query(sql);
    }
}

module.exports = Department;