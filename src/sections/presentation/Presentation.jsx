import './Presentation.scss';
import DoubleTitle from '../../component/DoubleTitle/DoubleTitle';

const Presentation = () => {
  return (
    <section className="intro">
      <DoubleTitle
        primaryTitle={'Présentation'}
        secondaryTitle={'À propos de moi'}
      />
      <article className="intro__presentation">
        <div className="intro__presentation__block">
          <p className="intro__presentation__block__text">
            <strong>En fin de formation en développement front-end</strong> chez
            OpenClassrooms, j&apos;ai acquis des compétences solides en{' '}
            <strong>React, HTML, CSS</strong> et <strong>JavaScript</strong>.
            <br />
            Passionné par la création d&apos;interfaces modernes et intuitives,
            j&apos;ai mené plusieurs projets pratiques axés sur
            l&apos;expérience utilisateur et les performances web.
            <br />
            Curieux et motivé, je suis prêt à transformer cette passion en une
            carrière enrichissante.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Presentation;
