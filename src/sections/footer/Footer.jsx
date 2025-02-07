import './Footer.scss';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [isGrey, setIsGrey] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === '/portfolio/mentions-legales' ||
      location.pathname === '/portfolio/politique-confidentialite'
    ) {
      setIsGrey(true);
    } else if (location.pathname === '/portfolio') {
      setIsGrey(false);
    }
  }, [location.pathname]);

  return (
    <footer className={`footer ${isGrey ? 'grey' : ''}`}>
      <div className="footer__container">
        <div className="footer__container__icones">
          <a
            href="https://www.linkedin.com/in/alexandre-miquel-8558521b0/"
            target="#_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Lexandeer" target="#_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="footer__container__links">
          <Link to="/portfolio/mentions-legales">Mentions légales</Link>
          <Link to="/portfolio/politique-confidentialite">
            Politique de confidentialité
          </Link>
        </div>
        <p>© 2025 Alexandre MIQUEL, Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
