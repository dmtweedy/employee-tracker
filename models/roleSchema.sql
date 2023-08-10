CREATE TABLE role (
  role_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  department_id INT,
  salary DECIMAL(10, 2),
  FOREIGN KEY (department_id) REFERENCES department(department_id)
);
