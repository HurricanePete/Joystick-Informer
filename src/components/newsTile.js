import React from 'react';

export default function NewsTile(props) {
	return(
		<a className="dib center mw5 tc black link dim v-top" title={props.title} href={props.url} target="_blank">
			<img className="db ba b--black-10" alt={props.title} src={props.image} />
			<dl className="mt2 f6 lh-copy w-100">
			    <dt className="clip">Title</dt>
			    <dd className="ml0 w-100"><p className="w-100">{props.title}</p></dd>
			    <dt className="clip">Outlet</dt>
			    <dd className="ml0 gray">{props.pulse_source.name}</dd>
			</dl>
		</a>
	);
}