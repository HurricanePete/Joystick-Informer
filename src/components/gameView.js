import React from 'react';
import {connect} from 'react-redux';

import ReturnButton from './returnButton';
import Pricer from './pricer';
import AddToWatchListButton from './addWatchlistButton';

import './styles/gameView.css';


import demo from './static-photos/demo.png';

export class GameView extends React.Component {
	returnButtonPress() {
		this.props.history.goBack();
	}

	render() {
		if(!this.props.joystick) {
			return null
		}
		const {joystick} = this.props;
		const id = parseInt(this.props.match.params.id, 10);
		let gameIndex = joystick.searchResults.filter(game => game.id === id);
		const {name, rating, summary, cover} = gameIndex[0];
		return (
			<section className="gameView-wrapper">
				<div className="game-view" title={name}>
					<ReturnButton goBack={() => this.returnButtonPress()}  />
					<img className="game-photo" alt={name} src={cover.url} />
					<dl className="game-details">
						<dt className="hidden">Title</dt>
						<dd>{name}</dd>
						<dt className="hidden">Rating</dt>
						<dd>{rating}</dd>
						<dt className="hidden">Watchlist</dt>
						<dd><AddToWatchListButton item={id} removeId={id} /></dd>
						<dt className="hidden">Summary</dt>
						<dd><p className="summary">{!summary ? 'Apologies, no summary available.' : summary}</p></dd>
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
