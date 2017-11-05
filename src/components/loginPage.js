import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import LoginForm from './loginForm';

import {signIn, setCurrentUser, sendToDashboard, bannerToggle} from '../actions';

export class LoginPage extends React.Component {

	state = {error: null}

	toggleSignIn(values) {
		const slugify = (input) => input.toLowerCase();
		const userCheck = this.props.users.filter(item => slugify(item.username) === slugify(values.username));
		this.props.dispatch(sendToDashboard(false));
		if(userCheck.length > 0 && values.password === userCheck[0].password) {
			this.props.dispatch(setCurrentUser(userCheck[0].userId));
			this.props.dispatch(signIn());
			this.props.dispatch(bannerToggle());
			this.props.history.push(`dashboard/${slugify(userCheck[0].username)}`);
		}
		else if(userCheck.length > 0 && values.password !== userCheck[0].password) {
			this.setState({error: "Username or password was incorrect"});
			return false
		}
		else{
			alert("Something went wrong, please try again.")
		}
	}

	render() {
		const {sendToDashboard} = this.props;
		const {error} = this.state;
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
		else if(error) {
			return(
				<section className="login-wrapper">
					<header>
						<h2>Log in to Joystick Informer</h2>
					</header>
					<div className="bg-washed-red ma2"><p className="dark-red">{error}</p></div>
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