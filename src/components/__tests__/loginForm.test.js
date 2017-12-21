import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

import LoginConnected, {LoginForm} from '../loginForm';

const mockStore = configureMockStore();

describe('<LoginForm />', () => {
	it('Renders without crashing', () => {
		shallow(<LoginForm />);
	});
})