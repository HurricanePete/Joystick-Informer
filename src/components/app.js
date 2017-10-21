import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import NavigationBar from './nav';
import Footer from './footer';
import SearchBar from './searchBar';
import ResultsDisplay from './resultsDisplay';
import GameView from './gameView';

export default function App(props) {

	const example = {
			title: 'Potato: Rise of the Fries',
			rating: '5/10',
			price: '$25.00',
			summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate'
		}

	return (
		<Router>
			<div className="app">
				<NavigationBar />
				<SearchBar />
				<ResultsDisplay />
				<GameView {...example} />
				<Footer />
			</div>
		</Router>
		);
}