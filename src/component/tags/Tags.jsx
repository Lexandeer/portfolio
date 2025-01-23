import { PropTypes } from 'prop-types';
import './Tags.scss';

const Tags = ({ tags }) => {
  return (
    <>
      <span className="tags">{tags}</span>
    </>
  );
};

Tags.propTypes = {
  tags: PropTypes.string.isRequired,
};
export default Tags;
