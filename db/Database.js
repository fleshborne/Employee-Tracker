const connection = require("./connection");
class Database {
  constructor() {
    this.connection = connection;
  }
  createDepartment(department) {
    return this.connection.query("INSERT INTO department SET ?", department);
  }
  createEmployee(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee);
  }
  createRole(role) {
    return this.connection.query("INSERT INTO role SET ?", role);
  }
  getDepartment() {
    return this.connection.query("SELECT * FROM department", (err, results) => {
      if (err) {
        throw err;
      }
      console.table(results);
    });
  }
  getEmployee() {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name,role.title, department.department_name AS department, role.salary, CONCAT(manager.first_name,'', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;",
      (err, results) => {
        if (err) {
          throw err;
        }
        console.table(results);
      }
    );
  }
  getRole() {
    return this.connection.query(
      "SELECT role.id, role.title, department.department_name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id",
      (err, results) => {
        if (err) {
          throw err;
        }
        console.table(results);
      }
    );
  }
  updateRole(roleId, employeeId) {
    return this.connection.query(
      "UPDATE employee SET role_id = ? WHERE ID = ?",
      [roleId, employeeId]
    );
  }
  // deleteEmployee() {
  //   return this.connection.query();
  // }
}

module.exports = new Database(connection);
