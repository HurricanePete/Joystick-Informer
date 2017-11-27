import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Watchlist from './watchlist';
import RelatedGames from './relatedGames';
import WarningDisplay from './warningDisplay';

import {signOut, removeFromWatchlist, setWatchlistWarning, resetWatchlistWarning} from '../actions';

import avatar from './static-photos/avatar.jpeg';
import './styles/dashboard.css';

export class Dashboard extends React.Component {
	componentWillMount() {
		if(!this.props.loggedIn) {
			return;	
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
		this.props.dispatch(resetWatchlistWarning());
	}

	cancelWatchlistWarning() {
		this.props.dispatch(resetWatchlistWarning());
	}

	render() {
		const {joystick, loggedIn} = this.props;
		if(!loggedIn) {
			return <Redirect to="/" />;
		}
		return(
			<section className="dashboard-wrapper">
				<header className="dashboard-header">
					<div className="profile">
						<img className="profile-pic" src={avatar} alt={joystick.currentUser} />
						<h2 className="">Hello, {joystick.currentUser}</h2>
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
		joystick: state.joystick,
		loggedIn: state.joystick.currentUser !== null,
		warning: state.joystick.watchlistWarning
	}
}

export default connect(mapStateToProps)(Dashboard)