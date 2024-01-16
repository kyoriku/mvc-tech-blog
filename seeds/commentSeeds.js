const { Comment } = require('../models');

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

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
