import React from 'react';
import {connect} from 'react-redux';

import Tile from './tile';

import './styles/watchlist.css';

export class Watchlist extends React.Component {
	watchlistRemove(event, index) {
		event.preventDefault();
		const listGameId = this.props.watchlist[index.index].gameId;
		this.props.watchlistWarning(listGameId);
	}

	render() {
		const {watchlist} = this.props;
		const tiles = watchlist.map((tile, index) => 
			<li className="game-row" key={index}>
				<Tile index={index} {...tile} />
				<button className="list-remover" title="Remove from Watchlist" onClick={e => this.watchlistRemove(e, {index})}> - </button>
			</li>
		);

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
		watchlist: state.joystick.user.watchlist
	}
};

export default connect(mapStateToProps)(Watchlist);