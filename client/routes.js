import React from 'react';
import { Router, Route, IndexRoute, browserHistory as history } from 'react-router';

// Boards
import SiteLayout from './components/SiteLayout.js';
import SiteIndex from './components/SiteIndex.js';
import PageJudges from './components/PageJudges.js';
import PageAbout from './components/PageAbout.js';
import PageCompetition from './components/PageCompetition.js';

export default (
  <Router history={history}>
    <Route path="/" component={SiteLayout}>
      <IndexRoute component={SiteIndex} />
      <Route path="/judges" component={PageJudges} pathKey="judges" />
      <Route path="/about" component={PageAbout} pathKey="about" />
      <Route path="/competition" component={PageCompetition} pathKey="competition" />
    </Route>
  </Router>
);
