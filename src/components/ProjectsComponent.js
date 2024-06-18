import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiSpring, SiPostgresql } from 'react-icons/si';
import projectIcon from '../assets/Img/icona-prj-2.webp';
import image1 from '../assets/screen ok/CAPSTONE/screen-home.png';
import image2 from '../assets/screen ok/CAPSTONE/screen-sub-home.png';
import image3 from '../assets/screen ok/CAPSTONE/screen-login.png';
import image4 from '../assets/screen ok/CAPSTONE/screen-register.png';
import image5 from '../assets/screen ok/CAPSTONE/screen-catalogo.png';
import image6 from '../assets/screen ok/CAPSTONE/screen-detail.png';
import image7 from '../assets/screen ok/CAPSTONE/screen-cart-top.png';
import image8 from '../assets/screen ok/CAPSTONE/screen-sub-cart.png';
import image9 from '../assets/screen ok/CAPSTONE/screen-assistenza.png';
import '../assets/Project.css';

function ProjectsComponent() {
  const projects = [
    {
      title: 'Capstone Boot Camp',
      description:
        'Game Portal: mini e-commerce con sistema di login/carrello e gestione admin utilizzando Spring Framework/Security.',
      images: [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
      ],
      technologies: [
        {
          icon: <FaReact style={{ color: '#61DAFB', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>React</span>,
        },
        {
          icon: <FaNodeJs style={{ color: '#339933', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>Node.js</span>,
        },
        {
          icon: <SiSpring style={{ color: '#6DB33F', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>Spring</span>,
        },
        {
          icon: (
            <SiPostgresql style={{ color: '#336791', marginRight: '5px' }} />
          ),
          name: <span style={{ fontStyle: 'italic' }}>PostgreSQL</span>,
        },
      ],

      repoUrl:
        'https://github.com/MatteoOrlando/game-ecommerce/blob/master/src/CAPSTONE-README.md',
    },

    // Altri progetti qui
  ];

  return (
    <div className="projects-page-container">
      <span className="project-title-container">
        <img src={projectIcon} alt="Project Icon" className="project-icon" />
        <h1 className="prj-title">Projects</h1>
      </span>
      {projects.map((project, idx) => (
        <div key={idx} className="project-carousel-container">
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-icon">
                  {tech.icon} {tech.name}
                </span>
              ))}
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="github-icon"
              >
                <FaGithub className="pulse" />
              </a>
            </div>
          </div>
          <Carousel>
            {project.images.map((image, index) => (
              <Carousel.Item key={index}>
                <div
                  className="project-page-card"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  );
}

export default ProjectsComponent;
