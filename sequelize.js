// sequelize.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'mysql',
  username: 'root',
  password: '12345',  // Replace with your actual MySQL password
  database: 'emotorad_db',
  logging: console.log,  // Logs all SQL queries
});

module.exports = sequelize;
