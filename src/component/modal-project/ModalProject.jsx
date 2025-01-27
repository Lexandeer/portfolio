import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import './ModalProject.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Tags from '../tags/Tags';

const ModalProject = ({
  url,
  description,
  title,
  isVisible,
  src,
  alt,
  Vsrc,
}) => {
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

  //Validation conditionnelle de props en fonctions de ce qui est passé à ModalProject
  if (!Vsrc && !url) {
    console.error('erreur :Vous devez définir une url ou un lien de vidéo');
  }

  return (
    <>
      <article className="project">
        <button
          type="button"
          onClick={toggleModal}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="project__button--open"
        ></button>
        <picture className="project__img-container">
          <img src={src} alt={alt} className="project__img-container__image" />
          <div
            className={`project__img-container__text-holder ${
              isHovered ? 'project__img-container__text-holder--hovered' : ''
            }`}
          >
            <h4 className="project__img-container__text-holder__title">
              {title}
            </h4>
            <p
              className={`project__img-container__text-holder__text ${
                isHovered
                  ? 'project__img-container__text-holder__text--hidden'
                  : ''
              }`}
            >
              {description}
            </p>
          </div>
        </picture>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-overlay__modal">
              {url ? (
                <iframe
                  className="modal-overlay__modal__content"
                  src={url}
                  width={1200}
                  height={800}
                  allowFullScreen
                ></iframe>
              ) : (
                <video
                  autoPlay
                  loop
                  muted
                  className="modal-overlay__modal__video"
                >
                  <source src={Vsrc} type="video/mp4" />
                  Votre navigateur ne supporte pas la balise vidéo
                </video>
              )}
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
      </article>
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
          className={`project__tags-buttton__button ${isVisible ? '' : 'transparent'}`}
          onClick={toggleModal}
        >
          Try It
        </button>
        <Tags tags={'Front-End'} />
        <Tags tags={'Scss'} />
        <Tags tags={'Animation'} />
      </div>
    </>
  );
};

ModalProject.propTypes = {
  url: PropTypes.string,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  Vsrc: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
};

export default ModalProject;
