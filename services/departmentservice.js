const Departrment = require("../classes/dptclass");
const inquirer =  require("inquirer");
const menu = require("../index");

function viewDepartmentsMenu(){
    let department = new Departrment();
    department
    .getAll()
    .then((rows) => {
        console.log(`DEPARTMENTS`);
        console.table(rows);
    })
    .then(() => {
        manageDptMenu();
    });
}

function manageDptMenu() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "DptMenu",
          message: "What else would you like to do?",
          choices: ["Add a department", "Nothing, take me to the Main Menu"],
        },
      ])
      .then(({ DptMenu }) => {
        switch (DptMenu) {
          case "Add a department":
            console.clear();
            addDptMenu();
            break;
          case "Nothing, take me to the Main Menu":
            console.clear();
            menu.mainMenu();
            break;
        }
      });
  }

  function addDptMenu() {
    inquirer
      .prompt([
        {
          type: "text",
          name: "newDptName",
          message: "What is the name of the new department?",
          validate: (dptname) => {
            if (!dptname) {
              console.log("Please enter a department name!");
            }
            return true;
          },
        },
      ])
      .then(( newDptName) => {
        const departrment = new Departrment(newDptName.newDptName);
        departrment.addDpt();
        console.clear();
        viewDepartmentsMenu();
        console.table("Added department \n");
      });
  }

module.exports = { viewDepartmentsMenu, addDptMenu };