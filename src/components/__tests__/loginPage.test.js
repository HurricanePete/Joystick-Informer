import React from 'react';
import {shallow, mount} from 'enzyme';

import {LoginPage} from '../loginPage';

describe('<LoginPage />', () => {
	it('Renders without crashing', () => {
		shallow(<LoginPage />);
	})
})