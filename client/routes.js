import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory as history } from 'react-router';

// Boards
import SiteLayout from './components/SiteLayout.js';
import SiteIndex from './components/SiteIndex.js';

export default (
  <Router history={history}>
    <Route path="/" component={SiteLayout}>
      <IndexRoute component={SiteIndex} />
    </Route>
  </Router>
);
