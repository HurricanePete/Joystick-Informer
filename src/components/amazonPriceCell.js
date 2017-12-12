import React from 'react';

import AmazonLogo from './static-photos/amazon-logo-icon.png';

export default class amazonPriceCell extends React.Component {
	render() {
		console.log(this.props)
		if(!this.props) {
			return <h2>Loading...</h2>
		}
		else if(Object.keys(this.props).length === 0) {
			return(
				<li>
					<div className="gray">
						<a href="{this.props.url}"><img src={AmazonLogo} alt="Amazon logo" /></a>
						<span>--</span>
						<span>--</span>
						<span>--</span>
						<span>--</span>
					</div>
				</li>
			);
		}
		else if(this.props.pricing.LowestUsedPrice === undefined) {
			return(
				<li>
					<div>
						<a href="{this.props.url}"><img src={AmazonLogo} alt="Amazon logo" /></a>
						<span>{this.props.pricing.LowestNewPrice.FormattedPrice}</span>
					</div>
				</li>
			);
		}
		return(
			<li>
				<div>
					<a href="{this.props.url}"><img src={AmazonLogo} alt="Amazon logo"  /></a>
					<span>{this.props.pricing.LowestNewPrice.FormattedPrice} - {this.props.pricing.LowestUsedPrice.FormattedPrice}</span>
				</div>
			</li>
		);
	}
}