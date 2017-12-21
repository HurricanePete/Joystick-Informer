import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import formInput from './formInput';
import {required, nonEmpty, email, noSpaces} from '../validators';

import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import {bannerToggle} from '../actions/joystick';

import './styles/signUpForm.css';

export class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {error: null}
	}

	onSubmit(values) {
		const {username, password} = values;
		return this.props.dispatch(registerUser(values))
			.then(() => this.props.dispatch(login(username, password)))
			.then(() => this.props.dispatch(bannerToggle()))
			.catch(err => this.setState({error: err.errors._error}))
	}

	render() {
		const {error} = this.state
		return(
			<div className={"form-wrapper mb4 col-6 clear-float " + (this.props.banner === true ? "col-8" : "col-6")}>
				<div className="testing">Testing</div>
				{error !== null ? <div className="error-wrapper bg-washed-red ma2"><p className="dark-red">{error}</p></div> : null}
				<form className="signup-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<Field name="email" label="Email" type="email" placeholder="you@example.com" component={formInput} validate={[required, nonEmpty, email]}/>
					<Field name="username" label="Username" type="text" placeholder="Pick a username" component={formInput} validate={[required, nonEmpty, noSpaces]} />
					<Field name="password" label="Password" type="password" placeholder="Create a password" component={formInput} validate={[required, nonEmpty]} />
					<button className="submit-button js-button" type="submit" disabled={this.props.pristine || this.props.submitting}>Sign Up</button>
				</form>
			</div>
		);
	}
}

SignupForm = reduxForm({
	form: 'signup',
	onSubmitFail: (errors, dispatch) => 
		dispatch(focus('signup', Object.keys(errors)[0]))
})(SignupForm)

export default SignupForm