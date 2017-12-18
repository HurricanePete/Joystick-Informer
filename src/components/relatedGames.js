import React from 'react';
import {connect} from 'react-redux';

import Tile from './tile';
import Loading from './loading';

import './styles/relatedGames.css';

export class RelatedGames extends React.Component {


	render() {
		const {loggedIn, loading} = this.props;
		if(!loggedIn) {
			return null
		}
		else if(loading) {
			return(
				<section className="relatedGames-wrapper row">
					<Loading />
				</section>
			);
		}
		else if(this.props.relatedGames === null || this.props.relatedGames.length === 0) {
			return(
				<section className="relatedGames-wrapper row">
					<p className="tc b">Add games to your watchlist to start viewing recommended games.</p>
				</section>
			)
		}

		const tiles = this.props.relatedGames.map((tile, index) =>
			<div key={index}> 
				<Tile index={index} location={"related"} {...tile} />
			</div>
		);
		return(
			<section className="relatedGames-wrapper row">
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

export default connect(mapStateToProps)(RelatedGames);