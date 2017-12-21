import React from 'react';
import {shallow, mount} from 'enzyme';
import fetchMock from 'fetch-mock';

import {GameView} from '../gameView';
import Loading from '../loading';

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
	});
	it('Should render correctly', () => {
		const props = {
			match: {
				params: {
					id: 14
				}
			}
		}
		const platforms = ['PlatformOne', 'PlatformTwo'];
		const wrapper = shallow(<GameView {...props} />);
		wrapper.setState({
			platforms: platforms,
			game: true,
			loading: false
		});
		wrapper.update();
		const section = wrapper.find('section');
		expect(section.hasClass('gameView-wrapper')).toEqual(true);
	})
	it('Create the correct number of console buttons', () => {
		const props = {
			match: {
				params: {
					id: 14
				}
			}
		}
		const platforms = ['PlatformOne', 'PlatformTwo'];
		const wrapper = shallow(<GameView {...props} />);
		wrapper.setState({
			platforms: platforms,
			game: true,
			loading: false
		});
		wrapper.update();
		const consoleButtons = wrapper.find('button.js-button');
		expect(consoleButtons.length).toEqual(platforms.length);
	});
	it('Renders a loading component', () => {
		const props = {
			match: {
				params: {
					id: 14
				}
			}
		}
		const wrapper = shallow(<GameView {...props} />);
		wrapper.setState({
			loading: false
		});
		wrapper.update();
		const main = wrapper.find('main');
		expect(main.contains(<Loading />)).toEqual(true);
	});
	it('Sets the state to the appropriate console', () => {
		const props = {
			match: {
				params: {
					id: 14
				}
			}
		}
		const platforms = ['PlatformOne', 'PlatformTwo'];
		const wrapper = shallow(<GameView {...props} />);
		wrapper.setState({
			platforms: platforms,
			game: true,
			loading: false
		});
		wrapper.update();
		const consoleButton = wrapper.find('button.js-button').first();
		consoleButton.simulate('click');
		expect(wrapper.state('current')).toEqual(platforms[0]);
	});
	it('Should fire the go back callback on click', () => {
		const goBack = jest.fn();
		const props = {
			match: {
				params: {
					id: 14
				}
			},
			history: {
				goBack: goBack
			}
		}
		const platforms = ['PlatformOne', 'PlatformTwo'];
		const wrapper = shallow(<GameView {...props} />);
		wrapper.setState({
			platforms: platforms,
			game: true,
			loading: false
		});
		wrapper.update();
		const instance = wrapper.instance();
		instance.returnButtonPress();
		expect(goBack).toHaveBeenCalled();
	})
})