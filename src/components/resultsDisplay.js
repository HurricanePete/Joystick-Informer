import React from 'react';

import Tile from './tile';

import './styles/resultsDisplay.css';

export default class ResultsDisplay extends React.Component {
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
						<h4 className="tl">Sorry, no results matched your search</h4>
					</div>
				</section>
			);
		}
		else {
			return(
				<section className="results-wrapper">
					<div className="results-display row pb5">
						{tiles}
					</div>
				</section>
			);
		}
	}
};