import './ProgressBar.scss';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ProgressBar = ({ isInView, isSpecial }) => {
  return (
    <div
      className={`progress-bar ${isSpecial ? 'progress-bar--special' : 'progress-bar--normal'} ${isInView ? 'progress-bar--active' : ''}`}
    >
      <div
        className={`progress-bar__filler ${isSpecial ? 'progress-bar__filler--special' : 'progress-bar__filler--normal'}`}
      />
      {!isSpecial && (
        <div className="progress-bar__icon">
          <FontAwesomeIcon icon={faCheck} beat />
        </div>
      )}
    </div>
  );
};

ProgressBar.propTypes = {
  isInView: PropTypes.bool.isRequired,
  isSpecial: PropTypes.bool.isRequired,
};

export default ProgressBar;
