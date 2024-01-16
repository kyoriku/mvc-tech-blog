// Importing necessary parts (Model, DataTypes) from the 'sequelize' library
const { Model, DataTypes } = require('sequelize');
// Importing the database connection from 'connection.js'
const sequelize = require('../config/connection');

// Creating a Post class that extends the sequelize Model class
class Post extends Model {}

// Initializing the Post model with the specified column definitions and rules
Post.init(
  {
    // Column definition for 'id'
    id: {
      type: DataTypes.INTEGER, // Specify the data type of the 'id' column as INTEGER
      allowNull: false, // Ensure that the 'id' column cannot have a NULL value, making it a required field
      primaryKey: true, // Designate the 'id' column as the primary key for the table
      autoIncrement: true, // Enable auto-increment for the 'id' column, ensuring unique and sequential values
    },
    // Column definition for 'title'
    title: {
      type: DataTypes.STRING, // Specify the data type of the 'title' column as STRING
      allowNull: false, // Ensure that the 'title' column cannot have a NULL value, making it a required field
    },
    // Column definition for 'content'
    content: {
      type: DataTypes.TEXT, // Specify the data type of the 'content' column as TEXT
      allowNull: false, // Ensure that the 'content' column cannot have a NULL value, making it a required field
    },
    // Column definition for 'user_id' with a foreign key reference to the 'id' in the 'user' model
    user_id: {
      type: DataTypes.INTEGER, // Specify the data type of the 'user_id' column as INTEGER
      references: {
        model: 'user', // The 'references' object establishes a foreign key relationship with another table ('user' table in this case)
        key: 'id', // References the primary key 'id' in the 'user' table
      },
    },
  },
  {
    sequelize, // Providing the sequelize connection instance
    timestamps: true, // Enabling timestamps (created_at and updated_at columns)
    freezeTableName: true, // Setting the table name to be the same as the model name
    underscored: true, // Using underscores instead of camelCase for automatically added attributes
    modelName: 'post', // Setting the model name to 'post'
  }
);

// Exporting the Post model for use in other parts of the application
module.exports = Post;
