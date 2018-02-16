import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './loginForm';

import './styles/loginPage.css';

export class LoginPage extends React.Component {
	render() {
		if(this.props.loggedIn) {
			return <Redirect to="/dashboard" />
		}
		return(
			<main>
				<section className="login-wrapper">
						<article className="form-article clear-float">	
								<header>
									<h2>Log in to Joystick Informer</h2>
								</header>
								<LoginForm />
								<hr className="w-100" />
								<div className="login-signup clear-float">
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