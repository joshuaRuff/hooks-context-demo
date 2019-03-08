import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';

const client = document.getElementById('root')

ReactDOM.render(
  <App />
,
  client
);
serviceWorker.unregister();
