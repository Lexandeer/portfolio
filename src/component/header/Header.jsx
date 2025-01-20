import './Header.scss';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__container">
          <h1 className="navbar__title">Portfolio</h1>
          <ul className="navbar__menu">
            <li className="navbar__menu-item">Présentation</li>
            <li className="navbar__menu-item">Mes Projets</li>
            <li className="navbar__menu-item">Mes Compétences</li>
            <li className="navbar__menu-item">Mon GitHub</li>
            <li className="navbar__menu-item">Mes formations</li>
            <li className="navbar__menu-item">Mes Réseaux Sociaux</li>
            <li className="navbar__menu-item">Me Contacter</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
