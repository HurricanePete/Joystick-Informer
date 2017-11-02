import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavigationBar from './nav';
import Footer from './footer';
import SearchPage from './searchPage';
import GameView from './gameView';
import Dashboard from './dashboard';
import LoginPage from './loginPage';
import SignUpPage from './signUpPage';

import './styles/app.css';

export default function App(props) {

	return (
		<Router>
			<div className="app">
				<NavigationBar />
				<Route exact path="/" component={SearchPage} />
				<Route exact path="/gameview/:id" component={GameView} />
				<Route exact path="/dashboard/:userid" component={Dashboard} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/signup" component={SignUpPage} />
				<Footer />
			</div>
		</Router>
	);
}

