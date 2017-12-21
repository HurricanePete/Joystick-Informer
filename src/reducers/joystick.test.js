import {joystickReducer} from './joystick';
import * as actions from '../actions/joystick';

describe('joystickReducer', () => {
	const gameOne = 45;
	const searchResults = [{
		news: 'News One'
	}, {
		news: 'News Two'
	}];

	it('Should set the initial state when nothing is passed in', () => {
        const state = joystickReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            banner: true,
			watchlistWarning: {
				warning: false,
				gameId: null
			},
			searchResults: null,
			newsResults: null
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = joystickReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('bannerToggle', () => {
    	it('Should set the banner to false', () => {
    		let state;
    		state = joystickReducer(state, actions.bannerToggle());
    		expect(state).toEqual({
    			banner: false,
				watchlistWarning: {
					warning: false,
					gameId: null
				},
				searchResults: null,
				newsResults: null
    		});
    	})
    });

    describe('setWatchlistWarning', () => {
    	it('Should set the banner to false', () => {
    		let state;
    		state = joystickReducer(state, actions.setWatchlistWarning(gameOne));
    		expect(state).toEqual({
    			banner: true,
				watchlistWarning: {
					warning: true,
					gameId: gameOne
				},
				searchResults: null,
				newsResults: null
    		});
    	})
    });

    describe('resetWatchlistWarning', () => {
    	it('Should set the banner to false', () => {
    		let state;
    		state = joystickReducer(state, actions.resetWatchlistWarning());
    		expect(state).toEqual({
    			banner: true,
				watchlistWarning: {
					warning: false,
					gameId: null
				},
				searchResults: null,
				newsResults: null
    		});
    	})
    });

    describe('setSearchResults', () => {
    	it('Should set the banner to false', () => {
    		let state;
    		state = joystickReducer(state, actions.setSearchResults(searchResults));
    		expect(state).toEqual({
    			banner: true,
				watchlistWarning: {
					warning: false,
					gameId: null
				},
				searchResults: searchResults,
				newsResults: null
    		});
    	})
    });

    describe('setNewsResults', () => {
    	it('Should set the banner to false', () => {
    		let state;
    		state = joystickReducer(state, actions.setNewsResults(searchResults));
    		expect(state).toEqual({
    			banner: true,
				watchlistWarning: {
					warning: false,
					gameId: null
				},
				searchResults: null,
				newsResults: searchResults
    		});
    	})
    });

});