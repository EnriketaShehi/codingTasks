// index.js component

// import all components required by this component
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import reportWebVitals from './reportWebVitals';

// define background colour of the webpages
document.body.style.backgroundColor = "#FAF0E6";

// call 'App.js' within the 'BrowserRouter' to allow routing to the different pages
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();