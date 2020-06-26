// require inquirer and consoleTable
// require the database class
const { prompt } = require("inquirer");
const db = require("./db/Database");
const connection = require("./db/connection");
const consoleTable = require("console.table");
// create a prompt when the app is started
// this will ask the user what they'd like to do

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
          name: "View Department",
          value: "View_Department",
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
      return createDepartment();

    case "Add_Role":
      return createRole();

    case "Add_Employee":
      return createEmployee();

    case "View_All_Employees":
      return getEmployee();

    case "View_Department":
      return getDepartment();

    case "View_Employees_by_Role":
      return getRole();

    case "Update_Roles":
      return updateRole();

    case "Delete_Employee":
      return deleteEmployee();

    case "Task_Completed":
      // code to exit here
      return connection.end();
  }
}
async function getEmployee() {
  const employees = await db.getEmployee();
  console.table(employees);

  mainPromptInq();
}

async function getRole() {
  const roles = await db.getRole();
  console.table(roles);
  mainPromptInq();
}

async function getDepartment() {
  const department = await db.getDepartment();
  console.table(department);
  mainPromptInq();
}
mainPromptInq();
//   console.log(answers);
// use switch statements to traverse through different list options

// dbData();

// begin calling database functions

// module.exports = index;
