import React from 'react';

import Tile from './tile';
import './relatedGames.css';

export default function RelatedGames(props) {
	const examples = [{
		title: 'Potato 3: Sweet\'s Revenge',
		rating: '5/10',
		price: '$25.00'
	}, {
		title: 'Call of Potato',
		rating: '5/10',
		price: '$25.00'
	}, {
		title: 'Potato Invaders',
		rating: '5/10',
		price: '$25.00'
	}]
	const tiles = examples.map((tile, index) =>
		<li> 
			<Tile key={index} {...tile} />
			<button className="list-remover" title="Add to Watchlist"> + </button>
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