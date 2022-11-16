import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// May need to replace createStore with configureStore from @reduxjs/toolkit library
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App.js';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);