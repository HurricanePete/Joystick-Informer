import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Watchlist from './watchlist';
import RelatedGames from './relatedGames';
import WarningDisplay from './warningDisplay';

import {setWatchlistWarning, resetWatchlistWarning} from '../actions/joystick';
import {retrieveWatchlist, loadingToggle, removeFromWatchlist, signOut} from '../actions/auth';

import avatar from './static-photos/avatar.jpeg';
import './styles/dashboard.css';

export class Dashboard extends React.Component {
	componentWillMount() {
		if(!this.props.loggedIn) {
			return;	
		}
		this.props.dispatch(loadingToggle())
		return this.props.dispatch(retrieveWatchlist())
			.then(() => this.props.dispatch(loadingToggle()))
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
		this.props.dispatch(resetWatchlistWarning());
	}

	cancelWatchlistWarning() {
		this.props.dispatch(resetWatchlistWarning());
	}

	render() {
		const {auth, loggedIn} = this.props;
		if(!loggedIn) {
			return <Redirect to="/" />;
		}
		return(
			<section className="dashboard-wrapper">
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
				<Watchlist watchlistWarning={(gameId) => this.watchlistWarning(gameId)} />
				<h3>Recommended for You</h3>
				<hr/>
				<RelatedGames />
			</section>
		)
	}
}

const mapStateToProps = state => {
	return{
		auth: state.auth,
		loggedIn: state.auth.currentUser !== null,
		warning: state.joystick.watchlistWarning
	}
}

export default connect(mapStateToProps)(Dashboard)