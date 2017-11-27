import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './styles/tile.css';
import demo from './static-photos/demo.png';

export class Tile extends React.Component {
		render() {
		const {id, name, rating, cover, price} = this.props;

		return (
			<Link to={`/gameview/${id}`}>
				<div className="tile">
					<div className="" title={name}>
						<img className="cover-photo" alt={name} src={cover === undefined ? demo : cover.url} />
						<dl>
							<dt className="hidden">Title</dt>
							<dd>{name}</dd>
							<dt className="hidden">Rating</dt>
							<dd>Avg. Rating: <span className="props">{rating === undefined ? 'Rating Unavailable' : parseInt(rating, 10) + '/100'}</span></dd>
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