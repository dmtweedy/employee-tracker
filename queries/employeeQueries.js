const pool = require('../db/db.js');

async function getAllEmployees() {
  try {
    const query = `
      SELECT 
        e.id AS employee_id,
        e.first_name,
        e.last_name,
        r.title,
        d.name AS department,
        r.salary,
        CONCAT(m.first_name, ' ', m.last_name) AS manager
      FROM employee AS e
      INNER JOIN role AS r ON e.role_id = r.id
      INNER JOIN department AS d ON r.department_id = d.id
      LEFT JOIN employee AS m ON e.manager_id = m.id
    `;
    const [rows, fields] = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function addEmployee(firstName, lastName, roleId, managerId, salary) {
  try {
    const query = `
      INSERT INTO employee (first_name, last_name, title, manager_id, salary)
      VALUES (?, ?, ?, ?, ?)
    `;
    await pool.query(query, [firstName, lastName, roleId, managerId, salary]);
  } catch (error) {
    throw error;
  }
}

async function updateEmployeeRole(employeeId, newRoleId) {
  try {
    const query = `
      UPDATE employee
      SET title = ?
      WHERE id = ?
    `;
    await pool.query(query, [newRoleId, employeeId]);
  } catch (error) {
    throw error;
  }
}

async function removeEmployee(employeeId) {
  try {
    const query = 'DELETE FROM employee WHERE id = ?';
    const [result] = await pool.query(query, [employeeId]);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllEmployees,
  addEmployee,
  updateEmployeeRole,
  removeEmployee
};