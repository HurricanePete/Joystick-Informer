import React from 'react';
import {connect} from 'react-redux';

import Banner from './banner';
import SearchBar from './searchBar';
import ResultsDisplay from './resultsDisplay';

import {bannerToggle} from '../actions';

export class SearchPage extends React.Component {
	hideBanner() {
		this.props.dispatch(bannerToggle());
	}

	render() {
//declare variables
		if (!this.props.banner || this.props.signedIn) {
			return(
				<main>
					<SearchBar />
					<ResultsDisplay />
				</main>
			)
		}
		
		return(
			<Banner toggleBanner={() => this.hideBanner()} />
			)
	}
}

const mapStateToProps = state => {
	return {
		banner: state.joystick.banner,
		signedIn: state.joystick.user.signedIn
	}
}

export default connect(mapStateToProps)(SearchPage)