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
		const {watchlistWarning} = this.props;
		if(watchlistWarning.warning && (watchlistWarning.gameId === undefined)) {
			return(
				<section className="z-10 center-overlay bg-light-gray">
					<div className="bg-gray center pa1">
						<p>Already in your watchlist</p>
						<button className="bg-white" onClick={e => this.cancelWarning(e)}>Ok</button>
					</div>
				</section>
			)
		}
		else if(watchlistWarning.warning) {
			return(
				<section className="z-10 center-overlay bg-light-gray">
					<div className="bg-gray center pa1">
						<p>Are you sure you want to remove this title from your watchlist?</p>
						<button className="bg-light-green green" onClick={e => this.confirmWarning(e)}>Confirm</button>
						<button className="bg-light-red red" onClick={e => this.cancelWarning(e)}>Cancel</button>
					</div>
				</section>
			)
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
}

export default connect(mapStateToProps)(WarningDisplay)