import React from 'react';

export default function Description(props) {
	let tags;
	if(props.genres !== undefined) {
		tags = props.genres.map((genre, index) => 
			<li className="dib mr2 tag" key="index">{genre.name}</li>
		);
	};
	const release = new Date(props.first_release_date);
	return (
		<dl className="pl3 ma0 dib">
			<dt className="hidden">Release Date</dt>
			<dd><i className="fas fa-calendar-alt fa-lg"></i><span className="props">{props.first_release_date === undefined ? 'Unavailable' : release.getFullYear()}</span></dd>
			<dt className="hidden">Tags</dt>
			<dd>
				<i className="fas fa-tag fa-lg dib"></i>
				{props.genres === undefined ? 'None' : <ul className="dib pa0">{tags}</ul>}
			</dd>
		</dl>
	)
}