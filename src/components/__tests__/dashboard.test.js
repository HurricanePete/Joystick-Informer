import React from 'react';
import {shallow, mount} from 'enzyme';

import {BrowserRouter as Router} from 'react-router-dom';

import {Dashboard} from '../dashboard';
import {WarningDisplay} from '../warningDisplay';


import {setWatchlistWarning, resetWatchlistWarning} from '../../actions/joystick';
import {loadingToggle, removeFromWatchlist, sendUpdatedWatchlist, signOut} from '../../actions/auth';

describe('<Dashboard />', () => {

	it('Renders without crashing', () => {
		shallow(<Dashboard />);
	});
	it('Renders normally when loggedIn', () => {
		const props = {
			loggedIn: true,
			currentUser: {
				username: 'Atlas'
			},
			currentWatchlist: {
				gameIds: [1,2,3],
				relatedIds: [4,5,6]
			}
		}
		const dispatch = jest.fn();
		const wrapper = shallow(<Dashboard {...props} dispatch={dispatch} />);
		const header = wrapper.find('header').first();
		expect(header).toBeDefined();
		expect(header.hasClass('dashboard-header')).toEqual(true);
	})
	it('Should dispatch signOut', () => {
		const props = {
			loggedIn: true,
			currentUser: {
				username: 'Atlas'
			},
			currentWatchlist: {
				gameIds: [1,2,3],
				relatedIds: [4,5,6]
			}
		};
		const dispatch = jest.fn();
		const wrapper = shallow(<Dashboard {...props} dispatch={dispatch} />);
		const instance = wrapper.instance();
		instance.signOut();
		expect(dispatch).toHaveBeenCalledWith(signOut());
	})
	it('Should dispatch setWatchlistWarning', () => {
		const gameId = 45;
		const props = {
			loggedIn: true,
			currentUser: {
				username: 'Atlas'
			},
			currentWatchlist: {
				gameIds: [1,2,3],
				relatedIds: [4,5,6]
			}
		};
		const dispatch = jest.fn();
		const wrapper = shallow(<Dashboard {...props} dispatch={dispatch} />);
		const instance = wrapper.instance();
		instance.watchlistWarning(gameId);
		expect(dispatch).toHaveBeenCalledWith(setWatchlistWarning(gameId));
	});
	it('Should dispatch removeFromWatchlist, sendUpdatedWatchlist, and resetWatchlistWarning', () => {
		const props = {
			loggedIn: true,
			currentUser: {
				username: 'Atlas'
			},
			currentWatchlist: {
				gameIds: [1,2,3],
				relatedIds: [4,5,6]
			},
			warning: {
				gameId: 45
			}
		};
		const dispatch = jest.fn();
		const wrapper = shallow(<Dashboard {...props} dispatch={dispatch} />);
		const instance = wrapper.instance();
		instance.confirmWatchlistRemove();
		expect(dispatch.mock.calls.length).toBe(4);
	})
	it('Should dispatch resetWatchlistWarning', () => {
		const props = {
			loggedIn: true,
			currentUser: {
				username: 'Atlas'
			},
			currentWatchlist: {
				gameIds: [1,2,3],
				relatedIds: [4,5,6]
			},
			warning: {
				gameId: 45
			}
		};
		const dispatch = jest.fn();
		const wrapper = shallow(<Dashboard {...props} dispatch={dispatch} />);
		const instance = wrapper.instance();
		instance.cancelWatchlistWarning();
		expect(dispatch).toHaveBeenCalledWith(resetWatchlistWarning());
	});

	
})