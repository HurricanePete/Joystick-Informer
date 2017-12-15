import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';


import SignUpForm from './signUpForm';

export class SignUpPage extends React.Component {
	render() {
		if(this.props.loggedIn) {
			return <Redirect to="/dashboard" />
		}
		return(
			<section className="login-wrapper">
				<div className="row">
					<header>
						<h2>Create a Joystick Informer account</h2>
					</header>
					<SignUpForm />
					<div className="login-signup col-6 clear-float">
						<p>Already have an account? <Link to="/login">Log in here.</Link></p>
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

export default connect(mapStateToProps)(SignUpPage)