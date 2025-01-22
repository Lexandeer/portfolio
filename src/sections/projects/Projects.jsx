import './Projects.scss';
import { useState } from 'react';
import ModalProject from '../../component/modal-project/ModalProject';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section>
      <h2>Projets</h2>
      <h3>Découvrez mes créations</h3>
      <button onClick={toggleModal}>View Project</button>
      {isModalOpen && (
        <div className="overlay">
          <div className="overlay__modal">
            <button
              type="button"
              onClick={toggleModal}
              className="overlay__modal--close"
            >
              close
            </button>
            <ModalProject url="https://lexandeer.github.io/Site_Ohmyfood/" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
