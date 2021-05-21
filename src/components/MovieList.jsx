import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Styles from './MovieList.module.css'
import MovieItem from './MovieItem.jsx';



function MovieList(props) {
  const movies = useSelector(state => state.movies.filteredList)
  const moviesArr = [];
  for (let i = 0; i < movies.length; i++) {
    moviesArr.push(<MovieItem
      id={movies[i].id}
      backdrop={movies[i].backdrop_path}
      post={movies[i].poster_path}
      title={movies[i].title}
      key={i}
    />)
  }

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const dispatch = useDispatch();
  const page = useSelector(state => state.movies.page)
  const getMoreMovie = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=2824910ce318ceabd50d2661187c1b9e&page=${page}`,
      requestOptions  
    )
    .then(response => response.json())
    .then(movies => {
    
      dispatch({type: 'ADD_MOVIE', payload: movies})
    })
    .catch(error => console.log('error fetching', error))
  }
 
  return (
    <>
      <div>
        <h3 className={Styles.popular}>Popular Movies</h3>
      </div>
      <div className={Styles.movieList}>
        {moviesArr}
      </div>
      <div className={Styles.loadContainer}>
        <button onClick={()=> getMoreMovie()} className={Styles.load}>Click for more</button>
      </div>
    </>
  )
}


export default MovieList;