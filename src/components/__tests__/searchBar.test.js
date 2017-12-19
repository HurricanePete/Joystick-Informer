import React from 'react';
import {shallow, mount} from 'enzyme';

import {SearchBar} from '../searchBar';

describe('<SearchBar />', () => {
	it('Renders without crashing', () => {
		shallow(<SearchBar />);
	})
})