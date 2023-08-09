CREATE TABLE IF NOT EXISTS employee (
  employee_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  title INT,
  department INT,
  salary DECIMAL(10, 2),
  reporting_manager INT,
  FOREIGN KEY (title) REFERENCES (role_id),
  FOREIGN KEY (department) REFERENCES department(id),
  FOREIGN KEY (reporting_manager) REFERENCES employee(employee_id)
);