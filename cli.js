const inquirer = require('inquirer');
const departmentQueries = require('./models/departmentQueries');
const roleQueries = require('./models/roleQueries');
const employeeQueries = require('./models/employeeQueries');

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
        // Call departments
        break;
      case 'View all roles':
        // Call roles
        break;
      case 'View all employees':
        // Call employees
        break;
      case 'Add a department':
        // Call department
        break;
      case 'Add a role':
        // Call role
        break;
      case 'Add an employee':
        // Add employee
        break;
      case 'Update an employee role':
        // Update employee role
        break;
      case 'Exit':
        // Exit
        return;
    }
  
    mainMenu();
  }

  mainMenu();