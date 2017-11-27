import React from 'react';
import {Field, reduxForm} from 'redux-form';

import {login} from '../actions/auth';

import './styles/loginForm.css';

export class LoginForm extends React.Component {
	onSubmit(values) {
		return this.props.dispatch(login(values.username, values.password))
			.then(this.props.signIn())
			.catch(err => alert(err))
	}

	render() {
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