const express = require('express');
const AppController = require('../controllers/AppController');

// Create a route isntance
const router = express.Router();

// Define API endpoints
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

// Export the router
module.exports = router;
