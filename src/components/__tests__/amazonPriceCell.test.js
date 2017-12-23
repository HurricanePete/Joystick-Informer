import React from 'react';
import {shallow, mount} from 'enzyme';

import AmazonPriceCell from '../amazonPriceCell';

describe('<AmazonPriceCell />', () => {
	it('Renders without crashing', () => {
		const props = {
			url: 'www.testing.com',
			pricing: {
				LowestNewPrice: {
					FormattedPrice: '15000.00',
				},
				LowestUsedPrice : {
					FormattedPrice: '$14.00',
				}
			}
		}
		shallow(<AmazonPriceCell {...props} />);
	});
	it('Should render a message when no props are passed', () => {
		const props = {};
		const wrapper = shallow(<AmazonPriceCell {...props} />);
		const paragraph = wrapper.find('p');
		expect(paragraph.text()).toEqual('Pricing unavailable from this seller');
	});
	it('Should render the LowestNewPrice when no LowestUsedPrice is defined', () => {
		const props = {
			url: 'www.testing.com',
			pricing: {
				LowestNewPrice: {
					FormattedPrice: '$15000.00'
				}
			}
		};
		const wrapper = shallow(<AmazonPriceCell {...props} />);
		const paragraph = wrapper.find('p');
		expect(paragraph.text()).toEqual(props.pricing.LowestNewPrice.FormattedPrice);
	});
	it('Should render the LowestNewPrice when no LowestUsedPrice is undefined', () => {
		const props = {
			url: 'www.testing.com',
			pricing: {
				LowestNewPrice: {
					FormattedPrice: '$15000.00',
					amount: '15000'
				},
				LowestUsedPrice : {
					FormattedPrice: '$14.00',
					amount: '14'
				}
			}
		}
		const wrapper = shallow(<AmazonPriceCell {...props} />);
		const paragraph = wrapper.find('p');
		expect(paragraph.text()).toEqual(`${props.pricing.LowestUsedPrice.FormattedPrice}`);
	})
}) 