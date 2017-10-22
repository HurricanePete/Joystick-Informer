import React from 'react';

import Tile from './tile';
import './watchlist.css';

export default function Watchlist(props) {
	const examples = [{
		title: 'Potato: Rise of the Fries',
		rating: '5/10',
		price: '$25.00'
	}, {
		title: 'Potato Putt',
		rating: '5/10',
		price: '$25.00'
	}, {
		title: 'Captain Potato',
		rating: '5/10',
		price: '$25.00'
	}]
	const tiles = examples.map((tile, index) => 
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