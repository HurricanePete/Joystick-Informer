import React from 'react';
import {shallow, mount} from 'enzyme';

import {AddWatchlistButton} from '../addWatchlistButton';

import {addToWatchlist, removeFromWatchlist, sendUpdatedWatchlist} from '../../actions/auth';

describe('<AddWatchlistButton />', () => {
	it('Renders without crashing', () => {
		shallow(<AddWatchlistButton item={4} />);
	})
	it('Should render a login link', () => {
		const props = {
			loggedIn: false
		}
		const wrapper = shallow(<AddWatchlistButton {...props} />);
		expect(wrapper.hasClass('sign-in')).toEqual(true);
	})
	it('Should render ', () => {
		const props = {
			loggedIn: true,
			currentWatchlist: {
				gameIds: [3,4]
			}
		}
		const wrapper = shallow(<AddWatchlistButton item={4} {...props} />);
		const button = wrapper.find('p');
		expect(button.text()).toEqual('Already in watchlist');
	})
	it('Should update the currentWatchlist and send for updates on add', () => {
		const props = {
			loggedIn: true,
			currentWatchlist: {
				gameIds: [3,4]
			}
		}; 
		const dispatch = jest.fn();
		const index = 45;
		const wrapper = shallow(<AddWatchlistButton item={index} dispatch={dispatch} {...props} />);
		wrapper.find('button.game-add').simulate('click', {preventDefault: () => {}});
		expect(dispatch.mock.calls.length).toEqual(2);
	});
	it('Should update the currentWatchlist and send for updates on remove', () => {
		const props = {
			loggedIn: true,
			currentWatchlist: {
				gameIds: [3,4]
			}
		}; 
		const dispatch = jest.fn();
		const index = 4;
		const wrapper = shallow(<AddWatchlistButton item={index} dispatch={dispatch} {...props} />);
		wrapper.find('button.watchlist-delete').simulate('click', {preventDefault: () => {}});
		expect(dispatch.mock.calls.length).toEqual(2);
	})
})