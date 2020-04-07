const express = require('express');
const router = express.Router();

/**
 * Middleware
 */
const Auth = require('../../middlewares/Auth');

/**
 * Controllers
 */
const MatterController = require('../../controllers/MatterController');

/**
 * Register all routes here
 */
router.get('/', Auth.isAuthenticated, MatterController.index);
router.post('/', Auth.isAuthenticated, MatterController.store);
router.get('/:id', Auth.isAuthenticated, MatterController.show);
router.patch('/:id', Auth.isAuthenticated, MatterController.update);
router.delete('/:id', Auth.isAuthenticated, MatterController.destroy);

module.exports = router;