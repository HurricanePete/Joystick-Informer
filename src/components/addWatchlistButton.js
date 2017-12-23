import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {addToWatchlist, removeFromWatchlist, sendUpdatedWatchlist} from '../actions/auth';

import './styles/addWatchlistButton.css';

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
				<div className="sign-in mv4">
					<Link to="/login" className="blue underline mv4">Sign in to add to watchlist</Link>
				</div>
			)
		}
		else {
			let containsGame = false;
			containsGame = currentWatchlist !== null ? currentWatchlist.gameIds.includes(this.props.item) : false;
			if(loggedIn && containsGame) {
				return(
					<div className="mv4">
						<p className="already">Already in watchlist</p>
						<button className="watchlist-delete" onClick={e =>this.watchlistRemove(e)}><i className="fas fa-minus-circle"></i></button>
					</div>
				)
			}
			else {
				return(
					<div className="mv4">
						<button className="game-add" onClick={e => this.watchlistAdd(e)}>Add to watchlist</button>
					</div>
				)
			}
		}
	}
}

const mapStateToProps = state => {
	return{
		loggedIn: state.auth.currentUser !== null,
		currentWatchlist: state.auth.currentWatchlist
	}
}

export default connect(mapStateToProps)(AddWatchlistButton)