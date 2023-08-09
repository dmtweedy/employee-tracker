CREATE TABLE IF NOT EXISTS role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL(10, 2),
  department INT,
  FOREIGN KEY (department) REFERENCES department(id)
);
