import React from 'react';
import {shallow, mount} from 'enzyme';

import {ReturnButton} from '../returnButton';

describe('<ReturnButton />', () => {
	it('Renders without crashing', () => {
		shallow(<ReturnButton />);
	})
	it('Should fire the goBack function on click', () => {
		const goBack = jest.fn();
		const wrapper = shallow(<ReturnButton goBack={goBack} />);
		wrapper.simulate('click', {preventDefault: () => {}});
		expect(goBack).toHaveBeenCalled();
	})
})