const express = require('express');
const moviesController = require('./controllers/moviesController');
const moviesMiddleware = require('./middlewares/moviesMiddleware');
const unknownRouteMiddleware = require('./middlewares/unknownRouteMiddleware');
const router = express.Router();

router.get('/movies/', moviesMiddleware.validateQuery, moviesController.getAll);
router.get('/movies/:id', moviesController.getById);

router.use('*', unknownRouteMiddleware);

module.exports = router;
