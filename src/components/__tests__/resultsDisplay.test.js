import React from 'react';
import {shallow, mount} from 'enzyme';

import {Provider} from 'react-redux';

import {ResultsDisplay} from '../resultsDisplay';
import {Tile} from '../tile';

describe('<ResultsDisplay />', () => {
	it('Renders without crashing', () => {
		shallow(<ResultsDisplay />);
	});
	it('Should display a message when no results are found', () => {
		const message = 'Sorry, no results matched your search';
		const props ={
			displayValues: []
		};
		const wrapper = shallow(<ResultsDisplay {...props} />);
		const header = wrapper.find('h4');
		expect(header.text()).toEqual(message);
	});
	it('Should display result count and matching tile count', () => {
		const props ={
			displayValues: [{
				name: 'Testy',
				rating: 100
			}, {
				name: 'Another Test',
				rating: 1
			}]
		};
		const wrapper = shallow(<ResultsDisplay {...props} />);
		let tiles = wrapper.find('div.results-display').children();
		expect(tiles.length).toEqual(3);
		wrapper.setProps({
			displayValues: [{
				name: 'Testy',
				rating: 100
			}]
		});
		tiles = wrapper.find('div.results-display').children();
		expect(tiles.length).toEqual(2);
	});
})