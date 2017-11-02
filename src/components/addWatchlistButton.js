import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {addToWatchlist, removeFromWatchlist} from '../actions';

export class AddWatchlistButton extends React.Component {
	watchlistAdd(event) {
		event.preventDefault();
			this.props.dispatch(addToWatchlist(this.props.item));	
	}
	watchlistRemove(event) {
		event.preventDefault();
		this.props.dispatch(removeFromWatchlist(this.props.removeId));
	}
	render() {
		const {signedIn, currentUser, watchlists} = this.props;
		if(currentUser === null) {
			return null
		}
		const userWatchlist = watchlists.filter(watchlist => watchlist.userId === currentUser);
		console.log(userWatchlist);
		const containsGame = userWatchlist[0].games.includes(this.props.item);
		console.log(this.props.item);
		if(!signedIn) {
			return(
				<Link to="/login" className="blue underline">Sign in to add to watchlist</Link>
			)
		}

		else if((signedIn) && (containsGame)) {
			return(
				<span>
					<p className="dib green ba br3 measure">Already in watchlist</p>
					<button className="dib red br3 bg-light-red pa3" onClick={e =>this.watchlistRemove(e)}>X</button>
				</span>
			)
		}
		else {
			return(
				<button className="ba br3 bg-green" onClick={e => this.watchlistAdd(e)}>Add to watchlist</button>
			)
		}
	}
}

const mapStateToProps = state => {
	return{
		signedIn: state.joystick.signedIn,
		currentUser: state.joystick.currentUser,
		watchlists: state.joystick.watchlists
	}
}

export default connect(mapStateToProps)(AddWatchlistButton)