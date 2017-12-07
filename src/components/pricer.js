import React from 'react';
import AmazonPriceCell from './amazonPriceCell';
import EbayPriceCell from './ebayPriceCell';

import {API_BASE_URL} from '../config';

import './styles/pricer.css';

export default class Pricer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			error: null,
			price: null
		};
	}

	componentDidMount() {
		console.log('Firing')
		this.setState({
			loading: true
		});
		return fetch(`${API_BASE_URL}/pricing/${this.props.name}`, {
			method: 'GET'
		})
		.then(res => res.json())
		.then(res => {
			this.setState({
				loading: false,
				price: res
			})
			console.log(this.state)
		})
		.catch(err => {
			this.setState({
				error: err
			})
		})
	}

	render() {
		console.log(this.state)
		if(this.state.price === null) {
			return(
			<div className="price-wrapper">
				<h3>Prices</h3>
				<hr/>
				<h2>Loading...</h2>
			</div>
			);
		}
		return(
			<div className="price-wrapper">
				<h3>Prices</h3>
				<hr/>
				<ul>
					<AmazonPriceCell {...this.state.price.amazon} />
					<EbayPriceCell {...this.state.price.ebay} />	
				</ul>
			</div>
		);
	}
}
