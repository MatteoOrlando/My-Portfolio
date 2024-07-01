import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faLeaf,
  faFlask,
  faCogs,
  faLightbulb,
  faProjectDiagram,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faJsSquare,
  faBootstrap,
  faReact,
  faJava,
} from '@fortawesome/free-brands-svg-icons';
import '../assets/Home.css';
import profilePhoto from '../assets/Img/27828-removebg-preview.png';
import backgroundVideo from '../assets/Img/3129671-uhd_3840_2160_30fps.mp4';

function Home() {
  /*const projectRef1 = useRef(null);
  const projectRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('run-animation');
          }
        });
      },
      { rootMargin: '0px', threshold: 0.1 }
    );

    [projectRef1, projectRef2].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [projectRef1, projectRef2].forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);*/

  return (
    <div className="home-container">
      <section className="intro-section">
        <video autoPlay muted loop id="bg-video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <img
          src={profilePhoto}
          alt="Matteo Orlando"
          className="profile-photo"
        />
        <div className="intro-text">
          <h1 className="hello">
            <FontAwesomeIcon icon={faLightbulb} className="animated-icon" />
            Ciao, sono Matteo!
          </h1>
          <p>
            Sono un Junior Full Stack Developer e la tecnologia mi ha sempre
            affascinato per la sua capacità di trasformare le idee in realtà
            concreta.
            <br />
            Ogni argomento e/o progetto nuovo per me, rappresenta uno stimolo
            fantastico, un idea che prende vita e forma, un'esperienza
            gratificante.
            <br />
            Pur avendo un background professionale formato in un settore
            completamente diverso da quello del coding e dello sviluppo, ho
            deciso di fare una svolta coraggiosa. <br />
            Decidendo di investire significativamente nella mia formazione,
            questo percorso mi ha portato a completare un intensivo bootcamp
            della durata di sei mesi presso una nota e-school specializzata nel
            settore, e questo mi ha permesso di immergermi a capofitto nel mondo
            dello sviluppo e apprezzarne fortemente gli aspetti e soprattutto le
            potenzialitá.
            <br />
            Sono motivato ad imparare ogni giorno e ad affrontare con entusiasmo
            le sfide che mi attendono, sperando di unirmi a team dai quali posso
            continuare ad assorbire conoscenza e crescere professionalmente ed
            umanamente, e dare il mio contributo al raggiungimento
            dell'obiettivo.
          </p>
        </div>
      </section>
      <div className="container-sub-home">
        <div className="row">
          <div className="col-md-4">
            <section className="skills-highlights">
              <h2 className="H2-skill">
                <FontAwesomeIcon icon={faCogs} /> Competenze Principali
              </h2>
              <Carousel
                className="carosello-home"
                interval={2000}
                indicators={true}
                pause="hover"
              >
                <Carousel.Item>
                  <div className="skill-card">
                    <FontAwesomeIcon
                      icon={faHtml5}
                      style={{ color: '#e34c26' }}
                      size="3x"
                    />
                    <strong>HTML5/CSS3</strong>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="skill-card">
                    <FontAwesomeIcon
                      icon={faJsSquare}
                      style={{ color: '#f7df1e' }}
                      size="3x"
                    />
                    <strong>JavaScript</strong>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="skill-card">
                    <FontAwesomeIcon
                      icon={faBootstrap}
                      style={{ color: '#563d7c' }}
                      size="3x"
                    />
                    <strong>Bootstrap</strong>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="skill-card">
                    <FontAwesomeIcon
                      icon={faReact}
                      style={{ color: '#61dafb' }}
                      size="3x"
                    />
                    <strong>React</strong>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="skill-card">
                    <FontAwesomeIcon
                      icon={faJava}
                      style={{ color: '#007396' }}
                      size="3x"
                    />
                    <strong>Java</strong>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="skill-card">
                    <FontAwesomeIcon
                      icon={faLeaf}
                      style={{ color: '#4CAf50' }}
                      size="3x"
                    />
                    <strong>Spring</strong>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="skill-card">
                    <FontAwesomeIcon
                      icon={faDatabase}
                      style={{ color: '#4169e1' }}
                      size="3x"
                    />
                    <strong>PostgreSQL</strong>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="skill-card">
                    <FontAwesomeIcon
                      icon={faFlask}
                      style={{ color: '#f5b041' }}
                      size="3x"
                    />
                    <strong>Postman</strong>
                  </div>
                </Carousel.Item>
              </Carousel>
            </section>
          </div>
          <div className="col-md-8">
            <section className="latest-projects">
              <h2 className="H2-project">
                <FontAwesomeIcon icon={faProjectDiagram} /> Last Projects
              </h2>
              <div className="projects-container">
                <div className="animated-border">
                  <div className="project-card">
                    <span className="info-prj">
                      <h3>
                        <FontAwesomeIcon icon={faStar} className="star" />
                        Capstone Project
                      </h3>
                    </span>
                  </div>
                </div>
                <div className="animated-border">
                  <div className="project-card-2">
                    <span className="info-prj-2">
                      <h3>
                        <FontAwesomeIcon icon={faStar} className="star" />
                        Spotify Clone
                      </h3>
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
