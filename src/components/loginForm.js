import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

import './loginForm.css';

export class LoginForm extends React.Component {
	onSubmit(values) {
		console.log(values);

	}

	signIn(event) {
		event.preventDefault();
		if (this.props.signIn) {
			this.props.signIn();
		}
	}

	render() {
		return(
			<div className="form-wrapper">
				<form className="login-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<label htmlFor="username">Username</label>
					<Field name="username" id="username" type="text" component="input" />
					<label htmlFor="password">Password</label>
					<Field name="password" id="password" type="text" component="input" />
					<button className="submit-button" type="submit" onClick={e => this.signIn(e)} disabled={this.props.submitting}><Link to="/dashboard">Log in</Link></button>
				</form>
			</div>
		)
	}
}

LoginForm = reduxForm({
	form: 'login'
})(LoginForm)

export default LoginForm