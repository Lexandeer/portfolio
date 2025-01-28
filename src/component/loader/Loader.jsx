import { PropTypes } from 'prop-types';
import './Loader.scss';

const Loader = ({ isLoaded }) => {
  // Affiche le loader uniquement si isLoading est vrai
  return !isLoaded ? (
    <div className="loader-container">
      <div className="loader-container__loader"></div>
    </div>
  ) : null; // Retourne null si isLoading est faux
};

Loader.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
};

export default Loader;
