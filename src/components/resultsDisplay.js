import React, {Component} from 'react';
import {connect} from 'react-redux';

import Tile from './tile';

import './resultsDisplay.css';

class ResultsDisplay extends Component {

	render() {
		const {examples} = this.props;
		const tiles = examples.map((tile, index) => 
			<Tile key={index} index={index} dashboard={false} {...tile} />)

		return(
			<section className="results-wrapper">
				<div className="results-display">
					{tiles}
				</div>
			</section>
		)
	}
}

const mapStateToProps = state => {
	return {
		examples: state.joystick.examples
	}
};

export default connect(mapStateToProps)(ResultsDisplay);