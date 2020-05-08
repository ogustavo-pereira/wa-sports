import React from 'react';

import TVICON from '../../images/tv.png';

export default function Dashboard() {
	return (
		<div className="content">
			<div className="content__header">
				<div className="top-info">
					<img alt="WEBTV" className="icon" src={TVICON} />
					<h1 className="title">Live</h1>
				</div>
				<div className="content__description">
					<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
					<ul className="" />
				</div>
			</div>

			<div className="content__box">
				<div className="video-box">
					<iframe
						title="twitch"
						src="https://player.twitch.tv/?!allowfullscreen&amp;channel=GRIDesports&amp;layout=video&amp;!autoplay&amp;playsinline&amp;muted&amp;origin=https%3A%2F%2Fggbet.com"
						width="100%"
						height="100%"
						frameBorder="0"
						scrolling="no"
						allow="autoplay; fullscreen"
					/>
				</div>
				<div className="action-box">
					<div className="header">
						<ul className="list">
							<li className="list-item orange">Placar</li>
							<li className="list-item">Ranking</li>
							<li className="list-item">Estatistica</li>
						</ul>
					</div>
					<div id="scoreboard">
						<div className="panel">
							<span className="time__name">Invictus</span>
							<img
								className="time__logo"
								src="http://cdn.gin.bet/team/74615be1728fca17c804707459.png"
								alt=""
							/>
							<span className="time__value">0</span>
							<span className="vs">vs</span>
							<span className="time__value orange">0</span>
							<img
								className="time__logo"
								src="http://cdn.gin.bet/team/cs%20go5d584e052f548247459592.png"
								alt=""
							/>
							<span className="time__name orange">Invictus</span>
						</div>
					</div>
					<div id="latest-actions">
						<ul className="table-striped">
							<li>
								<span className="description">
									Lorem Ipsum Lorem Ipsum Lorem Ipsum
								</span>
								<span className="time">30min</span>
							</li>
							<li>
								<span className="description">
									Lorem Ipsum Lorem Ipsum Lorem Ipsum
								</span>
								<span className="time">35min</span>
							</li>
							<li>
								<span className="description">
									Lorem Ipsum Lorem Ipsum Lorem Ipsum
								</span>
								<span className="time">35min</span>
							</li>
							<li>
								<span className="description">
									Lorem Ipsum Lorem Ipsum Lorem Ipsum
								</span>
								<span className="time">34min</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="content__news">
				<h1 className="title">News</h1>
				<div className="news-item">
					<div className="content__description">
						<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
					</div>
				</div>
				<div className="news-item">
					<div className="content__description">
						<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
					</div>
				</div>
				<div className="news-item">
					<div className="content__description">
						<p>Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
					</div>
				</div>
			</div>
		</div>
	);
}
