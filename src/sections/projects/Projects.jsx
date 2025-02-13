import './Projects.scss';
import { useEffect, useState } from 'react';
import ModalProject from '../../component/modal-project/ModalProject';
import DoubleTitle from '../../component/DoubleTitle/DoubleTitle';

const Projects = () => {
  //State qui change le lien de la vidéo en fonction de la taille d'écran utilisé.
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 530); //Si window.innerWidth renvoie une valeur plus petite que 530px alors isMobile == true.

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 530); // Grâce au useEffect, on renvoie la nouvelle valeur de la taille de l'écran si il y a eu un changement.
    };

    window.addEventListener('resize', handleResize); // On ajoute un écouteur d'évenement sur le changement de taille de l'écran.

    return () => window.removeEventListener('resize', handleResize); //On nettoie l'écouteur d'évènement.
  }, []);

  return (
    <section className="wrapper" id="projects">
      <DoubleTitle
        primaryTitle={'Découvrez mes créations'}
        secondaryTitle={'Projets'}
      />
      <div className="wrapper__projects">
        <ModalProject
          url="https://lexandeer.github.io/Site_Ohmyfood/"
          src={
            isMobile
              ? '/portfolio/Pictures/OhMyFood-mobile-picture.jpg'
              : '/portfolio/Pictures/OhMyFood-Picture.png'
          }
          title="OhMyFood"
          alt="Preview du site OhMyFood "
          description="Un site mobile-first permettant aux clients de composer leur menu gastronomique à l'avance pour réduire les temps d'attente au restaurant"
          isVisible={true}
          tagsData={['JavaScript', 'Scss']}
        />
        <ModalProject
          src={
            isMobile
              ? '/portfolio/Pictures/ArgentBank-mobile-picture.png'
              : '/portfolio/Pictures/ArgentBank-Picture.png'
          }
          vSrc={
            isMobile
              ? '/portfolio/Videos/Argent-bank-mobile-video.mp4'
              : '/portfolio/Videos/ArgentBank-video.mp4'
          }
          alt="Preview du site ArgentBank"
          title="ArgentBank"
          description="Un tableau de bord permettant aux utilisateurs d'une nouvelle banque en ligne de s'authentifier, gérer leur profil"
          isVisible={false}
          tagsData={['React', 'Redux', 'API', 'Css']}
        />
        <ModalProject
          src={
            isMobile
              ? '/portfolio/Pictures/Kasa-mobile-picture.png'
              : '/portfolio/Pictures/Kasa-Picture.png'
          }
          vSrc={
            isMobile
              ? '/portfolio/Videos/Kasa-mobile-video.mp4'
              : '/portfolio/Videos/Kasa-video.mp4'
          }
          alt="Preview du site Kasa"
          title="Kasa"
          description="Un site responsive permettant aux utilisateurs de réserver des appartements entre particuliers en ligne, avec une interface moderne et une gestion des annonces simplifiée."
          isVisible={false}
          tagsData={['React', 'Scss']}
        />
      </div>
    </section>
  );
};

export default Projects;
