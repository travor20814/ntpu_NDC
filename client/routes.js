import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory as history, applyRouterMiddleware } from 'react-router';
import useScroll from 'react-router-scroll/lib/useScroll';

// Boards
import SiteLayout from './components/SiteLayout.js';
import SiteIndex from './components/SiteIndex.js';
import PageJudges from './components/PageJudges.js';
import PageAbout from './components/PageAbout.js';
import PageCompetition from './components/PageCompetition.js';

export default (
  <Router history={history} render={applyRouterMiddleware(useScroll())}>
    <Route path="/" component={SiteLayout}>
      <IndexRoute component={SiteIndex} />
      <Route path="/judges" component={PageJudges} />
      <Route path="/about" component={PageAbout} />
      <Route path="/competition" component={PageCompetition} />
    </Route>
  </Router>
);
