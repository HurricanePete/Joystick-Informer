import React from 'react';

import EbayLogo from './static-photos/ebay-icon.png';

export default class ebayPriceCell extends React.Component {
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
									<td><a href="{this.props.url}"><img className="logo" src={EbayLogo} alt="Ebay logo" /></a></td>
									<td><p>Pricing Unavailable from this seller</p></td>
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
								<td className="w-third"><a href={this.props.url} target="_blank"><img className="logo" src={EbayLogo} alt="Ebay logo" /></a></td>
								<td className="w-third"><p className="pricing">${this.props.pricing.currentPrice[0].__value__}</p></td>
								<td className="w-third"><a href={this.props.url} target="_blank"><button className="show-me">Show me</button></a></td>
							</tr>
						</tbody>	
					</table>
				</div>
			</li>
		);
	}
}