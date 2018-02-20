import React from 'react';
import {connect} from 'react-redux';

import Banner from './banner';
import SearchBar from './searchBar';
import ResultsDisplay from './resultsDisplay';

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
		const {loggedIn, joystick} = this.props;
		if (!joystick.banner || loggedIn) {
			return(
				<main>
					<SearchBar searchSubmit={(values) => this.handleSearch(values)}  />
					<ResultsDisplay displayValues={joystick.searchResults} />
				</main>
			)
		}
		
		return(
			<main className="">
				<Banner toggleBanner={() => this.hideBanner()} sendToDashboard={() => this.sendToDashboard()} />
			</main>
			)
	}
}

const mapStateToProps = state => {
	return {
		loggedIn: state.auth.currentUser !== null,
		joystick: state.joystick
	}
}

export default connect(mapStateToProps)(SearchPage)