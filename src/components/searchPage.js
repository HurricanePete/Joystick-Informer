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
		console.log(values);
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
		if (!joystick.banner || joystick.signedIn) {
			return(
				<main>
					<SearchBar searchSubmit={(values) => this.handleSearch(values)}  />
					<ResultsDisplay displayValues={joystick.searchResults} />
					<FeaturedGames featured={joystick.user.relatedGames} />
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