import React from 'react';
import {shallow, mount} from 'enzyme';

import {ReturnButton} from '../returnButton';

describe('<ReturnButton />', () => {
	it('Renders without crashing', () => {
		shallow(<ReturnButton />);
	})
})