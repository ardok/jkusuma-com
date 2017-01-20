import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, Link, Route, IndexRoute, RouteHandler} from 'react-router';

import AppContainer from '../../shared/containers/app-container';
import IndexContainer from '../../shared/containers/index-container';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={IndexContainer} />
  </Route>
);

ReactDOM.render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('app-content')
);
