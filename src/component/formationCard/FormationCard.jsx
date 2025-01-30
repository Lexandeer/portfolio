import './FormationCard.scss';
import { PropTypes } from 'prop-types';

const FormationCard = ({ title, year, underTitle }) => {
  return (
    <div className="container-formation">
      <div className="container-formation__card">
        <h5 className="container-formation__card__title">{title}</h5>
        <span className="container-formation__card__year">{year}</span>
        <span className="container-formation__card__under-title">
          {underTitle}
        </span>
      </div>
    </div>
  );
};

FormationCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  underTitle: PropTypes.string.isRequired,
};

export default FormationCard;
