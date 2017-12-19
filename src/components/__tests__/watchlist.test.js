import React from 'react';
import {shallow, mount} from 'enzyme';

import {Watchlist} from '../watchlist';

describe('<Watchlist />', () => {
	it('Renders without crashing', () => {
		shallow(<Watchlist />);
	})
})