import './Projects.scss';

import ModalProject from '../../component/modal-project/ModalProject';
import DoubleTitle from '../../component/DoubleTitle/DoubleTitle';

const Projects = () => {
  return (
    <section className="projects-wrapper">
      <DoubleTitle
        primaryTitle={'Projets'}
        secondaryTitle={'Découvrez mes créations'}
      />
      <ModalProject url="https://lexandeer.github.io/Site_Ohmyfood/" />;{' '}
      {/* 3x ModalProject pour les 3 articles */}
    </section>
  );
};

export default Projects;
