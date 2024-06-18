import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiSpring, SiPostgresql } from 'react-icons/si';
import image1 from '../assets/Img/img-project-1.png';
import image2 from '../assets/Img/test-img.png';
import image3 from '../assets/Img/Immagine catalogo.png';
import image4 from '../assets/Img/Immagine dettagli prodotto.png';
import image5 from '../assets/Img/Immagine cart.png';
import '../assets/Project.css';

function ProjectsComponent() {
  const projects = [
    {
      title: 'Capstone Boot Camp',
      description:
        'Game Portal: mini e-commerce con sistema di login/carrello e gestione admin utilizzando Spring Security.',
      images: [image1, image2, image3, image4, image5],
      technologies: [
        {
          icon: <FaReact style={{ color: '#61DAFB', marginRight: '5px' }} />,
          name: ' React',
        },
        {
          icon: <FaNodeJs style={{ color: '#339933', marginRight: '5px' }} />,
          name: ' Node.js',
        },
        {
          icon: <SiSpring style={{ color: '#6DB33F', marginRight: '5px' }} />,
          name: ' Spring',
        },
        {
          icon: (
            <SiPostgresql style={{ color: '#336791', marginRight: '5px' }} />
          ),
          name: 'PostgreSQL',
        },
      ],
      repoUrl: 'https://github.com/yourusername/capstone-project',
    },

    // Altri progetti qui
  ];

  return (
    <div className="projects-page-container">
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
