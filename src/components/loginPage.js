import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './loginForm';

export class LoginPage extends React.Component {
	render() {
		if(this.props.loggedIn) {
			return <Redirect to="/dashboard" />
		}
		return(
			<section className="login-wrapper">
				<div className="row">
					<header>
						<h2>Log in to Joystick Informer</h2>
					</header>
					<LoginForm />
					<div className="login-signup col-6 clear-float">
						<p className="f4">Want an account? <Link to="/signup">Create one here.</Link></p>
					</div>
				</div>
			</section>
		)
	}
}

const mapStateToProps = state => {
	return {
		loggedIn: state.auth.currentUser !== null
	}
}

export default connect(mapStateToProps)(LoginPage)