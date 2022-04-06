import React from 'react';

import CSGOICON from '../../images/csgoorange.png';

export default function CSGO() {
  return (
    <div className="content">
      <div className="content__header">
        <div className="top-info">
          <img alt="csgo" className="icon" src={CSGOICON} />
          <h1 className="title">Counter-Strike</h1>
        </div>
      </div>
      <div className="content__schedule">
        <div className="schedule-item">
          <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
        </div>
        <div className="schedule-item">
          <span className="live-span">Live</span>
        </div>
        <div className="schedule-item drop">
          <span className="time__name">Invictus</span>
          <img
            className="time__logo"
            src="http://cdn.gin.bet/team/74615be1728fca17c804707459.png"
            alt=""
          />
          <span className="time__value">0</span>
          <span className="vs">vs</span>
          <span className="time__value">0</span>
          <img
            className="time__logo"
            src="http://cdn.gin.bet/team/cs%20go5d584e052f548247459592.png"
            alt=""
          />
          <span className="time__name">Invictus</span>
        </div>
      </div>
      <div className="content__schedule">
        <div className="schedule-item">
          <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
        </div>
        <div className="schedule-item timevstime">
          <span className="time__name">Invictus</span>
          <span className="vs">vs</span>
          <span className="time__name">Invictus</span>
        </div>
        <div className="schedule-item">
          <span>20.12.2020 18:00</span>
        </div>
      </div>
      <div className="content__schedule">
        <div className="schedule-item">
          <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
        </div>
        <div className="schedule-item timevstime">
          <span className="time__name">Invictus</span>
          <span className="vs">vs</span>
          <span className="time__name">Invictus</span>
        </div>
        <div className="schedule-item">
          <span>20.12.2020 18:00</span>
        </div>
      </div>
      <div className="content__schedule">
        <div className="schedule-item">
          <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
        </div>
        <div className="schedule-item timevstime">
          <span className="time__name">Invictus</span>
          <span className="vs">vs</span>
          <span className="time__name">Invictus</span>
        </div>
        <div className="schedule-item">
          <span>20.12.2020 18:00</span>
        </div>
      </div>
      <div className="content__schedule">
        <div className="schedule-item">
          <span>Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
        </div>
        <div className="schedule-item timevstime">
          <span className="time__name">Invictus</span>
          <span className="vs">vs</span>
          <span className="time__name">Invictus</span>
        </div>
        <div className="schedule-item">
          <span>20.12.2020 18:00</span>
        </div>
      </div>
    </div>
  );
}
