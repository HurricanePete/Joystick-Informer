import React from 'react';
import './styles/footer.css';

export default function FooterBar(props) {
	return (
		<footer className="col-12">
			<div className="col-3 tc clear-float center pt4 white">
				<p>Created by Zachary Pete</p>
				<ul>
					<li className="dib"><a href="https://github.com/HurricanePete" target="_blank"><i className="fab fa-github-square fa-2x"></i></a></li>
					<li className="dib"><a href="https://www.linkedin.com/in/zachary-pete-78131a94" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a></li>
				</ul>
				<p>Search provided by the <a href="https://www.igdb.com/api" target="_blank">IGDB api</a></p>
				<p>Loading animations by <a href="https://twitter.com/tobiasahlin" target="_blank">Tobias Ahlin</a> from <a href="http://tobiasahlin.com/spinkit/">SpinKit</a></p>
			</div>
		</footer>
	);
}