import React from 'react';
import {connect} from 'react-redux';

import Tile from './tile';
import './relatedGames.css';

export function RelatedGames(props) {
	
	const tiles = this.props.relatedGames.map((tile, index) =>
		<li> 
			<Tile key={index} {...tile} />
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

const mapStateToProps = state => ({
	relatedGames: state.user.relatedGames
});

export default connect(mapStateToProps)(RelatedGames);