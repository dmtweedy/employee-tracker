const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

const pool = mysql.createPool({
  host: 'localhost:3565',
  user: 'root',
  password: 'tweetybird',
  database: 'employee_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Read and execute scripts
function executeSchemaScripts(connection) {
  const schemaPath = path.join(__dirname, 'models');
  const schemaFiles = ['departmentSchema.sql', 'employeeSchema.sql', 'roleSchema.sql'];

  for (const file of schemaFiles) {
    const script = fs.readFileSync(path.join(schemaPath, file), 'utf8');
    connection.query(script, (err, results) => {
      if (err) {
        console.error(`Error executing ${file}:`, err);
      } else {
        console.log(`Executed ${file}`);
      }
    });
  }
}

// Initialize database
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }

  console.log('Connected to database');

  // Execute scripts
  executeSchemaScripts(connection);

  // Release database when application exits
  process.on('exit', () => {
    connection.release();
  });
});