import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const BANNER_TOGGLE = 'BANNER_TOGGLE';
export const bannerToggle = () => ({
	type: BANNER_TOGGLE
})

export const DASHBOARD_TOGGLE = 'DASHBOARD_TOGGLE';
export const dashboardToggle = () => ({
	type: DASHBOARD_TOGGLE
})

export const SET_GAMEVIEW = 'SET_GAMEVIEW';
export const setGameview = (game) => ({
	type: SET_GAMEVIEW,
	game
})

export const SET_WATCHLIST_WARNING = 'SET_WATCHLIST_WARNING';
export const setWatchlistWarning = (gameId) => ({
	type: SET_WATCHLIST_WARNING,
	gameId
})

export const RESET_WATCHLIST_WARNING = 'RESET_WATCHLIST_WARNING';
export const resetWatchlistWarning = () => ({
	type: RESET_WATCHLIST_WARNING
})

export const searchAllGames = searchTerm => (dispatch) => {
	return fetch(`${API_BASE_URL}/games/search/${searchTerm}`, {
		method: 'GET'
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(results => dispatch(setSearchResults(results)))
		.catch(err => console.log(err))
}

export const searchSingleGame = gameId => (dispatch) => {
	return fetch(`${API_BASE_URL}/games/id/${gameId}`, {
		method: 'GET'
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(game => dispatch(setGameview(game)))
		.catch(err => console.log(err))
}