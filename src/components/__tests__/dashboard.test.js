import React from 'react';
import {shallow, mount} from 'enzyme';

import {BrowserRouter as Router} from 'react-router-dom';

import {Dashboard} from '../dashboard';
import {WarningDisplay} from '../warningDisplay';

describe('<Dashboard />', () => {
	it('Renders without crashing', () => {
		shallow(<Dashboard />);
	});
	// it('Should update the state with the results of the api call', () => {
	// 	const API_BASE_URL = 'testing';
	// 	const dispatch = jest.fn();
	// 	const gameDetails = {
	// 		body: [1,2,3,4,5,6]
	// 	}
	// 	global.fetch = jest.fn().mockImplementation(() => 
	// 		Promise.resolve({
	// 			ok: true,
	// 			json: () => Promise.resolve({
	// 				gameDetails
	// 			})
	// 		})
	// 	);
	// 	const props = {
	// 		currentWatchlist: {
	// 			gameIds: [4,5,6]
	// 		},
	// 		dispatch
	// 	}
	// 	const wrapper = mount(
	// 		<Router>
	// 			<Dashboard {...props} />
	// 		</Router>
	// 	);
	// 	expect(fetch).toHaveBeenCalled();
	// })
})