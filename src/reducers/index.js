import * as actions from '../actions';

const initialState = {
	banner: true,
	searching: false,
	searchResults: null,
	sendToDashboard: false,
	watchlistWarning: {
		warning: false,
		gameId: null
	},
	authToken: null,
	currentUser: null,
	currentWatchlist: null
};

export const joystickReducer = (state=initialState, action) => {
	if (action.type === actions.BANNER_TOGGLE) {
		return Object.assign({}, state, {
			banner: false
		});
	}
	else if (action.type === actions.SIGN_OUT) {
		return Object.assign({}, state, {
				currentUser: null,
				currentWatchlist: null,
				authToken: null
			})
	}
	else if (action.type === actions.SET_SEARCH_RESULTS) {
		return Object.assign({}, state, {
			searchResults: action.searchResults
		})
	}
	else if (action.type === actions.SET_WATCHLIST_WARNING) {
		return Object.assign({}, state, {
			watchlistWarning: {
				warning: true,
				gameId: action.gameId
			}
		})
	}
	else if (action.type === actions.RESET_WATCHLIST_WARNING) {
		return Object.assign({}, state, {
			watchlistWarning: {
				warning: false,
				gameId: null
			}
		})
	}

	return state;
};