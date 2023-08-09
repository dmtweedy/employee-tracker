const pool = require('../db/db.js');

async function getAllEmployees() {
  try {
    const [rows] = await pool.query('SELECT * FROM employee');
    return rows;
  } catch (error) {
    throw error;
  }
}

async function addEmployee(firstName, lastName, roleId, managerId) {
  try {
    const [result] = await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [firstName, lastName, roleId, managerId]);
    return result.insertId;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllEmployees,
  addEmployee,
};