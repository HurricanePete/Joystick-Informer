import React from 'react';
import {connect} from 'react-redux';

import ReturnButton from './returnButton';
import Pricer from './pricer';
import AddToWatchListButton from './addWatchlistButton';
import Loading from './loading';

import {API_BASE_URL} from '../config';

import './styles/gameView.css';

import demo from './static-photos/demo.png';

export class GameView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			game: null,
			platforms: null,
			current: null,
			error: null
		}
	}

	componentDidMount() {
		const id = parseInt(this.props.match.params.id, 10);
		this.setState({loading: true});
		return fetch(`${API_BASE_URL}/games/single/${id}`, {
			method: 'GET'
		})
		.then(res => res.json())
		.then(gameData => {
			this.setState({
				loading: false,
				game: gameData.game,
				platforms: gameData.platforms,
				current: gameData.platforms[0]
			})
		})
		.catch(err => {
			this.setState({
				error:err
			})
		})
	}

	setCurrentConsole(event, console) {
		this.setState({
			current: console
		})
	}

	returnButtonPress() {
		this.props.history.goBack();
	}

	render() {
		if(this.state.loading === true || this.state.game === null) {
			return (
				<main>
					<Loading />
				</main>
			)
		}
		const {id, name, rating, summary, cover, first_release_date} = this.state.game;
		const platforms = this.state.platforms;
		const current = this.state.current;
		const platformTabs = platforms.map((platform, index) => 
			<li className="dib" key={index}>
				<button className="js-button" index={index} onClick={e => this.setCurrentConsole(e, platform)}>{platform}</button>
			</li>
		);
		return (
			<main>
				<ReturnButton goBack={() => this.returnButtonPress()}  />
				<section className="gameView-wrapper row">
					<div className="game-view row" title={name}>
						<div className="photo-wrapper col-3 clear-float">
							<img className="game-photo" alt={name} src={cover !== undefined ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.cloudinary_id}.jpg` : demo} />
						</div>
						<div className="description-wrapper col-6 clear-float">
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
							<ul className="platforms col-8">
								{platformTabs}
							</ul>
						</div>
					</div>
					<Pricer name={name} releaseDate={first_release_date} platforms={current} />
				</section>
			</main>
		);
	}
}

const mapStateToProps = state => {
	return {
		joystick: state.joystick
	}
}

export default connect(mapStateToProps)(GameView)
