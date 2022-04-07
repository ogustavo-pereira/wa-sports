import React from 'react';

export default function Scoreboard() {
  return (
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
  );
}
