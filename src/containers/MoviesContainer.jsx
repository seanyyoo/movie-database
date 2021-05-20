import React, { useEffect } from 'react';
import MovieList from '../components/MovieList.jsx';


// const mapDispatchToProps = dispatch => ({
//   // create functions that will dispatch action creators
//   getMovie: (movieId) => dispatch(actions.getMovie(movieId)),
// });



function MoviesContainer(props) {
  
  return (
    <div>
      <MovieList />
    </div>
  )
}




export default MoviesContainer;