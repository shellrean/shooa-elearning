const express = require('express');
const router = express.Router();

/**
 * Middleware 
 */
const Auth = require('../../middlewares/Auth');

/**
 * Controllers
 */
const DisuccsionController = require('../../controllers/DisuccsionController');

/**
 * Register all routes here
 */
router.get('/', Auth.isAuthenticated, DisuccsionController.index);

module.exports = router;