// Import the Comment model from the specified path
const { Comment } = require('../models');

// Define an array of comment data, each object representing a comment with associated text, user ID, and post ID
const commentData = [
  {
    comment_text: 'Great introduction! Looking forward to more posts on machine learning.',
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: 'Very helpful tutorial. Thanks for sharing!',
    user_id: 3,
    post_id: 2,
  },
  {
    comment_text: 'Excellent tips! Especially liked the section on code organization.',
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: 'Informative guide! How do you handle large datasets in data science?',
    user_id: 1,
    post_id: 4,
  },
];

// Define a function called seedComments, which uses the bulkCreate method of the Comment model to insert multiple comments into the database
const seedComments = () => Comment.bulkCreate(commentData);

// Export the seedComments function to be used in the database seed script: 'seed.js'
module.exports = seedComments;
