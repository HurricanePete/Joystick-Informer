import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

import formInput from './formInput';
import {required, nonEmpty, email, noSpaces, lengthy} from '../validators';

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
		if(error) {
			return(
				<div className={"form-wrapper mb4 col-6 clear-float " + (this.props.banner === true ? "col-8" : "col-6")}>
					<div className="bg-washed-red ma2"><p className="dark-red">{error}</p></div>
					<form className="signup-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
						<Field name="email" label="Email" type="email" placeholder="you@example.com" component={formInput} validate={[required, nonEmpty, email]}/>
						<Field name="username" label="Username" type="text" placeholder="Pick a username" component={formInput} validate={[required, nonEmpty, noSpaces]} />
						<Field name="password" label="Password" type="password" placeholder="Create a password" component={formInput} validate={[required, nonEmpty, lengthy({min:10, max:72})]} />
						<button className="submit-button js-button" type="submit" disabled={this.props.pristine || this.props.submitting}>Sign Up</button>
					</form>
				</div>
			);
		}
		return(
			<div className={"form-wrapper mb4 col-6 clear-float " + (this.props.banner === true ? "col-8" : "col-6")}>
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
	form: 'signup'
})(SignupForm)

export default connect()(SignupForm)