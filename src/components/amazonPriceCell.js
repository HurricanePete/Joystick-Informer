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
						<table className="w-100">
							<tbody>
								<tr>
									<td><a href="{this.props.url}"><img className="amazon-logo logo" src={AmazonLogo} alt="Amazon logo" /></a></td>
									<td><p>Pricing unavailable from this seller</p></td>
								</tr>
							</tbody>
						</table>
					</div>
				</li>
			);
		}
		else if(this.props.pricing.LowestUsedPrice === undefined) {
			return(
				<li>
					<div>
						<table className="w-100">
							<tbody>
								<tr>
									<td className="w-third"><a href={this.props.url} target="_blank"><img className="amazon-logo logo" src={AmazonLogo} alt="Amazon logo" /></a></td>
									<td className="w-third"><p className="pricing">{this.props.pricing.LowestNewPrice.FormattedPrice}</p></td>
									<td className="w-third"><a href={this.props.url} target="_blank"><button className="show-me">Show me</button></a></td>
								</tr>
							</tbody>
						</table>
					</div>
				</li>
			);
		}
		return(
			<li>
				<div>
					<table className="w-100">
						<tbody>
							<tr>
								<td className="w-third"><a href={this.props.url} target="_blank"><img className="amazon-logo logo" src={AmazonLogo} alt="Amazon logo" /></a></td>
								<td className="w-third"><p className="pricing">{this.props.pricing.LowestNewPrice.FormattedPrice} - {this.props.pricing.LowestUsedPrice.FormattedPrice}</p></td>
								<td className="w-third"><a href={this.props.url} target="_blank"><button className="show-me">Show me</button></a></td>
							</tr>
						</tbody>
					</table>
				</div>
			</li>
		);
	}
}