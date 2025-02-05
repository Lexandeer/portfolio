import './Navbar.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === '/mentions-legales' ||
      location.pathname === '/politique-confidentialite'
    ) {
      setIsShown(true);
    } else location.pathname === '/portfolio';
    {
      setIsShown(false);
    }
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Bouton hamburger, visible uniquement en mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`navbar__toggle ${isOpen ? 'open' : ''}`}
          aria-label="Menu"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
        <div className="navbar__title">
          <Link to={'/portfolio'}>
            <h1>Portfolio</h1>
          </Link>
        </div>
        {/* Menu, toujours horizontal sauf en mobile */}
        <ul
          className={`navbar__menu ${isOpen ? 'active' : ''} ${isShown ? 'hide' : ''}`}
        >
          <li className="navbar__menu-item">
            <a href="#presentation" onClick={() => setIsOpen(false)}>
              Présentation
            </a>
          </li>
          <li className="navbar__menu-item">
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projets
            </a>
          </li>
          <li className="navbar__menu-item">
            <a href="#skillset" onClick={() => setIsOpen(false)}>
              Compétences
            </a>
          </li>
          <li className="navbar__menu-item">
            <a href="#github" onClick={() => setIsOpen(false)}>
              GitHub
            </a>
          </li>
          <li className="navbar__menu-item">
            <a href="#formation" onClick={() => setIsOpen(false)}>
              Formations
            </a>
          </li>
          <li className="navbar__menu-item">
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
