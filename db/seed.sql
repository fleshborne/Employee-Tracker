use employees; 

INSERT INTO departments(id, department_name) VALUES (1, 'Sales');
INSERT INTO departments(id, department_name) VALUES (2, 'Engineering');
INSERT INTO departments(id, department_name) VALUES (3, 'Finance');
INSERT INTO departments(id, department_name) VALUES (4, 'Legal');

INSERT INTO roles(id ,title, salary, department_id) VALUES (1, 'Sales Lead', 100000, 1);
INSERT INTO roles(id ,title, salary, department_id) VALUES (2, 'Salesperson', 80000, 2);
INSERT INTO roles(id ,title, salary, department_id) VALUES (3, 'Lead Engineer', 150000, 3);
INSERT INTO roles(id ,title, salary, department_id) VALUES (4, 'Software Engineer', 120000, 4);
INSERT INTO roles(id ,title, salary, department_id) VALUES (5, 'Accountant', 80000, 5);
INSERT INTO roles(id ,title, salary, department_id) VALUES (6, 'Legal Team Lead', 250000, 6);
INSERT INTO roles(id ,title, salary, department_id) VALUES (7, 'Lawyer', 190000, 7);

INSERT INTO employees(id, first_name,last_name,role_id,manager_id) VALUES (1,"Blake", "Thompson", 3, NULL);
INSERT INTO employees(id, first_name,last_name,role_id,manager_id) VALUES (2,"Ekalb", "Nospmoht", 4, 3);
INSERT INTO employees(id, first_name,last_name,role_id,manager_id) VALUES (3,"Jarjar", "Binks", 1, NULL);
INSERT INTO employees(id, first_name,last_name,role_id,manager_id) VALUES (4,"Han", "Solo", 2, 1);
INSERT INTO employees(id, first_name,last_name,role_id,manager_id) VALUES (5,"Obiwan", "Kanobie", 5, NULL);
INSERT INTO employees(id, first_name,last_name,role_id,manager_id) VALUES (6,"Qui-Gon", "Jin", 6, NULL);
INSERT INTO employees(id, first_name,last_name,role_id,manager_id) VALUES (7,"Mace", "Windu", 7, 6);

-- INSERT INTO employee 
--     (first_name, last_name)
-- VALUES 
--     ('John', 'Doe')