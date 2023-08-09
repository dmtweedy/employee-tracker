const inquirer = require('inquirer');
const departmentQueries = require('./queries/departmentQueries');
const roleQueries = require('./queries/roleQueries');
const employeeQueries = require('./queries/employeeQueries');

async function mainMenu() {
  try {
    const { choice } = await inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all job titles',
          'View all employees',
          'Add a department',
          'Add a job title',
          'Add an employee',
          'Update an employee job title',
          'Remove a department',
          'Remove a job title',
          'Remove an employee',
          'Exit'
        ]
      }
    ]);

    switch (choice) {
      case 'View all departments':
        await viewAllDepartments();
        break;
      case 'View all job titles':
        await viewAllRoles();
        break;
      case 'View all employees':
        await viewAllEmployees();
        break;
      case 'Add a department':
        await addDepartment();
        break;
      case 'Add a job title':
        await addRole();
        break;
      case 'Add an employee':
        await addEmployee();
        break;
      case 'Update an employee job title':
        await updateEmployeeRole();
        break;
      case 'Remove a department':
        await removeDepartmentMenu();
        break;
      case 'Remove a job title':
        await removeRoleMenu();
        break;
      case 'Remove an employee':
        await removeEmployeeMenu();
        break;
      case 'Exit':
        console.log('Exiting...');
        process.exit(0);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}


async function viewAllDepartments() {
  try {
    const departments = await departmentQueries.getAllDepartments();
    console.table(departments);

    await promptGoBack();
  } catch (error) {
    console.error('Error viewing departments:', error);
  }
}

async function viewAllRoles() {
  try {
    const roles = await roleQueries.getAllRoles();
    console.table(roles);
    
    await promptGoBack();
  } catch (error) {
    console.error('Error viewing roles:', error);
  }
}

async function viewAllEmployees() {
  try {
    const employees = await employeeQueries.getAllEmployees();
    console.table(employees);
    
    await promptGoBack();
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
    await departmentQueries.addDepartment(departmentName.name);
    console.log('Department added successfully.');
  } catch (error) {
    console.error('Error adding department:', error);
  }
  await promptGoBack();
}

async function addRole() {
  const roleDetails = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the job title:'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary for the job title:'
    },
    {
      type: 'input',
      name: 'departmentId',
      message: 'Enter the department for the job title:'
    }
  ]);

  try {
    await roleQueries.addRole(roleDetails.title, roleDetails.salary, roleDetails.departmentId);
    console.log('Job title added successfully.');
  } catch (error) {
    console.error('Error adding job title:', error);
  }
  await promptGoBack();
}

async function addEmployee() {
  const employeeDetails = await inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: "Enter the employee's first name:"
    },
    {
      type: 'input',
      name: 'lastName',
      message: "Enter the employee's last name:"
    },
    {
      type: 'input',
      name: 'roleId',
      message: "Enter the employee's job title:"
    },
    {
      type: 'input',
      name: 'managerId',
      message: "Enter the employee's reporting manager (or leave empty if none):"
    },
    {
      type: 'input',
      name: 'department',
      message: "Enter the employee's department:"
    },
    {
      type: 'input',
      name: 'salary',
      message: "Enter the employee's salary:"
    },
  ]);

  try {
    await employeeQueries.addEmployee(employeeDetails.firstName, employeeDetails.lastName, employeeDetails.roleId, employeeDetails.managerId);
    console.log('Employee added successfully.');
  } catch (error) {
    console.error('Error adding employee:', error);
  }
  await promptGoBack();
}

async function updateEmployeeRole() {
  const employeeAndRole = await inquirer.prompt([
    {
      type: 'input',
      name: 'employeeId',
      message: "Enter the ID of the employee you want to update:"
    },
    {
      type: 'input',
      name: 'newRoleId',
      message: "Enter the new job title for the employee:"
    }
  ]);

  try {
    await employeeQueries.updateEmployeeRole(employeeAndRole.employeeId, employeeAndRole.newRoleId);
    console.log('Employee job title updated successfully.');
  } catch (error) {
    console.error('Error updating employee job title:', error);
  }
  await promptGoBack();
}

async function removeDepartmentMenu() {
  const departments = await departmentQueries.getAllDepartments();
  const departmentChoices = departments.map(department => ({
    name: department.name,
    value: department.id
  }));

  const { departmentId } = await inquirer.prompt([
    {
      type: 'list',
      name: 'departmentId',
      message: 'Select a department to remove:',
      choices: departmentChoices
    }
  ]);

  try {
    await departmentQueries.removeDepartment(departmentId);
    console.log('Department removed successfully.');
  } catch (error) {
    console.error('Error removing department:', error);
  }

  await promptGoBack();
}

async function removeRoleMenu() {
  try {
    const roles = await roleQueries.getAllRoles();
    const roleChoices = roles.map(role => ({
      name: role.title,
      value: role.id
    }));

    const { roleId } = await inquirer.prompt([
      {
        type: 'list',
        name: 'roleId',
        message: 'Select the job title you want to remove:',
        choices: roleChoices
      }
    ]);

    await roleQueries.removeRole(roleId);
    console.log('Job title removed successfully.');

    await promptGoBack();
  } catch (error) {
    console.error('Error removing job title:', error);
  }
}

async function removeEmployeeMenu() {
  try {
    const employees = await employeeQueries.getAllEmployees();
    const employeeChoices = employees.map(employee => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id
    }));

    const { employeeId } = await inquirer.prompt([
      {
        type: 'list',
        name: 'employeeId',
        message: 'Select the employee you want to remove:',
        choices: employeeChoices
      }
    ]);

    await employeeQueries.removeEmployee(employeeId);
    console.log('Employee removed successfully.');

    await promptGoBack();
  } catch (error) {
    console.error('Error removing employee:', error);
  }
}

async function promptGoBack() {
  await inquirer.prompt([
    {
      type: 'confirm',
      name: 'goBack',
      message: 'Do you want to go back to the main menu?',
      default: true
    }
  ]).then((answer) => {
    if (answer.goBack) {
      mainMenu();
    } else {
      console.log('Exiting...');
      process.exit(0);
    }
  });
}

mainMenu();