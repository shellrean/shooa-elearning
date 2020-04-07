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
router.get('/:id', Auth.isAuthenticated, SubjectController.show);
router.patch('/:id', Auth.isAuthenticated, SubjectController.update);
router.delete('/:id', Auth.isAuthenticated, SubjectController.destroy);

module.exports = router;