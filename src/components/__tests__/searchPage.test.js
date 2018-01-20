import React from 'react';
import {shallow, mount} from 'enzyme';

import {SearchPage} from '../searchPage';
import {SearchBar} from '../searchBar';
import {ResultsDisplay} from '../resultsDisplay';
import {FeaturedGames} from '../featuredGames';
import Banner from '../banner';

import {bannerToggle, searchAllGames} from '../../actions/joystick';

describe('<SearchPage />', () => {
	it('Renders without crashing', () => {
		const props = {
			joystick: {
				banner: false
			}
		}
		shallow(<SearchPage {...props} />);
	});
	// it('Should render the Banner', () => {
	// 	const props = {
	// 		joystick: {
	// 			banner: true
	// 		},
	// 		loggedIn: false
	// 	}
	// 	const wrapper = shallow(<SearchPage {...props} />);
	// 	const banner = wrapper.find(Banner);
	// 	expect(banner.length).toEqual(1);
	// });
	it('Should render SearchBar, ResultsDisplay, and FeaturedGames', () => {
		const props = {
			joystick: {
				banner: false
			}
		};
		const wrapper = shallow(<SearchPage {...props} />);
		expect(wrapper.children().length).toEqual(3);
	});
})