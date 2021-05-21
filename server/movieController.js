const Movies = require('./movieModels');

const movieController = {};

movieController.addMovies = (req, res, err) => {
  const {
    title, id, poster_path, overview, backdrop_path
  } = req.body;

  Movies.create({
    title, id, poster_path, overview, backdrop_path
  })
    .then((data) => {
      res.loacls.movie = data;
      return next()
    }) 
    .catch((err) => {
      next({
        log: `movieController.addMovies: ERROR: ${err}`,
        message: { err: 'Error occurred in movieController.addMovies Check server logs for more details.'},
      })
    })
  };

  movieController.getMovies = (req, res, err) => {
    Movies.find({})
      .then((data) => {
        console.log(typeof data);
        res.locals.movies = data;
        return next();
      })
      .catch((err) => next({
          log: `movieController.addMovies: ERROR: ${err}`,
          message: { err: 'Error occurred in movieController.addMovies Check server logs for more details.'},
        }))
  }

    



    module.exports = movieController;