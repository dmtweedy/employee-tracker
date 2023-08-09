const inquirer = require('inquirer');
const departmentQueries = require('./queries/departmentQueries');
const roleQueries = require('./queries/roleQueries');
const employeeQueries = require('./queries/employeeQueries');

async function mainMenu() {
  const { choice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]
    }
  ]);

  switch (choice) {
    case 'View all departments':
      viewAllDepartments();
      break;
    case 'View all roles':
      viewAllRoles();
      break;
    case 'View all employees':
      viewAllEmployees();
      break;
    case 'Add a department':
      addDepartment();
      break;
    case 'Add a role':
      addRole();
      break;
    case 'Add an employee':
      addEmployee();
      break;
    case 'Update an employee role':
      updateEmployeeRole();
      break;
    case 'Exit':
      console.log('Exiting...');
      process.exit(0);
  }
}

async function viewAllDepartments() {
  try {
    const departments = await departmentQueries.getAllDepartments();
    console.table(departments);
  } catch (error) {
    console.error('Error viewing departments:', error);
  }
}

async function viewAllRoles() {
  try {
    const roles = await roleQueries.getAllRoles();
    console.table(roles);
  } catch (error) {
    console.error('Error viewing roles:', error);
  }
}

async function viewAllEmployees() {
  try {
    const employees = await employeeQueries.getAllEmployees();
    console.table(employees);
  } catch (error) {
    console.error('Error viewing employees:', error);
  }
}

async function addDepartment() {
  const departmentName = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the department:'
    }
  ]);

  try {
    await departmentQueries.insertDepartment(departmentName.name);
    console.log('Department added successfully.');
  } catch (error) {
    console.error('Error adding department:', error);
  }
}




  mainMenu();