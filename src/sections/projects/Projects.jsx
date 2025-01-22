import './Projects.scss';
import { useState } from 'react';
import ModalProject from '../../component/modal-project/ModalProject';
import DoubleTitle from '../../component/DoubleTitle/DoubleTitle';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="projects-wrapper">
      <DoubleTitle
        primaryTitle={'Projets'}
        secondaryTitle={'Découvrez mes créations'}
      />
      <div>
        <button
          type="button"
          onDoubleClick={toggleModal}
          className="open-button"
        >
          View Project
        </button>
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
      </div>
    </section>
  );
};

export default Projects;
