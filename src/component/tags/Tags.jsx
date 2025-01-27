import { PropTypes } from 'prop-types';
import './Tags.scss';

const Tags = ({ label }) => {
  return (
    <>
      <span className="tags">{label}</span>
    </>
  );
};

Tags.propTypes = {
  label: PropTypes.string.isRequired,
};
export default Tags;
