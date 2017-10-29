import React from 'react';

import SignUpForm from './signUpForm';

import './styles/banner.css';

export default class Banner extends React.Component {
	toggleBanner(event) {
		event.preventDefault();
		if (this.props.toggleBanner) {
			this.props.toggleBanner();
		}
	}

	render() {
		return(
			<article className="">
				<header>
					<h1 className="">Welcome to Joystick Informer</h1>
					<h2 className="">This is a place to find, compare, favorite, and buy console games. Search by name or key words, and filter your search by console, game rating, or year.</h2>
				</header>
				<p className="">Complete the form below to sign up for a free account, or just jump right in by pressing the <span className="started">Let's Get Started</span> button</p>
				<SignUpForm />
				<div className="skip">
					<button className="" onClick={e => this.toggleBanner(e)}>Let's Get Started</button>
				</div>
			</article>
		)
	}
}