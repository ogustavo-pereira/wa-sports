import React from 'react';
import LatestActions from 'components/LatestActions';
import News from 'components/News';
import Player from 'components/Player';
import TVICON from 'images/tv.png';
import Scoreboard from 'components/Scoreboard';

function Header({ description }) {
	return (
		<div className="content__header">
			<div className="top-info">
				<img alt="WEBTV" className="icon" src={TVICON} />
				<h1 className="title">Live</h1>
			</div>
			<div className="content__description">{description}</div>
		</div>
	);
}

export default function Dashboard() {
	return (
		<div className="content">
			<Header />
			<div className="content__box">
				<Player />
				<div className="action-box">
					<div className="header">
						<ul className="list">
							<li className="list-item orange">Placar</li>
							<li className="list-item">Ranking</li>
							<li className="list-item">Estatistica</li>
						</ul>
					</div>
					<Scoreboard />
					<LatestActions />
				</div>
			</div>

			<News />
		</div>
	);
}
