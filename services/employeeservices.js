const Employee = require("../classes/employeeclass");
const inquirer = require("inquirer");
const menu = require("../index");

function viewAllEmployeesMenu(){
        let employee = new Employee ();
        employee.getAll()
        .then((rows) => {
            console.log(`EMPLOYEES`);
            console.log(rows);
        })
        .then(() => {
            manageEmpMenu();
        })
}

function manageEmpMenu(){
    inquirer.prompt([
        {
            type: "list",
            name: "EmpMenu",
          message: "What else would you like to do?",
          choices: ["Add an employee", "Nothing, take me to the Main Menu"],
        }
    ])
    .then(({EmpMenu}) => {
        switch (EmpMenu) {
            case "Add an employee":
                console.clear();
                addEmpMenu();
                break;
            case "Nothing, take me to the Main Menu":
                console.clear();
                menu.mainMenu();
                break;
        }
    });
}

function addEmpMenu() {
    inquirer.prompt([
        {
            type: "text",
          name: "newEmpFirstName",
          message: "What is the first name of the employee?",
          validate: (empname) => {
            if (!empname) {
              console.log("Please enter a name!");
            }
            return true;
          },
        },
        {
            type: "text",
          name: "newEmpLastName",
          message: "What is the last name of the employee?",
          validate: (empname) => {
            if (!empname) {
              console.log("Please enter a name!");
            }
            return true;
          },
        },
        {
            type: "text",
          name: "newEmpDptId",
          message: "What is the Department number of the employee?",
          validate: (empname) => {
            if (!empname) {
              console.log("Please enter a dpt id");
            }
            return true;
          },
        }
    ])
    .then((newEmp) => {
        const employee = new Employee(newEmp.newEmpFirstName, newEmp.newEmpLastName, newEmp.newEmpDptId)
        employee.addEmp();
        console.clear();
        viewAllEmployeesMenu();
        console.table("New Employee has been added! \n");

    })
}

module.exports = { viewAllEmployeesMenu, addEmpMenu };