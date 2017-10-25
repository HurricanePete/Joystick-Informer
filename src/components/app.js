import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavigationBar from './nav';
import Footer from './footer';
import SearchPage from './searchPage';
import GameView from './gameView';
import Dashboard from './dashboard';
import LoginPage from './loginPage';

import './main.css';

export default function App(props) {

	return (
		<Router>
			<div className="app">
				<NavigationBar />
				<Route exact path="/" component={SearchPage} />
				<Route exact path="/gameId" component={GameView} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/login" component={LoginPage} />
				<Footer />
			</div>
		</Router>
	);
}