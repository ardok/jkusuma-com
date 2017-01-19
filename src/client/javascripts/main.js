import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, Link, Route, RouteHandler} from 'react-router';

import App from '../../shared/components/app';

const routes = (
  <Route path="/" component={App}>
  </Route>
);

ReactDOM.render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('app-content')
);
