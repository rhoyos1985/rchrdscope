import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import AuthRegisterPage from '../../ui/pages/AuthRegisterPage.jsx';
import CategoriesPage from '../../ui/pages/CategoriesPage.jsx';
import HomePage from '../../ui/pages/HomePage.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/signin" component={AuthRegisterPage} />
      <Route path="/categories" component={CategoriesPage} />
    </div>
  </Router>
);