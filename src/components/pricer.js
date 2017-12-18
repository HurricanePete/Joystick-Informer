import React from 'react';
import AmazonPriceCell from './amazonPriceCell';
import EbayPriceCell from './ebayPriceCell';
import Loading from './loading';

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
		this.setState({
			loading: true
		});
		return fetch(`${API_BASE_URL}/pricing`, {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				search: this.props.name,
				console: this.props.platforms,
				releaseDate: this.props.releaseDate
			})
		})
		.then(res => res.json())
		.then(res => {
			this.setState({
				loading: false,
				price: res
			});
		})
		.catch(err => {
			this.setState({
				error: err
			})
		})
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.platforms !== this.props.platforms) {
			const platform = nextProps.platforms;
			this.setState({
				loading: true
			});
			return fetch(`${API_BASE_URL}/pricing`, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					search: this.props.name,
					console: platform,
					releaseDate: this.props.releaseDate
				})
			})
			.then(res => res.json())
			.then(res => {
				this.setState({
					loading: false,
					price: res
				});
			})
			.catch(err => {
				this.setState({
					error: err
				})
			})
		}
	}

	render() {
		if(this.state.price === null) {
			return(
				<div className="price-wrapper">
					<header className="w-50 tl">
						<h3>Prices</h3>
					</header>
					<hr/>
					<Loading />
				</div>
			);
		}
		return(
			<div className="price-wrapper col-12">
				<header className="w-50 tl">
					<h3>Prices</h3>
				</header>
				<hr/>
				<ul className="pricer-list col-4 fr clear-float">
					<li>
						<div>
							<table className="b-border w-two-thirds tl pv3">
								<thead>
									<tr>
										<th className="w-50 tc">Merchant</th>
										<th className="w-50 tc">Pricing</th>
									</tr>
								</thead>
							</table>
						</div>
					</li>
					<AmazonPriceCell {...this.state.price.amazon} />
					<EbayPriceCell {...this.state.price.ebay} />	
				</ul>
			</div>
		);
	}
}
