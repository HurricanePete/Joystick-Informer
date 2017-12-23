import React from 'react';
import {shallow, mount} from 'enzyme';

import SignupFormConnected, {SignupForm} from '../signUpForm';

describe('<SignupForm />', () => {

	const handleSubmit = jest.fn();

	it('Renders without crashing', () => {
		shallow(<SignupForm handleSubmit={handleSubmit} />);
	});
	it('Should not render an error initially', () => {
		const wrapper = shallow(<SignupForm handleSubmit={handleSubmit} />);
		const errorWrap = wrapper.find('p');
		expect(errorWrap.length).toEqual(0);
	});
	it('Should render an error message correctly', () => {
		const wrapper = shallow(<SignupForm handleSubmit={handleSubmit} />);
		wrapper.setState({error: 'mymessage'});
		const errorWrap = wrapper.find('p');
		expect(errorWrap.length).toEqual(1);
	});
})