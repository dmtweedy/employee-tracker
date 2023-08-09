const pool = require('../db/db.js');

async function getAllDepartments() {
  try {
    const [rows] = await pool.query('SELECT * FROM department');
    return rows;
  } catch (error) {
    throw error;
  }
}

async function addDepartment(departmentName) {
  try {
    const [result] = await pool.query('INSERT INTO department (name) VALUES (?)', [departmentName]);
    return result.insertId;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllDepartments,
  addDepartment,
};