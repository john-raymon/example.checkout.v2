import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {ReactComponent as LettersHeroBg } from '../assets/letters-hero-big.svg'
import shoesHero from '../assets/shoes-hero.png';

function LandingPage(props) {
  return (
    <div className="flex flex-grow-1 items-center bg-black">
      <div className="relative w-100 mw9 center ph2">
        <div className="w-90 o-40 center pv2">
          <LettersHeroBg />
        </div>
        <div className="absolute absolute--fill flex flex-column items-center w-90 center mt5">
          <img src={shoesHero} width="100%" height="auto" />
        </div>
        <div className="absolute absolute--fill flex flex-column justify-center items-center nb7 ph3">
          <p className="flex flex-shrink-1 flex-column hero-text white tr">
            LOREM IPSUM LOREM IPSUM
            <Link to="/white-shoe" className="medium-text f7 cherry bg-blossom ttu pv3 ph3 bg-white outline-0 dim pointer mw4 self-end mr3 no-underline">
              shop shoe
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;