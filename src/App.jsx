import './App.css';
import Presentation from './sections/presentation/Presentation';
import Projects from './sections/projects/Projects';
import SkillSet from './sections/skill-set/SkillSet';
import GithubStats from './sections/githubStats/GithubStats';
import Formation from './sections/formation/Formation';
import Header from './sections/header/Header';
import Footer from './sections/footer/Footer';
import Contact from './sections/contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Projects />
      <SkillSet />
      <GithubStats />
      <Formation />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
