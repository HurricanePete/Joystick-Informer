import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './tile.css';
import demo from './static-photos/demo.png';

export class Tile extends React.Component {
		render() {
		const {gameId, title, rating, price} = this.props;


		return (
			<Link to={`/gameview/${gameId}`}>
				<div className="tile">
					<div className="" title={title}>
						<img className="cover-photo" alt={title} src={demo} />
						<dl>
							<dt className="hidden">Title</dt>
							<dd>{title}</dd>
							<dt className="hidden">Rating</dt>
							<dd>Avg. Rating: <span className="props">{rating}</span></dd>
							<dt className="hidden">Price</dt>
							<dd>Low Price: <span className="props">{price}</span></dd>
						</dl>
					</div>
				</div>
			</Link>
		);
	}
}

export default connect()(Tile)