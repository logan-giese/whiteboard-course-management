// Import React dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// Main app files
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


// Render the app
ReactDOM.render((
  <BrowserRouter>
    <App />
    </BrowserRouter>),
  document.getElementById('root'));


