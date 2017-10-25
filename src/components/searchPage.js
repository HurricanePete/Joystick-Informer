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
		if (this.props.banner === true) {
			return(
				<Banner toggleBanner={() => this.hideBanner()} />
			)
		}
		return(
			<main>
				<SearchBar />
				<ResultsDisplay />
			</main>
		)
	}
}

const mapStateToProps = state => {
	return {
		banner: state.joystick.banner
	}
}

export default connect(mapStateToProps)(SearchPage)