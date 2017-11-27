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
		const {joystick} = this.props;
		const userCheck = () => {
			if(joystick.currentUser === null) {
				return null;
			}
			else{
				const currentUser = joystick.users.filter(user => user.userId === joystick.currentUser);
				return currentUser[0].username;
			}
		}
		if(!joystick.signedIn) {
			return <Redirect to="/signup" />;
		}
		return(
			<section className="dashboard-wrapper">
				<header className="dashboard-header">
					<div className="profile">
						<img className="profile-pic" src={avatar} alt={userCheck()} />
						<h2 className="">Hello, {userCheck()}</h2>
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
		warning: state.joystick.watchlistWarning
	}
}

export default connect(mapStateToProps)(Dashboard)