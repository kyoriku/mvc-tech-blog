/**
* Database configuration handling both local and production (Heroku)
* environments using Sequelize ORM
*/
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// Use JawsDB for Heroku deployment, otherwise use local database
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;