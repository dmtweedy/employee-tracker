CREATE TABLE IF NOT EXISTS role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(30),
  department_id INT,
  salary DECIMAL(10, 2),
  FOREIGN KEY (department_id) REFERENCES department(id)
);