import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Identicon from 'identicon.js';

import './styles/nav.css';

import avatar from './static-photos/avatar.jpeg';

export class NavigationBar extends React.Component {


	render() {
		const {loggedIn, currentUser} = this.props;
		if(loggedIn) {
			const string = currentUser.username;
			let hex = [];
			for(let i=0; i<string.length; i++) {
				let hexy = string[i].charCodeAt(0);
				hexy = parseInt(hexy, 16);
				hex.push(hexy);
			}
			hex = hex.join("");
			const data = new Identicon(hex, 32).toString();
			return(
				<nav className="col-12">
					<div className="link home" title="Home"><Link to="/">Home</Link></div>
					<div className="avatar" title={currentUser.username}>
						<Link to={'/dashboard'}>
							<img width={32} height={32} src={`data:image/png;base64, ${data}`}  />
						</Link>
					</div>
				</nav>
			)
		}

		return (
				<nav className="col-12">
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