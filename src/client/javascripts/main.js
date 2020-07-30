// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import document from 'global/document';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

import { AppContainer } from '../../components/containers/AppContainer';
import { RouteIndexContainer } from '../../components/containers/RouteIndexContainer';
import { StyletronThemeProvider } from '../../utils/styletron';

const debug =
  process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();

const engine = new Styletron();

ReactDOM.render(
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <StyletronThemeProvider>
      <AppContainer>
        <Router>
          <Switch>
            <Route exact path="/" component={RouteIndexContainer} />
          </Switch>
        </Router>
      </AppContainer>
    </StyletronThemeProvider>
  </StyletronProvider>,
  document.getElementById('app-content')
);
