import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavigationBar from './nav';
import Footer from './footer';
import SearchPage from './searchPage';
import GameView from './gameView';
import Dashboard from './dashboard';
import LoginPage from './loginPage';
import SignUpPage from './signUpPage';

import {refreshAuthToken} from '../actions/auth';

import './styles/app.css';

export class App extends React.Component{
	componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if (!nextProps.loggedIn && this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
		return (
			<Router>
				<div className="app">
					<NavigationBar />
					<Route exact path="/" component={SearchPage} />
					<Route exact path="/gameview/:id" component={GameView} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/signup" component={SignUpPage} />
					<Footer />
				</div>
			</Router>
		);
	}
}

const mapStateToProps = state => ({
	hasAuthToken: state.auth.authToken !== null,
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(App);