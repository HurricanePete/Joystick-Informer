import React from 'react';
import {shallow, mount} from 'enzyme';

import Pricer from '../pricer';

describe('<Pricer />', () => {
	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		const props = {
			name: 'Halo 50: Please Be Over',
			platforms: 'Xbox',
			releaseDate: '11000011'
		}
		shallow(<Pricer dispatch={dispatch} {...props} />);
	})
})