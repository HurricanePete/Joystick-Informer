import React from 'react';
import {shallow, mount} from 'enzyme';

import Loading from '../loading';

describe('<Loading />', () => {
	it('Renders without crashing', () => {
		shallow(<Loading />);
	});
	it('Renders the loading component correctly', () => {
		const wrapper = shallow(<Loading />);
		expect(wrapper).toBeDefined();
	});
})