import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import './ModalProject.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Tags from '../tags/Tags';

const ModalProject = ({ url }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  //Gestion de la classe no-scroll quand une modal est ouverte
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    //Nettoyage
    return () => document.body.classList.remove('no-scroll');
  }, [isModalOpen]);

  return (
    <div>
      <article className="project">
        <button
          type="button"
          onClick={toggleModal}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="project__button--open"
        ></button>
        <picture className="project__img-container">
          <img
            src="Pictures\OhMyFood-Picture.png"
            alt="Preview du site OhMyFood "
            className="project__img-container__image"
          />
          <div
            className={`project__img-container__text-holder ${
              isHovered ? 'project__img-container__text-holder--hovered' : ''
            }`}
          >
            <p
              className={`project__img-container__text-holder__text ${
                isHovered
                  ? 'project__img-container__text-holder__text--hidden'
                  : ''
              }`}
            >
              C&apos;est un site pour la reservation de menu
            </p>
          </div>
        </picture>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-overlay__modal">
              <iframe
                className="modal-overlay__modal__content"
                src={url}
                width={1200}
                height={800}
                allowFullScreen
              ></iframe>
              <button
                type="button"
                onClick={toggleModal}
                className="project__button--close"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
        )}
        <div className="project__tags-buttton">
          <button className="project__tags-buttton__button ">
            <a
              className="github-button"
              href="https://github.com/Lexandeer/Site_Ohmyfood"
              target="_blank"
            >
              GitHub
            </a>
          </button>
          <button
            type="button"
            className="project__tags-buttton__button"
            onClick={toggleModal}
          >
            Try It
          </button>
          <Tags tags={'Front-End'} />
          <Tags tags={'Scss'} />
          <Tags tags={'Animation'} />
        </div>
      </article>
    </div>
  );
};

ModalProject.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ModalProject;
