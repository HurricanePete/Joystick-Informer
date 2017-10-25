import React from 'react';

import Watchlist from './watchlist';
import RelatedGames from './relatedGames';

import './dashboard.css';

export default function Dashboard(props) {
	return(
		<section className="dashboard-wrapper">
			<header>
				<h2>Hello, User</h2>
			</header>
			<h3>Your Watchlist</h3>
			<hr/>
			<Watchlist />
			<h3>Recommended for You</h3>
			<hr/>
			<RelatedGames />
		</section>
	)
}