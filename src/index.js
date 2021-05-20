import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';
import store from './store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
