import React from 'react';
import './styles/searchBar.css';

export default function SearchBar(props) {
	return(
		<div>
			<header>
				<h1>Joystick Informer</h1>
			</header>
			<form className="search-bar">
				<input className="search" type="search" placeholder="Search for games"/>
				<input className="submit" type="submit" value="Search"/>
			</form>
		</div>
	);
}