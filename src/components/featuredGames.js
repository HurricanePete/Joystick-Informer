import React from 'react';

import Tile from './tile';

export default class FeaturedGames extends React.Component{
	render() {
		const tiles = this.props.featured.map((tile, index) => 
			<Tile key={index} index={index} dashboard={false} {...tile} />)

		return(
			<section className="bg-light-gray">
				<header>
					<h3>Featured Games</h3>
				</header>
				<hr/>
				<ul>
					{tiles}
				</ul>
			</section>
		)
	}
}