import React from 'react';
import {connect} from 'react-redux';

import Pricer from './pricer';

import './gameView.css';


import demo from './static-photos/demo.png';

export default function GameView(props) {
	return (
		<section className="gameView-wrapper">
			<div className="game-view" title={props.title}>
				<img className="game-photo" alt={props.title} src={demo} />
				<dl className="game-details">
					<dt className="hidden">Title</dt>
					<dd>{props.title}</dd>
					<dt className="hidden">Rating</dt>
					<dd>{props.rating}</dd>
					<dt className="hidden">Watchlist</dt>
					<dd><button>Add to Watchlist</button></dd>
					<dt className="hidden">Summary</dt>
					<dd><p className="summary">{props.summary}</p></dd>
				</dl>
			</div>
			<Pricer />
		</section>
	);
}

