import './Projects.scss';

import ModalProject from '../../component/modal-project/ModalProject';
import DoubleTitle from '../../component/DoubleTitle/DoubleTitle';

const Projects = () => {
  return (
    <section className="wrapper" id="projects">
      <DoubleTitle
        primaryTitle={'Découvrez mes créations'}
        secondaryTitle={'Projets'}
      />
      <div className="wrapper__projects">
        <ModalProject
          url="https://lexandeer.github.io/Site_Ohmyfood/"
          src="Pictures\OhMyFood-Picture.png"
          title="OhMyFood"
          alt="Preview du site OhMyFood "
          description="Un site mobile-first permettant aux clients de composer leur menu gastronomique à l'avance pour réduire les temps d'attente au restaurant"
          isVisible={true}
          tagsData={['JavaScript', 'Scss']}
        />
        <ModalProject
          src="Pictures\ArgentBank-Picture.png"
          vSrc="Videos/ArgentBank-video.mp4"
          alt="Preview du site ArgentBank"
          title="ArgentBank"
          description="Un tableau de bord permettant aux utilisateurs d'une nouvelle banque en ligne de s'authentifier, gérer leur profil"
          isVisible={false}
          tagsData={['React', 'Redux', 'API', 'Css']}
        />
        <ModalProject
          src="Pictures\Kasa-Picture.png"
          vSrc="Videos/Kasa-video.mp4"
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
