import './App.css';
import Navbar from './component/Navbar/Navbar';
import Presentation from './sections/presentation/Presentation';
import Projects from './sections/projects/Projects';
import SkillSet from './sections/skill-set/SkillSet';

function App() {
  return (
    <>
      <Navbar />
      <Presentation />
      <Projects />
      <SkillSet />
    </>
  );
}

export default App;
