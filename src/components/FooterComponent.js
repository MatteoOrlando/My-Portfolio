import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import '../assets/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media">
        <span className="bg-white-lnkd">
          <a
            href="https://www.linkedin.com/in/matteo-orlando-571422299/"
            target="_blank"
            rel="noopener noreferrer"
            className="fa-linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </span>
        <a
          href="https://github.com/MatteoOrlando"
          target="_blank"
          rel="noopener noreferrer"
          className="fa-github"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <span className="bg-white-yt">
          <a
            href="https://www.youtube.com/watch?v=z2Lv98vh9Og&list=PLImOe1x9FLM2cz53FQ92CQqPUQ0g7UUAF&index=9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} size="3x" />
          </a>
        </span>
      </div>
      <p>
        <em>
          <strong>&copy; 2023-{new Date().getFullYear()} </strong>Matteo
          Orlando. Tutti i diritti riservati.
        </em>
      </p>
    </footer>
  );
}

export default Footer;
