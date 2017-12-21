import React from 'react';
import {shallow, mount} from 'enzyme';

import Pricer from '../pricer';
import Loading from '../loading';
import {AmazonPriceCell} from '../amazonPriceCell';
import {EbayPriceCell} from '../ebayPriceCell';

describe('<Pricer />', () => {
	it('Renders without crashing', () => {
		shallow(<Pricer />);
	});
	it('Should render a Loader initially', () => {
		const wrapper = shallow(<Pricer />);
		expect(wrapper.find(Loading).length).toEqual(1);
	});
	it('Should render the pricer-list correctly', () => {
		const setNull = {
			amazon: null,
			ebay: null
		}
		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true,
				json() {
					return res
				}
			})
		);
		const wrapper = mount(<Pricer fetch={fetch} />);
		wrapper.setState({price: setNull});
		expect(wrapper.find('ul').children().length).toEqual(3);
	});
	it('Should pass props appropriately to children', () => {
		const res = {
			amazon: {
				url: 'anothertest.com',
				pricing: {
					LowestUsedPrice: {
						FormattedPrice: 'TestPrice'
					},
					LowestNewPrice: {
						FormattedPrice: 'MorePrices'
					}
				}
			},
			ebay: {
				url: 'test.com',
				pricing: {
					currentPrice: [{
						__value__: 'ComplicatedPrice'
					}]
				}
			}
		};
		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true,
				json() {
					return res
				}
			})
		);
		const wrapper = mount(<Pricer fetch={fetch} />);
		wrapper.setState({price: res});
		expect(wrapper.find('ul').childAt(2).props()).toEqual(res.ebay);
		expect(wrapper.find('ul').childAt(1).props()).toEqual(res.amazon);
	});
})