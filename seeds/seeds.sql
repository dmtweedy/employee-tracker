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
INSERT INTO role (job_title, salary, department_id)
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
  ('John', 'Doe', 2, 2, 5, 90000),
  ('Jane', 'Smith', 1, 1, 5, 80000),
  ('Jim', 'Jones', 1, 5, 2, 60000),
  ('Mike', 'Brown', 3, 3, 5, 60000),
  ('Sarah', 'Johnson', 4, 4, 5, 70000),
  ('David', 'Williams', 5, 6, NULL, 95000);

-- Update managers
UPDATE employee
SET manager_id = 5
WHERE role_id = 1;

UPDATE employee
SET manager_id = 5
WHERE role_id = 2;

UPDATE employee
SET manager_id = 5
WHERE role_id = 3;

UPDATE employee
SET manager_id = 5
WHERE role_id = 4;

UPDATE employee
SET manager_id = 2
WHERE role_id = 5;

UPDATE employee
SET manager_id = NULL
WHERE role_id = 6;