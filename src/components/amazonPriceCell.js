import React from 'react';

import AmazonLogo from './static-photos/amazon-logo-icon.png';

export default class amazonPriceCell extends React.Component {
	render() {
		const pricing = this.props.pricing;
		console.log(pricing)
		if(Object.keys(this.props).length === 0) {
			return(
				<li>
					<div className="gray">
						<table className="w-100">
							<tbody>
								<tr>
									<td className="w-third"><a href="{this.props.url}"><img className="amazon-logo logo" src={AmazonLogo} alt="Amazon logo" /></a></td>
									<td><p>Pricing unavailable from this seller</p></td>
								</tr>
							</tbody>
						</table>
					</div>
				</li>
			);
		}
		else {
			let amazonPrice;
			if(pricing.LowestUsedPrice === undefined) {
				amazonPrice = pricing.LowestNewPrice.FormattedPrice;
			}
			else {
				const lowUsedInt = parseInt(pricing.LowestUsedPrice.amount, 10);
				const lowNewInt = parseInt(pricing.LowestNewPrice.amount, 10);
				amazonPrice = lowNewInt >= lowUsedInt ? pricing.LowestUsedPrice.FormattedPrice : pricing.LowestNewPrice.FormattedPrice;		
			}
			return(
				<li>
					<div>
						<table className="w-100">
							<tbody>
								<tr>
									<td className="w-third"><a href={this.props.url} target="_blank"><img className="amazon-logo logo" src={AmazonLogo} alt="Amazon logo" /></a></td>
									<td className="w-third"><p className="pricing">{amazonPrice}</p></td>
									<td className="w-third"><a href={this.props.url} target="_blank"><button className="show-me">Show me</button></a></td>
								</tr>
							</tbody>
						</table>
					</div>
				</li>
			);
		}
	}
}