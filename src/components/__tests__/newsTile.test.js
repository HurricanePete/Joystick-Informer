import React from 'react';
import {shallow, mount} from 'enzyme';

import NewsTile from '../newsTile';

describe('<NewsTile />', () => {
	it('Renders without crashing', () => {
		const props = {
			title: 'Super News',
			url: 'www.testing.com',
			pulse_source: {
				name: 'Test Outlet'
			}
		}
		shallow(<NewsTile {...props} />);
	});
	it('Displays props correctly', () => {
		const props = {
			title: 'Super News',
			url: 'www.testing.com',
			pulse_source: {
				name: 'Test Outlet'
			}
		}
		const wrapper = shallow(<NewsTile {...props} />);
		expect(wrapper.find('dd').first().text()).toEqual(props.title);
		expect(wrapper.find('dd').last().text()).toEqual(props.pulse_source.name);
	})
})