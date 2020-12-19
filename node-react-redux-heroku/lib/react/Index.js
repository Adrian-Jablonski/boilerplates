import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '../styles/styles.scss';

import configureStore from './redux/configureStore';
import Routes from './Routes';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes></Routes>
		</BrowserRouter>
	</Provider>
	,
	document.getElementById('root')
);