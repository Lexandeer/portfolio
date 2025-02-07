import './Navbar.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHide, setIsHide] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === '/portfolio/mentions-legales' ||
      location.pathname === '/portfolio/politique-confidentialite'
    ) {
      setIsHide(true);
      setIsAnimated(true);
    } else if (location.pathname === '/portfolio') {
      setIsHide(false);
      setIsAnimated(false);
    }
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Bouton hamburger, visible uniquement en mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`navbar__toggle ${isOpen ? 'open' : ''} ${isHide ? 'hide' : ''}`}
          aria-label="Menu"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
        <div className={`navbar__title ${isAnimated ? 'animation-title' : ''}`}>
          <Link to={'/portfolio'}>
            <h1>Portfolio</h1>
          </Link>
        </div>
        {/* Menu, toujours horizontal sauf en mobile */}
        <ul
          className={`navbar__menu ${isOpen ? 'active' : ''} ${isHide ? 'hide' : ''}`}
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
