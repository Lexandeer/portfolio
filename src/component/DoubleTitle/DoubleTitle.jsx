import { PropTypes } from 'prop-types';
import './DoubleTitle.scss';

const DoubleTitle = ({ primaryTitle, secondaryTitle }) => {
  return (
    <div className="title-container">
      <h2 className="title-container__title">
        {primaryTitle}
        <span className="title-container__title--see-through">
          {secondaryTitle}
        </span>
      </h2>
    </div>
  );
};

DoubleTitle.propTypes = {
  primaryTitle: PropTypes.string.isRequired,
  secondaryTitle: PropTypes.string.isRequired,
};
export default DoubleTitle;
