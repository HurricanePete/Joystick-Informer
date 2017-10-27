export const BANNER_TOGGLE = 'BANNER_TOGGLE';
export const bannerToggle = () => ({
	type: BANNER_TOGGLE
})

export const DASHBOARD_TOGGLE = 'DASHBOARD_TOGGLE';
export const dashboardToggle = () => ({
	type: DASHBOARD_TOGGLE
})

export const SIGN_IN = 'SIGN_IN';
export const signIn = () => ({
	type: SIGN_IN
})

export const SIGN_OUT = 'SIGN_OUT';
export const signOut = () => ({
	type: SIGN_OUT
})

export const SET_GAME_ID = 'SET_GAME_ID';
export const setGameId = (gameId) => ({
	type: SET_GAME_ID,
	gameId
})

export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';
export const addToWatchlist = (game) => ({
	type: ADD_TO_WATCHLIST,
	game
})

export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';
export const removeFromWatchlist = (index) => ({
	type: REMOVE_FROM_WATCHLIST,
	index
})

export const REMOVE_ERROR = 'REMOVE_ERROR';
export const removeError = () => ({
	type: REMOVE_ERROR
})