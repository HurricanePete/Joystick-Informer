import React from 'react';
import {shallow, mount} from 'enzyme';

import {RelatedGames} from '../relatedGames';
import Loading from '../loading';

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
})