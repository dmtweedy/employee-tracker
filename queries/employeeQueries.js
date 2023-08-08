const pool = require('../db');

async function getAllEmployees() {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM employee');
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllEmployees
};