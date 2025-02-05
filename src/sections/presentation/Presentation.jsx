import './Presentation.scss';
import DoubleTitle from '../../component/DoubleTitle/DoubleTitle';

const Presentation = () => {
  return (
    <section className="intro" id="presentation">
      <DoubleTitle
        primaryTitle={'À propos de moi'}
        secondaryTitle={'Présentation'}
      />
      <article className="intro__presentation">
        <div className="intro__presentation__block">
          <div className="intro__presentation__block__profile">
            <img
              src="/portfolio/Pictures/Profile-picture.png"
              alt="Photo de profile"
              className="intro__presentation__block__profile__picture"
            />
          </div>
          <p className="intro__presentation__block__text">
            <strong>En fin de formation en développement front-end</strong> chez
            OpenClassrooms, j&apos;ai acquis des compétences solides en{' '}
            <strong>React, HTML, CSS</strong> et <strong>JavaScript</strong>.
            <br />
            <br />
            <strong>Passionné</strong> par la création d&apos;interfaces
            modernes et intuitives, j&apos;ai mené plusieurs projets pratiques
            axés sur l&apos;expérience utilisateur et les performances web.
            <br />
            <br />
            <strong>Curieux et motivé</strong>, je suis prêt à transformer cette
            passion en une carrière enrichissante.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Presentation;
