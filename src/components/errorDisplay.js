import React from 'react';
import {connect} from 'react-redux';

export class ErrorDisplay extends React.Component {
	render() {
		const {watchlistError, errorMessage} = this.props;
		if(watchlistError) {
			return(
				<section className="error-wrapper">
					<div className="error">
						<p>{errorMessage}</p>
					</div>
				</section>
			)
		}
		else {
			return(
				<section></section>
			)
		}
	}
}

const mapStateToProps = state => {
	return{
		errors: state.joystick.errors
	}
}

export default connect(mapStateToProps)(ErrorDisplay)