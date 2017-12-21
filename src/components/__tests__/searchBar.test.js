import React from 'react';
import {shallow, mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reduxForm} from 'redux-form';

import {SearchBar} from '../searchBar';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const spy = jest.fn();
const Decorated = reduxForm({
	form: 'testForm',
	onSubmit: {spy}
})(SearchBar)

describe('<SearchBar />', () => {
	it('Renders without crashing', () => {
		shallow(<SearchBar />);
	});
	it('Should fire searchSubmit with the supplied input', () => {
		const handleSubmit = jest.fn();
		const store = mockStore();
		const wrapper = mount(
			<Provider store={store}>
				<Decorated handleSubmit={handleSubmit} />
			</Provider>
		);
		wrapper.find('button').simulate('click');
		expect(handleSubmit).toHaveBeenCalled();
	});
})