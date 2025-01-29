import './Navbar.scss';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__container">
          <h1 className="navbar__title">Portfolio</h1>
          <ul className="navbar__menu">
            <li className="navbar__menu-item">
              <a href="#presentation">Présentation</a>
            </li>
            <li className="navbar__menu-item">
              <a href="#projects">Projets</a>
            </li>
            <li className="navbar__menu-item">
              <a href="#skillset">Compétences</a>
            </li>
            <li className="navbar__menu-item">
              <a href="#github">GitHub</a>
            </li>
            <li className="navbar__menu-item">
              <a href="#formation">formations</a>
            </li>
            <li className="navbar__menu-item">Réseaux Sociaux</li>
            <li className="navbar__menu-item">Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
