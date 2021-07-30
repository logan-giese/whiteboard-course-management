// Import React dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// Import Redux items
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';

// Main app files
import './index.css';
import OpeningPage from './OpeningPage';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
