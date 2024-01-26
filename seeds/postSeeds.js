// Import the Post model from the specified path
const { Post } = require('../models');

// Define an array of post data, each object representing a post with a title, content, and user ID
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
  {
    title: 'Getting Started with React.js',
    content: 'Learn the fundamentals of React.js and build your first React application.',
    user_id: 1,
  },
  {
    title: 'Cybersecurity Basics: Protecting Your Online Presence',
    content: 'Explore essential cybersecurity practices to keep your online activities secure.',
    user_id: 2,
  },
  {
    title: 'The Future of Artificial Intelligence in Healthcare',
    content: 'Discover how AI is transforming the healthcare industry and improving patient care.',
    user_id: 3,
  },
  {
    title: 'Mastering CSS Grid Layout',
    content: 'A deep dive into CSS Grid Layout to create responsive and flexible web layouts.',
    user_id: 4,
  },
  {
    title: 'Introduction to Docker and Containerization',
    content: 'Get started with Docker and containerization to streamline your development workflow.',
    user_id: 1,
  },
];

// Define a function called seedPosts, which uses the bulkCreate method of the Post model to insert multiple posts into the database
const seedPosts = () => Post.bulkCreate(postData);

// Export the seedPosts function to be used in the database seed script: 'seed.js'
module.exports = seedPosts;
