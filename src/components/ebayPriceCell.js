import React from 'react';

export default class ebayPriceCell extends React.Component {
	render() {
		console.log(this.props)
		if(!this.props) {
			return <h2>Loading...</h2>
		}
		return(
			<li>
				<div>
					<a href="{this.props.url}"><img src="./static-photos/ebay-icon.png"/></a>
					<span>${this.props.pricing.currentPrice[0].__value__}</span>
					<span>{this.props.condition}</span>
					<span>{this.props.pricing.timeLeft[0]}</span>
					<span className={this.props.buyItNow === true ? "green ba b--washed-green" : "gray ba b--light-gray"}>Buy It Now</span>
				</div>
			</li>
		);
	}
}