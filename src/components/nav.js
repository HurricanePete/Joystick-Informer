import React from 'react';
import './nav.css';

export default class NavigationBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="nav">
				<nav className="">
					<a className="link" href="#" title="Home">Home</a>
					<a className="link" href="#" title="Sign in">Sign in</a>
				</nav>
			</header>
			);
	}
}