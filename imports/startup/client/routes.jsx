import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={AppContainer} />
      <Route path="prueba" component={AppContainer} />
    </div>
  </Router>
);