import { PropTypes } from 'prop-types';

const ModalProject = ({ url }) => {
  return (
    <div className="wrapper">
      <iframe
        className="wrapper__modal"
        src={url}
        width={1200}
        height={800}
        allowFullScreen
      ></iframe>
    </div>
  );
};

ModalProject.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ModalProject;
