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
			<main>
				<section className="login-wrapper">
						<article className="form-article col-6 clear-float">
							<header>
								<h2 className="white">Create a Joystick Informer account</h2>
							</header>
							<SignUpForm banner={false} />
							<div className="login-signup col-6 clear-float">
								<p className="f4 bg-white">Already have an account? <Link to="/login">Log in here.</Link></p>
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
};

export default connect(mapStateToProps)(SignUpPage);