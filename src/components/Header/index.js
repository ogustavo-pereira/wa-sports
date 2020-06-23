import React from 'react';
import LOGO from 'images/wasports.png';

export default function Header() {
	return (
		<div id="header">
			<div className="logo">
				<img src={LOGO} alt="waSports" />
			</div>
		</div>
	);
}
