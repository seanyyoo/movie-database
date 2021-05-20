import * as types from "../constants/actionTypes";

const initialState = {
  actorList: [],
  movieList: [],
  filteredList: [],
  page: 2,
};

const moviesReducer = (state = initialState, action) => {
  let movieList;
  let filteredList;
  let page = 2;

  switch (action.type) {
    case types.GET_MOVIE: {
      movieList = state.movieList.slice();
      action.payload.results.forEach((movie) => movieList.push(movie));
      filteredList = [...movieList];
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

    default: {
      return state;
    }
  }
};

export default moviesReducer;
