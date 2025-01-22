import './Presentation.scss';

const Presentation = () => {
  return (
    <section className="intro-wrapper">
      <article>
        <div className="title-wrapper">
          <h2 className="title-wrapper__title">Présentation</h2>
          <h3 className="title-wrapper__title--see-through">À propos de moi</h3>
        </div>
        <div className="intro-wrapper__block">
          <p className="intro-wrapper__block__text">
            <strong>
              Actuellement en fin de formation chez OpenClassrooms
            </strong>{' '}
            en tant que développeur front-end, j&#39;ai acquis une solide
            maîtrise des technologies essentielles du web, notamment{' '}
            <strong>HTML, CSS, JavaScript</strong>, et des frameworks modernes
            comme <strong>React</strong>. Tout au long de mon parcours, j&#39;ai
            mené à bien plusieurs projets pratiques, ce qui m&#39;a permis de
            développer mes compétences techniques tout en appliquant les bonnes
            pratiques en matière de responsive design, d&#39;accessibilité, et
            d&#39;optimisation des performances.
          </p>
          <br />
          <p className="intro-wrapper__block__text">
            <strong>Passionné par le développement</strong> d&#39;interfaces
            utilisateurs intuitives et dynamiques, je suis motivé par l&#39;idée
            de transformer des idées en expériences web engageantes. Prêt à
            relever de nouveaux défis, je suis{' '}
            <strong>enthousiaste à l&#39;idée de continuer à apprendre</strong>
            et de contribuer à des projets innovants.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Presentation;
