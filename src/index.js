import React from 'react';
import ReactDOM from 'react-dom';
import Imgur from './api/Imgur.js';
import App from './App.jsx';

// data connect to
const imgur = new Imgur(process.env.REACT_APP_CLIENT_ID);
ReactDOM.render(
  <React.StrictMode>
    <App imgur={imgur} />
  </React.StrictMode>,
  document.getElementById('root')
);
