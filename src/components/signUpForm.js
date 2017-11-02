import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

import formInput from './formInput';
import {required, nonEmpty, email, noSpaces} from '../validators';

import {createNewUser} from '../actions';

import './styles/signUpForm.css';

export class SignupForm extends React.Component {
	onSubmit(values) {
		const slugify = (input) => input.toLowerCase();
		const existingName = this.props.users.filter(item => slugify(item.username) === slugify(values.username));
		if(existingName.length > 0) {
			alert('Username already exists, please try another.');
			return null;
		}
		this.props.dispatch(createNewUser(values));
		if(this.props.sendToDashboard) {
			this.props.sendToDashboard(values)
		}
	}

	render() {
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

const mapStateToProps = state => {
	return{
		users: state.joystick.users
	}
}

export default connect(mapStateToProps)(SignupForm)