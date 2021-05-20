import * as types from '../constants/actionTypes';

export const getMovie = (movieId) => ({
  type: types.GET_MOVIE,
  payload: movieId,
});
