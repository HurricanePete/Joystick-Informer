import React from 'react';
import {connect} from 'react-redux';

import Pricer from './pricer';

import './gameView.css';


import demo from './static-photos/demo.png';

export class GameView extends React.Component {

	render() {
		return (
			<section className="gameView-wrapper">
				<div className="game-view" title={this.props.title}>
					<img className="game-photo" alt={this.props.title} src={demo} />
					<dl className="game-details">
						<dt className="hidden">Title</dt>
						<dd>{this.props.title}</dd>
						<dt className="hidden">Rating</dt>
						<dd>{this.props.rating}</dd>
						<dt className="hidden">Watchlist</dt>
						<dd><button>Add to Watchlist</button></dd>
						<dt className="hidden">Summary</dt>
						<dd><p className="summary">{this.props.summary}</p></dd>
					</dl>
				</div>
				<Pricer />
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		title: state.user.watchlist[0].title,
		rating: state.user.watchlist[0].rating,
		summary: state.user.watchlist[0].summary
	}
}

export default connect(mapStateToProps)(GameView)
