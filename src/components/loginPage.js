import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import LoginForm from './loginForm';

import {signIn, setCurrentUser, sendToDashboard} from '../actions';

export class LoginPage extends React.Component {
	toggleSignIn(values) {
		const slugify = (input) => input.toLowerCase();
		const userCheck = this.props.users.filter(item => slugify(item.username) === slugify(values.username));
		if(userCheck.length > 0 && values.password === userCheck[0].password) {
			this.props.dispatch(setCurrentUser(userCheck[0].userId));
			this.props.dispatch(signIn());
			this.props.history.push("/dashboard");
		}
		else if(userCheck.length > 0 && values.password !== userCheck[0].password) {
			alert("Username or password was incorrect");
		}
		else if(userCheck.length === 0) {
			alert("Could not find an account with that username");
		}
		else{
			alert("Something went wrong, please try again.")
		}
		this.props.dispatch(sendToDashboard(false));
		this.props.history.push(`dashboard/${slugify(userCheck[0].username)}`)
	}

	render() {
		const {sendToDashboard} = this.props;
		if(sendToDashboard) {
			return(
				<section className="login-wrapper">
					<header>
						<h2>Log in to Joystick Informer</h2>
					</header>
					<div className="bg-light-green ma2"><p className="green">Account created! Please log in to continue.</p></div>
					<LoginForm signIn={(values) => this.toggleSignIn(values)} />
					<div>
						<p>Want an account? <Link to="/signup">Create one here.</Link></p>
					</div>
				</section>
			)
		}
		return(
			<section className="login-wrapper">
				<header>
					<h2>Log in to Joystick Informer</h2>
				</header>
				<LoginForm signIn={(values) => this.toggleSignIn(values)} initialValues={{
					username: "PotatoBandit",
					password: "PotatoPassword"
				}} />
				<div>
					<p>Want an account? <Link to="/signup">Create one here.</Link></p>
				</div>
			</section>
		)
	}
}

const mapStateToProps = state => {
	return{
		users: state.joystick.users,
		sendToDashboard: state.joystick.sendToDashboard
	}
}

export default connect(mapStateToProps)(LoginPage)