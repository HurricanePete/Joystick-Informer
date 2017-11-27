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
		const {loggedIn, currentUser, currentWatchlist} = this.props;
		if(!loggedIn) {
			return null
		}
		const tiles = currentWatchlist.gameIds.map((tile, index) => 
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
		loggedIn: state.joystick.currentUser !== null,
		currentUser: state.joystick.currentUser,
		currentWatchlist: state.joystick.currentWatchlist
	}
};

export default connect(mapStateToProps)(Watchlist);