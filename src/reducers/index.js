import * as actions from '../actions';

const initialState = {
	banner: true,
	dashboard: false,
	searching: false,
	searchResults: null,
	sendToDashboard: false,
	watchlistWarning: {
		warning: false,
		gameId: null
	},
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
	registeredUsers: [{
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
	}],
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
				signedIn: false
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
	else if (action.type === actions.SET_WATCHLIST_WARNING) {
		return Object.assign({}, state, {
			watchlistWarning: {
				warning: true,
				gameId: action.gameId
			}
		})
	}
	else if (action.type === actions.RESET_WATCHLIST_WARNING) {
		return Object.assign({}, state, {
			watchlistWarning: {
				warning: false,
				gameId: null
			}
		})
	}
	else if (action.type === actions.CREATE_NEW_USER) {
		return Object.assign({}, state, {
			registeredUsers: [...state.registeredUsers, {
					name: action.userInfo.username,
					password: action.userInfo.password,
					watchlist: [],
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
				}
			]
		})
	}
	else if (action.type === actions.SEND_TO_DASHBOARD) {
		return Object.assign({}, state, {
			sendToDashboard: action.boolean
		})
	}
	else if (action.type === actions.SET_CURRENT_USER) {
		return Object.assign({}, state, {
			user: action.user
		})
	}
	else if (action.type ===actions.UPDATE_USER_INFO) {
		let updatedInfo = []; 
		state.registeredUsers.forEach((item, index) => {
			if(item.name === state.user.name) {
				updatedInfo.push(state.user)
			}
			else {
				updatedInfo.push(item)
			}	
		})
		return Object.assign({}, state, {
			registeredUsers: updatedInfo
		})
	}


	return state;
};