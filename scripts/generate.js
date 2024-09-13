// scripts/generate.js

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the entity name: ', (entityName) => {
  // Convert the entity name to lowercase for directory names
  const entityDirName = entityName.toLowerCase();

  // Generate the module
  execSync(`npx nest generate module ${entityDirName}`);

  // Generate the entity
  execSync(
    `npx nest generate class ${entityDirName}/entity/${entityDirName} --flat`,
  );

  // Generate the service
  execSync(
    `npx nest generate service ${entityDirName}/service/${entityDirName} --flat`,
  );

  // Generate the controller
  execSync(
    `npx nest generate controller  ${entityDirName}/controller/${entityDirName} --flat`,
  );

  console.log('Files created successfully!');

  rl.close();
});
