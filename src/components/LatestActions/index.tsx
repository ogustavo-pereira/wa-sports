import React from "react"

export default function LatestActions({ actions = [] }: any) {
    return (
        <div id="latest-actions">
            <ul className="table-striped">
                {actions.map((action, index) => (
                    <li key={index}>
                        <span className="description">{action.description}</span>
                        <span className="time">{action.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
