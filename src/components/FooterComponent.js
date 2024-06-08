import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Mio Portfolio
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Chi Sono
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                Competenze
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Progetti
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contatti
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
