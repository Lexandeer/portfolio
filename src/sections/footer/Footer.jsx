import './Footer.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
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
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/politique-confidentialite">
            Politique de confidentialité
          </Link>
        </div>
        <p>© 2025 Alexandre MIQUEL, Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
