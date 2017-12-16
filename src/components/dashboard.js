import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Watchlist from './watchlist';
import RelatedGames from './relatedGames';
import WarningDisplay from './warningDisplay';

import {setWatchlistWarning, resetWatchlistWarning} from '../actions/joystick';
import {loadingToggle, removeFromWatchlist, sendUpdatedWatchlist, signOut} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import {API_BASE_URL} from '../config';

import avatar from './static-photos/avatar.jpeg';
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
			//const {currentWatchlist} = this.props.currentWatchlist;
			console.log(this.props.currentWatchlist)
			const concatIds = this.props.currentWatchlist.gameIds.concat(this.props.currentWatchlist.relatedIds);
			console.log(concatIds)
			this.props.dispatch(loadingToggle());
			return fetch(`${API_BASE_URL}/games/ids/${concatIds}`, {
				method: 'GET'
			})
			.then(res => res.json())
			.then(res => {
				const watchlistObject = res.body;
				console.log(watchlistObject)
				const relatedArray = watchlistObject.splice((watchlistObject.length-5), 5);
				console.log(relatedArray);
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
				this.setState({
					watchlistGames: [],
					relatedGames: []
				})
				return;
			}
			const {currentWatchlist} = nextProps;
			const concatIds = currentWatchlist.gameIds.concat(currentWatchlist.relatedIds);
			console.log(concatIds)
			this.props.dispatch(loadingToggle());
			return fetch(`${API_BASE_URL}/games/ids/${concatIds}`, {
				method: 'GET'
			})
			.then(res => res.json())
			.then(res => {
				const watchlistObject = res.body;
				console.log(watchlistObject)
				const relatedArray = watchlistObject.splice((watchlistObject.length-5), 5);
				console.log(relatedArray);
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
		return(
			<main>
				<header className="dashboard-header row">
					<div className="profile col-3 clear-float white">
						<canvas width="100" height="100" data-jdenticon-value={currentUser.username}>{currentUser.username}</canvas>
						<h2 className="">Hello, {auth.currentUser.username}</h2>
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