import React from 'react';
import {Link} from 'react-router-dom';

export default class ReturnButton extends React.Component {
	onClick(event) {
		event.preventDefault();
		this.props.history.push(`/${this.props.path}`);
	}

	render() {
		return(
			<button onClick={e => this.onClick(e)} >Return</button>
		)
}
}