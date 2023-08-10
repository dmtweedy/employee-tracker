const pool = require('../db/db.js');

async function getAllRoles() {
  try {
    const query = `
      SELECT
        r.role_id,
        r.title,
        d.department_id,
        r.salary
      FROM role AS r
      INNER JOIN department AS d ON r.department_id = d.department_id;
    `;

    const [rows, fields] = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function addRole(title, departmentId, salary) {
  try {
    const query = `
      INSERT INTO role (title, department_id, salary)
      VALUES (?, ?, ?)
    `;
    await pool.query(query, [title, departmentId, salary]);
  } catch (error) {
    throw error;
  }
}

async function removeRole(roleId) {
  try {
    const query = 'DELETE FROM role WHERE role_id = ?';
    await pool.query(query, [roleId]);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllRoles,
  addRole,
  removeRole
};