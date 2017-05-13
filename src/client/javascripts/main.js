import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import {createStore, applyMiddleware} from 'redux';
import document from 'global/document';

import appReducer from '../../shared/reducers/index';

import AppContainer from '../../shared/containers/app-container';
import IndexContainer from '../../shared/containers/index-container';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  appReducer,
  applyMiddleware(middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <AppContainer>
          <Route exact path="/" component={IndexContainer} />
        </AppContainer>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app-content')
);
