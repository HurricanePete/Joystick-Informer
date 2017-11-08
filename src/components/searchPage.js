import React from 'react';
import {connect} from 'react-redux';

import Banner from './banner';
import SearchBar from './searchBar';
import ResultsDisplay from './resultsDisplay';
import FeaturedGames from './featuredGames';

import {bannerToggle, setSearchResults, sendToDashboard} from '../actions';

export class SearchPage extends React.Component {
	hideBanner() {
		this.props.dispatch(bannerToggle());
	}

	handleSearch(values) {
		const slugify = string => string.toLowerCase();
		const display = this.props.joystick.examples.filter(game => (slugify(game.title)).includes(values));
		this.props.dispatch(setSearchResults(display));
	}

	sendToDashboard() {
		this.props.history.push("/login");
		this.props.dispatch(sendToDashboard(true));
	}

	render() {
		const {joystick} = this.props;
		const exampleIds = [2, 4, 6];
		const randomGames = exampleIds.map(id => joystick.examples.find(example => example.gameId === id));
		if (!joystick.banner || joystick.signedIn) {
			return(
				<main>
					<SearchBar searchSubmit={(values) => this.handleSearch(values)}  />
					<ResultsDisplay displayValues={joystick.searchResults} />
					<FeaturedGames featured={randomGames} />
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
		joystick: state.joystick
	}
}

export default connect(mapStateToProps)(SearchPage)