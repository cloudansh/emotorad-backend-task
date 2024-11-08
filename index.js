const { Sequelize } = require('sequelize');
const config = require('./config.json');

// Initialize Sequelize with the development configuration from config.json
const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  dialect: config.development.dialect,
});

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Call the function to test the connection
testConnection();

// Export sequelize instance for use in models and other files
module.exports = sequelize;
