// Import the User model from the specified path
const { User } = require('../models');

// Define an array of user data, each object representing a user with a username, email, and password
const userData = [
  {
    username: 'sarah.codes',
    email: 'sarah.mitchell@gmail.com',
    password: 'hashedPassword123'
  },
  {
    username: 'dev_alex',
    email: 'alex.kumar@outlook.com',
    password: 'hashedPassword456'
  },
  {
    username: 'emma_writes',
    email: 'emma.chen@yahoo.com',
    password: 'hashedPassword789'
  },
  {
    username: 'carlos_dev',
    email: 'carlos.rodriguez@hotmail.com',
    password: 'hashedPasswordABC'
  },
  {
    username: 'tech_mia',
    email: 'mia.patel@protonmail.com',
    password: 'hashedPasswordDEF'
  }
];

// Define a function called seedUsers, which uses the bulkCreate method of the User model to insert multiple users into the database
// The { individualHooks: true } option is provided to trigger any individual hooks associated with the model during the creation process
const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

// Export the seedUsers function to be used in the database seed script: 'seed.js'
module.exports = seedUsers;
