import React from 'react';
import {connect} from 'react-redux';

import Tile from './tile';
import Loading from './loading';

import './styles/watchlist.css';

export class Watchlist extends React.Component {
	watchlistRemove(event, index) {
		event.preventDefault();
		const listGameId = this.props.currentWatchlist.gameIds[index.index];
		console.log(listGameId);
		this.props.watchlistWarning(listGameId);
	}

	render() {
		const {loggedIn, loading} = this.props;
		if(!loggedIn) {
			return null
		}
		else if(loading) {
			return <Loading />
		}
		else if(this.props.watchlistGames === null || this.props.watchlistGames.length === 0) {
			return(
				<section className="watchlist-wrapper row">
					<p>Your watchlist is empty. Start adding games to view them here.</p>
				</section>
			)
		}
		const tiles = this.props.watchlistGames.map((tile, index) => 
			<div key={index}>
				<Tile index={index} {...tile} />
				<button className="list-remover" title="Remove from Watchlist" onClick={e => this.watchlistRemove(e, {index})}> - </button>
			</div>
		);
		return(
			<section className="watchlist-wrapper row">
					{tiles}
			</section>
		)
	}
}

const mapStateToProps = state => {
	return {
		loggedIn: state.auth.currentUser !== null,
		loading: state.auth.loading,
		currentUser: state.auth.currentUser,
		currentWatchlist: state.auth.currentWatchlist
	}
};

export default connect(mapStateToProps)(Watchlist);