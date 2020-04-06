const express = require("express");
const router = express.Router();

/**
 * Middleware
 */
const Auth = require('../../middlewares/Auth');

/**
 * Controller
 */
const ClassroomController = require('../../controllers/ClassroomController');

/**
 * All rotues register here
 */
router.get('/', Auth.isAuthenticated, ClassroomController.index);
router.post('/', Auth.isAuthenticated, ClassroomController.store);

module.exports = router;