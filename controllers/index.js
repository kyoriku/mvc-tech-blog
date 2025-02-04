/**
* Main router configuration that combines all route modules and
* sets up their respective path prefixes
*/
const router = require('express').Router();

// Import route modules
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

// Set up route prefixes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;