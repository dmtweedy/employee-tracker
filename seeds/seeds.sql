USE employee_db;

-- Insert departments
INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Engineering');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES ('Sales Manager', 75000.00, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 90000.00, 2);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jane', 'Smith', 2, 1);