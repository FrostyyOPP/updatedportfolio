import React from 'react';
import './about.css';
import profilepic from '../About/profile-pic.png';
import {
  FaInstagram,
  FaTwitter,
  FaBehance,
  FaFacebookF,
  FaGithub,
} from 'react-icons/fa';

export const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-profile">
        <img
          src={profilepic} // Replace with your image path
          alt="Profile"
          className="about-profile-img"
        />
        <div className="about-social-links">
          <FaInstagram className="about-icon" />
          <FaTwitter className="about-icon" />
          <FaBehance className="about-icon" />
          <FaFacebookF className="about-icon" />
          <FaGithub className="about-icon" />
        </div>
        <div className="about-name">Ranjodh Singh</div>
      </div>
      <div className="about-content">
        <h2 className="about-subtitle">About me</h2>
        <h1 className="about-title">
          Transforming visions into exceptional portfolios
        </h1>
        <p className="about-description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam.
        </p>
      </div>
    </div>
  );
};
