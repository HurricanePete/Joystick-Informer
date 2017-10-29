import * as actions from '../actions';

const initialState = {
	banner: true,
	dashboard: false,
	searching: false,
	searchResults: null,
	watchlistError: false,
	errorMessage: null,
	signedIn: false,
	user: {
		name: 'PotatoBandit',
		password: 'PotatoPassword',
		watchlist: [{
			gameId: 1,
			title: 'Potato: Rise of the Fries',
			rating: '5/10',
			price: '$25.00',
			summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
		}, {
			gameId: 2,
			title: 'Potato Putt',
			rating: '5/10',
			price: '$25.00',
			summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
		}, {
			gameId: 3,
			title: 'Captain Potato',
			rating: '5/10',
			price: '$25.00',
			summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
		}],
		relatedGames: [{
			gameId: 7,
			title: 'Potato 3: Sweet\'s Revenge',
			rating: '5/10',
			price: '$25.00',
			summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
		}, {
			gameId: 8,
			title: 'Call of Potato',
			rating: '5/10',
			price: '$25.00',
			summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
		}, {
			gameId: 9,
			title: 'Potato Invaders',
			rating: '5/10',
			price: '$25.00',
			summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
		}]
	},
	registeredUsers: null,
	examples: [{
		gameId: 1,
		title: 'Potato: Rise of the Fries',
		rating: '5/10',
		price: '$25.00',
		summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
	}, {
		gameId: 2,
		title: 'Potato Putt',
		rating: '5/10',
		price: '$25.00',
		summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
	}, {
		gameId: 3,
		title: 'Captain Potato',
		rating: '5/10',
		price: '$25.00',
		summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
	}, {
		gameId: 4,
		title: 'Tomato and Potato Go Fishing',
		rating: '5/10',
		price: '$25.00',
		summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
	}, {
		gameId: 5,
		title: 'Potato 2: Return of the Potato',
		rating: '5/10',
		price: '$25.00',
		summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
	}, {
		gameId: 6,
		title: 'Potatostein',
		rating: '5/10',
		price: '$25.00',
		summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
	}, {
		gameId: 7,
		title: 'Potato 3: Sweet\'s Revenge',
		rating: '5/10',
		price: '$25.00',
		summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
	}, {
		gameId: 8,
		title: 'Call of Potato',
		rating: '5/10',
		price: '$25.00',
		summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
	}, {
		gameId: 9,
		title: 'Potato Invaders',
		rating: '5/10',
		price: '$25.00',
		summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
	}]	
};

export const joystickReducer = (state=initialState, action) => {
	if (action.type === actions.BANNER_TOGGLE) {
		return Object.assign({}, state, {
			banner: false
		});
	}
	else if (action.type === actions.SIGN_IN) {
		return Object.assign({}, state, {
			user: {...state.user,
				signedIn: true
			}
		})
	}
	else if (action.type === actions.SIGN_OUT) {
		return Object.assign({}, state, {
			user: {...state.user, 
				signedIn: false
			}
		})
	}
	else if (action.type === actions.SET_GAME_ID) {
		return Object.assign({}, state, {
			gameId: action.gameId
		})
	}
	else if (action.type === actions.ADD_TO_WATCHLIST) {
		return Object.assign({}, state, {
			user: {...state.user,
				watchlist: [...state.user.watchlist, 
					action.game
			]}
		})
	}
	else if (action.type === actions.REMOVE_FROM_WATCHLIST) {
		console.log(action.gameId);
		console.log([...state.user.watchlist].filter(item => item.gameId !== action.gameId));
		return Object.assign({}, state, {
			user: {...state.user,
				watchlist: [...state.user.watchlist].filter(item => item.gameId !== action.gameId)
			}
		})
	}
	else if (action.type === actions.SET_SEARCH_RESULTS) {
		return Object.assign({}, state, {
			searchResults: action.searchResults
		})
	}


	return state;
};