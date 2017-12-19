import React from 'react';
import {shallow, mount} from 'enzyme';

import {SearchPage} from '../searchPage';

describe('<SearchPage />', () => {
	it('Renders without crashing', () => {
		const props = {
			joystick: {
				banner: false
			}
		}
		shallow(<SearchPage {...props} />);
	})
})