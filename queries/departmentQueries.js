const pool = require('../db/db.js');

async function getAllDepartments() {
  try {
    const query = 'SELECT * FROM department';
    const [rows, fields] = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function addDepartment(name) {
  try {
    const query = 'INSERT INTO department (name) VALUES (?)';
    await pool.query(query, [name]);
  } catch (error) {
    throw error;
  }
}

async function removeDepartment(departmentId) {
  try {
    const query = 'DELETE FROM department WHERE id = ?';
    const [result] = await pool.query(query, [departmentId]);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllDepartments,
  addDepartment,
  removeDepartment
};