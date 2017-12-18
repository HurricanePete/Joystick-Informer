import React from 'react';
import {connect} from 'react-redux';

export class WarningDisplay extends React.Component {

	confirmWarning(event) {
		event.preventDefault();
		if(this.props.confirm)
			this.props.confirm();
	}

	cancelWarning(event) {
		event.preventDefault();
		if(this.props.cancel)
			this.props.cancel();
	}

	render() {
		if(this.props.watchlistWarning.warning) {
			return(
				<section className="z-10 center-overlay">
					<div className="col-8 warning-box bg-gray center pa3 clear-float">
						<p>Are you sure you want to remove this title from your watchlist?</p>
						<div className="tc">
							<button className="bg-light-green" onClick={e => this.confirmWarning(e)}>Confirm</button>
							<button className="bg-light-red" onClick={e => this.cancelWarning(e)}>Cancel</button>
						</div>
					</div>
				</section>
			);
		}
		else {
			return null
		}
	}
		
}

const mapStateToProps = state => {
	return {
		watchlistWarning: state.joystick.watchlistWarning
	}
};

export default connect(mapStateToProps)(WarningDisplay);