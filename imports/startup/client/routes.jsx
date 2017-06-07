import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';
import AuthRegisterPage from '../../ui/pages/AuthRegisterPage.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={AppContainer} />
      <Route path="/auth" component={AuthRegisterPage} />
    </div>
  </Router>
);