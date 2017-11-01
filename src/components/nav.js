import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {sendToDashboard} from '../actions';

import './styles/nav.css';

import avatar from './static-photos/avatar.jpeg';

export class NavigationBar extends React.Component {
	resetSendToDashboard() {
		this.props.dispatch(sendToDashboard(false));
	}

	render() {
		const {signedIn, user} = this.props;
		if(signedIn) {
			return(
				<nav className="">
					<div className="link home" title="Home"><Link to="/">Home</Link></div>
					<div className="link avatar" title={user.name}>
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
					<div className="link login" title="Sign in"><Link to="/login" onClick={() => this.resetSendToDashboard()}>Sign in</Link></div>
				</nav>
		);
	}
}

const mapStateToProps = state => {
	return {
		signedIn: state.joystick.signedIn,
		user: state.joystick.user
	}
}

export default connect(mapStateToProps)(NavigationBar)