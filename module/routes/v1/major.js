const express = require('express');
const router = express.Router();

/**
 * Middleware
 */
const Auth = require('../../middlewares/Auth');

/** 
 * Controllers
 */
const MajorController = require('../../controllers/MajorController');

/**
 * Register all routes here
 */
router.get('/', Auth.isAuthenticated, MajorController.index);

module.exports = router;