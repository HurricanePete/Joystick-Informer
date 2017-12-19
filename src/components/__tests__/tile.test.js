import React from 'react';
import {shallow, mount} from 'enzyme';

import {Tile} from '../tile';

describe('<Tile />', () => {
	it('Renders without crashing', () => {
		shallow(<Tile />);
	})
})