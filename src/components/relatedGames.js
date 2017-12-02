import React from 'react';
import {connect} from 'react-redux';

import Tile from './tile';

import {setWatchlistWarning} from '../actions/joystick';
import {addToWatchlist} from '../actions/auth';

import './styles/relatedGames.css';

export class RelatedGames extends React.Component {
	watchlistAdd(event, gameId) {
		event.preventDefault();
		const userWatchlist = this.props.watchlists.filter(watchlist => watchlist.userId === this.props.currentUser);
		const watchlistGame = userWatchlist[0].games.filter(item => item === gameId);
		console.log(watchlistGame);
		if(watchlistGame.length !== 0) {
			this.props.dispatch(setWatchlistWarning());
			return null
		} 
		this.props.dispatch(addToWatchlist(gameId));
	}

	render() {
		const {loggedIn, currentWatchlist} = this.props;
		if(!loggedIn) {
			return null
		}
		if(this.props.relatedGames === null || this.props.relatedGames.length === 0) {
			return(
				<section className="relatedGames-wrapper">
					<p>Add games to your watchlist to start viewing recommended games.</p>
				</section>
			)
		}

		const tiles = this.props.relatedGames.map((tile, index) =>
			<li key={index}> 
				<Tile index={index} {...tile} />
				<button className="list-adder" title="Add to Watchlist" onClick={e => this.watchlistAdd(e, tile.gameId)}> + </button>
			</li>
		);
		return(
			<section className="relatedGames-wrapper">
				<ul>
					{tiles}
				</ul>
			</section>
		)
	}
}

const mapStateToProps = state => {
	return {
		loggedIn: state.auth.currentUser !== null,
		currentUser: state.auth.currentUser,
		currentWatchlist: state.auth.currentWatchlist
	}
};

export default connect(mapStateToProps)(RelatedGames);