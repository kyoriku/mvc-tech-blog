// Importing the models for User, Post, and Comment
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Defining associations between models using Sequelize associations

// Users have many Posts
User.hasMany(Post, { // Associates 'User' with multiple 'Post' instances, indicating a one-to-many relationship
  foreignKey: 'user_id', // Foreign key in the 'Posts' model referring to 'Users' model
});

// Posts belong to a single User
Post.belongsTo(User, { // Associates 'Post' with a single 'User', indicating a many-to-one relationship.
  foreignKey: 'user_id', // Foreign key in the 'Posts' model referring to 'Users' model
});

// Users have many Comments
User.hasMany(Comment, { // Associates 'User' with multiple 'Comment' instances, indicating a one-to-many relationship
  foreignKey: 'user_id', // Foreign key in the 'Comments' model referring to 'Users' model
});

// Comments belong to a single User
Comment.belongsTo(User, { // Associates 'Comment' with a single 'User', indicating a many-to-one relationship.
  foreignKey: 'user_id', // Foreign key in the 'Comments' model referring to 'Users' model
});

// Posts have many Comments
Post.hasMany(Comment, { // Associates 'Post' with multiple 'Comment' instances, indicating a one-to-many relationship
  foreignKey: 'post_id', // Foreign key in the 'Comments' model referring to 'Posts' model
});

// Comments belong to a single Post
Comment.belongsTo(Post, { // Associates 'Comment' with a single 'Post', indicating a many-to-one relationship.
  foreignKey: 'post_id', // Foreign key in the 'Comments' model referring to 'Posts' model
});

// Exporting the models for use in other parts of the application
module.exports = { User, Post, Comment };
