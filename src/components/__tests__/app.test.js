import React from 'react';
import {shallow, mount} from 'enzyme';
import {MemoryRouter} from 'react-router';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {NavigationBar} from '../nav';
import Footer from '../footer';
import {SearchPage} from '../searchPage';
import {GameView} from '../gameView';
import {Dashboard} from '../dashboard';
import {LoginPage} from '../loginPage';
import {SignUpPage} from '../signUpPage';
import {App} from '../app';

const mockStore = configureMockStore();
const store = mockStore();

describe('<App />', () => {
	it('Renders without crashing', () => {
		shallow(<App />);
	});
})