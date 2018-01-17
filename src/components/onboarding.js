import React from 'react';

import Demo from './static-photos/onboard-demo.jpeg';

import './styles/onboarding.css';

export default function Onboarding(props) {
	return(
		<section className="onboarding">
			<article>
				<div>
					<h1>Find your next great game.</h1>
					<h1>Personalized recommendations based on your tastes.</h1>
					<p>Joystick Informer is an application for gamers who are looking for their next adventure.</p>
				</div>
				<img src={Demo} />
			</article>
			<article>
				<img src={Demo} />
				<div>
					<h1>Search</h1>
					<p>Find a game to start the action. Select a game to view details, related games, and pricing.</p>
				</div>
			</article>
			<article>
				<div>
					<h1>Add</h1>
					<p>Create an account to start adding games to your watchlist. This will create a list of recommended games; which can be viewd in your dashboard.</p>
				</div>
				<img src={Demo} />
			</article>
			<article>
				<img src={Demo} />
				<div>
					<h1>Personlize</h1>
					<p>Add or remove games from your watchlist to further personalize your recommendations and hone in your next great game. Happy hunting!</p>
				</div>
			</article>
		</section>
	)
}