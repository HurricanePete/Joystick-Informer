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
		const {loggedIn, currentUser, currentWatchlist} = this.props;
		if(loggedIn) {
			return(
				<Link to="/login" className="blue underline">Sign in to add to watchlist</Link>
			)
		}
		const containsGame = currentWatchlist.gameIds.includes(this.props.item);
		if(loggedIn && containsGame) {
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
		loggedIn: state.joystick.currentUser !== null,
		currentUser: state.joystick.currentUser,
		currentWatchlist: state.joystick.currentWatchlist,
	}
}

export default connect(mapStateToProps)(AddWatchlistButton)