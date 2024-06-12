import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faLightbulb,
  faCode,
  faDatabase,
  faPaintBrush,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';
import '../assets/Home.css';
import profilePhoto from '../assets/Img/27828.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="Section-1">
        <section className="intro-section">
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
              Junior Full Stack Developer con passione per la creazione di
              soluzioni software eleganti ed efficaci.
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
              <FontAwesomeIcon icon={faCode} /> JavaScript
            </div>
            <div className="skill-card">
              <FontAwesomeIcon icon={faPaintBrush} /> React
            </div>
            <div className="skill-card">
              <FontAwesomeIcon icon={faDatabase} /> Node.js
            </div>
            <div className="skill-card">
              <FontAwesomeIcon icon={faDatabase} /> Database Design
            </div>
            <div className="skill-card">
              <FontAwesomeIcon icon={faCode} /> CSS & HTML
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
