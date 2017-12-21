import React from 'react';
import {shallow, mount} from 'enzyme';

import {Tile} from '../tile';

import {addToWatchlist, sendUpdatedWatchlist} from '../../actions/auth';

describe('<Tile />', () => {
	it('Renders without crashing', () => {
		shallow(<Tile />);
	});
	it('Renders a tile normally', () => {
		const wrapper = shallow(<Tile />);
		const tile = wrapper.find('div').first();
		const icons = wrapper.find('i');
		expect(tile.hasClass('tile')).toEqual(true);
		expect(icons.length).toEqual(0);
	});
	it('Should fire watchlistRemove when rendered with "watchlist" location', () => {
		const props = {
			location: 'watchlist',
			id: 0,
			currentWatchlist: {
				gameIds: [4,5,6]
			},
			watchlistWarning: jest.fn()
		};
		const listGameId = props.currentWatchlist[props.id];
		const wrapper = shallow(<Tile {...props} />);
		const icon = wrapper.find('i');
		icon.simulate('click', {preventDefault: () => {}});
		expect(icon.length).toEqual(1);
		expect(icon.hasClass('fa-minus-circle')).toEqual(true);
		expect(props.watchlistWarning).toHaveBeenCalledWith(listGameId);
	});
	it('Should fire watchlistAdd when rendered with "related" location', () => {
		const dispatch = jest.fn();
		const props = {
			location: 'related',
			id: 0,
			currentWatchlist: {
				gameIds: [4,5,6]
			},
			dispatch: dispatch
		};
		const listGameId = props.currentWatchlist.gameIds[props.id];
		const wrapper = shallow(<Tile {...props} />);
		const icon = wrapper.find('i');
		icon.simulate('click', {preventDefault: () => {}});
		expect(icon.length).toEqual(1);
		expect(icon.hasClass('fa-plus-circle')).toEqual(true);
		expect(dispatch.mock.calls.length).toEqual(2);
		expect(dispatch.mock.calls[0]).toEqual([addToWatchlist(props.id)]);
	})
})