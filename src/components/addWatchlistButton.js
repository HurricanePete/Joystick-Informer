import React from 'react';
import {connect} from 'react-redux';

export class AddWatchlistButton extends React.Component {
	render() {
		const {user} = this.props;
		if(!user.signedIn) {
			return(
				<button></button>
			)
		}
		else if() {
			return(
				
		)
		}
		return(
			<button></button>
		)
	}
}

const mapStateToProps = state => {
	return{
		user: state.joystick.user
	}
}