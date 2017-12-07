import React from 'react';

export default class amazonPriceCell extends React.Component {
	render() {
		console.log(this.props)
		if(!this.props) {
			return <h2>Loading...</h2>
		}
		return(
			<li>
				<div>
					<a href="{this.props.url}"><img src="./static-photos/amazon-logo-icon.png"/></a>
					<span>{this.props.pricing.LowestNewPrice.FormattedPrice} - {this.props.pricing.LowestUsedPrice.FormattedPrice}`</span>
				</div>
			</li>
		);
	}
}