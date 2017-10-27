import React from 'react';
import {Field, reduxForm} from 'redux-form';

import {AddUser} from '../actions';

import formInput from './formInput';
import {required, nonEmpty, email} from '../validators';

import "./signUpForm.css";

export class SignupForm extends React.Component {
	onSubmit(values) {
		console.log(values);
	}
	render() {
		return(
			<div className="form-wrapper">
				<form className="signup-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<Field name="email" label="Email" type="email" placeholder="you@example.com" component={formInput} validate={[required, nonEmpty, email]}/>
					<Field name="username" label="Username" type="text" placeholder="Pick a username" component={formInput} validate={[required, nonEmpty]} />
					<Field name="password" label="Password" type="text" placeholder="Create a password" component={formInput} validate={[required, nonEmpty]} />
					<button className="submit-button" type="submit" disabled={this.props.pristine || this.props.submitting}>Sign Up</button>
				</form>
			</div>
		)
	}
}

SignupForm = reduxForm({
	form: 'signup'
})(SignupForm)

export default SignupForm