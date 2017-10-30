import React, {Component} from 'react';
import {connect} from 'react-redux';

import Tile from './tile';
import ErrorDisplay from './errorDisplay';

import './styles/resultsDisplay.css';

class ResultsDisplay extends Component {

	render() {
		if(!this.props.displayValues) {
			return null
		}
		const tiles = this.props.displayValues.map((tile, index) => 
			<Tile key={index} index={index} dashboard={false} {...tile} />)
		const resultCount = tiles.length;
		if(resultCount === 0) {
			return(
				<section className="results-wrapper">
					<ErrorDisplay />
					<div className="results-display">
						<h4 className="tl pl6">Sorry, no results matched your search</h4>
					</div>
				</section>
			)
		}
		else if(resultCount === 1) {
			return(
				<section className="results-wrapper">
					<ErrorDisplay />
					<div className="results-display">
						<h4 className="tl pl6">Only {resultCount} result found</h4>
						{tiles}
					</div>
				</section>
			)
		}
		else {
			return(
				<section className="results-wrapper">
					<ErrorDisplay />
					<div className="results-display">
						<h4 className="tl pl6">{resultCount} results found</h4>
						{tiles}
					</div>
				</section>
			)
		}
	}
}

const mapStateToProps = state => {
	return {
		examples: state.joystick.examples
	}
};

export default connect(mapStateToProps)(ResultsDisplay);