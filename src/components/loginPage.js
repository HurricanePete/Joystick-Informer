import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import LoginForm from './loginForm';

import {signIn} from '../actions';

export class LoginPage extends React.Component {
	toggleSignIn() {
		this.props.dispatch(signIn());
		this.props.history.push("/dashboard");
	}

	render() {
		const {user} = this.props;
		return(
			<section className="login-wrapper">
				<header>
					<h2>Log in to Joystick Informer</h2>
				</header>
				<LoginForm signIn={() => this.toggleSignIn()} initialValues={
					{username: user.name,
					password: user.password}
				} />
				<div>
					<p>Want an account? <Link to="/signup">Create one here.</Link></p>
				</div>
			</section>
		)
	}
}

const mapStateToProps = state => {
	return{
		user: state.joystick.user
	}
}

export default connect(mapStateToProps)(LoginPage)