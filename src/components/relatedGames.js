import React from 'react';
import {connect} from 'react-redux';

import Tile from './tile';

import {addToWatchlist, sendUpdatedWatchlist} from '../actions/auth';

import './styles/relatedGames.css';

export class RelatedGames extends React.Component {
	watchlistAdd(event, gameId) {
		event.preventDefault();
		this.props.dispatch(addToWatchlist(gameId));
		this.props.dispatch(sendUpdatedWatchlist());
	}

	render() {
		const {loggedIn, loading} = this.props;
		if(!loggedIn) {
			return null
		}
		else if(loading) {
			return <h2>Loading...</h2>
		}
		else if(this.props.relatedGames === null || this.props.relatedGames.length === 0) {
			return(
				<section className="relatedGames-wrapper">
					<p>Add games to your watchlist to start viewing recommended games.</p>
				</section>
			)
		}

		const tiles = this.props.relatedGames.map((tile, index) =>
			<li key={index}> 
				<Tile index={index} {...tile} />
				<button className="list-adder" title="Add to Watchlist" onClick={e => this.watchlistAdd(e, tile.id)}> + </button>
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
		loading: state.auth.loading,
		currentUser: state.auth.currentUser,
		currentWatchlist: state.auth.currentWatchlist
	}
};

export default connect(mapStateToProps)(RelatedGames);