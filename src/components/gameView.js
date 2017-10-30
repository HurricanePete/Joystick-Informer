import React from 'react';
import {connect} from 'react-redux';

import ReturnButton from './returnButton';
import Pricer from './pricer';
import AddToWatchListButton from './addWatchlistButton';

import {addToWatchlist} from '../actions';

import './styles/gameView.css';


import demo from './static-photos/demo.png';

export class GameView extends React.Component {
	returnButtonPress() {
		this.props.history.goBack();
	}

	addToWatchlist() {
		const game = this.props.joystick.examples[this.props.match.params.id];
		this.props.dispatch(addToWatchlist(game));
	}

	render() {
		if(!this.props.joystick) {
			return null
		}
		const {joystick} = this.props;
		const id = parseInt(this.props.match.params.id);
		let gameIndex = joystick.examples.filter(game => game.gameId === id);
		const {title, rating, summary} = gameIndex[0];
		return (
			<section className="gameView-wrapper">
				<div className="game-view" title={title}>
					<ReturnButton goBack={() => this.returnButtonPress()}  />
					<img className="game-photo" alt={title} src={demo} />
					<dl className="game-details">
						<dt className="hidden">Title</dt>
						<dd>{title}</dd>
						<dt className="hidden">Rating</dt>
						<dd>{rating}</dd>
						<dt className="hidden">Watchlist</dt>
						<dd><AddToWatchListButton item={gameIndex[0]} removeId={id} /></dd>
						<dt className="hidden">Summary</dt>
						<dd><p className="summary">{summary}</p></dd>
					</dl>
				</div>
				<Pricer />
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
