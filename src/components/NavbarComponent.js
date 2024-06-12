import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/NavBar.css';
import {
  faLaptopCode,
  faUser,
  faEnvelope,
  faTools,
  faBars,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

function NavBarComponent() {
  return (
    <div className="fixed-navbar">
      <nav className="navbar navbar-expand-lg">
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
                <Link className="nav-link" to="/projects">
                  <FontAwesomeIcon icon={faLaptopCode} className="nav-icon" />
                  <strong>Progetti</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skills">
                  <FontAwesomeIcon icon={faTools} className="nav-icon" />
                  <strong>Competenze</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  <FontAwesomeIcon icon={faHome} className="nav-icon-home" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
                  Contatti
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-me">
                  <FontAwesomeIcon icon={faUser} className="nav-icon" />
                  About Me
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
