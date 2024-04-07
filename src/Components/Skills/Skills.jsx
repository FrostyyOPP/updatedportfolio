import './skills.css';
import React from 'react';

export const Skills = () => {
  const Skillsname = [
    {
      id: '1',
      name: 'Javascript',
      logo: 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/social%20icons/javascript.svg',
    },
    {
      id: '2',
      name: 'HTML5',
      logo: 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/social%20icons/html5.svg',
    },
    {
      id: '3',
      name: 'CSS3',
      logo: 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/social%20icons/css3.svg',
    },
    {
      id: '4',
      name: 'NodeJS',
      logo: 'https://logowik.com/content/uploads/images/nodejs.jpg',
    },
    {
      id: '5',
      name: 'React',
      logo: 'https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/social%20icons/react.svg',
    },
    {
      id: '6',
      name: 'Redux',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTelECZ5uA0rEvlWtTCGEnBwrc_QtF4ZjJRtH5WaOjg&s',
    },
    {
      id: '7',
      name: 'MongoDB',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjr-HsRyN5BoZa1yyh8aT3x41g4sEK-9ck3jEhBpd2kg&s',
    },
    {
      id: '8',
      name: 'Bootstrap',
      logo: 'https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social-logo.png',
    },
    {
      id: '9',
      name: 'Figma',
      logo: 'https://logowik.com/content/uploads/images/figma.jpg',
    },
  ];
  return (
    <div className="container-skills" id="skills">
      <div className="subhead-container">
        <div className="head-skills">Skills</div>
      </div>
      <h3 className="sub-head-skills">
        The Skills, tools and technologies <br /> I am really good at:
      </h3>
      <div className="skills">
        {Skillsname.map((Skillname) => (
          <div className="skill-data">
            <div className="data">
              <img
                src={Skillname.logo}
                alt={Skillname.name}
                className="skill-img"
              />
              <h5 className="skill-name">{Skillname.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
