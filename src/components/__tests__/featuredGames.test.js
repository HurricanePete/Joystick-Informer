import React from 'react';
import {shallow, mount} from 'enzyme';

import {FeaturedGames} from '../featuredGames';
import Loading from '../loading';

describe('<FeaturedGames />', () => {
	it('Renders without crashing', () => {
		const dispatch = jest.fn();
		const props = {
			dispatch
		};
		const wrapper = mount(<FeaturedGames {...props} />);
	});
	it('Should display a loading component', () => {
		const dispatch = jest.fn();
		const props = {
			news: false,
			dispatch
		};
		const wrapper = mount(<FeaturedGames {...props} />);
		const section = wrapper.find('section.featured-games');
		expect(section.contains(<Loading />)).toEqual(true);
	});
	it('Should dispatch the searchNews method on mount', () => {
		const dispatch = jest.fn();
		const props = {
			dispatch
		};
		mount(<FeaturedGames {...props} />);
		expect(dispatch).toHaveBeenCalled();
	});
	it('Should change the visibleIndex in state', () => {
		const dispatch = jest.fn();
		const index = 4;
		const props = {
			dispatch
		};
		const wrapper = mount(<FeaturedGames {...props} />);
		wrapper.instance().handleScrollToIndex(index);
		expect(wrapper.state('visibleIndex')).toEqual(index);
	})
})