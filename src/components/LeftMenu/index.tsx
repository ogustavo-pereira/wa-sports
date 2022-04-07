import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

import TVWHITEICON from "images/tvwhite.png"
import CSGOORANGEICON from "images/csgoorange.png"
import TVORANGEICON from "images/tv.png"
import CSWHITEICON from "images/csgowhite.png"

export default function LeftMenu() {
    const location = useLocation()
    const navigate = useNavigate()

    const liveIcon = location.pathname === "/dashboard"
    const csgoIcon = location.pathname === "/csgo"

    return (
        <div className="left-menu">
            <ul className="menu">
                <li className={liveIcon ? "menu-item active" : "menu-item"} onClick={()=> navigate("./dashboard")}>
                    <span className="link">
                        <img
                            alt="Live Social"
                            className="icon"
                            src={liveIcon ? TVORANGEICON : TVWHITEICON}
                        />
                        <span>Live Social</span>
                    </span>
                </li>
                <li className={csgoIcon ? "menu-item active" : "menu-item"} onClick={()=> navigate("./csgo")}>
                    <span className="link">
                        <img
                            alt="Counter Strike GO"
                            className="icon"
                            src={csgoIcon ? CSGOORANGEICON : CSWHITEICON}
                        />
                        <span>Counter Strike GO</span>
                    </span>
                </li>
            </ul>
        </div>
    )
}
