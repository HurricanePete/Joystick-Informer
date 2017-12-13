import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './styles/tile.css';
import demo from './static-photos/demo.png';

export class Tile extends React.Component {
		render() {
		const {id, name, rating, cover} = this.props;

		return (
			<Link to={`/gameview/${id}`}>
				<div className="tile">
					<div className="" title={name}>
						<img className="cover-photo" alt={name} src={cover === undefined ? demo : `https://images.igdb.com/igdb/image/upload/t_cover_small/${cover.cloudinary_id}.jpg`} />
						<dl>
							<dt className="hidden">Title</dt>
							<dd>{name}</dd>
							<dt className="hidden">Rating</dt>
							<dd>Avg. Rating: <span className="props">{rating === undefined ? 'Unavailable' : parseInt(rating, 10) + ' /100'}</span></dd>
						</dl>
					</div>
				</div>
			</Link>
		);
	}
}

export default connect()(Tile)