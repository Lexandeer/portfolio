import './Formation.scss';
import DoubleTitle from '../../component/DoubleTitle/DoubleTitle';
import FormationCard from '../../component/formationCard/FormationCard';
import ProgressBar from '../../component/progressBar/ProgressBar';
import { useState, useEffect } from 'react';

const Formation = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver( //intersectionObserver est une api native de JavaScript.
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting); //Set l'état avec la valeur true ou false en fonction de si .formation est visible ou non.
        });
      },
      { threshold: 0.5 } //Quand au moins 50% de l'élément est visible, entry.isIntersecting passe à true
    );

    const section = document.querySelector('.formation'); //On selectionne la section Formation
    if (section) observer.observe(section); //Si elle existe, on l'observe

    return () => observer.disconnect(); // nettoyage à la suppression du composant.
  }, []);

  return (
    <section className="formation" id="formation">
      <DoubleTitle
        primaryTitle={'Mon parcours académique et professionnel'}
        secondaryTitle={'Formations'}
      />
      <div className="formation__container">
        <div className="flex-column">
          <h4 className="formation__container__title ">Dîplome et Formation</h4>
          <div className="formation__container__cards-wrapper">
            <FormationCard
              title={'OpenClassRooms'}
              year={'2025'}
              underTitle={'Intégrateur Web'}
            />
            <ProgressBar isInView={isInView} isSpecial={true} />
          </div>
          <div className="formation__container__cards-wrapper">
            <FormationCard
              title={'Bac Professionnel'}
              year={'2022'}
              underTitle={'TISEC'}
            />
            <ProgressBar isInView={isInView} isSpecial={false} />
          </div>
          <div className="formation__container__cards-wrapper">
            <FormationCard
              title={'Bac Général'}
              year={'2020'}
              underTitle={'Economique et Social'}
            />
            <ProgressBar isInView={isInView} isSpecial={false} />
          </div>
        </div>
        <div className="formation__container__image">
          <h4 className="formation__container__title cv">Mon CV</h4>
          <img
            src="/portfolio/Pictures/CV-Picture.png"
            alt="Image de mon cv"
            className="formation__container__image__cv"
          />
          <a
            className="formation__container__image__btn"
            href="/portfolio/PDF/CV.pdf"
            download
          >
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Formation;
