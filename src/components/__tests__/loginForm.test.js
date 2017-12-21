import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import LoginConnected, {LoginForm} from '../loginForm';

describe('<LoginForm />', () => {

	const handleSubmit = jest.fn();

	it('Renders without crashing', () => {
		shallow(<LoginForm handleSubmit={handleSubmit} />);
	});
	it('Should not render an error initially', () => {
		const wrapper = shallow(<LoginForm handleSubmit={handleSubmit} />);
		const errorWrap = wrapper.find('p');
		expect(errorWrap.length).toEqual(0);
	});
	it('Should render an error message correctly', () => {
		const wrapper = shallow(<LoginForm handleSubmit={handleSubmit} />);
		wrapper.setState({error: 'mymessage'});
		const errorWrap = wrapper.find('p');
		expect(errorWrap.length).toEqual(1);
	});
})