import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';
import ErrorPage from './components/ErrorPage';
import OtherPage from './components/OtherPage';

const Routes = () => {
	return (
		<Switch>
			<Route
				exact
				path="/"
				component={App}
			/>
			<Route
				path="/page"
				component={OtherPage}
			/>
			<Route component={ErrorPage}/>
		</Switch>
	);
};

export default Routes;
