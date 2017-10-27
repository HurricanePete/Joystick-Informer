import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Watchlist from './watchlist';
import RelatedGames from './relatedGames';

import {signOut} from '../actions';

import avatar from './static-photos/avatar.jpeg';
import './dashboard.css';

export class Dashboard extends React.Component {
	signOut(event) {
		this.props.dispatch(signOut());
	}

	render() {
		return(
			<section className="dashboard-wrapper">
				<header className="dashboard-header">
					<div className="profile">
						<img className="profile-pic" src={avatar} alt={this.props.user} />
						<h2 className="">Hello, {this.props.user}</h2>
					</div>
					<button className="sign-out" onClick={e => this.signOut(e)}><Link to="/">Sign out</Link></button>
				</header>
				<h3>Your Watchlist</h3>
				<hr/>
				<Watchlist />
				<h3>Recommended for You</h3>
				<hr/>
				<RelatedGames />
			</section>
		)
	}
}

const mapStateToProps = state => {
	return{
		user: state.joystick.user.name
	}
}

export default connect(mapStateToProps)(Dashboard)