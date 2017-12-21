import React from 'react';
import {shallow, mount} from 'enzyme';

import {NavigationBar} from '../nav';

describe('<NavigationBar />', () => {
	it('Renders without crashing', () => {
		shallow(<NavigationBar />);
	});
	it('Should render a nav button without an avatar image', () => {
		const props = {
			loggedIn: false
		};
		const wrapper = shallow(<NavigationBar {...props} />);
		const loginLink = wrapper.find('div').last();
		expect(loginLink.hasClass('login')).toEqual(true);
	});
	it('Should render an avatar in the nav bar when loggedIn', () => {
		const props = {
			loggedIn: true,
			currentUser: {
				username: 'Atlas'
			}
		};
		const wrapper = shallow(<NavigationBar {...props} />);
		const loginLink = wrapper.find('div').last();
		expect(loginLink.hasClass('avatar')).toEqual(true);
	});
})