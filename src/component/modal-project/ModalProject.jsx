import { PropTypes } from 'prop-types';
import { useEffect, useState, useRef, useCallback } from 'react';
import './ModalProject.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Tags from '../tags/Tags';
import Loader from '../loader/Loader';

const ModalProject = ({
  url,
  description,
  title,
  isVisible,
  src,
  alt,
  vSrc,
  tagsData,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Utilisation de useCallback pour mémoriser la fonction toggleModal et éviter une loop de re-render
  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

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

  // On utilise le hook useRef pour créer un lien avec la modal
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutSideModal = (event) => {
      //Vérifie si le clic est en dehors de la modal
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        toggleModal();
      }
    };
    //Ajoute un eventListener sur le clic
    document.addEventListener('mousedown', handleClickOutSideModal);

    //Nettoie l'ecouteur d'évenement
    return () => {
      document.removeEventListener('mousedown', handleClickOutSideModal);
    };
  }, [toggleModal]);

  //Validation conditionnelle de props en fonctions de ce qui est passé à ModalProject
  if (!vSrc && !url) {
    console.error('erreur :Vous devez définir une url ou un lien de vidéo');
  }

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
          <img src={src} alt={alt} className="project__img-container__image" />
          <div
            className={`project__img-container__text-holder ${
              isHovered ? 'project__img-container__text-holder--hovered' : ''
            }`}
          >
            <h5 className="project__img-container__text-holder__title">
              {title}
            </h5>
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
            <div className="modal-overlay__modal" ref={modalRef}>
              <Loader isLoaded={isLoaded} />
              {url ? (
                <iframe
                  className="modal-overlay__modal__content"
                  src={url}
                  width={1200}
                  height={800}
                  allowFullScreen
                  onLoad={() => setIsLoaded(true)}
                ></iframe>
              ) : (
                <video
                  autoPlay
                  loop
                  muted
                  className="modal-overlay__modal__video"
                  onCanPlayThrough={() => setIsLoaded(true)}
                >
                  <source src={vSrc} type="video/mp4" />
                  Votre navigateur ne supporte pas la balise vidéo
                </video>
              )}
            </div>
            <button
              type="button"
              onClick={toggleModal}
              className="project__button--close"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        )}
      </article>
      <div className="project__tags-buttton">
        <div>
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
        </div>

        <div className="project__tags-buttton__container">
          {tagsData.map((tag, index) => (
            <Tags key={index} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

ModalProject.propTypes = {
  url: PropTypes.string,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  vSrc: PropTypes.string,
  isVisible: PropTypes.bool.isRequired,
  tagsData: PropTypes.array.isRequired,
};

export default ModalProject;
