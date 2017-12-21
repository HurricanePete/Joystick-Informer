import React from 'react';
import {shallow, mount} from 'enzyme';

import EbayPriceCell from '../ebayPriceCell';

describe('<EbayPriceCell />', () => {
	it('Renders without crashing', () => {
		shallow(<EbayPriceCell />);
	});
		it('Should render a message when no props are passed', () => {
		const props = {};
		const wrapper = shallow(<EbayPriceCell {...props} />);
		const paragraph = wrapper.find('p');
		expect(paragraph.text()).toEqual('Pricing unavailable from this seller');
	});
	it('Should render the CurrentPrice', () => {
		const props = {
			pricing: {
				currentPrice: [{
					__value__: 69
				}]
			}
		};
		const wrapper = shallow(<EbayPriceCell {...props} />);
		const paragraph = wrapper.find('p');
		expect(paragraph.text()).toEqual(`$${props.pricing.currentPrice[0].__value__}`);
	});
})