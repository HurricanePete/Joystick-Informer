import React from 'react';

export default function Banner(props) {
	return(
		<article className="">
			<h1 className="">Welcome to Joystick Informer</h1>
			<h2 className="">This is a place to find, compare, favorite, and buy console games. Search by name or key words, and filter your search by console, game rating, or year.</h2>
			<p className="">Complete the form below to sign up for a free account, or just jump right in by pressing the <span class="started">Let's Get Started</span> button</p>
			<div>
				<button className="">Sign Up</button>
				<button className="">Learn More</button>
			</div>
		</article>
	)
}