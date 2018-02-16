import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import formInput from './formInput';

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
		return(
			<div className="form-wrapper tc clear-float">
				{error !== null ? <div className="bg-washed-red ma2"><p className="dark-red">{error}</p></div> : null }
				<form className="login-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<Field name="username" placeholder="Username" id="username" type="text" component={formInput} />
					<Field name="password" placeholder="Password" id="password" type="password" component={formInput} />
					<button className="submit-button js-button" type="submit" disabled={this.props.submitting}>Log in</button>
				</form>
			</div>
		)
	}
}

const LoginFormConnected = reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) =>
		dispatch(focus('login', Object.keys(errors)[0]))
})(LoginForm)

export default LoginFormConnected