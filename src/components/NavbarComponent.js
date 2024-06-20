import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faBars,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import '../assets/NavBar.css';
import backgroundVideo from '../assets/Img/3129671-uhd_3840_2160_30fps.mp4';

function NavBarComponent() {
  return (
    <div className="fixed-navbar">
      <nav className="navbar navbar-expand-lg">
        <video autoPlay muted loop id="bg-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  <FontAwesomeIcon icon={faHome} className="nav-icon-home" />
                </Link>
              </li>{' '}
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  <FontAwesomeIcon icon={faLaptopCode} className="nav-icon" />
                  <strong>Progetti</strong>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBarComponent;
