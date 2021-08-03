import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import OpeningPage from './OpeningPage';

// Import Redux items
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';

// Redux setup
// Setting up store with middleware and redux dev tools viewers
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Render the app
ReactDOM.render(
  <Provider store={store}>
    <OpeningPage />
  </Provider>,
  document.getElementById('root')
);
