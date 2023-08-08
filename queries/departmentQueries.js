const pool = require('../db');

async function getAllDepartments() {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM department');
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllDepartments
};