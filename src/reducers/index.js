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
	users: [{
		userId: 1,
		username: "PotatoBandit",
		password: "PotatoPassword"
	}],
	watchlists: [{
		userId: 1,
		games: [1, 2, 3]
	}],
	currentUser: null,
	examples: [{
		gameId: 1,
		title: 'Potato: Rise of the Fries',
		rating: '5/10',
		price: '$25.00',
		summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
		related: [9]
	}, {
		gameId: 2,
		title: 'Potato Putt',
		rating: '5/10',
		price: '$25.00',
		summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
		related: [8]
	}, {
		gameId: 3,
		title: 'Captain Potato',
		rating: '5/10',
		price: '$25.00',
		summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
		related: [7]
	}, {
		gameId: 4,
		title: 'Tomato and Potato Go Fishing',
		rating: '5/10',
		price: '$25.00',
		summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
		related: [6]
	}, {
		gameId: 5,
		title: 'Potato 2: Return of the Potato',
		rating: '5/10',
		price: '$25.00',
		summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
		related: [5]
	}, {
		gameId: 6,
		title: 'Potatostein',
		rating: '5/10',
		price: '$25.00',
		summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
		related: [4]
	}, {
		gameId: 7,
		title: 'Potato 3: Sweet\'s Revenge',
		rating: '5/10',
		price: '$25.00',
		summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
		related: [3]
	}, {
		gameId: 8,
		title: 'Call of Potato',
		rating: '5/10',
		price: '$25.00',
		summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
		related: [2]
	}, {
		gameId: 9,
		title: 'Potato Invaders',
		rating: '5/10',
		price: '$25.00',
		summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate',
		related: [1]
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
			signedIn: true
		})
	}
	else if (action.type === actions.SIGN_OUT) {
		return Object.assign({}, state, {
				signedIn: false
			})
	}
	else if (action.type === actions.ADD_TO_WATCHLIST) {
		const watchlistUpdate = state.watchlists.map(watchlist => {
			if(watchlist.userId === state.currentUser) {
				watchlist.games.push(action.gameId);
				return watchlist;
			}
			else{
				return watchlist;
			}
		})
		return Object.assign({}, state, {
			watchlists: [...watchlistUpdate]
		})
	}
	else if (action.type === actions.REMOVE_FROM_WATCHLIST) {
		const watchlistUpdate = state.watchlists.map(watchlist => {
			if(watchlist.userId === state.currentUser) {
				const filteredList = watchlist.games.filter(game => game !== action.gameId);
				return {
					userId: watchlist.userId,
					games: filteredList
				}
			}
			else{
				return watchlist;
			}
		})
		return Object.assign({}, state, {
			watchlists: [...watchlistUpdate]
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
			users: [...state.users, {
				userId: state.users.length + 1,
				username: action.userInfo.name,
				password: action.userInfo.password
			}]
		})
	}
	else if (action.type === actions.SEND_TO_DASHBOARD) {
		return Object.assign({}, state, {
			sendToDashboard: action.boolean
		})
	}
	else if (action.type === actions.SET_CURRENT_USER) {
		return Object.assign({}, state, {
			currentUser: action.userId
		})
	}

	return state;
};