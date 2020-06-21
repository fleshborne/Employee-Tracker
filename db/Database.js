const connection = require("./connection");

class Database {
  constructor(connection) {
    this.connection = connection;
  }
  createDepartment() {
    return this.connection
      .query
      // SELECT query here
      ();
  }
  createEmployee() {
    return this.connection
      .query
      // SELECT query here
      ();
  }
  createRole() {
    return this.connection
      .query
      // SELECT query here
      ();
  }
  getDepartment() {
    return this.connection
      .query
      // SELECT query here
      ();
  }
  getEmployee() {
    return this.connection
      .query
      // SELECT query here
      ();
  }
  getRole() {
    return this.connection
      .query
      // SELECT query here
      ();
  }
  updateRole() {
    return this.connection.query();
  }
  updateManagers() {
    return this.connection.query();
  }
  deleteEmployee() {
    return this.connection.query();
  }
}
