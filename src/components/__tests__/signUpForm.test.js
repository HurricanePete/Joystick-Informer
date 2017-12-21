import React from 'react';
import {shallow, mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Field, reduxForm} from 'redux-form';

import SignupFormConnected, {SignupForm} from '../signUpForm';

import {registerUser} from '../../actions/users';

const mockStore = configureMockStore();

const store = mockStore();

describe('<SignupForm />', () => {
	it('Renders without crashing', () => {
		shallow(<SignupForm />);
	});
})