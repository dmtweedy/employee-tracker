const pool = require('../db/db.js');

async function getAllRoles() {
  try {
    const query = `
      SELECT
        r.id,
        r.title,  -- Use "title" instead of "job_title"
        d.id AS department_id,
        r.salary
      FROM role AS r
      INNER JOIN department AS d ON r.department_id = d.id;
    `;

    const [rows, fields] = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function addRole(jobTitle, departmentId, salary) {
  try {
    const query = `
      INSERT INTO role (job_title, department_id, salary)
      VALUES (?, ?, ?)
    `;
    await pool.query(query, [jobTitle, departmentId, salary]);
  } catch (error) {
    throw error;
  }
}

async function removeRole(roleId) {
  try {
    const query = 'DELETE FROM role WHERE id = ?';
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