import './Formation.scss';
import DoubleTitle from '../../component/DoubleTitle/DoubleTitle';
import FormationCard from '../../component/formationCard/FormationCard';

const Formation = () => {
  return (
    <section className="formation-container">
      <DoubleTitle
        primaryTitle={'Mon parcours académique et professionnel'}
        secondaryTitle={'Formations'}
      />
      <div className="formation-container__cards-wrapper">
        <FormationCard title={'Bac'} year={'2020'} />
      </div>
    </section>
  );
};

export default Formation;
