const pool = require('../db/db.js');

async function getAllRoles() {
  try {
    const [rows] = await pool.query('SELECT * FROM role');
    return rows;
  } catch (error) {
    throw error;
  }
}

async function addRole(title, salary, departmentId) {
  try {
    const [result] = await pool.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
    return result.insertId;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllRoles,
  addRole,
};