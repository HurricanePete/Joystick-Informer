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
					<Link to="/"><div className="link home" title="Home">Home</div></Link>
					<Link to="/dashboard">
						<div className="link avatar" title={this.props.user}>
							<img className="avatar" src={avatar} alt="avatar" />
							<h3>{this.props.user}</h3>
						</div>
					</Link>
				</nav>
			)
		}

		return (
				<nav className="">
					<Link to="/"><div className="link home" title="Home">Home</div></Link>
					<Link to="/login"><div className="link login" title="Sign in">Sign in</div></Link>
				</nav>
		);
	}
}

const mapStateToProps = state => {
	return {
		signedIn: state.joystick.signedIn,
		user: state.joystick.user.name
	}
}

export default connect(mapStateToProps)(NavigationBar)