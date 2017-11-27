import * as actions from '../actions';
import * as auth from '../actions/auth.js';

const initialState = {
	banner: true,
	dashboard: false,
	searching: false,
	searchResults: null,
	sendToDashboard: false,
	watchlistWarning: {
		warning: false,
		gameId: null
	},
	signedIn: false,
	users: [{
		userId: 1,
		username: "PotatoBandit",
		password: "PotatoPassword"
	}],
	watchlists: [{
		userId: 1,
		games: [1, 2, 3]
	}],
	authToken: null,
	currentUser: null
};

export const joystickReducer = (state=initialState, action) => {
	if (action.type === actions.BANNER_TOGGLE) {
		return Object.assign({}, state, {
			banner: false
		});
	}
	else if (action.type === actions.SIGN_IN) {
		return Object.assign({}, state, {
			signedIn: true
		})
	}
	else if (action.type === actions.SIGN_OUT) {
		return Object.assign({}, state, {
				signedIn: false
			})
	}
	else if (action.type === actions.ADD_TO_WATCHLIST) {
		const watchlistUpdate = state.watchlists.map(watchlist => {
			if(watchlist.userId === state.currentUser) {
				watchlist.games.push(action.gameId);
				return watchlist;
			}
			else{
				return watchlist;
			}
		})
		return Object.assign({}, state, {
			watchlists: [...watchlistUpdate]
		})
	}
	else if (action.type === actions.REMOVE_FROM_WATCHLIST) {
		const watchlistUpdate = state.watchlists.map(watchlist => {
			if(watchlist.userId === state.currentUser) {
				const filteredList = watchlist.games.filter(game => game !== action.gameId);
				return {
					userId: watchlist.userId,
					games: filteredList
				}
			}
			else{
				return watchlist;
			}
		})
		return Object.assign({}, state, {
			watchlists: [...watchlistUpdate]
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
	else if (action.type === actions.CREATE_NEW_USER) {
		const newUserId = state.users.length + 1;
		return Object.assign({}, state, {
			users: [...state.users, {
				userId: newUserId,
				username: action.userInfo.username,
				password: action.userInfo.password
			}],
			watchlists: [...state.watchlists, {
				userId: newUserId,
				games: []
			}]
		})
	}
	else if (action.type === actions.SEND_TO_DASHBOARD) {
		return Object.assign({}, state, {
			sendToDashboard: action.boolean
		})
	}
	else if (action.type  === auth.SET_AUTH_TOKEN) {
		return Object.assign({}, state, {
			authToken: action.authToken
		})
	}
	else if (action.type === actions.SET_CURRENT_USER) {
		return Object.assign({}, state, {
			currentUser: action.currentUser
		})
	}

	return state;
};