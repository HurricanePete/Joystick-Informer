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
	});
	it('Fires confirmWarning on button press', () => {
		const confirmWarning = jest.fn();
		const props = {
			watchlistWarning: {
				warning: true
			}
		};
		const wrapper = shallow(<WarningDisplay confirm={confirmWarning} {...props} />);
		const button = wrapper.find('button').first();
		button.simulate('click', {preventDefault: () => {}});
		expect(confirmWarning).toHaveBeenCalled();
	});
	it('Fires cancelWarning on button press', () => {
		const cancelWarning = jest.fn();
		const props = {
			watchlistWarning: {
				warning: true
			}
		};
		const wrapper = shallow(<WarningDisplay cancel={cancelWarning} {...props} />);
		const button = wrapper.find('button').last();
		button.simulate('click', {preventDefault: () => {}});
		expect(cancelWarning).toHaveBeenCalled();
	})
})