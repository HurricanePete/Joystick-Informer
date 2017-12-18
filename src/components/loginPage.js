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
			<main>
				<section className="login-wrapper">
						<article className="form-article col-6 clear-float">	
								<header>
									<h2 className="white">Log in to Joystick Informer</h2>
								</header>
								<LoginForm />
								<div className="login-signup col-6 clear-float">
									<p className="f4 bg-white">Want an account? <Link to="/signup">Create one here.</Link></p>
								</div>
						</article>
				</section>
			</main>
		)
	}
}

const mapStateToProps = state => {
	return {
		loggedIn: state.auth.currentUser !== null
	}
}

export default connect(mapStateToProps)(LoginPage)