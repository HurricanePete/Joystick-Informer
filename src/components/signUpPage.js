import React from 'react';
import {Link} from 'react-router-dom';

import SignUpForm from './signUpForm';

export default class SignUpPage extends React.Component {
	render() {
		return(
			<section className="login-wrapper">
				<header>
					<h2>Create a Joystick Informer account</h2>
				</header>
				<SignUpForm />
				<div>
					<p>Already have an account? <Link to="/login">Log in here.</Link></p>
				</div>
			</section>
		)
	}
}