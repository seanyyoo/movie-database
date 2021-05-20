import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer.js';

const allReducers = combineReducers({
  movies: moviesReducer
});

export default allReducers;

