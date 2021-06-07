import * as types from "../constants/actionTypes";

const initialState = {
  actorList: [],
  movieList: [],
  filteredList: [],
  page: 2,
  castList: [],
};

const moviesReducer = (state = initialState, action) => {
  let movieList;
  let filteredList;
  let castList;
  let page = 2;

  switch (action.type) {
    case types.GET_MOVIE: {
      console.log(action.payload);
      movieList = state.movieList.slice();
      action.payload.results.forEach((movie) => movieList.push(movie));
      filteredList = [...movieList];
      console.log('filteredList', filteredList)
      return {
        ...state, 
        movieList,
        filteredList,
      }
    }
    
    case types.SEARCH_MOVIE: {
      filteredList = state.movieList.filter((movie) => {
        return movie.title.includes(action.payload);
      });
      return {
        ...state,
        filteredList,
      }
    }

    case types.ADD_MOVIE: {
      page = state.page + 1;
      movieList = state.movieList.slice();
      action.payload.results.forEach((movie) => movieList.push(movie));
      filteredList = [...movieList];
      return {
        ...state, 
        movieList,
        filteredList,
        page,
      }
    }

    case types.GET_CAST: {
      console.log(action.payload);
      castList = state.castList.slice();
      action.payload.cast.forEach((cast) => castList.push(cast));
      return {
        ...state, 
        castList
      }
    }

    default: {
      return state;
    }
  }
};

export default moviesReducer;
