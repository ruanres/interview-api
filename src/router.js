const express = require('express');
const moviesController = require('./controllers/moviesController');

const router = express.Router();

router.get('/movies/', moviesController.getAll);

module.exports = router;
