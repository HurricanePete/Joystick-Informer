import React from 'react';
import {connect} from 'react-redux';

import {searchNews} from '../actions/joystick';

import Carousel from 'react-carousel';
import NewsTile from './newsTile';
import Loading from './loading';

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

	handleScrollToIndex = (index) => {
		this.setState({
			visibleIndex: index
		});
	}

	render() {
		const {news} = this.props;
		let tiles;
		if(!news) {
			return(
				<section className="featured-games pb5 row">
					<Loading />
				</section>
			)
		}
		else {
			tiles = news.map((tile, index) => <NewsTile key={index} index={index} {...tile} />)
			return(
				<section className="featured-games pb5 row">
					<header className="w-50 tl">
						<h3>Recent News</h3>
					</header>
					<hr/>
					<div className="carousel-wrapper col-9 center">
						<Carousel controlWidth={20} firstVisibleIndex={this.state.visibleIndex} itemMargin={10} itemWidth={250} onItemScroll={this.handleScrollToIndex} scrollStepDistance={this.state.scrollStepDistance} >
							{tiles}
						</Carousel>
					</div>
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