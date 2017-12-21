import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './auth';
import {API_BASE_URL} from '../config';

const jwt = require('jsonwebtoken');
const secret = 'mysupertestsecret';
import jwtDecode from 'jwt-decode';

const middlewares= [thunk];
const mockStore = configureMockStore(middlewares);

describe('setAuthToken', () => {
	it('Should return the action', () => {
		const token = 'My token';
		const action = actions.setAuthToken(token);
		expect(action.type).toEqual(actions.SET_AUTH_TOKEN);
		expect(action.authToken).toEqual(token);
	});
});

describe('setCurrentUser', () => {
	it('Should return the action', () => {
		const user = 'Test user';
		const action = actions.setCurrentUser(user);
		expect(action.type).toEqual(actions.SET_CURRENT_USER);
		expect(action.currentUser).toEqual(user);
	});
});

describe('setCurrentWatchlist', () => {
	it('Should return the action', () => {
		const watchlist = [4,5,6];
		const action = actions.setCurrentWatchlist(watchlist);
		expect(action.type).toEqual(actions.SET_CURRENT_WATCHLIST);
		expect(action.currentWatchlist).toEqual(watchlist);
	});
});

describe('signOut', () => {
	it('Should return the action', () => {
		const action = actions.signOut();
		expect(action.type).toEqual(actions.SIGN_OUT);
	});
});

describe('loadingToggle', () => {
	it('Should return the action', () => {
		const action = actions.loadingToggle();
		expect(action.type).toEqual(actions.LOADING_TOGGLE);
	});
});

describe('addToWatchlist', () => {
	it('Should return the action', () => {
		const gameId = 45;
		const action = actions.addToWatchlist(gameId);
		expect(action.type).toEqual(actions.ADD_TO_WATCHLIST);
		expect(action.gameId).toEqual(gameId);
	});
});

describe('removeFromWatchlist', () => {
	it('Should return the action', () => {
		const gameId = 45;
		const action = actions.removeFromWatchlist(gameId);
		expect(action.type).toEqual(actions.REMOVE_FROM_WATCHLIST);
		expect(action.gameId).toEqual(gameId);
	});
});

describe('async actions', () => {
	afterEach(() => {
		fetchMock.reset();
		fetchMock.restore();
	})
	it('Should call setAuthToken, setCurrentUser, and setCurrentWatchlist', () => {
		const testToken = jwt.sign({
			user: 'testing'
		}, secret);
		const decodedToken = jwtDecode(testToken);
		const dispatch = jest.fn();

		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true,
				json() {
					return testToken
				}
			})
		);

		const expectedCall = [
		[actions.setAuthToken(testToken)],
		[actions.setCurrentUser(decodedToken.user)],
		[actions.setCurrentWatchlist(testToken)]
		]

		return actions.storeAuthInfo(testToken, dispatch).then(() => {
			expect(dispatch.mock.calls.length).toEqual(3);
			expect(dispatch.mock.calls[2]).toEqual([actions.setCurrentWatchlist(testToken)]);
			expect(dispatch.mock.calls).toEqual(expectedCall)
		})
	})

})

describe('login', () => {
	it('Should dispatch storeAuthInfo', () => {
		const username = 'Atlas';
		const password = 'testpassword';
		const authToken = 'Test token';
		const storeAuthInfo = jest.fn();
		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true,
				json() {
					return authToken
				}
			})
		);
		const request = {
			"body": JSON.stringify({
				username: username,
				password: password
			}),
			"headers": {
				"Content-Type": "application/json"
			},
			"method": "POST"
		}
		const dispatch = jest.fn();
		return actions.login(username, password)(dispatch).then(() => {
			expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/auth/login`, request);
		});
	});
});

describe('sendUpdatedWatchlist', () => {
	it('Should dispatch setCurrentWatchlist'), () => {
		const dispatch = jest.fn();
		const authToken = 'My token'
		const getState = {
			auth: {
				authToken: 'Test token',
				currentWatchlist: {
					gameIds: [45]
				}
			}
		};
		const req = {
			method: 'PUT',
			headers: {
			Authorization: `Bearer ${authToken}`,
			'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'gameIds': updatedList
			})
		};
		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true,
				json() {
					return getState.auth.gameIds
				}
			})
		);
		return actions.sendUpdatedWatchlist()(dispatch, getState).then(() => {
			expect(fetch).toHaveBeenCalledWith(req);
			expect(dispatch).toHaveBeenCalledWith(setCurrentWatchlist('pee'));
		});
	};
});

