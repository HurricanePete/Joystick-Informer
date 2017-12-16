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
						<table>
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
					<table>
						<tbody>
							<tr>
								<td><a href={this.props.url} target="_blank"><img className="logo" src={EbayLogo} alt="Ebay logo" /></a></td>
								<td><span>${this.props.pricing.currentPrice[0].__value__}</span></td>
								<td><span>{this.props.condition}</span></td>
								<td><span>{this.props.pricing.timeLeft[0]}</span></td>
								<td><span className={this.props.buyItNow === true ? "green ba b--washed-green" : "gray ba b--light-gray"}>Buy It Now</span></td>
							</tr>
						</tbody>	
					</table>
				</div>
			</li>
		);
	}
}