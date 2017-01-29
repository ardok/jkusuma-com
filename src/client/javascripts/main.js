import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import appReducer from '../../shared/reducers/index';

import AppContainer from '../../shared/containers/app-container';
import IndexContainer from '../../shared/containers/index-container';

const store = createStore(appReducer);

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={IndexContainer} />
  </Route>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app-content')
);
