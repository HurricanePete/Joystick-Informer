import React from 'react';
import {shallow, mount} from 'enzyme';

import {WarningDisplay} from '../warningDisplay';

describe('<WarningDisplay />', () => {
	it('Renders without crashing', () => {
		const props = {
			watchlistWarning: {
				warning: true
			}
		}
		shallow(<WarningDisplay {...props} />);
	})
})