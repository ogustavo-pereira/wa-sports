import React from "react"

export default function Player() {
    return (
        <div className="video-box">
            <iframe
                title="Player Video"
                src=""
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                allow="autoplay; fullscreen"
            />
        </div>
    )
}
