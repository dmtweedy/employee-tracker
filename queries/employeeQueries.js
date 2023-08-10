const pool = require('../db/db.js');

async function getAllEmployees() {
  try {
    const query = `
      SELECT 
        e.employee_id,
        CONCAT(e.first_name, ' ', e.last_name) AS name,
        r.job_title,
        d.department,
        e.salary,
        CONCAT(m.first_name, ' ', m.last_name) AS reporting_manager
      FROM employee AS e
      LEFT JOIN role AS r ON e.role_id = r.role_id
      LEFT JOIN department AS d ON r.department_id = d.department_id
      LEFT JOIN employee AS m ON e.manager_id = m.employee_id
    `;
    const [rows, fields] = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function addEmployee(firstName, lastName, departmentId, roleId, managerId, salary) {
  try {
    const query = `
      INSERT INTO employee (first_name, last_name, department_id, role_id, manager_id, salary)
      VALUES (?, ?, ?, ?, ?)
    `;
    await pool.query(query, [firstName, lastName, departmentId, roleId, managerId, salary]);
  } catch (error) {
    throw error;
  }
}

async function updateEmployeeRole(employeeId, newRoleId) {
  try {
    const query = `
      UPDATE employee
      SET title = ?
      WHERE id = ?
    `;
    await pool.query(query, [newRoleId, employeeId]);
  } catch (error) {
    throw error;
  }
}

async function removeEmployee(firstName, lastName, newEmployees) {
  try {
    // Step 1: Delete employees with the same name
    const [deleteRows] = await pool.query(
      'DELETE FROM employee WHERE first_name = ? AND last_name = ?',
      [firstName, lastName]
    );

    if (deleteRows.affectedRows === 0) {
      throw new Error('No employees found with the specified name.');
    }

    // Step 2: Insert new employees
    for (const employee of newEmployees) {
      await pool.query(
        'INSERT INTO employee (first_name, last_name, department_id, role_id, manager_id, salary) VALUES (?, ?, ?, ?, ?, ?)',
        [firstName, lastName, departmentId, roleId, managerId, salary]
      );
    }

    return true;
  } catch (error) {
    throw error;
  }
}

async function updateEmployeeManager(employeeId, newManagerId) {
  try {
    const query = 'UPDATE employee SET manager_id = ? WHERE id = ?';
    await pool.query(query, [newManagerId, employeeId]);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllEmployees,
  addEmployee,
  updateEmployeeRole,
  removeEmployee,
  updateEmployeeManager
};