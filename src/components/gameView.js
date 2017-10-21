import React from 'react';

import './gameView.css';

import demo from './static-photos/demo.png';

export default function GameView(props) {
	return (
		<section className="GameView-wrapper">
			<div className="" title={props.title}>
				<img className="cover-photo" alt={props.title} src={demo} />
				<dl>
					<dt className="hidden">Title</dt>
					<dd>{props.title}</dd>
					<dt className="hidden">Rating</dt>
					<dd>{props.rating}</dd>
					<dt className="hidden">Summary</dt>
					<dd>{props.summary}</dd>
				</dl>
			</div>
		</section>
	);
}
