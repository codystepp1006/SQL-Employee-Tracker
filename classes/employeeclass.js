const database = require('../database/connection');

class Employee {
    constructor(first_name, last_name, dpt_id){
        (this.first_name = first_name , this.last_name = last_name, this.dpt_id=dpt_id);

    }
    getAll(){
        const sql = `SELECT * FROM employee`
        return database.promise()
        .query(sql)
        .then(([rows]) =>{
            return rows;
        });
    }

    addEmp(){
        const sql = `INSERT INTO employee (first_name, last_name, dpt_id)
        VALUES ("${this.first_name}","${this.last_name}", "${this.dpt_id}")`;
        return database.promise().query(sql);
    }
}

module.exports = Employee; 