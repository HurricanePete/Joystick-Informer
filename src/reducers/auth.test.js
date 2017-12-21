import {authReducer} from './auth';
import * as actions from '../actions/auth';

describe('authReducer', () => {
	const testToken = 'My test token';
	const testUser = 'Atlas';
	const testWatchlist = {
		gameIds: [1,2,3],
		relatedIds: [4,5,6]
	};
	const gameOne = 45;
	const gameTwo = 105;
	const gameThree = 1;

	it('Should set the initial state when nothing is passed in', () => {
        const state = authReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            loading: false,
			authToken: null,
			currentUser: null,
			currentWatchlist: null
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = authReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('setAuthToken', () => {
    	it('Should set the authToken', () => {
    		let state;
    		state = authReducer(state, actions.setAuthToken(testToken));
    		expect(state).toEqual({
    			loading: false,
				authToken: testToken,
				currentUser: null,
				currentWatchlist: null
    		})
    	})
    });

    describe('setCurrentUser', () => {
    	it('Should set the currentUser', () => {
    		let state;
    		state = authReducer(state, actions.setCurrentUser(testUser));
    		expect(state).toEqual({
    			loading: false,
				authToken: null,
				currentUser: testUser,
				currentWatchlist: null
    		})	
    	})
    });

    describe('setCurrentWatchlist', () => {
    	it('Should set the currentWatchlist', () => {
    		let state;
    		state = authReducer(state, actions.setCurrentWatchlist(testWatchlist));
    		expect(state).toEqual({
    			loading: false,
				authToken: null,
				currentUser: null,
				currentWatchlist: testWatchlist
    		})	
    	})
    });

    describe('signOut', () => {
    	it('Should empty user information from state', () => {
    		let state;
    		state = authReducer(state, actions.signOut());
    		expect(state).toEqual({
    			loading: false,
				authToken: null,
				currentUser: null,
				currentWatchlist: null
    		})	
    	})
    });

    describe('loadingToggle', () => {
    	it('Should toggle loading', () => {
    		let state;
    		state = authReducer(state, actions.loadingToggle());
    		expect(state).toEqual({
    			loading: true,
				authToken: null,
				currentUser: null,
				currentWatchlist: null
    		})
    		state = authReducer(state, actions.loadingToggle());
    		expect(state).toEqual({
    			loading: false,
				authToken: null,
				currentUser: null,
				currentWatchlist: null
    		})	
    	})
    });

    describe('addToWatchlist', () => {
    	it('Should add ids to the currentWatchlist', () => {
    		let state = {
    			loading: false,
				authToken: null,
				currentUser: null,
				currentWatchlist: {
					gameIds: [],
					relatedIds: testWatchlist.relatedIds
				}
    		}
    		state = authReducer(state, actions.addToWatchlist(gameOne));
    		state = authReducer(state, actions.addToWatchlist(gameTwo));
    		state = authReducer(state, actions.addToWatchlist(gameThree));
    		expect(state).toEqual({
    			loading: false,
				authToken: null,
				currentUser: null,
				currentWatchlist: {
					gameIds: [gameOne, gameTwo, gameThree],
					relatedIds: testWatchlist.relatedIds
				}
    		})	
    	})
    });

    describe('removeFromWatchlist', () => {
    	it('Should remove ids from the currentWatchlist', () => {
    		let state = {
    			loading: false,
				authToken: null,
				currentUser: null,
				currentWatchlist: {
					gameIds: [gameOne, gameTwo, gameThree],
					relatedIds: testWatchlist.relatedIds
				}
    		}
    		state = authReducer(state, actions.removeFromWatchlist(gameOne));
    		state = authReducer(state, actions.removeFromWatchlist(gameTwo));
    		state = authReducer(state, actions.removeFromWatchlist(gameThree));
    		expect(state).toEqual({
    			loading: false,
				authToken: null,
				currentUser: null,
				currentWatchlist: {
					gameIds: [],
					relatedIds: testWatchlist.relatedIds
				}
    		})	
    	})
    });
})