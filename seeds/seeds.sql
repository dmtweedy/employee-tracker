USE employee_db;

-- Insert departments
INSERT INTO department (name)
VALUES
  ('Marketing'),
  ('Engineering'),
  ('Sales'),
  ('Customer Service'),
  ('Management');

-- Insert roles
INSERT INTO role (title, salary, department_id)
VALUES
  ('Head of Marketing', 80000, 1),
  ('Software Engineer', 90000, 2),
  ('Sales Associate', 60000, 3),
  ('Customer Service Rep', 70000, 4),
  ('Marketing Associate', 60000, 1),
  ('General Manager', 95000, 5);

-- Insert employees
INSERT INTO employee (first_name, last_name, department_id, role_id, manager_id, salary)
VALUES
  ('John', 'Doe', 2, 2, 1, 90000),
  ('Jane', 'Smith', 1, 1, NULL, 80000),
  ('Jim', 'Jones', 1, 2, 2, 60000),
  ('Mike', 'Brown', 3, 3, 1, 60000),
  ('Sarah', 'Johnson', 4, 4, 1, 70000),
  ('David', 'Williams', 5, 5, NULL, 95000)
