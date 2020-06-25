// require inquirer and consoleTable
// require the database class
const { prompt } = require("inquirer");
const db = require("./db/Database");
const connection = require("./db/connection");
const consoleTable = require("console.table");
// create a prompt when the app is started
// this will ask the user what they'd like to do
mainPromptInq();
async function mainPromptInq() {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "Where do we start?",
      choices: [
        {
          name: "Add Department",
          value: "Add_Department",
        },
        {
          name: "Add Role",
          value: "Add_Role",
        },
        {
          name: "Add Employee",
          value: "Add_Employee",
        },
        {
          name: "View All Employees",
          value: "View_All_Employees",
        },
        {
          name: "View Employees by Department",
          value: "View_Employees_by_Department",
        },
        {
          name: "View Employees by Role",
          value: "View_Employees_by_Role",
        },
        {
          name: "Update Roles",
          value: "Update_Roles",
        },
        {
          name: "Delete Employee",
          value: "Delete_Employee",
        },
        { name: "Task Completed", value: "Task_Completed" },
      ],
    },
  ]);
  switch (choice) {
    case "Add_Department":
      return db.createDepartment();

    case "Add_Role":
      return db.createRole();

    case "Add_Employee":
      return db.createEmployee();

    case "View_All_Employees":
      return db.getEmployee();

    case "View_Employees_by_Department":
      return db.getDepartment();

    case "View_Employees_by_Role":
      return db.getRole();

    case "Update_Roles":
      return db.updateRole();

    case "Delete_Employee":
      return db.deleteEmployee();

    case "Task_Completed":
      // code to exit here
      return connection.end();
  }
}

//   console.log(answers);
// use switch statements to traverse through different list options

// dbData();

// begin calling database functions
async function getDepartment() {
  const depotInfo = await db.getDepartment();
  consoleTable(depotInfo);
  mainPromptInq();
}
async function viewEmployees() {
  const empInfo = await db.getEmployee();
  consoleTable(empInfo);
  mainPromptInq();
}
async function getRole() {
  const roleInfo = await db.getRole();
  consoleTable(roleInfo);
  mainPromptInq();
}
