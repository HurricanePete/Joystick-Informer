import React from 'react';
import {connect} from 'react-redux';

import Banner from './banner';
import SearchBar from './searchBar';
import ResultsDisplay from './resultsDisplay';
import FeaturedGames from './featuredGames';

import {bannerToggle, setSearchResults} from '../actions/joystick';

export class SearchPage extends React.Component {
	hideBanner() {
		this.props.dispatch(bannerToggle());
	}

	handleSearch(values) {
		fetch(`http://localhost:8080/games/${values}`)
			.then(res => {
				if(!res.ok) {
					return Promise.reject(res.statusText);
				}
				return res.json();
			})
			.then(games => {
				this.props.dispatch(setSearchResults(games));
			})
			.catch(err => {
				alert(err);
			})

	}

	sendToDashboard() {
		this.props.history.push("/login");
	}

	render() {
		const {loggedIn, joystick} = this.props;
		const exampleIds = [2, 4, 6];
		if (!joystick.banner || loggedIn) {
			return(
				<main>
					<SearchBar searchSubmit={(values) => this.handleSearch(values)}  />
					<ResultsDisplay displayValues={joystick.searchResults} />
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