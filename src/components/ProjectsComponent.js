import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { Carousel } from 'react-bootstrap';
import {
  FaReact,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaSass,
  FaJava,
  FaToolbox,
  FaHandPointRight,
} from 'react-icons/fa';
import { SiSpring, SiPostgresql } from 'react-icons/si';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
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
import image10 from '../assets/screen ok/SPOTIFY-CLONE/spotify-screen-home.png';
import image11 from '../assets/screen ok/SPOTIFY-CLONE/spotify-screen-offcanvas.png';
import image12 from '../assets/screen ok/SPOTIFY-CLONE/spotify-sreen-genere-list.png';
import image13 from '../assets/screen ok/SPOTIFY-CLONE/spotify-screen-search.png';
import image14 from '../assets/screen ok/SPOTIFY-CLONE/screen-spotify-album-detail.png';
import image15 from '../assets/screen ok/BENCHMARK-CLONE/benchmark-clone-wellcome.png';
import image16 from '../assets/screen ok/BENCHMARK-CLONE/benchmark-clone-quiz.png';
import image17 from '../assets/screen ok/BENCHMARK-CLONE/benchmark-clone-result.png';
import image18 from '../assets/screen ok/BENCHMARK-CLONE/bench-feedback.png';
import image19 from '../assets/screen ok/NETFLIX-CLONE/netflix-clone-menu-toggle.png';
import image20 from '../assets/screen ok/NETFLIX-CLONE/netflix-clone-explore.png';
import image21 from '../assets/screen ok/NETFLIX-CLONE/netflix-clone-mini-menu.png';
import image22 from '../assets/screen ok/NETFLIX-CLONE/netflix-clone-footer.png';
import image23 from '../assets/screen ok/MAGIC TRANSPORT-BACK-END-CODE/be-code-BW.png';
import image24 from '../assets/screen ok/MAGIC TRANSPORT-BACK-END-CODE/be-code-2.png';
import image25 from '../assets/screen ok/MAGIC TRANSPORT-BACK-END-CODE/be-code-security-BW.png';
import image26 from '../assets/screen ok/MAGIC TRANSPORT-BACK-END-CODE/be-code-secret-app-config.png';
import image27 from '../assets/screen ok/E-SCHOOL-PAGE/e-school.png';
import image28 from '../assets/screen ok/E-SCHOOL-PAGE/e-school-2.png';
import image29 from '../assets/screen ok/E-SCHOOL-PAGE/e-school-sass-code.png';
import '../assets/Project.css';
function ProjectsComponent() {
  const [show, setShow] = useState(false);
  const [activeImage, setActiveImage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (imgUrl) => {
    setActiveImage(imgUrl);
    setShow(true);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const projects = [
    {
      title: 'Capstone Boot Camp',
      description:
        "Game Portal: mini e-commerce con sistema di login/autenticazione, carrello e gestione admin attraverso l'utilizzo di React e Spring Framework/Security.",
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
          icon: <FaJava style={{ color: '#007396', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>Java</span>,
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
    {
      title: 'Build week project: Spotify clone',
      description:
        'Riproduzione di Spotify nelle sue funzioni basic: player, ricerca album/artista, responsive; in collaborazione con 4 colleghi di corso.',
      images: [image10, image11, image12, image13, image14],
      technologies: [
        {
          icon: <FaHtml5 style={{ color: '#e34f26', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>HTML5</span>,
        },
        {
          icon: <FaCss3Alt style={{ color: '#1572B6', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>CSS3</span>,
        },
        {
          icon: <FaJsSquare style={{ color: '#f7df1e', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>JavaScript</span>,
        },
      ],

      repoUrl:
        'https://github.com/MatteoOrlando/BW2_team7-main/blob/main/README.md',
    },
    {
      title: 'Build week project: EPICODE benchmark clone',
      description:
        'Riproduzione del benchmark settimanale sotto il quale erano sottoposti gli studenti; in collaborazione con 3 colleghi di corso.',
      images: [image15, image16, image17, image18],
      technologies: [
        {
          icon: <FaHtml5 style={{ color: '#e34f26', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>HTML5</span>,
        },
        {
          icon: <FaCss3Alt style={{ color: '#1572B6', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>CSS3</span>,
        },
        {
          icon: <FaJsSquare style={{ color: '#f7df1e', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>JavaScript</span>,
        },
      ],

      repoUrl:
        'https://github.com/SimoneManca98796/BW-TEAM7/blob/main/README.md',
    },
    {
      title: 'Netflix clone',
      description:
        'Riproduzione di Netflix nelle sue funzioni basic: Homepage, ricerca genere/film, responsive; utilizzo delle API.',
      images: [image19, image20, image21, image22],
      technologies: [
        {
          icon: <FaHtml5 style={{ color: '#e34f26', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>HTML5</span>,
        },
        {
          icon: <FaCss3Alt style={{ color: '#1572B6', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>CSS3</span>,
        },
        {
          icon: <FaJsSquare style={{ color: '#f7df1e', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>JavaScript</span>,
        },
        {
          icon: <FaReact style={{ color: '#61DAFB', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>React</span>,
        },
      ],

      repoUrl: 'https://github.com/MatteoOrlando/epiflix-app',
    },
    {
      title: 'Build week project: Magic Transport',
      description:
        'Sistema per la gestione di una compagnia di trasporto pubblico, con sezione User ed Admin e molte altre funzioni.',
      images: [image23, image24, image25, image26],
      technologies: [
        {
          icon: <FaJava style={{ color: '#007396', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>Java</span>,
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

        {
          icon: <FaToolbox style={{ color: '#FF6C37', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>Postman</span>,
        },
      ],

      repoUrl: 'https://github.com/jurgenvrapi97/MagicTrasportSrl',
    },
    {
      title: 'E-school homepage',
      description:
        'Creazione di una pagina per una  E-school, utilizzando SASS, il grid system e pratica con layout responsive.',
      images: [image27, image28, image29],
      technologies: [
        {
          icon: <FaHtml5 style={{ color: '#e34f26', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>HTML5</span>,
        },
        {
          icon: <FaJsSquare style={{ color: '#f7df1e', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>JavaScript</span>,
        },
        {
          icon: (
            <FaBootstrap style={{ color: '#7952B3', marginRight: '5px' }} />
          ),
          name: <span style={{ fontStyle: 'italic' }}>Bootstrap</span>,
        },
        {
          icon: <FaSass style={{ color: '#CC6699', marginRight: '5px' }} />,
          name: <span style={{ fontStyle: 'italic' }}>SASS</span>,
        },
      ],
      repoUrl: 'https://github.com/MatteoOrlando/U-2-W-2-D-4',
    },

    //...//
  ];

  return (
    <div className="projects-page-container">
      <span className="bg-white-yt">
        <a
          href="https://www.youtube.com/watch?v=82l0Le8iW0s&t=13s"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} size="3x" className="pulse2" />
        </a>
        <FaHandPointRight size="2x" className="hand-icon" />
      </span>
      <span className="project-title-container">
        <img src={projectIcon} alt="Project Icon" className="project-icon" />
        <h1 className="prj-title">Progetti</h1>
      </span>
      {projects.map((project, idx) => {
        const { ref, inView } = useInView({
          triggerOnce: true,
          threshold: 0.5,
        });

        return (
          <div
            ref={ref}
            key={idx}
            className={`project-carousel-container ${inView ? 'fade-in' : ''}`}
          >
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
                <Carousel.Item key={index} onClick={() => handleShow(image)}>
                  <div
                    className="project-page-card"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                </Carousel.Item>
              ))}
            </Carousel>
            <hr className="carousel-break-line" />
          </div>
        );
      })}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton className="my-custom-modal-header">
          <Modal.Title>Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={activeImage}
            alt="Enlarged project"
            style={{ width: '100%' }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProjectsComponent;
