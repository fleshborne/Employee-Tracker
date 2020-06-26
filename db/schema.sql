DROP DATABASE IF EXISTS employees;

CREATE DATABASE employees;

USE employees;

-- create a departments table
CREATE TABLE department (
 id INT NOT NULL AUTO_INCREMENT,
 department_name VARCHAR(30) NOT NULL,   
 PRIMARY KEY (id)
 
);
-- create a roles table
CREATE TABLE role (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL UNSIGNED NOT NULL,
  department_id INT UNSIGNED NOT NULL,
  INDEX dep_ind (department_id),
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE

);

CREATE TABLE employee (
 id INT NOT NULL AUTO_INCREMENT,
 first_name VARCHAR(30) NOT NULL,
 last_name VARCHAR(30) NOT NULL,
 role_id INT NOT NULL,
 CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
 manager_id INT,
 INDEX man_ind (manager_id),,
 PRIMARY KEY(id),
CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

-- create an employees table