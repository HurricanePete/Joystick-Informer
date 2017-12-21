import React, {Component} from 'react';
import {connect} from 'react-redux';

import Tile from './tile';

import './styles/resultsDisplay.css';

export class ResultsDisplay extends React.Component {

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
					<div className="results-display row pb5">
						<h4 className="tl pl6">Sorry, no results matched your search</h4>
					</div>
				</section>
			);
		}
		else {
			return(
				<section className="results-wrapper">
					<div className="results-display row pb5">
						<h4 className="tl pl6">{resultCount === 1 ? `Only ${resultCount} result found` : `${resultCount} results found`}</h4>
						{tiles}
					</div>
				</section>
			);
		}
	}
}

export default connect()(ResultsDisplay);