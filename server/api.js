const express = require('express');

const movieController = require('./movieController');

const router = express.Router();

router.get('/',
movieController.getMovies,
  (req, res) => res.status(200).json(res.locals.movies)
);

module.exports = router;
