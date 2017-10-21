import React from 'react';
import PriceCell from './priceCell'

import './pricer.css';

export default class Pricer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const examples = [{
			merchant: 'effBay',
			price:'$25.00'
		}, {
			merchant: 'Bamazon',
			price: '$26.00'
		}, {
			merchant: 'AimStop',
			price: '$27.00'
		}]

		const prices = examples.map((price, index) => 
			<PriceCell key={index} {...price} />
		);

		return(
			<div className="price-wrapper">
				<h2>Prices</h2>
				<hr/>
				<table>
					<thead>
						<tr>
							<th>Merchant</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{prices}
					</tbody>
				</table>
			</div>
			)
	}
}