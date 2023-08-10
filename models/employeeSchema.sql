CREATE TABLE employee (
  employee_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  department_id INT,
  role_id INT,
  manager_id INT,
  salary DECIMAL(10, 2),
  FOREIGN KEY (department_id) REFERENCES department(department_id),
  FOREIGN KEY (role_id) REFERENCES role(role_id),
  FOREIGN KEY (manager_id) REFERENCES employee(employee_id)
);