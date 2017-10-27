import React from 'react';
import {connect} from 'react-redux';

import Tile from './tile';
import './relatedGames.css';

export class RelatedGames extends React.Component {

	render() {
		const tiles = this.props.relatedGames.map((tile, index) =>
			<li key={index}> 
				<Tile index={index} {...tile} />
				<button className="list-adder" title="Add to Watchlist"> + </button>
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
		relatedGames: state.joystick.user.relatedGames
	}
};

export default connect(mapStateToProps)(RelatedGames);