import React from 'react';
import Header from './Header';

export default function Layout( { children } ) {
	return (
		<div className="content">
			<Header />
			{children }
		</div>
	);
}

