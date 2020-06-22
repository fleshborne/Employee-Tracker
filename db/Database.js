const connection = require("./connection");

class Database {
  constructor(connection) {
    this.connection = connection;
  }
  createDepartment(department) {
    return this.connection.query(
      // SELECT query here
      "INSERT INTO department SET ?",
      department
    );
  }
  createEmployee(employee) {
    return this.connection.query(
      // SELECT query here
      "INSERT INTO employee SET ?",
      employee
    );
  }
  createRole(roles) {
    return this.connection.query(
      // SELECT query here
      "INSERT INTO roles SET ?",
      roles
    );
  }
  getDepartment() {
    return this.connection.query(
      // SELECT query here
      "SELECT * FROM department"
    );
  }
  getEmployee() {
    return this.connection.query(
      // SELECT query here
      "SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary FROM employee LEFT JOIN roles on employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id;"
    );
  }
  getRole() {
    return this.connection.query(
      // SELECT query here
      "SELECT roles.id, roles.title, department.name AS department, roles.salary FROM roles LEFT JOIN department ON roles.department_id = department.id"
    );
  }
  updateRole(employeeId, roleId) {
    return this.connection.query(
      "UPDATE employee SET role_id = ? WHERE ID = ?",
      [employeeId, roleId]
    );
  }
  deleteEmployee() {
    return this.connection.query();
  }
}
