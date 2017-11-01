import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {addToWatchlist, removeFromWatchlist, updateUserInfo} from '../actions';

export class AddWatchlistButton extends React.Component {
	watchlistAdd(event) {
		event.preventDefault();
			this.props.dispatch(addToWatchlist(this.props.item));
			this.props.dispatch(updateUserInfo())		
	}
	watchlistRemove(event) {
		event.preventDefault();
		this.props.dispatch(removeFromWatchlist(this.props.removeId));
		this.props.dispatch(updateUserInfo());
	}
	render() {

		const {user} = this.props;
		const watchlistGame = user.watchlist.filter((item) => item.gameId === this.props.item.gameId);
		const containsGame = watchlistGame.length > 0;
		if(!user.signedIn) {
			return(
				<Link to="/login" className="blue underline">Sign in to add to watchlist</Link>
			)
		}

		else if((user.signedIn) && (containsGame)) {
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
		user: state.joystick.user
	}
}

export default connect(mapStateToProps)(AddWatchlistButton)