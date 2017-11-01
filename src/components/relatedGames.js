import React from 'react';
import {connect} from 'react-redux';

import Tile from './tile';

import {addToWatchlist, setWatchlistWarning, updateUserInfo} from '../actions';

import './styles/relatedGames.css';

export class RelatedGames extends React.Component {
	watchlistAdd(event, index) {
		event.preventDefault();
		const listGame = this.props.user.relatedGames[index.index];
		const watchlistGame = this.props.user.watchlist.filter(item => item === listGame);
		console.log(watchlistGame);
		if(watchlistGame.length !== 0) {
			this.props.dispatch(setWatchlistWarning());
			return null
		} 
		this.props.dispatch(addToWatchlist(listGame));
		this.props.dispatch(updateUserInfo());
	}

	render() {
		const {user} = this.props;
		const tiles = user.relatedGames.map((tile, index) =>
			<li key={index}> 
				<Tile index={index} {...tile} />
				<button className="list-adder" title="Add to Watchlist" onClick={e => this.watchlistAdd(e, {index})}> + </button>
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
		user: state.joystick.user
	}
};

export default connect(mapStateToProps)(RelatedGames);