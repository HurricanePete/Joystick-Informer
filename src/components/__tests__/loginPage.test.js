import React from 'react';
import {shallow, mount} from 'enzyme';

import {LoginPage} from '../loginPage';

describe('<LoginPage />', () => {
	it('Renders without crashing', () => {
		shallow(<LoginPage />);
	});
	it('Renders the loginPage correctly', () => {
		const wrapper = shallow(<LoginPage />);
		const section = wrapper.find('section');
		const article = wrapper.find('article');
		expect(section.hasClass('login-wrapper')).toEqual(true);
		expect(article.hasClass('form-article')).toEqual(true);
	})
})