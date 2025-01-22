import { PropTypes } from 'prop-types';
import './DoubleTitle.scss';

const DoubleTitle = ({ primaryTitle, secondaryTitle }) => {
  return (
    <div className="wrapper">
      <h2 className="wrapper__title">
        {primaryTitle}
        <span className="wrapper__title--see-through">{secondaryTitle}</span>
      </h2>
    </div>
  );
};

DoubleTitle.propTypes = {
  primaryTitle: PropTypes.string.isRequired,
  secondaryTitle: PropTypes.string.isRequired,
};
export default DoubleTitle;
