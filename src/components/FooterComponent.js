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
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="fa-linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </span>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="fa-github"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <span className="bg-white-yt">
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="fa-twitter"
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
