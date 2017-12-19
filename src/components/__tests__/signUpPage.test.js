import React from 'react';
import {shallow, mount} from 'enzyme';

import {SignUpPage} from '../signUpPage';

describe('<SignUpPage />', () => {
	it('Renders without crashing', () => {
		const props = {
			loggedIn: false
		}
		shallow(<SignUpPage />);
	})
})