import React from 'react';
import {connect} from 'react-redux';

import Tile from './tile';
import './watchlist.css';

export class Watchlist extends React.Component {

	render() {
		const tiles = this.props.watchlist.map((tile, index) => 
			<li className="game-row" key={index}>
				<Tile index={index} {...tile} />
				<button className="list-remover" title="Remove from Watchlist"> - </button>
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
		watchlist: state.joystick.user.watchlist,
		gameView: state.joystick.gameView
	}
};

export default connect(mapStateToProps)(Watchlist);