import React from 'react';
import {connect} from 'react-redux';

import Tile from './tile';
import Loading from './loading';

import './styles/watchlist.css';

export class Watchlist extends React.Component {
	constructor(props) {
		super(props);
	}

	watchlistWarning(gameId) {
		this.props.watchlistWarning(gameId);
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
					<p className="tc b">Your watchlist is empty. Start adding games to view them here.</p>
				</section>
			)
		}
		const tiles = this.props.watchlistGames.map((tile, index) => 
			<div key={index}>
				<Tile index={index} location={"watchlist"} watchlistWarning={(gameId) => this.watchlistWarning(gameId)} {...tile} />
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