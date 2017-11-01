import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {sendToDashboard} from '../actions';

import SignUpForm from './signUpForm';

export class SignUpPage extends React.Component {
	sendToDashboard(values) {
		this.props.history.push("/login");
		this.props.dispatch(sendToDashboard(true));
	}

	render() {
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
		registeredUsers: state.joystick.registeredUsers
	}
}

export default connect(mapStateToProps)(SignUpPage)