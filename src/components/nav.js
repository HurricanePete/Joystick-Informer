import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './styles/nav.css';

import avatar from './static-photos/avatar.jpeg';

export class NavigationBar extends React.Component {
	render() {
		const {loggedIn, currentUser} = this.props;
		if(loggedIn) {
			return(
				<nav className="">
					<div className="link home" title="Home"><Link to="/">Home</Link></div>
					<div className="link avatar" title={currentUser.username}>
						<Link to={'/dashboard'}>
							<img className="avatar" src={avatar} alt="avatar" />
						</Link>
					</div>
				</nav>
			)
		}

		return (
				<nav className="">
					<div className="link home" title="Home"><Link to="/">Home</Link></div>
					<div className="link login" title="Sign in"><Link to="/login">Sign in</Link></div>
				</nav>
		);
	}
}

const mapStateToProps = state => {
	return {
		loggedIn: state.auth.currentUser !== null,
		currentUser: state.auth.currentUser
	}
}

export default connect(mapStateToProps)(NavigationBar)