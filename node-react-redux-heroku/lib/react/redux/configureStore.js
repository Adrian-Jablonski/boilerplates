import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducers';
import reduxImutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // adds support for Redux dev tools
	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(reduxImutableStateInvariant())) // warns if we accidentally mutate Redux state
	);
}