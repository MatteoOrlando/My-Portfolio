import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faJsSquare,
  faBootstrap,
  faReact,
  faJava,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faLeaf,
  faFlask,
  faLightbulb,
  faUser,
  faProjectDiagram,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import '../assets/Home.css';
import profilePhoto from '../assets/Img/27828.jpg';
import backgroundVideo from '../assets/Img/3129671-uhd_3840_2160_30fps.mp4';

function Home() {
  return (
    <div className="home-container">
      <div className="Section-1">
        <section className="intro-section">
          <video autoPlay muted loop id="bg-video">
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <img
            src={profilePhoto}
            alt="Matteo Orlando"
            className="profile-photo"
          />
          <div className="intro-text">
            <h1>
              <FontAwesomeIcon icon={faUser} /> Ciao, sono Matteo
            </h1>
            <p>
              Sono un Junior Full Stack Developer e la tecnologia mi ha sempre
              affascinato per la sua capacità di trasformare le idee in realtà
              concreta.
              <br />
              Ogni progetto per me rappresenta un'avventura emozionante, un
              viaggio in cui le idee prendono forma, offrendo esperienze
              incredibilmente gratificanti.
              <br />
              Dopo anni in un settore completamente diverso, ho deciso di fare
              una svolta coraggiosa e di investire nella mia formazione,
              completando un bootcamp di sei mesi presso una nota azienda
              specializzata nel settore della formazione.
              <br />
              Questo mi ha permesso di immergermi a capofitto nel mondo dello
              sviluppo.
              <br />
              Sono motivato ad imparare ogni giorno e ad affrontare con
              entusiasmo le sfide che mi attendono, sperando di unirmi a team
              dai quali posso continuare a crescere e dove posso contribuire al
              successo dei progetti.
            </p>
          </div>
        </section>
      </div>
      <div className="Section-2">
        <section className="skills-highlights">
          <h2>
            <FontAwesomeIcon icon={faLightbulb} /> Competenze Principali
          </h2>
          <div className="skills-container">
            <div className="skill-card">
              <div className="icon-container">
                <div className="bg-white-icon"></div>
                <FontAwesomeIcon
                  icon={faHtml5}
                  style={{ color: '#e34c26' }}
                  size="3x"
                />
              </div>
              <strong>HTML5/CSS3</strong>
            </div>
            <div className="skill-card">
              <FontAwesomeIcon
                icon={faJsSquare}
                style={{ color: '#f7df1e' }}
                size="3x"
              />{' '}
              <strong>JavaScript</strong>
            </div>
            <div className="skill-card">
              <div className="icon-container">
                <div className="bg-white-icon"></div>
                <FontAwesomeIcon
                  icon={faBootstrap}
                  style={{ color: '#563d7c' }}
                  size="3x"
                />
              </div>
              <strong>Bootstrap</strong>
            </div>
            <div className="skill-card">
              <FontAwesomeIcon
                icon={faReact}
                style={{ color: '#61dafb' }}
                size="3x"
              />{' '}
              <strong>React</strong>
            </div>
            <div className="skill-card">
              <FontAwesomeIcon
                icon={faJava}
                style={{ color: '#007396' }}
                size="3x"
              />{' '}
              <strong>Java</strong>
            </div>
            <div className="skill-card">
              <FontAwesomeIcon
                icon={faLeaf}
                style={{ color: '#4CAf50' }}
                size="3x"
              />{' '}
              <strong>Spring</strong>
            </div>
            <div className="skill-card">
              <FontAwesomeIcon
                icon={faDatabase}
                style={{ color: '#4169e1' }}
                size="3x"
              />{' '}
              <strong>PostgreSQL</strong>
            </div>
            <div className="skill-card">
              <FontAwesomeIcon
                icon={faFlask}
                style={{ color: '#f5b041' }}
                size="3x"
              />{' '}
              <strong>Postman</strong>
            </div>
          </div>
        </section>
      </div>

      <div className="Section-3">
        <section className="latest-projects">
          <h2>
            <FontAwesomeIcon icon={faProjectDiagram} /> Ultimi Progetti
          </h2>
          <div className="projects-container">
            <div className="project-card">
              <img src="project1.jpg" alt="Project 1" />
              <h3>
                <FontAwesomeIcon icon={faCode} /> Progetto 1
              </h3>
              <p>Breve descrizione del progetto...</p>
            </div>
            <div className="project-card">
              <img src="project2.jpg" alt="Project 2" />
              <h3>
                <FontAwesomeIcon icon={faCode} /> Progetto 2
              </h3>
              <p>Breve descrizione del progetto...</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
