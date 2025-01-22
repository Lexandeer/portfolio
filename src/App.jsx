import './App.css';
import Navbar from './component/Navbar/Navbar';
import Presentation from './sections/presentation/Presentation';
import Projects from './sections/projects/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Presentation />
      <Projects />
    </>
  );
}

export default App;
