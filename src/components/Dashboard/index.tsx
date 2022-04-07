import React from "react"

import TVICON from "images/tv.png"
import LatestActions from "components/LatestActions"
import News from "components/News"
import Player from "components/Player"
import Scoreboard from "components/Scoreboard"

function Header() {
    return (
        <div className="content__header">
            <div className="top-info">
                <img alt="WEBTV" className="icon" src={TVICON} />
                <h1 className="title">Live</h1>
            </div>
        </div>
    )
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
                            <li className="list-item">Estatística</li>
                        </ul>
                    </div>
                    <Scoreboard />
                    <LatestActions />
                </div>
            </div>

            <News />
        </div>
    )
}
