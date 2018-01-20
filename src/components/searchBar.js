import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

import './styles/searchBar.css';

export class SearchBar extends React.Component {
	onSubmit(values) {
		try{
			const lower = values.search.toLowerCase();
			this.props.searchSubmit(lower);
		}
		catch(err) {
			alert('Please enter a valid search')
		}
	}

	render(){
		return(
			<div className="search-row row">
				<header className="tc">
					<h1>Joystick Informer</h1>
				</header>
				<form className="search-bar" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<Field className="search col-4 clear-float" name="search" type="search" placeholder="Search for games" component="input" />
					<button className="submit" type="submit">Search</button>
				</form>
			</div>
		);
	}
}

SearchBar = reduxForm({
	form: 'search'
})(SearchBar)

export default connect()(SearchBar);