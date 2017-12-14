import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {addToWatchlist, removeFromWatchlist, sendUpdatedWatchlist} from '../actions/auth';

export class AddWatchlistButton extends React.Component {
	watchlistAdd(event) {
		event.preventDefault();
			this.props.dispatch(addToWatchlist(this.props.item));
			this.props.dispatch(sendUpdatedWatchlist());	
	}
	watchlistRemove(event) {
		event.preventDefault();
		this.props.dispatch(removeFromWatchlist(this.props.item));
		this.props.dispatch(sendUpdatedWatchlist());
	}
	render() {
		const {loggedIn, currentWatchlist} = this.props;
		if(!loggedIn) {
			return(
				<Link to="/login" className="blue underline">Sign in to add to watchlist</Link>
			)
		}
		else {
			const containsGame = currentWatchlist.gameIds.includes(this.props.item);
			console.log(containsGame);
			if(loggedIn && containsGame) {
				return(
					<span>
						<p className="dib green ba pv2 ph4 measure">Already in watchlist</p>
						<button className="dib red bg-light-red pa3" onClick={e =>this.watchlistRemove(e)}>X</button>
					</span>
				)
			}
			else {
				return(
					<button className="ba bg-green pv2 ph4" onClick={e => this.watchlistAdd(e)}>Add to watchlist</button>
				)
			}
		}
	}
}

const mapStateToProps = state => {
	return{
		loggedIn: state.auth.currentWatchlist !== null,
		currentWatchlist: state.auth.currentWatchlist
	}
}

export default connect(mapStateToProps)(AddWatchlistButton)