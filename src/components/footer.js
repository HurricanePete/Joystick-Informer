import React from 'react';
import './styles/footer.css';

export default function FooterBar(props) {
	return (
		<footer className="col-12">
			<div className="col-3 tc clear-float center pt2 white">
				<a href="http://zaksavagepete.me/" target="_blank" rel="noopener noreferrer"><p className="link-hover">Created by Zachary Pete</p></a>
			<ul className="footer-list">
				<li className="footer-link">
					<a href="https://github.com/HurricanePete" target="_blank" rel="noopener noreferrer">
						<i className="link-hover fab fa-github-square fa-2x"></i>
					</a>
				</li>
				<li className="footer-link">
					<a href="http://zaksavagepete.me/" target="_blank" rel="noopener noreferrer">
						<i className="link-hover fas fa-briefcase fa-2x"></i>
					</a>
				</li>
				<li className="footer-link">
					<a href="https://www.linkedin.com/in/zachary-pete-78131a94/" target="_blank" rel="noopener noreferrer">
						<i className="link-hover fab fa-linkedin fa-2x"></i>
					</a>
				</li>
			</ul>
				<p>Search provided by the <a href="https://www.igdb.com/api" target="_blank" rel="noopener noreferrer">IGDB api</a></p>
				<p>Loading animations by <a href="https://twitter.com/tobiasahlin" target="_blank" rel="noopener noreferrer">Tobias Ahlin</a> from <a href="http://tobiasahlin.com/spinkit/">SpinKit</a></p>
			</div>
		</footer>
	);
}