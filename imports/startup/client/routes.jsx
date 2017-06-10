import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import AuthLoginPage from '../../ui/pages/AuthLoginPage.jsx';
import AuthSigninPage from '../../ui/pages/AuthSigninPage.jsx';
import CategoriesPage from '../../ui/pages/CategoriesPage.jsx';
import HomePage from '../../ui/pages/HomePage.jsx';
import NotFoundPage from '../../ui/pages/NotFoundPage.jsx';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
	<Router history={browserHistory}>
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/signin" component={AuthSigninPage} />
			<Route path="/login" component={AuthLoginPage} />
			<Route path="/categories" component={CategoriesPage} />
			<Route component={NotFoundPage}/>
		</Switch>
	</Router>
);