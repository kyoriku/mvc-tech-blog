// Importing necessary parts (Model, DataTypes) from the 'sequelize' library
const { Model, DataTypes } = require('sequelize');
// Importing the database connection from 'connection.js'
const sequelize = require('../config/connection');

// Creating a Comment class that extends the sequelize Model class
class Comment extends Model {}

// Initializing the Comment model with the specified column definitions and rules
Comment.init(
  {
    // Column definition for 'id'
    id: {
      type: DataTypes.INTEGER, // Specify the data type of the 'id' column as INTEGER
      allowNull: false, // Ensure that the 'id' column cannot have a NULL value, making it a required field
      primaryKey: true, // Designate the 'id' column as the primary key for the table
      autoIncrement: true, // Enable auto-increment for the 'id' column, ensuring unique and sequential values
    },
    // Column definition for 'comment_text'
    comment_text: {
      type: DataTypes.TEXT, // Specify the data type of the 'comment_text' column as TEXT
      allowNull: false, // Ensure that the 'comment_text' column cannot have a NULL value, making it a required field
    },
    // Column definition for 'user_id' with a foreign key reference to the 'id' in the 'user' model
    user_id: {
      type: DataTypes.INTEGER, // Specify the data type of the 'user_id' column as INTEGER
      references: {
        model: 'user', // The 'references' object establishes a foreign key relationship with another table ('user' table in this case)
        key: 'id', // References the primary key 'id' in the 'user' table
      },
    },
    // Column definition for 'post_id' with a foreign key reference to the 'id' in the 'post' model
    post_id: {
      type: DataTypes.INTEGER, // Specify the data type of the 'post_id' column as INTEGER
      references: {
        model: 'post', // The 'references' object establishes a foreign key relationship with another table ('post' table in this case)
        key: 'id', // References the primary key 'id' in the 'post' table
      },
    },
  },
  {
    sequelize, // Providing the sequelize connection instance
    timestamps: true, // Enabling timestamps (created_at and updated_at columns)
    freezeTableName: true, // Setting the table name to be the same as the model name
    underscored: true, // Using underscores instead of camelCase for automatically added attributes
    modelName: 'comment', // Setting the model name to 'comment'
  }
);

// Exporting the Comment model for use in other parts of the application
module.exports = Comment;
