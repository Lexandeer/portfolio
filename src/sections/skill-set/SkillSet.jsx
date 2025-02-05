import SkillSetBar from '../../component/SkillSetBar/SkillSetBar';
import DoubleTitle from '../../component/DoubleTitle/DoubleTitle';
import './SkillSet.scss';

const SkillSet = () => {
  const SkillSetBar1 = [
    {
      src: '/portfolio/Logos/logo-js.png',
      alt: 'Logo JavaScript',
      skillTitle: 'JavaScript',
    },
    {
      src: '/portfolio/Logos/logo-react.png',
      alt: 'Logo React',
      skillTitle: 'React.js',
    },
    {
      src: '/portfolio/Logos/logo-html.png',
      alt: 'Logo HTML 5',
      skillTitle: 'HTML 5',
    },
    {
      src: '/portfolio/Logos/logo-css.png',
      alt: 'Logo CSS 3',
      skillTitle: 'CSS 3',
    },
  ];
  const SkillSetBar2 = [
    {
      src: '/portfolio/Logos/logo-github.png',
      alt: 'logo Git-Hub',
      skillTitle: 'Git-Hub',
    },
    {
      src: '/portfolio/Logos/logo-git.png',
      alt: 'Logo Git',
      skillTitle: 'Git',
    },
    {
      src: '/portfolio/Logos/logo-sass.png',
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
