import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TVWHITEICON from 'images/tvwhite.png';
import CSGOORANGEICON from 'images/csgoorange.png';
import TVORANGEICON from 'images/tv.png';
import CSWHITEICON from 'images/csgowhite.png';

export default function LeftMenu() {
	let location = useLocation();

	const liveIcon = location.pathname === '/dashboard';
	const csgoIcon = location.pathname === '/csgo';

	return (
		<div className="left-menu">
			<ul className="menu">
				<li className={liveIcon ? 'menu-item active' : 'menu-item'}>
					<Link className="link" to="/dashboard">
						<img
							alt="Live Social"
							className="icon"
							src={liveIcon ? TVORANGEICON : TVWHITEICON}
						/>
						<span>Live Social</span>
					</Link>
				</li>
				<li className={csgoIcon ? 'menu-item active' : 'menu-item'}>
					<Link className="link" to="/csgo">
						<img
							alt="Counter Strike GO"
							className="icon"
							src={csgoIcon ? CSGOORANGEICON : CSWHITEICON}
						/>
						<span>Counter Strike GO</span>
					</Link>
				</li>
			</ul>
		</div>
	);
}
