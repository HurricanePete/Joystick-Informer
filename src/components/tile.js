import React from 'react';
import {Link} from 'react-router-dom';

import './tile.css';
import demo from './static-photos/demo.png';

export default function Tile(props) {

	return (
		<Link to="/">
		<div className={props.gameView ? "gameView-tile" : "tile"}>
			<div className="" title={props.title}>
				<img className="cover-photo" alt={props.title} src={demo} />
				<dl>
					<dt className="hidden">Title</dt>
					<dd>{props.title}</dd>
					<dt className="hidden">Rating</dt>
					<dd>Avg. Rating: <span className="props">{props.rating}</span></dd>
					<dt className="hidden">Price</dt>
					<dd>Low Price: <span className="props">{props.price}</span></dd>
				</dl>
			</div>
		</div>
		</Link>
	);
}