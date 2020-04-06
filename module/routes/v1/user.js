const express = require('express');
const router = express.Router();

/**
 * Middleware 
 */
const Auth = require('../../middlewares/Auth');

/**
 * Controller
 */
const UserController = require('../../controllers/UserController');

/**
 * Routes
 */
router.post('/auth', UserController.auth);
router.get('/authenticated', Auth.isAuthenticated, UserController.authenticated);

module.exports = router;