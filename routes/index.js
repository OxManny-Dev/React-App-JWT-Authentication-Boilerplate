const router = require('express').Router();
const apiRoutes = require('./apiRoutes');


// Setup API routes
// Prepends /api to all of the routes in this file
router.use('/api', apiRoutes);


module.exports = router;