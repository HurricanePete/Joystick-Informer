import React from 'react';
import {connect} from 'react-redux';


export class ReturnButton extends React.Component {
	goBack(event) {
		event.preventDefault();
		if(this.props.goBack) {
			this.props.goBack();
		}
	}

	render() {
		return(
			<button className="return" onClick={e => this.goBack(e)}>Return</button>
		)
	}
}

export default connect()(ReturnButton)