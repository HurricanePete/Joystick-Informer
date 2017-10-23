import React from 'react';
import {connect} from 'react-redux';

import Tile from './tile';
import './watchlist.css';

export function Watchlist(props) {
	
	const tiles = this.props.watchlist.map((tile, index) => 
		<li>
			<Tile key={index} {...tile} />
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

const mapStateToProps = state => ({
	watchlist: state.user.watchlist
});

export default connect(mapStateToProps)(Watchlist);