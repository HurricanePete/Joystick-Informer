import React from 'react';
import {shallow, mount} from 'enzyme';

import FormInput from '../formInput';

describe('<FormInput />', () => {
	const props = {
		meta: {
			active: true,
			touched: false,
			error: false,
			warning: false
		},
		input: {
			name: 'Password',
			label: 'Password',
			type: 'Text',
		}
	}
	it('Renders without crashing', () => {
		shallow(<FormInput {...props} />);
	})
})