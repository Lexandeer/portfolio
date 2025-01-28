import SkillSetBar from '../../component/SkillSetBar/SkillSetBar';
import DoubleTitle from '../../component/DoubleTitle/DoubleTitle';
import './SkillSet.scss';

const SkillSet = () => {
  const SkillSetBar1 = [
    {
      src: 'Logos/logo-js.png',
      alt: 'Logo JavaScript',
      skillTitle: 'JavaScript',
    },
    {
      src: 'Logos/logo-react.png',
      alt: 'Logo React',
      skillTitle: 'React.js',
    },
    {
      src: 'Logos/logo-html.png',
      alt: 'Logo HTML 5',
      skillTitle: 'HTML 5',
    },
    {
      src: 'Logos/logo-css.png',
      alt: 'Logo CSS 3',
      skillTitle: 'CSS 3',
    },
  ];
  const SkillSetBar2 = [
    {
      src: 'Logos/logo-github.png',
      alt: 'logo Git-Hub',
      skillTitle: 'Git-Hub',
    },
    {
      src: 'Logos/logo-git.png',
      alt: 'Logo Git',
      skillTitle: 'Git',
    },
    {
      src: 'Logos/logo-sass.png',
      alt: 'Logo SASS',
      skillTitle: 'SASS',
    },
  ];

  return (
    <section className="skillset-wrapper" id="skillset">
      <DoubleTitle
        primaryTitle={'Les technologies qui me propulsent'}
        secondaryTitle={'Compétences'}
      />
      <div className="skillset-bar-wrapper">
        <SkillSetBar title={'Technologies'} iconesData={SkillSetBar1} />
        <SkillSetBar title={'Outils'} iconesData={SkillSetBar2} />
      </div>
    </section>
  );
};

export default SkillSet;
