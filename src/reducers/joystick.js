import * as actions from '../actions/joystick';

const initialState = {
	banner: true,
	watchlistWarning: {
		warning: false,
		gameId: null
	},
	searchResults: null,
	newsResults: null

};

export const joystickReducer = (state=initialState, action) => {
	if (action.type === actions.BANNER_TOGGLE) {
		return Object.assign({}, state, {
			banner: false
		});
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
	else if (action.type === actions.SET_SEARCH_RESULTS) {
		return Object.assign({}, state, {
			searchResults: action.searchResults
		})
	}
	else if (action.type === actions.SET_NEWS_RESULTS) {
		return Object.assign({}, state, {
			newsResults: action.newsResults
		})
	}

	return state;
};