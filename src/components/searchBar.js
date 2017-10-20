import React from 'react';
import './searchBar.css';

export default class SearchBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<header>
					<h1>Joystick Informer</h1>
				</header>
				<form className="search-bar">
					<input className="search" type="search" placeholder="Search for games"/>
					<input type="submit" value="Search"/>
				</form>
			</div>
			);
	}

}