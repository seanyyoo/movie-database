const mongoose = require('mongoose');
const fetch = require('node-fetch');
require('dotenv/config');

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'MoviesDB'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: String,
  id: Number, 
  poster_path: String,
  overview: String,
  backdrop_path: String,
})

const Movies = mongoose.model('movie', moviesSchema);

for (let i = 1; i <= 500; i++) {
fetch(
  `https://api.themoviedb.org/3/movie/popular?api_key=2824910ce318ceabd50d2661187c1b9e&page=${i}`,
)
.then(response => response.json())
.then(movies => {
  movies.results.forEach((movie) => {
    Movies.create({title: movie.title, id: movie.id, poster_path: movie.poster_path, overview: movie.overview, backdrop_path: movie.backdrop_path})
  })
})
.catch(error => console.log('error fetching', error))
}

module.exports = Movies;
