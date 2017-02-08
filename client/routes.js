import 'babel-polyfill';
import React from 'react';
import thunk from 'redux-thunk';
import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import {
  Provider,
} from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  useRouterHistory,
} from 'react-router';
import fetchMiddleware from 'redux-middleware-fetch';
import {
  syncHistoryWithStore,
  routerMiddleware,
} from 'react-router-redux';
import {
  createHistory,
} from 'history';
import reducer from './reducers/index.js';

// Boards
import SiteLayout from './components/SiteLayout.js';
import SiteIndex from './components/SiteIndex.js';
import PageJudges from './components/PageJudges.js';
import PageAbout from './components/PageAbout.js';
import PageCompetition from './components/PageCompetition.js';

const history = useRouterHistory(createHistory)({
  basename: '/',
});

export const store = createStore(reducer, {}, compose(
  applyMiddleware(
    thunk,
    routerMiddleware(history),
    fetchMiddleware,
  ),
));

const storeHistory = syncHistoryWithStore(history, store);

export default (
  <Provider store={store}>
    <Router history={storeHistory}>
      <Route path="/" component={SiteLayout}>
        <IndexRoute component={SiteIndex} />
        <Route path="/judges" component={PageJudges} pathKey="judges" />
        <Route path="/about" component={PageAbout} pathKey="about" />
        <Route path="/competition" component={PageCompetition} pathKey="competition" />
      </Route>
    </Router>
  </Provider>
);
