import React from 'react';
import {Field, reduxForm} from 'redux-form';

import './styles/searchBar.css';

export class SearchBar extends React.Component {
	onSubmit(values) {
		const lower = values.search.toLowerCase();
		this.props.searchSubmit(lower);
	}

	render(){
		return(
			<div>
				<header>
					<h1>Joystick Informer</h1>
				</header>
				<form className="search-bar" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<Field className="search" name="search" type="search" placeholder="Search for games" component="input" />
					<button className="submit" type="submit">Search</button>
				</form>
			</div>
		);
	}
}

SearchBar = reduxForm({
	form: 'search'
})(SearchBar)

export default SearchBar