export const BANNER_TOGGLE = 'BANNER_TOGGLE';
export const bannerToggle = () => ({
	type: BANNER_TOGGLE
})

export const DASHBOARD_TOGGLE = 'DASHBOARD_TOGGLE';
export const dashboardToggle = () => ({
	type: DASHBOARD_TOGGLE
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
export const addToWatchlist = (gameId) => ({
	type: ADD_TO_WATCHLIST,
	gameId
})

export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST';
export const removeFromWatchlist = (gameId) => ({
	type: REMOVE_FROM_WATCHLIST,
	gameId
})

export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const setSearchResults = (searchResults) => ({
	type: SET_SEARCH_RESULTS,
	searchResults
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
