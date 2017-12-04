import React from 'react';
import {connect} from 'react-redux';

import Banner from './banner';
import SearchBar from './searchBar';
import ResultsDisplay from './resultsDisplay';
import FeaturedGames from './featuredGames';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from '../actions/utils';

import {bannerToggle} from '../actions/joystick';

export class SearchPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchResults: null,
			error: null
		}
	}
	hideBanner() {
		this.props.dispatch(bannerToggle());
	}

	handleSearch(values) {
		return fetch(`${API_BASE_URL}/games/search/${values}`, {
			method: 'GET'
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(results => {this.setState({searchResults: results})})
		.catch(err => {this.setState({error: err.errors._error})})
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
					<ResultsDisplay displayValues={this.state.searchResults} />
					<FeaturedGames />
				</main>
			)
		}
		
		return(
			<Banner toggleBanner={() => this.hideBanner()} sendToDashboard={() => this.sendToDashboard()} />
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