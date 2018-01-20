import React from 'react';

import Demo from './static-photos/onboard-demo.jpeg';

import './styles/onboarding.css';

export default function Onboarding(props) {
	return(
		<section className="onboarding">
			<article>
				<div>
					<h2>Find your next great game.</h2>
					<h2>Personalized recommendations based on your tastes.</h2>
					<p>Joystick Informer is an application for gamers who are looking for their next adventure.</p>
				</div>
				<figure>
					<img alt="" src={Demo} />
				</figure>
			</article>
			<article>
				<figure>
					<img alt="" src={Demo} />
				</figure>
				<div>
					<h2>Search</h2>
					<p>Find a game to start the action. Select a game to view details, related games, and pricing.</p>
				</div>
			</article>
			<article>
				<div>
					<h2>Add</h2>
					<p>Create an account to start adding games to your watchlist. This will create a list of recommended games; which can be viewd in your dashboard.</p>
				</div>
				<figure>
					<img alt="" src={Demo} />
				</figure>
			</article>
			<article>
				<figure>
					<img alt="" src={Demo} />
				</figure>
				<div>
					<h2>Personlize</h2>
					<p>Add or remove games from your watchlist to further personalize your recommendations and hone in your next great game. Happy hunting!</p>
				</div>
			</article>
		</section>
	)
}