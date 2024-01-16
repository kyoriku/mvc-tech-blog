const { User } = require('../models');

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

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
