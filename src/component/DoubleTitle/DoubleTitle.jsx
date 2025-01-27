import { PropTypes } from 'prop-types';
import './DoubleTitle.scss';

const DoubleTitle = ({ primaryTitle, secondaryTitle, id }) => {
  return (
    <div className="wrapper">
      <h2 className="wrapper__title" id={id}>
        {primaryTitle}
        <span className="wrapper__title--see-through">{secondaryTitle}</span>
      </h2>
    </div>
  );
};

DoubleTitle.propTypes = {
  primaryTitle: PropTypes.string.isRequired,
  secondaryTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default DoubleTitle;
