import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavigationBar from './nav';
import Footer from './footer';
import SearchBar from './searchBar';
import ResultsDisplay from './resultsDisplay';

export default function App(props) {
	return (
		<Router>
			<div className="app">
				<NavigationBar />
				<SearchBar />
				<ResultsDisplay />
				<Footer />
			</div>
		</Router>
		)
}