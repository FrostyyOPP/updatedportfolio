import React from 'react';
import { FaMugHot } from 'react-icons/fa';
import './StartProject.css'; // Make sure to import the CSS file

const StartProject = () => {
  return (
    <div className="project-container">
      <div className="project-banner">
        <div className="banner-content">
          <h1 className="banner-title">Start a project</h1>
          <p className="banner-text">
            Interested in working together? We should queue up a time to chat.
            I'll buy the tea.
          </p>
        </div>
        <button className="banner-button">
          <FaMugHot className="button-icon" /> Let's do this
        </button>
      </div>
    </div>
  );
};

export default StartProject;
