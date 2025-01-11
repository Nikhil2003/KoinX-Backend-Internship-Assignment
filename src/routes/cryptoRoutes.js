const express = require('express'); // Import the Express library to create a router
const { getStats, getDeviation } = require('../controllers/cryptoController'); // Import the controller functions

const router = express.Router(); // Create a new router instance

// Define a route for getting cryptocurrency statistics
// When a GET request is made to '/stats', the getStats function from the controller is called
router.get('/stats', getStats);

// Define a route for getting the standard deviation of cryptocurrency prices
// When a GET request is made to '/deviation', the getDeviation function from the controller is called
router.get('/deviation', getDeviation);

// Export the router so it can be used in other parts of the application
module.exports = router;