import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import LoginForm from './loginForm';

import {signIn} from '../actions';

export class LoginPage extends React.Component {
	toggleSignIn() {
		this.props.dispatch(signIn());
	}

	render() {
		return(
			<section className="login-wrapper">
				<header>
					<h2>Log in to Joystick Informer</h2>
				</header>
				<LoginForm signIn={() => this.toggleSignIn()} initialValues={
					{username: this.props.username,
					password: this.props.password}
				} />
				<div>
					<p>Want an account? <Link to="/">Create one here.</Link></p>
				</div>
			</section>
		)
	}
}

const mapStateToProps = state => {
	return{
		username: state.joystick.user.name,
		password: state.joystick.user.password
	}
}

export default connect(mapStateToProps)(LoginPage)