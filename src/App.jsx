import './App.css';
import Navbar from './component/Navbar/Navbar';
import Presentation from './sections/presentation/Presentation';
import Projects from './sections/projects/Projects';
import SkillSet from './sections/skill-set/SkillSet';
import GithubStats from './sections/githubStats/GithubStats';
import Formation from './sections/formation/Formation';

function App() {
  return (
    <>
      <Navbar />
      <Presentation />
      <Projects />
      <SkillSet />
      <GithubStats />
      <Formation />
    </>
  );
}

export default App;
