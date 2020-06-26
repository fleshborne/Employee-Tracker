// require inquirer and consoleTable
// require the database class
const { prompt } = require("inquirer");
const db = require("./db/Database.js");
require("console.table");
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
          value: "ADD_EMPLOYEE",
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
        {
          name: "Delete Department",
          value: "Delete_Department",
        },
        {
          name: "Task Completed",
          value: "QUIT",
        },
      ],
    },
  ]);
  switch (choice) {
    case "Add_Department":
      return addDepartment();

    case "Add_Role":
      return createRole();

    case "ADD_EMPLOYEE":
      return createEmployee();

    case "View_All_Employees":
      return getEmployee();

    case "View_Department":
      return getDepartment();

    case "View_Employees_by_Department":
      return employeesByDep();

    case "View_Employees_by_Role":
      return getRole();

    case "Update_Roles":
      return updateRole();

    case "Delete_Employee":
      return removeEmployee();

    case "Delete_Department":
      return removeDepartment();

    default:
      return quit();
  }
}
async function createEmployee() {
  const roles = await db.getRole();
  const employees = await db.getEmployee();

  const employee = await prompt([
    {
      name: "first_name",
      message: "What is the employee's first name?",
    },
    {
      name: "last_name",
      message: "What is the employee's last name?",
    },
  ]);
  const roleChoices = roles.map(({ id, title }) => ({
    name: title,
    value: id,
  }));

  const { roleId } = await prompt({
    type: "list",
    name: "roleId",
    message: "What is the employee's Role?",
    choices: roleChoices,
  });

  employee.role_id = roleId;

  const managerChoices = employees.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id,
  }));
  // .unshift() inserts the given values to the beginning of the array-like object.
  managerChoices.unshift({ name: "None", value: null });

  const { managerId } = await prompt({
    type: "list",
    name: "managerId",
    message: "Who is the employee's manager?",
    choices: managerChoices,
  });

  employee.manager_id = managerId;

  await db.createEmployee(employee);

  console.log(`Added ${employee.first_name} ${employee.last_name} to the DB`);

  mainPromptInq();
}
async function addDepartment() {
  const department = await prompt([
    {
      name: "name",
      message: "What is the name of the department?",
    },
  ]);
  await db.createDepartment(department);
  console.log(`Added ${department.name} to DB!`);

  mainPromptInq();
}

async function removeDepartment() {
  const departments = await db.getDepartment();

  const departmentChoices = departments.map(({ id, name }) => ({
    name: name,
    value: id,
  }));
  const { departmentId } = await prompt({
    type: "list",
    name: "departmentId",
    message: "Which department is being deleted?",
    choices: departmentChoices,
  });

  await db.removeDepartment(departmentId);

  console.log("Department removed from DB");

  mainPromptInq();
}
async function employeesByDep() {
  const departments = await db.getDepartment();

  const departmentChoices = departments.map(({ id, name }) => ({
    name: name,
    value: id,
  }));

  const { departmentId } = await prompt([
    {
      type: "list",
      name: "departmentId",
      message: "Which department would you like search for employees from?",
      choices: departmentChoices,
    },
  ]);
  const employees = await db.findAllEmployeesByDep(departmentId);
  console.table(employees);

  mainPromptInq();
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
  const departments = await db.getDepartment();
  console.table(departments);
  mainPromptInq();
}

async function removeEmployee() {
  const employees = await db.getEmployee();

  const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id,
  }));

  const { employeeId } = await prompt([
    {
      type: "list",
      name: "employeeId",
      message: "Which employee do you want to remove?",
      choices: employeeChoices,
    },
  ]);
  await db.removeEmployee(employeeId);

  console.log("Employee has been removed from DB");
  mainPromptInq();
}

//   console.log(answers);
// use switch statements to traverse through different list options

// dbData();

// begin calling database functions

// module.exports = index;
