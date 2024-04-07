import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { BsFillChatSquareTextFill } from 'react-icons/bs';
import { GiBestialFangs } from 'react-icons/gi';
import heroimage from '../Hero/hero-image.png';
import './hero.css';
export const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero-content">
        <h1>
          Hi, I’m <span className="highlight">Ranjodh Singh</span>,
        </h1>
        <p>
          A Passionate <span className="highlight">Frontend Web Developer</span>{' '}
          with 4 years experience creating user friendly websites.
        </p>
        <button className="cta-button">
          <FaPhone /> Book a call
        </button>
      </div>
      <div className="robot-image">
        {/* Robot image goes here. For now, we'll use a placeholder. */}
        <div />
        <img src={heroimage} alt="" className="placeholder-robot" />
      </div>
    </div>
  );
};
