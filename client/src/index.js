import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { logout, signup, login } from './actions/session';
import { fetchimgs} from './util/image';

let store;
let state = {};

if (localStorage.jwtToken) {
	const decodedUser = jwt_decode(localStorage.jwtToken);
	const currentTime = Date.now() / 1000;
	state.session = {
		isAuthenticated: true, 
		...decodedUser
	};
	store = configureStore(state);
	if (decodedUser.exp < currentTime) {
		store.dispatch(logout());
		window.location.href = '/';
	}
} else {
	store = configureStore(state);
}

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App fetchimgs = {fetchimgs}  />
		</Router>
	</Provider>,
	document.getElementById('root')	
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
