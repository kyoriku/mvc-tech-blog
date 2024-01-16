// Import the User model from the specified path
const { User } = require('../models');

// Define an array of user data, each object representing a user with a username, email, and password
const userData = [
  {
    username: 'john_doe',
    email: 'john.doe@example.com',
    password: 'password123',
  },
  {
    username: 'tech_guru',
    email: 'tech.guru@example.com',
    password: 'password456',
  },
  {
    username: 'coding_ninja',
    email: 'coding.ninja@example.com',
    password: 'password789',
  },
  {
    username: 'data_scientist',
    email: 'data.scientist@example.com',
    password: 'passwordABC',
  },
];

// Define a function called seedUsers, which uses the bulkCreate method of the User model to insert multiple users into the database
// The { individualHooks: true } option is provided to trigger any individual hooks associated with the model during the creation process
const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

// Export the seedUsers function to be used in the database seed script: 'seed.js'
module.exports = seedUsers;
