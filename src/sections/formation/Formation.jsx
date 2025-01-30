import './Formation.scss';
import DoubleTitle from '../../component/DoubleTitle/DoubleTitle';
import FormationCard from '../../component/formationCard/FormationCard';
import ProgressBar from '../../component/progressBar/ProgressBar';
import { useState, useEffect } from 'react';

const Formation = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector('.formation');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="formation">
      <DoubleTitle
        primaryTitle={'Mon parcours académique et professionnel'}
        secondaryTitle={'Formations'}
      />
      <div className="formation__container">
        <h4 className="formation__container__title">Dîplome et Formation</h4>
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
    </section>
  );
};

export default Formation;
