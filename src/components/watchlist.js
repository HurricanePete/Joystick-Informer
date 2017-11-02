import React from 'react';
import {connect} from 'react-redux';

import Tile from './tile';

import './styles/watchlist.css';

export class Watchlist extends React.Component {
	watchlistRemove(event, index) {
		event.preventDefault();
		const userWatchlist = this.props.watchlists.filter(watchlist => watchlist.userId === this.props.currentUser);
		const listGameId = userWatchlist[0].games[index.index];
		this.props.watchlistWarning(listGameId);
	}

	render() {
		const {watchlists, currentUser, examples} = this.props;
		if(currentUser === null) {
			return null
		}
		const userWatchlist = watchlists.filter(watchlist => watchlist.userId === currentUser);
		const watchlistGames = userWatchlist[0].games.map(gameId => examples.find(example => example.gameId === gameId));
		const tiles = watchlistGames.map((tile, index) => 
			<li className="game-row" key={index}>
				<Tile index={index} {...tile} />
				<button className="list-remover" title="Remove from Watchlist" onClick={e => this.watchlistRemove(e, {index})}> - </button>
			</li>
		);
		if(tiles.length === 0) {
			return(
				<section className="watchlist-wrapper">
					<p>Your watchlist is empty. Start adding games to view them here.</p>
				</section>
			)
		}
		return(
			<section className="watchlist-wrapper">
				<ul>
					{tiles}
				</ul>
			</section>
		)
	}
}

const mapStateToProps = state => {
	return {
		watchlists: state.joystick.watchlists,
		currentUser: state.joystick.currentUser,
		examples: state.joystick.examples
	}
};

export default connect(mapStateToProps)(Watchlist);