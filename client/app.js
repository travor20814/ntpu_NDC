import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory as history } from 'react-router';
import routes from './routes.js';

ReactDOM.render(
  routes,
  document.getElementById('root')
);
