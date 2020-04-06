const express = require('express');
const router = express.Router();

/**
 * Middleware
 */
const Auth = require('../../middlewares/Auth');

/**
 * Controllers
 */
const SubjectController = require('../../controllers/SubjectController');

/**
 * Register all routes here
 */
router.get('/', Auth.isAuthenticated, SubjectController.index);
router.post('/', Auth.isAuthenticated, SubjectController.store);

module.exports = router;