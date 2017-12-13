import React from 'react';
import {connect} from 'react-redux';

import {searchNews} from '../actions/joystick';

import Carousel from 'react-carousel';
import NewsTile from './newsTile';

import './styles/featuredGames.css';

export class FeaturedGames extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			scrollStepDistance: 3,
			visibleIndex: 0
		};
	}
	
	componentDidMount() {
		this.props.dispatch(searchNews())
	}

	handleScrollToIndex(index) {
		this.setState({
			visibleIndex: index
		});
	}

	render() {
		const {news} = this.props;
		let tiles;
		if(!news) {
			return(
				<section className="bg-light-gray">
					<header>
						<h3>Recent News</h3>
					</header>
					<hr/>
					<div>
						<h2>Loading...</h2>
					</div>
				</section>
			)
		}
		else {
			tiles = news.map((tile, index) => <NewsTile key={index} index={index} {...tile} />)
			console.log(tiles.length)

			return(
				<section className="bg-light-gray">
					<header>
						<h3>Recent News</h3>
					</header>
					<hr/>
					<Carousel controlWidth={50} firstVisibleIndex={this.state.visibleIndex} itemMargin={10} itemWidth={350} onItemScroll={this.handleScrollToIndex} scrollStepDistance={this.state.scrollStepDistance} >
						{tiles}
					</Carousel>
				</section>
			)
		}	
	}
}

const mapStateToProps = state => {
	return{
		news: state.joystick.newsResults
	}
}

export default connect(mapStateToProps)(FeaturedGames);