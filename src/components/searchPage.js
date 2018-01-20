import React from 'react';
import {connect} from 'react-redux';

import SearchBar from './searchBar';
import ResultsDisplay from './resultsDisplay';
import Onboarding from './onboarding';

import {bannerToggle, searchAllGames} from '../actions/joystick';

export class SearchPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null
		}
	}
	hideBanner() {
		this.props.dispatch(bannerToggle());
	}

	handleSearch(values) {
		this.props.dispatch(searchAllGames(values))
	}

	sendToDashboard() {
		this.props.history.push("/login");
	}

	render() {
		const {joystick} = this.props;
		return(
			<main className="">
				<SearchBar searchSubmit={(values) => this.handleSearch(values)}  />
				<ResultsDisplay displayValues={joystick.searchResults} />
				<Onboarding />
			</main>
		)
	}
}

const mapStateToProps = state => {
	return {
		joystick: state.joystick
	}
}

export default connect(mapStateToProps)(SearchPage)