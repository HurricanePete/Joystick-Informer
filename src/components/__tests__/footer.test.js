import React from 'react';
import {shallow, mount} from 'enzyme';

import Footer from '../footer';

describe('<Footer />', () => {
	it('Renders without crashing', () => {
		shallow(<Footer />);
	});
	it('Renders the footer component correctly', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper).toBeDefined();
	});
})