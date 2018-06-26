import React from 'react';
import './Nav.css';


const Nav = props => (
  <nav className="navbar navbar-light bg-light">
    <div className="row">
      <div className="col">
        <img className="archer-logo" alt="archer-logo" src="https://image.ibb.co/nNonzo/2000px_Archer_2009_logo_svg.png"/>
        <div className="win-loss">{props.winloss}</div>
      </div>
      <div className="col score-holder">
        <div className="row">
          <div className="score"><img className="score-img score-num" alt="score" src="https://image.ibb.co/j931s8/score.png" />  {props.score}</div>
        </div>
        <div className="row">
          <div className="topscore"><img className="score-img highscore-num" alt="score" src="https://image.ibb.co/haV35T/highscore.png" />  {props.topscore}</div>
        </div>
      </div>
    </div>
  </nav>
)

export default Nav;