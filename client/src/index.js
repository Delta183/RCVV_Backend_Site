import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// May need to replace createStore with configureStore from @reduxjs/toolkit library
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App.js';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// This means of creating the root for the React app is standard fare for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);