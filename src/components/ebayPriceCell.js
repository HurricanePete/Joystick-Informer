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
						<a href="{this.props.url}"><img src={EbayLogo} alt="Ebay logo" /></a>
						<span>--</span>
						<span>--</span>
						<span>--</span>
						<span>--</span>
					</div>
				</li>
			);
		}
		return(
			<li>
				<div>
					<a href="{this.props.url}"><img src={EbayLogo} alt="Ebay logo" /></a>
					<span>${this.props.pricing.currentPrice[0].__value__}</span>
					<span>{this.props.condition}</span>
					<span>{this.props.pricing.timeLeft[0]}</span>
					<span className={this.props.buyItNow === true ? "green ba b--washed-green" : "gray ba b--light-gray"}>Buy It Now</span>
				</div>
			</li>
		);
	}
}