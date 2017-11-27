import * as actions from '../actions/auth';

const initialState = {
	authToken: null,
	currentUser: null,
	currentWatchlist: null
};


export const authReducer = (state=initialState, action) => {
	if(action.type  === actions.SET_AUTH_TOKEN) {
		return Object.assign({}, state, {
			authToken: action.authToken
		})
	}
	else if(action.type === actions.SET_CURRENT_USER) {
		return Object.assign({}, state, {
			currentUser: action.currentUser
		})
	}

	return state
}