import {jwtDecode} from 'jwt-decode';
import {SubmissionError} from 'redux-form';

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