import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Passed in from parent component or from mapStateToProps
const Auth = ({ component: Component, path, loggedIn, id, exact }) => (
	<Route path={path} exact={exact} render={(props) => (
		!loggedIn ? (
			<Component {...props} />
		) : (
		// Redirect to the tweets page if the user is authenticated
			<Redirect to={'/user/' + id } />
		)
	)} />
);

// Use the isAuthenitcated slice of state to determine whether a user is logged in

const mapStateToProps = state => (
	{ loggedIn: state.session.isAuthenticated,
		id: state.session.id }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
 

