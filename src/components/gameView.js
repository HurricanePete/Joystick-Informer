import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import ReturnButton from './returnButton';
import Pricer from './pricer';

import './gameView.css';


import demo from './static-photos/demo.png';

export class GameView extends React.Component {

	render() {
		const {joystick} = this.props
		const index = this.props.match.params.id;
		const {title, rating, summary} = joystick.examples[index];

		if(!this.props.signedIn) {
			return(
				<section className="gameView-wrapper">
					<div className="game-view" title={title}>
						<ReturnButton path="gameview" />
						<img className="game-photo" alt={title} src={demo} />
						<dl className="game-details">
							<dt className="hidden">Title</dt>
							<dd>{title}</dd>
							<dt className="hidden">Rating</dt>
							<dd>{rating}</dd>
							<dt className="hidden">Watchlist</dt>
							<dd><Link to="/">Sign in to Add to Watchlist</Link></dd>
							<dt className="hidden">Summary</dt>
							<dd><p className="summary">{summary}</p></dd>
						</dl>
					</div>
					<Pricer />
				</section>
			);
		}
		return (
			<section className="gameView-wrapper">
				<div className="game-view" title={title}>
					<img className="game-photo" alt={title} src={demo} />
					<dl className="game-details">
						<dt className="hidden">Title</dt>
						<dd>{title}</dd>
						<dt className="hidden">Rating</dt>
						<dd>{rating}</dd>
						<dt className="hidden">Watchlist</dt>
						<dd><button>Add to Watchlist</button></dd>
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
	const gameSelect = state.joystick.gameId;
	return {
		joystick: state.joystick,
		signedIn: state.joystick.user.signedIn
	}
}

export default connect(mapStateToProps)(GameView)
