import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Watchlist from './watchlist';
import RelatedGames from './relatedGames';
import WarningDisplay from './warningDisplay';

import {setWatchlistWarning, resetWatchlistWarning} from '../actions/joystick';
import {loadingToggle, removeFromWatchlist, sendUpdatedWatchlist, signOut} from '../actions/auth';

import {normalizeResponseErrors} from '../actions/utils';
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
		if(nextProps.currentWatchlist !== this.props.currentWatchlist) {
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
		this.props.history.push("/");
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
		const {auth, loggedIn} = this.props;
		const {watchlistGames, relatedGames, error} = this.state;
		if(!loggedIn) {
			return <Redirect to="/" />;
		}
		return(
			<main>
				<section className="dashboard-wrapper 0-90">
					<header className="dashboard-header">
						<div className="profile">
							<img className="profile-pic" src={avatar} alt={auth.currentUser.username} />
							<h2 className="">Hello, {auth.currentUser.username}</h2>
						</div>
						<button className="sign-out" onClick={e => this.signOut(e)}>Sign out</button>
					</header>
					<h3>Your Watchlist</h3>
					<hr/>
					<WarningDisplay confirm={() => this.confirmWatchlistRemove()} cancel={() => this.cancelWatchlistWarning()} />
					<Watchlist watchlistGames={watchlistGames} watchlistWarning={(gameId) => this.watchlistWarning(gameId)} />
					<h3>Recommended for You</h3>
					<hr/>
					<RelatedGames relatedGames={relatedGames} />
				</section>
			</main>
		)
	}
}

const mapStateToProps = state => {
	return{
		auth: state.auth,
		loggedIn: state.auth.currentUser !== null,
		warning: state.joystick.watchlistWarning,
		currentWatchlist: state.auth.currentWatchlist
	}
}

export default connect(mapStateToProps)(Dashboard)