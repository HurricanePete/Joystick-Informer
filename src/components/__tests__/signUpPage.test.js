import React from 'react';
import {shallow, mount} from 'enzyme';

import {SignUpPage} from '../signUpPage';

describe('<SignUpPage />', () => {
	it('Renders without crashing', () => {
		const props = {
			loggedIn: false
		}
		shallow(<SignUpPage />);
	});
	it('Should render the login page on initial render', () => {
		const props = {
			loggedIn: false
		};
		const wrapper = shallow(<SignUpPage {...props} />);
		const section = wrapper.find('section');
		expect(section.hasClass('login-wrapper')).toEqual(true);
	});
})