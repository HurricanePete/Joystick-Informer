import React from 'react';
import {connect} from 'react-redux';

import ReturnButton from './returnButton';
import Pricer from './pricer';
import AddToWatchListButton from './addWatchlistButton';

import {API_BASE_URL} from '../config';

import './styles/gameView.css';

import demo from './static-photos/demo.png';

export class GameView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			game: null,
			error: null
		}
	}

	componentDidMount() {
		const id = parseInt(this.props.match.params.id, 10);
		console.log(id)
		this.setState({loading: true});
		return fetch(`${API_BASE_URL}/games/single/${id}`, {
			method: 'GET'
		})
		.then(res => res.json())
		.then(gameData => {
			console.log(gameData)
			this.setState({
				loading: false,
				game: gameData
			})
		})
		.catch(err => {
			this.setState({
				error:err
			})
		})
	}

	returnButtonPress() {
		this.props.history.goBack();
	}

	render() {
		if(this.state.game === null) {
			return <h2>Loading...</h2>
		}
		if(this.state.loading === true) {
			return <h2>Loading...</h2>
		}
		const {id, name, rating, summary, cover} = this.state.game;
		console.log(name);
		return (
			<section className="gameView-wrapper">
				<div className="game-view" title={name}>
					<ReturnButton goBack={() => this.returnButtonPress()}  />
					<img className="game-photo" alt={name} src={cover !== undefined ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.cloudinary_id}.jpg` : demo} />
					<dl className="game-details">
						<dt className="hidden">Title</dt>
						<dd>{name}</dd>
						<dt className="hidden">Rating</dt>
						<dd>{rating === undefined ? 'Unavailable' : parseInt(rating, 10) + ' /100'}</dd>
						<dt className="hidden">Watchlist</dt>
						<dd><AddToWatchListButton item={id} /></dd>
						<dt className="hidden">Summary</dt>
						<dd><p className="summary">{!summary ? 'Apologies, no summary available.' : summary}</p></dd>
					</dl>
				</div>
				<Pricer name={name} />
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		joystick: state.joystick
	}
}

export default connect(mapStateToProps)(GameView)
