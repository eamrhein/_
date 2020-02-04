
import {
	RECEIVE_CURRENT_USER,
	RECEIVE_USER_LOGOUT,
	RECEIVE_USER_SIGN_IN
} from '../actions/session';

const initial ={
	isAuthenticated:false,
};

export default function(state = initial, action) {
	switch (action.type) {
	case RECEIVE_CURRENT_USER:
		return {
			...state,
			isAuthenticated: !!action.currentUser,
			...action.currentUser
		};
	case RECEIVE_USER_LOGOUT:
		return {
			isAuthenticated: false,
		};
	case RECEIVE_USER_SIGN_IN:
		return {
			...state,
			isSignedIn: true
		};
	default:
		return state;
	}
    
}