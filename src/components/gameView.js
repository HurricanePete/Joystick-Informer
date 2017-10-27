import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import ReturnButton from './returnButton';
import Pricer from './pricer';

import {addToWatchlist} from '../actions';

import './gameView.css';


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
		const {joystick} = this.props;
		const index = this.props.match.params.id;
		const {title, rating, summary} = joystick.examples[index];

		if(!joystick.user.signedIn) {
			return(
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
							<dd><Link to="/login">Sign in to Add to Watchlist</Link></dd>
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
					<ReturnButton goBack={() => this.returnButtonPress()}  />
					<img className="game-photo" alt={title} src={demo} />
					<dl className="game-details">
						<dt className="hidden">Title</dt>
						<dd>{title}</dd>
						<dt className="hidden">Rating</dt>
						<dd>{rating}</dd>
						<dt className="hidden">Watchlist</dt>
						<dd><button className="watchlist-add" onClick={() => this.addToWatchlist()}>Add to Watchlist</button></dd>
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
