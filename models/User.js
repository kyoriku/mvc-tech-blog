// Importing necessary parts (Model, DataTypes) from the 'sequelize' library
const { Model, DataTypes } = require('sequelize');
// Importing the bcrypt library for password hashing
const bcrypt = require('bcrypt');
// Importing the database connection from 'connection.js'
const sequelize = require('../config/connection');

// Creating a User class that extends the sequelize Model class
class User extends Model {
  // Method to check if the provided password matches the stored hashed password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// Initializing the User model with the specified column definitions and rules
User.init(
  {
    // Column definition for 'id'
    id: {
      type: DataTypes.INTEGER, // Specify the data type of the 'id' column as INTEGER
      allowNull: false, // Ensure that the 'id' column cannot have a NULL value, making it a required field
      primaryKey: true, // Designate the 'id' column as the primary key for the table
      autoIncrement: true, // Enable auto-increment for the 'id' column, ensuring unique and sequential values
    },
    // Column definition for 'username'
    username: {
      type: DataTypes.STRING, // Specify the data type of the 'username' column as STRING
      allowNull: false, // Ensure that the 'username' column cannot have a NULL value, making it a required field
      unique: true, // Ensure that each 'username' is unique
    },
    // Column definition for 'email'
    email: {
      type: DataTypes.STRING, // Specify the data type of the 'email' column as STRING
      allowNull: false, // Ensure that the 'email' column cannot have a NULL value, making it a required field
      unique: true, // Ensure that each 'email' is unique
      validate: {
        isEmail: true, // Validation rule to ensure 'email' is a valid email address
      },
    },
    // Column definition for 'password'
    password: {
      type: DataTypes.STRING, // Specify the data type of the 'password' column as STRING
      allowNull: false, // Ensure that the 'password' column cannot have a NULL value, making it a required field
      validate: {
        len: [8], // Validation rule to ensure 'password' has a minimum length of 8 characters
      },
    },
  },
  {
    // Hooks to hash the password before creating or updating a user
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 12);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 12);
        return updatedUserData;
      },
    },
    sequelize, // Providing the sequelize connection instance
    timestamps: false, // Disabling timestamps (created_at and updated_at columns)
    freezeTableName: true, // Setting the table name to be the same as the model name
    underscored: true, // Using underscores instead of camelCase for automatically added attributes
    modelName: 'user', // Setting the model name to 'user'
  }
);

// Exporting the User model for use in other parts of the application
module.exports = User;
