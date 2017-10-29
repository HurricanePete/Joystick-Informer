import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class AddWatchlistButton extends React.Component {
	render() {
		const {user} = this.props;
		let containsGame = user.watchlist.filter((item) => item === this.props.item);
		if (containsGame) {
			console.log('true');
		}
		else if (!containsGame) {
			console.log('false');
		}
		if(!user.signedIn) {
			return(
				<Link to="/login">Sign in to add to watchlist</Link>
			)
		}
		else if((user.signedIn) && (containsGame)) {
			return(
				<p className="green">Already in watchlist</p>
			)
		}
		else {
			return(
				<button>Add to watchlist</button>
			)
		}
	}
}

const mapStateToProps = state => {
	return{
		user: state.joystick.user
	}
}

export default connect(mapStateToProps)(AddWatchlistButton)