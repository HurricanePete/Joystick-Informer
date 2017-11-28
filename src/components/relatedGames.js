import React from 'react';
import {connect} from 'react-redux';

import Tile from './tile';

import {addToWatchlist, setWatchlistWarning} from '../actions';

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
		const {loggedIn, currentUser, currentWatchlist} = this.props;
		if(!loggedIn) {
			return null
		}

		let relatedGameIds = [];
		

		const tiles = relatedGameIds.map((tile, index) =>
			<li key={index}> 
				<Tile index={index} {...tile} />
				<button className="list-adder" title="Add to Watchlist" onClick={e => this.watchlistAdd(e, tile.gameId)}> + </button>
			</li>
		);
		if(tiles.length === 0) {
			return(
				<section className="relatedGames-wrapper">
					<p>Add games to your watchlist to start viewing recommended games.</p>
				</section>
			)
		}

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