const { Post } = require('../models');

const postData = [
  {
    title: 'Introduction to Machine Learning',
    content: 'In this post, we explore the basics of machine learning and its applications.',
    user_id: 1,
  },
  {
    title: 'Building a RESTful API with Node.js and Express',
    content: 'Learn how to create a RESTful API using Node.js and Express for your web applications.',
    user_id: 2,
  },
  {
    title: 'Web Development Best Practices',
    content: 'Discover the best practices for writing clean and maintainable code in web development.',
    user_id: 3,
  },
  {
    title: 'Exploring Python Data Science Libraries',
    content: 'A comprehensive guide to using Python libraries for data analysis and visualization.',
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
