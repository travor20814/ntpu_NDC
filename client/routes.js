import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory as history } from 'react-router';

// Boards
export default (
  <Router history={history}>
    <Route path="/" component={SiteLayout}>
      
    </Route>
  </Router>
);
