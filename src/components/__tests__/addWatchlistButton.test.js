import React from 'react';
import {shallow, mount} from 'enzyme';

import {AddWatchlistButton} from '../addWatchlistButton';

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
	//it('Should update the currentWatchlist and send for updates', () => {
	// 	const props = {
	// 		loggedIn: true,
	// 		currentWatchlist: {
	// 			gameIds: [3,4]
	// 		}
	// 	}; 
	// 	const dispatch = jest.fn();
	// 	const index = 45;
	// 	const wrapper = mount(<AddWatchlistButton item={index} dispatch={dispatch} {...props} />);
	// 	wrapper.find('button.game-add').simulate('click', {target: this});
	// 	expect(dispatch).toHaveBeenCalledWith(addToWatchlist(index));
	// })
})