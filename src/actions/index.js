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

export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const createNewUser = (userInfo) => ({
	type: CREATE_NEW_USER,
	userInfo
})

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = (userId) => ({
	type: SET_CURRENT_USER,
	userId
})

export const SEND_TO_DASHBOARD = 'SEND_TO_DASHBOARD';
export const sendToDashboard = (boolean) => ({
	type: SEND_TO_DASHBOARD,
	boolean
})