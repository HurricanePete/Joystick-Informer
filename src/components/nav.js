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
		const {signedIn, currentUserId, users} = this.props;
		const currentUser = users.filter(user => user.userId === currentUserId);
		if(signedIn) {
			return(
				<nav className="">
					<div className="link home" title="Home"><Link to="/">Home</Link></div>
					<div className="link avatar" title={currentUser[0].username}>
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
		currentUserId: state.joystick.currentUser,
		users: state.joystick.users
	}
}

export default connect(mapStateToProps)(NavigationBar)