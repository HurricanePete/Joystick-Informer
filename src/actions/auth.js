import {SubmissionError} from 'redux-form';

import jwtDecode from 'jwt-decode';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';
import {saveAuthToken, clearAuthToken} from '../local-storage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
	type: SET_AUTH_TOKEN,
	authToken
})

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = currentUser => ({
	type: SET_CURRENT_USER,
	currentUser
})

export const SET_CURRENT_WATCHLIST = 'SET_CURRENT_WATCHLIST';
export const setCurrentWatchlist = currentWatchlist => ({
	type: SET_CURRENT_WATCHLIST,
	currentWatchlist
})

export const SIGN_OUT = 'SIGN_OUT';
export const signOut = () => ({
	type: SIGN_OUT
})

export const LOADING_TOGGLE = 'LOADING_TOGGLE';
export const loadingToggle = () => ({
	type: LOADING_TOGGLE
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

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
	const decodedToken = jwtDecode(authToken);
	dispatch(setAuthToken(authToken));
	dispatch(setCurrentUser(decodedToken.user));
	saveAuthToken(authToken);
}

export const login = (username, password) => dispatch => {
	return (
		fetch(`${API_BASE_URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password
			})
		})
			.then(res => normalizeResponseErrors(res))
			.then(res => res.json())
			.then(({authToken}) => storeAuthInfo(authToken, dispatch))
			.catch(err => {
				const {code} = err;
				if(code === 401) {
					return Promise.reject(
						new SubmissionError({
							_error: 'Incorrect username or password'
						})
					);
				}
			})
	);
};

export const retrieveWatchlist = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/api/dashboard`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(watchlist => dispatch(setCurrentWatchlist(watchlist)))
		.catch(err => alert(err))
}

export const sendUpdatedWatchlist = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	const updatedList = getState().auth.currentWatchlist.gameIds;
	return fetch(`${API_BASE_URL}/api/dashboard`, {
		method: 'PUT',
		headers: {
			Authorization: `Bearer ${authToken}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			'gameIds': updatedList
		})
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.catch(err => alert(err))
}

export const refreshAuthToken = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/auth/refresh`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${authToken}`
		}
	})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({authToken}) => storeAuthInfo(authToken, dispatch))
		.catch(err => {
			const {code} = err;
			if(code === 401) {
				// We couldn't get a refresh token because our current credentials
                // are invalid or expired, so clear them and sign us out
				dispatch(setCurrentUser(null));
				dispatch(setAuthToken(null));
				clearAuthToken(authToken);
			}
		})
}