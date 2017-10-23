import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Banner from './banner';
import NavigationBar from './nav';
import Footer from './footer';
import SearchBar from './searchBar';
import ResultsDisplay from './resultsDisplay';
import GameView from './gameView';
import Dashboard from './dashboard';

import './main.css';

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
				<Route exact path="/" component={Banner} />
				<SearchBar />
				<ResultsDisplay />
				<Route exact path="/gameId" component={GameView} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Footer />
			</div>
		</Router>
		);
}