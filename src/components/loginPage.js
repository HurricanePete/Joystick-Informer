import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import LoginForm from './loginForm';

import {signIn, setCurrentUser, sendToDashboard, bannerToggle} from '../actions';


export class LoginPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {error: null}
	}

	sendToDashboard() {
		this.props.history.push("/dashboard")
	}

	render() {
		const {error} = this.state;
		if(error) {
			return(
				<section className="login-wrapper">
					<header>
						<h2>Log in to Joystick Informer</h2>
					</header>
					<div className="bg-washed-red ma2"><p className="dark-red">{error}</p></div>
					<LoginForm signIn={() => this.sendToDashboard()} />
					<div>
						<p>Want an account? <Link to="/signup">Create one here.</Link></p>
					</div>
				</section>
			)
		}
		return(
			<section className="login-wrapper">
				<header>
					<h2>Log in to Joystick Informer</h2>
				</header>
				<LoginForm signIn={(values) => this.sendToDashboard()} />
				<div>
					<p>Want an account? <Link to="/signup">Create one here.</Link></p>
				</div>
			</section>
		)
	}
}

export default connect()(LoginPage)