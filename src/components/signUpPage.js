import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';


import SignUpForm from './signUpForm';

export class SignUpPage extends React.Component {
	sendToDashboard(values) {
		this.props.history.push("/dashboard");
	}

	render() {
		if(this.props.loggedIn) {
			<Redirect to="/dashboard" />;
		}
		return(
			<section className="login-wrapper">
				<header>
					<h2>Create a Joystick Informer account</h2>
				</header>
				<SignUpForm sendToDashboard={(values) => this.sendToDashboard(values)} />
				<div>
					<p>Already have an account? <Link to="/login">Log in here.</Link></p>
				</div>
			</section>
		)
	}
}

const mapStateToProps = state => {
	return{
		loggedIn: state.auth.currentUser !== null
	}
}

export default connect(mapStateToProps)(SignUpPage)