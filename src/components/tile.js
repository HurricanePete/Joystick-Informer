import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Description from './description';

import {addToWatchlist, sendUpdatedWatchlist} from '../actions/auth';

import './styles/tile.css';
import demo from './static-photos/demo.png';

export class Tile extends React.Component {

	watchlistAdd(event, gameId) {
		event.preventDefault();
		this.props.dispatch(addToWatchlist(gameId));
		this.props.dispatch(sendUpdatedWatchlist());
	}

	watchlistRemove(event, index) {
		event.preventDefault();
		const listGameId = this.props.currentWatchlist.gameIds[index];
		this.props.watchlistWarning(listGameId);
	}

	render() {
		const {id, name, first_release_date, rating, cover, genres, index, location} = this.props;
		if(location === "watchlist") {
			return (
				<Link to={`/gameview/${id}`}>
					<div className="tile col-8 center dashboard-list">
						<div className="dib w-75" title={name}>
							<h2>{name}</h2>
							<img className="cover-photo dib" alt={name} src={cover === undefined ? demo : `https://images.igdb.com/igdb/image/upload/t_cover_small/${cover.cloudinary_id}.jpg`} />
							<Description {...this.props}  />
						</div>
						<i className="fas fa-minus-circle red fa-3x" title="Remove from Watchlist" onClick={e => this.watchlistRemove(e, index)}></i>
					</div>
				</Link>
			);	
		}
		else if(location === "related") {
			return (
				<Link to={`/gameview/${id}`}>
					<div className="tile col-8 center dashboard-list">
						<div className="dib w-75" title={name}>
							<h2>{name}</h2>
							<img className="cover-photo dib" alt={name} src={cover === undefined ? demo : `https://images.igdb.com/igdb/image/upload/t_cover_small/${cover.cloudinary_id}.jpg`} />
							<Description {...this.props}  />
						</div>
						<i className="fas fa-plus-circle green fa-3x" title="Add to Watchlist" onClick={e => this.watchlistAdd(e, id)}></i>
					</div>
				</Link>
			);	
		}
		else {
			return (
				<Link to={`/gameview/${id}`}>
					<div className="tile col-8">
						<div className="" title={name}>
							<h2>{name}</h2>
							<img className="cover-photo dib" alt={name} src={cover === undefined ? demo : `https://images.igdb.com/igdb/image/upload/t_cover_small/${cover.cloudinary_id}.jpg`} />
							<Description {...this.props}  />
						</div>
					</div>
				</Link>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		currentWatchlist: state.auth.currentWatchlist
	}
};

export default connect(mapStateToProps)(Tile);