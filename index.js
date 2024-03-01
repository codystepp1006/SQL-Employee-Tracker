var inquirer = require('inquirer');
var { viewDepartmentsMenu, addDptMenu } = require("./services/departmentservice")
var { viewAllEmployeesMenu, addEmpMenu } = require("./services/employeeservices")


exports.mainMenu = mainMenu;

function mainMenu() {
inquirer
  .prompt([
    {
        type: 'list',
        name: 'answers',
        message: 'Please select what you would like to do:',
        choices: [
            "View All Departments",
            "Add Department",
            "View All Employees",
            "Add Employee",
            "Exit"
        ], 
}
    
  ])
  .then((answers) => {
    console.log((answers.answers));
    switch (answers.answers) {
        case "View All Departments":
          console.log('made it to 1');
          viewDepartmentsMenu();
          break;
        case "Add Department":
          console.log('made it to 2');
          addDptMenu();
          break;
        case "View All Employees":
          console.log('made it to 5');
          viewAllEmployeesMenu();
          break;

        case "Add Employee":
          console.log('made it to 6');
           addEmpMenu();
          break;

        case "Exit":
          console.log('made it to 8');
          exit();
          break;
      }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

function exit(){
  console.clear();
  console.log("press ctrl + c to stop")
}