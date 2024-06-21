import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faHome } from '@fortawesome/free-solid-svg-icons';
import '../assets/NavBar.css';
import backgroundVideo from '../assets/Img/3129671-uhd_3840_2160_30fps.mp4';

function NavBarComponent() {
  return (
    <div className="fixed-navbar">
      <nav className="navbar navbar-expand-lg">
        <video autoPlay muted loop id="bg-video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  <FontAwesomeIcon icon={faHome} className="nav-icon-home" />
                </Link>
              </li>
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
