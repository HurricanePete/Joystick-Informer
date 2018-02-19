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
		const {noSearchResults} = this.props;
		return(
			<div className={"search-row row " + (noSearchResults ? "tc" : null)}>
				<header>
					<h1>Joystick Informer</h1>
				</header>
				<form className="search-bar" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
					<Field className="search col-6 clear-float" name="search" type="search" placeholder="Search for games" component="input" />
					<button className="submit" type="submit">Search</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		noSearchResults: state.joystick.searchResults === null 
	}
}

SearchBar = reduxForm({
	form: 'search'
})(SearchBar)

export default connect(mapStateToProps)(SearchBar);