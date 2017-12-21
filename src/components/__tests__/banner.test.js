import React from 'react';
import {shallow, mount} from 'enzyme';

import Banner from '../banner';

describe('<Banner />', () => {
	it('Renders without crashing', () => {
		shallow(<Banner />);
	});
	it('Should fire the toggleBanner callback when Let\'s Get Started is clicked', () => {
		const callback = jest.fn();
		const wrapper = shallow(<Banner toggleBanner={callback} />);
		wrapper.find('button').simulate('click', {preventDefault: () => {}});
		expect(callback).toHaveBeenCalled();
	})
})