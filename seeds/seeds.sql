USE employee_db;

-- Insert departments
INSERT INTO department (name, department_id)
VALUES
  ('Marketing', 8),
  ('Engineering', 2),
  ('Sales', 1),
  ('Customer Service', 19),
  ('Management', 20);

-- Insert roles
INSERT INTO role (job_title, salary, department_id, role_id)
VALUES
  ('Head of Marketing', 80000, 8, 12),
  ('Software Engineer', 90000, 2, 2),
  ('Sales Associate', 60000, 1, 13),
  ('Customer Service Rep', 70000, 19, 10),
  ('Marketing Associate', 60000, 8, 14),
  ('General Manager', 95000, 20, 11);

-- Insert employees
INSERT INTO employee (first_name, last_name, department_id, role_id, manager_id, salary)
VALUES
  ('John', 'Doe', 2, 2, 6, 90000),
  ('Jane', 'Smith', 8, 12, 6, 80000),
  ('Jim', 'Jones', 8, 14, 6, 60000),
  ('Mike', 'Brown', 1, 13, 6, 60000),
  ('Sarah', 'Johnson', 19, 10, 6, 70000),
  ('David', 'Williams', 20, 11, NULL, 95000);

-- Update managers
UPDATE employee
SET manager_id = 5
WHERE role_id = 13;

UPDATE employee
SET manager_id = 5
WHERE role_id = 2;

UPDATE employee
SET manager_id = 5
WHERE role_id = 10;

UPDATE employee
SET manager_id = 5
WHERE role_id = 14;

UPDATE employee
SET manager_id = 2
WHERE role_id = 12;

UPDATE employee
SET manager_id = NULL
WHERE role_id = 11;