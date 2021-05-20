import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './reducers/index';
import moviesReducer from './reducers/moviesReducer'

const store = createStore(
  allReducers, 
  composeWithDevTools()
);

export default store;