import React from 'react';
import {shallow, mount} from 'enzyme';

import {Watchlist} from '../watchlist';
import Loading from '../loading'

describe('<Watchlist />', () => {
	it('Renders without crashing', () => {
		shallow(<Watchlist />);
	});
	it('Should display a loading component', () => {
		const props = {
			loggedIn: true,
			loading: true
		};
		const wrapper = mount(<Watchlist {...props} />);
		const section = wrapper.find('section.watchlist-wrapper');
		expect(section.contains(<Loading />)).toEqual(true);
	});
	it('Should display properly when no games are provided', () => {
		const message = 'Your watchlist is empty. Start adding games to view them here.';
		const props = {
			loggedIn: true,
			loading: false,
			watchlistGames: []
		};
		const wrapper = shallow(<Watchlist {...props} />);
		const paragraph = wrapper.find('p');
		expect(paragraph.text()).toEqual(message);
	});
	it('Should render a tile', () => {
		const props = {
			loggedIn: true,
			loading: false,
			watchlistGames: [1,2,3]
		};
		const wrapper = shallow(<Watchlist {...props} />);
		expect(wrapper.children().length).toEqual(props.watchlistGames.length);
	});
	it('Should dispatch watchlistWarning', () => {
		const gameId = 45;
		const watchlistWarning = jest.fn();
		const props = {
			loggedIn: false,
			watchlistWarning: watchlistWarning
		}; 
		const wrapper = shallow(<Watchlist {...props} />);
		const instance = wrapper.instance();
		instance.watchlistWarning(gameId);
		expect(watchlistWarning).toHaveBeenCalledWith(gameId);
	})
})