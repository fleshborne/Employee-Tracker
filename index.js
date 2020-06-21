// require inquirer and console.table
// require the database class
const { prompt } = require("inquirer");
const db = require("./db/Database");
// create a prompt when the app is started
// this will ask the user what they'd like to do
async function deployApp() {
  const questions = await prompt({
    type: "list",
    name: "questionsList",
    message: "Where do we start?",
    choices: [
      "Add Department",
      "Add Role",
      "Add Employee",
      "View All Employees",
      "View Employees by Department",
      "View Employees by Role",
      "Update Roles",
      "Update Managers",
      "Delete Employee",
      "Task Completed",
    ],
  }).then((answers) => {
    console.log(answers);
    // use switch statements to traverse through different list options
    switch (answers.questions) {
      case "Add Department":
        createDepartment();
        break;
      case "Add Role":
        createRole();
        break;
      case "Add Employee":
        createEmployee();
        break;
      case "View All Employees":
        getEmployee();
        break;
      case "View Employees by Department":
        getDepartment();
        break;
      case "View Employees by Role":
        getRole();
        break;
      case "Update Roles":
        updateRole();
        break;
      case "Update Managers":
        updateManagers();
        break;
      case "Delete Employee":
        addDepartment();
        break;
      case "Task Completed":
        // code to exit here
        break;
    }
  });
}
deployApp();
// the the user selects to view employees, its going to call the getEmployee function
//
