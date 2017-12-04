import React from 'react';
import {Field, reduxForm} from 'redux-form';

import {login} from '../actions/auth';
import {bannerToggle} from '../actions/joystick';

import './styles/loginForm.css';

export class LoginForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {error: null}
	}

	onSubmit(values) {
		return this.props.dispatch(login(values.username, values.password))
			.then(() => this.props.dispatch(bannerToggle()))
			.catch(err => this.setState({error: err.errors._error}))
	}

	render() {
		const {error} = this.state;
		if(error) {
			return(
				<div className="form-wrapper">
					<div className="bg-washed-red ma2"><p className="dark-red">{error}</p></div>
					<form className="login-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
						<label htmlFor="username">Username</label>
						<Field name="username" id="username" type="text" component="input" />
						<label htmlFor="password">Password</label>
						<Field name="password" id="password" type="password" component="input" />
						<button className="submit-button" type="submit" disabled={this.props.submitting}>Log in</button>
					</form>
				</div>
			)
		}

		return(
			<div className="form-wrapper">
				<form className="login-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<label htmlFor="username">Username</label>
					<Field name="username" id="username" type="text" component="input" />
					<label htmlFor="password">Password</label>
					<Field name="password" id="password" type="password" component="input" />
					<button className="submit-button" type="submit" disabled={this.props.submitting}>Log in</button>
				</form>
			</div>
		)
	}
}

LoginForm = reduxForm({
	form: 'login'
})(LoginForm)

export default LoginForm