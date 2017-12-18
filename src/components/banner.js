import React from 'react';

import SignUpForm from './signUpForm';

import './styles/banner.css';

export default class Banner extends React.Component {
	toggleBanner(event) {
		event.preventDefault();
		if(this.props.toggleBanner) {
			this.props.toggleBanner();
		}
	}

	render() {
		return(
			<article className="banner col-6 center mw7 ph3 ph5-ns tc pv4 clear-float">
				<header>
					<h1 className="fw6 f3 f2-ns lh-title mv4">Welcome to Joystick Informer</h1>
					<h2 className="fw2 f4 lh-copy mt2 mb3">This is a place to find, compare, favorite, and buy console games. Search by title, view tags, and keep up to date with new and old titles.</h2>
				</header>
				<p className="f5 mt0 mb3 b">Complete the form below to sign up for a free account, or just jump right in by pressing the <span className="ba b--white pa1 nowrap">Let's Get Started</span> button at the bottom of the page.</p>
				<SignUpForm banner={true} />
				<div className="skip">
					<button className="f6 js-button ba grow dib" onClick={e => this.toggleBanner(e)}>Let's Get Started</button>
				</div>
			</article>
		)
	}
}