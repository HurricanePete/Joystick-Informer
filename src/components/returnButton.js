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
			<span className="bread-crumbs db b f4" onClick={e => this.goBack(e)}><i className="fas fa-caret-left"></i> <i className="fas fa-caret-left"></i> Back</span>
		)
	}
}

export default connect()(ReturnButton)