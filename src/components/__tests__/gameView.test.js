import React from 'react';
import {shallow, mount} from 'enzyme';

import {GameView} from '../gameView';

describe('<GameView />', () => {
	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		const props = {
			match: {
				params: {
					id: 1400
				}
			}
		}
		shallow(<GameView dispatch={dispatch} {...props} />);
	})
})