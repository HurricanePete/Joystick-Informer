import React from 'react';
import './nav.css';

export default function NavigationBar(props) {
	return (
		<header className="nav">
			<nav className="">
				<span className="link" href="#" title="Home">Home</span>
				<span className="link" href="#" title="Sign in">Sign in</span>
			</nav>
		</header>
	);
}