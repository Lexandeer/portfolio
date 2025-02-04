import './GithubStats.scss';
import DoubleTitle from '../../component/DoubleTitle/DoubleTitle';

const GithubStats = () => {
  return (
    <section className="stat-container" id="github">
      <DoubleTitle
        primaryTitle={'Mes contributions et mon activité sur GitHub'}
        secondaryTitle={'GitHub'}
      />

      <div className="stat-container__card">
        <h4 className="stat-container__card__title">GitHub Statistics</h4>
        <div className="stat-container__card__stat">
          <a
            href="https://github.com/Lexandeer?tab=overview&from=2025-01-01&to=2025-01-29"
            target="#_blank"
          >
            <img
              className="stat-container__card__stat__img"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Lexandeer&theme=dark&card_width=400&hide_title=true "
              alt="Top Languages"
            />
          </a>
        </div>
        <div className="stat-container__card__stat">
          <a
            href="https://github.com/Lexandeer?tab=overview&from=2025-01-01&to=2025-01-29"
            target="#_blank"
          >
            <img
              className="stat-container__card__stat__img-stat"
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Lexandeer&theme=dark&"
              alt="GitHub Profile Summary"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
