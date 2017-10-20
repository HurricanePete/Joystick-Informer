import React from 'react';

import './tile.css';
import demo from './static-photos/demo.png';

export default function Tile(props) {
	return (
		<div className="tile">
			<a className="" title={props.title} href="#">
				<img className="cover-photo" alt={props.title} src={demo} />
				<dl>
					<dt className="hidden">Title</dt>
					<dd>{props.title}</dd>
					<dt className="hidden">Rating</dt>
					<dd>{props.rating}</dd>
					<dt className="hidden">Price</dt>
					<dd>{props.price}</dd>
				</dl>
			</a>
		</div>
		)
}