import { PropTypes } from 'prop-types';

const ModalProject = ({ url }) => {
  return (
    <div className="wrapper">
      <iframe className="wrapper__modal" src={url} allowFullScreen></iframe>
    </div>
  );
};

ModalProject.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ModalProject;
