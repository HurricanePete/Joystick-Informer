import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Identicon from 'identicon.js';

import Watchlist from './watchlist';
import RelatedGames from './relatedGames';
import WarningDisplay from './warningDisplay';

import {setWatchlistWarning, resetWatchlistWarning} from '../actions/joystick';
import {loadingToggle, removeFromWatchlist, sendUpdatedWatchlist, signOut} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import {API_BASE_URL} from '../config';

import './styles/dashboard.css';

export class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			watchlistGames: null,
			relatedGames: null,
			error: null
		}
	}

	componentDidMount() {
		if(!this.props.loggedIn) {
			return;	
		}
		if(this.props.currentWatchlist !== null) {
			if(this.props.currentWatchlist.gameIds.length === 0) {
				return;
			}
			const concatIds = this.props.currentWatchlist.gameIds.concat(this.props.currentWatchlist.relatedIds);
			this.props.dispatch(loadingToggle());
			return fetch(`${API_BASE_URL}/games/ids/${concatIds}`, {
				method: 'GET'
			})
			.then(res => res.json())
			.then(res => {
				const watchlistObject = res.body;
				const relatedArray = watchlistObject.splice((watchlistObject.length-5), 5);
				console.log('line 45')
				this.setState({
					watchlistGames: watchlistObject,
					relatedGames: relatedArray
				})
			})
			.then(() => {
				this.props.dispatch(loadingToggle());
			})
			.catch(err => {
				this.setState({
					error: err
				})
			})
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.currentWatchlist === null) {
			return;
		}
		else if(nextProps.currentWatchlist !== this.props.currentWatchlist) {
			if(nextProps.currentWatchlist.gameIds.length === 0) {
				console.log('line 67')
				this.setState({
					watchlistGames: [],
					relatedGames: []
				})
				return;
			}
			const {currentWatchlist} = nextProps;
			const concatIds = currentWatchlist.gameIds.concat(currentWatchlist.relatedIds);
			this.props.dispatch(loadingToggle());
			return fetch(`${API_BASE_URL}/games/ids/${concatIds}`, {
				method: 'GET'
			})
			.then(res => res.json())
			.then(res => {
				const watchlistObject = res.body;
				const relatedArray = watchlistObject.splice((watchlistObject.length-5), 5);
				console.log('lin3 84')
				this.setState({
					watchlistGames: watchlistObject,
					relatedGames: relatedArray
				})
			})
			.then(() => {
				this.props.dispatch(loadingToggle());
			})
			.catch(err => {
				this.setState({
					error: err
				})
			})
		}
	}

	signOut(event) {
		this.props.dispatch(signOut());
		clearAuthToken();
	}

	watchlistWarning(gameId) {
		this.props.dispatch(setWatchlistWarning(gameId));
	}

	confirmWatchlistRemove() {
		this.props.dispatch(removeFromWatchlist(this.props.warning.gameId));
		this.props.dispatch(sendUpdatedWatchlist());
		this.props.dispatch(resetWatchlistWarning());
	}

	cancelWatchlistWarning() {
		this.props.dispatch(resetWatchlistWarning());
	}

	render() {
		const {auth, loggedIn, currentUser} = this.props;
		const {watchlistGames, relatedGames} = this.state;
		if(!loggedIn) {
			return <Redirect to="/" />;
		}
		const string = currentUser.username;
		let hex = [];
		for(let i=0; i<string.length; i++) {
			let hexy = string[i].charCodeAt(0);
			hexy = parseInt(hexy, 16);
			hex.push(hexy);
		}
		hex = hex.join("");
		const data = new Identicon(hex, 100).toString();
		return(
			<main>
				<header className="dashboard-header row">
					<div className="profile col-3 clear-float white">
						<img width={100} height={100} src={`data:image/png;base64, ${data}`} alt={currentUser.username} />
						<h2 className="">Hello, {currentUser.username}</h2>
						<button className="sign-out js-button" onClick={e => this.signOut(e)}>Sign out</button>
					</div>
				</header>
				<header className="w-50 tl">
					<h3>Your Watchlist</h3>
				</header>
				<hr />
				<WarningDisplay confirm={() => this.confirmWatchlistRemove()} cancel={() => this.cancelWatchlistWarning()} />
				<Watchlist watchlistGames={watchlistGames} watchlistWarning={(gameId) => this.watchlistWarning(gameId)} />
				<header className="w-50 tl">
					<h3>Recommended for You</h3>
				</header>
				<hr/>
				<RelatedGames relatedGames={relatedGames} />
			</main>
		)
	}
}

const mapStateToProps = state => {
	return{
		auth: state.auth,
		loggedIn: state.auth.currentUser !== null,
		currentUser: state.auth.currentUser,
		warning: state.joystick.watchlistWarning,
		currentWatchlist: state.auth.currentWatchlist
	}
}

export default connect(mapStateToProps)(Dashboard)