import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {addToWatchlist, sendUpdatedWatchlist} from '../actions/auth';

import './styles/tile.css';
import demo from './static-photos/demo.png';

export class Tile extends React.Component {
	constructor(props) {
		super(props);
	}

	watchlistAdd(event, gameId) {
		event.preventDefault();
		this.props.dispatch(addToWatchlist(gameId));
		this.props.dispatch(sendUpdatedWatchlist());
	}

	watchlistRemove(event, index) {
		event.preventDefault();
		const listGameId = this.props.currentWatchlist.gameIds[index.index];
		console.log(listGameId);
		this.props.watchlistWarning(listGameId);
	}

	render() {
		const {id, name, rating, cover, index, location} = this.props;
		if(location === "watchlist") {
			return (
				<Link to={`/gameview/${id}`}>
					<div className="tile col-8 center">
						<div className="dib" title={name}>
							<img className="cover-photo" alt={name} src={cover === undefined ? demo : `https://images.igdb.com/igdb/image/upload/t_cover_small/${cover.cloudinary_id}.jpg`} />
							<dl>
								<dt className="hidden">Title</dt>
								<dd>{name}</dd>
								<dt className="hidden">Rating</dt>
								<dd>Avg. Rating: <span className="props">{rating === undefined ? 'Unavailable' : parseInt(rating, 10) + ' /100'}</span></dd>
							</dl>
						</div>
						<button className="list-remover" title="Remove from Watchlist" onClick={e => this.watchlistRemove(e, index)}> - </button>
					</div>
				</Link>
			);	
		}
		else if(location === "related") {
			return (
				<Link to={`/gameview/${id}`}>
					<div className="tile col-8 center">
						<div className="dib" title={name}>
							<img className="cover-photo" alt={name} src={cover === undefined ? demo : `https://images.igdb.com/igdb/image/upload/t_cover_small/${cover.cloudinary_id}.jpg`} />
							<dl>
								<dt className="hidden">Title</dt>
								<dd>{name}</dd>
								<dt className="hidden">Rating</dt>
								<dd>Avg. Rating: <span className="props">{rating === undefined ? 'Unavailable' : parseInt(rating, 10) + ' /100'}</span></dd>
							</dl>
						</div>
						<button className="list-adder" title="Add to Watchlist" onClick={e => this.watchlistAdd(e, id)}> + </button>
					</div>
				</Link>
			);	
		}
		return (
			<Link to={`/gameview/${id}`}>
				<div className="tile col-8 center">
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