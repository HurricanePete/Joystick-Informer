import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

import formInput from './formInput';
import {required, nonEmpty, email, noSpaces, lengthy} from '../validators';

import {registerUser} from '../actions/users';
import {login} from '../actions/auth';

import './styles/signUpForm.css';

export class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {error: null}
	}


	onSubmit(values) {
		const {username, password, email} = values;
		return this.props
			.dispatch(registerUser(values))
			.then(() => this.props.dispatch(login(username, password)))
			.then(this.props.sendToDashboard())
			.catch(err => alert(err))

	}

	render() {
		const {error} = this.state
		if(error) {
			return(
				<div className="form-wrapper">
				<div className="bg-washed-red ma2"><p className="dark-red">{error}</p></div>
					<form className="signup-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
						<Field name="email" label="Email" type="email" placeholder="you@example.com" component={formInput} validate={[required, nonEmpty, email]}/>
						<Field name="username" label="Username" type="text" placeholder="Pick a username" component={formInput} validate={[required, nonEmpty, noSpaces]} />
						<Field name="password" label="Password" type="password" placeholder="Create a password" component={formInput} validate={[required, nonEmpty, lengthy({min:10, max:72})]} />
						<button className="submit-button" type="submit" disabled={this.props.pristine || this.props.submitting}>Sign Up</button>
					</form>
				</div>
			)
		}
		return(
			<div className="form-wrapper">
				<form className="signup-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<Field name="email" label="Email" type="email" placeholder="you@example.com" component={formInput} validate={[required, nonEmpty, email]}/>
					<Field name="username" label="Username" type="text" placeholder="Pick a username" component={formInput} validate={[required, nonEmpty, noSpaces]} />
					<Field name="password" label="Password" type="password" placeholder="Create a password" component={formInput} validate={[required, nonEmpty]} />
					<button className="submit-button" type="submit" disabled={this.props.pristine || this.props.submitting}>Sign Up</button>
				</form>
			</div>
		)
	}
}

SignupForm = reduxForm({
	form: 'signup'
})(SignupForm)

export default connect()(SignupForm)