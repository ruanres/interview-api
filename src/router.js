const express = require('express');
const moviesController = require('./controllers/moviesController');
const moviesMiddleware = require('./middlewares/moviesMiddleware');
const router = express.Router();

router.get('/movies/', moviesMiddleware.validateQuery, moviesController.getAll);

module.exports = router;
