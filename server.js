// Import required Node.js modules and packages
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
require('dotenv').config(); // Load environment variables from a .env file

// Import Sequelize and configure the session store
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Create an Express.js application
const app = express();
const PORT = process.env.PORT || 3001; // Set the port number, defaulting to 3001 if not specified

// Configure Handlebars.js with custom helpers
const hbs = exphbs.create({ helpers });

// Configure session settings
const sess = {
  secret: process.env.SESSION_SECRET, // Secret used to sign the session ID cookie
  cookie: {
    maxAge: 900000, // Session duration in milliseconds (900,000 ms = 15 minutes)
    httpOnly: true, // Cookies are not accessible through client-side JavaScript
    secure: false, // Cookies are only sent over HTTPS, enhancing security
    sameSite: 'strict', // Cookies are only sent in a first-party context
  },
  resave: false, // Do not save sessions for every request, only save if the session data changes
  saveUninitialized: true, // Save a session that is new but not modified
  store: new SequelizeStore({
    db: sequelize // Store session data in the Sequelize database
  })
};

// Use the configured session middleware in the Express.js application
app.use(session(sess));

// Configure Handlebars.js as the template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Configure middleware to handle JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the defined routes in the Express.js application
app.use(routes);

// Sync Sequelize models to the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});
