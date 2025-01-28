import './SkillSetBar.scss';
import { PropTypes } from 'prop-types';

const SkillSetBar = ({ title, iconesData }) => {
  return (
    <div className="skillsetbar-container">
      <h4 className="skillsetbar-container__main-title">{title}</h4>
      <div className="skillsetbar-container__skills">
        {iconesData.map((icone, index) => {
          return (
            <div
              className="skillsetbar-container__skills__wrapper"
              key={`${index}-${icone.src}`}
            >
              <img
                className="skillsetbar-container__skills__wrapper__image"
                src={icone.src}
                alt={icone.alt}
              />
              <span className="skillsetbar-container__skills__wrapper__title">
                {icone.skillTitle}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

SkillSetBar.propTypes = {
  title: PropTypes.string.isRequired,
  iconesData: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      skillTitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SkillSetBar;
