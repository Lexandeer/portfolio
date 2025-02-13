import Projects from '../../sections/projects/Projects';
import SkillSet from '../../sections/skill-set/SkillSet';
import GithubStats from '../../sections/githubStats/GithubStats';
import Formation from '../../sections/formation/Formation';
import Contact from '../../sections/contact/Contact';
import Presentation from '../../sections/presentation/Presentation';

const Portfolio = () => {
  return (
    <main>
      <Presentation />
      <Projects />
      <SkillSet />
      <GithubStats />
      <Formation />
      <Contact />
    </main>
  );
};

export default Portfolio;
