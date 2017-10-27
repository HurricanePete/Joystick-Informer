import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './nav.css';

import avatar from './static-photos/avatar.jpeg';

export class NavigationBar extends React.Component {
	render() {
		if(this.props.signedIn) {
			return(
				<nav className="">
					<div className="link home" title="Home"><Link to="/">Home</Link></div>
					<div className="link avatar" title={this.props.user}>
						<Link to="/dashboard">
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
		signedIn: state.joystick.user.signedIn,
		user: state.joystick.user.name
	}
}

export default connect(mapStateToProps)(NavigationBar)