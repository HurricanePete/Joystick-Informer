import React from 'react';

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