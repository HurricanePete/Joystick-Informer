import * as actions from '../actions/auth';

const initialState = {
	loading: false,
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
	else if(action.type === actions.SET_CURRENT_WATCHLIST) {
		return Object.assign({}, state, {
			currentWatchlist: action.currentWatchlist
		})
	}
	else if(action.type === actions.SIGN_OUT) {
		return Object.assign({}, state, {
			authToken: null,
			currentUser: null,
			currentWatchlist: null
		})
	}
	else if(action.type === actions.LOADING_TOGGLE) {
		return Object.assign({}, state, {
			loading: !state.loading
		})
	}
	else if(action.type === actions.ADD_TO_WATCHLIST) {
		console.log(action.gameId);
		return Object.assign({}, state, {
			currentWatchlist: {...state.currentWatchlist,
				gameIds: [...state.currentWatchlist.gameIds, action.gameId]
			}
		})
	}
	else if(action.type === actions.REMOVE_FROM_WATCHLIST) {
		return Object.assign({}, state, {
			currentWatchlist: {...state.currentWatchlist,
				gameIds: state.currentWatchlist.gameIds.filter(item => item !== action.gameId)
			}
		})
	}

	return state
}