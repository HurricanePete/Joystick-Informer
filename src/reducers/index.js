const initialState = {
	user: {
		signedIn: false,
		name: 'PotatoBandit',
		watchlist: [{
			title: 'Potato: Rise of the Fries',
			rating: '5/10',
			price: '$25.00'
		}, {
			title: 'Potato Putt',
			rating: '5/10',
			price: '$25.00'
		}, {
			title: 'Captain Potato',
			rating: '5/10',
			price: '$25.00'
		}],
		relatedGames: [{
			title: 'Potato 3: Sweet\'s Revenge',
			rating: '5/10',
			price: '$25.00'
		}, {
			title: 'Call of Potato',
			rating: '5/10',
			price: '$25.00'
		}, {
			title: 'Potato Invaders',
			rating: '5/10',
			price: '$25.00'
		}]
	},
	examples: [{
		title: 'Potato: Rise of the Fries',
		rating: '5/10',
		price: '$25.00'
	}, {
		title: 'Potato Putt',
		rating: '5/10',
		price: '$25.00'
	}, {
		title: 'Captain Potato',
		rating: '5/10',
		price: '$25.00'
	}, {
		title: 'Tomato and Potato Go Fishing',
		rating: '5/10',
		price: '$25.00'
	}, {
		title: 'Potato 2: Return of the Potato',
		rating: '5/10',
		price: '$25.00'
	}, {
		title: 'Potatostein',
		rating: '5/10',
		price: '$25.00'
	}, {
		title: 'Potato 3: Sweet\'s Revenge',
		rating: '5/10',
		price: '$25.00'
	}, {
		title: 'Call of Potato',
		rating: '5/10',
		price: '$25.00'
	}, {
		title: 'Potato Invaders',
		rating: '5/10',
		price: '$25.00'
	}]	
};

export const joystickReducer = (state=initialState, action) => {


	return state;
};