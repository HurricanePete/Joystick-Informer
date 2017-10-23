import React, {Component} from 'react';
import {connect} from 'react-redux';

import Tile from './tile';

import './resultsDisplay.css';

class ResultsDisplay extends Component {

render() {
	const tiles = this.props.examples.map((tile, index) => <Tile {...tile} />)

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
		examples: state.examples
	}
};

export default connect(mapStateToProps)(ResultsDisplay);