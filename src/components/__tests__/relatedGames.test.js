//left off here

import React from 'react';
import {shallow, mount} from 'enzyme';

import {RelatedGames} from '../relatedGames';
import Loading from '../loading';
import {Tile} from '../tile';

describe('<RelatedGames />', () => {
	it('Renders without crashing', () => {
		shallow(<RelatedGames />);
	});
	it('Should display a loading component', () => {
		const props = {
			loggedIn: true,
			loading: true
		};
		const wrapper = mount(<RelatedGames {...props} />);
		const section = wrapper.find('section.relatedGames-wrapper');
		expect(section.contains(<Loading />)).toEqual(true);
	});
	it('Should display properly when no games are provided', () => {
		const message = 'Add games to your watchlist to start viewing recommended games.';
		const props = {
			loggedIn: true,
			loading: false,
			relatedGames: []
		};
		const wrapper = shallow(<RelatedGames {...props} />);
		const paragraph = wrapper.find('p');
		expect(paragraph.text()).toEqual(message);
	});
	it('Should display tiles', () => {
		const props = {
			loggedIn: true,
			loading: false,
			relatedGames: [{
				name: 'Test'
			}]
		};
		const wrapper = shallow(<RelatedGames {...props} />);
		let tiles = wrapper.find('section.relatedGames-wrapper').children();
		expect(tiles.length).toEqual(1);
		wrapper.setProps({
			relatedGames: [{
				name: 'Test'
			},
			{
				name: 'TestTwo'
			}]
		});
		tiles = wrapper.find('section.relatedGames-wrapper').children();
		expect(tiles.length).toEqual(2);
	});
})