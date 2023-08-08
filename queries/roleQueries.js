const pool = require('../db');

async function getAllRoles() {
  try {
    const [rows, fields] = await pool.query('SELECT * FROM role');
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllRoles
};