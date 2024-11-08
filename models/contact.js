const { DataTypes } = require('sequelize');
const sequelize = require('../index');  // Import sequelize instance from index.js

console.log(sequelize);  // Debugging line: Check if sequelize is correctly initialized

const Contact = sequelize.define('Contact', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  primary_contact: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  secondary_contact: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: true,  // Automatically adds createdAt and updatedAt fields
});

module.exports = Contact;
