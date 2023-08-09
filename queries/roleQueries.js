const pool = require('../db/db.js');

async function getAllRoles() {
  try {
    const query = `
      SELECT 
        r.id,
        r.title,
        r.salary,
        d.name AS department
      FROM role AS r
      INNER JOIN department AS d ON r.department_id = d.id
    `;
    const [rows, fields] = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function addRole(title, salary, departmentId) {
  try {
    const query = `
      INSERT INTO role (title, salary, department)
      VALUES (?, ?, ?)
    `;
    await pool.query(query, [title, salary, departmentId]);
  } catch (error) {
    throw error;
  }
}

async function removeRole(roleId) {
  try {
    const query = 'DELETE FROM role WHERE id = ?';
    const [result] = await pool.query(query, [roleId]);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllRoles,
  addRole,
  removeRole
};