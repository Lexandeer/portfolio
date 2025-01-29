import './FormationCard.scss';
import { PropTypes } from 'prop-types';

const FormationCard = ({ title, year }) => {
  return (
    <div className="formation-card">
      <h5 className="formation-card__title">{title}</h5>
      <span className="formation-card__year">{year}</span>
    </div>
  );
};

FormationCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default FormationCard;
