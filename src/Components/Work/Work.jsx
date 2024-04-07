import React from 'react';
import './work.css';

export const Work = () => {
  const projectList = [
    {
      id: '1',
      title: 'Nike Store Webapp',
      description:
        'The Nike Shoes Store web app, developed with React framework, offers a seamless shopping experience with its sleek interface and optimized CSS, allowing users to effortlessly browse and purchase Nike footwear.',
      tags: ['HTML', 'TailwindCSS', 'React.js', 'Redux'],
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQy-X4pJIEKQO6LIgIvkkY43QfiYfUhYCsNgp6vtaedA&s',
      links: {
        live: 'https://frostyyopp.github.io/NikeShoes/', // Link to live preview
      },
    },
    {
      id: '2',
      title: 'Notes App',
      description:
        'The Note app, crafted using React and Redux, streamlines note-taking with an efficient interface. Data persistence is ensured through local storage, providing users with seamless access to their notes across sessions.',
      tags: ['HTML', 'CSS', 'React.js', 'Redux'],
      image:
        'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/496/919/datas/original.jpeg',
      links: {
        live: 'https://frostyyopp.github.io/Notes-app/', // Link to live preview
      },
    },
    {
      id: '3',
      title: '2048 Game',
      description:
        'The 2048 game, crafted using React and Redux, offers a captivating puzzle experience where players merge numbered tiles to reach the elusive 2048 tile. Leveraging local storage, progress is seamlessly saved, allowing enthusiasts to pick up where they left off anytime, anywhere.',
      tags: ['HTML', 'CSS', 'Javascript'],
      image:
        'https://codecanyon.img.customer.envatousercontent.com/files/466705760/2048_puzzle_game_preview_cover.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=9a2df1bdaa37f0aa8cc7d2e7bab2df2e',
      links: {
        live: 'https://frostyyopp.github.io/MyGame/', // Link to live preview
      },
    },
    {
      id: '4',
      title: 'Nike Store Webapp',
      description:
        'The University website, coded in vanilla JavaScript, HTML, and CSS, boasts a user-friendly interface for students and faculty. Its responsive design allows easy access to departments, courses, and events, fostering seamless communication within the university community.',
      tags: ['HTML', 'CSS', 'Vanila JS', 'Bootstrap'],
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUB_QLwLlI-Yd1LxprVXVH1iKwr0PfGw0m3Gmq3HfuMw&s',
      links: {
        live: 'https://frostyyopp.github.io/UniversityWeb/index.html', // Link to live preview
      },
    },
  ];
  return (
    <div className="project-section" id="work">
      <div className="project-heading">
        <div className="work-title">Work</div>
      </div>
      <div className="project-subheading">
        <div className="work-subhead">Things I've built so far</div>
      </div>
      <div className="projects-container">
        {projectList.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h4 className="project-title">{project.title}</h4>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span className="tag" key={index}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.links.live} className="live-preview">
                Live Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
