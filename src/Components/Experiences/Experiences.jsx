import React, { useState } from 'react';
import { FaMapMarkerAlt, FaLink, FaPlus, FaMinus } from 'react-icons/fa';
import './experiences.css';

const AccordionItem = ({ title, content, isOpen, toggle }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggle}>
        <span>{title}</span>
        {isOpen ? <FaMinus /> : <FaPlus />}
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};
export const Experiences = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const experiences = [
    {
      id: 1,
      role: 'Frontend Web Developer @ Lelavtech',
      location: 'Duhok, Iraq',
      link: 'lelav.com',
      period: 'Dec 2022 - Present',
      description:
        'Developing front-end (B2C, B2B) in Lelav Tech on Vue.js/Nuxt.js framework and...',
      tags: [
        'HTML',
        'Bootstrap',
        'TailwindCSS',
        'Javascript',
        'Vue.js',
        'Nuxt.js',
      ],
    },
    {
      id: 1,
      role: 'Frontend Web Developer @ Lelavtech',
      location: 'Duhok, Iraq',
      link: 'lelav.com',
      period: 'Dec 2022 - Present',
      description:
        'Developing front-end (B2C, B2B) in Lelav Tech on Vue.js/Nuxt.js framework and...',
      tags: [
        'HTML',
        'Bootstrap',
        'TailwindCSS',
        'Javascript',
        'Vue.js',
        'Nuxt.js',
      ],
    },
    {
      id: 1,
      role: 'Frontend Web Developer @ Lelavtech',
      location: 'Duhok, Iraq',
      link: 'lelav.com',
      period: 'Dec 2022 - Present',
      description:
        'Developing front-end (B2C, B2B) in Lelav Tech on Vue.js/Nuxt.js framework and...',
      tags: [
        'HTML',
        'Bootstrap',
        'TailwindCSS',
        'Javascript',
        'Vue.js',
        'Nuxt.js',
      ],
    },
    // ... other experiences
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="exp-container" id="experience">
      <div className="exp-title-container">
        <div className="exp-title">Experience</div>
      </div>
      <div className="exp-subtitle">
        Here is a quick summary of <br /> my most recent experiences
      </div>
      <div className="accordion">
        {experiences.map((exp, index) => (
          <AccordionItem
            key={exp.id}
            title={
              <div className="exp-head">
                <h3>{exp.role}</h3>
                <p>{exp.period}</p>
              </div>
            }
            content={
              <div className="exp-body">
                <div className="exp-body-head">
                  <div className="exp-location">
                    <FaMapMarkerAlt /> {exp.location}
                  </div>
                  <div className="exp-site">
                    <FaLink /> {exp.link}/
                  </div>
                </div>
                <div className="exp-body-desc">
                  <p>{exp.description}</p>
                  <div className="tags">
                    {exp.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            }
            isOpen={openIndex === index}
            toggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  );
};
